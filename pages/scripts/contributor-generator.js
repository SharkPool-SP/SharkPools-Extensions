async function displayContributors() {
  const oldDiv = document.querySelector(".ext-div");
  if (oldDiv) oldDiv.remove();

  const main = document.createElement("div");
  main.classList.add("ext-div");

  const json = await (await fetch("Gallery%20Files/Contributors.json")).json();
  Object.values(json).forEach((item) => {
    const img = document.createElement("img");
    img.classList.add("contributor");
    img.src = item.url;
    img.setAttribute("draggable", "false");
    img.setAttribute("loading", "lazy");
    main.appendChild(img);
    img.onload = () => {
      img.animate([{ opacity: "0" }, { opacity: "1" }], { duration: 400, easing: "ease-in-out" });
      img.style.opacity = "1";
    };
    img.addEventListener("click", () => window.open("https://github.com/" + item.name));
    img.addEventListener("mouseenter", () => {
      genText("contributor", item.name);
      img.animate([{ transform: "scale(1)" }, { transform: "scale(1.1)" }], { duration: 150, easing: "ease-in-out" });
      img.style.transform = "scale(1.1)";
    });
    img.addEventListener("mouseleave", () => {
      removeText();
      img.animate([{ transform: "scale(1.1)" }, { transform: "scale(1)" }], { duration: 150, easing: "ease-in-out" });
      img.style.transform = "scale(1)";
    });
  });
  document.body.appendChild(main);
}
