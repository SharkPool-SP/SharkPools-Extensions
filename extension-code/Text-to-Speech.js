// Name: Text to Speech
// ID: SPtts
// Description: Text to Speech using TikTok API
// By: SharkPool
// License: MIT

// Version 1.1.02

(function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) throw new Error("Text to Speech must run unsandboxed");

  const menuIconURI =
"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMzcuMTY4IiBoZWlnaHQ9IjEzNy4xNjgiIHZpZXdCb3g9IjAgMCAxMzcuMTY4IDEzNy4xNjgiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik0wIDY4LjU4NEMwIDMwLjcwNiAzMC43MDYgMCA2OC41ODQgMHM2OC41ODQgMzAuNzA2IDY4LjU4NCA2OC41ODQtMzAuNzA2IDY4LjU4NC02OC41ODQgNjguNTg0UzAgMTA2LjQ2MiAwIDY4LjU4NCIgZmlsbD0iIzA4Njc0YyIvPjxwYXRoIGQ9Ik02LjcxNiA2OC41ODRjMC0zNC4xNjkgMjcuNy02MS44NjggNjEuODY4LTYxLjg2OHM2MS44NjggMjcuNyA2MS44NjggNjEuODY4LTI3LjcgNjEuODY4LTYxLjg2OCA2MS44NjgtNjEuODY4LTI3LjctNjEuODY4LTYxLjg2OCIgZmlsbD0iIzBmYmQ4YyIvPjxwYXRoIGQ9Ik00NS4yNDkgODEuMzI3YTcuNzggNy43OCAwIDAgMSAzLjE5Mi01LjA1MSA3LjggNy44IDAgMCAxIDUuODMyLTEuMzI0IDcuOCA3LjggMCAwIDEgNS4wNTQgMy4xOTYgNy44IDcuOCAwIDAgMSAxLjMyIDUuODI4IDcuOCA3LjggMCAwIDEtMy4xOTIgNS4wNTUgNy44IDcuOCAwIDAgMS01LjgzMiAxLjMyIDcuOCA3LjggMCAwIDEtNS4wNTUtMy4xOTIgNy44IDcuOCAwIDAgMS0xLjMyLTUuODMyem0tLjAzNSAyLjA1OC0zLjY3NS00My44NzdtLTExLjI2OCAyMS42NGExOS42MiAxOS42MiAwIDAgMSAzLjIzLTE4Ljc1NiA0MC41IDQwLjUgMCAwIDEgNS44NTItNS45ODdjLjU3NS0uNDc3IDEuOTAyLjE0OCAxLjk5MiAxLjEzOGwuNDY1IDUuMTU1YTI2LjkgMjYuOSAwIDAgMC03Ljg0NCA2Ljg3NiAyNC4yIDI0LjIgMCAwIDAtMy4wMTIgMTEuOTE1Yy4wMDQuNDkzLS40NjguMjc0LS42ODMtLjM0MXoiIGZpbGw9IiNmZmYiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSI1Ii8+PHBhdGggZD0iTTc4Ljg3NiA5MS43MTVhMTAuMiAxMC4yIDAgMCAxIDYuMzE2LTQuNjMyIDEwLjIgMTAuMiAwIDAgMSA3Ljc1IDEuMTgxIDEwLjIyIDEwLjIyIDAgMCAxIDQuNjM1IDYuMzI0IDEwLjIgMTAuMiAwIDAgMS0xLjE4MyA3Ljc0NCAxMC4yIDEwLjIgMCAwIDEtNi4zMiA0LjYzN2MtMi41NDUuNjI1LTUuMzMuMjc5LTcuNzQ3LTEuMTg3YTEwLjIgMTAuMiAwIDAgMS00LjYzNy02LjMxOCAxMC4yIDEwLjIgMCAwIDEgMS4xODYtNy43NDl6bS0xLjAyOSAyLjQ5NSAxNi41NTUtNTUuMjk3bS0yNC4xMjUgMjFhMjUuNzIgMjUuNzIgMCAwIDEgMTIuOTM0LTIxLjMzNiA1MyA1MyAwIDAgMSAxMC4wMTItNC40OTljLjkzLS4zMDcgMi4yNSAxLjA5MyAxLjg4NCAyLjM0M2wtMS45MDMgNi41MTRhMzUuMyAzNS4zIDAgMCAwLTEyLjg2OSA0LjYyNyAzMS43IDMxLjcgMCAwIDAtOS4zODggMTMuMDk0Yy0uMjMxLjYwNC0uNzAyLjExLS42Ny0uNzQzeiIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjcuNSIvPjwvc3ZnPg==";
  const blockIconURI =
"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5NS43OCIgaGVpZ2h0PSI5NS43OCIgdmlld0JveD0iMCAwIDk1Ljc4IDk1Ljc4Ij48cGF0aCBkPSJNMjguMzYxIDQ3LjM0NGMwLTE1LjcxMiAxMi43MzgtMjguNDUgMjguNDUtMjguNDVzMjguNDUgMTIuNzM4IDI4LjQ1IDI4LjQ1LTEyLjczOCAyOC40NS0yOC40NSAyOC40NS0yOC40NS0xMi43MzgtMjguNDUtMjguNDUiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNMzQuMTIgNDcuMzQ0YzAtMTIuNTMyIDEwLjE2LTIyLjY5IDIyLjY5LTIyLjY5IDEyLjUzMiAwIDIyLjY5MSAxMC4xNTggMjIuNjkxIDIyLjY5cy0xMC4xNTkgMjIuNjktMjIuNjkgMjIuNjktMjIuNjktMTAuMTU4LTIyLjY5LTIyLjY5IiBmaWxsPSIjMGZiZDhjIi8+PHBhdGggZD0iTTM4LjAxNCA0Ny4zNDRjMC0xMC4zODEgOC40MTUtMTguNzk3IDE4Ljc5Ny0xOC43OTcgMTAuMzgxIDAgMTguNzk3IDguNDE2IDE4Ljc5NyAxOC43OTdzLTguNDE2IDE4Ljc5Ny0xOC43OTcgMTguNzk3LTE4Ljc5Ny04LjQxNi0xOC43OTctMTguNzk3IiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTQ0LjYyMyA0Ny4zNDRjMC02LjczIDUuNDU3LTEyLjE4NyAxMi4xODgtMTIuMTg3IDYuNzMgMCAxMi4xODcgNS40NTYgMTIuMTg3IDEyLjE4N3MtNS40NTYgMTIuMTg3LTEyLjE4NyAxMi4xODctMTIuMTg4LTUuNDU2LTEyLjE4OC0xMi4xODciIGZpbGw9IiMwZmJkOGMiLz48cGF0aCBkPSJNNDkuMDg5IDQ3LjM0NGE3LjcyMiA3LjcyMiAwIDEgMSAxNS40NDQgMCA3LjcyMiA3LjcyMiAwIDAgMS0xNS40NDQgMG0tMzguMDQ5IDguNTNjMC01LjY2OC0uMDA4LTkuNiAwLTE1Ljc0Ni4wMDktNi4xNzYgNC45MDgtMTEuNTkyIDguMzM2LTExLjU5MmgyMS42MTd2MzcuNjE2SDE5LjAyOGMtMy4zMjIgMC03Ljk4OC00LjY5Ny03Ljk4OC0xMC4yNzgiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNNTYuNjY1IDkuNTU1djc2Ljk3MmMwIDIuOTQtMi4yMTcgMi40MzgtNC40MjguMjI3bC0zOS40MS0zOS40MUw1MC44NDMgOS4zMjhjMi43OS0yLjc5IDUuODIyLTIuOTQyIDUuODIyLjIyNyIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==";

  const ttsAPI = "https://ottsy.weilbyte.dev/api/generation";
  const proxy = ""; // TODO we need a proxy that allows sending headers without sign up

  const vm = Scratch.vm;
  let voice = "en_us_010";
  let speechData;

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
              TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: "SharkPool the developer" }
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
          VOICES: { acceptReporters: true, items: "_voiceList" },
          TARGETS: { acceptReporters: true, items: "_getTargets" },
          FILETYPES: {
            acceptReporters: true,
            items: ["mp3", "wav", "mpeg", "ogg"]
          }
        },
      };
    }

    // Helper Funcs
    _voiceList() {
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

    _getTargets() {
      const spriteNames = [];
      const targets = vm.runtime.targets;
      for (let i = 0; i < targets.length; i++) {
        const target = targets[i];
        if (target.isOriginal) spriteNames.push(target.getName());
      }
      return spriteNames.length > 0 ? spriteNames : [""];
    }

    // Block Funcs
    async fetchVoice(args) {
      if (voice === undefined) voice = "en_us_006";

      const requestBody = {
        "text": Scratch.Cast.toString(args.TEXT),
        "voice": voice
      };

      try {
        const response = await Scratch.fetch(proxy + ttsAPI, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(requestBody)
        });

        if (response.ok) {
          data = (await response.json()).data;
        } else {
          console.warn("Request failed with status: ", response.status);
        }
      } catch (error) {
        console.warn("Speech generation error: ", error)
      }
    }

    setVoice(args) {
      voice = Scratch.Cast.toString(args.VOICE);
    }

    cVoice() {
      if (voice === undefined) voice = "en_us_006";

      const menu = this.voiceList();
      for (const item of menu) {
        if (item.value === voice) return item.text;
      }
    }

    ttsAudio(args) {
      return speechData ? `data:audio/${args.TYPE};base64,${speechData}` : "";
    }

    async saveTTS(args) {
      if (speechData) {
        let target;
        if (args.SPRITE === "Stage") {
          target = vm.runtime.getTargetForStage();
        } else {
          target = vm.runtime.getSpriteTargetByName(args.SPRITE);
        }
        if (!target) return;

        Scratch.fetch(`speechData:audio/mp3;base64,${speechData}`)
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
                asset: asset, name: Scratch.Cast.toString(args.NAME)
              },
              target.id,
            );
          });
      }
    }

    async saveTTS2(args) {
      if (speechData) {
        const audioData = `data:audio/${args.TYPE};base64,${speechData}`;
        const fileName = `${Scratch.Cast.toString(args.NAME)}.${args.TYPE}`;
        Scratch.download(audioData, fileName);
      }
    }

    playSpeechAudio(args) {
      if (speechData) {
        const audio = new Audio(`data:audio/mp3;base64,${speechData}`);
        audio.playbackRate = args.PITCH === 0 ? 1 : Math.abs(Scratch.Cast.toNumber(args.PITCH) / 100);
        audio.play();
      }
    }
  }

  Scratch.extensions.register(new SPtts());
})(Scratch);
