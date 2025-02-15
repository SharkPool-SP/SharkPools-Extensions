// Name: unfinished inline
// ID: SPext
// Description: unfinished inline block.
// By: SharkPool
// Licence: MIT

// Version V.0.0.0

(function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) throw new Error("... must run unsandboxed!");

  const vm = Scratch.vm;
  const runtime = vm.runtime;

  if (Scratch.gui) Scratch.gui.getBlockly().then(SB => {
    const ogRender = SB.BlockSvg.prototype.render;
    SB.BlockSvg.prototype.render = function (...args) {
      const data = ogRender.call(this, ...args);
      if (this.type === "SPext_func" && !this.inputList[1]) {
        this.setOutputShape(3);
        this.appendStatementInput("test");
      }
      return data;
    }
  });

  class SPext {
    getInfo() {
      return {
        id: "SPext",
        name: "unfinished inline",
        blocks: [
          {
            opcode: "func",
            blockType: Scratch.BlockType.REPORTER,
            text: "coolio",
          }
        ],
      };
    }

    // Helper Funcs


    // Block Funcs
    func(_, util) {
      util.startBranch(1, false);
      return "huh";
    }
  }


  Scratch.extensions.register(new SPext());
})(Scratch);
