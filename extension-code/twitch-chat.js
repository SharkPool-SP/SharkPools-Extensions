(function(Scratch) {
  'use strict';

  let lastMessage = '';
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
          notConnected: 'Not connected to any chat.'
      },
      fr: {
          name: 'Chat Twitch',
          lastMessage: 'Dernier message du chat',
          joinChat: 'Rejoindre le chat de [channel]',
          leaveChat: 'Quitter le chat actuel',
          noMessages: 'Pas encore de messages.',
          provideChannel: 'Veuillez fournir un nom de chaîne.',
          alreadyConnecting: 'Connexion déjà en cours. Veuillez patienter.',
          joiningChannel: 'Connexion à la chaîne : ',
          disconnected: 'Déconnecté du chat.',
          leftChat: 'Chat quitté.',
          notConnected: 'Non connecté à un chat.'
      }
  };

  class TwitchChatExtension {
      getInfo() {
          const locale = typeof Scratch !== 'undefined' && Scratch.runtime && Scratch.runtime.getLocale ? Scratch.runtime.getLocale() : 'en';
          const t = messages[locale] || messages.en;

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
                      text: Scratch.translate(t.lastMessage)
                  },
                  {
                      opcode: 'joinChannel',
                      blockType: Scratch.BlockType.COMMAND,
                      text: Scratch.translate(t.joinChat),
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
                      text: Scratch.translate(t.leaveChat)
                  }
              ]
          };
      }

      getLastMessage() {
          const locale = typeof Scratch !== 'undefined' && Scratch.runtime && Scratch.runtime.getLocale ? Scratch.runtime.getLocale() : 'en';
          const t = messages[locale] || messages.en;
          return lastMessage || t.noMessages;
      }

      joinChannel(args) {
          const locale = typeof Scratch !== 'undefined' && Scratch.runtime && Scratch.runtime.getLocale ? Scratch.runtime.getLocale() : 'en';
          const t = messages[locale] || messages.en;
          const channel = args.channel.toLowerCase();

          if (!channel) {
              return t.provideChannel;
          }

          if (isConnecting) {
              return t.alreadyConnecting;
          }

          if (ws) {
              this.leaveChannel();
          }

          isConnecting = true;
          ws = new WebSocket(`wss://irc-ws.chat.twitch.tv:443`);

          ws.onopen = () => {
              ws.send('PASS oauth:fakeoauth');
              ws.send('NICK justinfan12345');
              ws.send(`JOIN #${channel}`);
              isConnecting = false;
          };

          ws.onmessage = (event) => {
              const message = event.data;
              if (message.includes('PRIVMSG')) {
                  const username = message.split('!')[0].substring(1);
                  const chatMessage = message.split(' :')[1];
                  lastMessage = `${username}: ${chatMessage}`;
              }
          };

          ws.onclose = () => {
              ws = null;
              lastMessage = t.disconnected;
              isConnecting = false;
          };

          ws.onerror = (error) => {
              console.error('WebSocket error:', error);
              ws = null;
              isConnecting = false;
          };

          return t.joiningChannel + channel;
      }

      leaveChannel() {
          const locale = typeof Scratch !== 'undefined' && Scratch.runtime && Scratch.runtime.getLocale ? Scratch.runtime.getLocale() : 'en';
          const t = messages[locale] || messages.en;

          if (ws) {
              ws.close();
              ws = null;
              lastMessage = t.disconnected;
              return t.leftChat;
          } else {
              return t.notConnected;
          }
      }
  }

  Scratch.extensions.register(new TwitchChatExtension());
})(Scratch);
