// Name: Advanced Messages
// ID: SPmessages
// Description: More Message Blocks that do cool stuff!
// By: SharkPool <https://github.com/SharkPool-SP>

// Version V.1.0.0

(function (Scratch) {
  "use strict";

  if (!Scratch.extensions.unsandboxed) {
    throw new Error("Advanced Messages Extension must run unsandboxed!");
  }

  let allMessages = [];

  class SPmessages {
    getInfo() {
      return {
        id: "SPmessages",
        name: "Advanced Messages",
        color1: "#FFBF00",
        color2: "#E6AC00",
        color3: "#CC9900",
        blocks: [
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
          "---",
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

    whenReceive1(args) {
      return !!(allMessages[args.MSG]);
    }

    whenReceive2(args) {
      return !!(allMessages[args.MSG]);
    }

    whenReceiveData1(args) {
      return !!(allMessages[args.MSG] && allMessages[args.MSG].data === args.DATA);
    }

    whenReceiveData2(args) {
      return !!(allMessages[args.MSG] && allMessages[args.MSG].data === args.DATA);
    }

    receivedData(args) {
      if (allMessages[args.MSG]) {
        return allMessages[args.MSG].data;
      } else return "";
    }

    allowSender(args) {
      if (allMessages[args.MSG]) {
        allMessages[args.MSG].canContinue = true;
        delete allMessages[args.MSG];
      }
    }

    deleteMessage(args) {
      return new Promise((resolve) => {
        if (allMessages[args.MSG]) {
          delete allMessages[args.MSG];
        }
        resolve();
      });
    }

    deleteAll() { allMessages = [] }
  }

  Scratch.extensions.register(new SPmessages());
})(Scratch);