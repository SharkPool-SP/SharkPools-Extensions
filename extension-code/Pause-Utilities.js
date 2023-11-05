// Name: Pause Utilities
// ID: SPPause
// Description: Pause the Project and certain Scripts
// By: SharkPool <https://github.com/SharkPool-SP>

// Version V.1.0.0

(function (Scratch) {
  "use strict";

  if (!Scratch.extensions.unsandboxed) {
    alert("Pause Utilities Extension must run unsandboxed!");
  }
  const runtime = Scratch.vm.runtime;
  const Cast = Scratch.Cast;
  let storedScripts = {};

  const menuIconURI =
"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTgiIHdpZHRoPSIxOCI+PHBhdGggZD0iTTIzMS40MjkgMTg4LjkyOVYxNzEuMDdoNC4yODV2MTcuODU4em0xMi4xNDIgMFYxNzEuMDdoNC4yODZ2MTcuODU4eiIgdHJhbnNmb3JtPSJtYXRyaXgoMS4wMzMwOSAwIDAgLjk1NDI3IC0yMzguNTczIC0xNjIuNzY5KSIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsPSIjZmZhZTAwIiBzdHJva2U9IiNkODk0MDAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOm5vcm1hbCIvPjwvc3ZnPg==";

  const blockIconURI =
"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIzMS40NzcxNCIgaGVpZ2h0PSIzMS40NzcxNCIgdmlld0JveD0iMCwwLDMxLjQ3NzE0LDMxLjQ3NzE0Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjI0LjI2MTQzLC0xNjQuMjYxNDMpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0yMjQuMjYxNDMsMTk1LjczODU3di0zMS40NzcxNGgzMS40NzcxNHYzMS40NzcxNHoiIGZpbGw9IiM1ZjViNDkiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwIi8+PHBhdGggZD0iTTIzMS41MjgxOSwxODguNDk5MTN2LTE3LjA0MjMxaDQuNDI2Nzl2MTcuMDQxMzV6TTI0NC4wNzE5NiwxODguNDk5MTN2LTE3LjA0MjMxaDQuNDI3ODJ2MTcuMDQxMzV6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGw9IiNmZmFlMDAiIHN0cm9rZT0iI2Q4OTQwMCIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvZz48L3N2Zz4=";

  Scratch.vm.runtime.on('PROJECT_STOP_ALL', () => {
    storedScripts = {};
  });

  class SPPause {
    getInfo() {
      return {
        id: "SPPause",
        name: "Pause Utilities",
        color1: "#5f5b49",
        menuIconURI,
        blockIconURI,
        blocks: [
          {
            blockType: Scratch.BlockType.LABEL,
            text: Scratch.extensions.isPenguinMod ? "Manual Blocks" : "Manual Block",
          },
          {
            opcode: "pause",
            blockType: Scratch.BlockType.COMMAND,
            text: "pause project",
          },
          {
            opcode: "unpause",
            blockType: Scratch.BlockType.COMMAND,
            text: "unpause project",
            hideFromPalette: !Scratch.extensions.isPenguinMod,
          },
          {
            blockType: Scratch.BlockType.LABEL,
            text: "Automatic Blocks",
          },
          {
            opcode: "pauseLoop",
            blockType: Scratch.BlockType.COMMAND,
            text: "pause this script with ID [NAME]",
            arguments: {
              NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "my script",
              },
            }
          },
          {
            opcode: "breakLoop",
            blockType: Scratch.BlockType.COMMAND,
            text: "unpause script with ID [NAME]",
            arguments: {
              NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "my script",
              },
            }
          },
          {
            opcode: "isPaused",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "is script with ID [NAME] paused?",
            arguments: {
              NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "my script",
              },
            }
          },
        ],
      };
    }

    pause() {
      if (Scratch.extensions.isPenguinMod) {
        runtime.pause();
      } else {
        const pauseButton = document.querySelector("img.pause-btn.addons-display-none-pause");
        if (pauseButton) {
          pauseButton.click();
        } else {
          console.log("Pause button not found.");
        }
      }
    }

    unpause() { //penguinmod exlusive
      runtime.play();
    }

    pauseLoop(args, util) {
      const scriptName = Cast.toString(args.NAME);
      const state = util.stackFrame.pausedScript;
      if (!state) {
          storedScripts[scriptName] = true;
          util.stackFrame.pausedScript = scriptName;
          util.yield();
      } else if (state in storedScripts) {
          util.yield();
      }
    }

    breakLoop(args) {
      const scriptName = Cast.toString(args.NAME);
      if (scriptName in storedScripts) {
          delete storedScripts[scriptName];
      }
    }

    isPaused(args) {
      const scriptName = Cast.toString(args.NAME);
      return scriptName in storedScripts;
    }
  }

  Scratch.extensions.register(new SPPause());
})(Scratch);