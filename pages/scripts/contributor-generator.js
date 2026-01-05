async function displayContributors() {
  const oldDiv = document.querySelector(".ext-div");
  if (oldDiv) oldDiv.remove();

  const main = document.createElement("div");
  main.classList.add("ext-div");

  const contributorList = await (await fetch("Gallery%20Files/Contributors.json")).json();
  for (const contrib of contributorList) {
    const img = document.createElement("img");
    img.classList.add("contributor");
    img.src = contrib.url;
    img.setAttribute("draggable", "false");
    img.setAttribute("loading", "lazy");
    main.appendChild(img);
    img.onload = () => {
      img.animate([{ opacity: "0" }, { opacity: "1" }], { duration: 400, easing: "ease-in-out" });
      img.style.opacity = "1";
    };
    img.addEventListener("click", () => window.open("https://github.com/" + contrib.username));
    img.addEventListener("mouseenter", () => genText("contributor", contrib.display));
    img.addEventListener("mouseleave", () => removeText());
  };
  document.body.appendChild(main);
}