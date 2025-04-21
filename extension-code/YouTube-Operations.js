// Name: YouTube Operations
// ID: SPyoutubeoperations
// Description: Fetch and play Youtube videos and statistics in your project.
// By: SharkPool and Nekl300
// License: MIT

// Version V.1.7.23

(function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) throw new Error("YouTube Operations must run unsandboxed");

  const menuIconURI =
"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDUuMzU4IiBoZWlnaHQ9IjE0NS4zNTgiIHZpZXdCb3g9IjAgMCAxNDUuMzU4IDE0NS4zNTgiPjxwYXRoIGQ9Ik0wIDcyLjY3OUMwIDMyLjUzOSAzMi41NCAwIDcyLjY3OSAwczcyLjY3OSAzMi41NCA3Mi42NzkgNzIuNjc5LTMyLjU0IDcyLjY3OS03Mi42NzkgNzIuNjc5UzAgMTEyLjgxOCAwIDcyLjY3OSIgZmlsbD0iI2MzMDAwMCIvPjxwYXRoIGQ9Ik05LjA0MSA3Mi42NzljMC0zNS4xNDYgMjguNDkyLTYzLjYzOCA2My42MzgtNjMuNjM4czYzLjYzOCAyOC40OTIgNjMuNjM4IDYzLjYzOC0yOC40OTIgNjMuNjM4LTYzLjYzOCA2My42MzhTOS4wNDEgMTA3LjgyNSA5LjA0MSA3Mi42NzkiIGZpbGw9InJlZCIvPjxwYXRoIGQ9Ik05OS40MTQgNzYuNjQxYy0xMC41ODYgNS44Ni0zMC4xIDE2LjY1OS0zNi4yODcgMjAuMDgzLTMuNjk1IDIuMDQ1LTcuOTEyIDEuMDM5LTcuOTEyLTMuOTEzdi0zOS4zN2MwLTQuMTg1IDMuNTI0LTcuMDU1IDYuNzctNS4yNThsMzcuNDI5IDIwLjcxNWM0LjIwNiAyLjMyOCA0LjIgNS40MTkgMCA3Ljc0MyIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==";
  const blockIconURI =
"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMy4yMDYiIGhlaWdodD0iMjUuMTk2IiB2aWV3Qm94PSIwIDAgMzMuMjA2IDI1LjE5NiI+PHBhdGggZD0iTTMzLjIwNiAxMi41OThzMCA1Ljg1OC0uNjk0IDguNjYzYy0uMzgzIDEuNTUtMS41MDcgMi43NjgtMi45MzYgMy4xODItMi41ODkuNzUzLTEyLjk3My43NTMtMTIuOTczLjc1M3MtMTAuMzg0IDAtMTIuOTczLS43NTNjLTEuNDMtLjQxNC0yLjU1My0xLjYzMi0yLjkzNi0zLjE4MkMwIDE4LjQ1NiAwIDEyLjU5OCAwIDEyLjU5OFMwIDYuNzQuNjk0IDMuOTM1QzEuMDc3IDIuMzg1IDIuMjAxIDEuMTY3IDMuNjMuNzUyIDYuMjE5IDAgMTYuNjAzIDAgMTYuNjAzIDBzMTAuMzg0IDAgMTIuOTczLjc1MmMxLjQzLjQxNSAyLjU1MyAxLjYzMyAyLjkzNiAzLjE4My42OTEgMi44MDUuNjk0IDguNjYzLjY5NCA4LjY2MyIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0zMC44ODggMTIuNTk4czAgNC42NS0uNTk3IDYuODc3YTMuNTggMy41OCAwIDAgMS0yLjUyNiAyLjUyNmMtMi4yMjcuNTk3LTExLjE2Mi41OTctMTEuMTYyLjU5N3MtOC45MzUgMC0xMS4xNjItLjU5N2EzLjU4IDMuNTggMCAwIDEtMi41MjYtMi41MjZjLS41OTctMi4yMjctLjU5Ny02Ljg3Ny0uNTk3LTYuODc3czAtNC42NS41OTctNi44NzdhMy41OCAzLjU4IDAgMCAxIDIuNTI2LTIuNTI2YzIuMjI3LS41OTcgMTEuMTYyLS41OTcgMTEuMTYyLS41OTdzOC45MzUgMCAxMS4xNjIuNTk3YTMuNTggMy41OCAwIDAgMSAyLjUyNiAyLjUyNmMuNTk1IDIuMjI3LjU5NyA2Ljg3Ny41OTcgNi44NzciIGZpbGw9InJlZCIvPjxwYXRoIGQ9Im0xMy43NDMgOC4zMTMgNy40MjMgNC4yODUtNy40MjMgNC4yODV6IiBmaWxsPSIjZmZmIi8+PC9zdmc+";

  const vm = Scratch.vm;
  const runtime = vm.runtime;

  // For fetching, we use this to bypass cors
  const proxy = "https://api.codetabs.com/v1/proxy?quest=";

  let player = "window", ytWindows = Object.create(null), iframe = null;
  const createFrame = (src, args) => {
    // Modified From iFrame (Turbowarp -- Garbomuffin)
    iframe = document.createElement("iframe");
    iframe.style.width = `${Scratch.Cast.toNumber(args.WIDTH)}px`;
    iframe.style.height = `${Scratch.Cast.toNumber(args.HEIGHT)}px`;
    iframe.style.border = "none";
    iframe.style.position = "absolute";
    iframe.style.transform =
      `translate(${Scratch.Cast.toNumber(args.LEFT) - 50}%, ${Scratch.Cast.toNumber(args.TOP * -1) - 50}%)`;
    iframe.setAttribute("allowtransparency", "true");
    iframe.setAttribute("src", src);
    iframe.style.pointerEvents = "auto";
    vm.renderer.addOverlay(iframe, "scale-centered");
  };
  const closeFrame = () => {
    if (iframe) {
      vm.renderer.removeOverlay(iframe);
      iframe = null;
    }
  };
  runtime.on("RUNTIME_DISPOSED", closeFrame);
  runtime.on("PROJECT_STOP_ALL", closeFrame);

  class SPyoutubeoperations {
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
              URL: { type: Scratch.ArgumentType.STRING, defaultValue: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUJcmljayByb2xs" }
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
            opcode: "fetchtitle", //made with Nekl300
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
            text: "get video results from search [QUERY]",
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
            text: "open video window with ID: [ID] with width: [WIDTH] height: [HEIGHT] x: [LEFT] y: [TOP] and play from start",
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
            text: "open video window with ID: [ID] with width: [WIDTH] height: [HEIGHT] x: [LEFT] y: [TOP] and play video at [MINUTES]:[SECONDS]",
            arguments: {
              ID: { type: Scratch.ArgumentType.STRING, defaultValue: "dQw4w9WgXcQ" },
              WIDTH: { type: Scratch.ArgumentType.NUMBER, defaultValue: 480 },
              HEIGHT: { type: Scratch.ArgumentType.NUMBER, defaultValue: 360 },
              LEFT: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
              TOP: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
              MINUTES: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
              SECONDS: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 }
            }
          },
          {
            opcode: "closeYouTubeWindow",
            blockType: Scratch.BlockType.COMMAND,
            text: "close video window with ID: [VIDEO_ID]",
            arguments: {
              VIDEO_ID: { type: Scratch.ArgumentType.STRING, defaultValue: "dQw4w9WgXcQ" }
            }
          }
        ],
        menus: {
          DISPLAY: ["window", "canvas"],
          EXPORT_TYPES: ["mp4", "mp3"],
          STAT_OPTIONS: {
            acceptReporters: true,
            items: ["like", "dislike", "view count", "rating", "date created"]
          },
          STAT_OPTION: {
            acceptReporters: true,
            items: ["author", "title", "thumbnail", "length", "description"]
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

    extractVideoID(args) {
      const url = Scratch.Cast.toString(args.URL);
      if (!url.includes("http")) return "Invalid Link";
      const urlObj = new URL(url);
      const path = urlObj.pathname;
      if (url.includes("?v=") || url.includes("&v=")) return urlObj.searchParams.get("v") || "Invalid Link";
      else return path.slice(path.lastIndexOf("/") + 1, path.length) || "Invalid Link";
    }

    async fetchStats(args) {
      try {
        const response = await Scratch.fetch(`https://returnyoutubedislikeapi.com/votes?videoId=${args.VIDEO_ID}`);
        if (!response.ok) return "";
        const jsonData = await response.json();
        switch (args.STAT) {
          case "like": return jsonData.likes;
          case "dislike": return jsonData.dislikes;
          case "view count": return jsonData.viewCount;
          case "rating": return jsonData.rating;
          case "date created": return jsonData.dateCreated;
          default: return "";
        }
      } catch { return "Failed to Fetch" }
    }

    async fetchDateCreated(videoId) {
      try {
        const response = await Scratch.fetch(`https://returnyoutubedislikeapi.com/video/${videoId}`);
        if (response.ok) {
          const jsonData = await response.json();
          return jsonData.dateCreated;
        }
        return "";
      } catch { return "Failed to Fetch" }
    }

    async fetchtitle(args) {
      const stat = Scratch.Cast.toString(args.STAT).toLowerCase().replace(" ", "");
      if (stat === "description" || stat === "length") return await this.fetchOthersVideo(args);
      try {
        const response = await Scratch.fetch(`https://www.youtube.com/oembed?url=http%3A//youtube.com/watch%3Fv%3D${args.VIDEO_ID}&format=json`);
        if (response.ok) {
          const jsonData = await response.json();
          if (stat == "author") return jsonData.author_url.slice(24);
          else if (stat == "title") return jsonData.title; 
          else return jsonData.thumbnail_url;
        }
        return "";
      } catch { return "Failed to Fetch" }
    }

    async vid2MP4(args) {
      const type = args.TYPE === "mp4" ? "getVideo" : "getAudio";
      const url = `${proxy}https://youtubeapi.up.railway.app/${type}?videoId=${args.VIDEO_ID}&quality=480p`;
      return url;
    }

    async fetchUserThing(args) {
      let url = Scratch.Cast.toString(args.URL);
      if (url.split("/").slice(-1)[0].split("/").length > 3) {
        url = url.substring(0, lastIndex) + url.substring(lastIndex + 1);
      }
      if (args.THING === "total view count" || args.THING === "joined date") url += "/about";
      try {
        const response = await Scratch.fetch(proxy + url);
        if (response.ok) {
          const text = await response.text();
          let match, pattern;
          switch (args.THING) {
            case "profile":
              pattern = /https:\/\/yt3\.googleusercontent\.com\/([a-zA-Z0-9_.+-=]+)/;
              match = text.match(pattern);
              return match && match[1] ? "https://yt3.googleusercontent.com/" + match[1] : "";
            case "subscriber count":
              pattern = /"metadataParts":\[\{"text":\{"content":"([^"]+)"/g;
              match = [...text.matchAll(pattern)];
              if (match && match[1]) {
                let count = match[1][1];
                count = count.split(/\s+/);
                return count.length > 2 ? `${count[0]} ${count[1]}` : count[0];
              }
              return "";
            case "video count":
              pattern = /"metadataParts":\[\{"text":\{"content":"(\d+)[^"]*"\}\},\{"text":\{"content":"(\d+)[^"]*"/;
              match = text.match(pattern);
              return match && match[2] ? match[2] : "";
            case "total view count":
              pattern = /viewCountText":"([\d\s,]+)[^"]*","joinedDateText"/;
              match = text.match(pattern);
              return match && match[1] ? match[1] : "";
            case "joined date":
              pattern = /joinedDateText":{"content":"\w+\s([^"]*)/;
              match = text.match(pattern);
              return match && match[1] ? match[1].trim() : "";
            case "name":
              pattern = /<meta\s+property="og:title"\s+content="([^"]+)">/;
              match = text.match(pattern);
              return match && match[1] ? match[1] : "";
            case "description":
              pattern = /"description":"((?:[^"\\]|\\.)*)"/;
              match = text.match(pattern);
              return match && match[1] ? match[1].replace(/\\n/g, "\n") : "";
            case "location":
              pattern = /"country":\{"simpleText":"([^"]+)"\}/;
              match = text.match(pattern);
              return match && match[1] ? match[1] : "Not Available";
            default: return "Invalid Selection";
          }
        }
        return "";
      } catch { return "Failed to Fetch" }
    }

    async fetchOthersVideo(args) {
      const url = encodeURIComponent(`https://www.youtube.com/watch?v=${args.VIDEO_ID}`);
      try {
        const response = await Scratch.fetch("https://corsproxy.io?url=" + url);
        if (response.ok) {
          const text = await response.text();
          let pattern, match = "";
          switch (args.STAT) {
            case "description":
              pattern = /attributedDescriptionBodyText":{"content":"((?:[^"\\]|\\.)*)"/;
              match = text.match(pattern);
              return match[1].replace(/\\n/g, "\n");
            case "length":
              pattern = /"approxDurationMs":"(\d+)"\s*,\s*"audioSampleRate"/;
              match = text.match(pattern);
              if (!match || !match[1]) return "";

              const totalSecs = parseInt(match[1]) / 1000;
              const hrs = Math.floor(totalSecs / 3600).toString().padStart(2, "0");
              const secsLeft = totalSecs % 3600;
              const mins = Math.floor(secsLeft / 60).toString().padStart(2, "0");
              const secs = (secsLeft % 60).toString().padStart(2, "0");
              return `${hrs}:${mins}:${secs}`;
            default: return "Invalid Selection";
          }
        }
        return "";
      } catch { return "Failed to Fetch" }
    }

    async getResults(args) {
      const query = encodeURIComponent(Scratch.Cast.toString(args.QUERY).replace(/ /g, "+"));
      try {
        const response = await Scratch.fetch(proxy + `https://www.youtube.com/results?search_query=${query}`);
        if (response.ok) {
          const text = await response.text();
          const matchArray = text.match(/\/watch\?v=([a-zA-Z0-9_-]{11})/g) || [];
          return JSON.stringify(matchArray.map(match => match.slice(9)));
        }
        return "[]";
      } catch { return "Failed to Fetch" }
    }

    setPlayer(args) { player = args.TYPE }

    openYouTubeLinkInNewWindow(args) { this.openYouTubeLinkInNewWindowAtTime(args) }

    openYouTubeLinkInNewWindowAtTime(args) {
      const minutes = Scratch.Cast.toNumber(args.MINUTES);
      const seconds = Scratch.Cast.toNumber(args.SECONDS);
      const startTime = minutes * 60 + seconds;
      let url = `https://www.yout-ube.com/watch?v=${args.ID}&t=${startTime}&fullscreen=yes`;
      let params = `&width=${Math.max(100, Math.min(Scratch.Cast.toNumber(args.WIDTH), window.screen.width))}`;
      params += `&height=${Math.max(100, Math.min(Scratch.Cast.toNumber(args.HEIGHT), window.screen.height))}`;
      params += `&left=${Math.max(0, Math.min(Scratch.Cast.toNumber(args.LEFT), window.screen.width))}`;
      params += `&top=${Math.max(0, Math.min(Scratch.Cast.toNumber(args.TOP), window.screen.height))}`;
      url += params;
      if (player === "window") {
        const newWindow = window.open(url, "_blank", params.replaceAll("&", ","));
        if (newWindow) {
          ytWindows[args.ID] = newWindow;
          const onWindLoad = () => {
            newWindow.removeEventListener("load", onWindLoad);
            newWindow.focus();
          };
          newWindow.addEventListener("load", onWindLoad);
        }
      } else {
        closeFrame();
        createFrame(url, args);
      }
    }

    closeYouTubeWindow(args) {
      const id = args.VIDEO_ID;
      if (player === "canvas") closeFrame();
      else {
        const selectWindow = ytWindows[id];
        if (selectWindow) {
          selectWindow.close();
          delete ytWindows[id];
        }
      }
    }
  }
  
  Scratch.extensions.register(new SPyoutubeoperations());
})(Scratch);
