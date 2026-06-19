// Name: Image Editor
// ID: SPimgEditor
// Description: Create and modify images and their pixel data.
// By: SharkPool
// License: MIT

// Version V.1.2.01

(function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) throw new Error("Image Editor must run unsandboxed!");

  const menuIconURI =
"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4NC45NzUiIGhlaWdodD0iODQuOTc1IiB2aWV3Qm94PSIwIDAgODQuOTc1IDg0Ljk3NSI+PGcgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiPjxwYXRoIGQ9Ik0wIDQyLjQ4OEMwIDE5LjAyMyAxOS4wMjMgMCA0Mi40ODggMHM0Mi40ODggMTkuMDIzIDQyLjQ4OCA0Mi40ODgtMTkuMDIzIDQyLjQ4OC00Mi40ODggNDIuNDg4UzAgNjUuOTUzIDAgNDIuNDg4IiBmaWxsPSIjMzMzZDgwIi8+PHBhdGggZD0iTTUuMjY0IDQyLjQ4OGMwLTIwLjU1OCAxNi42NjYtMzcuMjI0IDM3LjIyNC0zNy4yMjRTNzkuNzEyIDIxLjkzIDc5LjcxMiA0Mi40ODggNjMuMDQ2IDc5LjcxMiA0Mi40ODggNzkuNzEyIDUuMjY0IDYzLjA0NiA1LjI2NCA0Mi40ODgiIGZpbGw9IiM0NzU2YjMiLz48cGF0aCBkPSJtNDguNzY4IDY0Ljk5OC04LjEwNS0yMy4yMjNjLS40MzMtMS4yNC40MDQtMS45OTQgMS42OTMtMS41NDRsMjIuNzUxIDcuOTRjMS44MTguNjM1IDIuMTk0IDEuODA4Ljk3NiAzLjAyNmwtMy4xMyAzLjEzIDMuMjggMy4yOGE0LjI4IDQuMjggMCAwIDEgMCA2LjA1M2wtMi4xMDIgMi4xMDJhNC4yOCA0LjI4IDAgMCAxLTYuMDUzIDBsLTMuMjgtMy4yOC0zLjUwOSAzLjUxYy0uODIuODItMS45Ni42MTQtMi41Mi0uOTk0IiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTI0LjUzNCA2Mi43NDJhMy45NCAzLjk0IDAgMCAxLTQuMjQ1LTMuNjFsLTIuNzg3LTM0LjQ4NWEzLjk0IDMuOTQgMCAwIDEgMy42MTEtNC4yNDZsMzAuMDUzLTIuNDI4YTMuOTQgMy45NCAwIDAgMSA0LjI0NiAzLjYxMWwxLjUwNiAxOC42NDQtNC45NDUtMS43MjYtMS4yMzMtMTUuOTc3LTI4LjYyNCAyLjI5NCAyLjIxMSAyOC42MzQgMTQuNTQyLTEuMTY1IDMuMTU2IDkuMDQxeiIgZmlsbD0iI2ZmZiIvPjwvZz48L3N2Zz4=";

  const Cast = Scratch.Cast;
  const vm = Scratch.vm;
  const runtime = vm.runtime;

  const TO_RAD = Math.PI / 180;
  const TEXTURE_BLEND_MODES = [
    { text: "normal", value: "source-over" },
    { text: "behind", value: "destination-over" },
    { text: "mask in", value: "destination-in" },
    { text: "mask out", value: "destination-out" },
    { text: "light add", value: "lighter" },
    { text: "multiply", value: "multiply" },
    { text: "screen", value: "screen" },
    { text: "overlay", value: "overlay" },
    { text: "darken", value: "darken" },
    { text: "lighten", value: "lighten" },
    { text: "dodge", value: "color-dodge" },
    { text: "burn", value: "color-burn" },
    { text: "hard light", value: "hard-light" },
    { text: "soft light", value: "soft-light" },
    { text: "difference", value: "difference" },
    { text: "exclusion", value: "exclusion" },
    { text: "hue", value: "hue" },
    { text: "saturation", value: "saturation" },
    { text: "color", value: "color" },
    { text: "luminosity", value: "luminosity" }
  ];

  const imageBank = new Map();
  const globalCanvas = document.createElement("canvas");
  const workerCanvas = document.createElement("canvas");
  const globalCtx = globalCanvas.getContext("2d", { alpha: true, willReadFrequently: true });
  const workerCtx = workerCanvas.getContext("2d", { alpha: true, willReadFrequently: true });
  let imagePrintSmoothing = true;
  let textureBlendMode = "source-over";

  const regenReporters = ["SPimgEditor_pixelHex", "SPimgEditor_pixelIndex"];
  if (Scratch.gui) Scratch.gui.getBlockly().then(SB => {
    const ogIsRegenReporter = SB.scratchBlocksUtils.isShadowArgumentReporter;
    SB.scratchBlocksUtils.isShadowArgumentReporter = function (block) {
      const result = ogIsRegenReporter(block);
      if (result) return true;
      return block.isShadow() && regenReporters.includes(block.type);
    };
  });

  class SPimgEditor {
    getInfo() {
      return {
        id: "SPimgEditor",
        name: "Image Editor",
        color1: "#4756b3",
        color2: "#1f254d",
        color3: "#333d80",
        menuIconURI,
        blocks: [
          { blockType: Scratch.BlockType.LABEL, text: "Image Bank" },
          {
            opcode: "makeImg",
            blockType: Scratch.BlockType.COMMAND,
            text: "make new image named [NAME] width [W] height [H] fill [COLOR]",
            arguments: {
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "image-1" },
              W: { type: Scratch.ArgumentType.NUMBER, defaultValue: 100 },
              H: { type: Scratch.ArgumentType.NUMBER, defaultValue: 100 },
              COLOR: { type: Scratch.ArgumentType.COLOR }
            },
          },
          {
            opcode: "makeImgImg",
            blockType: Scratch.BlockType.COMMAND,
            text: "make image named [NAME] from [IMAGE] width [W] height [H] x [x] y [y]",
            arguments: {
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "image-1" },
              IMAGE: { type: Scratch.ArgumentType.STRING, defaultValue: "https://extensions.turbowarp.org/dango.png" },
              W: { type: Scratch.ArgumentType.NUMBER, defaultValue: 100 },
              H: { type: Scratch.ArgumentType.NUMBER, defaultValue: 100 },
              x: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
              y: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 }
            },
          },
          {
            opcode: "imgAtts",
            blockType: Scratch.BlockType.REPORTER,
            text: "[TYPE] of image named [NAME]",
            arguments: {
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "IMG_ATTS" },
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "image-1" }
            },
          },
          {
            opcode: "boxImage",
            blockType: Scratch.BlockType.REPORTER,
            text: "crop image [NAME] width [W] height [H] x [x] y [y]",
            arguments: {
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "image-1" },
              W: { type: Scratch.ArgumentType.NUMBER, defaultValue: 100 },
              H: { type: Scratch.ArgumentType.NUMBER, defaultValue: 100 },
              x: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
              y: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 }
            },
          },
          "---",
          {
            opcode: "allImgs",
            blockType: Scratch.BlockType.REPORTER,
            text: "all images"
          },
          {
            opcode: "imgExists",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "image named [NAME] exists?",
            arguments: { NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "image-1" } },
          },
          {
            opcode: "deleteImg",
            blockType: Scratch.BlockType.COMMAND,
            text: "delete image named [NAME]",
            arguments: { NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "image-1" } },
          },
          {
            opcode: "deleteAllImgs",
            blockType: Scratch.BlockType.COMMAND,
            text: "delete all images"
          },
          { blockType: Scratch.BlockType.LABEL, text: "Image Editing" },
          {
            opcode: "setHex",
            blockType: Scratch.BlockType.COMMAND,
            text: "set pixel # [INDEX] to [COLOR] in image [NAME]",
            arguments: {
              INDEX: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 },
              COLOR: { type: Scratch.ArgumentType.COLOR },
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "image-1" }
            },
          },
          {
            opcode: "getHex",
            blockType: Scratch.BlockType.REPORTER,
            text: "get pixel # [INDEX] in image [NAME]",
            arguments: {
              INDEX: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 },
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "image-1" }
            },
          },
          {
            opcode: "getIndexFromXY",
            blockType: Scratch.BlockType.REPORTER,
            text: "pixel # at x [x] y [y] in image [NAME]",
            arguments: {
              x: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
              y: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "image-1" }
            },
          },
          "---",
          {
            opcode: "modifyImg",
            blockType: Scratch.BlockType.COMMAND,
            text: "[TYPE] image [NAME] to width [W] height [H] fill [COLOR]",
            arguments: {
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "MOD_TYPE" },
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "image-1" },
              W: { type: Scratch.ArgumentType.NUMBER, defaultValue: 200 },
              H: { type: Scratch.ArgumentType.NUMBER, defaultValue: 200 },
              COLOR: { type: Scratch.ArgumentType.COLOR }
            },
          },
          {
            opcode: "rotateImg",
            blockType: Scratch.BlockType.COMMAND,
            text: "point image [NAME] in direction [DIR] fill [COLOR]",
            arguments: {
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "image-1" },
              DIR: { type: Scratch.ArgumentType.ANGLE, defaultValue: 90 },
              COLOR: { type: Scratch.ArgumentType.COLOR }
            },
          },
          "---",
          {
            opcode: "toggleAlias",
            blockType: Scratch.BlockType.COMMAND,
            text: "toggle image smoothing [TOGGLER]",
            arguments: {
              TOGGLER: { type: Scratch.ArgumentType.STRING, menu: "TOGGLERS" }
            },
          },
          {
            opcode: "setTextureBlend",
            blockType: Scratch.BlockType.COMMAND,
            text: "set texture blend mode to [MODE]",
            arguments: {
              MODE: { type: Scratch.ArgumentType.STRING, menu: "BLEND_MODES" }
            },
          },
          {
            opcode: "addTexture",
            blockType: Scratch.BlockType.COMMAND,
            text: "add texture [IMAGE] to image [NAME] at x [x] y [y]",
            arguments: {
              IMAGE: { type: Scratch.ArgumentType.STRING, defaultValue: "https://extensions.turbowarp.org/dango.png" },
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "image-1" },
              x: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
              y: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 }
            },
          },
          "---",
          {
            opcode: "pixelHex", blockType: Scratch.BlockType.REPORTER,
            hideFromPalette: true, text: "hex"
          },
          {
            opcode: "pixelIndex", blockType: Scratch.BlockType.REPORTER,
            hideFromPalette: true, text: "index"
          },
          {
            opcode: "editLoop", blockType: Scratch.BlockType.LOOP,
            hideFromPalette: true,
            text: "for each pixel [PIXEL] [INDEX] in [NAME]",
            arguments: { NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "image-1" }, PIXEL: {}, INDEX: {} },
          },
          {
            opcode: "setPixel", blockType: Scratch.BlockType.COMMAND,
            isTerminal: true, hideFromPalette: true,
            text: "set this pixel to [COLOR]",
            arguments: { COLOR: { type: Scratch.ArgumentType.COLOR } },
          },
          {
            opcode: "onEditCall", blockType: Scratch.BlockType.HAT,
            isEdgeActivated: false, hideFromPalette: true,
            text: "on editor start for [NAME] pixel [PIXEL] [INDEX]",
            arguments: { NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "image-1" }, PIXEL: {}, INDEX: {} },
          },
          { blockType: Scratch.BlockType.XML,
            xml: `
              <block type="SPimgEditor_editLoop">
                <value name="NAME"><shadow type="text"><field name="TEXT">image-1</field></shadow></value>
                <value name="PIXEL"><shadow type="SPimgEditor_pixelHex"></shadow></value>
                <value name="INDEX"><shadow type="SPimgEditor_pixelIndex"></shadow></value>
              </block>
              <sep gap="36"/>
              <block type="SPimgEditor_onEditCall">
                <value name="NAME"><shadow type="text"><field name="TEXT">image-1</field></shadow></value>
                <value name="PIXEL"><shadow type="SPimgEditor_pixelHex"></shadow></value>
                <value name="INDEX"><shadow type="SPimgEditor_pixelIndex"></shadow></value>
                <next><block type="SPimgEditor_setPixel">
                  <value name="COLOR"><shadow type="colour_picker"></shadow></value>
                </block></next>
              </block>`
          },
          {
            opcode: "callImgEdit",
            blockType: Scratch.BlockType.REPORTER,
            text: "start image [NAME] editor",
            arguments: { NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "image-1" } },
          },
        ],
        menus: {
          TOGGLERS: ["on", "off"],
          MOD_TYPE: ["expand", "stretch"],
          BLEND_MODES: {
            acceptReporters: true,
            items: TEXTURE_BLEND_MODES
          },
          IMG_ATTS: {
            acceptReporters: true,
            items: [
              "dataURI",
              "width", "height",
              "pixel count",
              "pixel array"
            ]
          }
        },
      };
    }

    // Helper Funcs
    _newImage(width, height, opt_data) {
      return {
        width, height,
        imageData: null,
        pixels: null,
        dataURI: opt_data ?? "",
        _pixelsChanged: false
      };
    }

    _resizeCanvas(width, height, opt_reset) {
      globalCanvas.width = width;
      globalCanvas.height = height;
      if (opt_reset) globalCtx.clearRect(0, 0, width, height);
      globalCtx.imageSmoothingEnabled = imagePrintSmoothing;
    }

    _resizeWorker(width, height, opt_reset) {
      workerCanvas.width = width;
      workerCanvas.height = height;
      if (opt_reset) workerCtx.clearRect(0, 0, width, height);
      workerCtx.imageSmoothingEnabled = imagePrintSmoothing;
    }

    _prepImageData(image, opt_x, opt_y, opt_width, opt_height) {
      image.imageData = globalCtx.getImageData(
        opt_x ?? 0, opt_y ?? 0,
        opt_width ?? image.width,
        opt_height ?? image.height
      );

      // if individual pixels were edited, we should pre-prepare the pixel list
      if (image.pixels) image.pixels = this._imgToPixels(image);
    }

    _textureHelper(url, callback) {
      if (!url || !(url.startsWith("http") || url.startsWith("data:image/"))) return;

      return new Promise((resolve) => {
        const texture = new Image();
        texture.crossOrigin = "Anonymous";
        texture.onload = () => {
          try {
            callback(texture);
            resolve();
          } catch (e) {
            console.warn(e);
            resolve();
          }
        };
        texture.onerror = (e) => {
          console.warn(e);
          resolve();
        };
        texture.src = url;
      });
    }

    _parseHex(hex) {
      if (/^#[0-9A-F]{6}[0-9a-f]{0,2}$/i.test(hex)) return hex;
      else return "#000000";
    }

    _imgToPixels(storedImg) {
      const data = storedImg.imageData.data;
      const pixelData = [];
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const a = data[i + 3];

        const rgb = "#" + ((r << 16) | (g << 8) | b).toString(16).padStart(6, "0");
        const alpha = a.toString(16).padStart(2, "0");
        pixelData.push(rgb + alpha);
      }

      return pixelData;
    }

    _pixelsToURI(storedImg) {
      const imageData = globalCtx.createImageData(storedImg.width, storedImg.height);
      const data = imageData.data;
      const pixels = storedImg.pixels;
      for (let i = 0; i < pixels.length; i++) {
        const hex = pixels[i];
        const idx = i * 4;

        data[idx] = parseInt(hex.substring(1, 3), 16);
        data[idx + 1] = parseInt(hex.substring(3, 5), 16);
        data[idx + 2] = parseInt(hex.substring(5, 7), 16);
        data[idx + 3] = hex.length === 9 ? parseInt(hex.substring(7, 9), 16) : 255;
      }

      globalCtx.putImageData(imageData, 0, 0);
      return globalCanvas.toDataURL();
    }

    _startEditors(data) {
      const threads = [];
      runtime.allScriptsByOpcodeDo("SPimgEditor_onEditCall", (script, target) => {
        const allBlocks = script.container._blocks;
        let startBlockId = script.blockId;

        const editorHatBlock = allBlocks[startBlockId];
        const nameBlock = allBlocks[editorHatBlock.inputs.NAME.block];
        if (nameBlock.opcode === "text") {
          // we can read a raw value, thus we can run the block as an event
          const editorName = nameBlock.fields.TEXT.value;
          if (editorName === data.name) startBlockId = editorHatBlock.next;
          if (!startBlockId) return;
        }

        const thread = runtime._pushThread(startBlockId, target);
        thread.stackFrames[0].SPimgData = data;
        threads.push(thread);
      });

      return threads;
    }

    // Block Funcs
    makeImg(args) {
      const width = Math.max(1, Cast.toNumber(args.W));
      const height = Math.max(1, Cast.toNumber(args.H));
      this._resizeCanvas(width, height);

      globalCtx.fillStyle = this._parseHex(args.COLOR);
      globalCtx.fillRect(0, 0, width, height);
      const image = this._newImage(width, height, globalCanvas.toDataURL());
      imageBank.set(args.NAME, image);
      this._prepImageData(image);
    }

    async makeImgImg(args) {
      let width = Cast.toNumber(args.W);
      let height = Cast.toNumber(args.H);

      const flipX = width < 0;
      const flipY = height < 0;
      const x = Cast.toNumber(args.x);
      const y = -Cast.toNumber(args.y);

      await this._textureHelper(args.IMAGE, (texture) => {
        if (width === 0) width = texture.width;
        if (height === 0) height = texture.height;
        const absWidth = Math.abs(width);
        const absHeight = Math.abs(height);

        this._resizeCanvas(absWidth, absHeight, true);
        globalCtx.save();
        globalCtx.translate(flipX ? absWidth : 0, flipY ? absHeight : 0);
        globalCtx.scale(flipX ? -1 : 1, flipY ? -1 : 1);
        globalCtx.drawImage(texture, flipX ? -x : x, flipY ? -y : y, absWidth, absHeight);
        globalCtx.restore();

        const image = this._newImage(absWidth, absHeight, globalCanvas.toDataURL());
        imageBank.set(args.NAME, image);
        this._prepImageData(image);
      });
    }

    imgAtts(args) {
      const storedImg = imageBank.get(args.NAME);
      if (storedImg === undefined) return 0;

      switch (args.TYPE) {
        case "width": return storedImg.width;
        case "height": return storedImg.height;
        case "pixel count": return storedImg.width * storedImg.height;
        case "pixel array": {
          if (storedImg.pixels === null) storedImg.pixels = this._imgToPixels(storedImg);
          return vm.extensionManager._loadedExtensions.has("SPjson")
            ? storedImg.pixels
            : JSON.stringify(storedImg.pixels);
        }
        default: {
          if (storedImg._pixelsChanged) {
            storedImg.dataURI = this._pixelsToURI(storedImg);
            storedImg._pixelsChanged = false;
          }

          return storedImg.dataURI;
        }
      }
    }

    boxImage(args) {
      const storedImg = imageBank.get(args.NAME);
      if (!storedImg) return "";

      const width = Math.max(1, Cast.toNumber(args.W));
      const height = Math.max(1, Cast.toNumber(args.H));
      const centerX = Cast.toNumber(args.x);
      const centerY = -Cast.toNumber(args.y);

      const src = storedImg.imageData.data;
      const srcW = storedImg.width;
      const srcH = storedImg.height;

      const startX = Math.floor(centerX + srcW / 2 - width / 2);
      const startY = Math.floor(centerY + srcH / 2 - height / 2);

      workerCanvas.width = width;
      workerCanvas.height = height;
      const out = workerCtx.createImageData(width, height);
      const outData = out.data;
      for (let y = 0; y < height; y++) {
        const srcY = startY + y;
        if (srcY < 0 || srcY >= srcH) continue;

        for (let x = 0; x < width; x++) {
          const srcX = startX + x;
          if (srcX < 0 || srcX >= srcW) continue;

          const srcIndex = (srcY * srcW + srcX) * 4;
          const dstIndex = (y * width + x) * 4;
          outData[dstIndex] = src[srcIndex];
          outData[dstIndex + 1] = src[srcIndex + 1];
          outData[dstIndex + 2] = src[srcIndex + 2];
          outData[dstIndex + 3] = src[srcIndex + 3];
        }
      }

      workerCtx.putImageData(out, 0, 0);
      return workerCanvas.toDataURL();
    }

    imgExists(args) {
      return imageBank.has(args.NAME);
    }

    allImgs() {
      return JSON.stringify(Array.from(imageBank.keys()));
    }

    deleteImg(args) {
      imageBank.delete(args.NAME);
    }

    deleteAllImgs() {
      imageBank.clear();
    }

    setHex(args) {
      const storedImg = imageBank.get(args.NAME);
      if (storedImg === undefined) return;

      if (storedImg.pixels === null) storedImg.pixels = this._imgToPixels(storedImg);
      const index = Math.min(storedImg.pixels.length - 1, Math.max(0, Cast.toNumber(args.INDEX) - 1));
      storedImg.pixels[index] = this._parseHex(args.COLOR);
      storedImg._pixelsChanged = true;
    }

    getHex(args) {
      const storedImg = imageBank.get(args.NAME);
      if (storedImg === undefined) return "";

      if (storedImg.pixels === null) storedImg.pixels = this._imgToPixels(storedImg);
      return storedImg.pixels[Cast.toNumber(args.INDEX) - 1] || "";
    }

    getIndexFromXY(args) {
      const storedImg = imageBank.get(args.NAME);
      if (storedImg === undefined) return -1;

      const width = storedImg.width;
      const height = storedImg.height;
      const x = Math.round(Cast.toNumber(args.x));
      const y = -Math.round(Cast.toNumber(args.y));

      const pixelX = x + Math.floor(width / 2);
      const pixelY = y + Math.floor(height / 2);
      if (
        pixelX < 0 || pixelX >= width ||
        pixelY < 0 || pixelY >= height
      ) return -1;

      return pixelY * width + pixelX + 1;
    }

    modifyImg(args) {
      if (!imageBank.has(args.NAME)) this.makeImg(args);
      else {
        const width = Cast.toNumber(args.W);
        const height = Cast.toNumber(args.H);
        const absWidth = Math.abs(width);
        const absHeight = Math.abs(height);
        const storedImg = imageBank.get(args.NAME);

        if (args.TYPE === "stretch") {
          const flipX = width < 0;
          const flipY = height < 0;

          this._resizeCanvas(absWidth, absHeight, true);
          this._resizeWorker(storedImg.width, storedImg.height, true);
          workerCtx.putImageData(storedImg.imageData, 0, 0);
          globalCtx.save();
          globalCtx.translate(flipX ? absWidth : 0, flipY ? absHeight : 0);
          globalCtx.scale( flipX ? -1 : 1, flipY ? -1 : 1);
          globalCtx.drawImage(workerCanvas, 0, 0, absWidth, absHeight);
          globalCtx.restore();
        } else {
          const xOffset = (width - storedImg.width) / 2;
          const yOffset = (height - storedImg.height) / 2;

          this._resizeCanvas(width, height, true);
          globalCtx.putImageData(storedImg.imageData, xOffset, yOffset);
          globalCtx.globalCompositeOperation = "destination-over";
          globalCtx.fillStyle = this._parseHex(args.COLOR);
          globalCtx.fillRect(0, 0, width, height);
          globalCtx.globalCompositeOperation = "source-over";
        }

        storedImg.width = absWidth;
        storedImg.height = absHeight;
        storedImg.dataURI = globalCanvas.toDataURL();
        this._prepImageData(storedImg);
      }
    }

    rotateImg(args) {
      if (!imageBank.has(args.NAME)) this.makeImg(args);
      else {
        const storedImg = imageBank.get(args.NAME);
        const width = storedImg.width;
        const height = storedImg.height;

        workerCanvas.width = width;
        workerCanvas.height = height;
        this._resizeCanvas(width, height, true);
        workerCtx.putImageData(storedImg.imageData, 0, 0);
        globalCtx.save();
        globalCtx.fillStyle = this._parseHex(args.COLOR);
        globalCtx.fillRect(0, 0, width, height);
        globalCtx.translate(width / 2, height / 2);
        globalCtx.rotate((Cast.toNumber(args.DIR) - 90) * TO_RAD);
        globalCtx.drawImage(workerCanvas, width / -2, height / -2);
        globalCtx.restore();

        storedImg.dataURI = globalCanvas.toDataURL();
        this._prepImageData(storedImg);
      }
    }

    toggleAlias(args) {
      imagePrintSmoothing = args.TOGGLER === "on";
    }

    setTextureBlend(args) {
      const mode = Cast.toString(args.MODE);
      const found = TEXTURE_BLEND_MODES.find(m => m.text === mode || m.value === mode);
      if (found) textureBlendMode = found.value;
    }

    async addTexture(args) {
      const storedImg = imageBank.get(args.NAME);
      if (storedImg === undefined) return;

      await this._textureHelper(args.IMAGE, (texture) => {
        const xOffset = (storedImg.width - texture.width) / 2;
        const yOffset = (storedImg.height - texture.height) / 2;

        this._resizeCanvas(storedImg.width, storedImg.height, true);
        globalCtx.putImageData(storedImg.imageData, 0, 0);
        globalCtx.globalCompositeOperation = textureBlendMode;
        globalCtx.drawImage(
          texture,
          Cast.toNumber(args.x) + xOffset,
          (Cast.toNumber(args.y) * -1) + yOffset
        );
        globalCtx.globalCompositeOperation = "source-over";

        storedImg.dataURI = globalCanvas.toDataURL();
        this._prepImageData(storedImg);
      });
    }

    editLoop(args, util) {
      const storedImg = imageBank.get(args.NAME);
      if (storedImg === undefined) return "";

      if (util.stackFrame.loopCounter === undefined) {
        storedImg._pixelsChanged = true;
        storedImg.pixels = this._imgToPixels(storedImg);
        util.stackFrame.loopCounter = storedImg.pixels.length;
      }

      const index = Math.abs(util.stackFrame.loopCounter - storedImg.pixels.length);
      util.thread.stackFrames[0].SPimgData = {
        pixelData: storedImg.pixels,
        index,
        hex: storedImg.pixels[index]
      };

      util.stackFrame.loopCounter--;
      if (util.stackFrame.loopCounter >= 0) util.startBranch(1, true);
      else {
        storedImg.dataURI = this._pixelsToURI(storedImg);
        storedImg._pixelsChanged = false;
        delete util.thread.stackFrames[0].SPimgData;
      }
    }

    setPixel(args, util) {
      const data = util.thread.stackFrames[0].SPimgData;
      if (data) {
        data.pixelData[data.index] = this._parseHex(args.COLOR);
        if (data.name !== undefined) util.thread.stopThisScript();
      }
    }

    callImgEdit(args, util) {
      const storedImg = imageBank.get(args.NAME);
      if (storedImg === undefined) return "";

      storedImg.pixels = this._imgToPixels(storedImg);
      return new Promise((resolve) => {
        // We shouldnt rely on runtime.startHats since we WANT to have multiple threads for pixel manipulation
        const threads = [];
        for (let i = 0; i < storedImg.pixels.length; i++) {
          threads.push(...this._startEditors({
            pixelData: storedImg.pixels,
            name: args.NAME,
            index: i,
            hex: storedImg.pixels[i]
          }));
        }

        const callback = () => {
          if (!threads.every(t => runtime.isActiveThread(t))) {
            runtime.off("AFTER_EXECUTE", callback);
            resolve(this._pixelsToURI(storedImg));
          }
        }
        if (threads.length) runtime.on("AFTER_EXECUTE", callback);
        else resolve(storedImg.dataURI);
      });
    }

    onEditCall(args, util) {
      return util.thread.stackFrames[0].SPimgData?.name === args.NAME;
    }

    pixelHex(_, util) {
      return util.thread.stackFrames[0].SPimgData?.hex ?? "";
    }
    pixelIndex(_, util) {
      const index = util.thread.stackFrames[0].SPimgData?.index
      return index ? index + 1 : "";
    }
  }

  Scratch.extensions.register(new SPimgEditor());
})(Scratch);
