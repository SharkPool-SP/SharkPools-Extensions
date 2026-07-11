(function (Scratch) {
  "use strict";

  if (!Scratch.extensions.unsandboxed) {
    throw new Error("MenuMaster must be loaded with 'Run extension without sandbox' enabled.");
  }

  const EXTENSION_ID = "menumasterv11";
  const SELECTION_EVENT = EXTENSION_ID + "_whenSelectionMade";
  const RELEASE_VERSION = "1.1.1";

  const DEFAULT_STYLE = Object.freeze({
    background: "#FFFFFF",
    border: "#777777",
    text: "#222222",
    borderThickness: 2,
    radius: 5,
    fontSize: 16,
    fontFamily: "Arial",
    height: 32,
    opacity: 100
  });

  class MenuMaster {
    constructor() {
      this._menus = new Map();
      this._lastSelectedMenu = "";
      this._outsideClickInstalled = false;

      this._boundPositionUpdate = () => this._updateAllPositions();
      this._boundOutsideClick = () => this._closeAllPanels();

      this._positionTimer = window.setInterval(
        this._boundPositionUpdate,
        100
      );

      window.addEventListener("resize", this._boundPositionUpdate);
      window.addEventListener("scroll", this._boundPositionUpdate, true);

      /*
       * Stop All should close expanded popups, but should not delete or hide
       * the dropdown controls themselves.
       */
      const runtime = Scratch.vm && Scratch.vm.runtime;
      if (runtime && typeof runtime.on === "function") {
        runtime.on("PROJECT_STOP_ALL", () => this._closeAllPanels());
      }
    }

    getInfo() {
      return {
        id: EXTENSION_ID,
        name: "MenuMaster v1.1",
        color1: "#7C5CE7",
        color2: "#6547CD",
        color3: "#5135B5",
        blocks: [
          { blockType: Scratch.BlockType.LABEL, text: "Functions" },
          {
            opcode: "createFromOptions",
            blockType: Scratch.BlockType.COMMAND,
            text: "create dropdown [ID] with options [OPTIONS] at x [X] y [Y] width [WIDTH]",
            arguments: {
              ID: { type: Scratch.ArgumentType.STRING, defaultValue: "Menu1" },
              OPTIONS: { type: Scratch.ArgumentType.STRING, defaultValue: '["AAAA","BBBB","CCCCC"]' },
              X: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
              Y: { type: Scratch.ArgumentType.NUMBER, defaultValue: 100 },
              WIDTH: { type: Scratch.ArgumentType.NUMBER, defaultValue: 180 }
            }
          },
          {
            opcode: "createFromList",
            blockType: Scratch.BlockType.COMMAND,
            text: "create dropdown [ID] from list or array [LIST] at x [X] y [Y] width [WIDTH]",
            arguments: {
              ID: { type: Scratch.ArgumentType.STRING, defaultValue: "Menu1" },
              LIST: { type: Scratch.ArgumentType.STRING, defaultValue: '["123","456","789"]' },
              X: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
              Y: { type: Scratch.ArgumentType.NUMBER, defaultValue: 100 },
              WIDTH: { type: Scratch.ArgumentType.NUMBER, defaultValue: 180 }
            }
          },
          {
            opcode: "refreshFromList",
            blockType: Scratch.BlockType.COMMAND,
            text: "refresh dropdown [ID] from its Scratch list",
            arguments: {
              ID: { type: Scratch.ArgumentType.STRING, menu: "menuIds", defaultValue: "Menu1" }
            }
          },
          {
            opcode: "showMenu",
            blockType: Scratch.BlockType.COMMAND,
            text: "show dropdown [ID]",
            arguments: {
              ID: { type: Scratch.ArgumentType.STRING, menu: "menuIds", defaultValue: "Menu1" }
            }
          },
          {
            opcode: "hideMenu",
            blockType: Scratch.BlockType.COMMAND,
            text: "hide dropdown [ID]",
            arguments: {
              ID: { type: Scratch.ArgumentType.STRING, menu: "menuIds", defaultValue: "Menu1" }
            }
          },
          {
            opcode: "deleteMenu",
            blockType: Scratch.BlockType.COMMAND,
            text: "delete dropdown [ID]",
            arguments: {
              ID: { type: Scratch.ArgumentType.STRING, menu: "menuIds", defaultValue: "Menu1" }
            }
          },
          {
            opcode: "deleteAllMenus",
            blockType: Scratch.BlockType.COMMAND,
            text: "delete all dropdowns"
          },
          {
            opcode: "moveMenu",
            blockType: Scratch.BlockType.COMMAND,
            text: "move dropdown [ID] to x [X] y [Y]",
            arguments: {
              ID: { type: Scratch.ArgumentType.STRING, menu: "menuIds", defaultValue: "Menu1" },
              X: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
              Y: { type: Scratch.ArgumentType.NUMBER, defaultValue: 100 }
            }
          },
          {
            opcode: "setWidth",
            blockType: Scratch.BlockType.COMMAND,
            text: "set dropdown [ID] width to [WIDTH]",
            arguments: {
              ID: { type: Scratch.ArgumentType.STRING, menu: "menuIds", defaultValue: "Menu1" },
              WIDTH: { type: Scratch.ArgumentType.NUMBER, defaultValue: 180 }
            }
          },
          {
            opcode: "selectIndex",
            blockType: Scratch.BlockType.COMMAND,
            text: "select item [INDEX] in dropdown [ID]",
            arguments: {
              INDEX: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 },
              ID: { type: Scratch.ArgumentType.STRING, menu: "menuIds", defaultValue: "Menu1" }
            }
          },
          {
            opcode: "setPlaceholder",
            blockType: Scratch.BlockType.COMMAND,
            text: "set dropdown [ID] placeholder to [TEXT]",
            arguments: {
              ID: { type: Scratch.ArgumentType.STRING, menu: "menuIds", defaultValue: "Menu1" },
              TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: "Select..." }
            }
          },

          { blockType: Scratch.BlockType.LABEL, text: "Events" },
          {
            opcode: "whenSelectionMade",
            blockType: Scratch.BlockType.EVENT,
            text: "when a dropdown selection is made",
            isEdgeActivated: false
          },

          { blockType: Scratch.BlockType.LABEL, text: "Reporters" },
          {
            opcode: "selectedItem",
            blockType: Scratch.BlockType.REPORTER,
            text: "selected item of dropdown [ID]",
            disableMonitor: true,
            arguments: {
              ID: { type: Scratch.ArgumentType.STRING, menu: "menuIds", defaultValue: "Menu1" }
            }
          },
          {
            opcode: "selectedIndex",
            blockType: Scratch.BlockType.REPORTER,
            text: "selected index of dropdown [ID]",
            disableMonitor: true,
            arguments: {
              ID: { type: Scratch.ArgumentType.STRING, menu: "menuIds", defaultValue: "Menu1" }
            }
          },
          {
            opcode: "lastSelectedMenu",
            blockType: Scratch.BlockType.REPORTER,
            text: "last selected dropdown",
            disableMonitor: true
          },
          {
            opcode: "optionCount",
            blockType: Scratch.BlockType.REPORTER,
            text: "option count of dropdown [ID]",
            disableMonitor: true,
            arguments: {
              ID: { type: Scratch.ArgumentType.STRING, menu: "menuIds", defaultValue: "Menu1" }
            }
          },
          {
            opcode: "currentFont",
            blockType: Scratch.BlockType.REPORTER,
            text: "font of dropdown [ID]",
            disableMonitor: true,
            arguments: {
              ID: { type: Scratch.ArgumentType.STRING, menu: "menuIds", defaultValue: "Menu1" }
            }
          },
          {
            opcode: "menuExists",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "dropdown [ID] exists?",
            arguments: {
              ID: { type: Scratch.ArgumentType.STRING, menu: "menuIds", defaultValue: "Menu1" }
            }
          },
          {
            opcode: "menuVisible",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "dropdown [ID] visible?",
            arguments: {
              ID: { type: Scratch.ArgumentType.STRING, menu: "menuIds", defaultValue: "Menu1" }
            }
          },

          { blockType: Scratch.BlockType.LABEL, text: "Customise" },
          {
            opcode: "setBackground",
            blockType: Scratch.BlockType.COMMAND,
            text: "set dropdown [ID] background colour to [COLOUR]",
            arguments: {
              ID: { type: Scratch.ArgumentType.STRING, menu: "menuIds", defaultValue: "Menu1" },
              COLOUR: { type: Scratch.ArgumentType.STRING, defaultValue: "#FFFFFF" }
            }
          },
          {
            opcode: "setBorder",
            blockType: Scratch.BlockType.COMMAND,
            text: "set dropdown [ID] border colour to [COLOUR]",
            arguments: {
              ID: { type: Scratch.ArgumentType.STRING, menu: "menuIds", defaultValue: "Menu1" },
              COLOUR: { type: Scratch.ArgumentType.STRING, defaultValue: "#777777" }
            }
          },
          {
            opcode: "setTextColour",
            blockType: Scratch.BlockType.COMMAND,
            text: "set dropdown [ID] text colour to [COLOUR]",
            arguments: {
              ID: { type: Scratch.ArgumentType.STRING, menu: "menuIds", defaultValue: "Menu1" },
              COLOUR: { type: Scratch.ArgumentType.STRING, defaultValue: "#222222" }
            }
          },
          {
            opcode: "setBorderThickness",
            blockType: Scratch.BlockType.COMMAND,
            text: "set dropdown [ID] border thickness to [SIZE]",
            arguments: {
              ID: { type: Scratch.ArgumentType.STRING, menu: "menuIds", defaultValue: "Menu1" },
              SIZE: { type: Scratch.ArgumentType.NUMBER, defaultValue: 2 }
            }
          },
          {
            opcode: "setRadius",
            blockType: Scratch.BlockType.COMMAND,
            text: "set dropdown [ID] corner radius to [SIZE]",
            arguments: {
              ID: { type: Scratch.ArgumentType.STRING, menu: "menuIds", defaultValue: "Menu1" },
              SIZE: { type: Scratch.ArgumentType.NUMBER, defaultValue: 5 }
            }
          },
          {
            opcode: "setFont",
            blockType: Scratch.BlockType.COMMAND,
            text: "set dropdown [ID] font to [FONT]",
            arguments: {
              ID: { type: Scratch.ArgumentType.STRING, menu: "menuIds", defaultValue: "Menu1" },
              FONT: { type: Scratch.ArgumentType.STRING, menu: "fontMenu", defaultValue: "Arial" }
            }
          },
          {
            opcode: "setFontSize",
            blockType: Scratch.BlockType.COMMAND,
            text: "set dropdown [ID] font size to [SIZE]",
            arguments: {
              ID: { type: Scratch.ArgumentType.STRING, menu: "menuIds", defaultValue: "Menu1" },
              SIZE: { type: Scratch.ArgumentType.NUMBER, defaultValue: 16 }
            }
          },
          {
            opcode: "setHeight",
            blockType: Scratch.BlockType.COMMAND,
            text: "set dropdown [ID] height to [HEIGHT]",
            arguments: {
              ID: { type: Scratch.ArgumentType.STRING, menu: "menuIds", defaultValue: "Menu1" },
              HEIGHT: { type: Scratch.ArgumentType.NUMBER, defaultValue: 32 }
            }
          },
          {
            opcode: "setOpacity",
            blockType: Scratch.BlockType.COMMAND,
            text: "set dropdown [ID] opacity to [OPACITY] %",
            arguments: {
              ID: { type: Scratch.ArgumentType.STRING, menu: "menuIds", defaultValue: "Menu1" },
              OPACITY: { type: Scratch.ArgumentType.NUMBER, defaultValue: 100 }
            }
          },
          {
            opcode: "resetAppearance",
            blockType: Scratch.BlockType.COMMAND,
            text: "reset appearance of dropdown [ID]",
            arguments: {
              ID: { type: Scratch.ArgumentType.STRING, menu: "menuIds", defaultValue: "Menu1" }
            }
          }
        ],
        menus: {
          menuIds: {
            acceptReporters: true,
            items: "_getMenuIdItems"
          },
          fontMenu: {
            acceptReporters: true,
            items: "_getFontItems"
          }
        }
      };
    }

    _normaliseId(value) {
      return Scratch.Cast.toString(value).trim();
    }

    _getMenuIdItems() {
      const ids = Array.from(this._menus.keys());
      return ids.length ? ids : ["Menu1"];
    }

    _getFontItems() {
      const names = new Set([
        "Arial", "Verdana", "Tahoma", "Trebuchet MS", "Times New Roman",
        "Georgia", "Garamond", "Courier New", "Comic Sans MS", "Impact",
        "Helvetica", "system-ui", "sans-serif", "serif", "monospace"
      ]);

      if (document.fonts) {
        try {
          for (const face of document.fonts) {
            if (face.family) {
              names.add(String(face.family).replace(/^['\"]|['\"]$/g, ""));
            }
          }
        } catch (error) {
          // Some browsers expose document.fonts but do not allow iteration.
        }
      }

      return Array.from(names).filter(Boolean).sort((a, b) => a.localeCompare(b));
    }

    _newMenu(id) {
      return {
        id,
        element: null,
        button: null,
        label: null,
        arrow: null,
        panel: null,
        setOpen: null,
        open: false,
        options: [],
        selectedItem: "",
        selectedIndex: 0,
        placeholder: "Select...",
        x: 0,
        y: 100,
        width: 180,
        visible: true,
        sourceType: "array",
        sourceListName: "",
        sourceTarget: null,
        style: { ...DEFAULT_STYLE }
      };
    }

    _getMenu(idValue) {
      return this._menus.get(this._normaliseId(idValue)) || null;
    }

    _createOrReplace(idValue) {
      const id = this._normaliseId(idValue);
      if (!id) return null;
      const old = this._menus.get(id);
      if (old && old.element) old.element.remove();
      const menu = this._newMenu(id);
      this._menus.set(id, menu);
      this._createElement(menu);
      return menu;
    }

    _createElement(menu) {
      const root = document.createElement("div");
      root.setAttribute("aria-label", "MenuMaster dropdown " + menu.id);
      root.dataset.menuMasterId = menu.id;
      root.style.position = "fixed";
      root.style.zIndex = "2147483647";
      root.style.boxSizing = "border-box";
      root.style.userSelect = "none";

      const button = document.createElement("button");
      button.type = "button";
      button.setAttribute("aria-haspopup", "listbox");
      button.setAttribute("aria-expanded", "false");
      button.style.width = "100%";
      button.style.height = "100%";
      button.style.boxSizing = "border-box";
      button.style.cursor = "pointer";
      button.style.textAlign = "left";
      button.style.padding = "3px 34px 3px 8px";
      button.style.position = "relative";
      button.style.overflow = "hidden";
      button.style.whiteSpace = "nowrap";
      button.style.textOverflow = "ellipsis";
      button.style.margin = "0";
      button.style.lineHeight = "normal";
      button.style.appearance = "none";
      button.style.webkitAppearance = "none";

      const label = document.createElement("span");
      label.textContent = menu.placeholder;
      label.style.pointerEvents = "none";
      button.appendChild(label);

      const arrow = document.createElement("span");
      arrow.textContent = "▾";
      arrow.setAttribute("aria-hidden", "true");
      arrow.style.position = "absolute";
      arrow.style.right = "9px";
      arrow.style.top = "50%";
      arrow.style.transform = "translateY(-50%)";
      arrow.style.pointerEvents = "none";
      button.appendChild(arrow);

      const panel = document.createElement("div");
      const panelId =
        "menumaster-panel-" +
        menu.id.replace(/[^a-zA-Z0-9_-]/g, "-") +
        "-" +
        Math.random().toString(36).slice(2, 8);

      panel.id = panelId;
      panel.setAttribute("role", "listbox");
      panel.setAttribute("aria-label", menu.id + " options");
      button.setAttribute("aria-controls", panelId);

      panel.style.display = "none";
      panel.style.position = "absolute";
      panel.style.left = "0";
      panel.style.top = "calc(100% + 2px)";
      panel.style.width = "100%";
      panel.style.boxSizing = "border-box";
      panel.style.maxHeight = "240px";
      panel.style.overflowY = "auto";
      panel.style.overflowX = "hidden";
      panel.style.zIndex = "2147483647";

      const setOpen = open => {
        if (open && !menu.options.length) {
          return;
        }

        if (open) {
          this._closeAllPanels(menu.id);
        }

        menu.open = Boolean(open);
        panel.style.display = menu.open ? "block" : "none";
        arrow.textContent = menu.open ? "▴" : "▾";
        button.setAttribute("aria-expanded", String(menu.open));
      };

      button.addEventListener("click", event => {
        event.stopPropagation();
        setOpen(!menu.open);
      });

      button.addEventListener("keydown", event => {
        if (event.key === "Escape") {
          setOpen(false);
          return;
        }

        if (
          event.key === "ArrowDown" ||
          event.key === "ArrowUp"
        ) {
          event.preventDefault();
          setOpen(true);

          const options = Array.from(panel.children);
          if (!options.length) return;

          const selectedOffset = Math.max(0, menu.selectedIndex - 1);
          const target =
            event.key === "ArrowUp"
              ? options[Math.min(options.length - 1, selectedOffset)]
              : options[selectedOffset];

          target.focus();
        }
      });

      root.addEventListener("click", event => event.stopPropagation());

      document.body.appendChild(root);
      root.appendChild(button);
      root.appendChild(panel);

      menu.element = root;
      menu.button = button;
      menu.label = label;
      menu.arrow = arrow;
      menu.panel = panel;
      menu.setOpen = setOpen;
      menu.open = false;

      if (!this._outsideClickInstalled) {
        document.addEventListener("click", this._boundOutsideClick);
        this._outsideClickInstalled = true;
      }

      this._applyAppearance(menu);
    }

    _parseOptions(input) {
      let text = Scratch.Cast.toString(input).trim();
      if (!text) return [];
      if (text.startsWith("{") && text.endsWith("}")) {
        text = "[" + text.slice(1, -1) + "]";
      }
      try {
        const parsed = JSON.parse(text);
        if (Array.isArray(parsed)) return parsed.map(value => Scratch.Cast.toString(value));
      } catch (error) {
        // Use separator parsing below.
      }
      return text
        .split(/[\n\r,|]+/)
        .map(value => value.trim())
        .map(value => {
          if (value.length >= 2 && ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'")))) {
            return value.slice(1, -1);
          }
          return value;
        })
        .filter(Boolean);
    }

    _findList(nameValue, target) {
      const name = Scratch.Cast.toString(nameValue);
      if (target && typeof target.lookupVariableByNameAndType === "function") {
        const local = target.lookupVariableByNameAndType(name, "list");
        if (local) return local;
      }
      const stage = Scratch.vm.runtime.getTargetForStage();
      if (stage && typeof stage.lookupVariableByNameAndType === "function") {
        const global = stage.lookupVariableByNameAndType(name, "list");
        if (global) return global;
      }
      for (const candidate of Scratch.vm.runtime.targets) {
        if (typeof candidate.lookupVariableByNameAndType !== "function") continue;
        const list = candidate.lookupVariableByNameAndType(name, "list");
        if (list) return list;
      }
      return null;
    }

    _populate(menu, options, preserveSelection = false) {
      const previousIndex = menu.selectedIndex;
      const previousItem = menu.selectedItem;

      menu.options = options.map(value =>
        Scratch.Cast.toString(value)
      );

      menu.panel.replaceChildren();
      menu.selectedItem = "";
      menu.selectedIndex = 0;
      menu.label.textContent =
        menu.options.length
          ? menu.placeholder
          : "No options supplied";

      const refreshOptionAppearance = option => {
        const index = Number(option.dataset.scratchIndex);
        const selected = index === menu.selectedIndex;

        option.setAttribute(
          "aria-selected",
          String(selected)
        );

        option.style.backgroundColor =
          selected
            ? menu.style.text
            : menu.style.background;

        option.style.color =
          selected
            ? menu.style.background
            : menu.style.text;
      };

      const focusRelativeOption = (option, offset) => {
        const options = Array.from(menu.panel.children);
        const current = options.indexOf(option);

        if (current === -1 || !options.length) return;

        let next = current + offset;
        if (next < 0) next = options.length - 1;
        if (next >= options.length) next = 0;

        options[next].focus();
      };

      menu.options.forEach((value, index) => {
        const option = document.createElement("button");
        option.type = "button";
        option.setAttribute("role", "option");
        option.textContent = value;
        option.dataset.scratchIndex = String(index + 1);

        option.style.display = "block";
        option.style.width = "100%";
        option.style.boxSizing = "border-box";
        option.style.border = "0";
        option.style.margin = "0";
        option.style.padding = "6px 8px";
        option.style.textAlign = "left";
        option.style.cursor = "pointer";
        option.style.font = "inherit";
        option.style.appearance = "none";
        option.style.webkitAppearance = "none";

        const showInverted = () => {
          option.style.backgroundColor = menu.style.text;
          option.style.color = menu.style.background;
        };

        const restoreAppearance = () => {
          refreshOptionAppearance(option);
        };

        option.addEventListener("mouseenter", showInverted);
        option.addEventListener("mouseleave", restoreAppearance);
        option.addEventListener("focus", showInverted);
        option.addEventListener("blur", restoreAppearance);

        option.addEventListener("keydown", event => {
          if (event.key === "ArrowDown") {
            event.preventDefault();
            focusRelativeOption(option, 1);
          } else if (event.key === "ArrowUp") {
            event.preventDefault();
            focusRelativeOption(option, -1);
          } else if (event.key === "Home") {
            event.preventDefault();
            menu.panel.firstElementChild?.focus();
          } else if (event.key === "End") {
            event.preventDefault();
            menu.panel.lastElementChild?.focus();
          } else if (event.key === "Escape") {
            event.preventDefault();
            menu.setOpen(false);
            menu.button.focus();
          }
        });

        option.addEventListener("click", () => {
          menu.selectedIndex = index + 1;
          menu.selectedItem = value;
          menu.label.textContent = value;

          for (const currentOption of menu.panel.children) {
            refreshOptionAppearance(currentOption);
          }

          menu.setOpen(false);
          this._lastSelectedMenu = menu.id;

          Scratch.vm.runtime.startHats(
            SELECTION_EVENT
          );
        });

        menu.panel.appendChild(option);
        refreshOptionAppearance(option);
      });

      if (
        preserveSelection &&
        previousIndex >= 1 &&
        previousIndex <= menu.options.length
      ) {
        menu.selectedIndex = previousIndex;
        menu.selectedItem =
          menu.options[previousIndex - 1];
        menu.label.textContent = menu.selectedItem;
      } else if (preserveSelection && previousItem) {
        const found = menu.options.indexOf(previousItem);

        if (found !== -1) {
          menu.selectedIndex = found + 1;
          menu.selectedItem = menu.options[found];
          menu.label.textContent = menu.selectedItem;
        }
      }

      for (const option of menu.panel.children) {
        refreshOptionAppearance(option);
      }

      menu.setOpen(false);
      this._applyAppearance(menu);
    }

    _applyAppearance(menu) {
      if (!menu || !menu.element) return;
      const style = menu.style;

      menu.element.style.opacity = String(style.opacity / 100);
      menu.element.style.display = menu.visible ? "block" : "none";
      menu.element.style.fontFamily = style.fontFamily;

      menu.button.style.backgroundColor = style.background;
      menu.button.style.borderColor = style.border;
      menu.button.style.borderStyle = "solid";
      menu.button.style.borderWidth = style.borderThickness + "px";
      menu.button.style.borderRadius = style.radius + "px";
      menu.button.style.color = style.text;
      menu.button.style.fontFamily = style.fontFamily;

      menu.panel.style.backgroundColor = style.background;
      menu.panel.style.color = style.text;
      menu.panel.style.borderColor = style.border;
      menu.panel.style.borderStyle = "solid";
      menu.panel.style.borderWidth = style.borderThickness + "px";
      menu.panel.style.borderRadius = style.radius + "px";
      menu.panel.style.fontFamily = style.fontFamily;

      for (const option of menu.panel.children) {
        const optionIndex =
          Number(option.dataset.scratchIndex);

        const selected =
          optionIndex === menu.selectedIndex;

        option.style.backgroundColor =
          selected ? style.text : style.background;

        option.style.color =
          selected ? style.background : style.text;

        option.style.fontFamily = style.fontFamily;
      }

      this._updatePosition(menu);
    }

    _getStageCanvas() {
      if (Scratch.vm.renderer && Scratch.vm.renderer.canvas) return Scratch.vm.renderer.canvas;
      for (const canvas of document.querySelectorAll("canvas")) {
        const rect = canvas.getBoundingClientRect();
        if (rect.width > 100 && rect.height > 100) return canvas;
      }
      return null;
    }

    _updatePosition(menu) {
      if (!menu || !menu.element || !menu.visible) return;
      const canvas = this._getStageCanvas();
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const stageWidth = Number(Scratch.vm.runtime.stageWidth) || 480;
      const stageHeight = Number(Scratch.vm.runtime.stageHeight) || 360;
      const scaleX = rect.width / stageWidth;
      const scaleY = rect.height / stageHeight;
      const centerX = rect.left + (stageWidth / 2 + menu.x) * scaleX;
      const centerY = rect.top + (stageHeight / 2 - menu.y) * scaleY;
      const width = Math.max(40, menu.width * scaleX);
      const height = Math.max(16, menu.style.height * scaleY);
      menu.element.style.left = centerX - width / 2 + "px";
      menu.element.style.top = centerY - height / 2 + "px";
      menu.element.style.width = width + "px";
      menu.element.style.height = height + "px";
      menu.element.style.fontSize = Math.max(6, menu.style.fontSize * scaleY) + "px";
      menu.panel.style.fontSize = Math.max(6, menu.style.fontSize * scaleY) + "px";
    }

    _closeAllPanels(exceptId = "") {
      for (const menu of this._menus.values()) {
        if (exceptId && menu.id === exceptId) continue;

        if (typeof menu.setOpen === "function") {
          menu.setOpen(false);
        } else if (menu.panel) {
          menu.open = false;
          menu.panel.style.display = "none";
          if (menu.arrow) menu.arrow.textContent = "▾";
          if (menu.button) {
            menu.button.setAttribute("aria-expanded", "false");
          }
        }
      }
    }

    _updateAllPositions() {
      for (const menu of this._menus.values()) {
        this._updatePosition(menu);
      }
    }

    createFromOptions(args) {
      const menu = this._createOrReplace(args.ID);
      if (!menu) return;
      menu.x = Scratch.Cast.toNumber(args.X);
      menu.y = Scratch.Cast.toNumber(args.Y);
      menu.width = Math.max(40, Scratch.Cast.toNumber(args.WIDTH));
      menu.sourceType = "array";
      this._populate(menu, this._parseOptions(args.OPTIONS));
      this._applyAppearance(menu);
    }

    createFromList(args, util) {
      const menu = this._createOrReplace(args.ID);
      if (!menu) return;
      menu.x = Scratch.Cast.toNumber(args.X);
      menu.y = Scratch.Cast.toNumber(args.Y);
      menu.width = Math.max(40, Scratch.Cast.toNumber(args.WIDTH));
      const supplied = Scratch.Cast.toString(args.LIST).trim();
      const looksLikeArray =
        (supplied.startsWith("[") && supplied.endsWith("]")) ||
        (supplied.startsWith("{") && supplied.endsWith("}")) ||
        supplied.includes(",") ||
        supplied.includes("|") ||
        supplied.includes("\n");

      if (looksLikeArray) {
        menu.sourceType = "array";
        menu.sourceListName = "";
        menu.sourceTarget = null;
        this._populate(menu, this._parseOptions(supplied));
      } else {
        menu.sourceType = "list";
        menu.sourceListName = supplied;
        menu.sourceTarget = util.target || null;
        const list = this._findList(menu.sourceListName, menu.sourceTarget);
        this._populate(menu, list && Array.isArray(list.value) ? list.value : []);
        if (!list) menu.label.textContent = "List not found: " + menu.sourceListName;
      }

      this._applyAppearance(menu);
    }

    refreshFromList(args) {
      const menu = this._getMenu(args.ID);
      if (!menu || menu.sourceType !== "list") return;
      const list = this._findList(menu.sourceListName, menu.sourceTarget);
      this._populate(menu, list && Array.isArray(list.value) ? list.value : [], true);
      if (!list) menu.label.textContent = "List not found: " + menu.sourceListName;
    }

    showMenu(args) {
      const menu = this._getMenu(args.ID);
      if (!menu) return;
      menu.visible = true;
      menu.element.style.display = "block";
      this._updatePosition(menu);
    }

    hideMenu(args) {
      const menu = this._getMenu(args.ID);
      if (!menu) return;
      menu.visible = false;
      if (typeof menu.setOpen === "function") {
        menu.setOpen(false);
      }
      menu.element.style.display = "none";
    }

    deleteMenu(args) {
      const id = this._normaliseId(args.ID);
      const menu = this._menus.get(id);
      if (!menu) return;
      if (typeof menu.setOpen === "function") {
        menu.setOpen(false);
      }
      if (menu.element) menu.element.remove();
      this._menus.delete(id);
      if (this._lastSelectedMenu === id) this._lastSelectedMenu = "";
    }

    deleteAllMenus() {
      this._closeAllPanels();

      for (const menu of this._menus.values()) {
        if (menu.element) menu.element.remove();
      }

      this._menus.clear();
      this._lastSelectedMenu = "";
    }

    moveMenu(args) {
      const menu = this._getMenu(args.ID);
      if (!menu) return;
      menu.x = Scratch.Cast.toNumber(args.X);
      menu.y = Scratch.Cast.toNumber(args.Y);
      this._updatePosition(menu);
    }

    setWidth(args) {
      const menu = this._getMenu(args.ID);
      if (!menu) return;
      menu.width = Math.max(40, Scratch.Cast.toNumber(args.WIDTH));
      this._updatePosition(menu);
    }

    selectIndex(args) {
      const menu = this._getMenu(args.ID);
      if (!menu) return;
      const index = Math.floor(Scratch.Cast.toNumber(args.INDEX));
      if (index < 1 || index > menu.options.length) return;
      menu.selectedIndex = index;
      menu.selectedItem = menu.options[index - 1];
      menu.label.textContent = menu.selectedItem;
      this._applyAppearance(menu);
    }

    setPlaceholder(args) {
      const menu = this._getMenu(args.ID);
      if (!menu) return;
      menu.placeholder = Scratch.Cast.toString(args.TEXT);
      menu.label.textContent = menu.selectedItem || (menu.options.length ? menu.placeholder : "No options supplied");
    }

    selectedItem(args) {
      const menu = this._getMenu(args.ID);
      return menu ? menu.selectedItem : "";
    }

    selectedIndex(args) {
      const menu = this._getMenu(args.ID);
      return menu ? menu.selectedIndex : 0;
    }

    lastSelectedMenu() {
      return this._lastSelectedMenu;
    }

    optionCount(args) {
      const menu = this._getMenu(args.ID);
      return menu ? menu.options.length : 0;
    }

    currentFont(args) {
      const menu = this._getMenu(args.ID);
      return menu ? menu.style.fontFamily : "";
    }

    menuExists(args) {
      return this._menus.has(this._normaliseId(args.ID));
    }

    menuVisible(args) {
      const menu = this._getMenu(args.ID);
      return Boolean(menu && menu.visible);
    }

    _styleMenu(args, change) {
      const menu = this._getMenu(args.ID);
      if (!menu) return;
      change(menu.style);
      this._applyAppearance(menu);
    }

    setBackground(args) {
      this._styleMenu(args, style => { style.background = Scratch.Cast.toString(args.COLOUR); });
    }

    setBorder(args) {
      this._styleMenu(args, style => { style.border = Scratch.Cast.toString(args.COLOUR); });
    }

    setTextColour(args) {
      this._styleMenu(args, style => { style.text = Scratch.Cast.toString(args.COLOUR); });
    }

    setBorderThickness(args) {
      this._styleMenu(args, style => { style.borderThickness = Math.max(0, Scratch.Cast.toNumber(args.SIZE)); });
    }

    setRadius(args) {
      this._styleMenu(args, style => { style.radius = Math.max(0, Scratch.Cast.toNumber(args.SIZE)); });
    }

    setFont(args) {
      this._styleMenu(args, style => { style.fontFamily = Scratch.Cast.toString(args.FONT).trim() || "Arial"; });
    }

    setFontSize(args) {
      this._styleMenu(args, style => { style.fontSize = Math.max(1, Scratch.Cast.toNumber(args.SIZE)); });
    }

    setHeight(args) {
      this._styleMenu(args, style => { style.height = Math.max(10, Scratch.Cast.toNumber(args.HEIGHT)); });
    }

    setOpacity(args) {
      this._styleMenu(args, style => { style.opacity = Math.max(0, Math.min(100, Scratch.Cast.toNumber(args.OPACITY))); });
    }

    resetAppearance(args) {
      const menu = this._getMenu(args.ID);
      if (!menu) return;
      menu.style = { ...DEFAULT_STYLE };
      this._applyAppearance(menu);
    }
  }

  // MenuMaster public release build. Version is stored in RELEASE_VERSION.
  Scratch.extensions.register(new MenuMaster());
})(Scratch);
