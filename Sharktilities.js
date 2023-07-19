/*
* v1.6 | Created by SharkPool.
* https://www.youtube.com/c/SharkPoolthe1
* Do not remove this comment
*/
(function (Scratch) {
    'use strict';

    const vm = Scratch.vm;

    //ICON
    const menuIconURI = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxMzUuMzYzIiBoZWlnaHQ9IjEzNS4zNjMiIHZpZXdCb3g9IjAsMCwxMzUuMzYzLDEzNS4zNjMiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNzIuMzE4NSwtMTEyLjMxODUpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTE3Mi4zMTg1LDE4MGMwLC0zNy4zNzk0NiAzMC4zMDIwNCwtNjcuNjgxNSA2Ny42ODE1LC02Ny42ODE1YzM3LjM3OTQ2LDAgNjcuNjgxNSwzMC4zMDIwNCA2Ny42ODE1LDY3LjY4MTVjMCwzNy4zNzk0NiAtMzAuMzAyMDQsNjcuNjgxNSAtNjcuNjgxNSw2Ny42ODE1Yy0zNy4zNzk0NiwwIC02Ny42ODE1LC0zMC4zMDIwNCAtNjcuNjgxNSwtNjcuNjgxNXoiIGZpbGw9IiMzM2I2ZmYiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjxwYXRoIGQ9Ik0yMDQuNjY2OTcsMjA3LjMwMzE4YzAsMCAxMi41NTgyMSw2LjQxMzE5IDE1LjM0ODYsLTguNDQ2OTVjNC4wNTQ1OSwtMjEuNTkyNTkgLTIuNTcyNTgsLTQwLjMzNDY2IC02LjM0Mzk3LC00OC43MDgwMmMtMS4zNDgxMSwtMi45OTMxMiAtMC4wMDIwNSwtNC4yNTgwNCAzLjY1MDg0LC0zLjQwNDE5YzkuMjI5MDQsMi4xNTcyNSAyNi45MDcwMSw3LjE5MDMgMzYuODE1NTEsMTUuODYwNDFjMTUuMjEzNTIsMTMuMzEyMDkgMTUuNTQ0NjksMzQuMDY5NDMgMTguNTExOTIsMzkuOTY3MjFjMi40MjcwOSw0LjgyNDE4IDkuNTk0MjYsMi42MTk4IDkuNTk0MjYsMi42MTk4IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L2c+PC9nPjwvc3ZnPg==';

    class Sharktilities {
        getInfo() {
        return {
            id: 'SharkPoolSharktilities',
            name: 'Sharktilities',
            color1: '#33B6FF',
            menuIconURI,
            blocks: [
          {
            opcode: 'roundToNearest',
            blockType: Scratch.BlockType.REPORTER,
            text: 'round [NUMBER] to nearest [ROUND_TYPE]',
            arguments: {
              NUMBER: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0,
              },
              ROUND_TYPE: {
                type: Scratch.ArgumentType.STRING,
                menu: 'ROUND_MENU',
                defaultValue: 'whole number',
              },
            },
          },
          {
            opcode: 'randomLetter',
            blockType: Scratch.BlockType.REPORTER,
            text: 'pick random [LETTER_TYPE] letter',
            arguments: {
              LETTER_TYPE: {
                type: Scratch.ArgumentType.STRING,
                menu: 'LETTER_TYPE_MENU',
                defaultValue: 'lowercase',
              },
            },
          },
          {
            disableMonitor: true,
            opcode: 'randomSingleInteger',
            blockType: Scratch.BlockType.REPORTER,
            text: 'pick random single integer',
          },
          {
            opcode: 'setSpriteEffect',
            blockType: Scratch.BlockType.COMMAND,
            text: 'set [EFFECT] effect to [VALUE] for [SPRITE]',
            arguments: {
              EFFECT: {
                type: Scratch.ArgumentType.STRING,
                menu: 'EFFECT_MENU',
                defaultValue: 'color',
              },
              VALUE: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0,
              },
              SPRITE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Sprite1',
              },
            },
          },
          {
            opcode: 'tripleJoin',
            blockType: Scratch.BlockType.REPORTER,
            text: 'join [STRING1] [STRING2] [STRING3]',
            arguments: {
              STRING1: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '',
              },
              STRING2: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '',
              },
              STRING3: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '',
              },
            },
          },
          {
            opcode: 'quadrupleJoin',
            blockType: Scratch.BlockType.REPORTER,
            text: 'join [STRING1] [STRING2] [STRING3] [STRING4]',
            arguments: {
              STRING1: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '',
              },
              STRING2: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '',
              },
              STRING3: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '',
              },
              STRING4: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '',
              },
            },
          },
          {
            opcode: 'tripleOperator',
            blockType: Scratch.BlockType.REPORTER,
            text: '[NUM1] [OPERATOR1] [NUM2] [OPERATOR2] [NUM3]',
            arguments: {
              NUM1: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0,
              },
              OPERATOR1: {
                type: Scratch.ArgumentType.STRING,
                menu: 'OPERATOR_MENU',
                defaultValue: '+',
              },
              NUM2: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0,
              },
              OPERATOR2: {
                type: Scratch.ArgumentType.STRING,
                menu: 'OPERATOR_MENU',
                defaultValue: '+',
              },
              NUM3: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0,
              },
            },
          },
          {
            opcode: 'quadrupleOperator',
            blockType: Scratch.BlockType.REPORTER,
            text: '[NUM1] [OPERATOR1] [NUM2] [OPERATOR2] [NUM3] [OPERATOR3] [NUM4]',
            arguments: {
              NUM1: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0,
              },
              OPERATOR1: {
                type: Scratch.ArgumentType.STRING,
                menu: 'OPERATOR_MENU',
                defaultValue: '+',
              },
              NUM2: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0,
              },
              OPERATOR2: {
                type: Scratch.ArgumentType.STRING,
                menu: 'OPERATOR_MENU',
                defaultValue: '+',
              },
              NUM3: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0,
              },
              OPERATOR3: {
                type: Scratch.ArgumentType.STRING,
                menu: 'OPERATOR_MENU',
                defaultValue: '+',
              },
              NUM4: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0,
              },
            },
          },
          {
            opcode: 'negaAbs',
            blockType: Scratch.BlockType.REPORTER,
            text: 'nega-abs of [NUMBER]',
            arguments: {
              NUMBER: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0,
              },
            },
          },
          {
            opcode: 'shuffleArray',
            blockType: Scratch.BlockType.REPORTER,
            text: 'organize array [WORDS] by [SHUFFLE_OPTION]',
            arguments: {
              WORDS: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'word1 word2 word3',
              },
              SHUFFLE_OPTION: {
                type: Scratch.ArgumentType.STRING,
                menu: 'shuffleOption',
                defaultValue: 'random',
              },
            },
          },
        ],
        menus: {
          ROUND_MENU: {
            acceptReporters: true,
            items: ['whole number', 'tenths', 'hundredths', 'thousandths'],
          },
          LETTER_TYPE_MENU: {
            acceptReporters: true,
            items: ['lowercase', 'uppercase'],
          },
          EFFECT_MENU: {
            acceptReporters: true,
            items: ['color', 'fisheye', 'whirl', 'pixelate', 'mosaic', 'brightness', 'ghost'],
          },
          OPERATOR_MENU: {
            acceptReporters: true,
            items: ['+', '-', '*', '/'],
          },
          shuffleOption: [
            {
              text: 'random',
              value: 'random',
            },
            {
              text: 'ascending',
              value: 'ascending',
            },
            {
              text: 'descending',
              value: 'descending',
            },
            {
              text: 'ascending by length',
              value: 'smallest_length',
            },
            {
              text: 'descending by length',
              value: 'biggest_length',
            },
          ],
        },
      };
    }

    roundToNearest({ NUMBER, ROUND_TYPE }) {
      switch (ROUND_TYPE) {
        case 'whole number':
          return Math.round(NUMBER);
        case 'tenths':
          return Math.round(NUMBER * 10) / 10;
        case 'hundredths':
          return Math.round(NUMBER * 100) / 100;
        case 'thousandths':
          return Math.round(NUMBER * 1000) / 1000;
        default:
          return Math.round(NUMBER);
      }
    }

    randomLetter({ LETTER_TYPE }) {
      let letters = '';
      switch (LETTER_TYPE) {
        case 'lowercase':
          letters = 'abcdefghijklmnopqrstuvwxyz';
          break;
        case 'uppercase':
          letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
          break;
        default:
          letters = 'abcdefghijklmnopqrstuvwxyz';
          break;
      }
      return letters.charAt(Math.floor(Math.random() * letters.length));
    }

    randomSingleInteger() {
      return Math.random() < 0.5 ? -1 : 1;
    }

    setSpriteEffect({ EFFECT, VALUE }, util) {
      const target = util.target;
      if (!target) return;

      switch (EFFECT) {
        case 'color':
          target.setEffect('color', VALUE);
          break;
        case 'fisheye':
          target.setEffect('fisheye', VALUE);
          break;
        case 'whirl':
          target.setEffect('whirl', VALUE);
          break;
        case 'pixelate':
          target.setEffect('pixelate', VALUE);
          break;
        case 'mosaic':
          target.setEffect('mosaic', VALUE);
          break;
        case 'brightness':
          target.setEffect('brightness', VALUE);
          break;
        case 'ghost':
          target.setEffect('ghost', VALUE);
          break;
        default:
          break;
      }
    }

    tripleJoin({ STRING1, STRING2, STRING3 }) {
      return `${STRING1}${STRING2}${STRING3}`;
    }

    quadrupleJoin({ STRING1, STRING2, STRING3, STRING4 }) {
      return `${STRING1}${STRING2}${STRING3}${STRING4}`;
    }

    tripleOperator({ NUM1, OPERATOR1, NUM2, OPERATOR2, NUM3 }) {
      switch (OPERATOR1) {
        case '+':
          NUM1 += NUM2;
          break;
        case '-':
          NUM1 -= NUM2;
          break;
        case '*':
          NUM1 *= NUM2;
          break;
        case '/':
          NUM1 /= NUM2;
          break;
        default:
          NUM1 += NUM2;
      }

      switch (OPERATOR2) {
        case '+':
          NUM1 += NUM3;
          break;
        case '-':
          NUM1 -= NUM3;
          break;
        case '*':
          NUM1 *= NUM3;
          break;
        case '/':
          NUM1 /= NUM3;
          break;
        default:
          NUM1 += NUM2;
      }

      return NUM1;
    }

    quadrupleOperator({ NUM1, OPERATOR1, NUM2, OPERATOR2, NUM3, OPERATOR3, NUM4 }) {
      switch (OPERATOR1) {
        case '+':
          NUM1 += NUM2;
          break;
        case '-':
          NUM1 -= NUM2;
          break;
        case '*':
          NUM1 *= NUM2;
          break;
        case '/':
          NUM1 /= NUM2;
          break;
        default:
          NUM1 += NUM2;
      }

      switch (OPERATOR2) {
        case '+':
          NUM1 += NUM3;
          break;
        case '-':
          NUM1 -= NUM3;
          break;
        case '*':
          NUM1 *= NUM3;
          break;
        case '/':
          NUM1 /= NUM3;
          break;
        default:
          NUM1 += NUM2;
      }

      switch (OPERATOR3) {
        case '+':
          NUM1 += NUM4;
          break;
        case '-':
          NUM1 -= NUM4;
          break;
        case '*':
          NUM1 *= NUM4;
          break;
        case '/':
          NUM1 /= NUM4;
          break;
        default:
          NUM1 += NUM2;
      }

      return NUM1;
    }

    negaAbs({ NUMBER }) {
      return -Math.abs(Scratch.Cast.toNumber(NUMBER));
    }

    shuffleArray(args) {
      const words = args.WORDS.split(' ');

      switch (args.SHUFFLE_OPTION) {
        case 'ascending':
          words.sort();
          break;
        case 'descending':
          words.sort().reverse();
          break;
        case 'biggest_length':
          words.sort((a, b) => b.length - a.length);
          break;
        case 'smallest_length':
          words.sort((a, b) => a.length - b.length);
          break;
        default:
          // Random shuffle (default)
          for (let i = words.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [words[i], words[j]] = [words[j], words[i]];
          }
          break;
      }

      return words.join(' ');
    }
  }

  Scratch.extensions.register(new Sharktilities());
})(Scratch);
