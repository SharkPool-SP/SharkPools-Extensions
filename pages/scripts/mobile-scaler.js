function rescaler() {
  // scale navigation bars
  const boundWidth = window.innerWidth, boundHeight = window.innerHeight;
  const scalers = [
    document.querySelector(`div[class="navBar"]`),
    ...document.querySelectorAll(`div[class="innerNav"]`),
  ];
  for (const nav of scalers) {
    nav.style.transform = "";
    const bounds = nav.getBoundingClientRect();
    if (bounds.width - boundWidth > -50) {
      nav.style.transformOrigin = "top center";
      nav.style.transform = `translateX(-50%) scale(${(boundWidth - 50) / bounds.width})`;
    } else {
      nav.style.transform = "";
    }
  }

  // scale extension div to show a minimum of 3 extensions
  const extDiv = document.querySelector(`div[class="ext-div"]`);
  if (!extDiv) return;
  if (extDiv.children[0].getBoundingClientRect().y !== extDiv.children[1].getBoundingClientRect().y) {
    extDiv.style.width = "250%";
    extDiv.style.left = "-75%";
    extDiv.style.transformOrigin = "top center";
    extDiv.style.transform = "scale(.40)";
  }
}

window.addEventListener("resize", rescaler);
window.addEventListener("load", rescaler);
