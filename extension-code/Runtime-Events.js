// Name: Runtime Events
// ID: SPevents
// Description: Events from the Runtime
// By: SharkPool

// Version V.1.1.1

(function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) throw new Error("Runtime Events Extension must run unsandboxed!");

  const runtime = Scratch.vm.runtime;

  const menuIconURI =
"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI3MS43MDU2MiIgaGVpZ2h0PSI3MS43MDU2MiIgdmlld0JveD0iMCwwLDcxLjcwNTYyLDcxLjcwNTYyIj48ZGVmcz48bGluZWFyR3JhZGllbnQgeDE9IjI0MCIgeTE9IjE0Ni4xNDcxOSIgeDI9IjI0MCIgeTI9IjIxMy44NTI4MSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci0xIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM0MzViNjciLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM3YjljYmIiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iMjQwIiB5MT0iMTQ2LjE0NzE5IiB4Mj0iMjQwIiB5Mj0iMjEzLjg1MjgxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTIiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzdiOWNiYiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzQzNWI2NyIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMDQuMTQ3MTksLTE0NC4xNDcxOSkiPjxnIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2lzUGFpbnRpbmdMYXllciZxdW90Ozp0cnVlfSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTIwNi4xNDcxOSwxODBjMCwtMTguNjk2MzkgMTUuMTU2NDIsLTMzLjg1MjgxIDMzLjg1MjgxLC0zMy44NTI4MWMxOC42OTYzOSwwIDMzLjg1MjgxLDE1LjE1NjQyIDMzLjg1MjgxLDMzLjg1MjgxYzAsMTguNjk2MzkgLTE1LjE1NjQyLDMzLjg1MjgxIC0zMy44NTI4MSwzMy44NTI4MWMtMTguNjk2MzksMCAtMzMuODUyODEsLTE1LjE1NjQyIC0zMy44NTI4MSwtMzMuODUyODF6IiBmaWxsPSJ1cmwoI2NvbG9yLTEpIiBzdHJva2U9InVybCgjY29sb3ItMikiIHN0cm9rZS13aWR0aD0iNCIvPjxwYXRoIGQ9Ik0yMjguODUwNDksMTg4Ljc3MDA1Yy0zLjk4MDcxLDEuMzgxODUgLTcuMTc3NTgsMS4xMzU4NiAtOC4zMjE0MywtMi4xNTkyNWMtMS4xNDM4NSwtMy4yOTUxMSAxLjMxMzEsLTUuMTg4MjQgNS4yOTE0NSwtNi41NjkyN2MyLjYyNzEyLC0wLjkxMTk3IDUuNzc3MTUsLTIuMDA1NDUgOC45OTUwOCwtMy4xMjI1MWMtMC44OTg0NiwxLjUxMDM1IC0xLjE0OTE5LDMuMzkyMTEgLTAuNTI3NzYsNS4xODIyNmMwLjU4NDg0LDEuNjg0NzYgMS44MjYzLDIuOTU0NTkgMy4zMzgzOCwzLjYyMjQxYy0zLjE0NDU2LDEuMDkxNTkgLTYuMjEwMTYsMi4xNTU3NyAtOC43NzU3MiwzLjA0NjM2eiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiLz48cGF0aCBkPSJNMjU1LjMxNzYyLDE3OS41ODIzN2MtMS44OTU3NiwwLjY1ODA5IC01LjU0MDQ4LDEuOTIzMyAtOS43NDQyOCwzLjM4MjU5YzAuNzczMDcsLTEuNDYxMDggMC45NjA3MSwtMy4yMjcgMC4zNzU4NywtNC45MTE3NmMtMC42MjE0MiwtMS43OTAxNSAtMS45ODQxOCwtMy4xMTE4MiAtMy42MjUyMSwtMy43NDA2MmM0LjE1NTg0LC0xLjQ0MjY0IDcuNzY5NjksLTIuNjk3MTQgOS42ODIwOCwtMy4zNjA5OWMyLjc2ODg2LC0wLjk2MTE3IDYuMzQzODMsLTAuNTAwMTggNy40NzY3MywyLjQ1MjQ4YzEuMTMyOSwyLjk1MjY2IC0xLjUwNTgyLDUuMjU1MTUgLTQuMTY1MTksNi4xNzgzeiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiLz48cGF0aCBkPSJNMjMxLjI0NDA0LDE2OC44NTA0OWMtMS4zODE4NSwtMy45ODA3MSAtMS4xMzU4NSwtNy4xNzc1OCAyLjE1OTI1LC04LjMyMTQzYzMuMjk1MTEsLTEuMTQzODUgNS4xODgyNCwxLjMxMzEgNi41NjkyNyw1LjI5MTQ1YzAuODk1MDUsMi41Nzg0IDEuOTY0OTYsNS42NjA1IDMuMDYwMzksOC44MTYxMmMtMS40NjYyNCwtMC43ODQ5NyAtMy4yNDM0MywtMC45Nzg1IC00LjkzODQ4LC0wLjM5MDA5Yy0xLjc3OTMzLDAuNjE3NjcgLTMuMDk1ODQsMS45Njc3NCAtMy43MjkxNSwzLjU5NTVjLTEuMTE3NzUsLTMuMjE5OTQgLTIuMjEwMzMsLTYuMzY3MzQgLTMuMTIxMjksLTguOTkxNTZ6IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIvPjxwYXRoIGQ9Ik0yNDAuNDMxNzIsMTk1LjMxNzYyYy0wLjY2NzMsLTEuOTIyMzIgLTEuOTU4ODYsLTUuNjQyOTIgLTMuNDQ0MDIsLTkuOTIxMjVjMS41MDU2NywwLjg4NTI1IDMuMzc1NTIsMS4xMjkyMiA1LjE1NDg1LDAuNTExNTVjMS42OTUwNSwtMC41ODg0MSAyLjk3MDA3LC0xLjg0MTQ4IDMuNjM0NTcsLTMuMzY2MWMxLjQxMDc4LDQuMDY0MDYgMi42MzMxNCw3LjU4NTM1IDMuMjg1MzcsOS40NjQyNWMwLjk2MTE3LDIuNzY4ODYgMC41MDAxOCw2LjM0MzgzIC0yLjQ1MjQ4LDcuNDc2NzNjLTIuOTUyNjYsMS4xMzI5IC01LjI1NTE1LC0xLjUwNTgzIC02LjE3ODMsLTQuMTY1MTl6IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIvPjxwYXRoIGQ9Ik0yMjUuOTIxNzksMTc4LjMxNDU1Yy0zLjc5MTksLTEuODM3NjggLTUuODc4NDgsLTQuMjcyMTQgLTQuMzU3MzEsLTcuNDEwOTZjMS41MjExNywtMy4xMzg4MiA0LjU5NzE0LC0yLjc0MDE0IDguMzg2NzksLTAuOTAzNTZjMi40ODkyNiwxLjIwNjM3IDUuNDcxMzUsMi42NTE1OSA4LjUxOTcyLDQuMTI4OTNjLTAuMTI1ODUsMC4wMzQ5OSAtMC4yNTE0MSwwLjA3NDE2IC0wLjM3NjUyLDAuMTE3NTljLTMuMjIwMiwxLjExNzg1IC00LjkyNDUsNC42MzQ1MyAtMy44MDY2NSw3Ljg1NDczYzAuMDM4NTcsMC4xMTExMiAwLjA4MDAxLDAuMjIwNDQgMC4xMjQxOCwwLjMyNzljLTMuMDQxMTEsLTEuNDczODIgLTYuMDEwODEsLTIuOTEzMDMgLTguNDkwMjEsLTQuMTE0NjN6IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIvPjxwYXRoIGQ9Ik0yNTEuMTMzNTUsMTkwLjUzMjk3Yy0xLjgxMjM0LC0wLjg3ODMyIC01LjMwMjY3LC0yLjU2OTg0IC05LjMyNTMxLC00LjUxOTM0YzAuMTExNzIsLTAuMDMxOTEgMC4yMjMxOSwtMC4wNjcxMiAwLjMzNDMyLC0wLjEwNTdjMy4yMjAyLC0xLjExNzg1IDQuOTI0NSwtNC42MzQ1MyAzLjgwNjY1LC03Ljg1NDczYy0wLjA0MzQzLC0wLjEyNTExIC0wLjA5MDQ4LC0wLjI0NzkzIC0wLjE0MSwtMC4zNjgzOWMzLjkwMTM3LDEuODkwNzMgNy4yODU4NiwzLjUzMDk2IDkuMDg2NjEsNC40MDM2NmMyLjYzNzUzLDEuMjc4MjMgNC44Mzk0NCw0LjEzMjA4IDMuNTUyNjgsNy4wMjEwMWMtMS4yODY3NiwyLjg4ODkzIC00Ljc4MDczLDIuNjUxMTcgLTcuMzEzOTUsMS40MjM0OXoiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIi8+PHBhdGggZD0iTTI0MS42OTk1NCwxNjUuOTIxNzljMS44Mzc2OCwtMy43OTE5IDQuMjcyMTQsLTUuODc4NDggNy40MTA5NiwtNC4zNTczMWMzLjEzODgyLDEuNTIxMTcgMi43NDAxNCw0LjU5NzE0IDAuOTAzNTYsOC4zODY3OWMtMS4xNzM2MSwyLjQyMTY2IC0yLjU3MzI4LDUuMzA5NzYgLTQuMDA4NjUsOC4yNzE1NGMtMC4wMTc4NywtMC4wNTY2MiAtMC4wMzY2LC0wLjExMzE2IC0wLjA1NjE5LC0wLjE2OTYxYy0xLjExNzg1LC0zLjIyMDIgLTQuNjM0NTMsLTQuOTI0NSAtNy44NTQ3MywtMy44MDY2NWMtMC4xODI0MSwwLjA2MzMyIC0wLjM1OTk1LDAuMTM0MzQgLTAuNTMyMzksMC4yMTI1NmMxLjQ4MTc4LC0zLjA1NzU0IDIuOTI5NjUsLTYuMDQ1MTEgNC4xMzc0NSwtOC41MzczMXoiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIi8+PHBhdGggZD0iTTIyOS40ODExMiwxOTEuMTMzNTVjMC44OTY5NCwtMS44NTA3NiAyLjY0MTkzLC01LjQ1MTQyIDQuNjQzNjcsLTkuNTgxODZjMC4wNDU0NSwwLjE4MzgyIDAuMDk5NzEsMC4zNjcxOCAwLjE2MzAzLDAuNTQ5NTljMS4xMTc4NSwzLjIyMDIgNC42MzQ1Myw0LjkyNDUgNy44NTQ3MywzLjgwNjY1YzAuMDU2NDUsLTAuMDE5NiAwLjExMjQ0LC0wLjAzOTkzIDAuMTY3OTUsLTAuMDYwOTljLTEuODgyODEsMy44ODUwMyAtMy41MTUwOCw3LjI1MzA5IC00LjM4NDg5LDkuMDQ3ODhjLTEuMjc4MjMsMi42Mzc1MyAtNC4xMzIwOCw0LjgzOTQ0IC03LjAyMTAxLDMuNTUyNjhjLTIuODg4OTMsLTEuMjg2NzYgLTIuNjUxMTcsLTQuNzgwNzMgLTEuNDIzNDksLTcuMzEzOTV6IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIvPjxwYXRoIGQ9Ik0yNDQuODU3ODgsMTk0LjI0NjI1Yy03Ljg2NjAyLDIuNzMwNTcgLTE2LjQ1NjI2LC0xLjQzMjUzIC0xOS4xODY4NCwtOS4yOTg1NWMtMi43MzA1NywtNy44NjYwMiAxLjQzMjUzLC0xNi40NTYyNiA5LjI5ODU1LC0xOS4xODY4NGM3Ljg2NjAyLC0yLjczMDU3IDE2LjQ1NjI2LDEuNDMyNTMgMTkuMTg2ODQsOS4yOTg1NWMyLjczMDU3LDcuODY2MDIgLTEuNDMyNTMsMTYuNDU2MjYgLTkuMjk4NTUsMTkuMTg2ODR6TTI0NS4yNDI1LDE3OC4yODE1N2MtMC45ODY5NSwtMi44NDMxNCAtNC4wOTE4NiwtNC4zNDc4OCAtNi45MzUsLTMuMzYwOTJjLTIuODQzMTQsMC45ODY5NSAtNC4zNDc4OCw0LjA5MTg2IC0zLjM2MDkyLDYuOTM1YzAuOTg2OTUsMi44NDMxNCA0LjA5MTg2LDQuMzQ3ODggNi45MzUsMy4zNjA5MmMyLjg0MzE0LC0wLjk4Njk1IDQuMzQ3ODgsLTQuMDkxODYgMy4zNjA5MiwtNi45MzV6IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIvPjwvZz48L2c+PC9zdmc+";

  function getKeyByValue(object, name, value) {
    for (const key in object) {
      if (object[key][name] === value) return key;
    }
    return "";
  }

  class SPevents {
    constructor() {
      Scratch.vm.runtime.on("ANSWER", () => { runtime.startHats("SPevents_onAnswer") });
      Scratch.vm.runtime.on("QUESTION", () => { runtime.startHats("SPevents_onAsk") });

      Scratch.vm.runtime.on("targetWasRemoved", () => {
        Scratch.vm.runtime.startHats("SPevents_onTarget", { MENU : "deleted" })
      });
      Scratch.vm.runtime.on("targetWasCreated", () => {
        Scratch.vm.runtime.startHats("SPevents_onTarget", { MENU : "created" })
      });
      Scratch.vm.runtime.on("STOP_FOR_TARGET", () => {
        setTimeout(function() { runtime.startHats("SPevents_onTargetStop") }, 10);
      });
      Scratch.vm.runtime.on("TARGETS_UPDATE", () => { runtime.startHats("SPevents_onTargetUpdate") });
      Scratch.vm.runtime.on("SAY", () => { runtime.startHats("SPevents_onSay") });

      Scratch.vm.runtime.on("MONITORS_UPDATE", () => { runtime.startHats("SPevents_onMonitor") });
      Scratch.vm.runtime.on("EXTENSION_ADDED", () => { runtime.startHats("SPevents_onExtension") });
      Scratch.vm.runtime.on("STAGE_SIZE_CHANGED", () => {
        Scratch.vm.runtime.startHats("SPevents_onRunT", { MENU : "stage size" })
      });
      Scratch.vm.runtime.on("FRAMERATE_CHANGED", () => {
        Scratch.vm.runtime.startHats("SPevents_onRunT", { MENU : "framerate" })
      });
      Scratch.vm.runtime.on("INTERPOLATION_CHANGED", () => {
        Scratch.vm.runtime.startHats("SPevents_onRunT", { MENU : "interpolation" })
      });
      Scratch.vm.on("TURBO_MODE_ON", () => {
        Scratch.vm.runtime.startHats("SPevents_onTurbomode", { OPT : "on" })
      });
      Scratch.vm.on("TURBO_MODE_OFF", () => {
        Scratch.vm.runtime.startHats("SPevents_onTurbomode", { OPT : "off" })
      });
      Scratch.vm.runtime.on("PROJECT_LOADED", () => {
        runtime.startHats("SPevents_onLoad");
        const allUtils = vm.runtime.targets;
        Scratch.vm.start();
        setTimeout(function() {
          for (var i = 0; i < allUtils.length; i++) {
            const util = allUtils[i];
            const object = util.blocks._blocks;
            const keyV = getKeyByValue(object, "opcode", "SPevents_onProjectLoad");
            if (keyV) vm.runtime._pushThread(object[keyV].id, util);
          }
        }, 10);
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
            opcode: "onAsk",
            blockType: Scratch.BlockType.EVENT,
            text: "when question asked",
            isEdgeActivated: false
          },
          {
            opcode: "onAnswer",
            blockType: Scratch.BlockType.EVENT,
            text: "when question answered",
            isEdgeActivated: false
          },
          "---",
          {
            opcode: "onTarget",
            blockType: Scratch.BlockType.EVENT,
            text: "when a sprite is [MENU]",
            isEdgeActivated: false,
            arguments: {
              MENU: { type: Scratch.ArgumentType.STRING, menu: "TARGET" }
            }
          },
          {
            opcode: "onTargetUpdate",
            blockType: Scratch.BlockType.EVENT,
            text: "when sprite values update",
            isEdgeActivated: false
          },
          {
            opcode: "onTargetStop",
            blockType: Scratch.BlockType.EVENT,
            text: "when a sprite stops other scripts",
            isEdgeActivated: false
          },
          {
            opcode: "onSay",
            blockType: Scratch.BlockType.EVENT,
            text: "when a sprite talks or thinks",
            isEdgeActivated: false
          },
          "---",
          {
            opcode: "onTurbomode",
            blockType: Scratch.BlockType.EVENT,
            text: "when turbomode turns [OPT]",
            isEdgeActivated: false,
            arguments: {
              OPT: { type: Scratch.ArgumentType.STRING, menu: "ON_OFF" }
            }
          },
          {
            opcode: "onRunT",
            blockType: Scratch.BlockType.EVENT,
            text: "when [MENU] is set",
            isEdgeActivated: false,
            arguments: {
              MENU: { type: Scratch.ArgumentType.STRING, menu: "RUNTIME_OPT" }
            }
          },
          {
            opcode: "onExtension",
            blockType: Scratch.BlockType.EVENT,
            text: "when extension is added",
            isEdgeActivated: false
          },
          "---",
          {
            opcode: "onMonitor",
            blockType: Scratch.BlockType.EVENT,
            text: "when a monitor is updated",
            isEdgeActivated: false
          },
          {
            opcode: "onLoad",
            blockType: Scratch.BlockType.EVENT,
            text: "when loaded in the editor",
            isEdgeActivated: false
          },
          {
            opcode: "onProjectLoad",
            blockType: Scratch.BlockType.EVENT,
            text: "when project loads",
            isEdgeActivated: false
          }
        ],
        menus: {
          ON_OFF: ["on", "off"],
          TARGET: ["created", "deleted"],
          RUNTIME_OPT: ["stage size", "framerate", "interpolation"],
        }
      };
    }
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
  if (typeof scaffolding === "undefined") addLinearGradientToBody();

  function documentChangedCallback(mutationsList, observer) {
    var pathElements = document.querySelectorAll("g[data-category=\"Runtime Events\"] path");
    pathElements.forEach(function(pathElement) {
      var currentFill = pathElement.getAttribute("fill");
      pathElement.setAttribute("fill", currentFill.replace(/#7b9cbb/g, "url(#SPevents-GRAD1)"));
    });
    var rectElements = document.querySelectorAll("g[data-category=\"Runtime Events\"] rect.blocklyBlockBackground");
    rectElements.forEach(function(rectElement) {
      var currentFill = rectElement.getAttribute("fill");
      rectElement.setAttribute("fill", currentFill.replace(/#7b9cbb/g, "url(#SPevents-GRAD2)"));
    });
  }
  if (typeof scaffolding === "undefined") {
    var observer = new MutationObserver(documentChangedCallback);
    observer.observe(document.documentElement, { childList: true, subtree: true });
  }

  Scratch.extensions.register(new SPevents());
})(Scratch);
