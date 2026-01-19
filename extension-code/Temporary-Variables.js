// Name: Temporary Variables
// ID: SPtempVars
// Description: Create temporary variables for sprites, threads, and the project.
// By: SharkPool
// Licence: MIT

// Version V.1.0.04

/* 
  - tried my best to make changes clear and not as cluttered
  - changes are highlighted with "MT - " something
  - weakmaps are referenced in "spriteVarMap" and "threadVarMap" constants
  - added weakmaps and also minor adjustments to some functions (forVar, scopeVar, setVar)
  - take the other function changes with a grain of salt, i did not code the extension so idk if my changes are wrong or not what you want
  - if anything is off or weird contact me
  -MTUnixic
*/
(function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) throw new Error("Temporary Variables must run unsandboxed!");

  const menuIconURI =
"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwLDAsMTI4LDEyOCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE3NiwtMTE2KSI+PGcgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIj48cGF0aCBkPSJNMTc2LDE4MGMwLC0zNS4zNDYyMiAyOC42NTM3OCwtNjQgNjQsLTY0YzM1LjM0NjIyLDAgNjQsMjguNjUzNzggNjQsNjRjMCwzNS4zNDYyMiAtMjguNjUzNzgsNjQgLTY0LDY0Yy0zNS4zNDYyMiwwIC02NCwtMjguNjUzNzggLTY0LC02NHoiIGZpbGw9IiNkYjZlMDAiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSJOYU4iIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIi8+PHBhdGggZD0iTTE4NC4yMzgxLDE4MGMwLC0zMC43OTY0NSAyNC45NjU0NiwtNTUuNzYxOSA1NS43NjE5LC01NS43NjE5YzMwLjc5NjQ1LDAgNTUuNzYxOSwyNC45NjU0NiA1NS43NjE5LDU1Ljc2MTljMCwzMC43OTY0NSAtMjQuOTY1NDYsNTUuNzYxOSAtNTUuNzYxOSw1NS43NjE5Yy0zMC43OTY0NSwwIC01NS43NjE5LC0yNC45NjU0NiAtNTUuNzYxOSwtNTUuNzYxOXoiIGZpbGw9IiNmZjhjMWEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIvPjxwYXRoIGQ9Ik0yMDEuNjQ3NzEsMTgzLjYxMjcyYy0wLjA2NzM3LC0xMi40MzA3NSA2LjMwNDMxLC0yNC4wMTA2OCAxNi44NDA5LC0zMC42MDY3NWwtMC4wMTg1NywtMy40NDExMmMtMC4wMTE0NSwtMi4zMzE2OSAwLjkwNDExLC00LjU3MjQgMi41NDUxMywtNi4yMjg5MmMxLjY0MTAyLC0xLjY1NjUxIDMuODczLC0yLjU5MzA2IDYuMjA0NzEsLTIuNjAzNTJsMjAuMjk2MjIsLTAuMDkyNWMyLjMzMTY5LC0wLjAxMTQ1IDQuNTcyNCwwLjkwNDA5IDYuMjI4OTIsMi41NDUxYzEuNjU2NTEsMS42NDEwMiAyLjU5MzA2LDMuODczMDIgMi42MDM1Miw2LjIwNDczbDAuMDE1MTMsMy40NDEzN2MyLjgzNTY2LDEuNzQxMjcgNS4zNTUxMywzLjgyMzgyIDcuNTMwOTksNi4xNjY5bDIuNjE1NzUsLTEuNjc5MTJjMi4zNDE0OCwtMS41MDMwNiA1LjQ1ODExLC0wLjgyMzM5IDYuOTYxMTcsMS41MTgxbDQuMDgyMyw2LjM1OTQ1YzEuNTAzMDYsMi4zNDE0OCAwLjgyMzM5LDUuNDU4MTEgLTEuNTE4MSw2Ljk2MTE3bC0zLjY3NDc3LDIuMzU4OTNjMS43OTk1MSw3LjAwOTIxIDEuNDk1ODQsMTQuNTkzIC0xLjI0NzM0LDIxLjc2MDY1Yy02LjE3ODgxLDE2LjE0NDU4IC0yMi45ODEzOSwyNS41OTc3MSAtMzkuOTg3NTcsMjIuNDk3MDdjLTE3LjAwNjE4LC0zLjEwMDY0IC0yOS4zOTE0MiwtMTcuODc1NDUgLTI5LjQ3NDk0LC0zNS4xNjE4MXoiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIvPjxwYXRoIGQ9Ik0yMjMuMjQ5MzYsMTk3LjM2Nzk1aDAuMzA2YzIuMjI5ODYsMCA0LjM0ODMxLC0wLjk3OTQzIDUuNzk5NDgsLTIuNjgxM2wxOC4zNDI1NiwtMjEuNTExODZjMS40NTEwNSwtMS43MDE4NyAzLjU2OTYyLC0yLjY4MTM5IDUuNzk5NDQsLTIuNjgxMzloMC4zMDU3OE0yNDkuOTgzODgsMTk3LjM2Nzk1aC00Ljc1NzU1Yy0xLjcwNTI5LDAgLTMuMjAzNzksLTEuMTM2NDEgLTMuNjcyMzUsLTIuNzg0MzZsLTYuMDU1MzgsLTIxLjMwNTY2Yy0wLjQ2ODU2LC0xLjY0ODIgLTEuOTY3MDQsLTIuNzg0NTEgLTMuNjcyMzUsLTIuNzg0NTFoLTQuNzU3NDYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmOGMxYSIgc3Ryb2tlLXdpZHRoPSI4LjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvZz48L2c+PC9zdmc+";

  const Cast = Scratch.Cast;
  const vm = Scratch.vm;
  const runtime = vm.runtime;

  let projectVars;

  // MT - initialize lazyloading for per-sprite and per-thread variables with weakmaps
  // (allows garbage collection when destroyed, better impact on memory and prevents leaking)
  const spriteVarMap = new WeakMap();
  const threadVarMap = new WeakMap();

  function initTempVariables() {
    projectVars = Object.create(null);
    // MT - the rest is no longer needed since weakmaps handle that now
  }

  // MT - a bit long, but prevents duplicates on reloads
  // (optional)
  if (!runtime._SPtempVarsListenersAdded) {
      runtime._SPtempVarsListenersAdded = true;
      runtime._SPtempVars_onStart = initTempVariables;
      runtime._SPtempVars_onStop = initTempVariables;
      runtime.on("PROJECT_START", runtime._SPtempVars_onStart);
      runtime.on("PROJECT_STOP_ALL", runtime._SPtempVars_onStop);
  }
  initTempVariables();

  class SPtempVars {
    getInfo() {
      return {
        id: "SPtempVars",
        name: "Temporary Variables",
        color1: "#FF8C1A",
        color2: "#f07800",
        color3: "#DB6E00",
        menuIconURI,
        // MT - these are optional, they just look nicer to use imo
        blocks: [
          {
            opcode: "setVar",
            blockType: Scratch.BlockType.COMMAND,
            text: "set [TYPE] [NAME] to [VALUE]",
            arguments: {
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "VAR_TYPES" },
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "my variable" },
              VALUE: { type: Scratch.ArgumentType.STRING, defaultValue: "0", exemptFromNormalization: true },
            },
          },
          {
            opcode: "changeVar",
            blockType: Scratch.BlockType.COMMAND,
            text: "change [TYPE] [NAME] by [VALUE]",
            arguments: {
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "VAR_TYPES" },
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "my variable" },
              VALUE: { type: Scratch.ArgumentType.STRING, defaultValue: "1", exemptFromNormalization: true },
            },
          },
          {
            opcode: "swapVar",
            blockType: Scratch.BlockType.COMMAND,
            text: "swap [TYPE1] [NAME1] with [TYPE2] [NAME2]",
            arguments: {
              TYPE1: { type: Scratch.ArgumentType.STRING, menu: "VAR_TYPES" },
              NAME1: { type: Scratch.ArgumentType.STRING, defaultValue: "my variable" },
              TYPE2: { type: Scratch.ArgumentType.STRING, menu: "VAR_TYPES" },
              NAME2: { type: Scratch.ArgumentType.STRING, defaultValue: "new variable" }
            },
          },
          "---",
          {
            opcode: "forVar",
            blockType: Scratch.BlockType.LOOP,
            text: ["for [TYPE] [NAME] : [START] to [END] step [INC_VALUE]"],
            arguments: {
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "VAR_TYPES" },
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "my variable" },
              START: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 },
              END: { type: Scratch.ArgumentType.NUMBER, defaultValue: 10 },
              INC_VALUE: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 }
            },
          },
          {
            opcode: "scopeVar",
            blockType: Scratch.BlockType.CONDITIONAL,
            text: "run thread vars in scope"
          },
          "---",
          {
            opcode: "varExists",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "[TYPE] [NAME] exists?",
            arguments: {
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "VAR_TYPES" },
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "my variable" },
            },
          },
          {
            opcode: "getVar",
            blockType: Scratch.BlockType.REPORTER,
            allowDropAnywhere: true,
            text: "[TYPE] ‎ [NAME]", // added "‎" so u can grab it easily
            arguments: {
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "VAR_TYPES" },
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "my variable" },
            },
          },
          "---",
          {
            opcode: "allVars",
            blockType: Scratch.BlockType.REPORTER,
            text: "all [TYPE] variables",
            disableMonitor: true,
            arguments: {
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "VAR_TYPES" }
            },
          },
          {
            opcode: "deleteAllVar",
            blockType: Scratch.BlockType.COMMAND,
            text: "delete all [TYPE] variables",
            arguments: {
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "VAR_TYPES" }
            },
          },
          {
            opcode: "deleteVar",
            blockType: Scratch.BlockType.COMMAND,
            text: "delete [TYPE] [NAME]",
            arguments: {
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "VAR_TYPES" },
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "my variable" }
            },
          }
        ],
        // MT - re-ordered since threads are more commonly used
        menus: {
          VAR_TYPES: ["thread", "sprite", "global"]
        },
      };
    }

    // Helper Funcs
    initSprite(target) {
      // MT - changed to use weakmaps instead
      if (!spriteVarMap.has(target)) spriteVarMap.set(target, Object.create(null));
      return spriteVarMap.get(target);
    }

    initThread(thread) {
      // MT - this too
      if (!threadVarMap.has(thread)) threadVarMap.set(thread, Object.create(null));
      return threadVarMap.get(thread);
    }

    castType(value) {
      if (value === "") return "";
      if (typeof value === "object") return value;
      if (isNaN(Number(value))) return value;
      return Cast.toNumber(value);
    }

    // Block Funcs
    setVar(args, util) {
      // MT - (minor) args.value uses castType() to store numbers instead of always strings
      // because this doesn't do that while changeVar() does, thought it'll make sense to add it in
      const name = Cast.toString(args.NAME);
      const value = this.castType(args.VALUE);
      if (args.TYPE === "global") projectVars[name] = value;
      else if (args.TYPE === "sprite") this.initSprite(util.target)[name] = value;
      else this.initThread(util.thread)[name] = value;
    }

    changeVar(args, util) {
      const name = Cast.toString(args.NAME);
      const value = this.castType(args.VALUE);
      const defaultValue = value?.constructor?.name === "String" ? "" : 0;
      if (args.TYPE === "global") {
        projectVars[name] = this.castType(projectVars[name] ?? defaultValue) + value;
      } else if (args.TYPE === "sprite") {
        const obj = this.initSprite(util.target);
        obj[name] = this.castType(obj[name] ?? defaultValue) + value;
      } else {
        const obj = this.initThread(util.thread);
        obj[name] = this.castType(obj[name] ?? defaultValue) + value;
      }
    }

    swapVar(args, util) {
      const name1 = Cast.toString(args.NAME1);
      const name2 = Cast.toString(args.NAME2);

      const obj1 = args.TYPE1 === "global" ? projectVars :
        args.TYPE1 === "sprite" ? this.initSprite(util.target) : this.initThread(util.thread);
      const obj2 = args.TYPE2 === "global" ? projectVars :
        args.TYPE2 === "sprite" ? this.initSprite(util.target) : this.initThread(util.thread);

      const tempVal = obj1[name1];
      obj1[name1] = obj2[name2];
      obj2[name2] = tempVal;
    }

    // MT - fixed edge cases (zero step, modified loop variable)
    forVar(args, util) {
      const inc = util.stackFrame.incrementVal;
      const end = util.stackFrame.endIndex;

      if (util.stackFrame.index === undefined) {
        // MT - normalize step/start/end to integers, falls back to 1 if falsy
        util.stackFrame.incrementVal = Math.round(Scratch.Cast.toNumber(args.INC_VALUE)) || 1;
        util.stackFrame.index = Math.round(Scratch.Cast.toNumber(args.START));
        util.stackFrame.endIndex = Math.round(Scratch.Cast.toNumber(args.END));
      }

      // keepGoing handles both pre-decrement hacks and separate branch logic for negative/positive increments
      const keepGoing = inc > 0 ? util.stackFrame.index <= end : util.stackFrame.index >= end;
      if (!keepGoing) {
        // MT - clear state so future runs can reinitialize (just in case)
        delete util.stackFrame.index;
        delete util.stackFrame.endIndex;
        delete util.stackFrame.incrementVal;
        return;
      }

      // setup the main loop for the iteration, run body
      this.setVar({ ...args, VALUE: util.stackFrame.index }, util);
      util.startBranch(1, true);
      // after body, re-read value (could be changed), then cast to number and continue
      util.stackFrame.index = Math.round(Scratch.Cast.toNumber(this.getVar(args, util)));
      util.stackFrame.index += inc;
    }

    // MT - tightened up support for nested scopes because it could clone entire variable objects uncontrollably
    scopeVar(_, util) {
      if (util.stackFrame.scopeStack === undefined) {
        // MT - each stackFrame keeps its own stack for nested scopes first before entering
        util.stackFrame.scopeStack = [];
      }
      const threadVars = this.initThread(util.thread);
      // entering scope 
      if (util.stackFrame.initialized === undefined) {
        util.stackFrame.initialized = true;
        util.stackFrame.scopeStack.push(new Set(Object.keys(threadVars)));
        util.startBranch(1, true);
        return;
      }
      // MT - exiting scope (remove variables inside scope)
      // (curVars replaced with threadVars)
      const oldKeys = util.stackFrame.scopeStack.pop();
      if (oldKeys) {
        Object.keys(threadVars).forEach((k) => { if (!oldKeys.has(k)) delete threadVars[k]; });
      }
      // MT - cleanup after just in case
      if (util.stackFrame.scopeStack.length === 0) {
        delete util.stackFrame.scopeStack;
        delete util.stackFrame.initialized;
      } else {
        // MT - keep the stackFrame for nested scopes
        util.stackFrame.initialized = true;
      }
    }

    varExists(args, util) {
      const name = Cast.toString(args.NAME);
      if (args.TYPE === "global") return projectVars[name] !== undefined;
      else if (args.TYPE === "sprite") return this.initSprite(util.target)[name] !== undefined;
      else return this.initThread(util.thread)[name] !== undefined;
    }

    getVar(args, util) {
      const name = Cast.toString(args.NAME);
      if (args.TYPE === "global") return projectVars[name] ?? "";
      else if (args.TYPE === "sprite") return this.initSprite(util.target)[name] ?? "";
      else return this.initThread(util.thread)[name] ?? "";
    }

    allVars(args, util) {
      return JSON.stringify(Object.keys(
        args.TYPE === "global" ? projectVars :
        args.TYPE === "sprite" ? this.initSprite(util.target) :
        this.initThread(util.thread)
      ));
    }

    deleteAllVar(args, util) {
      if (args.TYPE === "global") {
        projectVars = Object.create(null);
        return;
      }

      let obj = args.TYPE === "sprite" ? this.initSprite(util.target) : this.initThread(util.thread);
      Object.keys(obj).forEach(key => delete obj[key]);
    }

    deleteVar(args, util) {
      const name = Cast.toString(args.NAME);
      if (args.TYPE === "global") delete projectVars[name];
      else if (args.TYPE === "sprite") delete this.initSprite(util.target)[name];
      else delete this.initThread(util.thread)[name];
    }
  }

  Scratch.extensions.register(new SPtempVars());
})(Scratch);
