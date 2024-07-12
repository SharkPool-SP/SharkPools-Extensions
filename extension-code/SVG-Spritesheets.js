// Name: SVG Spritesheets
// ID: SPsvgSheets
// Description: Create and Export SVG Spritesheets
// By: SharkPool

// Version 1.0.0

(function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) throw new Error("SVG Spritesheets must be run unsandboxed");

  const menuIconURI =
"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI5My45Mjc2NCIgaGVpZ2h0PSI5My45Mjc2NCIgdmlld0JveD0iMCwwLDkzLjkyNzY0LDkzLjkyNzY0Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTkzLjAzNjE5LC0xMzMuMDM2MTkpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTE5My4wMzYxOSwxODAuMDAwMDFjMCwtMjUuOTM3NCAyMS4wMjY0MiwtNDYuOTYzODIgNDYuOTYzODIsLTQ2Ljk2MzgyYzI1LjkzNzQsMCA0Ni45NjM4MiwyMS4wMjY0MiA0Ni45NjM4Miw0Ni45NjM4MmMwLDI1LjkzNzQgLTIxLjAyNjQyLDQ2Ljk2MzgyIC00Ni45NjM4Miw0Ni45NjM4MmMtMjUuOTM3NCwwIC00Ni45NjM4MiwtMjEuMDI2NDIgLTQ2Ljk2MzgyLC00Ni45NjM4MnoiIGZpbGw9IiM5OTFmMWYiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjxwYXRoIGQ9Ik0xOTguODQ3NzgsMTc5Ljk5OTk5YzAsLTIyLjc3ODM2IDE4LjQ2NTUxLC00MS4yNDM4NyA0MS4yNDM4NywtNDEuMjQzODdjMjIuNzc4MzYsMCA0MS4yNDM4NywxOC40NjU1MSA0MS4yNDM4Nyw0MS4yNDM4N2MwLDIyLjc3ODM2IC0xOC40NjU1MSw0MS4yNDM4NyAtNDEuMjQzODcsNDEuMjQzODdjLTIyLjc3ODM2LDAgLTQxLjI0Mzg3LC0xOC40NjU1MSAtNDEuMjQzODcsLTQxLjI0Mzg3eiIgZmlsbD0iI2ZmMzMzMyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PHBhdGggZD0iTTIzNy4wMTE2MiwxNzcuMzk1MTh2LTQuNDgyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjIuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTIzNy4wMTE2MiwxNjcuMDA2NDh2LTQuNDgyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjIuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTIzNy4wMTE2MiwxNTYuNjE3Nzl2LTQuNDgyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjIuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTIzMi41MTk1MywxNzcuNDA0ODZoNC40ODI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNMjIyLjEzMDg0LDE3Ny40MDQ4Nmg0LjQ4MjQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik0yMTEuNzQyMTQsMTc3LjQwNDg2aDQuNDgyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjIuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTI0MS40MTE2OSwxODUuNTMyMTZ2LTM2LjE0NzE1YzAsMCA3LjEyMDA0LDMuNzgwOTUgNy45MzA5Myw4LjE0MjA0YzAuODEwODksNC4zNjEwOSAtMS4yMDk4LDI4LjAwNTExIC0xLjIwOTgsMjguMDA1MTF6IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48cGF0aCBkPSJNMjQ1LjM5OTY1LDE4OC42Njg1OWMwLDAgLTIzLjY0NDAyLDIuMDIwNyAtMjguMDA1MTEsMS4yMDk4Yy00LjM2MTA5LC0wLjgxMDg5IC04LjE0MjA0LC03LjkzMDkzIC04LjE0MjA0LC03LjkzMDkzaDM2LjE0NzE1eiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjxwYXRoIGQ9Ik0yNDAuNTI2ODMsMTg1Ljg0ODU2YzAsLTIuOTY5NTggMi40MDczMiwtNS4zNzY5IDUuMzc2OSwtNS4zNzY5YzIuOTY5NTgsMCA1LjM3NjksMi40MDczMiA1LjM3NjksNS4zNzY5YzAsMi45Njk1OCAtMi40MDczMiw1LjM3NjkgLTUuMzc2OSw1LjM3NjljLTIuOTY5NTgsMCAtNS4zNzY5LC0yLjQwNzMyIC01LjM3NjksLTUuMzc2OXoiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjxwYXRoIGQ9Ik0yNzAuNzQ3NDQsMTg0LjE2ODI4YzAsNC4zMDU0OCAtNS42NTY3Niw3Ljc5NTc2IC0xMi42MzQ3Myw3Ljc5NTc2Yy02Ljk3Nzk3LDAgLTEyLjYzNDc0LC0zLjQ5MDI4IC0xMi42MzQ3NCwtNy43OTU3NmMwLC00LjMwNTQ4IDUuNjU2NzcsLTcuNzk1NzYgMTIuNjM0NzQsLTcuNzk1NzZjNi45Nzc5NywwIDEyLjYzNDczLDMuNDkwMjggMTIuNjM0NzMsNy43OTU3NnpNMjU4LjExMjcxLDE3OS43MjAyN2MtNC40NTM4MywwIC04LjA2NDM3LDEuOTkxNDQgLTguMDY0MzcsNC40NDgwMWMwLDIuNDU2NTcgMy42MTA1NCw0LjQ0OCA4LjA2NDM3LDQuNDQ4YzQuNDUzODMsMCA4LjA2NDM3LC0xLjk5MTQzIDguMDY0MzcsLTQuNDQ4YzAsLTIuNDU2NTcgLTMuNjEwNTQsLTQuNDQ4MDEgLTguMDY0MzcsLTQuNDQ4MDF6IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48cGF0aCBkPSJNMjQ0LjcyNzU0LDE4NS4zNDU0NmM0LjMwNTQ4LDAgNy43OTU3Niw1LjY1Njc3IDcuNzk1NzYsMTIuNjM0NzRjMCw2Ljk3Nzk3IC0zLjQ5MDI4LDEyLjYzNDc0IC03Ljc5NTc2LDEyLjYzNDc0Yy00LjMwNTQ4LDAgLTcuNzk1NzYsLTUuNjU2NzcgLTcuNzk1NzYsLTEyLjYzNDc0YzAsLTYuOTc3OTcgMy40OTAyOCwtMTIuNjM0NzQgNy43OTU3NiwtMTIuNjM0NzR6TTI0MC4yNzk1NCwxOTcuOTgwMmMwLDQuNDUzODMgMS45OTE0NCw4LjA2NDM3IDQuNDQ4LDguMDY0MzdjMi40NTY1NywwIDQuNDQ4LC0zLjYxMDU0IDQuNDQ4LC04LjA2NDM3YzAsLTQuNDUzODMgLTEuOTkxNDMsLTguMDY0MzcgLTQuNDQ4LC04LjA2NDM3Yy0yLjQ1NjU3LDAgLTQuNDQ4LDMuNjEwNTQgLTQuNDQ4LDguMDY0Mzd6IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48L2c+PC9nPjwvc3ZnPg==";

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
          "---",
          {
            opcode: "outputSheet",
            blockType: Scratch.BlockType.REPORTER,
            text: "sheet [OUTPUT]",
            disableMonitor: true,
            arguments: {
              OUTPUT: { type: Scratch.ArgumentType.STRING, menu: "OUTPUTS" }
            }
          },
          {
            opcode: "getID",
            blockType: Scratch.BlockType.REPORTER,
            text: "get [ID] from sheet [SHEET] as [OUTPUT]",
            arguments: {
              ID: { type: Scratch.ArgumentType.STRING, defaultValue: "svg-1" },
              SHEET: { type: Scratch.ArgumentType.STRING, defaultValue: "sheet-content-here" },
              OUTPUT: { type: Scratch.ArgumentType.STRING, menu: "OUTPUTS" }
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
      let svg = Scratch.Cast.toString(args.SVG)
        .replace(/data-paper-data="[^"]*" /g, "").replace(/<!--[\s\S]*?-->/g, "")
        .replace(/<title>[\s\S]*?<\/title>/g, "").replace(/<desc>[\s\S]*?<\/desc>/g, "")
        .replace(/>\s+</g, "><").trim();
      return svg
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
  }

  Scratch.extensions.register(new SPsvgSheets());
})(Scratch);
