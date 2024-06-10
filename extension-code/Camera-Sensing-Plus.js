// Name: Camera Sensing+
// ID: CameraSensingPlusSP
// Description: Better Camera Sensing Extension. Apply green screens and more!
// By: SharkPool

// Version V.2.0.0

(function(Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) throw new Error("Camera Sensing+ must run unsandboxed");

  const vm = Scratch.vm;
  const runtime = vm.runtime;

  if (!Scratch.vm.extensionManager.isExtensionLoaded("videoSensing")) runtime.extensionManager.loadExtensionIdSync("videoSensing");

  function hexToRgb(hex) {
    return [parseInt(hex.slice(1, 3), 16), parseInt(hex.slice(3, 5), 16), parseInt(hex.slice(5, 7), 16)];
  }

  const canvasElement = document.createElement("canvas");
  let canUse = false;
  function hasFrontOrBackCamera() {
    const user = navigator.userAgent;
    canUse = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(user);
  }
  hasFrontOrBackCamera();

  let legacyMode = true;
  let OGvideoID = -1;

  const menuIconURI =
"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxMDYuNTQ0NTgiIGhlaWdodD0iMTA2LjU0NDU4IiB2aWV3Qm94PSIwLDAsMTA2LjU0NDU4LDEwNi41NDQ1OCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE4Ni43Mjc3MSwtMTI2LjcyNzcxKSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0xODYuNzI3NzEsMTgwYzAsLTI5LjQyMTQ3IDIzLjg1MDgyLC01My4yNzIyOSA1My4yNzIyOSwtNTMuMjcyMjljMjkuNDIxNDcsMCA1My4yNzIyOSwyMy44NTA4MiA1My4yNzIyOSw1My4yNzIyOWMwLDI5LjQyMTQ3IC0yMy44NTA4Miw1My4yNzIyOSAtNTMuMjcyMjksNTMuMjcyMjljLTI5LjQyMTQ3LDAgLTUzLjI3MjI5LC0yMy44NTA4MiAtNTMuMjcyMjksLTUzLjI3MjI5eiIgZmlsbD0iIzAwYjJhNCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PHBhdGggZD0iTTI1MS44NzE4NSwxNjYuNzYyMDVjMC4xNzQ4NSwwLjM1NzY2IDAuMzEwMjgsMC42NzM2NSAwLjMxMDI4LDAuNTg1MDR2MjQuODIzODFjMCwwLjY4MDkgLTAuNTYxNTgsMS4yMDUwNCAtMS4yMDUwNCwxLjIwNTA0Yy0wLjExNjgyLDAgLTAuMzA0MTgsLTAuMDgwMzEgLTAuMzUyOTQsLTAuMTI5MDdsLTAuMjMyMTEsLTAuMTgxMjJsLTE1LjA4MDQ3LC05LjA0ODI4djUuNTAyNDRjMCw0LjY5MTMzIC0zLjg1MjExLDguNjc2MjggLTguNDM1MjcsOC42NzYyOGgtMjEuNDQ5NzFjLTQuODU3NTIsLTAuMjEyMzQgLTguNjc2MjgsLTQuMDMxMDkgLTguNjc2MjgsLTguNjc2Mjh2LTE5LjAzOTYyYzAsLTQuODc3NjYgMy43OTg2MSwtOC42NzYyOCA4LjY3NjI4LC04LjY3NjI4aDIxLjQ0OTcxYzQuNjY4NzYsMCA4LjQzNTI3LDMuODMxNDYgOC40MzUyNyw4LjY3NjI4djUuNTkxMThsMTQuODc0OSwtOS42NDExM2MwLjY0OTg3LC0wLjM4OTA5IDEuMzM1MDcsLTAuMjUyMDMgMS42ODUzNywwLjMzMTh6IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48cGF0aCBkPSJNMjcwLjczNzc2LDE3MC44MTg1NHYxOC4zNjI5TTI3OS45MTkyLDE4MGgtMTguMzYzMjYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI4LjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvZz48L2c+PC9zdmc+";

  const blockIconURI =
"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI2Ni42OTIxOCIgaGVpZ2h0PSI2Ni42OTIxOCIgdmlld0JveD0iMCwwLDY2LjY5MjE4LDY2LjY5MjE4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjA2LjY1MzkxLC0xNDYuNjUzOTEpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTIwNi42NTM5MSwyMTMuMzQ2MDl2LTY2LjY5MjE4aDY2LjY5MjE4djY2LjY5MjE4eiIgZmlsbD0iIzAwYjJhNCIgc3Ryb2tlPSJub25lIi8+PHBhdGggZD0iTTI2NC4yNjkzNywxNjguMjc3YzAuMTU0ODQsMC4zMTY3MyAwLjI3NDc3LDAuNTk2NTYgMC4yNzQ3NywwLjUxODA5djIxLjk4M2MwLDAuNjAyOTggLTAuNDk3MzEsMS4wNjcxNCAtMS4wNjcxNCwxLjA2NzE0Yy0wLjEwMzQ1LDAgLTAuMjY5MzcsLTAuMDcxMTIgLTAuMzEyNTUsLTAuMTE0M2wtMC4yMDU1NSwtMC4xNjA0OGwtMTMuMzU0NjgsLTguMDEyODF2NC44NzI3NWMwLDQuMTU0NDYgLTMuNDExMjgsNy42ODMzOCAtNy40Njk5NSw3LjY4MzM4aC0xOC45OTUwM2MtNC4zMDE2MywtMC4xODgwNCAtNy42ODMzOCwtMy41Njk3OCAtNy42ODMzOCwtNy42ODMzOHYtMTYuODYwNzVjMCwtNC4zMTk0NyAzLjM2MzksLTcuNjgzMzggNy42ODMzOCwtNy42ODMzOGgxOC45OTUwM2M0LjEzNDQ3LDAgNy40Njk5NSwzLjM5Mjk5IDcuNDY5OTUsNy42ODMzOHY0Ljk1MTMzbDEzLjE3MjYzLC04LjUzNzgxYzAuNTc1NSwtMC4zNDQ1NiAxLjE4MjI5LC0wLjIyMzE5IDEuNDkyNSwwLjI5MzgzeiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMDAwMDAwIi8+PC9nPjwvZz48L3N2Zz4=";

  const videoSensingURI =
"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAxMCkiIHN0cm9rZT0iIzAwMCIgZmlsbD0ibm9uZSIgc3Ryb2tlLW9wYWNpdHk9Ii4xNSI+PGNpcmNsZSBmaWxsPSIjRkZGIiBvcGFjaXR5PSIuMjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgY3g9IjMyIiBjeT0iMTYiIHI9IjQuNSIvPjxjaXJjbGUgZmlsbD0iI0ZGRiIgb3BhY2l0eT0iLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgY3g9IjMyIiBjeT0iMTIiIHI9IjQuNSIvPjxjaXJjbGUgZmlsbD0iI0ZGRiIgb3BhY2l0eT0iLjc1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGN4PSIzMiIgY3k9IjgiIHI9IjQuNSIvPjxjaXJjbGUgZmlsbD0iI0ZGRiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjeD0iMzIiIGN5PSI0IiByPSI0LjUiLz48cGF0aCBkPSJtMjIuNjcyIDQuNDItNi4xNzIgNFY2LjFjMC0yLjAxLTEuNTYzLTMuNi0zLjUtMy42SDQuMUMyLjA3NiAyLjUuNSA0LjA3Ni41IDYuMVYxNGMwIDEuOTI3IDEuNTg0IDMuNTEyIDMuNiAzLjZIMTNjMS45MDIgMCAzLjUtMS42NTMgMy41LTMuNnYtMi4yODNsNi4yNTcgMy43NTQuMDk3LjA3NWMuMDIuMDIuMDk4LjA1NC4xNDYuMDU0LjI2NyAwIC41LS4yMTcuNS0uNVY0LjhjMCAuMDM3LS4wNTYtLjA5NC0uMTI5LS4yNDMtLjE0NS0uMjQyLS40My0uMjk5LS43LS4xMzdaIiBmaWxsPSIjNEQ0RDREIi8+PC9nPjwvc3ZnPg==";

  class CameraSensingPlus {
    constructor() {
      this.camSize = [640, 480];
      this.cutSize = [0, 0];
      this.camStyle = "user";
      this.scale = 100;
      this.cutoutDir = 90;
      this.softness = 10;
    }
  
    getInfo() {
      return {
        id: "CameraSensingPlusSP",
        name: "Camera Sensing+",
        color1: "#00b2a4",
        menuIconURI,
        blockIconURI,
        blocks: [
          {
            blockType: Scratch.BlockType.XML,
            xml: "<sep gap=\"-10\"/><label text=\"Video Sensing Compatible\"/><sep gap=\"-12\"/><sep gap=\"12\"/>",
          },
          {
            opcode: "vidStatus",
            blockType: Scratch.BlockType.BOOLEAN,
            extensions: ["colours_pen"],
            blockIconURI: videoSensingURI,
            text: "is video on?"
          },
          {
            opcode: "videoTarget",
            blockType: Scratch.BlockType.COMMAND,
            extensions: ["colours_pen"],
            blockIconURI: videoSensingURI,
            text: "toggle video on [TARGET] [ON_OFF]",
            arguments: {
              ON_OFF: { type: Scratch.ArgumentType.STRING, menu: "onOffMenu" },
              TARGET: { type: Scratch.ArgumentType.STRING, menu: "targets" }
            }
          },
          {
            opcode: "captureVideo",
            blockType: Scratch.BlockType.REPORTER,
            extensions: ["colours_pen"],
            blockIconURI: videoSensingURI,
            text: "video frame data.URI",
            disableMonitor: true
          },
          { blockType: Scratch.BlockType.LABEL, text: "Non-Compatible:" },
          {
            blockType: Scratch.BlockType.XML,
            xml: "<sep gap=\"-10\"/><label text=\"Camera Feed\"/><sep gap=\"-12\"/><sep gap=\"12\"/>",
          },
          {
            opcode: "turnOnCamera",
            blockType: Scratch.BlockType.COMMAND,
            text: "turn camera [ON_OFF]",
            arguments: {
              ON_OFF: { type: Scratch.ArgumentType.STRING, menu: "onOffMenu" }
            }
          },
          {
            opcode: "whenCamera",
            blockType: Scratch.BlockType.EVENT,
            isEdgeActivated: false,
            text: "when camera turns [ON_OFF]",
            arguments: {
              ON_OFF: { type: Scratch.ArgumentType.STRING, menu: "onOffMenu" }
            }
          },
          {
            opcode: "captureWebcamFootage",
            blockType: Scratch.BlockType.REPORTER,
            text: "camera frame data.URI",
            disableMonitor: true
          },
          {
            opcode: "useCam",
            blockType: Scratch.BlockType.COMMAND,
            text: "use [TYPE] camera",
            arguments: {
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "frontBack" }
            }
          },
          {
            opcode: "camStatus",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "is camera on?"
          },
          {
            opcode: "hasBack",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "has back camera?"
          },
          "---",
          {
            opcode: "setResolution",
            blockType: Scratch.BlockType.COMMAND,
            text: "set camera resolution to width [WIDTH] and height [HEIGHT]",
            arguments: {
              WIDTH: { type: Scratch.ArgumentType.NUMBER, defaultValue: 640 },
              HEIGHT: { type: Scratch.ArgumentType.NUMBER, defaultValue: 480 }
            }
          },
          {
            opcode: "defaultRes",
            blockType: Scratch.BlockType.REPORTER,
            text: "default camera [W_H]",
            disableMonitor: true,
            arguments: {
              W_H: { type: Scratch.ArgumentType.STRING, menu: "widthHeight" }
            }
          },
          {
            opcode: "currentRes",
            blockType: Scratch.BlockType.REPORTER,
            text: "current camera [W_H]",
            disableMonitor: true,
            arguments: {
              W_H: { type: Scratch.ArgumentType.STRING, menu: "widthHeight" }
            }
          },
          { blockType: Scratch.BlockType.LABEL, text: "Feed Visuals" },
          {
            func: "enableLegacy",
            blockType: Scratch.BlockType.BUTTON,
            hideFromPalette: !legacyMode,
            text: "Enable Legacy Blocks"
          },
          {
            opcode: "deleteColor",
            blockType: Scratch.BlockType.REPORTER,
            text: "remove color [COLOR] from [DATA_URI]",
            hideFromPalette: legacyMode,
            arguments: {
              COLOR: { type: Scratch.ArgumentType.COLOR, defaultValue: "#ff0000" },
              DATA_URI: { type: Scratch.ArgumentType.STRING, defaultValue: "insert-data.uri" }
            }
          },
          {
            opcode: "replaceColor",
            blockType: Scratch.BlockType.REPORTER,
            text: "replace color [COLOR] with [REPLACE_COLOR] from [DATA_URI]",
            hideFromPalette: legacyMode,
            arguments: {
              COLOR: { type: Scratch.ArgumentType.COLOR, defaultValue: "#ff0000" },
              REPLACE_COLOR: { type: Scratch.ArgumentType.COLOR, defaultValue: "#00ff00" },
              DATA_URI: { type: Scratch.ArgumentType.STRING, defaultValue: "insert-data.uri" }
            }
          },
          {
            opcode: "setSoftness",
            blockType: Scratch.BlockType.COMMAND,
            text: "set softness of color detection to [AMT]%",
            hideFromPalette: legacyMode,
            arguments: {
              AMT: { type: Scratch.ArgumentType.NUMBER, defaultValue: 10 }
            }
          },
          "---",
          {
            opcode: "clipImage",
            blockType: Scratch.BlockType.REPORTER,
            text: "cut out [CUTOUT] from [MAIN]",
            hideFromPalette: legacyMode,
            arguments: {
              MAIN: { type: Scratch.ArgumentType.STRING, defaultValue: "data.uri-here" },
              CUTOUT: { type: Scratch.ArgumentType.STRING, defaultValue: "cutout-data.uri-here" }
            }
          },
          {
            opcode: "setCutout",
            blockType: Scratch.BlockType.COMMAND,
            text: "set cutout position to x [X] y [Y]",
            hideFromPalette: legacyMode,
            arguments: {
              X: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
              Y: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 }
            }
          },
          {
            opcode: "changeCutout",
            blockType: Scratch.BlockType.COMMAND,
            text: "change cutout position by x [X] y [Y]",
            hideFromPalette: legacyMode,
            arguments: {
              X: { type: Scratch.ArgumentType.NUMBER, defaultValue: 10 },
              Y: { type: Scratch.ArgumentType.NUMBER, defaultValue: 10 }
            }
          },
          {
            opcode: "currentCut",
            blockType: Scratch.BlockType.REPORTER,
            text: "current cutout [POS]",
            disableMonitor: true,
            hideFromPalette: legacyMode,
            arguments: {
              POS: { type: Scratch.ArgumentType.STRING, menu: "positions" }
            }
          },
          "---",
          {
            opcode: "setScale",
            blockType: Scratch.BlockType.COMMAND,
            text: "set clipping size to [SIZE]%",
            hideFromPalette: legacyMode,
            arguments: {
              SIZE: { type: Scratch.ArgumentType.NUMBER, defaultValue: 100 }
            }
          },
          {
            opcode: "changeScale",
            blockType: Scratch.BlockType.COMMAND,
            text: "change clipping size by [SIZE]",
            hideFromPalette: legacyMode,
            arguments: {
              SIZE: { type: Scratch.ArgumentType.NUMBER, defaultValue: 10 }
            }
          },
          {
            opcode: "currentScale",
            blockType: Scratch.BlockType.REPORTER,
            text: "clipping size",
            hideFromPalette: legacyMode
          },
          "---",
          {
            opcode: "setDirection",
            blockType: Scratch.BlockType.COMMAND,
            text: "set clipping direction to [ANGLE]",
            hideFromPalette: legacyMode,
            arguments: {
              ANGLE: { type: Scratch.ArgumentType.ANGLE, defaultValue: 90 }
            }
          },
          {
            opcode: "changeDirection",
            blockType: Scratch.BlockType.COMMAND,
            text: "change clipping direction by [ANGLE]",
            hideFromPalette: legacyMode,
            arguments: {
              ANGLE: { type: Scratch.ArgumentType.ANGLE, defaultValue: 15 }
            }
          },
          {
            opcode: "currentDir",
            blockType: Scratch.BlockType.REPORTER,
            hideFromPalette: legacyMode,
            text: "clipping direction"
          }
        ],
        menus: {
          onOffMenu: ["on", "off"],
          widthHeight: ["width", "height"],
          positions: ["x", "y"],
          frontBack: [{ text: "front", value: "user" }, { text: "back", value: "environment" }],
          targets: { acceptReporters: true, items: "getTargets" }
        }
      };
    }

    // Helper Funcs

    enableLegacy() { legacyMode = false; vm.extensionManager.refreshBlocks() }

    getTargets() {
      const spriteNames = [];
      spriteNames.push({ text: "myself", value: "_myself_" });
      spriteNames.push({ text: "Stage", value: "_stage_" });
      const targets = Scratch.vm.runtime.targets;
      for (let index = 1; index < targets.length; index++) {
        const target = targets[index];
        if (target.isOriginal) spriteNames.push({ text: target.getName(), value: target.getName() });
      }
      return spriteNames.length > 0 ? spriteNames : [""];
    }

    printCapture() {
      if (this.videoElement) {
        canvasElement.width = Math.abs(Scratch.Cast.toNumber(this.camSize[0]));
        canvasElement.height = Math.abs(Scratch.Cast.toNumber(this.camSize[1]));
        const context = canvasElement.getContext("2d");
        if (this.camSize[0] < 0) {
          context.translate(canvasElement.width, 0);
          context.scale(-1, 1);
        }
        if (this.camSize[1] < 0) {
          context.translate(0, canvasElement.height);
          context.scale(1, -1);
        }
        context.drawImage(this.videoElement, 0, 0, canvasElement.width, canvasElement.height);
        return canvasElement.toDataURL("image/png");
      }
      return "";
    }

    // Compatible Blocks

    vidStatus() { return runtime.ioDevices.video.videoReady }

    videoTarget(args, util) {
      let target = args.TARGET === "_myself_" ? util.target : runtime.getSpriteTargetByName(args.TARGET);
      if (!target && args.TARGET !== "_stage_") return;
      if (OGvideoID === -1) OGvideoID = vm.runtime.ioDevices.video._drawable;
      if (args.TARGET === "_stage_") {
        const vidLayer = vm.renderer._allDrawables[OGvideoID];
        if (vidLayer) vidLayer.updateVisible(args.ON_OFF === "on");
      } else {
        const drawable = vm.renderer._allDrawables[target.drawableID];
        if (drawable.ogSkin === undefined) drawable.ogSkin = drawable._skin._id;

        if (args.ON_OFF === "on") drawable._skin = vm.renderer._allSkins[runtime.ioDevices.video._skinId];
        else {
          drawable._skin = vm.renderer._allSkins[drawable.ogSkin];
          target.updateAllDrawableProperties();
          // to avoid stretching issues
          const oldScale = target.size;
          target.setSize(-1);
          target.setSize(oldScale);
        }
      }
    }

    captureVideo() {
      const imageData = runtime.ioDevices.video.getFrame({});
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      canvas.width = imageData.width;
      canvas.height = imageData.height;
      context.putImageData(imageData, 0, 0);
      return canvas.toDataURL();
    }

    // Non-Compatible Blocks

    async turnOnCamera(args) {
      if (args.ON_OFF === "on") {
        if (!this.mediaStream) {
          try {
            this.mediaStream = "";
            if (canUse) {
              this.mediaStream = await navigator.mediaDevices.getUserMedia({
                video: { facingMode: { exact: this.camStyle } }
              });
            } else {
              this.mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
            }
            this.videoElement = document.createElement("video");
            this.videoElement.srcObject = this.mediaStream;
            this.videoElement.play();
            runtime.startHats("CameraSensingPlusSP_whenCamera", { ON_OFF : "on" });
          } catch (error) {
            console.error("Error accessing the camera:", error);
          }
        }
      } else {
        if (this.mediaStream) {
          this.mediaStream.getTracks().forEach(track => track.stop());
          this.videoElement.remove();
          this.videoElement = null;
          this.mediaStream = null;
          runtime.startHats("CameraSensingPlusSP_whenCamera", { ON_OFF : "off" });
        }
      }
    }

    async useCam(args) {
      if (canUse) {
        // Camera Reset
        await this.turnOnCamera({ ON_OFF : "off" });
        this.camStyle = args.TYPE;
        await this.turnOnCamera({ ON_OFF : "on" });
      } else { console.warn("Process Denied, Camera has no Front/Back") }
    }

    setResolution(args) {
      this.camSize = [
        Scratch.Cast.toNumber(args.WIDTH),
        Scratch.Cast.toNumber(args.HEIGHT)
      ];
    }

    defaultRes(args) {
      if (!this.videoElement || !this.mediaStream) return "camera is not on";
      return this.videoElement[args.W_H === "width" ? "videoWidth" : "videoHeight"];
    }
    currentRes(args) { return this.camSize[args.W_H === "width" ? 0 : 1] }

    camStatus() { return Scratch.Cast.toBoolean(this.videoElement || this.mediaStream) }

    hasBack() { return canUse }

    captureWebcamFootage() {
      if (this.videoElement) return this.printCapture();
      else return "Camera is Off";
    }

    // Legacy Blocks

    setCutout(args) {
      this.cutSize = [
        Scratch.Cast.toNumber(args.X),
        Scratch.Cast.toNumber(args.Y)
      ];
    }

    changeCutout(args) {
      this.cutSize = [
        this.cutSize[0] + Scratch.Cast.toNumber(args.X),
        this.cutSize[1] + Scratch.Cast.toNumber(args.Y)
      ];
    }

    currentCut(args) { return this.cutSize[args.POS === "x" ? 0 : 1] }

    setScale(args) { this.scale = Scratch.Cast.toNumber(args.SIZE) }

    changeScale(args) { this.scale = this.scale + Scratch.Cast.toNumber(args.SIZE) }

    setDirection(args) { this.cutoutDir = Scratch.Cast.toNumber(args.ANGLE) }

    changeDirection(args) {
      let direction = this.cutoutDir + Scratch.Cast.toNumber(args.ANGLE);
      if (direction > 180) direction = -180 + Scratch.Cast.toNumber(args.ANGLE);
      if (direction < -180) direction = 180 + Scratch.Cast.toNumber(args.ANGLE);
      this.cutoutDir = direction;
    }

    currentScale() { return this.scale }

    currentDir() { return this.cutoutDir }

    setSoftness(args) { this.softness = Scratch.Cast.toNumber(args.AMT) }

    deleteColor(args) { return this.replaceColor({ ...args, override: true }) }

    replaceColor(args) {
      const colRemove = hexToRgb(args.COLOR);
      const colReplace = hexToRgb(args.REPLACE_COLOR || args.COLOR);
      const canvasElement = document.createElement("canvas");
      const context = canvasElement.getContext("2d");
      const imageElement = new Image();
      const softness = this.softness;
      return new Promise(resolve => {
        imageElement.onload = () => {
          canvasElement.width = imageElement.width;
          canvasElement.height = imageElement.height;
          context.drawImage(imageElement, 0, 0);
          const imageData = context.getImageData(0, 0, canvasElement.width, canvasElement.height);
          const data = imageData.data;

          for (let i = 0; i < data.length; i += 4) {
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];
            if (
              r >= colRemove[0] - softness && r <= colRemove[0] + softness &&
              g >= colRemove[1] - softness && g <= colRemove[1] + softness &&
              b >= colRemove[2] - softness && b <= colRemove[2] + softness
            ) {
              data[i] = colReplace[0];
              data[i + 1] = colReplace[1];
              data[i + 2] = colReplace[2];
              data[i + 3] = args.override !== undefined ? 0 : data[i + 3];
            }
          }
          context.putImageData(imageData, 0, 0);
          resolve(canvasElement.toDataURL("image/png"));
        };
        imageElement.src = args.DATA_URI;
      });
    }

    clipImage(args) {
      return new Promise((resolve, reject) => {
        const mainImage = new Image();
        mainImage.onload = () => {
          const cutoutImage = new Image();
          cutoutImage.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = mainImage.width;
            canvas.height = mainImage.height;
            const context = canvas.getContext("2d");
            const scaledWidth = cutoutImage.width + this.scale;
            const scaledHeight = cutoutImage.height + this.scale;
            const cutX = this.cutSize[0] + (mainImage.width / 2) - (scaledWidth / 2);
            const cutY = this.cutSize[1] - (mainImage.height / 2) + (scaledHeight / 2);

            context.drawImage(mainImage, 0, 0);
            context.globalCompositeOperation = "destination-in";
            context.translate(cutX + scaledWidth / 2, cutY * -1 + scaledHeight / 2);
            context.rotate(((this.cutoutDir + 270) * Math.PI) / 180);
            context.drawImage(cutoutImage, -scaledWidth / 2, -scaledHeight / 2, scaledWidth, scaledHeight);
            context.setTransform(1, 0, 0, 1, 0, 0);
            context.globalCompositeOperation = "source-over";
            resolve(canvas.toDataURL("image/png"));
          };
          cutoutImage.src = args.CUTOUT;
        };
        mainImage.src = args.MAIN;
      });
    }
  }

  Scratch.extensions.register(new CameraSensingPlus());
})(Scratch);
