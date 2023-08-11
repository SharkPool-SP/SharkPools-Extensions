/*
* Tune Shark Extension was made by SharkPool (Version 1.1.5)
* Credit to HOME for the song 'Resonance' being used as the default audio link
* Credit to LilyMakesThings for some block Ideas
* Do Not Delete this Comment
*/

(function (Scratch) {
  'use strict';

  if (!Scratch.extensions.unsandboxed) {
    throw new Error('Tune Shark extension must be run unsandboxed');
  }

  const menuIconURI =
'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwLDAsMTAyLjE4NTE4LDEwMi4xODUxOCIgaGVpZ2h0PSIxMDIuMTg1MTgiIHdpZHRoPSIxMDIuMTg1MTgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI0OC45MDc0MSwtMTQ4LjkwNzQxKSI+PGcgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9Ij48cGF0aCBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2U9IiMwMDAwMDAiIGZpbGwtcnVsZT0ibm9uemVybyIgZmlsbD0iIzg0ODQ4NCIgZD0iTTI0OC45MDc0MSwyMDBjMCwtMjguMjE3NjYgMjIuODc0OTMsLTUxLjA5MjU5IDUxLjA5MjU5LC01MS4wOTI1OWMyOC4yMTc2NiwwIDUxLjA5MjU5LDIyLjg3NDkzIDUxLjA5MjU5LDUxLjA5MjU5YzAsMjguMjE3NjYgLTIyLjg3NDkzLDUxLjA5MjU5IC01MS4wOTI1OSw1MS4wOTI1OWMtMjguMjE3NjYsMCAtNTEuMDkyNTksLTIyLjg3NDkzIC01MS4wOTI1OSwtNTEuMDkyNTl6Ij48L3BhdGg+PHBhdGggc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGZpbGw9IiNmZmZmZmYiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9IiBkPSJNMzIyLjMxMzMsMjMyLjkyMTI4bC0wLjAwMDQzLC0wLjAwMjA4Yy0xLjE4NCwyLjM5NTg3IC00LjQxMDE4LDMuNzE3NjMgLTcuODA4MywzLjAyMTA3Yy0zLjg5MTU1LC0wLjc5ODA4IC02LjUzNDQyLC0zLjk0MDg3IC01LjkwMjczLC03LjAxOTk5YzAuNjMxNDgsLTMuMDc5NyA0LjI5Nzc3LC00LjkyODM3IDguMTg5MzMsLTQuMTMwMjljMS43NzIxMiwwLjM2MzIzIDMuMjgzMjYsMS4yMTMzIDQuMzQ2MTcsMi4zMjE0NWw2LjMxNTc1LC0xMy4zOTY5Yy05Ljk4MzkyLC0zLjkwNzUxIC0xOC42NzI4MywtNC44MTYxOCAtMTguNjcyODMsLTQuODE2MThsLTguNDkxNjIsMTguMDEyMzRjLTAuOTEzNDYsMi43NjU4NiAtNC4zODE0Nyw0LjM2NzM2IC04LjA1MDg1LDMuNjE1MjljLTMuODkxMTYsLTAuNzk3OSAtNi41MzM4NSwtMy45NDEwNyAtNS45MDI1NSwtNy4wMjAzOGMwLjYzMTMsLTMuMDc5MzEgNC4yOTc1OSwtNC45Mjc5OSA4LjE4OTMzLC00LjEzMDI5YzEuODA1MTcsMC4zNjk4OCAzLjM0MTYsMS4yNDUwMyA0LjQwNzQ5LDIuMzgzNzJsMTEuMzcyNTUsLTI0LjEwMzQyYzAsMCAxMi43ODgxNiwwLjIyMjY0IDI1LjQ2NDk3LDYuNzIyMzN6Ij48L3BhdGg+PHBhdGggc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2U9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgZmlsbD0ibm9uZSIgZD0iTTI3NC44MTgyNSwxNzguMTkxNTZsMy42ODc2LDIxLjYwMzkyIj48L3BhdGg+PHBhdGggc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2U9IiMwMDAwMDAiIGZpbGwtcnVsZT0ibm9uemVybyIgZmlsbD0iI2ZmZmZmZiIgZD0iTTI4MC4wMzkzOCwyMDAuNDM3NDVjMS4yNTk2NywyLjM3NzYgLTAuNzA0MDcsNS41MTAwNyAtNC4zODYxMyw2Ljk5NjU3Yy0zLjY4MjA2LDEuNDg2NSAtNy42ODgxMywwLjc2NDExIC04Ljk0NzgsLTEuNjEzNDljLTEuMjU5NjcsLTIuMzc3NiAwLjcwNDA3LC01LjUxMDA3IDQuMzg2MTMsLTYuOTk2NTdjMy42ODIwNiwtMS40ODY1IDcuNjg4MTMsLTAuNzY0MTEgOC45NDc4LDEuNjEzNDl6Ij48L3BhdGg+PHBhdGggc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlPSIjMDAwMDAwIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGZpbGw9IiNmZmZmZmYiIGQ9Ik0yNzIuNzg3MTQsMTc1Ljc0Njk1YzAsMCA4Ljg1MzU3LC0xLjU1NTA0IDExLjI3NzM3LDIuNTI2NzVjMi4xNjY1NywzLjY0ODg1IDAuMDY1MjcsNy45MzA3OCAwLjE5MzQ3LDkuMjM4MDdjMC4xMjgyLDEuMzA3MjkgMS45ODQwNSwxLjAxMTU5IDEuOTg0MDUsMS4wMTE1OWwtMC4wMTIxLDEuNTI3MTFjMCwwIC0yLjYxMjk1LDAuNjEwMjggLTMuMTEyNCwtMS4yMDMzMmMtMC40OTk0NSwtMS44MTM1OSAtMC41MTAzOSwtNS40NTMzNiAtMi41NzU2MiwtNy41MDUzMmMtMi4wNjU4MSwtMi4wNTE3NyAtNi44NzUwOSwtMC42OTIwNyAtNi44NzUwOSwtMC42OTIwNyI+PC9wYXRoPjxwYXRoIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2U9IiMwMDAwMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI2ZmZmZmZiIgZD0iTTMwOS4wNzk1NCwxODQuNjY2ODFjLTAuMzI1ODksMi4wNjkyNCAtMi4yOTkxMywzLjIzMzIzIC00LjA5MzM3LDMuOTEwMThjLTEuNjEyMDYsMC43MDk1MSAtMy40Njg4LDAuOTg0OTkgLTUuMTU1MTQsMC4zNjE0NWMtMS41OTQ2MiwtMC4zNzIyOSAtMy4xMTUzOCwtMS43NjU0OSAtMi45MjYyLC0zLjUxNTE2YzAuMTUwOSwtMi4wMzc0NiAxLjg1MzI3LC0zLjczNTEyIDMuNzU0NjEsLTQuMzA0MzZjMS44OTQ4NiwtMC43ODA5NiA0LjE1NTczLC0wLjcxMzc3IDUuOTY1MTcsMC4yNTI5MmMwLjg5MTg1LDAuNDEyNTQgMi4xMzkwOCwtMTMuODE3NjMgMi45NjU3NiwtMjAuMTExODRjMC4wOTgxOSwtMC42MjcxNCAyLjUyNDk2LC0wLjQ2MDE3IDIuNDU1NTMsMC4xNDc2YzAsMCAtMS44MTEyLDE1LjE2Nzc0IC0yLjk2NjM3LDIzLjI1OTIxeiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+PCEtLXJvdGF0aW9uQ2VudGVyOjUxLjA5MjU5OjUxLjA5MjU5LS0+';

  const blockIconURI =
'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI4Ni4zNDQ5MiIgaGVpZ2h0PSI3OC45NzQwMSIgdmlld0JveD0iMCwwLDg2LjM0NDkyLDc4Ljk3NDAxIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjU2LjgyNzU0LC0xNjAuNTEyOTkpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTI1Ni44Mjc1NCwyMzkuNDg3MDF2LTc4Ljk3NDAxaDg2LjM0NDkydjc4Ljk3NDAxeiIgZmlsbD0iIzg0ODQ4NCIgc3Ryb2tlLXdpZHRoPSIwIi8+PHBhdGggZD0iTTMyMS43MTUyLDIxNC4zNDg2NWwtMC4wMDE3NywtMC4wMDIzNmMtMC4wNjg0NCwzLjcwOTM1IC0zLjMzNzA2LDcuMjc4ODcgLTguMDE2MzgsOC40MTU4MWMtNS4zNTksMS4zMDE1NSAtMTAuNTM4MDUsLTEuMDgwMyAtMTEuNTY3NjEsLTUuMzIwNjVjLTEuMDMwMTUsLTQuMjQwOTUgMi40NzkxOSwtOC43MzI2NCA3LjgzODIsLTEwLjAzNDE5YzIuNDQwMjUsLTAuNTkyOTUgNC44NDA5OCwtMC40MjAwOCA2LjgzMTY1LDAuMzQyMnYtMjAuNTYxMDNjLTE0Ljg0OTgsMS4wMDM2IC0yNi4yOTgyMyw1LjAwNjE4IC0yNi4yOTgyMyw1LjAwNjE4djI3LjY0NDYyYzAuNDkwMjksNC4wMTM3OSAtMi45MTYzOSw4LjA3Nzc0IC03Ljk2OTE4LDkuMzA1NTRjLTUuMzU4NDEsMS4zMDE1NSAtMTAuNTM3NDYsLTEuMDgwODkgLTExLjU2NzYxLC01LjMyMTI0Yy0xLjAzMDE1LC00LjI0MDM2IDIuNDc5MTksLTguNzMyMDUgNy44MzgyLC0xMC4wMzQxOWMyLjQ4NTY4LC0wLjYwNDE2IDQuOTMzMDIsLTAuNDE0NzcgNi45NDU1MiwwLjM4NDA5bDAuMDExOCwtMzYuOTk4NTNjMCwwIDE2LjE4OTcsLTcuMjkwNjcgMzUuOTU1NDEsLTYuNjMzNDF6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvZz48L3N2Zz4=';

  class SPtuneShark {
    constructor() {
      this.sounds = {};
    }

    getInfo() {
      return {
        id: 'SPtuneShark',
        name: 'Tune Shark',
	color1: '#848484',
	menuIconURI,
	blockIconURI,
	blocks: [
	  {
            opcode: 'importSound',
            blockType: Scratch.BlockType.COMMAND,
            text: 'import sound from URL/URI [URL] named [NAME]',
            arguments: {
              URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://tinyurl.com/Resonance-Home',
              },
              NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'MySound',
              },
            },
          },
          {
            blockType: Scratch.BlockType.LABEL,
            text: 'Audio Playback',
          },
          {
            opcode: 'playSound',
            blockType: Scratch.BlockType.COMMAND,
            text: 'play sound [NAME]',
            arguments: {
              NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'MySound',
              },
            },
          },
          {
            opcode: 'playSoundAt',
            blockType: Scratch.BlockType.COMMAND,
            text: 'play sound [NAME] at time [START_TIME]',
            arguments: {
              NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'MySound',
              },
              START_TIME: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0,
              },
            },
          },
          {
            opcode: 'stopSound',
            blockType: Scratch.BlockType.COMMAND,
            text: 'stop sound [NAME]',
            arguments: {
              NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'MySound',
              },
            },
          },
          {
            opcode: 'playAllSounds',
            blockType: Scratch.BlockType.COMMAND,
            text: 'play all sounds',
          },
          {
            opcode: 'stopAllSounds',
            blockType: Scratch.BlockType.COMMAND,
            text: 'stop all sounds',
          },
          {
            opcode: 'pauseUnpauseSound',
            blockType: Scratch.BlockType.COMMAND,
            text: 'set sound [NAME] to [PAUSE_UNPAUSE]',
            arguments: {
              NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'MySound',
              },
              PAUSE_UNPAUSE: {
                type: Scratch.ArgumentType.STRING,
                menu: 'pauseUnpauseMenu',
                defaultValue: 'paused',
              },
            },
          },
          {
            blockType: Scratch.BlockType.LABEL,
            text: 'Audio Effects',
          },
          {
            opcode: 'setSoundVolume',
            blockType: Scratch.BlockType.COMMAND,
            text: 'set volume of sound [NAME] to [VOLUME]',
            arguments: {
              NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'MySound',
              },
              VOLUME: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 100,
              },
            },
          },
          {
            opcode: 'setSoundSpeed',
            blockType: Scratch.BlockType.COMMAND,
            text: 'set speed of sound [NAME] to [SPEED]',
            arguments: {
              NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'MySound',
              },
              SPEED: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 1.0,
              },
            },
          },
          {
            opcode: 'setSoundPitch',
            blockType: Scratch.BlockType.COMMAND,
            text: 'set pitch of sound [NAME] to [PITCH]',
            arguments: {
              NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'MySound',
              },
              PITCH: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 1.0,
              },
            },
          },
          {
            blockType: Scratch.BlockType.LABEL,
            text: 'Audio Operations',
          },
          {
            opcode: 'toggleLoopSound',
            blockType: Scratch.BlockType.COMMAND,
            text: 'set sound [NAME] to [LOOP_STATE]',
            arguments: {
              NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'MySound',
              },
              LOOP_STATE: {
                type: Scratch.ArgumentType.STRING,
                menu: 'loopMenu',
                defaultValue: 'loopable',
              },
            },
          },
          {
            opcode: 'soundProperty',
            blockType: Scratch.BlockType.REPORTER,
            text: 'sound [NAME] [PROPERTY]',
            arguments: {
              NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'MySound',
              },
              PROPERTY: {
                type: Scratch.ArgumentType.STRING,
                menu: 'soundProperties',
                defaultValue: 'length',
              },
            },
          },
          {
            opcode: 'currentSoundTime',
            blockType: Scratch.BlockType.REPORTER,
            text: 'current time of sound [NAME]',
            arguments: {
              NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'MySound',
              },
            },
          },
          {
            opcode: 'soundExists',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'sound [NAME] exists?',
            arguments: {
              NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'MySound',
              },
            },
          },
        ],
        menus: {
          pauseUnpauseMenu: ['paused', 'unpaused'],
          soundProperties: ['length', 'volume', 'speed', 'pitch', 'paused?', 'looping?'],
          loopMenu: ['loopable', 'unloopable'],
        },
      };
    }

    importSound(args) {
      const { URL, NAME } = args;
      const audio = new Audio(URL);
      this.sounds[NAME] = [audio];
    }

    playSound(args) {
      const { NAME } = args;
      const soundInstances = this.sounds[NAME];
      if (soundInstances && soundInstances.length > 0) {
        soundInstances.forEach((audio) => {
          audio.play();
        });
      }
    }

    playSoundAt(args) {
      const { NAME, START_TIME } = args;
      const soundInstances = this.sounds[NAME];
      if (soundInstances && soundInstances.length > 0) {
        soundInstances.forEach((audio) => {
          audio.currentTime = START_TIME;
          audio.play();
        });
      }
    }

    stopSound(args) {
      const { NAME } = args;
      const soundInstances = this.sounds[NAME];
      if (soundInstances && soundInstances.length > 0) {
        soundInstances.forEach((audio) => {
          audio.pause();
          audio.currentTime = 0;
        });
      }
    }

    playAllSounds() {
      Object.values(this.sounds).forEach((soundInstances) => {
        soundInstances.forEach((audio) => {
          audio.play();
        });
      });
    }

    stopAllSounds() {
      Object.values(this.sounds).forEach((soundInstances) => {
        soundInstances.forEach((audio) => {
          audio.pause();
          audio.currentTime = 0;
        });
      });
    }

    setSoundVolume(args) {
      let { NAME, VOLUME } = args;
      VOLUME = Math.max(0, Math.min(100, VOLUME));
      const soundInstances = this.sounds[NAME];
      if (soundInstances && soundInstances.length > 0) {
        soundInstances.forEach((audio) => {
          audio.volume = VOLUME / 100;
        });
      }
    }

    setSoundSpeed(args) {
      const { NAME, SPEED } = args;
      const soundInstances = this.sounds[NAME];
      if (soundInstances && soundInstances.length > 0) {
        soundInstances.forEach((audio) => {
          audio.playbackRate = SPEED;
        });
      }
    }

    setSoundPitch(args) {
      const { NAME, PITCH } = args;
      const soundInstances = this.sounds[NAME];
      if (soundInstances && soundInstances.length > 0) {
        soundInstances.forEach((audio) => {
          audio.mozPreservesPitch = false;
          audio.playbackRate = 1;
          const semitoneRatio = Math.pow(2, 1 / 12);
          const currentPitch = Math.pow(semitoneRatio, PITCH);
          audio.playbackRate = currentPitch;
        });
      }
    }

    toggleLoopSound(args) {
      const { NAME, LOOP_STATE } = args;
      const soundInstances = this.sounds[NAME];
      if (soundInstances && soundInstances.length > 0) {
        const loop = LOOP_STATE === 'loopable';
        soundInstances.forEach((audio) => {
          audio.loop = loop;
        });
      }
    }

    pauseUnpauseSound(args) {
      const { NAME, PAUSE_UNPAUSE } = args;
      const soundInstances = this.sounds[NAME];
      if (soundInstances && soundInstances.length > 0) {
        const pause = PAUSE_UNPAUSE === 'paused';
        soundInstances.forEach((audio) => {
          if (pause && !audio.paused) {
            audio.pause();
          } else if (!pause && audio.paused) {
            audio.play();
          }
        });
      }
    }
    
    soundExists(args) {
      const { NAME } = args;
      return this.sounds.hasOwnProperty(NAME);
    }

    soundProperty(args) {
      const { NAME, PROPERTY } = args;
      const soundInstances = this.sounds[NAME];
      if (soundInstances && soundInstances.length > 0) {
        const audio = soundInstances[0];
        switch (PROPERTY) {
          case 'length':
            return audio.duration;
          case 'volume':
            return audio.volume * 100;
          case 'speed':
            return audio.playbackRate;
          case 'pitch':
            return this.getPitchFromAudio(audio);
          case 'paused?':
            return audio.paused;
          case 'looping?':
            return audio.loop;
        }
      }
      return 0;
    }

    getPitchFromAudio(audio) {
      const semitoneRatio = Math.pow(2, 1 / 12);
      const currentPitch = Math.log(audio.playbackRate) / Math.log(semitoneRatio);
      return Math.round(currentPitch * 10) / 10;
    }

    currentSoundTime(args) {
      const { NAME } = args;
      const soundInstances = this.sounds[NAME];
      if (soundInstances && soundInstances.length > 0) {
        const audio = soundInstances[0];
        return audio.currentTime;
      }
      return 0;
    }
  }

  Scratch.extensions.register(new SPtuneShark());
})(Scratch);
