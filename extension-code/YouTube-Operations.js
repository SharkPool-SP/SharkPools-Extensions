// Name: YouTube Operations
// ID: SPyoutubeoperations
// Description: Fetch and play Youtube videos and statistics in your project.
// By: SharkPool and Nekl300

// Version V.1.7.0

(function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) throw new Error("YouTube Operations must run unsandboxed");

  const menuIconURI =
"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxNDUuMzU3NjQiIGhlaWdodD0iMTQ1LjM1NzY0IiB2aWV3Qm94PSIwLDAsMTQ1LjM1NzY0LDE0NS4zNTc2NCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE2Ny4zMjExOCwtMTA3LjMyMTE4KSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0xNjcuMzIxMTgsMTgwYzAsLTQwLjEzOTQgMzIuNTM5NDIsLTcyLjY3ODgyIDcyLjY3ODgyLC03Mi42Nzg4MmM0MC4xMzk0LDAgNzIuNjc4ODIsMzIuNTM5NDIgNzIuNjc4ODIsNzIuNjc4ODJjMCw0MC4xMzk0IC0zMi41Mzk0Miw3Mi42Nzg4MiAtNzIuNjc4ODIsNzIuNjc4ODJjLTQwLjEzOTQsMCAtNzIuNjc4ODIsLTMyLjUzOTQyIC03Mi42Nzg4MiwtNzIuNjc4ODJ6IiBmaWxsPSIjYzMwMDAwIiBzdHJva2U9IiMwMDAwMDAiLz48cGF0aCBkPSJNMTc2LjM2MTcyLDE4MGMwLC0zNS4xNDY0NSAyOC40OTE4MywtNjMuNjM4MjggNjMuNjM4MjgsLTYzLjYzODI4YzM1LjE0NjQ1LDAgNjMuNjM4MjgsMjguNDkxODMgNjMuNjM4MjgsNjMuNjM4MjhjMCwzNS4xNDY0NSAtMjguNDkxODMsNjMuNjM4MjggLTYzLjYzODI4LDYzLjYzODI4Yy0zNS4xNDY0NSwwIC02My42MzgyOCwtMjguNDkxODMgLTYzLjYzODI4LC02My42MzgyOHoiIGZpbGw9IiNmZjAwMDAiIHN0cm9rZT0iIzAwMDAwMCIvPjxwYXRoIGQ9Ik0yNjYuNzM1MTEsMTgzLjk2MjE3Yy0xMC41ODYzOCw1Ljg1OTA2IC0zMC4wOTk0NywxNi42NTg2MiAtMzYuMjg2NjksMjAuMDgyOTVjLTMuNjk0OTYsMi4wNDQ5OSAtNy45MTIxNiwxLjAzODY2IC03LjkxMjE2LC0zLjkxMjc4YzAsLTExLjc1NjkyIDAsLTMyLjU5NzE1IDAsLTM5LjM3MTAxYzAsLTQuMTg0MTYgMy41MjM3LC03LjA1Mzk2IDYuNzY5NywtNS4yNTc0NWM2LjAwNDI1LDMuMzIzMDcgMjYuNTAwMTUsMTQuNjY2NTcgMzcuNDI4ODksMjAuNzE1MTFjNC4yMDYzOCwyLjMyODAzIDQuMjAwNDYsNS40MTg1NiAwLjAwMDI1LDcuNzQzMTh6IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9Im5vbmUiLz48L2c+PC9nPjwvc3ZnPg==";

  const blockIconURI =
"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIzMy4yMDU3MyIgaGVpZ2h0PSIyNS4xOTYyMiIgdmlld0JveD0iMCwwLDMzLjIwNTczLDI1LjE5NjIyIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjIzLjM5NzE0LC0xNjcuNDAxODkpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMjU2LjYwMjg3LDE4MGMwLDAgMCw1Ljg1NzYxIC0wLjY5NDMzLDguNjYzNDdjLTAuMzgyNjIsMS41NDk1NyAtMS41MDYxNywyLjc2NzMxIC0yLjkzNTc0LDMuMTgyMDNjLTIuNTg4NDUsMC43NTI2MSAtMTIuOTcyODUsMC43NTI2MSAtMTIuOTcyODUsMC43NTI2MWMwLDAgLTEwLjM4NDI1LDAgLTEyLjk3MjgyLC0wLjc1MjYxYy0xLjQyOTU3LC0wLjQxNDcyIC0yLjU1MzAyLC0xLjYzMjQ2IC0yLjkzNTcsLTMuMTgyMDNjLTAuNjk0MjksLTIuODA1ODUgLTAuNjk0MjksLTguNjYzNDcgLTAuNjk0MjksLTguNjYzNDdjMCwwIDAsLTUuODU3NTkgMC42OTQyOSwtOC42NjM0MmMwLjM4MjY4LC0xLjU0OTU4IDEuNTA2MTIsLTIuNzY3MzMgMi45MzU3LC0zLjE4MjEzYzIuNTg4NTYsLTAuNzUyNTYgMTIuOTcyODIsLTAuNzUyNTYgMTIuOTcyODIsLTAuNzUyNTZjMCwwIDEwLjM4NDQsMCAxMi45NzI4NSwwLjc1MjU2YzEuNDI5NTcsMC40MTQ4IDIuNTUzMTMsMS42MzI1NCAyLjkzNTc0LDMuMTgyMTNjMC42OTE1NCwyLjgwNTgyIDAuNjk0MzMsOC42NjM0MiAwLjY5NDMzLDguNjYzNDJ6IiBmaWxsPSIjZmZmZmZmIi8+PHBhdGggZD0iTTI1NC4yODUwNiwxODBjMCwwIDAsNC42NDk2IC0wLjU5NzQsNi44NzY4Yy0wLjMyOTIsMS4yMyAtMS4yOTU5LDIuMTk2NiAtMi41MjU5LDIuNTI1OGMtMi4yMjcxLDAuNTk3NCAtMTEuMTYxOCwwLjU5NzQgLTExLjE2MTgsMC41OTc0YzAsMCAtOC45MzQ1OCwwIC0xMS4xNjE3NywtMC41OTc0Yy0xLjIzLC0wLjMyOTIgLTIuMTk2NjEsLTEuMjk1OCAtMi41MjU4NiwtMi41MjU4Yy0wLjU5NzM3LC0yLjIyNzIgLTAuNTk3MzcsLTYuODc2OCAtMC41OTczNywtNi44NzY4YzAsMCAwLC00LjY0OTU4IDAuNTk3MzcsLTYuODc2NzZjMC4zMjkyNiwtMS4yMzAwMSAxLjI5NTg2LC0yLjE5NjYyIDIuNTI1ODYsLTIuNTI1ODdjMi4yMjcxOSwtMC41OTczNyAxMS4xNjE3NywtMC41OTczNyAxMS4xNjE3NywtMC41OTczN2MwLDAgOC45MzQ3LDAgMTEuMTYxOCwwLjU5NzM3YzEuMjMsMC4zMjkyNiAyLjE5NjcsMS4yOTU4NiAyLjUyNTksMi41MjU4N2MwLjU5NSwyLjIyNzE4IDAuNTk3NCw2Ljg3Njc2IDAuNTk3NCw2Ljg3Njc2eiIgZmlsbD0iI2ZmMDAwMCIvPjxwYXRoIGQ9Ik0yMzcuMTQwMjYsMTc1LjcxNTMzbDcuNDIyNCw0LjI4NTA3bC03LjQyMjQsNC4yODV6IiBmaWxsPSIjZmZmZmZmIi8+PC9nPjwvZz48L3N2Zz4=";

  let player = "window";
  //let playerOpts = { controls: 1, autoplay: 1, loop: 0 } -- Stopped Working, see L:378

  // Modified From iFrame (Turbowarp -- Garbomuffin)
  let iframe = null;
  const createFrame = (src, args) => {
    iframe = document.createElement("iframe");
    iframe.style.width = `${Scratch.Cast.toNumber(args.WIDTH)}px`;
    iframe.style.height = `${Scratch.Cast.toNumber(args.HEIGHT)}px`;
    iframe.style.border = "none";
    iframe.style.position = "absolute";
    iframe.style.transform =
      `translate(${Scratch.Cast.toNumber(args.LEFT) - 50}%, ${Scratch.Cast.toNumber(args.TOP * -1) - 50}%)`;
    iframe.setAttribute("allowtransparency", "true");
    iframe.setAttribute("src", src);
    iframe.style.pointerEvents = "auto"; //playerOpts.controls ? "auto" : "none";
    Scratch.renderer.addOverlay(iframe, "scale-centered");
  };
  const closeFrame = () => {
    if (iframe) {
      Scratch.renderer.removeOverlay(iframe);
      iframe = null;
    }
  };
  Scratch.vm.runtime.on("RUNTIME_DISPOSED", closeFrame);
  Scratch.vm.runtime.on("PROJECT_STOP_ALL", closeFrame);

  class SPyoutubeoperations {
    constructor() { this.youtubeWindows = {} }
    getInfo() {
      return {
        id: "SPyoutubeoperations",
        name: "YouTube Operations",
        menuIconURI,
        blockIconURI,
        color1: "#FF0000",
        color2: "#c10000",
        color3: "#820000",
        blocks: [
          { blockType: Scratch.BlockType.LABEL, text: "Videos" },
          {
            opcode: "extractVideoID",
            blockType: Scratch.BlockType.REPORTER,
            text: "extract video ID from [URL]",
            arguments: {
              URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUJcmljayByb2xs"
              }
            }
          },
          "---",
          {
            opcode: "fetchStats",
            blockType: Scratch.BlockType.REPORTER,
            text: "fetch [STAT] count of video [VIDEO_ID]",
            arguments: {
              STAT: { type: Scratch.ArgumentType.STRING, menu: "STAT_OPTIONS" },
              VIDEO_ID: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "dQw4w9WgXcQ"
              }
            }
          },
          {
            opcode: "fetchtitle", //made with Nekl300
            blockType: Scratch.BlockType.REPORTER,
            text: "fetch [STAT] of video [VIDEO_ID]",
            arguments: {
              STAT: { type: Scratch.ArgumentType.STRING, menu: "STAT_OPTION" },
              VIDEO_ID: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "dQw4w9WgXcQ"
              }
            }
          },
          {
            opcode: "vid2MP4",
            blockType: Scratch.BlockType.REPORTER,
            text: "video [VIDEO_ID] to mp4",
            arguments: {
              VIDEO_ID: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "dQw4w9WgXcQ"
              }
            }
          },
          "---",
          {
            opcode: "getResults",
            blockType: Scratch.BlockType.REPORTER,
            text: "get video results from search [QUERY]",
            arguments: {
              QUERY: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "SharkPool"
              }
            }
          },
          { blockType: Scratch.BlockType.LABEL, text: "Users" },
          {
            opcode: "fetchUserThing",
            blockType: Scratch.BlockType.REPORTER,
            text: "fetch [THING] from channel [URL]",
            arguments: {
              URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "https://www.youtube.com/@SharkPool_SP"
              },
              THING: {
                type: Scratch.ArgumentType.STRING,
                menu: "USER_STUFF"
              }
            }
          },
          { blockType: Scratch.BlockType.LABEL, text: "Video Player" },
          {
            opcode: "setPlayer",
            blockType: Scratch.BlockType.COMMAND,
            text: "play videos on [TYPE]",
            arguments: {
              TYPE: {
                type: Scratch.ArgumentType.STRING,
                menu: "DISPLAY"
              }
            }
          },
          {
            opcode: "openYouTubeLinkInNewWindow",
            blockType: Scratch.BlockType.COMMAND,
            text: "open video window with ID: [ID] with width: [WIDTH] height: [HEIGHT] x: [LEFT] y: [TOP] and play from start",
            arguments: {
              ID: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "dQw4w9WgXcQ"
              },
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
              ID: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "dQw4w9WgXcQ"
              },
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
              VIDEO_ID: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "dQw4w9WgXcQ"
              }
            }
          }
        ],
        menus: {
          DISPLAY: ["window", "canvas"],
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

    async fetchStats(args) {
      try {
        const stat = args.STAT.toLowerCase().replace(" ", "");
        const response = await fetch(`https://returnyoutubedislikeapi.com/votes?videoId=${args.VIDEO_ID}`);
        if (response.ok) {
          const jsonData = await response.json();
          if (stat === "like") return jsonData.likes;
          else if (stat === "dislike") return jsonData.dislikes;
          else if (stat === "viewcount" || stat === "view count") return jsonData.viewCount;
          else if (stat === "rating") return jsonData.rating;
          else if (stat === "datecreated") return jsonData.dateCreated;
          else return "Invalid Selection";
        } else { return "" }
      } catch { return "Failed to Fetch" }
    }

    extractVideoID(args) {
      const url = args.URL;
      if (!url.includes("youtu.be")) {
        if (url.includes("https://www.youtube.com/watch?v")) {
          const convertedUrl = url.replace("www.youtube.com", "youtu.be");
          const convertedUrlObj = new URL(convertedUrl);
          const videoId = convertedUrlObj.searchParams.get("v");
          return videoId || "Invalid Link";
        } else { return "Invalid Link" }
      }
      return url.split("/").pop().split("&")[0] || "Invalid Link";
    }

    async fetchDateCreated(videoId) {
      try {
        const response = await fetch(`https://returnyoutubedislikeapi.com/video/${videoId}`);
        if (response.ok) {
          const jsonData = await response.json();
          return jsonData.dateCreated;
        }
        return "";
      } catch { return "Failed to Fetch" }
    }

    async fetchtitle(args) {
      const stat = args.STAT.toLowerCase().replace(" ", "");
      if (stat === "description" || stat === "length") {
        return await this.fetchOthersVideo(args);
      }
      try {
        const videoId = args.VIDEO_ID;
        const response = await fetch("https://www.youtube.com/oembed?url=http%3A//youtube.com/watch%3Fv%3D"+videoId+"&format=json");
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
      try {
        const response = await fetch(`https://yt2html5.com/?id=${args.VIDEO_ID}`);
        if (response.ok) {
          const jsonData = await response.text();
          const start = jsonData.indexOf(`"url":"`) + 7;
          const end = jsonData.indexOf("\"", start + 1);
          if (start !== -1 && end !== -1) return jsonData.substring(start, end);
        }
        return "";
      } catch { return "Failed to Fetch" }
    }

    async fetchUserThing(args) {
      if (args.URL.split("/").slice(-1)[0].split("/").length > 3) {
        args.URL = args.URL.substring(0, lastIndex) + args.URL.substring(lastIndex + 1);
      }
      if (args.THING === "total view count" || args.THING === "joined date") args.URL = args.URL + "/about";
      try {
        const response = await fetch("https://corsproxy.io?" + args.URL);
        if (response.ok) {
          const text = await response.text();
          let match;
          let pattern;
          switch (args.THING) {
            case "profile":
              pattern = /https:\/\/yt3\.googleusercontent\.com\/([a-zA-Z0-9_.+-=]+)/;
              match = text.match(pattern);
              return match && match[1] ? "https://yt3.googleusercontent.com/" + match[1] : "";
            case "subscriber count":
              pattern = /"},"subscriberCountText":{"accessibility":{"accessibilityData":{"label":"([0-9,]+\.[0-9]?\s?[mkbMKB]?)/;
              match = text.match(pattern);
              // this is very case sensitive for some reason...
              if (!match) match = text.match(/"},"subscriberCountText":{"accessibility":{"accessibilityData":{"label":"([0-9,]+\s?[mkbMKB]?)/);
              if (!match) match = text.match(/}},"subscriberCountText":{"accessibility":{"accessibilityData":{"label":"([0-9,]+\.[0-9]?[0-9]?\s?[mkbMKB]?)/);
              if (!match) match = text.match(/}},"subscriberCountText":{"accessibility":{"accessibilityData":{"label":"([0-9,]+)/);
              return match && match[1] ? match[1] : "";
            case "video count":
              pattern = /videosCountText":{"runs":\[{"text":"([^"]*)"/;
              match = text.match(pattern);
              return match && match[1] ? match[1] : "";
            case "total view count":
              pattern = /viewCountText":"([\d\s,]+)[^"]*","joinedDateText"/;
              match = text.match(pattern);
              return match && match[1] ? match[1] : "";
            case "joined date":
              pattern = /joinedDateText":{"content":"\w+\s([^"]*)/;
              match = text.match(pattern);
              return match && match[1] ? match[1].trim() : "";
            case "name":
              pattern = /"c4TabbedHeaderRenderer":\{"channelId":"[^"]+","title":"([^"]+)",/;
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
      args.VIDEO_ID = `https://www.youtube.com/watch?v=${args.VIDEO_ID}`;
      try {
        const response = await fetch("https://api.codetabs.com/v1/proxy?quest=" + args.VIDEO_ID);
        if (response.ok) {
          const text = await response.text();
          let match = "";
          let pattern;
          switch (args.STAT) {
            case "description":
              pattern = /attributedDescriptionBodyText":{"content":"((?:[^"\\]|\\.)*)"/;
              match = text.match(pattern);
              return match[1].replace(/\\n/g, "\n");
            case "length":
              pattern = /"endTimeMs":"([^"]+)"/;
              match = text.match(pattern);
              if (match && match[1]) match = match[1];
              else {
                console.error("error, finding failsafe...");
                pattern = /"lengthSeconds":"([^"]+)"/;
                match = text.match(pattern)[1] * 1000;
              }
              const totalSeconds = Math.floor(match / 1000);
              const hours = Math.floor(totalSeconds / 3600).toString().padStart(2, "0");
              const remainingSeconds = totalSeconds % 3600;
              const minutes = Math.floor(remainingSeconds / 60).toString().padStart(2, "0");
              const seconds = (remainingSeconds % 60).toString().padStart(2, "0");
              return `${hours}:${minutes}:${seconds}`;
            default: return "Invalid Selection";
          }
        }
        return "";
      } catch { return "Failed to Fetch" }
    }

    async getResults(args) {
      args.QUERY = encodeURIComponent(args.QUERY.replace(/ /g, "+"));
      args.QUERY = args.QUERY.replaceAll("%2B", "+");
      try {
        const response = await fetch(`https://api.codetabs.com/v1/proxy?quest=https://www.youtube.com/results?search_query=${args.QUERY}`);
        if (response.ok) {
          const text = await response.text();
          const pattern = /\/watch\?v=([a-zA-Z0-9_-]{11})/g;
          const matchArray = text.match(pattern) || [];
          return JSON.stringify(matchArray.map(match => match.slice(9)));
        }
        return "[]";
      } catch { return "Failed to Fetch" }
    }

    openYouTubeLinkInNewWindow(args) { this.openYouTubeLinkInNewWindowAtTime(args) }

    openYouTubeLinkInNewWindowAtTime(args) {
      const minutes = Scratch.Cast.toNumber(args.MINUTES) || 0;
      const seconds = Scratch.Cast.toNumber(args.SECONDS) || 0;
      const startTime = minutes * 60 + seconds;
      let url = `https://www.yout-ube.com/watch?v=${args.ID}&t=${startTime}&fullscreen=yes`;
      let params = "";

      params += `&width=${Math.max(100, Math.min(Scratch.Cast.toNumber(args.WIDTH), window.screen.width))}`;
      params += `&height=${Math.max(100, Math.min(Scratch.Cast.toNumber(args.HEIGHT), window.screen.height))}`;
      params += `&left=${Math.max(0, Math.min(Scratch.Cast.toNumber(args.LEFT), window.screen.width))}`;
      params += `&top=${Math.max(0, Math.min(Scratch.Cast.toNumber(args.TOP), window.screen.height))}`;
      /*
        params += `&autoplay=${playerOpts.autoplay}`;
        params += `&controls=${playerOpts.controls}&disablekb=${playerOpts.controls}`;
        params += `&loop=${playerOpts.loop}`;
        --These stopped working for some reason. No Idea Why. Keeping it in just in case
      */
      url += params;
      if (player === "window") {
        const newWindow = window.open(url, "_blank", params.replaceAll("&", ","));
        if (newWindow) {
          this.youtubeWindows[args.ID] = newWindow;
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
      const videoId = args.VIDEO_ID;
      if (player === "window") {
        const windowToClose = this.youtubeWindows[videoId];
        if (windowToClose) {
          windowToClose.close();
          delete this.youtubeWindows[videoId];
        }
      } else { closeFrame() }
    }

    setPlayer(args) { player = args.TYPE }
  }
  
  Scratch.extensions.register(new SPyoutubeoperations());
})(Scratch);
