let isPenguinMod = false, inCredits = false;
let currentTag = "all", downloadType = "download";
let compress = false, eraseDeprecation = false;
let galleryData = {}, pins = [];

/* Storage */
function getCleanStorage() {
  localStorage.removeItem("extensions.turbowarp.org/local-storage:SP.extension.gal.DATA"); // remnant of the past
  let store = {};
  try {
    store = JSON.parse(localStorage.getItem("SPgalleryInfo"));
    if (store === null) store = {};
  } catch {
    console.warn("Removing Malformed LocalStorage");
    localStorage.removeItem("SPgalleryInfo");
  }
  currentTag = store.tag || "all";
  downloadType = store.downloadType || "download";
  compress = store.compress ?? false;
  eraseDeprecation = store.eraseDeprecation ?? false;
  if (store.pinnedExts && Array.isArray(store.pinnedExts)) pins = store.pinnedExts;
}

function updateStorage() {
  localStorage.setItem("SPgalleryInfo", JSON.stringify({
    tag: currentTag, pinnedExts: pins,
    downloadType, compress, eraseDeprecation
  }));
}

/* Button Functionality */
function addBtnBehaviours() {
  /* Donate Button */
  const donateBtn = document.querySelector(`button[class="donateBtn"]`);
  donateBtn.addEventListener("click", (e) => {
    window.open("https://www.paypal.com/donate/?business=AGLGGVQWUBUFE&no_recurring=0&item_name=Help+pay+for+my+College+Education&currency_code=CAD", "_blank");
    e.stopImmediatePropagation();
  });

  const navBtns = document.querySelectorAll(`img[class="navImg"]`);
  /* Settings Button */
  const extDwnload = navBtns[0];
  extDwnload.addEventListener("click", (e) => {
    openSettingsPanel();
    e.stopImmediatePropagation();
  });

  /* Contributers Button */
  const toContribs = navBtns[1];
  toContribs.addEventListener("click", (e) => {
    inCredits = !inCredits;
    if (inCredits) displayContributors();
    else displayExts(filterExts(galleryData.extensions));
    e.stopImmediatePropagation();
  });

  /* Tags */
  const tags = document.querySelectorAll(`div[class="tag"]`);
  tags.forEach((item) => {
    if (currentTag === item.id) {
      item.style.backgroundColor = "#003cff";
      item.style.borderColor = "#001fff";
    }
    item.addEventListener("click", (e) => {
      inCredits = false;
      tags.forEach((i) => i.setAttribute("style", ""));
      item.style.backgroundColor = "#003cff";
      item.style.borderColor = "#001fff";

      currentTag = item.id;
      let s = new URLSearchParams(location.search);
      s.set("tag", item.id);
      history.replaceState("", "", "?" + s.toString());
      if (currentTag === "search") openSearch();
      else {
        displayExts(filterExts(galleryData.extensions));
        updateStorage();
      }
      e.stopImmediatePropagation();
    });
  });

  if (isPenguinMod) {
    const logo = document.querySelector(`img[class="toHost"]`);
    logo.src = "Gallery%20Files/main-assets/logo-PM.svg";
    logo.setAttribute("onclick", "window.open('https://penguinmod.com/')");
  }
}

/* GUI Utils */
function genTag(type) {
  const tag = document.createElement("img");
  tag.classList.add("ext-tag");
  tag.setAttribute("rng", Math.random() * 1.5 + 1.5);
  tag.src = `Gallery%20Files/main-assets/ext-${type}.svg`;
  return tag;
}

function genPin(extName) {
  const pin = document.createElement("img");
  pin.classList.add("ext-pin");
  pin.src = `Gallery%20Files/main-assets/pin-${pins.includes(extName)}.svg`;
  pin.style.opacity = "0";
  pin.onload = () => {
    if (pin.getAttribute("alrExists")) return;
    pin.animate([{ opacity: "0" }, { opacity: "1" }], { duration: 300, easing: "ease-in-out" });
    pin.style.opacity = "1";
    pin.setAttribute("alrExists", "true");
  };
  pin.addEventListener("click", (e) => {
    const ind = pins.indexOf(extName);
    if (ind > -1) pins.splice(ind, 1);
    else pins.push(extName);
    pin.src = `Gallery%20Files/main-assets/pin-${pins.includes(extName)}.svg`;
    updateStorage();
    e.stopImmediatePropagation();
  });
  return pin;
}

function genText(type, text) {
  if (!text || !type) return;
  const desc = document.createElement("div");
  desc.classList.add("text-descriptor");
  desc.setAttribute("type", type);
  desc.textContent = text;
  if (type === "center-notif") {
    desc.style.top = "50%";
    desc.style.fontSize = "25px";
  }

  document.body.appendChild(desc);
  const animation = desc.animate([{ left: desc.style.left }, { left: "50%" }], { duration: 400, easing: "ease-in-out" });
  animation.onfinish = () => desc.style.left = "50%";
}

function removeText() {
  const elements = document.querySelectorAll(".text-descriptor");
  elements.forEach((element) => {
    const type = element.getAttribute("type");
    const animation = element.animate(
      [{ left: "50%" }, { left: "150%" }], { duration: 400, easing: "ease-in-out" }
    );
    animation.onfinish = () => element.remove();
  });
}

/* Internal Utils */
function filterExts(json, searchQ) {
  delete json.Example;
  const entries = Object.entries(json);
  let newEntries = [];
  if (currentTag === "search") {
    if (searchQ === undefined) searchQ = "";
    searchQ = searchQ.toLowerCase();
    // order by query
    entries.forEach((entry) => {
      const extData = entry[1];
      if (
        entry[0].toLowerCase().includes(searchQ.replaceAll(" ", "-")) ||
        extData.desc.toLowerCase().includes(searchQ) || extData.creator.includes(searchQ)
      ) newEntries.push(entry);
    });
    if (newEntries.length === 0) return {"override404": { url: "", credits: "", date: "" }};
    else return Object.fromEntries(newEntries);
  } else if (currentTag === "all") {
    // order by newest => updated => old, hide deprecated
    entries.forEach((entry) => {
      if (entry[1].status === "update") newEntries.unshift(entry);
    });
    entries.forEach((entry) => {
      if (entry[1].status === "new") newEntries.unshift(entry);
      else if (!entry[1].isDeprecated) newEntries.push(entry);
    });
  } else {
    // order by tag
    entries.forEach((entry) => {
      if (entry[1].tags.includes(currentTag)) newEntries.push(entry);
    });
  }
  // finally order by pins
  const pinOrder = [];
  newEntries.forEach((entry) => {
    if (pins.includes(entry[0])) pinOrder.unshift(entry);
    else pinOrder.push(entry);
  });
  return Object.fromEntries(pinOrder);
}

async function downloadExt(name, data) {
  if (isPenguinMod) {
    const messager = window.opener || window.parent;
    if (!messager) return alert("Failed to request to PenguinMod!");
    messager.postMessage({
      loadExt: `https://sharkpools-extensions.vercel.app/${data.url}`
    }, "https://studio.penguinmod.com");
    genText("center-notif", "Copied to PenguinMod! Check the Editor");
    return;
  }

  if (downloadType === "url") {
    window.open(data.url);
    return;
  }

  let extCode = await (await fetch(data.url)).text();
  if (eraseDeprecation) {
    const regex = new RegExp(`\\s*/\\* Deprecation Marker \\*/[\\s\\S]*?/\\* Marker End \\*/`, "g");
    extCode = extCode.replace(regex, "").replace(/\n{3,}/g, "\n\n");
  }
  if (compress) {
    // compress extCode
    name += "-minified";
    try {
      extCode = (await Terser.minify(extCode)).code;
    } catch(e) {
      console.warn("Couldnt Compress Extension: " + name, e);
    }
  }

  if (downloadType === "clipboard") {
    navigator.clipboard.writeText(extCode)
      .then(() => genText("center-notif", "Copied to Clipboard!"))
      .catch(() => window.open(data.url));
  } else {
    const url = URL.createObjectURL(new Blob([extCode]));
    const a = document.createElement("a");
    a.href = url;
    a.download = name + ".js";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }
}

/* Settings Panel */
function genInputBox(opts, message) {
  const container = document.createElement("div");
  container.classList.add("setting-div");

  opts.forEach((input) => {
    const box = document.createElement("input");
    box.type = "checkbox";
    box.checked = input.checked;

    const label = document.createElement("pre");
    label.textContent = input.text;

    const div = document.createElement("div");
    div.append(box, label);
    div.addEventListener("click", (e) => input.func(e, box));
    container.appendChild(div);
  });
  if (message) {
    const msg = document.createElement("div");
    msg.classList.add("desc-msg");
    msg.textContent = message;
    container.append(msg);
  }
  return container;
}

function openSettingsPanel() {
  const panelContainer = document.createElement("div");
  panelContainer.classList.add("search-div");

  const text = document.createElement("div");
  text.classList.add("panel-txt");
  text.textContent = "Export Settings";

  const bg = document.createElement("img");
  bg.classList.add("search-ui");
  bg.src = "Gallery%20Files/main-assets/panel-bg.svg";
  bg.setAttribute("draggable", "false");

  const downloadTypeFunc = (e, box, type) => {
    downloadType = type;
    if (e.target !== box) box.checked = !box.checked;
    const otherBoxes = box.parentNode.parentNode.querySelectorAll("input");
    otherBoxes.forEach((checkbox) => {
      if (checkbox !== box) checkbox.checked = false;
    });
  };
  const downloadTypeBox = genInputBox(
    [
      {
        checked: downloadType === "download", text: "Download Extensions to My Device",
        func: (e, box) => downloadTypeFunc(e, box, "download")
      },
      {
        checked: downloadType === "clipboard", text: "Copy Extensions to Clipboard",
        func: (e, box) => downloadTypeFunc(e, box, "clipboard")
      },
      {
        checked: downloadType === "url", text: "Open Extensions in new Tabs",
        func: (e, box) => downloadTypeFunc(e, box, "url")
      }
    ]
  );
  const deprecationBox = genInputBox(
    [{
      checked: eraseDeprecation, text: "Remove Deprecated Code",
      func: (e, box) => {
        if (e.target !== box) box.checked = !box.checked;
        eraseDeprecation = box.checked;
      }
    }],
    "Removes unused extension code. Lowers the file size but breaks compatibility with older versions"
  );
  const compressBox = genInputBox(
    [{
      checked: compress, text: "Compress Code",
      func: (e, box) => {
        if (e.target !== box) box.checked = !box.checked;
        compress = box.checked;
      }
    }],
    "Compresses extension code. Lowers the file size"
  );

  const settingHolder = document.createElement("div");
  settingHolder.classList.add("setting-holder");
  settingHolder.append(downloadTypeBox, deprecationBox, compressBox);

  const leave = document.createElement("img");
  leave.classList.add("panel-leave");
  leave.src = "Gallery%20Files/main-assets/search-exit.svg";
  leave.setAttribute("draggable", "false");
  leave.addEventListener("click", (e) => {
    updateStorage();
    panelContainer.remove();
    e.stopImmediatePropagation();
  });

  if (isPenguinMod) {
    const pmDesc = document.createElement("div");
    pmDesc.classList.add("pm-descriptor");
    pmDesc.textContent = "You are browsing the PenguinMod version of the Gallery. Extensions are automatically added to the Editor when clicked"; 
    const extraStyles = document.createElement("style");
    extraStyles.innerHTML = `.setting-holder{margin-top:15px;filter:blur(3px) brightness(75%)}.pm-descriptor{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:400px;z-index:99;font-size:16px;font-style:italic;font-weight:600;text-shadow:#000 0 0 15px;color:pink}`;
    panelContainer.append(extraStyles, pmDesc);
  }

  panelContainer.append(text, bg, settingHolder, leave);
  document.body.appendChild(panelContainer);
}

/* Search UI */
function openSearch() {
  let query = "";
  const searchContainer = document.createElement("div");
  searchContainer.classList.add("search-div");

  const text = document.createElement("div");
  text.classList.add("search-txt");
  text.textContent = "Search for an Extension";

  const bg = document.createElement("img");
  bg.classList.add("search-ui");
  bg.src = "Gallery%20Files/main-assets/search-bg.svg";
  bg.setAttribute("draggable", "false");

  const input = document.createElement("input");
  input.classList.add("search-input");
  input.type = "text";
  input.addEventListener("change", (e) => query = e.target.value);
  input.addEventListener("keydown", (e) => {
    displayExts(filterExts(galleryData.extensions, e.target.value), true);
    if (e.key === "Enter") searchContainer.remove();
  });

  const submit = document.createElement("img");
  submit.classList.add("search-enter");
  submit.src = "Gallery%20Files/main-assets/search-enter.svg";
  submit.setAttribute("draggable", "false");
  submit.addEventListener("click", (e) => {
    searchContainer.remove();
    e.stopImmediatePropagation();
  });

  const leave = document.createElement("img");
  leave.classList.add("search-leave");
  leave.src = "Gallery%20Files/main-assets/search-exit.svg";
  leave.setAttribute("draggable", "false");
  leave.addEventListener("click", (e) => {
    displayExts(filterExts(galleryData.extensions));
    searchContainer.remove();
    e.stopImmediatePropagation();
  });

  searchContainer.append(text, bg, input, submit, leave);
  document.body.appendChild(searchContainer);
  input.focus();
}

/* Initializer */
document.addEventListener("DOMContentLoaded", async () => {
  galleryData = await (await fetch("Gallery%20Files/Extension-Keys.json")).json();
  if (!galleryData.site["is up"]) window.location.href = "pages/down.html";
  else {
    const params = new URLSearchParams(location.search);
    isPenguinMod = params.get("originPM") === "true";
    getCleanStorage();
    currentTag = params.get("tag") || currentTag;
    addBtnBehaviours();
    displayExts(filterExts(galleryData.extensions));
  }
});
