(function(Scratch) {
    'use strict';
  
    let lastMessage = '';
    let lastUserMessages = {};
    let lastUserWhoSaid = {};
    let allUsersWhoSaid = {};
    let userMessages = {};
    let ws = null;
    let isConnecting = false;
  
    const messages = {
        en: {
            name: 'Twitch Chat',
            lastMessage: 'Last message of chat',
            joinChat: 'Join chat of [channel]',
            leaveChat: 'Leave current chat',
            noMessages: 'No messages yet.',
            provideChannel: 'Please provide a channel name.',
            alreadyConnecting: 'Already trying to connect. Please wait.',
            joiningChannel: 'Joining channel: ',
            disconnected: 'Disconnected from chat.',
            leftChat: 'Left the chat.',
            notConnected: 'Not connected to any chat.',
            lastUserMessage: 'Last [name] message',
            lastUserWhoSaid: 'Last user who said [mess]',
            allUsersWhoSaid: 'All users who said [mess]',
            allUserMessages: 'All [name] messages'
        }
    };
  
    class TwitchChatExtension {
        getInfo() {
            const t = messages.en;
  
            return {
                id: 'twitchChat',
                name: t.name,
                color1: '#8c00ff',
                color2: '#7a00e6',
                color3: '#6b00cc',
                menuIconURI: 'data:image/png;base64,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',
                blocks: [
                    {
                        opcode: 'getLastMessage',
                        blockType: Scratch.BlockType.REPORTER,
                        text: t.lastMessage
                    },
                    {
                        opcode: 'joinChannel',
                        blockType: Scratch.BlockType.COMMAND,
                        text: t.joinChat,
                        arguments: {
                            channel: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'streamerName'
                            }
                        }
                    },
                    {
                        opcode: 'leaveChannel',
                        blockType: Scratch.BlockType.COMMAND,
                        text: t.leaveChat
                    },
                    {
                        opcode: 'getLastUserMessage',
                        blockType: Scratch.BlockType.REPORTER,
                        text: t.lastUserMessage,
                        arguments: {
                            name: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'username'
                            }
                        }
                    },
                    {
                        opcode: 'getLastUserWhoSaid',
                        blockType: Scratch.BlockType.REPORTER,
                        text: t.lastUserWhoSaid,
                        arguments: {
                            mess: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'hello'
                            }
                        }
                    },
                    {
                        opcode: 'getAllUsersWhoSaid',
                        blockType: Scratch.BlockType.REPORTER,
                        text: t.allUsersWhoSaid,
                        arguments: {
                            mess: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'hello'
                            }
                        }
                    },
                    {
                        opcode: 'getAllUserMessages',
                        blockType: Scratch.BlockType.REPORTER,
                        text: t.allUserMessages,
                        arguments: {
                            name: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'username'
                            }
                        }
                    }
                ]
            };
        }
  
        getLastMessage() {
            return lastMessage || messages.en.noMessages;
        }
  
        getLastUserMessage(args) {
            return lastUserMessages[args.name] || messages.en.noMessages;
        }
  
        getLastUserWhoSaid(args) {
            return lastUserWhoSaid[args.mess] || messages.en.noMessages;
        }
  
        getAllUsersWhoSaid(args) {
            return allUsersWhoSaid[args.mess] ? [...allUsersWhoSaid[args.mess]] : [];
        }
  
        getAllUserMessages(args) {
            return userMessages[args.name] ? [...userMessages[args.name]] : [];
        }
  
        joinChannel(args) {
            const channel = args.channel.toLowerCase();
  
            if (!channel) {
                return messages.en.provideChannel;
            }
  
            if (isConnecting) {
                return messages.en.alreadyConnecting;
            }
  
            if (ws) {
                this.leaveChannel();
            }
  
            isConnecting = true;
            ws = new WebSocket('wss://irc-ws.chat.twitch.tv:443');
            const justinFanID = `justinfan${Math.floor(Math.random() * 100000)}`;
  
            ws.onopen = () => {
                ws.send('CAP REQ :twitch.tv/tags twitch.tv/commands twitch.tv/membership');
                ws.send(`NICK ${justinFanID}`);
                ws.send(`JOIN #${channel}`);
                isConnecting = false;
            };
  
            ws.onmessage = (event) => {
                const messages = event.data.split('\r\n');
                messages.forEach(line => {
                    if (line.includes('PRIVMSG')) {
                        const match = line.match(/:(.*?)!.*? PRIVMSG #.*? :(.*)/);
                        if (match) {
                            const username = match[1];
                            const chatMessage = match[2];
                            lastMessage = `${username}: ${chatMessage}`;
                            lastUserMessages[username] = chatMessage;
                            lastUserWhoSaid[chatMessage] = username;
                            allUsersWhoSaid[chatMessage] = allUsersWhoSaid[chatMessage] || new Set();
                            allUsersWhoSaid[chatMessage].add(username);
                            userMessages[username] = userMessages[username] || [];
                            userMessages[username].push(chatMessage);
                        }
                    }
                });
            };
        }
    }
  
    Scratch.extensions.register(new TwitchChatExtension());
})(Scratch);
