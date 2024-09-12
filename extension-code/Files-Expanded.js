// Name: Files Expanded
// ID: filesExpanded
// Description: Read, upload, and download files.
// By: SharkPool, GarboMuffin, Drago Cuven, 0znzw, and FurryR

// Version 1.6.0

(function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) throw new Error("Files Expanded must be run unsandboxed");

  const menuIconURI =
"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMzMuMTY0IiBoZWlnaHQ9IjEzMy4xNjQiIHZpZXdCb3g9IjAgMCAxMzMuMTY0IDEzMy4xNjQiPjxnIHN0cm9rZS1taXRlcmxpbWl0PSIxMCI+PHBhdGggZD0iTTMgNjYuNTgyQzMgMzEuNDY3IDMxLjQ2NyAzIDY2LjU4MiAzczYzLjU4MiAyOC40NjcgNjMuNTgyIDYzLjU4Mi0yOC40NjcgNjMuNTgyLTYzLjU4MiA2My41ODJTMyAxMDEuNjk3IDMgNjYuNTgyeiIgZmlsbD0iI2ZjYjEwMyIgc3Ryb2tlPSIjYmY4YjExIiBzdHJva2Utd2lkdGg9IjYiLz48cGF0aCBkPSJNOTkuODkyIDQ5LjkyN3Y0OS45NjRjMCA0LjU4LTMuNzQ4IDguMzI4LTguMzI4IDguMzI4SDQxLjU1OGMtNC41OCAwLTguMjg1LTMuNzQ4LTguMjg1LTguMzI4bC4wNDEtNjYuNjE4YzAtNC41OCAzLjcwNi04LjMyOCA4LjI4Ni04LjMyOGgzMy4zMXoiIGZpbGw9Im5vbmUiIHN0cm9rZS1vcGFjaXR5PSIuMTQ5IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMTAiLz48cGF0aCBkPSJNOTkuODkyIDQ5LjkyN3Y0OS45NjRjMCA0LjU4LTMuNzQ4IDguMzI4LTguMzI4IDguMzI4SDQxLjU1OGMtNC41OCAwLTguMjg1LTMuNzQ4LTguMjg1LTguMzI4bC4wNDEtNjYuNjE4YzAtNC41OCAzLjcwNi04LjMyOCA4LjI4Ni04LjMyOGgzMy4zMXoiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNNzAuNzIyIDU0LjExNVYzMS4xNjdsMjIuOTQ3IDIyLjk0OHoiIGZpbGw9IiNmY2IxMDMiLz48cGF0aCBkPSJNODQuNjY4IDY5LjkxNGMtLjAyLjA4OC0uMDM2LjE3NS0uMDYyLjI2Mi0uMDc3LjMyNC0uMjM2IDEuMDktLjM5NiAyLjU4N3EuMDAxLjAzOC0uMDA1LjA2MWMuODggMy41MzgtLjYwMiA1LjY5Mi0xLjU4NCA2LjY3NGEyIDIgMCAwIDEtLjIuMTljLS45NjIuODc1LTIuNjQzIDEuOTE4LTUuMTUyIDEuOTE4YTcuNjUgNy42NSAwIDAgMS0zLjQzNS0uNzg2Yy4wMjYgMS40MDMuMDQxIDMuMzM3LjA0MSA2LjAyYTYuOSA2LjkgMCAwIDEgMi40OTQgMS41MzggNy4xIDcuMSAwIDAgMSAyLjIxIDUuMTY3YzAgMi45MS0xLjY3NSA1LjQ0LTQuMzc1IDYuNTk3cS0uMTAzLjA0OC0uMjA1LjA4OGMtLjkwNS4zNDQtMS45MjMuNTE0LTMuMTE2LjUxNC0uNDMyIDAtLjg5NS0uMDItMS4zOTktLjA2N2ExOCAxOCAwIDAgMC0xLjI5NS4wMDVjLS45NzIuMTA4LTIuMzQuMjE2LTQuMTcuMzE5LS4wMzYgMC0uMDcyLjAwNS0uMTE0LjAwNXEtLjM2LjAxNS0uNjk5LjAxNWMtMy4yNzUgMC01LjY2Ni0xLjAzOC03LjExLTMuMDhxLS4wNDYtLjA2LS4wODMtLjEyM2MtMS40Ny0yLjE5NS0xLjUxMi00Ljk3Mi0uMTEzLTcuMjRxLjAxNy0uMDM1LjA0MS0uMDcxYy44OS0xLjM5OSAyLjE5LTIuMzk2IDMuODc3LTIuOTgzLjAyLS45OTIuMDE1LTIuMjM2LS4wMTYtMy43MTJhNy41IDcuNSAwIDAgMS0yLjg5LjU1NWMtMi44NjMgMC01LjIyOC0xLjcwMS02LjA1MS00LjI4OC0uMTctLjUyNC0uMzMtMS4yOS0uNy0zLjAxOGEyIDIgMCAwIDEtLjAzNS0uMTg1bC0uNzYxLTQuMjUyYTcgNyAwIDAgMC0uMTAzLS4zMjRjLS4zOTYtMS4xMjYtLjU4MS0yLjA4My0uNTgxLTMuMDA4IDAtMS4xNDcuMzM0LTIuODggMS45MTgtNC42MDcuNzk3LS44NzQgMi4yNDctMi4wMDUgNC41ODEtMi4zN3EuNDMzLS4wNzEuODc0LS4wNzJoNS42ODdxLjE5MiAwIC4zODUuMDE1YTcyIDcyIDAgMCAwIDUuNzgtLjAwNSA4MyA4MyAwIDAgMCA2LjkzLS41OTZjLjI1OC0uMDgzLjUzNi0uMTY1LjgzNC0uMjM3LjI4My0uMDcyLjU3LS4xMTguODU4LS4xNSAyLjE5LS4yIDQuMjMyLjQzMyA1LjgyIDEuNzkgMS45NyAxLjY5MiAyLjg0IDQuMjUyIDIuMzIgNi44NTQiIGZpbGw9IiNiZjhiMTEiLz48cGF0aCBkPSJNNzkuMTIxIDY4LjgwNnEtLjMxNiAxLjI2Ni0uNTQzIDMuNDM3LS4wOSAxLjA4Ni4wOSAxLjc2NC4zMTYgMS4xMzEtLjA0NCAxLjQ5My0uNDk5LjQ1MS0xLjM1Ny40NTItLjk5NiAwLTEuMzEyLS41OTJBNDEgNDEgMCAwIDEgNzYgNzEuOTQzcS4wOS0xLjk2LjA5LTIuMDUtLjA0NSAwLS4xMzUtLjA5Mi00LjIwNy4xODMtNy45MTUuNTQ1LS4wOS40NTMgMCAxLjQ1LjE4IDEuNDA0LjE4IDEuNjMtLjE4IDEuNDA2LS4xOCA0LjE3LjE4IDEuMTc5LjE4IDEwLjEwNnYzLjMwOXEwIC43Ny4yMjUgMS4wODdoMi43NzdxLjc2Mi0uMDkgMS4yMzIuMzYyLjQ3LjQ1My40NyAxLjA4NSAwIC45OTQtLjk1IDEuNDAzLS41ODguMjI1LTIuMDguMDktLjcyMy0uMDQ1LTIuMTI2IDAtMS4yNjUuMTU3LTQuMDcuMzE2LTIuNDQzLjA5LTIuOTg1LS42NzgtLjM2My0uNTQyIDAtMS4xMy42MzItLjk5NSAzLjMwMi0uOTk1Ljk0OCAwIDEuMTc1LS4xNTguMjI2LS4xNi4yMjYtLjYxVjg5LjAzcS4xMzUtMi4zMDIgMC02Ljg2MS0uMTgtNi41NDQuMTgxLTExLjUwOWwtLjEzNy0uMTM2cS0xLjYzNy4wOS01LjI3NS0uMDktLjQxIDAtMi43NzQuMTgxLjU4NyA0LjExNy43MjMgNi4xOTYgMCAuMjcyLS4wOSAxLjIyMS0uMDQ2LjY3OC0xLjEzMS42NzktLjU4OSAwLS42NzgtLjQwNC0uMDQ2LS4wOS0uNTQzLTIuNDIybC0uNzY5LTQuMzA2cTAtLjE3OS0uMzE2LTEuMTIxLS4yNy0uNzY0LS4yNy0xLjE2Ni0uMDAxLS4zMTUuNDMtLjc4NS40My0uNDcxIDEuMjg5LS42MDZoNS42MDhxMy42NjMuMTM1IDYuNTEyIDBhODggODggMCAwIDAgOC4wNS0uNzI0cS4yNzMtLjEzNS44MTQtLjI3Ljk5NS0uMDkgMS42MjkuNDUyLjYzMy41NC40NTIgMS40NDciIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+";

  const vm = Scratch.vm;
  const runtime = vm.runtime;
  let selectorOptions = {
    border: "#888", text: "#000", outer: "#fff",
    sizeFont: 1.5, borderRadius: 16, borderType: "dashed",
    font: "inherit", shadow: 0.5, image: "", imageScale: 100,
    textV: "Select or drop file", fontWeight: 40, letterSpacing: "normal"
  };
  const builtInFonts = [
    "Sans Serif", "Serif", "Handwriting",
    "Marker", "Curly", "Pixel", "Scratch", "inherit"
  ];
  const AS_TEXT = "text", AS_DATA_URL = "url", AS_HEX = "hex";
  const AS_BASE64 = "base64", AS_BUFFER = "arrayBuffer";

  const MODE_MODAL = "modal";
  const MODE_IMMEDIATELY_SHOW_SELECTOR = "selector";
  const MODE_ONLY_SELECTOR = "only-selector";
  const ALL_MODES = [MODE_MODAL, MODE_IMMEDIATELY_SHOW_SELECTOR, MODE_ONLY_SELECTOR];
  let openFileSelectorMode = MODE_MODAL;

  let storedFiles = {};
  let FileName = "", FileSize = "0kb", RawFileSize = "0", fileDate = "", lastData = "";
  let enableVis = true, openModals = 0;

  const isCancelEventSupported = (input) => {
    if ("oncancel" in input) return true;
    return navigator.userAgent.includes("Firefox");
  };

  const formatFileSize = (size) => {
    const units = ["B", "KB", "MB", "GB", "TB"];
    let i = 0;
    while (size >= 1024 && i < units.length - 1) {
      size /= 1024;
      i++;
    }
    return `${size.toFixed(2)} ${units[i]}`;
  };

  function base64ToHex(str, delim) {
    const raw = atob(str);
    let result = "";
    for (let i = 0; i < raw.length; i++) {
      const hex = raw.charCodeAt(i).toString(16);
      result += delim.toString() + (hex.length === 2 ? hex : "0" + hex);
    }
    return result.toUpperCase();
  }

  function bufferToBase64(buffer) {
    var binary = "";
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) { binary += String.fromCharCode( bytes[ i ] ) }
    return btoa(binary);
  }

  const showFilePrompt = async (accept, as, override) => new Promise(async (_resolve) => {
    openModals++;
    const callback = (text) => {
      let finalTxt = text;
      if (override === undefined) {
        if ([AS_HEX, AS_BASE64].includes(as)) {
          let uri = finalTxt.split(",");
          finalTxt = uri.splice(1, uri.length).join(",");
          if (as === AS_HEX) finalTxt = base64ToHex(finalTxt, " ");
        }
        lastData = finalTxt;
      }
      openModals--;
      _resolve(finalTxt);
      vm.renderer.removeOverlay(outer);
      runtime.off("PROJECT_STOP_ALL", handleProjectStopped);
      document.body.removeEventListener("keydown", handleKeyDown);
    };
    let isReadingFile = false;
    const readFile = (file) => {
      if (isReadingFile) return;
      isReadingFile = true;
      const reader = new FileReader();
      reader.onload = () => {
        FileName = file.name;
        FileSize = formatFileSize(file.size);
        RawFileSize = file.size;
        const rawDate = new Date(file.lastModified);
        fileDate = rawDate.toLocaleString();
        callback(reader.result);
      };
      reader.onerror = () => {
        console.error("Failed to read file as text", reader.error);
        callback("");
      };
      if (override !== undefined) callback(file);
      else if (as === AS_TEXT) reader.readAsText(file);
      else if (as === AS_BUFFER) reader.readAsArrayBuffer(file);
      else reader.readAsDataURL(file);
    };
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        e.preventDefault();
        callback("");
      }
    };
    document.body.removeEventListener("keydown", handleKeyDown);
    document.body.addEventListener("keydown", handleKeyDown, { capture: true });
    const handleProjectStopped = () => { callback("") };
    runtime.on("PROJECT_STOP_ALL", handleProjectStopped);
    const handleOverride = async () => {
      let fileInfo;
      if (override === undefined) input.click();
      else {
        try {
          if (override === "folder") {
            fileInfo = await window.showDirectoryPicker({
              multiple: false, types: [{ accept: { "*/*" : [] }}]
            });
          } else {
            fileInfo = await window.showOpenFilePicker({
              multiple: false, types: [{ accept: { "*/*" : accept }}]
            });
          }
          callback(fileInfo);
        } catch { callback("") }
      }
    };

    const INITIAL_BORDER_COLOR = selectorOptions.border;
    const DROPPING_BORDER_COLOR = "#03a9fc";
    const outer = document.createElement("div");
    outer.style.pointerEvents = "auto";
    outer.style.width = "100%";
    outer.style.height = "100%";
    outer.style.display = "flex";
    outer.style.alignItems = "center";
    outer.style.justifyContent = "center";
    outer.style.background = `rgba(0, 0, 0, ${selectorOptions.shadow})`;
    outer.style.color = selectorOptions.text;
    outer.style.colorScheme = "light";
    if (override === undefined) {
      outer.addEventListener("dragover", (e) => {
        if (e.dataTransfer.types.includes("Files")) {
          e.preventDefault();
          e.dataTransfer.dropEffect = "copy";
          modal.style.borderColor = DROPPING_BORDER_COLOR;
        }
      });
      outer.addEventListener("dragleave", () => { modal.style.borderColor = INITIAL_BORDER_COLOR });
      outer.addEventListener("drop", (e) => {
        const file = e.dataTransfer.files[0];
        if (file) {
          e.preventDefault();
          readFile(file);
        }
      });
    }
    outer.addEventListener("click", (e) => { if (e.target === outer) callback("") });

    const modal = document.createElement("button");
    modal.style.boxShadow = "0 0 10px -5px currentColor";
    modal.style.cursor = "pointer";
    modal.style.font = selectorOptions.font;
    modal.style.fontFamily = selectorOptions.font;
    modal.style.background = selectorOptions.image ? selectorOptions.image : selectorOptions.outer;
    modal.style.backgroundSize = selectorOptions.imageScale + "%";
    modal.style.padding = "16px";
    modal.style.borderRadius = `${selectorOptions.borderRadius}px`;
    modal.style.border = `8px ${selectorOptions.borderType} ${INITIAL_BORDER_COLOR}`;
    modal.style.position = "relative";
    modal.style.textAlign = "center";
    modal.addEventListener("click", async () => { await handleOverride() });
    modal.focus();
    outer.appendChild(modal);

    const input = document.createElement("input");
    input.type = "file";
    input.accept = accept;
    if (override === undefined) {
      input.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (file) readFile(file);
      });
    }

    const title = document.createElement("div");
    title.textContent = selectorOptions.textV;
    title.style.color = selectorOptions.text;
    title.style.fontSize = `${selectorOptions.sizeFont}em`;
    title.style.fontWeight =  selectorOptions.fontWeight * 9;
    title.style.letterSpacing = `${selectorOptions.letterSpacing}px`;
    title.style.marginBottom = "8px";
    modal.appendChild(title);

    const subtitle = document.createElement("div");
    subtitle.textContent = `Accepted Formats: ${accept || "any"}`;
    subtitle.style.fontSize = `${selectorOptions.sizeFont - 0.5}em`;
    subtitle.style.color = selectorOptions.text;
    subtitle.style.fontWeight =  selectorOptions.fontWeight * 9;
    subtitle.style.letterSpacing = `${selectorOptions.letterSpacing}px`;
    modal.appendChild(subtitle);
    if (openFileSelectorMode === MODE_ONLY_SELECTOR && !isCancelEventSupported(input)) {
      openFileSelectorMode = MODE_IMMEDIATELY_SHOW_SELECTOR;
    }
    if (openFileSelectorMode !== MODE_ONLY_SELECTOR) {
      const overlay = vm.renderer.addOverlay(outer, "scale");
      overlay.container.style.zIndex = "100";
    }
    if (
      openFileSelectorMode === MODE_IMMEDIATELY_SHOW_SELECTOR || openFileSelectorMode === MODE_ONLY_SELECTOR
    ) {
      await handleOverride();
    }
    if (openFileSelectorMode === MODE_ONLY_SELECTOR) input.addEventListener("cancel", () => { callback("") });
  });

  const downloadURL = (url, file) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = file;
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const downloadBlob = (blob, file) => {
    const url = URL.createObjectURL(blob);
    downloadURL(url, file);
    (requestIdleCallback ?? setTimeout)(() => URL.revokeObjectURL(url));
  };

  const isDataURL = (url) => {
    try {
      const parsed = new URL(url);
      return parsed.protocol === "data:";
    } catch { return false }
  };

  const downloadUntrustedURL = (url, file) => {
    if (isDataURL(url)) downloadURL(url, file);
    else return Scratch.fetch(url).then((res) => res.blob()).then((blob) => { downloadBlob(blob, file) });
  };

  class filesExpanded {
    constructor() {
      this._showUnsafeOptions = false;
    }
    getInfo() {
      return {
        id: "filesExpanded",
        name: "Files Expanded",
        menuIconURI,
        color1: "#fcb103",
        color2: "#db9a37",
        color3: "#db8937",
        blocks: [
          { blockType: Scratch.BlockType.LABEL, text: "Uploading" },
          {
            opcode: "showPicker", blockType: Scratch.BlockType.REPORTER,
            text: "open a file", hideFromPalette: true
          },
          {
            opcode: "showPickerExtensions", blockType: Scratch.BlockType.REPORTER,
            text: "open a [extension] file", hideFromPalette: true,
            arguments: {
              extension: { type: Scratch.ArgumentType.STRING, defaultValue: ".txt" }
            }
          },
          // Builder Functions ^
          {
            opcode: "showPickerAs",
            blockType: Scratch.BlockType.REPORTER,
            text: "open a file as [as]",
            arguments: {
              as: { type: Scratch.ArgumentType.STRING, menu: "encoding" }
            }
          },
          {
            opcode: "showPickerExtensionsAs",
            blockType: Scratch.BlockType.REPORTER,
            text: "open a [extension] file as [as]",
            arguments: {
              extension: { type: Scratch.ArgumentType.STRING, defaultValue: ".txt" },
              as: { type: Scratch.ArgumentType.STRING, menu: "encoding" }
            }
          },
          { blockType: Scratch.BlockType.LABEL, text: "Downloading" },
          {
            opcode: "download",
            blockType: Scratch.BlockType.COMMAND,
            text: "download [text] as [file]",
            arguments: {
              text: { type: Scratch.ArgumentType.STRING, defaultValue: "Hello, world!" },
              file: { type: Scratch.ArgumentType.STRING, defaultValue: "save.txt" }
            }
          },
          {
            opcode: "downloadURL",
            blockType: Scratch.BlockType.COMMAND,
            text: "download URL [url] as [file]",
            arguments: {
              url: { type: Scratch.ArgumentType.STRING, defaultValue: "data:text/plain;base64,SGVsbG8sIHdvcmxkIQ==" },
              file: { type: Scratch.ArgumentType.STRING, defaultValue: "save.txt" }
            }
          },
          { blockType: Scratch.BlockType.LABEL, text: "Extra" },
          {
            opcode: "setOpenMode",
            blockType: Scratch.BlockType.COMMAND,
            text: "set open file selector mode to [mode]",
            arguments: {
              mode: { type: Scratch.ArgumentType.STRING, menu: "automaticallyOpen" }
            }
          },
          {
            opcode: "fileInfo",
            blockType: Scratch.BlockType.REPORTER,
            text: "last opened file [FORMAT]",
            arguments: {
              FORMAT: { type: Scratch.ArgumentType.STRING, menu: "FILE_INFO" }
            }
          },
          "---",
          {
            opcode: "modalOpen",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "is modal open?"
          },
          {
	    opcode: "findFileSize",
	    blockType: Scratch.BlockType.REPORTER,
	    text: "[TYPE] file size of [FILE]",
	    arguments: {
	      TYPE: { type: Scratch.ArgumentType.STRING, menu: "FILE_SIZES" },
	      FILE: { type: Scratch.ArgumentType.STRING, defaultValue: "Hello, world!" }
	    }
	  },
	  { blockType: Scratch.BlockType.LABEL, text: "Stored Files" },
          {
	    opcode: "checkFileAPI",
	    blockType: Scratch.BlockType.BOOLEAN,
	    text: "is file writing supported?"
	  },
	  {
	    opcode: "allStored",
	    blockType: Scratch.BlockType.REPORTER,
	    text: "all stored files"
	  },
	  {
	    opcode: "setStoredFile",
	    blockType: Scratch.BlockType.COMMAND,
	    text: "open new stored [FILE] file named [NAME] as [TYPE]",
	    arguments: {
	      NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "my-file-1" },
	      FILE: { type: Scratch.ArgumentType.STRING, defaultValue: ".txt" },
	      TYPE: { type: Scratch.ArgumentType.STRING, menu: "encoding" }
	    }
	  },
	  {
	    opcode: "storedFolder",
	    blockType: Scratch.BlockType.COMMAND,
	    text: "open folder and store files as [TYPE] with name [NAME]",
	    arguments: {
	      TYPE: { type: Scratch.ArgumentType.STRING, menu: "encoding" },
	      NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "my-folder-1" }
	    }
	  },
	  {
	    opcode: "deleteStoredFile",
	    blockType: Scratch.BlockType.COMMAND,
	    text: "delete file [NAME] from [OPTION]",
	    arguments: {
	      NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "my-file-1" },
	      OPTION: { type: Scratch.ArgumentType.STRING, menu: "DELETION" },
	    }
	  },
	  "---",
	  {
	    opcode: "updateFile",
	    blockType: Scratch.BlockType.COMMAND,
	    text: "write [TXT] to stored file [NAME]",
	    arguments: {
	      TXT: { type: Scratch.ArgumentType.STRING, defaultValue: "new content" },
	      NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "my-file-1" }
	    }
	  },
	  {
            opcode: "storedInfo",
            blockType: Scratch.BlockType.REPORTER,
            text: "[FORMAT] in stored file [NAME]",
            arguments: {
              FORMAT: { type: Scratch.ArgumentType.STRING, menu: "FILE_INFO" },
	      NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "my-file-1" }
            }
          },
          "---",
	  {
	    opcode: "moveStorage",
	    blockType: Scratch.BlockType.COMMAND,
	    text: "migrate files to CST's Zip Extension",
	  },
	  { blockType: Scratch.BlockType.LABEL, text: "Visuals" },
          {
            func: "toggleVis",
            blockType: Scratch.BlockType.BUTTON,
            text: `${enableVis ? "En" : "Dis"}able Customization`,
          },
          {
            opcode: "resetStyle",
            blockType: Scratch.BlockType.COMMAND,
            text: "reset selector style to default",
            hideFromPalette: enableVis
          },
          "---",
          {
            opcode: "imageSet",
            blockType: Scratch.BlockType.COMMAND,
            text: "set selector image to [IMG]",
            hideFromPalette: enableVis,
            arguments: {
              IMG: { type: Scratch.ArgumentType.STRING, defaultValue: "https://extensions.turbowarp.org/dango.png" }
            }
          },
          {
            opcode: "scaleImage",
            blockType: Scratch.BlockType.COMMAND,
            text: "scale selector image to [SCALE]%",
            hideFromPalette: enableVis,
            arguments: {
              SCALE: { type: Scratch.ArgumentType.NUMBER, defaultValue: 100 }
            }
          },
          "---",
          {
            opcode: "borderColors",
            blockType: Scratch.BlockType.COMMAND,
            text: "set selector [OPTION] color to [COLOR]",
            hideFromPalette: enableVis,
            arguments: {
              OPTION: { type: Scratch.ArgumentType.STRING, menu: "visualColors" },
              COLOR: { type: Scratch.ArgumentType.COLOR, defaultValue: "#ff0000" }
            }
          },
          {
            opcode: "visualsSelect",
            blockType: Scratch.BlockType.COMMAND,
            text: "set selector [OPTION] to [AMT]",
            hideFromPalette: enableVis,
            arguments: {
              OPTION: { type: Scratch.ArgumentType.STRING, menu: "visualOptions" },
              AMT: { type: Scratch.ArgumentType.NUMBER, defaultValue: 15 }
            }
          },
          {
            opcode: "borderTypeSet",
            blockType: Scratch.BlockType.COMMAND,
            text: "set selector border type to [TYPE]",
            hideFromPalette: enableVis,
            arguments: {
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "borderTypes" }
            }
          },
          {
            opcode: "fontSet",
            blockType: Scratch.BlockType.COMMAND,
            text: "set selector font to [FONT]",
            hideFromPalette: enableVis,
            arguments: {
              FONT: { type: Scratch.ArgumentType.STRING, menu: "font" }
            }
          },
          {
            opcode: "textSet",
            blockType: Scratch.BlockType.COMMAND,
            text: "set file selector text to [TEXT]",
            hideFromPalette: enableVis,
            arguments: {
              TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: "Insert File Here" }
            }
          },
          {
            opcode: "currentX",
            blockType: Scratch.BlockType.REPORTER,
            text: "current selector [THING]",
            hideFromPalette: enableVis,
            arguments: {
              THING: { type: Scratch.ArgumentType.STRING, menu: "all" }
            }
          },
        ],
        menus: {
          font: { acceptReporters: true, items: "getFonts" },
          encoding: { acceptReporters: true, items: "getEncodings" },
          automaticallyOpen: {
            acceptReporters: true,
            items: [
              { text: "show modal", value: MODE_MODAL },
              { text: "open selector immediately", value: MODE_IMMEDIATELY_SHOW_SELECTOR },
              { text: "only show selector (unreliable)", value: MODE_ONLY_SELECTOR }
            ],
          },
          all: {
            acceptReporters: true,
            items: [
              { text: "border color", value: "border" },
              { text: "text color", value: "text" },
              { text: "background color", value: "outer" },
              { text: "shadow intensity", value: "shadow" },
              { text: "font", value: "font" },
              { text: "font size", value: "sizeFont" },
              { text: "font thickness", value: "fontWeight" },
              { text: "letter spacing", value: "letterSpacing" },
              { text: "border radius", value: "borderRadius" },
              { text: "border type", value: "borderType" },
              { text: "background image", value: "image" },
              { text: "text", value: "textV" }
            ],
          },
          FILE_SIZES: {
            acceptReporters: true,
            items: ["formatted", "unformatted"],
          },
          FILE_INFO: {
            acceptReporters: true,
            items: ["data", "name", "modified date", "size formatted", "size unformatted"],
          },
          DELETION: {
            acceptReporters: true,
            items: ["storage", "this device", "both"],
          },
          visualColors: {
            acceptReporters: true,
            items: ["border", "text", "background"],
          },
          visualOptions: {
            acceptReporters: true,
            items: ["font size", "font thickness", "letter spacing", "border radius", "shadow intensity"],
          },
          borderTypes: {
            acceptReporters: true,
            items: [
              "dotted", "dashed", "solid", "double", 
              "groove", "ridge", "inset", "outset", "none"
            ],
          },
        },
      };
    }

    // Helper Funcs
    getFonts() {
      const customFonts = runtime.fontManager ? runtime.fontManager.getFonts().map((i) => ({ text: i.name, value: i.family })) : [];
      return [ ...builtInFonts, ...customFonts ];
    }

    getEncodings(onlySafe) {
      const types = [
        { text: "text", value: AS_TEXT }, { text: "data: URL", value: AS_DATA_URL },
        { text: "base64", value: AS_BASE64 }, { text: "hex", value: AS_HEX }
      ];
      if (this._showUnsafeOptions) types.push({ text: "arrayBuffer", value: AS_BUFFER });
      return types;
    }

    toggleVis() { enableVis = enableVis ? false : true, vm.extensionManager.refreshBlocks() }

    showPicker() { return showFilePrompt("", AS_TEXT) }

    showPickerExtensions(args) { return showFilePrompt(args.extension, AS_TEXT) }

    updateStore(name, data, metaData) {
      const rawDate = new Date(metaData.lastModified);
      storedFiles[name].data = {
        size: metaData.size, sizeFormat: formatFileSize(metaData.size),
        dateFormat: rawDate.toLocaleString(), data
      };
    }

    async encodeData(meta, format) {
      const text = await meta.text();
      const buffer = await meta.arrayBuffer();
      if (format === AS_TEXT) return text;
      else if (format === AS_BUFFER) return buffer;
      const base64 = bufferToBase64(buffer);
      if (format === AS_BASE64) return base64;
      else if (format === AS_DATA_URL) return `data:${meta.type};charset=utf-8;base64,${base64}`;
      else if (format === AS_HEX) return base64ToHex(base64, " ");
      return text;
    }

    // Block Funcs (Upload & Download)
    showPickerAs(args) { return showFilePrompt("", args.as) }

    showPickerExtensionsAs(args) { return showFilePrompt(args.extension, args.as) }

    download(args) {
      downloadBlob(new Blob([Scratch.Cast.toString(args.text)]), Scratch.Cast.toString(args.file));
    }

    downloadURL(args) {
      return downloadUntrustedURL(Scratch.Cast.toString(args.url), Scratch.Cast.toString(args.file));
    }

    setOpenMode(args) { if (ALL_MODES.includes(args.mode)) openFileSelectorMode = args.mode }

    fileInfo(args) {
      if (args.FORMAT === "size formatted") return FileSize;
      else if (args.FORMAT === "size unformatted") return RawFileSize;
      else if (args.FORMAT === "modified date") return fileDate;
      else if (args.FORMAT === "data") return lastData;
      return FileName;
    }

    modalOpen() { return openModals !== 0 }

    // File Writing & Folders
    checkFileAPI() { return "showOpenFilePicker" in window }

    allStored() { return JSON.stringify(Object.keys(storedFiles)) }

    async setStoredFile(args) {
      if (!this.checkFileAPI()) return;
      let fileTypes = args.FILE ? args.FILE.split(" ") : [];
      try {
	const picker = await showFilePrompt(fileTypes, "", "window");
	if (!picker) return;
        storedFiles[args.NAME] = { file: picker[0], data: {} };
	const metaData = await picker[0].getFile();
	const encodedData = await this.encodeData(metaData, args.TYPE);
	this.updateStore(args.NAME, encodedData, metaData);
      } catch(e) { console.warn(e) }
    }

    async storedFolder(args) {
      if (!this.checkFileAPI()) return;
      try {
	const picker = await showFilePrompt("Folder", "", "folder");
        if (!picker) return;
        const entries = picker.entries();
        const folderN = args.NAME ? args.NAME : picker.name;
        let thisFile = "";
        while (thisFile !== undefined) {
          const outerData = await entries.next();
          thisFile = outerData.value;
          if (thisFile !== undefined) {
            const innerData = thisFile[1];
            const name = `${folderN}/${innerData.name}`;
            storedFiles[name] = { file: innerData, data: {} };
	    const metaData = await innerData.getFile();
	    const encodedData = await this.encodeData(metaData, args.TYPE);
	    this.updateStore(name, encodedData, metaData);
          }
        }
      } catch(e) { console.warn(e) }
    }

    deleteStoredFile(args) {
      if (args.OPTION === "this device" || args.OPTION === "both") {
        if (!this.checkFileAPI() || storedFiles[args.NAME] === undefined) return;
        storedFiles[args.NAME].file.remove();
      }
      if (args.OPTION === "storage" || args.OPTION === "both") delete storedFiles[args.NAME]
    }

    async updateFile(args) {
      if (!this.checkFileAPI() || storedFiles[args.NAME] === undefined) return;
      try {
	const writable = await storedFiles[args.NAME].file.createWritable();
	await writable.write(args.TXT);
	await writable.close();
	this.updateStore(args.NAME, args.TXT, { lastModified: Date.now(), size: args.TXT.length });
      } catch (e) {	console.warn(e) }
    }

    storedInfo(args) {
      const fileInfo = storedFiles[args.NAME];
      if (fileInfo === undefined) return "";
      else if (args.FORMAT === "size formatted") return fileInfo.data.sizeFormat;
      else if (args.FORMAT === "size unformatted") return fileInfo.data.size;
      else if (args.FORMAT === "modified date") return fileInfo.data.dateFormat;
      else if (args.FORMAT === "data") return fileInfo.data.data;
      return fileInfo.file.name;
    }

    moveStorage() {
      const ext = runtime.ext_cst1229zip;
      if (ext === undefined) return;
      ext.createEmptyAs({ NAME: "filesExpanded_storedFiles" });
      if (ext.zipError) return;
      const zip = ext.zips["filesExpanded_storedFiles"];
      for (const [name, file] of Object.entries(storedFiles)) { zip.file(name, file.data.data) }
    }

    // Extra
    findFileSize(args) {
      const size = args.FILE.length; // bytes
      if (args.TYPE === "formatted") return formatFileSize(size);
      return size;
    }

    // Visuals
    resetStyle() {
      selectorOptions = {
        border: "#888", text: "#000000", outer: "#ffffff",
        sizeFont: 1.5, borderRadius: 16, borderType: "dashed",
        font: "inherit", shadow: 0.5, image: "", imageScale: 100,
        textV: "Select or drop file", fontWeight: 40, letterSpacing: "normal"
      };
    }

    borderColors(args) {
      switch (args.OPTION) {
        case "text":
          selectorOptions.text = args.COLOR;
          break;
        case "background":
          selectorOptions.outer = args.COLOR;
          selectorOptions.image = "";
          break;
        default: selectorOptions.border = args.COLOR;
      }
    }

    visualsSelect(args) {
      switch (args.OPTION) {
        case "font size": { selectorOptions.sizeFont = args.AMT / 10; break }
        case "font thickness": { selectorOptions.fontWeight = args.AMT; break }
        case "letter spacing": { selectorOptions.letterSpacing = args.AMT; break }
        case "border radius": { selectorOptions.borderRadius = args.AMT; break }
        case "shadow intensity": { selectorOptions.shadow = args.AMT / 100; break }
        default: selectorOptions.border = args.AMT;
      }
    }

    borderTypeSet(args) { selectorOptions.borderType = args.TYPE }

    fontSet(args) { selectorOptions.font = args.FONT }

    currentX(args) {
      if (args.THING === "shadow" || args.THING === "sizeFont") {
        const multiplier = args.THING === "shadow" ? 100 : 10;
        return selectorOptions[args.THING] * multiplier;
      }
      return selectorOptions[args.THING];
    }

    imageSet(args) {
      Scratch.canFetch(encodeURI(args.IMG)).then(canFetch => {
        if (canFetch) selectorOptions.image = `url(${encodeURI(args.IMG)})`;
        else console.warn("Cannot fetch content from the URL.")
      });
    }

    scaleImage(args) { selectorOptions.imageScale = args.SCALE }

    textSet(args) { selectorOptions.textV = args.TEXT }
  }

  Scratch.extensions.register(runtime.ext_filesexpanded = new filesExpanded());
})(Scratch);
