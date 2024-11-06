// Name: Lazy Collisions
// ID: LZcollisionsSP
// Description: Easy and Simple To Use Collision System for Sprites
// By: SharkPool, food

// Version V.2.0.1

(function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) throw new Error("Lazy Collisions must run unsandboxed");

  const menuIconURI =
"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDMuMjU1IiBoZWlnaHQ9IjE0My4yNTUiIHZpZXdCb3g9IjAgMCAxNDMuMjU1IDE0My4yNTUiPjxwYXRoIGQ9Ik0wIDcxLjYyOEMwIDMyLjA2OSAzMi4wNyAwIDcxLjYyOCAwczcxLjYyOCAzMi4wNyA3MS42MjggNzEuNjI4LTMyLjA3IDcxLjYyOC03MS42MjggNzEuNjI4UzAgMTExLjE4NiAwIDcxLjYyOCIgZmlsbD0iIzNlOGViMyIvPjxwYXRoIGQ9Ik03Ljk3OCA3MS42MjhjMC0zNS4xNTMgMjguNDk3LTYzLjY1IDYzLjY1LTYzLjY1czYzLjY1IDI4LjQ5NyA2My42NSA2My42NS0yOC40OTcgNjMuNjUtNjMuNjUgNjMuNjUtNjMuNjUtMjguNDk3LTYzLjY1LTYzLjY1IiBmaWxsPSIjNWNiMWQ2Ii8+PHBhdGggZD0iTTM1LjU2NCA4OC4wM2E0LjIyNCA0LjIyNCAwIDAgMS00LjIyNC00LjIyNFYzNy42NTRhNC4yMjQgNC4yMjQgMCAwIDEgNC4yMjQtNC4yMjVoNDYuMTUzYTQuMjI0IDQuMjI0IDAgMCAxIDQuMjI0IDQuMjI1djQ2LjE1MmE0LjIyNCA0LjIyNCAwIDAgMS00LjIyNCA0LjIyNHoiIGZpbGw9IiM1Y2IxZDYiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSI1Ii8+PHBhdGggZD0iTTYxLjUzOSAxMDkuODI3YTQuMjI0IDQuMjI0IDAgMCAxLTQuMjI0LTQuMjI1VjU5LjQ1YTQuMjI0IDQuMjI0IDAgMCAxIDQuMjI0LTQuMjI0aDQ2LjE1M2E0LjIyNCA0LjIyNCAwIDAgMSA0LjIyNCA0LjIyNHY0Ni4xNTJhNC4yMjQgNC4yMjQgMCAwIDEtNC4yMjQgNC4yMjV6IiBmaWxsPSIjNWNiMWQ2IiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iNSIvPjxwYXRoIGQ9Ik02MS41MDggODguMjVhNC4yMjQgNC4yMjQgMCAwIDEtNC4yMjUtNC4yMjRWNTkuNDczYTQuMjI0IDQuMjI0IDAgMCAxIDQuMjI0LTQuMjI0SDgxLjg2YTQuMjI0IDQuMjI0IDAgMCAxIDQuMjI0IDQuMjI0djI0LjU1M2E0LjIyNCA0LjIyNCAwIDAgMS00LjIyNCA0LjIyNHoiIGZpbGw9IiM1MzlmYzEiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSI1Ii8+PHBhdGggZD0iTTU0LjY1OCA4NS40OTl2LTUuMzg0aDM0LjA1MXYyLjU0M2MwIC45MjEtLjEyMyAyLjg0MS0uMzE0IDIuODQxeiIgZmlsbD0iIzUzOWZjMSIvPjxwYXRoIGQ9Ik01OS44MjIgNTIuNjM2aDQuN3YzOC4xNDFoLTQuN3ptMTguOTU2IDBoNC43djM4LjE0MWgtNC43em0tOS40NSAwaDQuN3YzOC4xNDFoLTQuN3oiIGZpbGw9IiM1MzlmYzEiLz48cGF0aCBkPSJNNTQuNjU4IDc0LjE5MnYtNS4zODVoMzQuMDUxdjUuMzg0em0wLTExLjA3N3YtMi42ODRjMC0uODk5LjA5Ni0yLjcwMS4zNzMtMi43MDFIODguNzF2NS4zODV6IiBmaWxsPSIjNTM5ZmMxIi8+PC9zdmc+";

  const vm = Scratch.vm;
  const runtime = vm.runtime;

  let patched = false;
  const patchGetTarget = () => {
    const ogFunc = runtime.getSpriteTargetByName;
    runtime.constructor.prototype.getSpriteTargetByName = function (spriteName) {
      const value = ogFunc.call(this, spriteName);
      if (value) return value;
      return runtime.getTargetById(spriteName);
    }
    patched = true;
  };

  class LZcollisionsSP {
    getInfo() {
      return {
        id: "LZcollisionsSP",
        name: "Lazy Collisions",
        color1: "#5cb1d6",
        color2: "#539fc1",
        color3: "#4a8eab",
        menuIconURI,
        blocks: [
          {
            opcode: "isOnSprite",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "is [SPRITE2] on [SIDE] of [SPRITE1] offset [OFFSET]?",
            arguments: {
              SIDE: { type: Scratch.ArgumentType.STRING, menu: "POSITION2" },
              SPRITE1: { type: Scratch.ArgumentType.STRING, menu: "TARGETS" },
              SPRITE2: { type: Scratch.ArgumentType.STRING, menu: "TARGETS" },
              OFFSET: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 }
            },
          },
          {
            opcode: "isOnSpriteSide",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "is [SPRITE2] near the [SIDE] of [SPRITE1] offset [OFFSET]?",
            arguments: {
              SIDE: { type: Scratch.ArgumentType.STRING, menu: "POSITION2" },
              SPRITE1: { type: Scratch.ArgumentType.STRING, menu: "TARGETS" },
              SPRITE2: { type: Scratch.ArgumentType.STRING, menu: "TARGETS" },
              OFFSET: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 }
            },
          },
          {
            opcode: "isSpriteLocation",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "is [SPRITE2] [SIDE] [SPRITE1] offset [OFFSET]?",
            arguments: {
              SIDE: { type: Scratch.ArgumentType.STRING, menu: "POSITION3" },
              SPRITE1: { type: Scratch.ArgumentType.STRING, menu: "TARGETS" },
              SPRITE2: { type: Scratch.ArgumentType.STRING, menu: "TARGETS" },
              OFFSET: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 }
            },
          },
          "---",
          {
            opcode: "setOnSprite",
            blockType: Scratch.BlockType.COMMAND,
            text: "put [SPRITE2] on [SIDE] of [SPRITE1] offset [OFFSET]",
            arguments: {
              SIDE: { type: Scratch.ArgumentType.STRING, menu: "POSITION" },
              SPRITE1: { type: Scratch.ArgumentType.STRING, menu: "TARGETS" },
              SPRITE2: { type: Scratch.ArgumentType.STRING, menu: "TARGETS" },
              OFFSET: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 }
            },
          },
          { blockType: Scratch.BlockType.LABEL, text: "Clone Target Finder" },
          {
            opcode: "findID",
            blockType: Scratch.BlockType.REPORTER,
            text: "ID of clone [INDEX] of [TARGET] with [VAR] set to [VAL]",
            arguments: {
              TARGET: { type: Scratch.ArgumentType.STRING, menu: "TARGETS" },
              VAR: { type: Scratch.ArgumentType.STRING, defaultValue: "my variable" },
              VAL: { type: Scratch.ArgumentType.STRING, defaultValue: "0" },
              INDEX: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 }
            },
          }
        ],
        menus: {
          TARGETS: {
            acceptReporters: true,
            items: "_getTargets"
          },
          POSITION: {
            acceptReporters: true,
            items: [
              "top", "bottom",
              "left side", "right side",
              "same top level", "same bottom level",
              "same left level", "same right level"
            ]
          },
          POSITION2: {
            acceptReporters: true,
            items: ["top", "bottom", "left side", "right side"]
          },
          POSITION3: ["above", "below", "beside left", "beside right"]
        }
      };
    }

    // Helpers
    _getTargets() {
      const spriteNames = [];
      spriteNames.push({ text: "myself", value: "_myself_" })
      const targets = Scratch.vm.runtime.targets;
      for (let index = 1; index < targets.length; index++) {
        const target = targets[index];
        const targetName = target.getName();
        if (target.isOriginal) spriteNames.push({ text: targetName, value: targetName });
      }
      return spriteNames.length > 0 ? spriteNames : [""];
    }

    getArgBounds(target1, target2, util) {
      let thisTarget = target2 === "_myself_" ? util.target : runtime.getSpriteTargetByName(target2);
      let target = target1 === "_myself_" ? util.target : runtime.getSpriteTargetByName(target1);
      if (!thisTarget) thisTarget = runtime.getTargetById(target2);
      if (!target) target = runtime.getTargetById(target1);
      if (!target || !thisTarget) return undefined;
      return { thisTarget, target, aabb : thisTarget.getBounds(), aabb2 : target.getBounds() };
    }

    // Block Funcs
    isOnSprite(args, util) {
      const caller = this.getArgBounds(args.SPRITE1, args.SPRITE2, util);
      if (caller === undefined) return false;
      const thisTarget = caller.thisTarget; const target = caller.target;
      const aabb = caller.aabb; let aabb2 = caller.aabb2;
      aabb2 = {
        top : aabb2.top + (aabb.height / 2), bottom : aabb2.bottom - (aabb.height / 2),
        left : aabb2.left - (aabb.width / 2), right : aabb2.right + (aabb.width / 2)
      };
      const baseCheck = this.isOnSpriteSide(args, util);
      switch (args.SIDE) {
        case "top":
        case "bottom": return baseCheck && aabb2.left < thisTarget.x && thisTarget.x < aabb2.right;
        case "left side":
        case "right side": return baseCheck && aabb2.bottom < thisTarget.y && thisTarget.y < aabb2.top;
        default: return false;
      }
    }

    isOnSpriteSide(args, util) {
      let offset = Scratch.Cast.toNumber(args.OFFSET);
      const caller = this.getArgBounds(args.SPRITE1, args.SPRITE2, util);
      if (caller === undefined) return false;
      const thisTarget = caller.thisTarget; const target = caller.target;
      const aabb = caller.aabb; let aabb2 = caller.aabb2;
      aabb2 = {
        top : aabb2.top + (aabb.height / 2), bottom : aabb2.bottom - (aabb.height / 2),
        left : aabb2.left - (aabb.width / 2), right : aabb2.right + (aabb.width / 2)
      };
      switch (args.SIDE) {
        case "top": return Math.round(thisTarget.y + offset) === Math.round(aabb2.top);
        case "bottom": return Math.round(thisTarget.y - offset) === Math.round(aabb2.bottom);
        case "left side": return Math.round(thisTarget.x - offset) === Math.round(aabb2.left);
        case "right side": return Math.round(thisTarget.x + offset) === Math.round(aabb2.right);
        default: return false;
      }
    }

    isSpriteLocation(args, util) {
      let offset = Scratch.Cast.toNumber(args.OFFSET);
      const caller = this.getArgBounds(args.SPRITE2, args.SPRITE1, util);
      if (caller === undefined) return false;
      const aabb = caller.aabb;
      const aabb2 = caller.aabb2;
      switch (args.SIDE) {
        case "above": return aabb2.bottom + offset > aabb.top;
        case "below": return aabb.bottom > aabb2.top - offset;
        case "beside left": return aabb.left > aabb2.right - offset;
        case "beside right": return aabb2.left + offset > aabb.right;
        default: return false;
      }
    }

    setOnSprite(args, util) {
      let offset = Scratch.Cast.toNumber(args.OFFSET);
      const caller = this.getArgBounds(args.SPRITE1, args.SPRITE2, util);
      if (caller === undefined) return;
      const thisTarget = caller.thisTarget; const target = caller.target;
      const aabb = caller.aabb; let aabb2 = caller.aabb2;
      let x = aabb2.left + (aabb2.width / 2); let y = aabb2.top - (aabb2.height / 2);
      aabb2 = {
        top : aabb2.top + (aabb.height / 2), bottom : aabb2.bottom - (aabb.height / 2),
        left : aabb2.left - (aabb.width / 2), right : aabb2.right + (aabb.width / 2)
      };
      switch (args.SIDE) {
        case "top": return thisTarget.setXY(x, aabb2.top + offset);
        case "bottom": return thisTarget.setXY(x, aabb2.bottom - offset);
        case "left side": return thisTarget.setXY(aabb2.left - offset, y);
        case "right side": return thisTarget.setXY(aabb2.right + offset, y);
        case "same top level": return thisTarget.setXY(thisTarget.x, aabb2.top + offset);
        case "same bottom level": return thisTarget.setXY(thisTarget.x, aabb2.bottom - offset);
        case "same left level": return thisTarget.setXY(aabb2.left - offset, thisTarget.y);
        case "same right level": return thisTarget.setXY(aabb2.right + offset, thisTarget.y);
        default: break;
      }
    }

    findID(args, util) {
      if (!patched) patchGetTarget();
      const target = args.TARGET === "_myself_" ? util.target : runtime.getSpriteTargetByName(args.TARGET);
      if (!target) return "";
      const clones = target.sprite.clones;
      let newTarget = [];
      for (let i = 1; i < clones.length; i++) {
        if (clones[i]) {
          const variable = clones[i].lookupVariableByNameAndType(args.VAR, "", clones[i]);
          const value = Scratch.Cast.toString(args.VAL);
          if (variable && Scratch.Cast.toString(variable.value) === value) newTarget.push(clones[i]);
        }
      }
      return newTarget[Scratch.Cast.toNumber(args.INDEX) - 1]?.id ?? "";
    }
  }

  Scratch.extensions.register(new LZcollisionsSP());
})(Scratch);
