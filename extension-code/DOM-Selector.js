// Name: DOM Selector
// ID: SPdomSelect
// Description: Read Elements and Create Events from the Website
// By: SharkPool

// Version V.1.0.0

(function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) throw new Error("DOM Selector must run unsandboxed");

  const menuIconURI =
"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI3Mi44NTgyNSIgaGVpZ2h0PSI3Mi44NTgyNSIgdmlld0JveD0iMCwwLDcyLjg1ODI1LDcyLjg1ODI1Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjAzLjU3MDg3LC0xNDMuNTcwODcpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTIwMy41NzA4OCwxODBjMCwtMjAuMTE5MjUgMTYuMzA5ODgsLTM2LjQyOTEyIDM2LjQyOTEzLC0zNi40MjkxMmMyMC4xMTkyNSwwIDM2LjQyOTEzLDE2LjMwOTg4IDM2LjQyOTEzLDM2LjQyOTEzYzAsMjAuMTE5MjUgLTE2LjMwOTg3LDM2LjQyOTEzIC0zNi40MjkxMiwzNi40MjkxM2MtMjAuMTE5MjUsMCAtMzYuNDI5MTIsLTE2LjMwOTg4IC0zNi40MjkxMiwtMzYuNDI5MTJ6IiBmaWxsPSIjMGQ1OTAwIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48cGF0aCBkPSJNMjA3LjcxOTE2LDE4MGMwLC0xNy44MjgyMSAxNC40NTI2MywtMzIuMjgwODQgMzIuMjgwODQsLTMyLjI4MDg0YzE3LjgyODIyLDAgMzIuMjgwODQsMTQuNDUyNjMgMzIuMjgwODQsMzIuMjgwODRjMCwxNy44MjgyMiAtMTQuNDUyNjMsMzIuMjgwODQgLTMyLjI4MDg0LDMyLjI4MDg0Yy0xNy44MjgyMSwwIC0zMi4yODA4NCwtMTQuNDUyNjMgLTMyLjI4MDg0LC0zMi4yODA4NHoiIGZpbGw9IiMxNDg1MDAiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjxwYXRoIGQ9Ik0yMjYuMTc1NjYsMTk3LjM4Mzk3Yy0zLjc5MjkzLDAgLTYuODY3NzEsLTMuMDc0NzggLTYuODY3NzEsLTYuODY3NzF2LTI0LjM5MDU3YzAsLTMuNzkyOTMgMy4wNzQ3OCwtNi44Njc3MSA2Ljg2NzcxLC02Ljg2NzcxaDI0LjM5MDU3YzMuNzkyOTQsMCA2Ljg2NzcxLDMuMDc0NzcgNi44Njc3MSw2Ljg2NzcxdjI0LjM5MDU3YzAsMy43OTI5NCAtMy4wNzQ3OCw2Ljg2NzcxIC02Ljg2NzcxLDYuODY3NzF6IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48cGF0aCBkPSJNMjE4LjE2MDk1LDE2Ny45MTA5aDQwLjE2NTY1IiBmaWxsPSJub25lIiBzdHJva2U9IiMxNDg1MDAiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTI0OC41OTg5OCwxNjcuNDQwMnYtMTEuNjEwMzkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzE0ODUwMCIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNMjUyLjIyNzgxLDE5Ni43NDY4N2MwLDAgMy4xNzA3MSwzLjE3MDcxIDQuMTU4NjgsNC4xNTg2N2MwLjU0Njk4LDAuNTQ2OTggMS44NDg0NCwwLjcwMDk5IDIuNTMzMDgsMC4wMTYzNWMwLjczMjYsLTAuNzMyNiAxLjU5MjIsLTEuNTkyMiAyLjAxMTc0LC0yLjAxMTc0YzAuNDgxMzYsLTAuNDgxMzYgMC40NDI2MiwtMS44NTc5MiAtMC4wOTQ0MiwtMi4zOTQ5NmMtMC45ODUxOCwtMC45ODUxOCAtNC4xODg2OSwtNC4xODg3IC00LjE4ODY5LC00LjE4ODdjMCwwIDEuNTg3ODQsLTEuNTg3ODMgMi4yMTI2NCwtMi4yMTI2NGMwLjQ1OTEyLC0wLjQ1OTEzIDAuNzExMjYsLTEuMzQwNjMgLTAuMDc0NTUsLTEuNTc3NzhjLTIuODkwMTIsLTAuODcyMTYgLTkuODY5ODYsLTIuOTc4NDggLTExLjkyNzY0LC0zLjU5OTQ3Yy0xLjEwODMzLC0wLjMzNDQ2IC0xLjk4NDk0LDAuNjg3NDYgLTEuNjU3NDksMS44OTAzMmMwLjU2MTg5LDIuMDY0MDYgMi4zNTYyNyw4LjY1NTQ5IDMuMTgxODksMTEuNjg4MzZjMC4yNTkzMSwwLjk1MjUzIDEuMDkxNjgsMC45MDQ4MiAxLjUyNzE2LDAuNDgxOTZjMC42MzA5NCwtMC42MTI2NCAyLjMxNzYsLTIuMjUwMzcgMi4zMTc2LC0yLjI1MDM3eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMTQ4NTAwIiBzdHJva2Utd2lkdGg9IjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik0yNTIuMjI3ODEsMTk2Ljc0Njg3YzAsMCAzLjE3MDcxLDMuMTcwNyA0LjE1ODY3LDQuMTU4NjdjMC41NDY5OCwwLjU0Njk4IDEuODQ4NDQsMC43MDA5OSAyLjUzMzA4LDAuMDE2MzVjMC43MzI2LC0wLjczMjYgMS41OTIyLC0xLjU5MjIgMi4wMTE3NCwtMi4wMTE3NGMwLjQ4MTM2LC0wLjQ4MTM2IDAuNDQyNjIsLTEuODU3OTIgLTAuMDk0NDIsLTIuMzk0OTZjLTAuOTg1MTksLTAuOTg1MTkgLTQuMTg4NywtNC4xODg3IC00LjE4ODcsLTQuMTg4N2MwLDAgMS41ODc4MywtMS41ODc4MyAyLjIxMjY0LC0yLjIxMjYzYzAuNDU5MTIsLTAuNDU5MTIgMC43MTEyNywtMS4zNDA2NCAtMC4wNzQ1NSwtMS41Nzc3OGMtMi44OTAxMiwtMC44NzIxNiAtOS44Njk4NSwtMi45Nzg0OCAtMTEuOTI3NjQsLTMuNTk5NDdjLTEuMTA4MzMsLTAuMzM0NDYgLTEuOTg0OTUsMC42ODc0NiAtMS42NTc1LDEuODkwMzJjMC41NjE4OSwyLjA2NDA2IDIuMzU2MjcsOC42NTU0OSAzLjE4MTksMTEuNjg4MzZjMC4yNTkzMSwwLjk1MjUzIDEuMDkxNjcsMC45MDQ4MiAxLjUyNzE2LDAuNDgxOTZjMC42MzA5NCwtMC42MTI2NCAyLjMxNzYsLTIuMjUwMzcgMi4zMTc2LC0yLjI1MDM3eiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvZz48L2c+PC9zdmc+";

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

      selectOne(args) {
        const element = document.querySelector(args.CLASS);
        return element ? element.innerHTML : "";
      }

      selectAll(args) {
        const elements = document.querySelectorAll(args.CLASS);
        let newArray = [];
        if (elements.length > 0) {
          for (let element of elements) {
            newArray.push(element.innerHTML);
          }
          return JSON.stringify(newArray);
        }
        return "[]";
      }

      getFromHTML(args) {
        // Cleanse argument
        let path = args.PATH;
        if (path.startsWith(".")) path = path.substring(1);

        const element = document.querySelector(args.CLASS);
        if (element) {
          try {
            const pathParts = path.split(".");
            let curElement = element;
            for (const part of pathParts) {
              curElement = curElement[part];
              if (curElement === undefined) return "";
            }
            const toString = value => {
              if (
                typeof value === "object" && value !== null
              ) return JSON.stringify(value);
              else return String(value);
            };
            return toString(curElement);
          } catch { return "" }
        }
        return "";
      }

      typeElement(args) {
        const element = document.querySelector(args.CLASS);
        if (element) {
          const num = Scratch.Cast.toNumber(args.NUM);
          if (args.TYPE === "parent") {
            let thisElement = element;
            for (let i = 0; i < num + 1; i++) {
              thisElement = thisElement.parentNode;
              if (!thisElement) break;
            }
            return thisElement ? thisElement.innerHTML : "";
          } else {
            const child = element.childNodes[num - 1];
            return child ? child.innerHTML : "";
          }
        }
        return "";
      }

      addID(args) {
        const element = document.querySelector(args.CLASS);
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
          } else {
            thisElement = element.childNodes[num - 1];
          }
          if (thisElement) thisElement.id = ID;
        }
      }

      attachListener(args) {
        const element = document.querySelector(args.CLASS);
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
    }

  Scratch.extensions.register(new SPdomSelect());
})(Scratch);
