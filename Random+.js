(function (Scratch) {
  'use strict';

  class RandomFunctionsExtension {
    getInfo() {
      return {
        id: 'randomFunctions',
        name: 'Random Functions',
        blocks: [
          {
            opcode: 'randomQuote',
            blockType: Scratch.BlockType.REPORTER,
            text: 'random motivational quote'
          },
          {
            opcode: 'isPalindrome',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'is [TEXT] a palindrome?',
            arguments: {
              TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: 'level' }
            }
          },
          {
            opcode: 'romanConverter',
            blockType: Scratch.BlockType.REPORTER,
            text: 'convert [NUM] to Roman',
            arguments: {
              NUM: { type: Scratch.ArgumentType.NUMBER, defaultValue: 42 }
            }
          },
          {
            opcode: 'rollDice',
            blockType: Scratch.BlockType.REPORTER,
            text: 'roll a D[SIDES] dice',
            arguments: {
              SIDES: { type: Scratch.ArgumentType.NUMBER, defaultValue: 6 }
            }
          },
          {
            opcode: 'randomColor',
            blockType: Scratch.BlockType.REPORTER,
            text: 'random color HEX'
          }
        ]
      };
    }

    randomQuote() {
      const quotes = [
        "Keep going, you're doing great!",
        "Believe in yourself.",
        "Every step counts.",
        "Stay positive, work hard, make it happen."
      ];
      return quotes[Math.floor(Math.random() * quotes.length)];
    }

    isPalindrome(args) {
      const str = args.TEXT.toLowerCase().replace(/[^a-z0-9]/g, '');
      return str === str.split('').reverse().join('');
    }

    romanConverter(args) {
      const num = args.NUM;
      const romans = [
        ["M",1000],["CM",900],["D",500],["CD",400],
        ["C",100],["XC",90],["L",50],["XL",40],
        ["X",10],["IX",9],["V",5],["IV",4],["I",1]
      ];
      let result = '';
      let n = num;
      for (const [letter, value] of romans) {
        while (n >= value) {
          result += letter;
          n -= value;
        }
      }
      return result;
    }

    rollDice(args) {
      const sides = Math.max(2, Math.floor(args.SIDES));
      return Math.floor(Math.random() * sides) + 1;
    }

    randomColor() {
      const hex = Math.floor(Math.random() * 16777215).toString(16);
      return "#" + hex.padStart(6, '0');
    }
  }

  Scratch.extensions.register(new RandomFunctionsExtension());
})(Scratch);
