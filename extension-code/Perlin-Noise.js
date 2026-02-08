// Name: Perlin Noise
// ID: SPperlin
// Description: Generate Perlin Noise
// By: SharkPool
// License: MIT

// Version V.1.1.0

(function(Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) throw new Error("Perlin Noise must run unsandboxed");

  const menuIconURI =
"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4NC4yODQiIGhlaWdodD0iODQuMjg0IiB2aWV3Qm94PSIwIDAgODQuMjg0IDg0LjI4NCI+PHBhdGggZD0iTTIgNDIuMTQyQzIgMTkuOTcyIDE5Ljk3MiAyIDQyLjE0MiAyczQwLjE0MiAxNy45NzIgNDAuMTQyIDQwLjE0Mi0xNy45NzIgNDAuMTQyLTQwLjE0MiA0MC4xNDJTMiA2NC4zMTIgMiA0Mi4xNDJ6IiBmaWxsPSIjYjY3MzczIiBzdHJva2U9IiM4MjUyNTIiIHN0cm9rZS13aWR0aD0iNCIvPjxwYXRoIGQ9Im0xMy45MDUgNTAuNzI1IDEyLjQ2LTE3LjYwM2MxLjYzMi0yLjMwNiA0LjI3OC0yLjMwNiA1LjkxIDBsMTIuNDYgMTcuNjAzYzEuNjMxIDIuMzA2LTguMzE1IDYuMzctMTQuODggNi4zNy02LjU2MyAwLTE3LjU4Mi00LjA2NC0xNS45NS02LjM3IiBmaWxsPSIjZmZmIi8+PHBhdGggZD0ibTMwLjU2MiA0MS45MzYgMTQuNjQzLTIwLjY4N2MxLjkxOC0yLjcxIDUuMDI3LTIuNzEgNi45NDUgMGwxNy45NSAyNy42MmMuOTEgMS4zOTkuNDQgMy4yMjgtMS42NDggMy44ODMtMy45OCAxLjI1LTEwLjYyNiAzLjE4Ny0xNS42MjUgMy44ODMtNy42MiAxLjA2Mi0xOC40MTggMS4yMjgtMjEuNTQ2LjQ0LTEyLjEzNi0zLjA2Mi0yLjYzNi0xMi40My0uNzE4LTE1LjEzOSIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Im0zMS40NjUgMzIuMTg0IDIuMS0xLjQ0N3MyLjU2NyAzLjA2NyA0LjI5NSA1Ljc2N2MyLjAzIDMuMTc0IDMuOTA0IDkuNTQzIDMuOTA0IDkuNTQzcy01LjUxNC03LjQ4My03LjQtMTAuMDIzYy0xLjM5Ny0xLjg3OS0yLjg5OS0zLjg0LTIuODk5LTMuODQiIGZpbGw9IiNiNjczNzMiLz48L3N2Zz4=";
  const blockIconURI =
"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1Ni43OTkiIGhlaWdodD0iNTYuNzk5IiB2aWV3Qm94PSIwIDAgNTYuNzk5IDU2Ljc5OSI+PHBhdGggZD0ibS4xNjMgMzYuOTgzIDEyLjQ2LTE3LjYwM2MxLjYzMi0yLjMwNiA0LjI3OC0yLjMwNiA1LjkxIDBsMTIuNDYgMTcuNjAzYzEuNjMxIDIuMzA2LTguMzE1IDYuMzctMTQuODggNi4zNy02LjU2MyAwLTE3LjU4Mi00LjA2NC0xNS45NS02LjM3IiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTE2LjgyIDI4LjE5NCAzMS40NjMgNy41MDdjMS45MTgtMi43MSA1LjAyNy0yLjcxIDYuOTQ1IDBsMTcuOTUgMjcuNjJjLjkxIDEuMzk5LjQ0IDMuMjI4LTEuNjQ4IDMuODgzLTMuOTggMS4yNS0xMC42MjYgMy4xODctMTUuNjI1IDMuODgzLTcuNjIgMS4wNjItMTguNDE4IDEuMjI4LTIxLjU0Ni40NC0xMi4xMzYtMy4wNjItMi42MzYtMTIuNDMtLjcxOC0xNS4xMzkiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJtMTcuNzIzIDE4LjQ0MiAyLjEtMS40NDdzMi41NjcgMy4wNjcgNC4yOTUgNS43NjdjMi4wMyAzLjE3NCAzLjkwNCA5LjU0MyAzLjkwNCA5LjU0M3MtNS41MTQtNy40ODMtNy40LTEwLjAyM2MtMS4zOTYtMS44NzktMi44OTktMy44NC0yLjg5OS0zLjg0IiBmaWxsPSIjYjY3MzczIi8+PC9zdmc+";

  const Cast = Scratch.Cast;

  const _canvasCache = document.createElement("canvas");
  const _ctxCache = _canvasCache.getContext("2d", { willReadFrequently: true });
  const cachedImage = new Image();

  let curNoise = "";
  let pixelInfo = new Uint8Array(0); 
  
  // [Seed, FreqX, FreqY, {w, h}]
  let noiseInfo = [1, 5, 5, { w: 100, h: 100 }];

  class SPperlin {
    getInfo() {
      return {
        id: "SPperlin",
        name: "Perlin Noise",
        color1: "#b67373",
        menuIconURI,
        blockIconURI,
        blocks: [
          {
            opcode: "setSeed",
            blockType: Scratch.BlockType.COMMAND,
            text: "set seed of noise to [SEED]",
            arguments: {
              SEED: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 }
            }
          },
          {
            opcode: "setFreq",
            blockType: Scratch.BlockType.COMMAND,
            text: "set frequency of noise to x [x] y [y]",
            arguments: {
              x: { type: Scratch.ArgumentType.NUMBER, defaultValue: 5 },
              y: { type: Scratch.ArgumentType.NUMBER, defaultValue: 5 }
            }
          },
          {
            opcode: "genNoise",
            blockType: Scratch.BlockType.COMMAND,
            text: "generate noise with width [W] height [H] octaves [O]",
            arguments: {
              W: { type: Scratch.ArgumentType.NUMBER, defaultValue: 100 },
              H: { type: Scratch.ArgumentType.NUMBER, defaultValue: 100 },
              O: { type: Scratch.ArgumentType.NUMBER, defaultValue: 2 }
            }
          },
          "---",
          {
            opcode: "returnNoise",
            blockType: Scratch.BlockType.REPORTER,
            text: "return noise as [TYPE]",
            disableMonitor: true,
            arguments: {
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "RETURN" }
            }
          },
          {
            opcode: "returnVal",
            blockType: Scratch.BlockType.REPORTER,
            text: "get value of noise at x [x] y [y]",
            arguments: {
              x: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
              y: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 }
            }
          },
        ],
        menus: {
          RETURN: ["svg", "encoded svg", "png", "pixel array"],
        }
      }
    }

    // Helper Funcs
    _processImage(src) {
      return new Promise((resolve) => {
        cachedImage.onload = () => {
          const w = cachedImage.width;
          const h = cachedImage.height;
          if (_canvasCache.width !== w || _canvasCache.height !== h) {
            _canvasCache.width = w;
            _canvasCache.height = h;
          }

          _ctxCache.drawImage(cachedImage, 0, 0);
          
          const imageData = _ctxCache.getImageData(0, 0, w, h);
          const data = imageData.data;
          pixelInfo = new Uint8Array(data.length / 4);
          for (let i = 0, j = 0; i < data.length; i += 4, j++) {
            pixelInfo[j] = (data[i] / 2.55) | 0; 
          }

          resolve();
        };
        cachedImage.src = src;
      });
    }

    // Block Funcs
    genNoise(args) {
      const w = Math.max(1, Cast.toNumber(args.W));
      const h = Math.max(1, Cast.toNumber(args.H));
      noiseInfo[3] = { w, h };

      const vals = [
        w, h,
        Math.abs(noiseInfo[1] / 100), Math.abs(noiseInfo[2] / 100),
        Math.min(Cast.toNumber(args.O), 100)
      ];

      curNoise =
      `<svg width="${vals[0]}" height="${vals[1]}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <filter id="a">
            <feTurbulence type="fractalNoise" seed="${noiseInfo[0]}" baseFrequency="${vals[2]},${vals[3]}" numOctaves="${vals[4]}" result="turbulence"></feTurbulence>
            <feColorMatrix type="saturate" values="0"></feColorMatrix>
          </filter>
          <rect width="100%" height="100%" fill="black" />
          <rect width="100%" height="100%" style="filter: url(#a)" />
        </svg>
      `;

      return this._processImage(`data:image/svg+xml;base64,${btoa(curNoise)}`);
    }

    setSeed(args) { 
      noiseInfo[0] = Cast.toNumber(args.SEED); 
    }

    setFreq(args) {
      noiseInfo[1] = Cast.toNumber(args.x);
      noiseInfo[2] = Cast.toNumber(args.y);
    }

    returnNoise(args) {
      if (args.TYPE === "encoded svg") return `data:image/svg+xml;base64,${btoa(curNoise)}`;

      if (args.TYPE === "png") {
        if (!curNoise) return "";
        return _canvasCache.toDataURL();
      }

      if (args.TYPE === "pixel array") {
        if (pixelInfo.length === 0) return "[]";

        const pixelArray = Array.from(pixelInfo);
        return vm.extensionManager._loadedExtensions.has("SPjson") ?
          pixelArray : JSON.stringify(pixelArray);
      }

      return curNoise.trim();
    }

    returnVal(args) {
      if (!curNoise || pixelInfo.length === 0) return 0;

      const x = Math.round(Cast.toNumber(args.x) + (noiseInfo[3].w / 2));
      const y = Math.round((Cast.toNumber(args.y) * -1) + (noiseInfo[3].h / 2));

      const index = y * noiseInfo[3].w + x;
      return pixelInfo[index] ?? 0;
    }
  }
  
  Scratch.extensions.register(new SPperlin());
})(Scratch);
