// Name: Pen Papers
// ID: SPpenPapers
// Description: Create multiple Pen Layers
// By: SharkPool
// Licence: MIT

// Version V.1.0.2

(function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) throw new Error("Pen Papers must run unsandboxed!");

  const menuIconURI =
"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2OS45NDYiIGhlaWdodD0iNjkuOTQ2IiB2aWV3Qm94PSIwIDAgNjkuOTQ2IDY5Ljk0NiI+PGcgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIj48cGF0aCBkPSJNMCAzNC45NzNDMCAxNS42NTggMTUuNjU4IDAgMzQuOTczIDBzMzQuOTczIDE1LjY1OCAzNC45NzMgMzQuOTczLTE1LjY1OCAzNC45NzMtMzQuOTczIDM0Ljk3M1MwIDU0LjI4OCAwIDM0Ljk3MyIgZmlsbD0iIzBiOGE2NiIvPjxwYXRoIGQ9Ik00LjA0IDM0Ljk3M0M0LjA0IDE3Ljg4OSAxNy44OSA0LjA0IDM0Ljk3MyA0LjA0YzE3LjA4NCAwIDMwLjkzMyAxMy44NSAzMC45MzMgMzAuOTMzIDAgMTcuMDg0LTEzLjg1IDMwLjkzMy0zMC45MzMgMzAuOTMzLTE3LjA4NCAwLTMwLjkzMy0xMy44NS0zMC45MzMtMzAuOTMzIiBmaWxsPSIjMGZiZDhjIi8+PHBhdGggZD0iTTI2LjM2NyA1Ny42ODVhNCA0IDAgMCAxLTQuNjQzLTMuMjNsLTYuMTgtMzQuNDVhNCA0IDAgMCAxIDMuMjMtNC42NDRsMTYuNjYtMi45ODggMTQuMzEgMTAuMjU2IDQuNjU4IDI1Ljk2M2E0IDQgMCAwIDEtMy4yMyA0LjY0NHoiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJtMzcuNTQgMjQuNTUyLTIuMjE2LTEyLjM1NSAxNC41NzEgMTAuMTM4eiIgZmlsbD0iI2IzYjNiMyIvPjxwYXRoIGQ9Im0zMC42ODcgNTAuNDYzLTIuNDk0IDEuODI1LjUwMi0zLjA0MmMuMzQzLTIuMDc2IDEuMDUtMy45OSAyLjEwNC01LjcwMmw5LjgxMi0xNS45MTZjLjQyLS42ODEgMS42NjUtLjY4IDIuNzgxLjAwMiAxLjExNS42ODEgMS42OCAxLjc4NiAxLjI2IDIuNDY3TDM0Ljg0IDQ2LjAxNGMtMS4wNTUgMS43MTItMi40NSAzLjIwNi00LjE1MyA0LjQ1IiBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0iIzU3NWU3NSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTMyLjY3IDM1LjM4OHMyLjA1MyAxLjA0IDIuNTk2LTEuNjg3YzEuMTc2LTUuOTAxIDQuNDUtNS4wNDUgNC40NS01LjA0NSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNTc1ZTc1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBkPSJNNDQuNzExIDI5LjMzM2MuMDcyLjMwMi4wNDUuNTkyLS4xLjgyN2wtNC42MzggNy41MjNjLjEzOS0uMjM0LjE2NC0uNS4wOTMtLjc5NS0uMTM2LS41Ny0uNjM3LTEuMjAxLTEuMzY1LTEuNjUxLTEuMS0uNjczLTIuMzMzLS42ODMtMi43NjQtLjAyMWw0LjYzNy03LjUyNGMuNDItLjY4IDEuNjY1LS42OCAyLjc4Mi0uMDAzLjcyNy40NSAxLjIyIDEuMDc1IDEuMzU2IDEuNjQ0TTMxLjcwNyA0OS42NDlxLS40OTQuNDI5LTEuMDIuODE2bC0yLjQ5NiAxLjgyMy41MDQtMy4wNGMuMDc0LS40MzUuMTYtLjg1Ny4yNy0xLjI3Ny40NzguMDEyIDEuMDQxLjE4MiAxLjU3NC41MDhzLjk0Ljc0OSAxLjE2OCAxLjE3IiBmaWxsPSIjYjNiM2IzIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0iIzU3NWU3NSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTMzLjYxNSAzNC43NWEuNjA2LjYwNiAwIDEgMS0uNzMtLjQ0OC42MDYuNjA2IDAgMCAxIC43MzEuNDQ5eiIgZmlsbD0iIzU3NWU3NSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiM1NzVlNzUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvZz48L3N2Zz4=";
  const blockIconURI =
"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48ZyBzdHJva2U9IiM1NzVFNzUiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJtOC43NTMgMzQuNjAyLTQuMjUgMS43OCAxLjc4My00LjIzN2MxLjIxOC0yLjg5MiAyLjkwNy01LjQyMyA1LjAzLTcuNTM4TDMxLjA2NiA0LjkzYy44NDYtLjg0MiAyLjY1LS40MSA0LjAzMi45NjcgMS4zOCAxLjM3NSAxLjgxNiAzLjE3My45NyA0LjAxNUwxNi4zMTggMjkuNTljLTIuMTIzIDIuMTE2LTQuNjY0IDMuOC03LjU2NSA1LjAxMiIgZmlsbD0iI0ZGRiIvPjxwYXRoIGQ9Ik0yOS40MSA2LjExcy00LjQ1LTIuMzc4LTguMjAyIDUuNzcyYy0xLjczNCAzLjc2Ni00LjM1IDEuNTQ2LTQuMzUgMS41NDYiLz48cGF0aCBkPSJNMzYuNDIgOC44MjVjMCAuNDYzLS4xNC44NzMtLjQzMiAxLjE2NGwtOS4zMzUgOS4zYy4yODItLjI5LjQxLS42NjguNDEtMS4xMiAwLS44NzQtLjUwNy0xLjk2My0xLjQwNi0yLjg2OC0xLjM2Mi0xLjM1OC0zLjE0Ny0xLjgtNC4wMDItLjk5TDMwLjk5IDUuMDFjLjg0NC0uODQgMi42NS0uNDEgNC4wMzUuOTYuODk4LjkwNCAxLjM5NiAxLjk4MiAxLjM5NiAyLjg1NU0xMC41MTUgMzMuNzc0YTI0IDI0IDAgMCAxLTEuNzY0LjgzTDQuNSAzNi4zODJsMS43ODYtNC4yMzVjLjI1OC0uNjA0LjUzLTEuMTg2LjgzMy0xLjc1Ny42OS4xODMgMS40NDguNjI1IDIuMTA4IDEuMjgyLjY2LjY1OCAxLjEwMiAxLjQxMiAxLjI4NyAyLjEwMiIgZmlsbD0iIzRDOTdGRiIvPjxwYXRoIGQ9Ik0zNi40OTggOC43NDhjMCAuNDY0LS4xNC44NzQtLjQzMyAxLjE2NWwtMTkuNzQyIDE5LjY4Yy0yLjEzIDIuMTEtNC42NzMgMy43OTMtNy41NzIgNS4wMUw0LjUgMzYuMzhsLjk3NC0yLjMxNiAxLjkyNS0uODA4YzIuODk4LTEuMjE4IDUuNDQtMi45IDcuNTctNS4wMWwxOS43NDMtMTkuNjhjLjI5Mi0uMjkyLjQzMi0uNzAyLjQzMi0xLjE2NSAwLS42NDYtLjI3LTEuNC0uNzgtMi4xMjIuMjUuMTcyLjUuMzc3LjczNy42MTQuODk4LjkwNSAxLjM5NiAxLjk4MyAxLjM5NiAyLjg1NiIgZmlsbD0iIzU3NUU3NSIgb3BhY2l0eT0iLjE1Ii8+PHBhdGggZD0iTTE4LjQ1IDEyLjgzYS45MDQuOTA0IDAgMSAxLS45MDMtLjkwMmMuNSAwIC45MDQuNDA0LjkwNC45MDR6IiBmaWxsPSIjNTc1RTc1Ii8+PC9nPjwvc3ZnPg==";

  const vm = Scratch.vm;
  const runtime = vm.runtime;
  const render = vm.renderer;
  const isEditor = typeof scaffolding === "undefined";
  const papers = Object.create(null);

  // load the pen extension
  if (!vm.extensionManager.isExtensionLoaded("pen")) runtime.extensionManager.loadExtensionIdSync("pen");

  // initalize the default pen paper
  const penExt = runtime.ext_pen;
  const defaultSkinID = penExt._getPenLayerID();
  papers["default"] = { skin: defaultSkinID, drawable: penExt._penDrawableId };

  class SPpenPapers {
    getInfo() {
      return {
        name: "Pen Papers",
        id: "SPpenPapers",
        menuIconURI,
        blockIconURI,
        blocks: [
          {
            opcode: "createPaper",
            blockType: Scratch.BlockType.COMMAND,
            text: "create new paper named [NAME]",
            arguments: {
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "my-paper" }
            },
          },
          {
            opcode: "removePaper",
            blockType: Scratch.BlockType.COMMAND,
            text: "remove paper named [NAME]",
            arguments: {
              NAME: { type: Scratch.ArgumentType.STRING, menu: "PAPERS" }
            },
          },
          {
            opcode: "paperExists",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "paper [NAME] exists?",
            arguments: {
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "my-paper" }
            },
          },
          {
            opcode: "allPapers",
            blockType: Scratch.BlockType.REPORTER,
            text: "all papers"
          },
          "---",
          {
            opcode: "switchPaper",
            blockType: Scratch.BlockType.COMMAND,
            text: "switch paper to [NAME]",
            arguments: {
              NAME: { type: Scratch.ArgumentType.STRING, menu: "PAPERS" }
            },
          },
          {
            opcode: "currentPaper",
            blockType: Scratch.BlockType.REPORTER,
            text: "current paper"
          },
          "---",
          {
            opcode: "paperDrawing",
            blockType: Scratch.BlockType.REPORTER,
            text: "data.uri of paper [NAME]",
            arguments: {
              NAME: { type: Scratch.ArgumentType.STRING, menu: "PAPERS" }
            },
          },
          {
            opcode: "paperVisibility",
            blockType: Scratch.BlockType.COMMAND,
            text: "[TYPE] paper [NAME]",
            arguments: {
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "VISIBILITY" },
              NAME: { type: Scratch.ArgumentType.STRING, menu: "PAPERS" }
            },
          },
          {
            opcode: "paperVisibe",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "is paper [NAME] showing?",
            arguments: {
              NAME: { type: Scratch.ArgumentType.STRING, menu: "PAPERS" }
            },
          },
          {
            opcode: "touchingPaper",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "is [TARGET] touching paper [NAME] ?",
            arguments: {
              TARGET: { type: Scratch.ArgumentType.STRING, menu: "TARGETS" },
              NAME: { type: Scratch.ArgumentType.STRING, menu: "PAPERS" }
            },
          },
        ],
        menus: {
          TARGETS: { acceptReporters: true, items: "getTargets" },
          PAPERS: { acceptReporters: true, items: "getPapers" },
          VISIBILITY: ["show", "hide"]
        },
      };
    }

    // Helper Funcs
    getPapers() {
      return Object.keys(papers);
    }

    getTarget(name, util) {
      if (name === "_myself_") return util.target;
      if (name === "_stage_") return runtime.getTargetForStage();
      return runtime.getSpriteTargetByName(name);
    }

    getTargets() {
      const spriteNames = [{ text: "myself", value: "_myself_" }, { text: "Stage", value: "_stage_" }];
      const targets = runtime.targets;
      for (let i = 1; i < targets.length; i++) {
        const target = targets[i];
        const name = target.getName();
        if (target.isOriginal) spriteNames.push({ text: name, value: name });
      }
      return spriteNames.length > 0 ? spriteNames : [""];
    }

    // Block Funcs
    createPaper(args) {
      const name = Scratch.Cast.toString(args.NAME);
      if (papers[name] === undefined) {
        const skin = render.createPenSkin();
        const drawable = render.createDrawable("pen");
        papers[name] = { skin, drawable };
        render.updateDrawableSkinId(drawable, skin);
        render._allDrawables[drawable].customDrawableName = "Pen Paper: " + name;
        if (isEditor) runtime.once("BEFORE_EXECUTE", () => runtime.requestBlocksUpdate());
      }
    }

    removePaper(args) {
      const name = Scratch.Cast.toString(args.NAME);
      if (Object.keys(papers).length === 1) return;
      if (papers[name] !== undefined) {
        render.destroySkin(papers[name].skin);
        render.destroyDrawable(papers[name].drawable, "pen");
        delete papers[name];
        this.switchPaper({ NAME: Object.keys(papers)[0] });
        if (isEditor) runtime.once("BEFORE_EXECUTE", () => runtime.requestBlocksUpdate());
      }
    }

    paperExists(args) {
      const name = Scratch.Cast.toString(args.NAME);
      return papers[name] !== undefined;
    }

    allPapers() {
      return JSON.stringify(Object.keys(papers));
    }

    switchPaper(args) {
      const name = Scratch.Cast.toString(args.NAME);
      if (papers[name] !== undefined) penExt._penSkinId = papers[name].skin;
    }

    currentPaper() {
      const allPapers = Object.entries(papers);
      for (let i = 0; i < allPapers.length; i++) {
        const paper = allPapers[i];
        if (paper[1].skin === penExt._penSkinId) return paper[0];
      }
      return "";
    }

    paperDrawing(args) {
      const name = Scratch.Cast.toString(args.NAME);
      if (papers[name] === undefined) return "";

      const imageData = render.extractDrawableScreenSpace(papers[name].drawable).imageData;
      var canvas = document.createElement("canvas");
      canvas.width = imageData.width; canvas.height = imageData.height;
      canvas.getContext("2d").putImageData(imageData, 0, 0);
      return canvas.toDataURL("image/png");
    }

    paperVisibility(args) {
      const name = Scratch.Cast.toString(args.NAME);
      if (papers[name] !== undefined) {
        const drawable = render._allDrawables[papers[name].drawable];
        drawable.updateVisible(args.TYPE === "show");
      }
    }

    paperVisibe(args) {
      const name = Scratch.Cast.toString(args.NAME);
      if (papers[name] !== undefined) {
        const drawable = render._allDrawables[papers[name].drawable];
        return drawable._visible;
      }
      return false;
    }

    touchingPaper(args, util) {
      const target = this.getTarget(args.TARGET, util);
      if (!target) return false;

      const name = Scratch.Cast.toString(args.NAME);
      if (papers[name] !== undefined) return render.isTouchingDrawables(target.drawableID, [papers[name].drawable]);
      return false;
    }
  }

  Scratch.extensions.register(new SPpenPapers());
})(Scratch);
