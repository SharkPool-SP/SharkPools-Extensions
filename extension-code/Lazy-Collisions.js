// Name: Lazy Collisions
// ID: LZcollisionsSP
// Description: Easy and Simple To Use Collision System for Sprites
// By: SharkPool, food

// Version V.2.0.0

(function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) throw new Error("Lazy Collisions must run unsandboxed");

  const vm = Scratch.vm;
  const runtime = vm.runtime;

  const menuIconURI =
"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxNDMuMjU1MzYiIGhlaWdodD0iMTQzLjI1NTM2IiB2aWV3Qm94PSIwLDAsMTQzLjI1NTM2LDE0My4yNTUzNiI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE2OC4zNzIzMiwtMTA4LjM3MjMyKSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMTY4LjM3MjMyLDE4MGMwLC0zOS41NTg4NyAzMi4wNjg4LC03MS42Mjc2OCA3MS42Mjc2OCwtNzEuNjI3NjhjMzkuNTU4ODgsMCA3MS42Mjc2OCwzMi4wNjg4IDcxLjYyNzY4LDcxLjYyNzY4YzAsMzkuNTU4ODggLTMyLjA2ODgsNzEuNjI3NjggLTcxLjYyNzY4LDcxLjYyNzY4Yy0zOS41NTg4NywwIC03MS42Mjc2OCwtMzIuMDY4OCAtNzEuNjI3NjgsLTcxLjYyNzY4eiIgZmlsbD0iIzVjYjFkNiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiLz48cGF0aCBkPSJNMjAzLjkzNjQ1LDE5Ni40MDI0OGMtMi4zMzMwNCwwIC00LjIyNDM2LC0xLjg5MTMxIC00LjIyNDM2LC00LjIyNDM2di00Ni4xNTIzNGMwLC0yLjMzMzA1IDEuODkxMzEsLTQuMjI0MzYgNC4yMjQzNiwtNC4yMjQzNmg0Ni4xNTIzNGMyLjMzMzA0LDAgNC4yMjQzNiwxLjg5MTMxIDQuMjI0MzYsNC4yMjQzNnY0Ni4xNTIzNGMwLDIuMzMzMDUgLTEuODkxMzIsNC4yMjQzNiAtNC4yMjQzNiw0LjIyNDM2eiIgZmlsbD0iIzVjYjFkNiIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjUiLz48cGF0aCBkPSJNMjI5LjkxMTIyLDIxOC4xOTg1N2MtMi4zMzMwNSwwIC00LjIyNDM2LC0xLjg5MTMyIC00LjIyNDM2LC00LjIyNDM2di00Ni4xNTIzM2MwLC0yLjMzMzA1IDEuODkxMzEsLTQuMjI0MzYgNC4yMjQzNiwtNC4yMjQzNmg0Ni4xNTIzM2MyLjMzMzA1LDAgNC4yMjQzNiwxLjg5MTMyIDQuMjI0MzYsNC4yMjQzNnY0Ni4xNTIzM2MwLDIuMzMzMDQgLTEuODkxMzEsNC4yMjQzNiAtNC4yMjQzNiw0LjIyNDM2eiIgZmlsbD0iIzVjYjFkNiIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjUiLz48cGF0aCBkPSJNMjI5Ljg3OTM5LDE5Ni42MjIwNWMtMi4zMzMwNSwwIC00LjIyNDM2LC0xLjg5MTMxIC00LjIyNDM2LC00LjIyNDM2di0yNC41NTIzNGMwLC0yLjMzMzA0IDEuODkxMzEsLTQuMjI0MzYgNC4yMjQzNiwtNC4yMjQzNmgyMC4zNTIzNGMyLjMzMzA1LDAgNC4yMjQzNiwxLjg5MTMxIDQuMjI0MzYsNC4yMjQzNnYyNC41NTIzNGMwLDIuMzMzMDUgLTEuODkxMzEsNC4yMjQzNiAtNC4yMjQzNiw0LjIyNDM2eiIgZmlsbD0iIzUzOWZjMSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjUiLz48cGF0aCBkPSJNMjIzLjAyOTYxLDE5My44NzExOXYtNS4zODQ2MmgzNC4wNTE4OWMwLDAgMCwxLjY3MjM1IDAsMi41NDM2NmMwLDAuOTIwODIgLTAuMTIzMzYsMi44NDA5NSAtMC4zMTQ2NSwyLjg0MDk1Yy0xLjk4MDc5LDAgLTMzLjczNzI1LDAgLTMzLjczNzI1LDB6IiBmaWxsPSIjNTM5ZmMxIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMCIvPjxwYXRoIGQ9Ik0yMjguMTk0NDUsMTYxLjAwNzk0aDQuN3YzOC4xNDEwMmgtNC43eiIgZmlsbD0iIzUzOWZjMSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjAiLz48cGF0aCBkPSJNMjQ3LjE1LDE2MS4wMDc5NGg0Ljd2MzguMTQxMDJoLTQuN3oiIGZpbGw9IiM1MzlmYzEiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIwIi8+PHBhdGggZD0iTTIzNy43LDE2MS4wMDc5NGg0Ljd2MzguMTQxMDJoLTQuN3oiIGZpbGw9IiM1MzlmYzEiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIwIi8+PHBhdGggZD0iTTIyMy4wMjk2MSwxODIuNTYzNXYtNS4zODQ2MmgzNC4wNTE4OXY1LjM4NDYyeiIgZmlsbD0iIzUzOWZjMSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjAiLz48cGF0aCBkPSJNMjIzLjAyOTYxLDE3MS40ODY1N2MwLDAgMCwtMS43ODc2MyAwLC0yLjY4MzYxYzAsLTAuODk4ODggMC4wOTY1MiwtMi43MDEwMSAwLjM3MzYxLC0yLjcwMTAxYzIuMzU2MTksMCAzMy42NzgyOCwwIDMzLjY3ODI4LDB2NS4zODQ2MnoiIGZpbGw9IiM1MzlmYzEiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIwIi8+PC9nPjwvZz48L3N2Zz4=";

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
              INDEX: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 }
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
        case "bottom": return baseCheck && aabb2.left < thisTarget.x < aabb2.right;
        case "left side":
        case "right side": return baseCheck && aabb2.bottom < thisTarget.y < aabb2.top;
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
