// Name: YouTube Operations
// ID: SPyoutubeoperations
// Description: Fetch and play Youtube videos and statistics in your project.
// By: SharkPool
// Contributed By: Nekl300
// Contributed By: Clickertale2 <https://github.com/Clickertale2>
// License: MIT

// Version V.1.8.0

(function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) throw new Error("YouTube Operations must run unsandboxed");

  const menuIconURI =
"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDUuMzU4IiBoZWlnaHQ9IjE0NS4zNTgiIHZpZXdCb3g9IjAgMCAxNDUuMzU4IDE0NS4zNTgiPjxwYXRoIGQ9Ik0wIDcyLjY3OUMwIDMyLjUzOSAzMi41NCAwIDcyLjY3OSAwczcyLjY3OSAzMi41NCA3Mi42NzkgNzIuNjc5LTMyLjU0IDcyLjY3OS03Mi42NzkgNzIuNjc5UzAgMTEyLjgxOCAwIDcyLjY3OSIgZmlsbD0iI2MzMDAwMCIvPjxwYXRoIGQ9Ik05LjA0MSA3Mi42NzljMC0zNS4xNDYgMjguNDkyLTYzLjYzOCA2My42MzgtNjMuNjM4czYzLjYzOCAyOC40OTIgNjMuNjM4IDYzLjYzOC0yOC40OTIgNjMuNjM4LTYzLjYzOCA2My42MzhTOS4wNDEgMTA3LjgyNSA5LjA0MSA3Mi42NzkiIGZpbGw9InJlZCIvPjxwYXRoIGQ9Ik05OS40MTQgNzYuNjQxYy0xMC41ODYgNS44Ni0zMC4xIDE2LjY1OS0zNi4yODcgMjAuMDgzLTMuNjk1IDIuMDQ1LTcuOTEyIDEuMDM5LTcuOTEyLTMuOTEzdi0zOS4zN2MwLTQuMTg1IDMuNTI0LTcuMDU1IDYuNzctNS4yNThsMzcuNDI5IDIwLjcxNWM0LjIwNiAyLjMyOCA0LjIgNS40MTkgMCA3Ljc0MyIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==";

  const blockIconURI =
"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMy4yMDYiIGhlaWdodD0iMjUuMTk2IiB2aWV3Qm94PSIwIDAgMzMuMjA2IDI1LjE5NiI+PHBhdGggZD0iTTMzLjIwNiAxMi41OThzMCA1Ljg1OC0uNjk0IDguNjYzYy0uMzgzIDEuNTUtMS41MDcgMi43NjgtMi45MzYgMy4xODItMi41ODkuNzUzLTEyLjk3My43NTMtMTIuOTczLjc1M3MtMTAuMzg0IDAtMTIuOTczLS43NTNjLTEuNDMtLjQxNC0yLjU1My0xLjYzMi0yLjkzNi0zLjE4MkMwIDE4LjQ1NiAwIDEyLjU5OCAwIDEyLjU5OFMwIDYuNzQuNjk0IDMuOTM1QzEuMDc3IDIuMzg1IDIuMjAxIDEuMTY3IDMuNjMuNzUyIDYuMjE5IDAgMTYuNjAzIDAgMTYuNjAzIDBzMTAuMzg0IDAgMTIuOTczLjc1MmMxLjQzLjQxNSAyLjU1MyAxLjYzMyAyLjkzNiAzLjE4My42OTEgMi44MDUuNjk0IDguNjYzLjY5NCA4LjY2MyIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0zMC44ODggMTIuNTk4czAgNC42NS0uNTk3IDYuODc3YTMuNTggMy41OCAwIDAgMS0yLjUyNiAyLjUyNmMtMi4yMjcuNTk3LTExLjE2Mi41OTctMTEuMTYyLjU5N3MtOC45MzUgMC0xMS4xNjItLjU5N2EzLjU4IDMuNTggMCAwIDEtMi41MjYtMi41MjZjLS41OTctMi4yMjctLjU5Ny02Ljg3Ny0uNTk3LTYuODc3czAtNC42NS41OTctNi44NzdhMy41OCAzLjU4IDAgMCAxIDIuNTI2LTIuNTI2YzIuMjI3LS41OTcgMTEuMTYyLS41OTcgMTEuMTYyLS41OTdzOC45MzUgMCAxMS4xNjIuNTk3YTMuNTggMy41OCAwIDAgMSAyLjUyNiAyLjUyNmMuNTk1IDIuMjI3LjU5NyA2Ljg3Ny41OTcgNi44NzciIGZpbGw9InJlZCIvPjxwYXRoIGQ9Im0xMy43NDMgOC4zMTMgNy40MjMgNC4yODUtNy40MjMgNC4yODV6IiBmaWxsPSIjZmZmIi8+PC9zdmc+";

  const Cast = Scratch.Cast;
  const vm = Scratch.vm;
  const runtime = vm.runtime;

  /*
    To prevent server stress, we will cache fetch results.
    I love this proxy and it has always been reliable and exceptional.
  */
  const proxy = "https://api.codetabs.com/v1/proxy?quest=";

  const YTCache_ = new Map();

  const setCache = (id, value, omit_expiration) => {
    // cache expires in 3 minutes
    YTCache_.set(id, {
      expires: omit_expiration ? NaN : Date.now() + (180 * 1000),
      value: value
    });
  };

  const getCache = (id) => {
    if (YTCache_.has(id)) {
      const item = YTCache_.get(id);
      if (Date.now() > item.expires) {
        YTCache_.delete(id);
      }

      return item.value;
    }

    return null;
  };

  let PLAYER_MODE = "canvas";
  let canvasPlayer = null;
  const ytWindows = [];

  const createCanvasPlayer = (src, options) => {
    canvasPlayer = document.createElement("iframe");
    canvasPlayer.setAttribute("style", `width: ${options.width}px; height: ${options.height}px; position: absolute; transform: translate(${options.left}px, ${options.top}px); border: none; pointer-events: auto;`);
    canvasPlayer.setAttribute("allowtransparency", "true");
    canvasPlayer.setAttribute("src", src);

    vm.renderer.addOverlay(canvasPlayer, "scale-centered");
  };

  const updateCanvasPlayer = (options) => {
    if (!canvasPlayer) return;

    canvasPlayer.style.width = options.width + "px";
    canvasPlayer.style.height = options.height + "px";
    canvasPlayer.style.transform = `translate(${options.left}px, ${options.top}px)`;
  };

  const closeCanvasPlayer = () => {
    if (canvasPlayer) {
      vm.renderer.removeOverlay(canvasPlayer);
      canvasPlayer = null;
    }
  };

  runtime.on("RUNTIME_DISPOSED", closeCanvasPlayer);
  runtime.on("PROJECT_STOP_ALL", closeCanvasPlayer);

  class YTOperationsSP {
    getInfo() {
      return {
        id: "SPyoutubeoperations",
        name: "YouTube Operations",
        menuIconURI,
        blockIconURI,
        color1: "#ff0000",
        color2: "#c10000",
        color3: "#820000",
        blocks: [
          { blockType: Scratch.BlockType.LABEL, text: "Videos" },
          {
            opcode: "extractVideoID",
            blockType: Scratch.BlockType.REPORTER,
            text: "extract video ID from [URL]",
            arguments: {
              URL: { type: Scratch.ArgumentType.STRING, defaultValue: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }
            }
          },
          "---",
          {
            opcode: "fetchStats",
            blockType: Scratch.BlockType.REPORTER,
            text: "get [STAT] count of video [VIDEO_ID]",
            arguments: {
              STAT: { type: Scratch.ArgumentType.STRING, menu: "STAT_OPTIONS" },
              VIDEO_ID: { type: Scratch.ArgumentType.STRING, defaultValue: "dQw4w9WgXcQ" }
            }
          },
          {
            /* made by Nekl300 */
            opcode: "fetchtitle",
            blockType: Scratch.BlockType.REPORTER,
            text: "get [STAT] of video [VIDEO_ID]",
            arguments: {
              STAT: { type: Scratch.ArgumentType.STRING, menu: "STAT_OPTION" },
              VIDEO_ID: { type: Scratch.ArgumentType.STRING, defaultValue: "dQw4w9WgXcQ" }
            }
          },
          {
            opcode: "vid2MP4",
            blockType: Scratch.BlockType.REPORTER,
            text: "video [VIDEO_ID] to [TYPE]",
            arguments: {
              VIDEO_ID: { type: Scratch.ArgumentType.STRING, defaultValue: "dQw4w9WgXcQ" },
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "EXPORT_TYPES" }
            }
          },
          "---",
          {
            opcode: "getResults",
            blockType: Scratch.BlockType.REPORTER,
            text: "search for videos with query [QUERY]",
            arguments: {
              QUERY: { type: Scratch.ArgumentType.STRING, defaultValue: "SharkPool" }
            }
          },
          { blockType: Scratch.BlockType.LABEL, text: "Users" },
          {
            opcode: "fetchUserThing",
            blockType: Scratch.BlockType.REPORTER,
            text: "get [THING] from channel [URL]",
            arguments: {
              URL: { type: Scratch.ArgumentType.STRING, defaultValue: "https://www.youtube.com/@SharkPool_SP" },
              THING: { type: Scratch.ArgumentType.STRING, menu: "USER_STUFF" }
            }
          },
          { blockType: Scratch.BlockType.LABEL, text: "Video Player" },
          {
            opcode: "setPlayer",
            blockType: Scratch.BlockType.COMMAND,
            text: "play videos on [TYPE]",
            arguments: {
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "DISPLAY" }
            }
          },
          {
            opcode: "openYouTubeLinkInNewWindow",
            blockType: Scratch.BlockType.COMMAND,
            text: "open video [ID] with width: [WIDTH] height: [HEIGHT] x: [LEFT] y: [TOP]",
            arguments: {
              ID: { type: Scratch.ArgumentType.STRING, defaultValue: "dQw4w9WgXcQ" },
              WIDTH: { type: Scratch.ArgumentType.NUMBER, defaultValue: 480 },
              HEIGHT: { type: Scratch.ArgumentType.NUMBER, defaultValue: 360 },
              LEFT: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
              TOP: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 }
            }
          },
          {
            opcode: "openYouTubeLinkInNewWindowAtTime",
            blockType: Scratch.BlockType.COMMAND,
            text: "open video [ID] with width: [WIDTH] height: [HEIGHT] x: [LEFT] y: [TOP] start from: [MINUTES]:[SECONDS]",
            arguments: {
              ID: { type: Scratch.ArgumentType.STRING, defaultValue: "dQw4w9WgXcQ" },
              WIDTH: { type: Scratch.ArgumentType.NUMBER, defaultValue: 480 },
              HEIGHT: { type: Scratch.ArgumentType.NUMBER, defaultValue: 360 },
              LEFT: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
              TOP: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
              MINUTES: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 },
              SECONDS: { type: Scratch.ArgumentType.NUMBER, defaultValue: 30 }
            }
          },
          {
            opcode: "closeYouTubeWindow",
            blockType: Scratch.BlockType.COMMAND,
            text: "close video [VIDEO_ID]",
            arguments: {
              VIDEO_ID: { type: Scratch.ArgumentType.STRING, defaultValue: "dQw4w9WgXcQ" }
            }
          }
        ],
        menus: {
          DISPLAY: ["canvas", "window"],
          EXPORT_TYPES: ["mp4", "mp3"],
          STAT_OPTIONS: {
            acceptReporters: true,
            items: [
              "like", "dislike",
              "view", "rating"
            ]
          },
          STAT_OPTION: {
            acceptReporters: true,
            items: [
              "title", "author", "author url",
              "thumbnail", "release date",
              "length", "raw length",
              "description"
            ]
          },
          USER_STUFF: {
            acceptReporters: true,
            items: [
              "profile", "name",
              "description", "location",
              "subscriber count", "video count",
              "total view count", "joined date"
            ]
          }
        },
      };
    }

    // Helper Funcs
    async _fetch(url, cacheKey, type, omitProxy) {
      const cached = getCache(cacheKey);
      if (cached) return cached;

      try {
        if (await Scratch.canFetch(url)) {
          // eslint-disable-next-line
          if (!omitProxy) url = proxy + encodeURIComponent(url);
          const response = await Scratch.fetch(url);
          if (!response.ok) return null;

          const value = await (response[type])();
          if (cacheKey) setCache(cacheKey, value);
          return value;
        }

        return null;
      } catch(e) {
        console.warn("YouTube Error: " + e);
        return null;
      }
    }

    // Block Funcs
    extractVideoID(args) {
      const url = Cast.toString(args.URL);
      if (!url.includes("http")) return "Invalid URL";

      const urlObj = new URL(url);
      const path = urlObj.pathname;
      if (url.includes("?v=") || url.includes("&v=")) {
        return urlObj.searchParams.get("v") || "Invalid URL";
      } else {
        return path.slice(path.lastIndexOf("/") + 1, path.length) || "Invalid URL";
      }
    }

    async fetchStats(args) {
      const id = Cast.toString(args.VIDEO_ID);
      const attribute = Cast.toString(args.STAT);
      const cacheKey = "count" + id;
      const url = `https://returnyoutubedislikeapi.com/votes?videoId=${id}`;

      const jsonData = await this._fetch(url, cacheKey, "json", true);
      if (!jsonData) return "";

      switch (attribute) {
        case "like": return jsonData.likes;
        case "dislike": return jsonData.dislikes;
        case "rating": return jsonData.rating;
        case "view count": /* renamed item */
        case "view": return jsonData.viewCount;
        case "release date":
        case "date created": return jsonData.dateCreated; /* moved to other block */
        default: return "";
      }
    }

    async fetchtitle(args) {
      const attribute = Cast.toString(args.STAT);
      if (attribute === "release date") return await this.fetchStats(args);
      const isSpecialAtt = (
        attribute === "description" ||
        attribute === "length" || attribute === "raw length"
      );

      const id = Cast.toString(args.VIDEO_ID);
      const cacheKey = "stat" + isSpecialAtt + id;
      const url = isSpecialAtt ?
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&id=${id}&key=AIzaSyCyFg4jSNbDVzpHpvv73yZ89wpTFFeF_cY`
        : `https://www.youtube.com/oembed?url=http%3A//youtube.com/watch%3Fv%3D${id}&format=json`;

      const data = await this._fetch(url, cacheKey, "json", true);
      if (!data) return "";

      let match;
      switch (attribute) {
        case "author": return data.author_name;
        case "author url": return data.author_url;
        case "title": return data.title; 
        case "thumbnail": return data.thumbnail_url;
        case "description":
          if (!data.items) return "";
          return data.items[0]?.snippet?.description ?? "";
        case "raw length":
        case "length": {
          match = data.items[0]?.contentDetails?.duration;
          if (!match) return -1;

          const times = match.match(/(\d+)[HMS]/gi)?.map((t) => parseFloat(t));
          if (!times) return -1;

          let length = 0;
          if (attribute === "length") {
            length = "";
            if (times.length < 3) length = "00:";
            if (times.length < 2) length += "00:";
            length += times.map((t) => t.toString().padStart(2, "0")).join(":");
          } else {
            if (times.length >= 1) length += times[times.length - 1];
            if (times.length >= 2) length += times[times.length - 2] * 60;
            if (times.length >= 3) length += times[times.length - 3] * 3600;
          }

          return length;
        }
        default:
          return "";
      }
    }

    async vid2MP4(args) {
      /* Thank you Clickertale2 */
      const format = args.TYPE === "mp4" ? "480" : "mp3";
      const cacheKey = format + args.VIDEO_ID;
      const url = `https://dubs.io/wp-json/tools/v1/download-video?id=${args.VIDEO_ID}&format=${format}`;

      const initData = await this._fetch(url, cacheKey, "json", true);
      if (!initData || !initData.progressId) return "Failed to Fetch";

      const statusURL = `https://dubs.io/wp-json/tools/v1/status-video?id=${initData.progressId}`;
      let downloadData;

      return new Promise((resolve) => {
        let finished = false;
        let attempts = 0;
        const maxAttempts = 10; // 10 * 3s = 30 sec timeout

        const interval = setInterval(async () => {
          attempts++;
          try {
            const response = await Scratch.fetch(statusURL);
            if (!response.ok) throw new Error("Bad status response");

            const downloadData = await response.json();
            if (downloadData.status === "Finished") {
              finished = true;
              clearInterval(interval);

              setCache(cacheKey, downloadData, true);
              resolve(downloadData.downloadUrl || "Failed to download video");
            }
          } catch {
            clearInterval(interval);
            resolve("Failed to download video");
          }

          if (!finished && attempts >= maxAttempts) {
            clearInterval(interval);
            resolve("Failed: Download timed out");
          }
        }, 3000);
      });
    }
    
    async fetchUserThing(args) {
      let id = Cast.toString(args.URL);

      // handle if the user submitted a profile name or url
      let url = id;
      const ytUrl = "https://www.youtube.com/";
      if (!id.startsWith("https://")) {
        if (id.includes("@")) url = ytUrl + id;
        else url = ytUrl + "channel/" + id;
      }
      url += "/about";

      const attribute = Cast.toString(args.THING);

      const text = await this._fetch(url, "profile" + id, "text");
      if (!text) return "";

      let match;
      switch (attribute) {
        case "profile": {
          match = text.match(
            /https:\/\/yt3\.googleusercontent\.com\/([a-zA-Z0-9_.+-=]+)/
          );
          return match && match[1] ? "https://yt3.googleusercontent.com/" + match[1] : "";
        }
        case "name": {
          match = text.match(/<meta\s+property="og:title"\s+content="([^"]+)">/);
          return match && match[1] ? match[1] : "";
        }
        case "description": {
          match = text.match(/"description":"((?:[^"\\]|\\.)*)"/);
          return match && match[1] ? match[1].replace(/\\n/g, "\n") : "";
        }
        case "subscriber count": {
          match = [
            ...text.matchAll(/"metadataParts":\[\{"text":\{"content":"([^"]+)"/g)
          ];

          if (match && match[1]) {
            const count = match[1][1].split(/\s+/);
            return count.length > 2 ? `${count[0]} ${count[1]}` : count[0];
          }
          return "";
        }
        case "video count": {
          match = text.match(
            /\},\{"text":\{"content":"(\d+)[^"]*","styleRuns":\[\{/
          );
          return match && match[1] ? match[1] : "";
        }
        case "total view count": {
          match = text.match(/viewCountText":"([\d\s,]+)[^"]*","joinedDateText"/);
          if (!match || !match[1]) return "";
          else return match[1]
            .replaceAll(" ", "")
            .replace(",", "");
        }
        case "joined date": {
          match = text.match(/joinedDateText":{"content":"\w+\s([^"]*)/);
          return match && match[1] ? match[1].trim() : "";
        }
        case "location": {
          match = text.match(/"country":\{"simpleText":"([^"]+)"\}/);
          return match && match[1] ? match[1] : "Not Available";
        }
        default:
          return "Invalid Selection";
      }
    }

    async getResults(args) {
      const query = encodeURIComponent(Cast.toString(args.QUERY).replace(/ /g, "+"));

      const text = await this._fetch(
        `https://www.youtube.com/results?search_query=${query}`,
        "query", "text"
      );
      if (!text) return "[]";

      const matchArray = text.match(/\/watch\?v=([a-zA-Z0-9_-]{11})/g) || [];
      return JSON.stringify(matchArray.map(match => match.slice(9)));
    }

    setPlayer(args) {
      PLAYER_MODE = args.TYPE;
    }

    openYouTubeLinkInNewWindow(args) { this.openYouTubeLinkInNewWindowAtTime(args) }
    openYouTubeLinkInNewWindowAtTime(args) {
      const id = Cast.toString(args.ID);
      const minutes = Cast.toNumber(args.MINUTES);
      const seconds = Cast.toNumber(args.SECONDS);
      const startTime = minutes * 60 + seconds;

      const options = {
        width: Math.max(100, Cast.toNumber(args.WIDTH)),
        height: Math.max(100, Cast.toNumber(args.HEIGHT)),
        left: Cast.toNumber(args.LEFT),
        top: Cast.toNumber(args.TOP) * -1
      };

      options.left -= options.width / 2;
      options.top -= options.height / 2;

      const url = `https://www.yout-ube.com/watch?v=${id}&t=${startTime}&fullscreen=yes`;
      if (PLAYER_MODE === "canvas") {
        if (canvasPlayer?._ytVidId === id) updateCanvasPlayer(options);
        else {
          closeCanvasPlayer();
          createCanvasPlayer(url, options);
          canvasPlayer._ytVidId = id;
        }
      } else {
        options.left += window.screen.width / 2;
        options.top += window.screen.height / 2;
        const params = Object.entries(options)
          .map((e) => e[0] + "=" + e[1])
          .join(",");

        const newWindow = window.open(url, "_blank", params);
        if (newWindow) {
          ytWindows.push([id, newWindow]);
          newWindow.focus();
        }
      }
    }

    closeYouTubeWindow(args) {
      const id = Cast.toString(args.VIDEO_ID);
      if (PLAYER_MODE === "canvas") closeCanvasPlayer();
      else {
        for (let i = ytWindows.length - 1; i >= 0; i--) {
          const item = ytWindows[i];
          if (item[1].closed) ytWindows.splice(i, 1);
          if (item[0] === id) {
            item[1]?.close();
            ytWindows.splice(i, 1);
          }
        }
      }
    }
  }
  
  Scratch.extensions.register(new YTOperationsSP());
})(Scratch);
