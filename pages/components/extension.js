class ExtensionDOM extends HTMLElement {
  connectedCallback() {
    const {
      id, banner, creator, date,
      desc, url, optFadeIn, status
    } = this.metaData;
    const isOverride = id === "override404";
    this.innerHTML = `
      <style>
        .ext-holder {
          display: inline-block;
          width: 300px;
          height: 285px;
          margin: 20px 20px 20px 20px;
          border: solid grey 2px;
          border-radius: 19px;
          cursor: pointer;
          transition: transform 250ms ease-in-out;
          transform: scale(1);
        }
        .ext-holder:hover {
          filter: url(#bloom-filter);
          transform: scale(1.07);
        }
        .ext-breaker {
          display: inline-block;
          width: 100%;
          border-bottom: dashed 6px rgba(255,255,255,0.2);
          margin: 10px 5% 10px 5%;
        }
        .ext-holder .banner {
          width: 300px;
        }
        .ext-data pre {
          margin: 0;
          padding: 7px 10px 10px 10px;
          text-wrap: wrap;
          white-space: pre-wrap;
          word-wrap: break-word;
          overflow-wrap: break-word;
          font-family: Sans-Serif;
          font-size: 15px;
          user-select: text;
        }
        .ext-data .desc-breaker {
          width: 250px;
          border-top: dashed grey 2px;
          margin: auto;
        }
        .ext-data .update-date {
          width: 300px;
          position: absolute;
          bottom: 2px;
          padding: 0 0 10px 0;
          color: #a1a1a1;
          font-size: 14px;
        }
      </style>
      <div class="${isOverride ? "" : "ext-holder"}">
        <img loading="lazy" draggable="false" class="banner" id="${id}" src="${banner}">
        ${ isOverride ? "" :
        `<div class="ext-data">
          <pre>${desc}</pre>
          <div class="desc-breaker"></div>
          <pre><b>Creator${creator.includes(",") ? "s" : ""}: </b>${creator}</pre>
          <pre class="update-date">${date}</pre>
          <pre class="update-date" style="opacity: 0;">${id} ${id.replaceAll("-", " ")}</pre>
        </div>` }
      </div>
    `;

    if (isOverride) return;

    const innerHolder = this.lastElementChild;
    if (status) {
      const tag = genTag(status);
      _tagCache.push(tag);
      innerHolder.appendChild(tag);
    }

    this.addEventListener("mouseenter", () => {
      innerHolder.appendChild(genPin(id));
    });
    this.addEventListener("mouseleave", () => {
      const pin = innerHolder.lastChild;
      const animation = pin.animate([{ opacity: "1" }, { opacity: "0" }], { duration: 200, easing: "ease-in-out" });
      animation.onfinish = () => pin.remove();
      removeText();
    });
    this.addEventListener("click", (e) => {
      downloadExt(id, url);
      e.stopImmediatePropagation();
    });

    if (optFadeIn) {
      this.style.opacity = 0;
      this.querySelector("img").onload = () => {
        this.animate([{ opacity: "0" }, { opacity: "1" }], { duration: 400, easing: "ease-in-out" });
        this.style.opacity = "";
      };
    }
  }
}
customElements.define("extension-div", ExtensionDOM);