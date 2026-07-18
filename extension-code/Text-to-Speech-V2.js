// Name: Text to Speech V2
// ID: SPttsV2
// Description: Generate speech from text.
// By: SharkPool
// Commissioned by: @JoshKnowsMath
// Licence: MIT

// Version V.1.0.0

(function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) throw new Error("Text to Speech V2 must run unsandboxed!");

  const blockIconURI =
"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1vcGFjaXR5PSIuMTUiPjxwYXRoIGZpbGw9IiM0ZDRkNGQiIGQ9Ik0xNS41IDIxLjY3YzAtMS4wMTYtMS40OTQtMS41ODYtMi4zODctLjc4MmwtMi43IDIuMTYzQTUuOTYgNS45NiAwIDAgMSA2LjcgMjQuMzNoLS40Yy0xLjAzNSAwLTEuOC42OS0xLjggMS41NzN2NC4yMzVjMCAuODgzLjc2NSAxLjU3MiAxLjggMS41NzJoLjRjMS40NTggMCAyLjc1NC40MjMgMy44MiAxLjI4N2wyLjU5OCAyLjE2MWMuOTA4Ljc1IDIuMzgyLjE4OCAyLjM4Mi0uODc2eiIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yNS42NDQgMjAuNWMtMS42NjcgMS45MzctNC41MzkgMy40MjktNS45NzcgMy40MjlhMS4yNSAxLjI1IDAgMCAxLS41NTctLjEzN2MtLjM3Mi0uMTg2LS42MS0uNTQyLS42MS0xLjAzcTAtLjE1Ny4wNS0uMzA4Yy4wNzYtLjIzNi42MjQtLjk4Ni43MjctMS4xNzMuMjctLjQ4NC40NjItMS4wNzUuNTY2LTEuODY1QTguNSA4LjUgMCAwIDEgMjQgMy41aDRhOC41IDguNSAwIDEgMSAwIDE3eiIvPjwvZz48L3N2Zz4=";

  const vm = Scratch.vm;
  const runtime = vm.runtime;

  const IMPORT_MSG = ["voices not imported!"];

  const proxy = "https://reef-proxy.onrender.com/"; // This is my proxy, managed by me.
  const voiceServicesURL = "https://lazypy.ro/tts/assets/js/voices.json";
  const ttsAPI = "https://lazypy.ro/tts/request_tts.php";

  const speechCache = new Map();

  class SPttsV2 {
    constructor() {
      this._voices = null;
      this._services = IMPORT_MSG;
    }
    getInfo() {
      return {
        id: "SPttsV2",
        name: "Text to Speech V2",
        blockIconURI,
        blocks: [
          {
            opcode: "importVoices",
            blockType: Scratch.BlockType.COMMAND,
            text: "import voice services",
          },
          {
            opcode: "getServiceLimit",
            blockType: Scratch.BlockType.REPORTER,
            disableMonitor: true,
            text: "character limit of [SERVICE]",
            arguments: {
              SERVICE: {
                type: Scratch.ArgumentType.STRING,
                menu: "SERVICES",
                defaultValue: this._services[0]
              }
            },
          },
          {
            opcode: "generateSpeech",
            blockType: Scratch.BlockType.REPORTER,
            text: "speak [TEXT] with [SERVICE] voice [VOICE]",
            arguments: {
              TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: "hello" },
              SERVICE: {
                type: Scratch.ArgumentType.STRING,
                menu: "SERVICES",
                defaultValue: this._services[0]
              },
              VOICE: { type: Scratch.ArgumentType.STRING, menu: "VOICES" }
            },
          }
        ],
        menus: {
          SERVICES: {
            acceptReporters: false,
            items: "_getServices"
          },
          VOICES: {
            acceptReporters: true,
            items: "_getVoices"
          },
        },
      };
    }

    // Helper Funcs
    _getServices() {
      if (this._voices && ScratchBlocks && ScratchBlocks.selected) {
        this._updateVoiceDropdown();
      }

      return this._services;
    }

    _getVoices() {
      if (
        !this._voices || !ScratchBlocks || !ScratchBlocks.selected
      ) return IMPORT_MSG;

      const block = ScratchBlocks.selected;
      if (block.type !== "SPttsV2_generateSpeech") return IMPORT_MSG;

      const serviceDetails = this._findService(block.getFieldValue("SERVICE"));
      const voiceList = this._createVoiceList(serviceDetails.voices);
      return voiceList;
    }

    _updateVoiceDropdown() {
      const block = ScratchBlocks.selected;
      if (block.type !== "SPttsV2_generateSpeech") return;

      const voiceInput = block.getInput("VOICE").connection.targetBlock();
      if (voiceInput.type === "SPttsV2_menu_VOICES") {
        const serviceDetails = this._findService(block.getFieldValue("SERVICE"));
        const defaultVoice = this._createVoiceList(serviceDetails.voices)[0];

        block.setFieldValue(serviceDetails.name, "SERVICE");
        voiceInput.setFieldValue(defaultVoice.value, "VOICES");
      }
    }

    _createVoiceList(voices) {
      return voices.map((v) => {
        const item =  `${v.name} - ${(v.accent ? v.accent + ", " : "") + v.lang} (${v.gender})`;

        return {
          text: item,
          value: item,
          id: v.vid,
        };
      });
    }

    _findService(serviceName) {
      if (!this._services.includes(serviceName)) {
        serviceName = this._services[0];
      }

      const service = this._voices[serviceName];
      service.name = serviceName;
      return service;
    }

    _findVoiceID(service, name) {
      const voiceList = this._createVoiceList(service.voices);
      const item = voiceList.find((v) => v.value.includes(name));

      return item ? item.id : null;
    }

    // Block Funcs
    async importVoices() {
      if (this._voices) return;

      const response = await fetch(`${proxy}get?url=${voiceServicesURL}`);
      if (!response.ok) {
        console.warn("Could not fetch voice services!");
        return;
      }

      const voiceServices = await response.json();
      delete voiceServices["TikTok"]; // this is broken
      this._voices = voiceServices;
      this._services = Object.keys(this._voices);

      if (typeof scaffolding === "undefined") {
        vm.extensionManager.refreshBlocks("SPttsV2");
        runtime.requestBlocksUpdate();
      }
    }

    getServiceLimit(args) {
      if (!this._voices) return "voices not imported!";

      const service = Scratch.Cast.toString(args.SERVICE);
      return this._voices[service]?.charLimit ?? "";
    }

    async generateSpeech(args) {
      if (!this._voices) return "voices not imported!";

      const service = Scratch.Cast.toString(args.SERVICE);
      const voice = Scratch.Cast.toString(args.VOICE);
      const text = Scratch.Cast.toString(args.TEXT);

      const serviceDetails = this._findService(service);
      const voiceID = this._findVoiceID(serviceDetails, voice);
      if (!voiceID) return "error: invalid voice";
      if (text.length > serviceDetails.charLimit) return "error: text too long";

      const cacheID = serviceDetails.name + voiceID + text;
      const cachedSpeech = speechCache.get(cacheID);
      if (cachedSpeech) return cachedSpeech;

      const formData = new FormData();
      formData.append("service", serviceDetails.name);
      formData.append("voice", voiceID);
      formData.append("text", text);

      try {
        const response = await fetch(`${proxy}post?url=${ttsAPI}`, {
          method: "POST",
          body: formData
        });
        if (!response.ok) {
          return "error: " + response.status;
        }

        const ttsData = await response.json();
        if (ttsData.success) {
          const url = `${proxy}get?url=${ttsData.audio_url}`;

          speechCache.set(cacheID, url);
          return url;
        }

        return "error: " + ttsData.error_msg;
      } catch (e) {
        console.warn(e);
        return "error: check console";
      }
    }
  }

  Scratch.extensions.register(new SPttsV2());
})(Scratch);
