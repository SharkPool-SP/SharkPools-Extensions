const settingsContainer = () => {
  return `
    <div class="setting-holder">
      <div class="setting-div" id="download-type">
        <div id="download">
          <input type="checkbox" ${downloadType === "download" ? "checked" : ""}><pre>Download Extensions to My Device</pre>
        </div>
        <div id="clipboard">
          <input type="checkbox" ${downloadType === "clipboard" ? "checked" : ""}><pre>Copy Extensions to Clipboard</pre>
        </div>
        <div id="url">
          <input type="checkbox" ${downloadType === "url" ? "checked" : ""}><pre>Open Extensions in new Tabs</pre>
        </div>
      </div>
      <div class="setting-div">
        <div id="deprecated">
          <input type="checkbox" ${eraseDeprecation ? "checked" : ""}><pre>Remove Deprecated Code</pre>
        </div>
        <div class="desc-msg">
          Removes unused extension code. Lowers the file size but breaks compatibility with older versions
        </div>
      </div>
      <div class="setting-div">
        <div id="compress">
          <input type="checkbox" ${compress ? "checked" : ""}><pre>Compress Code</pre>
        </div>
        <div class="desc-msg">
          Compresses extension code. Lowers the file size
        </div>
      </div>
    </div>
    <img class="panel-leave" draggable="false" src="pages/main-assets/search-exit.svg"/>
    ${
      isPenguinMod ?
      `<div class="pm-descriptor"><i>
        You are browsing the PenguinMod version of the Gallery. Extensions are automatically added to the Editor when clicked
      </i></div>` : ""
    }`;
};

const searchContainer = () => {
  return `
    <div class="search-outer">
      <input type="text" class="search-inner"/>
    </div>
    <button class="submit-btn">Submit</button>
    <img class="panel-leave" draggable="false" src="pages/main-assets/search-exit.svg"/>`;
};

class SettingsModal extends HTMLElement {
  connectedCallback() {
    const isSearchModal = this.textContent === "search";

    this.innerHTML = `
      <style>
        .panel-div {
          background-color: rgba(17, 17, 17, .5);
          width: 100%;
          height: 100%;
          position: fixed;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          z-index: 9999;
        }
        .panel-inner {
          position: absolute;
          transform: translate(-50%, -50%) scale(${Math.min(1.2, Math.max(0.5, window.screen.width / window.screen.height))});
          left: 50%;
          top: 50%;
          background: repeating-linear-gradient(to bottom, #0c152b 0%, #0c152b 4%, #00314b 4%, #00314b 5%, #0c152b 5%);
          padding: 15px 20px 20px 20px;
          border-radius: 25px;
          border: outset 10px #0073ff;
          box-shadow: 0 0 0 7px #fff;
          user-select: text;
        }
        .panel-txt {
          font-size: 30px;
          font-family: Lilita One, Sans-Serif;
        }

        .panel-leave {
          position: absolute;
          top: ${isSearchModal ? "5" : "3"}%;
          right: 2%;
          transition: transform 200ms ease-in-out;
          width: 35px;
          cursor: pointer;
        }
        .panel-leave:hover {
          transform: scale(1.15);
        }
        .submit-btn {
          color: #fff;
          padding: 4px 13px;
          font-family: sans-serif;
          -webkit-text-stroke: .5px #fff;
          letter-spacing: 1px;
          font-size: 1.5em;
          background: linear-gradient(#00b8ff, #007dff);
          border: solid 4.5px #0035ff;
          border-radius: 18px;
          box-shadow: 0 0 0 2px;
          margin-top: 5px;
          transition: transform 150ms ease-in-out;
          cursor: pointer;
        }
        .submit-btn:hover {
          transform: scale(1.1);
        }

        .setting-holder {
          margin-top: 15px;
          ${ isPenguinMod ? "filter: blur(3px) brightness(75%);" : "" }
        }
        .setting-div {
          width: 430px;
          border: solid 2px #fff;
          border-radius: 12px;
          margin-top: 15px;
          cursor: pointer;
        }
        .setting-div div {
          width: 80%;
          margin: 8px 5px 8px 40px;
          display: flex;
          transform: scale(1.15);
        }
        .setting-div input {
          pointer-events: none;
          margin: 3px;
        }
        .setting-div pre {
          margin: 3px 0 0 5px;
        }
        .setting-div .desc-msg {
          display: block;
          margin: 0 0 8px 45px;
          font-size: 12px;
          font-style: italic;
          color: pink;
        }

        .search-outer {
          width: 370px;
          margin: 15px;
          border: solid 3px #fff;
          border-radius: 50px;
          background: linear-gradient(#00a5ff, #0073ff);
          transform: scale(1.1);
        }
        .search-inner {
          background: linear-gradient(#0c152b, #00314b);
          color: #fff;
          border: solid 2px #fff;
          margin: 5px;
          width: 344px;
          border-radius: 50px;
          padding: 5px;
          text-indent: 10px;
          font-size: 15px;
          font-family: Sans-Serif;
        }

        .pm-descriptor {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 400px;
          font-size: 16px;
          font-weight: 600;
          text-shadow: #000 0 0 15px;
          color: pink;
        }
      </style>
      <div class="panel-div">
        <div class="panel-inner">
          <div class="panel-txt">${isSearchModal ? "Search for an Extension" : "Export Settings"}</div>
          ${ isSearchModal ? searchContainer() : settingsContainer() }
        </div>
      </div>
    `;

    const leaveBtn = this.querySelector(`img[class="panel-leave"]`);
    leaveBtn.addEventListener("click", (e) => {
      if (isSearchModal) displayExts(filterExts(galleryData.extensions), true);
      else updateStorage();

      this.remove();
      e.stopImmediatePropagation();
    });

    if (isSearchModal) {
      const submitBtn = this.querySelector(`button[class="submit-btn"]`);
      submitBtn.addEventListener("click", (e) => {
        this.remove();
        e.stopImmediatePropagation();
      });

      const searchInput = this.querySelector(`input[class="search-inner"]`);
      searchInput.addEventListener("keydown", this.onKeyDown);
      searchInput.addEventListener("input", this.onValueChange);
      searchInput.focus();
    } else {
      const downloadTypeDiv = this.querySelector(`div[class="setting-div"][id="download-type"]`);
      downloadTypeDiv.addEventListener("click", (e) => {
        const box = e.target.closest(`div[class="setting-div"][id="download-type"] > div`);
        if (!box) return;

        for (const checkbox of Array.from(box.parentNode.children)) {
          checkbox.firstElementChild.checked = false;
        }
        box.firstElementChild.checked = true;
        downloadType = box.id;
        e.stopImmediatePropagation();
      });

      const deprecationBox = this.querySelector(`div[class="setting-div"] [id="deprecated"]`);
      deprecationBox.addEventListener("click", (e) => {
        const box = e.target.closest(`[id="deprecated"]`).querySelector("input");
        box.checked = !box.checked;
        eraseDeprecation = box.checked;
        e.stopImmediatePropagation();
      });

      const compressBox = this.querySelector(`div[class="setting-div"] [id="compress"]`);
      compressBox.addEventListener("click", (e) => {
        const box = e.target.closest(`[id="compress"]`).querySelector("input");
        box.checked = !box.checked;
        compress = box.checked;
        e.stopImmediatePropagation();
      });
    }
  }
}
customElements.define("panel-modal", SettingsModal);