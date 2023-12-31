// Name: Hyper Sense
// ID: HyperSenseSP
// Description: Cool New Sensing Blocks
// By: SharkPool

// Version 2.3.1

(function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) throw new Error("Hyper Sense must run unsandboxed");

  const menuIconURI =
"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxMzguMjE0IiBoZWlnaHQ9IjEzOC4yMTQiIHZpZXdCb3g9IjAsMCwxMzguMjE0LDEzOC4yMTQiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNzAuODkzLC0xMTAuODkzKSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMTcwLjg5MywxODBjMCwtMzguMTY2NzQgMzAuOTQwMjYsLTY5LjEwNyA2OS4xMDcsLTY5LjEwN2MzOC4xNjY3NCwwIDY5LjEwNywzMC45NDAyNiA2OS4xMDcsNjkuMTA3YzAsMzguMTY2NzQgLTMwLjk0MDI2LDY5LjEwNyAtNjkuMTA3LDY5LjEwN2MtMzguMTY2NzQsMCAtNjkuMTA3LC0zMC45NDAyNiAtNjkuMTA3LC02OS4xMDd6IiBmaWxsPSIjNWNiMWQ2IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIvPjxwYXRoIGQ9Ik0yNzMuNTY4MTMsMjE2LjIzNjU5Yy0wLjY4MjI5LDAgLTEuMzY0NTcsLTAuMjYwNzQgLTEuODg2MDYsLTAuNzgwMDZsLTY2LjU3ODkzLC02Ni41ODExYy0xLjA0MDgxLC0xLjA0MDgxIC0xLjA0MDgxLC0yLjczMTI5IDAsLTMuNzcyMWMxLjA0MDgxLC0xLjA0MDgxIDIuNzMxMjksLTEuMDQwODEgMy43NzIxLDBsNjYuNTc4OTMsNjYuNTc4OTNjMS4wNDA4MSwxLjA0MDgxIDEuMDQwODEsMi43MzEyOSAwLDMuNzcyMWMtMC41MjE0OSwwLjUxOTMyIC0xLjIwMzc4LDAuNzgyMjMgLTEuODg2MDYsMC43ODIyM3oiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PHBhdGggZD0iTTIzMy4xMDcxMSwxNTguNDM2MDZjMCw4LjEwMjY0IC02LjU2ODU5LDE0LjY3MTIzIC0xNC42NzEyMywxNC42NzEyM2MtOC4xMDI2NCwwIC0xNC42NzEyMywtNi41Njg1OSAtMTQuNjcxMjMsLTE0LjY3MTIzYzAsLTguMTAyNjQgNi41Njg1OSwtMTQuNjcxMjMgMTQuNjcxMjMsLTE0LjY3MTIzYzguMTAyNjQsMCAxNC42NzEyMyw2LjU2ODU5IDE0LjY3MTIzLDE0LjY3MTIzeiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNMjMxLjA3MzQ3LDE4OC43MjQyNmMtNy44ODU4MywtMS44NjIwOSAtMTIuNzY5MDIsLTkuNzY0MzUgLTEwLjkwNjkyLC0xNy42NTAxN2MxLjg2MjA5LC03Ljg4NTgzIDkuNzY0MzUsLTEyLjc2OTAyIDE3LjY1MDE3LC0xMC45MDY5MmM3Ljg4NTgzLDEuODYyMDkgMTIuNzY5MDIsOS43NjQzNSAxMC45MDY5MiwxNy42NTAxN2MtMS44NjIwOSw3Ljg4NTgzIC05Ljc2NDM1LDEyLjc2OTAyIC0xNy42NTAxNywxMC45MDY5MnoiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PHBhdGggZD0iTTI2NS4xMjAwMSwxOTAuNDQ2NzljMCw4LjEwMjY0IC02LjU3MDc2LDE0LjY3MzM5IC0xNC42NzMzOSwxNC42NzMzOWMtOC4xMDI2NCwwIC0xNC42NzEyMywtNi41NzA3NiAtMTQuNjcxMjMsLTE0LjY3MzM5YzAsLTguMTAyNjQgNi41Njg1OSwtMTQuNjcxMjMgMTQuNjcxMjMsLTE0LjY3MTIzYzguMTAyNjQsMCAxNC42NzMzOSw2LjU3MDc2IDE0LjY3MzM5LDE0LjY3MTIzeiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNMjczLjU2ODEzLDIxNi4yMzY1OWMtMC42ODIyOSwwIC0xLjM2NDU3LC0wLjI2MDc0IC0xLjg4NjA2LC0wLjc4MDA2bC0xNi4zMzk5OCwtMTYuMzM5OThjLTEuMDQyOTgsLTEuMDQwODEgLTEuMDQyOTgsLTIuNzMxMjkgMCwtMy43NzIxYzEuMDQyOTgsLTEuMDQwODEgMi43MjkxMiwtMS4wNDA4MSAzLjc3MjEsMGwxNi4zMzk5OCwxNi4zMzk5OGMxLjA0MDgxLDEuMDQwODEgMS4wNDA4MSwyLjczMTI5IDAsMy43NzIxYy0wLjUyMTQ5LDAuNTE3MTQgLTEuMjAzNzgsMC43ODAwNiAtMS44ODYwNiwwLjc4MDA2eiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiLz48ZyBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMS41Ij48cGF0aCBkPSJNMTgyLjY2ODI2LDE4MGwxMi44MDY5MSwtMTIuODA2OTF2MjUuNjEzODF6Ii8+PHBhdGggZD0iTTI1Mi44MDY5LDEzNS40NzUxNmgtMjUuNjEzODFsMTIuODA2OSwtMTIuODA2OXoiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9Ii8+PHBhdGggZD0iTTI5Ny4zMzE3NSwxODBsLTEyLjgwNjksMTIuODA2OXYtMjUuNjEzODF6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIvPjxwYXRoIGQ9Ik0yMjcuMTkzMSwyMjQuNTI0ODRoMjUuNjEzODFsLTEyLjgwNjksMTIuODA2OXoiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9Ii8+PC9nPjwvZz48L2c+PC9zdmc+";

  const loudnessArrayLength = 20;
  let currentlyPressedKey = null;
  let keyPressTime = 0;
  const keyHitPass = {};

  const renderer = Scratch.renderer;
  const vm = Scratch.vm;
  const runtime = vm.runtime;
  var timer = 0;
  let publicVars = {};

  class HyperSenseSP {
    constructor() {
      runtime.shouldExecuteStopClicked = true;
      runtime.on("BEFORE_EXECUTE", () => {
        timer++;
        runtime.shouldExecuteStopClicked = false;
        runtime.startHats("HyperSenseSP_whenKeyPressed");
      });
      runtime.on("PROJECT_START", () => { timer = 0 });
      runtime.on("PROJECT_STOP_ALL", () => { timer = 0 });
      runtime.on("AFTER_EXECUTE", () => { runtime.shouldExecuteStopClicked = true });
      runtime.on("ANSWER", () => { this.wait = [false, "sprite"] });
      const originalGreenFlag = vm.greenFlag;
      vm.greenFlag = function () {
        runtime.shouldExecuteStopClicked = false;
        originalGreenFlag.call(this);
      };

      this.scrollDistance = 0;
      this.oldScroll = [0, 0];
      this.loudnessArray = [];
      window.addEventListener("wheel", this.handleScroll);
      this.isMicrophoneEnabled = false;
      this.pressedKey = null;
      this.wait = [false, "sprite"];
      this.pressedKeys = {};

      document.addEventListener("keydown", (event) => {
        keyPressTime = keyPressTime + 0.1;
        this.pressedKey = event.key.toUpperCase();
        this.pressedKeys[this.pressedKey] = true;
        this.pressedKey = this.pressedKey;
        currentlyPressedKey = this.pressedKey;
      });
      document.addEventListener("keyup", (event) => {
        keyHitPass[currentlyPressedKey] = 0;
        const releasedKey = event.key.toUpperCase();
        delete this.pressedKeys[releasedKey];
        currentlyPressedKey = Object.keys(this.pressedKeys).pop() || null;
        keyPressTime = 0;
      });
      document.addEventListener("mousemove", (event) => {
        window.mouseX = event.clientX;
        window.mouseY = event.clientY;
      });
    }

    getInfo() {
      return {
        id: "HyperSenseSP",
        name: "Hyper Sense",
        color1: "#5cb1d6",
        color2: "#2e8eb8",
        menuIconURI,
        blocks: [
          { blockType: Scratch.BlockType.LABEL, text: "Scrolling" },
          {
            opcode: "monitorScrollWheel",
            blockType: Scratch.BlockType.REPORTER,
            text: "scroll wheel distance"
          },
          {
            opcode: "scrollVel",
            blockType: Scratch.BlockType.REPORTER,
            text: "scroll velocity"
          },
          {
            opcode: "monitorScrollWheelLimited",
            blockType: Scratch.BlockType.REPORTER,
            text: "scroll wheel distance limited from [MIN] to [MAX]",
            arguments: {
              MIN: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0
              },
              MAX: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 100
              }
            },
          },
          {
            opcode: "setScrollDistance",
            blockType: Scratch.BlockType.COMMAND,
            text: "set scroll wheel distance to [DISTANCE]",
            arguments: {
              DISTANCE: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0
              }
            },
          },
          {
            opcode: "changeScrollDistance",
            blockType: Scratch.BlockType.COMMAND,
            text: "change scroll wheel distance by [DISTANCE]",
            arguments: {
              DISTANCE: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 100
              }
            },
          },
          {
            opcode: "scrollWheelHat",
            blockType: Scratch.BlockType.EVENT,
            text: "when scrolled up",
            isEdgeActivated: false,
            arguments: {
              EVENT: {
                type: Scratch.ArgumentType.STRING,
                menu: "SCROLL_EVENTS"
              }
            },
          },
          {
            opcode: "scrollWheelHat2",
            blockType: Scratch.BlockType.EVENT,
            text: "when scrolled down",
            isEdgeActivated: false
          },
          {
            opcode: "scrollWheelBool",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "is scrolling [EVENT]?",
            arguments: {
              EVENT: {
                type: Scratch.ArgumentType.STRING,
                menu: "SCROLL_EVENTS"
              }
            },
          },
          { blockType: Scratch.BlockType.LABEL, text: "Mouse Detection" },
          {
            opcode: "mouseClick",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "is mouse [BUTTON] down?",
            arguments: {
              BUTTON: {
                type: Scratch.ArgumentType.NUMBER,
                menu: "mouseButtons"
              }
            }
          },
          {
            opcode: "realX",
            blockType: Scratch.BlockType.REPORTER,
            text: "real mouse x"
          },
          {
            opcode: "realY",
            blockType: Scratch.BlockType.REPORTER,
            text: "real mouse y"
          },
          { blockType: Scratch.BlockType.LABEL, text: "Key Detection" },
          {
            opcode: "whenKeyHit",
            blockType: Scratch.BlockType.HAT,
            text: "when [KEY] key hit",
            arguments: {
              KEY: {
                type: Scratch.ArgumentType.STRING,
                menu: "keys"
              }
            }
          },
          {
            opcode: "isKeyHit",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "is key [KEY] hit?",
            arguments: {
              KEY: {
                type: Scratch.ArgumentType.STRING,
                menu: "keys"
              }
            }
          },
          "---", //yes, these blocks do technically exist, but they dont have special keys like Tab
          {
            opcode: "whenKeyPressed",
            blockType: Scratch.BlockType.HAT,
            text: "when [KEY] pressed",
            isEdgeActivated: false,
            arguments: {
              KEY: {
                type: Scratch.ArgumentType.STRING,
                menu: "keys",
                defaultValue: "Tab"
              }
            }
          },
          {
            opcode: "isKeyPressed",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "key [KEY] pressed?",
            arguments: {
              KEY: {
                type: Scratch.ArgumentType.STRING,
                menu: "keys",
                defaultValue: "Tab"
              }
            },
          },
          "---",
          {
            opcode: "currentKey",
            blockType: Scratch.BlockType.REPORTER,
            text: "current key pressed"
          },
          {
            opcode: "currentKeys",
            blockType: Scratch.BlockType.REPORTER,
            text: "current keys pressed"
          },
          {
            opcode: "timeKeyPressed",
            blockType: Scratch.BlockType.REPORTER,
            text: "seconds [KEY] key pressed",
            arguments: {
              KEY: {
                type: Scratch.ArgumentType.STRING,
                menu: "keys",
                defaultValue: "A"
              }
            }
          },
          { blockType: Scratch.BlockType.LABEL, text: "Touching Expanded" },
          {
            opcode: "spriteTouchingSprite",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "is [SPRITE1] touching [SPRITE2]?",
            arguments: {
              SPRITE1: {
                type: Scratch.ArgumentType.STRING,
                menu: "TARGETS"
              },
              SPRITE2: {
                type: Scratch.ArgumentType.STRING,
                menu: "TARGETS3"
              }
            }
          },
          {
            opcode: "spriteCurrentTouching",
            blockType: Scratch.BlockType.REPORTER,
            text: "sprites touching [SPRITE]",
            arguments: {
              SPRITE: {
                type: Scratch.ArgumentType.STRING,
                menu: "TARGETS2"
              }
            }
          },
          {
            opcode: "getNeighbors",
            blockType: Scratch.BlockType.REPORTER,
            text: "get neighbors of [SPRITE] with diameter [DIAMETER]",
            arguments: {
              SPRITE: {
                type: Scratch.ArgumentType.STRING,
                menu: "TARGETS4"
              },
              DIAMETER: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 200
              }
            }
          },
          "---",
          {
            opcode: "colorTouchingSprite",
            blockType: Scratch.BlockType.REPORTER,
            text: "color touching [SPRITE]",
            arguments: {
              SPRITE: {
                type: Scratch.ArgumentType.STRING,
                menu: "TARGETS2"
              }
            }
          },
          {
            opcode: "colorAtPosition",
            blockType: Scratch.BlockType.REPORTER,
            text: "color at x [x] y [y]",
            arguments: {
              x: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0
              },
              y: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0
              }
            }
          },
          { blockType: Scratch.BlockType.LABEL, text: "Strings" },
          {
            opcode: "boolean",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "is [STRING] real?",
            arguments: {
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: ""
              }
            }
          },
          {
            opcode: "getAllString",
            blockType: Scratch.BlockType.REPORTER,
            text: "get [TEXT] in string [STRING]",
            arguments: {
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "rotating a 6 makes a 9!"
              },
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                menu: "string_types",
              }
            }
          },
          { blockType: Scratch.BlockType.LABEL, text: "Asking" },
          {
            opcode: "advancedAsk",
            blockType: Scratch.BlockType.COMMAND,
            text: "ask [QUESTION] as [THING] and [WAIT]",
            arguments: {
              THING: {
                type: Scratch.ArgumentType.STRING,
                menu: "Asking"
              },
              QUESTION: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "what is your name?"
              },
              WAIT: {
                type: Scratch.ArgumentType.STRING,
                menu: "shouldWait"
              }
            }
          },
          {
            opcode: "advancedAskReporter",
            blockType: Scratch.BlockType.REPORTER,
            text: "ask [QUESTION] as [THING]",
            arguments: {
              THING: {
                type: Scratch.ArgumentType.STRING,
                menu: "Asking"
              },
              QUESTION: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "what is your name?"
              }
            }
          },
          {
            opcode: "stopAsking",
            blockType: Scratch.BlockType.COMMAND,
            text: "stop asking question"
          },
          {
            opcode: "currentTyped",
            blockType: Scratch.BlockType.REPORTER,
            text: "typed answer"
          },
          {
            opcode: "setAtt",
            blockType: Scratch.BlockType.COMMAND,
            text: "set ask monitor x: [x] y: [y] width: [width]",
            arguments: {
              x: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0
              },
              y: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0
              },
              width: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 480
              }
            }
          },
          {
            opcode: "setAskType",
            blockType: Scratch.BlockType.COMMAND,
            text: "set ask monitor input to [TYPE]",
            arguments: {
              TYPE: {
                type: Scratch.ArgumentType.STRING,
                menu: "INPUTS"
              }
            }
          },
          { blockType: Scratch.BlockType.LABEL, text: "Miscellaneous" },
          {
            opcode: "isScreen",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "is [SCREEN] ?",
            disableMonitor: true,
            arguments: {
              SCREEN: {
                type: Scratch.ArgumentType.STRING,
                menu: "SCREENS"
              }
            }
          },
          {
            opcode: "screenOff",
            blockType: Scratch.BlockType.REPORTER,
            text: "stage size offset"
          },
          "---",
          {
            opcode: "getSpriteName",
            blockType: Scratch.BlockType.REPORTER,
            text: "my sprite name"
          },
          {
            opcode: "allLayers",
            blockType: Scratch.BlockType.REPORTER,
            text: "max sprite layers"
          },
          "---",
          {
            opcode: "spriteDragMode",
            blockType: Scratch.BlockType.COMMAND,
            text: "set drag mode of [SPRITE] to [DRAG]",
            arguments: {
              SPRITE: {
                type: Scratch.ArgumentType.STRING,
                menu: "TARGETS4"
              },
              DRAG: {
                type: Scratch.ArgumentType.STRING,
                menu: "DRAG_MODES",
              }
            },
          },
          "---",
          {
            opcode: "toggleMicrophone",
            blockType: Scratch.BlockType.COMMAND,
            text: "toggle microphone to [STATE]",
            arguments: {
              STATE: {
                type: Scratch.ArgumentType.STRING,
                menu: "microphoneStates",
              }
            }
          },
          {
            opcode: "averageMicrophoneLoudness",
            blockType: Scratch.BlockType.REPORTER,
            text: "average microphone loudness"
          },
        ],
        menus: {
          microphoneStates: ["enabled", "disabled"],
          SCREENS: ["fullscreen", "smallscreen"],
          INPUTS: ["text", "password", "number", "color"],
          TARGETS: { acceptReporters: true, items: this._getTargets(true, false) },
          TARGETS2: { acceptReporters: true, items: this._getTargets(true, true) },
          TARGETS3: { acceptReporters: true, items: this._getTargets(false, true) },
          TARGETS4: { acceptReporters: true, items: this._getTargets(false, false) },
          Asking: ["stage", "sprite"],
          shouldWait: ["wait", "continue"],
          SCROLL_EVENTS: ["up", "down"],
          keys: {
            acceptReporters: true,
            items: [
              "Any", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
              "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
              "U", "V", "W", "X", "Y", "Z",
              "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
              "Arrow Up", "Arrow Down", "Arrow Left", "Arrow Right",
              "Space", "Enter", "Shift", "Control", "Alt", "Escape",
              "Backspace", "Tab", "Caps Lock",
              "Insert", "Page Up", "Page Down"
            ],
          },
          DRAG_MODES: {
            acceptReporters: true,
            items: ["draggable", "not draggable"],
          },
          string_types: {
            acceptReporters: true,
            items: ["numbers", "letters", "special characters"],
          },
          mouseButtons: {
            acceptReporters: true,
            items: [
              { text: "left", value: 0 },
              { text: "scroll wheel", value: 1 },
              { text: "right", value: 2 },
              { text: "back", value: 3 },
              { text: "foward", value: 4 }
            ],
          }
        }
      };
    }

    allLayers() { return renderer._drawList.length - 1 }

    getSpriteName(_, util) { return util.target.getName() }

    monitorScrollWheel() { return this.scrollDistance }

    scrollVel() { return this.oldScroll[1] * -1 }

    monitorScrollWheelLimited(args) {
      const min = Scratch.Cast.toNumber(args.MIN);
      const max = Scratch.Cast.toNumber(args.MAX);
      return Math.max(Math.min(this.scrollDistance, max), min);
    }

    setScrollDistance(args) { this.scrollDistance = Scratch.Cast.toNumber(args.DISTANCE) }

    changeScrollDistance(args) { this.scrollDistance = this.scrollDistance + Scratch.Cast.toNumber(args.DISTANCE) }

    handleScroll = (event) => {
      this.scrollDistance += event.deltaY;
      this.oldScroll[1] = event.deltaY;
      if (this.scrollWheelBool({ EVENT:"up" })) runtime.startHats("HyperSenseSP_scrollWheelHat");
      if (this.scrollWheelBool({ EVENT:"down" })) runtime.startHats("HyperSenseSP_scrollWheelHat2");
    };

    scrollWheelBool(args, fromHat) {
      const status = eval(`this.scrollDistance ${args.EVENT === "down" ? ">" : "<"} this.oldScroll[0]`);
      if (status) this.oldScroll[0] = this.scrollDistance;
      return (!!status);
    }

    initMicrophone() {
      if (this.isMicrophoneEnabled) {
        navigator.mediaDevices.getUserMedia({ audio: true })
          .then(this.handleMicrophoneSuccess).catch(this.handleMicrophoneError);
      }
    }
    handleMicrophoneSuccess = (stream) => {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const microphone = this.audioContext.createMediaStreamSource(stream);
      const analyser = this.audioContext.createAnalyser();
      analyser.fftSize = 256;
      microphone.connect(analyser);
      this.updateMicrophoneLoudness(analyser);
    };
    handleMicrophoneError = (error) => { console.error("Error accessing microphone:", error) };

    updateMicrophoneLoudness(analyser) {
      const dataArray = new Uint8Array(analyser.frequencyBinCount);
      setInterval(() => {
        analyser.getByteFrequencyData(dataArray);
        const loudness = this.calculateLoudness(dataArray);
        this.loudnessArray.push(loudness);
        if (this.loudnessArray.length >= loudnessArrayLength) this.loudnessArray.shift();
      }, 100);
    }

    calculateLoudness(dataArray) {
      let sum = 0;
      for (let i = 0; i < dataArray.length; i++) { sum += dataArray[i] }
      return sum / dataArray.length;
    }

    averageMicrophoneLoudness() {
      let loudness = this.calculateAverageLoudness(this.loudnessArray);
      if (isNaN(loudness)) loudness = "Microphone is Disabled!"
      return loudness;
    }

    calculateAverageLoudness(loudnessArray) { return loudnessArray.reduce((acc, loudness) => acc + loudness, 0) / loudnessArray.length +1 }

    toggleMicrophone(args) {
      if (args.STATE === "enabled") {
        this.isMicrophoneEnabled = true;
        this.initMicrophone();
      } else {
        this.isMicrophoneEnabled = false;
        this.disableMicrophone();
      }
    }

    disableMicrophone() {
      if (this.audioContext) {
        this.audioContext.close().then(() => {
          this.audioContext = null;
          this.loudnessArray = [];
        }).catch(error => { console.error("Error while closing audio context:", error) });
      }
    }

    handleKeyPress(key, loop) {
      if (key === "Any") {
        if (currentlyPressedKey === null) return false;
        key = currentlyPressedKey;
      }
      if (isNaN(parseFloat(key))) key = key.toUpperCase();
      let pressedKey = this.currentKey().toUpperCase();
      if (pressedKey !== " ") pressedKey = pressedKey.replaceAll(" ", "");
      if (
        ((key === "SPACE" && pressedKey === " ") ||
        (key === pressedKey) ||
        (key.startsWith("DIGIT") && key.slice(5) === pressedKey))
      ) {
        key = (key === "SPACE") ? " " : key;
        if (isNaN(keyHitPass[key])) keyHitPass[key] = 0;
        keyHitPass[key] = keyHitPass[key] + 1;
        return (loop) ? true : (keyHitPass[key] < 2);
      }
      return false;
    }

    isKeyHit(args) {
      const key = Scratch.Cast.toString(args.KEY).replace(" ", "");
      const loop = false;
      return this.handleKeyPress(key, loop);
    }

    whenKeyHit(args) {
      const key = Scratch.Cast.toString(args.KEY).replace(" ", "");
      const loop = false;
      return this.handleKeyPress(key, loop);
    }

    whenKeyPressed(args) {
      const key = Scratch.Cast.toString(args.KEY).replace(" ", "");
      const loop = true;
      return this.handleKeyPress(key, loop);
    }

    isKeyPressed(args) {
      const key = Scratch.Cast.toString(args.KEY).replace(" ", "");
      const loop = true;
      return this.handleKeyPress(key, loop);
    }

    currentKey() {
      if (currentlyPressedKey === null) {
        return "No Keys Pressed";
      } else if (currentlyPressedKey.includes("ARROW") || currentlyPressedKey === "CAPSLOCK") {
        return (currentlyPressedKey === "CAPSLOCK") ? "Caps Lock" : "Arrow " + currentlyPressedKey.charAt(5).toUpperCase() + currentlyPressedKey.slice(6).toLowerCase(); //makes it "Arrow Left"
      }
      return currentlyPressedKey.charAt(0).toUpperCase() + currentlyPressedKey.slice(1).toLowerCase();
    }

    currentKeys() {
      let pressedKeysArray = Object.keys(this.pressedKeys);
      pressedKeysArray = pressedKeysArray.map((key) => {
        if (key.includes("ARROW") || key === "CAPSLOCK") {
          return (key === "CAPSLOCK") ? "Caps Lock" : "Arrow " + key.charAt(5).toUpperCase() + key.slice(6).toLowerCase();
        }
        return key.charAt(0).toUpperCase() + key.slice(1).toLowerCase();
      });
      return JSON.stringify(pressedKeysArray);
    }

    timeKeyPressed(args) {
      let key = Scratch.Cast.toString(args.KEY).replace(" ", "");
      if (isNaN(parseFloat(key))) key = key.toUpperCase();
      if (key === "SPACE") key = " ";
      if (key === this.pressedKey || args.KEY === "Any") {
        return keyPressTime;
      } else {
        return 0;
      }
    }

    spriteTouchingSprite(args, util) {
      const sprite1 = args.SPRITE1;
      const sprite2 = args.SPRITE2;
      const target = sprite2 === "_myself_" ? util.target : runtime.getSpriteTargetByName(sprite2);
      if (!target) return false;
      return target.isTouchingObject(sprite1);
    }

    spriteCurrentTouching(args, util) {
      const list = [];
      const spriteNames = this._getTargets();
      if (args.SPRITE === "_myself_") return this.spriteCurrentTouchingMyself(util);
      const thisSprite = args.SPRITE === "_mouse_" ? "_mouse_" : args.SPRITE;
      if (!thisSprite) return "[]";
      for (let i = 0; i < spriteNames.length; i++) {
        const target = runtime.getSpriteTargetByName(spriteNames[i].value);
        let caseTouch = target.isTouchingObject(thisSprite);
        if (caseTouch) {
          if (spriteNames[i].value !== thisSprite) list.push(spriteNames[i].value);
        }
      }
      return JSON.stringify(list);
    }

    spriteCurrentTouchingMyself(util) {
      const list = [];
      const spriteNames = this._getTargets();
      for (let i = 0; i < spriteNames.length; i++) {
        const sprite1 = spriteNames[i].value;
        const target = util.target;
        let caseTouch;
        caseTouch = target.isTouchingObject(sprite1);
        if (caseTouch) list.push(spriteNames[i].value);
      }
      return JSON.stringify(list);
    }

    getNeighbors(args) {
      const list = [];
      const spriteNames = this._getTargets();
      const target = runtime.getSpriteTargetByName(args.SPRITE);
      if (!target) return "[]";
      const old = [target.size, target.direction];
      target.setDirection(-179), target.setSize(Math.abs(Scratch.Cast.toNumber(args.DIAMETER)));
      for (let l = 0; l < 90; l++) {
        for (let i = 0; i < spriteNames.length; i++) {
          const sprite1 = spriteNames[i].value;
          let caseTouch = target.isTouchingObject(sprite1);
          if (caseTouch && !list.includes(sprite1)) {
            if (target.sprite.name !== sprite1) list.push(spriteNames[i].value);
          }
        }
        target.setDirection(target.direction + 2);
      }
      const formattedList = JSON.stringify(list);
      target.setSize(old[0]), target.setDirection(old[1]);
      return formattedList;
    }

    colorAtPosition(args) {
      return this.colorTouching(Scratch.Cast.toNumber(args.x), Scratch.Cast.toNumber(args.y));
    }
    
    colorTouchingSprite(args, util) {
      let hex;
      if (args.SPRITE === "_mouse_") {
        hex = this.colorTouching(util.ioQuery("mouse", "getScratchX"), util.ioQuery("mouse", "getScratchY"));
      } else {
        const target = args.SPRITE === "_myself_" ? util.target : runtime.getSpriteTargetByName(args.SPRITE);
        const wasVisible = target.visible;
        target.setVisible(false);
        hex = this.colorTouching(target.x, target.y);
        target.setVisible(wasVisible);
      }
      return hex;
    }

    colorTouching(x, y) {
      const clientX = Math.round((((runtime.stageWidth / 2) + x) / runtime.stageWidth) * renderer._gl.canvas.clientWidth);
      const clientY = Math.round((((runtime.stageHeight / 2) - y) / runtime.stageHeight) * renderer._gl.canvas.clientHeight);
      const colorInfo = renderer.extractColor(clientX, clientY, 20);
      const r = colorInfo.color.r.toString(16).padStart(2, "0");
      const g = colorInfo.color.g.toString(16).padStart(2, "0");
      const b = colorInfo.color.b.toString(16).padStart(2, "0");
      return `#${r}${g}${b}`;
    }

    spriteDragMode(args) {
      const target = runtime.getSpriteTargetByName(args.SPRITE);
      target.setDraggable(args.DRAG === "draggable");
    }

    boolean(args) {
      const string = Scratch.Cast.toString(args.STRING);
      return (!!string && args.STRING !== undefined);
    }

    setAtt(args) {
      let box = document.querySelectorAll(`[class*="question"]`)[0];
      if (!box) {
        publicVars.askStuff = args;
        return;
      }
      const canvas = getComputedStyle(document.querySelector("canvas"));
      if (args.width) box.style.width = `${args.width * (parseInt(canvas.width) / 480)}px`;
      if (args.x !== "" && args.y !== "") {
        const x = args.x + (parseInt(canvas.width) / 2) - (args.width * (parseInt(canvas.width) / 480) / 2);
        const y = args.y + (parseInt(canvas.height) / 2) - (this.wait[1] === "stage" ? 53 : 39);
        box.style.transform = `translate(${x}px, ${y * -1}px)`;
      }
    }

    advancedAsk(args, util) {
      const wasVisible = util.target.visible;
      if (!util.target.isStage && args.THING === "stage") {util.target.setVisible(false)}
      this.wait = [true, args.THING];
      runtime.ext_scratch3_sensing.askAndWait(args, util);
      if (!util.target.isStage && wasVisible) {util.target.setVisible(true)}
      if (publicVars.askStuff) this.setAtt(publicVars.askStuff);
      if (publicVars.askType) this.setAskType(publicVars.askType);
      if (args.WAIT === "wait" || args.WAIT === undefined) {
        return new Promise(resolve => {
          const checkWait = () => this.wait[0] ? setTimeout(checkWait, 100) : resolve();
          checkWait();
        });
      }
    }

    setAskType(args) {
      let box = document.querySelector(runtime.isPackaged ? `[class="sc-question-input"]` :
        `[class*="question"] [class^="input_input-form"]`);
      if (!box) {
        publicVars.askType = args;
        return;
      }
      box.type = args.TYPE;
      box.pattern = args.TYPE === "number" ? "[0-9]*" : "none";
    }

    advancedAskReporter(args, util) { return this.advancedAsk(args, util).then(() => runtime.ext_scratch3_sensing.getAnswer()) }

    stopAsking() {
      let box = document.querySelector(`[class*="question-submit-button"]`);
      if (!box) return;
      box.click();
    }

    currentTyped() {
      let box = document.querySelector(runtime.isPackaged ? `[class="sc-question-input"]` :
        `[class*="question"] [class^="input_input-form"]`);
      return box ? box.value : "";
    }

    mouseClick(args, util) {return util.ioQuery("mouse", "getButtonIsDown", [Scratch.Cast.toNumber(args.BUTTON)])}
    realX() {return window.mouseX}
    realY() {return window.mouseY}

    getAllString(args) {
      let regex;
      switch (args.TEXT) {
        case "numbers": {regex = /[^0-9]/g; break }
        case "special characters": {regex = /[A-Za-z0-9]/g; break }
        default: regex = /[^A-Za-z]/g;
      }
      return args.STRING.replace(regex, "");
    }

    // stage size is dynamic, can change during runtime... thus, dont use runtime/renderer variables
    // we also only need to check width since height will return the same value
    screenOff() { return Scratch.vm.renderer.canvas.width / Scratch.vm.runtime.stageWidth }

    isScreen(args) {
      const values = [parseFloat(Scratch.vm.renderer.canvas.style.width), Scratch.vm.runtime.stageWidth];
      return args.SCREEN === "fullscreen" ? values[0] > values[1] : values[0] < values[1];
    }

    _getTargets(mouse, myself) {
      const spriteNames = [];
      if (mouse) { spriteNames.push({ text: "mouse-pointer", value: "_mouse_" }) }
      if (myself) { spriteNames.push({ text: "myself", value: "_myself_" }) }
      const targets = Scratch.vm.runtime.targets;
      for (let index = 1; index < targets.length; index++) {
        const target = targets[index];
        if (target.isOriginal) {
          const targetName = target.getName();
          spriteNames.push({ text: targetName, value: targetName });
        }
      }
      return spriteNames.length > 0 ? spriteNames : [""];
    }
  }

  Scratch.extensions.register(new HyperSenseSP());
})(Scratch);
