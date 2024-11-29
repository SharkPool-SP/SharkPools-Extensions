let isPenguinMod = false, inCredits = false;
let currentTag = "all", downloadType = "download", pins = [];

/* Storage */
// TODO storage

/* Button Functionality */
function addBtnBehaviours() {
  const navBtns = document.querySelectorAll(`img[class="navImg"]`);
  // file type
  navBtns[0].addEventListener("click", (e) => {
    downloadType = downloadType === "clipboard" ? "download" : "clipboard";
    navBtns[0].src = `/Gallery%20Files/main-assets/${downloadType}.svg`;
    navBtns[0].animate([{ transform: "scale(1.1)" }, { transform: "scale(1.1, 0)" }, { transform: "scale(1.1, 1.1)" }], { duration: 200, easing: "ease-in-out" });
    navBtns[0].style.transform = "scale(1.1)";
    e.stopImmediatePropagation();
  });
  // to/from contributers
  navBtns[1].addEventListener("click", (e) => {
    inCredits = !inCredits;
    if (inCredits) displayContributors();
    else displayExts(filterExts(galleryData.extensions));
    navBtns[1].animate([{ transform: "scale(1.1)" }, { transform: "scale(1.1, 0)" }, { transform: "scale(1.1, 1.1)" }], { duration: 200, easing: "ease-in-out" });
    navBtns[1].style.transform = "scale(1.1)";
    e.stopImmediatePropagation();
  });

  const tags = document.querySelectorAll(`div[class="tag"]`);
  tags.forEach((item) => {
    if (currentTag === item.id) {
      item.style.backgroundColor = "#001fff"; item.style.borderColor = "#001fff";
    }
    item.addEventListener("click", (e) => {
      tags.forEach((i) => i.setAttribute("style", ""));
      item.style.backgroundColor = "#001fff"; item.style.borderColor = "#001fff";
      currentTag = item.id;
      if (currentTag === "search") openSearch();
      else displayExts(filterExts(galleryData.extensions));
      e.stopImmediatePropagation();
    });
  });

  if (isPenguinMod) {
    const logo = document.querySelector(`img[class="toHost"]`);
    logo.src = "/Gallery%20Files/main-assets/logo-PM.svg";
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
  tag.src = `/Gallery%20Files/main-assets/ext-${type}.svg`;
  return tag;
}

function genPin(extName) {
  const pin = document.createElement("img");
  pin.classList.add("ext-pin");
  pin.src = `/Gallery%20Files/main-assets/pin-${pins.includes(extName)}.svg`;
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
    pin.src = `/Gallery%20Files/main-assets/pin-${pins.includes(extName)}.svg`;
    e.stopImmediatePropagation();
  });
  return pin;
}

function genText(type, text) {
  // TODO
}

async function downloadExt(name, data) {
  if (isPenguinMod) {
    const messager = window.opener || window.parent;
    if (!messager) return alert("Failed to request to PenguinMod!");
    messager.postMessage({ loadExt: data.url }, "https://studio.penguinmod.com");
    // TODO msg
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
            // TODO msg
          })
          .catch(() => window.open(data.url));
      }
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("onload");
  const galleryData = await (await fetch("/Gallery%20Files/Extension-Keys.json")).json();
  if (!galleryData.site["is up"]) window.location.href = "/pages/down.html";
  else {
    isPenguinMod = window.location.search.includes("originPM=true");
    addBtnBehaviours();
    displayExts(filterExts(galleryData.extensions));
  }
});
