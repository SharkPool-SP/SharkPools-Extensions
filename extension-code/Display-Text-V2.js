// Name: Display Text V2
// ID: SPdisplayTextV2
// Description: Display Text in Your Projects.
// By: SharkPool
// License: MIT

// Version V.1.0.05

(function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) throw new Error("Display Text V2 must run unsandboxed!");

  const menuIconURI =
"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NS4yMzQiIGhlaWdodD0iNjUuMjM0IiB2aWV3Qm94PSIwIDAgNjUuMjM0IDY1LjIzNCI+PGcgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIj48cGF0aCBkPSJNMCAzMi42MTdDMCAxNC42MDMgMTQuNjAzIDAgMzIuNjE3IDBzMzIuNjE3IDE0LjYwMyAzMi42MTcgMzIuNjE3LTE0LjYwMyAzMi42MTctMzIuNjE3IDMyLjYxN1MwIDUwLjYzMSAwIDMyLjYxNyIgZmlsbD0iIzNjNGU1YyIvPjxwYXRoIGQ9Ik0zLjM5MSAzMi42MTdjMC0xNi4xNDEgMTMuMDg1LTI5LjIyNiAyOS4yMjYtMjkuMjI2czI5LjIyNiAxMy4wODUgMjkuMjI2IDI5LjIyNi0xMy4wODUgMjkuMjI2LTI5LjIyNiAyOS4yMjZTMy4zOTEgNDguNzU4IDMuMzkxIDMyLjYxNyIgZmlsbD0iIzc4OSIvPjxwYXRoIGQ9Ik0xOS4wNzYgNDkuNDc5YTMuMzIgMy4zMiAwIDAgMS0zLjMyMS0zLjMydi00Ljk1aDIuNjA3djIuODU1YTIuODEgMi44MSAwIDAgMCAyLjgwOCAyLjgwOGgyLjg1NHYyLjYwN3ptMjQuOTg4LTIuNjA3YTIuODEgMi44MSAwIDAgMCAyLjgwOC0yLjgwOFY0MS4yMWgyLjYwN3Y0Ljk0OGEzLjMyIDMuMzIgMCAwIDEtMy4zMiAzLjMyMWgtNC45NXYtMi42MDd6bS0yOC4zMS0yNy43OTZhMy4zMiAzLjMyIDAgMCAxIDMuMzIyLTMuMzIxaDQuOTQ4djIuNjA3SDIxLjE3YTIuODEgMi44MSAwIDAgMC0yLjgwOCAyLjgwOHYyLjg1NGgtMi42MDd6bTMwLjQwNC0zLjMyMWEzLjMyIDMuMzIgMCAwIDEgMy4zMjEgMy4zMnY0Ljk1aC0yLjYwN1YyMS4xN2EyLjgxIDIuODEgMCAwIDAtMi44MDgtMi44MDhINDEuMjF2LTIuNjA3eiIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIuNSIvPjxwYXRoIGQ9Ik0yNS44MTEgMjcuNTIxYS45My45MyAwIDAgMS0uOTI4LS45Mjl2LTEuNjI2YzAtLjUxMy40MTUtLjkyOC45MjgtLjkyOGgxMy42MTJjLjUxMyAwIC45MjguNDE1LjkyOC45Mjh2MS42MjZhLjkzLjkzIDAgMCAxLS45MjguOTI5eiIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEuNSIvPjxwYXRoIGQ9Ik0zMC44NzUgMjYuNjU3YS45My45MyAwIDAgMSAuOTI5LS45M2gxLjYyNmEuOTMuOTMgMCAwIDEgLjkyOS45M3YxMy42MTFhLjkzLjkzIDAgMCAxLS45MjkuOTI4aC0xLjYyNmEuOTMuOTMgMCAwIDEtLjkyOS0uOTI4eiIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEuNSIvPjwvZz48L3N2Zz4=";

  const blockIconURI =
"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OS42MjQiIGhlaWdodD0iNDkuNjI0IiB2aWV3Qm94PSIwIDAgNDkuNjI0IDQ5LjYyNCI+PGcgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIj48cGF0aCBkPSJNMCA0OS42MjRWMGg0OS42MjR2NDkuNjI0eiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0xMS4yNzEgNDEuNjc0YTMuMzIgMy4zMiAwIDAgMS0zLjMyMS0zLjMydi00Ljk1aDIuNjA3djIuODU1YTIuODEgMi44MSAwIDAgMCAyLjgwOCAyLjgwOGgyLjg1NHYyLjYwN3ptMjQuOTg4LTIuNjA3YTIuODEgMi44MSAwIDAgMCAyLjgwOC0yLjgwOHYtMi44NTRoMi42MDd2NC45NDhhMy4zMiAzLjMyIDAgMCAxLTMuMzIgMy4zMjFoLTQuOTV2LTIuNjA3ek03Ljk0OSAxMS4yNzFhMy4zMiAzLjMyIDAgMCAxIDMuMzIyLTMuMzIxaDQuOTQ4djIuNjA3aC0yLjg1NGEyLjgxIDIuODEgMCAwIDAtMi44MDggMi44MDh2Mi44NTRINy45NXpNMzguMzUzIDcuOTVhMy4zMiAzLjMyIDAgMCAxIDMuMzIxIDMuMzJ2NC45NWgtMi42MDd2LTIuODU1YTIuODEgMi44MSAwIDAgMC0yLjgwOC0yLjgwOGgtMi44NTRWNy45NXoiIGZpbGw9IiNmZmYiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyLjUiLz48cGF0aCBkPSJNMTguMDA2IDE5LjcxNmEuOTMuOTMgMCAwIDEtLjkyOC0uOTI5di0xLjYyNmMwLS41MTMuNDE1LS45MjguOTI4LS45MjhoMTMuNjEyYy41MTMgMCAuOTI4LjQxNS45MjguOTI4djEuNjI2YS45My45MyAwIDAgMS0uOTI4LjkyOXoiIGZpbGw9IiNmZmYiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz48cGF0aCBkPSJNMjMuMDcgMTguODUyYS45My45MyAwIDAgMSAuOTI5LS45M2gxLjYyNmEuOTMuOTMgMCAwIDEgLjkyOS45M3YxMy42MTFhLjkzLjkzIDAgMCAxLS45MjkuOTI4aC0xLjYyNmEuOTMuOTMgMCAwIDEtLjkyOS0uOTI4eiIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEuNSIvPjwvZz48L3N2Zz4=";

  const Cast = Scratch.Cast;
  const vm = Scratch.vm;
  const runtime = vm.runtime;
  const render = vm.renderer;

  const TRANSLATIONS = {
    id: Scratch.translate("my-text"),
  }

  const THREAD_KEY = Symbol("SPdisplayTextV2_threadKey");

  const textDiv = document.createElement("div");
  textDiv.id = "SPdisplayTextV2_textDiv";
  textDiv.style.pointerEvents = "none";
  render.addOverlay(textDiv, "scale-centered");

  const iteratorForEach = (iterator, func) => {
    if (typeof iterator.forEach === "function") {
      iterator.forEach((value) => func(value));
    } else {
      let value = iterator.next();
      while (!value.done) {
        func(value.value);
        value = iterator.next();
      }
    };
  }

  const BUILT_IN_FONTS = [];
  iteratorForEach(
    document.fonts.keys(),
    (font) => {
      BUILT_IN_FONTS.push({
        text: Scratch.translate(font.family),
        value: font.family
      });
    }
  );

  // Slightly modified version of Markdown for svg
  const MARKDOWN_CONSTS = {
    /* Bold */
    "**": `font-weight="bold"`,
    /* Italic */
    "*/": `font-style="italic"`,
    /* Strikethrough */
    "~~": `text-decoration="line-through"`,
    /* Underline */
    "__": `text-decoration="underline"`,
    /* Headers */
    "# ": `font-size="2em"`,
    "##": `font-size="1.4em"`,
    /* Text Color */
    "@c": `fill=`,
    /* Text Font */
    "@f": `font-family=`,
  };

  const XML_REGEX = new RegExp(/[<>&'"]/g);

  const xmlEscape = function(text) {
    return text.replace(XML_REGEX, char => {
      switch (char) {
        case "<": return "&lt;";
        case ">": return "&gt;";
        case "&": return "&amp;";
        case "'": return "&apos;";
        case "\"": return "&quot;";
      }
    });
  };

  const convert2Markdown = function(text) {
    let mdText = "";
    let commandCache = [];
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const charBuffer = char + (text[i + 1] ?? "");
      const mdCommand = MARKDOWN_CONSTS[charBuffer];

      if (charBuffer.length === 2 && mdCommand !== undefined) {
        const oldCommand = commandCache.indexOf(charBuffer);
        if (oldCommand > -1) {
          /* escape last command */
          commandCache.splice(oldCommand, 1);
          mdText += "</tspan>";
        } else {
          /* enter new command */
          commandCache.push(charBuffer);
          if (char === "@") {
            // special command
            // get command variable (font family, text color, etc)
            let value = "";
            if (text[i + 2] === "[") {
              let j = i + 3;
              while (text[j] && text[j] !== "]") {
                value += text[j];
                j++;
              }

              value = `"${value}"`;
              mdText += "<tspan " + mdCommand + value + ">";
              i += j - i - 1;
            }
          } else {
            // basic command
            mdText += "<tspan " + mdCommand + ">";
          }
        }
        i++;
      } else {
        mdText += char;
      }
    }

    const missingClosers = commandCache.length;
    if (missingClosers) {
      for (var i = 0; i < missingClosers; i++) mdText += "</tspan>";
    }

    return mdText;
  };

  /*
    prepare text to be printed as html,
    must be xml-escaped and converted for markdown.
  */
  const compileText = (rawText, lineSpace, pathInfo) => {
    const linePreset = `<tspan x="0" dy="${lineSpace}em">`;
    let safeText = "";
    if (pathInfo) {
      const offset = pathInfo[1] === "middle" ? "50%" : pathInfo[1] === "end" ? "100%" : "0%";
      safeText += `<textPath xlink:href="#curve-${pathInfo[0]}" href="#curve-${pathInfo[0]}" startOffset="${offset}">`;
    }

    safeText += `<tspan x="0" dy=".85em">` + xmlEscape(rawText);
    safeText = safeText.replace(/\n/g, "</tspan>" + linePreset);
    safeText = convert2Markdown(safeText);
    safeText += "</tspan>" + (pathInfo ? "</textPath>" : "");
    return safeText;
  };

  // basic css effects for text
  const EFFECT_HANDLERS = {
    "blur": (v) => ["filter", `blur(${v}px)`],
    "saturation": (v) => ["filter", `saturate(${v}%)`],
    "contrast": (v) => ["filter", `contrast(${v + 100}%)`],
    "brightness": (v) => ["filter", `brightness(${v + 100}%)`],
    "hue": (v) => ["filter", `hue-rotate(${v}deg)`],
    "opacity": (v) => ["filter", `opacity(${(100 - v) / 100})`],
    "sepia": (v) => ["filter", `sepia(${v}%)`],
    "invert": (v) => ["filter", `invert(${v}%)`],
    "direction": (v) => ["transform", `rotate(${v - 90})`],
    "scale x": (v) => ["scale1", v / 100],
    "scale y": (v) => ["scale2", v / 100],
    "skew x": (v) => ["transform", `skewX(${v})`],
    "skew y": (v) => ["transform", `skewY(${v})`],
  };

  /* Class used by text displays */
  class textObject {
    constructor(id, text) {
      this.id = id;
      this.rawText = text;
      this.cleansedText = compileText(text, 1, null);
      this.styles = new Map();
      this.specialStyles = new Map();
      this.clickTime = 0;
      this.position = [null, null];
      this._cachedImage = [null, null];

      this._dirty = false;
      this._interactable = false;
      this._clickable = false;

      this._element = null;
      this._elementInner = null;
      this._clickEvent = (e) => {
        e.stopPropagation();
        this.clickTime = e.timeStamp;
        runHatEvents("whenTextClicked", this.id);
      };
    }

    setText(newText) {
      if (newText === this.rawText) return;
      const hasCurve = Cast.toBoolean(this.specialStyles.get("curve"));
      const alignment = this._element ? this._elementInner.getAttribute("text-anchor") : "";

      this.rawText = newText;
      this.cleansedText = compileText(
        newText,
        this.specialStyles.get("line-height") ?? 1,
        hasCurve ? [this.id, alignment] : null
      );
      this._dirty = true;
    }

    setAttribute(name, value, isSpecial) {
      let oldValue;
      if (isSpecial) {
        oldValue = this.specialStyles.get(name); 
        if (value === oldValue) return;
        this.specialStyles.set(name, value);
        this._dirty = true;
      } else {
        oldValue = this.styles.get(name); 
        if (value === oldValue) return;
        this.styles.set(name, value);
        this._dirty = true;
      }
    }

    setPosition(x, y) {
      this.position = [x, y];
      if (!this._element) return;

      const bounds = this._elementInner.getBBox();
      y += bounds.height / 2;
      this._element.style.transform = `translate(${x}px, ${y * -1}px)`;
      this._elementInner.setAttribute("transform-origin", `0 ${bounds.y + bounds.height / 2}`);
    }

    toggleInteract(interactable) {
      if (!this._element || interactable === this._interactable) return;
      this._interactable = interactable;
      this._element.style.pointerEvents = interactable ? "auto" : "none";
    }

    toggleClickable(clickable) {
      if (!this._element || clickable === this._clickable) return;
      this._clickable = clickable;
      if (clickable) {
        this.toggleInteract(true);
        this._element.addEventListener("click", this._clickEvent);
      } else {
        this.toggleInteract(false);
        this._element.removeEventListener("click", this._clickEvent);
      }
    }

    wrapText(maxWidth) {
      if (!this._elementInner) return;
      const lineSpace = this.specialStyles.get("line-height") ?? 1;
      const tspans = Array.from(this._elementInner.children);
      const newTspans = [];

      let line = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
      line.setAttribute("x", "0");
      line.setAttribute("dy", ".85em");

      this._elementInner.innerHTML = "";
      this._elementInner.appendChild(line);
      for (const span of tspans) {
        for (const node of span.childNodes) {
          if (node.nodeType !== Node.TEXT_NODE) {
            line.appendChild(node.cloneNode(true));
            continue;
          }

          const words = node.textContent.split(/(\s+)/);
          for (const word of words) {
            if (word === "") continue;
            const testNode = document.createTextNode(word);
            line.appendChild(testNode);

            if (line.getComputedTextLength() > maxWidth) {
              line.removeChild(testNode);

              line = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
              line.setAttribute("x", "0");
              line.setAttribute("dy", `${lineSpace}em`);
              line.appendChild(testNode);

              this._elementInner.appendChild(line);
            }
          }
        }
      }
    }

    initElement() {
      this._element = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      this._element.setAttribute("id", encodeURIComponent(this.id));
      this._element.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      this._element.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
      this._element.setAttribute("style", `overflow: visible; pointer-events: none; position: absolute;`);

      if (typeof scaffolding === "undefined") {
        // inject filters for Debug Mode
        this._element.insertAdjacentHTML("afterBegin", generateDebugFilters());
      }

      this._elementInner = document.createElementNS("http://www.w3.org/2000/svg", "text");
      this._elementInner.setAttribute("paint-order", "stroke");
      this._elementInner.setAttribute("text-anchor", "middle");
      this._elementInner.setAttribute("xml:space", "preserve");
      this._elementInner.style.whiteSpace = "pre";

      this._elementInner.innerHTML = this.cleansedText;
      this._element.appendChild(this._elementInner);
      textDiv.appendChild(this._element);

	  // if there is a position preset for us, use it
	  if (presetPositions[this.id]) {
		this.setPosition(...presetPositions[this.id]);
		delete presetPositions[this.id];
	  } else {
		this.setPosition(0, 0);
	  }
    }

    updateElement(isStyleUpdate, isSpecialUpdate) {
      if (!this._dirty) return;
      this._dirty = false;
      this._cachedImage = [null, null];

      if (isSpecialUpdate) {
        const specialStyles = this.specialStyles;

        if (specialStyles.has("text-shadow")) {
          this._element.style.textShadow = specialStyles.get("text-shadow");
        }

        if (specialStyles.has("width")) {
          const wrapWidth = specialStyles.get("width");
          if (wrapWidth > 0) this.wrapText(wrapWidth);
          else this._elementInner.innerHTML = this.cleansedText;
        }

        if (specialStyles.has("effects")) {
          // compile a list of effects for the element
          const effects = specialStyles.get("effects");
          let filter = "";
          let transform = "";
          for (const effect of Object.values(effects)) {
            const [type, val] = effect.conv;
            if (type === "filter") filter += val + " ";
            else {
              if (type === "scale2") {
                if (!effects["scale x"]) transform += `scale(1, ${val}) `;
              } else if (type === "scale1") {
                const yScale = effects["scale y"]?.conv[1] ?? 1;
                transform += `scale(${val}, ${yScale}) `;
              } else {
                transform += val + " ";
              }
            }
          }

          if (filter) this._elementInner.setAttribute("filter", filter);
          if (transform) this._elementInner.setAttribute("transform", transform);
        }

        if (specialStyles.has("curve")) {
          const oldCurve = this._element.getElementById("curve-" + this.id);
          if (oldCurve) oldCurve.remove();
          
          const path = specialStyles.get("curve");
          const alignment = this._elementInner.getAttribute("text-anchor");
          if (path !== null) this._element.appendChild(path);
          this.cleansedText = compileText(
            this.rawText,
            this.specialStyles.get("line-height") ?? 1,
            path !== null ? [this.id, alignment] : null
          );
          this._elementInner.innerHTML = this.cleansedText;

          if (path !== null) queueMicrotask(() => {
            const textPath = this._elementInner.firstElementChild;
            textPath.setAttribute("xlink:href", "#curve-" + this.id);
            textPath.setAttribute("href", "#curve-" + this.id);
            textPath.setAttribute(
              "startOffset",
              alignment === "middle" ? "50%" : alignment === "end" ? "100%" : "0%"
            );
          });
        }

        if (specialStyles.has("gradient")) {
          const gradient = specialStyles.get("gradient");
          const id = gradient[0];

          const oldGradient = this._element.getElementById("gradColor" + id);
          if (oldGradient) oldGradient.remove();

          this._element.insertAdjacentHTML(
            "afterBegin",
            gradient[1].replace("gradColor", "gradColor" + id)
          );
        }
      }

      if (isStyleUpdate) {
        iteratorForEach(
          this.styles.entries(),
          (entry) => {
            const oldValue = this._elementInner.getAttribute(entry[0]);
            if (oldValue === entry[1]) return;
            this._elementInner.setAttribute(entry[0], entry[1]);
          }
        );
      } else {
        this._elementInner.innerHTML = this.cleansedText;
      }
      
      if (isInDebugMode) {
        const alignment = this._elementInner.getAttribute("text-anchor");
        this._elementInner.setAttribute(
          "filter",
          `url(#border${alignment === "middle" ? "G" : alignment === "end" ? "B" : "R"})`
        );
      }

      this.setPosition(...this.position);
    }

    dispose() {
      this.toggleClickable(false);
      this.setText("");
      this._element.remove();
      this.styles = null;
      this.specialStyles = null;
      this._element = null;
      this._elementInner = null;
      this._clickEvent = null;
      this._cachedImage = [null, null];
    }
  }

  function runHatEvents(opcode, optData) {
    runtime.allScriptsByOpcodeDo(
      "SPdisplayTextV2_" + opcode,
      (script, target) => {
        const thread = runtime._pushThread(script.blockId, target);
        if (optData) thread[THREAD_KEY] = optData;
      }
    );
  }

  function generateDebugFilters() {
    // SVG texts have no box border visual, so we have to fake it with filters
    const outlineFilters = [
      ["borderR", "#ff0000"],
      ["borderG", "#00ff00"],
      ["borderB", "#0000ff"]
    ];
    
    let filters = "<defs>";
    for (const filter of outlineFilters) {
      filters += `<filter id="${filter[0]}">`;
      filters += `<feFlood x="-50%" y="0" width="100%" height="100%" flood-color="${filter[1]}" flood-opacity="1" result="flood"></feFlood>`;
			filters += `<feMorphology in="flood" operator="erode" radius="2" result="line"></feMorphology>`;
			filters += `<feComposite in="flood" in2="line" operator="out" result="border"></feComposite>`;
			filters += `<feMerge><feMergeNode in="border"></feMergeNode>`;
			filters += `<feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter>`;
    }
    return filters + "</defs>";
  }

  function uint8ToBase64(uint8) {
    let binary = '';
    const chunkSize = 0x8000;
    for (let i = 0; i < uint8.length; i += chunkSize) {
      const chunk = uint8.subarray(i, i + chunkSize);
      binary += String.fromCharCode.apply(null, chunk);
    }
    return btoa(binary);
  }

  const textObjects = Object.create(null);
  const presetPositions = Object.create(null);
  let isInDebugMode = false;

  class SPdisplayTextV2 {
    constructor() {
      this.textObjects = textObjects;

      runtime.on("PROJECT_START", this.removeAllTxt);
      runtime.on("PROJECT_STOP_ALL", this.removeAllTxt);
    }
    getInfo() {
      return {
        id: "SPdisplayTextV2",
        name: "Display Text V2",
        color1: "#647b91",
        color2: "#465969",
        color3: "#324859",
        menuIconURI,
        blockIconURI,
        blocks: [
          {
            opcode: "printTxt",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("print text [TXT] with ID [ID]"),
            arguments: {
              ID: { type: Scratch.ArgumentType.STRING, defaultValue: TRANSLATIONS.id },
              TXT: { type: Scratch.ArgumentType.STRING, defaultValue: "hello world" }
            },
          },
          {
            opcode: "addLine",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("add line [TXT] to [ID]"),
            arguments: {
              ID: { type: Scratch.ArgumentType.STRING, defaultValue: TRANSLATIONS.id },
              TXT: { type: Scratch.ArgumentType.STRING, defaultValue: "lorem ipsum" }
            },
          },
          {
            opcode: "removeTxt",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("remove text [ID]"),
            arguments: {
              ID: { type: Scratch.ArgumentType.STRING, defaultValue: TRANSLATIONS.id }
            },
          },
          {
            opcode: "removeAllTxt",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("remove all text")
          },
          "---",
          {
            opcode: "txtExists",
            blockType: Scratch.BlockType.BOOLEAN,
            text: Scratch.translate("text [ID] exists?"),
            arguments: {
              ID: { type: Scratch.ArgumentType.STRING, defaultValue: TRANSLATIONS.id }
            },
          },
          {
            opcode: "allIDs",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("all text IDs")
          },
          "---",
          {
            opcode: "textAsImage",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("[ID] as [TYPE]"),
            arguments: {
              ID: { type: Scratch.ArgumentType.STRING, defaultValue: TRANSLATIONS.id },
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "IMG_EXPORTS" }
            },
          },
          { blockType: Scratch.BlockType.LABEL, text: Scratch.translate("Formatting") },
          {
            opcode: "setTextFont",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("set font of [ID] to [FONT]"),
            arguments: {
              ID: { type: Scratch.ArgumentType.STRING, defaultValue: TRANSLATIONS.id },
              FONT: { type: Scratch.ArgumentType.STRING, menu: "FONTS" }
            },
          },
          {
            opcode: "setFontSize",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("set font size of [ID] to [NUM]"),
            arguments: {
              ID: { type: Scratch.ArgumentType.STRING, defaultValue: TRANSLATIONS.id },
              NUM: { type: Scratch.ArgumentType.NUMBER, defaultValue: 30 }
            },
          },
          {
            opcode: "setTextAlign",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("set text alignment of [ID] to [ALIGNMENT]"),
            arguments: {
              ID: { type: Scratch.ArgumentType.STRING, defaultValue: TRANSLATIONS.id },
              ALIGNMENT: { type: Scratch.ArgumentType.STRING, menu: "ALIGNMENTS" }
            },
          },
          {
            opcode: "setBoldness",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("set boldness of [ID] to [NUM]"),
            arguments: {
              NUM: { type: Scratch.ArgumentType.NUMBER, defaultValue: 100 },
              ID: { type: Scratch.ArgumentType.STRING, defaultValue: TRANSLATIONS.id }
            }
          },
          {
            opcode: "setTextSpacing",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("set [ATT] spacing of [ID] to [SPACING]"),
            arguments: {
              ID: { type: Scratch.ArgumentType.STRING, defaultValue: TRANSLATIONS.id },
              SPACING: { type: Scratch.ArgumentType.NUMBER, defaultValue: 5 },
              ATT: { type: Scratch.ArgumentType.STRING, menu: "TEXT_ATT" }
            },
          },
          "---",
          {
            opcode: "setMargins",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("set width of [ID] to [WIDTH]"),
            arguments: {
              ID: { type: Scratch.ArgumentType.STRING, defaultValue: TRANSLATIONS.id },
              WIDTH: { type: Scratch.ArgumentType.NUMBER, defaultValue: 50 }
            },
          },
          "---",
          {
            opcode: "getTextAttribute",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("[ATT] of [ID]"),
            arguments: {
              ID: { type: Scratch.ArgumentType.STRING, defaultValue: TRANSLATIONS.id },
              ATT: { type: Scratch.ArgumentType.STRING, menu: "ATTRIBUTES" }
            },
          },
          { blockType: Scratch.BlockType.LABEL, text: Scratch.translate("Decorations") },
          {
            opcode: "setTextColor",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("set text color of [ID] to [COLOR]"),
            arguments: {
              ID: { type: Scratch.ArgumentType.STRING, defaultValue: TRANSLATIONS.id },
              COLOR: { type: Scratch.ArgumentType.COLOR, defaultValue: "#000000" }
            },
          },
          {
            opcode: "setTextShadow",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("set shadow of [ID] to x [x] y [y] z [z] color [COLOR]"),
            arguments: {
              ID: { type: Scratch.ArgumentType.STRING, defaultValue: TRANSLATIONS.id },
              x: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
              y: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
              z: { type: Scratch.ArgumentType.NUMBER, defaultValue: 5 },
              COLOR: { type: Scratch.ArgumentType.COLOR }
            },
          },
          {
            opcode: "setTextOutline",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("set outline of [ID] to [COLOR] with thickness [THICKNESS]"),
            arguments: {
              ID: { type: Scratch.ArgumentType.STRING, defaultValue: TRANSLATIONS.id },
              COLOR: { type: Scratch.ArgumentType.COLOR },
              THICKNESS: { type: Scratch.ArgumentType.NUMBER, defaultValue: 3 }
            },
          },
          {
            opcode: "setLineDecor",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("set line decoration of [ID] to [TYPE]"),
            arguments: {
              ID: { type: Scratch.ArgumentType.STRING, defaultValue: TRANSLATIONS.id },
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "LINE_TYPE" }
            },
          },
          "---",
          {
            opcode: "setTextCurve",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("set curve of [ID] to [PATH]"),
            arguments: {
              ID: { type: Scratch.ArgumentType.STRING, defaultValue: TRANSLATIONS.id },
              PATH: { type: Scratch.ArgumentType.STRING, exemptFromNormalization: true, defaultValue: "[[-100, -50], [0, 50], [100, -50]]" }
            },
          },
          {
            opcode: "presetCurve",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("preset curve [ARC]"),
            disableMonitor: true,
            arguments: {
              ARC: { type: Scratch.ArgumentType.STRING, menu: "ARCS" }
            },
          },
          "---",
          {
            opcode: "makeSvgGradient",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("[TYPE] gradient colored [COLOR1] and [COLOR2] at angle [ANGLE]"),
            arguments: {
              COLOR1: { type: Scratch.ArgumentType.COLOR, defaultValue: "#ff0000" },
              COLOR2: { type: Scratch.ArgumentType.COLOR, defaultValue: "#00ff00" },
              ANGLE: { type: Scratch.ArgumentType.ANGLE, defaultValue: 90 },
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "GRADIENT_TYPES" }
            },
          },
          { blockType: Scratch.BlockType.LABEL, text: Scratch.translate("Positioning") },
          {
            opcode: "setTextPosition",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("set position of [ID] to x [x] y [y]"),
            arguments: {
              ID: { type: Scratch.ArgumentType.STRING, defaultValue: TRANSLATIONS.id },
              x: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
              y: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 }
            },
          },
          {
            opcode: "textPosition",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("[ATT] of [ID]"),
            arguments: {
              ID: { type: Scratch.ArgumentType.STRING, defaultValue: TRANSLATIONS.id },
              ATT: { type: Scratch.ArgumentType.STRING, menu: "POS" }
            },
          },
          { blockType: Scratch.BlockType.LABEL, text: Scratch.translate("Effects") },
          {
            opcode: "setEffect",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("set [EFFECT] of [ID] to [VALUE]"),
            arguments: {
              ID: { type: Scratch.ArgumentType.STRING, defaultValue: TRANSLATIONS.id },
              VALUE: { type: Scratch.ArgumentType.NUMBER, defaultValue: 5 },
              EFFECT: { type: Scratch.ArgumentType.STRING, menu: "EFFECTS" }
            },
          },
          {
            opcode: "amtOfEffect",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("[EFFECT] of [ID]"),
            arguments: {
              EFFECT: { type: Scratch.ArgumentType.STRING, menu: "EFFECTS" },
              ID: { type: Scratch.ArgumentType.STRING, defaultValue: TRANSLATIONS.id }
            },
          },
          {
            opcode: "resetEffects",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("reset effects of [ID]"),
            arguments: {
              ID: { type: Scratch.ArgumentType.STRING, defaultValue: TRANSLATIONS.id }
            },
          },
          { blockType: Scratch.BlockType.LABEL, text: Scratch.translate("Advanced") },
          {
            func: "markdownTutorial",
            blockType: Scratch.BlockType.BUTTON,
            text: Scratch.translate("Markdown Formatting")
          },
          {
            opcode: "debug",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("toggle debug mode [TOGGLE]"),
            arguments: {
              TOGGLE: { type: Scratch.ArgumentType.STRING, menu: "TOGGLE" }
            },
          },
          "---",
          {
            opcode: "resetTxt",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("reset stylings of [ID]"),
            arguments: {
              ID: { type: Scratch.ArgumentType.STRING, defaultValue: TRANSLATIONS.id }
            },
          },
          {
            opcode: "reuseStyle",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("reuse stylings of [ID] to [ID2]"),
            arguments: {
              ID: { type: Scratch.ArgumentType.STRING, defaultValue: TRANSLATIONS.id },
              ID2: { type: Scratch.ArgumentType.STRING, defaultValue: TRANSLATIONS.id + "2" }
            },
          },
          "---",
          {
            opcode: "toggleSelect",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("toggle highlighting for ID [ID] [TYPE]"),
            arguments: {
              ID: { type: Scratch.ArgumentType.STRING, defaultValue: TRANSLATIONS.id },
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "TOGGLE" }
            },
          },
          {
            opcode: "toggleClickable",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("toggle clicking for [ID] [TYPE]"),
            arguments: {
              ID: { type: Scratch.ArgumentType.STRING, defaultValue: TRANSLATIONS.id },
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "TOGGLE" }
            },
          },
          {
            opcode: "isClicked",
            blockType: Scratch.BlockType.BOOLEAN,
            text: Scratch.translate("[ID] clicked?"),
            arguments: {
              ID: { type: Scratch.ArgumentType.STRING, defaultValue: TRANSLATIONS.id }
            },
          },
          {
            opcode: "whenTextClicked",
            blockType: Scratch.BlockType.HAT,
            isEdgeActivated: false,
            text: Scratch.translate("when [ID] text clicked"),
            arguments: {
              ID: { type: Scratch.ArgumentType.STRING, defaultValue: TRANSLATIONS.id }
            },
          },
        ],
        menus: {
          FONTS: { acceptReporters: true, items: "_getFonts", isTypeable: true },
          EFFECTS: { acceptReporters: true, items: "_getEffects" },
          TOGGLE: [
            { text: Scratch.translate("on"), value: "on" },
            { text: Scratch.translate("off"), value: "off" }
          ],
          IMG_EXPORTS: [
            { text: Scratch.translate("svg"), value: "svg" },
            { text: Scratch.translate("png"), value: "png" }
          ],
          TEXT_ATT: [
            { text: Scratch.translate("letter"), value: "letter" },
            { text: Scratch.translate("line"), value: "line" }
          ],
          POS: [
            { text: Scratch.translate("x position"), value: "x" },
            { text: Scratch.translate("y position"), value: "y" }
          ],
          ARCS: [
            { text: Scratch.translate("circle"), value: "circle" },
            { text: Scratch.translate("hill"), value: "hill" },
            { text: Scratch.translate("dip"), value: "dip" },
            { text: Scratch.translate("wave"), value: "wave" }
          ],
          GRADIENT_TYPES: [
            { text: Scratch.translate("linear"), value: "linear" },
            { text: Scratch.translate("radial"), value: "radial" }
          ],
          ALIGNMENTS: {
            acceptReporters: true,
            items: [
              { text: Scratch.translate("left"), value: "start" },
              { text: Scratch.translate("right"), value: "end" },
              { text: Scratch.translate("center"), value: "middle" }
            ]
          },
          LINE_TYPE: {
            acceptReporters: true,
            items: [
              { text: Scratch.translate("underline"), value: "underline" },
              { text: Scratch.translate("strikethrough"), value: "strikethrough" }
            ]
          },
          ATTRIBUTES: {
            acceptReporters: true,
            items: [
              { text: Scratch.translate("line count"), value: "lineCount" },
              { text: Scratch.translate("font"), value: "font" },
              { text: Scratch.translate("font size"), value: "size" },
              { text: Scratch.translate("boldness"), value: "weight" },
              { text: Scratch.translate("margin width"), value: "width" },
              { text: Scratch.translate("display width"), value: "boxW" },
              { text: Scratch.translate("display height"), value: "boxH" },
              { text: Scratch.translate("letter spacing"), value: "letter" },
              { text: Scratch.translate("line spacing"), value: "line" },
            ]
          }
        }
      };
    }

    // Helper Funcs
    _getFonts() {
      if (runtime.fontManager) {
        const customFonts = runtime.fontManager.getFonts().map((f) => ({
          text: Scratch.translate(f.name), value: f.family
        }));
        return [...BUILT_IN_FONTS, ...customFonts];
      }
      return BUILT_IN_FONTS;
    }

    _getEffects() {
      return Object.keys(EFFECT_HANDLERS).map((e) => {
        return { text: Scratch.translate(e), value: e };
      });
    }

    injectFontToDOM(dom, textObj) {
      // get all used font names
      const fontsInUse = [];
      const innerElement = textObj._elementInner;

      if (innerElement.hasAttribute("font-family")) {
        fontsInUse.push(innerElement.getAttribute("font-family"));
      }
      const children = Array.from(innerElement.querySelectorAll("tspan"));
      for (const span of children) {
        if (span.hasAttribute("font-family")) {
          fontsInUse.push(span.getAttribute("font-family"));
        }
      }

      // try and convert fonts to properly export
      const fontStyles = document.createElementNS("http://www.w3.org/2000/svg", "style");

      const basicFonts = document.querySelector(`style[id="scratch-font-styles`);
      fontStyles.textContent = basicFonts.textContent;

      const customFonts = runtime.fontManager.fonts.filter(f => !f.system);
      for (const font of customFonts) {
        const properName = `"${font.family}", ${font.fallback}`;
        if (!font.asset || !fontsInUse.includes(properName)) continue;

        const base64 = uint8ToBase64(font.asset.data);

        // normalize format for browser compatibility
        let format = font.asset.dataFormat.toLowerCase();
        if (format === "otf") format = "opentype";
        if (format === "ttf") format = "truetype";
        
        fontStyles.textContent += `@font-face {font-family: "${font.family}";`;
        fontStyles.textContent += `src: url('data:font/${format};base64,${base64}') format('${format}');}`;
      }

      dom.appendChild(fontStyles);
    }

    markdownTutorial() {
      alert([
        "How to use Markdown in Display Text V2",
        "Bold Text → **text**",
        "Italic Text → */text*/",
        "Strike Text → ~~text~~",
        "Underline Text → __text__",
        "Header Text 1 → # text# ",
        "Header Text 2 → ##text##",
        "",
        "Text Color → @c[#ff0000]text@c",
        "Text Font → @f[Comic Sans Ms]text@f"
      ].join("\n"));
    }

    // Block Funcs
    printTxt(args) {
      const id = Cast.toString(args.ID);
      const text = Cast.toString(args.TXT);
      let textObj;
      if (textObjects[id] === undefined) {
        textObj = new textObject(id, text);
        textObjects[id] = textObj;
        textObj.initElement();
      } else {
        textObj = textObjects[id];
        textObj.setText(text);
        textObj.updateElement(false);
      }
    }

    addLine(args) {
      const id = Cast.toString(args.ID);
      const text = Cast.toString(args.TXT);
      let textObj;
      if (textObjects[id] === undefined) {
        textObj = new textObject(id, text);
        textObjects[id] = textObj;
        textObj.initElement();
      } else {
        textObj = textObjects[id];
        textObj.setText(textObj.rawText + "\n" + text);
        textObj.updateElement(false);
      }
    }

    removeTxt(args) {
      const textObj = textObjects[Cast.toString(args.ID)];
      if (textObj) {
        textObj.dispose();
        delete textObjects[textObj.id];
      }
    }

    removeAllTxt() {
      for (const textObj of Object.values(textObjects)) {
        textObj.dispose();
        delete textObjects[textObj.id];
      }
    }

    txtExists(args) {
      return textObjects[Cast.toString(args.ID)] !== undefined;
    }

    allIDs() {
      return JSON.stringify(Object.keys(textObjects));
    }

    textAsImage(args) {
      const textObj = textObjects[Cast.toString(args.ID)];
      if (textObj) {
        const type = args.TYPE === "svg" ? 0 : 1;
        if (textObj._cachedImage[type]) return textObj._cachedImage[type];

        const bounds = textObj._element.getBBox();
        const clone = textObj._element.cloneNode(true);
        clone.setAttribute("width", bounds.width);
        clone.setAttribute("height", bounds.height);
        clone.setAttribute("viewBox", `${bounds.x} ${bounds.y} ${bounds.width} ${bounds.height}`);
        clone.style.transform = "";
        this.injectFontToDOM(clone, textObj);

        let image = clone.outerHTML;
        clone.remove();

        if (type === 0) {
          textObj._cachedImage[0] = image;
          return image;
        } else {
          return new Promise((resolve) => {
            const canvas = document.createElement("canvas");
            canvas.width = Math.ceil(bounds.width * 2);
            canvas.height = Math.ceil(bounds.height * 2);

            const ctx = canvas.getContext("2d");
            const img = new Image();
            const blob = new Blob([image], { type: "image/svg+xml;charset=utf-8" });
            const url = URL.createObjectURL(blob);

            img.onload = () => {
              ctx.clearRect(0, 0, canvas.width * 2, canvas.height * 2);
              ctx.drawImage(img, 0, 0);
              URL.revokeObjectURL(url);

              const png = canvas.toDataURL("image/png");
              textObj._cachedImage[1] = png;
              resolve(png);
            };
            img.src = url;
          });
        }
      }
      return "";
    }

    setTextFont(args) {
      const textObj = textObjects[Cast.toString(args.ID)];
      if (textObj) {
        textObj.setAttribute("font-family", Cast.toString(args.FONT));
        textObj.updateElement(true);
      }
    }

    setFontSize(args) {
      const textObj = textObjects[Cast.toString(args.ID)];
      if (textObj) {
        textObj.setAttribute("font-size", Cast.toNumber(args.NUM));
        textObj.updateElement(true);
      }
    }

    setTextAlign(args) {
      const textObj = textObjects[Cast.toString(args.ID)];
      if (textObj) {
        textObj.setAttribute("text-anchor", Cast.toString(args.ALIGNMENT));
        textObj.updateElement(true);
      }
    }

    setBoldness(args) {
      const textObj = textObjects[Cast.toString(args.ID)];
      if (textObj) {
        // normalize boldValue from -100 - 900
        let boldValue = Cast.toNumber(args.NUM) * 10;
        boldValue -= 100;

        textObj.setAttribute("font-weight", boldValue);
        textObj.updateElement(true);
      }
    }

    setTextSpacing(args) {
      const textObj = textObjects[Cast.toString(args.ID)];
      if (textObj) {
        const spacing = Cast.toNumber(args.SPACING);
        if (args.ATT === "letter") {
          textObj.setAttribute("letter-spacing", spacing);
          textObj.updateElement(true);
        } else {
          textObj.setAttribute("line-height", spacing, true);
          if (!textObj._dirty) return;

          // force a reflow if there is no margins
          const wrapWidth = textObj.specialStyles.get("width");
          if (!wrapWidth || wrapWidth < 1) {
            const oldRawText = textObj.rawText;
            textObj.rawText = undefined;
            textObj.setText(oldRawText);
            textObj.updateElement(false, true);
          } else {
            textObj.wrapText(wrapWidth);
          }
        }
      }
    }

    setMargins(args) {
      const textObj = textObjects[Cast.toString(args.ID)];
      if (textObj) {
        textObj.setAttribute("width", Cast.toNumber(args.WIDTH), true);
        textObj.updateElement(true, true);
      }
    }

    getTextAttribute(args) {
      const textObj = textObjects[Cast.toString(args.ID)];
      if (textObj) {
        const styles = textObj.styles;
        switch (Cast.toString(args.ATT)) {
          case "lineCount": return textObj._elementInner.children.length;
          case "font": return styles.get("font-family") || "Arial";
          case "size": return styles.get("font-size") || 16;
          case "weight": {
            const weight = styles.get("font-weight") || -100;
            return (weight + 100) / 10;
          }
          case "letter": return styles.get("letter-spacing") || 0;
          case "line": return textObj.specialStyles.get("line-height") || 1;
          case "width": return textObj.specialStyles.get("width") || -1;
          case "boxW": {
            const bounds = textObj._elementInner.getBBox();
            return bounds.width;
          }
          case "boxH": {
            const bounds = textObj._elementInner.getBBox();
            return bounds.height;
          }
          default: return "";
        }
      }
      return "";
    }

    setTextColor(args) {
      const textObj = textObjects[Cast.toString(args.ID)];
      if (textObj) {
        let color = Cast.toString(args.COLOR);
        let isGradient = false;
        if (color.startsWith("<") && color.endsWith("Gradient>")) {
          isGradient = true
          textObj.setAttribute("gradient", [1, color], true);
          color = "url(#gradColor1)";
        }
        textObj.setAttribute("fill", color);
        textObj.updateElement(true, isGradient);
      }
    }

    setTextShadow(args) {
      const textObj = textObjects[Cast.toString(args.ID)];
      if (textObj) {
        const position = {
          x: Cast.toNumber(args.x),
          y: Cast.toNumber(args.y),
          z: Cast.toNumber(args.z)
        };
        textObj.setAttribute(
          "text-shadow",
          position.z === 0 ? "none" : `${position.x}px ${position.y}px ${position.z}px ${args.COLOR}`,
          true
        );
        textObj.updateElement(true, true);
      }
    }

    setTextOutline(args) {
      const textObj = textObjects[Cast.toString(args.ID)];
      if (textObj) {
        let color = Cast.toString(args.COLOR);
        let isGradient = false;
        if (color.startsWith("<") && color.endsWith("Gradient>")) {
          isGradient = true
          textObj.setAttribute("gradient", [2, color], true);
          color = "url(#gradColor2)";
        }
        textObj.setAttribute("stroke", color);
        textObj.setAttribute("stroke-width", Cast.toNumber(args.THICKNESS) + "px");
        textObj.setAttribute("stroke-linejoin", "round");
        textObj.updateElement(true, isGradient);
      }
    }

    setLineDecor(args) {
      const textObj = textObjects[Cast.toString(args.ID)];
      if (textObj) {
        const type = args.TYPE === "strikethrough" ? "line-through" : "underline";
        textObj.setAttribute("text-decoration", type);
        textObj.updateElement(true);
      }
    }

    setTextCurve(args) {
      const textObj = textObjects[Cast.toString(args.ID)];
      if (textObj) {
        try {
          const pathPoints = typeof args.PATH === "object" ? args.PATH : JSON.parse(args.PATH);
          if (!Array.isArray(pathPoints)) return;

          if (pathPoints.length === 0) {
            textObj.setAttribute("curve", null, true);
            textObj.updateElement(true, true);
            return;
          }

          let pathString = "";
          for (var i = 0; i < pathPoints.length; i++) {
            const coord = pathPoints[i];
            const x = coord ? Cast.toNumber(coord[0]) : 0;
            const y = coord ? Cast.toNumber(coord[1]) * -1 : 0;
            pathString += i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`;
          }

          const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
          path.setAttribute("d", pathString);
          path.setAttribute("id", "curve-" + textObj.id);
          path.setAttribute("fill", "none");

          textObj.setAttribute("curve", path, true);
          textObj.updateElement(true, true);
        } catch {}
      }
    }

    presetCurve(args) {
      return {
        circle: `[[-23,-45],[-29,-40],[-35,-35],[-40,-29],[-45,-23],[-48,-15],[-49,-8],[-50,0],[-49,8],[-48,15],[-45,23],[-40,29],[-35,35],[-29,40],[-23,45],[-15,48],[-8,49],[0,50],[8,49],[15,48],[23,45],[29,40],[35,35],[40,29],[45,23],[48,15],[49,8],[50,0],[49,-8],[48,-15],[45,-23],[40,-29],[35,-35],[29,-40],[23,-45],[15,-48],[8,-49],[0,-50],[-8,-49],[-15,-48],[-23,-45]]`,
        dip: `[[0,0],[5,-4],[10,-8],[15,-12],[20,-15],[25,-19],[30,-23],[35,-26],[40,-29],[45,-32],[50,-35],[55,-38],[60,-40],[65,-43],[70,-45],[75,-46],[80,-48],[85,-49],[90,-49],[95,-50],[100,-50],[105,-50],[110,-49],[115,-49],[120,-48],[125,-46],[130,-45],[135,-43],[140,-40],[145,-38],[150,-35],[155,-32],[160,-29],[165,-26],[170,-23],[175,-19],[180,-15],[185,-12],[190,-8],[195,-4],[200,0]]`,
        hill: `[[0,0],[5,4],[10,8],[15,12],[20,15],[25,19],[30,23],[35,26],[40,29],[45,32],[50,35],[55,38],[60,40],[65,43],[70,45],[75,46],[80,48],[85,49],[90,49],[95,50],[100,50],[105,50],[110,49],[115,49],[120,48],[125,46],[130,45],[135,43],[140,40],[145,38],[150,35],[155,32],[160,29],[165,26],[170,23],[175,19],[180,15],[185,12],[190,8],[195,4],[200,0]]`,
        wave: `[[0,0],[5,-8],[10,-15],[15,-23],[20,-29],[25,-35],[30,-40],[35,-45],[40,-48],[45,-49],[50,-50],[55,-49],[60,-48],[65,-45],[70,-40],[75,-35],[80,-29],[85,-23],[90,-15],[95,-8],[100,0],[105,8],[110,15],[115,23],[120,29],[125,35],[130,40],[135,45],[140,48],[145,49],[150,50],[155,49],[160,48],[165,45],[170,40],[175,35],[180,29],[185,23],[190,15],[195,8],[200,0]]`
      }[args.ARC];
    }

    makeSvgGradient(args) {
      const extractStops = (value) => {
        if (typeof value !== "string") return [];
        if (value.includes("<stop")) return value.match(/<stop[\s\S]*?\/>/g) ?? [];
        return [`<stop offset="1" stop-color="${value}" />`];
      };

      const type = Cast.toString(args.TYPE) + "Gradient";
      const angle = type.startsWith("radial") ? "" :
        `gradientTransform="rotate(${Cast.toNumber(args.ANGLE)} 0.5 0.5)"`;

      // in case the user inputs another gradient block, increase
      // the number of color stops in the generated gradient
      const stops = [
        ...extractStops(Cast.toString(args.COLOR2)),
        ...extractStops(Cast.toString(args.COLOR1))
      ];

      let gradient = `<${type} id="gradColor" x1="0" y1="0" x2="0" y2="1" ${angle}>`;
      for (let i = 0; i < stops.length; i++) {
        gradient += stops[i].replace(
          /\s*offset\s*=\s*"(.*?)"/,
          ` offset="${(i / (stops.length - 1)) * 100}%"`
        ) + "\n";
      }
      return gradient + `</${type}>`;
    }

    setTextPosition(args) {
	  const id = Cast.toString(args.ID);
      const textObj = textObjects[id];
      if (textObj) {
		textObj.setPosition(
          Cast.toNumber(args.x), Cast.toNumber(args.y)
      	);
	  } else {
		presetPositions[id] = [
		  Cast.toNumber(args.x), Cast.toNumber(args.y)
		];
	  }
    }

    textPosition(args) {
      const textObj = textObjects[Cast.toString(args.ID)];
      return textObj ? textObj.position[args.ATT === "x" ? 0 : 1] : 0;
    }

    setEffect(args) {
      const textObj = textObjects[Cast.toString(args.ID)];
      if (textObj) {
        let effectCache = textObj.specialStyles.get("effects");
        if (!effectCache) {
          textObj.specialStyles.set("effects", {});
          effectCache = textObj.specialStyles.get("effects");
        }

        const effect = Cast.toString(args.EFFECT);
        if (Object.prototype.hasOwnProperty.call(EFFECT_HANDLERS, effect)) {
          if (!effectCache[effect]) {
            effectCache[effect] = { raw: null, conv: null };
          }

          const value = Cast.toNumber(args.VALUE);
          if (effectCache[effect].raw !== value) {
            effectCache[effect].raw = value;
            effectCache[effect].conv = EFFECT_HANDLERS[effect](value);
            textObj._dirty = true;
            textObj.updateElement(true, true);
            runtime.requestRedraw();
          }
        }
      }
    }

    amtOfEffect(args) {
      const textObj = textObjects[Cast.toString(args.ID)];
      if (textObj) {
        const effectCache = textObj.specialStyles.get("effects") ?? {};
        const effect = Cast.toString(args.EFFECT);
        if (Object.prototype.hasOwnProperty.call(EFFECT_HANDLERS, effect)) {
          if (effectCache[effect]) return effectCache[effect].raw;
          else return 0;
        }
      }
      return 0;
    }

    resetEffects(args) {
      const textObj = textObjects[Cast.toString(args.ID)];
      if (textObj) {
        textObj.specialStyles.delete("effects");
        textObj._elementInner.removeAttribute("transform");
        textObj._elementInner.removeAttribute("filter");
      }
    }

    debug(args) {
      let xyMap = textDiv.querySelector(`img[id="SP-Debug-Map"]`);
      if (args.TOGGLE === "on") {
        if (xyMap) return;
        for (const textObj of Object.values(textObjects)) {
          const alignment = textObj._elementInner.getAttribute("text-anchor");
          textObj.oldFilter = textObj._elementInner.getAttribute("filter");
          textObj._elementInner.setAttribute(
            "filter",
            `url(#border${alignment === "middle" ? "G" : alignment === "end" ? "B" : "R"})`
          );
        }

        xyMap = document.createElement("img");
        xyMap.crossOrigin = "anonymous";
        xyMap.src = "https://cdn.assets.scratch.mit.edu/internalapi/asset/9838d02002d05f88dc54d96494fbc202.png/get/";
        xyMap.id = "SP-Debug-Map";
        xyMap.setAttribute("style", `position: absolute; width: 480px; height: 360px; transform: translate(-50%, -50%); z-index: -1; opacity: 50%`);
        textDiv.appendChild(xyMap);
        isInDebugMode = true;
      } else {
        if (xyMap) xyMap.remove();
        for (const textObj of Object.values(textObjects)) {
          textObj._elementInner.setAttribute("filter", textObj.oldFilter);
          delete textObj.oldFilter;
        }
        isInDebugMode = false;
      }
    }

    resetTxt(args) {
      const textObj = textObjects[Cast.toString(args.ID)];
      if (textObj) {
        textObj.styles.clear();
        textObj.specialStyles.clear();
        textObj._dirty = true;
        textObj.setAttribute("curve", null, true);

        const element = textObj._elementInner;
        const attributes = element.attributes;
        for (let i = attributes.length - 1; i >= 0; i--) {
          element.removeAttribute(attributes[i].name);
        }

        textObj.updateElement(true, true);
        textObj._element.style.textShadow = "none";
        element.setAttribute("paint-order", "stroke");
        element.setAttribute("text-anchor", "middle");
        element.setAttribute("xml:space", "preserve");
        element.style.whiteSpace = "pre";
      }
    }

    reuseStyle(args) {
      const textObj1 = textObjects[Cast.toString(args.ID)];
      const textObj2 = textObjects[Cast.toString(args.ID2)];
      if (textObj1 && textObj2) {
        textObj2.styles = structuredClone(textObj1.styles);

        // specialStyles has some non-cloneable stuff
        iteratorForEach(
          textObj1.specialStyles.entries(),
          ([key, value]) => {
            textObj2.specialStyles.set(
              key, key === "curve" ? value.cloneNode(true) : value
            );
          }
        );

        textObj2._dirty = true;
        textObj2.updateElement(true, true);
      }
    }

    toggleSelect(args) {
      const textObj = textObjects[Cast.toString(args.ID)];
      if (textObj) {
        const toggler = args.TYPE === "on";
        textObj.toggleInteract(toggler);
        textObj._element.style.userSelect = toggler ? "text" : "none";
      }
      return false;
    }

    toggleClickable(args) {
      const textObj = textObjects[Cast.toString(args.ID)];
      if (textObj) textObj.toggleClickable(args.TYPE === "on");
    }

    isClicked(args) {
      const textObj = textObjects[Cast.toString(args.ID)];
      if (textObj) {
        const buffer = performance.now() - textObj.clickTime;
        return buffer < runtime.currentStepTime;
      }
      return false;
    }

    whenTextClicked(args, util) {
      const clickedId = util.thread[THREAD_KEY];
      return clickedId && clickedId === Cast.toString(args.ID);
    }
  }

  Scratch.extensions.register(new SPdisplayTextV2());
})(Scratch);
