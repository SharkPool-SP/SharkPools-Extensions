// Name: JSON and Array
// ID: SPjson
// Description: Super Fast JSON and Array Extension
// By: SharkPool
// Licence: MIT

// Version V.1.1.04

(function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) throw new Error("JSON and Array must run unsandboxed!");

  const menuIconURI =
"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4My4yMjciIGhlaWdodD0iODMuMjI3IiB2aWV3Qm94PSIwIDAgODMuMjI3IDgzLjIyNyI+PHBhdGggZD0iTTAgNDEuNjE0QzAgMTguNjMxIDE4LjYzMSAwIDQxLjYxNCAwczQxLjYxNCAxOC42MzEgNDEuNjE0IDQxLjYxNC0xOC42MzEgNDEuNjE0LTQxLjYxNCA0MS42MTRTMCA2NC41OTcgMCA0MS42MTQiIGZpbGw9IiM1MTYxYTYiLz48cGF0aCBkPSJNNC4zNDQgNDEuNjE0YzAtMjAuNTcgMTYuNjg3LTM3LjI3IDM3LjI3LTM3LjI3czM3LjI3IDE2LjY4NyAzNy4yNyAzNy4yNy0xNS43ODMgMzcuMjctMzcuMjcgMzcuMjctMzcuMjctMTYuNy0zNy4yNy0zNy4yNyIgZmlsbD0iIzc0OGJlZSIvPjxwYXRoIGQ9Ik0zNi43OTggNjQuMjk0YTIuMTk1IDIuMTk1IDAgMCAxLTIuMTk1IDIuMTk0SDI4Ljc1YTUuMTI3IDUuMTI3IDAgMCAxLTUuMTItNS4xMlY1MC4xNjNsLTYuNDk3LTYuOTk3YTIuMTk1IDIuMTk1IDAgMCAxIDAtMy4xMDRsNi40OTYtNi45OTdWMjEuODYxYTUuMTI3IDUuMTI3IDAgMCAxIDUuMTIxLTUuMTIxaDUuODUzYTIuMTk1IDIuMTk1IDAgMSAxIDAgNC4zOUgyOC43NWEuNzMuNzMgMCAwIDAtLjczMS43M3YxMi4xMTRjMCAuNTgzLS4yMzEgMS4xNC0uNjQzIDEuNTUybC01LjU4OCA2LjA4OCA1LjU4OCA2LjA4OGMuNDEyLjQxMS42NDMuOTcuNjQzIDEuNTUydjEyLjExM2MwIC40MDMuMzI4LjczMi43MzEuNzMyaDUuODUzYzEuMjEyIDAgMi4xOTUuOTgyIDIuMTk1IDIuMTk0eiIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjZmZmIi8+PHBhdGggZD0iTTM3LjAxOCA2NC4yOTRhMi4xOTUgMi4xOTUgMCAwIDEtMi4xOTUgMi4xOTRoLTUuODUyYTUuMTI3IDUuMTI3IDAgMCAxLTUuMTIyLTUuMTJWNTAuMTYzbC02LjQ5Ni02Ljk5N2EyLjE5NSAyLjE5NSAwIDAgMSAwLTMuMTA0bDYuNDk2LTYuOTk3VjIxLjg2MWE1LjEyNyA1LjEyNyAwIDAgMSA1LjEyMS01LjEyMWg1Ljg1M2EyLjE5NSAyLjE5NSAwIDEgMSAwIDQuMzloLTUuODUyYS43My43MyAwIDAgMC0uNzMyLjczdjEyLjExNGMwIC41ODMtLjIzMSAxLjE0LS42NDMgMS41NTJsLTUuNTg4IDYuMDg4IDUuNTg4IDYuMDg4Yy40MTIuNDExLjY0My45Ny42NDMgMS41NTJ2MTIuMTEzYzAgLjQwMy4zMjguNzMyLjczMS43MzJoNS44NTNjMS4yMTIgMCAyLjE5NS45ODIgMi4xOTUgMi4xOTR6bTExLjM4Ni0yLjE5NWg1Ljg1M2EuNzMuNzMgMCAwIDAgLjczMi0uNzMyVjQ5LjI1NGMwLS41ODMuMjMxLTEuMTQuNjQzLTEuNTUybDUuNTg4LTYuMDg4LTUuNTg4LTYuMDg4YTIuMiAyLjIgMCAwIDEtLjY0My0xLjU1MlYyMS44NjFhLjczLjczIDAgMCAwLS43MzItLjczMmgtNS44NTJhMi4xOTUgMi4xOTUgMCAwIDEgMC00LjM5aDUuODUyYTUuMTI3IDUuMTI3IDAgMCAxIDUuMTIyIDUuMTIydjExLjIwNGw2LjQ5NiA2Ljk5N2EyLjE5NSAyLjE5NSAwIDAgMSAwIDMuMTA0bC02LjQ5NiA2Ljk5N3YxMS4yMDRhNS4xMjcgNS4xMjcgMCAwIDEtNS4xMjIgNS4xMjFoLTUuODUyYTIuMTk1IDIuMTk1IDAgMCAxIDAtNC4zOXoiIGZpbGw9IiNmZmYiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyLjUiLz48L3N2Zz4=";

  const arrowURI =
"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNS44OTMiIGhlaWdodD0iMTUuODkzIiB2aWV3Qm94PSIwIDAgMTUuODkzIDE1Ljg5MyI+PHBhdGggZD0iTTkuMDIxIDEyLjI5NHYtMi4xMDdsLTYuODM5LS45MDVDMS4zOTggOS4xODQuODQ2IDguNDg2Ljk2MiA3LjcyN2MuMDktLjYxMi42MDMtMS4wOSAxLjIyLTEuMTY0bDYuODM5LS45MDVWMy42YzAtLjU4Ni43MzItLjg2OSAxLjE1Ni0uNDY0bDQuNTc2IDQuMzQ1YS42NDMuNjQzIDAgMCAxIDAgLjkxOGwtNC41NzYgNC4zNmMtLjQyNC40MDQtMS4xNTYuMTEtMS4xNTYtLjQ2NSIgZmlsbD0ibm9uZSIgc3Ryb2tlLW9wYWNpdHk9Ii4xNSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjEuNzUiLz48cGF0aCBkPSJNOS4wMjEgMTIuMjk0di0yLjEwN2wtNi44MzktLjkwNUMxLjM5OCA5LjE4NC44NDYgOC40ODYuOTYyIDcuNzI3Yy4wOS0uNjEyLjYwMy0xLjA5IDEuMjItMS4xNjRsNi44MzktLjkwNVYzLjZjMC0uNTg2LjczMi0uODY5IDEuMTU2LS40NjRsNC41NzYgNC4zNDVhLjY0My42NDMgMCAwIDEgMCAuOTE4bC00LjU3NiA0LjM2Yy0uNDI0LjQwNC0xLjE1Ni4xMS0xLjE1Ni0uNDY1IiBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48cGF0aCBkPSJNMCAxNS44OTJWMGgxNS44OTJ2MTUuODkyeiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==";

  const vm = Scratch.vm;
  const runtime = vm.runtime;
  const isPM = Scratch.extensions.isPenguinMod;

  const hasOwn = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
  let extClass;

  // Custom Square Block Shapes
  const ogConverter = runtime._convertBlockForScratchBlocks.bind(runtime);
  runtime._convertBlockForScratchBlocks = function (blockInfo, categoryInfo) {
    const res = ogConverter(blockInfo, categoryInfo);
    if (blockInfo.outputShape) res.json.outputShape = blockInfo.outputShape;
    return res;
  }

  const regenReporters = ["SPjson_objKey", "SPjson_objValue", "SPjson_arrValueA", "SPjson_arrValueB"];
  const jsonBlocks = ["SPjson_objValid", "SPjson_jsonBuilder", "SPjson_getKey", "SPjson_getPath", "SPjson_setKey", "SPjson_setPath", "SPjson_deleteKey", "SPjson_jsonSize", "SPjson_keyIndex", "SPjson_getEntry", "SPjson_extractJson", "SPjson_mergeJson", "SPjson_jsonMap"];
  if (Scratch.gui) Scratch.gui.getBlockly().then(SB => {
    // Regen Reporters
    const ogCheck = SB.scratchBlocksUtils.isShadowArgumentReporter;
    SB.scratchBlocksUtils.isShadowArgumentReporter = function (block) {
      const result = ogCheck(block);
      if (result) return true;
      return block.isShadow() && regenReporters.includes(block.type);
    };

    // Custom JSON Block Shape
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
      if (this.svgPath_ && jsonBlocks.includes(this.type)) {
        if (this.type !== "SPjson_jsonValid" && this.type !== "SPjson_objValid") {
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
  });

  // Patch Saving Pure Objects to Variables
  // We must stringify them for it to work
  const og2JSON = vm.constructor.prototype.toJSON;
  vm.constructor.prototype.toJSON = function (optTargetId, serializationOptions) {
    stringifyVariables();
    return og2JSON.call(this, optTargetId, serializationOptions);
  }

  function stringifyVariables() {
    for (let i = 0; i < runtime.targets.length; i++) {
      const target = runtime.targets[i];
      const vars = Object.values(target.variables);
      for (let j = 0; j < vars.length; j++) {
        const data = vars[j];
        if (data.type !== "broadcast_msg") {
          const val = data.value;
          if (data.type === "list") {
            // Iterate through each list item
            for (var k = 0; k < val.length; k++) {
              if (typeof val[k] === "object") val[k] = JSON.stringify(val[k]);
            }
          } else {
            if (typeof val === "object") data.value = JSON.stringify(val);
          }
        }
      }
    }
  }

  // Modify Visual Report to stringify JSON
  const ogVisReport = runtime.visualReport;
  if (isPM) {
    runtime.visualReport = function (blockId, value) {
      if (value.constructor?.name === "Object" || value.constructor?.name === "Array") {
        // PM custom return constructors have a different name
        value = JSON.stringify(value);
      }
      return ogVisReport.call(this, blockId, value);
    }
  } else {
    runtime.visualReport = function (target, blockId, value) {
      if (typeof value === "object") value = JSON.stringify(value);
      return ogVisReport.call(this, target, blockId, value);
    }
  }

  // Modify Monitors to stringify JSON
  if (typeof scaffolding === "undefined") {
    const ogListener = vm.listeners("MONITORS_UPDATE").find((f) => f.name === "onMonitorsUpdate");
    if (ogListener) vm.removeListener("MONITORS_UPDATE", ogListener);
    vm.on("MONITORS_UPDATE", (monitors) => {
      const iterators = monitors._list?._tail?.array;
      if (iterators) iterators.forEach((entry) => {
        const data = entry[1]._map._root?.entries || entry[1]._map._root.nodes;
        const valueInd = data.findIndex((e) => { return e.entry && e.entry[0] === "value" });
        if (valueInd === -1) return;

        if (data[0]?.entry && data[0]?.entry[1] === "list") {
          data[valueInd].entry[1] = data[valueInd]?.entry[1]?.map((item) => {
            if (typeof item === "object") item = JSON.stringify(item);
            return item;
          });
        } else {
          const value = data[valueInd].entry[1];
          if (typeof value === "object") data[valueInd].entry[1] = JSON.stringify(value);
        }
      });

      ReduxStore.dispatch({
        type: "scratch-gui/monitors/UPDATE_MONITORS",
        monitors
      });
    });
  }

  // Compiler Patches
  // TODO remove this when there is a dedicated API for refreshing block arguments
  const generateParser = (type, alwaysTryParse) => {
    if (!alwaysTryParse) return `(o) => {return o}`;

    const defaultV = type === undefined ? "o" : type === 0 ? "{}" : "[]";
    let funcString = `(o) => {\n`;

    if (type === undefined) funcString += `if (typeof o === "object") return o;\n`;
    else if (type === 0) funcString += `if (o.constructor?.name === "Object") return o;\n`;
    else funcString += `if (Array.isArray(o)) return o;\n`;

    funcString += `try {\n`;
    funcString += `const p = JSON.parse(o);\n`;
    if (type === undefined) funcString += `return p;\n`;
    else if (type === 0) funcString += `return p.constructor?.name === "Object" ? p : ${defaultV};\n`;
    else funcString += `return Array.isArray(p) ? p : ${defaultV};\n`;
    funcString += `} catch {return ${defaultV}}\n`;
    return funcString + "}";
  }
  const generateCleanser = (type) => {
    let funcString = `(() => {\n`;
    funcString += `const t = typeof ${type};\n`;
    funcString += `if (t === "undefined") return "";\n`;
    funcString += `else if (t === "object") return JSON.stringify(${type});\n`;
    funcString += `else return ${type}.toString();\n`;
    return funcString + "})()";
  }

  function getCompiler() {
    if (vm.exports.i_will_not_ask_for_help_when_these_break) return vm.exports.i_will_not_ask_for_help_when_these_break();
    else if (vm.exports.JSGenerator && vm.exports.IRGenerator?.exports) return {
      ...vm.exports, ScriptTreeGenerator: vm.exports.IRGenerator.exports.ScriptTreeGenerator
    };
  }
  const compiler = getCompiler();
  if (compiler) {
    const { JSGenerator, ScriptTreeGenerator } = compiler;
    const exp = JSGenerator.exports === undefined ? JSGenerator.unstable_exports : JSGenerator.exports;
    const _ogIRdescendStack = ScriptTreeGenerator.prototype.descendStackedBlock;
    ScriptTreeGenerator.prototype.descendStackedBlock = function (block) {
      switch (block.opcode) {
        case "SPjson_forEach":
          this.analyzeLoop();
          return {
            kind: "SPjson.forEach",
            obj: this.descendInputOfBlock(block, "OBJ"), branch: this.descendSubstack(block, "SUBSTACK")
          };
        default: return _ogIRdescendStack.call(this, block);
      }
    }
    const _ogJSdescendStack = JSGenerator.prototype.descendStackedBlock;
    JSGenerator.prototype.descendStackedBlock = function (node) {
      switch (node.kind) {
        case "SPjson.forEach":
          const safeObj = this.descendInput(node.obj).asUnknown();
          const objVar = this.localVariables.next();
          const isArray = this.localVariables.next();
          const i = this.localVariables.next();

          this.source += `let ${objVar} = (${generateParser(undefined, extClass.alwaysTryParse)})(${safeObj})\n;`;
          this.source += `const ${isArray} = Array.isArray(${objVar})\n;`;
          this.source += `${objVar} = Object.entries(${objVar})\n;`;
          this.source += `for (let ${i} = 0; ${i} < ${objVar}.length; ${i}++) {\n;`;
          this.source += `let [SPobjK, SPobjV] = ${objVar}[${i}];\n`;
          this.source += `if (${isArray}) SPobjK++\n`;
          this.descendStack(node.branch, new exp.Frame(true));
          this.yieldLoop();
          this.source += `}\n`;
          break;
        default: return _ogJSdescendStack.call(this, node);
      }
    }

    const _ogIRdescendInp = ScriptTreeGenerator.prototype.descendInput;
    ScriptTreeGenerator.prototype.descendInput = function (block) {
      switch (block.opcode) {
        case "SPjson_arrValueA": return { kind: "SPjson.arrValA" };
        case "SPjson_arrValueB": return { kind: "SPjson.arrValB" };
        case "SPjson_objKey": return { kind: "SPjson.objKey" };
        case "SPjson_objValue": return { kind: "SPjson.objVal" };
        case "SPjson_jsonMap":
          return {
            kind: "SPjson.jsonMap",
            obj: this.descendInputOfBlock(block, "OBJ"), value: this.descendInputOfBlock(block, "VALUE")
          };
        case "SPjson_arrCheck":
          return {
            kind: "SPjson.arrCheck", type: block.fields.TYPE.value,
            array: this.descendInputOfBlock(block, "ARR"), bool: this.descendInputOfBlock(block, "BOOL"),
          };
        case "SPjson_arrMap":
          return {
            kind: "SPjson.arrMap",
            array: this.descendInputOfBlock(block, "ARR"), value: this.descendInputOfBlock(block, "VALUE")
          };
        case "SPjson_arrSort":
          return {
            kind: "SPjson.arrSort",
            array: this.descendInputOfBlock(block, "ARR"), value: this.descendInputOfBlock(block, "VALUE")
          };
        case "SPjson_filterNew":
          return {
            kind: "SPjson.filter", type: block.fields.TYPE.value,
            obj: this.descendInputOfBlock(block, "OBJ"), bool: this.descendInputOfBlock(block, "BOOL")
          };
        default: return _ogIRdescendInp.call(this, block);
      }
    };
    const _ogJSdescendInp = JSGenerator.prototype.descendInput;
    JSGenerator.prototype.descendInput = function (node) {
      if (node === undefined) return;
      switch (node.kind) {
        case "SPjson.arrValA": return new exp.TypedInput(generateCleanser("SParrA"), exp.TYPE_STRING);
        case "SPjson.arrValB": return new exp.TypedInput(generateCleanser("SParrB"), exp.TYPE_STRING);
        case "SPjson.objKey": return new exp.TypedInput(generateCleanser("SPobjK"), exp.TYPE_STRING);
        case "SPjson.objVal": return new exp.TypedInput(generateCleanser("SPobjV"), exp.TYPE_STRING);
        case "SPjson.jsonMap": {
          const safeObj = this.descendInput(node.obj).asUnknown();
          const safeValue = this.descendInput(node.value).asUnknown();
          return new exp.TypedInput(`(function() {
            function* generator() {
              const p = (${generateParser(0, extClass.alwaysTryParse)})(${safeObj});
              const e = Object.entries(p);
              for (const [SPobjK, SPobjV] of e) yield [SPobjK, ${safeValue}];
            }
            return Object.fromEntries(generator());
          })()`, exp.TYPE_UNKNOWN);
        }
        case "SPjson.arrCheck": {
          const safeObj = this.descendInput(node.array).asUnknown();
          const safeBool = this.descendInput(node.bool).asBoolean();
          return new exp.TypedInput(`(function() {
            function* generator() {
              const p = (${generateParser(1, extClass.alwaysTryParse)})(${safeObj});
              yield p.${node.type === "some" ? "some" : "every"}((SPobjV, SPobjK) => {
                SPobjK++;
                return ${safeBool};
              });
            }
            return [...generator()][0];
          })()`, exp.TYPE_BOOLEAN);
        }
        case "SPjson.arrMap": {
          const safeObj = this.descendInput(node.array).asUnknown();
          const safeValue = this.descendInput(node.value).asUnknown();
          return new exp.TypedInput(`(function() {
            function* generator() {
              const p = (${generateParser(1, extClass.alwaysTryParse)})(${safeObj});
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
          const safeObj = this.descendInput(node.array).asUnknown();
          const safeValue = this.descendInput(node.value).asUnknown();
          // this is a rough check, but its the best we can do
          if (safeValue.includes(`yield* executeInCompat`) && !safeValue.includes(`"yield* executeInCompat`)) {
            return new exp.TypedInput(`(function() {
              function* generator() {
                const stringer = (v) => { return typeof v === "object" ? JSON.stringify(v) : v.toString() };
                const s = {};
                const p = (${generateParser(1, extClass.alwaysTryParse)})(${safeObj});
                for (let i = 0; i < p.length; i++) {
                  for (let j = 0; j < p.length; j++) {
                    const SParrA = p[i], SParrB = p[j];
                    s[stringer(p[i]) + stringer(p[j])] = ${safeValue};
                  }
                }
                const sorted = [...p].sort((a, b) => { return s[stringer(a) + stringer(b)] ?? 0 });
                for (const item of sorted) yield item;
              }
              return [...generator()];
            })()`, exp.TYPE_UNKNOWN);
          } else {
            return new exp.TypedInput(`(function() {
              function* generator() {
                const p = (${generateParser(1, extClass.alwaysTryParse)})(${safeObj});
                const sorted = [...p].sort((SParrA, SParrB) => { return ${safeValue}; });
                for (const item of sorted) yield item;
              }
              return [...generator()];
            })()`, exp.TYPE_UNKNOWN);
          }
        }
        case "SPjson.filter": {
          const safeObj = this.descendInput(node.obj).asUnknown();
          const safeBool = this.descendInput(node.bool).asBoolean();
          return new exp.TypedInput(`(function() {
            function* generator() {
              const p = (${generateParser(undefined, extClass.alwaysTryParse)})(${safeObj});
              const e = Object.entries(p);
              const isO = p.constructor?.name === "Object";

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
        default: return _ogJSdescendInp.call(this, node);
      }
    };
  }

  class SPjson {
    constructor() {
      this.settings = [
        { text: "always cast values", value: "alwaysCast" },
        { text: "always parse text objects", value: "alwaysParse" },
        { text: "always try parsing", value: "alwaysTryParse" },
        { text: "dont edit source objects", value: "useNewObj" },
      ];
      this.alwaysCast = true; this.alwaysParse = true;
      this.alwaysTryParse = true; this.useNewObj = true;
    }
    getInfo() {
      return {
        id: "SPjson",
        name: "JSON and Array",
        color1: "#748bee",
        menuIconURI,
        blocks: [
          {
            func: "warn",
            blockType: Scratch.BlockType.BUTTON,
            text: "Usage Warning"
          },
          { blockType: Scratch.BlockType.LABEL, text: "JSON" },
          {
            opcode: "objValid",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "is object [OBJ] valid?",
            arguments: {
              OBJ: { type: Scratch.ArgumentType.STRING, defaultValue: `{"key":"value"}`, exemptFromNormalization: true },
            },
          },
          {
            opcode: "jsonBuilder",
            blockType: Scratch.BlockType.REPORTER,
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
            text: "get [KEY] from [OBJ]",
            arguments: {
              KEY: { type: Scratch.ArgumentType.STRING, defaultValue: "key" },
              OBJ: { type: Scratch.ArgumentType.STRING, defaultValue: `{"key":"value"}`, exemptFromNormalization: true }
            },
          },
          {
            opcode: "getPath",
            blockType: Scratch.BlockType.REPORTER,
            text: "get path [PATH] from [OBJ]",
            arguments: {
              PATH: { type: Scratch.ArgumentType.STRING, defaultValue: `["key", "value1"]`, exemptFromNormalization: true },
              OBJ: { type: Scratch.ArgumentType.STRING, defaultValue: `{"key":{"value1":1, "value2":2}}`, exemptFromNormalization: true }
            },
          },
          {
            opcode: "setKey",
            blockType: Scratch.BlockType.REPORTER,
            text: "set [KEY] to [VAL] in [OBJ]",
            arguments: {
              KEY: { type: Scratch.ArgumentType.STRING, defaultValue: "key" },
              VAL: { type: Scratch.ArgumentType.STRING, defaultValue: "value", exemptFromNormalization: true },
              OBJ: { type: Scratch.ArgumentType.STRING, defaultValue: "{}", exemptFromNormalization: true }
            },
          },
          {
            opcode: "setPath",
            blockType: Scratch.BlockType.REPORTER,
            text: "set path [PATH] to [VAL] in [OBJ]",
            arguments: {
              PATH: { type: Scratch.ArgumentType.STRING, defaultValue: `["key1", "key2"]`, exemptFromNormalization: true },
              VAL: { type: Scratch.ArgumentType.STRING, defaultValue: "value", exemptFromNormalization: true },
              OBJ: { type: Scratch.ArgumentType.STRING, defaultValue: `{"key1":{}}`, exemptFromNormalization: true }
            },
          },
          {
            opcode: "deleteKey",
            blockType: Scratch.BlockType.REPORTER,
            text: "delete [KEY] from [OBJ]",
            arguments: {
              KEY: { type: Scratch.ArgumentType.STRING, defaultValue: "key" },
              OBJ: { type: Scratch.ArgumentType.STRING, defaultValue: `{"key":"value"}`, exemptFromNormalization: true }
            },
          },
          {
            opcode: "jsonSize",
            blockType: Scratch.BlockType.REPORTER,
            text: "size of [OBJ]",
            arguments: {
              OBJ: { type: Scratch.ArgumentType.STRING, defaultValue: `{"key":"value"}`, exemptFromNormalization: true }
            },
          },
          "---",
          {
            opcode: "keyIndex",
            blockType: Scratch.BlockType.REPORTER,
            text: "index of [KEY] in [OBJ]",
            allowDropAnywhere: true,
            arguments: {
              KEY: { type: Scratch.ArgumentType.STRING, defaultValue: "key" },
              OBJ: { type: Scratch.ArgumentType.STRING, defaultValue: `{"key":"value"}`, exemptFromNormalization: true }
            },
          },
          {
            opcode: "getEntry",
            blockType: Scratch.BlockType.REPORTER,
            text: "get [KEY] entry from [OBJ]",
            arguments: {
              KEY: { type: Scratch.ArgumentType.STRING, defaultValue: "key" },
              OBJ: { type: Scratch.ArgumentType.STRING, defaultValue: `{"key":"value"}`, exemptFromNormalization: true }
            },
          },
          {
            opcode: "extractJson",
            blockType: Scratch.BlockType.REPORTER,
            text: "all [TYPE] from [OBJ]",
            arguments: {
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "OBJ_EXTRACT" },
              OBJ: { type: Scratch.ArgumentType.STRING, defaultValue: `{"key":"value","key2":"value2"}`, exemptFromNormalization: true }
            },
          },
          {
            opcode: "mergeJson",
            blockType: Scratch.BlockType.REPORTER,
            text: "merge [OBJ1] and [OBJ2]",
            arguments: {
              OBJ1: { type: Scratch.ArgumentType.STRING, defaultValue: `{"key":"value"}`, exemptFromNormalization: true },
              OBJ2: { type: Scratch.ArgumentType.STRING, defaultValue: `{"key2":"value2"}`, exemptFromNormalization: true }
            },
          },
          "---",
          {
            opcode: "jsonMap", blockType: Scratch.BlockType.REPORTER,
            text: "map [OBJ] using rule [IND] [VAL] [IMG] [VALUE]", hideFromPalette: true,
            arguments: {
              OBJ: { type: Scratch.ArgumentType.STRING, exemptFromNormalization: true },
              IND: {}, VAL: {},
              VALUE: { type: Scratch.ArgumentType.STRING, exemptFromNormalization: true },
              IMG: { type: Scratch.ArgumentType.IMAGE, dataURI: arrowURI }
            },
          },
          {
            blockType: Scratch.BlockType.XML,
            xml: `
              <block type="SPjson_jsonMap">
                <value name="OBJ"><shadow type="text"><field name="TEXT">{"key":"value"}</field></shadow></value>
                <value name="IND"><shadow type="SPjson_objKey"></shadow></value>
                <value name="VAL"><shadow type="SPjson_objValue"></shadow></value>
                <value name="VALUE"><shadow type="text"><field name="TEXT">value-2</field></shadow></value>
              </block>`
          },
          { blockType: Scratch.BlockType.LABEL, text: "Arrays" },
          {
            opcode: "arrValid",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "is array [ARR] valid?",
            arguments: {
              ARR: { type: Scratch.ArgumentType.STRING, defaultValue: `["a", "b", "c"]`, exemptFromNormalization: true },
            },
          },
          {
            opcode: "arrBuilder",
            blockType: Scratch.BlockType.REPORTER,
            text: "［ [VAL] ］",
            outputShape: 3,
            arguments: {
              VAL: { type: Scratch.ArgumentType.STRING, defaultValue: "value", exemptFromNormalization: true }
            },
          },
          "---",
          {
            opcode: "arrAdd",
            blockType: Scratch.BlockType.REPORTER,
            text: "add [ITEM] to [ARR]",
            outputShape: 3,
            arguments: {
              ITEM: { type: Scratch.ArgumentType.STRING, defaultValue: "thing", exemptFromNormalization: true },
              ARR: { type: Scratch.ArgumentType.STRING, defaultValue: "[]", exemptFromNormalization: true }
            },
          },
          {
            opcode: "arrInsert",
            blockType: Scratch.BlockType.REPORTER,
            text: "insert [ITEM] at [IND] in [ARR]",
            outputShape: 3,
            arguments: {
              ITEM: { type: Scratch.ArgumentType.STRING, defaultValue: "b", exemptFromNormalization: true },
              IND: { type: Scratch.ArgumentType.NUMBER, defaultValue: 2 },
              ARR: { type: Scratch.ArgumentType.STRING, defaultValue: `["a", "c"]`, exemptFromNormalization: true }
            },
          },
          {
            opcode: "arrReplace",
            blockType: Scratch.BlockType.REPORTER,
            text: "replace item [IND] with [ITEM] in [ARR]",
            outputShape: 3,
            arguments: {
              IND: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 },
              ITEM: { type: Scratch.ArgumentType.STRING, defaultValue: "a", exemptFromNormalization: true },
              ARR: { type: Scratch.ArgumentType.STRING, defaultValue: `["z", "b", "c"]`, exemptFromNormalization: true }
            },
          },
          {
            opcode: "arrSwap",
            blockType: Scratch.BlockType.REPORTER,
            text: "swap item [IND1] with item [IND2] in [ARR]",
            outputShape: 3,
            arguments: {
              IND1: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 },
              IND2: { type: Scratch.ArgumentType.STRING, defaultValue: 3 },
              ARR: { type: Scratch.ArgumentType.STRING, defaultValue: `["a", "b", "c"]`, exemptFromNormalization: true }
            },
          },
          {
            opcode: "arrDelete",
            blockType: Scratch.BlockType.REPORTER,
            text: "delete item [IND] in [ARR]",
            outputShape: 3,
            arguments: {
              IND: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 },
              ARR: { type: Scratch.ArgumentType.STRING, defaultValue: `["a", "b", "c"]`, exemptFromNormalization: true }
            },
          },
          {
            opcode: "arrGet",
            blockType: Scratch.BlockType.REPORTER,
            text: "item [IND] in [ARR]",
            outputShape: 3,
            arguments: {
              IND: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 },
              ARR: { type: Scratch.ArgumentType.STRING, defaultValue: `["a", "b", "c"]`, exemptFromNormalization: true }
            },
          },
          {
            opcode: "arrSlice",
            blockType: Scratch.BlockType.REPORTER,
            text: "items [IND1] to [IND2] in [ARR]",
            outputShape: 3,
            arguments: {
              IND1: { type: Scratch.ArgumentType.NUMBER, defaultValue: 2 },
              IND2: { type: Scratch.ArgumentType.NUMBER, defaultValue: 3 },
              ARR: { type: Scratch.ArgumentType.STRING, defaultValue: `["a", "b", "c"]`, exemptFromNormalization: true }
            },
          },
          {
            opcode: "arrLength",
            blockType: Scratch.BlockType.REPORTER,
            text: "length of [ARR]",
            outputShape: 3,
            arguments: {
              ARR: { type: Scratch.ArgumentType.STRING, defaultValue: `["a", "b", "c"]`, exemptFromNormalization: true }
            },
          },
          "---",
          {
            opcode: "itemExists",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "[ARR] contains [ITEM] ?",
            arguments: {
              ARR: { type: Scratch.ArgumentType.STRING, defaultValue: `["a", "b", "c"]`, exemptFromNormalization: true },
              ITEM: { type: Scratch.ArgumentType.STRING, defaultValue: "b" }
            },
          },
          {
            opcode: "arrMatches",
            blockType: Scratch.BlockType.REPORTER,
            text: "# of times [ITEM] appears in [ARR]",
            outputShape: 3,
            arguments: {
              ITEM: { type: Scratch.ArgumentType.STRING, defaultValue: "a" },
              ARR: { type: Scratch.ArgumentType.STRING, defaultValue: `["a", "b", "b", "a"]`, exemptFromNormalization: true }
            },
          },
          {
            opcode: "arrContainers",
            blockType: Scratch.BlockType.REPORTER,
            text: "# of items containing [TESTER] in [ARR]",
            outputShape: 3,
            arguments: {
              TESTER: { type: Scratch.ArgumentType.STRING, defaultValue: "a" },
              ARR: { type: Scratch.ArgumentType.STRING, defaultValue: `["a", "ab", "ba", "bb"]`, exemptFromNormalization: true }
            },
          },
          {
            opcode: "itemIndex",
            blockType: Scratch.BlockType.REPORTER,
            text: "index # [IND] of item [ITEM] in [ARR]",
            outputShape: 3,
            arguments: {
              IND: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 },
              ITEM: { type: Scratch.ArgumentType.STRING, defaultValue: "a" },
              ARR: { type: Scratch.ArgumentType.STRING, defaultValue: `["a", "b", "b", "a"]`, exemptFromNormalization: true }
            },
          },
          "---",
          {
            opcode: "mergeArray",
            blockType: Scratch.BlockType.REPORTER,
            text: "merge array [ARR1] and [ARR2]",
            outputShape: 3,
            arguments: {
              ARR1: { type: Scratch.ArgumentType.STRING, defaultValue: `["a", "b"]`, exemptFromNormalization: true },
              ARR2: { type: Scratch.ArgumentType.STRING, defaultValue: `["c", "d"]`, exemptFromNormalization: true }
            },
          },
          {
            opcode: "repeatArray",
            blockType: Scratch.BlockType.REPORTER,
            text: "repeat array [ARR] [NUM] times",
            outputShape: 3,
            arguments: {
              ARR: { type: Scratch.ArgumentType.STRING, defaultValue: `["a", "b"]`, exemptFromNormalization: true },
              NUM: { type: Scratch.ArgumentType.NUMBER, defaultValue: 3 }
            },
          },
          {
            opcode: "fillArray",
            blockType: Scratch.BlockType.REPORTER,
            text: "fill array [ARR] to length [NUM]",
            outputShape: 3,
            arguments: {
              ARR: { type: Scratch.ArgumentType.STRING, defaultValue: `["a", "b"]`, exemptFromNormalization: true },
              NUM: { type: Scratch.ArgumentType.NUMBER, defaultValue: 5 }
            },
          },
          {
            opcode: "arrOrder",
            blockType: Scratch.BlockType.REPORTER,
            text: "order [ARR] by [ORDERER]",
            outputShape: 3,
            arguments: {
              ARR: { type: Scratch.ArgumentType.STRING, defaultValue: `["2", "item1", "1", "item12", "1"]`, exemptFromNormalization: true },
              ORDERER: { type: Scratch.ArgumentType.STRING, menu: "ORDERING" }
            }
          },
          "---",
          {
            opcode: "arrCheck", blockType: Scratch.BlockType.BOOLEAN,
            text: "check [ARR] if [TYPE] item [IND] [VAL] [IMG] [BOOL]", hideFromPalette: true,
            arguments: {
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "ARRAY_CHECK" },
              ARR: { type: Scratch.ArgumentType.STRING, exemptFromNormalization: true },
              IND: {}, VAL: {}, BOOL: { type: Scratch.ArgumentType.BOOLEAN },
              IMG: { type: Scratch.ArgumentType.IMAGE, dataURI: arrowURI }
            },
          },
          {
            opcode: "arrMap", blockType: Scratch.BlockType.REPORTER, outputShape: 3,
            text: "map [ARR] using rule [IND] [VAL] [IMG] [VALUE]", hideFromPalette: true,
            arguments: {
              ARR: { type: Scratch.ArgumentType.STRING, exemptFromNormalization: true },
              IND: {}, VAL: {},
              VALUE: { type: Scratch.ArgumentType.STRING, exemptFromNormalization: true },
              IMG: { type: Scratch.ArgumentType.IMAGE, dataURI: arrowURI }
            },
          },
          {
            opcode: "arrValueA", blockType: Scratch.BlockType.REPORTER,
            hideFromPalette: true, allowDropAnywhere: true,
            text: "value A", color1: "#677cd6"
          },
          {
            opcode: "arrValueB", blockType: Scratch.BlockType.REPORTER,
            hideFromPalette: true, allowDropAnywhere: true,
            text: "value B", color1: "#677cd6"
          },
          {
            opcode: "arrSort", blockType: Scratch.BlockType.REPORTER, outputShape: 3,
            text: "sort [ARR] using rule [A] [B] [IMG] [VALUE]", hideFromPalette: true,
            arguments: {
              ARR: { type: Scratch.ArgumentType.STRING, exemptFromNormalization: true },
              A: {}, B: {},
              VALUE: { type: Scratch.ArgumentType.STRING },
              IMG: { type: Scratch.ArgumentType.IMAGE, dataURI: arrowURI }
            },
          },
          {
            blockType: Scratch.BlockType.XML,
            xml: `
              <block type="SPjson_arrCheck">
                <field name="TYPE">every</field>
                <value name="ARR"><shadow type="text"><field name="TEXT">["a", "b", "c"]</field></shadow></value>
                <value name="IND"><shadow type="SPjson_objKey"></shadow></value>
                <value name="VAL"><shadow type="SPjson_objValue"></shadow></value>
              </block>
              <block type="SPjson_arrMap">
                <value name="ARR"><shadow type="text"><field name="TEXT">["a", "b", "c"]</field></shadow></value>
                <value name="IND"><shadow type="SPjson_objKey"></shadow></value>
                <value name="VAL"><shadow type="SPjson_objValue"></shadow></value>
                <value name="VALUE"><shadow type="text"><field name="TEXT">d</field></shadow></value>
              </block>
              <block type="SPjson_arrSort">
                <value name="ARR"><shadow type="text"><field name="TEXT">[1, 2, 3]</field></shadow></value>
                <value name="A"><shadow type="SPjson_arrValueA"></shadow></value>
                <value name="B"><shadow type="SPjson_arrValueB"></shadow></value>
                <value name="VALUE"><shadow type="text"><field name="TEXT"></field></shadow></value>
              </block>`
          },
          { blockType: Scratch.BlockType.LABEL, text: "Utilities" },
          {
            opcode: "jsonValid",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "is JSON [OBJ] valid?",
            arguments: {
              OBJ: { type: Scratch.ArgumentType.STRING, defaultValue: `{"key":"value"}`, exemptFromNormalization: true },
            },
          },
          {
            opcode: "parse",
            blockType: Scratch.BlockType.REPORTER,
            text: "parse [OBJ]",
            arguments: {
              OBJ: { type: Scratch.ArgumentType.STRING, defaultValue: `{"key": "value"}`, exemptFromNormalization: true }
            },
          },
          {
            opcode: "clone",
            blockType: Scratch.BlockType.REPORTER,
            text: "copy [OBJ] to new",
            arguments: {
              OBJ: { type: Scratch.ArgumentType.STRING, defaultValue: `{"key": "value"}`, exemptFromNormalization: true }
            },
          },
          {
            opcode: "convert",
            blockType: Scratch.BlockType.REPORTER,
            text: "[OBJ] to [TYPE]",
            arguments: {
              OBJ: { type: Scratch.ArgumentType.STRING, defaultValue: "{}", exemptFromNormalization: true },
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "CONVERTS" }
            },
          },
          "---",
          {
            opcode: "jsonMake",
            blockType: Scratch.BlockType.REPORTER,
            text: "[TXT] split by [SPLIT] with delimiter [DELIM] to JSON",
            arguments: {
              TXT: { type: Scratch.ArgumentType.STRING, defaultValue: "a:1,b:2,c:3" },
              SPLIT: { type: Scratch.ArgumentType.STRING, defaultValue: "," },
              DELIM: { type: Scratch.ArgumentType.STRING, defaultValue: ":" }
            },
          },
          {
            opcode: "arrMake",
            blockType: Scratch.BlockType.REPORTER,
            text: "[TXT] split by [SPLIT] to [TYPE]",
            outputShape: 3,
            arguments: {
              TXT: { type: Scratch.ArgumentType.STRING, defaultValue: "a,b,c", exemptFromNormalization: true },
              SPLIT: { type: Scratch.ArgumentType.STRING, defaultValue: "," },
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "CONVERTS2" }
            },
          },
          "---",
          {
            opcode: "objKey", blockType: Scratch.BlockType.REPORTER,
            hideFromPalette: true, allowDropAnywhere: true,
            text: "key", color1: "#677cd6"
          },
          {
            opcode: "objValue", blockType: Scratch.BlockType.REPORTER,
            hideFromPalette: true, allowDropAnywhere: true,
            text: "value", color1: "#677cd6"
          },
          {
            opcode: "filter", blockType: Scratch.BlockType.CONDITIONAL, branchCount: -1, // deprecated
            text: "in thread [TYPE] [OBJ] by [IND] [VAL] [IMG] [BOOL]", hideFromPalette: true,
            arguments: {
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "CUST_ORDER" },
              OBJ: { type: Scratch.ArgumentType.STRING, exemptFromNormalization: true },
              IND: {}, VAL: {}, BOOL: { type: Scratch.ArgumentType.BOOLEAN },
              IMG: { type: Scratch.ArgumentType.IMAGE, dataURI: arrowURI }
            },
          },
          {
            opcode: "filterResult", blockType: Scratch.BlockType.REPORTER, // deprecated
            disableMonitor: true, hideFromPalette: true, text: "thread filter result"
          },
          {
            opcode: "filterNew", blockType: Scratch.BlockType.REPORTER,
            text: "[TYPE] [OBJ] by [IND] [VAL] [IMG] [BOOL]", hideFromPalette: true,
            arguments: {
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "CUST_ORDER" },
              OBJ: { type: Scratch.ArgumentType.STRING, exemptFromNormalization: true },
              IND: {}, VAL: {}, BOOL: { type: Scratch.ArgumentType.BOOLEAN },
              IMG: { type: Scratch.ArgumentType.IMAGE, dataURI: arrowURI }
            },
          },
          {
            opcode: "forEach", blockType: Scratch.BlockType.LOOP,
            text: "for each [IND] [VAL] in [OBJ]", hideFromPalette: true,
            arguments: {
              IND: {}, VAL: {},
              OBJ: { type: Scratch.ArgumentType.STRING, exemptFromNormalization: true }
            },
          },
          {
            blockType: Scratch.BlockType.XML,
            xml: `
              <block type="SPjson_filterNew">
                <field name="TYPE">filter</field>
                <value name="OBJ"><shadow type="text"><field name="TEXT">{"JSON":"or array"}</field></shadow></value>
                <value name="IND"><shadow type="SPjson_objKey"></shadow></value>
                <value name="VAL"><shadow type="SPjson_objValue"></shadow></value>
              </block>
              <sep gap="36"></sep>
              <block type="SPjson_forEach">
                <value name="OBJ"><shadow type="text"><field name="TEXT">{"JSON":"or array"}</field></shadow></value>
                <value name="IND"><shadow type="SPjson_objKey"></shadow></value>
                <value name="VAL"><shadow type="SPjson_objValue"></shadow></value>
              </block>`
          },
          { blockType: Scratch.BlockType.LABEL, text: "Safety Settings" },
          {
            func: "optimizeWarn",
            blockType: Scratch.BlockType.BUTTON,
            text: "Optimization Warning"
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
          }
        ],
        menus: {
          TOGGLER: ["enabled", "disabled"],
          CUST_ORDER: ["filter", "order"],
          ARRAY_CHECK: ["every", "some"],
          OBJ_EXTRACT: { acceptReporters: true, items: ["keys", "values"] },
          CONVERTS: { acceptReporters: true, items: ["string", "array", "JSON"] },
          CONVERTS2: { acceptReporters: true, items: ["array", "text"] },
          SETTINGS: { acceptReporters: true, items: this.settings },
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
    tryParse(obj, optType) {
      if (!this.alwaysTryParse) return obj;
      if (
        (optType === 1 && Array.isArray(obj)) ||
        (optType === 0 && obj.constructor?.name === "Object") ||
        (optType === undefined && typeof obj === "object")
      ) return this.useNewObj ? structuredClone(obj) : obj;
      const defaultV = optType === undefined ? obj : optType === 0 ? {} : [];
      try {
        if (this.alwaysParse) {
          const parsed = JSON.parse(obj);
          return (
            (optType === 1 && Array.isArray(parsed)) ||
            (optType === 0 && parsed.constructor?.name === "Object") ||
            optType === undefined
          ) ? parsed : defaultV;
        }
        return defaultV;
      } catch {
        return defaultV;
      }
    }

    toArrInd(num) { return Scratch.Cast.toNumber(num) - 1 }

    toSafe(val) {
      if (this.alwaysCast) {
        if (typeof val === "object") return val;
        if (isNaN(val) || val === Infinity || val === -Infinity) return Scratch.Cast.toString(val);
      }
      return val;
    }

    reporterYield(util, wasCompiled) {
      const thisBlock = util.thread.stackFrames[0].myID ?? util.thread.blockContainer.getBlock(
        wasCompiled ? util.thread.peekStack() : util.thread.peekStackFrame().op?.id
      );
      if (!thisBlock) return true; // abort!

      util.thread.stackFrames[0].myID = thisBlock;
      util.thread.peekStackFrame().isLoop = true;

      const pushBlock = thisBlock.inputs.BOOL?.block || thisBlock.inputs.VALUE?.block;
      if (pushBlock) util.thread.pushStack(pushBlock);
      util.yield();
    }

    filterHandler(args, util, finishFunc, yieldFunc, optInitYield) {
      const handleCon = (isArray, item) => {
        if (!item) return;
        const thing = isArray ? item[1] || "" : item || {};
        if (args.BOOL) util.stackFrame.newObj.unshift(thing);
        else if (args.TYPE === "order") util.stackFrame.newObj.push(thing);
      };
      if (util.stackFrame.execute === undefined) {
        const parse = this.tryParse(args.OBJ);
        const entry = Object.entries(parse);
        if (entry.length === 0) return parse;
        util.stackFrame.newObj = [];
        util.stackFrame.execute = true;
        util.stackFrame.entry = entry;
        util.stackFrame.index = entry.length;
        util.thread.stackFrames[0].isArray = Array.isArray(parse);
        // Initialize JSON in stackframes
        if (!optInitYield) yieldFunc(util);
        else {
          const status = optInitYield(util);
          if (status === true) return Array.isArray(parse) ? [] : {};
        }
      } else {
        const { index, entry } = util.stackFrame;
        if (index < 0) util.stackFrame.execute = "done";
        else {
          util.thread.stackFrames[0].SPjson = entry[index - 1];
          handleCon(util.thread.stackFrames[0].isArray, entry[index]);
        }
        util.stackFrame.index--;
      }
      if (util.stackFrame.execute === "done") return finishFunc(util);
      else yieldFunc(util);
    }

    // Buttons and Settings
    warn() {
      window.alert([
        "This extension is fast because it works with raw objects instead of repeatedly parsing them.",
        "However, this may lead to confusion or incorrect assumptions that certain behaviors are bugs.",
        "For example, it's intentional that text-based components may not properly display when handling raw objects.",
        "To resolve this, simply use the (({}) to (string v)) block to convert the object to a string."
      ].join("\n\n"));
    }

    optimizeWarn() {
      window.alert("Disabling these Settings can improve performance, but may lead to unexpected bugs or issues");
    }

    toggleSetting(args) {
      const opt = this.settings.find(item => item.value === args.THING)?.value;
      if (opt) this[opt] = args.TYPE === "enabled";
    }

    isSettingOn(args) {
      const opt = this.settings.find(item => item.value === args.THING)?.value;
      return opt ? this[opt] : false;
    }

    // JSON Funcs
    objValid(args) {
      const obj = this.tryParse(args.OBJ);
      return typeof obj === "object" && obj.constructor?.name === "Object";
    }

    jsonBuilder(args) { return { [args.KEY] : this.toSafe(args.VAL) } }

    getKey(args) {
      const obj = this.tryParse(args.OBJ, 0);
      const key = Scratch.Cast.toString(args.KEY);
      if (hasOwn(obj, key)) return obj[key] ?? "";
      return "";
    }

    getPath(args) {
      const path = this.tryParse(args.PATH, 1);
      let val = this.tryParse(args.OBJ, 0);
      for (var i = 0; i < path.length; i++) {
        const key = Scratch.Cast.toString(path[i]);
        if (hasOwn(val, key)) val = val[key];
        else val = undefined;
        if (val === undefined) {
          val = "";
          break;
        }
      }
      return val ?? "";
    }

    setKey(args) {
      const obj = this.tryParse(args.OBJ, 0);
      obj[Scratch.Cast.toString(args.KEY)] = this.toSafe(args.VAL);
      return obj;
    }

    setPath(args) {
      const path = this.tryParse(args.PATH, 1);
      let obj = this.tryParse(args.OBJ, 0);
      path.reduce((acc, part, i) => {
        if (i === path.length - 1) acc[part] = this.toSafe(args.VAL);
        else acc[part] = acc[part] || {};
        return acc[part];
      }, obj);
      return obj;
    }

    deleteKey(args) {
      const obj = this.tryParse(args.OBJ, 0);
      delete obj[Scratch.Cast.toString(args.KEY)];
      return obj;
    }

    jsonSize(args) { return Object.keys(this.tryParse(args.OBJ, 0)).length }

    keyIndex(args) {
      return Object.keys(this.tryParse(args.OBJ, 0))
        .indexOf(Scratch.Cast.toString(args.KEY)) + 1;
    }

    getEntry(args) {
      const obj = this.tryParse(args.OBJ, 0);
      const key = Scratch.Cast.toString(args.KEY);
      if (hasOwn(obj, key)) return { [key] : obj[key] } || {};
      return {};
    }

    extractJson(args) {
      return Object[args.TYPE === "keys" ? "keys" : "values"](this.tryParse(args.OBJ, 0));
    }

    mergeJson(args) {
      return {
        ...this.tryParse(args.OBJ1, 0), ...this.tryParse(args.OBJ2, 0)
      }
    }

    jsonMap(args, util) {
      if (util.stackFrame.execute === undefined) {
        const entries = Object.entries(this.tryParse(args.OBJ, 0));
        if (entries.length === 0) return [];
        util.stackFrame.execute = true;
        util.stackFrame.entries = entries;
        util.stackFrame.index = entries.length - 1;
        if (util.thread.stackFrames[0].SPwasCompiled === undefined) {
          util.thread.stackFrames[0].SPwasCompiled = util.thread.isCompiled;
          util.thread.isCompiled = false;
        }
        const yieldFail = this.reporterYield(util, util.thread.stackFrames[0].SPwasCompiled); // Initialize JSON in stackframes
        if (yieldFail === true) return {};
      } else {
        const { index, entries } = util.stackFrame;
        if (index < 0) util.stackFrame.execute = "done";
        else if (entries[index] !== undefined) {
          const fixedindex = index - 1 < 0 ? entries.length - 1 : index - 1;
          util.thread.stackFrames[0].SPjson = entries[index];
          util.stackFrame.entries[fixedindex][1] = args.VALUE;
        }
        util.stackFrame.index--;
      }
      if (util.stackFrame.execute === "done") {
        util.thread.isCompiled = util.thread.stackFrames[0].SPwasCompiled;

        const fixedEntries = util.stackFrame.entries;
        fixedEntries.unshift(fixedEntries.pop());
        return Object.fromEntries(fixedEntries);
      } else this.reporterYield(util);
    }

    // Array Funcs
    arrValid(args) { return Array.isArray(this.tryParse(args.ARR)) }

    arrBuilder(args) { return [this.toSafe(args.VAL)] }

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
      if (arr.length > ind) arr[ind] = this.toSafe(args.ITEM);
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
        this.toArrInd(args.IND1), Scratch.Cast.toNumber(args.IND2)
      );
    }

    arrLength(args) { return this.tryParse(args.ARR, 1).length }

    itemExists(args) { return this.tryParse(args.ARR, 1).indexOf(this.toSafe(args.ITEM)) > -1 }

    arrMatches(args) {
      const arr = this.tryParse(args.ARR, 1);
      return arr.filter((item) => item == this.toSafe(args.ITEM)).length;
    }

    arrContainers(args) {
      const arr = this.tryParse(args.ARR, 1);
      return arr.filter((item) => Scratch.Cast.toString(item).includes(this.toSafe(args.TESTER))).length;
    }

    itemIndex(args) {
      const arr = this.tryParse(args.ARR, 1);
      const ind = Scratch.Cast.toNumber(args.IND);
      const safe = this.toSafe(args.ITEM)
      if (ind === 0) return arr.indexOf(safe) + 1; // Secret Behaviour
      else {
        let indexes = [];
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] == safe) indexes.push(i);
        }
        const val = indexes[ind - 1] + 1;
        return isNaN(val) ? 0 : val;
      }
    }

    mergeArray(args) {
      return this.tryParse(args.ARR1, 1).concat(this.tryParse(args.ARR2, 1));
    }

    repeatArray(args) {
      const times = Scratch.Cast.toNumber(args.NUM);
      return Array(times).fill(this.tryParse(args.ARR, 1)).flat();
    }

    fillArray(args) {
      const length = Scratch.Cast.toNumber(args.NUM);
      const arr = this.tryParse(args.ARR, 1);
      return arr.concat(Array(Math.max(0, length - arr.length)).fill(""));
    }

    arrOrder(args) {
      let arr = this.tryParse(args.ARR, 1);
      const sortFreq = (array, mostComm) => {
        const freqMap = {};
        array.forEach(i => { freqMap[i] = (freqMap[i] || 0) + 1 });
        return array.sort((a, b) => {
          if (mostComm) return freqMap[b] - freqMap[a] || array.indexOf(a) - array.indexOf(b);
          else return freqMap[a] - freqMap[b] || array.indexOf(a) - array.indexOf(b);
        });
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

    arrCheck(args, util) {
      if (util.stackFrame.execute === undefined) {
        const array = this.tryParse(args.ARR, 1);
        if (array.length === 0) return false;
        util.stackFrame.checks = [];
        util.stackFrame.execute = true;
        util.stackFrame.array = array;
        util.stackFrame.index = array.length - 1;
        if (util.thread.stackFrames[0].SPwasCompiled === undefined) {
          util.thread.stackFrames[0].SPwasCompiled = util.thread.isCompiled;
          util.thread.isCompiled = false;
        }
        const yieldFail = this.reporterYield(util, util.thread.stackFrames[0].SPwasCompiled); // Initialize JSON in stackframes
        if (yieldFail === true) return false;
      } else {
        const { index, array } = util.stackFrame;
        if (index < 0) util.stackFrame.execute = "done";
        else if (array[index] !== undefined) {
          util.thread.stackFrames[0].SPjson = [index + 1, array[index]];
          util.stackFrame.checks.push(Scratch.Cast.toBoolean(args.BOOL));
        }
        util.stackFrame.index--;
      }
      if (util.stackFrame.execute === "done") {
        util.thread.isCompiled = util.thread.stackFrames[0].SPwasCompiled;

        if (args.TYPE === "every") return util.stackFrame.checks.indexOf(false) < 0;
        else return util.stackFrame.checks.indexOf(true) > -1;
      } else this.reporterYield(util);
    }

    arrMap(args, util) {
      if (util.stackFrame.execute === undefined) {
        const array = this.tryParse(args.ARR, 1);
        if (array.length === 0) return [];
        util.stackFrame.execute = true;
        util.stackFrame.array = array;
        util.stackFrame.index = array.length - 1;
        if (util.thread.stackFrames[0].SPwasCompiled === undefined) {
          util.thread.stackFrames[0].SPwasCompiled = util.thread.isCompiled;
          util.thread.isCompiled = false;
        }
        const yieldFail = this.reporterYield(util, util.thread.stackFrames[0].SPwasCompiled); // Initialize JSON in stackframes
        if (yieldFail === true) return [];
      } else {
        const { index, array } = util.stackFrame;
        if (index < 0) util.stackFrame.execute = "done";
        else if (array[index] !== undefined) {
          util.thread.stackFrames[0].SPjson = [index + 1, array[index]];
          util.stackFrame.array[index] = args.VALUE;
        }
        util.stackFrame.index--;
      }
      if (util.stackFrame.execute === "done") {
        util.thread.isCompiled = util.thread.stackFrames[0].SPwasCompiled;

        const fixedArray = util.stackFrame.array;
        fixedArray.unshift(fixedArray.pop());
        return fixedArray;
      } else this.reporterYield(util);
    }

    arrSort(args, util) {
      if (util.stackFrame.execute === undefined) {
        const array = this.tryParse(args.ARR, 1);
        if (array.length === 0) return [];
        util.stackFrame.execute = true;
        util.stackFrame.array = array;
        util.stackFrame.sortedVals = {};
        util.stackFrame.i = 0;
        util.stackFrame.j = 0;
        if (util.thread.stackFrames[0].SPwasCompiled === undefined) {
          util.thread.stackFrames[0].SPwasCompiled = util.thread.isCompiled;
          util.thread.isCompiled = false;
        }
        const yieldFail = this.reporterYield(util, util.thread.stackFrames[0].SPwasCompiled); // Initialize JSON in stackframes
        if (yieldFail === true) return [];
      } else {
        const { i, j, array } = util.stackFrame;
        if (i > array.length - 1) util.stackFrame.execute = "done";
        else {
          util.thread.stackFrames[0].SPjson = [array[i], array[j]];
          const propName = j > array.length - 1 ? `0${array[i]}` : i < 1 ? `${array[j]}${array[array.length - 1]}` : `${array[j]}${array[i - 1]}`;
          util.stackFrame.sortedVals[propName] = Scratch.Cast.toNumber(args.VALUE);
          util.stackFrame.j++;
          if (j > array.length - 1) {
            util.stackFrame.i++;
            util.stackFrame.j = 0;
          }
        }
      }
      if (util.stackFrame.execute === "done") {
        util.thread.isCompiled = util.thread.stackFrames[0].SPwasCompiled;

        const sorted = util.stackFrame.sortedVals;
        return util.stackFrame.array.sort((a, b) => sorted[`${a}${b}`]);
      } else this.reporterYield(util);
    }

    // Util Funcs
    jsonValid(args) {
      const obj = args.OBJ;
      const type = typeof obj;
      if (type === "object") return true;
      if (this.alwaysParse) {
        if (type != "string") return false;
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
      if (typeof obj === "object") return structuredClone(obj);
      try {
        return JSON.parse(obj);
      } catch {
        return "";
      }
    }

    convert(args) {
      switch (args.TYPE) {
        case "array": return Object.entries(this.tryParse(args.OBJ));
        case "JSON": return Object.assign({}, this.tryParse(args.OBJ));
        default: return JSON.stringify(this.tryParse(args.OBJ));
      }
    }

    jsonMake(args) {
      const arr = Scratch.Cast.toString(args.TXT).split(args.SPLIT);
      const obj = {};
      arr.forEach((item) => {
        const value = item.split(args.DELIM);
        obj[value[0]] = value[1] ?? "";
      });
      return obj;
    }

    arrMake(args) {
      if (args.TYPE === "array") return Scratch.Cast.toString(args.TXT).split(args.SPLIT);
      else return this.tryParse(args.TXT, 1).join(args.SPLIT);
    }

    objKey(args, util) {
      const arr = util.thread.stackFrames[0].SPjson;
      if (arr) {
        if (util.thread.stackFrames[0].isArray) return Scratch.Cast.toNumber(arr[0]) + 1 ?? "";
        else return arr[0] ?? "";
      }
      return "";
    }
    objValue(args, util) {
      const arr = util.thread.stackFrames[0].SPjson;
      return arr ? arr[1] ?? "" : "";
    }

    arrValueA(args, util) {
      const arr = util.thread.stackFrames[0].SPjson;
      return arr ? arr[0] ?? "" : "";
    }
    arrValueB(args, util) {
      const arr = util.thread.stackFrames[0].SPjson;
      return arr ? arr[1] ?? "" : "";
    }

    // deprecated stack filter block
    filterResult(_, util) { return util.thread.SPjsonFilterRes ?? "" }
    filter(args, util) {
      this.filterHandler(
        args, util,
        (util) => {
          if (util.thread.stackFrames[0].isArray) util.thread.SPjsonFilterRes = util.stackFrame.newObj;
          else {
            const newObj = {};
            const stored = util.stackFrame.newObj;
            for (let i = 0; i < stored.length; i++) {
              const item = stored[i];
              newObj[item[0]] = item[1];
            }
            util.thread.SPjsonFilterRes = newObj;
          }
        },
        (util) => util.startBranch(1, true)
      );
    }

    filterNew(args, util) {
      return this.filterHandler(
        args, util,
        (util) => {
          util.thread.isCompiled = util.thread.stackFrames[0].SPwasCompiled;
          if (util.thread.stackFrames[0].isArray) return util.stackFrame.newObj;
          else {
            const newObj = {};
            const stored = util.stackFrame.newObj;
            for (let i = 0; i < stored.length; i++) {
              const item = stored[i];
              newObj[item[0]] = item[1];
            }
            return newObj;
          }
        },
        (util) => this.reporterYield(util),
        (util) => {
          if (util.thread.stackFrames[0].SPwasCompiled === undefined) {
            util.thread.stackFrames[0].SPwasCompiled = util.thread.isCompiled;
            util.thread.isCompiled = false;
          }
          const yieldFail = this.reporterYield(util, util.stackFrame.wasCompiled);
          if (yieldFail === true) return true; // initiate a override
        }
      );
    }

    forEach(args, util) {
      if (util.stackFrame.execute) {
        util.stackFrame.index++;
        const { index, entry } = util.stackFrame;
        if (index > entry.length - 1) return;
        util.thread.stackFrames[0].SPjson = entry[index];
      } else {
        const parse = this.tryParse(args.OBJ);
        const entry = Object.entries(parse);
        if (entry.length === 0) return;
        util.stackFrame.entry = entry;
        util.stackFrame.execute = true;
        util.stackFrame.index = 0;
        util.thread.stackFrames[0].isArray = Array.isArray(parse);
        util.thread.stackFrames[0].SPjson = entry[0];
      }
      util.startBranch(1, true);
    }
  }

  extClass = new SPjson();
  Scratch.extensions.register(extClass);
})(Scratch);
