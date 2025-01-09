// Name: Perlin Noise
// ID: SPperlin
// Description: Generate Perlin Noise
// By: SharkPool

// Version V.1.0.1
  
(function(Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) throw new Error("Perlin Noise must run unsandboxed");

  const menuIconURI =
"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4NC4yODQiIGhlaWdodD0iODQuMjg0IiB2aWV3Qm94PSIwIDAgODQuMjg0IDg0LjI4NCI+PHBhdGggZD0iTTIgNDIuMTQyQzIgMTkuOTcyIDE5Ljk3MiAyIDQyLjE0MiAyczQwLjE0MiAxNy45NzIgNDAuMTQyIDQwLjE0Mi0xNy45NzIgNDAuMTQyLTQwLjE0MiA0MC4xNDJTMiA2NC4zMTIgMiA0Mi4xNDJ6IiBmaWxsPSIjYjY3MzczIiBzdHJva2U9IiM4MjUyNTIiIHN0cm9rZS13aWR0aD0iNCIvPjxwYXRoIGQ9Im0xMy45MDUgNTAuNzI1IDEyLjQ2LTE3LjYwM2MxLjYzMi0yLjMwNiA0LjI3OC0yLjMwNiA1LjkxIDBsMTIuNDYgMTcuNjAzYzEuNjMxIDIuMzA2LTguMzE1IDYuMzctMTQuODggNi4zNy02LjU2MyAwLTE3LjU4Mi00LjA2NC0xNS45NS02LjM3IiBmaWxsPSIjZmZmIi8+PHBhdGggZD0ibTMwLjU2MiA0MS45MzYgMTQuNjQzLTIwLjY4N2MxLjkxOC0yLjcxIDUuMDI3LTIuNzEgNi45NDUgMGwxNy45NSAyNy42MmMuOTEgMS4zOTkuNDQgMy4yMjgtMS42NDggMy44ODMtMy45OCAxLjI1LTEwLjYyNiAzLjE4Ny0xNS42MjUgMy44ODMtNy42MiAxLjA2Mi0xOC40MTggMS4yMjgtMjEuNTQ2LjQ0LTEyLjEzNi0zLjA2Mi0yLjYzNi0xMi40My0uNzE4LTE1LjEzOSIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Im0zMS40NjUgMzIuMTg0IDIuMS0xLjQ0N3MyLjU2NyAzLjA2NyA0LjI5NSA1Ljc2N2MyLjAzIDMuMTc0IDMuOTA0IDkuNTQzIDMuOTA0IDkuNTQzcy01LjUxNC03LjQ4My03LjQtMTAuMDIzYy0xLjM5Ny0xLjg3OS0yLjg5OS0zLjg0LTIuODk5LTMuODQiIGZpbGw9IiNiNjczNzMiLz48L3N2Zz4=";
  const blockIconURI =
"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1Ni43OTkiIGhlaWdodD0iNTYuNzk5IiB2aWV3Qm94PSIwIDAgNTYuNzk5IDU2Ljc5OSI+PHBhdGggZD0ibS4xNjMgMzYuOTgzIDEyLjQ2LTE3LjYwM2MxLjYzMi0yLjMwNiA0LjI3OC0yLjMwNiA1LjkxIDBsMTIuNDYgMTcuNjAzYzEuNjMxIDIuMzA2LTguMzE1IDYuMzctMTQuODggNi4zNy02LjU2MyAwLTE3LjU4Mi00LjA2NC0xNS45NS02LjM3IiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTE2LjgyIDI4LjE5NCAzMS40NjMgNy41MDdjMS45MTgtMi43MSA1LjAyNy0yLjcxIDYuOTQ1IDBsMTcuOTUgMjcuNjJjLjkxIDEuMzk5LjQ0IDMuMjI4LTEuNjQ4IDMuODgzLTMuOTggMS4yNS0xMC42MjYgMy4xODctMTUuNjI1IDMuODgzLTcuNjIgMS4wNjItMTguNDE4IDEuMjI4LTIxLjU0Ni40NC0xMi4xMzYtMy4wNjItMi42MzYtMTIuNDMtLjcxOC0xNS4xMzkiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJtMTcuNzIzIDE4LjQ0MiAyLjEtMS40NDdzMi41NjcgMy4wNjcgNC4yOTUgNS43NjdjMi4wMyAzLjE3NCAzLjkwNCA5LjU0MyAzLjkwNCA5LjU0M3MtNS41MTQtNy40ODMtNy40LTEwLjAyM2MtMS4zOTYtMS44NzktMi44OTktMy44NC0yLjg5OS0zLjg0IiBmaWxsPSIjYjY3MzczIi8+PC9zdmc+";

  let curNoise = "", pixelInfo = [];
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

    genNoise(args) {
      noiseInfo[3] = { w: Scratch.Cast.toNumber(args.W), h: Scratch.Cast.toNumber(args.H) };
      const vals = [
        noiseInfo[3].w, noiseInfo[3].h,
        Math.abs(noiseInfo[1] / 100), Math.abs(noiseInfo[2] / 100),
        Math.min(Scratch.Cast.toNumber(args.O), 100)
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
      this.analyze(`data:image/svg+xml;base64,${btoa(curNoise)}`, true).then((e) => { pixelInfo = e });
    }

    setSeed(args) { noiseInfo[0] = Scratch.Cast.toNumber(args.SEED) }

    setFreq(args) { noiseInfo = [noiseInfo[0], Scratch.Cast.toNumber(args.x), Scratch.Cast.toNumber(args.y)] }

    returnNoise(args) {
      if (args.TYPE === "encoded svg") return `data:image/svg+xml;base64,${btoa(curNoise)}`;
      if (args.TYPE === "png" && curNoise) {
        // eslint-disable-next-line
        const img = new Image();
        img.src = `data:image/svg+xml;base64,${btoa(curNoise)}`;
        return new Promise((resolve) => {
          img.onload = () => {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            resolve(canvas.toDataURL());
          };
        });
      }
      if (args.TYPE === "pixel array") {
        if (!curNoise) return "[]";
        return this.analyze(`data:image/svg+xml;base64,${btoa(curNoise)}`, false);
      }
      return curNoise.trim();
    }

    analyze(noise, dontStringify) {
      // eslint-disable-next-line
      const image = new Image();
      image.src = noise;
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      return new Promise((resolve, reject) => {
        image.onload = () => {
          canvas.width = image.width;
          canvas.height = image.height;
          ctx.drawImage(image, 0, 0, image.width, image.height);
          const imageData = ctx.getImageData(0, 0, image.width, image.height);
          const data = imageData.data;
          const pixelValues = [];
          for (let i = 0; i < data.length; i += 4) {
            const grayValue = data[i];
            const normValue = Math.round((grayValue / 255) * 100);
            pixelValues.push(normValue);
          }
          if (dontStringify) resolve(pixelValues);
          else resolve(JSON.stringify(pixelValues));
        };
      });
    }

    returnVal(args) {
      if (!curNoise) return "";
      const x = Math.round(Scratch.Cast.toNumber(args.x) + (noiseInfo[3].w / 2));
      const y = Math.round((Scratch.Cast.toNumber(args.y) * -1) + (noiseInfo[3].h / 2));
      const index = y * noiseInfo[3].w + x;
      return pixelInfo[index] || 0;
    }
  }
  
  Scratch.extensions.register(new SPperlin());
})(Scratch);
