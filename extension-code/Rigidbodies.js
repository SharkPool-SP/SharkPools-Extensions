// Name: Rigid Bodies
// ID: SPrigidBody
// Description: Fast Collisions using Math-Based Rigidbodies!
// By: SharkPool
// Licence: MIT

// Version V.1.0.1

(function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) throw new Error("Rigid Bodies must run unsandboxed!");

  const menuIconURI =
"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTYuNDA3IiBoZWlnaHQ9IjExNi40MDciIHZpZXdCb3g9IjAgMCAxMTYuNDA3IDExNi40MDciPjxnIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIj48cGF0aCBkPSJNMCA1OC4yMDRDMCAyNi4wNTkgMjYuMDU4LjAwMSA1OC4yMDMuMDAxczU4LjIwNCAyNi4wNTggNTguMjA0IDU4LjIwMy0yNi4wNiA1OC4yMDQtNTguMjA0IDU4LjIwNFMwIDkwLjM0OCAwIDU4LjIwNCIgZmlsbD0iIzM0Njg3ZCIvPjxwYXRoIGQ9Ik02LjY4NyA1OC4yMDRjMC0yOC40NTEgMjMuMDY1LTUxLjUxNiA1MS41MTYtNTEuNTE2czUxLjUxNiAyMy4wNjYgNTEuNTE2IDUxLjUxNi0yMy4wNjYgNTEuNTE2LTUxLjUxNiA1MS41MTZTNi42ODcgODYuNjU0IDYuNjg3IDU4LjIwNCIgZmlsbD0iIzRhOTNiMCIvPjxwYXRoIGQ9Ik0yMy4yODQgNDguMDk2YzAtMTMuMTk1IDEwLjY5Ny0yMy44OTIgMjMuODkyLTIzLjg5MnMyMy44OTIgMTAuNjk3IDIzLjg5MiAyMy44OTItMTAuNjk3IDIzLjg5Mi0yMy44OTIgMjMuODkyLTIzLjg5Mi0xMC42OTctMjMuODkyLTIzLjg5MiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik00NS4zMzggNjguMzEyYzAtMTMuMTk1IDEwLjY5Ny0yMy44OTIgMjMuODkyLTIzLjg5MnMyMy44OTIgMTAuNjk3IDIzLjg5MiAyMy44OTJTODIuNDI1IDkyLjIwNCA2OS4yMyA5Mi4yMDQgNDUuMzM4IDgxLjUwNyA0NS4zMzggNjguMzEyIiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTcxLjA2OCA0OC4wOTZjMCAxMy4xOTUtMTAuNjk3IDIzLjg5Mi0yMy44OTIgMjMuODkycS0uNzg4IDAtMS41NjUtLjA1YTI0IDI0IDAgMCAxLS4yNzMtMy42MjZjMC0xMy4xOTUgMTAuNjk3LTIzLjg5MiAyMy44OTItMjMuODkycS43ODggMCAxLjU2NS4wNWEyNCAyNCAwIDAgMSAuMjczIDMuNjI2IiBmaWxsPSIjNGE5M2IwIi8+PC9nPjwvc3ZnPg==";

  const Cast = Scratch.Cast;
  const vm = Scratch.vm;
  const runtime = vm.runtime;
  const isPM = Scratch.extensions.isPenguinMod;
  const isEditor = typeof scaffolding === "undefined";

  const bodyTypes = ["square", "circle", "triangle", "hexagon"];
  const defaultBlock = {
    opcode: "body...", text: "...",
    blockType: Scratch.BlockType.REPORTER
  };

  const bodyMonitors = Object.create(null);
  let bodies = Object.create(null);
  let blocks = [];
  let hideBlocks = true;

  const radianConverter = Math.PI / 180;
  const defaultBody = {
    type: "square", x: 0, y: 0,
    scale: [1, 1], dir: 0, circAccuracy: 20
  };

  // Internals & Monitors
  function updateAllBodyMonitors() {
    if (!isEditor) return;
    const monitorBlocks = runtime.monitorBlocks._blocks;
    const entries = Object.entries(bodyMonitors);
    for (let i = 0; i < entries.length; i++) {
      const entry = entries[i];
      const body = bodies[entry[0]];
      const div = entry[1];
      const isShowing = monitorBlocks[`SPrigidBody_body${entry[0]}`]?.isMonitored;
      if (!isShowing || !body) {
        vm.renderer.removeOverlay(div);
        delete bodyMonitors[entry[0]];
        return;
      }
      div.style.left = `${body.x}px`; div.style.top = `${body.y * -1}px`;
      div.firstChild.style.transform = `rotate(${body.dir}deg) scale(${body.scale[0]}, ${body.scale[1]})`;
    }
  }

  if (isEditor) {
    ReduxStore.subscribe(() => {
      // our 'monitors' should show the rigid body instead
      const monitors = document.querySelectorAll(`div[data-id^="SPrigidBody_body"][class*="monitor"]`);
      for (let i = 0; i < monitors.length; i++) {
        const monitor = monitors[i];
        if (monitor.style.display === "none") continue;
        monitor.style.display = "none";
        const name = monitor.getAttribute("data-id").replace("SPrigidBody_body", "");
        const body = bodies[name];
        if (!body) continue;
        vm.renderer.removeOverlay(bodyMonitors[name]);

        const bodyHolder = document.createElement("div");
        bodyHolder.style.transform = "translate(-50%, -50%)";
        bodyHolder.style.position = "absolute";
        const bodyShape = document.createElement("svg");
        bodyShape.id = "SPrigidBody_display";
        bodyHolder.appendChild(bodyShape);
        bodyMonitors[name] = bodyHolder;
        vm.renderer.addOverlay(bodyHolder, "scale-centered");

        let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">`;
        if (body.type === "square") svg += `<g fill="#00f"><path d="M5.068 94.931V5.068h89.863v89.863z" fill-opacity=".25"/><path d="M0 100V0h100v100zm94.932-5.067V5.067H5.067v89.865z" fill-opacity=".75"/></g>`;
        else if (body.type === "circle") svg += `<g fill="red"><path d="M5 50C5 25 25 5 50 5S95 25 95 50 74.816 95 50 95 5 74.816 5 50" fill-opacity=".25"/><path d="M0 50C0 22.385 22.385 0 50 0s50 22.385 50 50-22.385 50-50 50S0 77.614 0 50m50 45c24.816 0 45-20.116 45-45S74.815 5 50 5 5 25 5 50 25 95 50 95" fill-opacity=".75"/></g>`;
        else if (body.type === "triangle") svg += `<g fill="#f0f"><path d="M5.068 94.931v-82.43l82.431 82.432z" fill-opacity=".25"/><path d="M0 100V0l100 100zm87.5-5.067L5.067 12.5v82.432z" fill-opacity=".75"/></g>`;
        else if (body.type === "hexagon") svg += `<g fill="#0f0"><path d="M5 27.5 50 5l45 22.467v45L50 95 5 72.5z" fill-opacity=".25"/><path d="M0 25 50 0l50 25v50l-50 25L0 75zm5 47.467L50 95l45-22.467v-45L50 5 5 27.5z" fill-opacity=".75"/></g>`;
        bodyShape.outerHTML = svg + "</svg>";
      }
      updateAllBodyMonitors();
    });
  }

  // Custom GUI & ScratchBlocks
  function openModal(titleName, addSelector, func) {
    // in a Button Context, ScratchBlocks always exists
    let bodyType = "square";
    ScratchBlocks.prompt(
      titleName,
      "",
      (value) => func(value, bodyType),
      "Rigidbody Manager",
      "broadcast_msg"
    );

    if (addSelector) {
      const input = document.querySelector(`div[class="ReactModalPortal"] input`);
      const newLabel = input.parentNode.previousSibling.cloneNode(true);
      newLabel.textContent = "Body Type:";
      const selector = document.createElement("select");
      selector.setAttribute("class", input.getAttribute("class"));
      selector.addEventListener("input", (e) => { bodyType = e.target.value });
      bodyTypes.forEach((option) => {
        let opt = document.createElement("option");
        opt.value = option; opt.text = option;
        selector.appendChild(opt);
      });
      input.parentNode.append(newLabel, selector);
    }
  }

  if (Scratch.gui) Scratch.gui.getBlockly().then(SB => {
    // Custom Octagon Block Shape
    const makeShape = (width, height) => {
      width -= 18;
      return (`M 9 0 l -10 10 v ${height - 20}
        l 10 10 h ${width} l 10 -10 v -${height - 20}
        l -10 -10 h -${width} z
      `).replaceAll("\n", "").trim();
    };

    const ogRender = SB.BlockSvg.prototype.render;
    SB.BlockSvg.prototype.render = function (...args) {
      const data = ogRender.call(this, ...args);
      if (this.svgPath_ && this.type.startsWith("SPrigidBody_")) {
        if (this.type.startsWith("SPrigidBody_body")) {
          const fixedWidth = this.width - 35;
          this.svgPath_.setAttribute("transform", `scale(1, ${this.height / 40})`);
          this.svgPath_.setAttribute("d", makeShape(this.width, this.height));
        }
        this.inputList.forEach((input) => {
          if (input.name.startsWith("OCT_SHAPE")) {
            const block = input.connection.targetBlock();
            if (block && block.svgPath_ && block.type.startsWith("SPrigidBody_menu_")) {
              block.svgPath_.setAttribute("transform", `scale(1, ${block.height / 33})`);
              block.svgPath_.setAttribute("d", makeShape(block.width, block.height));
            } else if (input.outlinePath) {
              input.outlinePath.setAttribute("d", makeShape(46, 32));
            }
          }
        });
      }
      return data;
    }
  });

  class SPrigidBody {
    constructor() {
      // Turbowarp Storage
      if (!isPM) {
        runtime.on("PROJECT_LOADED", () => {
          this.deserialize(runtime.extensionStorage);
          vm.extensionManager.refreshBlocks("SPrigidBody").then(() => {
            if (isEditor) vm.refreshWorkspace();
          });
        });
      }
    }
    getInfo() {
      return {
        id: "SPrigidBody",
        name: "Rigidbodies",
        color1: "#4a93b0",
        menuIconURI,
        blocks: [
          {
            func: "createBtn",
            blockType: Scratch.BlockType.BUTTON,
            text: "Make a Rigidbody"
          },
          {
            func: "deleteBtn",
            blockType: Scratch.BlockType.BUTTON,
            text: "Remove a Rigidbody"
          },
          "---",
          ...blocks,
          "---",
          {
            opcode: "isColliding",
            blockType: Scratch.BlockType.BOOLEAN,
            hideFromPalette: hideBlocks,
            text: "is [OCT_SHAPE1] touching [OCT_SHAPE2] ?",
            arguments: {
              OCT_SHAPE1: {}, OCT_SHAPE2: {}
            }
          },
          {
            opcode: "isCollidingPoint",
            blockType: Scratch.BlockType.BOOLEAN,
            hideFromPalette: hideBlocks,
            text: "is [OCT_SHAPE] touching x: [x] y: [y] ?",
            arguments: {
              OCT_SHAPE: {},
              x: { type: Scratch.ArgumentType.NUMBER },
              y: { type: Scratch.ArgumentType.NUMBER }
            }
          },
          {
            opcode: "distance",
            blockType: Scratch.BlockType.REPORTER,
            hideFromPalette: hideBlocks,
            text: "distance from [OCT_SHAPE1] to [OCT_SHAPE2]",
            arguments: {
              OCT_SHAPE1: {}, OCT_SHAPE2: {}
            }
          },
          {
            opcode: "boundsOfBox",
            blockType: Scratch.BlockType.REPORTER,
            hideFromPalette: hideBlocks,
            text: "bounding box of [OCT_SHAPE]",
            arguments: {
              OCT_SHAPE: {}
            }
          },
          "---",
          {
            opcode: "setBodyType",
            blockType: Scratch.BlockType.COMMAND,
            hideFromPalette: hideBlocks,
            text: "set body type of [OCT_SHAPE] to [OCT_SHAPES]",
            arguments: {
              OCT_SHAPE: {},
              OCT_SHAPES: { type: Scratch.ArgumentType.STRING, menu: "BODY_SHAPES" }
            }
          },
          {
            opcode: "setCircAccuracy",
            blockType: Scratch.BlockType.COMMAND,
            hideFromPalette: hideBlocks,
            text: "set accuracy of circle body [OCT_SHAPE] to [VALUE]",
            arguments: {
              OCT_SHAPE: {},
              VALUE: { type: Scratch.ArgumentType.NUMBER, defaultValue: 16 }
            }
          },
          "---",
          {
            opcode: "setBodyPos",
            blockType: Scratch.BlockType.COMMAND,
            hideFromPalette: hideBlocks,
            text: "set position of [OCT_SHAPE] to x: [x] y: [y]",
            arguments: {
              OCT_SHAPE1: {},
              x: { type: Scratch.ArgumentType.NUMBER },
              y: { type: Scratch.ArgumentType.NUMBER }
            }
          },
          {
            opcode: "setBodyDir",
            blockType: Scratch.BlockType.COMMAND,
            hideFromPalette: hideBlocks,
            text: "set direction of [OCT_SHAPE] to [ANGLE]",
            arguments: {
              OCT_SHAPE1: {},
              ANGLE: { type: Scratch.ArgumentType.ANGLE, defaultValue: 90 }
            }
          },
          {
            opcode: "setBodySize",
            blockType: Scratch.BlockType.COMMAND,
            hideFromPalette: hideBlocks,
            text: "set scale of [OCT_SHAPE] to x: [x] y: [y]",
            arguments: {
              OCT_SHAPE1: {},
              x: { type: Scratch.ArgumentType.NUMBER, defaultValue: 100 },
              y: { type: Scratch.ArgumentType.NUMBER, defaultValue: 100 }
            }
          },
          "---",
          {
            opcode: "bodyTemporary",
            blockType: Scratch.BlockType.REPORTER,
            hideFromPalette: hideBlocks,
            text: "temporary [OCT_SHAPES] body at x: [x] y: [y] direction [ANGLE] scale x: [sX] y: [sY]",
            arguments: {
              OCT_SHAPES: { type: Scratch.ArgumentType.STRING, menu: "BODY_SHAPES" },
              x: { type: Scratch.ArgumentType.NUMBER },
              y: { type: Scratch.ArgumentType.NUMBER },
              ANGLE: { type: Scratch.ArgumentType.ANGLE, defaultValue: 90 },
              sX: { type: Scratch.ArgumentType.NUMBER, defaultValue: 100 },
              sY: { type: Scratch.ArgumentType.NUMBER, defaultValue: 100 }
            }
          },
        ],
        menus: {
          BODY_SHAPES: { acceptReporters: true, items: bodyTypes }
        },
      };
    }

    // Helper Funcs
    addBlock(opcode) {
      Object.defineProperty(SPrigidBody.prototype, opcode, {
        value: function (_, util, blockInfo) {
          return this.thisBody("", util, blockInfo);
        },
        writable: true,
        configurable: true,
      });
    }

    createBtn() {
      openModal("Create a Rigidbody:", true, (value, type) => {
        if (!value) return;
        const newBlock = {
          ...defaultBlock,
          opcode: "body" + value, text: value
        };
        this.addBlock(newBlock.opcode);

        const block = blocks.find((i) => { return i.text == value });
        if (block) block.hideFromPalette = false;
        else blocks.push(newBlock);
        const body = structuredClone(defaultBody);
        body.name = value; body.type = type;
        bodies[value] = body;

        hideBlocks = false;
        this.serialize();
        vm.extensionManager.refreshBlocks("SPrigidBody");
      });
    }

    deleteBtn() {
      openModal("Remove a Rigidbody:", false, (value) => {
        const block = blocks.find((i) => { return i.text == value });
        if (!block) return;
        block.hideFromPalette = true;
        delete bodies[value];
        runtime.monitorBlocks.changeBlock({ id: `SPrigidBody_body${value}`, element: "checkbox", value: false }, runtime);

        if (Object.keys(bodies).length === 0) hideBlocks = true;
        this.serialize();
        vm.extensionManager.refreshBlocks("SPrigidBody");
      });
    }

    getPrevBlock(util) {
      const contain = util.thread.blockContainer;
      const block = contain.getBlock(util.thread.isCompiled ? util.thread.peekStack() : util.thread.peekStackFrame().op?.id);
      return contain.getBlock(block?.parent);
    }

    getBody(obj) {
      if (obj?.name) {
        // allow for custom bodies using JSON
        return bodies[obj.name] ?? { 
          ...structuredClone(defaultBody),
          ...obj
        };
      } else {
        console.warn("Error: Expected Pure JSON!");
        return "";
      }
    }

    getBoundingBox(info) {
      const width = 100 * info.scale[0];
      const height = 100 * info.scale[1];
      const rads = -info.dir * radianConverter;
      const rotWidth = Math.abs(width * Math.cos(rads)) + Math.abs(height * Math.sin(rads));
      const rotHeight = Math.abs(width * Math.sin(rads)) + Math.abs(height * Math.cos(rads));
      return {
        width: rotWidth, height: rotHeight,
        left: info.x - rotWidth / 2, right: info.x + rotWidth / 2,
        top: -info.y + rotHeight / 2, bottom: -info.y - rotHeight / 2,
      };
    }

    /* Point Collision */
    transformPoint(px, py, cx, cy, cosA, sinA) {
      const dx = px - cx;
      const dy = py - cy;
      return {
        x: dx * cosA + dy * sinA,
        y: -dx * sinA + dy * cosA
      }
    }

    collisionPoint(bodyInfo, bounds, x, y) {
      const bx = bodyInfo.x;
      const by = bodyInfo.y * -1;
      const [scaleX, scaleY] = bodyInfo.scale;
      const angle = bodyInfo.dir * radianConverter;
      const cosA = Math.cos(angle), sinA = Math.sin(angle);
      const localPoint = this.transformPoint(x, y, bx, by, cosA, sinA);
      const halfW = 50 * scaleX, halfH = 50 * scaleY;
      switch (bodyInfo.type) {
        case "square": {
          return (
            localPoint.x >= -halfW && localPoint.x <= halfW && localPoint.y >= -halfH && localPoint.y <= halfH
          );
        }
        case "circle": {
          const radX = 50 * scaleX, radY = 50 * scaleY;
          if (scaleX === scaleY) {
            const dx = x - bx;
            const dy = y - by;
            return dx * dx + dy * dy <= radX * radX;
          }
          const dx = localPoint.x / radX;
          const dy = localPoint.y / radY;
          return dx * dx + dy * dy <= 1;
        }
        case "triangle": {
          const p1 = { x: -halfW, y: -halfH }; // Bottom-left
          const p2 = { x: halfW, y: halfH }; // Bottom-right
          const p3 = { x: -halfW, y: halfH }; // Top-left

          const area = Math.abs(p1.x * (p2.y - p3.y) + p2.x * (p3.y - p1.y) + p3.x * (p1.y - p2.y)) / 2;
          const area1 = Math.abs(localPoint.x * (p2.y - p3.y) + p2.x * (p3.y - localPoint.y) + p3.x * (localPoint.y - p2.y)) / 2;
          const area2 = Math.abs(p1.x * (localPoint.y - p3.y) + localPoint.x * (p3.y - p1.y) + p3.x * (p1.y - localPoint.y)) / 2;
          const area3 = Math.abs(p1.x * (p2.y - localPoint.y) + p2.x * (localPoint.y - p1.y) + localPoint.x * (p1.y - p2.y)) / 2;
          return Math.abs(area - (area1 + area2 + area3)) < 0.001;
        }
        case "hexagon": {
          const sideH = halfH / 2;
          if (Math.abs(localPoint.y) > halfH) return false;
          if (Math.abs(localPoint.y) <= sideH) return Math.abs(localPoint.x) <= halfW;

          const maxX = halfW - ((Math.abs(localPoint.y) - sideH) * (halfW / sideH));
          return Math.abs(localPoint.x) <= maxX;
        }
      }
      return false;
    }

    /* Object Collision */
    genShapePoints(bodyInfo) {
      const { x, dir, scale, circAccuracy } = bodyInfo;
      const y = bodyInfo.y * -1;
      const points = [];
      const addPoint = (px, py) => {
        const rad = dir * radianConverter;
        const cos = Math.cos(rad), sin = Math.sin(rad);
        const rx = x + (px * cos - py * sin);
        const ry = y + (px * sin + py * cos);
        points.push({ x: rx, y: ry });
      };

      const scaledX = 50 * scale[0], scaledY = 50 * scale[1];
      switch (bodyInfo.type) {
        case "square":
          addPoint(-scaledX, -scaledY);
          addPoint(scaledX, -scaledY);
          addPoint(scaledX, scaledY);
          addPoint(-scaledX, scaledY);
          break;
        case "triangle":
          addPoint(scaledX, scaledY);
          addPoint(-scaledX, scaledY);
          addPoint(-scaledX, -scaledY);
          break;
        case "hexagon":
          const sideH = scaledY / 2;
          addPoint(0, -scaledY);
          addPoint(scaledX, -sideH);
          addPoint(scaledX, sideH);
          addPoint(0, scaledY);
          addPoint(-scaledX, sideH);
          addPoint(-scaledX, -sideH);
          break;
        case "circle":
          for (let i = 0; i < circAccuracy; i++) {
            const angle = (i * (360 / circAccuracy)) * radianConverter;
            addPoint(Math.cos(angle) * scaledX, Math.sin(angle) * scaledY);
          }
          break;
      }
      return points;
    }

    projectPolygon(axis, poly) {
      let min = Infinity, max = -Infinity;
      for (let p of poly) {
        let proj = (p.x * axis.x + p.y * axis.y);
        if (proj < min) min = proj;
        if (proj > max) max = proj;
      }
      return { min, max };
    }

    getAxes(poly) {
      let axes = [];
      for (let i = 0; i < poly.length; i++) {
        const p1 = poly[i], p2 = poly[(i + 1) % poly.length];
        const edge = { x: p2.x - p1.x, y: p2.y - p1.y };
        const normal = { x: -edge.y, y: edge.x };
        const mag = Math.sqrt(normal.x * normal.x + normal.y * normal.y);
        axes.push({ x: normal.x / mag, y: normal.y / mag });
      }
      return axes;
    }

    polygonsCollide(poly1, poly2) {
      let axes = [...this.getAxes(poly1), ...this.getAxes(poly2)];
      for (let axis of axes) {
        let proj1 = this.projectPolygon(axis, poly1);
        let proj2 = this.projectPolygon(axis, poly2);
        if (!(proj1.min <= proj2.max && proj2.min <= proj1.max)) return false;
      }
      return true;
    }

    // Block Funcs
    thisBody(_, util, blockInfo) {
      const isInExtBlock = this.getPrevBlock(util)?.opcode.startsWith("SPrigidBody_");
      const bodyInfo = bodies[blockInfo.text];
      return bodyInfo ? isInExtBlock ? bodyInfo : JSON.stringify(bodyInfo) : "";
    }

    isColliding(args) {
      const info1 = this.getBody(args.OCT_SHAPE1);
      const info2 = this.getBody(args.OCT_SHAPE2);
      if (!info1 || !info2) return false;

      const bounds1 = this.getBoundingBox(info1);
      const bounds2 = this.getBoundingBox(info2);
      if (
        bounds1.right < bounds2.left || bounds1.left > bounds2.right ||
        bounds1.bottom > bounds2.top || bounds1.top < bounds2.bottom
      ) return false;

      const poly1 = this.genShapePoints(info1);
      const poly2 = this.genShapePoints(info2);
      return this.polygonsCollide(poly1, poly2);
    }

    isCollidingPoint(args) {
      const info = this.getBody(args.OCT_SHAPE);
      const x = Cast.toNumber(args.x);
      const y = Cast.toNumber(args.y) * -1;
      if (!info) return false;

      const bounds = this.getBoundingBox(info);
      if (
        x > bounds.right || x < bounds.left ||
        y > bounds.top || y < bounds.bottom
      ) return false;
      return this.collisionPoint(info, bounds, x, y);
    }

    distance(args) {
      const info1 = this.getBody(args.OCT_SHAPE1);
      const info2 = this.getBody(args.OCT_SHAPE2);
      if (!info1 || !info2) return "";

      const dx = info1.x - info2.x;
      const dy = info1.y - info2.y;
      return Math.sqrt((dx * dx) + (dy * dy));
    }

    boundsOfBox(args) {
      const info = this.getBody(args.OCT_SHAPE);
      if (!info) return "{}";
      return JSON.stringify(this.getBoundingBox(info));
    }

    setBodyType(args) {
      const info = this.getBody(args.OCT_SHAPE);
      if (!info) return;
      const newBody = bodyTypes.indexOf(args.OCT_SHAPES);
      if (newBody === -1 || info.type === args.OCT_SHAPES) return;

      const id = "SPrigidBody_body" + info.name;
      const isVisible = runtime.getMonitorState().get(id)?.visible || false;
      const onVisUpdate = () => {
        runtime.once("AFTER_EXECUTE", () => { 
          runtime.monitorBlocks.changeBlock({ id, element: "checkbox", value: true }, runtime);
          runtime.off("MONITORS_UPDATE", onVisUpdate);
        });
      };
      runtime.once("MONITORS_UPDATE", onVisUpdate);
      info.type = args.OCT_SHAPES;
      runtime.monitorBlocks.changeBlock({ id, element: "checkbox", value: false }, runtime);
    }

    setCircAccuracy(args) {
      const info = this.getBody(args.OCT_SHAPE);
      if (!info) return;
      info.circAccuracy = Math.max(5, Math.min(100, Cast.toNumber(args.VALUE)));
      updateAllBodyMonitors();
    }

    setBodyPos(args) {
      const info = this.getBody(args.OCT_SHAPE);
      if (!info) return;
      info.x = Cast.toNumber(args.x);
      info.y = Cast.toNumber(args.y);
      updateAllBodyMonitors();
    }

    setBodyDir(args) {
      const info = this.getBody(args.OCT_SHAPE);
      if (!info) return;
      info.dir = Cast.toNumber(args.ANGLE) - 90;
      updateAllBodyMonitors();
    }

    setBodySize(args) {
      const info = this.getBody(args.OCT_SHAPE);
      if (!info) return;
      info.scale = [
        Cast.toNumber(args.x) / 100, Cast.toNumber(args.y) / 100
      ];
      updateAllBodyMonitors();
    }

    bodyTemporary(args, util) {
      const type = args.OCT_SHAPES;
      if (bodyTypes.indexOf(type) === -1) return "";

      const bodyInfo = {
        name: `temporaryBody-${Math.random()}`, type, circAccuracy: 20,
        x: Cast.toNumber(args.x), y: Cast.toNumber(args.y),
        scale: [Cast.toNumber(args.sX) / 100, Cast.toNumber(args.sY) / 100],
        dir: Cast.toNumber(args.ANGLE) - 90,
      };

      const isInExtBlock = this.getPrevBlock(util)?.opcode.startsWith("SPrigidBody_");
      return isInExtBlock ? bodyInfo : JSON.stringify(bodyInfo);
    }

    // PenguinMod & Turbowarp Storage
    serialize() {
      const cleanBlocks = blocks.filter((b) => { return b.hideFromPalette === undefined || b.hideFromPalette === false });
      if (!isPM) runtime.extensionStorage["SPrigidBody"] = { blocks: cleanBlocks, bodies };
      else return { SPrigidBody: { blocks, bodies } };
    }
    deserialize(data) {
      const stored = data.SPrigidBody;
      if (stored !== undefined) {
        blocks = stored.blocks;
        bodies = stored.bodies;

        if (Object.keys(bodies).length > 0) hideBlocks = false;
        Object.values(blocks).forEach((b) => this.addBlock(b.opcode));

        if (isPM && isEditor) runtime.on("PROJECT_LOADED", () => runtime.requestBlocksUpdate());
      }
    }
  }

  Scratch.extensions.register(new SPrigidBody());
})(Scratch);
