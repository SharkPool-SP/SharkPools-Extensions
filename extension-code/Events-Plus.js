// Name: Events+
// ID: SPeventsPlus
// Description: Expansion of the Events Category.
// By: SharkPool
// Licence: MIT

// Version V.1.0.0

(function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) throw new Error("Events+ must run unsandboxed!");

  const menuIconURI =
"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMzguMTU1IiBoZWlnaHQ9IjEzOC4xNTUiIHZpZXdCb3g9IjAgMCAxMzguMTU1IDEzOC4xNTUiPjxwYXRoIGQ9Ik0wIDY5LjA3OEMwIDMwLjkyOCAzMC45MjcgMCA2OS4wNzggMGMzOC4xNSAwIDY5LjA3OCAzMC45MjcgNjkuMDc4IDY5LjA3OCAwIDM4LjE1LTMwLjkyNyA2OS4wNzgtNjkuMDc4IDY5LjA3OEMzMC45MjggMTM4LjE1NiAwIDEwNy4yMjkgMCA2OS4wNzgiIGZpbGw9IiNjOTAiLz48cGF0aCBkPSJNNi4xODggNjkuMDc4YzAtMzQuNzMzIDI4LjE1Ny02Mi44OSA2Mi44OS02Mi44OXM2Mi44OSAyOC4xNTcgNjIuODkgNjIuODktMjguMTU3IDYyLjg5LTYyLjg5IDYyLjg5LTYyLjg5LTI4LjE1Ny02Mi44OS02Mi44OSIgZmlsbD0iI2ZmYmYwMCIvPjxwYXRoIGQ9Im05OS4zMzMgMzEuMDk1IDguODgzIDM5LjIxYy4xNzYuNzc3LjA0MSAxLjYyNi0uNTEgMi4wNzgtMy45OTMgNS40ODUtOS43MjMgOS4wNzMtMTYuMTAyIDEwLjUxOC02LjM4IDEuNDQ1LTEzLjEzMi41MjEtMTkuMDYzLTIuNTUyLTQuODItMi41MDYtMTAuMjU4LTMuNDAxLTE1LjU0OC0yLjIwMy00LjgyMyAxLjA5My05LjEzOCAzLjcwNy0xMi4zMjMgNy43bDUuODg2IDI1Ljk4M2EyLjg2IDIuODYgMCAwIDEtMi4xNjYgMy40MzYgMi44NiAyLjg2IDAgMCAxLTMuNDM1LTIuMTY3TDI5LjkzOSA0Ni44MTZjLS4yODItMS4yNDQuMzItMi4xOTkuOTkyLTIuODQyIDQuMDYyLTUuMTczIDkuNDgxLTguNjkgMTUuNzA1LTEwLjEgNi4zOC0xLjQ0NiAxMy4yODctLjU1NyAxOS4yMTggMi41MTYgNC44MiAyLjUwNiAxMC4yMjMgMy4yNDUgMTUuNTEzIDIuMDQ3czkuODQ2LTQuMTk0IDEzLjExNi04LjUzM2MuNzkyLS44MzQgMS44NDYtMS4yMzYgMi44ODYtLjk4MSAxLjAzOS4yNTUgMS43MTcgMS4wODMgMS45NjQgMi4xNzJ6IiBmaWxsPSIjZmZmIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iNCIvPjxnIGZpbGw9IiNmZmJmMDAiIHN0cm9rZT0iI2ZmYmYwMCIgc3Ryb2tlLXdpZHRoPSIzIj48cGF0aCBkPSJNNjEuMTk1IDYyLjE5NmMtMy41MS0xLjc1NS0yLjgzMy0zLjcyLTEuOTYtNi4xNzhsNS4zMS0xMi41NWMuODc0LTIuNDU3IDEuNDk2LTIuNzMgMy4wMTUtLjYxMWwyLjggMTguNzI1cy01LjY1NiAyLjM3LTkuMTY1LjYxNHoiLz48cGF0aCBkPSJNNzYuOTIyIDU1LjAwOGMzLjYzNSAxLjY4OCAyLjgzMyAzLjQ1NyAxLjk2IDUuOTE0bC01LjMxIDEyLjgxM2MtLjg3NCAyLjQ1Ny0xLjQ5NiAyLjczLTMuMDE1LjYxMWwtMy4wMTMtMTguNjk1czUuNzQ0LTIuMzMzIDkuMzc4LS42NDR6Ii8+PC9nPjwvc3ZnPg==";

  const stopSignURI =
"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNCAxNCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHBhdGggc3R5bGU9ImZpbGw6I2VjNTk1OTtzdHJva2U6I2I4NDg0ODtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQiIGQ9Ik00LjMuNWg1LjRsMy44IDMuOHY1LjRsLTMuOCAzLjhINC4zTC41IDkuN1Y0LjN6Ii8+PC9zdmc+";

  const Cast = Scratch.Cast;
  const vm = Scratch.vm;
  const runtime = vm.runtime;
  const isPM = Scratch.extensions.isPenguinMod;
  const SPeventKey = Symbol("SPeventsPlusData")
  const Thread = isPM ? vm.exports.Thread : vm.exports.i_will_not_ask_for_help_when_these_break().Thread;

  const regenReporters = ["SPeventsPlus_changedValue", "SPeventsPlus_focusedTarget", "SPeventsPlus_messageName"];
  if (Scratch.gui) Scratch.gui.getBlockly().then(SB => {
    const ogCheck = SB.scratchBlocksUtils.isShadowArgumentReporter;
    SB.scratchBlocksUtils.isShadowArgumentReporter = function(block) {
      if (ogCheck(block)) return true;
      return block.isShadow() && regenReporters.includes(block.type);
    };
  });

  const genFakeCode = (block, target) => {
    if (!Thread) {
      console.log("Events+ could not access Exports!");
      block = undefined;
    }
    return new Promise((resolve) => {
      if (!block) return resolve("");
      const thread = new Thread(block.id);
      thread.pushStack(block.id);
      thread.blockContainer = target.blocks;
      thread.target = target;
      thread.stackClick = false;
      thread.pushReportedValue = (value) => resolve(value);
      runtime.threads.push(thread);
      if (!thread.stackClick && !thread.updateMonitor) runtime.threadMap.set(thread.getId(), thread);
    });
  }

  let looksPatched = false, messagesPatched = false;
  const generateExternalBlocks = (type) => {
    const manager = vm.extensionManager;
    if (type === "costumeEvent") {
      if (manager.isExtensionLoaded("SPlooksExpanded")) return `<block type="SPlooksExpanded_whenCostumeSwitch"><field name="COSTUME">costume1</field></block>`;
      else if (!looksPatched) {
        // ripped from Looks Expanded (by me)
        looksPatched = true;
        const looksCore = runtime.ext_scratch3_looks;
        const ogSetCoreCostume = looksCore.constructor.prototype._setCostume;
        ogSetCoreCostume.constructor.prototype._setCostume = function (...args) {
          ogSetCoreCostume.call(this, ...args);
          runtime.startHats(
            "SPeventsPlus_whenCostumeChanged",
            { COSTUME: args[0].getCurrentCostume()?.name || "" }
          );
        };
        const ogSetSpriteCostume = vm.exports.RenderedTarget.prototype.setCostume;
        vm.exports.RenderedTarget.prototype.setCostume = function (...args) {
          ogSetSpriteCostume.call(this, ...args);
          runtime.startHats(
            "SPeventsPlus_whenCostumeChanged",
            { COSTUME: this.getCurrentCostume()?.name || "" }
          );
        };
      }
      return `<block type="SPeventsPlus_whenCostumeChanged"><field name="COSTUME">costume1</field></block>`;
    }

    if (type === "anyMessage" || type === "roundMessageHat") {
      if (manager.isExtensionLoaded("SPmessagePlus")) {
        return type === "anyMessage" ? `<block type="SPmessagePlus_whenAnyBroadcast"></block>`
          : `<block type="SPmessagePlus_whenReceived"><value name="BROADCAST_OPTION"><shadow type="event_broadcast_menu"><field name="BROADCAST_OPTION" variabletype="broadcast_msg">message1</field></shadow></value></block>`;
      } else if (!messagesPatched) {
        // ripped from Messages+ (by me)
        messagesPatched = true;
        const ogStartHats = runtime.startHats;
        runtime.startHats = function (opcode, fields, target) {
          let threads = ogStartHats.call(this, opcode, fields, target);
          if (opcode === "event_whenbroadcastreceived") {
            const name = fields.BROADCAST_OPTION;
            threads = [...threads, ...runtime.startHats("SPeventsPlus_whenAnyMsgReceived")];
            runtime.allScriptsByOpcodeDo(
              "SPeventsPlus_whenMsgReceived", (script, target) => {
                const id = script.blockId;
                const existing = runtime.threadMap.get(`${target.id}&${id}`);
                if (existing) threads.push(runtime._restartThread(existing));
                else {
                  const block = target.blocks.getBlock(id);
                  const broadcastBlock = target.blocks.getBlock(block.inputs.MSG.block);
                  if (broadcastBlock.opcode === "event_broadcast_menu") {
                    if (broadcastBlock.fields.BROADCAST_OPTION.value.toUpperCase() === name) {
                      threads.push(runtime._pushThread(id, target));
                    }
                  } else {
                    genFakeCode(broadcastBlock, target).then((value) => {
                      if (Cast.toString(value).toUpperCase() === name) threads.push(runtime._pushThread(id, target));
                    });
                  }
                }
              }
            );
            for (const thread of threads) thread[SPeventKey] = name;
          }
          return threads;
        }
      }
      return type === "anyMessage" ? `<block type="SPeventsPlus_whenAnyMsgReceived"><value name="MSG"><shadow type="SPeventsPlus_messageName"></shadow></value></block>`
        : `<block type="SPeventsPlus_whenMsgReceived"><value name="MSG"><shadow type="event_broadcast_menu"><field name="BROADCAST_OPTION" variabletype="broadcast_msg">message1</field></shadow></value></block>`;
    }
  };

  const mainEvents = [
    ["event_whenflagclicked", "when flag clicked"],
    ["event_whenkeypressed", "when [KEY] key pressed"],
    ["event_whenthisspriteclicked", "when this sprite clicked"],
    ["event_whenstageclicked", "when stage clicked"],
    ["event_whenbackdropswitchesto", "when backdrop switches to [BACKDROP]"],
    ["event_whengreaterthan", "when [THING] > (NUMBER)"],
    ["event_whenbroadcastreceived", "when I receive [MESSAGE]"],
    ["control_start_as_clone", "when I start as clone"]
  ];
  const pmExtraEvents = [
    ["event_whenstopclicked", "when stop clicked"],
    ["event_always", "always"],
    ["event_whenanything", "when <BOOLEAN>"],
    ["event_whenkeyhit", "when [KEY] key hit"],
    ["event_whenmousescrolled", "when mouse is scrolled [DIRECTION]"]
  ];
  const cachedEvents = Object.fromEntries(
    isPM ? [...mainEvents.slice(0, 1), ...pmExtraEvents, ...mainEvents.slice(1)] : mainEvents
  );

  class SPeventsPlus {
    constructor() {
      this.lastChangeValues = new Map();

      runtime.on("PROJECT_STOP_ALL", () => {
        queueMicrotask(() => {
          if (Date.now() - runtime.ioDevices.clock._projectTimer.startTime > 250) {
            runtime.startHats("SPeventsPlus_whenStopped");
          }
        });
      });

      document.addEventListener("fullscreenchange", () => {
        const isFullscreen = Cast.toBoolean(document.fullscreenElement || document.webkitFullscreenElement);
        runtime.startHats(
          "SPeventsPlus_whenScreenChanges",
          { SCREEN: isFullscreen ? "windowFull" : "windowDefault" }
        );
      });
      this.lastCanvasRatio = true;
      this.canvasObserver = new ResizeObserver((entries) => {
        if (this.lastCanvasRatio) {
          this.lastCanvasRatio = "default";
          return;
        }

        const resize = entries[0].contentRect;
        const ratio = resize.width / runtime.stageWidth;
        const ratioName = ratio < .51 ? "small" : ratio > 1.4 ? "full" : "default";
        if (this.lastCanvasRatio === ratioName) return;

        this.lastCanvasRatio = ratioName;
        runtime.startHats("SPeventsPlus_whenScreenChanges", { SCREEN: ratioName });
      });
      this.canvasObserver.observe(vm.renderer.canvas);

      const mouseUtil = runtime.ioDevices.mouse;
      const ogActivateClick = mouseUtil._activateClickHats;
      mouseUtil._activateClickHats = (...args) => {
        ogActivateClick.call(mouseUtil, ...args);
        this.runHatEvents("whenClickEvent", { id: args[0]?.id, type: "click" });
      };
      const ogStartDrag = vm.startDrag;
      vm.startDrag = (...args) => {
        ogStartDrag.call(vm, ...args);
        this.runHatEvents("whenClickEvent", { id: args[0], type: "drag" });
      };
      const ogStopDrag = vm.stopDrag;
      vm.stopDrag = (...args) => {
        ogStopDrag.call(vm, ...args);
        this.runHatEvents("whenClickEvent", { id: args[0], type: "drop" });
      };

      runtime.on("targetWasCreated", (newTarget, optOgTarget) => {
        const threads = runtime.startHats(
          "SPeventsPlus_whenSpriteListChange",
          { TYPE: "create", TARGET_TYPE: newTarget.isOriginal ? "sprite" : "clone" }
        );
        for (const thread of threads) {
          thread[SPeventKey] = { target: newTarget, ogTarget: optOgTarget };
        }
      });
      runtime.on("targetWasRemoved", (target) => {
        const threads = runtime.startHats(
          "SPeventsPlus_whenSpriteListChange",
          { TYPE: "delete", TARGET_TYPE: target.isOriginal ? "sprite" : "clone" }
        );
        for (const thread of threads) {
          thread[SPeventKey] = { target };
        }
      });

      this.animationFrameHandler = () => {
        runtime.allScriptsByOpcodeDo("SPeventsPlus_everyXframes", (script, target) => {
          const block = target.blocks.getBlock(script.blockId);
          this.everyFrameEventHandler("animation", script.blockId, block, target);
        });
        requestAnimationFrame(this.animationFrameHandler);
      };
      requestAnimationFrame(this.animationFrameHandler);

      runtime.on("BEFORE_EXECUTE", () => {
        // more optimized to do this all at once
        runtime.allScriptsDo((blockId, target) => {
          const block = target.blocks.getBlock(blockId);
          switch (block.opcode) {
            case "SPeventsPlus_everyXframes": return this.everyFrameEventHandler("project", blockId, block, target);
            case "SPeventsPlus_whenChanged": return runtime._pushThread(blockId, target);
            case "SPeventsPlus_while": return runtime._pushThread(blockId, target);
            default: return;
          }
        });
      });

      // needs init for packaged projects
      runtime.on("PROJECT_LOADED", () => this.getEvents());
    }
    getInfo() {
      return {
        id: "SPeventsPlus",
        name: "Events+",
        color1: "#ffbf00",
        color2: "#e6aC00",
        color3: "#cc9900",
        menuIconURI,
        blocks: [
          {
            opcode: "whenStopped",
            extensions: ["colours_event"],
            isEdgeActivated: false,
            blockType: Scratch.BlockType.EVENT,
            text: "when [IMAGE] clicked",
            arguments: {
              IMAGE: { type: Scratch.ArgumentType.IMAGE, dataURI: stopSignURI }
            },
          },
          {
            opcode: "whenScreenChanges",
            extensions: ["colours_event"],
            isEdgeActivated: false,
            blockType: Scratch.BlockType.EVENT,
            text: "when [SCREEN] entered",
            arguments: {
              SCREEN: { type: Scratch.ArgumentType.STRING, menu: "SCREEN_TYPES" }
            },
          },
          "---",
          {
            opcode: "whenClickEvent",
            extensions: ["colours_event"],
            isEdgeActivated: false,
            blockType: Scratch.BlockType.HAT,
            text: "when [TARGET] is [TYPE]",
            arguments: {
              TARGET: { type: Scratch.ArgumentType.STRING, menu: "TARGETS" },
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "CLICK_TYPES" },
            },
          },
          /* rip from Looks Expanded (by me) */
          {
            opcode: "whenCostumeChanged",
            extensions: ["colours_event"],
            isEdgeActivated: false,
            hideFromPalette: true,
            blockType: Scratch.BlockType.EVENT,
            text: "when costume switches to [COSTUME]",
            arguments: {
              COSTUME: { type: Scratch.ArgumentType.STRING, menu: "COSTUMES" }
            },
          },
          {
            blockType: Scratch.BlockType.XML,
            xml: generateExternalBlocks("costumeEvent")
          },
          {
            opcode: "whenSpriteListChange",
            extensions: ["colours_event"],
            isEdgeActivated: false,
            hideFromPalette: true,
            blockType: Scratch.BlockType.EVENT,
            text: "when [TARGET_TYPE] is [TYPE] [TARGET]",
            arguments: {
              TARGET_TYPE: { type: Scratch.ArgumentType.STRING, menu: "TARGET_TYPE" },
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "CREATION_TYPES" },
              TARGET: {}
            },
          },
          {
            opcode: "focusedTarget",
            hideFromPalette: true,
            blockType: Scratch.BlockType.REPORTER,
            color1: "#e6aC00",
            color3: "#cc9900",
            text: "sprite [THING]",
            arguments: {
              THING: { type: Scratch.ArgumentType.STRING, menu: "TARGET_VALUES" }
            },
          },
          {
            blockType: Scratch.BlockType.XML,
            xml: `
              <block type="SPeventsPlus_whenSpriteListChange">
                <field name="TARGET_TYPE">sprite</field>
                <field name="TYPE">create</field>
                <value name="TARGET"><shadow type="SPeventsPlus_focusedTarget">
                  <value name="THING"><shadow type="SPeventsPlus_menu_TARGET_VALUES"></shadow></value>
                </shadow></value>
              </block>
            `
          },
          "---",
          {
            opcode: "everyXframes",
            extensions: ["colours_event"],
            isEdgeActivated: false,
            blockType: Scratch.BlockType.EVENT,
            text: "every [NUM] [TYPE] frames",
            arguments: {
              NUM: { type: Scratch.ArgumentType.NUMBER, defaultValue: 3 },
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "FRAME_TYPE" }
            },
          },
          {
            opcode: "whenChanged",
            extensions: ["colours_event"],
            isEdgeActivated: false,
            hideFromPalette: true,
            blockType: Scratch.BlockType.HAT,
            text: "when [THING] is changed [DATA]",
            arguments: {
              THING: {}, DATA: {}
            },
          },
          {
            opcode: "changedValue",
            hideFromPalette: true,
            allowDropAnywhere: true,
            blockType: Scratch.BlockType.REPORTER,
            color1: "#e6aC00",
            text: "old value"
          },
          {
            blockType: Scratch.BlockType.XML,
            xml: `
              <block type="SPeventsPlus_whenChanged">
                <value name="DATA"><shadow type="SPeventsPlus_changedValue"></shadow></value>
              </block>
            `
          },
          {
            opcode: "when",
            extensions: ["colours_event"],
            isEdgeActivated: true,
            blockType: Scratch.BlockType.HAT,
            text: "when [BOOL]",
            arguments: {
              BOOL: { type: Scratch.ArgumentType.BOOLEAN }
            },
          },
          {
            opcode: "while",
            extensions: ["colours_event"],
            isEdgeActivated: false,
            blockType: Scratch.BlockType.HAT,
            text: "while [BOOL]",
            arguments: {
              BOOL: { type: Scratch.ArgumentType.BOOLEAN }
            },
          },
          "---",
          {
            opcode: "whenAnyMsgReceived",
            extensions: ["colours_event"],
            isEdgeActivated: false,
            hideFromPalette: true,
            shouldRestartExistingThreads: true,
            blockType: Scratch.BlockType.EVENT,
            text: "when I receive any [MSG]",
            arguments: {
              MSG: {}
            },
          },
          {
            opcode: "messageName",
            hideFromPalette: true,
            blockType: Scratch.BlockType.REPORTER,
            color1: "#e6aC00",
            text: "message"
          },
          {
            opcode: "whenMsgReceived",
            extensions: ["colours_event"],
            isEdgeActivated: false,
            hideFromPalette: true,
            shouldRestartExistingThreads: true,
            blockType: Scratch.BlockType.EVENT,
            text: "when I receive [MSG]",
            arguments: {
              MSG: { type: Scratch.ArgumentType.STRING, defaultValue: "" }
            },
          },
          {
            blockType: Scratch.BlockType.XML,
            xml: generateExternalBlocks("anyMessage") + generateExternalBlocks("roundMessageHat")
          },
          "---",
          {
            opcode: "forceRunEvent",
            extensions: ["colours_event"],
            blockType: Scratch.BlockType.COMMAND,
            text: "force run [NAME] in [TARGET] [TYPE]",
            arguments: {
              NAME: { type: Scratch.ArgumentType.STRING, menu: "EVENT_NAMES" },
              TARGET: { type: Scratch.ArgumentType.STRING, menu: "TARGETS_ROUND" },
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "EVENT_RULES" },
            },
          }
        ],
        menus: {
          TARGETS: { acceptReporters: false, items: "getTargets" },
          TARGETS_ROUND: { acceptReporters: true, items: "getTargetsAll" },
          COSTUMES: { acceptReporters: false, items: "getCostumes" },
          EVENT_NAMES: { acceptReporters: true, items: "getEvents" },
          SCREEN_TYPES: [
            { text: "fullscreen", value: "full" },
            { text: "smallscreen", value: "small" },
            { text: "default", value: "default" },
            { text: "window fullscreen", value: "windowFull" },
            { text: "window default", value: "windowDefault" },
          ],
          CLICK_TYPES: [
            { text: "clicked", value: "click" },
            { text: "dragged", value: "drag" },
            { text: "dropped", value: "drop" }
          ],
          TARGET_TYPE: [
            { text: "sprite", value: "sprite" },
            { text: "clone", value: "clone" }
          ],
          CREATION_TYPES: [
            { text: "created", value: "create" },
            { text: "deleted", value: "delete" }
          ],
          FRAME_TYPE: [
            { text: "project", value: "project" },
            { text: "animation", value: "animation" }
          ],
          TARGET_VALUES: {
            acceptReporters: true,
            items: [
              { text: "name", value: "name" },
              { text: "id", value: "id" },
              { text: "parent id", value: "parentId" },
              { text: "variables", value: "vars" },
              { text: "parent variables", value: "parentVars" }
            ]
          },
          EVENT_RULES: [
            { text: "with restart", value: "restart" },
            { text: "with skipping", value: "skip" },
            { text: "with overlap", value: "overlap" },
          ]
        },
      };
    }

    // Helper Funcs
    getCostumes() {
      let costumeNames = [];
      if (vm.editingTarget) costumeNames = vm.editingTarget.getCostumes().map((e) => e.name);
      return costumeNames.length > 0 ? costumeNames : [""];
    }

    getTargets() {
      const spriteNames = [{ text: "this sprite", value: "_myself_" }, { text: "Stage", value: "_stage_" }];
      const targets = runtime.targets;
      for (let i = 1; i < targets.length; i++) {
        const target = targets[i];
        if (target.isOriginal) spriteNames.push({ text: target.getName(), value: target.getName() });
      }
      return spriteNames.length > 0 ? spriteNames : [""];
    }

    getTargetsAll() {
      const spriteNames = this.getTargets();
      return [
        ...spriteNames.slice(0, 1),
        { text: "all sprites", value: "_all_" },
        { text: "all clones", value: "_clone_" },
        { text: "main sprites", value: "_main_" },
        ...spriteNames.slice(1, spriteNames.length)
      ];
    }

    getTarget(name, util) {
      name = Cast.toString(name);
      if (name === "_all_" || name === "_clone_" || name === "_main_") return name;
      if (name === "_myself_") return util.target;
      if (name === "_stage_") return runtime.getTargetForStage();
      return runtime.getSpriteTargetByName(name);
    }

    getEvents() {
      for (const opcode of Object.keys(runtime._hats)) {
        if (cachedEvents[opcode]) continue;
        if (opcode === "event_whentouchingobject" || opcode === "event_whenjavascript") continue;

        let extName, extBlock;
        for (const extension of runtime._blockInfo) {
          extName = extension.name;
          extBlock = extension.blocks.find(block => opcode === block?.json?.type);
          if (extBlock) break;
        }
        if (extBlock) cachedEvents[opcode] = `${extName} -- ${extBlock.info.text}`;
      }
      return Object.values(cachedEvents);
    }

    runHatEvents(opcode, data) {
      runtime.allScriptsByOpcodeDo(
        "SPeventsPlus_" + opcode,
        (script, target) => {
          const thread = runtime._pushThread(script.blockId, target);
          thread[SPeventKey] = data;
        }
      );
    }

    everyFrameEventHandler(type, blockId, block, target) {
      const handleValue = (value) => {
        if (value < 2) runtime._pushThread(blockId, target);
        else if (block[SPeventKey][type] >= value) {
          runtime._pushThread(blockId, target);
          block[SPeventKey][type] = 0;
        }
      }

      if (runtime.threadMap.get(`${target.id}&${blockId}`)) return;
      if (!block || !target || !block?.next) return;
      if (!block[SPeventKey]) block[SPeventKey] = { animation: 0, project: 0 };
      block[SPeventKey][type]++;
      if (block.fields.TYPE.value === type) {
        const frameValue = target.blocks.getBlock(block.inputs.NUM.block);
        if (frameValue.opcode === "math_number") handleValue(Cast.toNumber(frameValue.fields.NUM.value));
        else genFakeCode(frameValue, target).then((value) => handleValue(Cast.toNumber(value)));
      }
    }

    appropriateVariables(variables) {
      const mapped = Object.create(null);
      for (const vari of Object.values(variables)) {
        mapped[vari.name] = vari.value;
      }
      return JSON.stringify(mapped);
    }

    // Block Funcs
    whenClickEvent(args, util) {
      const target = this.getTarget(args.TARGET, util);
      if (!target) return false;

      const receivedData = util.thread[SPeventKey];
      if (!receivedData) return false;
      if (receivedData.id !== target.id) return false;
      switch (args.TYPE) {
        case "click": return receivedData.type === "click";
        case "drag": return receivedData.type === "drag";
        case "drop": return receivedData.type === "drop";
        default: return false;
      }
    }

    focusedTarget(args, util) {
      const receivedData = util.thread[SPeventKey];
      if (!receivedData) return "";

      const { target, ogTarget } = receivedData;
      switch (Cast.toString(args.THING)) {
        case "name": return target.getName() + (target.isOriginal ? "" : " (Clone)");
        case "id": return target.id;
        case "parentId": return ogTarget ? ogTarget.id : "";
        case "vars": return this.appropriateVariables(target.variables);
        case "parentVars": return ogTarget ? this.appropriateVariables(ogTarget.variables) : "";
        default: return "";
      }
    }

    whenChanged(args, util) {
      const id = `${util.target.id}${util.thread.peekStack()}`;
      const input = args.THING; // no casting

      if (!this.lastChangeValues.has(id)) {
        this.lastChangeValues.set(id, input);
        return false;
      }
      const oldValue = this.lastChangeValues.get(id);
      if (oldValue !== input) {
        util.thread[SPeventKey] = oldValue;
        this.lastChangeValues.set(id, input);
        return true;
      }
      return false;
    }

    changedValue(_, util) {
      return util.thread[SPeventKey] ?? "";
    }

    when(args) {
      return Cast.toBoolean(args.BOOL);
    }

    while(args) {
      return Cast.toBoolean(args.BOOL);
    }

    messageName(_, util) {
      if (!Object.prototype.hasOwnProperty.call(util.thread, SPeventKey)) return "";
      const name = util.thread[SPeventKey];
      // The name stored on the thread is toUpperCase(), so lookup the user-facing name
      const variable = util.runtime.getTargetForStage().lookupBroadcastByInputValue(name);
      if (variable) return variable.name;
      return name; // this is a dynamic message
    }

    forceRunEvent(args, util) {
      const target = this.getTarget(args.TARGET, util);
      if (!target) return;

      const name = Cast.toString(args.NAME);
      const event = Object.entries(cachedEvents).find(event => event[1] === name);
      const opcode = event ? event[0] : "";
      const targetFilter = typeof target === "string" ? undefined : target;

      runtime.allScriptsByOpcodeDo(opcode, (script, blockTarget) => {
        if (target === "_clone_" && blockTarget.isOriginal) return;
        if (target === "_main_" && !blockTarget.isOriginal) return;

        const id = script.blockId;
        /* use the next block in stack to allow hats to run */
        const nextID = blockTarget.blocks.getBlock(id).next;
        const existing = runtime.threadMap.get(`${blockTarget.id}&${id}`) ||
          runtime.threadMap.get(`${blockTarget.id}&${nextID}`);
        if (existing) {
          if (args.TYPE === "restart") return runtime._restartThread(existing);
          if (args.TYPE === "skip") return;
        }
        runtime._pushThread(nextID, blockTarget);
      }, targetFilter);
    }
  }

  Scratch.extensions.register(new SPeventsPlus());
})(Scratch);
