// Name: Geolocation
// ID: SPgeolocation
// Description: Get the Location of Users
// By: SharkPool

//  Version 1.0.0

(function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) {
    throw new Error("Geolocation must run unsandboxed");
  }

  class SPgeolocation {
    getInfo() {
      return {
        id: "SPgeolocation",
        name: "Geolocation",
        color1: "#029fe8",
        blocks: [
          {
            blockType: Scratch.BlockType.LABEL,
            text: "WARNING: Works in Certain Browsers",
          },
          {
            opcode: "getLocation",
            blockType: Scratch.BlockType.REPORTER,
            text: "get [TYPE]",
            arguments: {
              TYPE: {
                type: Scratch.ArgumentType.STRING,
                menu: "TYPES",
                defaultValue: "latitude"
              }
            }
          },
          {
            blockType: Scratch.BlockType.LABEL,
            text: "Unreliable Blocks",
          },
          {
            opcode: "getOthers",
            blockType: Scratch.BlockType.REPORTER,
            text: "get [TYPE]",
            arguments: {
              TYPE: {
                type: Scratch.ArgumentType.STRING,
                menu: "TYPES2",
                defaultValue: "altitude"
              }
            }
          }
        ],
        menus: {
          TYPES: {
            acceptReporters: true,
            items: ["latitude", "longitude"]
          },
          TYPES2: {
            acceptReporters: true,
            items: ["altitude", "speed"]
          }
        }
      };
    }

    async getLocation(args) { return await this.getThing(args.TYPE)}
    async getOthers(args) { return await this.getThing(args.TYPE)}

    async getThing(THING) {
      if (navigator.geolocation) {
        try {
          const position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
          });
          console.log(position);
          return (position.coords[THING])? position.coords[THING] : "";
        } catch (error) {
          return "Error: " + error.message;
        }
      } else {
        return "Geolocation is not supported by this browser";
      }
    }
  }

  Scratch.extensions.register(new SPgeolocation());
})(Scratch);