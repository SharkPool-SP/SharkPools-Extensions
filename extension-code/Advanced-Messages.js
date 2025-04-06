// Name: Advanced Messages
// ID: SPmessages
// Description: More Message Blocks that do cool stuff!
// By: SharkPool
// License: MIT

// Version V.2.0.01

(function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) throw new Error("Advanced Messages must run unsandboxed!");

  const menuIconURI =
"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3NS45MjEiIGhlaWdodD0iNzUuOTIxIiB2aWV3Qm94PSIwIDAgNzUuOTIxIDc1LjkyMSI+PHBhdGggZD0iTTIgMzcuOTZDMiAxOC4xIDE4LjEgMiAzNy45NiAyczM1Ljk2IDE2LjEgMzUuOTYgMzUuOTYtMTYuMSAzNS45Ni0zNS45NiAzNS45NlMyIDU3LjgyIDIgMzcuOTZ6IiBmaWxsPSIjZmZiZjAwIiBzdHJva2U9IiNjOTAiIHN0cm9rZS13aWR0aD0iNCIvPjxwYXRoIGQ9Ik0xMy4zNDUgMzQuNTU4Yy0uMjE3LTEwLjYzNyA1Ljg5Mi0xNC4wNDQgMTAuNDkzLTE0LjA0NCA1LjU5OCAwIDE3Ljk5My0uMzIzIDI3LjUzNCAwIDQuNjYuMTU4IDExLjQyOCAzLjY5IDExLjIwNCAxNC4wNDQtLjIxMyA5Ljc5OC03Ljc3MyAxMi43OC0xMS4yODIgMTIuNzhIMzYuNjk4Yy0xLjYwMyAwLTYuMDkxIDguNDU4LTEzLjQxMyA4LjIwNi01LjE5Mi0uMTggMi45NTItOC4yMDUuODY4LTguMjA1LTYuMTggMC0xMC42NTgtNS4zNzgtMTAuODA4LTEyLjc4MSIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==";
  const blockIconURI =
"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3MS45MjEiIGhlaWdodD0iNzEuOTIxIiB2aWV3Qm94PSIwIDAgNzEuOTIxIDcxLjkyMSI+PHBhdGggZD0iTTAgNzEuOTJWMGg3MS45MnY3MS45MnoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNNi4wOTMgMjEuMTczYy0uMTk2LTkuNjI1IDUuMzMxLTEyLjcwOCA5LjQ5NS0xMi43MDggNS4wNjYgMCAxNi4yODItLjI5MiAyNC45MTYgMCA0LjIxNi4xNDMgMTAuMzQgMy4zNCAxMC4xMzcgMTIuNzA4LS4xOTIgOC44NjYtNy4wMzMgMTEuNTY2LTEwLjIwOSAxMS41NjZIMjcuMjI1Yy0xLjQ1IDAtNS41MTIgNy42NTMtMTIuMTM3IDcuNDI1LTQuNjk5LS4xNjIgMi42NzEtNy40MjUuNzg1LTcuNDI1LTUuNTkyIDAtOS42NDQtNC44NjctOS43OC0xMS41NjZNNTguMTIgNTcuNzI5Yy0xLjQ4NiAwIDQuMzIyIDUuNzI0LjYxOSA1Ljg1Mi01LjIyMi4xOC04LjQyMy01Ljg1Mi05LjU2NS01Ljg1MmgtMTAuNDFjLTIuNTAyIDAtNy44OTQtMi4xMjctOC4wNDYtOS4xMTUtLjE2LTcuMzg0IDQuNjY3LTkuOTAzIDcuOTktMTAuMDE2IDYuODA1LS4yMyAxNS42NDQgMCAxOS42MzcgMCAzLjI4MSAwIDcuNjM4IDIuNDMgNy40ODQgMTAuMDE2LS4xMDggNS4yOC0zLjMwMiA5LjExNS03LjcwOSA5LjExNSIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==";

  const vm = Scratch.vm;
  const runtime = vm.runtime;
  let messageBank = Object.create(null);

  class SPmessages {
    constructor() {
      runtime.on("PROJECT_START", () => { messageBank = Object.create(null) });
      runtime.on("PROJECT_STOP_ALL", () => { messageBank = Object.create(null) });
      runtime.on("AFTER_EXECUTE", () => {
        // clear finished broadcasts
        const msgData = Object.values(messageBank);
        for (const msg of msgData) {
          for (var i = msg.threads.length; i--; ) {
            const thread = msg.threads[i];
            if (thread.status === 4) msg.threads.splice(i, 1);
          }
        }
      });
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
          /* Deprecation Marker */
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
          /* Marker End */
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
          if (util.stackFrame.newThreads.length === 0) return "";
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
      console.log(messageBank);
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
      // Delay Deletion of Thread
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

    /* Deprecation Marker */
    broadcast1(args) { this.broadcastMsg({ ...args, DATA : "", WAIT : "continue" }) }
    broadcastData1(args) { this.broadcastMsg({ ...args, DATA : "", WAIT : "wait" }) }
    broadcast2(args) { this.broadcastMsg({ ...args, WAIT : "continue" }) }
    broadcastData2(args) { this.broadcastMsg({ ...args, WAIT : "wait" }) }
    deleteMessage(args) { return }
    deleteAll() { messageBank = {} }
    /* Marker End */
  }

  Scratch.extensions.register(new SPmessages());
})(Scratch);
