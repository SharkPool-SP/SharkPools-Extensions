// Name: Advanced Messages
// ID: SPmessages
// Description: More Message Blocks that do cool stuff!
// By: SharkPool

// Version V.1.1.1

(function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) throw new Error("Advanced Messages Extension must run unsandboxed!");

  let allMessages = [];
  let recievers = [];

  const menuIconURI =
"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI3NS45MjEwNCIgaGVpZ2h0PSI3NS45MjEwNCIgdmlld0JveD0iMCwwLDc1LjkyMTA0LDc1LjkyMTA0Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjAyLjAzOTQ4LC0xNDIuMDM5NDgpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0yMDQuMDM5NDgsMTgwYzAsLTE5Ljg2MDQ1IDE2LjEwMDA3LC0zNS45NjA1MiAzNS45NjA1MiwtMzUuOTYwNTJjMTkuODYwNDUsMCAzNS45NjA1MiwxNi4xMDAwNyAzNS45NjA1MiwzNS45NjA1MmMwLDE5Ljg2MDQ1IC0xNi4xMDAwNywzNS45NjA1MiAtMzUuOTYwNTIsMzUuOTYwNTJjLTE5Ljg2MDQ1LDAgLTM1Ljk2MDUyLC0xNi4xMDAwNyAtMzUuOTYwNTIsLTM1Ljk2MDUyeiIgZmlsbD0iI2ZmYmYwMCIgc3Ryb2tlPSIjY2M5OTAwIiBzdHJva2Utd2lkdGg9IjQiLz48cGF0aCBkPSJNMjE1LjM4NDUsMTc2LjU5NzYyYy0wLjIxNjE2LC0xMC42MzY5IDUuODkyMjksLTE0LjA0MzUgMTAuNDkzMTcsLTE0LjA0MzVjNS41OTg4MSwwIDE3Ljk5MzA3LC0wLjMyMzE0IDI3LjUzNDczLDBjNC42NTkxOSwwLjE1Nzc5IDExLjQyNzU4LDMuNjkwMzQgMTEuMjAzMjUsMTQuMDQzNWMtMC4yMTIzMSw5Ljc5ODE3IC03Ljc3MzA3LDEyLjc4MTE2IC0xMS4yODIxNCwxMi43ODExNmMtMy4xOTQyNiwwIC04LjUzNTUyLDAgLTE0LjU5NTc4LDBjLTEuNjAyMzEsMCAtNi4wOTA3MSw4LjQ1NzYxIC0xMy40MTIzMyw4LjIwNTE5Yy01LjE5MjgyLC0wLjE3OTAzIDIuOTUxODQsLTguMjA1MTkgMC44Njc4NiwtOC4yMDUxOWMtNi4xNzk3OSwwIC0xMC42NTgzMSwtNS4zNzgwNiAtMTAuODA4NzYsLTEyLjc4MTE2eiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiLz48L2c+PC9nPjwvc3ZnPg==";

  const blockIconURI =
"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI3MS45MjEwNCIgaGVpZ2h0PSI3MS45MjEwNCIgdmlld0JveD0iMCwwLDcxLjkyMTA0LDcxLjkyMTA0Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjA0LjAzOTQ4LC0xNDQuMDM5NDgpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTIwNC4wMzk0OCwyMTUuOTYwNTJ2LTcxLjkyMTA0aDcxLjkyMTA0djcxLjkyMTA0eiIgZmlsbD0iI2ZmYmYwMCIgc3Ryb2tlPSIjMDAwMDAwIi8+PHBhdGggZD0iTTIxMC4xMzI1LDE2NS4yMTMxM2MtMC4xOTU2LC05LjYyNTI3IDUuMzMxOSwtMTIuNzA3ODggOS40OTUyMSwtMTIuNzA3ODhjNS4wNjYzMywwIDE2LjI4MTgyLC0wLjI5MjQxIDI0LjkxNjAxLDBjNC4yMTYwNywwLjE0Mjc4IDEwLjM0MDc1LDMuMzM5MzcgMTAuMTM3NzUsMTIuNzA3ODhjLTAuMTkyMTIsOC44NjYzIC03LjAzMzgsMTEuNTY1NTkgLTEwLjIwOTE0LDExLjU2NTU5Yy0yLjg5MDQ3LDAgLTcuNzIzNzQsMCAtMTMuMjA3NjMsMGMtMS40NDk5MiwwIC01LjUxMTQ1LDcuNjUzMjQgLTEyLjEzNjc0LDcuNDI0ODNjLTQuNjk4OTUsLTAuMTYyIDIuNjcxMSwtNy40MjQ4MyAwLjc4NTMyLC03LjQyNDgzYy01LjU5MjA1LDAgLTkuNjQ0NjQsLTQuODY2NTcgLTkuNzgwNzgsLTExLjU2NTU5eiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSJub25lIi8+PHBhdGggZD0iTTI2Mi4xNjAwNSwyMDEuNzY5MDRjLTEuNDg2MjQsMCA0LjMyMjMyLDUuNzI0MDUgMC42MTg5NCw1Ljg1MTcyYy01LjIyMTU4LDAuMTgwMDEgLTguNDIyNiwtNS44NTE3MiAtOS41NjUzMiwtNS44NTE3MmMtNC4zMjIwMSwwIC04LjEzMTI1LDAgLTEwLjQwOTMyLDBjLTIuNTAyNTgsMCAtNy44OTQ3LC0yLjEyNzM5IC04LjA0NjEyLC05LjExNTE4Yy0wLjE2LC03LjM4MzYgNC42NjcwNSwtOS45MDI5MiA3Ljk4OTg1LC0xMC4wMTU0NWM2LjgwNDg2LC0wLjIzMDQ2IDE1LjY0NDExLDAgMTkuNjM3MDMsMGMzLjI4MTIzLDAgNy42Mzc2MiwyLjQyOTQ5IDcuNDgzNDUsMTAuMDE1NDVjLTAuMTA3MjksNS4yNzk3IC0zLjMwMTI2LDkuMTE1MTggLTcuNzA4NTIsOS4xMTUxOHoiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9Im5vbmUiLz48L2c+PC9nPjwvc3ZnPg==";

  class SPmessages {
    getInfo() {
      return {
        id: "SPmessages",
        name: "Advanced Messages",
        color1: "#FFBF00",
        color2: "#E6AC00",
        color3: "#CC9900",
        menuIconURI,
        blockIconURI,
        blocks: [
          {
            func: "WARN",
            blockType: Scratch.BlockType.BUTTON,
            text: "WARNING",
          },
          {
            opcode: "broadcast1",
            blockType: Scratch.BlockType.COMMAND,
            text: "broadcast [MSG]",
            arguments: {
              MSG: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "message 1",
              }
            },
          },
          {
            opcode: "broadcast2",
            blockType: Scratch.BlockType.COMMAND,
            text: "broadcast [MSG] and wait",
            arguments: {
              MSG: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "message 1",
              }
            },
          },
          {
            opcode: "broadcastData1",
            blockType: Scratch.BlockType.COMMAND,
            text: "broadcast [MSG] with data [DATA]",
            arguments: {
              MSG: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "message 1",
              },
              DATA: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "hello world",
              }
            },
          },
          {
            opcode: "broadcastData2",
            blockType: Scratch.BlockType.COMMAND,
            text: "broadcast [MSG] with data [DATA] and wait",
            arguments: {
              MSG: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "message 1",
              },
              DATA: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "hello world",
              }
            },
          },
          "---",
          {
            opcode: "whenReceive1",
            blockType: Scratch.BlockType.HAT,
            text: "when I receive [MSG]",
            arguments: {
              MSG: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "message 1",
              }
            },
          },
          {
            opcode: "whenReceive2",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "was [MSG] sent?",
            arguments: {
              MSG: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "message 1",
              }
            },
          },
          {
            opcode: "whenReceiveData1",
            blockType: Scratch.BlockType.HAT,
            text: "when I receive [MSG] with data [DATA]",
            arguments: {
              MSG: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "message 1",
              },
              DATA: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "hello world",
              }
            },
          },
          {
            opcode: "whenReceiveData2",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "was [MSG] with data [DATA] sent?",
            arguments: {
              MSG: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "message 1",
              },
              DATA: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "hello world",
              }
            },
          },
          "---",
          {
            opcode: "receivedData",
            blockType: Scratch.BlockType.REPORTER,
            text: "received data in [MSG]",
            arguments: {
              MSG: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "message 1",
              }
            },
          },
          {
            opcode: "getRecievers",
            blockType: Scratch.BlockType.REPORTER,
            text: "receivers of [MSG]",
            arguments: {
              MSG: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "message 1",
              }
            },
          },
          {
            opcode: "allowSender",
            blockType: Scratch.BlockType.COMMAND,
            text: "allow sender of [MSG] to continue",
            arguments: {
              MSG: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "message 1",
              }
            },
          },
          "---",
          {
            opcode: "deleteMessage",
            blockType: Scratch.BlockType.COMMAND,
            text: "delete [MSG]",
            arguments: {
              MSG: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "message 1",
              }
            },
          },
          {
            opcode: "deleteAll",
            blockType: Scratch.BlockType.COMMAND,
            text: "delete all messages"
          },
        ],
      };
    }

    WARN() { alert("This Extension is NOT Compatible with the Vanilla Message Blocks") }

    async sendMessage(name, data, canContinue) {
      if (allMessages[name]) {
        await new Promise((resolve) => {
          const waitForDeletion = () => {
            if (allMessages[name]) {
              delete allMessages[name];
              setTimeout(waitForDeletion, 50);
            } else {
              resolve();
            }
          };
          waitForDeletion();
        });
      }
      allMessages[name] = { data: data, canContinue: canContinue };
      recievers[name] = { sprites: [], id: [] };
    }

    async broadcast1(args) {
      await this.sendMessage(args.MSG, " ", true)
    }
    async broadcastData1(args) {
      await this.sendMessage(args.MSG, args.DATA, true)
    }

    async broadcast2(args) {
      await this.sendMessage(args.MSG, " ", false);
      const waitForMessage = () => {
        return new Promise((resolve, reject) => {
          const checkMessage = () => {
            if (!allMessages[args.MSG] || allMessages[args.MSG].canContinue) {
              resolve();
            } else {
              setTimeout(checkMessage, 100);
            }
          };
          checkMessage();
        });
      };
      return waitForMessage();
    }

    async broadcastData2(args) {
      await this.sendMessage(args.MSG, args.DATA, false);
      const waitForMessage = () => {
        return new Promise((resolve, reject) => {
          const checkMessage = () => {
            if (!allMessages[args.MSG] || allMessages[args.MSG].canContinue) {
              resolve();
            } else {
              setTimeout(checkMessage, 100);
            }
          };
          checkMessage();
        });
      };
      return waitForMessage();
    }

    whenReceive1(args, util) {
      if (allMessages[args.MSG]) {
        let name = util.target.sprite.name;
        if (!util.target.isOriginal) {
          const cloneNum = recievers[args.MSG] ? recievers[args.MSG].sprites.filter(item => item.startsWith(`${name} (clone #`)).length + 1 : 1;
          name = `${name} (clone #${cloneNum})`;
        }
        if (recievers[args.MSG].id.indexOf(util.target.id) === -1) recievers[args.MSG].sprites.push(name);
        if (recievers[args.MSG].id.indexOf(util.target.id) === -1) recievers[args.MSG].id.push(util.target.id);
        return true;
      } else { return false }
    }

    whenReceive2(args) { return Scratch.Cast.toBoolean(allMessages[args.MSG]) }

    whenReceiveData1(args, util) {
      if (allMessages[args.MSG] && allMessages[args.MSG].data === args.DATA) {
        let name = util.target.sprite.name;
        if (!util.target.isOriginal) {
          const cloneNum = recievers[args.MSG] ? recievers[args.MSG].sprites.filter(item => item.startsWith(`${name} (clone #`)).length + 1 : 1;
          name = `${name} (clone #${cloneNum})`;
        }
        if (recievers[args.MSG].id.indexOf(util.target.id) === -1) recievers[args.MSG].sprites.push(name);
        if (recievers[args.MSG].id.indexOf(util.target.id) === -1) recievers[args.MSG].id.push(util.target.id);
        return true;
      } else { return false }
    }

    whenReceiveData2(args) { return Scratch.Cast.toBoolean(allMessages[args.MSG] && allMessages[args.MSG].data === args.DATA) }

    receivedData(args) { return allMessages[args.MSG] ? allMessages[args.MSG].data : "" }

    getRecievers(args) { return allMessages[args.MSG] ? JSON.stringify(recievers[args.MSG].sprites) : "[]" }

    allowSender(args) {
      if (allMessages[args.MSG]) {
        allMessages[args.MSG].canContinue = true;
        delete allMessages[args.MSG];
        delete recievers[args.MSG];
      }
    }

    deleteMessage(args) {
      return new Promise((resolve) => {
        if (allMessages[args.MSG]) {
          delete allMessages[args.MSG];
          delete recievers[args.MSG];
        }
        resolve();
      });
    }

    deleteAll() { allMessages = []; recievers = [] }
  }

  Scratch.extensions.register(new SPmessages());
})(Scratch);
