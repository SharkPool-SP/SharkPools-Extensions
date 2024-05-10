// Name: Collision Tags
// ID: lbgcollisiontag
// Description: Basically just a touching with collision tag block, inspired by one of lily's ideas
// Inspired by: An idea Lily had but didnt make yet
// By: LittleBlueGamer

// Version V.1.0.0

(function (Scratch) {
    "use strict";

    const COLLISION_TAG = Symbol("collision.tag");

    const vm = Scratch.vm;

    const implementTag = (target, originalTarget) => {
        if (COLLISION_TAG in target) {
            return;
        }

        target[COLLISION_TAG] = originalTarget ? originalTarget[COLLISION_TAG] : "default";
    };
    vm.runtime.targets.forEach((target) => implementTag(target));
    vm.runtime.on("targetWasCreated", (target, originalTarget) =>
        implementTag(target, originalTarget)
    );
    vm.runtime.on("PROJECT_LOADED", () => {
        vm.runtime.targets.forEach((target) => implementTag(target));
    });

    class GarbageUtilities {
        getInfo() {
            return {
                id: "lbgcollisiontag",
                name: "Collsion Tags",
                color1: "#0085ff",
                color2: "#0069cb",
                color3: "#004d94",
                blocks: [
                    {
                        blockType: Scratch.BlockType.BOOLEAN,
                        opcode: "touchingtag",
                        text: "touching any [sprite] with tag as [tag]",
                        arguments: {
                            sprite: {
                                type: Scratch.ArgumentType.STRING,
                                menu: "spriteMenu",
                            },
                            tag: {
                                type: Scratch.ArgumentType.STRING
                            }
                        }
                    },
                    {
                        blockType: Scratch.BlockType.REPORTER,
                        opcode: "getCollisionTag",
                        text: "collision tag",
                        filter: [Scratch.TargetType.SPRITE],
                        disableMonitor: true,
                    },
                    {
                        blockType: Scratch.BlockType.COMMAND,
                        opcode: "setCollisionTag",
                        text: "set collision tag to [tag]",
                        arguments: {
                            tag: {
                                type: Scratch.ArgumentType.STRING
                            }
                        },
                        filter: [Scratch.TargetType.SPRITE]
                    },
                ],
                menus: {
                    spriteMenu: {
                        acceptReporters: true,
                        items: "getSprites"
                    }
                },
            };
        }
        touchingtag(args, util) {
            const target = Scratch.vm.runtime.getSpriteTargetByName(args.sprite);
            const main = target.sprite.clones[0];
            const mainDrawable = [main.drawableID];
            const drawableClones = target.sprite.clones
                .filter((clone) => {
                    const othertag = clone[COLLISION_TAG];
                    return (
                        othertag && Scratch.Cast.compare(othertag, args.tag) === 0
                    );
                })
                .map((clone) => clone.drawableID);
            if (drawableClones.length === 0) {
                return false;
            }
            if (Scratch.vm.renderer.isTouchingDrawables(util.target.drawableID, mainDrawable)) {
                return true;
            }
            return Scratch.vm.renderer.isTouchingDrawables(
                util.target.drawableID,
                drawableClones
            );
        }
        getCollisionTag(args, util) {
            return util.target[COLLISION_TAG];
        }
        setCollisionTag(args, util) {
            util.target[COLLISION_TAG] = args.tag;
        }
        getSprites() {
            let spriteNames = [];
            const targets = Scratch.vm.runtime.targets;
            const myself = Scratch.vm.runtime.getEditingTarget().sprite.name;
            for (let index = 1; index < targets.length; index++) {
                const curTarget = targets[index].sprite;
                let display = curTarget.name;
                if (myself === curTarget.name) {
                    display = "myself";
                }
                if (targets[index].isOriginal) {
                    const jsonOBJ = {
                        text: display,
                        value: curTarget.name,
                    };
                    spriteNames.push(jsonOBJ);
                }
            }
            if (spriteNames.length > 0) {
                return spriteNames;
            } else {
                return [{ text: "", value: 0 }];
            }
        }
    }

    Scratch.extensions.register(new GarbageUtilities());
})(Scratch);
