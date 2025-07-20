// Name: PM Custom Shape API
// ID: SPext
// Description: Testing PenguinMods Custom Block Shape API
// By: SharkPool
// Licence: MIT

// Version V.1.0.0

(function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) throw new Error("... must run unsandboxed!");

  const vm = Scratch.vm;
  const runtime = vm.runtime;

  if (Scratch.gui) Scratch.gui.getBlockly().then(SB => {
    SB.BlockSvg.registerCustomShape("test", {
      emptyInputPath: "m0 0m13 0H32l16 16-16 16H16l2 0a16 16 0 01-4-32z",
      emptyInputWidth: 12 * SB.BlockSvg.GRID_UNIT,
      leftPath: (block) => {
        const r = block.edgeShapeWidth_;
        return [
          `a ${r} ${r} 0 0 1 0 -${2 * r}`
        ];
      },
      rightPath: (block) => {
        const s = block.edgeShapeWidth_;
        return [
          `l ${s} ${s}`,
          `l -${s} ${s}`
        ];
      },
      /*blockPadding: {
        internal: {},
        external: {
          2: 100
        }
      }*/
    });

    SB.BlockSvg.registerCustomShape("test2", {
      emptyInputPath: "m0 0m15 0H48zL0 0 0 10 7 10c4 2 4 9 0 11L0 21 0 32 48 32 48 21 41 21c-4-2-4-9 0-11L48 10 48 0z",
      emptyInputWidth: 12 * SB.BlockSvg.GRID_UNIT,
      leftPath: (block) => {
        const w = block.edgeShapeWidth_;
        return [
          `h-${w} v-${w * .67} h10`,
          `c4 -2 4 -12 0 -${w * .67}`,
          `h-10 v-${w * .67}`,
        ];
      },
      rightPath: (block) => {
        const w = block.edgeShapeWidth_;
        return [
          `h${w} v${w * .67} h-10`,
          `c-4 2 -4 12 0 ${w * .67}`,
          `h10 v${w * .67}`,
        ];
      }
    });
  });

  class SPext {
    getInfo() {
      return {
        id: "SPext",
        name: "PM Custom Shape API",
        blocks: [
          {
            opcode: "func",
            blockType: Scratch.BlockType.REPORTER,
            blockShape: "test",
            text: "custom shape [TEST] test [THING]",
            arguments: {
              THING: { type: Scratch.ArgumentType.STRING, defaultValue: "" },
              TEST: { shape: "test" }
            },
          },
          {
            opcode: "func2",
            blockType: Scratch.BlockType.REPORTER,
            blockShape: "test2",
            forceOutputType: "test2",
            text: "custom shape [TEST] test 2",
            arguments: {
              TEST: { shape: "test2", check: "test2" }
            },
          },
        ],
      };
    }

    // Block Funcs
    func() {
      
    }

    func2() {
      
    }
  }

  Scratch.extensions.register(new SPext());
})(Scratch);
