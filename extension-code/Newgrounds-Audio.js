// Name: Newgrounds Audio
// ID: SPaudioNG
// Description: Fetch Audio Tracks from Newgrounds
// By: SharkPool

// Version V.2.0.0

(function (Scratch) {
  "use strict";

  if (!Scratch.extensions.unsandboxed) throw new Error("Newgrounds Audio must run unsandboxed");

  const menuIconURI =
"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjkuMTc4IiBoZWlnaHQ9IjEyOS4xNzgiIHZpZXdCb3g9IjAgMCAxMjkuMTc4IDEyOS4xNzgiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCB4MT0iMjQwIiB5MT0iMTUzLjM3IiB4Mj0iMjQwIiB5Mj0iMjM1LjA0NiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJhIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZjlkMDAiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZjBiMzMiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNMCA2NC41ODlDMCAyOC45MTcgMjguOTE3IDAgNjQuNTg5IDBzNjQuNTg5IDI4LjkxNyA2NC41ODkgNjQuNTg5LTI4LjkxNyA2NC41ODktNjQuNTg5IDY0LjU4OVMwIDEwMC4yNjEgMCA2NC41ODkiIGZpbGw9IiNiZjVmMWIiLz48cGF0aCBkPSJNNi43MDkgNjQuNTg5YzAtMzEuOTY3IDI1LjkxMy01Ny44OCA1Ny44OC01Ny44OHM1Ny44OCAyNS45MTMgNTcuODggNTcuODgtMjUuOTEzIDU3Ljg4LTU3Ljg4IDU3Ljg4LTU3Ljg4LTI1LjkxMy01Ny44OC01Ny44OCIgZmlsbD0iI2ZmN2YyNCIvPjxwYXRoIGQ9Ik01NS4yMjIgMzcuOTU5YTYuNDU0IDYuNDU0IDAgMCAxIDYuNDU0IDYuNDU0djQ0LjExNmEyLjY5IDIuNjkgMCAwIDEtMi42OSAyLjY5aC01LjkxNWEyLjY5IDIuNjkgMCAwIDEtMi42OS0yLjY5VjUxLjgzM2EyLjY5IDIuNjkgMCAwIDAtMi42ODktMi42OWgtMS4wNzZhMi42OSAyLjY5IDAgMCAwLTIuNjg4IDIuNjl2MzYuNjk2YTIuNjkgMi42OSAwIDAgMS0yLjY5IDIuNjloLTUuOTE1YTIuNjkgMi42OSAwIDAgMS0yLjY5LTIuNjl2LTQ3Ljg4YTIuNjkgMi42OSAwIDAgMSAyLjY5LTIuNjl6bTM0Ljg2OSAwYTYuNDU0IDYuNDU0IDAgMCAxIDYuNDU0IDYuNDU0djExLjEwMWEyLjE1IDIuMTUgMCAwIDEtMi4xNTIgMi4xNTFoLTcuNTI5YTIuMTUgMi4xNSAwIDAgMS0yLjE1LTIuMTUxdi00Ljc1N2MwLS44OS0uNzIzLTEuNjEzLTEuNjE0LTEuNjEzaC0yLjY5Yy0uODkgMC0xLjYxMy43MjItMS42MTMgMS42MTN2MjcuNjY5YzAgLjU5NC40ODIgMS4wNzYgMS4wNzYgMS4wNzZoNC4zMDNjLjU5MyAwIDEuMDc1LS40ODIgMS4wNzUtMS4wNzZ2LTUuMzE1aC0xLjA3NWEyLjE1IDIuMTUgMCAwIDEtMi4xNTItMi4xNTJ2LTYuODgxYzAtMS4xODkuOTYzLTIuMTUyIDIuMTUyLTIuMTUyaDEwLjIxOGMxLjE4OCAwIDIuMTUuOTY0IDIuMTUgMi4xNTJ2MjAuNjg3YTYuNDU0IDYuNDU0IDAgMCAxLTYuNDUzIDYuNDU0SDczLjk1NmE2LjQ1NCA2LjQ1NCAwIDAgMS02LjQ1NS02LjQ1NFY0NC40MTNhNi40NTQgNi40NTQgMCAwIDEgNi40NTUtNi40NTR6IiBmaWxsPSJub25lIiBzdHJva2U9IiM0MDIwMDkiIHN0cm9rZS13aWR0aD0iMTIuNSIvPjxwYXRoIGQ9Ik0yMzAuNjMzIDE1My4zN2E2LjQ1NCA2LjQ1NCAwIDAgMSA2LjQ1NCA2LjQ1NHY0NC4xMTZhMi42OSAyLjY5IDAgMCAxLTIuNjkgMi42OWgtNS45MTVhMi42OSAyLjY5IDAgMCAxLTIuNjktMi42OXYtMzYuNjk2YTIuNjkgMi42OSAwIDAgMC0yLjY4OS0yLjY5aC0xLjA3NmEyLjY5IDIuNjkgMCAwIDAtMi42ODggMi42OXYzNi42OTZhMi42OSAyLjY5IDAgMCAxLTIuNjkgMi42OWgtNS45MTVhMi42OSAyLjY5IDAgMCAxLTIuNjktMi42OXYtNDcuODhhMi42OSAyLjY5IDAgMCAxIDIuNjktMi42OXptMzQuODY5IDBhNi40NTQgNi40NTQgMCAwIDEgNi40NTQgNi40NTR2MTEuMTAxYTIuMTUgMi4xNSAwIDAgMS0yLjE1MiAyLjE1MWgtNy41MjlhMi4xNSAyLjE1IDAgMCAxLTIuMTUtMi4xNTF2LTQuNzU3YzAtLjg5LS43MjMtMS42MTMtMS42MTQtMS42MTNoLTIuNjljLS44OSAwLTEuNjEzLjcyMi0xLjYxMyAxLjYxM3YyNy42NjljMCAuNTk0LjQ4MiAxLjA3NiAxLjA3NiAxLjA3Nmg0LjMwM2MuNTkzIDAgMS4wNzUtLjQ4MiAxLjA3NS0xLjA3NnYtNS4zMTVoLTEuMDc1YTIuMTUgMi4xNSAwIDAgMS0yLjE1Mi0yLjE1MnYtNi44ODFjMC0xLjE4OS45NjMtMi4xNTIgMi4xNTItMi4xNTJoMTAuMjE4YzEuMTg4IDAgMi4xNS45NjQgMi4xNSAyLjE1MnYyMC42ODdhNi40NTQgNi40NTQgMCAwIDEtNi40NTMgNi40NTRoLTE2LjEzNWE2LjQ1NCA2LjQ1NCAwIDAgMS02LjQ1NS02LjQ1NHYtNDAuMzUyYTYuNDU0IDYuNDU0IDAgMCAxIDYuNDU1LTYuNDU0eiIgZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTc1LjQxMSAtMTE1LjQxMSkiLz48L3N2Zz4=";
  const blockIconURI =
"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMzEuMTg5IiBoZWlnaHQ9IjEzMS4xODkiIHZpZXdCb3g9IjAgMCAxMzEuMTg5IDEzMS4xODkiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCB4MT0iMjQwIiB5MT0iMTQyLjUiIHgyPSIyNDAiIHkyPSIyNTcuNTE2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImEiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmOWQwMCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmMGIzMyIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik01Mi40MDQgMjguMDk0YTkuMDkgOS4wOSAwIDAgMSA5LjA4OCA5LjA4OHY2Mi4xMjVhMy43ODcgMy43ODcgMCAwIDEtMy43ODggMy43ODdoLTguMzNhMy43ODcgMy43ODcgMCAwIDEtMy43ODctMy43ODdWNDcuNjMxYTMuNzg3IDMuNzg3IDAgMCAwLTMuNzg3LTMuNzg3aC0xLjUxNWEzLjc4NyAzLjc4NyAwIDAgMC0zLjc4NiAzLjc4N3Y1MS42NzZhMy43ODcgMy43ODcgMCAwIDEtMy43ODcgMy43ODdoLTguMzMxYTMuNzg3IDMuNzg3IDAgMCAxLTMuNzg3LTMuNzg3VjMxLjg4MWEzLjc4NyAzLjc4NyAwIDAgMSAzLjc4Ny0zLjc4N3ptNDkuMTAyIDBhOS4wOSA5LjA5IDAgMCAxIDkuMDg4IDkuMDg4djE1LjYzM2EzLjAzIDMuMDMgMCAwIDEtMy4wMyAzLjAyOUg5Ni45NjJhMy4wMyAzLjAzIDAgMCAxLTMuMDI5LTMuMDN2LTYuNjk4YTIuMjcgMi4yNyAwIDAgMC0yLjI3Mi0yLjI3MmgtMy43ODdhMi4yNyAyLjI3IDAgMCAwLTIuMjcyIDIuMjcydjM4Ljk2M2MwIC44MzcuNjc4IDEuNTE1IDEuNTE1IDEuNTE1aDYuMDU5Yy44MzYgMCAxLjUxNC0uNjc4IDEuNTE0LTEuNTE1di03LjQ4NWgtMS41MTRhMy4wMyAzLjAzIDAgMCAxLTMuMDMtMy4wM3YtOS42OWEzLjAzIDMuMDMgMCAwIDEgMy4wMy0zLjAzaDE0LjM5YTMuMDMgMy4wMyAwIDAgMSAzLjAyOCAzLjAzdjI5LjEzMmE5LjA5IDkuMDkgMCAwIDEtOS4wODggOS4wODhINzguNzg0YTkuMDkgOS4wOSAwIDAgMS05LjA4OS05LjA4OFYzNy4xODJhOS4wOSA5LjA5IDAgMCAxIDkuMDktOS4wODh6IiBmaWxsPSJub25lIiBzdHJva2U9IiM0MDIwMDkiIHN0cm9rZS13aWR0aD0iMTUiLz48cGF0aCBkPSJNMjI2LjgxIDE0Mi41YTkuMDkgOS4wOSAwIDAgMSA5LjA4OCA5LjA4OHY2Mi4xMjVhMy43ODcgMy43ODcgMCAwIDEtMy43ODggMy43ODdoLTguMzNhMy43ODcgMy43ODcgMCAwIDEtMy43ODctMy43ODd2LTUxLjY3NmEzLjc4NyAzLjc4NyAwIDAgMC0zLjc4Ny0zLjc4N2gtMS41MTVhMy43ODcgMy43ODcgMCAwIDAtMy43ODYgMy43ODd2NTEuNjc2YTMuNzg3IDMuNzg3IDAgMCAxLTMuNzg3IDMuNzg3aC04LjMzMWEzLjc4NyAzLjc4NyAwIDAgMS0zLjc4Ny0zLjc4N3YtNjcuNDI2YTMuNzg3IDMuNzg3IDAgMCAxIDMuNzg3LTMuNzg3aDI4LjAyMnptNDkuMTAyIDBhOS4wOSA5LjA5IDAgMCAxIDkuMDg4IDkuMDg4djE1LjYzM2EzLjAzIDMuMDMgMCAwIDEtMy4wMyAzLjAyOWgtMTAuNjAyYTMuMDMgMy4wMyAwIDAgMS0zLjAyOS0zLjAzdi02LjY5OGEyLjI3IDIuMjcgMCAwIDAtMi4yNzItMi4yNzJoLTMuNzg3YTIuMjcgMi4yNyAwIDAgMC0yLjI3MiAyLjI3MnYzOC45NjNjMCAuODM3LjY3OCAxLjUxNSAxLjUxNSAxLjUxNWg2LjA1OWMuODM2IDAgMS41MTQtLjY3OCAxLjUxNC0xLjUxNVYxOTJoLTEuNTE0YTMuMDMgMy4wMyAwIDAgMS0zLjAzLTMuMDN2LTkuNjlhMy4wMyAzLjAzIDAgMCAxIDMuMDMtMy4wM2gxNC4zOWEzLjAzIDMuMDMgMCAwIDEgMy4wMjggMy4wM3YyOS4xMzJhOS4wOSA5LjA5IDAgMCAxLTkuMDg4IDkuMDg4SDI1My4xOWE5LjA5IDkuMDkgMCAwIDEtOS4wODktOS4wODh2LTU2LjgyNGE5LjA5IDkuMDkgMCAwIDEgOS4wOS05LjA4OHoiIGZpbGw9InVybCgjYSkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE3NC40MDYgLTExNC40MDYpIi8+PHBhdGggZD0iTTAgMTMxLjE4OFYwaDEzMS4xODh2MTMxLjE4OHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4=";

  // For basic fetching, we use this, its fast and reliable
  const proxy = "https://corsproxy.io?";
  // For file fetching, we must use this, its slower but works all the time
  const proxy2 = "https://api.codetabs.com/v1/proxy?quest=";

  let response = "";

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
            opcode: "fetchID",
            blockType: Scratch.BlockType.COMMAND,
            text: "fetch Track data with ID [ID]",
            arguments: {
              ID: { type: Scratch.ArgumentType.NUMBER, defaultValue: 505816 }
            }
          },
          {
            opcode: "findURL",
            blockType: Scratch.BlockType.REPORTER,
            text: "Track URL",
            disableMonitor: true
          },
          {
            opcode: "getTrackInfo",
            blockType: Scratch.BlockType.REPORTER,
            text: "[INFO] of Track",
            arguments: {
              INFO: { type: Scratch.ArgumentType.STRING, menu: "INFO" }
            }
          }
        ],
        menus: {
          INFO: {
            acceptReporters: true,
            items: [
              "Name", "Author", "Description", "Rating",
              "Release Date", "Raw File Size", "File Size",
              "Length", "Listens", "Downloads", "Vote Count"
            ]
          }
        }
      };
    }

    // Helper Funcs
    getDescTxt(element) {
      let descTxt = "";
      while (element) {
        if (element.nodeName === "P" || element.nodeName === "#text") descTxt += element.textContent;
        else if (element.nodeName === "SCRIPT") break;
        element = element.nextSibling;
      }
      return descTxt.trim();
    }

    // Block Funcs
    fetchID(args) {
      const url = `${proxy}https://www.newgrounds.com/audio/listen/${args.ID}`;
      return Scratch.fetch(url).then(response => {
        if (!response.ok) throw new Error("Error 404");
        return response.text();
      })
      .then(html => { response = html })
      .catch(e => { console.warn("Error:", e) });
    }

    findURL(args) {
      const html = response;
      if (html === "") return "Fetch an ID First!"
      const embedController = html.match(/new embedController\(\[{"url":"([^"]+)\?/);
      return proxy2 + embedController[1].replaceAll("\\", "");
    }

    getTrackInfo(args) {
      const html = response;
      if (html === "") return "Fetch an ID First!"
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const scriptTags = doc.querySelectorAll("script");
      let scriptTxt = null;
      scriptTags.forEach(tag => {
        if (tag.textContent.includes("var embed_controller = new embedController([")) scriptTxt = tag.textContent;
      });
      let element;
      switch (args.INFO) {
        case "Name":
          element = doc.querySelector("meta[property=\"og:title\"]");
          return element ? element.getAttribute("content") : "";
        case "Author": return (scriptTxt.match(/"artist":"([^"]+)"/) || [0,0])[1];
        case "Description":
          element = doc.querySelector(".pod-body#author_comments p");
          if (!element) element = doc.querySelector(".pod-body #author_comments");
          return element ? this.getDescTxt(element) : "";
        case "Rating":
          element = doc.querySelector("meta[itemprop=\"ratingValue\"]");
          return element ? element.getAttribute("content") / 2 : "";
        case "Release Date":
          element = doc.querySelector("meta[itemprop=\"datePublished\"]");
          return element ? element.getAttribute("content") : "";
        case "Raw File Size":
        case "File Size":
          const bytes = parseInt((scriptTxt.match(/"filesize":(\d+)/) || [0,0])[1], 10);
          if (args.INFO.startsWith("Raw")) return bytes;
          return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
        case "Length": return (scriptTxt.match(/"length":"([^"]+)"/) || [0,0])[1];
        case "Listens":
        case "Downloads":
        case "Vote Count":
          const properName = args.INFO === "Vote Count" ? "Votes" : args.INFO;
          const dtElements = doc.querySelectorAll("dt");
          for (const dt of dtElements) {
            const txt = dt.textContent.trim();
            if (txt === properName) {
              const val = dt.nextElementSibling.textContent.trim();
              return val.replaceAll(",", "");
            }
          }
          return 0;
        default: return "Invalid Menu Selection";
      }
    }
  }

  Scratch.extensions.register(new SPaudioNG());
})(Scratch);
