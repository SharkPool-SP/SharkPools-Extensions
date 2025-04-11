// Name: Geometry Dash API
// ID: GDapiSP
// Description: Fetch Geometry Dash statistics and information
// By: SharkPool & GDColon (https://gdcolon.com)

// Version V.1.5.21
// Thank you RobTop for Geometry Dash :)

(function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) throw new Error("Geometry Dash API must run unsandboxed");

  const menuIconURI = 
"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5MCIgaGVpZ2h0PSI5MCIgdmlld0JveD0iMCAwIDkwIDkwIj48ZGVmcz48cmFkaWFsR3JhZGllbnQgY3g9IjIzNy41NzciIGN5PSIxODAuNzU5IiByPSI1NS41MjkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iYSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMDBjN2ZmIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDBjN2ZmIiBzdG9wLW9wYWNpdHk9IjAiLz48L3JhZGlhbEdyYWRpZW50PjxyYWRpYWxHcmFkaWVudCBjeD0iMjI2Ljk5NCIgY3k9IjE4NC44NjgiIHI9IjMzLjQ3OCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJiIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMwMGRlZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMGRlZmYiIHN0b3Atb3BhY2l0eT0iMCIvPjwvcmFkaWFsR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik0wIDQ1QzAgMjAuMTQ3IDIwLjE0OCAwIDQ1IDBjMjQuODUzIDAgNDUgMjAuMTQ3IDQ1IDQ1UzY5Ljg1MyA5MCA0NSA5MEMyMC4xNDggOTAgMCA2OS44NTMgMCA0NSIgZmlsbD0iIzAwNGRlOCIvPjxwYXRoIGQ9Ik0yMzMuMDcgMTU3LjczN2MzMC4zMzItMTAuMDM2IDI3LjQyNyAzMi45NTYgMTUuMDcgMzcuMDQ1LTguMTk4IDIuNzEzLTE5LjEyNCAxMS40MjItMjcuMiAyMC4xMzgtLjk1NyAxLjAzMi05LjMyNC01Ljk5Ny0xNS40LTE1LjI0OC02LjAwMi05LjEzOC01Ljk1OC0yMi4xNi01Ljk5OC0yMy4zODUgMTAuNzUtOC4zNDUgMjAuNjE2LTE0LjI3NyAzMy41MjgtMTguNTUiIGZpbGw9InVybCgjYSkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xOTkuNTEyIC0xMzIuNSkiLz48cGF0aCBkPSJNMjI0LjI3NyAxNzAuOTg4YzE4LjI4Ny02LjA1MSAxNi41MzYgMTkuODY5IDkuMDg1IDIyLjMzNC03LjQ5IDIuNDc5LTE0LjgxMSA3Ljc5LTE5LjkgMTYuNjkzLTEuNzI0LTEuODczLTUuNjUtNi42MjgtOC4yOTMtMTEuNTMyLTIuNzQzLTUuMDktNC4xNzgtMTAuMzQxLTQuNDkyLTEyLjY5NiA3LjcxNC03Ljc4MiAxNC4yMTUtMTEuNjkzIDIzLjYtMTQuNzk5IiBmaWxsPSJ1cmwoI2IpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTk5LjUxMiAtMTMyLjUpIi8+PHBhdGggZD0ibTc4LjcxOCAzNC4wMzMtMjEuOSA0Mi45MTktNDIuNzQyLTIyLjI0NSAyMS45MDItNDIuOTJ6IiBmaWxsPSIjZmRjYzAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjAiLz48cGF0aCBkPSJNNDIuOTMzIDQ4LjQzMWM0LjEyMyAxMi44MjYgMTIuNDE1IDI2LjI0IDEyLjQxNSAyNi4yNGwtMzkuNzc2LTIwLjMyIDIwLjQ4NC0zOS42OTJzMi43NTQgMjAuOTQ2IDYuODc3IDMzLjc3MiIgZmlsbD0iI2ZmYTYwMCIgZmlsbC1ydWxlPSJldmVub2RkIi8+PHBhdGggZD0ibTY0LjM3MSAzNy4xNzQtMy41NzUgNi45MzctNi45MzYtMy41NzUgMy41NzQtNi45MzZ6bS0xNS42MDYtOC4wNDItMy41NzUgNi45MzQtNi45MzYtMy41NzMgMy41NzUtNi45MzZ6bTExLjQ5NCAyMy4yNi0zLjU3NSA2LjkzNi0yOC40MzctMTQuNjU1IDMuNTc0LTYuOTM3eiIgZmlsbD0iIzU5ZmFmYSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMCIvPjwvc3ZnPg==";
  const blockIconURI =
"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3Ny4zMzMiIGhlaWdodD0iNzcuMzMzIiB2aWV3Qm94PSIwIDAgNzcuMzMzIDc3LjMzMyI+PHBhdGggZD0iTTAgMzguNjY3QzAgMTcuMzEyIDE3LjMxMiAwIDM4LjY2NyAwczM4LjY2NyAxNy4zMTIgMzguNjY3IDM4LjY2Ny0xNy4zMTIgMzguNjY3LTM4LjY2NyAzOC42NjdTMCA2MC4wMjIgMCAzOC42NjciIGZpbGw9IiMwMDRkZTgiLz48cGF0aCBkPSJNNzAuOTg3IDI4LjMzMSA0OS4wODggNzEuMjQ5IDYuMzQ2IDQ5LjAwNGwyMS45MDItNDIuOTJ6IiBmaWxsPSIjZmRjYzAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjAiLz48cGF0aCBkPSJNMzUuMjAzIDQyLjcyOWM0LjEyMyAxMi44MjYgMTIuNDE1IDI2LjI0IDEyLjQxNSAyNi4yNEw3Ljg0MiA0OC42NDggMjguMzI2IDguOTU3czIuNzU0IDIwLjk0NSA2Ljg3NyAzMy43NzIiIGZpbGw9IiNmZmE2MDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjxwYXRoIGQ9Im01Ni42NDEgMzEuNDcyLTMuNTc1IDYuOTM2LTYuOTM3LTMuNTc0IDMuNTc1LTYuOTM3em0tMTUuNjA2LTguMDQzLTMuNTc1IDYuOTM1LTYuOTM2LTMuNTczIDMuNTc1LTYuOTM2em0xMS40OTQgMjMuMjYtMy41NzUgNi45MzdMMjAuNTE2IDM4Ljk3bDMuNTc1LTYuOTM2eiIgZmlsbD0iIzU5ZmFmYSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMCIvPjwvc3ZnPg==";

  const Cast = Scratch.Cast;

  const gamemodesGD = [
    "cube", "ship", "ball", "ufo", "wave",
    "robot", "spider", "swing", "jetpack"
  ];

  class GDapiSP {
    getInfo() {
      return {
        id: "GDapiSP",
        name: "Geometry Dash API",
        menuIconURI,
        blockIconURI,
        color1: "#004de8",
        blocks: [
          { blockType: Scratch.BlockType.LABEL, text: "Search Levels by URL" },
          {
            opcode: "reportResults",
            blockType: Scratch.BlockType.REPORTER,
            text: "fetch [menu] results of page [page] of levels from search [url]",
            arguments: {
              url: { type: Scratch.ArgumentType.STRING, defaultValue: "https://gdbrowser.com/search/test" },
              page: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 },
              menu: { type: Scratch.ArgumentType.STRING, menu: "searchFilter" }
            }
          },
          "---",
          {
            opcode: "createSearchURL",
            blockType: Scratch.BlockType.REPORTER,
            text: "create search URL with input [input]",
            arguments: {
              input: { type: Scratch.ArgumentType.STRING, defaultValue: "join-URL-strings-here" }
            }
          },
          {
            opcode: "buildURL",
            blockType: Scratch.BlockType.REPORTER,
            text: "search content: [query]",
            arguments: {
              query: { type: Scratch.ArgumentType.STRING, defaultValue: "*" }
            }
          },
          "---",
          {
            opcode: "levelLength",
            blockType: Scratch.BlockType.REPORTER,
            text: "level length from [size1] to [size2]",
            arguments: {
              size1: { type: Scratch.ArgumentType.STRING, menu: "size" },
              size2: { type: Scratch.ArgumentType.STRING, menu: "size" }
            }
          },
          {
            opcode: "levelDifficulty",
            blockType: Scratch.BlockType.REPORTER,
            text: "level difficulty from [difficulty1] to [difficulty2]",
            arguments: {
              difficulty1: { type: Scratch.ArgumentType.STRING, menu: "difficulty" },
              difficulty2: { type: Scratch.ArgumentType.STRING, menu: "difficulty" }
            }
          },
          {
            opcode: "demonDifficulty",
            blockType: Scratch.BlockType.REPORTER,
            text: "demon difficulty: [demon] demon",
            disableMonitor: true,
            arguments: {
              demon: { type: Scratch.ArgumentType.STRING, menu: "demonDifficulty" }
            }
          },
          {
            opcode: "rating",
            blockType: Scratch.BlockType.REPORTER,
            text: "star rating: [rating]",
            disableMonitor: true,
            arguments: {
              rating: { type: Scratch.ArgumentType.STRING, menu: "rating" }
            }
          },
          {
            opcode: "enableTag",
            blockType: Scratch.BlockType.REPORTER,
            text: "enable [tag] tag",
            arguments: {
              tag: { type: Scratch.ArgumentType.STRING, menu: "tags" }
            }
          },
          {
            opcode: "enableTypeTag",
            blockType: Scratch.BlockType.REPORTER,
            text: "enable [typeTag] type tag",
            arguments: {
              typeTag: { type: Scratch.ArgumentType.STRING, menu: "typeTags" }
            }
          },
          {
            opcode: "addSongFromID",
            blockType: Scratch.BlockType.REPORTER,
            text: "add [menu] song from Song ID: [id]",
            arguments: {
              menu: { type: Scratch.ArgumentType.STRING, menu: "songMenu" }, 
              id: { type: Scratch.ArgumentType.NUMBER, defaultValue: 396093 } 
            }
          },
          { blockType: Scratch.BlockType.LABEL, text: "Level Data Fetching" },
          {
            opcode: "fetchDataFromID",
            blockType: Scratch.BlockType.REPORTER,
            text: "fetch [menu] from level ID: [id]",
            arguments: { 
              menu: { type: Scratch.ArgumentType.STRING, menu: "fetchMenu" }, 
              id: { type: Scratch.ArgumentType.NUMBER, defaultValue: 82540637 } 
            }
          },
          {
            opcode: "featuredLvl",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "is level ID: [id] [menu]?",
            arguments: { 
              id: { type: Scratch.ArgumentType.NUMBER, defaultValue: 82540637 }, 
              menu: { type: Scratch.ArgumentType.STRING, menu: "levelMenu" },
            }
          },
          {
            opcode: "getExtraInfo",
            blockType: Scratch.BlockType.REPORTER,
            text: "fetch extra level info with ID: [id]",
            arguments: { 
              id: { type: Scratch.ArgumentType.NUMBER, defaultValue: 82540637 },
            }
          },
          { blockType: Scratch.BlockType.LABEL, text: "Profile Fetching" },
          {
            opcode: "fetchDataFromUser",
            blockType: Scratch.BlockType.REPORTER,
            text: "fetch [menu] count from user: [user]",
            arguments: { 
              menu: { type: Scratch.ArgumentType.STRING, menu: "userMenu" }, 
              user: { type: Scratch.ArgumentType.STRING, defaultValue: "SharkPool" } 
            }
          },
          {
            opcode: "fetchIconFromUser",
            blockType: Scratch.BlockType.REPORTER,
            text: "fetch [gamemode] icon ID from user: [user]",
            arguments: { 
              gamemode: { type: Scratch.ArgumentType.STRING, menu: "userGamemodes" }, 
              user: { type: Scratch.ArgumentType.STRING, defaultValue: "SharkPool" } 
            }
          },
          {
            opcode: "fetchIconColorFromUser",
            blockType: Scratch.BlockType.REPORTER,
            text: "fetch [color] from user: [user]",
            arguments: { 
              user: { type: Scratch.ArgumentType.STRING, defaultValue: "SharkPool" }, 
              color: { type: Scratch.ArgumentType.STRING, menu: "colorsP" },
            }
          },
          {
            opcode: "fetchPostsJSON",
            blockType: Scratch.BlockType.REPORTER,
            text: "fetch page [page] of posts JSON from user: [user]",
            arguments: { 
              user: { type: Scratch.ArgumentType.STRING, defaultValue: "SharkPool" }, 
              page: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 },
            }
          },
          { blockType: Scratch.BlockType.LABEL, text: "Asset Fishing" },
          {
            opcode: "fetchAsset",
            blockType: Scratch.BlockType.REPORTER,
            text: "fish for assets from [site] menu",
            arguments: { 
              site: { type: Scratch.ArgumentType.STRING, menu: "siteMenu" }, 
            }
          },
          {
            opcode: "fetchLevelAsset",
            blockType: Scratch.BlockType.REPORTER,
            text: "fish for assets from level menu ID: [id]",
            arguments: { 
              id: { type: Scratch.ArgumentType.NUMBER, defaultValue: 82540637 },
            }
          },
          {
            opcode: "fetchIcon",
            blockType: Scratch.BlockType.REPORTER,
            text: "fish for [type] icons with gamemode [gm] with ID [id]",
            arguments: { 
              type: { type: Scratch.ArgumentType.STRING, menu: "iconMenu" }, 
              gm: { type: Scratch.ArgumentType.STRING, menu: "gamemodes" }, 
              id: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 }
            }
          },
          {
            opcode: "fetchDifficulty",
            blockType: Scratch.BlockType.REPORTER,
            text: "fish for difficulty [type] with rate [menu]",
            arguments: { 
              type: { type: Scratch.ArgumentType.STRING, menu: "difficulties" }, 
              menu: { type: Scratch.ArgumentType.STRING, menu: "levelMenu" } 
            }
          }
        ],
        menus: {
          size: {
            acceptReporters: true,
            items: ["tiny", "short", "medium", "long", "XL", "platformer"]
          },
          difficulty: {
            acceptReporters: true,
            items: [
              "NA", "Auto", "Easy", "Normal", "Hard", "Harder", "Insane", "Demon"
            ]
          },
          demonDifficulty: ["Easy", "Medium", "Hard", "Insane", "Extreme"],
          difficulties: {
            acceptReporters: true,
            items: [
              "NA", "Auto", "Easy", "Normal", "Hard", "Harder", "Insane",
              "Easy Demon", "Medium Demon", "Hard Demon", "Insane Demon", "Extreme Demon"
            ]
          },
          colorsP: ["color 1", "color 2", "glow color"],
          searchFilter: ["Name", "ID", "All"],
          rating: ["starred", "no Star"],
          songMenu: ["built-in", "custom"],
          iconMenu: ["2.11", "2.2"],
          tags: {
            acceptReporters: true,
            items: ["featured", "epic", "two player", "coins", "original"]
          },
          typeTags: {
            acceptReporters: true,
            items: [
              "most downloaded", "most liked", "trending", "recent",
              "magic", "awarded", "featured", "daily", "weekly"
            ]
          },
          fetchMenu: {
            acceptReporters: true,
            items: [
              "Level Name", "Level Creator", "Level Description",
              "Difficulty", "Stars/Moons", "Downloads",
              "Level Length", "Likes",
              "Song in Use", "Object Count"
            ]
          },
          gamemodes: {
            acceptReporters: true,
            items: gamemodesGD
          },
          userGamemodes: {
            acceptReporters: true,
            items: gamemodesGD.concat("death effect")
          },
          siteMenu: {
            acceptReporters: true,
            items: [
              "Main", "Search", "Garage", "User Profile",
              "Leaderboard", "Achievements", "Gauntlets", "Lists",
              "Insert Custom URL Ending Here"
            ]
          },
          levelMenu: ["rated", "featured", "epic"],
          userMenu: {
            acceptReporters: true,
            items: [
              "stars", "moons", "diamonds", "secret coins", "user coins",
              "demons", "creator points", "global rank", "trophy ID"
            ]
          }
        }
      };
    }

    createSearchURL(args) { return `https://gdbrowser.com/search/${Cast.toString(args.input).replace("&","?")}` }

    buildURL(args) { return args.query }

    levelLength(args) {
      const sizeMapping = {
        "tiny": 0, "short": 1, "medium": 2,
        "long": 3, "XL": 4, "platformer": 5
      };
      const start = sizeMapping[Cast.toString(args.size1)] || 0;
      const end = sizeMapping[Cast.toString(args.size2)] || 0;
      return `&length=${Array.from({ length: end - start + 1 }, (_, i) => start + i).join(",")}`;
    }

    levelDifficulty(args) {
      const difficultyMapping = {
        "NA": -3, "Auto": -1,
        "Easy": 1, "Normal": 2, "Hard": 3,
        "Harder": 4, "Insane": 5, "Demon": -2
      };
      const start = difficultyMapping[Cast.toString(args.difficulty1).split(" ")[0]] || 0;
      const end = difficultyMapping[Cast.toString(args.difficulty2).split(" ")[0]] || 0;
      return `&diff=${Array.from({ length: end - start + 1 }, (_, i) => start + i).join(",")}`;
    }

    demonDifficulty(args) {
      const demonMapping = {"Easy": 1, "Medium": 2, "Hard": 3, "Insane": 4, "Extreme": 5 };
      return `&demonFilter=${demonMapping[Cast.toString(args.demon)] || 0}`;
    }

    rating(args) { return `&${Cast.toString(args.rating).replaceAll(" ", "")}` }

    enableTag(args) { return `&${args.tag === "two player" ? "twoPlayer" : Cast.toString(args.tag).replaceAll(" ", "")}` }

    enableTypeTag(args) { return `&type=${Cast.toString(args.typeTag).replaceAll(" ", "")}` }

    addSongFromID(args) {
      let url = `&songID=${args.id}`;
      if (Cast.toString(args.menu).toLowerCase() === "custom") url += "&customSong";
      return url;
    }

    fetchDataFromID(args) {
      const baseURL = "https://gdbrowser.com/";
      return fetch(baseURL + args.id)
        .then(response => response.text())
        .then(data => {
          switch (args.menu) {
            case "Level Name": return data.match(/<meta id="meta-title" property="og:title" content="(.+) by (.+)">/)?.[1] || "";
            case "Level Creator": return data.match(/<meta id="meta-title" property="og:title" content="(.+) by (.+)">/)?.[2] || "";
            case "Level Description": return data.match(/<div class="transparentBox center" style="position:absolute; bottom: 32%; left: 0; right: 0; width: 75vh; margin-left: auto; margin-right: auto">\s+<p class="pre" style="padding: 0 5%; white-space:normal">(.+)<\/p>\s+<\/div>/)?.[1] || "";
            case "Difficulty": return data.match(/property="og:description" content=".+\| [^|]+\| Difficulty: ([^|]+) \|/)?.[1] || "";
            case "Stars/Moons": return data.match(/property="og:description" content=".+\| Stars: (\d+) \|/)?.[1] || "";
            case "Downloads": return data.match(/property="og:description" content=".+\| Downloads: (\d+) \|/)?.[1] || "";
            case "Level Length":
              data = data.match(/property="og:description" content=".+\| Length: (.+) \|/)?.[1] || "";
              return data.replace("Plat", "Platformer");
            case "Likes": return data.match(/property="og:description" content=".+\| Likes: (\d+) \|/)?.[1] || "";
            case "Song in Use": return data.match(/property="og:description" content=".+Song: (.+)">/)?.[1] || "";
            case "Object Count": return data.match(/.replace\("\[\[OBJECTINFO\]\]", "(\d+)"/)[1] || 0;
            default: return "Invalid menu";
          }
        })
        .catch(error => {
          console.error("Error fetching data:", error);
          return "Couldnt fetch data";
        });
    }

    fetchAsset(args) {
      const site = Cast.toString(args.site);
      let menu;
      if (site === "Main" || site === "Insert Custom URL Ending Here") menu = "";
      else if (site === "Garage") menu = "iconkit/";
      else if (site === "Lists") menu = "lists/*";
      else if (site === "User Profile") menu = "u/RobTop";
      else menu = site.toLowerCase().replaceAll(" ", "");
      menu = "https://gdbrowser.com/" + menu;
      return fetch(menu)
        .then((response) => { return response.text() })
        .then((text) => {
          const imageUrls = [];
          const assetPattern = /\/assets\/([^'"]+)\.(png)/g;
          let match;
          while ((match = assetPattern.exec(text)) !== null) {
            imageUrls.push(`https://gdbrowser.com/assets/${match[1]}.png`);
          }
          return JSON.stringify(imageUrls);
        })
        .catch((error) => {
          console.error(error);
          return "Fetch Failed";
        });
    }

    fetchIcon(args) {
      let gamemode = Cast.toString(args.gm).toLowerCase();
      gamemode = gamemode === "cube" ? "icon" : gamemode;
      const type = args.type === "2.2" || gamemode === "swing" || gamemode === "jetpack" ? "newpremade" : "premade";
      const ID = Math.max(1, Cast.toNumber(args.id));
      return `https://gdbrowser.com/iconkit/${type}/${gamemode}_${ID}.png`;
    }

    featuredLvl(args) {
      const url = "https://gdbrowser.com/" + args.id;
      return fetch(url)
        .then(response => response.text())
        .then(data => {
          switch (args.menu) {
            case "epic": return data.includes("epic.png");
            case "featured": return data.includes("featured.png");
            case "rated":
              const stars = data.match(/property="og:description" content=".+\| Stars: (\d+) \|/)?.[1] || -1;
              return (stars > 0);
          }
        })
        .catch(error => {
          console.error("Error fetching data: ", error);
          return "Error fetching data";
        });
    }

    fetchLevelAsset(args) {
      return fetch("https://gdbrowser.com/" + args.id)
        .then((response) => { return response.text() })
        .then((text) => {
          const imageUrls = [];
          const assetPattern = /\/assets\/([^""]+)\.(png)/g;
          let match;
          while ((match = assetPattern.exec(text)) !== null) {
            imageUrls.push(`https://gdbrowser.com/assets/${match[1]}.png`);
          }
          return JSON.stringify(imageUrls.join(", "));
        })
        .catch((error) => {
          console.error(error);
          return "Fetch Failed";
        });
    }

    fetchDifficulty(args) {
      let type = Cast.toString(args.type).toLowerCase();
      type = type.replace(" ", "-");
      type = type === "na" ? "unrated" : type;
      if (type.includes("demon")) {
        const parts = type.split("-");
        parts.push(parts.shift());
        type = parts.join("-");
      }
      const rating = args.menu === "rated" ? "" : "-" + Cast.toString(args.menu).toLowerCase();
      let url = "https://gdbrowser.com/assets/difficulties/$#.png"
      return url.replace("#", rating).replace("$", type);
    }

    fetchDataFromUser(args) {
      return fetch("https://gdbrowser.com/u/" + args.user)
        .then((response) => { return response.text() })
        .then((data) => {
          switch (args.menu.toLowerCase()) {
            case "stars": return data.match(/<span id="stars">(\d+)/)?.[1] || "";
            case "moons": return data.match(/<span id="moons">(\d+)/)?.[1] || "";
            case "diamonds": return data.match(/<span id="diamonds">(\d+)/)?.[1] || "";
            case "creator points": return data.match(/<span id="cp">(\d+)/)?.[1] || "";
            case "secret coins": return data.match(/<span id="coins">(\d+)/)?.[1] || "";
            case "user coins": return data.match(/<span id="usercoins">(\d+)/)?.[1] || "";
            case "demons": return data.match(/<span id="demons">(\d+)/)?.[1] || "";
            case "global rank": return data.match(/parseInt\("(\d+)"\)/)?.[1] || "";
            case "trophy id":
              const ranking = data.match(/parseInt\("(\d+)"\)/)?.[1] || "";
              let trophy = 0;
              if (ranking < 2) trophy = 1;
              else if (ranking <= 10) trophy = 2;
              else if (ranking <= 50) trophy = 3;
              else if (ranking <= 100) trophy = 4;
              else if (ranking <= 200) trophy = 5;
              else if (ranking <= 500) trophy = 6;
              else if (ranking <= 1000) trophy = 7;
              return trophy;
          }
        })
        .catch((error) => {
          console.error(error);
          return "Fetch Failed";
        });
    }

    fetchIconFromUser(args) {
      let gamemode = Cast.toString(args.gamemode).toLowerCase();
      if (gamemode === "cube") gamemode = "icon";
      return fetch("https://gdbrowser.com/u/" + args.user)
        .then((response) => response.text())
        .then((data) => {
          if (gamemode === "death effect") return data.match(/title="Death Effect (\d+)".*?>/)?.[1] || "";
          else return (data.match(new RegExp(`gdicon iconID=(\\d+) iconForm="${gamemode}"`)) || [])[1] || "";
        })
        .catch((error) => {
          console.error(error);
          return "Fetch Failed";
        });
    }

    fetchIconColorFromUser(args) {
      return fetch("https://gdbrowser.com/u/" + args.user)
        .then((response) => response.text())
        .then((data) => {
          switch (args.color) {
            case "color 1": return data.match(/<gdicon.*?iconForm="icon".*?col1="(\d+)".*?>/)?.[1] || "";
            case "color 2": return data.match(/<gdicon.*?iconForm="icon".*?col2="(\d+)".*?>/)?.[1] || "";
            case "glow color":
            case "enabled glow": return data.match(/<gdicon.*?iconForm="icon".*?colG="(\d+)".*?>/)?.[1] || "";
          }
        })
        .catch((error) => {
          console.error(error);
          return "Fetch Failed";
        });
    }

    fetchPostsJSON(args) {
      const page = Math.max(0, Cast.toNumber(args.page) - 1);
      return fetch("https://gdbrowser.com/u/" + args.user)
        .then((response) => response.text())
        .then((data) => {
          const userID = data.match(/Fetch\(`\.\.\/api\/comments\/(\d+)\?type=profile&page=\${page}`\)/)?.[1] || "";
          const newURL = `https://gdbrowser.com/api/comments/${userID}?type=profile&page=${page}`;
          return fetch(newURL)
            .then((response) => response.text())
            .then((data) => { return JSON.stringify(JSON.parse(data)) })
            .catch((error) => {
              console.error(error);
              return "Fetch Failed";
            });
        })
        .catch((error) => {
          console.error(error);
          return "Fetch Failed";
        });
    }

    getExtraInfo(args) {
      return fetch("https://gdbrowser.com/api/level/" + args.id)
        .then((response) => response.text())
        .then((data) => { return data })
        .catch((error) => {
          console.error(error);
          return "Fetch Failed";
        });
    }

    reportResults(args) {
      let url = Cast.toString(args.url);
      const page = Math.max(0, Cast.toNumber(args.page) - 1);
      if (url.includes("https://gdbrowser.com/")) url = url.replace("https://gdbrowser.com/", "");
      if (!url.includes("search/")) url = "search/" + url;

      url = "https://gdbrowser.com/api/" + url + `&page=${page}`;
      url = url.replace("&","?");
      return fetch(url)
        .then((response) => response.text())
        .then((data) => {
          const dataArray = JSON.parse(data);
          switch (args.menu) {
            case "Name": return  JSON.stringify(dataArray.map(item => item.name));
            case "ID": return  JSON.stringify(dataArray.map(item => item.id));
            case "All": return JSON.stringify(dataArray);
          }
        })
        .catch((error) => {
          console.error(error);
          return "Fetch Failed! Most Likely a Invalid Search Link...";
        });
    }
  }

  Scratch.extensions.register(new GDapiSP());
})(Scratch);
