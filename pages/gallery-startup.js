/* Public Variables */
let isPenguinMod = false;
let allTags, currentTags = ["all"];
let downloadType = "download";
let compress = false, eraseDeprecation = false;
let galleryData = {}, pins = [];
let _cachedExtTags = undefined;

// Other Public Variables:
/*
_tagCache (array)
_tagLoopNeedsInit (boolean)
*/

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
  currentTags = Array.isArray(store.tag) ? store.tag : ["all"];

  downloadType = store.downloadType || "download";
  compress = store.compress ?? false;
  eraseDeprecation = store.eraseDeprecation ?? false;
  _cachedExtTags = store._cachedExtTags;
  if (store.pinnedExts && Array.isArray(store.pinnedExts)) pins = store.pinnedExts;
}

function updateStorage() {
  localStorage.setItem("SPgalleryInfo", JSON.stringify({
    tag: currentTags, pinnedExts: pins,
    downloadType, compress, eraseDeprecation,
    _cachedExtTags
  }));
}

/* Function to make GUI Interactible */
function initGUI() {
  /* Donate Button */
  const donateBtn = document.querySelector(`button[class="donateBtn"]`);
  donateBtn.addEventListener("click", (e) => {
    window.open("https://www.paypal.com/donate/?business=AGLGGVQWUBUFE&no_recurring=0&item_name=Help+pay+for+my+College+Education&currency_code=CAD", "_blank");
    e.stopImmediatePropagation();
  });

  /* Settings Button */
  const settingsBtn = document.querySelector(`img[class="navImg"][id="settings"]`);
  settingsBtn.addEventListener("click", (e) => {
    const panel = document.createElement("panel-modal");
    panel.textContent = "settings";
    document.body.appendChild(panel);
    e.stopImmediatePropagation();
  });

  /* Contributers Button */
  const contribsBtn = document.querySelector(`img[class="navImg"][id="contributors"]`);
  contribsBtn.addEventListener("click", (e) => {
    contribsBtn.toggleAttribute("credits");

    if (contribsBtn.hasAttribute("credits")) displayContributors();
    else displayExts(filterExts(galleryData.extensions), true);
    e.stopImmediatePropagation();
  });

  /* Refresh Status Button */
  const refreshBtn = document.querySelector(`img[class="navImgBig"][id="refreshTags"]`);
  refreshBtn.addEventListener("click", async (e) => {
    /* 2 min cooldown */
    if (Date.now() > e.target.getAttribute("delay")) {
      e.target.setAttribute("delay", Date.now() + (2000 * 60));
      _cachedExtTags = undefined;
      await window.fetchAutoLabeler();
      cleanupExtList(galleryData.extensions);
      document.querySelector(`div[class="tagBar"] ext-tag[id="All"]`).click();
      e.stopImmediatePropagation();
    }
  });

  /* GitHub Button */
  const gitRepoBtn = document.querySelector(`img[class="navImgBig"][id="gitRepo"]`);
  gitRepoBtn.addEventListener("click", (e) => {
    window.open("https://github.com/SharkPool-SP/SharkPools-Extensions");
    e.stopImmediatePropagation();
  });

  /* Tag Bar */
  const tagBar = document.querySelector(`div[class="tagBar"]`);
  for (const tagName of allTags) {
    const tagBtn = document.createElement("ext-tag");
    tagBtn.id = tagName;
    tagBtn.contributorBtnBackdoor = contribsBtn;
    tagBar.appendChild(tagBtn);
    if (
      currentTags.includes(tagName) ||
      currentTags[0] === tagName.toLowerCase()
    ) {
      tagBtn.setAttribute("selected", "");
    }
  }

  /* Change Logo */
  if (isPenguinMod) {
    const logo = document.querySelector(`img[class="toHost"]`);
    logo.src = "pages/main-assets/logo-PM.svg";
    logo.setAttribute("onclick", "window.open('https://penguinmod.com/')");
  }
}

/* GUI Utils */
function genTag(type) {
  const tag = document.createElement("img");
  tag.classList.add("status-tag");
  tag.rngData = Math.random() * 1.5 + 1.5;
  tag.src = `pages/main-assets/ext-${type}.svg`;
  return tag;
}

function genPin(extName) {
  const pin = document.createElement("img");
  pin.classList.add("ext-pin");
  pin.src = "pages/main-assets/pin.svg";
  pin.style.opacity = "0";
  if (pins.includes(extName)) pin.toggleAttribute("pinned");

  pin.onload = () => {
    pin.animate([{ opacity: "0" }, { opacity: "1" }], { duration: 300, easing: "ease-in-out" });
    pin.style.opacity = "1";
  };
  pin.addEventListener("click", (e) => {
    const ind = pins.indexOf(extName);
    if (ind > -1) pins.splice(ind, 1);
    else pins.push(extName);
    pin.toggleAttribute("pinned");
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
  desc.innerHTML = text;
  if (type === "center-notif") desc.style.top = "50%";

  document.body.appendChild(desc);
  const animation = desc.animate([{ left: desc.style.left }, { left: "50%" }], { duration: 400, easing: "ease-in-out" });
  animation.onfinish = () => desc.style.left = "50%";
}

function removeText() {
  const elements = document.querySelectorAll(".text-descriptor");
  elements.forEach((element) => {
    const animation = element.animate(
      [{ left: "50%" }, { left: "150%" }], { duration: 400, easing: "ease-in-out" }
    );
    animation.onfinish = () => element.remove();
  });
}

/* Internal Utils */
function filterExts(json, searchQ) {
  const sortNewest = currentTags.includes("Newest");
  const sortOldest = currentTags.includes("Oldest");
  
  let entries = Object.entries(json);
  let newEntries = [];

  if (!currentTags.includes("Deprecated")) {
    // hide all deprecated extensions unless pinned
    entries = entries.filter((e) => !e[1].isDeprecated || pins.includes(e[0]));
  }

  if (currentTags[0] === "search") {
    // order by query
    searchQ = (searchQ ?? "").toLowerCase();
    entries.forEach((entry) => {
      const extData = entry[1];
      if (
        entry[0].toLowerCase().includes(searchQ.replaceAll(" ", "-")) ||
        extData.desc.toLowerCase().includes(searchQ) ||
        extData.creator.includes(searchQ)
      ) newEntries.push(entry);
    });

    if (newEntries.length === 0) return { "override404": {} };
    else return Object.fromEntries(newEntries);
  } else if (currentTags[0] === "all") {
    // order tagged extensions by newest => updated => none
    entries.forEach((entry) => {
      if (entry[1].status === "update") newEntries.unshift(entry);
    });
    entries.forEach((entry) => {
      if (entry[1].status === "new") newEntries.unshift(entry);
      else newEntries.push(entry);
    });
  } else {
    // order by tag
    const boundCap = currentTags.length - sortNewest - sortOldest;

    entries.forEach((entry) => {
      const extTags = entry[1].tags;
      let bound = 0;
      for (const tag of currentTags) {
        if (
          extTags.includes(tag) ||
          (entry[1].isDeprecated && tag === "Deprecated")
        ) bound++;
      }

      if (bound === boundCap) newEntries.push(entry);
    });
  }

  // order by newest/oldest if requested
  if (sortNewest || sortOldest) {
    newEntries = newEntries.sort((e1, e2) => {
      const date1 = e1[1].date.split(": ")[1].replaceAll("/", "");
      const date2 = e2[1].date.split(": ")[1].replaceAll("/", "");

      if (sortNewest) {
        return
          (date2.split("").reduce((acc, a) => acc + a.charCodeAt(), 0)) -
          (date1.split("").reduce((acc, a) => acc + a.charCodeAt(), 0));
      } else {
        return
          (date1.split("").reduce((acc, a) => acc + a.charCodeAt(), 0)) -
          (date2.split("").reduce((acc, a) => acc + a.charCodeAt(), 0));
      }
    });
  }

  // order by pins last so they show up first
  const pinOrder = [];
  newEntries.forEach((entry) => {
    if (pins.includes(entry[0])) pinOrder.unshift(entry);
    else pinOrder.push(entry);
  });

  return Object.fromEntries(pinOrder);
}

function cleanupExtList(json) {
  const tagCache = _cachedExtTags?.tags;
  if (!tagCache) return;

  delete json.Example;
  const values = Object.values(json);
  for (const extData of values) {
    if (extData.overrideLabeler) continue;

    const cached = tagCache.find((e) => e.ID.endsWith(extData.url));
    if (cached) {
      const properDate = cached.date.replaceAll("-", "/");
      extData.status = cached.isNew ? "new" : "update";
      extData.date = cached.isNew ? `Released: ${properDate}` : `Last Updated: ${properDate}`;
    }
  }
}

/* Search UI */
function openSearch() {
  const panel = document.createElement("panel-modal");
  panel.textContent = "search";
  panel.onKeyDown = (event) => {
    if (event.key === "Enter") panel.remove();
  };
  panel.onValueChange = (event) => {
    displayExts(filterExts(galleryData.extensions, event.target.value), false);
  };
  document.body.appendChild(panel);
}

/* Initializer */
document.addEventListener("DOMContentLoaded", async () => {
  galleryData = await (await fetch("Gallery%20Files/Extension-Keys.json")).json();
  if (!galleryData.site["is up"]) window.location.href = "pages/down.html";
  else {
    allTags = [
      "Expand", // keyword
      ...galleryData["extension-tags"], // real tags
      "Newest", "Oldest", "Deprecated", "Search" // keywords
    ];

    const params = new URLSearchParams(location.search);
    isPenguinMod = params.get("originPM") === "true";
    getCleanStorage();

    const urlTags = params.get("tag");
    if (urlTags) currentTags = urlTags.toString().split(",") || "all";

    const optionalSearchQuery = params.get("search");
    if (optionalSearchQuery) currentTags = ["search"];

    initGUI();

    await window.fetchAutoLabeler();
    cleanupExtList(galleryData.extensions);
    displayExts(filterExts(galleryData.extensions, optionalSearchQuery), true);
  }
});
