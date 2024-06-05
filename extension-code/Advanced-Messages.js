// Name: Advanced Messages
// ID: SPmessages
// Description: More Message Blocks that do cool stuff!
// By: SharkPool

// Version V.2.0.0

(function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) throw new Error("Advanced Messages must run unsandboxed!");

  const menuIconURI =
"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI3NS45MjEwNCIgaGVpZ2h0PSI3NS45MjEwNCIgdmlld0JveD0iMCwwLDc1LjkyMTA0LDc1LjkyMTA0Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjAyLjAzOTQ4LC0xNDIuMDM5NDgpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0yMDQuMDM5NDgsMTgwYzAsLTE5Ljg2MDQ1IDE2LjEwMDA3LC0zNS45NjA1MiAzNS45NjA1MiwtMzUuOTYwNTJjMTkuODYwNDUsMCAzNS45NjA1MiwxNi4xMDAwNyAzNS45NjA1MiwzNS45NjA1MmMwLDE5Ljg2MDQ1IC0xNi4xMDAwNywzNS45NjA1MiAtMzUuOTYwNTIsMzUuOTYwNTJjLTE5Ljg2MDQ1LDAgLTM1Ljk2MDUyLC0xNi4xMDAwNyAtMzUuOTYwNTIsLTM1Ljk2MDUyeiIgZmlsbD0iI2ZmYmYwMCIgc3Ryb2tlPSIjY2M5OTAwIiBzdHJva2Utd2lkdGg9IjQiLz48cGF0aCBkPSJNMjE1LjM4NDUsMTc2LjU5NzYyYy0wLjIxNjE2LC0xMC42MzY5IDUuODkyMjksLTE0LjA0MzUgMTAuNDkzMTcsLTE0LjA0MzVjNS41OTg4MSwwIDE3Ljk5MzA3LC0wLjMyMzE0IDI3LjUzNDczLDBjNC42NTkxOSwwLjE1Nzc5IDExLjQyNzU4LDMuNjkwMzQgMTEuMjAzMjUsMTQuMDQzNWMtMC4yMTIzMSw5Ljc5ODE3IC03Ljc3MzA3LDEyLjc4MTE2IC0xMS4yODIxNCwxMi43ODExNmMtMy4xOTQyNiwwIC04LjUzNTUyLDAgLTE0LjU5NTc4LDBjLTEuNjAyMzEsMCAtNi4wOTA3MSw4LjQ1NzYxIC0xMy40MTIzMyw4LjIwNTE5Yy01LjE5MjgyLC0wLjE3OTAzIDIuOTUxODQsLTguMjA1MTkgMC44Njc4NiwtOC4yMDUxOWMtNi4xNzk3OSwwIC0xMC42NTgzMSwtNS4zNzgwNiAtMTAuODA4NzYsLTEyLjc4MTE2eiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiLz48L2c+PC9nPjwvc3ZnPg==";
  const blockIconURI =
"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI3MS45MjEwNCIgaGVpZ2h0PSI3MS45MjEwNCIgdmlld0JveD0iMCwwLDcxLjkyMTA0LDcxLjkyMTA0Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjA0LjAzOTQ4LC0xNDQuMDM5NDgpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTIwNC4wMzk0OCwyMTUuOTYwNTJ2LTcxLjkyMTA0aDcxLjkyMTA0djcxLjkyMTA0eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIi8+PHBhdGggZD0iTTIxMC4xMzI1LDE2NS4yMTMxM2MtMC4xOTU2LC05LjYyNTI3IDUuMzMxOSwtMTIuNzA3ODggOS40OTUyMSwtMTIuNzA3ODhjNS4wNjYzMywwIDE2LjI4MTgyLC0wLjI5MjQxIDI0LjkxNjAxLDBjNC4yMTYwNywwLjE0Mjc4IDEwLjM0MDc1LDMuMzM5MzcgMTAuMTM3NzUsMTIuNzA3ODhjLTAuMTkyMTIsOC44NjYzIC03LjAzMzgsMTEuNTY1NTkgLTEwLjIwOTE0LDExLjU2NTU5Yy0yLjg5MDQ3LDAgLTcuNzIzNzQsMCAtMTMuMjA3NjMsMGMtMS40NDk5MiwwIC01LjUxMTQ1LDcuNjUzMjQgLTEyLjEzNjc0LDcuNDI0ODNjLTQuNjk4OTUsLTAuMTYyIDIuNjcxMSwtNy40MjQ4MyAwLjc4NTMyLC03LjQyNDgzYy01LjU5MjA1LDAgLTkuNjQ0NjQsLTQuODY2NTcgLTkuNzgwNzgsLTExLjU2NTU5eiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSJub25lIi8+PHBhdGggZD0iTTI2Mi4xNjAwNSwyMDEuNzY5MDRjLTEuNDg2MjQsMCA0LjMyMjMyLDUuNzI0MDUgMC42MTg5NCw1Ljg1MTcyYy01LjIyMTU4LDAuMTgwMDEgLTguNDIyNiwtNS44NTE3MiAtOS41NjUzMiwtNS44NTE3MmMtNC4zMjIwMSwwIC04LjEzMTI1LDAgLTEwLjQwOTMyLDBjLTIuNTAyNTgsMCAtNy44OTQ3LC0yLjEyNzM5IC04LjA0NjEyLC05LjExNTE4Yy0wLjE2LC03LjM4MzYgNC42NjcwNSwtOS45MDI5MiA3Ljk4OTg1LC0xMC4wMTU0NWM2LjgwNDg2LC0wLjIzMDQ2IDE1LjY0NDExLDAgMTkuNjM3MDMsMGMzLjI4MTIzLDAgNy42Mzc2MiwyLjQyOTQ5IDcuNDgzNDUsMTAuMDE1NDVjLTAuMTA3MjksNS4yNzk3IC0zLjMwMTI2LDkuMTE1MTggLTcuNzA4NTIsOS4xMTUxOHoiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9Im5vbmUiLz48L2c+PC9nPjwvc3ZnPg==";

  const vm = Scratch.vm;
  const runtime = vm.runtime;
  let messageBank = {};

  class SPmessages {
    constructor() {
      runtime.on("PROJECT_START", () => { messageBank = {} });
      runtime.on("PROJECT_STOP_ALL", () => { messageBank = {} });
    }
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
            text: "WARNING"
          },
          {
            opcode: "broadcastMsg",
            blockType: Scratch.BlockType.COMMAND,
            text: "broadcast [MSG] with data [DATA] and [WAIT]",
            arguments: {
              MSG: { type: Scratch.ArgumentType.STRING, defaultValue: "message 1" },
              DATA: { type: Scratch.ArgumentType.STRING, defaultValue: "hello world" },
              WAIT: { type: Scratch.ArgumentType.STRING, menu: "SHOULD_WAIT" }
            },
          },
          {
            opcode: "broadcastMsgReturn",
            blockType: Scratch.BlockType.REPORTER,
            text: "broadcast [MSG] with data [DATA]",
            arguments: {
              MSG: { type: Scratch.ArgumentType.STRING, defaultValue: "message 1" },
              DATA: { type: Scratch.ArgumentType.STRING, defaultValue: "hello world" }
            },
          },
          "---",
          {
            opcode: "whenReceive1",
            blockType: Scratch.BlockType.HAT,
            isEdgeActivated: false,
            text: "when I receive [MSG]",
            arguments: {
              MSG: { type: Scratch.ArgumentType.STRING, defaultValue: "message 1" }
            },
          },
          {
            opcode: "whenReceiveData1",
            blockType: Scratch.BlockType.HAT,
            isEdgeActivated: false,
            text: "when I receive [MSG] with data [DATA]",
            arguments: {
              MSG: { type: Scratch.ArgumentType.STRING, defaultValue: "message 1" },
              DATA: { type: Scratch.ArgumentType.STRING, defaultValue: "hello world" }
            },
          },
          {
            opcode: "whenReceive2",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "was [MSG] [TYPE] ?",
            arguments: {
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "MSG_TYPE" },
              MSG: { type: Scratch.ArgumentType.STRING, defaultValue: "message 1" }
            },
          },
          {
            opcode: "whenReceiveData2",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "was [MSG] with data [DATA] [TYPE] ?",
            arguments: {
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "MSG_TYPE" },
              MSG: { type: Scratch.ArgumentType.STRING, defaultValue: "message 1" },
              DATA: { type: Scratch.ArgumentType.STRING, defaultValue: "hello world" }
            },
          },
          {
            opcode: "returnData",
            blockType: Scratch.BlockType.COMMAND,
            isTerminal: true,
            text: "return [DATA]",
            arguments: {
              DATA: { type: Scratch.ArgumentType.STRING, defaultValue: "hello!" }
            },
          },
          "---",
          {
            opcode: "receivedData",
            blockType: Scratch.BlockType.REPORTER,
            text: "received data in [MSG]",
            arguments: {
              MSG: { type: Scratch.ArgumentType.STRING, defaultValue: "message 1" }
            },
          },
          {
            opcode: "getRecievers",
            blockType: Scratch.BlockType.REPORTER,
            text: "[TYPE] of [MSG]",
            arguments: {
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "DATA_TYPE" },
              MSG: { type: Scratch.ArgumentType.STRING, defaultValue: "message 1" }
            },
          },
          {
            opcode: "allowSender",
            blockType: Scratch.BlockType.COMMAND,
            text: "let sender of [MSG] continue",
            arguments: {
              MSG: { type: Scratch.ArgumentType.STRING, defaultValue: "message 1" }
            },
          },
          // Deprecated (Needed for Support)
          {
            opcode: "broadcast1", blockType: Scratch.BlockType.COMMAND,
            text: "broadcast [MSG]", hideFromPalette: true,
            arguments: { MSG: { type: Scratch.ArgumentType.STRING } },
          }, {
            opcode: "broadcast2", blockType: Scratch.BlockType.COMMAND,
            text: "broadcast [MSG] and wait", hideFromPalette: true,
            arguments: { MSG: { type: Scratch.ArgumentType.STRING } },
          }, {
            opcode: "broadcastData1", blockType: Scratch.BlockType.COMMAND,
            text: "broadcast [MSG] with data [DATA]", hideFromPalette: true,
            arguments: {
              MSG: { type: Scratch.ArgumentType.STRING }, DATA: { type: Scratch.ArgumentType.STRING }
            },
          }, {
            opcode: "broadcastData2", blockType: Scratch.BlockType.COMMAND,
            text: "broadcast [MSG] with data [DATA] and wait", hideFromPalette: true,
            arguments: {
              MSG: { type: Scratch.ArgumentType.STRING }, DATA: { type: Scratch.ArgumentType.STRING }
            },
          }, {
            opcode: "deleteMessage", blockType: Scratch.BlockType.COMMAND,
            text: "delete [MSG]", hideFromPalette: true,
            arguments: { MSG: { type: Scratch.ArgumentType.STRING } },
          }, {
            opcode: "deleteAll", blockType: Scratch.BlockType.COMMAND,
            text: "delete all messages", hideFromPalette: true
          }
        ],
        menus: {
          SHOULD_WAIT: ["continue", "wait"],
          MSG_TYPE: ["received", "waiting"],
          DATA_TYPE: ["receivers", "sender"]
        },
      };
    }

    // Helper Funcs
    WARN() { alert("This Extension is NOT Compatible with the Vanilla Broadcast Blocks") }

    sendMessage(opcode, msg, data, sender) {
      const oldThreads = messageBank[msg];
      let newThreads = oldThreads !== undefined ? oldThreads.threads : [];
      runtime.allScriptsByOpcodeDo(opcode, (script, target) => {
        const topBlockId = script.blockId;
        const thread = runtime._pushThread(script.blockId, target);
        thread.SPadvMsg = { data, msg, sender, pass: false };
        newThreads.push(thread);
      });
      messageBank[msg] = {
        sendTime : Math.round(Date.now() / 100), force : false,
        threads : newThreads, receivers : [], data, sender
      };
      return newThreads;
    }

    // Blocks
    broadcastMsg(args, util) {
      if (!util.stackFrame.SPmsg) util.stackFrame.SPmsg = Scratch.Cast.toString(args.MSG);
      const data = Scratch.Cast.toString(args.DATA);
      if (util.stackFrame.SPmsg) {
        const target = `${util.target.getName()}${util.target.isOriginal ? "" : " (Clone)"}`;
        const name = util.stackFrame.SPmsg;
        if (!util.stackFrame.newThreads) {
          util.stackFrame.newThreads = [
            ...this.sendMessage("SPmessages_whenReceive1", name, data, target),
            ...this.sendMessage("SPmessages_whenReceiveData1", name, data, target)
          ];
          if (util.stackFrame.newThreads.length === 0) return;
        }
        const waiting = util.stackFrame.newThreads.some((thread) => runtime.threads.indexOf(thread) !== -1);
        if (args.WAIT === "wait" && waiting && !messageBank[name].force) {
          if (util.stackFrame.newThreads.every((thread) => runtime.isWaitingThread(thread))) util.yieldTick();
          else util.yield();
        }
      }
    }

    broadcastMsgReturn(args, util) {
      if (!util.stackFrame.SPmsg) util.stackFrame.SPmsg = Scratch.Cast.toString(args.MSG);
      const data = Scratch.Cast.toString(args.DATA);
      let response = "";
      if (util.stackFrame.SPmsg) {
        const target = `${util.target.getName()}${util.target.isOriginal ? "" : " (Clone)"}`;
        const name = util.stackFrame.SPmsg;
        if (!util.stackFrame.newThreads) {
          util.stackFrame.newThreads = [
            ...this.sendMessage("SPmessages_whenReceive1", name, data, target),
            ...this.sendMessage("SPmessages_whenReceiveData1", name, data, target)
          ];
          if (util.stackFrame.newThreads.length === 0) return;
        }
        const waiting = util.stackFrame.newThreads.some((thread) => runtime.threads.indexOf(thread) !== -1);
        for (const thread of util.stackFrame.newThreads) {
          if (thread.justReported) {
            response = thread.justReported;
            break;
          }
        }
        if (!response && waiting && !messageBank[name].force) {
          if (util.stackFrame.newThreads.every((thread) => runtime.isWaitingThread(thread))) util.yieldTick();
          else util.yield();
        }
      }
      return response ? response : "";
    }

    whenReceive1(args, util) {
      const data = util.thread.SPadvMsg;
      const msg = Scratch.Cast.toString(args.MSG);
      if (data === undefined) return false;
      const con = msg === data.msg;
      if (con) {
        util.thread.SPadvMsg.pass = true;
        messageBank[msg].receivers.push(`${util.target.getName()}${util.target.isOriginal ? "" : " (Clone)"}`);
      }
      return con;
    }

    whenReceiveData1(args, util) {
      const data = util.thread.SPadvMsg;
      const msg = Scratch.Cast.toString(args.MSG);
      if (data === undefined) return false;
      const con = msg === data.msg && Scratch.Cast.toString(args.DATA) === data.data;
      if (con) {
        util.thread.SPadvMsg.pass = true;
        messageBank[msg].receivers.push(`${util.target.getName()}${util.target.isOriginal ? "" : " (Clone)"}`);
      }
      return con;
    }

    whenReceive2(args) {
      const msgData = messageBank[args.MSG];
      if (msgData !== undefined) {
        console.log(msgData.threads);
        if (args.TYPE === "received") return msgData.sendTime === Math.round(Date.now() / 100);
        else return msgData.threads.some((thread) => runtime.isActiveThread(thread));
      }
      return false;
    }

    whenReceiveData2(args) {
      const msgData = messageBank[args.MSG];
      if (msgData !== undefined && msgData.data === args.DATA) {
        if (args.TYPE === "received") return msgData.sendTime === Math.round(Date.now() / 100);
        else return msgData.threads.some((thread) => runtime.isActiveThread(thread));
      }
      return false;
    }

    returnData(args, util) {
      util.thread.justReported = Scratch.Cast.toString(args.DATA);
      //Delay Deletion of Thread
      if (util.stackTimerNeedsInit()) {
        util.startStackTimer(0);
        runtime.requestRedraw();
        util.yield();
      } else if (!util.stackTimerFinished()) util.yield();
      util.thread.stopThisScript();
    }

    receivedData(args) { return messageBank[args.MSG] ? messageBank[args.MSG].data : "" }

    getRecievers(args) {
      if (args.TYPE === "receivers") return messageBank[args.MSG] ? JSON.stringify(messageBank[args.MSG].receivers) : "[]";
      else return messageBank[args.MSG] ? messageBank[args.MSG].sender : "";
    }

    allowSender(args) { messageBank[args.MSG].force = true }

    // Deprecated
    broadcast1(args) { this.broadcastMsg({ ...args, DATA : "", WAIT : "continue" }) }
    broadcastData1(args) { this.broadcastMsg({ ...args, DATA : "", WAIT : "wait" }) }
    broadcast2(args) { this.broadcastMsg({ ...args, WAIT : "continue" }) }
    broadcastData2(args) { this.broadcastMsg({ ...args, WAIT : "wait" }) }
    deleteMessage(args) { return }
    deleteAll() { messageBank = {} }
  }

  Scratch.extensions.register(new SPmessages());
})(Scratch);
