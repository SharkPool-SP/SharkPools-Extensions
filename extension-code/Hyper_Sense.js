/*
* This Extension was made by SharkPool (https://www.youtube.com/@SharkPool_SP)
* Version 1.2
* Do not remove this comment
*/

(function (Scratch) {
  'use strict';

  if (!Scratch.extensions.unsandboxed) {
    throw new Error('Hyper Sense must run unsandboxed');
  }

  const menuIconURI = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxMzguMjE0IiBoZWlnaHQ9IjEzOC4yMTQiIHZpZXdCb3g9IjAsMCwxMzguMjE0LDEzOC4yMTQiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNzAuODkzLC0xMTAuODkzKSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMTcwLjg5MywxODBjMCwtMzguMTY2NzQgMzAuOTQwMjYsLTY5LjEwNyA2OS4xMDcsLTY5LjEwN2MzOC4xNjY3NCwwIDY5LjEwNywzMC45NDAyNiA2OS4xMDcsNjkuMTA3YzAsMzguMTY2NzQgLTMwLjk0MDI2LDY5LjEwNyAtNjkuMTA3LDY5LjEwN2MtMzguMTY2NzQsMCAtNjkuMTA3LC0zMC45NDAyNiAtNjkuMTA3LC02OS4xMDd6IiBmaWxsPSIjNWNiMWQ2IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIvPjxwYXRoIGQ9Ik0yNzMuNTY4MTMsMjE2LjIzNjU5Yy0wLjY4MjI5LDAgLTEuMzY0NTcsLTAuMjYwNzQgLTEuODg2MDYsLTAuNzgwMDZsLTY2LjU3ODkzLC02Ni41ODExYy0xLjA0MDgxLC0xLjA0MDgxIC0xLjA0MDgxLC0yLjczMTI5IDAsLTMuNzcyMWMxLjA0MDgxLC0xLjA0MDgxIDIuNzMxMjksLTEuMDQwODEgMy43NzIxLDBsNjYuNTc4OTMsNjYuNTc4OTNjMS4wNDA4MSwxLjA0MDgxIDEuMDQwODEsMi43MzEyOSAwLDMuNzcyMWMtMC41MjE0OSwwLjUxOTMyIC0xLjIwMzc4LDAuNzgyMjMgLTEuODg2MDYsMC43ODIyM3oiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PHBhdGggZD0iTTIzMy4xMDcxMSwxNTguNDM2MDZjMCw4LjEwMjY0IC02LjU2ODU5LDE0LjY3MTIzIC0xNC42NzEyMywxNC42NzEyM2MtOC4xMDI2NCwwIC0xNC42NzEyMywtNi41Njg1OSAtMTQuNjcxMjMsLTE0LjY3MTIzYzAsLTguMTAyNjQgNi41Njg1OSwtMTQuNjcxMjMgMTQuNjcxMjMsLTE0LjY3MTIzYzguMTAyNjQsMCAxNC42NzEyMyw2LjU2ODU5IDE0LjY3MTIzLDE0LjY3MTIzeiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNMjMxLjA3MzQ3LDE4OC43MjQyNmMtNy44ODU4MywtMS44NjIwOSAtMTIuNzY5MDIsLTkuNzY0MzUgLTEwLjkwNjkyLC0xNy42NTAxN2MxLjg2MjA5LC03Ljg4NTgzIDkuNzY0MzUsLTEyLjc2OTAyIDE3LjY1MDE3LC0xMC45MDY5MmM3Ljg4NTgzLDEuODYyMDkgMTIuNzY5MDIsOS43NjQzNSAxMC45MDY5MiwxNy42NTAxN2MtMS44NjIwOSw3Ljg4NTgzIC05Ljc2NDM1LDEyLjc2OTAyIC0xNy42NTAxNywxMC45MDY5MnoiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PHBhdGggZD0iTTI2NS4xMjAwMSwxOTAuNDQ2NzljMCw4LjEwMjY0IC02LjU3MDc2LDE0LjY3MzM5IC0xNC42NzMzOSwxNC42NzMzOWMtOC4xMDI2NCwwIC0xNC42NzEyMywtNi41NzA3NiAtMTQuNjcxMjMsLTE0LjY3MzM5YzAsLTguMTAyNjQgNi41Njg1OSwtMTQuNjcxMjMgMTQuNjcxMjMsLTE0LjY3MTIzYzguMTAyNjQsMCAxNC42NzMzOSw2LjU3MDc2IDE0LjY3MzM5LDE0LjY3MTIzeiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNMjczLjU2ODEzLDIxNi4yMzY1OWMtMC42ODIyOSwwIC0xLjM2NDU3LC0wLjI2MDc0IC0xLjg4NjA2LC0wLjc4MDA2bC0xNi4zMzk5OCwtMTYuMzM5OThjLTEuMDQyOTgsLTEuMDQwODEgLTEuMDQyOTgsLTIuNzMxMjkgMCwtMy43NzIxYzEuMDQyOTgsLTEuMDQwODEgMi43MjkxMiwtMS4wNDA4MSAzLjc3MjEsMGwxNi4zMzk5OCwxNi4zMzk5OGMxLjA0MDgxLDEuMDQwODEgMS4wNDA4MSwyLjczMTI5IDAsMy43NzIxYy0wLjUyMTQ5LDAuNTE3MTQgLTEuMjAzNzgsMC43ODAwNiAtMS44ODYwNiwwLjc4MDA2eiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiLz48ZyBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMS41Ij48cGF0aCBkPSJNMTgyLjY2ODI2LDE4MGwxMi44MDY5MSwtMTIuODA2OTF2MjUuNjEzODF6Ii8+PHBhdGggZD0iTTI1Mi44MDY5LDEzNS40NzUxNmgtMjUuNjEzODFsMTIuODA2OSwtMTIuODA2OXoiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9Ii8+PHBhdGggZD0iTTI5Ny4zMzE3NSwxODBsLTEyLjgwNjksMTIuODA2OXYtMjUuNjEzODF6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIvPjxwYXRoIGQ9Ik0yMjcuMTkzMSwyMjQuNTI0ODRoMjUuNjEzODFsLTEyLjgwNjksMTIuODA2OXoiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9Ii8+PC9nPjwvZz48L2c+PC9zdmc+';

  const loudnessArrayLength = 20;
  let keyHitFlag = false;

  class HyperSenseSP {
    constructor() {
      this.scrollDistance = 0;
      this.minValue = 0;
      this.maxValue = 100;
      this.loudnessArray = [];
      document.addEventListener('wheel', this.handleScroll);
      this.isMicrophoneEnabled = false;
      this.pressedKey = null;

      document.addEventListener('keydown', (event) => {
        this.pressedKey = event.key.toUpperCase();
      });

      document.addEventListener('keyup', () => {
        this.pressedKey = null;
      });
    }

    getInfo() {
      return {
        id: 'HyperSenseSP',
        name: 'Hyper Sense',
        color1: '#5cb1d6',
        color2: '#2e8eb8',
        menuIconURI,
        blocks: [
          {
            opcode: 'monitorScrollWheel',
            blockType: Scratch.BlockType.REPORTER,
            text: 'scroll wheel distance',
          },
          {
            opcode: 'monitorScrollWheelLimited',
            blockType: Scratch.BlockType.REPORTER,
            text: 'scroll wheel distance limited from [MIN] to [MAX]',
            arguments: {
              MIN: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0,
              },
              MAX: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 100,
              },
            },
          },
          {
            opcode: 'setScrollDistance',
            blockType: Scratch.BlockType.COMMAND,
            text: 'set scroll wheel distance to [DISTANCE]',
            arguments: {
              DISTANCE: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0,
              },
            },
          },

          '---',

          {
            opcode: 'whenKeyHit',
            blockType: Scratch.BlockType.HAT,
            text: 'when [KEY] key hit',
            arguments: {
              KEY: {
                type: Scratch.ArgumentType.STRING,
                menu: 'keys',
                defaultValue: 'A',
              },
            },
          },
          {
            opcode: 'isKeyHit',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'key [KEY] hit?',
            arguments: {
              KEY: {
                type: Scratch.ArgumentType.STRING,
                menu: 'keys',
                defaultValue: 'A',
              },
            },
          },

          '---',

          {
            opcode: 'toggleMicrophone',
            blockType: Scratch.BlockType.COMMAND,
            text: 'toggle microphone to [STATE]',
            arguments: {
              STATE: {
                type: Scratch.ArgumentType.STRING,
                menu: 'microphoneStates',
                defaultValue: 'enabled',
              },
            },
          },
          {
            opcode: 'averageMicrophoneLoudness',
            blockType: Scratch.BlockType.REPORTER,
            text: 'average microphone loudness',
          },

          '---',

          {
            opcode: 'getSpriteName',
            blockType: Scratch.BlockType.REPORTER,
            text: 'my sprite name',
            disableMonitor: true,
          },
        ],
        menus: {
          microphoneStates: ['enabled', 'disabled'],
          keys: {
            acceptReporters: true,
            items: [
              'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
              'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
              'U', 'V', 'W', 'X', 'Y', 'Z',
              '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
              'Arrow Up', 'Arrow Down', 'Arrow Left', 'Arrow Right',
              'Space', 'Enter', 'Shift', 'Control', 'Alt', 'Escape',
              'Backspace', 'Tab', 'Caps Lock',
              'Insert', 'Page Up', 'Page Down'
            ],
          }
        }
      };
    }

    monitorScrollWheel() {
      return this.scrollDistance;
    }

    monitorScrollWheelLimited(args) {
      const min = Scratch.Cast.toNumber(args.MIN);
      const max = Scratch.Cast.toNumber(args.MAX);
      return Math.max(Math.min(this.scrollDistance, max), min);
    }

    setScrollDistance(args) {
      this.scrollDistance = Scratch.Cast.toNumber(args.DISTANCE);
    }

    handleScroll = (event) => {
      this.scrollDistance += event.deltaY;
    };

    getSpriteName() {
      const currentSpriteTarget = Scratch.vm.runtime.getEditingTarget();

      if (this.isValidTarget(currentSpriteTarget)) {
        return currentSpriteTarget.sprite.name;
      } else {
        return '';
      }
    }

    initMicrophone() {
      if (this.isMicrophoneEnabled) {
        navigator.mediaDevices.getUserMedia({ audio: true })
          .then(this.handleMicrophoneSuccess)
          .catch(this.handleMicrophoneError);
      }
    }

    handleMicrophoneSuccess = (stream) => {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const microphone = this.audioContext.createMediaStreamSource(stream);
      const analyser = this.audioContext.createAnalyser();
      analyser.fftSize = 256;

      microphone.connect(analyser);
      this.updateMicrophoneLoudness(analyser);
    };

    handleMicrophoneError = (error) => {
      console.error('Error accessing microphone:', error);
    };

    updateMicrophoneLoudness(analyser) {
      const dataArray = new Uint8Array(analyser.frequencyBinCount);

      setInterval(() => {
        analyser.getByteFrequencyData(dataArray);
        const loudness = this.calculateLoudness(dataArray);

        this.loudnessArray.push(loudness);
        if (this.loudnessArray.length >= loudnessArrayLength) {
          this.loudnessArray.shift();
        }
      }, 100);
    }

    calculateLoudness(dataArray) {
      let sum = 0;
      for (let i = 0; i < dataArray.length; i++) {
        sum += dataArray[i];
      }
      return sum / dataArray.length;
    }

    isValidTarget(target) {
      return target && target.sprite;
    }

    averageMicrophoneLoudness() {
      return this.calculateAverageLoudness(this.loudnessArray);
    }

    calculateAverageLoudness(loudnessArray) {
      return loudnessArray.reduce((acc, loudness) => acc + loudness, 0) / loudnessArray.length +1;
    }

    toggleMicrophone(args) {
      if (args.STATE === 'enabled') {
        this.isMicrophoneEnabled = true;
        this.initMicrophone();
      } else {
        this.isMicrophoneEnabled = false;
        this.disableMicrophone();
      }
    }

    disableMicrophone() {
      if (this.audioContext) {
        this.audioContext.close().then(() => {
          this.audioContext = null;
          this.loudnessArray = [];
        }).catch(error => {
          console.error('Error while closing audio context:', error);
        });
      }
    }

    whenKeyHit(args) {
      let key = Scratch.Cast.toString(args.KEY).replace(' ', '');
      if (isNaN(parseFloat(key))) {
        key = key.toUpperCase();
      }
      const pressedKey = this.pressedKey || null;

      if (
        (key === 'SPACE' && pressedKey === ' ') ||
        (key === pressedKey && !keyHitFlag) ||
        (key.startsWith('DIGIT') && key.slice(5) === pressedKey)
      ) {
        return true;
      } else {
        return false;
      }
    }

    isKeyHit(args) {
      let key = Scratch.Cast.toString(args.KEY).replace(' ', '');
      console.log(key);
      if (isNaN(parseFloat(key))) {
        key = key.toUpperCase();
      }
      const pressedKey = this.pressedKey || null;

      if (
        (key === 'SPACE' && pressedKey === ' ') ||
        (key === pressedKey && !keyHitFlag) ||
        (key.startsWith('DIGIT') && key.slice(5) === pressedKey)
      ) {
        keyHitFlag = true;
        return true;
      } else if (key !== pressedKey) {
        keyHitFlag = false;
      }
      return false;
    }
  }

  Scratch.extensions.register(new HyperSenseSP());
})(Scratch);
