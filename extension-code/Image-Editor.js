// Name: Image Editor
// ID: SPimgEditor
// Description: Create and Edit the Pixel Data of Images
// By: SharkPool
// License: MIT

// Version V.1.1.21

(function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) throw new Error("Image Editor must run unsandboxed!");

  const menuIconURI =
"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4NC45NzUiIGhlaWdodD0iODQuOTc1IiB2aWV3Qm94PSIwIDAgODQuOTc1IDg0Ljk3NSI+PGcgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiPjxwYXRoIGQ9Ik0wIDQyLjQ4OEMwIDE5LjAyMyAxOS4wMjMgMCA0Mi40ODggMHM0Mi40ODggMTkuMDIzIDQyLjQ4OCA0Mi40ODgtMTkuMDIzIDQyLjQ4OC00Mi40ODggNDIuNDg4UzAgNjUuOTUzIDAgNDIuNDg4IiBmaWxsPSIjMzMzZDgwIi8+PHBhdGggZD0iTTUuMjY0IDQyLjQ4OGMwLTIwLjU1OCAxNi42NjYtMzcuMjI0IDM3LjIyNC0zNy4yMjRTNzkuNzEyIDIxLjkzIDc5LjcxMiA0Mi40ODggNjMuMDQ2IDc5LjcxMiA0Mi40ODggNzkuNzEyIDUuMjY0IDYzLjA0NiA1LjI2NCA0Mi40ODgiIGZpbGw9IiM0NzU2YjMiLz48cGF0aCBkPSJtNDguNzY4IDY0Ljk5OC04LjEwNS0yMy4yMjNjLS40MzMtMS4yNC40MDQtMS45OTQgMS42OTMtMS41NDRsMjIuNzUxIDcuOTRjMS44MTguNjM1IDIuMTk0IDEuODA4Ljk3NiAzLjAyNmwtMy4xMyAzLjEzIDMuMjggMy4yOGE0LjI4IDQuMjggMCAwIDEgMCA2LjA1M2wtMi4xMDIgMi4xMDJhNC4yOCA0LjI4IDAgMCAxLTYuMDUzIDBsLTMuMjgtMy4yOC0zLjUwOSAzLjUxYy0uODIuODItMS45Ni42MTQtMi41Mi0uOTk0IiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTI0LjUzNCA2Mi43NDJhMy45NCAzLjk0IDAgMCAxLTQuMjQ1LTMuNjFsLTIuNzg3LTM0LjQ4NWEzLjk0IDMuOTQgMCAwIDEgMy42MTEtNC4yNDZsMzAuMDUzLTIuNDI4YTMuOTQgMy45NCAwIDAgMSA0LjI0NiAzLjYxMWwxLjUwNiAxOC42NDQtNC45NDUtMS43MjYtMS4yMzMtMTUuOTc3LTI4LjYyNCAyLjI5NCAyLjIxMSAyOC42MzQgMTQuNTQyLTEuMTY1IDMuMTU2IDkuMDQxeiIgZmlsbD0iI2ZmZiIvPjwvZz48L3N2Zz4=";

  const vm = Scratch.vm;
  const runtime = vm.runtime;
  let imageBank = {};

  const regenReporters = ["SPimgEditor_pixelHex", "SPimgEditor_pixelIndex", "SPimgEditor_setPixel"];
  if (Scratch.gui) Scratch.gui.getBlockly().then(SB => {
    const originalCheck = SB.scratchBlocksUtils.isShadowArgumentReporter;
    SB.scratchBlocksUtils.isShadowArgumentReporter = function (block) {
      const result = originalCheck(block);
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
          {
            func: "rectExts",
            blockType: Scratch.BlockType.BUTTON,
            text: "Recommended Extensions"
          },
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
            opcode: "modifyImg",
            blockType: Scratch.BlockType.COMMAND,
            text: "[TYPE] image named [NAME] to width [W] height [H] fill [COLOR]",
            arguments: {
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "MOD_TYPE" },
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "image-1" },
              W: { type: Scratch.ArgumentType.NUMBER, defaultValue: 200 },
              H: { type: Scratch.ArgumentType.NUMBER, defaultValue: 200 },
              COLOR: { type: Scratch.ArgumentType.COLOR }
            },
          },
          {
            opcode: "imgAtts",
            blockType: Scratch.BlockType.REPORTER,
            text: "[TYPE] of image named [NAME] ",
            arguments: {
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "IMG_ATTS" },
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "image-1" }
            },
          },
          "---",
          {
            opcode: "imgExists",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "image named [NAME] exists?",
            arguments: { NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "image-1" } },
          },
          {
            opcode: "allImgs",
            blockType: Scratch.BlockType.REPORTER,
            text: "all images"
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
          "---",
          {
            opcode: "rotateImg",
            blockType: Scratch.BlockType.COMMAND,
            text: "point image named [NAME] in direction [DIR] fill [COLOR]",
            arguments: {
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "image-1" },
              DIR: { type: Scratch.ArgumentType.ANGLE, defaultValue: 90 },
              COLOR: { type: Scratch.ArgumentType.COLOR }
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
            opcode: "onEditCall", blockType: Scratch.BlockType.HAT,
            isEdgeActivated: false, hideFromPalette: true,
            text: "on [NAME] editor call pixel [PIXEL] [INDEX]",
            arguments: { NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "image-1" }, PIXEL: {}, INDEX: {} },
          },
          {
            opcode: "editLoop", blockType: Scratch.BlockType.LOOP,
            hideFromPalette: true,
            text: "for each pixel [PIXEL] [INDEX] in [NAME]",
            arguments: { NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "image-1" }, PIXEL: {}, INDEX: {} },
          },
          {
            opcode: "pixelHex", blockType: Scratch.BlockType.REPORTER,
            hideFromPalette: true, text: "hex"
          },
          {
            opcode: "pixelIndex", blockType: Scratch.BlockType.REPORTER,
            hideFromPalette: true, text: "index"
          },
          {
            opcode: "setPixel", blockType: Scratch.BlockType.COMMAND,
            isTerminal: true, hideFromPalette: true,
            text: "set this pixel to [COLOR]",
            arguments: { COLOR: { type: Scratch.ArgumentType.COLOR } },
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
              </block>
            `
          },
          {
            opcode: "callImgEdit",
            blockType: Scratch.BlockType.REPORTER,
            text: "call image editor for [NAME]",
            arguments: { NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "image-1" } },
          }
        ],
        menus: {
          MOD_TYPE: ["expand", "stretch"],
          IMG_ATTS: {
            acceptReporters: true,
            items: ["width", "height", "pixel count", "data"]
          }
        },
      };
    }

    // Helper Funcs
    rectExts() {
      alert(`This Extension works best with the Additional Extensions:\n"Image Effects" and "Color Master"\nThey can be Found at "https://sharkpools-extensions.vercel.app/"`);
    }

    createCanvasCtx(w, h) {
      const canvas = document.createElement("canvas");
      canvas.width = w; canvas.height = h;
      const ctx = canvas.getContext("2d");
      return { canvas, ctx };
    }

    callEditor(data) {
      let newThreads = [];
      runtime.allScriptsByOpcodeDo("SPimgEditor_onEditCall", (script, target) => {
        const thread = runtime._pushThread(script.blockId, target);
        thread.SPimgData = data;
        newThreads.push(thread);
      });
      return newThreads;
    }

    getPixelData(storedImg) {
      const { width, height } = storedImg.canvas;
      const imageData = storedImg.ctx.getImageData(0, 0, width, height).data;
      const pixelData = [];
      for (let i = 0; i < imageData.length; i += 4) {
        const r = imageData[i];
        const g = imageData[i + 1];
        const b = imageData[i + 2];
        const a = imageData[i + 3];
        const alphaHex = Math.round(a).toString(16).padStart(2, "0");
        pixelData.push(`#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}${alphaHex}`);
      }
      return pixelData;
    }

    pixels2Img(storedImg) {
      const { width, height } = storedImg.canvas;
      const { canvas, ctx } = this.createCanvasCtx(width, height);
      const imageData = ctx.createImageData(width, height);
      for (let i = 0; i < storedImg.pixels.length; i++) {
        const hex = storedImg.pixels[i] ?? "#000000";
        imageData.data[i * 4 + 0] = parseInt(hex.substring(1, 3), 16);
        imageData.data[i * 4 + 1] = parseInt(hex.substring(3, 5), 16);
        imageData.data[i * 4 + 2] = parseInt(hex.substring(5, 7), 16);
        imageData.data[i * 4 + 3] = hex.length === 9 ?  parseInt(hex.substring(7, 9), 16) : 255;
      }
      ctx.putImageData(imageData, 0, 0);
      return canvas.toDataURL();
    }

    // Block Funcs (Bank Manager)
    makeImg(args) {
      const width = Scratch.Cast.toNumber(args.W);
      const height = Scratch.Cast.toNumber(args.H);
      const { canvas, ctx } = this.createCanvasCtx(width, height);
      ctx.fillStyle = args.COLOR;
      ctx.fillRect(0, 0, width, height);
      imageBank[args.NAME] = { data: canvas.toDataURL(), canvas, ctx, pixels: [], needsRefresh: false }
    }

    makeImgImg(args) {
      return new Promise((resolve) => {
        if (!args.IMAGE) return resolve();
        let width = Scratch.Cast.toNumber(args.W);
        let height = Scratch.Cast.toNumber(args.H);
        const { canvas, ctx } = this.createCanvasCtx(Math.abs(width), Math.abs(height));
        const img = new Image();
        img.crossOrigin = "Anonymous";
        img.onload = () => {
          try {
            ctx.save();
            if (width === 0 || height === 0) {
              width = img.width; height = img.height;
              canvas.width = width; canvas.height = height;
            }
            ctx.scale(width < 0 ? -1 : 1, height < 0 ? -1 : 1);
            const x = Scratch.Cast.toNumber(args.x) - (width < 0 ? Math.abs(width) : 0);
            const y = (Scratch.Cast.toNumber(args.y) * -1) - (height < 0 ? Math.abs(height) : 0);
            ctx.drawImage(img, x, y, Math.abs(width), Math.abs(height));
            ctx.restore();
            imageBank[args.NAME] = { data: canvas.toDataURL(), canvas, ctx, pixels: [], needsRefresh: false };
            resolve();
          } catch (e) {
            console.warn(e);
            resolve();
          }
        };
        img.onerror = (e) => { console.warn(e); resolve() };
        img.src = args.IMAGE;
      });
    }

    modifyImg(args) {
      if (imageBank[args.NAME] === undefined) this.makeImg(args);
      else {
        const width = Scratch.Cast.toNumber(args.W);
        const height = Scratch.Cast.toNumber(args.H);
        const storedImg = imageBank[args.NAME];
        const { canvas, ctx } = this.createCanvasCtx(Math.abs(width), Math.abs(height));
        if (args.TYPE === "stretch") {
          ctx.save();
          ctx.scale(width < 0 ? -1 : 1, height < 0 ? -1 : 1);
          ctx.drawImage(storedImg.canvas, width < 0 ? -Math.abs(width) : 0, height < 0 ? -Math.abs(height) : 0, Math.abs(width), Math.abs(height));
          ctx.restore();
        } else {
          ctx.fillStyle = args.COLOR;
          ctx.fillRect(0, 0, width, height);
          const xOffset = (width - storedImg.canvas.width) / 2;
          const yOffset = (height - storedImg.canvas.height) / 2;
          ctx.drawImage(storedImg.canvas, xOffset, yOffset);
        }
        imageBank[args.NAME] = { data: canvas.toDataURL(), canvas, ctx, pixels: [], needsRefresh: false };
      }
    }

    imgAtts(args) {
      const storedImg = imageBank[args.NAME];
      if (storedImg === undefined) return 0;
      const canvas = storedImg.canvas;
      switch (args.TYPE) {
        case "width": return canvas.width;
        case "height": return canvas.height;
        case "pixel count": return canvas.width * canvas.height;
        default: {
          if (storedImg.needsRefresh) {
            storedImg.data = this.pixels2Img(storedImg);
            storedImg.needsRefresh = false;
          }
          return storedImg.data;
        }
      }
    }

    imgExists(args) { return imageBank[args.NAME] !== undefined }
    allImgs() { return JSON.stringify(Object.keys(imageBank)) }

    deleteImg(args) { delete imageBank[args.NAME] }
    deleteAllImgs() { imageBank = {} }

    // Block Funcs (Editing)
    callImgEdit(args, util) {
      const storedImg = imageBank[args.NAME];
      if (storedImg === undefined) return "";
      if (util.stackFrame.newThreads === undefined) {
        storedImg.pixels = this.getPixelData(storedImg);
        let newThreads = [];
        // We shouldnt rely on runtime.startHats since we WANT to have multiple threads for pixel manipulation
        for (var index = 0; index < storedImg.pixels.length; index++) {
          newThreads = [...newThreads, ...this.callEditor({ name : args.NAME, index, hex : storedImg.pixels[index] })];
        }
        util.stackFrame.newThreads = newThreads;
        util.yield();
      } else {
        if (util.stackFrame.newThreads.some((thread) => runtime.threads.indexOf(thread) !== -1)) {
          if (util.stackFrame.newThreads.every((thread) => runtime.isWaitingThread(thread))) util.yieldTick();
          else util.yield();
        }
        storedImg.data = this.pixels2Img(storedImg);
        return storedImg.data;
      }
    }

    editLoop(args, util) {
      const storedImg = imageBank[args.NAME];
      if (storedImg === undefined) return "";
      if (util.stackFrame.loopCounter === undefined) {
        storedImg.pixels = this.getPixelData(storedImg);
        util.stackFrame.loopCounter = storedImg.pixels.length;
      }
      const index = Math.abs(util.stackFrame.loopCounter - storedImg.pixels.length);
      util.thread.SPimgData = { name : args.NAME, index, hex : storedImg.pixels[index] }
      util.stackFrame.loopCounter--;
      if (util.stackFrame.loopCounter >= 0) util.startBranch(1, true);
      else {
        storedImg.data = this.pixels2Img(storedImg);
        delete util.thread.SPimgData;
      }
    }

    onEditCall(args, util) { return util.thread.SPimgData?.name === args.NAME }

    pixelHex(args, util) { return util.thread.SPimgData?.hex || "" }
    pixelIndex(args, util) { return util.thread.SPimgData?.index + 1 || "" }
    setPixel(args, util) {
      const data = util.thread.SPimgData;
      if (data !== undefined) {
        this.setHex({ REFRESH : false, NAME : data.name, COLOR : args.COLOR, INDEX : data.index + 1 });
        util.thread.stopThisScript();
      }
    }
    setHex(args) {
      const storedImg = imageBank[args.NAME];
      if (storedImg === undefined) return;
      if (storedImg.pixels.length === 0) storedImg.pixels = this.getPixelData(storedImg);
      storedImg.pixels[Scratch.Cast.toNumber(args.INDEX) - 1] = args.COLOR;
      if (args.REFRESH === undefined) storedImg.needsRefresh = true;
    }
    getHex(args) {
      const storedImg = imageBank[args.NAME];
      if (storedImg === undefined) return "";
      if (storedImg.pixels.length === 0) storedImg.pixels = this.getPixelData(storedImg);
      return storedImg.pixels[Scratch.Cast.toNumber(args.INDEX) - 1] || "";
    }

    rotateImg(args) {
      if (imageBank[args.NAME] === undefined) this.makeImg(args);
      else {
        const storedImg = imageBank[args.NAME];
        const { canvas, ctx } = storedImg;
        const { width, height } = canvas;
        const tempData = this.createCanvasCtx(width, height);
        const tempCanvas = tempData.canvas;
        tempData.ctx.drawImage(canvas, 0, 0);

        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = args.COLOR;
        ctx.fillRect(0, 0, width, height);
        ctx.save();
        ctx.translate(width / 2, height / 2);
        ctx.rotate(Scratch.Cast.toNumber(args.DIR) * (Math.PI / 180));
        ctx.drawImage(tempCanvas, -tempCanvas.width / 2, -tempCanvas.height / 2);
        ctx.restore();
        imageBank[args.NAME] = { data: canvas.toDataURL(), canvas, ctx, pixels: [], needsRefresh: false };
      }
    }

    addTexture(args) {
      return new Promise((resolve) => {
        const storedImg = imageBank[args.NAME];
        if (storedImg === undefined || !args.IMAGE) return resolve();
        const img = new Image();
        img.crossOrigin = "Anonymous";
        img.onload = () => {
          try {
            const xOffset = (storedImg.canvas.width - img.width) / 2;
            const yOffset = (storedImg.canvas.height - img.height) / 2;
            storedImg.ctx.drawImage(
              img, Scratch.Cast.toNumber(args.x) + xOffset,
              (Scratch.Cast.toNumber(args.y) * -1) + yOffset
            );
            storedImg.data = storedImg.canvas.toDataURL();
            resolve();
          } catch (e) {
            console.warn(e);
            resolve();
          }
        };
        img.onerror = (e) => { console.warn(e); resolve() };
        img.src = args.IMAGE;
      });
    }
  }

  Scratch.extensions.register(new SPimgEditor());
})(Scratch);
