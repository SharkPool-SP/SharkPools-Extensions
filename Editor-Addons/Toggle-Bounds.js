// Toggle Bounds Addon
// Show Sprite HitBoxes/Bounds
// Made By SharkPool

/*
  !!!! WARNING !!!!
  PLEASE paste this in the CONSOLE TAB
  DO NOT paste this as a extension
  Doing so will result in certain UI being unclickable
  
  This only works in Turbowarp for now....
*/

const svg = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20.01101" height="20.125" viewBox="0,0,20.01101,20.125"><g transform="translate(-229.9945,-169.9375)"><g data-paper-data="{&quot;isPaintingLayer&quot;:true}" fill-rule="nonzero" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" style="mix-blend-mode: normal"><path d="M246.50913,178.36471c0.64139,0.90314 0.66747,2.38851 0,3.27058c0,0 -2.03469,3.86471 -6.50913,3.86471c-4.47444,0 -6.50913,-3.86471 -6.50913,-3.86471c-0.64139,-0.90314 -0.66747,-2.38851 0,-3.27058c0,0 2.03469,-3.86471 6.50913,-3.86471c4.47444,0 6.50913,3.86471 6.50913,3.86471zM239.9989,183.9989c2.20883,0 3.99945,-1.79062 3.99945,-3.99945c0,-2.20883 -1.79061,-3.99945 -3.99945,-3.99945c-2.20883,0 -3.99945,1.79061 -3.99945,3.99945c0,2.20883 1.79062,3.99945 3.99945,3.99945z" fill="#ff4c4c" stroke="none" stroke-width="1" stroke-linecap="butt"/><path d="M238,180c0,-1.10457 0.89543,-2 2,-2c1.10457,0 2,0.89543 2,2c0,1.10457 -0.89543,2 -2,2c-1.10457,0 -2,-0.89543 -2,-2z" fill="#ff4c4c" stroke="none" stroke-width="1" stroke-linecap="butt"/><path d="M230.9945,175.38325v-4.33176" fill="none" stroke="#ff4c4c" stroke-width="2" stroke-linecap="round"/><path d="M235.32626,170.9375h-4.33176" fill="none" stroke="#ff4c4c" stroke-width="2" stroke-linecap="round"/><path d="M230.9945,188.94851v-4.33176" data-paper-data="{&quot;index&quot;:null}" fill="none" stroke="#ff4c4c" stroke-width="2" stroke-linecap="round"/><path d="M235.32626,189.0625h-4.33176" data-paper-data="{&quot;index&quot;:null}" fill="none" stroke="#ff4c4c" stroke-width="2" stroke-linecap="round"/><path d="M249.0055,175.38325v-4.33176" data-paper-data="{&quot;index&quot;:null}" fill="none" stroke="#ff4c4c" stroke-width="2" stroke-linecap="round"/><path d="M244.67374,170.9375h4.33176" data-paper-data="{&quot;index&quot;:null}" fill="none" stroke="#ff4c4c" stroke-width="2" stroke-linecap="round"/><path d="M249.0055,188.94851v-4.33176" data-paper-data="{&quot;index&quot;:null}" fill="none" stroke="#ff4c4c" stroke-width="2" stroke-linecap="round"/><path d="M244.67374,189.0625h4.33176" data-paper-data="{&quot;index&quot;:null}" fill="none" stroke="#ff4c4c" stroke-width="2" stroke-linecap="round"/></g></g></svg>`;
const allBoxes = {};
let theme = hslaToHex(document.documentElement.style.getPropertyValue("--looks-secondary")) || "#ff4c4c";

const rowButtons = document.querySelectorAll(`[class^="toggle-buttons_button"]`);
const row = document.querySelectorAll(`[class^="toggle-buttons_row"]`);
const vm = window.vm;

const clone = rowButtons[rowButtons.length - 1].cloneNode(true);
clone.ariaLabel = "Toggle Bounds";
clone.title = "Toggle Bounds";
clone.children[0].src = `data:image/svg+xml;base64,${btoa(svg.replaceAll("#ff4c4c", "#737373"))}`;
clone.addEventListener("click", () => {
  const src = clone.children[0].src;
  if (hasValue("target", vm.editingTarget)) {
    clone.ariaPressed = false;
    clone.children[0].src = `data:image/svg+xml;base64,${btoa(svg.replaceAll("#ff4c4c", "#737373"))}`;
    toggleThisBox(vm.editingTarget, false);
  } else {
    clone.ariaPressed = true;
    clone.children[0].src = `data:image/svg+xml;base64,${btoa(svg.replaceAll("#ff4c4c", theme))}`;
    toggleThisBox(vm.editingTarget, true);
  }
});
if (row[1]) row[1].appendChild(clone);

vm.on("workspaceUpdate", () => {
  if (hasValue("target", vm.editingTarget)) {
    clone.ariaPressed = true;
    clone.children[0].src = `data:image/svg+xml;base64,${btoa(svg.replaceAll("#ff4c4c", theme))}`;
  } else {
    clone.ariaPressed = false;
    clone.children[0].src = `data:image/svg+xml;base64,${btoa(svg.replaceAll("#ff4c4c", "#737373"))}`;
  }
});

function toggleThisBox(target, on) {
  const targetID = encodeURIComponent(target.id);
  const oldBox = document.querySelector(`[class="${targetID}"]`);
  if (on && oldBox) return;
  const box = document.createElement("div");
  box.className = targetID;
  box.style.border = "solid";
  box.style.borderRadius = "5px";
  box.style.borderWidth = "2px";
  box.style.borderColor = ["#ff0000", "#00ff00", "#0000ff"][Math.floor(Math.random() * 3)];
  box.style.position = "relative";
  box.style.transform = "translate(-50%, -50%)";
  allBoxes[targetID] = { html: box, target: target, ID: targetID };
  if (on) {
    vm.renderer.addOverlay(box);
    updateAll();
  } else {
    delete allBoxes[targetID];
    vm.renderer.removeOverlay(oldBox);
  }
}

function updateAll() {
  theme = hslaToHex(document.documentElement.style.getPropertyValue("--looks-secondary")) || "#ff4c4c";
  const runtime = vm.runtime;
  if (Object.keys(allBoxes).length > 0) {
    requestAnimationFrame(() => {
      Object.values(allBoxes).forEach((item) => {
        const target = item.target;
        const bounds = target.getBounds();
        const box = item.html;
        box.style.width = bounds.width + "px";
        box.style.height = bounds.height + "px";
        box.style.left = `${target.x + (runtime.stageWidth / 2)}px`;
        box.style.top = `${(target.y * -1) + (runtime.stageHeight / 2)}px`;
        if (target.id === vm.editingTarget.id) {
          box.style.boxShadow = `0px 0px 5px ${box.style.borderColor}`;
          box.style.boxShadow += `, 0px 0px 5px ${box.style.borderColor} inset`;
        } else box.style.boxShadow = "none";
      });
      updateAll();
    });
  }
}

function hasValue(keyV, value) {
  for (const key in allBoxes) {
    if (allBoxes.hasOwnProperty(key) && allBoxes[key][keyV] === value) return true;
  }
  return false;
}

function hslaToHex(hsl) {
  if (!hsl) return "#ff4c4c";
  if (hsl.startsWith("#")) return hsl;
  [hue, saturation, lightness] = hsl.match(/[\d.]+/g).map(val => parseFloat(val));
  let h = hue;
  let s = saturation;
  let l = lightness;
  l /= 100;
  const a = s * Math.min(l, 1 - l) / 100;
  const f = n => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, "0");
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}
