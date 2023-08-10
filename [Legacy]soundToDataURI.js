/*
 * Sound To DataURI | v1.3 by 0znzw (English Version)
 * All code is by 0znzw || licensed under MIT license.
 * Do not remove this comment
*/

(function (Scratch) {
    'use strict';

    //Icons and Design By SharkPool
    const menuIconURI =
        'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxOTEiIGhlaWdodD0iMTkxIiB2aWV3Qm94PSIwLDAsMTkxLDE5MSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE0NC41LC04NC41KSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0xNDQuNSwxODBjMCwtNTIuNzQzMiA0Mi43NTY4LC05NS41IDk1LjUsLTk1LjVjNTIuNzQzMiwwIDk1LjUsNDIuNzU2OCA5NS41LDk1LjVjMCw1Mi43NDMyIC00Mi43NTY4LDk1LjUgLTk1LjUsOTUuNWMtNTIuNzQzMiwwIC05NS41LC00Mi43NTY4IC05NS41LC05NS41eiIgZmlsbD0iIzAwNzZmZiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PGcgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZS1saW5lY2FwPSJidXR0Ij48cGF0aCBkPSJNMjA1Ljc1NzAyLDE5Ny45ODU4OWMtMy43MjgzOSwwIC02Ljc1MDg2LC0zLjIxNjQ1IC02Ljc1MDg2LC03LjE4NDEzdi0yMS42MDM1OGMwLC0zLjk2NzY4IDMuMDIyNDYsLTcuMTg0MTMgNi43NTA4NiwtNy4xODQxM2gyMC4zMDA2OGMzLjcyODM5LDAgNi43NTA4NiwzLjIxNjQ1IDYuNzUwODYsNy4xODQxM3YyMS42MDM1OGMwLDMuOTY3NjggLTMuMDIyNDYsNy4xODQxMyAtNi43NTA4Niw3LjE4NDEzeiIvPjxwYXRoIGQ9Ik0yMzkuNzU5MzgsMjEyLjg5MTE3Yy0zLjQ3NjU5LC0yLjc0OTQ3IC0xNi40MjM1LC0xMi45ODg1NSAtMjYuOTY4MDUsLTIxLjMyNzcxYy04LjAzMDEsLTYuMzUwNjEgLTguMzIxNDgsLTE2LjYxNzcxIC0wLjUyODMyLC0yMi43ODA5NGMxMC42ODQ1NywtOC40NDk5IDI0LjA5MDM1LC0xOS4wNTE4NyAyNy41OTUyOSwtMjEuODIzNzZjMS42ODgzNSwtMS4zMzUyMyAzLjIzNzk0LC0wLjM4NDQyIDMuMjM3OTQsMi4wNDc3NWMwLDcuNjU2NjggMCw0OC4yOTcyNyAwLDYyLjAwNDgyYzAsMi44MzU3MSAtMS42MDMxMiwzLjI1MDk3IC0zLjMzNjg3LDEuODc5ODN6Ii8+PC9nPjxwYXRoIGQ9Ik0yNTAuNzkzMzMsMTY3LjUwMTU3YzAsMCAxLjM2MjU3LDAuMDU1ODYgMi4wMTk5OSwwLjE2MzI5YzUuOTA0NDgsMC45NjQ5IDEwLjQxMDUxLDYuMDg5ODMgMTAuNDEwNTEsMTIuMjY3MjFjMCw2LjA5NTkgLTQuMzg3OTYsMTEuMTY2OTQgLTEwLjE3NzY0LDEyLjIyNjg2Yy0wLjczMDYzLDAuMTMzNzUgLTIuMjUyODYsMC4yMDM2NCAtMi4yNTI4NiwwLjIwMzY0eiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PHBhdGggZD0iTTI1Mi42NDQ2OCwxNTguODc5NTZjMCwwIDE5LjIxNzg4LDEuMzkzMjEgMTkuMTc0NzEsMjAuNzYxNThjLTAuMDQyNTgsMTkuMDk4ODQgLTE5LjcwMzY2LDIxLjU1NTAxIC0xOS43MDM2NiwyMS41NTUwMSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik0yNTIuOTI4NzMsMTQ3LjUxNzY3YzAsMCAyOS41Mzc3OSwyLjE0MTM1IDI5LjQ3MTQyLDMxLjkxMDQzYy0wLjA2NTQzLDI5LjM1NDgyIC0zMC4yODQ0MiwzMy4xMjk5NCAtMzAuMjg0NDIsMzMuMTI5OTQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI1IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNMTkzLjgxMDIyLDEzMy4xMDM0MmMwLDAgLTExLjAzMzQ4LDYuMzUyNzIgLTEzLjYyMDY1LDEzLjE4NTM3Yy0yLjU4NzE4LDYuODMyNjYgNC4xNDkyNiwxNC45NzE1OSAtMC4xMDU3OSwyMi44OTIxNmMtMy45OTAyNCw3LjQyNzY0IC0xMi44NjMwNywxMS4wODc0MSAtMTIuODYzMDcsMTEuMDg3NDFsMC4wMDk0LDEuOTg2ODZjMCwwIDkuOTIyODUsMy42MDg3IDEzLjIyMzk0LDEyLjE2NjU4YzIuNTUyMzQsNi42MTY4MiAtMi45OTU3NywxNC40Njg0IDAsMjMuMDQyNGMyLjk5NTc3LDguNTc0IDEyLjE2NjAyLDExLjc3NzIzIDEyLjE2NjAyLDExLjc3NzIzIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMTAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik0yODYuNzY1MDgsMTMzLjEwMzQyYzAsMCAxMS4wMzM0OCw2LjM1MjcyIDEzLjYyMDY1LDEzLjE4NTM3YzIuNTg3MTgsNi44MzI2NiAtNC4xNDkyNiwxNC45NzE1OSAwLjEwNTc5LDIyLjg5MjE2YzMuOTkwMjQsNy40Mjc2NCAxMi44NjMwNywxMS4wODc0MSAxMi44NjMwNywxMS4wODc0MWwtMC4wMDk0LDEuOTg2ODZjMCwwIC05LjkyMjg1LDMuNjA4NyAtMTMuMjIzOTQsMTIuMTY2NThjLTIuNTUyMzQsNi42MTY4MiAyLjk5NTc3LDE0LjQ2ODQgMCwyMy4wNDI0Yy0yLjk5NTc3LDguNTc0IC0xMi4xNjYwMiwxMS43NzcyMyAtMTIuMTY2MDIsMTEuNzc3MjMiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMTAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvZz48L2c+PC9zdmc+';

    const blockIconURI = menuIconURI
    
    class SoundToDataUrI {
        getInfo() {
            return {
                id: '0ASPsoundDataUrl',
                color1: "#0076ff",
                name: "Sound to Data URI",
                menuIconURI,
                blockIconURI,
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
