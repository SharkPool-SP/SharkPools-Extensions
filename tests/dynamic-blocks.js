// Name: dynamic block test
// ID: SPext
// Description: ...
// By: SharkPool
// Licence: MIT

// Version V.1.0.0

(function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) throw new Error("dynamic block test must run unsandboxed!");

  const vm = Scratch.vm;
  const runtime = vm.runtime;

  const defaultBlock = {
    opcode: "test",
    blockType: Scratch.BlockType.REPORTER,
    text: "..."
  };
  const blocks = [];

  class SPext {
    getInfo() {
      return {
        id: "SPext",
        name: "dynamic block test",
        blocks: [
          {
            func: "add",
            blockType: Scratch.BlockType.BUTTON,
            text: "+"
          },
          {
            func: "remove",
            blockType: Scratch.BlockType.BUTTON,
            text: "-"
          },
          ...blocks
        ],
        menus: {
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
    add() {
      const newBlock = { ...defaultBlock };
      newBlock.text = "huh" + blocks.length;
      newBlock.opcode = newBlock.text + "func";
      Object.defineProperty(SPext.prototype, newBlock.opcode, {
        value: function (_, u, b) {
          return this.test("", u, b);
        },
        writable: true,
        configurable: true,
      });
      blocks.push(newBlock);
      vm.extensionManager.refreshBlocks("SPext");
    }

    remove() {
      blocks.splice(blocks.length - 1, 1);
      vm.extensionManager.refreshBlocks("SPext");
    }

    // Block Funcs
    test(_, u, b) {
      return b.text;
    }
  }

  Scratch.extensions.register(new SPext());
})(Scratch);
