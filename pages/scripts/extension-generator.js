function displayExts(json, optDontFade) {
  const oldDiv = document.querySelector(".ext-div");
  if (oldDiv) oldDiv.remove();

  let tags = []; shouldSplit = currentTag === "all";
  const main = document.createElement("div");
  main.classList.add("ext-div");

  Object.entries(json).forEach((item) => {
    const name = item[0], info = item[1];

    const holderDiv = document.createElement("div");
    holderDiv.classList.add("ext-holder");

    const img = document.createElement("img");
    img.id = name;
    img.setAttribute("loading", "lazy");
    img.setAttribute("draggable", "false");
    img.style.width = "300px";
    img.src = name === "override404" ? "pages/404.svg" : `extension-thumbs/${name}.svg`;

    const tag = info.status ? genTag(info.status) : "";
    if (tag) tags.push(tag);
    holderDiv.append(img, tag);
    if (!pins.includes(name)) {
      if (shouldSplit && !tag) {
        const breaker = document.createElement("div");
        breaker.classList.add("ext-breaker");
        main.appendChild(breaker);
        shouldSplit = false;
      }
    }
    main.appendChild(holderDiv);

    if (optDontFade) holderDiv.style.opacity = "1";
    else img.onload = () => {
      holderDiv.animate([{ opacity: "0" }, { opacity: "1" }], { duration: 400, easing: "ease-in-out" });
      holderDiv.style.opacity = "1";
    };
    if (name === "override404") return;

    holderDiv.addEventListener("click", (e) => {
      downloadExt(name, info);
      e.stopImmediatePropagation();
    });
    holderDiv.addEventListener("mouseenter", () => {
      holderDiv.appendChild(genPin(name));
      genText("ext-desc", info.credits);
      genText("ext-log", info.date);
    });
    holderDiv.addEventListener("mouseleave", () => {
      removeText();
      const pin = holderDiv.lastChild;
      const animation = pin.animate([{ opacity: "1" }, { opacity: "0" }], { duration: 200, easing: "ease-in-out" });
      animation.onfinish = () => pin.remove();
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
