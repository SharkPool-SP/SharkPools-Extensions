// Name: Turbo Skins
// ID: SPturboSkins
// Description: Quickly Render Sprites with other Images or Costumes
// By: SharkPool
// Licence: MIT
// Inspired by Lily's Skins Extension!

// Version V.1.0.01

(function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) throw new Error("Turbo Skins must run unsandboxed!");

  const menuIconURI =
"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTIuNDg3IiBoZWlnaHQ9IjExMi40ODciIHZpZXdCb3g9IjAgMCAxMTIuNDg3IDExMi40ODciPjxwYXRoIGQ9Ik0wIDU2LjI0M0MwIDI1LjE4MSAyNS4xOCAwIDU2LjI0MyAwYzMxLjA2MiAwIDU2LjI0MyAyNS4xOCA1Ni4yNDMgNTYuMjQzIDAgMzEuMDYyLTI1LjE4IDU2LjI0My01Ni4yNDMgNTYuMjQzQzI1LjE4MSAxMTIuNDg2IDAgODcuMzA2IDAgNTYuMjQzIiBmaWxsPSIjYTYxMjMyIi8+PHBhdGggZD0iTTYuMTY2IDU2LjI0M2MwLTI3LjY1NyAyMi40Mi01MC4wNzcgNTAuMDc3LTUwLjA3N3M1MC4wNzcgMjIuNDIgNTAuMDc3IDUwLjA3N1M4My45IDEwNi4zMiA1Ni4yNDMgMTA2LjMyIDYuMTY2IDgzLjkgNi4xNjYgNTYuMjQzIiBmaWxsPSIjZTgxYzQ4Ii8+PHBhdGggZD0iTTQ2LjExMyA1Ni41MTRjMi45ODMtNC4wNjYgOS40MjQtMTIuODMgMTEuMjktMTUuMjIzIDEuMDAxLTEuMjg0IDEuNzAzLS42NDkgMS40MDIuODUzbC0yLjEgMTAuNDkyczYuNDQ2LjUyIDguNTcuOThjMS4yODQuMjc4IDIuMTYyIDEuOTQ1LjgyMiAzLjc5Mi0yLjg3NiAzLjk2My04LjY1IDExLjI5NC0xMC4yNzUgMTMuNTM0LTEuMDY4IDEuNDctMS45OSAxLjEyOC0xLjc1MS0uMzc4bC4yOTktMS44NzkgMS4zNzktOC42NzYtOC41MjUtMS4wNjZjLTEuMTU0LS4xNDQtMi4wNTItMS4xNDYtMS4xMTEtMi40MjlNMjguNjg5IDQzLjk2MWE1Ljc3NSA1Ljc3NSAwIDAgMS01Ljc3NS01Ljc3NXYtOS40OTdhNS43NzUgNS43NzUgMCAwIDEgNS43NzUtNS43NzVoOS40OTdhNS43NzUgNS43NzUgMCAwIDEgNS43NzUgNS43NzV2OS40OTdhNS43NzUgNS43NzUgMCAwIDEtNS43NzUgNS43NzV6bTcuNDQzLTQuNzQ5YTMuMDggMy4wOCAwIDAgMCAzLjA4LTMuMDh2LTUuMzlhMy4wOCAzLjA4IDAgMCAwLTMuMDgtMy4wOGgtNS4zOWEzLjA4IDMuMDggMCAwIDAtMy4wOCAzLjA4djUuMzlhMy4wOCAzLjA4IDAgMCAwIDMuMDggMy4wOHpNNzQuMyA0My45NjFhNS43NzUgNS43NzUgMCAwIDEtNS43NzUtNS43NzV2LTkuNDk3YTUuNzc1IDUuNzc1IDAgMCAxIDUuNzc1LTUuNzc1aDkuNDk3YTUuNzc1IDUuNzc1IDAgMCAxIDUuNzc1IDUuNzc1djkuNDk3YTUuNzc1IDUuNzc1IDAgMCAxLTUuNzc1IDUuNzc1em03LjQ0NC00Ljc0OWEzLjA4IDMuMDggMCAwIDAgMy4wOC0zLjA4di01LjM5YTMuMDggMy4wOCAwIDAgMC0zLjA4LTMuMDhoLTUuMzlhMy4wOCAzLjA4IDAgMCAwLTMuMDggMy4wOHY1LjM5YTMuMDggMy4wOCAwIDAgMCAzLjA4IDMuMDh6IiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTY4LjUyNSA3NC4zYTUuNzc1IDUuNzc1IDAgMCAxIDUuNzc1LTUuNzc1aDkuNDk3YTUuNzc1IDUuNzc1IDAgMCAxIDUuNzc1IDUuNzc1djkuNDk3YTUuNzc1IDUuNzc1IDAgMCAxLTUuNzc1IDUuNzc1SDc0LjNhNS43NzUgNS43NzUgMCAwIDEtNS43NzUtNS43NzV6bTQuNzQ5IDcuNDQ0YTMuMDggMy4wOCAwIDAgMCAzLjA4IDMuMDhoNS4zOWEzLjA4IDMuMDggMCAwIDAgMy4wOC0zLjA4di01LjM5YTMuMDggMy4wOCAwIDAgMC0zLjA4LTMuMDhoLTUuMzlhMy4wOCAzLjA4IDAgMCAwLTMuMDggMy4wOHpNNDMuMjkzIDI5LjYzOWgyNS45NTZ2Ny41OTdINDMuMjk0ek0yOS42MzkgNjkuMDkxVjQzLjEzNWg3LjU5N3YyNS45NTZ6bTQ1LjYxMSAwVjQzLjEzNWg3LjU5N3YyNS45NTZ6TTQzLjI5MyA3NS4yNWgyNS45NTZ2Ny41OTdINDMuMjk0eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0yMi45MTMgNzQuM2E1Ljc3NSA1Ljc3NSAwIDAgMSA1Ljc3Ni01Ljc3NWg5LjQ5N2E1Ljc3NSA1Ljc3NSAwIDAgMSA1Ljc3NSA1Ljc3NXY5LjQ5N2E1Ljc3NSA1Ljc3NSAwIDAgMS01Ljc3NSA1Ljc3NWgtOS40OTdhNS43NzUgNS43NzUgMCAwIDEtNS43NzUtNS43NzV6bTQuNzUgNy40NDRhMy4wOCAzLjA4IDAgMCAwIDMuMDggMy4wOGg1LjM5YTMuMDggMy4wOCAwIDAgMCAzLjA4LTMuMDh2LTUuMzlhMy4wOCAzLjA4IDAgMCAwLTMuMDgtMy4wOGgtNS4zOWEzLjA4IDMuMDggMCAwIDAtMy4wOCAzLjA4eiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==";

  const vm = Scratch.vm;
  const runtime = vm.runtime;
  const render = vm.renderer;
  const { SVGSkin, BitmapSkin } = render.exports;

  const skinTag = Symbol("SPskin");
  let allSkins = {};
  let skinsInUse = {};

  const makeTexture = async (url) => {
    const obj = await Scratch.fetch(url);
    const content = obj.headers.get("Content-Type");
    const text = await obj.text();
    if (content === "image/svg+xml") return ["override", text];

    // eslint-disable-next-line
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = url;
    img.onerror = (e) => { console.warn("Error loading skin: INVALID IMAGE") };
    await img.decode();
    return img;
  };

  const makeSkin = async (type, name, data) => {
    if (type === "url") {
      data = await makeTexture(data);
      if (data[0] === "override") {
        type = "svg";
        data = data[1];
      }
    }
    name = Scratch.Cast.toString(name);
    const existingSkin = allSkins[name];
    if (existingSkin) {
      const skinData = existingSkin[skinTag];
      if (skinData.type !== type) removeSkin(skinData.name);
      else {
        if (skinData.type === "svg") existingSkin.setSVG(data);
        else existingSkin.setBitmap(data);
        return;
      }
    }
    const skinId = render._nextSkinId++;
    let skin;
    if (type === "svg") {
      skin = new SVGSkin(skinId, render);
      skin.setSVG(data);
    } else {
      skin = new BitmapSkin(skinId, render);
      skin.setBitmap(data);
    }
    skin[skinTag] = { type, name, data, hitbox: skinId };
    allSkins[name] = skin;
    render._allSkins[skinId] = skin;
  };

  const removeSkin = (name) => {
    name = Scratch.Cast.toString(name);
    const skin = allSkins[name];
    if (!skin) return;
    render.destroySkin(skin._id);
    delete allSkins[name];
  };

  const refreshTargets = () => {
    for (const target of runtime.targets) target.updateAllDrawableProperties();
    skinsInUse = {};
  };
  runtime.on("PROJECT_START", refreshTargets);
  runtime.on("PROJECT_STOP_ALL", refreshTargets);

  runtime.on("BEFORE_EXECUTE", () => {
    for (const item of Object.entries(skinsInUse)) {
      const obj = item[1];
      const skin = allSkins[obj.name];
      render.updateDrawableSkinId(obj.target.drawableID, skin[skinTag].hitbox);
    }
  });
  runtime.on("AFTER_EXECUTE", () => {
    for (const item of Object.entries(skinsInUse)) {
      const obj = item[1];
      const skin = allSkins[obj.name];
      render.updateDrawableSkinId(obj.target.drawableID, skin._id);
    }
  });

  class SPturboSkins {
    getInfo() {
      return {
        id: "SPturboSkins",
        name: "Turbo Skins",
        color1: "#e81c48",
        color2: "#cc163e",
        color3: "#a61232",
        menuIconURI,
        blocks: [
          {
            opcode: "createSkin",
            blockType: Scratch.BlockType.COMMAND,
            text: "create [TYPE] skin [IMG] named [NAME]",
            arguments: {
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "SKIN_TYPES" },
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "skin-1" },
              IMG: { type: Scratch.ArgumentType.STRING, defaultValue: "</svg>" }
            },
          },
          {
            opcode: "deleteSkin",
            blockType: Scratch.BlockType.COMMAND,
            text: "delete skin named [NAME]",
            arguments: {
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "skin-1" },
            },
          },
          {
            opcode: "deleteAll",
            blockType: Scratch.BlockType.COMMAND,
            text: "delete all skins"
          },
          {
            opcode: "skinLoaded",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "is skin [NAME] loaded?",
            arguments: {
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "skin-1" },
            },
          },
          {
            opcode: "allSkinNames",
            blockType: Scratch.BlockType.REPORTER,
            text: "all skins"
          },
          "---",
          {
            opcode: "setSkin",
            blockType: Scratch.BlockType.COMMAND,
            text: "set skin of [TARGET] to [NAME]",
            arguments: {
              TARGET: { type: Scratch.ArgumentType.STRING, menu: "TARGETS" },
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "skin-1" }
            },
          },
          {
            opcode: "setCostumeSkin",
            blockType: Scratch.BlockType.COMMAND,
            text: "set skin of [TARGET] to [NAME] in [SCRAP]",
            arguments: {
              TARGET: { type: Scratch.ArgumentType.STRING, menu: "TARGETS" },
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "costume1" },
              SCRAP: { type: Scratch.ArgumentType.STRING, menu: "TARGETS" },
            },
          },
          "---",
          {
            opcode: "restoreTarget",
            blockType: Scratch.BlockType.COMMAND,
            text: "restore skin of [TARGET]",
            arguments: {
              TARGET: { type: Scratch.ArgumentType.STRING, menu: "TARGETS" }
            },
          },
          {
            opcode: "restoreSkin",
            blockType: Scratch.BlockType.COMMAND,
            text: "restore sprites with skin [NAME]",
            arguments: {
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "skin-1" }
            },
          },
          "---",
          {
            opcode: "currentSkin",
            blockType: Scratch.BlockType.REPORTER,
            text: "current skin of [TARGET]",
            arguments: {
              TARGET: { type: Scratch.ArgumentType.STRING, menu: "TARGETS" }
            },
          },
          {
            opcode: "attSkin",
            blockType: Scratch.BlockType.REPORTER,
            text: "[THING] of skin [NAME]",
            arguments: {
              THING: { type: Scratch.ArgumentType.STRING, menu: "SKIN_ATTS" },
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "skin-1" }
            },
          },
          { blockType: Scratch.BlockType.LABEL, text: "Advanced" },
          {
            opcode: "setRotation",
            blockType: Scratch.BlockType.COMMAND,
            text: "set rotation center of skin [NAME] to x [x] y [y]",
            arguments: {
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "skin-1" },
              x: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
              y: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 }
            },
          },
          {
            opcode: "setHitbox",
            blockType: Scratch.BlockType.COMMAND,
            text: "set hitbox of skin [NAME] to [SCRAP]",
            arguments: {
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "skin-1" },
              SCRAP: { type: Scratch.ArgumentType.STRING, defaultValue: "skin-2" }
            },
          },
        ],
        menus: {
          TARGETS: { acceptReporters: true, items: "getTargets" },
          SKIN_TYPES: {
            acceptReporters: true, items: ["svg", "url"]
          },
          SKIN_ATTS: {
            acceptReporters: true,
            items: [
              "width", "height", "rotation center x", "rotation center y",
              "type", "source", "users"
            ]
          }
        },
      };
    }

    // Helper Funcs
    getTargets() {
      const items = [{ text: "myself", value: "_myself_" }, { text: "Stage", value: "_stage_" }];
      const targets = runtime.targets;
      for (let index = 1; index < targets.length; index++) {
        const target = targets[index];
        if (target.isOriginal) items.push({ text: target.getName(), value: target.getName() });
      }
      return items.length > 0 ? items : [""];
    }

    getSprite(name, util) {
      if (name === "_myself_") return util.target;
      if (name === "_stage_") return runtime.getTargetForStage();
      return runtime.getSpriteTargetByName(name);
    }

    // Block Funcs
    async createSkin(args) {
      const type = Scratch.Cast.toString(args.TYPE).toLowerCase() === "svg" ? "svg" : "url";
      if (type === "url" && !await Scratch.canFetch(args.IMG)) return;
      await makeSkin(type, args.NAME, args.IMG);
    }

    deleteSkin(args) {
      const name = Scratch.Cast.toString(args.NAME);
      for (const item of Object.entries(skinsInUse)) {
        if (name === item[1].name) delete skinsInUse[item[0]];
      }
      removeSkin(name);
    }

    deleteAll() {
      skinsInUse = {};
      const skins = Object.keys(allSkins);
      for (let i = 0; i < skins.length; i++) removeSkin(skins[i]);
    }

    skinLoaded(args) {
      const name = Scratch.Cast.toString(args.NAME);
      const skin = allSkins[name];
      if (skin === undefined) return false;
      if (skin[skinTag].type === "svg") return skin._svgImageLoaded;
      else return true;
    }

    allSkinNames() {
      return JSON.stringify(Object.keys(allSkins));
    }

    setSkin(args, util) {
      const target = this.getSprite(args.TARGET, util);
      const name = Scratch.Cast.toString(args.NAME);
      const skin = allSkins[name];
      if (target === undefined || skin === undefined) return;
      render.updateDrawableSkinId(target.drawableID, skin._id);
      skinsInUse[target.id] = { target, name };
    }

    setCostumeSkin(args, util) {
      const target = this.getSprite(args.TARGET, util);
      const scraper = this.getSprite(args.SCRAP, util);
      if (target === undefined || scraper === undefined) return;
      const name = Scratch.Cast.toString(args.NAME);
      const skin = scraper.sprite.costumes_.find((a) => a.name === name);
      if (skin) {
        render.updateDrawableSkinId(target.drawableID, skin.skinId);
        skinsInUse[target.id] = { target, name };
      }
    }

    restoreTarget(args, util) {
      const target = this.getSprite(args.TARGET, util);
      target.updateAllDrawableProperties();
      delete skinsInUse[target.id];
    }

    restoreSkin(args) {
      const name = Scratch.Cast.toString(args.NAME);
      for (const item of Object.entries(skinsInUse)) {
        const obj = item[1];
        if (name === obj.name) {
          obj.target.updateAllDrawableProperties();
          delete skinsInUse[obj.target.id];
        }
      }
    }

    currentSkin(args, util) {
      const target = this.getSprite(args.TARGET, util);
      const usedSkin = skinsInUse[target.id];
      return usedSkin ? usedSkin.name : "";
    }

    attSkin(args) {
      const name = Scratch.Cast.toString(args.NAME);
      const skin = allSkins[name];
      if (skin === undefined) return "";
      switch (args.THING) {
        case "width": return skin.size[0];
        case "height": return skin.size[1];
        case "rotation center x": return skin._rotationCenter[0];
        case "rotation center y": return skin._rotationCenter[1];
        case "type": return skin[skinTag].type;
        case "source":
          const data = skin[skinTag].data;
          return data.src ?? data;
        case "users":
          const users = [];
          for (const item of Object.entries(skinsInUse)) {
            const obj = item[1];
            if (name === obj.name) users.push(`${obj.target.getName()}${obj.target.isOriginal ? "" : " (Clone)"}`)
          }
          return JSON.stringify(users);
        default: return "";
      }
    }

    setRotation(args) {
      const name = Scratch.Cast.toString(args.NAME);
      const skin = allSkins[name];
      if (skin === undefined) return;
      skin._rotationCenter = new Float32Array([
        Scratch.Cast.toNumber(args.x), Scratch.Cast.toNumber(args.y), 0
      ]);
      for (const item of Object.entries(skinsInUse)) {
        const obj = item[1];
        if (name === obj.name) render._allDrawables[obj.target.drawableID]._skinWasAltered();
      }
    }

    setHitbox(args) {
      const name = Scratch.Cast.toString(args.NAME);
      const scraperName = Scratch.Cast.toString(args.SCRAP);
      const skin = allSkins[name];
      const scraper = allSkins[scraperName];
      if (skin === undefined || scraper === undefined) return;
      if (name === scraperName) skin[skinTag].hitbox = skin._id;
      else skin[skinTag].hitbox = scraper._id;
    }
  }

  Scratch.extensions.register(new SPturboSkins());
})(Scratch);
