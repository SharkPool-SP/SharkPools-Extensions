// Name: Fetch+
// ID: SPprogress
// Description: Fetch the content and progress of URLs in different encoded formats.
// By: SharkPool

// Version V.2.0.01

(function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) throw new Error("Fetch+ must run unsandboxed!");

  const menuIconURI =
"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMS41NjUiIGhlaWdodD0iMzEuNTY1IiB2aWV3Qm94PSIwIDAgMzEuNTY1IDMxLjU2NSI+PHBhdGggZD0iTS43NSAxNS43ODJDLjc1IDcuNDggNy40OC43NSAxNS43ODIuNzVzMTUuMDMyIDYuNzMgMTUuMDMyIDE1LjAzMi02LjczIDE1LjAzMi0xNS4wMzIgMTUuMDMyUy43NSAyNC4wODQuNzUgMTUuNzgyeiIgZmlsbD0iIzAwYmUxZSIgc3Ryb2tlPSIjMDA4MDEzIiBzdHJva2Utd2lkdGg9IjEuNSIvPjxwYXRoIGQ9Ik0yMy40MTcgMTQuNDY5YTguOTUgOC45NSAwIDAgMS04Ljk0OCA4Ljk0OCA4Ljk1IDguOTUgMCAxIDEgOC45NDgtOC45NDgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik0xOS4wNzEgMTQuNDc0YzAgMS45NDItLjMxNiAzLjczOS0uODY1IDUuMjA0LS44MyAyLjI2Mi0yLjE5NiAzLjczOC0zLjczOSAzLjczOHMtMi45MDQtMS40NzYtMy43MzktMy43MzhjLS41NDMtMS40NjUtLjg2LTMuMjYyLS44Ni01LjIwNCAwLTEuOTQ0LjMxNy0zLjc0Ljg2LTUuMjA1LjgzNS0yLjI3MyAyLjE5Ny0zLjc1IDMuNzQtMy43NSAxLjU0MiAwIDIuOTA4IDEuNDc3IDMuNzM4IDMuNzUuNTQ5IDEuNDY2Ljg2NCAzLjI2MS44NjQgNS4yMDVNNS45NTYgMTcuMDQ4aDE3LjAyNU01Ljk1NiAxMS44OTJoMTcuMDI1TTE0LjQ2OSAyMy40MlY1LjUyMSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PGcgc3Ryb2tlLXdpZHRoPSIwIj48cGF0aCBkPSJtMjUuMDAyIDI1LjExNy00Ljc4Mi00Ljc4MiAyLjI1Ny0yLjI1NyA0LjgxNyA0LjgxN2MuNDEyLjQxMi4yNDMgMS4zNzEtLjI5NyAxLjkyOHMtMS42MjQuNjY2LTEuOTk1LjI5NCIgZmlsbD0iIzAwYmUxZSIvPjxwYXRoIGQ9Ik0xNi44MjggMjAuOTQ5YTQuNDI4IDQuNDI4IDAgMSAxIDYuMjYyLTYuMjYzIDQuNDI4IDQuNDI4IDAgMCAxLTYuMjYyIDYuMjYzIiBmaWxsPSIjMDBiZTFlIi8+PHBhdGggZD0iTTE3LjU4MiAyMC4xOTVhMy4zNjMgMy4zNjMgMCAxIDEgNC43NTUtNC43NTUgMy4zNjMgMy4zNjMgMCAwIDEtNC43NTUgNC43NTUiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNMTguMzgyIDE5LjM5NWEyLjIzIDIuMjMgMCAxIDEgMy4xNTUtMy4xNTUgMi4yMyAyLjIzIDAgMCAxLTMuMTU1IDMuMTU1IiBmaWxsPSIjMDBiZTFlIi8+PHBhdGggZD0ibTI1LjMxMiAyNC4xMTUtNC4wMTMtNC4wMTIuOTQ2LS45NDUgMy45NzcgMy45NzdjLjI0NC4yNDQuMzExLjY2LjA0Ljk1MmEuNjc1LjY3NSAwIDAgMS0uOTUuMDI4IiBmaWxsPSIjZmZmIi8+PC9nPjwvc3ZnPg==";

  const runtime = Scratch.vm.runtime;

  let fetchQueue = 0;
  let fetchInfo = {
    response: "", status: "",
    fileSize: 0, progress: 0
  };

  runtime.on("PROJECT_STOP_ALL", () => { fetchQueue = 0 });
  runtime.on("PROJECT_START", () => { fetchQueue = 0 });

  class SPprogress {
    getInfo() {
      return {
        id: "SPprogress",
        name: "Fetch+",
        color1: "#00be1e",
        menuIconURI,
        blocks: [
          {
            opcode: "get",
            blockType: Scratch.BlockType.REPORTER,
            text: "fetch [URL] as [TYPE]",
            arguments: {
              URL: { type: Scratch.ArgumentType.STRING, defaultValue: "https://extensions.turbowarp.org/hello.txt" },
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "ENCODING" }
            },
          },
          {
            opcode: "fetchThis2",
            blockType: Scratch.BlockType.COMMAND,
            text: "fetch [URL] as [TYPE]",
            arguments: {
              URL: { type: Scratch.ArgumentType.STRING, defaultValue: "https://extensions.turbowarp.org/hello.txt" },
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "ENCODING" }
            },
          },
          {
            opcode: "fetchThis", blockType: Scratch.BlockType.COMMAND,
            text: "fetch [URL] as [TYPE] with size [SIZE] bytes as [TYPE]", hideFromPalette: true, // deprecated
            arguments: {
              URL: { type: Scratch.ArgumentType.STRING },
              SIZE: { type: Scratch.ArgumentType.NUMBER },
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "ENCODING" }
            },
          },
          "---",
          {
            opcode: "whenFetched",
            blockType: Scratch.BlockType.EVENT,
            isEdgeActivated: false,
            text: "when fetch finishes"
          },
          {
            opcode: "inProgress",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "fetch in progress?"
          },
          {
            opcode: "getProgress",
            blockType: Scratch.BlockType.REPORTER,
            text: "progress of fetch"
          },
          "---",
          {
            opcode: "getStatus",
            blockType: Scratch.BlockType.REPORTER,
            text: "status of fetch"
          },
          {
            opcode: "getSize",
            blockType: Scratch.BlockType.REPORTER,
            text: "file size of fetch"
          },
          {
            opcode: "getResponse",
            blockType: Scratch.BlockType.REPORTER,
            text: "last fetch data"
          }
        ],
        menus: {
          ENCODING: {
            acceptReporters: true,
            items: ["text", "data: URL", "base64", "hex"]
          }
        },
      };
    }

    // Helper Funcs
    removeQueue() {
      fetchQueue--;
      runtime.startHats("SPprogress_whenFetched");
    }

    blob2Data(blob, type) {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64 = reader.result.split(",")[1];
          switch (type) {
            case "data: URL":
              resolve(reader.result);
              break;
            case "base64":
              resolve(base64);
              break;
            case "hex":
              const hexArray = [...atob(base64)]
                .map((ch) => ch.charCodeAt(0).toString(16).padStart(2, "0")).join(" ");
              resolve(hexArray);
              break;
            default:
              blob.text().then((text) => resolve(text)); // return text
          }
        };
        reader.readAsDataURL(blob);
      });
    }

    // Block Funcs
    async get(args) {
      const url = args.URL;
      if (!url.includes("http")) return "";
      fetchInfo.progress = 0;
      fetchQueue++;
      try {
        const headResponse = await Scratch.fetch(url, { method: "HEAD" });
        if (!headResponse.ok) throw new Error("Failed to get HEAD response");
        const contentLength = headResponse.headers.get("Content-Length");
        const fileSize = contentLength ? parseInt(contentLength, 10) : 0;

        const response = await Scratch.fetch(url);
        fetchInfo.status = response.status;
        if (!response.ok) throw new Error("Failed to get content");
        const blob = await response.blob();
        fetchInfo.fileSize = fileSize || blob.size;
        const result = this.blob2Data(blob, args.TYPE);
        fetchInfo.response = result;
        fetchInfo.progress = 100;
        this.removeQueue();
        return result;
      } catch {
        fetchInfo = { response: "", status: "Fetch Failed, check Console", fileSize: 0, progress: -1 };
        this.removeQueue();
        return "";
      }
    }

    async fetchThis2(args) { return await this.fetchThis(args) }
    async fetchThis(args) {
      let url = args.URL;
      url = `${url}${(url.includes("?") && url.lastIndexOf("/") <= url.lastIndexOf("?")) ? "&" : "?"}cache=${Math.random()}`;
      if (!url.includes("http")) return;
  
      const approxSize = Scratch.Cast.toNumber(args.SIZE);
      fetchInfo.progress = 0;
      fetchQueue++;
      try {
        const headResponse = await Scratch.fetch(url, { method: "HEAD" });
        if (!headResponse.ok) throw new Error("Failed to get HEAD response");
        const contentLength = headResponse.headers.get("Content-Length");
        const fileSize = contentLength ? parseInt(contentLength, 10) : Scratch.Cast.toNumber(args.SIZE);
        const xhr = new XMLHttpRequest();
        xhr.responseType = "blob";
        xhr.onload = () => {
          if (xhr.status === 200) {
            fetchInfo = {
              response: this.blob2Data(xhr.response, args.TYPE),
              status: xhr.status,
              fileSize: xhr.response.size,
              progress: 100
            };
          } else {
            fetchInfo = { response: "", status: "Fetch Failed, check Console", fileSize: 0, progress: -1 };
          }
          this.removeQueue();
        };
        xhr.onerror = () => {
          fetchInfo = { response: "", status: "Fetch Failed, check Console", fileSize: 0, progress: -1 };
          this.removeQueue();
        };
        xhr.onprogress = (event) => {
          const total = event.total === 0 ? fileSize : event.total;
          fetchInfo.progress = Math.round((event.loaded / total) * 100);
        };
        xhr.open("GET", url, true);
        xhr.send();
      } catch {
        fetchInfo = { response: "", status: "Fetch Failed, check Console", fileSize: 0, progress: -1 };
        this.removeQueue();
      }
    }

    getStatus() { return fetchInfo.status }
    getResponse() { return fetchInfo.response }
    getSize() { return fetchInfo.fileSize }
    inProgress() { return fetchQueue > 0 }
    getProgress() { return `${fetchInfo.progress}%` }
  }

  Scratch.extensions.register(new SPprogress());
})(Scratch);
