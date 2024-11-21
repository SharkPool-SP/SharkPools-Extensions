// Name: More Operators
// ID: SPmoreOPs
// Description: More Powerful Operator Blocks
// By: SharkPool

// Version V.1.2.1

(function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) throw new Error("More Operators must run unsandboxed");

  const menuIconURI =
"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3Ny4yMjIiIGhlaWdodD0iNzcuMjIyIiB2aWV3Qm94PSIwIDAgNzcuMjIyIDc3LjIyMiI+PGcgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIj48cGF0aCBkPSJNMiAzOC42MTFDMiAxOC4zOTEgMTguMzkxIDIgMzguNjExIDJzMzYuNjExIDE2LjM5MSAzNi42MTEgMzYuNjExLTE2LjM5MSAzNi42MTEtMzYuNjExIDM2LjYxMVMyIDU4LjgzMSAyIDM4LjYxMXoiIGZpbGw9IiM1OWMwNTkiIHN0cm9rZT0iIzQ3OWE0NyIgc3Ryb2tlLXdpZHRoPSI0Ii8+PHBhdGggZD0iTTEgMWg3NC4yMjJ2NzQuMjIySDF6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTQ0LjM1NiAxNS40NDVjLTMuMjkxLS4yOTktNi4xOTQgMi4xMjUtNi40OTMgNS40NDZsLS43NDggOC42NDhoOC40Mzh2NS45ODRoLTguOTc3bC0xLjMxNiAxNS4xN2ExMS45MjcgMTEuOTI3IDAgMCAxLTEyLjk1NyAxMC44NjMgMTEuOTkgMTEuOTkgMCAwIDEtOS4xNTYtNS41OTZsNC40ODgtNC40ODhjLjcxOCAyLjIxNCAyLjY5MyAzLjkyIDUuMTc3IDQuMTI5IDMuMjkxLjMgNi4xOTQtMi4xMjQgNi40OTMtNS40NDZsMS4yODctMTQuNjMyaC04Ljk3N3YtNS45ODRIMzEuMWwuODA4LTkuMTg3Yy41NjktNi41ODIgNi4zNzQtMTEuNDYgMTIuOTU3LTEwLjg2MSAzLjkyLjMyOSA3LjIxMSAyLjUxMyA5LjE1NiA1LjU5NWwtNC40ODggNC40ODljLS43MTktMi4yMTUtMi42OTMtMy45Mi01LjE3Ny00LjEzbTguMDg5IDQ1Ljg2MWEyLjY0IDIuNjQgMCAwIDEtMi42NC0yLjY0di01LjM2MmgtNS4zNjJhMi42NCAyLjY0IDAgMCAxLTIuNjM5LTIuNjM5di0yLjQyN2EyLjY0IDIuNjQgMCAwIDEgMi42NC0yLjY0aDUuMzYydi01LjM2MWEyLjY0IDIuNjQgMCAwIDEgMi42MzktMi42NGgyLjQyN2EyLjY0IDIuNjQgMCAwIDEgMi42MzkgMi42NHY1LjM2Mmg1LjM2MmEyLjY0IDIuNjQgMCAwIDEgMi42NCAyLjY0djIuNDI2YTIuNjQgMi42NCAwIDAgMS0yLjY0IDIuNjRoLTUuMzYydjUuMzYyYTIuNjQgMi42NCAwIDAgMS0yLjY0IDIuNjM5eiIgZmlsbD0iI2ZmZiIvPjwvZz48L3N2Zz4=";

  const vm = Scratch.vm;
  const regenReporters = ["SPmoreOPs_getLetter", "SPmoreOPs_getIndex"];
  if (Scratch.gui) Scratch.gui.getBlockly().then(SB => {
    const originalCheck = SB.scratchBlocksUtils.isShadowArgumentReporter;
    SB.scratchBlocksUtils.isShadowArgumentReporter = function (block) {
      const result = originalCheck(block);
      if (result) return true;
      return block.isShadow() && regenReporters.includes(block.type);
    };
  });

  vm.runtime.on("PROJECT_LOADED", () => {
    if (!Scratch.extensions.isPenguinMod) {
      const storage = vm.runtime.extensionStorage["SPmoreOPs"];
      if (storage === undefined) return;
      for (let i = 0; i < storage.library.length; i++) {
        const scriptElement = document.createElement("script");
        scriptElement.textContent = storage.library[i];
        document.body.appendChild(scriptElement);
      }
      isSolverAdded = true;
      loadedLibrary = storage.library;
      vm.extensionManager.refreshBlocks();
    }
  });

  // Block requires a Library, Library is fetched once and saved to the project
  let isSolverAdded = false;
  let loadedLibrary = [];

  let txtReplacers = {};

  class SPmoreOPs {
    getInfo() {
      return {
        id: "SPmoreOPs",
        name: "More Operators",
        color1: "#59C059",
        color2: "#50ad50",
        color3: "#479a47",
        menuIconURI,
        blocks: [
          {
            opcode: "bitLogic",
            extensions: ["colours_operators"],
            blockType: Scratch.BlockType.BOOLEAN,
            text: "[CON1] [TYPE] [CON2]",
            arguments: {
              CON1: { type: Scratch.ArgumentType.BOOLEAN },
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "LOGIC" },
              CON2: { type: Scratch.ArgumentType.BOOLEAN }
            }
          },
          {
            opcode: "with",
            extensions: ["colours_operators"],
            blockType: Scratch.BlockType.BOOLEAN,
            text: "[STRING1] [TYPE] with [STRING2]",
            arguments: {
              STRING1: { type: Scratch.ArgumentType.STRING, defaultValue: "apple banana" },
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "WITHS" },
              STRING2: { type: Scratch.ArgumentType.STRING, defaultValue: "apple" }
            }
          },
          {
            opcode: "noContain",
            extensions: ["colours_operators"],
            blockType: Scratch.BlockType.BOOLEAN,
            text: "[STRING1] not contains [STRING2]?",
            arguments: {
              STRING1: { type: Scratch.ArgumentType.STRING, defaultValue: "apple" },
              STRING2: { type: Scratch.ArgumentType.STRING, defaultValue: "banana" }
            }
          },
          {
            opcode: "evenOdd",
            extensions: ["colours_operators"],
            blockType: Scratch.BlockType.BOOLEAN,
            text: "is [NUM] [TYPE]?",
            arguments: {
              NUM: { type: Scratch.ArgumentType.NUMBER, defaultValue: 2 },
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "EVEN_ODD" }
            }
          },
          {
            opcode: "isPrime",
            extensions: ["colours_operators"],
            blockType: Scratch.BlockType.BOOLEAN,
            text: "is [NUM] prime?",
            arguments: {
              NUM: { type: Scratch.ArgumentType.NUMBER, defaultValue: 2 }
            }
          },
          "---",
          {
            opcode: "timePassed",
            extensions: ["colours_operators"],
            blockType: Scratch.BlockType.BOOLEAN,
            text: "has [NUM] seconds passed?",
            arguments: {
              NUM: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 }
            }
          },
          "---",
          {
            opcode: "typeString",
            extensions: ["colours_operators"],
            blockType: Scratch.BlockType.REPORTER,
            text: "[STRING1] [TYPE] [STRING2]",
            arguments: {
              STRING1: { type: Scratch.ArgumentType.STRING, defaultValue: "" },
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "STRING" },
              STRING2: { type: Scratch.ArgumentType.STRING, defaultValue: "value" }
            }
          },
          { blockType: Scratch.BlockType.LABEL, text: "Math" },
          {
            func: "tryAddSolve",
            blockType: Scratch.BlockType.BUTTON,
            hideFromPalette: isSolverAdded,
            text: "Import 'eval' & 'solve for x'"
          },
          {
            opcode: "evalNum",
            extensions: ["colours_operators"],
            blockType: Scratch.BlockType.REPORTER,
            hideFromPalette: !isSolverAdded,
            text: "eval [STRING]",
            arguments: {
              STRING: { type: Scratch.ArgumentType.STRING, defaultValue : "1 + 1" }
            }
          },
          {
            opcode: "solveFor",
            extensions: ["colours_operators"],
            blockType: Scratch.BlockType.REPORTER,
            hideFromPalette: !isSolverAdded,
            text: "solve for [VAR] in [STRING]",
            arguments: {
              VAR: {
                type: Scratch.ArgumentType.STRING,
                menu: "VARIABLES",
                defaultValue: "x"
              },
              STRING: { type: Scratch.ArgumentType.STRING, defaultValue : "x + 1 = 2" }
            }
          },
          "---",
          {
            opcode: "root",
            extensions: ["colours_operators"],
            blockType: Scratch.BlockType.REPORTER,
            text: "[N] √ [NUM]",
            arguments: {
              N: { type: Scratch.ArgumentType.NUMBER, defaultValue : 2 },
              NUM: { type: Scratch.ArgumentType.NUMBER, defaultValue : 25 }
            }
          },
          {
            opcode: "exponent",
            extensions: ["colours_operators"],
            blockType: Scratch.BlockType.REPORTER,
            text: "[NUM] ^ [N]",
            arguments: {
              N: { type: Scratch.ArgumentType.NUMBER, defaultValue : 2 },
              NUM: { type: Scratch.ArgumentType.NUMBER, defaultValue : 5 }
            }
          },
          {
            opcode: "percent",
            extensions: ["colours_operators"],
            blockType: Scratch.BlockType.REPORTER,
            text: "[NUM1] % of [NUM2]",
            arguments: {
              NUM1: { type: Scratch.ArgumentType.NUMBER, defaultValue : 50 },
              NUM2: { type: Scratch.ArgumentType.NUMBER, defaultValue : 50 }
            }
          },
          "---",
          {
            opcode: "lcm",
            extensions: ["colours_operators"],
            blockType: Scratch.BlockType.REPORTER,
            text: "lcm of [NUM1] and [NUM2]",
            arguments: {
              NUM1: { type: Scratch.ArgumentType.NUMBER, defaultValue: 5 },
              NUM2: { type: Scratch.ArgumentType.NUMBER, defaultValue: 15 }
            }
          },
          {
            opcode: "gcd",
            extensions: ["colours_operators"],
            blockType: Scratch.BlockType.REPORTER,
            text: "gcd of [NUM1] and [NUM2]",
            arguments: {
              NUM1: { type: Scratch.ArgumentType.NUMBER, defaultValue: 5 },
              NUM2: { type: Scratch.ArgumentType.NUMBER, defaultValue: 15 }
            }
          },
          {
            opcode: "negaAbs",
            extensions: ["colours_operators"],
            blockType: Scratch.BlockType.REPORTER,
            text: "nega-abs of [NUMBER]",
            arguments: {
              NUMBER: { type: Scratch.ArgumentType.NUMBER, defaultValue: 5 }
            }
          },,
          {
            opcode: "simplifyFrac",
            extensions: ["colours_operators"],
            blockType: Scratch.BlockType.REPORTER,
            text: "simplify fraction [NUM] / [DENOM]",
            arguments: {
              NUM: { type: Scratch.ArgumentType.NUMBER, defaultValue: 4 },
              DENOM: { type: Scratch.ArgumentType.NUMBER, defaultValue: 8 }
            }
          },
          {
            opcode: "roundNear",
            extensions: ["colours_operators"],
            blockType: Scratch.BlockType.REPORTER,
            text: "round [NUMBER] to nearest [ROUND_TYPE]",
            arguments: {
              NUMBER: { type: Scratch.ArgumentType.NUMBER, defaultValue: 3.1415 },
              ROUND_TYPE: { type: Scratch.ArgumentType.NUMBER, defaultValue: 3 }
            }
          },
          "---",
          {
            opcode: "tripleOperator",
            extensions: ["colours_operators"],
            blockType: Scratch.BlockType.REPORTER,
            text: "[NUM1] [OPERATOR1] [NUM2] [OPERATOR2] [NUM3]",
            arguments: {
              NUM1: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
              OPERATOR1: { type: Scratch.ArgumentType.STRING, menu: "OPERATOR_MENU" },
              NUM2: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
              OPERATOR2: { type: Scratch.ArgumentType.STRING, menu: "OPERATOR_MENU" },
              NUM3: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
            }
          },
          {
            opcode: "quadrupleOperator",
            extensions: ["colours_operators"],
            blockType: Scratch.BlockType.REPORTER,
            text: "[NUM1] [OPERATOR1] [NUM2] [OPERATOR2] [NUM3] [OPERATOR3] [NUM4]",
            arguments: {
              NUM1: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
              OPERATOR1: { type: Scratch.ArgumentType.STRING, menu: "OPERATOR_MENU" },
              NUM2: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
              OPERATOR2: { type: Scratch.ArgumentType.STRING, menu: "OPERATOR_MENU" },
              NUM3: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
              OPERATOR3: { type: Scratch.ArgumentType.STRING, menu: "OPERATOR_MENU" },
              NUM4: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 }
            }
          },
          { blockType: Scratch.BlockType.LABEL, text: "Strings" },
          {
            opcode: "trim",
            extensions: ["colours_operators"],
            blockType: Scratch.BlockType.REPORTER,
            text: "trim [STRING] at [TYPE]",
            arguments: {
              STRING: { type: Scratch.ArgumentType.STRING, defaultValue: "apple    " },
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "PADS", defaultValue: "both" }
            }
          },
          {
            opcode: "insertString",
            extensions: ["colours_operators"],
            blockType: Scratch.BlockType.REPORTER,
            text: "insert [STRING2] after letter [NUM] in [STRING1]",
            arguments: {
              STRING1: { type: Scratch.ArgumentType.STRING, defaultValue: "bana" },
              NUM: { type: Scratch.ArgumentType.NUMBER, defaultValue: 3 },
              STRING2: { type: Scratch.ArgumentType.STRING, defaultValue: "an" }
            }
          },
          {
            opcode: "padding",
            extensions: ["colours_operators"],
            blockType: Scratch.BlockType.REPORTER,
            text: "pad [STRING1] at [TYPE] with [STRING2] at length [NUM]",
            arguments: {
              STRING1: { type: Scratch.ArgumentType.STRING, defaultValue: "anana" },
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "PADS" },
              STRING2: { type: Scratch.ArgumentType.STRING, defaultValue: "b" },
              NUM: { type: Scratch.ArgumentType.NUMBER, defaultValue: 10 }
            }
          },
          "---",
          {
            opcode: "randomLetter",
            extensions: ["colours_operators"],
            blockType: Scratch.BlockType.REPORTER,
            text: "random [LETTER_TYPE] letter",
            arguments: {
              LETTER_TYPE: { type: Scratch.ArgumentType.STRING, menu: "LETTER_TYPE_MENU" }
            }
          },
          {
            opcode: "randomCharRange",
            extensions: ["colours_operators"],
            blockType: Scratch.BlockType.REPORTER,
            text: "random character [ONE] to [TWO]",
            arguments: {
              ONE: { type: Scratch.ArgumentType.STRING, defaultValue: "a" },
              TWO: { type: Scratch.ArgumentType.STRING, defaultValue: "c" }
            }
          },
          {
            opcode: "rndString",
            extensions: ["colours_operators"],
            blockType: Scratch.BlockType.REPORTER,
            allowDropAnywhere: true,
            text: "random [STRING1] or [STRING2] with [CHANCE]% chance",
            arguments: {
              STRING1: { type: Scratch.ArgumentType.STRING, defaultValue: "foo" },
              STRING2: { type: Scratch.ArgumentType.STRING, defaultValue: "bar" },
              CHANCE: { type: Scratch.ArgumentType.NUMBER, defaultValue: 50 }
            }
          },
          "---",
          {
            opcode: "replaceKey",
            extensions: ["colours_operators"],
            blockType: Scratch.BlockType.REPORTER,
            text: "replace [KEY] #[ORDER] of [STRING] with [REPLACE]",
            arguments: {
              STRING: { type: Scratch.ArgumentType.STRING, defaultValue: "apple banana banana" },
              KEY: { type: Scratch.ArgumentType.STRING, defaultValue: "banana" },
              ORDER: { type: Scratch.ArgumentType.NUMBER, defaultValue: 2 },
              REPLACE: { type: Scratch.ArgumentType.STRING, defaultValue: "orange" }
            }
          },
          {
            opcode: "replaceKeys",
            extensions: ["colours_operators"],
            blockType: Scratch.BlockType.REPORTER,
            text: "replace [KEY] #[ORDER] to #[ORDER2] of [STRING] with [REPLACE]",
            arguments: {
              STRING: { type: Scratch.ArgumentType.STRING, defaultValue: "banana banana orange" },
              KEY: { type: Scratch.ArgumentType.STRING, defaultValue: "banana" },
              ORDER: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 },
              ORDER2: { type: Scratch.ArgumentType.NUMBER, defaultValue: 2 },
              REPLACE: { type: Scratch.ArgumentType.STRING, defaultValue: "orange" }
            }
          },
          "---",
          {
            opcode: "setReplacer",
            extensions: ["colours_operators"],
            blockType: Scratch.BlockType.COMMAND,
            text: "set text replacer [TEXT] to [VALUE]",
            arguments: {
              TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: "${text}" },
              VALUE: { type: Scratch.ArgumentType.STRING, defaultValue: "world!" }
            }
          },
          {
            opcode: "resetReplacers",
            extensions: ["colours_operators"],
            blockType: Scratch.BlockType.COMMAND,
            text: "reset text replacers"
          },
          {
            opcode: "applyReplacers",
            extensions: ["colours_operators"],
            blockType: Scratch.BlockType.REPORTER,
            text: "apply text replace to [TEXT]",
            arguments: {
              TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: "Hello ${text}" }
            }
          },
          "---",
          {
            opcode: "tripleJoin",
            extensions: ["colours_operators"],
            blockType: Scratch.BlockType.REPORTER,
            text: "join [STRING1] [STRING2] [STRING3]",
            arguments: {
              STRING1: { type: Scratch.ArgumentType.STRING },
              STRING2: { type: Scratch.ArgumentType.STRING },
              STRING3: { type: Scratch.ArgumentType.STRING }
            }
          },
          {
            opcode: "quadrupleJoin",
            extensions: ["colours_operators"],
            blockType: Scratch.BlockType.REPORTER,
            text: "join [STRING1] [STRING2] [STRING3] [STRING4]",
            arguments: {
              STRING1: { type: Scratch.ArgumentType.STRING },
              STRING2: { type: Scratch.ArgumentType.STRING },
              STRING3: { type: Scratch.ArgumentType.STRING },
              STRING4: { type: Scratch.ArgumentType.STRING }
            }
          },
          {
            opcode: "fiveJoin",
            extensions: ["colours_operators"],
            blockType: Scratch.BlockType.REPORTER,
            text: "join [STRING1] [STRING2] [STRING3] [STRING4] [STRING5]",
            arguments: {
              STRING1: { type: Scratch.ArgumentType.STRING },
              STRING2: { type: Scratch.ArgumentType.STRING },
              STRING3: { type: Scratch.ArgumentType.STRING },
              STRING4: { type: Scratch.ArgumentType.STRING },
              STRING5: { type: Scratch.ArgumentType.STRING }
            }
          },
          "---",
          {
            blockType: Scratch.BlockType.XML,
            xml: `
            <block type="SPmoreOPs_forLetter">
              <value name="LETTER"><shadow type="SPmoreOPs_getLetter"></shadow></value>
              <value name = "INDEX"><shadow type="SPmoreOPs_getIndex"></shadow></value>
              <value name="STRING"><shadow type="text"><field name="TEXT">banana</field></shadow></value>
            </block>`
          },
          {
            opcode: "forLetter",
            extensions: ["colours_operators"], blockType: Scratch.BlockType.LOOP,
            text: "for each [LETTER] [INDEX] in [STRING]", hideFromPalette: true,
            arguments: { LETTER: {}, STRING: { type: Scratch.ArgumentType.STRING, defaultValue: "banana"} }
          },
          {
            opcode: "getLetter", extensions: ["colours_operators"],
            blockType: Scratch.BlockType.REPORTER, hideFromPalette: true, text: "letter"
          },
          {
            opcode: "getIndex", extensions: ["colours_operators"],
            blockType: Scratch.BlockType.REPORTER, hideFromPalette: true, text: "index"
          },
        ],
        menus: {
          LOGIC: ["and", "nand", "or", "nor", "xor"],
          WITHS: ["starts", "ends", "encloses"],
          EVEN_ODD: ["even", "odd"],
          PADS: ["start", "end", "both"],
          LETTER_TYPE_MENU: { acceptReporters: true, items: ["lowercase", "uppercase"] },
          OPERATOR_MENU: ["+", "-", "*", "/"],
          STRING: { acceptReporters: true, items: ["||", "??"] },
          VARIABLES: [
            "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
            "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
          ]
        },
      };
    }

    async tryAddSolve() {
      if (navigator.onLine) {
        try {
          window.alert("These Blocks require a Math Library to work. Dont worry, this Library is loaded Once (editor) and is Saved to the Project");
          const baseURL = "https://raw.githubusercontent.com/SharkPool-SP/SharkPools-Extensions/refs/heads/main/extension-utils/MO/math-";
          const links = ["core.js", "algebra.js", "calculus.js", "solve.js"];
          const texts = [];
          for (let i = 0; i < links.length; i++) {
            const response = await Scratch.fetch(baseURL + links[i]);
            if (!response.ok) throw new Error("Fetch failed");
            const txt = await response.text();
            const scriptElement = document.createElement("script");
            scriptElement.textContent = txt;
            texts.push(txt);
            document.body.appendChild(scriptElement);
          }
          isSolverAdded = true;
          vm.extensionManager.refreshBlocks();
          loadedLibrary = texts;
          if (!Scratch.extensions.isPenguinMod) vm.runtime.extensionStorage["SPmoreOPs"] = { loaded : true, library : texts };
        } catch { alert("Fetch Failed, Unable to Import this Block") }
      } else { alert("You Must be Online to Import this Block") }
    }

    bitLogic(args) {
      const con1 = Scratch.Cast.toBoolean(args.CON1);
      const con2 = Scratch.Cast.toBoolean(args.CON2);
      switch (args.TYPE) {
        case "and" : return con1 && con2;
        case "nand": return !(con1 && con2);
        case "or" : return con1 || con2;
        case "nor": return !(con1 || con2);
        case "xor": return con1 !== con2;
      }
    }

    with(args) {
      const string = Scratch.Cast.toString(args.STRING1)
      if (args.TYPE === "starts") return string.startsWith(args.STRING2);
      if (args.TYPE === "ends") return string.endsWith(args.STRING2);
      return string.startsWith(args.STRING2) && string.endsWith(args.STRING2);
    }

    noContain(args) { return !vm.runtime.ext_scratch3_operators.contains(args) }

    timePassed(args, util) {
      const id = util.thread.blockContainer.getBlock(util.thread.isCompiled ? util.thread.peekStack() : util.thread.peekStackFrame().op.id)?.id;
      if (util.thread.stackFrames[0][id + "startTime"] !== undefined) return Date.now() > util.thread.stackFrames[0][id + "startTime"];
      else {
        util.thread.stackFrames[0][id + "startTime"] = Date.now() + (Scratch.Cast.toNumber(args.NUM) * 1000);
        return false;
      }
    }

    typeString(args) {
      if (args.TYPE === "||") return args.STRING1 || args.STRING2;
      else return args.STRING1 === "undefined" || args.STRING1 === "null" ? args.STRING2 : args.STRING1;
    }

    evenOdd(args) {
      const n = Scratch.Cast.toNumber(args.NUM);
      if (args.TYPE === "even") return n % 2 === 0
      else return n % 2 !== 0
    }

    isPrime(args) {
      const n = Math.abs(Scratch.Cast.toNumber(args.NUM));
      if (n <= 1) return false;
      if (n <= 3) return true;
      if (n % 2 === 0 || n % 3 === 0) return false;
      for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
      }
      return true;
    }

    // requires loading library first
    evalNum(args) {
      try {
        const solution = nerdamer(args.STRING.replace(/\s+/g, "")).evaluate().text();
        return solution ? `["${solution.toString()}"]` : "No solution found"; // Create an Array for Compatibility
      } catch { return "undefined" }
    }
    solveFor(args) {
      try {
        const solution = nerdamer.solveEquations(args.STRING.replace(/\s+/g, ""), args.VAR);
        const decimalSols = solution.map(sol => nerdamer(sol).evaluate().text());
        return decimalSols.length > 0 ? JSON.stringify(decimalSols) : "No solution found";
      } catch { return "undefined" }
    }

    root(args) { return Math.pow(Scratch.Cast.toNumber(args.NUM), 1 / Scratch.Cast.toNumber(args.N)) }

    exponent(args) { return Math.pow(Scratch.Cast.toNumber(args.NUM), Scratch.Cast.toNumber(args.N)) }

    percent(args) { return Scratch.Cast.toNumber(args.NUM2) * (Scratch.Cast.toNumber(args.NUM1) * 0.01) }

    simplifyFrac(args) {
      const numerator = Scratch.Cast.toNumber(args.NUM);
      const denominator = Scratch.Cast.toNumber(args.DENOM);
      const gcd = (a, b) => (b ? gcd(b, a % b) : a);
      const gcdValue = gcd(numerator, denominator);
      const result = JSON.stringify([numerator / gcdValue, denominator / gcdValue]);
      return result.includes("null") ? "[undefined]" : result;
    }

    gcd(args) {
      let num1 = Scratch.Cast.toNumber(args.NUM1);
      let num2 = Scratch.Cast.toNumber(args.NUM2);
      while (num2 !== 0) {
        let t = num2;
        num2 = num1 % num2;
        num1 = t;
     }
      return num1;
    }

    lcm(args) {
      const num1 = Scratch.Cast.toNumber(args.NUM1);
      const num2 = Scratch.Cast.toNumber(args.NUM2);
      return Math.abs(num1 * num2) / this.gcd({ NUM1 : num1, NUM2 : num2 });
    }

    negaAbs({ NUMBER }) { return -Math.abs(Scratch.Cast.toNumber(NUMBER)) }

    roundNear(args) {
      const precision = Math.max(0, Math.round(Scratch.Cast.toNumber(args.ROUND_TYPE)));
      const multiplier = Math.pow(10, precision);
      return Math.round(args.NUMBER * multiplier) / multiplier;
    }

    tripleOperator(args) {
      const nums = [Scratch.Cast.toNumber(args.NUM1), Scratch.Cast.toNumber(args.NUM2), Scratch.Cast.toNumber(args.NUM3)];
      return eval(`${nums[0]} ${args.OPERATOR1} ${nums[1]} ${args.OPERATOR2} ${nums[2]}`);
    }

    quadrupleOperator(args) {
      const nums = [Scratch.Cast.toNumber(args.NUM1), Scratch.Cast.toNumber(args.NUM2),
        Scratch.Cast.toNumber(args.NUM3), Scratch.Cast.toNumber(args.NUM4)];
      return eval(`${nums[0]} ${args.OPERATOR1} ${nums[1]} ${args.OPERATOR2} ${nums[2]} ${args.OPERATOR3} ${nums[3]}`);
    }

    trim(args) {
      return Scratch.Cast.toString(args.STRING)[args.TYPE === "start" ? "trimStart" : args.TYPE === "end" ? "trimEnd" : "trim"]();
    }

    padding(args) {
      const length = Scratch.Cast.toNumber(args.NUM), string = Scratch.Cast.toString(args.STRING1);
      if (args.TYPE === "start") return string.padStart(length, args.STRING2);
      if (args.TYPE === "end") return string.padEnd(length, args.STRING2);
      return string.padStart(string.length + ((length - string.length) / 2), args.STRING2).padEnd(length, args.STRING2);
    }

    insertString(args) {
      const string1 = Scratch.Cast.toString(args.STRING1);
      const string2 = Scratch.Cast.toString(args.STRING2);
      const n = Scratch.Cast.toNumber(args.NUM);
      const string1Array = string1.split("");
      string1Array.splice(n, 0, ...string2.split(""));
      return string1Array.join("");
    }

    randomLetter(args) {
      let letters = "abcdefghijklmnopqrstuvwxyz";
      if (args.LETTER_TYPE === "uppercase") letters = letters.toUpperCase();
      return letters.charAt(Math.floor(Math.random() * 26));
    }

    replaceKey(args) {
      const regex = new RegExp(args.KEY, "g");
      let index = 0;
      return Scratch.Cast.toString(args.STRING).replace(regex, (match) => {
        index++;
        return index === Scratch.Cast.toNumber(args.ORDER) ? args.REPLACE : match;
      });
    }

    replaceKeys(args) {
      const regex = new RegExp(args.KEY, "g");
      let index = 0;
      const ord1 = Scratch.Cast.toNumber(args.ORDER);
      const ord2 = Scratch.Cast.toNumber(args.ORDER2);
      const order2 = ord1 > ord2 ? ord1 : ord2;
      return Scratch.Cast.toString(args.STRING).replace(regex, (match) => {
        index++;
        return index >= ord1 && index <= order2 ? args.REPLACE : match;
      });
    }

    setReplacer(args) { txtReplacers[Scratch.Cast.toString(args.TEXT)] = Scratch.Cast.toString(args.VALUE) }

    resetReplacers() { txtReplacers = {} }

    applyReplacers(args) {
      let text = Scratch.Cast.toString(args.TEXT);
      for (const replacer in txtReplacers) {
        const replacerVal = txtReplacers[replacer];
        text = text.replaceAll(replacer, replacerVal);
      }
      return text;
    }

    randomCharRange(args) { 
      let ONE = Scratch.Cast.toString(args.ONE).charCodeAt(0);
      let TWO = Scratch.Cast.toString(args.TWO).charCodeAt(0);
      return String.fromCharCode(Math.floor(Math.random() * (TWO - ONE + 1) + ONE));
    }

    rndString(args) { return Math.random() > args.CHANCE / 100 ? args.STRING2 : args.STRING1 }

    tripleJoin({ STRING1, STRING2, STRING3 }) { return `${STRING1}${STRING2}${STRING3}` }
    quadrupleJoin({ STRING1, STRING2, STRING3, STRING4 }) { return `${STRING1}${STRING2}${STRING3}${STRING4}` }
    fiveJoin({ STRING1, STRING2, STRING3, STRING4, STRING5 }) { return `${STRING1}${STRING2}${STRING3}${STRING4}${STRING5}` }

    forLetter(args, util) {
      const string = Scratch.Cast.toString(args.STRING);
      if (util.stackFrame.index === undefined) util.stackFrame.index = 0;
      if (util.thread.stackFrames[0].SPletter === undefined) util.thread.stackFrames[0].SPletter = "";
      if (util.stackFrame.index < string.length) {
        util.thread.stackFrames[0].SPletter = string[util.stackFrame.index];
        util.stackFrame.index++;
        util.thread.stackFrames[0].SPindex = util.stackFrame.index;
        util.startBranch(1, true);
      }
    }
    getLetter(args, util) {
      return util.thread.stackFrames[0].SPletter ?? "";
    }
    getIndex(args, util) {
      return util.thread.stackFrames[0].SPindex ?? 0
    }

    // Helper Functions
    getUnusedVar(expression) {
      const avoidList = [
        "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
        "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
      ];
      const usedVariables = expression.split("").filter(char => /[a-zA-Z]/.test(char));
      for (let i = 0; i < avoidList.length; i++) {
        if (!usedVariables.includes(avoidList[i])) return avoidList[i];
      }
      // If all avoid list variables are used, default to unsolvable (overflow)
      return undefined;
    }

    // PenguinMod Storage
    serialize() {
      return { SPmoreOPs : { loaded : isSolverAdded, library : loadedLibrary } }
    }
    deserialize(data) {
      if (data.SPmoreOPs !== undefined) {
        isSolverAdded = data.SPmoreOPs.loaded;
        loadedLibrary = data.SPmoreOPs.library;
        if (loadedLibrary.length === 0) return;
        for (let i = 0; i < loadedLibrary.length; i++) {
          const scriptElement = document.createElement("script");
          scriptElement.textContent = loadedLibrary[i];
          document.body.appendChild(scriptElement);
        }
      }
    }
  }

  Scratch.extensions.register(new SPmoreOPs());
})(Scratch);
