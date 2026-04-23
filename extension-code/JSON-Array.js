// Name: Swift JSON (JSON and Array)
// ID: SPjson
// Description: Super Fast JSON and Array Extension.
// By: SharkPool
// Licence: MIT

// Version V.1.2.04

(function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) throw new Error("Swift JSON must run unsandboxed!");

  const menuIconURI =
"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4My4yMjciIGhlaWdodD0iODMuMjI3IiB2aWV3Qm94PSIwIDAgODMuMjI3IDgzLjIyNyI+PHBhdGggZD0iTTAgNDEuNjE0QzAgMTguNjMxIDE4LjYzMSAwIDQxLjYxNCAwczQxLjYxNCAxOC42MzEgNDEuNjE0IDQxLjYxNC0xOC42MzEgNDEuNjE0LTQxLjYxNCA0MS42MTRTMCA2NC41OTcgMCA0MS42MTQiIGZpbGw9IiM1MTYxYTYiLz48cGF0aCBkPSJNNC4zNDQgNDEuNjE0YzAtMjAuNTcgMTYuNjg3LTM3LjI3IDM3LjI3LTM3LjI3czM3LjI3IDE2LjY4NyAzNy4yNyAzNy4yNy0xNS43ODMgMzcuMjctMzcuMjcgMzcuMjctMzcuMjctMTYuNy0zNy4yNy0zNy4yNyIgZmlsbD0iIzc0OGJlZSIvPjxwYXRoIGQ9Ik0zNi43OTggNjQuMjk0YTIuMTk1IDIuMTk1IDAgMCAxLTIuMTk1IDIuMTk0SDI4Ljc1YTUuMTI3IDUuMTI3IDAgMCAxLTUuMTItNS4xMlY1MC4xNjNsLTYuNDk3LTYuOTk3YTIuMTk1IDIuMTk1IDAgMCAxIDAtMy4xMDRsNi40OTYtNi45OTdWMjEuODYxYTUuMTI3IDUuMTI3IDAgMCAxIDUuMTIxLTUuMTIxaDUuODUzYTIuMTk1IDIuMTk1IDAgMSAxIDAgNC4zOUgyOC43NWEuNzMuNzMgMCAwIDAtLjczMS43M3YxMi4xMTRjMCAuNTgzLS4yMzEgMS4xNC0uNjQzIDEuNTUybC01LjU4OCA2LjA4OCA1LjU4OCA2LjA4OGMuNDEyLjQxMS42NDMuOTcuNjQzIDEuNTUydjEyLjExM2MwIC40MDMuMzI4LjczMi43MzEuNzMyaDUuODUzYzEuMjEyIDAgMi4xOTUuOTgyIDIuMTk1IDIuMTk0eiIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjZmZmIi8+PHBhdGggZD0iTTM3LjAxOCA2NC4yOTRhMi4xOTUgMi4xOTUgMCAwIDEtMi4xOTUgMi4xOTRoLTUuODUyYTUuMTI3IDUuMTI3IDAgMCAxLTUuMTIyLTUuMTJWNTAuMTYzbC02LjQ5Ni02Ljk5N2EyLjE5NSAyLjE5NSAwIDAgMSAwLTMuMTA0bDYuNDk2LTYuOTk3VjIxLjg2MWE1LjEyNyA1LjEyNyAwIDAgMSA1LjEyMS01LjEyMWg1Ljg1M2EyLjE5NSAyLjE5NSAwIDEgMSAwIDQuMzloLTUuODUyYS43My43MyAwIDAgMC0uNzMyLjczdjEyLjExNGMwIC41ODMtLjIzMSAxLjE0LS42NDMgMS41NTJsLTUuNTg4IDYuMDg4IDUuNTg4IDYuMDg4Yy40MTIuNDExLjY0My45Ny42NDMgMS41NTJ2MTIuMTEzYzAgLjQwMy4zMjguNzMyLjczMS43MzJoNS44NTNjMS4yMTIgMCAyLjE5NS45ODIgMi4xOTUgMi4xOTR6bTExLjM4Ni0yLjE5NWg1Ljg1M2EuNzMuNzMgMCAwIDAgLjczMi0uNzMyVjQ5LjI1NGMwLS41ODMuMjMxLTEuMTQuNjQzLTEuNTUybDUuNTg4LTYuMDg4LTUuNTg4LTYuMDg4YTIuMiAyLjIgMCAwIDEtLjY0My0xLjU1MlYyMS44NjFhLjczLjczIDAgMCAwLS43MzItLjczMmgtNS44NTJhMi4xOTUgMi4xOTUgMCAwIDEgMC00LjM5aDUuODUyYTUuMTI3IDUuMTI3IDAgMCAxIDUuMTIyIDUuMTIydjExLjIwNGw2LjQ5NiA2Ljk5N2EyLjE5NSAyLjE5NSAwIDAgMSAwIDMuMTA0bC02LjQ5NiA2Ljk5N3YxMS4yMDRhNS4xMjcgNS4xMjcgMCAwIDEtNS4xMjIgNS4xMjFoLTUuODUyYTIuMTk1IDIuMTk1IDAgMCAxIDAtNC4zOXoiIGZpbGw9IiNmZmYiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyLjUiLz48L3N2Zz4=";

  const arrowURI =
"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNS44OTMiIGhlaWdodD0iMTUuODkzIiB2aWV3Qm94PSIwIDAgMTUuODkzIDE1Ljg5MyI+PHBhdGggZD0iTTkuMDIxIDEyLjI5NHYtMi4xMDdsLTYuODM5LS45MDVDMS4zOTggOS4xODQuODQ2IDguNDg2Ljk2MiA3LjcyN2MuMDktLjYxMi42MDMtMS4wOSAxLjIyLTEuMTY0bDYuODM5LS45MDVWMy42YzAtLjU4Ni43MzItLjg2OSAxLjE1Ni0uNDY0bDQuNTc2IDQuMzQ1YS42NDMuNjQzIDAgMCAxIDAgLjkxOGwtNC41NzYgNC4zNmMtLjQyNC40MDQtMS4xNTYuMTEtMS4xNTYtLjQ2NSIgZmlsbD0ibm9uZSIgc3Ryb2tlLW9wYWNpdHk9Ii4xNSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjEuNzUiLz48cGF0aCBkPSJNOS4wMjEgMTIuMjk0di0yLjEwN2wtNi44MzktLjkwNUMxLjM5OCA5LjE4NC44NDYgOC40ODYuOTYyIDcuNzI3Yy4wOS0uNjEyLjYwMy0xLjA5IDEuMjItMS4xNjRsNi44MzktLjkwNVYzLjZjMC0uNTg2LjczMi0uODY5IDEuMTU2LS40NjRsNC41NzYgNC4zNDVhLjY0My42NDMgMCAwIDEgMCAuOTE4bC00LjU3NiA0LjM2Yy0uNDI0LjQwNC0xLjE1Ni4xMS0xLjE1Ni0uNDY1IiBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48cGF0aCBkPSJNMCAxNS44OTJWMGgxNS44OTJ2MTUuODkyeiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==";

  const Cast = Scratch.Cast;
  const vm = Scratch.vm;
  const runtime = vm.runtime;
  const isPM = Scratch.extensions.isPenguinMod;

  const OBJ_SHAPE = isPM ? Scratch.BlockShape.PLUS : Scratch.BlockShape.ROUND;
  const ARR_SHAPE = Scratch.BlockShape.SQUARE;

  const DEFAULT_ARGS = {
    "obj": `{"key": "value"}`,
    "arr1": `["a", "b", "c"]`,
    "arr2": `["a", "b", "b", "a"]`,
    "arr3": `["a", "b"]`,
  };

  let extContext;

  /* extension utilities */
  const genArgument = (type, value) => {
    return {
      type: Scratch.ArgumentType.STRING,
      exemptFromNormalization: true,
      shape: type === "arr" ? ARR_SHAPE : runtime.pmVersion ? OBJ_SHAPE : "SPjson_objShape",
      defaultValue: value
    }
  };

  const genRegenReporter = (opcode, text) => {
    return {
      opcode, text,
      blockType: Scratch.BlockType.REPORTER, color1: "#677cd6",
      hideFromPalette: true, allowDropAnywhere: true, canDragDuplicate: true,
    };
  };

  const genXML = (blockJSON) => {
    let xmlBlock = `<block type="SPjson_${blockJSON.opcode}">`;
    for (const [name, arg] of Object.entries(blockJSON.arguments)) {
      if (name === "IMG" || name === "BOOL") continue;

      if (arg.menu) xmlBlock += `<field name="${name}">${arg.defaultValue ?? ""}</field>`;
      else {
        const type = arg.type === "number" ? "math_number" : "text";
        const fieldType = arg.type === "number" ? "NUM" : "TEXT";
        
        xmlBlock += `<value name="${name}"><shadow type="`;
        if (arg.fillIn) xmlBlock += `SPjson_${arg.fillIn}">`;
        else xmlBlock += type + `"><field name="${fieldType}">${arg.defaultValue ?? ""}</field>`;
        xmlBlock += "</shadow></value>";
      }
    }
    xmlBlock += "</block>";

    return [
      blockJSON,
      {
        blockType: Scratch.BlockType.XML, xml: xmlBlock
      }
    ];
  };

  const hasOwn = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);

  const resolveCircular = (obj) => {
    const seen = new WeakSet();
    const detect = (val, parent, key) => {
      if (val && typeof val === "object") {
        if (seen.has(val)) {
          parent[key] = Array.isArray(val) ? "[...]" : "{...}";
          return;
        }

        seen.add(val);
        for (let k in val) {
          if (hasOwn(val, k)) detect(val[k], val, k);
        }
      }
    }

    detect(obj);
    return obj;
  };

  // Fix potential recursive objects in Penguinmod
  vm.on("SERIALIZE", () => {
    for (const target of runtime.targets) {
      const variables = Object.values(target.variables);
      for (const variable of variables) resolveCircular(variable.value);
    }
  });

  /* Blockly */
  if (Scratch.gui) Scratch.gui.getBlockly().then(SB => {
    if (isPM) {
      // TODO remove me on penguinmod port
      // custom object shape (penguinmod)
      if (!runtime.pmVersion) SB.BlockSvg.registerCustomShape("SPjson_objShape", {
        emptyInputPath: "m 0 0 z", emptyInputWidth: 0, // unused
        leftPath: (block) => {
          if (block.isShadow_) {
            const offset = block.edgeShapeWidth_ - 11;
            const height = block.edgeShapeWidth_ - 16;
            return [
              `l ${-offset} 0 c -11 0 -1 ${-11 - height} -11 ${-11 - height}`,
              `c -4 0 -4 -9 0 -9 c 10 0 0 ${-12 - height} 11 ${-12 - height}`
            ];
          } else {
            const steps = [];
            block.edgeShape_ = OBJ_SHAPE;
            block.renderDrawLeft_(steps, 0);
            return [steps[1]];
          }
        },
        rightPath: (block) => {
          if (block.isShadow_) {
            const offset = block.edgeShapeWidth_ - 11;
            const height = block.edgeShapeWidth_ - 16;
            return [
              `l ${offset} 0 c 11 0 1 ${11 + height} 11 ${11 + height}`,
              `c 4 0 4 9 0 9`,
              `c -10 0 0 ${12 + height} -11 ${12 + height} l ${-offset} 0`
            ];
          } else {
            const steps = [];
            block.edgeShape_ = OBJ_SHAPE;
            block.renderDrawRight_(steps, 0);
            return [steps[0]];
          }
        },
        blockPadding: {
          internal: {}, external: SB.BlockSvg.SHAPE_IN_SHAPE_PADDING[5]
        },
      });
      SB.BlockSvg.SHAPE_IN_SHAPE_PADDING[3]["custom-SPjson_objShape"] = 10;
    } else {
      /* turbowarp support */
      // regenerated reporters
      const regenReporters = [
        "SPjson_objKey", "SPjson_objValue", "SPjson_arrIndex",
        "SPjson_arrValueA", "SPjson_arrValueB", "SPjson_arrAccum"
      ];

      const ogCheck = SB.scratchBlocksUtils.isShadowArgumentReporter;
      SB.scratchBlocksUtils.isShadowArgumentReporter = function (block) {
        const result = ogCheck(block);
        if (result) return true;
        return block.isShadow() && regenReporters.includes(block.type);
      };

      // custom object shape
      const jsonBlocks = [
        "objValid", "jsonBuilder", "getKey", "getPath",
        "setKey", "setPath", "deleteKey", "jsonSize",
        "keyIndex", "getEntry", "extractJson", "mergeJson",
        "jsonMap", "jsonMake", "objBlank"
      ];
      const ignoreOuter = [
        "getKey", "getPath", "jsonSize", "jsonValid", "objValid", "extractJson"
      ];

      const makeShape = (width) => {
        width -= 35;
        return (`
          m20 0h${width}C${width + 30} 0 ${width + 30} 4 ${width + 30} 12
          c0 0 2 0 3 0 1 0 3 2 3 3 0 1 0 8 0 10 0 2-1 3-3 3-2 0-3 0-3 0
          C${width + 30} 37 ${width + 30} 40 ${width + 20} 40h${(width + 10) * -1}
          C5 40 5 36 4 28c0 0-1 0-2 0-2 0-3-1-3-3l0-10c0 0 0-3 4-3 0 0 1 0 1 0C5 4 5 0 10 0z
        `).replaceAll("\n", "").trim();
      };

      const ogRender = SB.BlockSvg.prototype.render;
      SB.BlockSvg.prototype.render = function (...args) {
        const data = ogRender.call(this, ...args);

        const type = this.type.split("_")[1] ?? "";
        if (this.svgPath_ && jsonBlocks.includes(type)) {
          if (!ignoreOuter.includes(type)) {
            const fixedWidth = this.width - 35;
            this.svgPath_.setAttribute("transform", `scale(1, ${this.height / 40})`);
            this.svgPath_.setAttribute("d", makeShape(this.width));
          }
          this.inputList.forEach((input) => {
            if (input.name.startsWith("OBJ")) {
              const block = input.connection.targetBlock();
              if (block && block.type === "text" && block.svgPath_) {
                block.svgPath_.setAttribute("transform", `scale(1, ${block.height / 40})`);
                block.svgPath_.setAttribute("d", makeShape(block.width));
              }
            }
          });
        }
        return data;
      }
    }
  });

  /* GUI */
  // Stringify raw JSON in reporters
  const ogVisReport = runtime.visualReport;
  runtime.visualReport = function (...args) {
    const valueArg = isPM && !runtime.pmVersion ? 1 : 2; // Modern runtime has an extra argument
    const value = args[valueArg];
    if (
      value && 
      (value.constructor?.name === "Object" || value.constructor?.name === "Array")
    ) {
      args[valueArg] = JSON.stringify(
        resolveCircular(structuredClone(value))
      );
    }

    return ogVisReport.call(this, ...args);
  }

  /* Compiler */
  function getCompiler() {
    if (vm.exports.i_will_not_ask_for_help_when_these_break) return vm.exports.i_will_not_ask_for_help_when_these_break();
    else if (vm.exports.JSGenerator && vm.exports.IRGenerator?.exports) return {
      ...vm.exports, ScriptTreeGenerator: vm.exports.IRGenerator.exports.ScriptTreeGenerator
    };
  }
  const compiler = getCompiler();
  if (compiler) {
    const { JSGenerator, ScriptTreeGenerator } = compiler;
    const exp = JSGenerator.exports ? JSGenerator.exports : JSGenerator.unstable_exports;

    /* IRGen Helpers */
    let irContext;
    const createIR = (block, type, inputs) => {
      const obj = {
        kind: "SPjson." + type
      };

      for (let i = 0; i < inputs.length; i += 2) {
        const irName = inputs[i];
        const bName = inputs[i + 1];
        obj[irName] = irContext.descendInputOfBlock(block, bName);
      }

      return obj;
    };
    
    /* JSGen Helpers */
    const OBJ_UTIL = "SPjsonUtil";

    const _safeReturn = (type) => {
      return `(typeof ${type} === "undefined" ? "":${type})`;
    };

    const _preventACE = (imminentObj) => {
      if (extContext._preventUnsafeAce) {
        return `(prop = ${imminentObj}, propType = prop?.constructor?.name, typeof prop === "object"? prop.customId || propType === "Object" || propType === "Array" ? prop : "" : prop)`;
      }
      return imminentObj;
    };

    const _objParser = (test) => {
      return extContext.alwaysTryParse ? OBJ_UTIL + ".parseO(" + test + ")" : test;
    };
    const _arrParser = (test) => {
      return extContext.alwaysTryParse ? OBJ_UTIL + ".parseA(" + test + ")" : test;
    };
    const _anyParser = (test) => {
      return extContext.alwaysTryParse ? OBJ_UTIL + ".parse(" + test + ")" : test;
    };

    const _safeCast = (value) => {
      if (extContext.alwaysCast) return `${OBJ_UTIL}.safeCast(${value})`;
      else return value;
    };

    const insertParser = (type) => {
      const defaultVal = type === null ? "o" : type === 0 ? "{}" : "[]";
      let script = "(function(o) {\n";

      // raw values
      if (type === null) script += `if (typeof o === "object") return o;`;
      else if (type === 0) script += `if (typeof o === "object" && !Array.isArray(o)) return o;`;
      else script += `if (Array.isArray(o)) return o;`;

      // parser
      script += `try{`;
      if (type === null) script += `return JSON.parse(o);`;
      else script += `let p;return (p = JSON.parse(o)) && ${type === 0 ? "!" : ""}Array.isArray(p) ? p : ${defaultVal};`;
      script += `}catch{return ${defaultVal}}`;
      script += "}),";
      return script;
    };

    const insertArrayFreqSort = () => {
      let script = "freqSort: (function(spA,isComm) {\n";
      script += "const map = {};spA.forEach(i => {map[i] = (map[i] || 0) + 1});\n";
      script += "if (isComm) return spA.sort((a, b) => map[b] - map[a] || spA.indexOf(a) - spA.indexOf(b));\n";
      script += "else return spA.sort((a, b) => map[a] - map[b] || spA.indexOf(a) - spA.indexOf(b));\n";
      script += "}),\n";
      return script;
    };

    // Instead of reusing the helpers, just inject them for reuse in the script
    let currentCompiler = compiler;
    if (vm.exports.these_broke_before_and_will_break_again) {
      // handle the new compiler's 'createScriptFactory'
      currentCompiler = vm.exports.these_broke_before_and_will_break_again();
    }
    const _ogCreateScriptFactory = currentCompiler.JSGenerator.prototype.createScriptFactory;
    currentCompiler.JSGenerator.prototype.createScriptFactory = function (...args) {
      let utilObj = "const " + OBJ_UTIL + " = {\n";
      utilObj += "parse: " + insertParser(null);
      utilObj += "parseO: " + insertParser(0);
      utilObj += "parseA: " + insertParser(1);
      utilObj += `safeCast: (function(val) {\nreturn typeof val === "object" ? val : (isNaN(val) || val === Infinity || val === -Infinity) ? "" + val : val;\n}),\n`;
      utilObj += "hasOwn: (function(obj, prop) {\nreturn Object.prototype.hasOwnProperty.call(obj,prop)\n}),\n";
      utilObj += insertArrayFreqSort();
      utilObj += "};\n";

      this.source = utilObj + this.source;
      return _ogCreateScriptFactory.call(this, ...args);
    }
    
    const _ogIRdescendStack = ScriptTreeGenerator.prototype.descendStackedBlock;
    ScriptTreeGenerator.prototype.descendStackedBlock = function (block) {
      switch (block.opcode) {
        case "SPjson_forEach":
          this.analyzeLoop();
          return {
            kind: "SPjson.forEach",
            obj: this.descendInputOfBlock(block, "OBJ"),
            branch: this.descendSubstack(block, "SUBSTACK")
          };
        case "SPjson_doInput": {
          const command = this.descendInputOfBlock(block, "THING");
          return { kind: "SPjson.do", command };
        }
        default: return _ogIRdescendStack.call(this, block);
      }
    }
    const _ogJSdescendStack = JSGenerator.prototype.descendStackedBlock;
    JSGenerator.prototype.descendStackedBlock = function (node) {
      switch (node.kind) {
        case "SPjson.forEach":
          const obj = this.descendInput(node.obj).asUnknown();
          const objVar = this.localVariables.next();
          const isArray = this.localVariables.next();
          const i = this.localVariables.next();

          this.source += `let ${objVar} = ${_anyParser(obj)};\n`;
          this.source += `const ${isArray} = Array.isArray(${objVar});\n`;
          this.source += `${objVar} = Object.entries(${objVar})\n;`;
          this.source += `for (let ${i} = 0; ${i} < ${objVar}.length; ${i}++) {;\n`;
          this.source += `let [SPobjK, SPobjV] = ${objVar}[${i}];\n`;
          this.source += `if (${isArray}) SPobjK++\n`;
          this.descendStack(node.branch, new exp.Frame(true));
          this.yieldLoop();
          this.source += `}\n`;
          break;
        case "SPjson.do":
          // literally only used to run reporters as commands
          this.source += `(${this.descendInput(node.command).asUnknown()});\n`;
          break;
        default: return _ogJSdescendStack.call(this, node);
      }
    }

    const _ogIRdescendInp = ScriptTreeGenerator.prototype.descendInput;
    ScriptTreeGenerator.prototype.descendInput = function (block) {
      irContext = this;

      switch (block.opcode) {
        case "SPjson_arrValueA": return { kind: "SPjson.arrValA" };
        case "SPjson_arrValueB": return { kind: "SPjson.arrValB" };
        case "SPjson_arrIndex": return { kind: "SPjson.arrIndex" };
        case "SPjson_objKey": return { kind: "SPjson.objKey" };
        case "SPjson_objValue": return { kind: "SPjson.objVal" };
        case "SPjson_arrAccum": return { kind: "SPjson.arrAccum" };
        /* Objects */
        case "SPjson_objBlank": return { kind: "SPjson.obj" };
        case "SPjson_objValid": return createIR(block, "isObj", ["obj", "OBJ"]);
        case "SPjson_jsonBuilder": return createIR(block, "jsonBuild", ["key", "KEY", "val", "VAL"]);
        case "SPjson_getKey": return createIR(block, "getKey", ["obj", "OBJ", "key", "KEY"]);
        case "SPjson_getPath": return createIR(block, "getPath", ["obj", "OBJ", "path", "PATH"]);
        case "SPjson_setKey": return createIR(block, "setKey", ["obj", "OBJ", "key", "KEY", "val", "VAL"]);
        case "SPjson_setPath": return createIR(block, "setPath", ["obj", "OBJ", "path", "PATH", "val", "VAL"]);
        case "SPjson_deleteKey": return createIR(block, "deleteKey", ["obj", "OBJ", "key", "KEY"]);
        case "SPjson_jsonSize": return createIR(block, "objSize", ["obj", "OBJ"]);
        case "SPjson_getEntry": return createIR(block, "getEntry", ["obj", "OBJ", "key", "KEY"]);
        case "SPjson_extractJson": return createIR(block, "extractObj", ["obj", "OBJ", "type", "TYPE"]);
        case "SPjson_mergeJson": return createIR(block, "mergeObj", ["obj1", "OBJ1", "obj2", "OBJ2"]);
        case "SPjson_jsonMake":
          return createIR(block, "jsonMake", [
            "txt", "TXT",
            "split", "SPLIT",
            "delim", "DELIM"
          ]);
        case "SPjson_jsonMap": return createIR(block, "jsonMap", ["obj", "OBJ", "value", "VALUE"]);
        /* Arrays */
        case "SPjson_arrBlank": return createIR(block, "arr", []);
        case "SPjson_arrValid": return createIR(block, "arrValid", ["arr", "ARR"]);
        case "SPjson_arrBuilder": return createIR(block, "arrBuilder", ["val", "VAL"]);
        case "SPjson_arrAdd": return createIR(block, "arrAdd", ["arr", "ARR", "item", "ITEM"]);
        case "SPjson_arrInsert":
          return createIR(block, "arrInsert", [
            "arr", "ARR",
            "ind", "IND",
            "item", "ITEM"
          ]);
        case "SPjson_arrReplace":
          return createIR(block, "arrReplace", [
            "arr", "ARR",
            "ind", "IND",
            "item", "ITEM"
          ]);
        case "SPjson_arrSwap":
          return createIR(block, "arrSwap", [
            "arr", "ARR",
            "ind1", "IND1",
            "ind2", "IND2"
          ]);
        case "SPjson_arrDelete": return createIR(block, "arrDelete", ["arr", "ARR", "ind", "IND"]);
        case "SPjson_arrGet": return createIR(block, "arrGet", ["arr", "ARR", "ind", "IND"]);
        case "SPjson_arrSlice":
          return createIR(block, "arrSlice", [
            "arr", "ARR",
            "ind1", "IND1",
            "ind2", "IND2"
          ]);
        case "SPjson_arrLength": return createIR(block, "arrLength", ["arr", "ARR"]);
        case "SPjson_itemExists": return createIR(block, "itemExists", ["arr", "ARR", "item", "ITEM"]);
        case "SPjson_arrMatches": return createIR(block, "arrMatches", ["arr", "ARR", "item", "ITEM"]);
        case "SPjson_arrContainers": return createIR(block, "arrContainers", ["arr", "ARR", "item", "TESTER"]);
        case "SPjson_itemIndex":
          return createIR(block, "itemIndex", [
            "arr", "ARR",
            "ind", "IND",
            "item", "ITEM"
          ]);
        case "SPjson_mergeArray": return createIR(block, "arrMerge", ["arr1", "ARR1", "arr2", "ARR2"]);
        case "SPjson_repeatArray": return createIR(block, "arrRepeat", ["arr", "ARR", "amt", "NUM"]);
        case "SPjson_fillArray": return createIR(block, "arrFill", ["arr", "ARR", "amt", "NUM"]);
        case "SPjson_flatArray": return createIR(block, "arrFlat", ["arr", "ARR", "amt", "NUM"]);
        case "SPjson_arrOrder": return createIR(block, "arrOrder", ["arr", "ARR", "type", "ORDERER"]);
        case "SPjson_arrMake":
          return createIR(block, "arrMake", [
            "txt", "TXT",
            "split", "SPLIT",
            "type", "TYPE"
          ]);
        case "SPjson_arrCheck":
          return {
            kind: "SPjson.arrCheck",
            type: block.fields.TYPE.value,
            array: this.descendInputOfBlock(block, "ARR"),
            bool: this.descendInputOfBlock(block, "BOOL"),
          };
        case "SPjson_arrMap": return createIR(block, "arrMap", ["array", "ARR", "value", "VALUE"]);
        case "SPjson_arrSort": return createIR(block, "arrSort", ["array", "ARR", "value", "VALUE"]);
        case "SPjson_arrReduce": return createIR(block, "arrReduce", [
          "array", "ARR",
          "init", "INIT",
          "value", "VALUE"
        ]);
        /* Extras */
        case "SPjson_jsonValid": return createIR(block, "jsonValid", ["obj", "OBJ"]);
        case "SPjson_parse": return createIR(block, "parse", ["obj", "OBJ"]);
        case "SPjson_clone": return createIR(block, "clone", ["obj", "OBJ"]);
        case "SPjson_filterNew":
          return {
            kind: "SPjson.filter",
            type: block.fields.TYPE.value,
            obj: this.descendInputOfBlock(block, "OBJ"),
            bool: this.descendInputOfBlock(block, "BOOL")
          };
        default: return _ogIRdescendInp.call(this, block);
      }
    };
    const _ogJSdescendInp = JSGenerator.prototype.descendInput;
    JSGenerator.prototype.descendInput = function (node) {
      switch (node.kind) {
        case "SPjson.arrValA": return new exp.TypedInput(_safeReturn("SParrA"), exp.TYPE_UNKNOWN);
        case "SPjson.arrValB": return new exp.TypedInput(_safeReturn("SParrB"), exp.TYPE_UNKNOWN);
        case "SPjson.arrIndex":
        case "SPjson.objKey": return new exp.TypedInput(_safeReturn("SPobjK"), exp.TYPE_UNKNOWN);
        case "SPjson.objVal": return new exp.TypedInput(_safeReturn("SPobjV"), exp.TYPE_UNKNOWN);
        case "SPjson.arrAccum": return new exp.TypedInput(_safeReturn("SPaccum"), exp.TYPE_UNKNOWN);
        /* Objects */
        case "SPjson.obj": return new exp.TypedInput("{}", exp.TYPE_UNKNOWN);
        case "SPjson.isObj": {
          const obj = this.descendInput(node.obj).asUnknown();
          const vObj = this.localVariables.next();
          return new exp.TypedInput(`((${vObj} = ${_anyParser(obj)}), typeof ${vObj} === "object" && !Array.isArray(${vObj}))`, exp.TYPE_BOOLEAN);
        }
        case "SPjson.jsonBuild": {
          const key = this.descendInput(node.key).asString();
          const val = this.descendInput(node.val).asUnknown();
          return new exp.TypedInput(`{[${key}]:${_safeCast(val)}}`, exp.TYPE_UNKNOWN);
        }
        case "SPjson.getKey": {
          const obj = this.descendInput(node.obj).asUnknown();
          const key = this.descendInput(node.key).asString();
          const vObj = this.localVariables.next();
          const vKey = this.localVariables.next();
          if (extContext.alwaysValidateKeys) {
            return new exp.TypedInput(
              `(${vObj} = ${_objParser(obj)}, ${vKey} = ${key}, ${OBJ_UTIL}.hasOwn(${vObj}, ${vKey}) ? ${_preventACE(vObj + "[" + vKey + "]")} ?? "" : "")`,
              exp.TYPE_UNKNOWN
            );
          }
          return new exp.TypedInput("(" + _preventACE(_objParser(obj) + "[" + key + "]") + ")", exp.TYPE_UNKNOWN);
        }
        case "SPjson.getPath": {
          const obj = this.descendInput(node.obj).asUnknown();
          const path = this.descendInput(node.path).asUnknown();
          let script = "((spO,p) => {";
          script += "for (const k of p) {";
          if (extContext.alwaysValidateKeys) script += `if (${OBJ_UTIL}.hasOwn(spO, ("" + k))) spO = spO[("" + k)];`;
          else script += `if (spO[("" + k)]) spO = spO[("" + k)];`;
          script += "else return '';";
          script += "}return " + _preventACE("spO") + " ?? '';";
          script += `})(${_objParser(obj)},${_arrParser(path)})`;
          return new exp.TypedInput(script, exp.TYPE_UNKNOWN);
        }
        case "SPjson.setKey": {
          const obj = this.descendInput(node.obj).asUnknown();
          const key = this.descendInput(node.key).asString();
          const val = this.descendInput(node.val).asUnknown();
          const vObj = this.localVariables.next();
          return new exp.TypedInput(
            `((${vObj} = ${_objParser(obj)}),${vObj}[${key}] = ${_safeCast(val)}, ${vObj})`,
            exp.TYPE_UNKNOWN
          );
        }
        case "SPjson.setPath": {
          const obj = this.descendInput(node.obj).asUnknown();
          const path = this.descendInput(node.path).asUnknown();
          const val = this.descendInput(node.val).asUnknown();
          return new exp.TypedInput(
            `((spO,p,i=spO,safe=1)=>(p.forEach((k,idx)=>safe && (i = ${_preventACE("i")} || "", safe = !!i, safe && (i = idx===p.length-1 ? (i[k]=${_safeCast(val)}) : (i[k]=${_preventACE(`i[k]`)} || i[k] || {})))), safe ? spO : ""))(${_objParser(obj)},${_arrParser(path)})`,
            exp.TYPE_UNKNOWN
          );
        }
        case "SPjson.deleteKey": {
          const obj = this.descendInput(node.obj).asUnknown();
          const key = this.descendInput(node.key).asString();
          const vObj = this.localVariables.next();
          return new exp.TypedInput(`((${vObj} = ${_objParser(obj)}), delete ${vObj}[${key}], ${vObj})`, exp.TYPE_UNKNOWN);
        }
        case "SPjson.objSize": {
          const obj = this.descendInput(node.obj).asUnknown();
          return new exp.TypedInput(`Object.keys(${_objParser(obj)}).length`, exp.TYPE_NUMBER);
        }
        case "SPjson.getEntry": {
          const obj = this.descendInput(node.obj).asUnknown();
          const key = this.descendInput(node.key).asString();
          const vKey = this.localVariables.next();
          return new exp.TypedInput(`(${vKey} = ${key}, {[${vKey}]:${_objParser(obj)}[${vKey}]})`, exp.TYPE_UNKNOWN);
        }
        case "SPjson.extractObj": {
          const obj = this.descendInput(node.obj).asUnknown();
          const type = this.descendInput(node.type).asString();
          return new exp.TypedInput(`Object[${type} === "keys"?"keys":${type} === "values"?"values":"entries"](${_objParser(obj)})`, exp.TYPE_UNKNOWN);
        }
        case "SPjson.mergeObj": {
          const obj1 = this.descendInput(node.obj1).asUnknown();
          const obj2 = this.descendInput(node.obj2).asUnknown();
          return new exp.TypedInput(`{...${_objParser(obj1)}, ...${_objParser(obj2)}}`, exp.TYPE_UNKNOWN);
        }
        case "SPjson.jsonMake": {
          const txt = this.descendInput(node.txt).asString();
          const split = this.descendInput(node.split).asString();
          const delim = this.descendInput(node.delim).asString();
          const vObj = this.localVariables.next();
          return new exp.TypedInput(`(${vObj} = {}, ${txt}.split(${split}).forEach((i) => {const v = i.split(${delim}); ${vObj}[v[0]] = v[1] ?? "";}), ${vObj})`, exp.TYPE_UNKNOWN);
        }
        case "SPjson.jsonMap": {
          const obj = this.descendInput(node.obj).asUnknown();
          const safeValue = this.descendInput(node.value).asUnknown();
          return new exp.TypedInput(`(function() {
            function* generator() {
              const p = ${_objParser(obj)};
              for (const [SPobjK, SPobjV] of Object.entries(p)) yield [SPobjK, ${safeValue}];
            }
            return Object.fromEntries(generator());
          })()`, exp.TYPE_UNKNOWN);
        }
        /* Arrays */
        case "SPjson.arr": return new exp.TypedInput("[]", exp.TYPE_UNKNOWN);
        case "SPjson.arrValid": {
          const arr = this.descendInput(node.arr).asUnknown();
          return new exp.TypedInput(`(Array.isArray(${_anyParser(arr)}))`, exp.TYPE_BOOLEAN);
        }
        case "SPjson.arrBuilder": {
          const val = this.descendInput(node.val).asUnknown();
          return new exp.TypedInput(`[${_safeCast(val)}]`, exp.TYPE_UNKNOWN);
        }
        case "SPjson.arrAdd": {
          const arr = this.descendInput(node.arr).asUnknown();
          const item = this.descendInput(node.item).asUnknown();
          const vArr = this.localVariables.next();
          return new exp.TypedInput(`((${vArr} = ${_arrParser(arr)}), ${vArr}.push(${_safeCast(item)}), ${vArr})`, exp.TYPE_UNKNOWN);
        }
        case "SPjson.arrInsert": {
          const arr = this.descendInput(node.arr).asUnknown();
          const item = this.descendInput(node.item).asUnknown();
          const ind = this.descendInput(node.ind).asNumber();
          const vArr = this.localVariables.next();
          const vIt = this.localVariables.next();
          return new exp.TypedInput(
            `((${vArr} = ${_arrParser(arr)}, ${vIt} = ${_safeCast(item)}, i = Math.max(0, ${ind} - 1)), i ? ${vArr}.splice(i, 0, ${vIt}) : ${vArr}.unshift(${vIt}), ${vArr})`,
            exp.TYPE_UNKNOWN
          );
        }
        case "SPjson.arrReplace": {
          const arr = this.descendInput(node.arr).asUnknown();
          const item = this.descendInput(node.item).asUnknown();
          const ind = this.descendInput(node.ind).asNumber();
          const vArr = this.localVariables.next();
          return new exp.TypedInput(
            `((${vArr} = ${_arrParser(arr)}, i = ${ind} - 1), (() => {while(${vArr}.length <= i) ${vArr}.push("")})(), ${vArr}[i] = ${_safeCast(item)}, ${vArr})`,
            exp.TYPE_UNKNOWN
          );
        }
        case "SPjson.arrSwap": {
          const arr = this.descendInput(node.arr).asUnknown();
          const ind1 = this.descendInput(node.ind1).asNumber();
          const ind2 = this.descendInput(node.ind2).asNumber();
          const vArr = this.localVariables.next();
          return new exp.TypedInput(
            `((${vArr} = ${_arrParser(arr)}, i1 = Math.max(0, ${ind1} - 1), i2 = Math.max(0, ${ind2} - 1), m = Math.max(i1, i2)), (() => {while(${vArr}.length <= m) ${vArr}.push("")})(), t = ${vArr}[i1], ${vArr}[i1] = ${vArr}[i2], ${vArr}[i2] = t, ${vArr})`,
            exp.TYPE_UNKNOWN
          );
        }
        case "SPjson.arrDelete": {
          const arr = this.descendInput(node.arr).asUnknown();
          const ind = this.descendInput(node.ind).asNumber();
          const vArr = this.localVariables.next();
          return new exp.TypedInput(`((${vArr} = ${_arrParser(arr)}), ${vArr}.splice(${ind} - 1, 1), ${vArr})`, exp.TYPE_UNKNOWN);
        }
        case "SPjson.arrGet": {
          const arr = this.descendInput(node.arr).asUnknown();
          const ind = this.descendInput(node.ind).asNumber();
          return new exp.TypedInput(`(${_arrParser(arr)}[${ind} - 1])`, exp.TYPE_UNKNOWN);
        }
        case "SPjson.arrSlice": {
          const arr = this.descendInput(node.arr).asUnknown();
          const start = this.descendInput(node.ind1).asNumber();
          const end = this.descendInput(node.ind2).asNumber();
          return new exp.TypedInput(`(${_arrParser(arr)}.slice(${start} - 1, ${end}))`, exp.TYPE_UNKNOWN);
        }
        case "SPjson.arrLength": {
          const arr = this.descendInput(node.arr).asUnknown();
          return new exp.TypedInput(`(${_arrParser(arr)}.length)`, exp.TYPE_NUMBER);
        }
        case "SPjson.itemExists": {
          const arr = this.descendInput(node.arr).asUnknown();
          const item = this.descendInput(node.item).asUnknown();
          return new exp.TypedInput(`(${_arrParser(arr)}.indexOf(${_safeCast(item)}) > -1)`, exp.TYPE_BOOLEAN);
        }
        case "SPjson.arrMatches": {
          const arr = this.descendInput(node.arr).asUnknown();
          const item = this.descendInput(node.item).asString();
          const vArr = this.localVariables.next();
          const vIt = this.localVariables.next();
          return new exp.TypedInput(`((${vArr} = ${_arrParser(arr)}, ${vIt} = ${_safeCast(item)}), ${vArr}.filter(i => i == ${vIt}).length)`, exp.TYPE_NUMBER);
        }
        case "SPjson.arrContainers": {
          const arr = this.descendInput(node.arr).asUnknown();
          const item = this.descendInput(node.item).asString();
          const vArr = this.localVariables.next();
          const vIt = this.localVariables.next();
          return new exp.TypedInput(`((${vArr} = ${_arrParser(arr)}, ${vIt} = ${_safeCast(item)}), ${vArr}.filter(i => ("" + i).includes(${vIt})).length)`, exp.TYPE_NUMBER);
        }
        case "SPjson.itemIndex": {
          const arr = this.descendInput(node.arr).asUnknown();
          const item = this.descendInput(node.item).asString();
          const ind = this.descendInput(node.ind).asNumber();
          const vArr = this.localVariables.next();
          const vIt = this.localVariables.next();

          let script = `((i = -1, c = 0), ${vArr}.some((I, idx) => {`;
          script += `if (I == ${vIt} && ++c == ${ind}) {i = idx + 1;return true;}})`;
          script += ",i > -1 ? i : 0)";
          return new exp.TypedInput(`((${vArr} = ${_arrParser(arr)}, ${vIt} = ${_safeCast(item)}), ${script})`, exp.TYPE_UNKNOWN);
        }
        case "SPjson.arrMerge": {
          const arr1 = this.descendInput(node.arr1).asUnknown();
          const arr2 = this.descendInput(node.arr2).asUnknown();
          return new exp.TypedInput(`(${_arrParser(arr1)}.concat(${_arrParser(arr2)}))`, exp.TYPE_UNKNOWN);
        }
        case "SPjson.arrRepeat": {
          const arr = this.descendInput(node.arr).asUnknown();
          const amt = this.descendInput(node.amt).asNumber();
          return new exp.TypedInput(`(Array(${amt}).fill(${_arrParser(arr)}).flat())`, exp.TYPE_UNKNOWN);
        }
        case "SPjson.arrFill": {
          const arr = this.descendInput(node.arr).asUnknown();
          const amt = this.descendInput(node.amt).asNumber();
          const vArr = this.localVariables.next();
          return new exp.TypedInput(`((${vArr} = ${_arrParser(arr)}), ${vArr}.concat(Array(Math.max(0, ${amt} - ${vArr}.length)).fill("")))`, exp.TYPE_UNKNOWN);
        }
        case "SPjson.arrFlat": {
          const arr = this.descendInput(node.arr).asUnknown();
          const amt = this.descendInput(node.amt).asUnknown();
          return new exp.TypedInput(`(${_arrParser(arr)}.flat(${amt}))`, exp.TYPE_UNKNOWN);
        }
        case "SPjson.arrOrder": {
          const arr = this.descendInput(node.arr).asUnknown();
          const type = this.descendInput(node.type).asString();

          let script = "((spA) => {";
          script += `switch (${type}) {`;
          script += `case "reverse": return spA.reverse();`;
          script += `case "ascending": return spA.sort((a, b) => a - b);`;
          script += `case "descending": return spA.sort((a, b) => b - a);`;
          script += `case "descending by length": return spA.sort((a, b) => b.length - a.length);`;
          script += `case "ascending by length": return spA.sort((a, b) => a.length - b.length);`;
          script += `case "A-z": return spA.sort((a, b) => a.localeCompare(b));`;
          script += `case "z-A": return spA.sort((a, b) => b.localeCompare(a));`;
          script += `case "most common": return ${OBJ_UTIL}.freqSort(spA, true);`;
          script += `case "least common": return ${OBJ_UTIL}.freqSort(spA, false);`;
          script += "default: for (let i = spA.length; i-- > 1;) {";
          script += "const j = Math.random() * i | 0;";
          script += "[spA[i - 1], spA[j]] = [spA[j], spA[i - 1]];}";
          script += "return spA;";
          script += `}})(${_arrParser(arr)})`;
          return new exp.TypedInput(script, exp.TYPE_UNKNOWN);
        }
        case "SPjson.arrMake": {
          const txt = this.descendInput(node.txt).asUnknown();
          const split = this.descendInput(node.split).asString();
          const type = this.descendInput(node.type).asString();
          return new exp.TypedInput(`(${type} === "array" ? ${txt}.split(${split}) : ${_arrParser(txt)}.join(${split}))`, exp.TYPE_UNKNOWN);
        }
        case "SPjson.arrCheck": {
          const obj = this.descendInput(node.array).asUnknown();
          const safeBool = this.descendInput(node.bool).asBoolean();
          return new exp.TypedInput(`(yield* (function* () {
            function* runGenerator(gen, input) {
              let result;
              try {
                result = gen.next(input);
              } catch (e) { throw e }

              while (!result.done) {
                let yielded = result.value;
                if (yielded && typeof yielded.next === "function") yielded = yield* runGenerator(yielded);
                else if (yielded && typeof yielded.then === "function") yielded = yield yielded;
                try {
                  result = gen.next(yielded);
                } catch (e) { throw e }
              }
              return result.value;
            }

            function* genCheck(arr, predicate) {
              for (let i = 0; i < arr.length; i++) {
                ${ node.type === "some" ?
                  "if (yield* predicate(arr[i], i)) return true;" :
                  "if (!(yield* predicate(arr[i], i))) return false;" 
                }
              }
              return ${ node.type === "some" ? "false" : "true" };
            }

            const p = ${_arrParser(obj)};
            const result = yield* runGenerator(
              genCheck(p, function* (SPobjV, SPobjK) {
                SPobjK++;
                return ${safeBool};
              })
            );
            return result;
          })())`, exp.TYPE_BOOLEAN);
        }
        case "SPjson.arrMap": {
          const obj = this.descendInput(node.array).asUnknown();
          const safeValue = this.descendInput(node.value).asUnknown();
          return new exp.TypedInput(`(function() {
            function* generator() {
              const p = ${_arrParser(obj)};
              let SPobjK = 1;
              for (const SPobjV of p) {
                yield ${safeValue};
                SPobjK++;
              }
            }
            return [...generator()];
          })()`, exp.TYPE_UNKNOWN);
        }
        case "SPjson.arrSort": {
          const obj = this.descendInput(node.array).asUnknown();
          const safeValue = this.descendInput(node.value).asUnknown();
          // this is a rough check, but its the best we can do
          if (safeValue.includes(`yield* executeInCompat`) && !safeValue.includes(`"yield* executeInCompat`)) {
            return new exp.TypedInput(`(function() {
              function* generator() {
                const p = ${_arrParser(obj)};
                const s = {};
                for (let i = 0; i < p.length; i++) {
                  for (let j = 0; j < p.length; j++) {
                    const SParrA = p[i], SParrB = p[j];
                    s[\`\${i},\${j}\`] = ${safeValue};
                  }
                }
                const sorted = [...p].sort((a, b) => {
                  const ia = p.indexOf(a), ib = p.indexOf(b);
                  if (ia === ib) return 0;
                  return ia < ib ? s[\`\${ia},\${ib}\`] : -s[\`\${ib},\${ia}\`];
                });
                for (const item of sorted) yield item;
              }
              return [...generator()];
            })()`, exp.TYPE_UNKNOWN);
          } else {
            return new exp.TypedInput(`(function() {
              function* generator() {
                const p = ${_arrParser(obj)};
                const sorted = [...p].sort((SParrA, SParrB) => ${safeValue});
                for (const item of sorted) yield item;
              }
              return [...generator()];
            })()`, exp.TYPE_UNKNOWN);
          }
        }
        /* Extras */
        case "SPjson.filter": {
          const obj = this.descendInput(node.obj).asUnknown();
          const safeBool = this.descendInput(node.bool).asBoolean();
          return new exp.TypedInput(`(function() {
            function* generator() {
              const p = ${_anyParser(obj)};
              const e = Object.entries(p);
              const isO = !Array.isArray(p);

              if (${node.type === "filter"}) {
                if (isO) {
                  const result = {};
                  for (let [SPobjK, SPobjV] of e) {
                    if (${safeBool}) result[SPobjK] = SPobjV;
                  }
                  yield result;
                } else {
                  const result = [];
                  for (let [SPobjK, SPobjV] of e) {
                    SPobjK++;
                    if (${safeBool}) result.push(SPobjV);
                  }
                  yield result;
                }
              } else {
                const n = [];
                for (let [SPobjK, SPobjV] of e) {
                  if (isO) {
                    if (${safeBool}) n.unshift([SPobjK, SPobjV]);
                    else n.push([SPobjK, SPobjV]);
                  } else {
                    SPobjK++;
                    if (${safeBool}) n.unshift(SPobjV);
                    else n.push(SPobjV);
                  }
                }
                yield isO ? Object.fromEntries(n) : n;
              }
            }
            return [...generator()][0];
          })()`, exp.TYPE_UNKNOWN);
        }
        case "SPjson.arrReduce": {
          const obj = this.descendInput(node.array).asUnknown();
          const initial = this.descendInput(node.init).asUnknown();
          const safeValue = this.descendInput(node.value).asUnknown();
          return new exp.TypedInput(`(function(SPaccum) {
            function* generator() {
              const p = ${_arrParser(obj)};
              let SPobjK = 1;
              for (const SPobjV of p) {
                SPaccum = yield ${safeValue};
                SPobjK++;
              }
            }

            const g = generator();
            let r = g.next();
            while (!r.done) {r = g.next(r.value)}
            return SPaccum;
          })(${initial})`, exp.TYPE_UNKNOWN);
        }
        case "SPjson.jsonValid": {
          const obj = this.descendInput(node.obj).asUnknown();
          let script;
          if (extContext.alwaysParse) {
            script = `(t = typeof ${obj}, t === "object" ? true : t !== "string" ? false : (() => {try { JSON.parse(${obj}); return true; } catch { return false; }})())`;
          } else {
            script = `(typeof ${obj} === "object")`;
          }

          return new exp.TypedInput(script, exp.TYPE_BOOLEAN);
        }
        case "SPjson.parse": {
          const obj = this.descendInput(node.obj).asUnknown();
          const vObj = this.localVariables.next();
          return new exp.TypedInput(
            `(${vObj} = ${obj}, typeof ${vObj} === "object" ? ${vObj} : (() => {try { return JSON.parse(${vObj}); } catch { return ""; }})())`,
            exp.TYPE_UNKNOWN
          );
        }
        case "SPjson.clone": {
          const obj = this.descendInput(node.obj).asUnknown();
          return new exp.TypedInput(
            `((spO => { try { return typeof spO === "object" ? structuredClone(spO) : JSON.parse(spO); } catch { return ""; }})(${obj}))`,
            exp.TYPE_UNKNOWN
          );
        }
        default: return _ogJSdescendInp.call(this, node);
      }
    };
  }

  class SPjson {
    constructor() {
      this._settings = [
        { text: "always cast values", value: "alwaysCast" },
        { text: "always parse text objects", value: "alwaysParse" },
        { text: "always try parsing", value: "alwaysTryParse" },
        { text: "always validate object keys", value: "alwaysValidateKeys" },
        { text: "dont edit source objects", value: "useNewObj" },
      ];
      this.alwaysCast = true;
      this.alwaysParse = true;
      this.alwaysTryParse = true;
      this.useNewObj = true;
      this.alwaysValidateKeys = true;
      this._preventUnsafeAce = true; // hidden option

      this.initParser();
    }
    getInfo() {
      return {
        id: "SPjson",
        name: "Swift JSON",
        color1: "#748bee",
        menuIconURI,
        blocks: [
          genRegenReporter("arrValueA", "value A"),
          genRegenReporter("arrValueB", "value B"),
          genRegenReporter("arrAccum", "accumulator"),
          genRegenReporter("arrIndex", "index"),
          genRegenReporter("objKey", "key"),
          genRegenReporter("objValue", "value"),
          {
            func: "warn",
            blockType: Scratch.BlockType.BUTTON,
            text: "Usage Warning"
          },
          { blockType: Scratch.BlockType.LABEL, text: "Objects" },
          {
            opcode: "objBlank",
            blockType: Scratch.BlockType.REPORTER,
            blockShape: OBJ_SHAPE,
            disableMonitor: true,
            allowDropAnywhere: true,
            text: "new object"
          },
          {
            opcode: "objValid",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "is object [OBJ] valid?",
            arguments: {
              OBJ: genArgument("obj", DEFAULT_ARGS.obj),
            },
          },
          {
            opcode: "jsonBuilder",
            blockType: Scratch.BlockType.REPORTER,
            blockShape: OBJ_SHAPE,
            allowDropAnywhere: true,
            text: "{ [KEY] : [VAL] }",
            arguments: {
              KEY: { type: Scratch.ArgumentType.STRING, defaultValue: "key" },
              VAL: { type: Scratch.ArgumentType.STRING, defaultValue: "value", exemptFromNormalization: true }
            },
          },
          "---",
          {
            opcode: "getKey",
            blockType: Scratch.BlockType.REPORTER,
            allowDropAnywhere: true,
            text: "get [KEY] from [OBJ]",
            arguments: {
              KEY: { type: Scratch.ArgumentType.STRING, defaultValue: "key" },
              OBJ: genArgument("obj", DEFAULT_ARGS.obj)
            },
          },
          {
            opcode: "getPath",
            blockType: Scratch.BlockType.REPORTER,
            allowDropAnywhere: true,
            text: "get path [PATH] from [OBJ]",
            arguments: {
              PATH: genArgument("arr", `["key", "value1"]`),
              OBJ: genArgument("obj", `{"key":{"value1":1, "value2":2}}`)
            },
          },
          {
            opcode: "setKey",
            blockType: Scratch.BlockType.REPORTER,
            blockShape: OBJ_SHAPE,
            allowDropAnywhere: true,
            text: "set [KEY] to [VAL] in [OBJ]",
            arguments: {
              KEY: { type: Scratch.ArgumentType.STRING, defaultValue: "key" },
              VAL: { type: Scratch.ArgumentType.STRING, defaultValue: "value", exemptFromNormalization: true },
              OBJ: genArgument("obj", "{}")
            },
          },
          {
            opcode: "setPath",
            blockType: Scratch.BlockType.REPORTER,
            blockShape: OBJ_SHAPE,
            allowDropAnywhere: true,
            text: "set path [PATH] to [VAL] in [OBJ]",
            arguments: {
              PATH: genArgument("arr", `["key1", "key2"]`),
              VAL: { type: Scratch.ArgumentType.STRING, defaultValue: "value", exemptFromNormalization: true },
              OBJ: genArgument("obj", `{"key1":{}}`)
            },
          },
          {
            opcode: "deleteKey",
            blockType: Scratch.BlockType.REPORTER,
            blockShape: OBJ_SHAPE,
            allowDropAnywhere: true,
            text: "delete [KEY] from [OBJ]",
            arguments: {
              KEY: { type: Scratch.ArgumentType.STRING, defaultValue: "key" },
              OBJ: genArgument("obj", DEFAULT_ARGS.obj)
            },
          },
          {
            opcode: "jsonSize",
            blockType: Scratch.BlockType.REPORTER,
            text: "size of [OBJ]",
            arguments: {
              OBJ: genArgument("obj", DEFAULT_ARGS.obj)
            },
          },
          "---",
          {
            opcode: "keyIndex",
            blockType: Scratch.BlockType.REPORTER,
            text: "index of [KEY] in [OBJ]",
            arguments: {
              KEY: { type: Scratch.ArgumentType.STRING, defaultValue: "key" },
              OBJ: genArgument("obj", DEFAULT_ARGS.obj)
            },
          },
          {
            opcode: "getEntry",
            blockType: Scratch.BlockType.REPORTER,
            blockShape: OBJ_SHAPE,
            allowDropAnywhere: true,
            text: "get [KEY] entry from [OBJ]",
            arguments: {
              KEY: { type: Scratch.ArgumentType.STRING, defaultValue: "key" },
              OBJ: genArgument("obj", DEFAULT_ARGS.obj)
            },
          },
          {
            opcode: "mergeJson",
            blockType: Scratch.BlockType.REPORTER,
            blockShape: OBJ_SHAPE,
            allowDropAnywhere: true,
            text: "merge [OBJ1] and [OBJ2]",
            arguments: {
              OBJ1: genArgument("obj", DEFAULT_ARGS.obj),
              OBJ2: genArgument("obj", `{"key2":"value2"}`)
            },
          },
          {
            opcode: "jsonMake",
            blockType: Scratch.BlockType.REPORTER,
            blockShape: OBJ_SHAPE,
            allowDropAnywhere: true,
            text: "object from [TXT] split by [SPLIT] delimiter [DELIM]",
            arguments: {
              TXT: { type: Scratch.ArgumentType.STRING, defaultValue: "a:1,b:2,c:3" },
              SPLIT: { type: Scratch.ArgumentType.STRING, defaultValue: "," },
              DELIM: { type: Scratch.ArgumentType.STRING, defaultValue: ":" }
            },
          },
          {
            opcode: "extractJson",
            blockType: Scratch.BlockType.REPORTER,
            blockShape: ARR_SHAPE,
            allowDropAnywhere: true,
            text: "all [TYPE] from [OBJ]",
            arguments: {
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "OBJ_EXTRACT" },
              OBJ: genArgument("obj", `{"key":"value","key2":"value2"}`)
            },
          },
          "---",
          ...genXML({
            opcode: "jsonMap", blockType: Scratch.BlockType.REPORTER, blockShape: OBJ_SHAPE, allowDropAnywhere: true,
            text: "map [OBJ] using rule [IND] [VAL] [IMG] [VALUE]", hideFromPalette: true,
            arguments: {
              OBJ: genArgument("obj", DEFAULT_ARGS.obj), IND: { fillIn: "objKey" }, VAL: { fillIn: "objValue"},
              VALUE: { type: Scratch.ArgumentType.STRING, defaultValue: "value-2", exemptFromNormalization: true },
              IMG: { type: Scratch.ArgumentType.IMAGE, dataURI: arrowURI }
            },
          }),
          { blockType: Scratch.BlockType.LABEL, text: "Arrays" },
          {
            opcode: "arrBlank",
            blockType: Scratch.BlockType.REPORTER,
            blockShape: ARR_SHAPE,
            allowDropAnywhere: true,
            disableMonitor: true,
            text: "new array"
          },
          {
            opcode: "arrValid",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "is array [ARR] valid?",
            arguments: {
              ARR: genArgument("arr", DEFAULT_ARGS.arr1)
            },
          },
          {
            opcode: "arrBuilder",
            blockType: Scratch.BlockType.REPORTER,
            blockShape: ARR_SHAPE,
            allowDropAnywhere: true,
            text: "［ [VAL] ］",
            arguments: {
              VAL: { type: Scratch.ArgumentType.STRING, defaultValue: "value", exemptFromNormalization: true }
            },
          },
          "---",
          {
            opcode: "arrAdd",
            blockType: Scratch.BlockType.REPORTER,
            blockShape: ARR_SHAPE,
            allowDropAnywhere: true,
            text: "add [ITEM] to [ARR]",
            arguments: {
              ITEM: { type: Scratch.ArgumentType.STRING, defaultValue: "thing", exemptFromNormalization: true },
              ARR: genArgument("arr", "[]")
            },
          },
          {
            opcode: "arrInsert",
            blockType: Scratch.BlockType.REPORTER,
            blockShape: ARR_SHAPE,
            allowDropAnywhere: true,
            text: "insert [ITEM] at [IND] in [ARR]",
            arguments: {
              ITEM: { type: Scratch.ArgumentType.STRING, defaultValue: "b", exemptFromNormalization: true },
              IND: { type: Scratch.ArgumentType.NUMBER, defaultValue: 2 },
              ARR: genArgument("arr", `["a", "c"]`)
            },
          },
          {
            opcode: "arrReplace",
            blockType: Scratch.BlockType.REPORTER,
            blockShape: ARR_SHAPE,
            allowDropAnywhere: true,
            text: "replace item [IND] with [ITEM] in [ARR]",
            arguments: {
              IND: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 },
              ITEM: { type: Scratch.ArgumentType.STRING, defaultValue: "a", exemptFromNormalization: true },
              ARR: genArgument("arr", `["z", "b", "c"]`)
            },
          },
          {
            opcode: "arrSwap",
            blockType: Scratch.BlockType.REPORTER,
            blockShape: ARR_SHAPE,
            allowDropAnywhere: true,
            text: "swap item [IND1] with item [IND2] in [ARR]",
            arguments: {
              IND1: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 },
              IND2: { type: Scratch.ArgumentType.STRING, defaultValue: 3 },
              ARR: genArgument("arr", DEFAULT_ARGS.arr1)
            },
          },
          {
            opcode: "arrDelete",
            blockType: Scratch.BlockType.REPORTER,
            blockShape: ARR_SHAPE,
            allowDropAnywhere: true,
            text: "delete item [IND] in [ARR]",
            arguments: {
              IND: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 },
              ARR: genArgument("arr", DEFAULT_ARGS.arr1)
            },
          },
          {
            opcode: "arrGet",
            blockType: Scratch.BlockType.REPORTER,
            allowDropAnywhere: true,
            text: "item [IND] in [ARR]",
            arguments: {
              IND: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 },
              ARR: genArgument("arr", DEFAULT_ARGS.arr1)
            },
          },
          {
            opcode: "arrSlice",
            blockType: Scratch.BlockType.REPORTER,
            blockShape: ARR_SHAPE,
            allowDropAnywhere: true,
            text: "items [IND1] to [IND2] in [ARR]",
            arguments: {
              IND1: { type: Scratch.ArgumentType.NUMBER, defaultValue: 2 },
              IND2: { type: Scratch.ArgumentType.NUMBER, defaultValue: 3 },
              ARR: genArgument("arr", DEFAULT_ARGS.arr1)
            },
          },
          {
            opcode: "arrLength",
            blockType: Scratch.BlockType.REPORTER,
            text: "length of [ARR]",
            arguments: {
              ARR: genArgument("arr", DEFAULT_ARGS.arr1)
            },
          },
          "---",
          {
            opcode: "itemExists",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "[ARR] contains [ITEM] ?",
            arguments: {
              ARR: genArgument("arr", DEFAULT_ARGS.arr1),
              ITEM: { type: Scratch.ArgumentType.STRING, defaultValue: "b", exemptFromNormalization: true }
            },
          },
          {
            opcode: "arrMatches",
            blockType: Scratch.BlockType.REPORTER,
            text: "# of times [ITEM] appears in [ARR]",
            arguments: {
              ITEM: { type: Scratch.ArgumentType.STRING, defaultValue: "a" },
              ARR: genArgument("arr", DEFAULT_ARGS.arr2)
            },
          },
          {
            opcode: "arrContainers",
            blockType: Scratch.BlockType.REPORTER,
            text: "# of items containing [TESTER] in [ARR]",
            arguments: {
              TESTER: { type: Scratch.ArgumentType.STRING, defaultValue: "a" },
              ARR:genArgument("arr", `["a", "ab", "ba", "bb"]`)
            },
          },
          {
            opcode: "itemIndex",
            blockType: Scratch.BlockType.REPORTER,
            text: "index # [IND] of item [ITEM] in [ARR]",
            arguments: {
              IND: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 },
              ITEM: { type: Scratch.ArgumentType.STRING, defaultValue: "a" },
              ARR: genArgument("arr", DEFAULT_ARGS.arr2)
            },
          },
          "---",
          {
            opcode: "mergeArray",
            blockType: Scratch.BlockType.REPORTER,
            blockShape: ARR_SHAPE,
            allowDropAnywhere: true,
            text: "merge array [ARR1] and [ARR2]",
            arguments: {
              ARR1: genArgument("arr", DEFAULT_ARGS.arr3),
              ARR2: genArgument("arr", `["c", "d"]`)
            },
          },
          {
            opcode: "repeatArray",
            blockType: Scratch.BlockType.REPORTER,
            blockShape: ARR_SHAPE,
            allowDropAnywhere: true,
            text: "repeat array [ARR] [NUM] times",
            arguments: {
              ARR: genArgument("arr", DEFAULT_ARGS.arr3),
              NUM: { type: Scratch.ArgumentType.NUMBER, defaultValue: 3 }
            },
          },
          {
            opcode: "fillArray",
            blockType: Scratch.BlockType.REPORTER,
            blockShape: ARR_SHAPE,
            allowDropAnywhere: true,
            text: "fill array [ARR] to length [NUM]",
            arguments: {
              ARR: genArgument("arr", DEFAULT_ARGS.arr3),
              NUM: { type: Scratch.ArgumentType.NUMBER, defaultValue: 5 }
            },
          },
          {
            opcode: "flatArray",
            blockType: Scratch.BlockType.REPORTER,
            blockShape: ARR_SHAPE,
            allowDropAnywhere: true,
            text: "flatten array [ARR] depth [NUM]",
            arguments: {
              ARR: genArgument("arr", `[[1, 2], [3, [4, 5]]]`),
              NUM: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 }
            },
          },
          {
            opcode: "arrOrder",
            blockType: Scratch.BlockType.REPORTER,
            blockShape: ARR_SHAPE,
            allowDropAnywhere: true,
            text: "order [ARR] by [ORDERER]",
            arguments: {
              ARR: genArgument("arr", `["2", "item1", "1", "item12", "1"]`),
              ORDERER: { type: Scratch.ArgumentType.STRING, menu: "ORDERING" }
            }
          },
          "---",
          ...genXML({
            opcode: "arrCheck", blockType: Scratch.BlockType.BOOLEAN, allowDropAnywhere: true,
            text: "check [ARR] if [TYPE] item [IND] [VAL] [IMG] [BOOL]", hideFromPalette: true,
            arguments: {
              ARR: genArgument("arr", DEFAULT_ARGS.arr1),
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "ARRAY_CHECK", defaultValue: "every" },
              IND: { fillIn: "arrIndex" }, VAL: { fillIn: "objValue"},
              IMG: { type: Scratch.ArgumentType.IMAGE, dataURI: arrowURI },
              BOOL: { type: Scratch.ArgumentType.BOOLEAN }
            },
          }),
          ...genXML({
            opcode: "arrMap", blockType: Scratch.BlockType.REPORTER, blockShape: ARR_SHAPE,
            text: "map [ARR] using rule [IND] [VAL] [IMG] [VALUE]", hideFromPalette: true, allowDropAnywhere: true,
            arguments: {
              ARR: genArgument("arr", DEFAULT_ARGS.arr1),
              IND: { fillIn: "arrIndex" }, VAL: { fillIn: "objValue"},
              VALUE: { type: Scratch.ArgumentType.STRING, defaultValue: "d", exemptFromNormalization: true },
              IMG: { type: Scratch.ArgumentType.IMAGE, dataURI: arrowURI }
            },
          }),
          ...genXML({
            opcode: "arrSort", blockType: Scratch.BlockType.REPORTER, blockShape: ARR_SHAPE,
            text: "sort [ARR] using rule [A] [B] [IMG] [VALUE]", hideFromPalette: true, allowDropAnywhere: true,
            arguments: {
              ARR: genArgument("arr", "[1, 2, 3]"),
              A: { fillIn: "arrValueA" }, B: { fillIn: "arrValueB" },
              VALUE: { type: Scratch.ArgumentType.NUMBER },
              IMG: { type: Scratch.ArgumentType.IMAGE, dataURI: arrowURI }
            },
          }),
          ...genXML({
            opcode: "arrReduce", blockType: Scratch.BlockType.REPORTER, blockShape: ARR_SHAPE,
            text: "process [ARR] starting at [INIT] [IND] [VAL] [ACCUM] [IMG] [VALUE]", hideFromPalette: true, allowDropAnywhere: true,
            arguments: {
              ARR: genArgument("arr", "[1, 2, 3]"),
              INIT: { type: Scratch.ArgumentType.STRING, defaultValue: "0", exemptFromNormalization: true },
              IND: { fillIn: "arrIndex" }, VAL: { fillIn: "objValue"}, ACCUM: { fillIn: "arrAccum" },
              VALUE: { type: Scratch.ArgumentType.STRING, exemptFromNormalization: true },
              IMG: { type: Scratch.ArgumentType.IMAGE, dataURI: arrowURI }
            },
          }),
          "---",
          {
            opcode: "arrMake",
            blockType: Scratch.BlockType.REPORTER,
            blockShape: ARR_SHAPE,
            allowDropAnywhere: true,
            text: "[TXT] split by [SPLIT] to [TYPE]",
            arguments: {
              TXT: { type: Scratch.ArgumentType.STRING, defaultValue: "a,b,c", exemptFromNormalization: true },
              SPLIT: { type: Scratch.ArgumentType.STRING, defaultValue: "," },
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "CONVERTS2" }
            },
          },
          { blockType: Scratch.BlockType.LABEL, text: "Utilities" },
          {
            opcode: "jsonValid",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "is JSON [OBJ] valid?",
            arguments: {
              OBJ: { type: Scratch.ArgumentType.STRING, defaultValue: DEFAULT_ARGS.obj, exemptFromNormalization: true }
            },
          },
          {
            opcode: "parse",
            blockType: Scratch.BlockType.REPORTER,
            text: "parse [OBJ]",
            allowDropAnywhere: true,
            arguments: {
              OBJ: { type: Scratch.ArgumentType.STRING, defaultValue: DEFAULT_ARGS.obj, exemptFromNormalization: true }
            },
          },
          {
            opcode: "clone",
            blockType: Scratch.BlockType.REPORTER,
            text: "duplicate [OBJ]",
            allowDropAnywhere: true,
            arguments: {
              OBJ: { type: Scratch.ArgumentType.STRING, defaultValue: DEFAULT_ARGS.obj, exemptFromNormalization: true }
            },
          },
          {
            opcode: "convert",
            blockType: Scratch.BlockType.REPORTER,
            text: "[OBJ] to [TYPE]",
            allowDropAnywhere: true,
            arguments: {
              OBJ: { type: Scratch.ArgumentType.STRING, defaultValue: "{}", exemptFromNormalization: true },
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "CONVERTS" }
            },
          },
          "---",
          ...genXML({
            opcode: "filterNew", blockType: Scratch.BlockType.REPORTER,
            allowDropAnywhere: true,
            text: "[TYPE] [OBJ] by [IND] [VAL] [IMG] [BOOL]", hideFromPalette: true,
            arguments: {
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "CUST_ORDER", defaultValue: "filter" },
              OBJ: { type: Scratch.ArgumentType.STRING, defaultValue: `{"Object":"or array"}`, exemptFromNormalization: true },
              IND: { fillIn: "objKey" }, VAL: {fillIn: "objValue" }, BOOL: { type: Scratch.ArgumentType.BOOLEAN },
              IMG: { type: Scratch.ArgumentType.IMAGE, dataURI: arrowURI }
            },
          }),
          ...genXML({
            opcode: "forEach", blockType: Scratch.BlockType.LOOP,
            text: "for each [IND] [VAL] in [OBJ]", hideFromPalette: true,
            arguments: {
              IND: { fillIn: "objKey" }, VAL: { fillIn: "objValue" },
              OBJ: { type: Scratch.ArgumentType.STRING, defaultValue: `{"Object":"or array"}`, exemptFromNormalization: true }
            },
          }),
          "---",
          {
            opcode: "setRawVarValue",
            blockType: Scratch.BlockType.COMMAND,
            text: "set [TYPE] named [NAME] to [VALUE]",
            arguments: {
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "VAR_TYPE" },
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "my variable" },
              VALUE: { type: Scratch.ArgumentType.STRING, exemptFromNormalization: true }
            },
          },
          {
            opcode: "rawVarValue",
            blockType: Scratch.BlockType.REPORTER,
            allowDropAnywhere: true,
            text: "get raw [TYPE] named [NAME]",
            arguments: {
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "VAR_TYPE" },
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "my variable" }
            },
          },
          { blockType: Scratch.BlockType.LABEL, text: "Optimization Settings" },
          {
            func: "optimizeWarn",
            blockType: Scratch.BlockType.BUTTON,
            text: "Safety Warning"
          },
          {
            opcode: "isSettingOn",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "is [THING] enabled?",
            arguments: {
              THING: { type: Scratch.ArgumentType.STRING, menu: "SETTINGS" }
            },
          },
          {
            opcode: "toggleSetting",
            blockType: Scratch.BlockType.COMMAND,
            text: "set [THING] to [TYPE]",
            arguments: {
              THING: { type: Scratch.ArgumentType.STRING, menu: "SETTINGS" },
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "TOGGLER" }
            },
          },
          {
            opcode: "optiReader",
            blockType: Scratch.BlockType.REPORTER,
            text: "optimization level",
          },
          "---",
          {
            opcode: "doInput",
            blockType: Scratch.BlockType.COMMAND,
            text: "do [THING]",
            arguments: { THING: {} },
          },
          /* Deprecation Marker */
          {
            opcode: "filter", blockType: Scratch.BlockType.CONDITIONAL, branchCount: -1, text: "in thread [TYPE] [OBJ] by [IND] [VAL] [IMG] [BOOL]", hideFromPalette: true,
            arguments: {
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "CUST_ORDER" }, OBJ: { type: Scratch.ArgumentType.STRING, exemptFromNormalization: true }, IND: {}, VAL: {}, BOOL: { type: Scratch.ArgumentType.BOOLEAN }, IMG: { type: Scratch.ArgumentType.IMAGE, dataURI: arrowURI }
            },
          },
          {
            opcode: "filterResult", blockType: Scratch.BlockType.REPORTER,
            disableMonitor: true, hideFromPalette: true, text: "thread filter result"
          },
          /* Marker End */
        ],
        menus: {
          TOGGLER: ["enabled", "disabled"],
          CUST_ORDER: ["filter", "order"],
          ARRAY_CHECK: ["every", "some"],
          VAR_TYPE: ["variable", "list"],
          OBJ_EXTRACT: { acceptReporters: true, items: ["keys", "values", "entries"] },
          CONVERTS: { acceptReporters: true, items: ["string", "pretty string", "array", "object"] },
          CONVERTS2: { acceptReporters: true, items: ["array", "text"] },
          SETTINGS: { acceptReporters: true, items: this._settings },
          ORDERING: {
            acceptReporters: true,
            items: [
              "random", "reverse", "ascending", "descending",
              "ascending by length", "descending by length",
              "A-z", "z-A", "most common", "least common"
            ]
          }
        },
      };
    }

    // Helper Funcs
    initParser() {
      // dynamically create 'tryParse' so its as fast as possible, no need for unused checks
      const fixedClone = (obj) => {
        try { return structuredClone(obj) } catch { return obj }
      };

      const isValidObject = (obj, type) => {
        return obj !== null && typeof obj === "object" &&
          (type ? (type === 1 ? Array.isArray(obj) : !Array.isArray(obj)) : true);
      };

      if (!this.alwaysTryParse) return this.tryParse = (obj) => obj;

      if (this.useNewObj && this.alwaysParse) {
        this.tryParse = (obj, optType) => {
          if (isValidObject(obj, optType)) return fixedClone(obj);
          const defaultV = optType === undefined ? obj : optType === 0 ? {} : [];
          try {
            const parsed = JSON.parse(obj);
            return (
              (optType === 1 && Array.isArray(parsed)) ||
              (optType === 0 && !Array.isArray(parsed)) ||
              optType === undefined
            ) ? parsed : defaultV;
          } catch {
            return defaultV;
          }
        };
        return;
      }

      if (!this.useNewObj && this.alwaysParse) {
        this.tryParse = (obj, optType) => {
          if (isValidObject(obj, optType)) return obj;
          const defaultV = optType === undefined ? obj : optType === 0 ? {} : [];
          try {
            const parsed = JSON.parse(obj);
            return (
              (optType === 1 && Array.isArray(parsed)) ||
              (optType === 0 && !Array.isArray(parsed)) ||
              optType === undefined
            ) ? parsed : defaultV;
          } catch {
            return defaultV;
          }
        };
        return;
      }

      if (this.useNewObj && !this.alwaysParse) {
        this.tryParse = (obj, optType) => {
          if (isValidObject(obj, optType)) return fixedClone(obj);
          return optType === undefined ? obj : optType === 0 ? {} : [];
        };
        return;
      }

      if (!this.useNewObj && !this.alwaysParse) {
        this.tryParse = (obj, optType) => {
          if (isValidObject(obj, optType)) return obj;
          return optType === undefined ? obj : optType === 0 ? {} : [];
        };
        return;
      }
    }

    tryParse(obj, optType) { /* dynamically defined */ }

    preventACE(imminentObj) {
      if (this._preventUnsafeAce) {
        const objectType = imminentObj?.constructor?.name;
        if (typeof imminentObj === "object") return imminentObj.customId || objectType === "Object" || objectType === "Array"
          ? imminentObj : "";
      }
      return imminentObj;
    }

    toArrInd(num) {
      return Cast.toNumber(num) - 1;
    }

    toSafe(val) {
      if (this.alwaysCast) {
        if (typeof val === "object") return val;
        if (isNaN(val) || val === Infinity || val === -Infinity) return Cast.toString(val);
      }
      return val;
    }

    stackFrameInit(util, opt_outerStack, initializers) {
      const frame = opt_outerStack ? util.thread.stackFrames[0]
        : util.stackFrame;

      if (initializers.length) {
        for (const [name, value] of initializers) {
          if (name === "SPwasCompiled" && value === "FLIP") {
            if (frame.SPwasCompiled === undefined) {
              frame.SPwasCompiled = util.thread.isCompiled;
              util.thread.isCompiled = false;
            }
          } else {
            frame[name] = value;
          }
        }
      }

      return frame;
    }

    reporterYield(util, wasCompiled) {
      let thisBlock = util.thread.blockContainer.getBlock(
        wasCompiled ? util.thread.peekStack() : util.thread.peekStackFrame().op?.id
      );

      if (!thisBlock) thisBlock = util.thread.stackFrames[0].myID;
      if (!thisBlock) return true; // abort!

      util.thread.stackFrames[0].myID = thisBlock;
      util.thread.peekStackFrame().isLoop = true;

      const pushBlock = thisBlock.inputs.BOOL?.block || thisBlock.inputs.VALUE?.block;
      if (pushBlock) util.thread.pushStack(pushBlock);
      util.yield();
    }

    yieldingReporter(util, reporterInfo, createIterable, onYield, onResult) {
      const EXECUTE_STATE = 0;
      const DONE_STATE = 1;
      const stackFrame = util.stackFrame;
      const outerFrame = util.thread.stackFrames[0];

      if (stackFrame.isExecuting === undefined) {
        // initialize
        const iterable = createIterable(reporterInfo);
        if (iterable.length === 0) return reporterInfo.defaultValue;

        this.stackFrameInit(util, true, [
          ["SPwasCompiled", "FLIP"],
          ...(reporterInfo.outerData ?? [])
        ]);
        this.stackFrameInit(util, false, [
          ["isExecuting", EXECUTE_STATE], ["ranOnce", false],
          ["iterable", iterable], ["index", 0], ["length", iterable.length - 1],
          ...(reporterInfo.stackData ?? [])
        ]);

        if (this.reporterYield(util, outerFrame.SPwasCompiled)) {
          return reporterInfo.defaultValue; // abort!
        }
      } else {
        // callback
        const { index, length, iterable, ranOnce } = stackFrame;
        if (index > length) stackFrame.isExecuting = DONE_STATE;
        else {
          if (reporterInfo.isArray) outerFrame.SPjson = [index + ranOnce + 1, iterable[index + ranOnce]];
          else outerFrame.SPjson = iterable[index + ranOnce];
          if (ranOnce) onYield(stackFrame, outerFrame);
        }

        // we need an extra frame to allow the regenerated reporters to store the right value
        if (!ranOnce) stackFrame.ranOnce = true;
        else stackFrame.index++;
      }

      if (stackFrame.isExecuting === EXECUTE_STATE) this.reporterYield(util);
      else {
        outerFrame.SPjson = undefined; // cleanup
        util.thread.isCompiled = outerFrame.SPwasCompiled;
        return onResult(stackFrame, outerFrame);
      }
    }

    // Buttons and Settings
    warn() {
      alert([
        "Blocks from this extension returns raw objects to achieve speed.",
        "This quirk may cause confusion or incorrect assumptions that certain behaviors are bugs.",
        "One major example is seeing [Object object] show up when using certain text inputs.",
        "This is not a bug, rather a factor of passing non-normal data types.",
        "You can convert an object to a string by using the (({}) to (string v)) block below."
      ].join("\n\n"));
    }

    optimizeWarn() {
      alert("Disabling these Settings will improve performance, but may lead to unexpected bugs or issues. These are intentional, do not report them.");
    }

    // Object Funcs
    objBlank() {
      return {};
    }

    objValid(args) {
      const obj = this.tryParse(args.OBJ);
      return typeof obj === "object" && !Array.isArray(obj);
    }

    jsonBuilder(args) {
      return { [args.KEY] : this.toSafe(args.VAL) };
    }

    getKey(args) {
      const obj = this.tryParse(args.OBJ, 0);
      const key = Cast.toString(args.KEY);
      const value = this.preventACE(obj[key]) ?? "";
      return this.alwaysValidateKeys ? hasOwn(obj, key) ? value : "" : value;
    }

    getPath(args) {
      const path = this.tryParse(args.PATH, 1);
      let objVal = this.tryParse(args.OBJ, 0);
      for (var i = 0; i < path.length; i++) {
        const key = Cast.toString(path[i]);

        if (hasOwn(objVal, key)) objVal = objVal[key];
        else return "";
      }

      return this.preventACE(objVal) ?? "";
    }

    setKey(args) {
      const obj = this.tryParse(args.OBJ, 0);
      obj[Cast.toString(args.KEY)] = this.toSafe(args.VAL);
      return obj;
    }

    setPath(args) {
      const path = this.tryParse(args.PATH, 1);
      const obj = this.tryParse(args.OBJ, 0);
      let objPath = obj;
      for (let i = 0; i < path.length; i++) {
        const key = Cast.toString(path[i]);
        if (i === path.length - 1) {
          if (this.preventACE(objVal)) objPath[key] = this.toSafe(args.VAL);
        } else {
          objPath = objPath[key] ?? {};
        }
      }

      return obj;
    }

    deleteKey(args) {
      const obj = this.tryParse(args.OBJ, 0);
      delete obj[Cast.toString(args.KEY)];
      return obj;
    }

    jsonSize(args) {
      return Object.keys(this.tryParse(args.OBJ, 0)).length;
    }

    keyIndex(args) {
      return Object.keys(this.tryParse(args.OBJ, 0))
        .indexOf(Cast.toString(args.KEY)) + 1;
    }

    getEntry(args) {
      const obj = this.tryParse(args.OBJ, 0);
      const key = Cast.toString(args.KEY);
      if (hasOwn(obj, key)) return { [key] : obj[key] };
      return {};
    }

    extractJson(args) {
      return Object[
        args.TYPE === "keys" ? "keys" : args.TYPE === "values" ? "values" : "entries"
      ](this.tryParse(args.OBJ, 0));
    }

    mergeJson(args) {
      return {
        ...this.tryParse(args.OBJ1, 0), ...this.tryParse(args.OBJ2, 0)
      }
    }

    jsonMap(args, util) {
      return this.yieldingReporter(
        util, { defaultValue: {} },
        /* createIterable */ () => Object.entries(this.tryParse(args.OBJ, 0)),
        /* onYield */ (stackFrame) => {
          stackFrame.iterable[stackFrame.index][1] = args.VALUE;
        },
        /* onResult */ (stackFrame) => {
          return Object.fromEntries(stackFrame.iterable);
        }
      );
    }

    jsonMake(args) {
      const arr = Cast.toString(args.TXT).split(args.SPLIT);
      const obj = {};
      arr.forEach((item) => {
        const value = item.split(args.DELIM);
        obj[value[0]] = value[1] ?? "";
      });

      return obj;
    }

    // Array Funcs
    arrBlank() {
      return [];
    }

    arrValid(args) {
      return Array.isArray(this.tryParse(args.ARR));
    }

    arrBuilder(args) {
      return [this.toSafe(args.VAL)];
    }

    arrAdd(args) {
      const arr = this.tryParse(args.ARR, 1);
      arr.push(this.toSafe(args.ITEM));
      return arr;
    }

    arrInsert(args) {
      const arr = this.tryParse(args.ARR, 1);
      const ind = Math.max(0, this.toArrInd(args.IND));
      if (ind) arr.splice(ind, 0, this.toSafe(args.ITEM));
      else arr.unshift(this.toSafe(args.ITEM));
      return arr;
    }

    arrReplace(args) {
      const arr = this.tryParse(args.ARR, 1);
      const ind = this.toArrInd(args.IND);

      while (arr.length <= ind) arr.push("");
      arr[ind] = this.toSafe(args.ITEM);
      return arr;
    }

    arrSwap(args) {
      const arr = this.tryParse(args.ARR, 1);
      const ind1 = this.toArrInd(args.IND1);
      const ind2 = this.toArrInd(args.IND2);
      const maxInd = Math.max(ind1, ind2);
      while (arr.length <= maxInd) arr.push("");

      [arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]];
      return arr;
    }

    arrDelete(args) {
      const arr = this.tryParse(args.ARR, 1);
      arr.splice(this.toArrInd(args.IND), 1);
      return arr;
    }

    arrGet(args) {
      const arr = this.tryParse(args.ARR, 1);
      const ind = this.toArrInd(args.IND);
      return arr[ind > -1 ? ind : ind < 0 ? arr.length + ind + 1 : -1] ?? "";
    }

    arrSlice(args) {
      return this.tryParse(args.ARR, 1).slice(
        this.toArrInd(args.IND1), Cast.toNumber(args.IND2)
      );
    }

    arrLength(args) {
      return this.tryParse(args.ARR, 1).length;
    }

    itemExists(args) {
      return this.tryParse(args.ARR, 1).indexOf(this.toSafe(args.ITEM)) > -1;
    }

    arrMatches(args) {
      const arr = this.tryParse(args.ARR, 1);
      return arr.filter((item) => item == this.toSafe(args.ITEM)).length;
    }

    arrContainers(args) {
      const arr = this.tryParse(args.ARR, 1);
      return arr.filter((item) => Cast.toString(item).includes(this.toSafe(args.TESTER))).length;
    }

    itemIndex(args) {
      const arr = this.tryParse(args.ARR, 1);
      const ind = Cast.toNumber(args.IND);
      const safe = this.toSafe(args.ITEM);

      if (ind < 2) return arr.indexOf(safe) + 1; // faster behavior
      let count = 0;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] == safe && ++count === ind) return i + 1;
      }

      return 0;
    }

    mergeArray(args) {
      return this.tryParse(args.ARR1, 1).concat(this.tryParse(args.ARR2, 1));
    }

    repeatArray(args) {
      const times = Cast.toNumber(args.NUM);
      return Array(times).fill(this.tryParse(args.ARR, 1)).flat();
    }

    fillArray(args) {
      const length = Cast.toNumber(args.NUM);
      const arr = this.tryParse(args.ARR, 1);
      return arr.concat(Array(Math.max(0, length - arr.length)).fill(""));
    }

    flatArray(args) {
      const arr = this.tryParse(args.ARR, 1);
      return arr.flat(Cast.toNumber(args.NUM));
    }

    arrOrder(args) {
      let arr = this.tryParse(args.ARR, 1);
      const sortFreq = (array, useCommon) => {
        const freqMap = {};
        array.forEach(i => { freqMap[i] = (freqMap[i] || 0) + 1 });
        if (useCommon) return array.sort((a, b) => freqMap[b] - freqMap[a] || array.indexOf(a) - array.indexOf(b));
        else return array.sort((a, b) => freqMap[a] - freqMap[b] || array.indexOf(a) - array.indexOf(b));
      }

      switch (args.ORDERER) {
        case "reverse": return arr.reverse();
        case "ascending": return arr.sort((a, b) => a - b);
        case "descending": return arr.sort((a, b) => b - a);
        case "descending by length": return arr.sort((a, b) => b.length - a.length);
        case "ascending by length": return arr.sort((a, b) => a.length - b.length);
        case "A-z": return arr.sort((a, b) => a.localeCompare(b));
        case "z-A": return arr.sort((a, b) => b.localeCompare(a));
        case "most common": return sortFreq(arr, true);
        case "least common": return sortFreq(arr, false);
        default:
          for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
          }

          return arr; // random
      }
    }

    arrMake(args) {
      if (args.TYPE === "array") return Cast.toString(args.TXT).split(args.SPLIT);
      else return this.tryParse(args.TXT, 1).join(args.SPLIT);
    }

    arrCheck(args, util) {
      return this.yieldingReporter(
        util, {
          defaultValue: false,
          isArray: true,
          stackData: [["checks", []]]
        },
        /* createIterable */ () => this.tryParse(args.ARR, 1),
        /* onYield */ (stackFrame) => stackFrame.checks.push(Cast.toBoolean(args.BOOL)),
        /* onResult */ (stackFrame) => {
          return args.TYPE === "every" ? stackFrame.checks.indexOf(false) === -1
            : stackFrame.checks.indexOf(true) > -1;
        }
      );
    }

    arrMap(args, util) {
      return this.yieldingReporter(
        util, { defaultValue: [], isArray: true },
        /* createIterable */ () => this.tryParse(args.ARR, 1),
        /* onYield */ (stackFrame) => {
          stackFrame.iterable[stackFrame.index] = args.VALUE;
        },
        /* onResult */ (stackFrame) => stackFrame.iterable
      );
    }

    arrSort(args, util) {
      const unsorted = this.tryParse(args.ARR, 1);
      return this.yieldingReporter(
        util,
        {
          defaultValue: [],
          stackData: [
            ["comparables", {}], ["unsorted", unsorted]
          ]
        },
        /* createIterable */ () => {
          const combos = [];
          for (var i = 0; i < unsorted.length; i++) {
            for (var j = 0; j < unsorted.length; j++) {
              if (j == i) continue;
              combos.push([i, j]);
            }
          }

          return combos;
        },
        /* onYield */ (stackFrame, outerFrame) => {
          const [i, j] = stackFrame.iterable[stackFrame.index];
          stackFrame.comparables[`${i},${j}`] = Cast.toNumber(args.VALUE);
        },
        /* onResult */ (stackFrame) => {
          const comparables = stackFrame.comparables;
          return stackFrame.unsorted.map((v, i) => ({ v, i }))
            .sort((a, b) => comparables[`${a.i},${b.i}`] ?? 0)
            .map(x => x.v);
        }
      );
    }

    arrReduce(args, util) {
      return this.yieldingReporter(
        util, {
          defaultValue: [],
          isArray: true,
          outerData: [["accumulator", args.INIT]]
        },
        /* createIterable */ () => this.tryParse(args.ARR, 1),
        /* onYield */ (_, outerFrame) => {
          outerFrame.accumulator = args.VALUE;
        },
        /* onResult */ (_, outerFrame) => {
          const value = outerFrame.accumulator;
          delete outerFrame.accumulator;
          return value;
        }
      );
    }

    // Util Funcs
    jsonValid(args) {
      const obj = args.OBJ;
      const type = typeof obj;
      if (type === "object") return true;
      if (this.alwaysParse) {
        if (type !== "string") return false;
        try {
          JSON.parse(obj);
          return true;
        } catch {
          return false;
        }
      }
      return false;
    }

    parse(args) {
      const obj = args.OBJ;
      if (typeof obj === "object") return obj;
      try {
        return JSON.parse(obj);
      } catch {
        return "";
      }
    }

    clone(args) {
      const obj = args.OBJ;
      try {
        if (typeof obj === "object") return structuredClone(obj);
        return JSON.parse(obj);
      } catch {
        return "";
      }
    }

    convert(args) {
      switch (args.TYPE) {
        case "array": return Object.entries(this.tryParse(args.OBJ));
        case "JSON":
        case "object": return Object.assign({}, this.tryParse(args.OBJ));
        case "pretty string": return JSON.stringify(resolveCircular(this.tryParse(args.OBJ)), "\t");
        default: return JSON.stringify(resolveCircular(this.tryParse(args.OBJ)));
      }
    }

    objKey(_, util) {
      const arr = util.thread.stackFrames[0].SPjson;
      if (arr) {
        if (util.thread.stackFrames[0].isArray) return Cast.toNumber(arr[0]) + 1 ?? "";
        else return arr[0] ?? "";
      }
      return "";
    }
    arrIndex(_, util) {
      return this.objKey(null, util);
    }
    objValue(_, util, __, opt_item) {
      const arr = util.thread.stackFrames[0].SPjson;
      return arr ? arr[opt_item ?? 1] ?? "" : "";
    }
    arrValueA(_, util) {
      return this.objValue(null, util, null, 0);
    }
    arrValueB(_, util) {
      return this.objValue(null, util);
    }
    arrAccum(_, util) {
      return util.thread.stackFrames[0].accumulator ?? "";
    }

    filterNew(args, util) {
      return this.yieldingReporter(
        util, {
          defaultValue: "",
          stackData: [["result", []]]
        },
        /* createIterable */ (context) => {
          const parsed = this.tryParse(args.OBJ);
          const entries = Object.entries(parsed);

          context.isArray = Array.isArray(parsed);
          this.stackFrameInit(util, true, [["isArray", context.isArray]]);
          return entries;
        },
        /* onYield */ (stackFrame, outerFrame) => {
          const entry = stackFrame.iterable[stackFrame.index];
          const item = outerFrame.isArray ? entry[1] : entry;
          if (args.BOOL) stackFrame.result.unshift(item);
          else if (args.TYPE === "order") stackFrame.result.push(item);
        },
        /* onResult */ (stackFrame, outerFrame) => {
          const value = args.TYPE === "filter" ? stackFrame.result.reverse() : stackFrame.result;
          return outerFrame.isArray ? value : Object.fromEntries(value);
        }
      );
    }

    forEach(args, util) {
      if (util.stackFrame.execute) {
        util.stackFrame.index++;
        const { index, entries } = util.stackFrame;
        if (index > entries.length - 1) return;
        util.thread.stackFrames[0].SPjson = entries[index];
      } else {
        const parse = this.tryParse(args.OBJ);
        const entries = Object.entries(parse);
        if (entries.length === 0) return;

        this.stackFrameInit(util, true, [["SPjson", entries[0]], ["isArray", Array.isArray(parse)]]);
        this.stackFrameInit(util, false, [
          ["execute", true],
          ["entries", entries], ["index", 0],
        ]);
      }

      util.startBranch(1, true);
    }

    setRawVarValue(args, util) {
      const name = Cast.toString(args.NAME);
      const type = args.TYPE === "variable" ? "" : "list";
      const stage = runtime.getTargetForStage();

      let variable = stage.lookupVariableByNameAndType(name, type);
      if (!variable) variable = util.target.lookupVariableByNameAndType(name, type);

      if (variable) {
        if (type === "list" && !Array.isArray(args.VALUE)) return;
        variable.value = args.VALUE;
      }
    }

    rawVarValue(args, util) {
      const name = Cast.toString(args.NAME);
      const type = args.TYPE === "variable" ? "" : "list";
      const stage = runtime.getTargetForStage();

      let variable = stage.lookupVariableByNameAndType(name, type);
      if (!variable) variable = util.target.lookupVariableByNameAndType(name, type);

      return variable ? variable.value : "";
    }

    toggleSetting(args) {
      const opt = this._settings.find(item => item.value === args.THING)?.value;
      if (opt) {
        this[opt] = args.TYPE === "enabled";
        this.initParser();
      }
    }

    isSettingOn(args) {
      const opt = this._settings.find(item => item.value === args.THING)?.value;
      return opt ? this[opt] : false;
    }

    optiReader() {
      // these numbers arent accurate but represent what works well
      let optiLevel = 100;

      if (this.alwaysCast) optiLevel -= 5;
      if (this.alwaysValidateKeys) optiLevel -= 5;

      // alwaysTryParse removes a bunch of logic, so only evaluate this
      if (!this.alwaysTryParse) return `${optiLevel} [UNSAFE MODE]`;

      if (this.useNewObj) optiLevel -= 40;
      if (this.alwaysParse) optiLevel -= 50;

      return `${optiLevel} [SAFE MODE]`;
    }

    doInput() {/* noop */}

    /* Deprecation Marker */
    filterResult(_, util) { return util.thread.SPjsonFilterRes ?? "" }
    filter(args, util) {}
    /* Marker End */
  }

  extContext = new SPjson();
  Scratch.extensions.register(extContext);
})(Scratch);
