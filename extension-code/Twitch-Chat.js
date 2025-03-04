// Name: Twitch Chat
// ID: SomrotiTwitchChat
// Description: Interact with your Twitch Chat!
// By: Somroti

// Version: 1.0.0

(function(Scratch) {
    "use strict";
    if (!Scratch.extensions.unsandboxed) throw new Error("Twitch Chat must run unsandboxed");
  
    const blockIconURI =
  "data:image/png;base64,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";
  
    let lastMessage = "", lastUser = "";
    let isConnecting = false, newMessage = false;
  
    let lastUserMessages = Object.create(null);
    let lastUserWhoSaid = Object.create(null);
    let allUsersWhoSaid = Object.create(null);
    let userMessages = Object.create(null);
    let ws = null;
  
    class SomrotiTwitchChat {
      getInfo() {
        return {
          id: "SomrotiTwitchChat",
          name: "Twitch Chat",
          color1: "#8c00ff",
          color2: "#7a00e6",
          color3: "#6b00cc",
          menuIconURI: blockIconURI,
          blockIconURI,
          blocks: [
            {
              opcode: "getLastMessageContent",
              blockType: Scratch.BlockType.REPORTER,
              text: "last message content"
            },
            {
              opcode: "getLastMessageUser",
              blockType: Scratch.BlockType.REPORTER,
              text: "last message user"
            },
            {
              opcode: "joinChannel",
              blockType: Scratch.BlockType.COMMAND,
              text: "join chat of [channel]",
              arguments: {
                channel: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: "somrotitv"
                }
              }
            },
            {
              opcode: "leaveChannel",
              blockType: Scratch.BlockType.COMMAND,
              text: "leave current chat"
            },
            {
              opcode: "getLastUserMessage",
              blockType: Scratch.BlockType.REPORTER,
              text: "last [name] message",
              arguments: {
                name: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: "username"
                }
              }
            },
            {
              opcode: "getLastUserWhoSaid",
              blockType: Scratch.BlockType.REPORTER,
              text: "last user who said [mess]",
              arguments: {
                mess: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: "hello"
                }
              }
            },
            {
              opcode: "getAllUsersWhoSaid",
              blockType: Scratch.BlockType.REPORTER,
              text: "all users who said [mess]",
              arguments: {
                mess: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: "hello"
                }
              }
            },
            {
              opcode: "getAllUserMessages",
              blockType: Scratch.BlockType.REPORTER,
              text: "all [name] messages",
              arguments: {
                name: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: "username"
                }
              }
            },
            {
              opcode: "isNewMessage",
              blockType: Scratch.BlockType.BOOLEAN,
              text: "new message?"
            },
            {
              opcode: "resetNewMessage",
              blockType: Scratch.BlockType.COMMAND,
              text: "reset new message status"
            },
            {
              opcode: "whenNewMessage",
              blockType: Scratch.BlockType.HAT,
              text: "when new message"
            }
          ]
        };
      }
    
      getLastMessageContent() {
        return lastMessage || "No messages yet.";
      }
    
      getLastMessageUser() {
        return lastUser || "No user yet.";
      }
    
      getLastUserMessage(args) {
        return lastUserMessages[args.name] || "No messages yet.";
      }
    
      getLastUserWhoSaid(args) {
        return lastUserWhoSaid[args.mess] || "No messages yet.";
      }
    
      getAllUsersWhoSaid(args) {
        return JSON.stringify(allUsersWhoSaid[args.mess] ? [...allUsersWhoSaid[args.mess]] : []);
      }
    
      getAllUserMessages(args) {
        return JSON.stringify(userMessages[args.name] ? [...userMessages[args.name]] : []);
      }
    
      isNewMessage() {
        return newMessage;
      }
    
      resetNewMessage() {
        newMessage = false;
      }
    
      whenNewMessage() {
        if (newMessage && lastMessage !== previousMessage) {
            previousMessage = lastMessage;
            return true;
        }
        return false;
      }
      leaveChannel() {
        if (ws) {
            ws.close();
            ws = null;
        }
    }  
    
      joinChannel(args) {
        const channel = Scratch.Cast.toString(args.channel).toLowerCase();
    
        if (!channel) {
          console.warn("Please provide a channel name.");
          return;
        }
    
        if (isConnecting) {
          console.warn("Already trying to connect. Please wait.");
          return;
        }
    
        if (ws) {
          this.leaveChannel();
        }
    
        isConnecting = true;
        ws = new WebSocket("wss://irc-ws.chat.twitch.tv:443");
        const justinFanID = `justinfan${Math.floor(Math.random() * 100000)}`;
    
        ws.onopen = () => {
          ws.send("CAP REQ :twitch.tv/tags twitch.tv/commands twitch.tv/membership");
          ws.send(`NICK ${justinFanID}`);
          ws.send(`JOIN #${channel}`);
          isConnecting = false;
        };
    
        ws.onmessage = (event) => {
          const messages = event.data.split("\r\n");
          messages.forEach(line => {
            if (line.includes("PRIVMSG")) {
              const match = line.match(/:(.*?)!.*? PRIVMSG #.*? :(.*)/);
              if (match) {
                lastUser = match[1];
                lastMessage = match[2];
                lastUserMessages[lastUser] = lastMessage;
                lastUserWhoSaid[lastMessage] = lastUser;
                allUsersWhoSaid[lastMessage] = allUsersWhoSaid[lastMessage] || [];
                if (!allUsersWhoSaid[lastMessage].includes(lastUser)) {
                  allUsersWhoSaid[lastMessage].push(lastUser);
                }
                userMessages[lastUser] = userMessages[lastUser] || [];
                userMessages[lastUser].push(lastMessage);
                newMessage = true;
              }
            }
          });
        };
      }
    }
    
    Scratch.extensions.register(new SomrotiTwitchChat());
  })(Scratch);
