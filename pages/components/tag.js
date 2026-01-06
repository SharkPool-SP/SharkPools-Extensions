/* These tags will always show when the tag bar is contracted */
const STATIC_TAGS = [
  "Expand", "All",
  "Utility", "Sound",
  "Data Management",
  "Online", "Search"
];

const cleanupTagSelects = (tagList) => {
  const children = Array.from(tagList);
  for (let i = 1; i < children.length; i++) {
    const tag = children[i];
    tag.removeAttribute("selected");
  }
};

class Tag extends HTMLElement {
  connectedCallback() {
    const name = this.id;
    let innerVisual = `<span>${name}</span>`;
    if (name === "Expand") {
      innerVisual = `<img draggable="false" width="20" src="pages/main-assets/expand-arrow.svg">`;
    } else if (name === "Search") {
      innerVisual = `<img draggable="false" width="30" src="pages/main-assets/search-icon.svg">`;
    }

    if (!STATIC_TAGS.includes(name)) this.toggleAttribute("hideOnContract");
    this.innerHTML = `
      <style>
        ext-tag {
          transition: transform 200ms ease-in-out;
        }
        ext-tag[expanded] {
          transform: rotate(180deg);
        }
        ext-tag[selected] div {
          background-color: #0051ff !important;
          border-color: #001fff !important;
        }

        .ext-tag {
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          user-select: none;
          width: auto;
          height: 35px;
          margin: 7px .15em;
          padding: 2px 10px 2px;
          font-weight: 600;
          font-size: 1.2em;
          background-color: #00b8ff;
          border: solid 5px #007dff;
          border-radius: 50px;
        }
        .ext-tag:hover {
          filter: url(#bloom-filter);
        }
        .tagBar:not([expanded]) ext-tag[hideOnContract] {
          display: none;
        }
      </style>
      <div class="ext-tag">${innerVisual}</div>
    `;

    this.addEventListener("click", (e) => {
      const children = this.parentNode.children;
      this.toggleAttribute("selected");
  
      if (name === "Expand") {
        this.parentNode.toggleAttribute("expanded");
        this.toggleAttribute("expanded");
      } else if (name === "Search") {
        cleanupTagSelects(children);
        this.toggleAttribute("selected");
        currentTags = ["search"];
        openSearch();
      } else if (name === "All") {
        cleanupTagSelects(children);
        currentTags = ["all"];
        this.setAttribute("selected", "");
      } else {
        if (this.hasAttribute("selected")) {
          if (currentTags[0] === "all" || currentTags[0] === "search") {
            children[1].removeAttribute("selected");
            children[children.length - 1].removeAttribute("selected");
            currentTags = [name];
          } else {
            currentTags.push(name);
          }
        } else {
          const index = currentTags.indexOf(name);
          if (index > -1) currentTags.splice(index, 1);
          if (currentTags.length === 0) children[1].click();
        }
      }

      this.contributorBtnBackdoor.removeAttribute("credits");
      if (currentTags[0] !== "search") {
        let s = new URLSearchParams(location.search);
        s.set("tag", currentTags);
        history.replaceState("", "", "?" + s.toString());

        displayExts(filterExts(galleryData.extensions), false);
        updateStorage();
      }
      e.stopImmediatePropagation();
    });
  }
}
customElements.define("ext-tag", Tag);