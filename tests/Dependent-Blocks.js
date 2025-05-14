// Name: ...
// ID: SPext
// Description: ...
// By: SharkPool
// Licence: MIT

// Version V.1.0.0

(function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) throw new Error("... must run unsandboxed!");

  const vm = Scratch.vm;
  const runtime = vm.runtime;

  const dependerKey = "THING"; // argument name of the constant menu, we always use
  const checkerKey = "MENU"; // argument name of the dependent menu, we always use

  class SPext {
    getInfo() {
      return {
        id: "SPext",
        name: "...",
        blocks: [
          {
            opcode: "func",
            blockType: Scratch.BlockType.REPORTER,
            text: "[THING] of [MENU]",
            arguments: {
              THING: { type: Scratch.ArgumentType.STRING, menu: "UNO" },
              MENU: { type: Scratch.ArgumentType.STRING, menu: "DEPENDENT" }
            },
          }
        ],
        menus: {
          DEPENDENT: { acceptReporters: true, items: "getDependentItems" },
          UNO: { acceptReporters: true, items: "getConstantItems" },
        },
      };
    }

    // Helper Funcs
    getConstantItems() {
      const menu = ["1", "2", "3"];
      if (!ScratchBlocks || !ScratchBlocks.selected) return menu;

      const block = ScratchBlocks.selected;
      block.inputList.forEach((input) => {
        if (input.name === checkerKey) {
          const otherInput = input.connection.targetBlock();
          if (!otherInput) return;
          otherInput.inputList[0].fieldRow[0].setValue(this.getDependentItems()[0]);
        }
      });
      return menu;
    }

    getDependentItems() {
      const defaultMenu = ["1", "11", "111"];
      let menu = [""];
      if (!ScratchBlocks || !ScratchBlocks.selected) return defaultMenu;

      const block = ScratchBlocks.selected;
      for (let i = 0; i < block.inputList.length; i++) {
        const input = block.inputList[i];
        if (input.name === dependerKey) {
          const otherInput = input.connection.targetBlock();
          if (!otherInput) return defaultMenu;

          const value = otherInput.inputList[0].fieldRow[0].value_;
          switch (value) {
            case "1":
              menu = ["1", "11", "111"];
              break;
            case "2":
              menu = ["2", "22", "222"];
              break;
            case "3":
              menu = ["3", "33", "333"];
              break;
            default: return defaultMenu;
          }
        }
      }
      return menu;
    }

    // Block Funcs
    func() {
      
    }
  }

  Scratch.extensions.register(new SPext());
})(Scratch);
