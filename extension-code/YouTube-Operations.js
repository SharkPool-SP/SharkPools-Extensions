// Name: YouTube Operations
// ID: SPyoutubeoperations
// Description: Fetch and play Youtube videos and statistics in your project.
// By: SharkPool and Nekl300

// Version V.1.5.3

(function (Scratch) {
  "use strict";
  
  if (!Scratch.extensions.unsandboxed) throw new Error("This Extension must run unsandboxed");

  const menuIconURI =
"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxNDUuMzU3NjQiIGhlaWdodD0iMTQ1LjM1NzY0IiB2aWV3Qm94PSIwLDAsMTQ1LjM1NzY0LDE0NS4zNTc2NCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE2Ny4zMjExOCwtMTA3LjMyMTE4KSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0xNjcuMzIxMTgsMTgwYzAsLTQwLjEzOTQgMzIuNTM5NDIsLTcyLjY3ODgyIDcyLjY3ODgyLC03Mi42Nzg4MmM0MC4xMzk0LDAgNzIuNjc4ODIsMzIuNTM5NDIgNzIuNjc4ODIsNzIuNjc4ODJjMCw0MC4xMzk0IC0zMi41Mzk0Miw3Mi42Nzg4MiAtNzIuNjc4ODIsNzIuNjc4ODJjLTQwLjEzOTQsMCAtNzIuNjc4ODIsLTMyLjUzOTQyIC03Mi42Nzg4MiwtNzIuNjc4ODJ6IiBmaWxsPSIjZmYwMDAwIiBzdHJva2U9IiMwMDAwMDAiLz48cGF0aCBkPSJNMjY2LjczNTExLDE4My45NjIxN2MtMTAuNTg2MzgsNS44NTkwNiAtMzAuMDk5NDcsMTYuNjU4NjIgLTM2LjI4NjY5LDIwLjA4Mjk1Yy0zLjY5NDk2LDIuMDQ0OTkgLTcuOTEyMTYsMS4wMzg2NiAtNy45MTIxNiwtMy45MTI3OGMwLC0xMS43NTY5MiAwLC0zMi41OTcxNSAwLC0zOS4zNzEwMWMwLC00LjE4NDE2IDMuNTIzNywtNy4wNTM5NiA2Ljc2OTcsLTUuMjU3NDVjNi4wMDQyNSwzLjMyMzA3IDI2LjUwMDE1LDE0LjY2NjU3IDM3LjQyODg5LDIwLjcxNTExYzQuMjA2MzgsMi4zMjgwMyA0LjIwMDQ2LDUuNDE4NTYgMC4wMDAyNSw3Ljc0MzE4eiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSJub25lIi8+PC9nPjwvZz48L3N2Zz4=";

  const blockIconURI =
"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxNjguOTYyNzMiIGhlaWdodD0iMTY4Ljk2MjczIiB2aWV3Qm94PSIwLDAsMTY4Ljk2MjczLDE2OC45NjI3MyI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE1NS41MTg2NCwtOTUuNTE4NjQpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTE1NS41MTg2NCwxODBjMCwtNDYuNjU3NzYgMzcuODIzNiwtODQuNDgxMzYgODQuNDgxMzYsLTg0LjQ4MTM2YzQ2LjY1Nzc2LDAgODQuNDgxMzYsMzcuODIzNiA4NC40ODEzNiw4NC40ODEzNmMwLDQ2LjY1Nzc2IC0zNy44MjM2LDg0LjQ4MTM2IC04NC40ODEzNiw4NC40ODEzNmMtNDYuNjU3NzYsMCAtODQuNDgxMzYsLTM3LjgyMzYgLTg0LjQ4MTM2LC04NC40ODEzNnoiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzAwMDAwMCIvPjxwYXRoIGQ9Ik0xNjcuMzIxMTgsMTgwYzAsLTQwLjEzOTQgMzIuNTM5NDIsLTcyLjY3ODgyIDcyLjY3ODgyLC03Mi42Nzg4MmM0MC4xMzk0LDAgNzIuNjc4ODIsMzIuNTM5NDIgNzIuNjc4ODIsNzIuNjc4ODJjMCw0MC4xMzk0IC0zMi41Mzk0Miw3Mi42Nzg4MiAtNzIuNjc4ODIsNzIuNjc4ODJjLTQwLjEzOTQsMCAtNzIuNjc4ODIsLTMyLjUzOTQyIC03Mi42Nzg4MiwtNzIuNjc4ODJ6IiBmaWxsPSIjZmYwMDAwIiBzdHJva2U9IiMwMDAwMDAiLz48cGF0aCBkPSJNMjcxLjkzNjIzLDE4NC45NjYyOGMtMTMuMjY5MjQsNy4zNDM5IC0zNy43Mjc0NCwyMC44ODAzNCAtNDUuNDgyNjYsMjUuMTcyNDhjLTQuNjMxMzYsMi41NjMyNCAtOS45MTczLDEuMzAxODggLTkuOTE3MywtNC45MDQzOGMwLC0xNC43MzY0MiAwLC00MC44NTgxIDAsLTQ5LjM0ODYzYzAsLTUuMjQ0NTMgNC40MTY3LC04Ljg0MTYxIDguNDg1MzEsLTYuNTg5ODJjNy41MjU4OCw0LjE2NTIyIDMzLjIxNTk2LDE4LjM4MzQ1IDQ2LjkxNDMzLDI1Ljk2NDg1YzUuMjcyMzgsMi45MTgwMSA1LjI2NDk2LDYuNzkxNzYgMC4wMDAzMSw5LjcwNTV6IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9Im5vbmUiLz48L2c+PC9nPjwvc3ZnPg==";

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
          "---",
          {
            opcode: "openYouTubeLinkInNewWindow",
            blockType: Scratch.BlockType.COMMAND,
            text: "open video window with ID: [ID] with width: [WIDTH] height: [HEIGHT] x: [LEFT] y: [TOP] and play from start",
            arguments: {
              ID: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "dQw4w9WgXcQ"
              },
              WIDTH: { type: Scratch.ArgumentType.NUMBER, defaultValue: 800 },
              HEIGHT: { type: Scratch.ArgumentType.NUMBER, defaultValue: 600 },
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
              WIDTH: { type: Scratch.ArgumentType.NUMBER, defaultValue: 800 },
              HEIGHT: { type: Scratch.ArgumentType.NUMBER, defaultValue: 600 },
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
        ],
        menus: {
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

    openYouTubeLinkInNewWindow(args) { this.openYouTubeLinkInNewWindowAtTime(args) }

    openYouTubeLinkInNewWindowAtTime(args) {
      const videoId = args.ID;
      const minutes = Scratch.Cast.toNumber(args.MINUTES) || 0;
      const seconds = Scratch.Cast.toNumber(args.SECONDS) || 0;
      const startTime = minutes * 60 + seconds;
      const url = `https://www.yout-ube.com/watch?v=${videoId}&t=${startTime}`;
      let params = "fullscreen=yes";
      params += isNaN(args.WIDTH) ? "" : `,width=${Math.max(100, Math.min(args.WIDTH, window.screen.width))}`;
      params += isNaN(args.HEIGHT) ? "" : `,height=${Math.max(100, Math.min(args.HEIGHT, window.screen.height))}`;
      params += isNaN(args.LEFT) ? "" : `,left=${Math.max(0, Math.min(args.LEFT, window.screen.width))}`;
      params += isNaN(args.TOP) ? "" : `,top=${Math.max(0, Math.min(args.TOP, window.screen.height))}`;
      const newWindow = window.open(url, "_blank", params);
      if (newWindow) {
        this.youtubeWindows[videoId] = newWindow;
        newWindow.focus();
      }
    }

    closeYouTubeWindow(args) {
      const videoId = args.VIDEO_ID;
      const windowToClose = this.youtubeWindows[videoId];
      if (windowToClose) {
        windowToClose.close();
        delete this.youtubeWindows[videoId];
      }
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
          const jsonData = await response.json()
          if (stat == "author") return jsonData.author_url.slice(24);
          else if (stat == "title") return jsonData.title; 
          else return jsonData.thumbnail_url;
        }
        return "";
      }
      catch { return "Failed to Fetch" }
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
          let match;
          let pattern;
          switch (args.STAT) {
            case "description":
              pattern = /attributedDescriptionBodyText":{"content":"((?:[^"\\]|\\.)*)"/;
              match = text.match(pattern);
              return match[1].replace(/\\n/g, "\n");
            case "length":
              pattern = /"endTimeMs":"([^"]+)"/;
              match = text.match(pattern)[1];
              if (!match) {
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
  }
  
  Scratch.extensions.register(new SPyoutubeoperations());
})(Scratch);
