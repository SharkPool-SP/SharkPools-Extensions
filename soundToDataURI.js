/*
* v1.1 | Created by @0znzw.
* Original non functional version by GPT-3 and Sharkpool.
* Do not remove this comment
*/
(function (Scratch) {
    'use strict';

    class SoundToDataUrI {
        getInfo() {
            return {
                id: '0ASPsoundDataUrl',
                color1: "#009dff",
                name: "Sound to Data URI",
                blocks: [{
                    opcode: 'soundToDataUri',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'convert sound [SOUND] to data URI',
                    arguments: {
                        SOUND: {
                            type: Scratch.ArgumentType.SOUND
                        }
                    }
                }]
            };
        }

        soundToDataUri(args, util) {
            const index = this._getSoundIndex(args.SOUND, util);
            if (index < 0) return '';
            const sprite = util.target.sprite;
            const dataUrl = sprite.sounds[index].asset.encodeDataURI();
            return dataUrl;
        }

        _getSoundIndex(soundName, util) {
            const sounds = util.target.sprite.sounds;
            return sounds.indexOf(sounds.filter((sound) => {
                return sound.name == soundName;
            })[0]);
        }
    }

    Scratch.extensions.register(new SoundToDataUrI());
})(Scratch);
