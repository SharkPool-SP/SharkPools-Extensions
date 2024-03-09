// Name: Tile Grids
// ID: SPgrids
// Description: Place Sprites on Grids.
// By: SharkPool

// Version V.1.0.1

(function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) throw new Error("Tile Grids must run unsandboxed");

  const vm = Scratch.vm;
  const runtime = vm.runtime;
  let myGrids = [];

  const menuIconURI =
"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyODUiIGhlaWdodD0iMjg1IiB2aWV3Qm94PSIwLDAsMjg1LDI4NSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTk3LjUsLTM3LjUpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTk3LjUsMTgwYzAsLTc4LjcwMDU4IDYzLjc5OTQyLC0xNDIuNSAxNDIuNSwtMTQyLjVjNzguNzAwNTgsMCAxNDIuNSw2My43OTk0MiAxNDIuNSwxNDIuNWMwLDc4LjcwMDU4IC02My43OTk0MiwxNDIuNSAtMTQyLjUsMTQyLjVjLTc4LjcwMDU4LDAgLTE0Mi41LC02My43OTk0MiAtMTQyLjUsLTE0Mi41eiIgZmlsbD0iIzgxMDgwMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PHBhdGggZD0iTTExMS41LDE4MGMwLC03MC45Njg1OSA1Ny41MzE0MSwtMTI4LjUgMTI4LjUsLTEyOC41YzcwLjk2ODU5LDAgMTI4LjUsNTcuNTMxNDEgMTI4LjUsMTI4LjVjMCw3MC45Njg1OSAtNTcuNTMxNDEsMTI4LjUgLTEyOC41LDEyOC41Yy03MC45Njg1OSwwIC0xMjguNSwtNTcuNTMxNDEgLTEyOC41LC0xMjguNXoiIGZpbGw9IiNjNjBiMDAiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjxwYXRoIGQ9Ik0xNjcuNjI1LDI1Mi4zNzV2LTE0NC43NWgxNDQuNzV2MTQ0Ljc1eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjYiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PHBhdGggZD0iTTMxMS4xMjUsMjA0LjEyNWgtMTQxIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTI2NC4xMjUsMTA5djE0MiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik0yMTUuODc1LDEwOXYxNDIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNMTY5LDE1NS44NzVoMTQyIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTIyMy43NSwxOTYuMjV2LTMyLjVoMzIuNXYzMi41eiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PHBhdGggZD0iTTIyMy43NSwyNDQuNzV2LTMyLjVoMzIuNXYzMi41eiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PHBhdGggZD0iTTIyMy43NSwxNDcuNzV2LTMyLjVoMzIuNXYzMi41eiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PHBhdGggZD0iTTE3NS4yNSwxNDcuNzV2LTMyLjVoMzIuNXYzMi41eiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PHBhdGggZD0iTTI3MS43NSwxNDcuNzV2LTMyLjVoMzIuNXYzMi41eiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PC9nPjwvZz48L3N2Zz4=";

  const blockIconURI =
"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxOTIuMTkyMTkiIGhlaWdodD0iMTkyLjE5MjE5IiB2aWV3Qm94PSIwLDAsMTkyLjE5MjE5LDE5Mi4xOTIxOSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE0My45MDM5LC04My45MDM4OSkiPjxnIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2lzUGFpbnRpbmdMYXllciZxdW90Ozp0cnVlfSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMTQzLjkwMzksMjc2LjA5NjA5di0xOTIuMTkyMTloMTkyLjE5MjE5djE5Mi4xOTIxOXoiIGZpbGw9IiNjNjBiMDAiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjxwYXRoIGQ9Ik0xNjcuNjI1LDI1Mi4zNzV2LTE0NC43NWgxNDQuNzV2MTQ0Ljc1eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjYiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PHBhdGggZD0iTTMxMS4xMjUsMjA0LjEyNWgtMTQxIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTI2NC4xMjUsMjUxdi0xNDIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNMjE1Ljg3NSwyNTF2LTE0MiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik0xNjksMjA0LjEyNWgxNDIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNMTY5LDE1NS44NzVoMTQyIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTIyMy43NSwxOTYuMjV2LTMyLjVoMzIuNXYzMi41eiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PHBhdGggZD0iTTIyMy43NSwyNDQuNzV2LTMyLjVoMzIuNXYzMi41eiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PHBhdGggZD0iTTIyMy43NSwxNDcuNzV2LTMyLjVoMzIuNXYzMi41eiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PHBhdGggZD0iTTE3NS4yNSwxNDcuNzV2LTMyLjVoMzIuNXYzMi41eiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PHBhdGggZD0iTTI3MS43NSwxNDcuNzV2LTMyLjVoMzIuNXYzMi41eiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PC9nPjwvZz48L3N2Zz4=";

  class SPgrids {
    getInfo() {
      return {
        id: "SPgrids",
        name: "Tile Grids",
        menuIconURI,
        blockIconURI,
        color1: "#c60b00",
        color2: "#b30a02",
        color3: "#810801",
        blocks: [
          {
            opcode: "createGrid",
            blockType: Scratch.BlockType.COMMAND,
            text: "create new grid named [NAME]",
            arguments: {
              NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "grid1",
              },
            },
          },
          {
            opcode: "deleteGrid",
            blockType: Scratch.BlockType.COMMAND,
            text: "delete grid named [NAME]",
            arguments: {
              NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "grid1",
              },
            },
          },
          {
            opcode: "deleteGrids",
            blockType: Scratch.BlockType.COMMAND,
            text: "delete all grids",
          },
          {
            opcode: "gridExists",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "grid named [NAME] exists?",
            arguments: {
              NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "grid1",
              },
            },
          },

          "---",

          {
            opcode: "setGrid",
            blockType: Scratch.BlockType.COMMAND,
            text: "set grid [NAME] tile size [WIDTH] by [HEIGHT]",
            arguments: {
              NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "grid1",
              },
              WIDTH: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 30,
              },
              HEIGHT: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 30,
              },
            },
          },
          {
            opcode: "gridData",
            blockType: Scratch.BlockType.REPORTER,
            text: "tile [NAME] [ATTRIBUTE]",
            arguments: {
              NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "grid1",
              },
              ATTRIBUTE: {
                type: Scratch.ArgumentType.STRING,
                menu: "attributes",
                defaultValue: "width",
              },
            },
          },

          "---",

          {
            opcode: "placeOnGrid",
            blockType: Scratch.BlockType.COMMAND,
            text: "[FIT] [SPRITE] on grid [NAME] at x [X] y [Y]",
            arguments: {
              FIT: {
                type: Scratch.ArgumentType.STRING,
                menu: "FitType",
                defaultValue: "place",
              },
              NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "grid1",
              },
              SPRITE: {
                type: Scratch.ArgumentType.STRING,
                menu: "TARGETS",
              },
              X: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0,
              },
              Y: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0,
              },
            },
          },
          {
            opcode: "placeOnAxisGrid",
            blockType: Scratch.BlockType.COMMAND,
            text: "[FIT] [SPRITE] on grid [NAME] at [AXIS] [POS]",
            arguments: {
              FIT: {
                type: Scratch.ArgumentType.STRING,
                menu: "FitType",
                defaultValue: "place",
              },
              NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "grid1",
              },
              SPRITE: {
                type: Scratch.ArgumentType.STRING,
                menu: "TARGETS",
              },
              AXIS: {
                type: Scratch.ArgumentType.STRING,
                menu: "axis",
                defaultValue: "x",
              },
              POS: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0,
              },
            },
          },
          {
            opcode: "offsetCenter",
            blockType: Scratch.BlockType.REPORTER,
            text: "center offset of grid [NAME] [ATTRIBUTE]",
            arguments: {
              NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "grid1",
              },
              ATTRIBUTE: {
                type: Scratch.ArgumentType.STRING,
                menu: "attributes",
                defaultValue: "width",
              },
            },
          },
        ],
        menus: {
          TARGETS: {
            acceptReporters: true,
            items: "_getTargets",
          },
          attributes: ["width", "height"],
          FitType: ["place", "fit", "fit and center"],
          axis: ["x", "y"]
        },
      };
    }

    createGrid(args) {
      myGrids.push({
        [args.NAME]: {
          name: args.NAME,
          width: 30,
          height: 30,
        }
      });
    }

    deleteGrid(args) {
      const indexToRemove = myGrids.findIndex((grid) => Object.keys(grid)[0] === args.NAME);
      if (indexToRemove !== -1) {
        myGrids.splice(indexToRemove, 1);
      }
    }

    deleteGrids(args) {
      myGrids = [];
    }

    setGrid(args) {
      if (args.WIDTH === 0) {
        args.WIDTH = 1;
      }
      if (args.HEIGHT === 0) {
        args.HEIGHT = 1;
      }
      const grid = myGrids.find((grid) => grid[args.NAME]);
      if (!grid) {
        this.createGrid(args);
      }
      if (grid) {
        grid[args.NAME].width = Scratch.Cast.toNumber(args.WIDTH);
        grid[args.NAME].height = Scratch.Cast.toNumber(args.HEIGHT);
      }
    }

    gridExists(args) {
      const grid = myGrids.find((grid) => grid[args.NAME]);
      return Boolean(grid);
    }

    gridData(args) {
      const grid = myGrids.find((grid) => grid[args.NAME]);
      if (grid) {
        return grid[args.NAME][args.ATTRIBUTE];
      } else {
        return "Grid Doesnt Exist!";
      }
    }

    placeOnGrid(args, util) {
      this.placeGrid(args, util, false);
    }

    placeOnAxisGrid(args, util) {
      this.placeGrid(args, util, true);
    }

    placeGrid(args, util, axis) {
      const grid = myGrids.find((grid) => grid[args.NAME]);
      if (!grid) {
        this.createGrid(args);
      }
      let target;
      if (grid) {
        let translateX = grid[args.NAME].width;
        let translateY = grid[args.NAME].height;
        if (args.SPRITE === "this sprite") {
          target = util.target;
        } else {
          target = runtime.getSpriteTargetByName(args.SPRITE);
          if (!target) {
            return;
          }
        }

        if (axis) {
          translateX = Math.round(args.POS / translateX) * translateX;
          translateY = Math.round(args.POS / translateY) * translateY;
          if (args.AXIS === "x") {
            target.setXY(translateX, target.y);
          } else {
            target.setXY(target.x, translateY);
          }
        } else {
          translateX = Math.round(args.X / translateX) * translateX;
          translateY = Math.round(args.Y / translateY) * translateY;
          target.setXY(translateX, translateY);
        }

        if (Scratch.Cast.toString(args.FIT).includes("fit")) {
          const CCostume = target.sprite.costumes_[target.currentCostume];
          const gridWidth = grid[args.NAME].width;
          const gridHeight = grid[args.NAME].height;
          const spriteWidth = CCostume.size[0];
          const spriteHeight = CCostume.size[1];
          const tileSize = Math.min(gridWidth, gridHeight);
          let newSize;

          if (spriteWidth >= spriteHeight) {
            newSize = Math.min(tileSize, (tileSize * spriteHeight) / spriteWidth);
          } else {
            newSize = Math.min((tileSize * spriteWidth) / spriteHeight, tileSize);
          }
          if (100 > (spriteWidth + spriteHeight) / 2) {
            newSize = newSize * (100 / ((spriteWidth + spriteHeight) / 2));
          }
          target.setSize(newSize);
          if (args.FIT === "fit and center") {
            if (axis) {
              if (args.AXIS === "x") {
                target.setXY(target.x + (grid[args.NAME].width / 2), target.y);
              } else {
                target.setXY(target.x, target.y + (grid[args.NAME].height / 2));
              }
            } else {
              target.setXY(target.x + (grid[args.NAME].width / 2), target.y + (grid[args.NAME].height / 2));
            }
          }
        }
      }
    }

    offsetCenter(args) {
      const grid = myGrids.find((grid) => grid[args.NAME]);
      if (grid) {
        return grid[args.NAME][args.ATTRIBUTE] / 2;
      } else {
        return "Grid Doesnt Exist!";
      }
    }

    _getTargets() {
      const spriteNames = [];
      spriteNames.push("this sprite");
      const targets = runtime.targets;

      for (let index = 1; index < targets.length; index++) {
        const target = targets[index];
        if (target.isOriginal) {
          spriteNames.push(target.getName());
        }
      }
      if (spriteNames.length > 0) {
        return spriteNames;
      } else {
        return [""];
      }
    }
  }

  Scratch.extensions.register(new SPgrids());
})(Scratch);
