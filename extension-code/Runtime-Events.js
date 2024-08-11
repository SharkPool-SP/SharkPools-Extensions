// Name: Runtime Events
// ID: SPevents
// Description: Events from the Runtime
// By: SharkPool

// Version V.1.2.01

(function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) throw new Error("Runtime Events must run unsandboxed!");

  const vm = Scratch.vm;
  const runtime = vm.runtime;

  const menuIconURI =
"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3MS43MDYiIGhlaWdodD0iNzEuNzA2IiB2aWV3Qm94PSIwIDAgNzEuNzA2IDcxLjcwNiI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIyNDAiIHkxPSIxNDYuMTQ3IiB4Mj0iMjQwIiB5Mj0iMjEzLjg1MyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJhIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM0MzViNjciLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM3YjljYmIiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iMjQwIiB5MT0iMTQ2LjE0NyIgeDI9IjI0MCIgeTI9IjIxMy44NTMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iYiI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjN2I5Y2JiIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNDM1YjY3Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGcgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIj48cGF0aCBkPSJNMjA2LjE0NyAxODBjMC0xOC42OTYgMTUuMTU3LTMzLjg1MyAzMy44NTMtMzMuODUzczMzLjg1MyAxNS4xNTcgMzMuODUzIDMzLjg1My0xNS4xNTcgMzMuODUzLTMzLjg1MyAzMy44NTMtMzMuODUzLTE1LjE1Ny0zMy44NTMtMzMuODUzeiIgZmlsbD0idXJsKCNhKSIgc3Ryb2tlPSJ1cmwoI2IpIiBzdHJva2Utd2lkdGg9IjQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMDQuMTQ3IC0xNDQuMTQ3KSIvPjxwYXRoIGQ9Ik0yNC43MDMgNDQuNjIzYy0zLjk4IDEuMzgyLTcuMTc3IDEuMTM2LTguMzItMi4xNi0xLjE0NS0zLjI5NCAxLjMxMi01LjE4NyA1LjI5LTYuNTY4bDguOTk2LTMuMTIzYTYuMTYgNi4xNiAwIDAgMC0uNTI4IDUuMTgyIDYuMTYgNi4xNiAwIDAgMCAzLjMzOCAzLjYyM3ptMjYuNDY4LTkuMTg4LTkuNzQ1IDMuMzgzYTYuMTYgNi4xNiAwIDAgMCAuMzc2LTQuOTEyIDYuMTYgNi4xNiAwIDAgMC0zLjYyNS0zLjc0bDkuNjgyLTMuMzYxYzIuNzY5LS45NjIgNi4zNDQtLjUgNy40NzcgMi40NTJzLTEuNTA2IDUuMjU1LTQuMTY1IDYuMTc4IiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTI3LjA5NyAyNC43MDNjLTEuMzgyLTMuOTgtMS4xMzYtNy4xNzcgMi4xNi04LjMyIDMuMjk0LTEuMTQ1IDUuMTg4IDEuMzEyIDYuNTY5IDUuMjlsMy4wNiA4LjgxN2E2LjE2IDYuMTYgMCAwIDAtNC45MzktLjM5IDYuMTYgNi4xNiAwIDAgMC0zLjcyOSAzLjU5NXptOS4xODggMjYuNDY4Yy0uNjY4LTEuOTIzLTEuOTYtNS42NDMtMy40NDQtOS45MjJhNi4xNiA2LjE2IDAgMCAwIDUuMTU1LjUxMiA2LjE2IDYuMTYgMCAwIDAgMy42MzQtMy4zNjZsMy4yODUgOS40NjRjLjk2MiAyLjc2OS41IDYuMzQ0LTIuNDUyIDcuNDc3cy01LjI1NS0xLjUwNi02LjE3OC00LjE2NSIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0yMS43NzUgMzQuMTY4Yy0zLjc5Mi0xLjgzOC01Ljg3OS00LjI3My00LjM1OC03LjQxMSAxLjUyMi0zLjE0IDQuNTk4LTIuNzQgOC4zODctLjkwNGw4LjUyIDQuMTI5YTYuMTcyIDYuMTcyIDAgMCAwLTQuMDU5IDguM3ptMjUuMjEyIDEyLjIxOC05LjMyNi00LjUyYTYuMTcyIDYuMTcyIDAgMCAwIDQtOC4zMjlsOS4wODcgNC40MDRjMi42MzcgMS4yNzkgNC44NCA0LjEzMyAzLjU1MiA3LjAyMS0xLjI4NiAyLjg5LTQuNzggMi42NTItNy4zMTMgMS40MjQiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNMzcuNTUzIDIxLjc3NWMxLjgzNy0zLjc5MiA0LjI3Mi01Ljg3OSA3LjQxLTQuMzU4IDMuMTQgMS41MjIgMi43NCA0LjU5OC45MDQgOC4zODdsLTQuMDA5IDguMjcyLS4wNTYtLjE3YTYuMTcgNi4xNyAwIDAgMC04LjM4Ny0zLjU5NHpNMjUuMzM0IDQ2Ljk4N2w0LjY0NC05LjU4MnEuMDY4LjI3Ni4xNjMuNTVhNi4xNyA2LjE3IDAgMCAwIDguMDIyIDMuNzQ1bC00LjM4NCA5LjA0OGMtMS4yNzkgMi42MzctNC4xMzIgNC44NC03LjAyMSAzLjU1Mi0yLjg5LTEuMjg2LTIuNjUyLTQuNzgtMS40MjQtNy4zMTMiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNNDAuNzExIDUwLjA5OWMtNy44NjYgMi43My0xNi40NTYtMS40MzItMTkuMTg3LTkuMjk4LTIuNzMtNy44NjYgMS40MzMtMTYuNDU3IDkuMjk5LTE5LjE4N3MxNi40NTYgMS40MzIgMTkuMTg2IDkuMjk4LTEuNDMyIDE2LjQ1Ny05LjI5OCAxOS4xODdtLjM4NS0xNS45NjRBNS40NSA1LjQ1IDAgMSAwIDMwLjggMzcuNzA5YTUuNDUgNS40NSAwIDAgMCAxMC4yOTYtMy41NzQiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+";

  function getKeyByValue(object, name, value) {
    for (const key in object) {
      if (object[key][name] === value) return key;
    }
    return "";
  }

  // modify "console.error" so we can make an event for it
  const er = console.error;
  console.error = function (...args) {
    const threads = runtime.startHats("SPevents_onError");
    for (let i = 0; i < threads.length; i++) { threads[i].SPError = args || "" }
    return er.apply(this, args);
  }

  class SPevents {
    constructor() {
      runtime.on("ANSWER", () => { runtime.startHats("SPevents_onAnswer") });
      runtime.on("QUESTION", () => { runtime.startHats("SPevents_onAsk") });

      runtime.on("targetWasRemoved", () => {
        runtime.startHats("SPevents_onTarget", { MENU : "deleted" })
      });
      runtime.on("targetWasCreated", () => {
        runtime.startHats("SPevents_onTarget", { MENU : "created" })
      });
      runtime.on("STOP_FOR_TARGET", () => {
        runtime.once("AFTER_EXECUTE", () => { runtime.startHats("SPevents_onTargetStop") });
      });
      runtime.on("TARGETS_UPDATE", () => { runtime.startHats("SPevents_onTargetUpdate") });
      runtime.on("SAY", () => { runtime.startHats("SPevents_onSay") });

      runtime.on("MONITORS_UPDATE", () => { runtime.startHats("SPevents_onMonitor") });
      runtime.on("EXTENSION_ADDED", () => { runtime.startHats("SPevents_onExtension") });
      runtime.on("STAGE_SIZE_CHANGED", () => {
        runtime.startHats("SPevents_onRunT", { MENU : "stage size" })
      });
      runtime.on("FRAMERATE_CHANGED", () => {
        runtime.startHats("SPevents_onRunT", { MENU : "framerate" })
      });
      runtime.on("INTERPOLATION_CHANGED", () => {
        runtime.startHats("SPevents_onRunT", { MENU : "interpolation" })
      });
      vm.on("TURBO_MODE_ON", () => {
        runtime.startHats("SPevents_onTurbomode", { OPT : "on" })
      });
      vm.on("TURBO_MODE_OFF", () => {
        runtime.startHats("SPevents_onTurbomode", { OPT : "off" })
      });
      runtime.on("PROJECT_LOADED", () => {
        runtime.startHats("SPevents_onLoad");
        const targets = runtime.targets;
        vm.start();
        setTimeout(() => {
          for (let i = 0; i < targets.length; i++) {
            const target = targets[i];
            const object = target.blocks._blocks;
            const keyV = getKeyByValue(object, "opcode", "SPevents_onProjectLoad");
            if (keyV) runtime._pushThread(object[keyV].id, target);
          }
        }, 10);
      });
      window.addEventListener("error", (e) => {
        const threads = runtime.startHats("SPevents_onError");
        for (let i = 0; i < threads.length; i++) { threads[i].SPError = e.error || e.message }
      });
    }
    getInfo() {
      return {
        id: "SPevents",
        name: "Runtime Events",
        color1: "#7b9cbb",
        color2: "#5a738a",
        color3: "#394958",
        menuIconURI,
        blocks: [
          {
            opcode: "onAsk", isEdgeActivated: false,
            blockType: Scratch.BlockType.EVENT,
            text: "when question asked"
          },
          {
            opcode: "onAnswer", isEdgeActivated: false,
            blockType: Scratch.BlockType.EVENT,
            text: "when question answered"
          },
          "---",
          {
            opcode: "onTarget", isEdgeActivated: false,
            blockType: Scratch.BlockType.EVENT,
            text: "when a sprite is [MENU]",
            arguments: {
              MENU: { type: Scratch.ArgumentType.STRING, menu: "TARGET" }
            }
          },
          {
            opcode: "onTargetUpdate", isEdgeActivated: false,
            blockType: Scratch.BlockType.EVENT,
            text: "when sprite values update"
          },
          {
            opcode: "onTargetStop", isEdgeActivated: false,
            blockType: Scratch.BlockType.EVENT,
            text: "when a sprite stops other scripts"
          },
          {
            opcode: "onSay", isEdgeActivated: false,
            blockType: Scratch.BlockType.EVENT,
            text: "when a sprite talks or thinks"
          },
          "---",
          {
            opcode: "onTurbomode", isEdgeActivated: false,
            blockType: Scratch.BlockType.EVENT,
            text: "when turbomode turns [OPT]",
            arguments: {
              OPT: { type: Scratch.ArgumentType.STRING, menu: "ON_OFF" }
            }
          },
          {
            opcode: "onRunT", isEdgeActivated: false,
            blockType: Scratch.BlockType.EVENT,
            text: "when [MENU] is set",
            arguments: {
              MENU: { type: Scratch.ArgumentType.STRING, menu: "RUNTIME_OPT" }
            }
          },
          {
            opcode: "onExtension", isEdgeActivated: false,
            blockType: Scratch.BlockType.EVENT,
            text: "when extension is added"
          },
          "---",
          {
            opcode: "onMonitor", isEdgeActivated: false,
            blockType: Scratch.BlockType.EVENT,
            text: "when a monitor is updated"
          },
          {
            opcode: "onLoad", isEdgeActivated: false,
            blockType: Scratch.BlockType.EVENT,
            text: "when loaded in the editor"
          },
          {
            opcode: "onProjectLoad", isEdgeActivated: false,
            blockType: Scratch.BlockType.EVENT,
            text: "when project loads"
          },
          "---",
          {
            opcode: "onError", isEdgeActivated: false,
            blockType: Scratch.BlockType.EVENT,
            text: "when a error occurs"
          },
          {
            opcode: "lastError", disableMonitor: true,
            blockType: Scratch.BlockType.REPORTER,
            text: "error"
          }
        ],
        menus: {
          ON_OFF: ["on", "off"],
          TARGET: ["created", "deleted"],
          RUNTIME_OPT: ["stage size", "framerate", "interpolation"],
        }
      };
    }

    lastError(_, util) { return util.thread.SPError ?? "" }
  }

  function addLinearGradientToBody() {
    var grad1 = document.createElement("div");
    grad1.innerHTML = `<svg><defs>
      <linearGradient x1="240" y1="0" x2="240" y2="100" gradientUnits="userSpaceOnUse" id="SPevents-GRAD1">
      <stop offset="0" stop-color="#7b9cbb"/><stop offset="0.5" stop-color="#435b67"/></linearGradient>
      </defs></svg>`;
    var grad2 = document.createElement("div");
    grad2.innerHTML = `<svg><defs>
      <linearGradient x1="240" y1="0" x2="240" y2="100" gradientUnits="userSpaceOnUse" id="SPevents-GRAD2">
      <stop offset="0" stop-color="#435b67"/><stop offset="0.5" stop-color="#7b9cbb"/></linearGradient>
      </defs></svg>`;
    document.body.append(grad1, grad2);
  }
  if (Scratch.gui) Scratch.gui.getBlockly().then((ScratchBlocks) => {
    addLinearGradientToBody();
    if (!ScratchBlocks?.SPgradients?.patched) { // Gradient Patch by 0znzw & SharkPool
      ScratchBlocks.SPgradients = {gradientUrls: {}, patched: false};
      const BSP = ScratchBlocks.BlockSvg.prototype, BSPR = BSP.render;
      BSP.render = function(...args) {
        const res = BSPR.apply(this, args);
        let category;
        if (this?.svgPath_ && this?.category_ && (category = this.type.slice(0, this.type.indexOf("_"))) && ScratchBlocks.SPgradients.gradientUrls[category]) {
          const urls = ScratchBlocks.SPgradients.gradientUrls[category];
          if (urls) this.svgPath_.setAttribute("fill", urls[0]);
        }
        return res;
      }
      ScratchBlocks.SPgradients.patched = true;
    }
    ScratchBlocks.SPgradients.gradientUrls["SPevents"] = ["url(#SPevents-GRAD1)", "url(#SPevents-GRAD2)"];
  });

  Scratch.extensions.register(new SPevents());
})(Scratch);
