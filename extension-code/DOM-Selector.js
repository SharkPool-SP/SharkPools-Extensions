// Name: DOM Selector
// ID: SPdomSelect
// Description: Read Elements and Create Events from the Website
// By: SharkPool

// Version V.1.1.1

(function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) throw new Error("DOM Selector must run unsandboxed");

  const menuIconURI =
"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3Mi44NTgiIGhlaWdodD0iNzIuODU4IiB2aWV3Qm94PSIwIDAgNzIuODU4IDcyLjg1OCI+PHBhdGggZD0iTTAgMzYuNDNDMCAxNi4zMSAxNi4zMSAwIDM2LjQzIDBzMzYuNDMgMTYuMzEgMzYuNDMgMzYuNDMtMTYuMzEgMzYuNDMtMzYuNDMgMzYuNDNTMCA1Ni41NSAwIDM2LjQzIiBmaWxsPSIjMGQ1OTAwIi8+PHBhdGggZD0iTTQuMTUgMzYuNDNjMC0xNy44MjggMTQuNDUyLTMyLjI4IDMyLjI4LTMyLjI4czMyLjI4IDE0LjQ1MiAzMi4yOCAzMi4yOC0xNC40NTIgMzIuMjgtMzIuMjggMzIuMjhTNC4xNSA1NC4yNTggNC4xNSAzNi40MyIgZmlsbD0iIzE0ODUwMCIvPjxwYXRoIGQ9Ik0yMi42MDYgNTMuODE0YTYuODcgNi44NyAwIDAgMS02Ljg2OC02Ljg2OHYtMjQuMzlhNi44NyA2Ljg3IDAgMCAxIDYuODY4LTYuODY4aDI0LjM5YTYuODcgNi44NyAwIDAgMSA2Ljg2OCA2Ljg2OHYyNC4zOWE2Ljg3IDYuODcgMCAwIDEtNi44NjggNi44Njh6IiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTE0LjU5MSAyNC4zNGg0MC4xNjZtLTkuNzI4LS40N1YxMi4yNiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMTQ4NTAwIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Im00OC42NTggNTMuMTc3IDQuMTU4IDQuMTU5Yy41NDcuNTQ3IDEuODQ5LjcgMi41MzQuMDE2bDIuMDExLTIuMDEyYy40ODItLjQ4MS40NDMtMS44NTgtLjA5NC0yLjM5NWwtNC4xODktNC4xODkgMi4yMTMtMi4yMTJjLjQ1OS0uNDYuNzExLTEuMzQtLjA3NS0xLjU3OC0yLjg5LS44NzItOS44Ny0yLjk3OC0xMS45MjctMy42LTEuMTA5LS4zMzQtMS45ODUuNjg4LTEuNjU4IDEuODlsMy4xODIgMTEuNjljLjI2Ljk1MiAxLjA5Mi45MDQgMS41MjcuNDgxeiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMTQ4NTAwIiBzdHJva2Utd2lkdGg9IjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Im00OC42NTggNTMuMTc3IDQuMTU4IDQuMTU5Yy41NDcuNTQ3IDEuODQ5LjcgMi41MzQuMDE2bDIuMDExLTIuMDEyYy40ODItLjQ4MS40NDMtMS44NTgtLjA5NC0yLjM5NWwtNC4xODktNC4xODkgMi4yMTMtMi4yMTJjLjQ1OS0uNDYuNzExLTEuMzQtLjA3NS0xLjU3OC0yLjg5LS44NzItOS44Ny0yLjk3OC0xMS45MjctMy42LTEuMTA5LS4zMzQtMS45ODUuNjg4LTEuNjU4IDEuODlsMy4xODIgMTEuNjljLjI2Ljk1MiAxLjA5Mi45MDQgMS41MjcuNDgxeiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==";

  const vm = Scratch.vm;
  const runtime = vm.runtime;

  let listeners = {};

  const xmlEscape = function (unsafe) {
    return Scratch.Cast.toString(unsafe).replace(/[<>&'"]/g, c => {
      switch (c) {
        case "<": return "&lt;";
        case ">": return "&gt;";
        case "&": return "&amp;";
        case "'": return "&apos;";
        case "\"": return "&quot;";
      }
    });
  };

  class SPdomSelect {
    getInfo() {
      return {
          id: "SPdomSelect",
          name: "DOM Selector",
          color1: "#148500",
          menuIconURI,
          blocks: [
            { blockType: Scratch.BlockType.LABEL, text: "Query Selector" },
            {
              opcode: "selectOne",
              blockType: Scratch.BlockType.REPORTER,
              text: "query select [CLASS]",
              arguments: {
                CLASS: { type: Scratch.ArgumentType.STRING, defaultValue: "[class^=\"...\"]" }
              }
            },
            {
              opcode: "selectAll",
              blockType: Scratch.BlockType.REPORTER,
              text: "query select all [CLASS]",
              arguments: {
                CLASS: { type: Scratch.ArgumentType.STRING, defaultValue: "[class^=\"...\"]" }
              }
            },
            "---",
            {
              opcode: "typeElement",
              blockType: Scratch.BlockType.REPORTER,
              text: "[TYPE] element # [NUM] of [CLASS]",
              arguments: {
                TYPE: { type: Scratch.ArgumentType.STRING, menu: "ELEMENT" },
                NUM: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 },
                CLASS: { type: Scratch.ArgumentType.STRING, defaultValue: "[class^=\"...\"]" }
              }
            },
            {
              opcode: "addID",
              blockType: Scratch.BlockType.COMMAND,
              text: "attach ID [ID] to [TYPE] element # [NUM] of [CLASS]",
              arguments: {
                ID: { type: Scratch.ArgumentType.STRING, defaultValue: "custom-id" },
                TYPE: { type: Scratch.ArgumentType.STRING, menu: "ELEMENT" },
                NUM: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 },
                CLASS: { type: Scratch.ArgumentType.STRING, defaultValue: "[class^=\"...\"]" }
              }
            },
            { blockType: Scratch.BlockType.LABEL, text: "Element Properties" },
            {
              opcode: "setHTML",
              blockType: Scratch.BlockType.COMMAND,
              text: "set [PATH] in [CLASS] to [VALUE]",
              arguments: {
                PATH: { type: Scratch.ArgumentType.STRING, defaultValue: "style.borderRadius" },
                CLASS: { type: Scratch.ArgumentType.STRING, defaultValue: "[class^=\"...\"]" },
                VALUE: { type: Scratch.ArgumentType.STRING, defaultValue: "15px" }
              }
            },
            {
              opcode: "getFromHTML",
              blockType: Scratch.BlockType.REPORTER,
              text: "get [PATH] from [CLASS]",
              arguments: {
                PATH: { type: Scratch.ArgumentType.STRING, defaultValue: "style.path" },
                CLASS: { type: Scratch.ArgumentType.STRING, defaultValue: "[class^=\"...\"]" }
              }
            },
            "---",
            {
              opcode: "getBounds",
              blockType: Scratch.BlockType.REPORTER,
              text: "get bounding box of [CLASS]",
              arguments: {
                CLASS: { type: Scratch.ArgumentType.STRING, defaultValue: "[class^=\"...\"]" }
              }
            },
            { blockType: Scratch.BlockType.LABEL, text: "Listeners" },
            {
              opcode: "attachListener",
              blockType: Scratch.BlockType.COMMAND,
              text: "attach [TYPE] listener to [CLASS] named [NAME]",
              arguments: {
                TYPE: { type: Scratch.ArgumentType.STRING, menu: "LISTEN_TYPES" },
                CLASS: { type: Scratch.ArgumentType.STRING, defaultValue: "[class^=\"...\"]" },
                NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "my-listener1" }
              }
            },
            {
              opcode: "removeListener",
              blockType: Scratch.BlockType.COMMAND,
              text: "remove listener [LISTNR]",
              arguments: {
                LISTNR: { type: Scratch.ArgumentType.STRING, menu: "CUST_LISTEN" }
              }
            },
            {
              opcode: "activeListeners",
              blockType: Scratch.BlockType.REPORTER,
              text: "active listeners"
            },
            {
              opcode: "whenListener",
              blockType: Scratch.BlockType.EVENT,
              isEdgeActivated: false,
              text: "when [LISTNR] activates",
              arguments: {
                LISTNR: { type: Scratch.ArgumentType.STRING, menu: "CUST_LISTEN" }
              }
            },
            {
              opcode: "emitListener",
              blockType: Scratch.BlockType.COMMAND,
              text: "call [TYPE] listener in [CLASS] with data [DATA]",
              arguments: {
                TYPE: { type: Scratch.ArgumentType.STRING, menu: "LISTEN_TYPES" },
                CLASS: { type: Scratch.ArgumentType.STRING, defaultValue: "[class^=\"...\"]" },
                DATA: { type: Scratch.ArgumentType.STRING, defaultValue: "100" }
              }
            }
          ],
          menus: {
            CUST_LISTEN: { acceptReporters: false, items: "getListeners" },
            ELEMENT: {
              acceptReporters: false,
              items: ["parent", "child"]
            },
            LISTEN_TYPES: {
              acceptReporters: false,
              items: [
                { text: "click", value: "click" },
                { text: "double click", value: "dblclick" },
                { text: "mouse over", value: "mouseover" },
                { text: "mouse out", value: "mouseout" },
                { text: "mouse down", value: "mousedown" },
                { text: "mouse up", value: "mouseup" },
                { text: "scroll", value: "scroll" },
                { text: "input", value: "input" },
                { text: "change", value: "change" },
                { text: "focus", value: "focusin" }, // purposely used instead of "focus"
                { text: "unfocus", value: "focusout" }, // purposely used instead of "blur"
              ]
            }
          },
        };
      }

      getListeners() {
        const items = Object.keys(listeners);
        return items.length > 0 ? items : ["my-listener1"];
      }

      querySelect(query) {
        try { return document.querySelector(query) }
        catch { return "" }
      }

      selectOne(args) {
        const element = this.querySelect(args.CLASS);
        return element ? element.outerHTML : "";
      }

      selectAll(args) {
        const elements = this.querySelect(args.CLASS);
        let newArray = [];
        if (elements.length > 0) {
          for (let element of elements) newArray.push(element.outerHTML);
          return JSON.stringify(newArray);
        }
        return "[]";
      }

      typeElement(args) {
        const element = this.querySelect(args.CLASS);
        if (element) {
          const num = Scratch.Cast.toNumber(args.NUM);
          if (args.TYPE === "parent") {
            let thisElement = element;
            for (let i = 0; i < num + 1; i++) {
              thisElement = thisElement.parentNode;
              if (!thisElement) break;
            }
            return thisElement ? thisElement.outerHTML : "";
          } else {
            const child = element.childNodes[num - 1];
            return child ? child.outerHTML : "";
          }
        }
        return "";
      }

      addID(args) {
        const element = this.querySelect(args.CLASS);
        if (element) {
          const ID = xmlEscape(args.ID);
          const num = Scratch.Cast.toNumber(args.NUM);
          // As a little secret feature, child/parent 0 is just the base element
          return element.id = ID;

          let thisElement = element;
          if (args.TYPE === "parent") {
            for (let i = 0; i < num + 1; i++) {
              thisElement = thisElement.parentNode;
              if (!thisElement) break;
            }
          } else { thisElement = element.childNodes[num - 1] }
          if (thisElement) thisElement.id = ID;
        }
      }

      setHTML(args) {
        // Cleanse argument
        let path = args.PATH;
        if (path.startsWith(".")) path = path.substring(1);
        if (!path.startsWith("style.") && path !== "textContent") return console.warn("This Path isnt Allowed");

        const element = this.querySelect(args.CLASS);
        if (element) {
          try {
            const pathParts = path.split(".");
            let curElement = element;
            for (let i = 0; i < pathParts.length - 1; i++) {
              curElement = curElement[pathParts[i]];
            }
            curElement[pathParts[pathParts.length - 1]] = xmlEscape(args.VALUE);
          } catch {}
        }
      }

      getFromHTML(args) {
        // Cleanse argument
        let path = args.PATH;
        if (path.startsWith(".")) path = path.substring(1);

        const element = this.querySelect(args.CLASS);
        if (element) {
          try {
            const pathParts = path.split(".");
            let curElement = element;
            for (const part of pathParts) {
              curElement = curElement[part];
              if (curElement === undefined) return "";
            }
            const toString = value => {
              if (typeof value === "object" && value !== null) return JSON.stringify(value);
              else return String(value);
            };
            return toString(curElement);
          } catch { return "" }
        }
        return "";
      }

      getBounds(args) {
        const element = this.querySelect(args.CLASS);
        return element ? JSON.stringify(element.getBoundingClientRect()) : "{}";
      }

      attachListener(args) {
        const element = this.querySelect(args.CLASS);
        const name = xmlEscape(args.NAME);
        const type = args.TYPE;
        if (name && element) {
          if (listeners[name] !== undefined) {
            // If this stored listener exists, remove the existing listener
            const { type: oldType, func: oldFunc } = listeners[name];
            element.removeEventListener(oldType, oldFunc);
          }
          const func = event => {
            runtime.startHats("SPdomSelect_whenListener", { LISTNR: name });
          };
          element.addEventListener(type, func);
          listeners[name] = { classN : args.CLASS, type, func };
          vm.extensionManager.refreshBlocks();
        }
      }

      removeListener(args) {
        const name = xmlEscape(args.LISTNR);
        if (name && listeners[name] !== undefined) {
          const { classN, type, func } = listeners[name];
          const element = document.querySelector(classN);
          if (element) {
            element.removeEventListener(type, func);
            delete listeners[name];
            vm.extensionManager.refreshBlocks();
          }
        }
      }

      activeListeners() { return JSON.stringify(Object.keys(listeners)) }

      emitListener(args) {
        const element = this.querySelect(args.CLASS);
        const type = args.TYPE;
        if (element) {
          switch (type) {
            case "click":
            case "dblclick":
            case "mouseover":
            case "mouseout":
            case "mousedown":
            case "mouseup":
            case "focus":
            case "unfocus":
              element.dispatchEvent(new Event(type, { bubbles: true }));
              break;
            case "input":
            case "change":
              element.value = args.DATA;
              element.checked = args.DATA;
              element.dispatchEvent(new Event("change", { bubbles: true }));
              break;
            case "scroll":
              element.scrollTop = Scratch.Cast.toNumber(args.DATA);
              element.dispatchEvent(new Event("scroll", { bubbles: true }));
              break;
          }
        }
      }
    }

  Scratch.extensions.register(new SPdomSelect());
})(Scratch);
