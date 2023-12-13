// Name: Added Motion
// ID: SPaddedmotion
// Description: New Motion related Blocks!
// By: SharkPool

//  Version 1.4.0

(function(Scratch) {
  "use strict";

  if (!Scratch.extensions.unsandboxed) throw new Error("Added Motion must run unsandboxed");

  const vm = Scratch.vm;
  const runtime = vm.runtime;

  const menuIconURI =
"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxODYuMTkwNjEiIGhlaWdodD0iMTg2LjE5MDYxIiB2aWV3Qm94PSIwLDAsMTg2LjE5MDYxLDE4Ni4xOTA2MSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE0Ny4yNDMxMywtODcuMjQ0MTIpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0xNDcuMjQzMTMsMTgwLjMzOTQzYzAsLTUxLjQxNTEyIDQxLjY4MDE4LC05My4wOTUzIDkzLjA5NTMxLC05My4wOTUzYzUxLjQxNTEyLDAgOTMuMDk1MzEsNDEuNjgwMTggOTMuMDk1MzEsOTMuMDk1MzFjMCw1MS40MTUxMiAtNDEuNjgwMTgsOTMuMDk1MzEgLTkzLjA5NTMsOTMuMDk1MzFjLTUxLjQxNTEyLDAgLTkzLjA5NTMsLTQxLjY4MDE4IC05My4wOTUzLC05My4wOTUzeiIgZmlsbD0iIzRjOTdmZiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAiLz48cGF0aCBkPSJNMjQwLjMzODQ0LDI1Ny4wMzAyMmMtOS42OTA1MywwIC0xNy41NDYyNywtMzQuMzM1NjQgLTE3LjU0NjI3LC03Ni42OTA3OWMwLC00Mi4zNTUxNSA3Ljg1NTc0LC03Ni42OTA3OSAxNy41NDYyNywtNzYuNjkwNzljOS42OTA1MywwIDE3LjU0NjI3LDM0LjMzNTY0IDE3LjU0NjI3LDc2LjY5MDc5YzAsNDIuMzU1MTUgLTcuODU1NzQsNzYuNjkwNzkgLTE3LjU0NjI3LDc2LjY5MDc5eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjUiLz48cGF0aCBkPSJNMzIxLjMzODQ2LDE4MC4zMzk0M2MwLDguNTQwMzMgLTM2LjI2NDk1LDE1LjQ2MzY0IC04MS4wMDAwMiwxNS40NjM2NGMtNDQuNzM1MDcsMCAtODEuMDAwMDIsLTYuOTIzMzEgLTgxLjAwMDAyLC0xNS40NjM2NGMwLC04LjU0MDMzIDM2LjI2NDk1LC0xNS40NjM2NCA4MS4wMDAwMiwtMTUuNDYzNjRjNDQuNzM1MDcsMCA4MS4wMDAwMiw2LjkyMzMxIDgxLjAwMDAyLDE1LjQ2MzY0eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjUiLz48cGF0aCBkPSJNMjgwLjc2MTM2LDIyNC4wMDE0MmMtMC44Mjg0OSwwIC0xLjY1Njk4LC0wLjMxNjYxIC0yLjI5MDIxLC0wLjk0NzIxbC04MC44NDU4NCwtODAuODQ4NDhjLTEuMjYzODQsLTEuMjYzODQgLTEuMjYzODQsLTMuMzE2NTcgMCwtNC41ODA0MWMxLjI2Mzg0LC0xLjI2Mzg0IDMuMzE2NTcsLTEuMjYzODQgNC41ODA0MSwwbDgwLjg0NTg0LDgwLjg0NTg0YzEuMjYzODQsMS4yNjM4NCAxLjI2Mzg0LDMuMzE2NTcgMCw0LjU4MDQxYy0wLjYzMzI0LDAuNjMwNiAtMS40NjE3MywwLjk0OTg1IC0yLjI5MDIxLDAuOTQ5ODV6IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMTAiLz48cGF0aCBkPSJNMjMxLjYzMDEyLDE1My44MTUwNmMwLDkuODM4OTIgLTcuOTc2MTQsMTcuODE1MDYgLTE3LjgxNTA2LDE3LjgxNTA2Yy05LjgzODkyLDAgLTE3LjgxNTA2LC03Ljk3NjE0IC0xNy44MTUwNiwtMTcuODE1MDZjMCwtOS44Mzg5MiA3Ljk3NjE0LC0xNy44MTUwNiAxNy44MTUwNiwtMTcuODE1MDZjOS44Mzg5MiwwIDE3LjgxNTA2LDcuOTc2MTQgMTcuODE1MDYsMTcuODE1MDZ6IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMTAiLz48cGF0aCBkPSJNMjI5LjE2MDcsMTkwLjU5MzU5Yy05LjU3NTY1LC0yLjI2MTExIC0xNS41MDUyNCwtMTEuODU2NzEgLTEzLjI0NDEyLC0yMS40MzIzNWMyLjI2MTExLC05LjU3NTY1IDExLjg1NjcxLC0xNS41MDUyNCAyMS40MzIzNSwtMTMuMjQ0MTJjOS41NzU2NSwyLjI2MTExIDE1LjUwNTI0LDExLjg1NjcxIDEzLjI0NDEyLDIxLjQzMjM1Yy0yLjI2MTExLDkuNTc1NjUgLTExLjg1NjcxLDE1LjUwNTI0IC0yMS40MzIzNSwxMy4yNDQxMnoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIxMCIvPjxwYXRoIGQ9Ik0yNzAuNTAyOTMsMTkyLjY4NTI0YzAsOS44Mzg5MiAtNy45Nzg3OCwxNy44MTc2OSAtMTcuODE3NjksMTcuODE3NjljLTkuODM4OTIsMCAtMTcuODE1MDYsLTcuOTc4NzggLTE3LjgxNTA2LC0xNy44MTc2OWMwLC05LjgzODkyIDcuOTc2MTQsLTE3LjgxNTA2IDE3LjgxNTA2LC0xNy44MTUwNmM5LjgzODkyLDAgMTcuODE3NjksNy45Nzg3OCAxNy44MTc2OSwxNy44MTUwNnoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIxMCIvPjxwYXRoIGQ9Ik0yODAuNzYxMzYsMjI0LjAwMTQyYy0wLjgyODQ5LDAgLTEuNjU2OTgsLTAuMzE2NjEgLTIuMjkwMjEsLTAuOTQ3MjFsLTE5Ljg0MTQxLC0xOS44NDE0MWMtMS4yNjY0OCwtMS4yNjM4NCAtMS4yNjY0OCwtMy4zMTY1NyAwLC00LjU4MDQxYzEuMjY2NDgsLTEuMjYzODQgMy4zMTM5MywtMS4yNjM4NCA0LjU4MDQxLDBsMTkuODQxNDEsMTkuODQxNDFjMS4yNjM4NCwxLjI2Mzg0IDEuMjYzODQsMy4zMTY1NyAwLDQuNTgwNDFjLTAuNjMzMjQsMC42Mjc5NiAtMS40NjE3MywwLjk0NzIxIC0yLjI5MDIxLDAuOTQ3MjF6IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMTAiLz48cGF0aCBkPSJNMjgwLjc2MTM2LDIyNC4wMDE0MmMtMC44Mjg0OSwwIC0xLjY1Njk4LC0wLjMxNjYxIC0yLjI5MDIxLC0wLjk0NzIxbC04MC44NDU4NCwtODAuODQ4NDhjLTEuMjYzODQsLTEuMjYzODQgLTEuMjYzODQsLTMuMzE2NTcgMCwtNC41ODA0MWMxLjI2Mzg0LC0xLjI2Mzg0IDMuMzE2NTcsLTEuMjYzODQgNC41ODA0MSwwbDgwLjg0NTg0LDgwLjg0NTg0YzEuMjYzODQsMS4yNjM4NCAxLjI2Mzg0LDMuMzE2NTcgMCw0LjU4MDQxYy0wLjYzMzI0LDAuNjMwNiAtMS40NjE3MywwLjk0OTg1IC0yLjI5MDIxLDAuOTQ5ODV6IiBmaWxsPSIjNGM5N2ZmIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIvPjxwYXRoIGQ9Ik0yMzEuNjMwMTIsMTUzLjgxNTA2YzAsOS44Mzg5MiAtNy45NzYxNCwxNy44MTUwNiAtMTcuODE1MDYsMTcuODE1MDZjLTkuODM4OTIsMCAtMTcuODE1MDYsLTcuOTc2MTQgLTE3LjgxNTA2LC0xNy44MTUwNmMwLC05LjgzODkyIDcuOTc2MTQsLTE3LjgxNTA2IDE3LjgxNTA2LC0xNy44MTUwNmM5LjgzODkyLDAgMTcuODE1MDYsNy45NzYxNCAxNy44MTUwNiwxNy44MTUwNnoiIGZpbGw9IiM0Yzk3ZmYiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PHBhdGggZD0iTTIyOS4xNjA3LDE5MC41OTM1OWMtOS41NzU2NSwtMi4yNjExMSAtMTUuNTA1MjQsLTExLjg1NjcxIC0xMy4yNDQxMiwtMjEuNDMyMzVjMi4yNjExMSwtOS41NzU2NSAxMS44NTY3MSwtMTUuNTA1MjQgMjEuNDMyMzUsLTEzLjI0NDEyYzkuNTc1NjUsMi4yNjExMSAxNS41MDUyNCwxMS44NTY3MSAxMy4yNDQxMiwyMS40MzIzNWMtMi4yNjExMSw5LjU3NTY1IC0xMS44NTY3MSwxNS41MDUyNCAtMjEuNDMyMzUsMTMuMjQ0MTJ6IiBmaWxsPSIjNGM5N2ZmIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIvPjxwYXRoIGQ9Ik0yNzAuNTAyOTMsMTkyLjY4NTI0YzAsOS44Mzg5MiAtNy45Nzg3OCwxNy44MTc2OSAtMTcuODE3NjksMTcuODE3NjljLTkuODM4OTIsMCAtMTcuODE1MDYsLTcuOTc4NzggLTE3LjgxNTA2LC0xNy44MTc2OWMwLC05LjgzODkyIDcuOTc2MTQsLTE3LjgxNTA2IDE3LjgxNTA2LC0xNy44MTUwNmM5LjgzODkyLDAgMTcuODE3NjksNy45Nzg3OCAxNy44MTc2OSwxNy44MTUwNnoiIGZpbGw9IiM0Yzk3ZmYiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PHBhdGggZD0iTTI3OC40NzExNSwyMjMuMDU0MjFsLTE5Ljg0MTQxLC0xOS44NDE0MWMtMS4yNjY0OCwtMS4yNjM4NCAtMS4yNjY0OCwtMy4zMTY1NyAwLC00LjU4MDQxYzEuMjY2NDgsLTEuMjYzODQgMy4zMTM5MywtMS4yNjM4NCA0LjU4MDQxLDBsMTkuODQxNDEsMTkuODQxNDFjMS4yNjM4NCwxLjI2Mzg0IDEuMjYzODQsMy4zMTY1NyAwLDQuNTgwNDFjLTAuNjMzMjQsMC42Mjc5NiAtMS40NjE3MywwLjk0NzIxIC0yLjI5MDIxLDAuOTQ3MjFjMCwwIC0xLjY1Njk3LC0wLjMxNjYxIC0yLjI5MDIsLTAuOTQ3MjF6IiBmaWxsPSIjNGM5N2ZmIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIvPjxwYXRoIGQ9Ik0yNTMuNTAzNzMsMTM5LjgwMjY0YzEuODUwNDcsMTEuNDYwMDMgMi45Mzc0NSwyNS40NDM1OSAyLjkzNzQ1LDQwLjUzNjc5YzAsMTMuMDUyMTEgLTAuODEyODcsMjUuMjc0NDEgLTIuMjI5NDEsMzUuNzUyNTMiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI1Ii8+PHBhdGggZD0iTTI5My4xNjIwNCwxOTIuMDYyNzFjLTE0LjE4MjE1LDIuMzMxMTUgLTMyLjY0MDg0LDMuNzQwMzYgLTUyLjgyMzYxLDMuNzQwMzZjLTE1LjgwNzQ4LDAgLTMwLjU1NzM3LC0wLjg2NDQ1IC00My4wMjMzMiwtMi4zNTkyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjUiLz48cGF0aCBkPSJNMTc1Ljk1NTEsMTkwLjg0Nzk1YzAsLTcuMDA5ODUgNS42ODI2MiwtMTIuNjkyNDcgMTIuNjkyNDcsLTEyLjY5MjQ3YzcuMDA5ODUsMCAxMi42OTI0Nyw1LjY4MjYxIDEyLjY5MjQ3LDEyLjY5MjQ3YzAsNy4wMDk4NSAtNS42ODI2MSwxMi42OTI0NiAtMTIuNjkyNDcsMTIuNjkyNDZjLTcuMDA5ODUsMCAtMTIuNjkyNDcsLTUuNjgyNjEgLTEyLjY5MjQ3LC0xMi42OTI0NnoiIGZpbGw9IiM0Yzk3ZmYiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI1Ii8+PHBhdGggZD0iTTI0MS4yNDYwMywxMzIuMjcyNDhjMCwtNy4wMDk4NiA1LjY4MjYyLC0xMi42OTI0NyAxMi42OTI0NywtMTIuNjkyNDdjNy4wMDk4NSwwIDEyLjY5MjQ3LDUuNjgyNjEgMTIuNjkyNDcsMTIuNjkyNDdjMCw3LjAwOTg1IC01LjY4MjYxLDEyLjY5MjQ3IC0xMi42OTI0NywxMi42OTI0N2MtNy4wMDk4NSwwIC0xMi42OTI0NywtNS42ODI2MiAtMTIuNjkyNDcsLTEyLjY5MjQ3eiIgZmlsbD0iIzRjOTdmZiIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjUiLz48L2c+PC9nPjwvc3ZnPg=="

  class SPAddedMotion {
    getInfo() {
      return {
        id: "SPaddedmotion",
        name: "Added Motion",
        color1: "#4c97ff",
        color2: "#3373cc",
        menuIconURI,
        blocks: [
          {
            opcode: "moveinangledirection",
            blockType: Scratch.BlockType.COMMAND,
            text: "move [NAME] [STEPS] steps towards direction [DIRECTION]",
            filter: [Scratch.TargetType.SPRITE],
            arguments: {
              STEPS: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 10,
              },
              DIRECTION: {
                type: Scratch.ArgumentType.ANGLE,
                defaultValue: 90,
              },
              NAME: {
                type: Scratch.ArgumentType.STRING,
                menu: "TARGETS2",
              }
            }
          },
          {
            opcode: "rotateStyle",
            blockType: Scratch.BlockType.REPORTER,
            text: "rotation style",
            filter: [Scratch.TargetType.SPRITE],
          },
          "---",
          {
            opcode: "randomcoordinate",
            blockType: Scratch.BlockType.REPORTER,
            text: "random [COORDINATE] with max change [MAXCHANGE] in [STAGE] stage",
            arguments: {
              COORDINATE: {
                type: Scratch.ArgumentType.STRING,
                menu: "COORDINATE",
              },
              MAXCHANGE: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 50,
              },
              STAGE: {
                type: Scratch.ArgumentType.STRING,
                menu: "STAGE",
              }
            }
          },
          { blockType: Scratch.BlockType.LABEL, text: "Sprite Controlling" },
          {
            opcode: "moveSprite",
            blockType: Scratch.BlockType.COMMAND,
            text: "set [NAME] position to x [x] y [y]",
            arguments: {
              x: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0,
              },
              y: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0,
              },
              NAME: {
                type: Scratch.ArgumentType.STRING,
                menu: "TARGETS",
              }
            }
          },
          {
            opcode: "moveSprite2",
            blockType: Scratch.BlockType.COMMAND,
            text: "change [NAME] position by x [x] y [y]",
            arguments: {
              x: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 10,
              },
              y: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0,
              },
              NAME: {
                type: Scratch.ArgumentType.STRING,
                menu: "TARGETS",
              }
            }
          },
          "---",
          {
            opcode: "betterGlide",
            blockType: Scratch.BlockType.COMMAND,
            text: "glide [NAME] [SECS] secs to x: [X] y: [Y]",
            filter: [Scratch.TargetType.SPRITE],
            arguments: {
              X: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 100,
              },
              Y: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0,
              },
              SECS: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 1,
              },
              NAME: {
                type: Scratch.ArgumentType.STRING,
                menu: "TARGETS2",
              }
            }
          },
          {
            opcode: "whileGlide",
            blockType: Scratch.BlockType.LOOP,
            text: "while gliding [NAME] [SECS] secs to x: [X] y: [Y] run",
            filter: [Scratch.TargetType.SPRITE],
            arguments: {
              X: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 100,
              },
              Y: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0,
              },
              SECS: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 1,
              },
              NAME: {
                type: Scratch.ArgumentType.STRING,
                menu: "TARGETS2",
              }
            }
          },
          "---",
          {
            opcode: "directSprite",
            blockType: Scratch.BlockType.COMMAND,
            text: "set [NAME] direction to [ANGLE]",
            arguments: {
              ANGLE: {
                type: Scratch.ArgumentType.ANGLE,
                defaultValue: 90,
              },
              NAME: {
                type: Scratch.ArgumentType.STRING,
                menu: "TARGETS",
              }
            }
          },
          {
            opcode: "directSprite2",
            blockType: Scratch.BlockType.COMMAND,
            text: "change [NAME] direction by [ANGLE] degrees",
            arguments: {
              ANGLE: {
                type: Scratch.ArgumentType.ANGLE,
                defaultValue: 15,
              },
              NAME: {
                type: Scratch.ArgumentType.STRING,
                menu: "TARGETS",
              }
            }
          },
          "---",
          {
            opcode: "sizeSprite",
            blockType: Scratch.BlockType.COMMAND,
            text: "set [NAME] size to [SIZE]",
            arguments: {
              SIZE: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 100,
              },
              NAME: {
                type: Scratch.ArgumentType.STRING,
                menu: "TARGETS",
              }
            }
          },
          {
            opcode: "sizeSprite2",
            blockType: Scratch.BlockType.COMMAND,
            text: "change [NAME] size by [SIZE]",
            arguments: {
              SIZE: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 10,
              },
              NAME: {
                type: Scratch.ArgumentType.STRING,
                menu: "TARGETS",
              }
            }
          }
        ],
        menus: {
          COORDINATE: ["x", "y"],
          STAGE: ["freeroam", "boxed"],
          TARGETS: {
            acceptReporters: true,
            items: this._getTargets(false),
          },
          TARGETS2: {
            acceptReporters: true,
            items: this._getTargets(true),
          }
        }
      };
    }

    moveSprite(args, util) {
      const x = Scratch.Cast.toNumber(args.x);
      const y = Scratch.Cast.toNumber(args.y);
      const target = runtime.getSpriteTargetByName(args.NAME);
      target.setXY(x, y);
    }

    moveSprite2(args, util) {
      const x = Scratch.Cast.toNumber(args.x);
      const y = Scratch.Cast.toNumber(args.y);
      const target = runtime.getSpriteTargetByName(args.NAME);
      target.setXY(target.x + x, target.y + y);
    }

    directSprite(args, util) {
      const angle = Scratch.Cast.toNumber(args.ANGLE);
      const target = runtime.getSpriteTargetByName(args.NAME);
      target.setDirection(angle);
    }

    directSprite2(args, util) {
      const angle = Scratch.Cast.toNumber(args.ANGLE);
      const target = runtime.getSpriteTargetByName(args.NAME);
      target.setDirection(target.direction + angle);
    }

    sizeSprite(args, util) {
      const size = Scratch.Cast.toNumber(args.SIZE);
      const target = runtime.getSpriteTargetByName(args.NAME);
      target.setSize(size);
    }

    sizeSprite2(args, util) {
      const size = Scratch.Cast.toNumber(args.SIZE);
      const target = runtime.getSpriteTargetByName(args.NAME);
      target.setSize(target.size + size);
    }

    moveinangledirection(args, util) {
      const steps = -Scratch.Cast.toNumber(args.STEPS);
      const direction = Scratch.Cast.toNumber(args.DIRECTION);
      const radians = (Math.PI / 180) * ((direction + 90) * -1);
      const deltaX = steps * Math.cos(radians);
      const deltaY = steps * Math.sin(radians);
      if (args.NAME === "_myself_") {
        util.target.setXY(util.target.x + deltaX, util.target.y + deltaY);
      } else {
        const target = runtime.getSpriteTargetByName(args.NAME);
        target.setXY(target.x + deltaX, target.y + deltaY);
      }
    }

    randomcoordinate(args, util) {
      const maxChange = Scratch.Cast.toNumber(args.MAXCHANGE);
      let coordinateValue = util.target[args.COORDINATE];
      const randomChange = Math.floor(Math.random() * (maxChange + 1));
      const sign = Math.random() < 0.5 ? -1 : 1;
      if (args.STAGE === "freeroam") {
        coordinateValue += sign * randomChange;
      } else if (args.STAGE === "boxed") {
        const canvasWidth = parseFloat(Scratch.renderer.canvas.style.width) / 2;
        const canvasHeight = parseFloat(Scratch.renderer.canvas.style.height) / 2;
        coordinateValue += sign * randomChange;
        coordinateValue = Math.min(args.COORDINATE === "x" ? canvasWidth : canvasHeight, Math.abs(coordinateValue)) * sign;
      }
      return coordinateValue;
    }

    rotateStyle(_, util) { return util.target.rotationStyle }

    betterGlide(args, util, loop) {
      const target = args.NAME === "_myself_" ? util.target : runtime.getSpriteTargetByName(args.NAME);
      if (!util.stackFrame.startTime) {
        util.stackFrame.startTime = new Date().getTime();
        util.stackFrame.duration = Scratch.Cast.toNumber(args.SECS);
        util.stackFrame.startX = target.x;
        util.stackFrame.startY = target.y;
        util.stackFrame.endX = Scratch.Cast.toNumber(args.X);
        util.stackFrame.endY = Scratch.Cast.toNumber(args.Y);
        if (util.stackFrame.duration <= 0) {
          target.setXY(util.stackFrame.endX, util.stackFrame.endY);
          return;
        }
        if (loop === "on") {
          util.startBranch(1, true);
        } else {
          util.yield();
        }
      } else {
        const currentTime = new Date().getTime();
        const timeElapsed = currentTime - util.stackFrame.startTime;
        if (timeElapsed < util.stackFrame.duration * 1000) {
          const frac = timeElapsed / (util.stackFrame.duration * 1000);
          const dx = frac * (util.stackFrame.endX - util.stackFrame.startX);
          const dy = frac * (util.stackFrame.endY - util.stackFrame.startY);
          target.setXY(
            util.stackFrame.startX + dx,
            util.stackFrame.startY + dy
          );
          if (loop === "on") {
            util.startBranch(1, true);
          } else {
            util.yield();
          }
        } else {
          target.setXY(util.stackFrame.endX, util.stackFrame.endY);
        }
      }
    }

    whileGlide(args, util) { this.betterGlide(args, util, "on") }

    _getTargets(enable) {
      const spriteNames = [];
      if (enable) spriteNames.push({ text: "myself", value: "_myself_" });
      const targets = Scratch.vm.runtime.targets;
      for (let index = 1; index < targets.length; index++) {
        const target = targets[index];
        if (target.isOriginal) {
          const targetName = target.getName();
          spriteNames.push({ text: targetName, value: targetName });
        }
      }
      return spriteNames.length > 0 ? spriteNames : [""];
    }
  }

  Scratch.extensions.register(new SPAddedMotion());
})(Scratch);
