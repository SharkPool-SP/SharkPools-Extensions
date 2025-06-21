let _tagCache = [], _tagLoopNeedsInit = true;

function displayExts(json, optDontFade) {
  const oldDiv = document.querySelector(".ext-div");
  if (oldDiv) oldDiv.remove();

  let tagsHadCache = _tagCache.length, shouldSplit = currentTag === "all";
  const main = document.createElement("div");
  main.classList.add("ext-div");

  _tagCache = [];
  Object.entries(json).forEach((item) => {
    const name = item[0], info = item[1];

    /* Banner Setup */
    const img = document.createElement("img");
    img.setAttribute("loading", "lazy");
    img.setAttribute("draggable", "false");
    img.id = name;
    img.style.width = "300px";
    img.src = name === "override404" ? "pages/404.svg" : info.banner;

    /* Data Setup */
    let dataDiv = "";
    if (name !== "override404") {
      const desc = document.createElement("pre");
      desc.textContent = info.desc;
      const descBreaker = document.createElement("div");
      descBreaker.classList.add("desc-breaker");

      const creator = document.createElement("pre");
      creator.innerHTML = `<b>Creator${info.creator.includes(",") ? "s" : ""}: </b>${info.creator}`;

      const date = document.createElement("pre");
      date.classList.add("update-date");
      date.textContent = info.date;
      
      // this is just to help people who use Control + F
      const hiddenTitle = document.createElement("pre");
      hiddenTitle.classList.add("update-date");
      hiddenTitle.style.opacity = 0;
      hiddenTitle.textContent = `${name} ${name.replaceAll("-", " ")}`;

      dataDiv = document.createElement("div");
      dataDiv.classList.add("ext-data");
      dataDiv.append(desc, descBreaker, creator, date, hiddenTitle);
    }

    /* Tag Setup */
    const tag = info.status ? genTag(info.status) : "";
    if (tag) _tagCache.push(tag);

    const holderDiv = document.createElement("div");
    if (name !== "override404") holderDiv.classList.add("ext-holder");
    holderDiv.append(img, dataDiv, tag);
    if (!pins.includes(name)) {
      if (shouldSplit && !tag) {
        const breaker = document.createElement("div");
        breaker.classList.add("ext-breaker");
        main.append(breaker, document.createElement("br"));
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

    /* Event Setup */
    holderDiv.addEventListener("mouseenter", () => holderDiv.appendChild(genPin(name)));
    holderDiv.addEventListener("mouseleave", () => {
      const pin = holderDiv.lastChild;
      const animation = pin.animate([{ opacity: "1" }, { opacity: "0" }], { duration: 200, easing: "ease-in-out" });
      animation.onfinish = () => pin.remove();
      removeText();
    });
    holderDiv.addEventListener("click", (e) => {
      downloadExt(name, info);
      e.stopImmediatePropagation();
    });
  });
  document.body.appendChild(main);
  if (_tagLoopNeedsInit) updateTags();
}

function updateTags() {
  _tagLoopNeedsInit = false;
  let timer = 0;
  const animate = () => {
    for (let i = 0; i < _tagCache.length; i++) {
      const tag = _tagCache[i];
      const rng = tag.rngData;
      tag.style.transform = `scale(${(Math.sin(timer * rng) * .05) + .65}) rotate(${Math.cos(timer * rng) * .15}rad)`;
    }
    timer += 0.02;
    requestAnimationFrame(animate);
  };
  animate();
}
