// Name: Sprite Effects
// ID: SPspriteEffects
// Description: Apply New Non-Vanilla Effects to Sprites and the Canvas!
// By: SharkPool

// Version V.1.0.0
// To Do: Add Bulge, Mosiac, Whirl

(function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) {
    throw new Error("Sprite Effects must run unsandboxed");
  }

  const vm = Scratch.vm;
  const runtime = vm.runtime;
  Scratch.vm.extensionManager.loadExtensionURL("https://extensions.turbowarp.org/Lily/Skins.js");

  let sprite = true;
  let filterNameOffset = 0; // Used to avoid Same-Name filters
  let allFilters = [];
  let displacementSrCs = [];
  let maskOptions = [0, 0, 100];

  class SPspriteEffects {
    getInfo() {
      return {
        id: "SPspriteEffects",
        name: "Sprite Effects",
        color1: "#9966FF",
        color2: "#774DCB",
        blocks: [
          {
            func: "sourceSwitch",
            blockType: Scratch.BlockType.BUTTON,
            text: "Switch Effect Sources"
          },
          { blockType: Scratch.BlockType.LABEL, text: "Filters and Effects" },
          {
            opcode: "setSpriteBlend",
            blockType: Scratch.BlockType.REPORTER,
            text: "set blend mode of [SPRITE] to [BLEND]",
            hideFromPalette: !sprite,
            arguments: {
              SPRITE: { type: Scratch.ArgumentType.STRING, menu: "TARGETS" },
              BLEND: { type: Scratch.ArgumentType.STRING, menu: "BLENDING" },
            },
          },
          {
            opcode: "setImageBlend",
            blockType: Scratch.BlockType.REPORTER,
            text: "set blend mode of [SPRITE] to [BLEND]",
            hideFromPalette: sprite,
            arguments: {
              SPRITE: { type: Scratch.ArgumentType.STRING, defaultValue: "data URI or <svg content>" },
              BLEND: { type: Scratch.ArgumentType.STRING, menu: "BLENDING" },
            },
          },
          "---",
          {
            opcode: "setSpriteEffect",
            blockType: Scratch.BlockType.REPORTER,
            text: "apply [EFFECT] effect to [SPRITE] at [NUM]%",
            hideFromPalette: !sprite,
            arguments: {
              SPRITE: { type: Scratch.ArgumentType.STRING, menu: "TARGETS" },
              EFFECT: { type: Scratch.ArgumentType.STRING, menu: "EFFECTS" },
              NUM: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 15
              }
            },
          },
          {
            opcode: "setImageEffect",
            blockType: Scratch.BlockType.REPORTER,
            text: "apply [EFFECT] effect to [SPRITE] at [NUM]%",
            hideFromPalette: sprite,
            arguments: {
              SPRITE: { type: Scratch.ArgumentType.STRING, defaultValue: "data URI or <svg content>" },
              EFFECT: { type: Scratch.ArgumentType.STRING, menu: "EFFECTS" },
              NUM: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 15
              }
            },
          },
          {
            opcode: "setSpriteMotion",
            blockType: Scratch.BlockType.REPORTER,
            text: "apply motion blur to [SPRITE] at x [X] y [Y]",
            hideFromPalette: !sprite,
            arguments: {
              SPRITE: { type: Scratch.ArgumentType.STRING, menu: "TARGETS" },
              X: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 15
              },
              Y: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0
              },
            },
          },
          {
            opcode: "setImageMotion",
            blockType: Scratch.BlockType.REPORTER,
            text: "apply motion blur to [SPRITE] at x [X]% y [Y]%",
            hideFromPalette: sprite,
            arguments: {
              SPRITE: { type: Scratch.ArgumentType.STRING, defaultValue: "data URI or <svg content>" },
              X: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 15
              },
              Y: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0
              }
            },
          },
          {
            opcode: "hueSprite",
            blockType: Scratch.BlockType.REPORTER,
            text: "apply hue [COLOR] to [SPRITE]",
            hideFromPalette: !sprite,
            arguments: {
              COLOR: { type: Scratch.ArgumentType.COLOR, defaultValue: "#ff0000" },
              SPRITE: { type: Scratch.ArgumentType.STRING, menu: "TARGETS" }
            },
          },
          {
            opcode: "hueImage",
            blockType: Scratch.BlockType.REPORTER,
            text: "apply hue [COLOR] to [SPRITE]",
            hideFromPalette: sprite,
            arguments: {
              COLOR: { type: Scratch.ArgumentType.COLOR, defaultValue: "#ff0000" },
              SPRITE: { type: Scratch.ArgumentType.STRING, defaultValue: "data URI or <svg content>" }
            },
          },
          {
            opcode: "splitSprite",
            blockType: Scratch.BlockType.REPORTER,
            text: "apply [EFFECT] effect to [SPRITE] at x [X] y [Y] with colors [COLOR1] [COLOR2] and [COLOR3]",
            hideFromPalette: !sprite,
            arguments: {
              EFFECT: { type: Scratch.ArgumentType.STRING, menu: "SPLITTING" },
              X: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 15
              },
              Y: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0
              },
              SPRITE: { type: Scratch.ArgumentType.STRING, menu: "TARGETS" },
              COLOR1: { type: Scratch.ArgumentType.COLOR, defaultValue: "#ff0000" },
              COLOR2: { type: Scratch.ArgumentType.COLOR, defaultValue: "#00ff00" },
              COLOR3: { type: Scratch.ArgumentType.COLOR, defaultValue: "#0000ff" }
            },
          },
          {
            opcode: "splitImage",
            blockType: Scratch.BlockType.REPORTER,
            text: "apply [EFFECT] effect to [SPRITE] at x [X] y [Y] with colors [COLOR1] [COLOR2] and [COLOR3]",
            hideFromPalette: sprite,
            arguments: {
              EFFECT: { type: Scratch.ArgumentType.STRING, menu: "SPLITTING" },
              X: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 15
              },
              Y: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0
              },
              SPRITE: { type: Scratch.ArgumentType.STRING, defaultValue: "data URI or <svg content>" },
              COLOR1: { type: Scratch.ArgumentType.COLOR, defaultValue: "#ff0000" },
              COLOR2: { type: Scratch.ArgumentType.COLOR, defaultValue: "#00ff00" },
              COLOR3: { type: Scratch.ArgumentType.COLOR, defaultValue: "#0000ff" }
            },
          },
          {
            opcode: "waveSprite",
            blockType: Scratch.BlockType.REPORTER,
            text: "apply wave effect to [SPRITE] on [axis] with seed [SEED] at [NUM]%",
            hideFromPalette: !sprite,
            arguments: {
              axis: { type: Scratch.ArgumentType.STRING, menu: "AXISES" },
              SPRITE: { type: Scratch.ArgumentType.STRING, menu: "TARGETS" },
              NUM: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 5
              },
              SEED: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 1
              }
            },
          },
          {
            opcode: "waveImage",
            blockType: Scratch.BlockType.REPORTER,
            text: "apply wave effect to [SPRITE] on [axis] with seed [SEED] at [NUM]%",
            hideFromPalette: sprite,
            arguments: {
              SPRITE: { type: Scratch.ArgumentType.STRING, defaultValue: "data URI or <svg content>" },
              axis: { type: Scratch.ArgumentType.STRING, menu: "AXISES" },
              NUM: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 5
              },
              SEED: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 1
              }
            },
          },
          {
            opcode: "bulgeSprite",
            blockType: Scratch.BlockType.REPORTER,
            text: "apply bulge effect to [SPRITE] at x [X] y [Y] at [NUM]%",
            hideFromPalette: true, //!sprite,
            arguments: {
              SPRITE: { type: Scratch.ArgumentType.STRING, menu: "TARGETS" },
              NUM: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 5
              },
              X: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0
              },
              Y: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0
              }
            },
          },
          {
            opcode: "bulgeImage",
            blockType: Scratch.BlockType.REPORTER,
            text: "apply bulge effect to [SPRITE] at x [X] y [Y] at [NUM]%",
            hideFromPalette: true, //sprite,
            arguments: {
              SPRITE: { type: Scratch.ArgumentType.STRING, defaultValue: "data URI or <svg content>" },
              NUM: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 5
              },
              X: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0
              },
              Y: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0
              }
            },
          },
          {
            opcode: "glitchSprite",
            blockType: Scratch.BlockType.REPORTER,
            text: "apply glitch effect to [SPRITE] with offset x [X] y [Y] thickness [NUM] on [axis]",
            hideFromPalette: !sprite,
            arguments: {
              NUM: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 5
              },
              X: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0
              },
              Y: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0
              },
              axis: { type: Scratch.ArgumentType.STRING, menu: "AXISES" },
              SPRITE: { type: Scratch.ArgumentType.STRING, menu: "TARGETS" }
            },
          },
          {
            opcode: "glitchImage",
            blockType: Scratch.BlockType.REPORTER,
            text: "apply glitch effect to [SPRITE] with offset x [X] y [Y] thickness [NUM] on [axis]",
            hideFromPalette: sprite,
            arguments: {
              SPRITE: { type: Scratch.ArgumentType.STRING, defaultValue: "data URI or <svg content>" },
              axis: { type: Scratch.ArgumentType.STRING, menu: "AXISES" },
              NUM: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 5
              },
              X: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0
              },
              Y: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0
              }
            },
          },
          { blockType: Scratch.BlockType.LABEL, text: "Formatting" },
          {
            opcode: "outlineSprite",
            blockType: Scratch.BlockType.REPORTER,
            text: "add [OUTLINE] outline to [SPRITE] at [NUM]% colored [COLOR]",
            hideFromPalette: !sprite,
            arguments: {
              OUTLINE: { type: Scratch.ArgumentType.STRING, menu: "OUTLINES" },
              NUM: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 5
              },
              SPRITE: { type: Scratch.ArgumentType.STRING, menu: "TARGETS" },
              COLOR: { type: Scratch.ArgumentType.COLOR, defaultValue: "#ff0000" }
            },
          },
          {
            opcode: "outlineImage",
            blockType: Scratch.BlockType.REPORTER,
            text: "add [OUTLINE] outline to [SPRITE] at [NUM]% colored [COLOR]",
            hideFromPalette: sprite,
            arguments: {
              OUTLINE: { type: Scratch.ArgumentType.STRING, menu: "OUTLINES" },
              NUM: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 5
              },
              SPRITE: { type: Scratch.ArgumentType.STRING, defaultValue: "data URI or <svg content>" },
              COLOR: { type: Scratch.ArgumentType.COLOR, defaultValue: "#ff0000" }
            },
          },
          {
            opcode: "spriteShadow",
            blockType: Scratch.BlockType.REPORTER,
            text: "add shadow to [SPRITE] at x [X] y [Y] colored [COLOR] at [NUM]%",
            hideFromPalette: !sprite,
            arguments: {
              COLOR: { type: Scratch.ArgumentType.COLOR, defaultValue: "#ff0000" },
              SPRITE: { type: Scratch.ArgumentType.STRING, menu: "TARGETS" },
              X: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0
              },
              Y: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0
              },
              NUM: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 15
              }
            },
          },
          {
            opcode: "imageShadow",
            blockType: Scratch.BlockType.REPORTER,
            text: "add shadow to [SPRITE] at x [X] y [Y] colored [COLOR] at [NUM]%",
            hideFromPalette: sprite,
            arguments: {
              COLOR: { type: Scratch.ArgumentType.COLOR, defaultValue: "#ff0000" },
              SPRITE: { type: Scratch.ArgumentType.STRING, defaultValue: "data URI or <svg content>" },
              X: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0
              },
              Y: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0
              },
              NUM: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 15
              }
            },
          },
          "---",
          {
            opcode: "maskSprite",
            blockType: Scratch.BlockType.REPORTER,
            text: "mask [TYPE] [SPRITE2] from [SPRITE]",
            hideFromPalette: !sprite,
            arguments: {
              SPRITE: { type: Scratch.ArgumentType.STRING, menu: "TARGETS" },
              SPRITE2: { type: Scratch.ArgumentType.STRING, menu: "TARGETS" },
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "MASKING" }
            },
          },
          {
            opcode: "maskImage",
            blockType: Scratch.BlockType.REPORTER,
            text: "mask [TYPE] [SPRITE2] from [SPRITE]",
            hideFromPalette: sprite,
            arguments: {
              SPRITE: { type: Scratch.ArgumentType.STRING, defaultValue: "data URI or <svg content>" },
              SPRITE2: { type: Scratch.ArgumentType.STRING, defaultValue: "data URI or <svg content>" },
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "MASKING" }
            },
          },
          {
            opcode: "setMaskXY",
            blockType: Scratch.BlockType.COMMAND,
            text: "set mask x [x] y [y]",
            arguments: {
              x: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0
              },
              y: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0
              }
            },
          },
          {
            opcode: "setMaskSZ",
            blockType: Scratch.BlockType.COMMAND,
            text: "set mask size to [SIZE]%",
            arguments: {
              SIZE: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 100
              }
            },
          },
          {
            opcode: "maskATT",
            blockType: Scratch.BlockType.REPORTER,
            text: "current [ATT] of mask",
            disableMonitor: true,
            arguments: {
              ATT: { type: Scratch.ArgumentType.STRING, menu: "maskATTs" }
            },
          },
          "---",
          {
            opcode: "setXY",
            blockType: Scratch.BlockType.REPORTER,
            text: "set [SPRITE] x [x] y [y]",
            hideFromPalette: !sprite,
            arguments: {
              SPRITE: { type: Scratch.ArgumentType.STRING, menu: "TARGETS" },
              x: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0
              },
              y: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0
              }
            },
          },
          {
            opcode: "setXY2",
            blockType: Scratch.BlockType.REPORTER,
            text: "set [SPRITE] x [x] y [y]",
            hideFromPalette: sprite,
            arguments: {
              SPRITE: { type: Scratch.ArgumentType.STRING, defaultValue: "data URI or <svg content>" },
              x: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0
              },
              y: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0
              }
            },
          },
          {
            opcode: "setDIR",
            blockType: Scratch.BlockType.REPORTER,
            text: "point [SPRITE] in direction [DIR]",
            hideFromPalette: !sprite,
            arguments: {
              SPRITE: { type: Scratch.ArgumentType.STRING, menu: "TARGETS" },
              DIR: {
                type: Scratch.ArgumentType.ANGLE,
                defaultValue: 90
              }
            },
          },
          {
            opcode: "setDIR2",
            blockType: Scratch.BlockType.REPORTER,
            text: "point [SPRITE] in direction [DIR]",
            hideFromPalette: sprite,
            arguments: {
              SPRITE: { type: Scratch.ArgumentType.STRING, defaultValue: "data URI or <svg content>" },
              DIR: {
                type: Scratch.ArgumentType.ANGLE,
                defaultValue: 90
              }
            },
          },
          {
            opcode: "setSCALE",
            blockType: Scratch.BlockType.REPORTER,
            text: "stretch [SPRITE] to x [x] y [y]",
            hideFromPalette: !sprite,
            arguments: {
              SPRITE: { type: Scratch.ArgumentType.STRING, menu: "TARGETS" },
              x: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 100
              },
              y: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 100
              }
            },
          },
          {
            opcode: "setSCALE2",
            blockType: Scratch.BlockType.REPORTER,
            text: "stretch [SPRITE] to x [x] y [y]",
            hideFromPalette: sprite,
            arguments: {
              SPRITE: { type: Scratch.ArgumentType.STRING, defaultValue: "data URI or <svg content>" },
              x: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 100
              },
              y: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 100
              }
            },
          },
          {
            opcode: "setSKEW",
            blockType: Scratch.BlockType.REPORTER,
            text: "skew [SPRITE] to x [x] y [y]",
            hideFromPalette: !sprite,
            arguments: {
              SPRITE: { type: Scratch.ArgumentType.STRING, menu: "TARGETS" },
              x: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0
              },
              y: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0
              }
            },
          },
          {
            opcode: "setSKEW2",
            blockType: Scratch.BlockType.REPORTER,
            text: "skew [SPRITE] to x [x] y [y]",
            hideFromPalette: sprite,
            arguments: {
              SPRITE: { type: Scratch.ArgumentType.STRING, defaultValue: "data URI or <svg content>" },
              x: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0
              },
              y: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0
              }
            },
          },
          { blockType: Scratch.BlockType.LABEL, text: "Canvas Filters" },
          {
            func: "filterWarn",
            blockType: Scratch.BlockType.BUTTON,
            text: "Canvas Filter Warnings"
          },
          {
            opcode: "addCanvasFilter",
            blockType: Scratch.BlockType.COMMAND,
            text: "apply filter [FILTER] to canvas with name [NAME]",
            arguments: {
              FILTER: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "put a filter block/ here"
              },
              NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "filter-1"
              }
            },
          },
          {
            opcode: "removeCanvasFilter",
            blockType: Scratch.BlockType.COMMAND,
            text: "remove filter named [NAME] from canvas",
            arguments: {
              NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "filter-1"
              }
            },
          },
          {
            opcode: "removeAllFilters",
            blockType: Scratch.BlockType.COMMAND,
            text: "remove all canvas filters"
          }
        ],
        menus: {
          TARGETS: { acceptReporters: true, items: "_getTargets" },
          EFFECTS: {
            acceptReporters: true,
            items: [
              "blur",
              "saturation",
              "contrast",
              "sepia",
              "bloom",
              "amplify",
              "discrete",
              "thermal",
              "posterize",
              "inflate",
              "bevel",
              "liquify",
              "ripple",
              "erode",
              "torn",
              "disolve",
              "displacement",
              "grain"
            ],
          },
          maskATTs: {
            acceptReporters: false,
            items: [
              { "text" : "x position", "value" : "0" },
              { "text" : "y position", "value" : "1" },
              { "text" : "size", "value" : "2" }
            ]
          },
          OUTLINES: { acceptReporters: true, items: ["filled", "solid"] },
          AXISES: { acceptReporters: false, items: ["x axis", "y axis", "both axes"] },
          SPLITTING: { acceptReporters: true, items: ["color split", "abberation"] },
          MASKING: {
            acceptReporters: false,
            items: [{"text":"erase", "value":"out"}, {"text":"overlay", "value":" "}]
          },
          BLENDING: {
            acceptReporters: true,
            items: ["normal", "multiply", "screen", "overlay"]
          }
        },
      };
    }

    sourceSwitch() { sprite = sprite ? false : true, Scratch.vm.extensionManager.refreshBlocks() }
    filterWarn() {
      alert(`Unfortunately, not ALL effects (especially the Formatting Blocks) will work on the Canvas...
        \nDO NOT USE MASKING on the Canvas, masking is not built for a Canvas Element and will crash`);
    }

    setSpriteEffect(args) { return this.setMainEffect(args, false) }
    async setImageEffect(args) { return await this.setMainEffect(args, true) }

    setSpriteMotion(args) { return this.motionBlur(args, false) }
    async setImageMotion(args) { return await this.motionBlur(args, true) }

    setSpriteBlend(args) { return this.blendType(args, false) }
    async setImageBlend(args) { return await this.blendType(args, true) }

    hueSprite(args) { return this.setHue(args, false) }
    async hueImage(args) { return await this.setHue(args, true) }

    spriteShadow(args) { return this.addShadow(args, false) }
    async imageShadow(args) { return await this.addShadow(args, true) }

    outlineSprite(args) { return this.addOutline(args, false) }
    async outlineImage(args) { return await this.addOutline(args, true) }

    splitSprite(args) { return this.colorSplit(args, false) }
    async splitImage(args) { return await this.colorSplit(args, true) }

    waveSprite(args) { return this.waveEffect(args, false) }
    async waveImage(args) { return await this.waveEffect(args, true) }

    bulgeSprite(args) { return this.setBulge(args, false) }
    async bulgeImage(args) { return await this.setBulge(args, true) }

    glitchSprite(args) { return this.setGlitch(args, false) }
    async glitchImage(args) { return await this.setGlitch(args, true) }

    maskSprite(args) { return this.mask(args, false) }
    async maskImage(args) { return await this.mask(args, true) }

    setXY(args) { return this.setATT(args, false, 0) }
    async setXY2(args) { return await this.setATT(args, true, 0) }
    setDIR(args) { return this.setATT(args, false, 1) }
    async setDIR2(args) { return await this.setATT(args, true, 1) }
    setSCALE(args) { return this.setATT(args, false, 2) }
    async setSCALE2(args) { return await this.setATT(args, true, 2) }
    setSKEW(args) { return this.setATT(args, false, 3) }
    async setSKEW2(args) { return await this.setATT(args, true, 3) }

    setMaskXY(args) { maskOptions[0] = Scratch.Cast.toNumber(args.x); maskOptions[1] = Scratch.Cast.toNumber(args.y) * -1 }
    setMaskSZ(args) { maskOptions[2] = Scratch.Cast.toNumber(args.SIZE) }
    maskATT(args) { return maskOptions[args.ATT] }

    async setMainEffect(args, isImage) {
      let svg = isImage ? await this.getImage(args.SPRITE) : await this.getSVG(args.SPRITE);
      if (svg) {
        let filterElement;
        let amtIn = args.NUM;
        let scaleFactor;
        let tableValue;
        switch (args.EFFECT) {
          case "saturation":
            filterElement = `<filter id="saturation"><feColorMatrix type="saturate" values="${amtIn / 100}"></feColorMatrix></filter>`;
            break;
          case "sepia":
            scaleFactor = amtIn / 100;
            filterElement = `<filter id="sepia"><feColorMatrix type="matrix" values="${0.393 * scaleFactor} ${0.769 * scaleFactor} ${0.189 * scaleFactor} 0 0 ${0.349 * scaleFactor} ${0.686 * scaleFactor} ${0.168 * scaleFactor} 0 0 ${0.272 * scaleFactor} ${0.534 * scaleFactor} ${0.131 * scaleFactor} 0 0 0 0 0 1 0"></feColorMatrix></filter>`;
            break;
          case "contrast":
            amtIn = amtIn + 100;
            filterElement = `<filter id="contrast"><feComponentTransfer><feFuncR type="linear" slope="${amtIn / 100}"></feFuncR><feFuncG type="linear" slope="${amtIn / 100}"></feFuncG><feFuncB type="linear" slope="${amtIn / 100}"></feFuncB></feComponentTransfer></filter>`;
            break;
          case "inflate":
            filterElement = `<filter id="inflate"><feMorphology in="SourceGraphic" operator="dilate" radius="${Math.abs(amtIn / 10)}"></feMorphology></filter>`;
            break;
          case "amplify":
            amtIn = amtIn + 100;
            filterElement = `<filter id="amplify"><feComponentTransfer><feFuncR type="gamma" exponent="${amtIn / 100}" amplitude="${amtIn / 100}" offset="0" /><feFuncG type="gamma" exponent="${amtIn / 100}" amplitude="${amtIn / 100}" offset="0" /><feFuncB type="gamma" exponent="${amtIn / 100}" amplitude="${amtIn / 100}" offset="0" /></feComponentTransfer></filter>`
            break;
          case "discrete":
            filterElement = `<filter id="discrete"><feComponentTransfer><feFuncR type="discrete" tableValues="0 ${amtIn / 100} 0 1"/><feFuncG type="discrete" tableValues="0 ${amtIn / 100} 0 1"/><feFuncB type="discrete" tableValues="0 ${amtIn / 100} 0 1"/><feFuncA type="discrete" tableValues="0 ${amtIn / 100} 0 1"/></feComponentTransfer></filter>`
            break;
          case "torn":
            filterElement = `<filter id="torn"><feOffset in="SourceGraphic" dx="${amtIn / -4}" dy="${amtIn / -4}" result="offsetRes" /><feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="2" result="turbulence" /><feDisplacementMap in2="turbulence" in="offsetRes" scale="${amtIn}" xChannelSelector="R" yChannelSelector="G" /></filter>`;
            break;
          case "bevel":
            filterElement = `<filter id="bevel"><feGaussianBlur stdDeviation="${Math.abs(args.NUM / 10)}" in="SourceAlpha" result="BLUR"/><feSpecularLighting surfaceScale="2" specularConstant="2" specularExponent="20" lighting-color="#ffffff" in="BLUR" result="SPECULAR"><fePointLight x="40" y="-30" z="50" /></feSpecularLighting><feComposite operator="in" in="SPECULAR" in2="SourceAlpha" result="COMPOSITE"/><feMerge><feMergeNode in="SourceGraphic" /><feMergeNode in="COMPOSITE"/></feMerge></filter>`;
            break;
          case "liquify":
            filterElement = `<filter id="liquify" width="150%" height="160%" x="-25%" y="-25%"><feTurbulence baseFrequency="0.05" type="fractalNoise" numOctaves="1" seed="${Math.round(Math.abs(Math.sin(Date.now() / 5) * 10))}" result="BOTTOM-SPLASH_10"></feTurbulence><feGaussianBlur stdDeviation="${amtIn}" in="SourceGraphic" result="BOTTOM-SPLASH_20"></feGaussianBlur><feDisplacementMap scale="${amtIn * 10}" in="BOTTOM-SPLASH_20" in2="BOTTOM-SPLASH_10" result="BOTTOM-SPLASH_30"></feDisplacementMap><feComposite operator="in" in="BOTTOM-SPLASH_30" in2="SourceGraphic" result="BOTTOM-SPLASH_40"></feComposite><feTurbulence baseFrequency="0.1" type="fractalNoise" numOctaves="1" seed="${Math.round(Math.abs(Math.sin(Date.now() / 5) * 10))}" result="MIDDLE-SPLASH_10"></feTurbulence><feGaussianBlur in="SourceGraphic" stdDeviation="${amtIn * 0.01}" result="MIDDLE-SPLASH_20"></feGaussianBlur><feDisplacementMap in="MIDDLE-SPLASH_20" in2="MIDDLE-SPLASH_10" scale="${amtIn * 2.5}" result="MIDDLE-SPLASH_30"></feDisplacementMap><feComposite in="MIDDLE-SPLASH_30" in2="SourceGraphic" operator="in" result="MIDDLE-SPLASH_40"></feComposite><feTurbulence baseFrequency="0.07" type="fractalNoise" numOctaves="1" seed="${Math.round(Math.abs(Math.sin(Date.now() / 5) * 10))}" result="TOP-SPLASH_10"></feTurbulence><feGaussianBlur stdDeviation="${amtIn * 0.035}" in="SourceGraphic" result="TOP-SPLASH_20"></feGaussianBlur><feDisplacementMap scale="${amtIn * 22}" in="TOP-SPLASH_20" in2="TOP-SPLASH_10" result="TOP-SPLASH_30"></feDisplacementMap><feComposite operator="in" in="TOP-SPLASH_30" in2="SourceGraphic" result="TOP-SPLASH_40"></feComposite></filter>`;
            break;
          case "ripple":
            if (!displacementSrCs[2]) await this.getSources();
            scaleFactor = (amtIn * 1.5).toFixed(2);
            tableValue = [100 + 2 * (100 - amtIn) / 2];
            tableValue[1] = (100 - tableValue[0]) / 2;
            filterElement = `<filter id="ripple" xmlns:xlink="http://www.w3.org/1999/xlink"><feImage xlink:href="${displacementSrCs[2]}" x="${tableValue[1]}%" y="${tableValue[1]}%" width="${tableValue[0]}%" height="${tableValue[0]}%" result="rippleImage" /><feDisplacementMap xChannelSelector="R" yChannelSelector="G" in="SourceGraphic" in2="rippleImage" result="displacementMap" color-interpolation-filters="sRGB" scale="${amtIn}" /><feComposite operator="in" in2="rippleImage"></feComposite><feComposite operator="over" in2="SourceGraphic"></feComposite></filter>`;
            break;
          case "thermal":
            tableValue = [`0 0.125 ${0.8 * (amtIn / 10)} ${1 * (amtIn / 10)} ${1 * (amtIn / 10)}`, `0 0 0 ${0.843 * (amtIn / 10)} 1`, `0 ${0.549 * (amtIn / 10)} ${0.466 * (amtIn / 10)} 0 1`];
            filterElement = `<filter id="thermal" color-interpolation-filters="sRGB"><feComponentTransfer><feFuncR type="table" tableValues="${tableValue[0]}" /><feFuncG type="table" tableValues="${tableValue[1]}" /><feFuncB type="table" tableValues="${tableValue[2]}" /></feComponentTransfer></filter>`;
            break;
          case "erode":
            filterElement = `<filter id="erode"><feMorphology in="SourceGraphic" operator="erode" radius="${Math.abs(amtIn / 10)}"></feMorphology></filter>`;
            break;
          case "disolve":
            filterElement = `<filter id="disolve"><feTurbulence baseFrequency="0.1" type="fractalNoise" numOctaves="5" result="TURBULENCE"/><feDisplacementMap in="SourceGraphic" in2="TURBULENCE" scale="${amtIn}" xChannelSelector="R" yChannelSelector="G"/><feTile result="TILED"/><feComposite operator="in" in="TILED" in2="SourceGraphic"/></filter>`;
            break;
          case "posterize":
            filterElement = `<filter id="posterize"><feComponentTransfer><feFuncR type="discrete" tableValues="0 ${amtIn / 100} 1" /><feFuncG type="discrete" tableValues="0 ${amtIn / 100} 1" /><feFuncB type="discrete" tableValues="0 ${amtIn / 100} 1" /></feComponentTransfer></filter>`;
            break;
          case "displacement":
            amtIn = amtIn === 64 ? 65 : amtIn;
            filterElement = `<filter id="displacement"><feTurbulence type="fractalNoise" baseFrequency="${(1000000 - (Math.abs(amtIn - 100) * 10000)) / 100}" numOctaves="2" seed="${Math.round(Math.random() * 100)}" result="turbulence" /><feDisplacementMap in="SourceGraphic" in2="turbulence" scale="25" xChannelSelector="R" yChannelSelector="G" /></filter>`;
            break;
          case "grain":
            if (amtIn === 0) return svg;
            filterElement = `<filter id="grain"><feTurbulence type="fractalNoise" baseFrequency="${amtIn / 100}" numOctaves="3" result="turbulence" seed="${Math.round(10 * (Math.sin(Date.now() * 50)))}" /><feColorMatrix in="turbulence" type="saturate" values="0" result="grain" /><feComposite in="grain" in2="SourceGraphic" operator="in" /><feComposite in="0.5" in2="SourceGraphic" operator="over" /></filter>`;
            break;
          case "bloom":
            filterElement = `<filter id="bloom"><feGaussianBlur in="SourceGraphic" stdDeviation="5" /><feComposite in2="SourceGraphic" operator="arithmetic" k2="${amtIn / 100}" k3="1" /></filter>`;
            break;
          default:
            filterElement = `<filter id="blur"><feGaussianBlur stdDeviation="${Math.abs(amtIn)}" in="SourceGraphic" result="BLUR"></feGaussianBlur></filter>`;
        }
        return this.filterApplier(svg, filterElement, args.EFFECT);
      }
      return svg;
    }

    async motionBlur(args, isImage) {
      let svg = isImage ? await this.getImage(args.SPRITE) : await this.getSVG(args.SPRITE);
      if (svg) {
        const filterElement = `<filter id="motionBlur"><feGaussianBlur stdDeviation="${Math.abs(args.X)}, ${Math.abs(args.Y)}" in="SourceGraphic" result="BLUR"></feGaussianBlur></filter>`;
        return this.filterApplier(svg, filterElement, "motionBlur");
      }
      return svg;
    }

    async blendType(args, isImage) {
      let svg = isImage ? await this.getImage(args.SPRITE) : await this.getSVG(args.SPRITE);
      if (svg) {
        const filterElement = `<filter id="blend${args.BLEND}">
          <feFlood result="floodFill" flood-color="black" />
          <feBlend in="SourceGraphic" in2="SourceGraphic" mode="${args.BLEND}" /></filter>`;
        return this.filterApplier(svg, filterElement, `blend${args.BLEND}`);
      }
      return svg;
    }

    async setHue(args, isImage) {
      let targetColorHex = args.COLOR;
      let svg = isImage ? await this.getImage(args.SPRITE) : await this.getSVG(args.SPRITE);
      if (svg) {
        targetColorHex = targetColorHex.replace(/^#/, "");
        const r = parseInt(targetColorHex.slice(0, 2), 16);
        const g = parseInt(targetColorHex.slice(2, 4), 16);
        const b = parseInt(targetColorHex.slice(4, 6), 16);
        const filterValues = [
          r / 255, 0, 0, 0, 0,
          0, g / 255, 0, 0, 0,
          0, 0, b / 255, 0, 0,
          0, 0, 0, 1, 0
        ];
        const filterMatrix = filterValues.join(" ");
        const filterElement = `<filter id="hue"><feColorMatrix in="SourceGraphic" type="matrix" values="${filterMatrix}"></feColorMatrix></filter>`;
        return this.filterApplier(svg, filterElement, "hue");
      }
      return svg;
    }

    async addShadow(args, isImage) {
      let svg = isImage ? await this.getImage(args.SPRITE) : await this.getSVG(args.SPRITE);
      if (svg) {
        const rgbColor = this.hexToRgb(args.COLOR);
        const filterElement = `<filter id="shadow"><feDropShadow dx="${args.X}" dy="${args.Y * -1}" stdDeviation="${args.NUM / 2}" flood-color="rgb(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b})"/></filter>`;
        return this.filterApplier(svg, filterElement, "shadow");
      }
      return svg;
    }

    async addOutline(args, isImage) {
      let svg = isImage ? await this.getImage(args.SPRITE) : await this.getSVG(args.SPRITE);
      if (svg) {
        let filterElement;
        let amtIn = args.NUM;
        const rgbColor = this.hexToRgb(args.COLOR);
        let effect;
        if (args.OUTLINE === "filled") {
          effect = "filled-outline";
          filterElement = `<filter id="filled-outline"><feMorphology operator="dilate" radius="${amtIn}" in="SourceAlpha" result="thickened" /><feComposite operator="over" in="SourceGraphic" in2="thickened" /><feFlood flood-color="rgb(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b})" result="flood"/><feComposite operator="in" in="flood" in2="thickened"/><feComposite operator="over" in="SourceGraphic" /></filter>`
        } else {
          effect = "outline";
          filterElement = `<filter id="outline"><feMorphology operator="dilate" radius="${amtIn}" in="SourceAlpha" result="thickened" /><feComposite operator="over" in="SourceGraphic" in2="thickened" /><feFlood flood-color="rgb(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b})" result="flood"/><feComposite operator="in" in="flood" in2="thickened"/></filter>`;
        }
        return this.filterApplier(svg, filterElement, effect);
      }
      return svg;
    }

    async colorSplit(args, isImage) {
      let svg = isImage ? await this.getImage(args.SPRITE) : await this.getSVG(args.SPRITE);
      if (svg) {
        let filterElement;
        let effect;
        if (args.EFFECT.includes("color")) {
          effect = "color-split";
          filterElement = `<filter id="color-split"><feFlood flood-color="${args.COLOR1}" flood-opacity="0.5" result="RED"/><feFlood flood-color="${args.COLOR2}" flood-opacity="0.5" result="GREEN"/><feFlood flood-color="${args.COLOR3}" flood-opacity="0.5" result="BLUE"/><feComposite operator="in" in="RED" in2="SourceAlpha" result="RED"/><feComposite operator="in" in="GREEN" in2="SourceAlpha" result="GREEN"/><feComposite operator="in" in="BLUE" in2="SourceAlpha" result="BLUE"/><feOffset in="RED" dx="${args.X * -1}" dy="${args.Y}" result="RED_OFF"/><feOffset in="GREEN" dx="${args.X}" dy="${args.Y * -1}" result="GREEN_OFF"/><feOffset in="BLUE" dx="0" dy="0" result="BLUE_OFF"/><feBlend mode="screen" in="RED_OFF" in2="GREEN_OFF" result="RG"/><feBlend mode="screen" in="RG" in2="BLUE_OFF" result="FINAL_RESULT"/></filter>`;
        } else {
          effect = "abberation";
          filterElement = `<filter id="abberation"><feFlood flood-color="${args.COLOR1}" flood-opacity="0.5" result="RED"/><feFlood flood-color="${args.COLOR2}" flood-opacity="0.5" result="GREEN"/><feComposite operator="in" in="SourceGraphic" in2="SourceAlpha" result="BLUE" /><feComposite operator="in" in="RED" in2="SourceAlpha" result="RED"/><feComposite operator="in" in="GREEN" in2="SourceAlpha" result="GREEN"/><feComposite operator="in" in="BLUE" in2="SourceAlpha" result="BLUE"/><feOffset in="RED" dx="${args.X * -1}" dy="${args.Y}" result="RED_OFF"/><feOffset in="GREEN" dx="${args.X}" dy="${args.Y * -1}" result="GREEN_OFF"/><feOffset in="BLUE" dx="0" dy="0" result="BLUE_OFF"/><feBlend mode="screen" in="RED_OFF" in2="GREEN_OFF" result="RG"/><feBlend mode="screen" in="RG" in2="BLUE_OFF" result="FINAL_RESULT"/><feComposite operator="over" in="SourceGraphic" in2="FINAL_RESULT" /></filter>`;
        }
        return this.filterApplier(svg, filterElement, effect);
      }
      return svg;
    }

    async waveEffect(args, isImage) {
      let svg = isImage ? await this.getImage(args.SPRITE) : await this.getSVG(args.SPRITE);
      if (svg) {
        const ChannelSelector = [args.axis === "x axis" ? "A" : "R", args.axis === "y axis" ? "A" : "G"];
        const filterElement = `<filter id="wave"><feTurbulence type="fractalNoise" baseFrequency="${args.NUM / 100}" numOctaves="2" seed="${args.SEED}" result="turbulence" /><feDisplacementMap in="SourceGraphic" in2="turbulence" scale="25" xChannelSelector="${ChannelSelector[0]}" yChannelSelector="${ChannelSelector[1]}" /></filter>`;
        return this.filterApplier(svg, filterElement, "wave");
      }
      return svg;
    }

    async setBulge(args, isImage) {
      let svg = isImage ? await this.getImage(args.SPRITE) : await this.getSVG(args.SPRITE);
      if (svg) {
        //fix centering
        const filterElement = `<filter id="bulge" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="linearRGB">
          <feOffset dx="${args.NUM / -2}" dy="${args.NUM / -2}" x="0%" y="0%" width="100%" height="100%" in="displacementMap" result="offset"/>
          <feImage xlink:href="https://raw.githubusercontent.com/SharkPool-SP/SharkPools-Extensions/main/extension-code-assets/SE-bulge.png" x="${66 + args.X}" y="${66 - args.Y}" width="500" height="500" preserveAspectRatio="xMidYMid meet" crossOrigin="anonymous" result="image"/>
          <feDisplacementMap in="offset" in2="image" scale="${args.NUM}" xChannelSelector="R" yChannelSelector="B" x="0%" y="0%" width="100%" height="100%" result="displacementMap"/>
          </filter>`;
        return this.filterApplier(svg, filterElement, "bulge");
      }
      return svg;
    }

    async setGlitch(args, isImage) {
      let svg = isImage ? await this.getImage(args.SPRITE) : await this.getSVG(args.SPRITE);
      if (svg) {
        const filterElement = `<filter id="glitch"><feOffset in="SourceGraphic" dx="${args.X}" dy="${args.Y}" result="off1b"/><feOffset in="SourceGraphic" dx="-${args.X}" dy="${args.Y}" result="off2b"/>
          <feMerge ${args.axis.includes("x") ? `x="-50%" y="${Math.random() * 100}%"` : args.axis.includes("y") ? `x="${Math.random() * 100}%" y="-50%"` : `x="${Math.random() * 100}%" y="${Math.random() * 100}%"`}
            width="${args.axis.includes("x") || args.axis === "both axes" ? "200%" : args.NUM + "%"}" height="${args.axis.includes("y") || args.axis === "both axes" ? "200%" : args.NUM + "%"}" result="merge1">
            <feMergeNode in="SourceGraphic" /><feMergeNode in="off1b" /></feMerge><feColorMatrix in="merge1" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 ${Math.random() * 0.5 + 0.5} 0" result="tinted1"/>
          <feMerge ${args.axis.includes("x") ? `x="-50%" y="${Math.random() * 100}%"` : args.axis.includes("y") ? `x="${Math.random() * 100}%" y="-50%"` : `x="${Math.random() * 100}%" y="${Math.random() * 100}%"`} 
            width="${args.axis.includes("x") || args.axis === "both axes" ? "200%" : args.NUM + "%"}" height="${args.axis.includes("y") || args.axis === "both axes" ? "200%" : args.NUM + "%"}" result="merge2">
            <feMergeNode in="SourceGraphic" /><feMergeNode in="off2b" /></feMerge><feColorMatrix in="merge2" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 ${Math.random() * 0.5 + 0.5} 0" result="tinted2"/>
          <feMerge><feMergeNode in="SourceGraphic" /><feMergeNode in="tinted1" /><feMergeNode in="tinted2" /></feMerge></filter>`;
	      return this.filterApplier(svg, filterElement, "glitch");
      }
      return svg;
    }

    async mask(args, isImage) {
      let svg = isImage ? await this.getImage(args.SPRITE) : await this.getSVG(args.SPRITE);
      let svg2 = isImage ? await this.getImage(args.SPRITE2) : await this.getSVG(args.SPRITE2);
      if (svg && svg2) {
        const name = args.TYPE === " " ? "maskOver" : "maskRemove";
        const filterElement = `<filter id="${name}" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="linearRGB">
        	<feImage xlink:href="${`data:image/svg+xml;base64,${btoa(svg2)}`}" x="${maskOptions[0]}" y="${maskOptions[1]}" width="${maskOptions[2]}%" height="${maskOptions[2]}%" preserveAspectRatio="xMidYMid meet" crossOrigin="anonymous" result="image1"/>
        	<feComposite in="${args.TYPE !== " " ? "SourceGraphic" : "image1"}" in2="${args.TYPE !== " " ? "image1" : "SourceGraphic"}" operator="${args.TYPE}" x="0%" y="0%" width="100%" height="100%" result="composite1"/></filter>`;
	      return this.filterApplier(svg, filterElement, name);
      }
      return svg;
    }

    async setATT(args, isImage, type) {
      let svg = isImage ? await this.getImage(args.SPRITE) : await this.getSVG(args.SPRITE);
      if (svg) {
        // Note: We Do Not Check if Translate Exists Since We Override it
        let transform = "";
        const currentTranslate = /translate\(([^,]+),([^)]+)\)/.exec(svg);
        const currentX = currentTranslate ? parseFloat(currentTranslate[1]) : 0;
        const currentY = currentTranslate ? parseFloat(currentTranslate[2]) : 0;

        const widthMatch = /width="([^"]*)"/.exec(svg);
        const heightMatch = /height="([^"]*)"/.exec(svg);
        const width = widthMatch ? parseFloat(widthMatch[1]) : 0;
        const height = heightMatch ? parseFloat(heightMatch[1]) : 0;

        const x = Scratch.Cast.toNumber(args.x ? args.x : 0) / 100;
        const y = Scratch.Cast.toNumber(args.y ? args.y : 0) / 100;
        if (type === 0) {
          const newPos = [currentX + (x * 100), currentY + (y * -100)];
          return svg.replace(/translate\([^\)]*\)/, `translate(${newPos[0]},${newPos[1]})`);
        } else if (type === 1) {
          if (svg.includes("style=\"transform-origin: center; transform:")) {
            svg = svg.replace(/(style="[^"]*transform:[^"]*)/, `$1 rotate(${Scratch.Cast.toNumber(args.DIR) - 90}deg)`);
          } else {
            svg = svg.replace(`width="${width}" height="${height}"`, `width="${width}" height="${height}" style="transform-origin: center; transform: rotate(${Scratch.Cast.toNumber(args.DIR) - 90}deg)"`);
          }
        } else if (type === 2) {
          svg = svg.replace(`width="${width}" height="${height}"`, `width="${width * Math.abs(x)}" height="${height * Math.abs(y)}"`);
          svg = svg.replace(`viewBox="0,0,${width},${height}"`, `viewBox="0,0,${width * Math.abs(x)},${height * Math.abs(y)}"`);
          svg = svg.replace(`(${currentX},`, `(${currentX * (x) + (args.x < 0 ? width * Math.abs(x) : 0)},`);
          svg = svg.replace(`,${currentY})`, `,${currentY * (y) + (args.y < 0 ? height * Math.abs(y) : 0)})`);
          transform = `scale(${x}, ${y})`;
        } else {
          if (svg.includes("style=\"transform-origin: center; transform:")) {
            svg = svg.replace(/(style="[^"]*transform:[^"]*)/, `$1 skew(${args.x}deg, ${args.y}deg)`);
          } else {
            svg = svg.replace(`width="${width}" height="${height}"`, `width="${width}" height="${height}" style="transform-origin: center; transform: skew(${args.x}deg, ${args.y}deg)"`);
          }
        }
        const currentTransform = /transform="([^"]*)"/.exec(svg);
        const existingTransform = currentTransform ? currentTransform[1] : "";
        const newTransform = existingTransform ? `${existingTransform} ${transform}` : transform;
        return svg.replace(/transform="([^"]*)"/, `transform="${newTransform}"`);
      }
      return svg;
    }

    addCanvasFilter(args) {
      args.NAME = Scratch.Cast.toString(args.NAME).replaceAll(" ", "_");
      const filter = args.FILTER;
      const filterRegex = /<filter(?:\s[^>]*)?>((?:.|\n)*?)<\/filter>/i;
      const match = filter.match(filterRegex);
      if (match && match[1]) {
        const filterID = args.NAME;
        const filterExists = document.getElementById(filterID);
        if (filterExists) {
          filterExists.innerHTML = match[1];
          return;
        }
        const svgFilter = document.createElementNS("http://www.w3.org/2000/svg", "filter");
        svgFilter.id = filterID;
        svgFilter.innerHTML = match[1];
        document.body.appendChild(svgFilter);
        allFilters.push(filterID);
        const existingFilter = Scratch.renderer.canvas.parentNode.parentNode.parentNode.style.filter;
        const filterString = existingFilter ? `${existingFilter} url(#${filterID})` : `url(#${filterID})`;
        Scratch.renderer.canvas.parentNode.parentNode.parentNode.style.filter = filterString;
      } else {
        console.error("Invalid Filter, Cancelled Application");
      }
    }

    removeCanvasFilter(args) {
      args.NAME = Scratch.Cast.toString(args.NAME).replaceAll(" ", "_");
      const canvas = Scratch.renderer.canvas.parentNode.parentNode.parentNode;
      if (canvas.style.filter.includes(`url("#${args.NAME}")`)) {
        canvas.style.filter = canvas.style.filter.replace(`url(#${args.NAME})`, "").trim();
        const array = canvas.style.filter.split(" ");
        if (array.length === 1 && canvas.style.filter.includes(args.NAME)) canvas.style.filter = "";
        const filterSel = document.getElementById(args.NAME);
        if (filterSel) {
          document.body.removeChild(filterSel);
          allFilters.splice(allFilters.indexOf(args.NAME), 1);
        }
      } else {
        console.error("Filter not found, Cancelled Deletion");
      }
    }

    removeAllFilters(args) {
      for (let i = 0; i < allFilters.length; i++) {
        const filterSel = document.getElementById(allFilters[i]);
        if (filterSel) document.body.removeChild(filterSel);
      }
      Scratch.renderer.canvas.parentNode.parentNode.parentNode.style.filter = "";
      allFilters = [];
    }

    async getSVG(targetArgs) {
      const target = targetArgs === "Stage" ? runtime.getTargetForStage() : runtime.getSpriteTargetByName(targetArgs);
      if (!target) return "";
      const costume = target.getCostumes()[target.currentCostume];
      //if bitmap, convert to svg
      if (costume.dataFormat === "png") {
        return await this.getImage(costume.asset.encodeDataURI());
      } else {
        return costume.asset.decodeText();
      }
    }

    async getImage(image) {
      if (image.startsWith("data:image/")) {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => {
            const width = img.width;
            const height = img.height;
            const svg = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
              width="${width / 2}" height="${(height / 2) + 0.001}" viewBox="0,0,${width / 2},${(height / 2) + 0.001}">
              <g transform="translate(${img.offsetLeft / -2},${img.offsetTop / -2})"><g data-paper-data="{&quot;isPaintingLayer&quot;:true}" fill="none" 
              fill-rule="nonzero" stroke="none" stroke-width="0.5" stroke-linecap="butt" stroke-linejoin="miter" 
              stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" style="mix-blend-mode: normal">
              <image x="0" y="0" transform="scale(0.5,0.5)" width="${width}" height="${height + 0.002}" 
              xlink:href="${img.src}"/></g></g></svg>`;
            resolve(svg);
          };
          img.onerror = reject;
          img.src = image;
        });
      } else {
        return image;
      }
    }

    _getTargets() {
      const spriteNames = [];
      const targets = Scratch.vm.runtime.targets;
      for (let index = 0; index < targets.length; index++) {
        const target = targets[index];
        if (target.isOriginal) spriteNames.push(target.getName());
      }
      return spriteNames.length > 0 ? spriteNames : [""];
    }

    hexToRgb(hex) {
      hex = hex.replace(/^#/, "");
      const bigint = parseInt(hex, 16);
      return {"r" : (bigint >> 16) & 255, "g" :(bigint >> 8) & 255, "b" : bigint & 255};
    }

    filterApplier(svg, filter, name) {
      filterNameOffset++;
      let svgTag = svg.indexOf(">");
      if (svgTag !== -1) {
        let url = `filter="url(#${name})"`;
        if (svg.includes("filter=\"url(")) {
          const regex = /filter="url\(\#[^"]+\)"/g;
          const existingFilters = svg.match(regex);
          if (existingFilters) {
            const filterString = existingFilters.join(" ").slice(0, -1);
            url = `${filterString} url(#${name})"`;
            svg = svg.replace(regex, "");
          }
        }
        svgTag = svg.indexOf(">");
        const appliedSVG = `${svg.substring(0, svgTag)} ${url}>${filter.slice(0, -1)}${svg.slice(svgTag)}`;
        return appliedSVG.replaceAll(name, `${name}${filterNameOffset}`);
      }
      return svg;
    }

    async getSources() {
      // we shouldnt ask for permission since its for a trusted, static function
      const link = "https://raw.githubusercontent.com/SharkPool-SP/SharkPools-Extensions/main/extension-sourceFeed/";
      try {
        displacementSrCs = [
          await (await fetch(link + "SE-bulge.txt")).text(),
          await (await fetch(link + "SE-whirl.txt")).text(),
          await (await fetch(link + "SE-ripple.txt")).text(),
        ];
      } catch (error) { console.error("Error fetching resources: ", error) }
    }
  }

  Scratch.extensions.register(new SPspriteEffects());
})(Scratch);
