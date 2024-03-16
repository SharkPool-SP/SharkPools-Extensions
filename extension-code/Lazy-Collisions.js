// Name: Lazy Collisions
// ID: LZcollisionsSP
// Description: Easy and Simple To Use Collision System for Sprites
// By: SharkPool

// Version V.1.1.0

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
            text: "is [SPRITE2] [SIDE] [SPRITE1]?",
            arguments: {
              SIDE: { type: Scratch.ArgumentType.STRING, menu: "POSITION3" },
              SPRITE1: { type: Scratch.ArgumentType.STRING, menu: "TARGETS" },
              SPRITE2: { type: Scratch.ArgumentType.STRING, menu: "TARGETS" }
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
            items: [
              "top", "bottom",
              "left side", "right side"
            ]
          },
          POSITION3: [
            "above", "below",
            "beside left", "beside right"
          ]
        }
      };
    }

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

    getCostumeInput(costume, target) {
      if (typeof costume === "number") {
        costume = Math.round(costume - 1);
        if (Scratch.Cast.toString(costume).includes("Infinity") || !costume) costume = 0;
        return costume;
      } else { return target.getCostumeIndexByName(Scratch.Cast.toString(costume)) }
    }

    getAttribute(sprite) {
      const costumeNum = sprite.currentCostume + 1;
      const costumeIndex = this.getCostumeInput(costumeNum, sprite);
      const costume = sprite.sprite.costumes[costumeIndex];
      const width = Scratch.Cast.toNumber(costume.size[0]);
      const height = Scratch.Cast.toNumber(costume.size[1]);
      return [Math.ceil(width), Math.ceil(height), (Math.round(sprite.size) - 100) / 2.1];
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

    isOnSprite(args, util) {
      let offset = Scratch.Cast.toNumber(args.OFFSET);
      let target1 = args.SPRITE1 === "_myself_" ? util.target : runtime.getSpriteTargetByName(args.SPRITE1);
      if (!target1) target1 = runtime.getTargetById(args.SPRITE1);
      if (!target1) return false;
      let target = args.SPRITE2 === "_myself_" ? util.target : runtime.getSpriteTargetByName(args.SPRITE2);
      if (!target) target = runtime.getTargetById(args.SPRITE2);
      if (!target) return false;
      const spriteAtt = this.getAttribute(target1);
      let x = [target1.x - (spriteAtt[0] / 2), target1.x + (spriteAtt[0] / 2)];
      let y = [target1.y - (spriteAtt[1] / 2), target1.y + (spriteAtt[1] / 2)];
      const spriteAtt2 = this.getAttribute(target);
      const myX = [target.x - (spriteAtt2[0] / 2), target.x + (spriteAtt2[0] / 2)];
      const myY = [target.y - (spriteAtt2[1] / 2), target.y + (spriteAtt2[1] / 2)];
      offset = offset + Math.round(spriteAtt[2] + spriteAtt2[2]);
      switch (args.SIDE) {
        case "top":
          y = Math.round(myY[0] - spriteAtt[1] / 2);
          return (y - offset === Math.round(target1.y) && myX[1] > x[0] && myX[0] < x[1]);
        case "bottom":
          y = Math.round(myY[1] + spriteAtt[1] / 2);
          return (y + offset === Math.round(target1.y) && myX[1] > x[0] && myX[0] < x[1]);
        case "left side":
          x = Math.round(myX[1] + spriteAtt[1] / 2);
          return (x + offset === Math.round(target1.x) && myY[1] > y[0] && myY[0] < y[1]);
        case "right side":
          x = Math.round(myX[0] - spriteAtt[1] / 2);
          return (x - offset === Math.round(target1.x) && myY[1] > y[0] && myY[0] < y[1]);
        default: return false;
      }
    }

    isOnSpriteSide(args, util) {
      let offset = Scratch.Cast.toNumber(args.OFFSET);
      let target1 = args.SPRITE1 === "_myself_" ? util.target : runtime.getSpriteTargetByName(args.SPRITE1);
      if (!target1) target1 = runtime.getTargetById(args.SPRITE1);
      if (!target1) return false;
      let target = args.SPRITE2 === "_myself_" ? util.target : runtime.getSpriteTargetByName(args.SPRITE2);
      if (!target) target = runtime.getTargetById(args.SPRITE2);
      if (!target) return false;
      const spriteAtt = this.getAttribute(target1);
      let x = [target1.x - (spriteAtt[0] / 2), target1.x + (spriteAtt[0] / 2)];
      let y = [target1.y - (spriteAtt[1] / 2), target1.y + (spriteAtt[1] / 2)];
      const spriteAtt2 = this.getAttribute(target);
      const myX = [target.x - (spriteAtt2[0] / 2), target.x + (spriteAtt2[0] / 2)];
      const myY = [target.y - (spriteAtt2[1] / 2), target.y + (spriteAtt2[1] / 2)];
      offset = offset + Math.round(spriteAtt[2] + spriteAtt2[2]);
      switch (args.SIDE) {
        case "top":
          y = Math.round(myY[0] - spriteAtt[1] / 2);
          return (y - offset === Math.round(target1.y));
        case "bottom":
          y = Math.round(myY[1] + spriteAtt[1] / 2);
          return (y + offset === Math.round(target1.y));
        case "left side":
          x = Math.round(myX[1] + spriteAtt[1] / 2);
          return (x + offset === Math.round(target1.x));
        case "right side":
          x = Math.round(myX[0] - spriteAtt[1] / 2);
          return (x - offset === Math.round(target1.x));
        default: return false;
      }
    }

    isSpriteLocation(args, util) {
      let sprite1 = args.SPRITE1 === "_myself_" ? util.target : runtime.getSpriteTargetByName(args.SPRITE1);
      if (!sprite1) sprite1 = runtime.getTargetById(args.SPRITE1);
      if (!sprite1) return false;
      let sprite2 = args.SPRITE2 === "_myself_" ? util.target : runtime.getSpriteTargetByName(args.SPRITE2);
      if (!sprite2) sprite2 = runtime.getTargetById(args.SPRITE2);
      if (!sprite2) return false;
      const attr1 = this.getAttribute(sprite1);
      const attr2 = this.getAttribute(sprite2);
      const target = [(attr1[1] / 2) * ((sprite2.size / 100) -1), (attr1[0] / 2) * ((sprite2.size / 100) -1)];
      const target2 = [(attr2[1] / 2) * ((sprite1.size / 100) -1), (attr2[0] / 2) * ((sprite1.size / 100) -1)];
      switch (args.SIDE) {
        case "below": return sprite2.y - target[0] < sprite1.y - target2[0];
        case "above": return sprite2.y + target[0] > sprite1.y + target2[0];
        case "beside right": return sprite2.x + target[0] > sprite1.x + target2[0];
        case "beside left": return sprite2.x - target[0] < sprite1.x - target2[0];
        default: return false;
      }
    }

    setOnSprite(args, util) {
      let offset = Scratch.Cast.toNumber(args.OFFSET);
      let target1 = args.SPRITE1 === "_myself_" ? util.target : runtime.getSpriteTargetByName(args.SPRITE1);
      if (!target1) target1 = runtime.getTargetById(args.SPRITE1);
      if (!target1) return;
      let target = args.SPRITE2 === "_myself_" ? util.target : runtime.getSpriteTargetByName(args.SPRITE2);
      if (!target) target = runtime.getTargetById(args.SPRITE2);
      if (!target) return;
      const spriteAtt = this.getAttribute(target1);
      const spriteAtt2 = this.getAttribute(target);
      let x; let y;
      const x2 = spriteAtt2[0] / 2;
      const y2 = spriteAtt2[1] / 2;
      offset = offset + Math.round(spriteAtt[2] + spriteAtt2[2]);
      switch (args.SIDE) {
        case "top":
          x = target1.x;
          y = target1.y + (spriteAtt[1] / 2) + y2;
          target.setXY(x, y + offset);
          break;
        case "bottom":
          x = target1.x;
          y = target1.y - (spriteAtt[1] / 2) - y2;
          target.setXY(x, y - offset);
          break;
        case "left side":
          x = target1.x - (spriteAtt[0] / 2) - x2;
          y = target1.y;
          target.setXY(x - offset, y);
          break;
        case "right side":
          x = target1.x + (spriteAtt[0] / 2) + x2;
          y = target1.y;
          target.setXY(x + offset, y);
          break;
        case "same top level":
          x = target.x;
          y = target1.y + (spriteAtt[1] / 2) + y2;
          target.setXY(x, y + offset);
          break;
        case "same bottom level":
          x = target.x;
          y = target1.y - (spriteAtt[1] / 2) - y2;
          target.setXY(x, y - offset);
          break;
        case "same left level":
          x = target1.x - (spriteAtt[0] / 2) - x2;
          y = target.y;
          target.setXY(x - offset, y);
          break;
        case "same right level":
          x = target1.x + (spriteAtt[0] / 2) + x2;
          y = target.y;
          target.setXY(x + offset, y);
          break;
        default: break;
      }
    }
  }

  Scratch.extensions.register(new LZcollisionsSP());
})(Scratch);
