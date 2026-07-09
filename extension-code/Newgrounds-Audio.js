// Name: Newgrounds Audio
// ID: SPaudioNG
// Description: Fetch audio tracks from Newgrounds.
// By: SharkPool
// License: MIT

// Version V.2.0.2

(function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) throw new Error("Newgrounds Audio must run unsandboxed");

  const menuIconURI =
"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjkuMTc4IiBoZWlnaHQ9IjEyOS4xNzgiIHZpZXdCb3g9IjAgMCAxMjkuMTc4IDEyOS4xNzgiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCB4MT0iMjQwIiB5MT0iMTUzLjM3IiB4Mj0iMjQwIiB5Mj0iMjM1LjA0NiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJhIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZjlkMDAiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZjBiMzMiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNMCA2NC41ODlDMCAyOC45MTcgMjguOTE3IDAgNjQuNTg5IDBzNjQuNTg5IDI4LjkxNyA2NC41ODkgNjQuNTg5LTI4LjkxNyA2NC41ODktNjQuNTg5IDY0LjU4OVMwIDEwMC4yNjEgMCA2NC41ODkiIGZpbGw9IiNiZjVmMWIiLz48cGF0aCBkPSJNNi43MDkgNjQuNTg5YzAtMzEuOTY3IDI1LjkxMy01Ny44OCA1Ny44OC01Ny44OHM1Ny44OCAyNS45MTMgNTcuODggNTcuODgtMjUuOTEzIDU3Ljg4LTU3Ljg4IDU3Ljg4LTU3Ljg4LTI1LjkxMy01Ny44OC01Ny44OCIgZmlsbD0iI2ZmN2YyNCIvPjxwYXRoIGQ9Ik01NS4yMjIgMzcuOTU5YTYuNDU0IDYuNDU0IDAgMCAxIDYuNDU0IDYuNDU0djQ0LjExNmEyLjY5IDIuNjkgMCAwIDEtMi42OSAyLjY5aC01LjkxNWEyLjY5IDIuNjkgMCAwIDEtMi42OS0yLjY5VjUxLjgzM2EyLjY5IDIuNjkgMCAwIDAtMi42ODktMi42OWgtMS4wNzZhMi42OSAyLjY5IDAgMCAwLTIuNjg4IDIuNjl2MzYuNjk2YTIuNjkgMi42OSAwIDAgMS0yLjY5IDIuNjloLTUuOTE1YTIuNjkgMi42OSAwIDAgMS0yLjY5LTIuNjl2LTQ3Ljg4YTIuNjkgMi42OSAwIDAgMSAyLjY5LTIuNjl6bTM0Ljg2OSAwYTYuNDU0IDYuNDU0IDAgMCAxIDYuNDU0IDYuNDU0djExLjEwMWEyLjE1IDIuMTUgMCAwIDEtMi4xNTIgMi4xNTFoLTcuNTI5YTIuMTUgMi4xNSAwIDAgMS0yLjE1LTIuMTUxdi00Ljc1N2MwLS44OS0uNzIzLTEuNjEzLTEuNjE0LTEuNjEzaC0yLjY5Yy0uODkgMC0xLjYxMy43MjItMS42MTMgMS42MTN2MjcuNjY5YzAgLjU5NC40ODIgMS4wNzYgMS4wNzYgMS4wNzZoNC4zMDNjLjU5MyAwIDEuMDc1LS40ODIgMS4wNzUtMS4wNzZ2LTUuMzE1aC0xLjA3NWEyLjE1IDIuMTUgMCAwIDEtMi4xNTItMi4xNTJ2LTYuODgxYzAtMS4xODkuOTYzLTIuMTUyIDIuMTUyLTIuMTUyaDEwLjIxOGMxLjE4OCAwIDIuMTUuOTY0IDIuMTUgMi4xNTJ2MjAuNjg3YTYuNDU0IDYuNDU0IDAgMCAxLTYuNDUzIDYuNDU0SDczLjk1NmE2LjQ1NCA2LjQ1NCAwIDAgMS02LjQ1NS02LjQ1NFY0NC40MTNhNi40NTQgNi40NTQgMCAwIDEgNi40NTUtNi40NTR6IiBmaWxsPSJub25lIiBzdHJva2U9IiM0MDIwMDkiIHN0cm9rZS13aWR0aD0iMTIuNSIvPjxwYXRoIGQ9Ik0yMzAuNjMzIDE1My4zN2E2LjQ1NCA2LjQ1NCAwIDAgMSA2LjQ1NCA2LjQ1NHY0NC4xMTZhMi42OSAyLjY5IDAgMCAxLTIuNjkgMi42OWgtNS45MTVhMi42OSAyLjY5IDAgMCAxLTIuNjktMi42OXYtMzYuNjk2YTIuNjkgMi42OSAwIDAgMC0yLjY4OS0yLjY5aC0xLjA3NmEyLjY5IDIuNjkgMCAwIDAtMi42ODggMi42OXYzNi42OTZhMi42OSAyLjY5IDAgMCAxLTIuNjkgMi42OWgtNS45MTVhMi42OSAyLjY5IDAgMCAxLTIuNjktMi42OXYtNDcuODhhMi42OSAyLjY5IDAgMCAxIDIuNjktMi42OXptMzQuODY5IDBhNi40NTQgNi40NTQgMCAwIDEgNi40NTQgNi40NTR2MTEuMTAxYTIuMTUgMi4xNSAwIDAgMS0yLjE1MiAyLjE1MWgtNy41MjlhMi4xNSAyLjE1IDAgMCAxLTIuMTUtMi4xNTF2LTQuNzU3YzAtLjg5LS43MjMtMS42MTMtMS42MTQtMS42MTNoLTIuNjljLS44OSAwLTEuNjEzLjcyMi0xLjYxMyAxLjYxM3YyNy42NjljMCAuNTk0LjQ4MiAxLjA3NiAxLjA3NiAxLjA3Nmg0LjMwM2MuNTkzIDAgMS4wNzUtLjQ4MiAxLjA3NS0xLjA3NnYtNS4zMTVoLTEuMDc1YTIuMTUgMi4xNSAwIDAgMS0yLjE1Mi0yLjE1MnYtNi44ODFjMC0xLjE4OS45NjMtMi4xNTIgMi4xNTItMi4xNTJoMTAuMjE4YzEuMTg4IDAgMi4xNS45NjQgMi4xNSAyLjE1MnYyMC42ODdhNi40NTQgNi40NTQgMCAwIDEtNi40NTMgNi40NTRoLTE2LjEzNWE2LjQ1NCA2LjQ1NCAwIDAgMS02LjQ1NS02LjQ1NHYtNDAuMzUyYTYuNDU0IDYuNDU0IDAgMCAxIDYuNDU1LTYuNDU0eiIgZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTc1LjQxMSAtMTE1LjQxMSkiLz48L3N2Zz4=";
  const blockIconURI =
"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMzEuMTg5IiBoZWlnaHQ9IjEzMS4xODkiIHZpZXdCb3g9IjAgMCAxMzEuMTg5IDEzMS4xODkiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCB4MT0iMjQwIiB5MT0iMTQyLjUiIHgyPSIyNDAiIHkyPSIyNTcuNTE2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImEiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmOWQwMCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmMGIzMyIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik01Mi40MDQgMjguMDk0YTkuMDkgOS4wOSAwIDAgMSA5LjA4OCA5LjA4OHY2Mi4xMjVhMy43ODcgMy43ODcgMCAwIDEtMy43ODggMy43ODdoLTguMzNhMy43ODcgMy43ODcgMCAwIDEtMy43ODctMy43ODdWNDcuNjMxYTMuNzg3IDMuNzg3IDAgMCAwLTMuNzg3LTMuNzg3aC0xLjUxNWEzLjc4NyAzLjc4NyAwIDAgMC0zLjc4NiAzLjc4N3Y1MS42NzZhMy43ODcgMy43ODcgMCAwIDEtMy43ODcgMy43ODdoLTguMzMxYTMuNzg3IDMuNzg3IDAgMCAxLTMuNzg3LTMuNzg3VjMxLjg4MWEzLjc4NyAzLjc4NyAwIDAgMSAzLjc4Ny0zLjc4N3ptNDkuMTAyIDBhOS4wOSA5LjA5IDAgMCAxIDkuMDg4IDkuMDg4djE1LjYzM2EzLjAzIDMuMDMgMCAwIDEtMy4wMyAzLjAyOUg5Ni45NjJhMy4wMyAzLjAzIDAgMCAxLTMuMDI5LTMuMDN2LTYuNjk4YTIuMjcgMi4yNyAwIDAgMC0yLjI3Mi0yLjI3MmgtMy43ODdhMi4yNyAyLjI3IDAgMCAwLTIuMjcyIDIuMjcydjM4Ljk2M2MwIC44MzcuNjc4IDEuNTE1IDEuNTE1IDEuNTE1aDYuMDU5Yy44MzYgMCAxLjUxNC0uNjc4IDEuNTE0LTEuNTE1di03LjQ4NWgtMS41MTRhMy4wMyAzLjAzIDAgMCAxLTMuMDMtMy4wM3YtOS42OWEzLjAzIDMuMDMgMCAwIDEgMy4wMy0zLjAzaDE0LjM5YTMuMDMgMy4wMyAwIDAgMSAzLjAyOCAzLjAzdjI5LjEzMmE5LjA5IDkuMDkgMCAwIDEtOS4wODggOS4wODhINzguNzg0YTkuMDkgOS4wOSAwIDAgMS05LjA4OS05LjA4OFYzNy4xODJhOS4wOSA5LjA5IDAgMCAxIDkuMDktOS4wODh6IiBmaWxsPSJub25lIiBzdHJva2U9IiM0MDIwMDkiIHN0cm9rZS13aWR0aD0iMTUiLz48cGF0aCBkPSJNMjI2LjgxIDE0Mi41YTkuMDkgOS4wOSAwIDAgMSA5LjA4OCA5LjA4OHY2Mi4xMjVhMy43ODcgMy43ODcgMCAwIDEtMy43ODggMy43ODdoLTguMzNhMy43ODcgMy43ODcgMCAwIDEtMy43ODctMy43ODd2LTUxLjY3NmEzLjc4NyAzLjc4NyAwIDAgMC0zLjc4Ny0zLjc4N2gtMS41MTVhMy43ODcgMy43ODcgMCAwIDAtMy43ODYgMy43ODd2NTEuNjc2YTMuNzg3IDMuNzg3IDAgMCAxLTMuNzg3IDMuNzg3aC04LjMzMWEzLjc4NyAzLjc4NyAwIDAgMS0zLjc4Ny0zLjc4N3YtNjcuNDI2YTMuNzg3IDMuNzg3IDAgMCAxIDMuNzg3LTMuNzg3aDI4LjAyMnptNDkuMTAyIDBhOS4wOSA5LjA5IDAgMCAxIDkuMDg4IDkuMDg4djE1LjYzM2EzLjAzIDMuMDMgMCAwIDEtMy4wMyAzLjAyOWgtMTAuNjAyYTMuMDMgMy4wMyAwIDAgMS0zLjAyOS0zLjAzdi02LjY5OGEyLjI3IDIuMjcgMCAwIDAtMi4yNzItMi4yNzJoLTMuNzg3YTIuMjcgMi4yNyAwIDAgMC0yLjI3MiAyLjI3MnYzOC45NjNjMCAuODM3LjY3OCAxLjUxNSAxLjUxNSAxLjUxNWg2LjA1OWMuODM2IDAgMS41MTQtLjY3OCAxLjUxNC0xLjUxNVYxOTJoLTEuNTE0YTMuMDMgMy4wMyAwIDAgMS0zLjAzLTMuMDN2LTkuNjlhMy4wMyAzLjAzIDAgMCAxIDMuMDMtMy4wM2gxNC4zOWEzLjAzIDMuMDMgMCAwIDEgMy4wMjggMy4wM3YyOS4xMzJhOS4wOSA5LjA5IDAgMCAxLTkuMDg4IDkuMDg4SDI1My4xOWE5LjA5IDkuMDkgMCAwIDEtOS4wODktOS4wODh2LTU2LjgyNGE5LjA5IDkuMDkgMCAwIDEgOS4wOS05LjA4OHoiIGZpbGw9InVybCgjYSkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE3NC40MDYgLTExNC40MDYpIi8+PHBhdGggZD0iTTAgMTMxLjE4OFYwaDEzMS4xODh2MTMxLjE4OHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4=";

  const Cast = Scratch.Cast;

  const NG_API = "https://www.newgrounds.com/audio/listen/";
  const SCRAPE_DELAY_TIMEOUT = 60 * 60 * 1000; // 1 hour
  const SCOUTED_STAT_COUNT = 5; // Non-scouted users have 4 audio stats

  const proxy = "https://reef-proxy.onrender.com/"; // this is my proxy, managed by me.

  const domParser = new DOMParser();
  const NewgroundsCache = new Map();

  /**
   * Caches a value into NewgroundsCache.
   * 
   * @param key {String} Name ID of Cache
   * @param value {*} Cached item
   */
  const setCache = function (key, value) {
    NewgroundsCache.set(key, value);
  };

  /**
   * Returns a value from NewgroundsCache, if exists.
   * 
   * @param key {String} Name ID of Cache
   * @returns Cached value if exists, otherwise null
   */
  const getFromCache = function (key) {
    if (NewgroundsCache.has(key)) {
      return NewgroundsCache.get(key);
    }

    return null;
  };

  const scraperDelay = {
    time: 10,
    expires: null,
    update: () => {
      const now = Date.now();
      const expireTime = scraperDelay.expires;

      if (expireTime && now >= expireTime) {
        scraperDelay.time = 10;
      } else {
        scraperDelay.time = 0;
        scraperDelay.expires = now + SCRAPE_DELAY_TIMEOUT;
      }
    }
  };

  let lastUsedID = null;

  class SPaudioNG {
    getInfo() {
      return {
        id: "SPaudioNG",
        name: "Newgrounds Audio",
        color1: "#EB7522",
        menuIconURI,
        blockIconURI,
        blocks: [
          {
            func: "apiDisclaimer",
            blockType: Scratch.BlockType.BUTTON,
            text: "Track Fetching Disclaimer"
          },
          {
            opcode: "fetchID",
            blockType: Scratch.BlockType.COMMAND,
            text: "fetch track with ID [ID]",
            arguments: {
              ID: { type: Scratch.ArgumentType.STRING, defaultValue: 505816 }
            }
          },
          "---",
          {
            opcode: "findURL",
            blockType: Scratch.BlockType.REPORTER,
            text: "track URL",
            disableMonitor: true
          },
          {
            opcode: "getTrackInfo",
            blockType: Scratch.BlockType.REPORTER,
            text: "[INFO] of track",
            arguments: {
              INFO: { type: Scratch.ArgumentType.STRING, menu: "INFO" }
            }
          },
          {
            opcode: "scouted",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "track author scouted?",
            disableMonitor: true
          },
          {
            opcode: "downloadAllowed",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "track allows downloads?",
            disableMonitor: true
          },
        ],
        menus: {
          INFO: {
            acceptReporters: true,
            items: [
              { text: "name", value: "name" },
              { text: "author", value: "author" },
              { text: "cover", value: "cover" },
              { text: "description", value: "description" },
              { text: "rating", value: "rating" },
              { text: "release date", value: "release date" },
              { text: "length", value: "length" },
              { text: "listens", value: "listens" },
              { text: "downloads", value: "downloads" },
              { text: "vote count", value: "vote count" },
              { text: "file size", value: "file size" },
              { text: "raw file size", value: "raw file size" },
              { text: "license", value: "license" },
            ]
          }
        }
      };
    }

    // Helper Funcs
    apiDisclaimer() {
      alert([
        "Due to the changes Newgrounds made to their website, fetching any audio track will take significantly longer to finish.",
        "To be precise, fetching a track could take up to 10-12 seconds max. This is to avoid setting off the Newgrounds Guard Bot.",
        "Additionally, we are getting my CORS proxy to get around this, please be nice and try to not abuse our free proxy."
      ].join("\n\n"));
    }

    _getEmbedPlayerData(htmlDocument) {
      /**
       * While yes, I understand its dangerous to use 'eval' in any sort of extension,
       * I have to make an exception here as the embed controller contains function code
       * and other oddities that prevent JSON.parse from working. Fortunately, using eval
       * here is relatively safe as the user cannot change the audio data.
       */
      const objectStart = htmlDocument.indexOf("new embedController([{") + 20;
      const objectEnd = htmlDocument.indexOf("}],") + 2;

      try {
        const playerData = eval(htmlDocument.substring(objectStart, objectEnd));
        return playerData[0];
      } catch {
        return null;
      }
    }

    _decodeDescription(element) {
      const paragraphs = Array.from(element.children);
      const description = paragraphs.map((p) => {
        return p.localName === "ul"
          ? p.querySelector("a").getAttribute("href") // this is an external reference
          : p.innerHTML.replaceAll("<br>", "\n");
      });

      return description.join("").trim();
    }

    _ccLicenseReader(licence, returnBool) {
      const goodLicenses = [
        `you may only use this piece for commercial purposes if your work is a web-based game or animation,`,
      ];
      const disallowedLicenses = [
        `you may not use this work for any purposes`,
      ];
      const limitedLicenses = [
        `you are free to copy, distribute and transmit this work under the following conditions:`,
        `please contact me if you would like to use this in a project. we can discuss the details.`,
      ];

      licence = Cast.toString(licence).toLowerCase().trim();
      let result = "warn";
      for (const text of goodLicenses) {
        if (licence.startsWith(text)) {
          result = "good";
          break;
        }
      }
      for (const text of disallowedLicenses) {
        if (licence.startsWith(text)) {
          result = "bad";
          break;
        }
      }
      for (const text of limitedLicenses) {
        if (licence.startsWith(text)) {
          result = "warn";
          break;
        }
      }

      if (returnBool) return result !== "bad";
      else {
        if (result === "good") return "This Track can freely be used for web-based games";
        else if (result === "bad") return "This Track is not allowed for use!";
        else return "This Track can only be used for non-profit web-based games WITH credit. Further use requires permission from the author";
      }
    }

    _getAudioID(input) {
      const idAsNumber = Cast.toNumber(input);
      if (input == idAsNumber) return idAsNumber; // user inputted a number

      try {
        const url = new URL(input); // user inputed a url to a possible audio track
        if (url.pathname.startsWith("/audio/listen/")) {
          const urlParts = url.pathname.split("/");
          return urlParts[3]; // this is the ID
        }

        return 0;
      } catch {
        return 0;
      }
    }

    // Block Funcs
    async fetchID(args) {
      const id = this._getAudioID(args.ID);
      if (id < 1) return;

      const url = `${proxy}scrape?wait=${scraperDelay.time}&url=${NG_API}${id}`;
      scraperDelay.update();

      try {
        const response = await Scratch.fetch(url);
        if (!response.ok) {
          console.warn("Newgrounds Fetch Fail: " + response.status);
          return;
        }

        const htmlText = await response.text();
        const embedPlayerData = this._getEmbedPlayerData(htmlText);
        const htmlDocument = domParser.parseFromString(htmlText, "text/html");
        if (htmlDocument.querySelector("title").textContent === "NG Guard") {
          console.warn("Newgrounds Guard Activated");
          scraperDelay.expires = null;
          scraperDelay.time = 10;
          return;
        }

        lastUsedID = id;
        setCache(id, {
          data: embedPlayerData,
          html: htmlDocument
        });
      } catch (e) {
        console.warn("Newgrounds Fetch Fail: " + e);
      }
    }

    findURL() {
      const cache = getFromCache(lastUsedID);
      if (!cache) return "Fetch a track first!";

      const data = cache.data;
      if (data) return `${proxy}?get=${data.url}`;
      else return "Couldnt decode audio";
    }

    getTrackInfo(args) {
      const cache = getFromCache(lastUsedID);
      if (!cache) return "Fetch a track first!";

      const { data, html } = cache;
      let attribute = Cast.toString(args.INFO).toLowerCase();
      let element;

      switch (attribute) {
        case "name": return decodeURIComponent(data.params.name);
        case "author": return decodeURIComponent(data.params.artist);
        case "cover": return `${proxy}get?url=${data.params.icon}`;
        case "description":
          element = html.querySelector(`div[class*="pod-body"][id="author_comments"]`);
          return element ? this._decodeDescription(element) : "";
        case "rating":
          element = html.querySelector(`dl[class*="sidestats"] span[id="score_number"]`);
          return element ? Cast.toNumber(element.textContent) : -1;
        case "release date":
          element = html.querySelectorAll(`dl[class*="sidestats"] dd[class*="multivalue"] span[class="value"]`);
          return element ? element[0].textContent : "";
        case "length": return data.params.duration;
        case "raw file size": return data.filesize;
        case "file size": return `${(data.filesize / (1024 * 1024)).toFixed(2)} MB`;
        case "listens":
        case "downloads":
        case "vote count": {
          if (attribute === "vote count") attribute = "Votes";

          const stats = html.querySelector(`dl[class*="sidestats"]`);
          if (!stats) return 0;

          const dtElements = Array.from(stats.querySelectorAll("dt"));
          for (const dt of dtElements) {
            const title = dt.textContent.trim().toLowerCase();
            if (title === attribute) {
              const value = dt.nextElementSibling.textContent.trim();
              return Cast.toNumber(value.replaceAll(",", ""));
            }
          }

          return 0;
        }
        case "copyright license":
        case "license": {
          const ccLicense = html.querySelector(`div[class*="pod-body"][class*="creative-commons"] p`);
          return this._ccLicenseReader(ccLicense, false);
        }
        default: return "";
      }
    }

    scouted() {
      const cache = getFromCache(lastUsedID);
      if (!cache) return false;

      const html = cache.html;
      const statCount = html.querySelector(`dl[class*="sidestats"]`);
      if (statCount) return statCount.children.length > SCOUTED_STAT_COUNT;
      else return false;
    }

    downloadAllowed() {
      const cache = getFromCache(lastUsedID);
      if (!cache || !this.scouted()) return false;

      const ccLicense = cache.html.querySelector(`div[class*="pod-body"][class*="creative-commons"] p`);
      return this._ccLicenseReader(ccLicense, true);
    }
  }

  Scratch.extensions.register(new SPaudioNG());
})(Scratch);
