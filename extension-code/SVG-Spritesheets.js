// Name: SVG Spritesheets
// ID: SPsvgSheets
// Description: Create and Export SVG Spritesheets
// By: SharkPool

// Version 1.1.0

(function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) throw new Error("SVG Spritesheets must be run unsandboxed");

  const menuIconURI =
"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5My45MjgiIGhlaWdodD0iOTMuOTI4IiB2aWV3Qm94PSIwIDAgOTMuOTI4IDkzLjkyOCI+PGcgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIj48cGF0aCBkPSJNMCA0Ni45NjRDMCAyMS4wMjcgMjEuMDI3IDAgNDYuOTY0IDBzNDYuOTY0IDIxLjAyNyA0Ni45NjQgNDYuOTY0LTIxLjAyNyA0Ni45NjQtNDYuOTY0IDQ2Ljk2NFMwIDcyLjkwMSAwIDQ2Ljk2NCIgZmlsbD0iIzk5MWYxZiIvPjxwYXRoIGQ9Ik01LjgxMiA0Ni45NjRjMC0yMi43NzggMTguNDY1LTQxLjI0NCA0MS4yNDQtNDEuMjQ0QzY5LjgzNCA1LjcyIDg4LjMgMjQuMTg2IDg4LjMgNDYuOTY0UzY5LjgzNCA4OC4yMDggNDcuMDU2IDg4LjIwOGMtMjIuNzc5IDAtNDEuMjQ0LTE4LjQ2Ni00MS4yNDQtNDEuMjQ0IiBmaWxsPSIjZjMzIi8+PHBhdGggZD0iTTQzLjk3NiA0NC4zNTl2LTQuNDgybTAtNS45MDd2LTQuNDgybTAtNS45MDZ2LTQuNDgzbS00LjQ5MiAyNS4yN2g0LjQ4Mm0tMTQuODcyIDBoNC40ODNtLTE0Ljg3MSAwaDQuNDgzIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNNDguMzc2IDUyLjQ5NlYxNi4zNDlzNy4xMiAzLjc4MSA3LjkzIDguMTQyYy44MTIgNC4zNjEtMS4yMSAyOC4wMDUtMS4yMSAyOC4wMDV6IiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTUyLjM2NCA1NS42MzNzLTIzLjY0NCAyLjAyLTI4LjAwNSAxLjIxYy00LjM2Mi0uODExLTguMTQzLTcuOTMyLTguMTQzLTcuOTMyaDM2LjE0OHoiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNNDcuNDkxIDUyLjgxM2E1LjM3NyA1LjM3NyAwIDEgMSAxMC43NTQgMCA1LjM3NyA1LjM3NyAwIDAgMS0xMC43NTQgMCIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik03Ny43MTEgNTEuMTMyYzAgNC4zMDYtNS42NTYgNy43OTYtMTIuNjM0IDcuNzk2cy0xMi42MzUtMy40OS0xMi42MzUtNy43OTZjMC00LjMwNSA1LjY1Ny03Ljc5NSAxMi42MzUtNy43OTVzMTIuNjM0IDMuNDkgMTIuNjM0IDcuNzk1bS0xMi42MzQtNC40NDhjLTQuNDU0IDAtOC4wNjUgMS45OTItOC4wNjUgNC40NDhzMy42MSA0LjQ0OCA4LjA2NSA0LjQ0OGM0LjQ1NCAwIDguMDY0LTEuOTkxIDguMDY0LTQuNDQ4IDAtMi40NTYtMy42MS00LjQ0OC04LjA2NC00LjQ0OCIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik01MS42OTIgNTIuMzA5YzQuMzA1IDAgNy43OTUgNS42NTcgNy43OTUgMTIuNjM1cy0zLjQ5IDEyLjYzNS03Ljc5NSAxMi42MzVjLTQuMzA2IDAtNy43OTYtNS42NTctNy43OTYtMTIuNjM1czMuNDktMTIuNjM1IDcuNzk2LTEyLjYzNW0tNC40NDggMTIuNjM1YzAgNC40NTQgMS45OTEgOC4wNjUgNC40NDggOC4wNjUgMi40NTYgMCA0LjQ0OC0zLjYxMSA0LjQ0OC04LjA2NXMtMS45OTItOC4wNjQtNC40NDgtOC4wNjQtNC40NDggMy42MS00LjQ0OCA4LjA2NCIgZmlsbD0iI2ZmZiIvPjwvZz48L3N2Zz4=";

  let svgConstruct = {};

  class SPsvgSheets {
    getInfo() {
      return {
        id: "SPsvgSheets",
        name: "SVG Spritesheets",
        menuIconURI,
        color1: "#ff3333",
        color2: "#cc2929",
        color3: "#991f1f",
        blocks: [
          {
            opcode: "compressSVG",
            blockType: Scratch.BlockType.REPORTER,
            text: "compress SVG [SVG]",
            arguments: {
              SVG: { type: Scratch.ArgumentType.STRING, defaultValue: "<svg></svg>" }
            }
          },
          "---",
          {
            opcode: "addSVG",
            blockType: Scratch.BlockType.COMMAND,
            text: "add SVG [SVG] with ID [ID] to sheet",
            arguments: {
              SVG: { type: Scratch.ArgumentType.STRING, defaultValue: "<svg></svg>" },
              ID: { type: Scratch.ArgumentType.STRING, defaultValue: "svg-1" }
            }
          },
          {
            opcode: "removeSVG",
            blockType: Scratch.BlockType.COMMAND,
            text: "remove SVG with ID [ID] from sheet",
            arguments: {
              ID: { type: Scratch.ArgumentType.STRING, defaultValue: "svg-1" }
            }
          },
          {
            opcode: "eraseSheet",
            blockType: Scratch.BlockType.COMMAND,
            text: "remove all SVGs from sheet"
          },
          {
            opcode: "outputSheet",
            blockType: Scratch.BlockType.REPORTER,
            text: "sheet [OUTPUT]",
            disableMonitor: true,
            arguments: {
              OUTPUT: { type: Scratch.ArgumentType.STRING, menu: "OUTPUTS" }
            }
          },
          "---",
          {
            opcode: "getID",
            blockType: Scratch.BlockType.REPORTER,
            text: "get [ID] from sheet [SHEET] as [OUTPUT]",
            arguments: {
              ID: { type: Scratch.ArgumentType.STRING, defaultValue: "svg-1" },
              SHEET: { type: Scratch.ArgumentType.STRING, defaultValue: "sheet-content-here" },
              OUTPUT: { type: Scratch.ArgumentType.STRING, menu: "OUTPUTS" }
            }
          },
          {
            opcode: "allIDs",
            blockType: Scratch.BlockType.REPORTER,
            text: "IDs from sheet [SHEET]",
            arguments: {
              SHEET: { type: Scratch.ArgumentType.STRING, defaultValue: "sheet-content-here" }
            }
          },
          { blockType: Scratch.BlockType.LABEL, text: "SVG Grouping" },
          {
            opcode: "getGroup",
            blockType: Scratch.BlockType.REPORTER,
            text: "get group [NUM] from svg [SVG] as [OUTPUT]",
            arguments: {
              NUM: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 },
              SVG: { type: Scratch.ArgumentType.STRING, defaultValue: "<svg></svg>" },
              OUTPUT: { type: Scratch.ArgumentType.STRING, menu: "OUTPUTS" }
            }
          },
          {
            opcode: "groupCnt",
            blockType: Scratch.BlockType.REPORTER,
            text: "# of groups in svg [SVG]",
            arguments: {
              SVG: { type: Scratch.ArgumentType.STRING, defaultValue: "<svg></svg>" }
            }
          }
        ],
        menus: {
          OUTPUTS: ["content", "dataURI"],
        },
      };
    }

    // Helper Funcs
    properID(id) { return Scratch.Cast.toString(id).replaceAll("]", "%}") }

    compileSVG() {
      let init = false;
      let compiled = "";
      for (const [key, prop] of Object.entries(svgConstruct)) {
        if (init) compiled += `<!--SP-ID[${prop.id}]${prop.svg.replaceAll("<!--", "[~").replaceAll("-->", "~]")}-->`;
        else {
          compiled += `<!--SP-ID[${prop.id}]1-->${prop.svg}`;
          init = true;
        }
      }
      return compiled;
    }

    // Block Funcs
    compressSVG(args) {
      return Scratch.Cast.toString(args.SVG)
        .replace(/data-paper-data="[^"]*" /g, "").replace(/<!--[\s\S]*?-->/g, "")
        .replace(/<title>[\s\S]*?<\/title>/g, "").replace(/<desc>[\s\S]*?<\/desc>/g, "")
        .replaceAll("#000000", "#000").replaceAll("#ffffff", "#fff").replaceAll("#00000000", "none")
        .replace("svg version=\"1.1\" ", "")
        .replace(/>\s+</g, "><").replace(/\s+$/g, "").trim();
    }

    addSVG(args) {
      const ID = this.properID(args.ID);
      let svg = args.SVG;
      if (!svg.startsWith("<svg") || !svg.includes("</svg>")) return;
      svgConstruct[ID] = { id: ID, svg }
    }

    removeSVG(args) { delete svgConstruct[this.properID(args.ID)] }

    eraseSheet() { svgConstruct = {} }

    outputSheet(args) {
      const compiled = this.compileSVG();
      if (args.OUTPUT === "dataURI") return `data:image/svg+xml;base64,${btoa(compiled)}`;
      else return compiled;
    }

    getID(args) {
      const thisSheet = Scratch.Cast.toString(args.SHEET);
      const ID = this.properID(args.ID);
      let svg = "";
      const firstSvgRegex = new RegExp(`<!--SP-ID\\[${ID}\\]1-->(<svg.*?<\/svg>)`, "s");
      const firstMatch = firstSvgRegex.exec(thisSheet);
      if (firstMatch) svg = firstMatch[1];
      else {
        const regex = new RegExp(`<!--SP-ID\\[${ID}\\](<svg.*?<\/svg>)-->`, "s");
        const match = regex.exec(thisSheet);
        if (match) svg = match[1];
      }
      svg = svg.replaceAll("[~", "<!--").replaceAll("~]", "-->");
      if (args.OUTPUT === "dataURI") return `data:image/svg+xml;base64,${btoa(svg)}`;
      else return svg;
    }

    allIDs(args) {
      const matches = Scratch.Cast.toString(args.SHEET).match(/<!--SP-ID\[(.*?)\]/g);
      const ids = matches ? matches.map(match => match.match(/<!--SP-ID\[(.*?)\]/)[1]) : [];
      return JSON.stringify(ids);
    }

    getGroup(args) {
      const inpSvg = Scratch.Cast.toString(args.SVG);
      const num = Scratch.Cast.toNumber(args.NUM);
      let svg = "";
      try {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(inpSvg, "image/svg+xml");
        const groups = xmlDoc.getElementsByTagName("g");
        if (num >= 0 && num < groups.length && num !== 0) {
          const selectedGroup = groups[num];
          const transform = groups[0].getAttribute("transform") || "";
          svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" transform="${transform}">${selectedGroup.outerHTML}</svg>`;
        }
      } catch { return "" }
      if (args.OUTPUT === "dataURI") return `data:image/svg+xml;base64,${btoa(svg)}`;
      else return svg;
    }

    groupCnt(args) {
      let svg = Scratch.Cast.toString(args.SVG);
      try {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(svg, "image/svg+xml");
        const groups = xmlDoc.getElementsByTagName("g");
        return Math.max(0, groups.length - 1);
      } catch { return 0 }
    }
  }

  Scratch.extensions.register(new SPsvgSheets());
})(Scratch);
