// Name: Text to Speech
// ID: SPtts
// Description: Text to Speech using TikTok API
// By: SharkPool

// Version 1.1.0

(function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) throw new Error("Text to Speech must run unsandboxed");

  const menuIconURI =
"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxMzcuMTY3OTgiIGhlaWdodD0iMTM3LjE2Nzk4IiB2aWV3Qm94PSIwLDAsMTM3LjE2Nzk4LDEzNy4xNjc5OCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE3MS40MTYsLTExMS40MTYpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0xNzEuNDE2MDEsMTgwYzAsLTM3Ljg3Nzg5IDMwLjcwNjEsLTY4LjU4Mzk5IDY4LjU4Mzk5LC02OC41ODM5OWMzNy44Nzc4OSwwIDY4LjU4Mzk5LDMwLjcwNjEgNjguNTgzOTksNjguNTgzOTljMCwzNy44Nzc4OSAtMzAuNzA2MSw2OC41ODM5OSAtNjguNTgzOTksNjguNTgzOTljLTM3Ljg3Nzg5LDAgLTY4LjU4Mzk5LC0zMC43MDYxIC02OC41ODM5OSwtNjguNTgzOTl6IiBmaWxsPSIjMDg2NzRjIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIvPjxwYXRoIGQ9Ik0xNzguMTMyMzMsMTgwYzAsLTM0LjE2ODU3IDI3LjY5OTEsLTYxLjg2NzY3IDYxLjg2NzY3LC02MS44Njc2N2MzNC4xNjg1NywwIDYxLjg2NzY3LDI3LjY5OTEgNjEuODY3NjcsNjEuODY3NjdjMCwzNC4xNjg1NyAtMjcuNjk5MSw2MS44Njc2NyAtNjEuODY3NjcsNjEuODY3NjdjLTM0LjE2ODU3LDAgLTYxLjg2NzY3LC0yNy42OTkxIC02MS44Njc2NywtNjEuODY3Njd6IiBmaWxsPSIjMGZiZDhjIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIvPjxnIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI1Ij48cGF0aCBkPSJNMjE2LjY2NDc3LDE5Mi43NDI5YzAuMzY0NjMsLTIuMTIxMDIgMS41NTgwNiwtMy44OTc0NyAzLjE5MTc3LC01LjA1MTM0YzEuNjMzMTksLTEuMTU0MDUgMy43MDY3OCwtMS42ODkgNS44MzE5NywtMS4zMjM3MWMyLjEyNTAxLDAuMzY1ODEgMy45MDA5OSwxLjU2Mjg5IDUuMDU0NjgsMy4xOTYyNWMxLjE1MzcsMS42MzMzNiAxLjY4NSwzLjcwNjQ4IDEuMzIwNTMsNS44Mjc4NWMtMC4zNjU4MSwyLjEyNTAxIC0xLjU1OTIzLDMuOTAxNDUgLTMuMTkyNTksNS4wNTUxNWMtMS42MzMxOSwxLjE1NDA1IC0zLjcwNjMxLDEuNjg1MzUgLTUuODMxNjcsMS4zMTk3MWMtMi4xMjQ4NCwtMC4zNjU0NiAtMy45MDEyOSwtMS41NTg4OCAtNS4wNTQ5OSwtMy4xOTIyNGMtMS4xNTQwNSwtMS42MzMxOSAtMS42ODUzNSwtMy43MDYzMSAtMS4zMTk3MSwtNS44MzE2N3oiLz48cGF0aCBkPSJNMjE2LjYzMDYsMTk0LjgwMTE2bC0zLjY3NTMzLC00My44NzY5MyIvPjxwYXRoIGQ9Ik0yMDEuNjg3MjEsMTcyLjU2Mzc3Yy0yLjIxNjg1LC02LjM0NDQgLTEuMDM4MTQsLTEzLjQ0NTQzIDMuMjI5NDMsLTE4Ljc1NTM3YzEuNzM5MDksLTIuMTk0NDYgMy43MDE3MSwtNC4xOTk4NSA1Ljg1MjU0LC01Ljk4NzI2YzAuNTc0NjEsLTAuNDc3NTIgMS45MDIsMC4xNDc4MyAxLjk5MTQyLDEuMTM3NDJjMC4xMjc4MywxLjQxNDY1IDAuNDY1ODQsNS4xNTU0MSAwLjQ2NTg0LDUuMTU1NDFjLTMuMDM5MTEsMS43NTg5OSAtNS43MDE5Myw0LjA5MzA0IC03Ljg0NDUyLDYuODc1NzZjLTIuMDE3MTIsMy42NTI1NCAtMy4wNDkxOCw3Ljc1ODg3IC0zLjAxMTg4LDExLjkxNDg1YzAuMDA0NDMsMC40OTM2NCAtMC40Njc3MiwwLjI3NDgyIC0wLjY4MjgzLC0wLjM0MDgxeiIvPjwvZz48ZyBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNy41Ij48cGF0aCBkPSJNMjUwLjI5MTgyLDIwMy4xMzE0N2MxLjQ2MTk1LC0yLjQxMzA2IDMuNzY5OTEsLTQuMDA4MjkgNi4zMTY1MSwtNC42MzI3NmMyLjU0NjA3LC0wLjYyNDk1IDUuMzMyNjIsLTAuMjgzMzUgNy43NTA0NSwxLjE4MTRjMi40MTczNiwxLjQ2NTI5IDQuMDEwMjYsMy43Nzc0NyA0LjYzNDcsNi4zMjM1OGMwLjYyNDQ0LDIuNTQ2MSAwLjI3ODYxLDUuMzMwMzMgLTEuMTgzMzEsNy43NDM5Yy0xLjQ2NTI5LDIuNDE3MzYgLTMuNzczMjQsNC4wMTI1OCAtNi4zMTkzNCw0LjYzNzAyYy0yLjU0NjA3LDAuNjI0OTUgLTUuMzMwMywwLjI3OTEzIC03Ljc0ODE2LC0xLjE4NjE0Yy0yLjQxNzMyLC0xLjQ2NDc4IC00LjAxMjU2LC0zLjc3MjczIC00LjYzNywtNi4zMTg4NGMtMC42MjQ5NSwtMi41NDYwNyAtMC4yNzkxMywtNS4zMzAzIDEuMTg2MTQsLTcuNzQ4MTZ6Ii8+PHBhdGggZD0iTTI0OS4yNjMxNywyMDUuNjI2NDFsMTYuNTU1MDYsLTU1LjI5NzU2Ii8+PHBhdGggZD0iTTI0MS42OTM0NywxNzEuMzI4NTljMC4zMzczOCwtOC44MDM5NCA1LjE4MDU2LC0xNi45MDI4NyAxMi45MzM2OCwtMjEuMzM1MjljMy4xNzQxNywtMS44NDM2IDYuNTMwNCwtMy4zNDkzMiAxMC4wMTE3NywtNC40OTg4M2MwLjkzMDA3LC0wLjMwNzEgMi4yNDk3OSwxLjA5MjQgMS44ODQzNywyLjM0MjdjLTAuNTIyMzcsMS43ODczNCAtMS45MDM2OSw2LjUxMzYgLTEuOTAzNjksNi41MTM2Yy00LjU1MTU0LDAuNjg4OSAtOC45MTk3LDIuMjU5ODggLTEyLjg2ODI2LDQuNjI3NzNjLTQuMjEyNTYsMy40ODkzMiAtNy40NDA4Myw4LjAwNDY2IC05LjM4ODE1LDEzLjA5MzM1Yy0wLjIzMTMsMC42MDQ0MyAtMC43MDI0NCwwLjExMTAzIC0wLjY2OTcxLC0wLjc0MzI1eiIvPjwvZz48L2c+PC9nPjwvc3ZnPg==";

  const blockIconURI =
"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI5NS43Nzk5MSIgaGVpZ2h0PSI5NS43Nzk5MSIgdmlld0JveD0iMCwwLDk1Ljc3OTkxLDk1Ljc3OTkxIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTkyLjExMDA0LC0xMzIuMTEwMDQpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMTkyLjExMDA0LDIyNy44ODk5NXYtOTUuNzc5OTFoOTUuNzc5OTF2OTUuNzc5OTF6IiBmaWxsPSIjMGZiZDhjIi8+PHBhdGggZD0iTTIyMC40NzEyOSwxNzkuNDU0MDdjMCwtMTUuNzEyMTkgMTIuNzM3MjQsLTI4LjQ0OTQzIDI4LjQ0OTQzLC0yOC40NDk0M2MxNS43MTIxOSwwIDI4LjQ0OTQzLDEyLjczNzI0IDI4LjQ0OTQzLDI4LjQ0OTQzYzAsMTUuNzEyMTkgLTEyLjczNzI0LDI4LjQ0OTQzIC0yOC40NDk0MywyOC40NDk0M2MtMTUuNzEyMTksMCAtMjguNDQ5NDMsLTEyLjczNzI0IC0yOC40NDk0MywtMjguNDQ5NDN6IiBmaWxsPSIjZmZmZmZmIi8+PHBhdGggZD0iTTIyNi4yMzAxOSwxNzkuNDU0MDdjMCwtMTIuNTMxNjMgMTAuMTU4OSwtMjIuNjkwNTMgMjIuNjkwNTMsLTIyLjY5MDUzYzEyLjUzMTYzLDAgMjIuNjkwNTMsMTAuMTU4OSAyMi42OTA1MywyMi42OTA1M2MwLDEyLjUzMTYzIC0xMC4xNTg5LDIyLjY5MDUzIC0yMi42OTA1MywyMi42OTA1M2MtMTIuNTMxNjMsMCAtMjIuNjkwNTMsLTEwLjE1ODkgLTIyLjY5MDUzLC0yMi42OTA1M3oiIGZpbGw9IiMwZmJkOGMiLz48cGF0aCBkPSJNMjMwLjEyMzc3LDE3OS40NTQwN2MwLC0xMC4zODEyNyA4LjQxNTY4LC0xOC43OTY5NSAxOC43OTY5NSwtMTguNzk2OTVjMTAuMzgxMjcsMCAxOC43OTY5NSw4LjQxNTY4IDE4Ljc5Njk1LDE4Ljc5Njk1YzAsMTAuMzgxMjcgLTguNDE1NjgsMTguNzk2OTUgLTE4Ljc5Njk1LDE4Ljc5Njk1Yy0xMC4zODEyNywwIC0xOC43OTY5NSwtOC40MTU2OCAtMTguNzk2OTUsLTE4Ljc5Njk1eiIgZmlsbD0iI2ZmZmZmZiIvPjxwYXRoIGQ9Ik0yMzYuNzMzMzksMTc5LjQ1NDA3YzAsLTYuNzMwODggNS40NTY0NiwtMTIuMTg3MzQgMTIuMTg3MzQsLTEyLjE4NzM0YzYuNzMwODgsMCAxMi4xODczMyw1LjQ1NjQ2IDEyLjE4NzMzLDEyLjE4NzM0YzAsNi43MzA4OCAtNS40NTY0NSwxMi4xODczMyAtMTIuMTg3MzMsMTIuMTg3MzNjLTYuNzMwODgsMCAtMTIuMTg3MzQsLTUuNDU2NDUgLTEyLjE4NzM0LC0xMi4xODczM3oiIGZpbGw9IiMwZmJkOGMiLz48cGF0aCBkPSJNMjQxLjE5ODczLDE3OS40NTQwN2MwLC00LjI2NDc0IDMuNDU3MjUsLTcuNzIxOTkgNy43MjE5OSwtNy43MjE5OWM0LjI2NDc0LDAgNy43MjE5OSwzLjQ1NzI1IDcuNzIxOTksNy43MjE5OWMwLDQuMjY0NzQgLTMuNDU3MjUsNy43MjE5OSAtNy43MjE5OSw3LjcyMTk5Yy00LjI2NDc0LDAgLTcuNzIxOTksLTMuNDU3MjUgLTcuNzIxOTksLTcuNzIxOTl6IiBmaWxsPSIjZmZmZmZmIi8+PHBhdGggZD0iTTE5Mi4xOTcxMiwyMTkuOTYzODJ2LTc5LjkyNzY0aDUzLjI4ODQ2djc5LjkyNzY0eiIgZmlsbD0iIzBmYmQ4YyIvPjxwYXRoIGQ9Ik0yMDMuMTUwMjIsMTg3Ljk4NDAzYzAsLTUuNjY3NTkgLTAuMDA4NDMsLTkuNjAwOTEgMCwtMTUuNzQ1OTdjMC4wMDg0NywtNi4xNzYwNyA0LjkwNzc3LC0xMS41OTE2OCA4LjMzNjIsLTExLjU5MTY4YzUuNTIwODYsMCAyMS42MTY3OSwwIDIxLjYxNjc5LDB2MzcuNjE1MzhjMCwwIC0xNi40NTY0MywwIC0yMS45NjUwOSwwYy0zLjMyMTk3LDAgLTcuOTg3OSwtNC42OTY3MiAtNy45ODc5LC0xMC4yNzc3M3oiIGZpbGw9IiNmZmZmZmYiLz48cGF0aCBkPSJNMjQ4Ljc3NDgyLDE0MS42NjUyNWMwLDkuODIwNzYgMCw2MS4xNDIxNSAwLDc2Ljk3MjIyYzAsMi45Mzg2MiAtMi4yMTY4MSwyLjQzNzM4IC00LjQyNzUsMC4yMjY2OWMtNi41OTU1NywtNi41OTU1NyAtMzkuNDEwMSwtMzkuNDEwMSAtMzkuNDEwMSwtMzkuNDEwMWMwLDAgMzAuODg4MDIsLTMwLjg4ODAyIDM4LjAxNjIyLC0zOC4wMTYyMmMyLjc4OTM4LC0yLjc4OTM4IDUuODIxMzcsLTIuOTQyMjcgNS44MjEzNywwLjIyNzQxeiIgZmlsbD0iI2ZmZmZmZiIvPjwvZz48L2c+PC9zdmc+";

  const vm = Scratch.vm;
  let voice = "en_us_010";
  let data;

  //this script was ripped from the Files Extension. Thanks GarboMuffin :D
  const downloadURL = (url, file) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = file;
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  class SPtts {
    getInfo() {
      return {
        id: "SPtts",
        name: "Text to Speech",
        menuIconURI,
        blockIconURI,
        blocks: [
          {
            opcode: "setVoice",
            blockType: Scratch.BlockType.COMMAND,
            text: "set voice of speaker to [VOICE]",
            arguments: {
              VOICE: { type: Scratch.ArgumentType.STRING, menu: "VOICES" }
            }
          },
          {
            opcode: "fetchVoice",
            blockType: Scratch.BlockType.COMMAND,
            text: "generate speech from text [TEXT]",
            arguments: {
              TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: "SharkPool the goat" }
            }
          },
          {
            opcode: "ttsAudio",
            blockType: Scratch.BlockType.REPORTER,
            text: "speech as [TYPE]",
            arguments: {
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "FILETYPES" }
            }
          },
          {
            opcode: "cVoice",
            blockType: Scratch.BlockType.REPORTER,
            text: "current voice",
          },
          "---",
          {
            opcode: "playSpeechAudio",
            blockType: Scratch.BlockType.COMMAND,
            text: "play speech at pitch [PITCH]",
            arguments: {
              PITCH: { type: Scratch.ArgumentType.NUMBER, defaultValue: 100 }
            }
          },
          {
            opcode: "saveTTS",
            blockType: Scratch.BlockType.COMMAND,
            text: "save speech to [SPRITE] named [NAME]",
            arguments: {
              SPRITE: { type: Scratch.ArgumentType.STRING, menu: "TARGETS" },
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "Speech 1" }
            },
          },
          {
            opcode: "saveTTS2",
            blockType: Scratch.BlockType.COMMAND,
            text: "download speech named [NAME] as [TYPE]",
            arguments: {
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "Speech_1" },
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "FILETYPES" }
            },
          },
        ],
        menus: {
          VOICES: {
            acceptReporters: true,
            items: this.voiceList()
          },
          FILETYPES: {
            acceptReporters: true,
            items: ["mp3", "wav", "mpeg", "ogg"]
          },
          TARGETS: {
            acceptReporters: true,
            items: "_getTargets"
          },
        },
      };
    }

    async fetchVoice(args) {
      if (voice === undefined) voice = "en_us_006";
      const url = "https://tiktok-tts.weilnet.workers.dev/api/generation";
      const requestBody = { text: args.TEXT, voice: voice };
      try {
        const response = await Scratch.fetch(url, {
          method: "POST", headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestBody)
        });
        if (response.ok) {
          data = (await response.json()).data;
        } else {
          console.error("Request failed with status:", response.status);
        }
      } catch (error) { console.error("Error:", error) }
    }

    setVoice(args) { voice = Scratch.Cast.toString(args.VOICE) }

    cVoice() {
      if (voice === undefined) voice = "en_us_006";
      const menu = this.voiceList();
      for (const item of menu) {
        if (item.value === voice) return item.text;
      }
    }

    ttsAudio(args) { return data ? `data:audio/${args.TYPE};base64,${data}` : "" }

    async saveTTS(args) {
      if (data) {
        let target = args.SPRITE;
        if (target === "Stage") {
          target = vm.runtime.getTargetForStage().id
        } else {
          target = this.findID(target);
        }
        Scratch.fetch(`data:audio/mp3;base64,${data}`)
          .then((r) => r.arrayBuffer())
          .then((arrayBuffer) => {
            const storage = vm.runtime.storage;
            const asset = new storage.Asset(
              storage.AssetType.Sound, null,
              storage.DataFormat.MP3,
              new Uint8Array(arrayBuffer), true
            );
            vm.addSound(
              {
                md5: asset.assetId + "." + asset.dataFormat,
                asset: asset, name: args.NAME + ""
              },
              target,
            );
          });
      }
    }

    async saveTTS2(args) {
      if (data) {
        const audioData = `data:audio/${args.TYPE};base64,${data}`;
        const fileName = `${Scratch.Cast.toString(args.NAME)}.${args.TYPE}`;
        downloadURL(audioData, fileName);
      }
    }

    playSpeechAudio(args) {
      if (data) {
        const audio = new Audio(`data:audio/mp3;base64,${data}`);
        audio.playbackRate = args.PITCH === 0 ? 1 : Math.abs(args.PITCH / 100);
        audio.play();
      }
    }

    _getTargets() {
      const spriteNames = [];
      const targets = Scratch.vm.runtime.targets;
      for (let index = 0; index < targets.length; index++) {
        const target = targets[index];
        if (target.isOriginal) spriteNames.push(target.getName());
      }
      return spriteNames.length > 0 ? spriteNames : [""];
    }

    findID(sprite) {
      const targets = Scratch.vm.runtime.targets;
      if (targets.length > 0) {
        for (let index = 1; index < targets.length; index++) {
          const target = targets[index];
          if (target.isOriginal) {
            if (target.getName() === sprite) return target.id;
          }
        }
      } else { return "" }
    }

    voiceList() {
      return [
        { text: "English US - Male 1", value: "en_us_006" },
        { text: "English US - Male 2", value: "en_us_007" },
        { text: "English US - Male 3", value: "en_us_009" },
        { text: "English US - Male 4", value: "en_us_010" },
        { text: "English US - Female 1", value: "en_us_001" },
        { text: "English US - Female 2", value: "en_us_002" },
        { text: "English AU - Male", value: "en_au_002" },
        { text: "English AU - Female", value: "en_au_001" },
        { text: "English UK - Male 1", value: "en_uk_001" },
        { text: "English UK - Male 2", value: "en_uk_003" },
        { text: "French - Male 1", value: "fr_001" },
        { text: "French - Male 2", value: "fr_002" },
        { text: "German - Female", value: "de_001" },
        { text: "German - Male", value: "de_002" },
        { text: "Spanish - Male", value: "es_002" },
        { text: "Spanish MX - Male", value: "es_mx_002" },
        { text: "Portuguese BR - Female 1", value: "br_001" },
        { text: "Portuguese BR - Female 2", value: "br_003" },
        { text: "Portuguese BR - Female 3", value: "br_004" },
        { text: "Portuguese BR - Male", value: "br_005" },
        { text: "Indonesian - Female", value: "id_001" },
        { text: "Japanese - Female 1", value: "jp_001" },
        { text: "Japanese - Female 2", value: "jp_003" },
        { text: "Japanese - Female 3", value: "jp_005" },
        { text: "Japanese - Male", value: "jp_006" },
        { text: "Korean - Male 1", value: "kr_002" },
        { text: "Korean - Female", value: "kr_003" },
        { text: "Korean - Male 2", value: "kr_004" },
        { text: "Alto", value: "en_female_f08_salut_damour" },
        { text: "Tenor", value: "en_male_m03_lobby" },
        { text: "Narrator", value: "en_male_narration" },
        { text: "Wacky", value: "en_male_funny" },
        { text: "Peaceful", value: "en_female_emotional" },
        { text: "Serious", value: "en_male_cody" },
        { text: "Ghost Face", value: "en_us_ghostface" },
        { text: "Chewbacca", value: "en_us_chewbacca" },
        { text: "C3PO", value: "en_us_c3po" },
        { text: "Stitch", value: "en_us_stitch" },
        { text: "Stormtrooper", value: "en_us_stormtrooper" },
        { text: "Rocket", value: "en_us_rocket" },
        { text: "Madame Leota", value: "en_female_madam_leota" },
        { text: "Ghost Host", value: "en_male_ghosthost" },
        { text: "Pirate", value: "en_male_pirate" },
        { text: "Sunshine Soon", value: "en_male_m03_sunshine_soon" },
        { text: "Warmy Breeze", value: "en_female_f08_warmy_breeze" },
        { text: "Glorious", value: "en_female_ht_f08_glorious" },
        { text: "It Goes Up", value: "en_male_sing_funny_it_goes_up" },
        { text: "Chipmunk", value: "en_male_m2_xhxs_m03_silly" }
      ];
    }
  }

  Scratch.extensions.register(new SPtts());
})(Scratch);
