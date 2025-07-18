// Name: ...
// ID: SPext
// Description: ...
// By: SharkPool
// Licence: MIT

// Version V.1.0.0

(function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) throw new Error("... must run unsandboxed!");

  const menuIconURI =
"";
  const blockIconURI =
"";

  const vm = Scratch.vm;
  const runtime = vm.runtime;
  const render = vm.renderer;

  const regenReporters = ["SPext_block"];
  if (Scratch.gui) Scratch.gui.getBlockly().then(ScratchBlocks => {
    const ogCheck = ScratchBlocks.scratchBlocksUtils.isShadowArgumentReporter;
    ScratchBlocks.scratchBlocksUtils.isShadowArgumentReporter = function (block) {
      const result = ogCheck(block);
      if (result) return true;
      return block.isShadow() && regenReporters.includes(block.type);
    };
  });

  runtime.on("BEFORE_EXECUTE", () => {});
  runtime.on("AFTER_EXECUTE", () => {});

  const color1 = "red"; // use if using gradients
  
  class SPext {
    getInfo() {
      return {
        id: "SPext",
        name: "...",
        //color1: "#",
        //color2: "#",
        //color3: "#",
        menuIconURI,
        blockIconURI,
        blocks: [
          { blockType: Scratch.BlockType.LABEL, text: "label" },
          {
            opcode: "func",
            blockType: Scratch.BlockType.COMMAND,
            text: "empty block [THING] [MENU]",
            arguments: {
              THING: { type: Scratch.ArgumentType.STRING, defaultValue: "" },
              MENU: { type: Scratch.ArgumentType.STRING, menu: "TARGETS" }
            },
          }
        ],
        menus: {
          TARGETS: { acceptReporters: true, items: this.getTargets(true) },
          UNO: ["1", "2", "3"],
          DOS: {
            acceptReporters: true, items: ["1", "2", "3"]
          },
          TRIEZ: {
            acceptReporters: true,
            items: [
              { text: "1", value: "one" },
              { text: "2", value: "two" },
              { text: "3", value: "three" }
            ]
          }
        },
      };
    }

    // Helper Funcs
    getTargets(myself) {
      const spriteNames = [];
      if (myself) spriteNames.push({ text: "myself", value: "_myself_" });
      spriteNames.push({ text: "Stage", value: "_stage_" });
      const targets = runtime.targets;
      for (let index = 1; index < targets.length; index++) {
        const target = targets[index];
        if (target.isOriginal) spriteNames.push({ text: target.getName(), value: target.getName() });
      }
      return spriteNames.length > 0 ? spriteNames : [""];
    }

    // Block Funcs
    func() {
      
    }
  }

  if (Scratch.gui) Scratch.gui.getBlockly().then((SB) => {
    function add2Body() {
      const grad = document.querySelector(`div[class="SPgradCache"]`) || document.createElement("div");
      grad.setAttribute("class", "SPgradCache");
      grad.innerHTML = `
        ${grad.innerHTML}
        <svg><defs>
          <linearGradient x1="240" y1="0" x2="240" y2="100" gradientUnits="userSpaceOnUse" id="SPext-GRAD">
          <stop offset="0" stop-color="red"/><stop offset="0.5" stop-color="blue"/></linearGradient>
        </defs></svg>`;
      document.body.append(grad);
    }
    add2Body();
    if (!SB?.SPgradients?.patched) {
      /* Gradient Patch by SharkPool, inspired by 0znzw */
      SB.SPgradients = { gradientUrls: new Map(), patched: true };
      const ogBlockRender = SB.BlockSvg.prototype.render;
      SB.BlockSvg.prototype.render = function(...args) {
        const result = ogBlockRender.apply(this, args);
        const gradPath = SB.SPgradients.gradientUrls.get(this.type.slice(0, this.type.indexOf("_")));
        if (gradPath && this?.svgPath_ && this?.category_) {
          const svg = this.svgPath_;
          this.svgPath_.setAttribute(
            svg.getAttribute("fill") === color1 ? "fill" : "stroke",
            gradPath
          );
        }
        return result;
      }
    }
    SB.SPgradients.gradientUrls.set("SPext", "url(#SPext-GRAD)");
  });

  Scratch.extensions.register(new SPext());
})(Scratch);
