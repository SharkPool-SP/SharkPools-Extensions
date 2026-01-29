// Name: Rigidbodies
// ID: SPrigidBody
// Description: Fast collisions using math-based Rigidbodies.
// By: SharkPool
// Licence: MIT

// Version V.1.1.0

(function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) throw new Error("Rigidbodies must run unsandboxed!");

  const menuIconURI =
"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTYuNDA3IiBoZWlnaHQ9IjExNi40MDciIHZpZXdCb3g9IjAgMCAxMTYuNDA3IDExNi40MDciPjxnIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIj48cGF0aCBkPSJNMCA1OC4yMDRDMCAyNi4wNTkgMjYuMDU4LjAwMSA1OC4yMDMuMDAxczU4LjIwNCAyNi4wNTggNTguMjA0IDU4LjIwMy0yNi4wNiA1OC4yMDQtNTguMjA0IDU4LjIwNFMwIDkwLjM0OCAwIDU4LjIwNCIgZmlsbD0iIzM0Njg3ZCIvPjxwYXRoIGQ9Ik02LjY4NyA1OC4yMDRjMC0yOC40NTEgMjMuMDY1LTUxLjUxNiA1MS41MTYtNTEuNTE2czUxLjUxNiAyMy4wNjYgNTEuNTE2IDUxLjUxNi0yMy4wNjYgNTEuNTE2LTUxLjUxNiA1MS41MTZTNi42ODcgODYuNjU0IDYuNjg3IDU4LjIwNCIgZmlsbD0iIzRhOTNiMCIvPjxwYXRoIGQ9Ik0yMy4yODQgNDguMDk2YzAtMTMuMTk1IDEwLjY5Ny0yMy44OTIgMjMuODkyLTIzLjg5MnMyMy44OTIgMTAuNjk3IDIzLjg5MiAyMy44OTItMTAuNjk3IDIzLjg5Mi0yMy44OTIgMjMuODkyLTIzLjg5Mi0xMC42OTctMjMuODkyLTIzLjg5MiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik00NS4zMzggNjguMzEyYzAtMTMuMTk1IDEwLjY5Ny0yMy44OTIgMjMuODkyLTIzLjg5MnMyMy44OTIgMTAuNjk3IDIzLjg5MiAyMy44OTJTODIuNDI1IDkyLjIwNCA2OS4yMyA5Mi4yMDQgNDUuMzM4IDgxLjUwNyA0NS4zMzggNjguMzEyIiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTcxLjA2OCA0OC4wOTZjMCAxMy4xOTUtMTAuNjk3IDIzLjg5Mi0yMy44OTIgMjMuODkycS0uNzg4IDAtMS41NjUtLjA1YTI0IDI0IDAgMCAxLS4yNzMtMy42MjZjMC0xMy4xOTUgMTAuNjk3LTIzLjg5MiAyMy44OTItMjMuODkycS43ODggMCAxLjU2NS4wNWEyNCAyNCAwIDAgMSAuMjczIDMuNjI2IiBmaWxsPSIjNGE5M2IwIi8+PC9nPjwvc3ZnPg==";

  const Cast = Scratch.Cast;
  const vm = Scratch.vm;
  const runtime = vm.runtime;
  const isPM = Scratch.extensions.isPenguinMod;
  const isEditor = typeof scaffolding === "undefined";

  const defaultBlock = {
    opcode: "body...", text: "...",
    disableMonitor: true,
    blockType: Scratch.BlockType.REPORTER,
    blockShape: isPM ? Scratch.BlockShape.OCTAGONAL : Scratch.BlockShape.ROUND
  };

  const BODY_TYPES = [
    "square",
    "circle",
    "triangle",
    "polygon"
  ];

  const bodyMonitors = Object.create(null);
  let allRigidbodies = Object.create(null);
  let blocks = [];
  let hideBlocks = true;

  // Rigidbody Class, made by me
  class Rigidbody {
    /** Body Types */
    static BODY_SQUARE = 0;
    static BODY_CIRCLE = 1;
    static BODY_TRIANGLE = 2; // for clarity this is a left-facing right triangle
    static BODY_POLYGON = 3;

    /** Constants */
    static DEFAULT_POLY_SIDES = 6; // hexagon
    static MIN_POLY_SIDES = 3; // isosceles triangle
    static CIRCLE_ACCURACY = 20;
    static TO_RADIAN = Math.PI / 180;

    /** Class Utilities */

    /**
     * Transforms a coordinate around a center coordinate.
     *
     * @param {number} x horizontal point position
     * @param {number} y vertical point position
     * @param {number} centerX horizontal center to transform around
     * @param {number} centerY vertical center to transform around
     * @param {number} cosAngle angle to transform around in cosine
     * @param {number} sinAngle angle to transform around in sine
     * @returns object containing transformed coordinates
     */
    static transformPoint(x, y, centerX, centerY, cosAngle, sinAngle) {
      const dx = x - centerX;
      const dy = y - centerY;
      return {
        x: dx * cosAngle + dy * sinAngle,
        y: -dx * sinAngle + dy * cosAngle,
      };
    }

    /**
     * Projects the range of a polygons' points on a specified axis.
     *
     * @param {number[]} axis array of coordinate objects that specify the axis
     * @param {number[]} polyPoints array of point objects in a polygon
     * @returns object min and max points of a polygon on an axis
     */
    static projectPolygon(axis, polyPoints) {
      let min = Infinity;
      let max = -Infinity;
      for (let point of polyPoints) {
        let proj = point.x * axis.x + point.y * axis.y;
        if (proj < min) min = proj;
        if (proj > max) max = proj;
      }
      return { min, max };
    }

    /** Body Specific Utilities */
    /**
     * Constructs a Rigidbody object.
     *
     * @param {number} bodyType the rigidbody shape type (BODY_POLYGON, BODY_SQUARE, etc.)
     * @param {number} optPolySides (optional) number of sides on this polygon
     */
    constructor(bodyType, optPolySides) {
      if (
        typeof bodyType !== "number" ||
        bodyType < 0 ||
        bodyType > Rigidbody.BODY_POLYGON
      ) {
        throw new Error("Rigidbody body type is unknown");
      }

      this._type = bodyType;
      this._polyPoints = null;
      this._axesProjection = null;

      this._x = 0;
      this._y = 0;
      this._direction = 0;
      this._scale = [1, 1];

      if (this._type === Rigidbody.BODY_POLYGON) {
        this.polySides =
          optPolySides >= Rigidbody.MIN_POLY_SIDES
            ? Math.round(optPolySides) : Rigidbody.DEFAULT_POLY_SIDES;
      }

      this._updatePolyPoints();
    }

    /** Setters and Getters */
    get x() {
      return this._x;
    }
    set x(v) {
      if (this._x !== v) {
        this._x = v;
        this._updatePolyPoints();
      }
    }

    get y() {
      return this._y;
    }
    set y(v) {
      if (this._y !== v) {
        this._y = v;
        this._updatePolyPoints();
      }
    }

    get direction() {
      return this._direction;
    }
    set direction(v) {
      if (this._direction !== v) {
        this._direction = v;
        this._updatePolyPoints();
      }
    }

    get scale() {
      return this._scale;
    }
    set scale(v) {
      if (!Array.isArray(v) || v.length !== 2) {
        throw new Error("scale must be [x, y]");
      }

      if (this._scale[0] !== v[0] || this._scale[1] !== v[1]) {
        this._scale = v;
        this._updatePolyPoints();
      }
    }

    /**
     * Constructs this body's polygon points and projections.
     * Used when updating body attributes (x, y, direction, scale).
     */
    _updatePolyPoints() {
      this._polyPoints = [];
      this._axesProjection = [];

      const rad = this.direction * Rigidbody.TO_RADIAN;
      const cos = Math.cos(rad);
      const sin = Math.sin(rad);

      const scaledX = 50 * this.scale[0];
      const scaledY = 50 * this.scale[1];

      const addPoint = (px, py) => {
        const rx = this.x + (px * cos - py * sin);
        const ry = this.y * -1 + (px * sin + py * cos);
        this._polyPoints.push({ x: rx, y: ry });
      };

      // construct the rigidbody's shape points
      switch (this._type) {
        case Rigidbody.BODY_SQUARE:
          addPoint(-scaledX, -scaledY);
          addPoint(scaledX, -scaledY);
          addPoint(scaledX, scaledY);
          addPoint(-scaledX, scaledY);
          break;
        case Rigidbody.BODY_TRIANGLE:
          addPoint(scaledX, scaledY);
          addPoint(-scaledX, scaledY);
          addPoint(-scaledX, -scaledY);
          break;
        case Rigidbody.BODY_CIRCLE:
          for (let i = 0; i < this.CIRCLE_ACCURACY; i++) {
            const angle = i * (360 / this.CIRCLE_ACCURACY) * Rigidbody.TO_RADIAN;
            addPoint(Math.cos(angle) * scaledX, Math.sin(angle) * scaledY);
          }
          break;
        case Rigidbody.BODY_POLYGON:
          for (let i = 0; i < this.polySides; i++) {
            const angle = i * (360 / this.polySides) * Rigidbody.TO_RADIAN;
            addPoint(Math.cos(angle) * scaledX, Math.sin(angle) * scaledY);
          }
          break;
      }

      // construct the axes projections
      for (let i = 0; i < this._polyPoints.length; i++) {
        const p1 = this._polyPoints[i];
        const p2 = this._polyPoints[(i + 1) % this._polyPoints.length];

        const edgeNormal = {
          x: (p2.y - p1.y) * -1,
          y: p2.x - p1.x,
        };
        const mag = Math.sqrt(edgeNormal.x * edgeNormal.x + edgeNormal.y * edgeNormal.y);

        this._axesProjection.push({
          x: edgeNormal.x / mag,
          y: edgeNormal.y / mag,
        });
      }
    }

    /**
     * Changes the number of sides of this POLYGON Rigidbody.
     *
     * @param {number} sides new number of sides of this polygon
     */
    setPolygonSides(sides) {
      if (this._type === Rigidbody.BODY_POLYGON) {
        this.polySides =
          sides >= Rigidbody.MIN_POLY_SIDES
            ? Math.round(sides) : Rigidbody.DEFAULT_POLY_SIDES;
        this._updatePolyPoints();
      }
    }

    /**
     * Computes the distance from this body to a given coordinate.
     *
     * @param {number} x horizontal position
     * @param {number} y vertical position
     * @returns the distance from this body to a coordinate
     */
    distanceToXY(x, y) {
      const dx = this.x - x;
      const dy = this.y - y;
      return Math.sqrt(dx * dx + dy * dy);
    }

    /**
     * Computes this body's bounding box.
     *
     * @returns bounding box object
     */
    getBounds() {
      const width = 100 * this.scale[0];
      const height = 100 * this.scale[1];
      const rads = -this.direction * Rigidbody.TO_RADIAN;
      const rotWidth = Math.abs(width * Math.cos(rads)) + Math.abs(height * Math.sin(rads));
      const rotHeight = Math.abs(width * Math.sin(rads)) + Math.abs(height * Math.cos(rads));

      return {
        width: rotWidth,
        height: rotHeight,
        left: this.x - rotWidth / 2,
        right: this.x + rotWidth / 2,
        top: -this.y + rotHeight / 2,
        bottom: -this.y - rotHeight / 2,
      };
    }

    /**
     * Checks if this body is colliding with a given coordinate.
     *
     * @param {number} x horizontal point position
     * @param {number} y horizontal point position
     * @returns true if the given coordinate is within this body
     */
    isTouchingXY(x, y) {
      // first check if we're even inside this bodies bounding box
      const bounds = this.getBounds();
      if (
        x > bounds.right || x < bounds.left ||
        y > bounds.top || y < bounds.bottom
      ) {
        return false;
      }

      // now do hard point check
      const angle = this.direction * Rigidbody.TO_RADIAN;
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const halfWidth = 50 * this.scale[0];
      const halfHeight = 50 * this.scale[1];

      // transform point to fixate the body direction
      const localPoint = Rigidbody.transformPoint(
        x, y * -1,
        this.x, this.y * -1,
        cos, sin,
      );

      switch (this._type) {
        case Rigidbody.BODY_SQUARE: {
          return (
            localPoint.x >= -halfWidth &&
            localPoint.x <= halfWidth &&
            localPoint.y >= -halfHeight &&
            localPoint.y <= halfHeight
          );
        }
        case Rigidbody.BODY_CIRCLE: {
          if (this.scale[0] === this.scale[1]) {
            // non-stretched circle
            const dx = x - this.x;
            const dy = y - this.y * -1;
            return dx * dx + dy * dy <= halfWidth * halfWidth;
          } else {
            const dx = localPoint.x / halfWidth;
            const dy = localPoint.y / halfHeight;
            return dx * dx + dy * dy <= 1;
          }
        }
        case Rigidbody.BODY_POLYGON: {
          if (!this._polyPoints || !this._axesProjection) {
            this._updatePolyPoints();
          }

          let inside = false;
          for (
            let i = 0, j = this._polyPoints.length - 1;
            i < this._polyPoints.length;
            j = i++
          ) {
            // transform polygon points into local space
            const pi = Rigidbody.transformPoint(
              this._polyPoints[i].x, this._polyPoints[i].y,
              this.x, this.y * -1,
              cos, sin,
            );
            const pj = Rigidbody.transformPoint(
              this._polyPoints[j].x, this._polyPoints[j].y,
              this.x, this.y * -1,
              cos, sin,
            );

            const intersect =
              pi.y > localPoint.y !== pj.y > localPoint.y &&
              localPoint.x < ((pj.x - pi.x) * (localPoint.y - pi.y)) / (pj.y - pi.y) + pi.x;

            if (intersect) inside = !inside;
          }
          return inside;
        }
        case Rigidbody.BODY_TRIANGLE: {
          const p1 = [-halfWidth, -halfHeight]; // bottom-left
          const p2 = [halfWidth, halfHeight]; // bottom-right
          const p3 = [-halfWidth, halfHeight]; // top-left

          const wholeArea =
            Math.abs(
              p1[0] * (p2[1] - p3[1]) +
                p2[0] * (p3[1] - p1[1]) +
                p3[0] * (p1[1] - p2[1]),
            ) / 2;

          const area1 =
            Math.abs(
              localPoint.x * (p2[1] - p3[1]) +
                p2[0] * (p3[1] - localPoint.y) +
                p3[0] * (localPoint.y - p2[1]),
            ) / 2;
          const area2 =
            Math.abs(
              p1[0] * (localPoint.y - p3[1]) +
                localPoint.x * (p3[1] - p1[1]) +
                p3[0] * (p1[1] - localPoint.y),
            ) / 2;
          const area3 =
            Math.abs(
              p1[0] * (p2[1] - localPoint.y) +
                p2[0] * (localPoint.y - p1[1]) +
                localPoint.x * (p1[1] - p2[1]),
            ) / 2;
          return Math.abs(wholeArea - (area1 + area2 + area3)) < 0.001;
        }
      }

      return false;
    }

    /**
     * Checks if this body is colliding with another body.
     *
     * @param {Rigidbody} body other Rigidbody object to check collision with
     * @returns true if this body is intersecting with another body
     */
    isTouchingBody(body) {
      if (!body || !(body instanceof Rigidbody)) {
        throw new Error("Rigidbody object must be passed in collision check!");
      }

      // first check if we're even inside this bodies bounding box
      const bounds1 = this.getBounds();
      const bounds2 = body.getBounds();
      if (
        bounds1.right < bounds2.left || bounds1.left > bounds2.right ||
        bounds1.bottom > bounds2.top || bounds1.top < bounds2.bottom
      ) {
        return false;
      }

      // now do a hard collision check
      if (!this._polyPoints || !this._axesProjection) this._updatePolyPoints();
      if (!body._polyPoints || !body._axesProjection) body._updatePolyPoints();

      const axes = [...this._axesProjection, ...body._axesProjection];
      for (let axis of axes) {
        const proj1 = Rigidbody.projectPolygon(axis, this._polyPoints);
        const proj2 = Rigidbody.projectPolygon(axis, body._polyPoints);
        if (!(proj1.min <= proj2.max && proj2.min <= proj1.max)) return false;
      }
      return true;
    }
  }

  // Custom Monitors
  const monitorContainer = document.createElement("div");
  monitorContainer.classList.add("SPrigidBody_monitorContainer");
  vm.renderer.addOverlay(monitorContainer, "scale-centered");

  const closeAllBodyMonitors = () => {
    Object.values(bodyMonitors).forEach((monitor) => {
      delete bodyMonitors[monitor.rigidbody.name];
      monitor.remove();
    });
  };

  const createBodyMonitor = (rigidbody) => {
    const monitor = document.createElement("div");
    monitor.id = rigidbody.name;
    monitor.rigidbody = rigidbody;
    bodyMonitors[rigidbody.name] = monitor;

    monitor.style.transform = "translate(-50%, -50%)";
    monitor.style.position = "absolute";

    monitorContainer.appendChild(monitor);

    updateAllBodyMonitors();
  };
  
  const updateAllBodyMonitors = () => {
    for (const monitor of Object.values(bodyMonitors)) {
      const rigidbody = monitor.rigidbody;
      const name = rigidbody.name;

      // set shape
      if (
        monitor.currentType !== rigidbody._type ||
        monitor.polygonSides !== rigidbody.polySides
      ) {
        monitor.currentType = rigidbody._type;
        monitor.polygonSides = rigidbody.polySides;
        
        let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-5 -5 100 100" stroke-linejoin="round">`;
        if (rigidbody._type === Rigidbody.BODY_SQUARE) svg += `<g fill="#00f"><rect width="90" height="90" fill-opacity=".25" stroke-width="10" stroke="#00f" stroke-opacity=".5"></rect></g>`;
        else if (rigidbody._type === Rigidbody.BODY_CIRCLE) svg += `<g fill="red"><circle cx="45" cy="45" r="45" fill-opacity=".25" stroke="red" stroke-width="10" stroke-opacity=".5"/></g>`;
        else if (rigidbody._type === Rigidbody.BODY_TRIANGLE) svg += `<g fill="#f0f"><polygon points="0,0 90,90 0,90 0,0" fill-opacity=".25" stroke="#f0f" stroke-width="10" stroke-opacity=".5"/></g>`;
        else if (rigidbody._type === Rigidbody.BODY_POLYGON) {
          const points = [];
          for (let i = 0; i < monitor.polygonSides; i++) {
            const angle = (i * (360 / monitor.polygonSides) + 90) * Rigidbody.TO_RADIAN;
            points.push(`${45 + Math.cos(angle) * 45},${45 + Math.sin(angle) * 45}`);
          }

          svg += `<g fill="#0f0"><polygon points="${points.join(" ")}" fill-opacity=".25" stroke="#0f0" stroke-width="10" stroke-opacity=".5"/></g>`;
        }
        monitor.innerHTML = svg + "</svg>";
      }

      // apply transforms
      monitor.style.left = `${rigidbody.x}px`;
      monitor.style.top = `${rigidbody.y * -1}px`;
      monitor.firstChild.style.transform = `rotate(${rigidbody.direction}deg) scale(${rigidbody.scale[0]}, ${rigidbody.scale[1]})`;
    }
  }

  runtime.on("PROJECT_START", closeAllBodyMonitors);
  runtime.on("PROJECT_STOP_ALL", closeAllBodyMonitors);

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
      selector.addEventListener("input", (e) => {
        bodyType = e.target.value
      });

      BODY_TYPES.forEach((option) => {
        const opt = document.createElement("option");
        opt.value = option.toUpperCase();
        opt.text = option;
        selector.appendChild(opt);
      });
      input.parentNode.append(newLabel, selector);
    }
  }

  // Octagon Block Shape for Turbowarp
  if (Scratch.gui && !isPM) Scratch.gui.getBlockly().then(SB => {
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
        name: Scratch.translate("Rigidbodies"),
        color1: "#4a93b0",
        menuIconURI,
        blocks: [
          {
            func: "createBtn",
            blockType: Scratch.BlockType.BUTTON,
            text: Scratch.translate("Make a Rigidbody")
          },
          {
            func: "deleteBtn",
            blockType: Scratch.BlockType.BUTTON,
            text: Scratch.translate("Remove a Rigidbody")
          },
          "---",
          ...blocks,
          "---",
          {
            opcode: "isColliding",
            blockType: Scratch.BlockType.BOOLEAN,
            hideFromPalette: hideBlocks,
            text: Scratch.translate("is [OCT_SHAPE1] touching [OCT_SHAPE2] ?"),
            arguments: {
              OCT_SHAPE1: { shape: Scratch.BlockShape.OCTAGONAL },
              OCT_SHAPE2: { shape: Scratch.BlockShape.OCTAGONAL }
            }
          },
          {
            opcode: "isCollidingPoint",
            blockType: Scratch.BlockType.BOOLEAN,
            hideFromPalette: hideBlocks,
            text: Scratch.translate("is [OCT_SHAPE] touching x: [x] y: [y] ?"),
            arguments: {
              OCT_SHAPE: { shape: Scratch.BlockShape.OCTAGONAL },
              x: { type: Scratch.ArgumentType.NUMBER },
              y: { type: Scratch.ArgumentType.NUMBER }
            }
          },
          {
            opcode: "distance",
            blockType: Scratch.BlockType.REPORTER,
            hideFromPalette: hideBlocks,
            text: Scratch.translate("distance from [OCT_SHAPE1] to [OCT_SHAPE2]"),
            arguments: {
              OCT_SHAPE1: { shape: Scratch.BlockShape.OCTAGONAL },
              OCT_SHAPE2: { shape: Scratch.BlockShape.OCTAGONAL }
            }
          },
          {
            opcode: "boundsOfBox",
            blockType: Scratch.BlockType.REPORTER,
            hideFromPalette: hideBlocks,
            text: Scratch.translate("bounding box of [OCT_SHAPE]"),
            arguments: {
              OCT_SHAPE: { shape: Scratch.BlockShape.OCTAGONAL }
            }
          },
          "---",
          {
            opcode: "setBodyType",
            blockType: Scratch.BlockType.COMMAND,
            hideFromPalette: hideBlocks,
            text: Scratch.translate("set body type of [OCT_SHAPE] to [OCT_SHAPES]"),
            arguments: {
              OCT_SHAPE: { shape: Scratch.BlockShape.OCTAGONAL },
              OCT_SHAPES: {
                type: Scratch.ArgumentType.STRING,
                menu: "BODY_SHAPES",
                shape: Scratch.BlockShape.OCTAGONAL
              }
            }
          },
          {
            opcode: "setCircAccuracy",
            blockType: Scratch.BlockType.COMMAND,
            hideFromPalette: hideBlocks,
            text: Scratch.translate("set sides of polygon body [OCT_SHAPE] to [VALUE]"),
            arguments: {
              OCT_SHAPE: { shape: Scratch.BlockShape.OCTAGONAL },
              VALUE: { type: Scratch.ArgumentType.NUMBER, defaultValue: 8 }
            }
          },
          "---",
          {
            opcode: "setBodyPos",
            blockType: Scratch.BlockType.COMMAND,
            hideFromPalette: hideBlocks,
            text: Scratch.translate("set position of [OCT_SHAPE] to x: [x] y: [y]"),
            arguments: {
              OCT_SHAPE: { shape: Scratch.BlockShape.OCTAGONAL },
              x: { type: Scratch.ArgumentType.NUMBER },
              y: { type: Scratch.ArgumentType.NUMBER }
            }
          },
          {
            opcode: "setBodyDir",
            blockType: Scratch.BlockType.COMMAND,
            hideFromPalette: hideBlocks,
            text: Scratch.translate("set direction of [OCT_SHAPE] to [ANGLE]"),
            arguments: {
              OCT_SHAPE: { shape: Scratch.BlockShape.OCTAGONAL },
              ANGLE: { type: Scratch.ArgumentType.ANGLE, defaultValue: 90 }
            }
          },
          {
            opcode: "setBodySize",
            blockType: Scratch.BlockType.COMMAND,
            hideFromPalette: hideBlocks,
            text: Scratch.translate("set scale of [OCT_SHAPE] to x: [x] y: [y]"),
            arguments: {
              OCT_SHAPE: { shape: Scratch.BlockShape.OCTAGONAL },
              x: { type: Scratch.ArgumentType.NUMBER, defaultValue: 100 },
              y: { type: Scratch.ArgumentType.NUMBER, defaultValue: 100 }
            }
          },
          "---",
          {
            opcode: "toggleMonitor",
            blockType: Scratch.BlockType.COMMAND,
            hideFromPalette: hideBlocks,
            text: Scratch.translate("toggle monitor of [OCT_SHAPE] to [TOGGLE]"),
            arguments: {
              OCT_SHAPE: { shape: Scratch.BlockShape.OCTAGONAL },
              TOGGLE: { type: Scratch.ArgumentType.STRING, menu: "TOGGLER" }
            }
          },
          {
            opcode: "bodyTemporary",
            blockType: Scratch.BlockType.REPORTER,
            blockShape: isPM ? Scratch.BlockShape.OCTAGONAL : Scratch.BlockShape.ROUND,
            hideFromPalette: hideBlocks,
            text: Scratch.translate(
              "temporary [OCT_SHAPES] body at x: [x] y: [y] direction [ANGLE] scale x: [sX] y: [sY]"
            ),
            arguments: {
              OCT_SHAPES: {
                type: Scratch.ArgumentType.STRING,
                menu: "BODY_SHAPES",
                shape: Scratch.BlockShape.OCTAGONAL
              },
              x: { type: Scratch.ArgumentType.NUMBER },
              y: { type: Scratch.ArgumentType.NUMBER },
              ANGLE: { type: Scratch.ArgumentType.ANGLE, defaultValue: 90 },
              sX: { type: Scratch.ArgumentType.NUMBER, defaultValue: 100 },
              sY: { type: Scratch.ArgumentType.NUMBER, defaultValue: 100 }
            }
          },
        ],
        menus: {
          BODY_SHAPES: { acceptReporters: true, items: "_bodyTypes" },
          TOGGLER: [
            { text: Scratch.translate("on"), value: "on" }, 
            { text: Scratch.translate("off"), value: "off" }, 
          ]
        },
      };
    }

    // Helper Funcs
    _bodyTypes() {
      return BODY_TYPES.map((b) => ({
        text: Scratch.translate(b),
        value: b.toUpperCase(),
      }));
    }

    _bodyTypeFromName(name) {
      return Rigidbody["BODY_" + name.toUpperCase()] ?? Rigidbody.BODY_SQUARE;
    }

    _addBlock(opcode) {
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
          opcode: "body" + value,
          text: value
        };
        this._addBlock(newBlock.opcode);

        const block = blocks.find((i) => i.text == value);
        if (block) block.hideFromPalette = false;
        else blocks.push(newBlock);

        const body = new Rigidbody(this._bodyTypeFromName(type));
        body.name = value;
        body.type = type;
        allRigidbodies[value] = body;

        hideBlocks = false;
        this.serialize();
        vm.extensionManager.refreshBlocks("SPrigidBody");
      });
    }

    deleteBtn() {
      openModal("Remove a Rigidbody:", false, (value) => {
        const block = blocks.find((i) => i.text == value);
        if (!block) return;

        block.hideFromPalette = true;
        delete allRigidbodies[value];
        runtime.monitorBlocks.changeBlock(
          { id: `SPrigidBody_body${value}`, element: "checkbox", value: false },
          runtime
        );

        if (Object.keys(allRigidbodies).length === 0) hideBlocks = true;
        this.serialize();
        vm.extensionManager.refreshBlocks("SPrigidBody");
      });
    }

    _getPrevBlock(util) {
      const contain = util.thread.blockContainer;
      const block = contain.getBlock(util.thread.isCompiled ? util.thread.peekStack() : util.thread.peekStackFrame().op?.id);
      return contain.getBlock(block?.parent);
    }

    getBody(body) {
      if (body instanceof Rigidbody) {
        return body;
      }
      if (body?.name) {
        // allow referencing or creating custom bodies from JSON
        if (allRigidbodies[body.name]) return allRigidbodies[body.name];
        else return this.constructBodyFromJSON(body);
      } else {
        console.warn("SP Rigidbodies Warning: Expected Rigidbody!");
        return "";
      }
    }

    deconstructBody(rigidbody) {
      return {
        _type: rigidbody._type,
        type: rigidbody.type,
        x: rigidbody.x,
        y: rigidbody.y,
        direction: rigidbody.direction + 90,
        scale: rigidbody.scale.map(s => s * 100),
        polySides: rigidbody.polySides ?? 0
      };
    }

    constructBodyFromJSON(json) {
      if (typeof json === "object") {
        const bodyName = json.type;
        const typeID = json._type ?? this._bodyTypeFromName(bodyName);
        
        const body = new Rigidbody(typeID);
        body.type = bodyName;
        body.name = json.name;

        if (json.x) body._x = json.x;
        if (json.y) body._y = json.y;
        if (json.scale) body._scale = json.scale.map(s => s * 0.01);
        if (json.dir || json.direction) body._direction = (json.dir ?? json.direction) - 90;
        if (json.circAccuracy || json.polySides) {
          body.polySides = json.circAccuracy ?? json.polySides;
        }

        body._updatePolyPoints();
        return body;
      }

      return "";
    }

    // Block Funcs
    thisBody(_, util, blockInfo) {
      const isInExtBlock = this._getPrevBlock(util)?.opcode.startsWith("SPrigidBody_");
      const rigidbody = allRigidbodies[blockInfo.text];
      if (rigidbody) {
        return isInExtBlock ? rigidbody : JSON.stringify(this.deconstructBody(rigidbody));
      }
      return "";
    }

    isColliding(args) {
      const body1 = this.getBody(args.OCT_SHAPE1);
      const body2 = this.getBody(args.OCT_SHAPE2);
      if (body1 && body2) return body1.isTouchingBody(body2);
      else return false;
    }

    isCollidingPoint(args) {
      const body = this.getBody(args.OCT_SHAPE);
      const x = Cast.toNumber(args.x);
      const y = Cast.toNumber(args.y) * -1;
      if (!body) return false;

      return body.isTouchingXY(
        Cast.toNumber(args.x),
        Cast.toNumber(args.y) * -1
      );
    }

    distance(args) {
      const body1 = this.getBody(args.OCT_SHAPE1);
      const body2 = this.getBody(args.OCT_SHAPE2);
      if (body1 && body2) return body1.distanceToXY(body2.x, body2.y);
      else return "";
    }

    boundsOfBox(args) {
      const body = this.getBody(args.OCT_SHAPE);
      if (!body) return "{}";
      return JSON.stringify(body.getBounds());
    }

    setBodyType(args) {
      const body = this.getBody(args.OCT_SHAPE);
      if (!body) return;

      const shapeName = Cast.toString(args.OCT_SHAPES);
      const shapeType = this._bodyTypeFromName(shapeName);
      if (body._type === shapeType) return;

      body._type = shapeType;
      body.type = shapeName;
      if (shapeType === Rigidbody.BODY_POLYGON && !body.polySides) {
        body.polySides = Rigidbody.DEFAULT_POLY_SIDES;
      }
      body._updatePolyPoints();

      updateAllBodyMonitors();
    }

    setCircAccuracy(args) {
      const body = this.getBody(args.OCT_SHAPE);
      if (!body) return;
      body.setPolygonSides(Math.max(Rigidbody.MIN_POLY_SIDES, Math.min(100, Cast.toNumber(args.VALUE))));
      updateAllBodyMonitors();
    }

    setBodyPos(args) {
      const body = this.getBody(args.OCT_SHAPE);
      if (!body) return;
      body.x = Cast.toNumber(args.x);
      body.y = Cast.toNumber(args.y);
      updateAllBodyMonitors();
    }

    setBodyDir(args) {
      const body = this.getBody(args.OCT_SHAPE);
      if (!body) return;
      body.direction = Cast.toNumber(args.ANGLE) - 90;
      updateAllBodyMonitors();
    }

    setBodySize(args) {
      const body = this.getBody(args.OCT_SHAPE);
      if (!body) return;
      body.scale = [
        Cast.toNumber(args.x) / 100,
        Cast.toNumber(args.y) / 100
      ];
      updateAllBodyMonitors();
    }

    toggleMonitor(args) {
      const body = this.getBody(args.OCT_SHAPE);
      if (!body) return;

      const enabled = Cast.toString(args.TOGGLE) === "on";
      const monitor = bodyMonitors[body.name];
      if (enabled) {
        if (monitor) monitor.style.display = "";
        else createBodyMonitor(body);
      } else {
        if (monitor) monitor.style.display = "none";
      }
    }

    bodyTemporary(args, util) {
      const type = Cast.toString(args.OCT_SHAPES);
      const isInExtBlock = this._getPrevBlock(util)?.opcode.startsWith("SPrigidBody_");

      let body = {};
      if (isInExtBlock) {
        body = new Rigidbody(this._bodyTypeFromName(type));
        body.name = `temporaryBody-${Math.random()}`;
      }

      body.type = type;
      body.x = Cast.toNumber(args.x);
      body.y = Cast.toNumber(args.y);
      body.direction = Cast.toNumber(args.ANGLE) - 90;
      body.scale = [
        Cast.toNumber(args.sX) / 100,
        Cast.toNumber(args.sY) / 100,
      ];

      return isInExtBlock ? body : JSON.stringify(body);
    }

    // PenguinMod & Turbowarp Storage
    serialize() {
      const bodyEntries = Object.entries(allRigidbodies);
      for (const entry of bodyEntries) {
        entry[1] = this.deconstructBody(entry[1]);
      }
      const cleanedBodies = Object.fromEntries(bodyEntries);

      if (!isPM) {
        const cleanedBlocks = blocks.filter((b) => !b.hideFromPalette);

        runtime.extensionStorage["SPrigidBody"] = {
          blocks: cleanedBlocks, bodies: cleanedBodies
        };
      } else {
        return {
          SPrigidBody: { blocks, bodies: cleanedBodies }
        };
      }
    }
    deserialize(data) {
      const stored = data.SPrigidBody;
      if (stored !== undefined) {
        const bodyEntries = Object.entries(stored.bodies);
        for (const entry of bodyEntries) {
          entry[1] = this.constructBodyFromJSON(entry[1]);
        }

        blocks = stored.blocks;
        allRigidbodies = Object.fromEntries(bodyEntries);

        if (bodyEntries.length > 0) hideBlocks = false;
        Object.values(blocks).forEach((b) => this._addBlock(b.opcode));

        if (isPM && isEditor) runtime.on("PROJECT_LOADED", runtime.requestBlocksUpdate);
      }
    }
  }

  Scratch.extensions.register(new SPrigidBody());
})(Scratch);
