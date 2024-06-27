// Name: Image Editor
// ID: SPimgEditor
// Description: Create and Edit the Pixel Data of Images
// By: SharkPool

// Version V.1.0.0

(function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) throw new Error("Image Editor must run unsandboxed!");

  const menuIconURI =
"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI4NC45NzU0IiBoZWlnaHQ9Ijg0Ljk3NTQiIHZpZXdCb3g9IjAsMCw4NC45NzU0LDg0Ljk3NTQiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xOTcuNTEyMywtMTM3LjUxMjMpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMTk3LjUxMjMsMTgwYzAsLTIzLjQ2NTMxIDE5LjAyMjM5LC00Mi40ODc3IDQyLjQ4NzcsLTQyLjQ4NzdjMjMuNDY1MzEsMCA0Mi40ODc3LDE5LjAyMjM5IDQyLjQ4NzcsNDIuNDg3N2MwLDIzLjQ2NTMxIC0xOS4wMjIzOSw0Mi40ODc3IC00Mi40ODc3LDQyLjQ4NzdjLTIzLjQ2NTMxLDAgLTQyLjQ4NzcsLTE5LjAyMjM5IC00Mi40ODc3LC00Mi40ODc3eiIgZmlsbD0iIzMzM2Q4MCIvPjxwYXRoIGQ9Ik0yMDIuNzc2MjYsMTgwYzAsLTIwLjU1ODEgMTYuNjY1NjQsLTM3LjIyMzc0IDM3LjIyMzc0LC0zNy4yMjM3NGMyMC41NTgxLDAgMzcuMjIzNzQsMTYuNjY1NjQgMzcuMjIzNzQsMzcuMjIzNzRjMCwyMC41NTgxIC0xNi42NjU2NCwzNy4yMjM3NCAtMzcuMjIzNzQsMzcuMjIzNzRjLTIwLjU1ODEsMCAtMzcuMjIzNzQsLTE2LjY2NTY0IC0zNy4yMjM3NCwtMzcuMjIzNzR6IiBmaWxsPSIjNDc1NmIzIi8+PHBhdGggZD0iTTI0Ni4yODAyMywyMDIuNTEwMmMtMi4wNjEwMiwtNS45MDUyMiAtNi45OTYwMSwtMjAuMDQ0OTEgLTguMTA1MTYsLTIzLjIyMjgzYy0wLjQzMjk5LC0xLjI0MDYgMC40MDM5LC0xLjk5NDc0IDEuNjkzMjIsLTEuNTQ0NzRjMy4xNTU2MSwxLjEwMTM2IDE2LjY4MjE3LDUuODIyMzUgMjIuNzUwNzcsNy45NDAzOWMxLjgxODAzLDAuNjM0NTIgMi4xOTM4NiwxLjgwODI5IDAuOTc1NzMsMy4wMjY0MmMtMC44NTk3MywwLjg1OTczIC0xLjk0MTI3LDEuOTQxMjcgLTMuMTI5NDYsMy4xMjk0NmwzLjI3OTc2LDMuMjc5NzZjMS42NzE1MywxLjY3MTUzIDEuNjcxNTMsNC4zODE2MiAwLDYuMDUzMTZsLTIuMTAyNDEsMi4xMDI0MWMtMS42NzE1MywxLjY3MTUzIC00LjM4MTYyLDEuNjcxNTMgLTYuMDUzMTYsMGwtMy4yNzk3NiwtMy4yNzk3NmMtMS41OTE2MiwxLjU5MTYyIC0yLjg3NzIzLDIuODc3MjMgLTMuNTA4NzksMy41MDg3OWMtMC44MjAyNiwwLjgyMDI2IC0xLjk1OTczLDAuNjE0MzcgLTIuNTIwNzUsLTAuOTkzMDV6IiBmaWxsPSIjZmZmZmZmIi8+PHBhdGggZD0iTTIyMi4wNDYyMSwyMDAuMjU0MjVjLTIuMTY5NTEsMC4xNzUyOSAtNC4wNzAzMywtMS40NDEzMyAtNC4yNDU2MywtMy42MTA4M2wtMi43ODYzMSwtMzQuNDg0MzZjLTAuMTc1MjksLTIuMTY5NTEgMS40NDEzMywtNC4wNzAzMyAzLjYxMDgzLC00LjI0NTYzbDMwLjA1MzM0LC0yLjQyODI5YzIuMTY5NTEsLTAuMTc1MjkgNC4wNzAzMywxLjQ0MTMzIDQuMjQ1NjMsMy42MTA4M2wxLjUwNjQyLDE4LjY0NDA2Yy0xLjY2NDY1LC0wLjU4MDk5IC0zLjMyNDk5LC0xLjE2MDQ3IC00Ljk0NTIsLTEuNzI1OTZsLTEuMjMzNTIsLTE1Ljk3NzQxbC0yOC42MjMzNywyLjI5NDUybDIuMjEwNjcsMjguNjM0MjRsMTQuNTQxOTYsLTEuMTY1NzNjMS4wMzU2LDIuOTY3MTcgMi4xMTI0Miw2LjA1MjQ5IDMuMTU1NTgsOS4wNDEzNHoiIGZpbGw9IiNmZmZmZmYiLz48L2c+PC9nPjwvc3ZnPg==";

  const vm = Scratch.vm;
  const runtime = vm.runtime;
  let imageBank = {};

  const regeneratedReporters = ["SPimgEditor_pixelHex", "SPimgEditor_pixelIndex", "SPimgEditor_setPixel"];
  vm.on("EXTENSION_ADDED", tryUseScratchBlocks);
  vm.on("BLOCKSINFO_UPDATE", tryUseScratchBlocks);
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
      alert(
        `This Extension works best with the Additional Extensions:\n"Image Effects" and "Color Master"\nThey can be Found at "https://sharkpools-extensions.vercel.app/"`
      );
    }

    callEditor(data) {
      let newThreads = [];
      runtime.allScriptsByOpcodeDo("SPimgEditor_onEditCall", (script, target) => {
        const topBlockId = script.blockId;
        const thread = runtime._pushThread(script.blockId, target);
        thread.SPimgData = data;
        newThreads.push(thread);
      });
      return newThreads;
    }

    getPixelData(storedImg) {
      const width = storedImg.canvas.width;
      const height = storedImg.canvas.height;
      const imageData = storedImg.context.getImageData(0, 0, width, height).data;
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
      const width = storedImg.canvas.width;
      const height = storedImg.canvas.height;
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const context = canvas.getContext("2d");
      const imageData = context.createImageData(width, height);
      for (let i = 0; i < storedImg.pixels.length; i++) {
        const hex = storedImg.pixels[i];
        imageData.data[i * 4 + 0] = parseInt(hex.substring(1, 3), 16);
        imageData.data[i * 4 + 1] = parseInt(hex.substring(3, 5), 16);
        imageData.data[i * 4 + 2] = parseInt(hex.substring(5, 7), 16);
        imageData.data[i * 4 + 3] = hex.length === 9 ?  parseInt(hex.substring(7, 9), 16) : 255;
      }
      context.putImageData(imageData, 0, 0);
      return canvas.toDataURL();
    }

    // Block Funcs (Bank Manager)
    makeImg(args) {
      const width = Scratch.Cast.toNumber(args.W);
      const height = Scratch.Cast.toNumber(args.H);
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const context = canvas.getContext("2d");
      context.fillStyle = args.COLOR;
      context.fillRect(0, 0, width, height);
      imageBank[args.NAME] = { data : canvas.toDataURL(), canvas, context, pixels : [] }
    }

    modifyImg(args) {
      if (imageBank[args.NAME] === undefined) this.makeImg(args);
      else {
        const width = Scratch.Cast.toNumber(args.W);
        const height = Scratch.Cast.toNumber(args.H);
        const storedImg = imageBank[args.NAME];
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const context = canvas.getContext("2d");
        if (args.TYPE === "stretch") context.drawImage(storedImg.canvas, 0, 0, width, height);
        else {
          context.fillStyle = args.COLOR;
          context.fillRect(0, 0, width, height);
          const xOffset = (width - storedImg.canvas.width) / 2;
          const yOffset = (height - storedImg.canvas.height) / 2;
          context.drawImage(storedImg.canvas, xOffset, yOffset);
        }
        imageBank[args.NAME] = { data: canvas.toDataURL(), canvas, context, pixels : [] };
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
        default: return storedImg.data;
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
      if (typeof util.stackFrame.loopCounter === "undefined") {
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
      if (storedImg === undefined) return "";
      if (storedImg.pixels.length === 0) storedImg.pixels = this.getPixelData(storedImg);
      storedImg.pixels[Scratch.Cast.toNumber(args.INDEX) - 1] = args.COLOR;
      if (args.REFRESH === undefined) storedImg.data = this.pixels2Img(storedImg);
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
        const canvas = storedImg.canvas;
        const context = storedImg.context;
        const tempCanvas = document.createElement("canvas");
        tempCanvas.width = canvas.width;
        tempCanvas.height = canvas.height;
        const tempContext = tempCanvas.getContext("2d");
        tempContext.drawImage(canvas, 0, 0);

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = args.COLOR;
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.save();
        context.translate(canvas.width / 2, canvas.height / 2);
        context.rotate(Scratch.Cast.toNumber(args.DIR) * (Math.PI / 180));
        context.drawImage(tempCanvas, -tempCanvas.width / 2, -tempCanvas.height / 2);
        context.restore();
        imageBank[args.NAME] = { data: canvas.toDataURL(), canvas, context, pixels: [] };
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
            const yOffset = (storedImg.canvas.height -img.height) / 2;
            storedImg.context.drawImage(
              img, Scratch.Cast.toNumber(args.x) + xOffset,
              (Scratch.Cast.toNumber(args.y) * -1) + yOffset
            );
            storedImg.data = storedImg.canvas.toDataURL();
            resolve();
          } catch (e) {
            console.error(e);
            resolve(new Error("Failed to apply texture. Image may be tainted"));
          }
        };
        img.onerror = (e) => { console.error(e) };
        img.src = args.IMAGE;
      });
    }
  }

  Scratch.extensions.register(new SPimgEditor());
})(Scratch);
