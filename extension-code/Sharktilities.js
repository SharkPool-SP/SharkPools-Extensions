// Name: Sharktilities
// ID: SharkPoolSharktilities
// Description: Various Utility Blocks for Various Operations
// By: SharkPool

// Version V.3.4.0

(function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) throw new Error("Sharktilities must run unsandboxed");

  const menuIconURI =
"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxMzUuMzYzIiBoZWlnaHQ9IjEzNS4zNjMiIHZpZXdCb3g9IjAsMCwxMzUuMzYzLDEzNS4zNjMiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNzIuMzE4NSwtMTEyLjMxODUpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTE3Mi4zMTg1LDE4MGMwLC0zNy4zNzk0NiAzMC4zMDIwNCwtNjcuNjgxNSA2Ny42ODE1LC02Ny42ODE1YzM3LjM3OTQ2LDAgNjcuNjgxNSwzMC4zMDIwNCA2Ny42ODE1LDY3LjY4MTVjMCwzNy4zNzk0NiAtMzAuMzAyMDQsNjcuNjgxNSAtNjcuNjgxNSw2Ny42ODE1Yy0zNy4zNzk0NiwwIC02Ny42ODE1LC0zMC4zMDIwNCAtNjcuNjgxNSwtNjcuNjgxNXoiIGZpbGw9IiMzM2I2ZmYiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjxwYXRoIGQ9Ik0yMDQuNjY2OTcsMjA3LjMwMzE4YzAsMCAxMi41NTgyMSw2LjQxMzE5IDE1LjM0ODYsLTguNDQ2OTVjNC4wNTQ1OSwtMjEuNTkyNTkgLTIuNTcyNTgsLTQwLjMzNDY2IC02LjM0Mzk3LC00OC43MDgwMmMtMS4zNDgxMSwtMi45OTMxMiAtMC4wMDIwNSwtNC4yNTgwNCAzLjY1MDg0LC0zLjQwNDE5YzkuMjI5MDQsMi4xNTcyNSAyNi45MDcwMSw3LjE5MDMgMzYuODE1NTEsMTUuODYwNDFjMTUuMjEzNTIsMTMuMzEyMDkgMTUuNTQ0NjksMzQuMDY5NDMgMTguNTExOTIsMzkuOTY3MjFjMi40MjcwOSw0LjgyNDE4IDkuNTk0MjYsMi42MTk4IDkuNTk0MjYsMi42MTk4IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L2c+PC9nPjwvc3ZnPg==";

  const vm = Scratch.vm;
  var lastValues = {};
  const regeneratedReporters = ["SharkPoolSharktilities_changeV"];

  // This function was taken from Looks Plus by Lily
  const packageTest = (blockName) => {
    if (Scratch.vm.runtime.isPackaged) {
      alert(`For SharkTilities to work, the creator of the packaged project must uncheck "Remove raw asset data after loading to save RAM" under advanced settings in the packager.`);
      return true;
    }
    return false;
  };

  function rgbToHsl(r, g, b) {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const diff = max - min;
    let h, s, l = (max + min) / 2;
    if (diff === 0) h = s = 0;
    else {
      s = l > 0.5 ? diff / (2 - max - min) : diff / (max + min);
      switch (max) {
        case r: h = (g - b) / diff + (g < b ? 6 : 0); break;
        case g: h = (b - r) / diff + 2; break;
        case b: h = (r - g) / diff + 4; break;
      }
      h /= 6;
    }
    return [h, s, l];
  }
  function hslToRgb(h, s, l) {
    let r, g, b;
    if (s === 0) r = g = b = l;
    else {
      const hue2rgb = (p, q, t) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }
    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
  }
  function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }

  // Inspired by LilyMakesThings <3
  vm.on("EXTENSION_ADDED", tryUseScratchBlocks);
  vm.on("BLOCKSINFO_UPDATE", tryUseScratchBlocks);
  vm.runtime.on("BEFORE_EXECUTE", () => { vm.runtime.startHats("SharkPoolSharktilities_whenChanged") });

  tryUseScratchBlocks();
  function tryUseScratchBlocks() {
    if (!window.ScratchBlocks) return;
    vm.removeListener("EXTENSION_ADDED", tryUseScratchBlocks);
    vm.removeListener("BLOCKSINFO_UPDATE", tryUseScratchBlocks);
    const originalCheck = ScratchBlocks.scratchBlocksUtils.isShadowArgumentReporter;
    ScratchBlocks.scratchBlocksUtils.isShadowArgumentReporter = function (block) {
      const result = originalCheck(block);
      if (result) return true;
      return block.isShadow() && regeneratedReporters.includes(block.type);
    };
  }

  class Sharktilities {
    getInfo() {
      return {
        id: "SharkPoolSharktilities",
        name: "Sharktilities",
        color1: "#33B6FF",
        menuIconURI,
        blocks: [
          { blockType: Scratch.BlockType.LABEL, text: "Management" },
          {
            opcode: "penLayer",
            blockType: Scratch.BlockType.REPORTER,
            text: "get pen layer",
            disableMonitor: true
          },
          {
            opcode: "getText", blockType: Scratch.BlockType.REPORTER,
            text: "what is [SPRITE] saying",
            arguments: {
              SPRITE: { type: Scratch.ArgumentType.STRING, menu: "TARGETS2" }
            }
          },
          {
            opcode: "costumeCnt", blockType: Scratch.BlockType.REPORTER,
            text: "# of costumes in [SPRITE]", hideFromPalette: true, // deprecated
            arguments: { SPRITE: { type: Scratch.ArgumentType.STRING, menu: "TARGETS" } }
          },
          {
            opcode: "costumeInfo",
            blockType: Scratch.BlockType.REPORTER,
            text: "[INFO] of costume #[NUM] in [SPRITE]",
            arguments: {
              INFO: { type: Scratch.ArgumentType.STRING, menu: "cosInfo" },
              NUM: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 },
              SPRITE: { type: Scratch.ArgumentType.STRING, menu: "TARGETS" }
            }
          },
          {
            opcode: "setTargetCostume",
            blockType: Scratch.BlockType.COMMAND,
            text: "set costume of [SPRITE] to [NUM]",
            arguments: {
              NUM: { type: Scratch.ArgumentType.STRING, defaultValue: 1 },
              SPRITE: { type: Scratch.ArgumentType.STRING, menu: "TARGETS" }
            }
          },
          "---",
          {
            opcode: "cloudCode",
            blockType: Scratch.BlockType.REPORTER,
            text: "☁ cloud [CODE] string [TEXT]",
            arguments: {
              CODE: { type: Scratch.ArgumentType.STRING, menu: "encoder" },
              TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: "SharkPool" }
            }
          },
          { blockType: Scratch.BlockType.XML, xml: `<block type="SharkPoolSharktilities_whenChanged"><value name="CHANGE"><shadow type="SharkPoolSharktilities_changeV"></shadow></value></block>` },
          {
            opcode: "whenChanged", blockType: Scratch.BlockType.HAT,
            text: "when [INPUT] is changed [CHANGE]",
            isEdgeActivated: false, hideFromPalette: true,
            arguments: { INPUT: { type: null }, CHANGE: {} }
          },
          {
            opcode: "changeV", blockType: Scratch.BlockType.REPORTER,
            hideFromPalette: true, text: "old value"
          },
          {
            opcode: "isChanged",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "when [INPUT] is changed",
            arguments: {
              INPUT: { type: null }
            }
          },
          {
            opcode: "repeatForUntil", text: "repeat [NUM] or until [CON]",
            blockType: Scratch.BlockType.LOOP, hideFromPalette: true, // deprecated
            arguments: { NUM: { type: Scratch.ArgumentType.STRING, defaultValue: 10 }, CON: { type: Scratch.ArgumentType.BOOLEAN } }
          },
          {
            opcode: "spayedCondition", blockType: Scratch.BlockType.LOOP,
            text: ["if [CON1] start loop", "repeat until [CON2]"], hideFromPalette: true, // deprecated
            arguments: { CON1: { type: Scratch.ArgumentType.BOOLEAN }, CON2: { type: Scratch.ArgumentType.BOOLEAN } }
          },
          {
            opcode: "broadcastRun",
            blockType: Scratch.BlockType.LOOP,
            text: "broadcast [MSG] and repeat while waiting",
            arguments: {
              MSG: { type: Scratch.ArgumentType.STRING, defaultValue: "message1" }
            }
          },
          {
            opcode: "roundToNearest", blockType: Scratch.BlockType.REPORTER,
            text: "round [NUMBER] to nearest [ROUND_TYPE]", hideFromPalette: true, // deprecated
            arguments: { NUMBER: { type: Scratch.ArgumentType.NUMBER, defaultValue: 3.1415 }, ROUND_TYPE: { type: Scratch.ArgumentType.STRING, menu: "ROUND_MENU" } }
          },
          {
            opcode: "randomLetter", blockType: Scratch.BlockType.REPORTER,
            text: "pick random [LETTER_TYPE] letter", hideFromPalette: true, // deprecated
            arguments: { LETTER_TYPE: { type: Scratch.ArgumentType.STRING, menu: "LETTER_TYPE_MENU" } }
          },
          {
            opcode: "randomCharRange", blockType: Scratch.BlockType.REPORTER,
            text: "pick random character [ONE] to [TWO]", hideFromPalette: true, // deprecated
            arguments: { ONE: { type: Scratch.ArgumentType.STRING, defaultValue: "a" }, TWO: { type: Scratch.ArgumentType.STRING, defaultValue: "c" } }
          },
          { blockType: Scratch.BlockType.LABEL, text: "Color and Effects" },
          {
            opcode: "setSpriteEffect",
            blockType: Scratch.BlockType.COMMAND,
            text: "set [EFFECT] to [VALUE] of [SPRITE]",
            arguments: {
              EFFECT: { type: Scratch.ArgumentType.STRING, menu: "EFFECT_MENU" },
              VALUE: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
              SPRITE: { type: Scratch.ArgumentType.STRING, menu: "TARGETS" }
            }
          },
          {
            opcode: "hexBrightness",
            blockType: Scratch.BlockType.REPORTER,
            text: "change brightness of [COLOR] by [CHANGE]",
            arguments: {
              COLOR: { type: Scratch.ArgumentType.COLOR },
              CHANGE: { type: Scratch.ArgumentType.NUMBER, defaultValue: 5 }
            }
          },
          {
            opcode: "removeThorns",
            blockType: Scratch.BlockType.REPORTER,
            text: "remove vector thorns from [SVG]",
            arguments: {
              SVG: { type: Scratch.ArgumentType.STRING, defaultValue: "<svg>" }
            }
          },
          {
            opcode: "genShape",
            blockType: Scratch.BlockType.REPORTER,
            text: "make [TYPE] shape with points [POINTS] filled [COLOR] width [WIDTH] height [HEIGHT] x [X] y [Y] curve [LINE]",
            arguments: {
              POINTS: { type: Scratch.ArgumentType.STRING, defaultValue: "0,0 200,0 100, 200" },
              COLOR: { type: Scratch.ArgumentType.COLOR },
              WIDTH: { type: Scratch.ArgumentType.NUMBER, defaultValue: 200 },
              HEIGHT: { type: Scratch.ArgumentType.NUMBER, defaultValue: 200 },
              X: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
              Y: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
              LINE: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "RETURN" }
            }
          },
          "---",
          {
            opcode: "unboundSound",
            blockType: Scratch.BlockType.COMMAND,
            text: "set [EFFECT] of [SPRITE] to [VALUE] unclamped",
            arguments: {
              EFFECT: { type: Scratch.ArgumentType.STRING, menu: "SOUND" },
              SPRITE: { type: Scratch.ArgumentType.STRING, menu: "TARGETS" },
              VALUE: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 }
            }
          },
          { blockType: Scratch.BlockType.LABEL, text: "Math" },
          {
            opcode: "randomSingleInteger",
            blockType: Scratch.BlockType.REPORTER,
            text: "pick random single integer",
            disableMonitor: true
          },
          {
            opcode: "tripleOperator", blockType: Scratch.BlockType.REPORTER,
            text: "[NUM1] [OPERATOR1] [NUM2] [OPERATOR2] [NUM3]", hideFromPalette: true, // deprecated
            arguments: {
              NUM1: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 }, OPERATOR1: { type: Scratch.ArgumentType.STRING, menu: "OPERATOR_MENU" },
              NUM2: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 }, OPERATOR2: { type: Scratch.ArgumentType.STRING, menu: "OPERATOR_MENU" }, NUM3: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 }
            }
          },
          {
            opcode: "quadrupleOperator", blockType: Scratch.BlockType.REPORTER, hideFromPalette: true, // deprecated
            text: "[NUM1] [OPERATOR1] [NUM2] [OPERATOR2] [NUM3] [OPERATOR3] [NUM4]",
            arguments: {
              NUM1: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 }, OPERATOR1: { type: Scratch.ArgumentType.STRING, menu: "OPERATOR_MENU" },
              NUM2: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 }, OPERATOR2: { type: Scratch.ArgumentType.STRING, menu: "OPERATOR_MENU" },
              NUM3: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 }, OPERATOR3: { type: Scratch.ArgumentType.STRING, menu: "OPERATOR_MENU" }, NUM4: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 }
            }
          },
          {
            opcode: "negaAbs", blockType: Scratch.BlockType.REPORTER,
            text: "nega-abs of [NUMBER]", hideFromPalette: true, // deprecated
            arguments: { NUMBER: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 } }
          },
          {
            opcode: "simplifyFrac",
            blockType: Scratch.BlockType.REPORTER,
            text: "simplify fraction [NUM] / [DENOM]",
            arguments: {
              NUM: { type: Scratch.ArgumentType.NUMBER, defaultValue: 4 },
              DENOM: { type: Scratch.ArgumentType.NUMBER, defaultValue: 8 }
            }
          },
          "---",
          {
            opcode: "smoothing",
            blockType: Scratch.BlockType.REPORTER,
            text: "smooth [MATH] at speed [SPEED] and limit [LIMIT]",
            arguments: {
              MATH: { type: Scratch.ArgumentType.STRING, menu: "mathMenu" },
              SPEED: { type: Scratch.ArgumentType.NUMBER, defaultValue: 50 },
              LIMIT: { type: Scratch.ArgumentType.NUMBER, defaultValue: 25 }
            }
          },
          {
            opcode: "smoothing2",
            blockType: Scratch.BlockType.REPORTER,
            text: "smooth [MATH] [NUM] at speed [SPEED] and limit [LIMIT]",
            arguments: {
              MATH: { type: Scratch.ArgumentType.STRING, menu: "mathMenu" },
              NUM: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
              SPEED: { type: Scratch.ArgumentType.NUMBER, defaultValue: 50 },
              LIMIT: { type: Scratch.ArgumentType.NUMBER, defaultValue: 25 }
            }
          },
          { blockType: Scratch.BlockType.LABEL, text: "Strings" },
          {
            opcode: "rndString", blockType: Scratch.BlockType.REPORTER, hideFromPalette: true, // deprecated
            text: "pick random [STRING1] or [STRING2] with [CHANCE]% chance",
            arguments: { STRING1: { type: Scratch.ArgumentType.STRING, defaultValue: "foo" }, STRING2: { type: Scratch.ArgumentType.STRING, defaultValue: "bar" }, CHANCE: { type: Scratch.ArgumentType.NUMBER, defaultValue: 50 } }
          },
          {
            opcode: "typeString",
            blockType: Scratch.BlockType.REPORTER,
            text: "[STRING1] [TYPE] [STRING2]",
            arguments: {
              STRING1: { type: Scratch.ArgumentType.STRING, defaultValue: "" },
              STRING2: { type: Scratch.ArgumentType.STRING, defaultValue: "value" },
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "STRING" }
            }
          },
          {
            opcode: "noContain", blockType: Scratch.BlockType.BOOLEAN,
            text: "[STRING1] not contains [STRING2]?", hideFromPalette: true, // deprecated
            arguments: { STRING1: { type: Scratch.ArgumentType.STRING, defaultValue: "SharkPool" }, STRING2: { type: Scratch.ArgumentType.STRING, defaultValue: "shark" } }
          },
          {
            opcode: "replaceKey",
            blockType: Scratch.BlockType.REPORTER,
            text: "replace [KEY] #[ORDER] of [STRING] with [REPLACE]",
            arguments: {
              STRING: { type: Scratch.ArgumentType.STRING, defaultValue: "SharkPool is cool. SharkPool is great." },
              KEY: { type: Scratch.ArgumentType.STRING, defaultValue: "is" },
              ORDER: { type: Scratch.ArgumentType.NUMBER, defaultValue: 2 },
              REPLACE: { type: Scratch.ArgumentType.STRING, defaultValue: "isnt" }
            }
          },
          {
            opcode: "replaceKeys",
            blockType: Scratch.BlockType.REPORTER,
            text: "replace [KEY] #[ORDER] to #[ORDER2] of [STRING] with [REPLACE]",
            arguments: {
              STRING: { type: Scratch.ArgumentType.STRING, defaultValue: "SharkPool is cool. SharkPool is great." },
              KEY: { type: Scratch.ArgumentType.STRING, defaultValue: "is" },
              ORDER: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 },
              ORDER2: { type: Scratch.ArgumentType.NUMBER, defaultValue: 2 },
              REPLACE: { type: Scratch.ArgumentType.STRING, defaultValue: "isnt" }
            }
          },
          {
            opcode: "shuffleArray",
            blockType: Scratch.BlockType.REPORTER,
            text: "organize array [WORDS] by [SHUFFLE_OPTION]",
            arguments: {
              WORDS: { type: Scratch.ArgumentType.STRING, defaultValue: "[\"word1\", \"word2\", \"word3\"]" },
              SHUFFLE_OPTION: { type: Scratch.ArgumentType.STRING, menu: "shuffleOption" }
            }
          },
          {
            opcode: "tripleJoin", blockType: Scratch.BlockType.REPORTER,
            text: "join [STRING1] [STRING2] [STRING3]", hideFromPalette: true, // deprecated
            arguments: { STRING1: { type: Scratch.ArgumentType.STRING }, STRING2: { type: Scratch.ArgumentType.STRING }, STRING3: { type: Scratch.ArgumentType.STRING } }
          },
          {
            opcode: "quadrupleJoin", blockType: Scratch.BlockType.REPORTER,
            text: "join [STRING1] [STRING2] [STRING3] [STRING4]", hideFromPalette: true, // deprecated
            arguments: { STRING1: { type: Scratch.ArgumentType.STRING }, STRING2: { type: Scratch.ArgumentType.STRING }, STRING3: { type: Scratch.ArgumentType.STRING }, STRING4: { type: Scratch.ArgumentType.STRING } }
          },
          {
            opcode: "fiveJoin", blockType: Scratch.BlockType.REPORTER, hideFromPalette: true, // deprecated
            text: "join [STRING1] [STRING2] [STRING3] [STRING4] [STRING5]",
            arguments: {
              STRING1: { type: Scratch.ArgumentType.STRING }, STRING2: { type: Scratch.ArgumentType.STRING }, STRING3: { type: Scratch.ArgumentType.STRING },
              STRING4: { type: Scratch.ArgumentType.STRING }, STRING5: { type: Scratch.ArgumentType.STRING }
            }
          },
          { blockType: Scratch.BlockType.LABEL, text: "Experimental" },
          {
            opcode: "stepInter",
            blockType: Scratch.BlockType.COMMAND,
            text: "step interpolation",
          },
          {
            opcode: "refresh",
            blockType: Scratch.BlockType.COMMAND,
            text: "refresh extensions",
            isTerminal: true
          },
          {
            opcode: "request",
            blockType: Scratch.BlockType.COMMAND,
            text: "request [THING]",
            arguments: {
              THING: { type: Scratch.ArgumentType.STRING, menu: "reqMenu" }
            }
          }
        ],
        menus: {
          TARGETS: { acceptReporters: true, items: this._getTargets(true) },
          TARGETS2: { acceptReporters: true, items: this._getTargets(false) },
          ROUND_MENU: { acceptReporters: true, items: ["whole number", "tenths", "hundredths", "thousandths"] },
          LETTER_TYPE_MENU: { acceptReporters: true, items: ["lowercase", "uppercase"] },
          reqMenu: {
            acceptReporters: true,
            items: ["redraw", "project step", "toolbox update", "block refresh"]
          },
          EFFECT_MENU: {
            acceptReporters: true,
            items: ["color", "fisheye", "whirl", "pixelate", "mosaic", "brightness", "ghost"]
          },
          mathMenu: { acceptReporters: true, items: ["sin", "cos"] },
          OPERATOR_MENU: ["+", "-", "*", "/"],
          OPERATORS: [">", "<", "="],
          STRING: ["||", "??"],
          SOUND: ["volume", "pitch", "pan"],
          RETURN: ["svg", "encoded svg", "png"],
          encoder: ["encode", "decode"],
          cosInfo: {
            acceptReporters: true,
            items: [
              "name", "width", "height", "type",
              "rotation center x", "rotation center y",
              "content", "data.uri"
            ]
          },
          shuffleOption: {
            acceptReporters: true,
            items: [
              "random", "ascending", "descending",
              "ascending by length", "descending by length"
            ]
          }
        },
      };
    }

    _getTargets(ind) {
      const spriteNames = [];
      spriteNames.push({ text: "myself", value: "_myself_" });
      if (ind) spriteNames.push({ text: "Stage", value: "_stage_" });
      const targets = Scratch.vm.runtime.targets;
      for (let index = 1; index < targets.length; index++) {
        const target = targets[index];
        if (target.isOriginal) spriteNames.push({ text: target.getName(), value: target.getName() });
      }
      return spriteNames.length > 0 ? spriteNames : [""];
    }

    whenChanged(args, util) {
      if (typeof util.thread.sharktilsPars === "undefined") util.thread.stackFrames[0].sharktilsPars = {};
      const blockId = util.thread.peekStack();
      const input = Scratch.Cast.toString(args.INPUT);
      if (!lastValues[blockId]) lastValues[blockId] = input;
      if (lastValues[blockId] !== input) {
        util.thread.stackFrames[0].sharktilsPars.diff = lastValues[blockId];
        lastValues[blockId] = input;
        return true;
      }
      return false;
    }
    changeV(args, util) {
      const stack = util.thread.stackFrames;
      if (typeof stack === "undefined") return "";
      const params = stack[0].sharktilsPars;
      if (typeof params === "undefined") return "";
      return params.diff || "";
    }

    isChanged(args, util) {
      const blockId = util.thread.isCompiled ? util.thread.peekStack() : util.thread.peekStackFrame().op.id;
      const input = Scratch.Cast.toString(args.INPUT);
      if (!lastValues[blockId]) lastValues[blockId] = input;
      if (lastValues[blockId] !== input) {
        lastValues[blockId] = input;
        return true;
      }
      return false;
    }

    randomSingleInteger() { return Math.random() < 0.5 ? -1 : 1 }

    setSpriteEffect(args, util) {
      let target = args.SPRITE;
      target = target === "_myself_" ? util.target : target === "_stage_" ? vm.runtime.getTargetForStage() : vm.runtime.getSpriteTargetByName(target);
      if (!target) return;
      target.setEffect(args.EFFECT, Scratch.Cast.toNumber(args.VALUE));
    }

    shuffleArray(args) {
      let words = args.WORDS;
      try {
        words = JSON.parse(words);
      } catch { return "Invalid Array" }
      if (!Array.isArray(words)) return "Invalid Array";
      switch (args.SHUFFLE_OPTION) {
        case "ascending": return JSON.stringify(words.sort((a, b) => a - b));
        case "descending": return JSON.stringify(words.sort((a, b) => b - a).reverse());
        case "descending by length": return JSON.stringify(words.sort((a, b) => b.length - a.length));
        case "ascending by length": return JSON.stringify(words.sort((a, b) => a.length - b.length));
        default:
          for (let i = words.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [words[i], words[j]] = [words[j], words[i]];
          }
          return JSON.stringify(words);
      }
    }

    hexBrightness(args) {
      const [r, g, b] = args.COLOR.replace(/^#/, "").match(/.{1,2}/g).map(channel => parseInt(channel, 16));
      const hslColor = rgbToHsl(r, g, b);
      const newLightness = Math.min(1, Math.max(0, hslColor[2] + (args.CHANGE / 100)));
      const newRgbColor = hslToRgb(hslColor[0], hslColor[1], newLightness);
      return `#${newRgbColor.map(channel => componentToHex(channel)).join("")}`;
    }

    smooth(spd, lim, type, num) {
      const speed = Scratch.Cast.toNumber(spd) / 10;
      const limit = Scratch.Cast.toNumber(lim);
      return Math[type](num * speed) * limit || 0;
    }
    smoothing(args, util) { return this.smooth(args.SPEED, args.LIMIT, args.MATH, util.ioQuery("clock", "projectTimer")) }
    smoothing2(args) { return this.smooth(args.SPEED, args.LIMIT, args.MATH, Scratch.Cast.toNumber(args.NUM)) }

    refresh() { vm.extensionManager.refreshBlocks() }
    async request(args) {
      if (args.THING === "redraw") Scratch.vm.runtime.requestRedraw();
      else if (args.THING === "block refresh") Scratch.vm.extensionManager.refreshBlocks();
      else if (args.THING === "project step") await this.ignoreError(vm.runtime._step());
      else Scratch.vm.runtime.requestToolboxExtensionsUpdate();
    }
    async stepInter() { await this.ignoreError(vm.runtime.frameLoop.stepCallback()) }
    ignoreError(call) {
      return new Promise(async (resolve, reject) => {
        try {
          call();
          await new Promise(resolve => setTimeout(resolve, 1));
          resolve();
        } catch { reject() }
      });
    }

    costumeCnt(args) { return this.costumeInfo({ SPRITE : args.SPRITE, OVERRIDE : true}) }
    costumeInfo(args, util) {
      let target = args.SPRITE;
      target = target === "_myself_" ? util.target : target === "_stage_" ? vm.runtime.getTargetForStage() : vm.runtime.getSpriteTargetByName(target);
      if (!target) return "";
      const targetInfo = target.getCostumes();
      if (args.OVERRIDE !== undefined) return target.sprite.costumes.length;
      let index = Math.round(Math.abs(Scratch.Cast.toString(args.NUM))) - 1;
      if (!index || Scratch.Cast.toString(index).includes("Infinity")) index = 0;
      if (index > target.sprite.costumes.length - 1) index = target.sprite.costumes.length - 1;
      const costume = targetInfo[index];
      switch (args.INFO) {
        case "name": return costume.name;
        case "width": return costume.size[0];
        case "height": return costume.size[1];
        case "type": return packageTest("costume format") ? "unknown" : costume.dataFormat;
        case "rotation center x": return costume.rotationCenterX;
        case "rotation center y": return costume.rotationCenterY;
        case "content": return packageTest("costume content") ? "" : costume.asset.decodeText();
        case "data.uri": return packageTest("costume content") ? "" : costume.asset.encodeDataURI();
        default: return "";
      }
    }

    getText(args, util) {
      const target = args.SPRITE === "_myself_" ? util.target : vm.runtime.getSpriteTargetByName(args.SPRITE);
      if (!target || !target._customState["Scratch.looks"]) return "";
      return target._customState["Scratch.looks"].text;
    }

    cloudCode(args) { return args.CODE === "encode" ? this.encodeText(args.TEXT) : this.decodeText(args.TEXT) }
    encodeText(txt) { return txt.split("").map(char => char.charCodeAt(0)).map(value => value.toString().padStart(3, "0")).join("") }
    decodeText(txt) {
      const decodedString = [];
      for (let i = 0; i < txt.length; i += 3) {
        const charCode = parseInt(txt.slice(i, i + 3), 10);
        decodedString.push(String.fromCharCode(charCode));
      }
      return decodedString.join("");
    }

    setTargetCostume(args, util) {
      if (args.SPRITE === "_stage_") vm.runtime.ext_scratch3_looks._setBackdrop(vm.runtime.getTargetForStage(), args.NUM);
      else {
        const target = args.SPRITE === "_myself_" ? util.target : vm.runtime.getSpriteTargetByName(args.SPRITE);
        if (target) vm.runtime.ext_scratch3_looks._setCostume(target, args.NUM);
      }
    }

    removeThorns(args) { return args.SVG.replaceAll("linejoin=\"miter\"", "linejoin=\"round\"") }

    penLayer() {
      const penID = vm.runtime.ext_pen?._penDrawableId;
      if (!penID) return "";
      const imageData = vm.runtime.renderer.extractDrawableScreenSpace(penID).imageData;
      var canvas = document.createElement("canvas");
      canvas.width = imageData.width;
      canvas.height = imageData.height;
      canvas.getContext("2d").putImageData(imageData, 0, 0);
      return canvas.toDataURL("image/png");
    }

    broadcastRun(args, util) {
      if (!util.stackFrame.broadcastVar) util.stackFrame.broadcastVar = vm.runtime.getTargetForStage().lookupBroadcastByInputValue(args.MSG)
      if (util.stackFrame.broadcastVar) {
        const opt = util.stackFrame.broadcastVar.name;
        if (!util.stackFrame.startedThreads) {
          util.stackFrame.startedThreads = util.startHats("event_whenbroadcastreceived", { BROADCAST_OPTION: opt });
          if (util.stackFrame.startedThreads.length === 0) return;
        }
        const waiting = util.stackFrame.startedThreads.some(thread => vm.runtime.threads.indexOf(thread) !== -1);
        if (waiting) {
          if (util.stackFrame.startedThreads.every(thread => vm.runtime.isWaitingThread(thread))) util.yieldTick();
          else util.startBranch(1, true);
        }
      }
    }

    genShape(args) {
      const width = Scratch.Cast.toString(args.WIDTH); const height = Scratch.Cast.toString(args.HEIGHT);
      const x = Scratch.Cast.toString(args.X); const y = Scratch.Cast.toString(args.Y) * -1;
      const curNoise =
        `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(${x},${y})"> 
            <polygon points="${args.POINTS.replace(/[^0-9, ]/g, "")}" fill="${args.COLOR}"
            stroke="${args.COLOR}" stroke-width="${args.LINE}" stroke-linejoin="round" />
          </g>
        </svg>`;
      if (args.TYPE === "encoded svg") return `data:image/svg+xml;base64,${btoa(curNoise)}`;
      if (args.TYPE === "png") {
        const img = new Image();
        img.src = `data:image/svg+xml;base64,${btoa(curNoise)}`;
        return new Promise((resolve) => {
          img.onload = () => {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            resolve(canvas.toDataURL());
          };
        });
      }
      return curNoise.trim();
    }

    unboundSound(args, util) {
      let target = args.SPRITE;
      target = target === "_myself_" ? util.target : target === "_stage_" ? vm.runtime.getTargetForStage() : vm.runtime.getSpriteTargetByName(target);
      if (!target) return;
      if (args.EFFECT === "volume") return this._updateVolume(Scratch.Cast.toNumber(args.VALUE), target);
      else return this._updateEffect(args, target);
    }
    _updateEffect(args, target) {
      const effect = args.EFFECT.toLowerCase();
      const soundState = vm.runtime.ext_scratch3_sound._getSoundState(target);
      if (!Object.prototype.hasOwnProperty.call(soundState.effects, effect)) return;
      soundState.effects[effect] = args.VALUE;
      vm.runtime.ext_scratch3_sound._syncEffectsForTarget(target);
      if (vm.runtime.runtimeOptions.miscLimits) return Promise.resolve();
      vm.runtime.requestRedraw();
    }
    _updateVolume(volume, target) {
      target.volume = volume;
      vm.runtime.ext_scratch3_sound._syncEffectsForTarget(target);
      if (vm.runtime.runtimeOptions.miscLimits) return Promise.resolve();
      vm.runtime.requestRedraw();
    }

    // Deprecated Blocks
    // Found in More Operators
    replaceKey(args) {
      const regex = new RegExp(args.KEY, "g");
      let index = 0;
      return Scratch.Cast.toString(args.STRING).replace(regex, (match) => {
        index++; return index === Scratch.Cast.toNumber(args.ORDER) ? args.REPLACE : match;
      });
    }
    replaceKeys(args) {
      const regex = new RegExp(args.KEY, "g");
      let index = 0;
      const ord1 = Scratch.Cast.toNumber(args.ORDER); const ord2 = Scratch.Cast.toNumber(args.ORDER2);
      const order2 = ord1 > ord2 ? ord1 : ord2;
      return Scratch.Cast.toString(args.STRING).replace(regex, (match) => {
        index++; return index >= ord1 && index <= order2 ? args.REPLACE : match;
      });
    }
    randomCharRange(args) { 
      let ONE = args.ONE.charCodeAt(0); let TWO = args.TWO.charCodeAt(0);
      return String.fromCharCode(Math.floor(Math.random() * (TWO - ONE + 1) + ONE));
    }
    noContain(args) { return !vm.runtime.ext_scratch3_operators.contains(args) }
    tripleJoin({ STRING1, STRING2, STRING3 }) { return `${STRING1}${STRING2}${STRING3}` }
    quadrupleJoin({ STRING1, STRING2, STRING3, STRING4 }) { return `${STRING1}${STRING2}${STRING3}${STRING4}` }
    fiveJoin({ STRING1, STRING2, STRING3, STRING4, STRING5 }) { return `${STRING1}${STRING2}${STRING3}${STRING4}${STRING5}` }
    tripleOperator(args) {
      const nums = [Scratch.Cast.toNumber(args.NUM1), Scratch.Cast.toNumber(args.NUM2), Scratch.Cast.toNumber(args.NUM3)];
      return eval(`${nums[0]} ${args.OPERATOR1} ${nums[1]} ${args.OPERATOR2} ${nums[2]}`);
    }
    quadrupleOperator(args) {
      const nums = [Scratch.Cast.toNumber(args.NUM1), Scratch.Cast.toNumber(args.NUM2), Scratch.Cast.toNumber(args.NUM3), Scratch.Cast.toNumber(args.NUM4)];
      return eval(`${nums[0]} ${args.OPERATOR1} ${nums[1]} ${args.OPERATOR2} ${nums[2]} ${args.OPERATOR3} ${nums[3]}`);
    }
    simplifyFrac(args) {
      const numerator = Scratch.Cast.toNumber(args.NUM); const denominator = Scratch.Cast.toNumber(args.DENOM);
      const gcd = (a, b) => (b ? gcd(b, a % b) : a);
      const gcdValue = gcd(numerator, denominator);
      const result = JSON.stringify([numerator / gcdValue, denominator / gcdValue]);
      return result.includes("null") ? "[undefined]" : result;
    }
    negaAbs({ NUMBER }) { return -Math.abs(Scratch.Cast.toNumber(NUMBER)) }
    roundToNearest({ NUMBER, ROUND_TYPE }) {
      const precision = {"whole number": 0, "tenths": 1, "hundredths": 2, "thousandths": 3}[ROUND_TYPE] || Math.max(0, Math.round(Scratch.Cast.toNumber(ROUND_TYPE)));
      const multiplier = Math.pow(10, precision);
      return Math.round(NUMBER * multiplier) / multiplier;
    }
    randomLetter({ LETTER_TYPE }) {
      let letters = "abcdefghijklmnopqrstuvwxyz";
      if (LETTER_TYPE === "uppercase") letters = letters.toUpperCase();
      return letters.charAt(Math.floor(Math.random() * letters.length));
    }
    rndString(args) { return Math.random() > args.CHANCE / 100 ? args.STRING2 : args.STRING1 }
    typeString(args) {
      if (args.TYPE === "||") return args.STRING1 || args.STRING2;
      else return args.STRING1 === "undefined" || args.STRING1 === "null" ? args.STRING2 : args.STRING1;
    }

    // Found in Extra Control
    repeatForUntil(args, util) {
      if (typeof util.stackFrame.loopCounter === "undefined") util.stackFrame.loopCounter = Math.round(Scratch.Cast.toNumber(args.NUM));
      util.stackFrame.loopCounter--;
      if (!Scratch.Cast.toBoolean(args.CON) && util.stackFrame.loopCounter >= 0) util.startBranch(1, true);
    }
    spayedCondition(args, util) {
      if (typeof util.stackFrame.index === "undefined") util.stackFrame.index = true;
      if (!Scratch.Cast.toBoolean(args.CON1) && util.stackFrame.index) return;
      else {
        if (!Scratch.Cast.toBoolean(args.CON2)) { util.stackFrame.index = false; util.startBranch(1, true) }
        else { util.stackFrame.index = true; return }
      }
    }
  }

  Scratch.extensions.register(new Sharktilities());
})(Scratch);
