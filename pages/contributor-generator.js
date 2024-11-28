const main = document.createElement("div");
main.setAttribute("style", "pointer-events: auto; width: 100%; position: absolute; top: 115px; transform: scale(0.75);");

const contribs = await fetch("https://raw.githubusercontent.com/SharkPool-SP/SharkPools-Extensions/refs/heads/main/Gallery%20Files/Contributors.json");
const json = await contribs.json();

const allImgs = [];
Object.values(json).forEach((item) => {
  const img = document.createElement("img");
  img.src = item.url;
  img.setAttribute("style", "width: 110px; height: 110px; opacity: 0; margin-left: 25px; margin-right: 25px; margin-bottom: 15px; cursor: pointer; transform: scale(1);");
  main.appendChild(img);
  allImgs.push(img);
  img.onload = () => {
    img.animate([{ opacity: "0" }, { opacity: "1" }], { duration: 400, easing: "ease-in-out" });
    img.style.opacity = "1";
  };
  img.addEventListener("click", () => window.open("https://github.com/" + item.name));
  img.addEventListener("mouseenter", () => {
    img.animate([{ transform: "scale(1)" }, { transform: "scale(1.1)" }], { duration: 150, easing: "ease-in-out" });
    img.style.transform = "scale(1.1)";
  });
  img.addEventListener("mouseleave", () => {
    img.animate([{ transform: "scale(1.1)" }, { transform: "scale(1)" }], { duration: 150, easing: "ease-in-out" });
    img.style.transform = "scale(1)";
  });
});
vm.renderer.addOverlay(main);
