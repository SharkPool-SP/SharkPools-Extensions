let isPenguinMod = false, inCredits = false;
let currentTag = "all", downloadType = "download", pins = [];

/* Storage */
function getCleanStorage() {
  localStorage.removeItem("extensions.turbowarp.org/local-storage:SP.extension.gal.DATA"); // remnant of the past
  let store;
  try {
    store = localStorage.getItem("SPgalleryInfo");
    if (store?.constructor?.name === "Object") store = JSON.parse(store);
    else store = {};
  } catch {
    console.warn("Removing Malformed LocalStorage");
    localStorage.removeItem("SPgalleryInfo");
  }
  currentTag = store.tag || "all";
  downloadType = store.downloadType === "download" ? "download" : "clipboard";
  if (store.pinnedExts && store.pinnedExts?.constructor?.name === "Array") pins = store.pinnedExts || [];
}

function updateStorage() {
  localStorage.setItem("SPgalleryInfo", JSON.stringify({
    tag: currentTag, pinnedExts: pins, downloadType
  }));
}

/* Button Functionality */
function addBtnBehaviours() {
  const navBtns = document.querySelectorAll(`img[class="navImg"]`);
  const extDwnload = navBtns[0]; // file type
  extDwnload.addEventListener("click", (e) => {
    removeText();
    downloadType = downloadType === "clipboard" ? "download" : "clipboard";
    extDwnload.src = `Gallery%20Files/main-assets/${downloadType}.svg`;
    extDwnload.animate([{ transform: "scale(1.1)" }, { transform: "scale(1.1, 0)" }, { transform: "scale(1.1, 1.1)" }], { duration: 200, easing: "ease-in-out" });
    extDwnload.style.transform = "scale(1.1)";
    updateStorage();
    e.stopImmediatePropagation();
  });
  extDwnload.addEventListener("mouseleave", () => removeText());
  if (!isPenguinMod) extDwnload.addEventListener("mouseenter", () => genText("center-notif", `Extensions will be ${downloadType === "download" ? "Downloaded" : "Copied to Clipboard"}`));
  else {
    extDwnload.style.filter = "brightness(0.3)";
    extDwnload.addEventListener("mouseenter", () => genText("center-notif", "Extensions are Auto-Loaded to PenguinMod"));
  }

  const toContribs = navBtns[1]; // to/from contributers
  toContribs.addEventListener("click", (e) => {
    inCredits = !inCredits;
    if (inCredits) displayContributors();
    else displayExts(filterExts(galleryData.extensions));
    toContribs.animate([{ transform: "scale(1.1)" }, { transform: "scale(1.1, 0)" }, { transform: "scale(1.1, 1.1)" }], { duration: 200, easing: "ease-in-out" });
    toContribs.style.transform = "scale(1.1)";
    e.stopImmediatePropagation();
  });
  toContribs.addEventListener("mouseleave", () => removeText());
  toContribs.addEventListener("mouseenter", () => genText("center-notif", `Go to ${inCredits ? "Contributors" : "Main"} Page`));

  const tags = document.querySelectorAll(`div[class="tag"]`);
  tags.forEach((item) => {
    if (currentTag === item.id) {
      item.style.backgroundColor = "#001fff"; item.style.borderColor = "#001fff";
    }
    item.addEventListener("click", (e) => {
      inCredits = false;
      tags.forEach((i) => i.setAttribute("style", ""));
      item.style.backgroundColor = "#001fff"; item.style.borderColor = "#001fff";

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

/* Utils */
function filterExts(json, searchQ = "") {
  delete json.Example;
  const entries = Object.entries(json);
  let newEntries = [];
  if (currentTag === "search") {
    // order by query
    entries.forEach((entry) => {
      const extData = entry[1];
      if (
        entry[0].includes(searchQ.replaceAll(" ", "-")) ||
        extData.credits.includes(searchQ) || extData.date.includes(searchQ)
      ) newEntries.push(entry);
    });
  } else if (currentTag === "all") {
    // order by newest => updated => old
    entries.forEach((entry) => {
      if (entry[1].status === "update") newEntries.unshift(entry);
    });
    entries.forEach((entry) => {
      if (entry[1].status === "new") newEntries.unshift(entry);
      else newEntries.push(entry);
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
  const desc = document.createElement("div");
  desc.classList.add("text-descriptor");
  desc.setAttribute("type", type);
  desc.setAttribute("style", "width: max-content; max-width: 90%; background-color: rgba(0,56,87,.86); border: solid 7px #0093ff; padding: 20px; border-radius: 15px; font-size: 20px; font-weight: 600; position: fixed; left: -50%; transform: translate(-50%, -50%); z-index: 999;");
  desc.textContent = text;
  switch (type) {
    case "ext-desc":
      desc.style.top = "90%";
      desc.style.color = "#b7e9ff";
      break;
    case "ext-log":
      desc.style.top = "15%";
      desc.style.left = "150%";
      desc.style.color = "#b7e9ff";
      break;
    case "center-notif":
      desc.style.borderColor = "#ebebeb";
      desc.style.backgroundColor = "rgba(87,87,87,.86)";
      desc.style.top = "50%";
      desc.style.fontSize = "25px";
      break;
    case "contributor":
      desc.style.borderColor = "#ebebeb";
      desc.style.backgroundColor = "rgba(87,87,87,.86)";
      desc.style.top = "90%";
      break;
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
      [{ left: "50%" }, { left: type === "ext-log" ? "-50%" : "150%" }], { duration: 400, easing: "ease-in-out" }
    );
    animation.onfinish = () => element.remove();
  });
}

async function downloadExt(name, data) {
  if (isPenguinMod) {
    const messager = window.opener || window.parent;
    if (!messager) return alert("Failed to request to PenguinMod!");
    messager.postMessage({
      loadExt: `https://sharkpools-extensions.vercel.app/extension-code/${name}.js`
    }, "https://studio.penguinmod.com");
    genText("center-notif", "Copied to PenguinMod!");
  } else {
    if (downloadType === "download") {
      fetch(data.url)
        .then(response => response.blob())
        .then(blob => {
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = name + ".js";
          document.body.appendChild(a);
          a.click();
          a.remove();
          URL.revokeObjectURL(url);
        }).catch(() => window.open(data.url));
    } else {
      const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
      if (isSafari) window.open(data.url);
      else {
        const text = await (await fetch(data.url)).text();
        navigator.clipboard.writeText(text)
          .then(() => {
            genText("center-notif", "Copied to Clipboard!");
          })
          .catch(() => window.open(data.url));
      }
    }
  }
}

/* Search UI */
function openSearch() {
  alert("SharkPool is working on rewriting the Search Bar, Sorry!");
  let query = "";
  displayExts(filterExts(galleryData.extensions), query);
  updateStorage();
}

document.addEventListener("DOMContentLoaded", async () => {
  const galleryData = await (await fetch("Gallery%20Files/Extension-Keys.json")).json();
  if (!galleryData.site["is up"]) window.location.href = "pages/down.html";
  else {
    const params = new URLSearchParams(location.search);
    isPenguinMod = Boolean(params.get("originPM"));
    getCleanStorage();
    currentTag = params.get("tag") || currentTag;
    addBtnBehaviours();
    displayExts(filterExts(galleryData.extensions));
  }
});
