// Name: Image Effects
// ID: imgEffectsSP
// Description: Apply a variety of visual effects to images.
// By: SharkPool
// Licence: MIT

// Version V.3.0.0

(function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) throw new Error("Image Effects must run unsandboxed");

  const menuIconURI =
"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDUuOTU1IiBoZWlnaHQ9IjE0NS45NTUiIHZpZXdCb3g9IjAgMCAxNDUuOTU1IDE0NS45NTUiPjxwYXRoIGQ9Ik0wIDcyLjk3N0MwIDMyLjY3MiAzMi42NzIgMCA3Mi45NzcgMHM3Mi45NzcgMzIuNjcyIDcyLjk3NyA3Mi45NzctMzIuNjcyIDcyLjk3Ny03Mi45NzcgNzIuOTc3UzAgMTEzLjI4MiAwIDcyLjk3NyIgZmlsbD0iIzc3NGRjYiIvPjxwYXRoIGQ9Ik04Ljg2MyA3Mi45NzdjMC0zNS40MSAyOC43MDUtNjQuMTE1IDY0LjExNS02NC4xMTVzNjQuMTE0IDI4LjcwNSA2NC4xMTQgNjQuMTE1LTI4LjcwNSA2NC4xMTYtNjQuMTE1IDY0LjExNlM4Ljg2MiAxMDguMzg3IDguODYyIDcyLjk3N3oiIGZpbGw9IiM5NmYiLz48cGF0aCBkPSJNMTA1LjI3OCA3NC44MDljLTIuMDQgMS4xODQtMTAuMTg2LjE4Ny0xMS42NTUgMS44NzQtNS43MjMgNi41NzItNS41NTkgMjIuNzgyLTYuMTkgMjQtLjc5MyAxLjUzLTIuNzkyIDIuMDQ1LTMuODUzIDAtLjg3LTEuNjgyLjE0Mi0xNy45ODgtNS44NzQtMjMuOTg2LTEuMzA1LTEuMzAyLTkuMzM1LS45NC0xMC45Ny0xLjg4OHMtMi4wNC0zLjE0NiAwLTQuMzNjMi4wMzktMS4xODMgOS42LS4xOSAxMS42NzktMy40MyA0LjIxNS01LjI5NSA0LjUzNy0yMS4yMzIgNS4xNjUtMjIuNDQ0Ljc5My0xLjUzIDIuNzkyLTIuMDQ2IDMuODUzIDAgLjgzOSAxLjYxOCAxLjMxOSAxNi43NDQgNi44NyAyMy4yNzggMS40NjkgMS43MyA5LjUxMyAxLjc0OCAxMC45NzUgMi41OTZzMi4wNCAzLjE0NyAwIDQuMzN6IiBmaWxsPSIjZmZmIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iNCIvPjxwYXRoIGQ9Ik02NS44MDMgNTIuNzY3Yy0xLjA2Ni42MTgtNS43MzMuNjMtNi44MDUgMS44OTMtNC4wNDggNC43NjUtMi41OTggNy43OTYtMy4yMSA4Ljk3NS0uNzczIDEuNDkzLTIuMjMgMS4xMTYtMi44MSAwLS40NTctLjg4NC40NTEtNC4wMi0zLjQ3NC04Ljg1NC0xLjAzLTEuMjY5LTQuMjIyLTEuMzUyLTUuNzA5LTIuMjE1cy0xLjE5Mi0yLjQ2NiAwLTMuMTU4IDQuODQ4LS4yMjcgNS44LTEuMTc2YzQuMzg3LTQuMzc0IDIuNzQ5LTcuMjY2IDMuMzg0LTguNDkyLjc3NC0xLjQ5MiAyLjIzMi0xLjExNSAyLjgxIDAgLjQ2Ljg4OC0xLjQ2IDMuNzA5IDIuNzE0IDguNTAyIDEuMDcxIDEuMjMgNS44MTIuNTAzIDcuMyAxLjM2NnMxLjA2NiAyLjU0IDAgMy4xNTl6TTQzLjU4NSA5NS4yNzZjMS4wNjYtLjYxOSA1LjczMi0uNjMyIDYuODA0LTEuODkzIDQuMDQ4LTQuNzY2IDIuNTk4LTcuNzk2IDMuMjEtOC45NzYuNzczLTEuNDkyIDIuMjMxLTEuMTE2IDIuODEgMCAuNDU4Ljg4NC0uNDUgNC4wMiAzLjQ3NCA4Ljg1NCAxLjAzIDEuMjcgNC4yMjIgMS4zNTIgNS43MSAyLjIxNSAxLjQ4Ni44NjMgMS4xOTEgMi40NjYgMCAzLjE1OC0xLjE5My42OTItNC44NDkuMjI3LTUuOCAxLjE3Ni00LjM4OCA0LjM3NC0yLjc1IDcuMjY2LTMuMzg1IDguNDkyLS43NzMgMS40OTItMi4yMzEgMS4xMTYtMi44MSAwLS40Ni0uODg3IDEuNDYtMy43MDktMi43MTMtOC41MDItMS4wNzItMS4yMy01LjgxMy0uNTAzLTcuMy0xLjM2NnMtMS4wNjctMi41NCAwLTMuMTU4eiIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIuNSIvPjwvc3ZnPg==";

  const Cast = Scratch.Cast;

  /**
   * Generates an item for a block dropdown menu.
   * 
   * @param text {String} Text value of menu item
   * @param value {String|undefined} Value of menu item, uses 'text' param if undefined
   * @returns Menu item object
   */
  const genMenuItem = (text, value) => {
    return {
      text: Scratch.translate(text),
      value: value ?? text
    };
  };

  const DEFAULT_IMG_VALUE = "...";
  const EFFECTS_MENU = [
    genMenuItem("saturation"),
    genMenuItem("contrast"),
    genMenuItem("opaque"),
    genMenuItem("glitch"),
    genMenuItem("chunk glitch"),
    genMenuItem("clip glitch"),
    genMenuItem("vignette"),
    genMenuItem("ripple"),
    genMenuItem("displacement"),
    genMenuItem("posterize"),
    genMenuItem("blur"),
    genMenuItem("sepia"),
    genMenuItem("scanlines"),
    genMenuItem("grain"),
    genMenuItem("cubism")
  ];

  class ImageHelper {
    // TODO cache imageData, isDirty, use clearRect
    // TODO clamp can be replaced with clampToColor (0-255)
    static HEX_COLOR_REGEX = /^#[0-9A-F]{6}[0-9a-f]{0,2}$/i;
    static canvas = document.createElement("canvas");
    static context = ImageHelper.canvas.getContext("2d", { willReadFrequently: true });

    static _validateSource(input) {
      input = Cast.toString(input).trim();
      if (!input) return null;

      if (input.startsWith("<svg")) {
        const data = typeof Base64 !== "undefined" ? Base64.toBase64(input) : btoa(input);
        return `data:image/svg+xml;base64,${data}`;
      }

      const isURL = input.startsWith("http");
      const isDataURI = input.startsWith("data:image/");
      if (isURL || isDataURI) return input;
      return null;
    }

    static hexToRgba(hex) {
      hex = Cast.toString(hex);
      if (!ImageHelper.HEX_COLOR_REGEX.test(hex)) return [0, 0, 0, 0]; // black

      return [
        parseInt(hex.slice(1, 3), 16),
        parseInt(hex.slice(3, 5), 16),
        parseInt(hex.slice(5, 7), 16),
        hex.length > 8 ? parseInt(hex.slice(7, 9), 16) : 255
      ];
    }

    static rgbaToHex(rgba) {
      const alpha = rgba[3] !== undefined ? Math.round(rgba[3]).toString(16).padStart(2, "0") : "";
      const rgbHex = (1 << 24 | rgba[0] << 16 | rgba[1] << 8 | rgba[2]).toString(16).slice(1);

      return `#${rgbHex}${alpha}`;
    }

    static clamp(min, max, value) {
      return Math.min(max, Math.max(min, value));
    }

    static getHelper() {
      return {
        canvas: ImageHelper.canvas,
        context: ImageHelper.context,
      };
    }

    static prepCanvas(image, opt_dontDraw) {
      const { canvas, context } = ImageHelper.getHelper();
      const width = image.naturalWidth || image.width || 300;
      const height = image.naturalHeight || image.height || 150;

      canvas.width = Math.max(1, Math.abs(width));
      canvas.height = Math.max(1, Math.abs(height));
      context.reset(); // Reset the canvas incase the width and height remain the same

      if (!opt_dontDraw) {
        context.save();
        context.scale(width < 0 ? -1 : 1, height < 0 ? -1 : 1);
        context.drawImage(
          image,
          0,
          0,
          canvas.width,
          canvas.height,
        );
        context.restore();
      }
    }

    static newImage(input) {
      const source = ImageHelper._validateSource(input);
      if (!source) return null;

      return new Promise((resolve) => {
        const img = new Image();
        img.crossOrigin = "Anonymous";
        img.onerror = () => resolve(null);
        img.onload = () => resolve(img);
        img.src = source;
      });
    }

    static newTempCanvas(width, height) {
      const tempCanvas = document.createElement("canvas");
      tempCanvas.width = width;
      tempCanvas.height = height;
      const ctx = tempCanvas.getContext("2d", { willReadFrequently: true });

      const dispose = () => {
        ctx.reset();
        tempCanvas.width = 0;
        tempCanvas.height = 0;
      };

      return {
        canvas: tempCanvas,
        ctx,
        dispose
      };
    }

    static forEachPixel(callback, options = {}) {
      const { canvas, context } = ImageHelper.getHelper();
      const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
      const pixelData = imageData.data;

      const start = Math.max(0, options.start ?? 0);
      const end = Math.min(options.end ?? pixelData.length, pixelData.length);
      for (let i = start; i < end; i += 4) {
        const result = callback(
          [
            pixelData[i],
            pixelData[i + 1],
            pixelData[i + 2],
            pixelData[i + 3]
          ],
          i / 4,
        );

        pixelData[i] = result[0];
        pixelData[i + 1] = result[1];
        pixelData[i + 2] = result[2];
        pixelData[i + 3] = result[3];
      }

      if (!options.dontSetCanvas) {
        context.putImageData(imageData, 0, 0);
        return canvas.toDataURL("image/png");
      }
    }

    static forEachRect(width, height, sx, sy, callback) {
      // TODO
    }
  }

  class imgEffectsSP {
    constructor() {
      this.colorThreshold = 10;
      this.mask = {
        pos: [0, 0],
        scale: [100, 100],
        direction: 90
      };
      this.shardPieces = [];
    }
    getInfo() {
      return {
        id: "imgEffectsSP",
        name: Scratch.translate("Image Effects"),
        menuIconURI,
        color1: "#9966FF",
        color2: "#774DCB",
        blocks: [
          /**
           * Excuse the poor argument/opcode naming for some blocks.
           * They were made years ago and must remain the same for compatibility.
           */
          {
            opcode: "applyHueEffect",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("set tint of [SVG] to [COLOR]"),
            arguments: {
              SVG: { type: Scratch.ArgumentType.STRING, defaultValue: DEFAULT_IMG_VALUE },
              COLOR: { type: Scratch.ArgumentType.COLOR }
            }
          },
          "---",
          {
            opcode: "deleteColor",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("remove [COLOR] from [DATA_URI]"),
            arguments: {
              COLOR: { type: Scratch.ArgumentType.COLOR },
              DATA_URI: { type: Scratch.ArgumentType.STRING, defaultValue: DEFAULT_IMG_VALUE }
            }
          },
          {
            opcode: "replaceColor",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("replace [COLOR] with [REPLACE] in [DATA_URI]"),
            arguments: {
              COLOR: { type: Scratch.ArgumentType.COLOR },
              REPLACE: { type: Scratch.ArgumentType.COLOR, defaultValue: "#00ff00" },
              DATA_URI: { type: Scratch.ArgumentType.STRING, defaultValue: DEFAULT_IMG_VALUE }
            }
          },
          {
            opcode: "replaceColorPattern",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("replace [COLOR] with pattern [PATTERN] scale [SCALE] in [DATA_URI]"),
            arguments: {
              COLOR: { type: Scratch.ArgumentType.COLOR },
              PATTERN: { type: Scratch.ArgumentType.STRING, defaultValue: DEFAULT_IMG_VALUE },
              SCALE: { type: Scratch.ArgumentType.NUMBER, defaultValue: 50 },
              DATA_URI: { type: Scratch.ArgumentType.STRING, defaultValue: DEFAULT_IMG_VALUE }
            }
          },
          {
            opcode: "setSoftness",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("set color threshold to [AMT] %"),
            arguments: {
              AMT: { type: Scratch.ArgumentType.NUMBER, defaultValue: 10 }
            }
          },
          "---",
          {
            opcode: "applyEffect",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("set [EFFECT] effect of [SVG] to [PERCENTAGE] %"),
            arguments: {
              EFFECT: { type: Scratch.ArgumentType.STRING, menu: "EFFECTS" },
              SVG: { type: Scratch.ArgumentType.STRING, defaultValue: DEFAULT_IMG_VALUE },
              PERCENTAGE: { type: Scratch.ArgumentType.NUMBER, defaultValue: 50 }
            }
          },
          {
            opcode: "applyBulgeEffect",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("set bulge effect of [SVG] to [STRENGTH] % at x [CENTER_X] y [CENTER_Y]"),
            arguments: {
              SVG: { type: Scratch.ArgumentType.STRING, defaultValue: DEFAULT_IMG_VALUE },
              STRENGTH: { type: Scratch.ArgumentType.NUMBER, defaultValue: 50 },
              CENTER_X: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
              CENTER_Y: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 }
            }
          },
          {
            opcode: "applyWaveEffect",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("set wave effect of [SVG] to amplitude x [AMPX] y [AMPY] and frequency x [FREQX] y [FREQY]"),
            arguments: {
              SVG: { type: Scratch.ArgumentType.STRING, defaultValue: DEFAULT_IMG_VALUE },
              AMPX: { type: Scratch.ArgumentType.NUMBER, defaultValue: 50 },
              AMPY: { type: Scratch.ArgumentType.NUMBER, defaultValue: 50 },
              FREQX: { type: Scratch.ArgumentType.NUMBER, defaultValue: 5 },
              FREQY: { type: Scratch.ArgumentType.NUMBER, defaultValue: 5 }
            }
          },
          {
            opcode: "applyLineGlitchEffect",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("set line glitch effect of [SVG] to [PERCENTAGE]% on [DIRECT] axis and line width [WIDTH]"),
            arguments: {
              SVG: { type: Scratch.ArgumentType.STRING, defaultValue: DEFAULT_IMG_VALUE },
              PERCENTAGE: { type: Scratch.ArgumentType.NUMBER, defaultValue: 50 },
              DIRECT: { type: Scratch.ArgumentType.STRING, menu: "POSITIONS" },
              WIDTH: { type: Scratch.ArgumentType.NUMBER, defaultValue: 5 }
            }
          },
          {
            opcode: "applyAbberationEffect",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("set abberation effect of [SVG] to [PERCENTAGE] % on [DIRECT] axis with [COLOR1] and [COLOR2]"),
            arguments: {
              SVG: { type: Scratch.ArgumentType.STRING, defaultValue: DEFAULT_IMG_VALUE },
              PERCENTAGE: { type: Scratch.ArgumentType.NUMBER, defaultValue: 5 },
              COLOR1: { type: Scratch.ArgumentType.COLOR, defaultValue: "#ff0000" },
              COLOR2: { type: Scratch.ArgumentType.COLOR, defaultValue: "#00f7ff" },
              DIRECT: { type: Scratch.ArgumentType.STRING, menu: "POSITIONS" }
            }
          },
          "---",
          {
            opcode: "removeTransparencyEffect",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("remove pixels [REMOVE] [THRESHOLD] % transparency from [SVG]"),
            arguments: {
              SVG: { type: Scratch.ArgumentType.STRING, defaultValue: DEFAULT_IMG_VALUE },
              THRESHOLD: { type: Scratch.ArgumentType.NUMBER, defaultValue: 50 },
              REMOVE: { type: Scratch.ArgumentType.STRING, menu: "REMOVAL" }
            }
          },
          {
            opcode: "applyEdgeOutlineEffect",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("add outline to [SVG] thickness [THICKNESS] color [COLOR]"),
            arguments: {
              SVG: { type: Scratch.ArgumentType.STRING, defaultValue: DEFAULT_IMG_VALUE },
              THICKNESS: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 },
              COLOR: { type: Scratch.ArgumentType.COLOR }
            }
          },
          { blockType: Scratch.BlockType.LABEL, text: Scratch.translate("Clipping & Masking") },
          {
            opcode: "maskImage",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("[TYPE] mask [MASK] from [IMG]"),
            arguments: {
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "MASKING" },
              IMG: { type: Scratch.ArgumentType.STRING, defaultValue: DEFAULT_IMG_VALUE },
              MASK: { type: Scratch.ArgumentType.STRING, defaultValue: DEFAULT_IMG_VALUE }
            }
          },
          "---",
          {
            opcode: "setCutout",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("set mask position to x [X] y [Y]"),
            arguments: {
              X: { type: Scratch.ArgumentType.NUMBER },
              Y: { type: Scratch.ArgumentType.NUMBER }
            }
          },
          {
            opcode: "changeCutout",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("change mask position by x [X] y [Y]"),
            arguments: {
              X: { type: Scratch.ArgumentType.NUMBER, defaultValue: 10 },
              Y: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 }
            }
          },
          {
            opcode: "currentCut",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("mask [POS]"),
            disableMonitor: true,
            arguments: {
              POS: { type: Scratch.ArgumentType.STRING, menu: "POSITIONS" }
            }
          },
          "---",
          {
            opcode: "setScale",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("set mask size to x [SIZE] y [Y]"),
            arguments: {
              SIZE: { type: Scratch.ArgumentType.NUMBER, defaultValue: 100 },
              Y: { type: Scratch.ArgumentType.NUMBER, defaultValue: 100 }
            }
          },
          {
            opcode: "changeScale",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("change mask size by x [SIZE] y [Y]"),
            arguments: {
              SIZE: { type: Scratch.ArgumentType.NUMBER, defaultValue: 10 },
              Y: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 }
            }
          },
          {
            opcode: "currentScale",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("mask size [POS]"),
            disableMonitor: true,
            arguments: {
              POS: { type: Scratch.ArgumentType.STRING, menu: "POSITIONS" }
            }
          },
          "---",
          {
            opcode: "setDirection",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("set mask direction to [ANGLE]"),
            arguments: {
              ANGLE: { type: Scratch.ArgumentType.ANGLE, defaultValue: 90 }
            }
          },
          {
            opcode: "changeDirection",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("change mask direction by [ANGLE]"),
            arguments: {
              ANGLE: { type: Scratch.ArgumentType.ANGLE, defaultValue: 15 }
            }
          },
          {
            opcode: "currentDir",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("mask direction"),
            disableMonitor: true
          },
          "---",
          {
            opcode: "crackImage",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("crack [URI] into [SHARDS] shards"),
            arguments: {
              URI: { type: Scratch.ArgumentType.STRING, defaultValue: DEFAULT_IMG_VALUE },
              SHARDS: { type: Scratch.ArgumentType.NUMBER, defaultValue: 5 }
            }
          },
          {
            opcode: "getShard",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("shard # [SHARD]"),
            arguments: {
              SHARD: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 }
            }
          },
          { blockType: Scratch.BlockType.LABEL, text: Scratch.translate("Image Data") },
          {
            opcode: "commonCol",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("[TYPE] common color in [URI]"),
            arguments: {
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "DOMINANT" },
              URI: { type: Scratch.ArgumentType.STRING, defaultValue: DEFAULT_IMG_VALUE }
            }
          },
          "---",
          {
            opcode: "numPixels",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("[TYPE] of [URI]"),
            arguments: {
              URI: { type: Scratch.ArgumentType.STRING, defaultValue: DEFAULT_IMG_VALUE },
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "PIXELTYPE" }
            }
          },
          {
            opcode: "getPixel",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("pixel [NUM] of [URI]"),
            arguments: {
              URI: { type: Scratch.ArgumentType.STRING, defaultValue: DEFAULT_IMG_VALUE },
              NUM: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 }
            }
          },
          {
            opcode: "setPixel",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("set color of pixel [NUM] to [COLOR] in [URI]"),
            arguments: {
              URI: { type: Scratch.ArgumentType.STRING, defaultValue: DEFAULT_IMG_VALUE },
              NUM: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 },
              COLOR: { type: Scratch.ArgumentType.COLOR }
            }
          },
          {
            opcode: "setPixels",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("set color of pixels from [NUM] to [NUM2] to [COLOR] in [URI]"),
            arguments: {
              URI: { type: Scratch.ArgumentType.STRING, defaultValue: DEFAULT_IMG_VALUE },
              NUM: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 },
              NUM2: { type: Scratch.ArgumentType.NUMBER, defaultValue: 10 },
              COLOR: { type: Scratch.ArgumentType.COLOR }
            }
          },
          { blockType: Scratch.BlockType.LABEL, text: Scratch.translate("Image Conversions") },
          {
            opcode: "svgToBitmap",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("convert svg [SVG] to bitmap with width [WIDTH] height [HEIGHT]"),
            arguments: {
              SVG: { type: Scratch.ArgumentType.STRING, defaultValue: "<svg></svg>" },
              WIDTH: { type: Scratch.ArgumentType.NUMBER, defaultValue: 100 },
              HEIGHT: { type: Scratch.ArgumentType.NUMBER, defaultValue: 100 }
            }
          },
          {
            opcode: "convertImageToSVG",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("convert image [URI] to svg [TYPE]"),
            arguments: {
              URI: { type: Scratch.ArgumentType.STRING, defaultValue: DEFAULT_IMG_VALUE },
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "fileType" }
            }
          },
          {
            opcode: "makeSVGimage",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("put image [URI] into blank svg [TYPE]"),
            arguments: {
              URI: { type: Scratch.ArgumentType.STRING, defaultValue: DEFAULT_IMG_VALUE },
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "fileType" }
            }
          },
          {
            opcode: "upscaleImage",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("sharpen image [URI] by [NUM] %"),
            arguments: {
              URI: { type: Scratch.ArgumentType.STRING, defaultValue: DEFAULT_IMG_VALUE },
              NUM: { type: Scratch.ArgumentType.NUMBER, defaultValue: 5 }
            }
          },
          "---",
          {
            opcode: "stretchImg",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("stretch [URI] to width [W] height [H]"),
            arguments: {
              URI: { type: Scratch.ArgumentType.STRING, defaultValue: DEFAULT_IMG_VALUE },
              W: { type: Scratch.ArgumentType.NUMBER, defaultValue: 200 },
              H: { type: Scratch.ArgumentType.NUMBER, defaultValue: 100 }
            }
          },
          {
            opcode: "skewSVG",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("skew SVG [SVG] at x [Y] y [X] as [TYPE]"),
            arguments: {
              SVG: { type: Scratch.ArgumentType.STRING, defaultValue: "<svg></svg>" },
              X: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
              Y: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "fileType" }
            }
          },
          {
            opcode: "removeThorns",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("remove vector thorns from [SVG]"),
            arguments: {
              SVG: { type: Scratch.ArgumentType.STRING, defaultValue: "<svg></svg>" }
            }
          },
          "---",
          {
            opcode: "audioToImage",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("convert audio URI [AUDIO_URI] to PNG with width [W] height [H]"),
            arguments: {
              AUDIO_URI: { type: Scratch.ArgumentType.STRING, defaultValue: "audio_uri_here" },
              W: { type: Scratch.ArgumentType.NUMBER, defaultValue: 100 },
              H: { type: Scratch.ArgumentType.NUMBER, defaultValue: 100 }
            }
          },
          /* Deprecation Marker */
          {
            opcode: "clipImage", blockType: Scratch.BlockType.REPORTER,
            text: "clip [CUTOUT] from [MAIN]", hideFromPalette: true,
            arguments: {
              MAIN: { type: Scratch.ArgumentType.STRING, defaultValue: "source-here" }, CUTOUT: { type: Scratch.ArgumentType.STRING }
            }
          },
          {
            opcode: "overlayImage", blockType: Scratch.BlockType.REPORTER,
            text: "clip [CUTOUT] onto [MAIN]", hideFromPalette: true,
            arguments: {
              MAIN: { type: Scratch.ArgumentType.STRING, defaultValue: "source-here" }, CUTOUT: { type: Scratch.ArgumentType.STRING }
            }
          },
          {
            opcode: "convertHexToRGB", blockType: Scratch.BlockType.REPORTER,
            text: "convert [HEX] to [CHANNEL]", hideFromPalette: true,
            arguments: {
              HEX: { type: Scratch.ArgumentType.COLOR }, CHANNEL: { type: Scratch.ArgumentType.STRING, menu: "CHANNELS" }
            }
          }
          /* Marker End */
        ],
        menus: {
          POSITIONS: [
            genMenuItem("x"), 
            genMenuItem("y")
          ],
          REMOVAL: [
            genMenuItem("under"),
            genMenuItem("over"),
            genMenuItem("equal to")],
          DOMINANT: [genMenuItem("most"), genMenuItem("least")],
          MASKING: [
            genMenuItem("clip"),
            genMenuItem("cutout"),
            genMenuItem("overlay")
          ],
          PIXELTYPE: [
            genMenuItem("width"),
            genMenuItem("height"),
            genMenuItem("total")
          ],
          fileType: [
            genMenuItem("content"),
            genMenuItem("data.URI")
          ],
          EFFECTS: { acceptReporters: true, items: EFFECTS_MENU },
          /* Deprecation Marker */
          CHANNELS: { acceptReporters: true, items: ["R", "G", "B"] }
          /* Marker End */
        },
      };
    }

    // Helper Funcs
    _valueInRange(value, target) {
      return value >= target - this.colorThreshold &&
        value <= target + this.colorThreshold;
    }

    _colorInRange(rgba, targetRgba) {
      return (
        this._valueInRange(rgba[0], targetRgba[0]) &&
        this._valueInRange(rgba[1], targetRgba[1]) &&
        this._valueInRange(rgba[2], targetRgba[2])
      );
    }

    // EFFECTS
    _saturate(context, value, callback) {
      context.filter = `saturate(${Math.abs(value)}%)${value < 0 ? " invert(100%)" : ""}`;
      return callback(false);
    }

    _contrast(context, value, callback) {
      context.filter = `contrast(${Math.max(0, value / 100) + 1})`;
      return callback(false);
    }

    _opaque(_, value) {
      value = Math.max((value + 100) / 100, 0);
      return ImageHelper.forEachPixel((pixel) => {
        pixel[3] *= value;
        return pixel;
      });
    }

    _glitch(_, value) {
      return ImageHelper.forEachPixel((pixel) => {
        if (Math.random() * 100 <= value) {
          const rnd = () => (Math.random() - 0.5) * value * 3;
          return [
            (pixel[0] + rnd()) % 256,
            (pixel[1] + rnd()) % 256,
            (pixel[2] + rnd()) % 256,
            pixel[3],
          ];
        }

        return pixel;
      });
    }

    _chunkGlitch(context, value, callback) {
      const chunkSize = value / 10;
      const width = context.canvas.width;
      const height = context.canvas.height;
      const imageData = context.getImageData(0, 0, width, height);

      for (let i = 0; i < Math.floor(width); i++) {
        const linePos = Math.floor(Math.random() * height);
        const lineStart = linePos - Math.floor(chunkSize / 2);
        const lineEnd = lineStart + chunkSize;

        for (let y = 0; y < height; y++) {
          const index = (y * width + linePos) * 4;
          if (linePos >= 0 && linePos < width) {
            for (let x = lineStart; x < lineEnd; x++) {
              imageData.data.copyWithin(
                (y * width + x) * 4,
                index,
                index + 4
              );
            }
          }
        }
      }

      return callback(true, imageData);
    }

    _clipGlitch(context, value, callback) {
      value /= 100;
      const width = context.canvas.width;
      const height = context.canvas.height;
      const imageData = context.getImageData(0, 0, width, height);

      const pixelsToEnlarge = Math.floor((value / 100) * (width * height));
      for (let i = 0; i < pixelsToEnlarge; i++) {
        const x = Math.floor(Math.random() * width);
        const y = Math.floor(Math.random() * height);
        const index = (y * width + x) * 4;
        const enlargeFactor = 1 + Math.random() * (1.5 + value / 200);
        const blurRadius = Math.floor(enlargeFactor * 4);
  
        for (let offsetY = -blurRadius; offsetY <= blurRadius; offsetY++) {
          for (let offsetX = -blurRadius; offsetX <= blurRadius; offsetX++) {
            const newX = x + offsetX;
            const newY = y + offsetY;
            if (newX >= 0 && newX < width && newY >= 0 && newY < height) {
              imageData.data.copyWithin(
                (newY * width + newX) * 4,
                index,
                index + 4
              );
            }
          }
        }
      }

      return callback(true, imageData);
    }

    _vignette(context, value, _) {
      value /= 100;
      const width = context.canvas.width;
      const centerX = width / 2;
      const centerY = context.canvas.height / 2;
      const maxDist = Math.hypot(centerX, centerY);

      const adjust = (channel, amount) => {
        if (value >= 0) {
          return channel * (1 - amount);
        } else {
          return channel + (255 - channel) * amount;
        }
      };

      return ImageHelper.forEachPixel((pixel, index) => {
        const x = index % width;
        const y = Math.floor(index / width);

        const dist = Math.hypot(x - centerX, y - centerY);
        const factor = dist / maxDist;
        const amount = factor * Math.abs(value);

        return [
          ImageHelper.clamp(0, 255, adjust(pixel[0], amount)),
          ImageHelper.clamp(0, 255, adjust(pixel[1], amount)),
          ImageHelper.clamp(0, 255, adjust(pixel[2], amount)),
          pixel[3],
        ];
      });
    }

    _ripple(context, value, callback) {
      value /= 100;
      const width = context.canvas.width;
      const height = context.canvas.height;
      const imageData = context.getImageData(0, 0, width, height);

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const index = (y * width + x) * 4;
          const dx = x - (width / 2);
          const dy = y - (height / 2);
          const distance = Math.sqrt(dx * dx + dy * dy);
          const offset = Math.sin(distance * value) * value;
          const sourceX = Math.floor(x + offset);
          const sourceY = Math.floor(y);

          if (sourceX >= 0 && sourceX < width && sourceY >= 0 && sourceY < height) {
            const srcIndex = (sourceY * width + sourceX) * 4;
            if (imageData.data[srcIndex + 3] > 0) {
              imageData.data.copyWithin(index, srcIndex, srcIndex + 4);
            }
          } else {
            imageData.data[index + 3] = 0
          }
        }
      }

      return callback(true, imageData);
    }

    _displace(context, value, callback) {
      const dispAmt = Math.max(0, Math.floor(value));
      const width = context.canvas.width;
      const height = context.canvas.height;
      const imageData = context.getImageData(0, 0, width, height);
      const newData = new Uint8ClampedArray(imageData.data.length);

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const srcX = x + Math.floor(Math.random() * dispAmt * 2 - dispAmt);
          const srcY = y + Math.floor(Math.random() * dispAmt * 2 - dispAmt);

          if (srcX >= 0 && srcX < width && srcY >= 0 && srcY < height) {
            const srcIndex = (srcY * width + srcX) * 4;
            const dstIndex = (y * width + x) * 4;
            newData.set(
              imageData.data.subarray(srcIndex, srcIndex + 4),
              dstIndex
            );
          }
        }
      }
    
      imageData.data.set(newData);
      return callback(true, imageData);
    }

    _posterize(_, value) {
      const numLevels = Math.max(value / 10, 1) - 1;
      return ImageHelper.forEachPixel((pixel) => {
        return [
          Math.round((pixel[0] * numLevels) / 255) * (255 / numLevels),
          Math.round((pixel[1] * numLevels) / 255) * (255 / numLevels),
          Math.round((pixel[2] * numLevels) / 255) * (255 / numLevels),
          pixel[3],
        ];
      });
    }

    _blur(context, value, callback) {
      context.filter = `blur(${value}px)`;
      return callback(false);
    }

    _sepia(context, value, callback) {
      context.filter = `sepia(${value}%)`;
      return callback(false);
    }

    _scanline(context, value) {
      const lineBrightness = [];

      return ImageHelper.forEachPixel((pixel, index) => {
        const y = Math.floor((index * 4) / context.canvas.width);

        if (lineBrightness[y] === undefined) {
          lineBrightness[y] =
            Math.random() < value / 100
              ? Math.random() * (value / 2)
              : 0;
        }

        const bright = lineBrightness[y];
        return [
          Math.min(pixel[0] + bright, 255),
          Math.min(pixel[1] + bright, 255),
          Math.min(pixel[2] + bright, 255),
          pixel[3],
        ];
      });
    }

    _grain(_, value) {
      return ImageHelper.forEachPixel((pixel) => {
        if (Math.random() < value / 100) {
          const grain = Math.random() * value;
          return [
            Math.min(pixel[0] + grain, 255),
            Math.min(pixel[1] + grain, 255),
            Math.min(pixel[2] + grain, 255),
            pixel[3],
          ];
        }

        return pixel;
      });
    }

    _cubism(context, value, callback) {
      const blockSize = Math.max(1, Math.floor(Math.abs(value)));
      const width = context.canvas.width;
      const height = context.canvas.height;
      const imageData = context.getImageData(0, 0, width, height);
      const data = imageData.data;

      for (let y = 0; y < height; y += blockSize) {
        for (let x = 0; x < width; x += blockSize) {
          const endX = Math.min(x + blockSize, width);
          const endY = Math.min(y + blockSize, height);

          let r = 0;
          let g = 0;
          let b = 0;
          let count = 0;
          for (let yy = y; yy < endY; yy++) {
            for (let xx = x; xx < endX; xx++) {
              const index = (yy * width + xx) * 4;
              r += data[index];
              g += data[index + 1];
              b += data[index + 2];
              count++;
            }
          }

          r /= count;
          g /= count;
          b /= count;
          for (let yy = y; yy < endY; yy++) {
            for (let xx = x; xx < endX; xx++) {
              const index = (yy * width + xx) * 4;
              data[index] = r;
              data[index + 1] = g;
              data[index + 2] = b;
            }
          }
        }
      }

      return callback(true, imageData);
    }

    _bulge(context, strength, centerX, centerY) {
      const width = context.canvas.width;
      const height = context.canvas.height;

      const imageData = context.getImageData(0, 0, width, height);
      const data = imageData.data;
      const output = new Uint8ClampedArray(data.length);

      const cx = width * (centerX * 0.5 + 0.5);
      const cy = height * (0.5 - centerY * 0.5);
      const radius = Math.max(width, height) * 0.5;
      const radiusSq = radius * radius;
      for (let y = 0; y < height; y++) {
        const dy = y - cy;

        for (let x = 0; x < width; x++) {
          const dx = x - cx;
          const distSq = dx * dx + dy * dy;

          let srcX = x;
          let srcY = y;
          if (distSq < radiusSq) {
            const dist = Math.sqrt(distSq) / radius;
            const scale = Math.pow(dist, 1 - strength);

            srcX = Math.round(cx + dx * scale);
            srcY = Math.round(cy + dy * scale);
          }

          if (
            srcX >= 0 && srcX < width &&
            srcY >= 0 && srcY < height
          ) {
            const s = (srcY * width + srcX) * 4;
            const d = (y * width + x) * 4;
              
            output[d] = data[s];
            output[d + 1] = data[s + 1];
            output[d + 2] = data[s + 2];
            output[d + 3] = data[s + 3];
          }
        }
      }

      imageData.data.set(output);
      return imageData;
    }

    _wave(context, ampX, ampY, freqX, freqY) {
      const width = context.canvas.width;
      const height = context.canvas.height;

      const imageData = context.getImageData(0, 0, width, height);
      const data = imageData.data;
      const output = new Uint8ClampedArray(data.length);
      for (let y = 0; y < height; y++) {
        const waveX = Math.round(ampX * Math.sin(y * freqX));

        for (let x = 0; x < width; x++) {
          const waveY = Math.round(ampY * Math.sin(x * freqY));
          const sx = x + waveX;
          const sy = y + waveY;

          if (
            sx >= 0 && sx < width &&
            sy >= 0 && sy < height
          ) {
            const s = (sy * width + sx) * 4;
            const d = (y * width + x) * 4;

            output[d] = data[s];
            output[d + 1] = data[s + 1];
            output[d + 2] = data[s + 2];
            output[d + 3] = data[s + 3];
          }
        }
      }

      imageData.data.set(output);
      return imageData;
    }

    _lineGlitch(context, amount, lineWidth, axis) {
      const width = context.canvas.width;
      const height = context.canvas.height;

      const imageData = context.getImageData(0, 0, width, height);
      const data = imageData.data;

      const horizontal = axis === "x";
      const axisSize = horizontal ? height : width;
      const count = Math.floor(axisSize * amount);
      for (let i = 0; i < count; i++) {
        const line = Math.floor(Math.random() * axisSize);
        const start = Math.max(0, line - (lineWidth >> 1));
        const end = Math.min(axisSize, start + lineWidth);

        if (horizontal) {
          const src = line * width * 4;
          for (let y = start; y < end; y++) {
            data.copyWithin(
              y * width * 4,
              src,
              src + width * 4
            );
          }
        } else {
          for (let y = 0; y < height; y++) {
            const src = (y * width + line) * 4;

            for (let x = start; x < end; x++) {
              data.copyWithin(
                (y * width + x) * 4,
                src,
                src + 4
              );
            }
          }
        }
      }

      return imageData;
    }

    _aberration(context, amount, color1, color2, axis) {
      const width = context.canvas.width;
      const height = context.canvas.height;

      const imageData = context.getImageData(0, 0, width, height);
      const data = imageData.data;

      const left = new Uint8ClampedArray(data.length);
      const right = new Uint8ClampedArray(data.length);
      const offset = Math.round(
        (axis === "x" ? width : height) * 0.5 * amount
      );

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const i = (y * width + x) * 4;

          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          const a = data[i + 3];

          let lx = x;
          let ly = y;
          let rx = x;
          let ry = y;

          if (axis === "x") {
            lx += offset;
            rx -= offset;
          } else {
            ly += offset;
            ry -= offset;
          }

          lx = ImageHelper.clamp(0, width - 1, lx);
          ly = ImageHelper.clamp(0, height - 1, ly);
          rx = ImageHelper.clamp(0, width - 1, rx);
          ry = ImageHelper.clamp(0, height - 1, ry);

          const li = (ly * width + lx) * 4;
          const ri = (ry * width + rx) * 4;

          left[li] = r * color1[0] / 255;
          left[li + 1] = g * color1[1] / 255;
          left[li + 2] = b * color1[2] / 255;
          left[li + 3] = a;

          right[ri] = r * color2[0] / 255;
          right[ri + 1] = g * color2[1] / 255;
          right[ri + 2] = b * color2[2] / 255;
          right[ri + 3] = a;
        }
      }

      for (let i = 0; i < data.length; i++) {
        data[i] = ImageHelper.clamp(
          0,
          255,
          (data[i] + left[i] + right[i]) / 2
        );
      }

      return imageData;
    }

    // Block Funcs
    async applyHueEffect(args) {
      const rgba = ImageHelper.hexToRgba(args.COLOR);
      const image = await ImageHelper.newImage(args.SVG);
      if (!image) return "Invalid image";

      ImageHelper.prepCanvas(image);
      return ImageHelper.forEachPixel((pixel) => [
        Math.min(255, (pixel[0] * rgba[0]) / 255),
        Math.min(255, (pixel[1] * rgba[1]) / 255),
        Math.min(255, (pixel[2] * rgba[2]) / 255),
        Math.min(255, (pixel[3] * rgba[3]) / 255)
      ]);
    }

    deleteColor(args) {
      return this.replaceColor({ ...args, REPLACE: "#00000000" })
    }

    async replaceColor(args) {
      const targetRgba = ImageHelper.hexToRgba(args.COLOR);
      const replaceRgba = ImageHelper.hexToRgba(args.REPLACE);

      const image = await ImageHelper.newImage(args.DATA_URI);
      if (!image) return "Invalid image";

      ImageHelper.prepCanvas(image);
      return ImageHelper.forEachPixel((pixel) =>
        this._colorInRange(pixel, targetRgba) ? replaceRgba : pixel
      );
    }

    async replaceColorPattern(args) {
      const targetRgba = ImageHelper.hexToRgba(args.COLOR);
      const tileSize = Math.max(1, Cast.toNumber(args.SCALE));

      const image = await ImageHelper.newImage(args.DATA_URI);
      const pattern = await ImageHelper.newImage(args.PATTERN);
      if (!image || !pattern) return "Invalid image";

      ImageHelper.prepCanvas(image);
      const { width, height } = image;
      const imageData = ImageHelper.context.getImageData(0, 0, width, height);
      const modified = new ImageData(
        new Uint8ClampedArray(imageData.data),
        width,
        height
      );

      const mask = new ImageData(width, height);
      for (let i = 0; i < imageData.data.length; i += 4) {
        const rgb = [
          imageData.data[i],
          imageData.data[i + 1],
          imageData.data[i + 2],
        ];

        if (this._colorInRange(rgb, targetRgba)) {
          modified.data[i + 3] = 0;
          mask.data[i] = 255;
          mask.data[i + 1] = 255;
          mask.data[i + 2] = 255;
          mask.data[i + 3] = 255;
        }
      }

      const maskContext = ImageHelper.newTempCanvas(width, height);
      maskContext.ctx.putImageData(mask, 0, 0);

      const {
        canvas: patternCanvas,
        ctx: patternCtx,
        dispose: disposePatternCanvas,
      } = ImageHelper.newTempCanvas(width, height);

      const scale = tileSize / Math.max(pattern.width, pattern.height);
      const drawWidth = Math.round(pattern.width * scale);
      const drawHeight = Math.round(pattern.height * scale);
      for (let y = 0; y < height; y += drawHeight) {
        for (let x = 0; x < width; x += drawWidth) {
          patternCtx.drawImage(pattern, x, y, drawWidth, drawHeight);
        }
      }

      ImageHelper.context.putImageData(modified, 0, 0);
      patternCtx.globalCompositeOperation = "destination-in";
      patternCtx.drawImage(maskContext.canvas, 0, 0);
      patternCtx.globalCompositeOperation = "source-over";
      ImageHelper.context.drawImage(patternCanvas, 0, 0);

      maskContext.dispose();
      disposePatternCanvas();
      return ImageHelper.canvas.toDataURL("image/png");
    }

    setSoftness(args) {
      this.colorThreshold = Math.max(0, Cast.toNumber(args.AMT));
    }

    async applyEffect(args) {
      const effect = Cast.toString(args.EFFECT).toLowerCase();
      const value = Cast.toNumber(args.PERCENTAGE);
      const image = await ImageHelper.newImage(args.SVG);
      if (!image) return "Invalid image";

      const { canvas, context } = ImageHelper.getHelper();
      ImageHelper.prepCanvas(image);

      const callback = (pixelsAltered, imageData) => {
        if (pixelsAltered) context.putImageData(imageData, 0, 0);
        else {
          context.clearRect(0, 0, canvas.width, canvas.height);
          context.drawImage(image, 0, 0, image.width, image.height);
        }

        return canvas.toDataURL("image/png");
      };

      switch (effect) {
        case "saturation":
          return this._saturate(context, value, callback);
        case "contrast":
          return this._contrast(context, value, callback);
        case "opaque":
          return this._opaque(context, value, callback);
        case "glitch":
          return this._glitch(context, value, callback);
        case "chunk glitch":
          return this._chunkGlitch(context, value, callback);
        case "clip glitch":
          return this._clipGlitch(context, value, callback);
        case "vignette":
          return this._vignette(context, value, callback);
        case "ripple":
          return this._ripple(context, value, callback);
        case "displacement":
          return this._displace(context, value, callback);
        case "posterize":
          return this._posterize(context, value, callback);
        case "blur":
          return this._blur(context, value, callback);
        case "sepia":
          return this._sepia(context, value, callback);
        case "scanlines":
          return this._scanline(context, value, callback);
        case "grain":
          return this._grain(context, value, callback);
        case "cubism":
          return this._cubism(context, value, callback);
        default:
          return "";
      }
    }

    async applyBulgeEffect(args) {
      const image = await ImageHelper.newImage(args.SVG);
      if (!image) return "Invalid image";

      const strength = 1 - (Cast.toNumber(args.STRENGTH) / 100);
      const centerX = Cast.toNumber(args.CENTER_X) / 100;
      const centerY = Cast.toNumber(args.CENTER_Y) / 100;

      const { canvas, context } = ImageHelper.getHelper();
      ImageHelper.prepCanvas(image);

      const canvasSize = Math.max(image.width, image.height) * 2;
      canvas.width = canvasSize;
      canvas.height = canvasSize;
      context.drawImage(
        image,
        (canvasSize - image.width) / 2,
        (canvasSize - image.height) / 2
      );

      const newImageData = this._bulge(context, strength, centerX, centerY);
      context.putImageData(newImageData, 0, 0);
      return canvas.toDataURL("image/png");
    }

    async applyWaveEffect(args) {
      const image = await ImageHelper.newImage(args.SVG);
      if (!image) return "Invalid image";

      const ampX = Cast.toNumber(args.AMPX) / 10;
      const ampY = Cast.toNumber(args.AMPY) / 10;
      const freqX = Cast.toNumber(args.FREQX) / 100;
      const freqY = Cast.toNumber(args.FREQY) / 100;

      const { canvas, context } = ImageHelper.getHelper();
      ImageHelper.prepCanvas(image);

      const newImageData = this._wave(context, ampX, ampY, freqX, freqY);
      context.putImageData(newImageData, 0, 0);
      return canvas.toDataURL("image/png");
    }

    async applyLineGlitchEffect(args) {
      const image = await ImageHelper.newImage(args.SVG);
      if (!image) return "Invalid image";

      const value = Cast.toNumber(args.PERCENTAGE) / 100;
      const width = Math.max(1, Math.round(Cast.toNumber(args.WIDTH)));
      const axis = Cast.toString(args.DIRECT).toLowerCase();

      const { canvas, context } = ImageHelper.getHelper();
      ImageHelper.prepCanvas(image);

      const newImageData = this._lineGlitch(context, value, width, axis);
      context.putImageData(newImageData, 0, 0);
      return canvas.toDataURL("image/png");
    }

    async applyAbberationEffect(args) {
      const image = await ImageHelper.newImage(args.SVG);
      if (!image) return "Invalid image";

      const color1 = ImageHelper.hexToRgba(args.COLOR1);
      const color2 = ImageHelper.hexToRgba(args.COLOR2);
      const axis = Cast.toString(args.DIRECT).toLowerCase();
      const amount = Cast.toNumber(args.PERCENTAGE) / 100;

      const { canvas, context } = ImageHelper.getHelper();
      ImageHelper.prepCanvas(image);

      const newImageData = this._aberration(
        context,
        amount,
        color1,
        color2,
        axis
      );
      context.putImageData(newImageData, 0, 0);
      return canvas.toDataURL("image/png");
    }

    async removeTransparencyEffect(args) {
      const image = await ImageHelper.newImage(args.SVG);
      if (!image) return "Invalid image";

      const threshold = Cast.toNumber(args.THRESHOLD) / 100;
      const type = Cast.toString(args.REMOVE).toLowerCase();

      ImageHelper.prepCanvas(image);
      return ImageHelper.forEachPixel((pixel) => {
        const alpha = pixel[3] / 255;
        if (
          (type === "under" && alpha < threshold) ||
          (type === "over" && alpha > threshold) ||
          (type === "equal to" && Math.abs(alpha - threshold) < 0.01)
        ) {
          pixel[3] = 0;
        }

        return pixel;
      });
    }

    async applyEdgeOutlineEffect(args) {
      const image = await ImageHelper.newImage(args.SVG);
      if (!image) return "Invalid image";

      const rgba = ImageHelper.hexToRgba(args.COLOR);
      const thickness = Math.ceil(Cast.toNumber(args.THICKNESS) / 4);

      const { canvas, context } = ImageHelper.getHelper();
      ImageHelper.prepCanvas(image);

      const newImageData = this._outline(context, thickness, rgba);
      context.putImageData(newImageData, 0, 0);
      return canvas.toDataURL("image/png");
    }

    _outline(context, thickness, rgba) {
      const width = context.canvas.width;
      const height = context.canvas.height;

      const imageData = context.getImageData(0, 0, width, height);
      const data = imageData.data;
      const original = new Uint8ClampedArray(data);
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const index = (y * width + x) * 4;
          if (original[index + 3] > 150) continue; // skip pixels near full opaque

          let found = false;
          for (let dy = -thickness; dy <= thickness && !found; dy++) {
            const ny = y + dy;
            if (ny < 0 || ny >= height) continue;

            for (let dx = -thickness; dx <= thickness; dx++) {
              const nx = x + dx;
              if (nx < 0 || nx >= width) continue;

              const n = (ny * width + nx) * 4;

              if (original[n + 3] > original[index + 3]) {
                data[index] = rgba[0];
                data[index + 1] = rgba[1];
                data[index + 2] = rgba[2];
                data[index + 3] = rgba[3];
                found = true;
                break;
              }
            }
          }
        }
      }

      return imageData;
    }

    // TODO
    async maskImage(args) {
      return new Promise((resolve) => {
        const srcImg = new Image();
        srcImg.crossOrigin = "Anonymous";
        srcImg.onload = () => {
          const maskImg = new Image();
          maskImg.crossOrigin = "Anonymous";
          maskImg.onload = () => {
            const scaleW = maskImg.width * (this.scale[0] / 50);
            const scaleH = maskImg.height * (this.scale[1] / 50);
            const cutX = this.cutPos[0] + (srcImg.width / 2) - (scaleW / 2);
            const cutY = this.cutPos[1] - (srcImg.height / 2) + (scaleH / 2);
            const { canvas, ctx } = this.createCanvasCtx(srcImg.width, srcImg.height);
            ctx.drawImage(srcImg, 0, 0);
            if (args.TYPE === "clip") ctx.globalCompositeOperation = "destination-in";
            else if (args.TYPE === "mask") ctx.globalCompositeOperation = "destination-out";
            ctx.translate(cutX + scaleW / 2, cutY * -1 + scaleH / 2);
            ctx.rotate((this.cutoutDirection - 90) * (Math.PI / 180));
            ctx.drawImage(maskImg, scaleW / -2, scaleH / -2, scaleW, scaleH);
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            if (args.TYPE === "clip") ctx.globalCompositeOperation = "source-over";
            resolve(canvas.toDataURL("image/png"));
          };
          maskImg.src = this.convertAsset(args.MASK, "png");
        };
        srcImg.src = this.convertAsset(args.IMG, "png");
      });
    }

    setCutout(args) {
      this.mask.pos[0] = Cast.toNumber(args.X);
      this.mask.pos[1] = Cast.toNumber(args.Y);
    }

    changeCutout(args) {
      this.mask.pos[0] += Cast.toNumber(args.X);
      this.mask.pos[1] += Cast.toNumber(args.Y);
    }

    currentCut(args) {
      const option = Cast.toString(args.POS).toLowerCase();
      return this.mask.pos[option === "x" ? 0 : 1];
    }

    setScale(args) {
      this.mask.scale[0] = Cast.toNumber(args.SIZE);
      this.mask.scale[1] = Cast.toNumber(args.Y);
    }

    changeScale(args) {
      this.mask.scale[0] += Cast.toNumber(args.SIZE);
      this.mask.scale[1] += Cast.toNumber(args.Y);
    }

    currentScale(args) {
      const option = Cast.toString(args.POS).toLowerCase();
      return this.mask.scale[option === "x" ? 0 : 1];
    }

    setDirection(args) {
      this.mask.direction = Cast.toNumber(args.ANGLE);
    }

    changeDirection(args) {
      this.mask.direction += Cast.toNumber(args.ANGLE);
    }

    currentDir() {
      return this.mask.direction;
    }

    // TODO
    async crackImage(args) {
      const cracks = Math.max(2, args.SHARDS);
      const img = new Image();
      img.src = this.convertAsset(args.URI, "png");
      const newWidth = img.width * 4;
      const newHeight = img.height * 4;
      this.allShards = [];
      return new Promise((resolve) => {
        img.crossOrigin = "Anonymous";
        img.onload = () => {
          for (let i = 0; i < cracks; i++) {
            if (this.allShards.length >= args.SHARDS) break;
            for (let j = 0; j < cracks; j++) {
              if (this.allShards.length >= args.SHARDS) break;
              const shardWidth = newWidth / cracks;
              const shardHeight = newHeight / cracks;
              const { canvas, ctx } = this.createCanvasCtx(shardWidth, shardHeight);
              ctx.clearRect(0, 0, shardWidth, shardHeight);
              ctx.beginPath();
              ctx.moveTo(Math.random() * shardWidth, Math.random() * shardHeight);
              for (let k = 0; k < Math.random() * 10 + 3; k++) {
                ctx.lineTo(Math.random() * shardWidth, Math.random() * shardHeight);
              }
              ctx.closePath();
              ctx.clip();
              const offsetX = Math.random() * (newWidth - shardWidth);
              const offsetY = Math.random() * (newHeight - shardHeight);
              ctx.drawImage(img, -offsetX, -offsetY, newWidth, newHeight);
              this.allShards.push(this.exportImg(canvas, this.printImg(canvas)));
            }
          }
          resolve();
        };
      });
    }

    getShard(args) {
      return this.shardPieces[Cast.toNumber(args.SHARD) - 1] || "";
    }

    async commonCol(args) {
      const image = await ImageHelper.newImage(args.URI);
      if (!image) return "Invalid image";

      const options = { dontSetCanvas: true };
      const pixelMap = {};
      ImageHelper.prepCanvas(image);
      ImageHelper.forEachPixel((pixel) => {
        if (pixel[3] > 0) {
          const key = pixel.toString();
          pixelMap[key] = (pixelMap[key] ?? 0) + 1;
        }

        return pixel;
      }, options);

      const sortedColors = Object.entries(pixelMap)
        .sort((a, b) => a[1] - b[1])
        .map((c) => c[0]);

      const rgba = args.TYPE === "most"
        ? sortedColors[sortedColors.length - 1]
        : sortedColors[0];
      return ImageHelper.rgbaToHex(rgba.split(","));
    }

    async numPixels(args) {
      const image = await ImageHelper.newImage(args.URI);
      if (!image) return "Invalid image";

      switch (Cast.toString(args.TYPE)) {
        case "total":
          return image.width * image.height;
        case "per line":
        case "width":
          return image.width;
        case "per row":
        case "height":
          return image.height;
        default:
          return "";
      }
    }
    
    async getPixel(args) {
      const image = await ImageHelper.newImage(args.URI);
      if (!image) return "Invalid image";

      ImageHelper.prepCanvas(image);
      const imageData = ImageHelper.context.getImageData(0, 0, image.width, image.height);

      const pixel = Cast.toNumber(args.NUM);
      if (pixel >= 1 && pixel <= image.width * image.height) {
        const pixelIndex = (pixel - 1) * 4;
        const rgba = imageData.data.slice(pixelIndex, pixelIndex + 4);
        return ImageHelper.rgbaToHex(rgba);
      }

      return "#000000";
    }

    async setPixel(args) {
      return await this.setPixels(args);
    }
    async setPixels(args) {
      const image = await ImageHelper.newImage(args.URI);
      if (!image) return "Invalid image";

      ImageHelper.prepCanvas(image);
      const imageData = ImageHelper.context.getImageData(0, 0, image.width, image.height);

      const rgba = ImageHelper.hexToRgba(args.COLOR);
      const start = (Cast.toNumber(args.NUM) - 1) * 4;
      const end = (args.NUM2 === undefined ? start : Cast.toNumber(args.NUM2) * 4) + 4;
      const options = { start, end };

      return ImageHelper.forEachPixel((pixel) => rgba, options);
    }

    // TODO
    stretch(src, w, h) {
      return new Promise((resolve) => {
        const img = new Image();
        img.crossOrigin = "Anonymous";
        img.onload = () => {
          resolve(this.exportImg(img, this.printImg(img, w, h), w, h));
        };
        img.src = src;
      });
    }
    svgToBitmap(args) {
      return this.stretch(this.convertAsset(args.SVG, "png"),Cast.toNumber(args.WIDTH), Cast.toNumber(args.HEIGHT));
    }
    stretchImg(args) {
      return this.stretch(this.convertAsset(args.URI, "png"), Cast.toNumber(args.W), Cast.toNumber(args.H));
    }

    convertImageToSVG(args) {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = this.convertAsset(args.URI, "png");
        img.crossOrigin = "Anonymous";
        img.onload = () => {
          const ctx = this.createCanvasCtx(img.width, img.height, img).ctx;
          ctx.drawImage(img, 0, 0, img.width, img.height);
          const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
          svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
          svg.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
          svg.setAttribute("width", img.width.toFixed(5));
          svg.setAttribute("height", img.height.toFixed(5));
          svg.setAttribute("viewBox", `0,0,${img.width.toFixed(5)},${img.height.toFixed(5)}`);
          const mergedColors = new Map();
          for (let y = 0; y < img.height; y++) {
            for (let x = 0; x < img.width; x++) {
              const colorData = ctx.getImageData(x, y, 1, 1).data;
              if (colorData[3] === 0) continue;
              const color = `rgb(${colorData[0]}, ${colorData[1]}, ${colorData[2]})`;
              const pixelColor = ctx.getImageData(x + 1, y, 1, 1).data;
              if (color === `rgb(${pixelColor[0]}, ${pixelColor[1]}, ${pixelColor[2]})`) {
                const mergedPixel = mergedColors.get(color) || {x1: x, y1: y, x2: x + 1, y2: y};
                mergedPixel.x2++;
                mergedColors.set(color, mergedPixel);
              } else {
                mergedColors.forEach((mergedPixel, colorKey) => {
                  const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                  rect.setAttribute("x", mergedPixel.x1.toFixed(5));
                  rect.setAttribute("y", mergedPixel.y1.toFixed(5));
                  rect.setAttribute("width", (mergedPixel.x2 - mergedPixel.x1 + 1).toFixed(5));
                  rect.setAttribute("height", (mergedPixel.y2 - mergedPixel.y1 + 1).toFixed(5));
                  rect.setAttribute("fill", colorKey);
                  svg.appendChild(rect);
                });
                mergedColors.clear();
              }
            }
          }
          let svgString = new XMLSerializer().serializeToString(svg);
          if (args.TYPE === "dataURI") svgString = `data:image/svg+xml;base64,${btoa(svgString)}`;
          resolve(svgString);
        };
      });
    }

    async makeSVGimage(args) {
      if (args.URI.startsWith("data:image/")) {
        return await new Promise((resolve) => {
          // eslint-disable-next-line
          const img = new Image();
          img.crossOrigin = "Anonymous";
          img.onload = () => {
            const { width, height } = img;
            const svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
              width="${width / 2}" height="${(height / 2) + 0.001}" viewBox="0,0,${width / 2},${(height / 2) + 0.001}">
              <g transform="translate(${img.offsetLeft / -2},${img.offsetTop / -2})">
              <image x="0" y="0" transform="scale(0.5,0.5)" width="${width}" height="${height + 0.002}" 
              xlink:href="${img.src}"/></g></svg>`;
            resolve(args.TYPE === "dataURI" ? `data:image/svg+xml;base64,${btoa(svg)}` : svg);
          };
          img.src = this.convertAsset(args.URI, "png");
        });
      } else { return args.URI }
    }

    upscaleImage(args) {
      return new Promise((resolve) => {
        const img = new Image();
        img.crossOrigin = "Anonymous";
        img.onload = () => {
          const pixelData = this.printImg(img);
          const ctx = this.createCanvasCtx(img.width, img.height).ctx;
          ctx.putImageData(new ImageData(new Uint8ClampedArray(pixelData), img.width, img.height), 0, 0);
          const factor = Cast.toNumber(args.NUM) / 10;
          const weights = [0, -factor, 0, -factor, 1 + 4 * factor, -factor, 0, -factor, 0];
          this.sharpen(ctx, img.width, img.height, weights, 25);
          resolve(this.exportImg(img, ctx.getImageData(0, 0, img.width, img.height).data));
        };
        img.src = this.convertAsset(args.URI, "png");
      });
    }
    sharpen(ctx, width, height, weights, alphaThreshold) {
      const data = ctx.getImageData(0, 0, width, height).data;
      const side = Math.round(Math.sqrt(weights.length));
      const halfSide = Math.floor(side / 2);
      const output = ctx.createImageData(width, height);
      const outData = output.data;
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const pixelIndex = (y * width + x) * 4;
          let r = 0, g = 0, b = 0;
          for (let ky = 0; ky < side; ky++) {
            for (let kx = 0; kx < side; kx++) {
              const weight = weights[ky * side + kx];
              const neighborY = this.clamp(y + ky - halfSide, 0, height - 1);
              const neighborX = this.clamp(x + kx - halfSide, 0, width - 1);
              const neighborPixel = (neighborY * width + neighborX) * 4;
              r += data[neighborPixel] * weight;
              g += data[neighborPixel + 1] * weight;
              b += data[neighborPixel + 2] * weight;
            }
          }
          if (data[pixelIndex + 3] / 255 > alphaThreshold / 50) {
            outData[pixelIndex] = this.clamp(r, 0, 255);
            outData[pixelIndex + 1] = this.clamp(g, 0, 255);
            outData[pixelIndex + 2] = this.clamp(b, 0, 255);
            outData[pixelIndex + 3] = 255;
          } else { outData[pixelIndex + 3] = 0 }
        }
      }
      ctx.putImageData(output, 0, 0);
    }

    skewSVG(args) {
      let svg = this.updateView(args.SVG, Math.abs(args.X) + Math.abs(args.Y));
      const widthMatch = /width="([^"]*)"/.exec(svg);
      const heightMatch = /height="([^"]*)"/.exec(svg);
      if (widthMatch && heightMatch) {
        const width = parseFloat(widthMatch[1]);
        const height = parseFloat(heightMatch[1]);
        let transform = "";
        if (svg.includes("style=\"transform-origin: center; transform:")) svg = svg.replace(/(style="[^"]*transform:[^"]*)/, `$1 skew(${args.Y}deg, ${args.X}deg)`);
        else svg = svg.replace(`width="${width}" height="${height}"`, `width="${width}" height="${height}" style="transform-origin: center; transform: skew(${args.Y}deg, ${args.X}deg)"`);
        const curTransform = /transform="([^"]*)"/.exec(svg);
        const oldTransform = curTransform ? curTransform[1] : "";
        const newTransform = oldTransform ? `${oldTransform} ${transform}` : transform;
        svg = svg.replace(/transform="([^"]*)"/, `transform="${newTransform}"`);
        if (args.TYPE === "dataURI") svg = `data:image/svg+xml;base64,${btoa(svg)}`;
      }
      return svg;
    }
    updateView(svg, amt) {
      let values;
      const viewBoxMatch = svg.match(/viewBox="([^"]+)"/);
      let viewBoxValues = -1;
      if (viewBoxMatch) viewBoxValues = viewBoxMatch[1].split(/\s*,\s*/).map(parseFloat);
      const translateMatch = svg.match(/<g transform="translate\((-?[\d.]+),(-?[\d.]+)\)/);
      let translateValues = -1;
      if (translateMatch) translateValues = [parseFloat(translateMatch[1]), parseFloat(translateMatch[2])];
      values = `${viewBoxValues},${translateValues}`;
      values = values.split(",");
      values = values.map(item => Cast.toNumber(item));
      amt = Cast.toNumber(amt);
      if (values.length > 3) {
        svg = svg.replace(/viewBox="([^"]+)"/, `viewBox="${values[0]},${values[1]},${values[2] + (amt * 2)},${values[3] + (amt * 2)}"`);
        svg = svg.replace(/width="([^"]+)"/, `width="${values[2] + (amt * 2)}"`);
        svg = svg.replace(/height="([^"]+)"/, `height="${values[3] + (amt * 2)}"`);
        svg = svg.replace(/<g transform="([^"]+)"/, `<g transform="translate(${values[4] + amt},${values[5] + amt})"`);
      }
      return svg;
    }

    removeThorns(args) {
      return Cast.toString(args.SVG).replaceAll(`linejoin="miter"`, `linejoin="round"`);
    }

    audioToImage(args) {
      const audioURI = args.AUDIO_URI;
      const imageWidth = Math.abs(Cast.toString(args.W));
      const { canvas, ctx } = this.createCanvasCtx(imageWidth, Math.abs(Cast.toString(args.H)));
      for (let i = 0; i < audioURI.length; i++) {
        const charCode = audioURI.charCodeAt(i);
        ctx.fillStyle = `rgb(${(charCode * 2) % 256},${(charCode * 3) % 256},${(charCode * 4) % 256})`;
        ctx.fillRect(i % imageWidth, Math.floor(i / imageWidth), 1, 1);
      }
      return canvas.toDataURL("image/png");
    }

    /* Deprecation Marker */
    convertHexToRGB() {return ""}
    clipImage(){return "use new masking block"}
    overlayImage(){return "use new masking block"}
    /* Marker End */
  }

  Scratch.extensions.register(new imgEffectsSP());
})(Scratch);
