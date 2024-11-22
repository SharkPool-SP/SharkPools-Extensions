// Name: JSON and Array
// ID: SPjson
// Description: Super Fast JSON and Array Extension
// By: SharkPool
// Licence: MIT

// Version V.1.0.4

(function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) throw new Error("JSON and Array must run unsandboxed!");

  const menuIconURI =
"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4My4yMjciIGhlaWdodD0iODMuMjI3IiB2aWV3Qm94PSIwIDAgODMuMjI3IDgzLjIyNyI+PHBhdGggZD0iTTAgNDEuNjE0QzAgMTguNjMxIDE4LjYzMSAwIDQxLjYxNCAwczQxLjYxNCAxOC42MzEgNDEuNjE0IDQxLjYxNC0xOC42MzEgNDEuNjE0LTQxLjYxNCA0MS42MTRTMCA2NC41OTcgMCA0MS42MTQiIGZpbGw9IiM1MTYxYTYiLz48cGF0aCBkPSJNNC4zNDQgNDEuNjE0YzAtMjAuNTcgMTYuNjg3LTM3LjI3IDM3LjI3LTM3LjI3czM3LjI3IDE2LjY4NyAzNy4yNyAzNy4yNy0xNS43ODMgMzcuMjctMzcuMjcgMzcuMjctMzcuMjctMTYuNy0zNy4yNy0zNy4yNyIgZmlsbD0iIzc0OGJlZSIvPjxwYXRoIGQ9Ik0zNi43OTggNjQuMjk0YTIuMTk1IDIuMTk1IDAgMCAxLTIuMTk1IDIuMTk0SDI4Ljc1YTUuMTI3IDUuMTI3IDAgMCAxLTUuMTItNS4xMlY1MC4xNjNsLTYuNDk3LTYuOTk3YTIuMTk1IDIuMTk1IDAgMCAxIDAtMy4xMDRsNi40OTYtNi45OTdWMjEuODYxYTUuMTI3IDUuMTI3IDAgMCAxIDUuMTIxLTUuMTIxaDUuODUzYTIuMTk1IDIuMTk1IDAgMSAxIDAgNC4zOUgyOC43NWEuNzMuNzMgMCAwIDAtLjczMS43M3YxMi4xMTRjMCAuNTgzLS4yMzEgMS4xNC0uNjQzIDEuNTUybC01LjU4OCA2LjA4OCA1LjU4OCA2LjA4OGMuNDEyLjQxMS42NDMuOTcuNjQzIDEuNTUydjEyLjExM2MwIC40MDMuMzI4LjczMi43MzEuNzMyaDUuODUzYzEuMjEyIDAgMi4xOTUuOTgyIDIuMTk1IDIuMTk0eiIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjZmZmIi8+PHBhdGggZD0iTTM3LjAxOCA2NC4yOTRhMi4xOTUgMi4xOTUgMCAwIDEtMi4xOTUgMi4xOTRoLTUuODUyYTUuMTI3IDUuMTI3IDAgMCAxLTUuMTIyLTUuMTJWNTAuMTYzbC02LjQ5Ni02Ljk5N2EyLjE5NSAyLjE5NSAwIDAgMSAwLTMuMTA0bDYuNDk2LTYuOTk3VjIxLjg2MWE1LjEyNyA1LjEyNyAwIDAgMSA1LjEyMS01LjEyMWg1Ljg1M2EyLjE5NSAyLjE5NSAwIDEgMSAwIDQuMzloLTUuODUyYS43My43MyAwIDAgMC0uNzMyLjczdjEyLjExNGMwIC41ODMtLjIzMSAxLjE0LS42NDMgMS41NTJsLTUuNTg4IDYuMDg4IDUuNTg4IDYuMDg4Yy40MTIuNDExLjY0My45Ny42NDMgMS41NTJ2MTIuMTEzYzAgLjQwMy4zMjguNzMyLjczMS43MzJoNS44NTNjMS4yMTIgMCAyLjE5NS45ODIgMi4xOTUgMi4xOTR6bTExLjM4Ni0yLjE5NWg1Ljg1M2EuNzMuNzMgMCAwIDAgLjczMi0uNzMyVjQ5LjI1NGMwLS41ODMuMjMxLTEuMTQuNjQzLTEuNTUybDUuNTg4LTYuMDg4LTUuNTg4LTYuMDg4YTIuMiAyLjIgMCAwIDEtLjY0My0xLjU1MlYyMS44NjFhLjczLjczIDAgMCAwLS43MzItLjczMmgtNS44NTJhMi4xOTUgMi4xOTUgMCAwIDEgMC00LjM5aDUuODUyYTUuMTI3IDUuMTI3IDAgMCAxIDUuMTIyIDUuMTIydjExLjIwNGw2LjQ5NiA2Ljk5N2EyLjE5NSAyLjE5NSAwIDAgMSAwIDMuMTA0bC02LjQ5NiA2Ljk5N3YxMS4yMDRhNS4xMjcgNS4xMjcgMCAwIDEtNS4xMjIgNS4xMjFoLTUuODUyYTIuMTk1IDIuMTk1IDAgMCAxIDAtNC4zOXoiIGZpbGw9IiNmZmYiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyLjUiLz48L3N2Zz4=";

  const arrowURI =
"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNS44OTMiIGhlaWdodD0iMTUuODkzIiB2aWV3Qm94PSIwIDAgMTUuODkzIDE1Ljg5MyI+PHBhdGggZD0iTTkuMDIxIDEyLjI5NHYtMi4xMDdsLTYuODM5LS45MDVDMS4zOTggOS4xODQuODQ2IDguNDg2Ljk2MiA3LjcyN2MuMDktLjYxMi42MDMtMS4wOSAxLjIyLTEuMTY0bDYuODM5LS45MDVWMy42YzAtLjU4Ni43MzItLjg2OSAxLjE1Ni0uNDY0bDQuNTc2IDQuMzQ1YS42NDMuNjQzIDAgMCAxIDAgLjkxOGwtNC41NzYgNC4zNmMtLjQyNC40MDQtMS4xNTYuMTEtMS4xNTYtLjQ2NSIgZmlsbD0ibm9uZSIgc3Ryb2tlLW9wYWNpdHk9Ii4xNSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjEuNzUiLz48cGF0aCBkPSJNOS4wMjEgMTIuMjk0di0yLjEwN2wtNi44MzktLjkwNUMxLjM5OCA5LjE4NC44NDYgOC40ODYuOTYyIDcuNzI3Yy4wOS0uNjEyLjYwMy0xLjA5IDEuMjItMS4xNjRsNi44MzktLjkwNVYzLjZjMC0uNTg2LjczMi0uODY5IDEuMTU2LS40NjRsNC41NzYgNC4zNDVhLjY0My42NDMgMCAwIDEgMCAuOTE4bC00LjU3NiA0LjM2Yy0uNDI0LjQwNC0xLjE1Ni4xMS0xLjE1Ni0uNDY1IiBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48cGF0aCBkPSJNMCAxNS44OTJWMGgxNS44OTJ2MTUuODkyeiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==";

  const vm = Scratch.vm;
  const runtime = vm.runtime;

  const regenReporters = ["SPjson_objKey", "SPjson_objValue"];
  if (Scratch.gui) Scratch.gui.getBlockly().then(SB => {
    const ogCheck = SB.scratchBlocksUtils.isShadowArgumentReporter;
    SB.scratchBlocksUtils.isShadowArgumentReporter = function (block) {
      const result = ogCheck(block);
      if (result) return true;
      return block.isShadow() && regenReporters.includes(block.type);
    };
  });

  // Modify Visual Report to stringify JSON
  const ogVisReport = runtime.visualReport;
  runtime.visualReport = function (blockId, value) {
    if (typeof value === "object") value = JSON.stringify(value);
    return ogVisReport.call(this, blockId, value);
  };

  // Allow Square Blocks (TW)
  const ogConverter = runtime._convertBlockForScratchBlocks.bind(runtime);
  runtime._convertBlockForScratchBlocks = function (blockInfo, categoryInfo) {
    const res = ogConverter(blockInfo, categoryInfo);
    if (blockInfo.outputShape) res.json.outputShape = blockInfo.outputShape;
    return res;
  }

  const hasOwn = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);

  // See Line -- 72
  // TODO: Find a way to use this on monitor displays if possible?
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

  // Patch Saving Pure Objects to Variables
  // We must stringify them for it to work
  const beforeSave = () =>
    new Promise((resolve) => {
      stringifyVariables();
      resolve();
    });
  const ogSaveProjectSb3 = vm.saveProjectSb3;
  vm.saveProjectSb3 = async function (...args) {
    await beforeSave();
    return await ogSaveProjectSb3.apply(this, args);
  };
  const ogSaveProjSb3Stream = vm.saveProjectSb3Stream;
  vm.saveProjectSb3Stream = function (...args) {
    let realStream = null;
    const queuedCalls = [];
    const whenStreamReady = (methodName, args) => {
      if (realStream) return realStream[methodName].apply(realStream, args);
      else return new Promise((resolve) => { queuedCalls.push({ resolve, methodName, args }) });
    };
    const streamWrapper = {
      on: (...args) => void whenStreamReady("on", args), pause: (...args) => void whenStreamReady("pause", args),
      resume: (...args) => void whenStreamReady("resume", args), accumulate: (...args) => whenStreamReady("accumulate", args)
    };
    beforeSave().then(() => {
      realStream = ogSaveProjSb3Stream.apply(this, args);
      for (const queued of queuedCalls) queued.resolve(realStream[queued.methodName].apply(realStream, queued.args));
      queuedCalls.length = 0;
    });
    return streamWrapper;
  };

  // Also do this for Restore Points
  const ogSaveProjectNonZIP = vm.saveProjectSb3DontZip;
  vm.saveProjectSb3DontZip = function (...args) {
    stringifyVariables();
    return ogSaveProjectNonZIP.apply(this, args);
  };

  class SPjson {
    constructor() {
      this.settings = [
        { text: "always cast values", value: "alwaysCast" },
        { text: "always parse text objects", value: "alwaysParse" },
        { text: "dont edit source objects", value: "useNewObj" }
      ];
      this.alwaysCast = true; this.alwaysParse = true; this.useNewObj = true;
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
            opcode: "jsonValid",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "is JSON [OBJ] valid?",
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
            opcode: "arrOrder",
            blockType: Scratch.BlockType.REPORTER,
            text: "order [ARR] by [ORDERER]",
            outputShape: 3,
            arguments: {
              ARR: { type: Scratch.ArgumentType.STRING, defaultValue: `["2", "item1", "1", "item12", "1"]`, exemptFromNormalization: true },
              ORDERER: { type: Scratch.ArgumentType.STRING, menu: "ORDERING" }
            }
          },
          { blockType: Scratch.BlockType.LABEL, text: "Utilities" },
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
            hideFromPalette: true, text: "key", allowDropAnywhere: true
          },
          {
            opcode: "objValue", blockType: Scratch.BlockType.REPORTER,
            hideFromPalette: true, text: "value", allowDropAnywhere: true
          },
          {
            opcode: "filter", blockType: Scratch.BlockType.CONDITIONAL, branchCount: -1,
            text: "in thread [TYPE] [OBJ] by [IND] [VAL] [IMG] [BOOL]", hideFromPalette: true,
            arguments: {
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "CUST_ORDER" },
              OBJ: { type: Scratch.ArgumentType.STRING, exemptFromNormalization: true },
              IND: {}, VAL: {}, BOOL: { type: Scratch.ArgumentType.BOOLEAN },
              IMG: { type: Scratch.ArgumentType.IMAGE, dataURI: arrowURI }
            },
          },
          {
            opcode: "filterResult", blockType: Scratch.BlockType.REPORTER,
            disableMonitor: true, hideFromPalette: true, text: "thread filter result"
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
              <block type="SPjson_filter">
                <field name="TYPE">filter</field>
                <value name="OBJ"><shadow type="text"><field name="TEXT">{"JSON":"or array"}</field></shadow></value>
                <value name="IND"><shadow type="SPjson_objKey"></shadow></value>
                <value name="VAL"><shadow type="SPjson_objValue"></shadow></value>
              </block>
              <block type="SPjson_filterResult"></block>
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
          OBJ_EXTRACT: { acceptReporters: true, items: ["keys", "values"] },
          CONVERTS: { acceptReporters: true, items: ["string", "array", "JSON"] },
          CONVERTS2: { acceptReporters: true, items: ["array", "text"] },
          SETTINGS: { acceptReporters: true, items: this.settings },
          ORDERING: {
            acceptReporters: true,
            items: [
              "random", "ascending", "descending",
              "ascending by length", "descending by length",
              "A-z", "z-A", "most common", "least common"
            ]
          }
        },
      };
    }

    // Helper Funcs
    tryParse(obj, optType) {
      if ((optType === 1 && Array.isArray(obj)) || (optType === 0 && typeof obj === "object"))
        return this.useNewObj ? structuredClone(obj) : obj;
      const defaultV = optType === undefined ? obj : optType === 0 ? {} : [];
      try {
        if (this.alwaysParse) {
          const parsed = JSON.parse(obj);
          return typeof parsed === "object" ? parsed : defaultV;
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

    // Buttons and Settings
    warn() {
      window.alert([
        "This extension is fast because it works with raw objects instead of repeatedly parsing them.",
        "However, this may lead to confusion or incorrect assumptions that certain behaviors are bugs.",
        "For example, it's intentional that monitors and text-based components may not display or may crash when handling raw objects.",
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
      return [
        ...this.tryParse(args.ARR1, 1), ...this.tryParse(args.ARR2, 1)
      ];
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

    // Util Funcs
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
        case "array": return Object.entries(this.tryParse(args.OBJ, 0));
        case "JSON": return Object.assign({}, this.tryParse(args.OBJ, 0));
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

    filter(args, util) {
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
        util.startBranch(1, true); // Initialize JSON in stackframes
      } else {
        const { index, entry } = util.stackFrame;
        if (index < 0) util.stackFrame.execute = "done";
        else {
          util.thread.stackFrames[0].SPjson = entry[index - 1];
          handleCon(util.thread.stackFrames[0].isArray, entry[index]);
        }
        util.stackFrame.index--;
      }
      if (util.stackFrame.execute === "done") {
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
      } else util.startBranch(1, true);
    }

    filterResult(_, util) { return util.thread.SPjsonFilterRes ?? "" }

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

  Scratch.extensions.register(new SPjson());
})(Scratch);
