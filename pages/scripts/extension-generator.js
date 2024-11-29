function displayExts(json) {
  const oldDiv = document.querySelector(".ext-div");
  if (oldDiv) oldDiv.remove();

  let tags = [];
  const main = document.createElement("div");
  main.classList.add("ext-div");
  main.setAttribute("style", "pointer-events: auto; width: 100%;");

  Object.entries(json).forEach((item) => {
    const name = item[0], info = item[1];

    const holderDiv = document.createElement("div");
    holderDiv.classList.add(name);
    holderDiv.setAttribute("style", "display: inline-block; width: 300px; height: 150px; opacity: 0; margin: 20px; cursor: pointer; transform: scale(1);");

    const img = document.createElement("img");
    img.id = name;
    img.setAttribute("loading", "lazy");
    img.src = `/extension-thumbs/${name}.svg`;

    const tag = info.status ? genTag(info.status) : "";
    if (tag) tags.push(tag);
    holderDiv.append(img, tag);
    main.appendChild(holderDiv);
    img.onload = () => {
      holderDiv.animate([{ opacity: "0" }, { opacity: "1" }], { duration: 400, easing: "ease-in-out" });
      holderDiv.style.opacity = "1";
    };

    holderDiv.addEventListener("click", (e) => {
      downloadExt(name, info);
      e.stopImmediatePropagation();
    });
    holderDiv.addEventListener("mouseenter", () => {
      holderDiv.appendChild(genPin(name));
      genText("ext-desc", info);
      holderDiv.animate([{ transform: "scale(1)" }, { transform: "scale(1.1)" }], { duration: 200, easing: "ease-in-out" });
      holderDiv.style.transform = "scale(1.1)";
    });
    holderDiv.addEventListener("mouseleave", () => {
      holderDiv.lastChild.remove();
      holderDiv.animate([{ transform: "scale(1.1)" }, { transform: "scale(1)" }], { duration: 200, easing: "ease-in-out" });
      holderDiv.style.transform = "scale(1)";
    });
  });
  document.body.appendChild(main);
  updateTags(tags);
}

function updateTags(tags) {
  let timer = 0;
  const animate = () => {
    tags.forEach((tag, index) => {
      const rng = parseFloat(tag.getAttribute("rng"));
      tag.style.transform = `scale(${(Math.sin(timer * rng) * .05) + 0.65}) rotate(${Math.cos(timer * rng) * .15}rad)`;
    });
    timer += 0.02;
    requestAnimationFrame(animate);
  };
  animate();
}