// Name: PNG Spritesheets
// ID: DragoPngSpritesheets
// Description:  Create and Export PNG Spritesheets
// By Drago Cuven <https://github.com/Drago-Cuven>

(function (Scratch) {
  'use strict';
  const vm = Scratch.vm;

const menuIconURI = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI4MC45Mjc2NCIgaGVpZ2h0PSI4MC45Mjc2NCIgdmlld0JveD0iMCwwLDgwLjkyNzY0LDgwLjkyNzY0Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTk5LjUzNjE4LC0xMzkuNTM2MTgpIj48ZyBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiPjxwYXRoIGQ9Ik0xOTkuNTM2MTgsMTgwYzAsLTIyLjM0NzU1IDE4LjExNjI3LC00MC40NjM4MiA0MC40NjM4MiwtNDAuNDYzODJjMjIuMzQ3NTUsMCA0MC40NjM4MiwxOC4xMTYyNyA0MC40NjM4Miw0MC40NjM4MmMwLDIyLjM0NzU1IC0xOC4xMTYyNyw0MC40NjM4MiAtNDAuNDYzODIsNDAuNDYzODJjLTIyLjM0NzU1LDAgLTQwLjQ2MzgyLC0xOC4xMTYyNyAtNDAuNDYzODIsLTQwLjQ2MzgyeiIgZmlsbC1vcGFjaXR5PSIwLjUwMTk2IiBmaWxsPSIjMDAwMDAwIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48cGF0aCBkPSJNMjAzLjc5OTU5LDE4MGMwLC0xOS45OTI5MyAxNi4yMDc0OCwtMzYuMjAwNDEgMzYuMjAwNDEsLTM2LjIwMDQxYzE5Ljk5MjkzLDAgMzYuMjAwNDEsMTYuMjA3NDggMzYuMjAwNDEsMzYuMjAwNDFjMCwxOS45OTI5MyAtMTYuMjA3NDgsMzYuMjAwNDEgLTM2LjIwMDQxLDM2LjIwMDQxYy0xOS45OTI5MywwIC0zNi4yMDA0MSwtMTYuMjA3NDggLTM2LjIwMDQxLC0zNi4yMDA0MXoiIGZpbGw9IiMyOTM5Y2MiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjxwYXRoIGQ9Ik0yMDguMjc5MjUsMTc5Ljk5OTk4YzAsLTE3LjU1NzkgMTQuMjMzNDksLTMxLjc5MTM5IDMxLjc5MTM5LC0zMS43OTEzOWMxNy41NTc5LDAgMzEuNzkxMzksMTQuMjMzNDkgMzEuNzkxMzksMzEuNzkxMzljMCwxNy41NTc5IC0xNC4yMzM0OSwzMS43OTEzOSAtMzEuNzkxMzksMzEuNzkxMzljLTE3LjU1NzksMCAtMzEuNzkxMzksLTE0LjIzMzQ5IC0zMS43OTEzOSwtMzEuNzkxMzl6IiBmaWxsPSIjMzM0N2ZmIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48cGF0aCBkPSJNMjQyLjMwMzQzLDE3Ny45OTIxNnYtMy40NTUxIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNMjQyLjMwMzQzLDE2OS45ODQzOXYtMy40NTUxIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNMjQyLjMwMzQzLDE1OC41MjE1M3YzLjQ1NTEiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik0yNDIuMzEwOSwxNzcuOTk5NjJoMy40NTUxIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNMjUwLjMxODY1LDE3Ny45OTk2MmgzLjQ1NTEiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik0yNTguMzI2NDIsMTc3Ljk5OTYyaDMuNDU1MSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjIuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTIzMy43MzEwNCwxODQuMjY0MjdjMCwwIC0xLjU1NzU4LC0xOC4yMjUxNyAtMC45MzI1MywtMjEuNTg2NzZjMC42MjUwNSwtMy4zNjE2IDYuMTEzMjgsLTYuMjc2MDEgNi4xMTMyOCwtNi4yNzYwMXYyNy44NjI3NnoiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjxwYXRoIGQ9Ik0yMzUuODM3ODIsMTgxLjUwMTEyaDI3Ljg2Mjc2YzAsMCAtMi45MTQ0Miw1LjQ4ODIzIC02LjI3NjAxLDYuMTEzMjhjLTMuMzYxNiwwLjYyNTA2IC0yMS41ODY3NiwtMC45MzI1MyAtMjEuNTg2NzYsLTAuOTMyNTN6IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48cGF0aCBkPSJNMjM1LjQ0OTI2LDE4OC42NTI3NGMtMi4yODg5OSwwIC00LjE0NDU5LC0xLjg1NTU5IC00LjE0NDU5LC00LjE0NDU5YzAsLTIuMjg4OTkgMS44NTU1OSwtNC4xNDQ1OSA0LjE0NDU5LC00LjE0NDU5YzIuMjg4OTksMCA0LjE0NDU5LDEuODU1NTkgNC4xNDQ1OSw0LjE0NDU5YzAsMi4yODg5OSAtMS44NTU1OSw0LjE0NDU5IC00LjE0NDU5LDQuMTQ0NTl6IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48cGF0aCBkPSJNMjI2LjAzODM5LDE3Ny4yMDM4N2M1LjM3ODczLDAgOS43MzkwNSwyLjY5MDM2IDkuNzM5MDUsNi4wMDkwOWMwLDMuMzE4NzMgLTQuMzYwMzMsNi4wMDkwOSAtOS43MzkwNSw2LjAwOTA5Yy01LjM3ODczLDAgLTkuNzM5MDQsLTIuNjkwMzYgLTkuNzM5MDQsLTYuMDA5MDljMCwtMy4zMTg3MyA0LjM2MDMyLC02LjAwOTA5IDkuNzM5MDQsLTYuMDA5MDl6TTIxOS44MjIyNSwxODMuMjEyOTZjMCwxLjg5MzU2IDIuNzgzMDYsMy40Mjg1OCA2LjIxNjE0LDMuNDI4NThjMy40MzMwOCwwIDYuMjE2MTQsLTEuNTM1MDIgNi4yMTYxNCwtMy40Mjg1OGMwLC0xLjg5MzU2IC0yLjc4MzA2LC0zLjQyODU5IC02LjIxNjE0LC0zLjQyODU5Yy0zLjQzMzA4LDAgLTYuMjE2MTQsMS41MzUwMyAtNi4yMTYxNCwzLjQyODU5eiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PHBhdGggZD0iTTI0Mi4zNjQ5NywxOTMuODU5NGMwLDUuMzc4NzMgLTIuNjkwMzYsOS43MzkwNSAtNi4wMDkwOSw5LjczOTA1Yy0zLjMxODczLDAgLTYuMDA5MDksLTQuMzYwMzMgLTYuMDA5MDksLTkuNzM5MDVjMCwtNS4zNzg3MyAyLjY5MDM2LC05LjczOTA1IDYuMDA5MDksLTkuNzM5MDVjMy4zMTg3MywwIDYuMDA5MDksNC4zNjAzMyA2LjAwOTA5LDkuNzM5MDV6TTIzNi4zNTU4OCwxODcuNjQzMjZjLTEuODkzNTYsMCAtMy40Mjg1OCwyLjc4MzA2IC0zLjQyODU4LDYuMjE2MTRjMCwzLjQzMzA4IDEuNTM1MDIsNi4yMTYxNCAzLjQyODU4LDYuMjE2MTRjMS44OTM1NSwwIDMuNDI4NTgsLTIuNzgzMDYgMy40Mjg1OCwtNi4yMTYxNGMwLC0zLjQzMzA4IC0xLjUzNTAyLC02LjIxNjE0IC0zLjQyODU4LC02LjIxNjE0eiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PC9nPjwvZz48L3N2Zz48IS0tcm90YXRpb25DZW50ZXI6NDAuNDYzODIwMDAwMDAwMDM6NDAuNDYzODItLT4=";

class PNGSHEETSEXT {
    constructor() {
        this.sheetDatabase = {
            png: null,
            xml: null,
            padding: 0,
            animations: {},
            frameOffsets: {}
        };
        this.focusSheet = {
            dataurl: '',
            json: {
                cellCountX: 1,
                cellCountY: 1,
                cellWidth: 0,
                cellHeight: 0
            },
            cellContents: {},
            pendingFrames: {}
        };
        this.xmlSheet = {
            dataurl: '',
            xml: '',
            paddingX: 0,
            paddingY: 0,
            animations: {}
        };
    }

    getInfo() {
        return {
            id: 'DragonPNGSpritesheets',
            name: 'PNG Spritesheets',
            menuIconURI,
            color1: "#3347ff",
            color2: "#296acc",
            color3: "#1f5099",
            blocks: [
                {
                    blockType: Scratch.BlockType.LABEL,
                    text: 'XML Spritesheets Utilities',
                },
                {
                    opcode: 'getFlippedImageURI',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'get flipped image uri [uri] x axis: [flipX] y axis: [flipY]',
                    arguments: {
                        uri: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'data:image/png;base64, ...',
                        },
                        flipX: {
                            type: Scratch.ArgumentType.BOOLEAN,
                            defaultValue: true,
                        },
                        flipY: {
                            type: Scratch.ArgumentType.BOOLEAN,
                            defaultValue: false,
                        },
                    },
                },
                {
                    opcode: 'getSpriteURI',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'get [animation] [number] sprite URI png uri: [pngURI] xml text: [xmlText]',
                    arguments: {
                        animation: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'Animation',
                        },
                        number: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0,
                        },
                        pngURI: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'data:image/png;base64, ...',
                        },
                        xmlText: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "<xml>...</xml>",
                        },
                    },
                },
                {
                    opcode: 'importAnimationToSpritesheet',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'import animation [animation] from dataurl: [dataurl] xml: [xml] to dataurl: [targetDataurl] xml: [targetXml]',
                    arguments: {
                        animation: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'idle',
                        },
                        dataurl: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '',
                        },
                        xml: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '',
                        },
                        targetDataurl: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '',
                        },
                        targetXml: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '',
                        },
                    },
                },
                {
                    opcode: 'lengthOfFrames',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'length of [animationName] frames in [xmlText]',
                    arguments: {
                        animationName: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'Animation',
                        },
                        xmlText: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '<xml>...</xml>',
                        },
                    },
                },
                {
                    opcode: 'lengthOfAllFrames',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'length of frames in [xmlText]',
                    arguments: {
                        xmlText: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '<xml>...</xml>',
                        },
                    },
                },
                {
                    opcode: 'ifAnimationExists',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: 'if [animation] of [xmlText] exists',
                    arguments: {
                        animation: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'Animation',
                        },
                        xmlText: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '<xml>...</xml>',
                        },
                    },
                },
                {
                    opcode: 'subTextureExists',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: 'if [animation] [number] of [xmlText] exists',
                    arguments: {
                        animation: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'Animation Frame',
                        },
                        number: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0,
                        },
                        xmlText: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '<xml>...</xml>',
                        },
                    },
                },
                {
                    opcode: 'lengthOfAnimations',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'length of animations in [xmlText]',
                    arguments: {
                        xmlText: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '<xml>...</xml>',
                        },
                    },
                },
                {
                    blockType: Scratch.BlockType.LABEL,
                    text: 'XML Spritesheet JSON Data Extractor',
                },
                {
                    opcode: 'getAnimationArray',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'get array of [animation] in [xmlText]',
                    arguments: {
                        animation: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'Animation',
                        },
                        xmlText: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '<xml>...</xml>',
                        },
                    },
                },
                {
                    opcode: 'getXMLAnimationsArray',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'get animations array in [xmlText]',
                    arguments: {
                        xmlText: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '<xml>...</xml>',
                        },
                    },
                },
                {
                    opcode: 'getSubTextureCoordinates',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'get [animation] [number] coordinates in [xmlText]',
                    arguments: {
                        animation: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'Animation Frame',
                        },
                        number: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '0',
                        },
                        xmlText: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '<xml>...</xml>',
                        },
                    },
                },
                {
                    opcode: 'getSubtexturesArray',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'get subtextures/frames array in [xmlText]',
                    arguments: {
                        xmlText: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '<xml>...</xml>',
                        },
                    },
                },
                {
                    blockType: Scratch.BlockType.LABEL,
                    text: 'SheetMaking',
                },
                {
                    opcode: 'getSpritesheetAsset',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'spritesheet [asset]',
                    arguments: {
                        asset: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'sheetAssetMenu',
                            defaultValue: 'png',
                        },
                    },
                },
                {
                    opcode: 'setSpritesheetToData',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'set spritesheet to dataurl [dataurl] and xml [xml]',
                    arguments: {
                        dataurl: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '',
                        },
                        xml: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '',
                        },
                    },
                },
                {
                    opcode: 'generateSpritesheet',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'generate spritesheet',
                },
                {
                    opcode: 'importAnimationToSheetMaker',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'import animation [animation] from dataurl: [dataurl] xml: [xml] to sheet',
                    arguments: {
                        animation: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'idle',
                        },
                        dataurl: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '',
                        },
                        xml: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '',
                        },
                    },
                },
                {
                    opcode: 'setFrameOffsets',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'set offsets of frame [number] of animation [animation] to x: [x] y: [y]',
                    arguments: {
                        number: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0,
                        },
                        animation: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'idle',
                        },
                        x: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0,
                        },
                        y: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0,
                        },
                    },
                },
                {
                    opcode: 'clearSheet',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'clear sheet',
                },
                {
                    opcode: 'setSpritesheetPadding',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'set spritesheet padding to [padding]',
                    arguments: {
                        padding: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0,
                        },
                    },
                },
                {
                    opcode: 'addFrameToSpritesheet',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'add dataurl [dataurl] as frame [number] of animation [animation]',
                    arguments: {
                        dataurl: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '',
                        },
                        number: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: -1,
                        },
                        animation: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'idle',
                        },
                    },
                },
                {
                    opcode: 'removeAnimationFromSheet',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'remove animation [animation]',
                    arguments: {
                        animation: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '',
                        },
                    },
                },
                {
                    opcode: 'removeFrameFromSheet',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'remove frame [number] of animation [animation]',
                    arguments: {
                        number: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0,
                        },
                        animation: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '',
                        },
                    },
                },
                {
                    opcode: 'sheetmakerLengthOfFrames',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'sheetmaker length of [animationName] frames',
                    arguments: {
                        animationName: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'Animation',
                        },
                    },
                },
                {
                    opcode: 'sheetmakerLengthOfAllFrames',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'sheetmaker length of all frames',
                },
                {
                    opcode: 'sheetmakerIfAnimationExists',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: 'sheetmaker if [animation] exists',
                    arguments: {
                        animation: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'Animation',
                        },
                    },
                },
                {
                    opcode: 'sheetmakerSubTextureExists',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: 'sheetmaker if [animation] [number] exists',
                    arguments: {
                        animation: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'Animation Frame',
                        },
                        number: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0,
                        },
                    },
                },
                {
                    opcode: 'sheetmakerLengthOfAnimations',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'sheetmaker length of animations',
                },
                {
                    opcode: 'sheetmakerGetAnimationArray',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'sheetmaker get array of [animation]',
                    arguments: {
                        animation: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'Animation',
                        },
                    },
                },
                {
                    opcode: 'sheetmakerGetXMLAnimationsArray',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'sheetmaker get animations array',
                },
                {
                    opcode: 'sheetmakerGetSubTextureCoordinates',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'sheetmaker get [animation] [number] coordinates',
                    arguments: {
                        animation: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'Animation Frame',
                        },
                        number: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '0',
                        },
                    },
                },
                {
                    opcode: 'sheetmakerGetSubtexturesArray',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'sheetmaker get subtextures/frames array',
                },
                {
                    blockType: Scratch.BlockType.LABEL,
                    text: 'Icon Sheet Generator',
                },
                {
                    opcode: 'getIconSheet',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'dataurl of iconsheet with icons: idle: [idle] losing: [losing] winning: [winning] danger: [danger] edge: [edge] strain: [strain] poise: [poise] layout: [layout]',
                    arguments: {
                        idle: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '',
                        },
                        losing: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '',
                        },
                        winning: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '',
                        },
                        danger: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '',
                        },
                        edge: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '',
                        },
                        strain: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '',
                        },
                        poise: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '',
                        },
                        layout: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'layoutMenu',
                            defaultValue: 'horizontal',
                        },
                    },
                },
                {
                    opcode: 'getIconFromSheet',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'get icon [icontype] from [dataurl]',
                    arguments: {
                        icontype: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'iconTypeMenu',
                            defaultValue: 'idle',
                        },
                        dataurl: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '',
                        },
                    },
                },
                {
                    opcode: 'getIconCountOfSheet',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'icon count of sheet [dataurl]',
                    arguments: {
                        dataurl: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '',
                        },
                    },
                },
                {
                    opcode: 'getIconArrayOfSheet',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'icon array of sheet [dataurl]',
                    arguments: {
                        dataurl: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '',
                        },
                    },
                },
                {
                    opcode: 'getIconSheetOrientation',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'icon sheet orientation of [dataurl]',
                    arguments: {
                        dataurl: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '',
                        },
                    },
                },
                {
                    blockType: Scratch.BlockType.LABEL,
                    text: 'Precise Sheets',
                },
                {
                    opcode: 'setFocusSheet',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'set precise sheet to dataurl: [dataurl] with json data: [json]',
                    arguments: {
                        dataurl: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '',
                        },
                        json: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '',
                        },
                    },
                },
                {
                    opcode: 'newSheet',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'new precise sheet',
                },
                {
                    opcode: 'generatePreciseSheet',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'generate precise sheet',
                },
                {
                    opcode: 'premadeJsonCutting',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'precise sheet premade json cutting: cut into x: [x] y: [y] pieces',
                    arguments: {
                        x: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 1,
                        },
                        y: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 1,
                        },
                    },
                },
                {
                    opcode: 'getFocusSheetAsset',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'precise sheet [asset]',
                    arguments: {
                        asset: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'focusSheetAssetMenu',
                            defaultValue: 'dataurl',
                        },
                    },
                },
                {
                    opcode: 'getCellOfSheet',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'precise sheet get cell x: [x] y: [y]',
                    arguments: {
                        x: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 1,
                        },
                        y: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 1,
                        },
                    },
                },
                {
                    opcode: 'getCellDimensions',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'precise sheet cell dimensions',
                },
                {
                    opcode: 'setImageInSheet',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'precise sheet set [dataurl] at x: [x] y: [y]',
                    arguments: {
                        dataurl: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '',
                        },
                        x: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 1,
                        },
                        y: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 1,
                        },
                    },
                },
                {
                    opcode: 'removeCellFromSheet',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'precise sheet remove x: [x] y: [y]',
                    arguments: {
                        x: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 1,
                        },
                        y: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 1,
                        },
                    },
                },
                {
                    opcode: 'getSheetCellInfo',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'precise sheet cell info',
                },
                {
                    opcode: 'resizeSheetCells',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'precise sheet resize cells to width: [width] height: [height]',
                    arguments: {
                        width: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 100,
                        },
                        height: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 100,
                        },
                    },
                },
                {
                    opcode: 'preciseSheetGetCell',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'precise sheet get cell x: [x] y: [y] from dataurl: [dataurl] json: [json]',
                    arguments: {
                        x: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 1,
                        },
                        y: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 1,
                        },
                        dataurl: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '',
                        },
                        json: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '',
                        },
                    },
                },
                {
                    opcode: 'preciseSheetSetImage',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'precise sheet set [dataurl] at x: [x] y: [y] in dataurl: [targetDataurl] json: [targetJson]',
                    arguments: {
                        dataurl: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '',
                        },
                        x: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 1,
                        },
                        y: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 1,
                        },
                        targetDataurl: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '',
                        },
                        targetJson: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '',
                        },
                    },
                },
                {
                    opcode: 'preciseSheetRemoveCell',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'precise sheet remove x: [x] y: [y] from dataurl: [dataurl] json: [json]',
                    arguments: {
                        x: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 1,
                        },
                        y: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 1,
                        },
                        dataurl: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '',
                        },
                        json: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '',
                        },
                    },
                },
                {
                    opcode: 'preciseSheetResizeCells',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'precise sheet resize cells to width: [width] height: [height] in dataurl: [dataurl] json: [json]',
                    arguments: {
                        width: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 100,
                        },
                        height: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 100,
                        },
                        dataurl: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '',
                        },
                        json: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '',
                        },
                    },
                },
                {
                    opcode: 'preciseSheetGenerate',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'precise sheet generate from dataurl: [dataurl] json: [json]',
                    arguments: {
                        dataurl: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '',
                        },
                        json: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '',
                        },
                    },
                },
                {
                    blockType: Scratch.BlockType.LABEL,
                    text: 'Precise XML Sheets',
                },
                {
                    opcode: 'setXMLSheet',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'set XML sheet to dataurl: [dataurl] with xml: [xml]',
                    arguments: {
                        dataurl: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '',
                        },
                        xml: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '',
                        },
                    },
                },
                {
                    opcode: 'newXMLSheet',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'new XML sheet',
                },
                {
                    opcode: 'importAnimationToXMLSheet',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'import animation [animation] from dataurl: [dataurl] xml: [xml] to sheet',
                    arguments: {
                        animation: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'idle',
                        },
                        dataurl: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '',
                        },
                        xml: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '',
                        },
                    },
                },
                {
                    opcode: 'setXMLPadding',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'set XML sheet padding x: [px] y: [py]',
                    arguments: {
                        px: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0,
                        },
                        py: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0,
                        },
                    },
                },
                {
                    opcode: 'addXMLAnimation',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'add animation [name]',
                    arguments: {
                        name: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'idle',
                        },
                    },
                },
                {
                    opcode: 'addXMLFrame',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'add frame [dataurl] to animation [animation] at frame [number]',
                    arguments: {
                        dataurl: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '',
                        },
                        animation: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'idle',
                        },
                        number: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0,
                        },
                    },
                },
                {
                    opcode: 'getXMLFrameCount',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'frame count of animation [animation]',
                    arguments: {
                        animation: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'idle',
                        },
                    },
                },
                {
                    opcode: 'getXMLFrame',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'get frame [number] of animation [animation]',
                    arguments: {
                        number: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0,
                        },
                        animation: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'idle',
                        },
                    },
                },
                {
                    opcode: 'getXMLPadding',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'get XML sheet padding [dimension]',
                    arguments: {
                        dimension: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'paddingDimensionMenu',
                            defaultValue: 'x',
                        },
                    },
                },
                {
                    opcode: 'getXMLSheetAsset',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'get XML sheet [asset]',
                    arguments: {
                        asset: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'xmlSheetAssetMenu',
                            defaultValue: 'png',
                        },
                    },
                },
                {
                    opcode: 'getXMLAnimationsData',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'get XML sheet animations [dataType]',
                    arguments: {
                        dataType: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'xmlAnimationsDataTypeMenu',
                            defaultValue: 'count',
                        },
                    },
                },
            ],
            menus: {
                fileType: {
                    acceptReporters: true,
                    items: ['png', 'xml']
                },
                sheetAssetMenu: {
                    acceptReporters: true,
                    items: ['png', 'xml']
                },
                iconTypeMenu: {
                    acceptReporters: true,
                    items: ['idle', 'losing', 'winning', 'danger', 'edge', 'strain', 'poise']
                },
                layoutMenu: {
                    acceptReporters: true,
                    items: ['horizontal', 'vertical']
                },
                focusSheetAssetMenu: {
                    acceptReporters: true,
                    items: ['dataurl', 'json']
                },
                paddingDimensionMenu: {
                    acceptReporters: true,
                    items: ['x', 'y']
                },
                xmlSheetAssetMenu: {
                    acceptReporters: true,
                    items: ['png', 'xml']
                },
                xmlAnimationsDataTypeMenu: {
                    acceptReporters: true,
                    items: ['count', 'array']
                }
            }
        };
    }

    getSpriteURI(args) {
        return new Promise((resolve) => {
            const animation = args.animation;
            const number = args.number;
            const pngURI = args.pngURI;
            const xmlText = args.xmlText;
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
            const subTextures = xmlDoc.getElementsByTagName('SubTexture');
            let selectedName = '';
            for (let i = 0; i < subTextures.length; i++) {
                const subTexture = subTextures[i];
                const name = subTexture.getAttribute('name');
                const animationNameWithNumber = `${animation}${number.toString().padStart(4, '0')}`;
                if (name === animationNameWithNumber) {
                    selectedName = name;
                    break;
                }
            }
            if (selectedName !== '') {
                const subTexture = Array.from(subTextures).find((sub) => sub.getAttribute('name') === selectedName);
                if (subTexture) {
                    const x = parseInt(subTexture.getAttribute('x'));
                    const y = parseInt(subTexture.getAttribute('y'));
                    const width = parseInt(subTexture.getAttribute('width'));
                    const height = parseInt(subTexture.getAttribute('height'));
                    const frameX = parseInt(subTexture.getAttribute('frameX'));
                    const frameY = parseInt(subTexture.getAttribute('frameY'));
                    const frameWidth = parseInt(subTexture.getAttribute('frameWidth'));
                    const frameHeight = parseInt(subTexture.getAttribute('frameHeight'));
                    const img = new Image();
                    img.src = pngURI;
                    img.onload = function () {
                        const canvas = document.createElement('canvas');
                        const ctx = canvas.getContext('2d');
                        canvas.width = width;
                        canvas.height = height;
                        ctx.drawImage(img, x, y, frameWidth, frameHeight, -frameX, -frameY, width, height);
                        const finalCanvas = document.createElement('canvas');
                        const finalCtx = finalCanvas.getContext('2d');
                        finalCanvas.width = frameWidth;
                        finalCanvas.height = frameHeight;
                        finalCtx.drawImage(canvas, 0, 0, width, height, 0, 0, frameWidth, frameHeight);
                        finalCanvas.toBlob(function (blob) {
                            const reader = new FileReader();
                            reader.onloadend = function () {
                                resolve(reader.result);
                            };
                            reader.readAsDataURL(blob);
                        }, 'image/png');
                    };
                }
            } else {
                resolve('');
            }
        });
    }

    importAnimationToSpritesheet(args) {
        return new Promise((resolve) => {
            const animation = args.animation;
            const dataurl = args.dataurl;
            const xml = args.xml;
            const targetDataurl = args.targetDataurl;
            const targetXml = args.targetXml;

            if (!dataurl || !dataurl.startsWith('data:image/png') || !targetDataurl || !targetDataurl.startsWith('data:image/png')) {
                resolve(JSON.stringify({ dataurl: '', xml: '' }));
                return;
            }

            const parser = new DOMParser();
            const sourceXmlDoc = parser.parseFromString(xml, 'text/xml');
            const targetXmlDoc = parser.parseFromString(targetXml, 'text/xml');
            
            const sourceSubTextures = sourceXmlDoc.getElementsByTagName('SubTexture');
            const targetSubTextures = targetXmlDoc.getElementsByTagName('SubTexture');
            
            const animationFrames = [];
            for (let i = 0; i < sourceSubTextures.length; i++) {
                const subTexture = sourceSubTextures[i];
                const name = subTexture.getAttribute('name');
                if (name && name.startsWith(animation)) {
                    animationFrames.push({
                        name: name,
                        x: parseInt(subTexture.getAttribute('x')),
                        y: parseInt(subTexture.getAttribute('y')),
                        width: parseInt(subTexture.getAttribute('width')),
                        height: parseInt(subTexture.getAttribute('height')),
                        frameX: parseInt(subTexture.getAttribute('frameX') || '0'),
                        frameY: parseInt(subTexture.getAttribute('frameY') || '0'),
                        frameWidth: parseInt(subTexture.getAttribute('frameWidth') || subTexture.getAttribute('width')),
                        frameHeight: parseInt(subTexture.getAttribute('frameHeight') || subTexture.getAttribute('height'))
                    });
                }
            }

            if (animationFrames.length === 0) {
                resolve(JSON.stringify({ dataurl: targetDataurl, xml: targetXml }));
                return;
            }

            const sourceImg = new Image();
            const targetImg = new Image();
            
            sourceImg.onload = () => {
                targetImg.onload = () => {
                    const maxWidth = Math.max(targetImg.width, ...animationFrames.map(frame => frame.width));
                    const totalHeight = targetImg.height + animationFrames.reduce((sum, frame) => sum + frame.height, 0);
                    
                    const canvas = document.createElement('canvas');
                    canvas.width = maxWidth;
                    canvas.height = totalHeight;
                    const ctx = canvas.getContext('2d');
                    
                    let currentY = 0;
                    ctx.drawImage(targetImg, 0, 0);
                    currentY = targetImg.height;
                    
                    const newSubTextures = Array.from(targetSubTextures).map(subTexture => ({
                        name: subTexture.getAttribute('name'),
                        x: parseInt(subTexture.getAttribute('x')),
                        y: parseInt(subTexture.getAttribute('y')),
                        width: parseInt(subTexture.getAttribute('width')),
                        height: parseInt(subTexture.getAttribute('height')),
                        frameX: parseInt(subTexture.getAttribute('frameX') || '0'),
                        frameY: parseInt(subTexture.getAttribute('frameY') || '0'),
                        frameWidth: parseInt(subTexture.getAttribute('frameWidth') || subTexture.getAttribute('width')),
                        frameHeight: parseInt(subTexture.getAttribute('frameHeight') || subTexture.getAttribute('height'))
                    }));
                    
                    for (const frame of animationFrames) {
                        ctx.drawImage(sourceImg, frame.x, frame.y, frame.width, frame.height, 0, currentY, frame.width, frame.height);
                        
                        newSubTextures.push({
                            name: frame.name,
                            x: 0,
                            y: currentY,
                            width: frame.width,
                            height: frame.height,
                            frameX: frame.frameX,
                            frameY: frame.frameY,
                            frameWidth: frame.frameWidth,
                            frameHeight: frame.frameHeight
                        });
                        
                        currentY += frame.height;
                    }
                    
                    canvas.toBlob((blob) => {
                        if (!blob) {
                            resolve(JSON.stringify({ dataurl: targetDataurl, xml: targetXml }));
                            return;
                        }
                        const reader = new FileReader();
                        reader.onloadend = () => {
                            const newDataurl = reader.result;
                            const newXmlContent = `<?xml version="1.0" encoding="utf-8"?>
<TextureAtlas imagePath="spritesheet.png">
${newSubTextures.map(sub => 
    `    <SubTexture name="${sub.name}" x="${sub.x}" y="${sub.y}" width="${sub.width}" height="${sub.height}" frameX="${sub.frameX}" frameY="${sub.frameY}" frameWidth="${sub.frameWidth}" frameHeight="${sub.frameHeight}"/>`
).join('\n')}
</TextureAtlas>`;
                            
                            resolve(JSON.stringify({ dataurl: newDataurl, xml: newXmlContent }));
                        };
                        reader.readAsDataURL(blob);
                    }, 'image/png');
                };
                targetImg.src = targetDataurl;
            };
            sourceImg.src = dataurl;
        });
    }

    lengthOfFrames(args) {
        const animationName = args.animationName;
        const xmlText = args.xmlText;
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
        const subTextures = xmlDoc.getElementsByTagName('SubTexture');
        const regex = new RegExp(`^${animationName}\\d{4}$`);
        let frameCount = 0;
        for (let i = 0; i < subTextures.length; i++) {
            const subTexture = subTextures[i];
            const name = subTexture.getAttribute('name');
            if (name && regex.test(name)) {
                frameCount++;
            }
        }
        if (frameCount > 10000) {
            frameCount = 10000;
        }
        return frameCount;
    }

    lengthOfAllFrames(args) {
        const xmlText = args.xmlText;
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
        const subTextures = xmlDoc.getElementsByTagName('SubTexture');
        return subTextures.length.toString();
    }

    ifAnimationExists(args) {
        const animation = args.animation;
        const xmlText = args.xmlText;
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
        const subTextures = xmlDoc.getElementsByTagName('SubTexture');
        const regex = new RegExp(`^${animation}\\d{4}$`);
        for (let i = 0; i < subTextures.length; i++) {
            const subTexture = subTextures[i];
            const name = subTexture.getAttribute('name');
            if (name && regex.test(name)) {
                return true;
            }
        }
        return false;
    }

    subTextureExists(args) {
        const animation = args.animation;
        const number = args.number;
        const xmlText = args.xmlText;
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
        const subTextures = xmlDoc.getElementsByTagName('SubTexture');
        const subTextureName = `${animation}${String(number).padStart(4, '0')}`;
        for (let i = 0; i < subTextures.length; i++) {
            const subTexture = subTextures[i];
            const name = subTexture.getAttribute('name');
            if (name === subTextureName) {
                return true;
            }
        }
        return false;
    }

    lengthOfAnimations(args) {
        const xmlText = args.xmlText;
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
        const subTextures = xmlDoc.getElementsByTagName('SubTexture');
        const animationSet = new Set();
        for (let i = 0; i < subTextures.length; i++) {
            const subTexture = subTextures[i];
            const name = subTexture.getAttribute('name');
            const animationName = name.substring(0, name.length - 4);
            animationSet.add(animationName);
        }
        return animationSet.size;
    }

    getAnimationArray(args) {
        const animation = args.animation;
        const xmlText = args.xmlText;
        const animationArray = [];
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
        const subTextures = xmlDoc.getElementsByTagName('SubTexture');
        const regex = new RegExp(`^${animation}\\d{4}$`);
        const currentAnimation = [];
        for (let i = 0; i < subTextures.length; i++) {
            const subTexture = subTextures[i];
            const name = subTexture.getAttribute('name');
            if (name && regex.test(name)) {
                currentAnimation.push(name);
            }
        }
        if (currentAnimation.length > 0) {
            animationArray.push(currentAnimation);
        }
        let jsonResult = JSON.stringify(animationArray);
        if (jsonResult.length > 2) {
            jsonResult = jsonResult.slice(1, -1);
        }
        return jsonResult;
    }

    getXMLAnimationsArray(args) {
        const xmlText = args.xmlText;
        const animationsArray = [];
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
        const subTextures = xmlDoc.getElementsByTagName('SubTexture');
        const animationSet = new Set();
        for (let i = 0; i < subTextures.length; i++) {
            const subTexture = subTextures[i];
            const name = subTexture.getAttribute('name');
            const animationName = name.replace(/\d{4}$/, '');
            if (animationName && !animationSet.has(animationName)) {
                animationSet.add(animationName);
            }
        }
        animationsArray.push(Array.from(animationSet));
        const jsonString = JSON.stringify(animationsArray);
        const jsonStringWithoutBrackets = jsonString.slice(1, -1);
        return jsonStringWithoutBrackets;
    }

    getSubTextureCoordinates(args) {
        const animation = args.animation;
        const number = args.number;
        const xmlText = args.xmlText;
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
        const subTextures = xmlDoc.getElementsByTagName('SubTexture');
        const subTextureName = `${animation}${String(number).padStart(4, '0')}`;
        for (let i = 0; i < subTextures.length; i++) {
            const subTexture = subTextures[i];
            const name = subTexture.getAttribute('name');
            if (name === subTextureName) {
                const coordinates = {
                    x: parseInt(subTexture.getAttribute('x')),
                    y: parseInt(subTexture.getAttribute('y')),
                    width: parseInt(subTexture.getAttribute('width')),
                    height: parseInt(subTexture.getAttribute('height')),
                    frameX: parseInt(subTexture.getAttribute('frameX')),
                    frameY: parseInt(subTexture.getAttribute('frameY')),
                    frameWidth: parseInt(subTexture.getAttribute('frameWidth')),
                    frameHeight: parseInt(subTexture.getAttribute('frameHeight')),
                };
                return JSON.stringify(coordinates);
            }
        }
        return JSON.stringify({});
    }

    getSubtexturesArray(args) {
        const xmlText = args.xmlText;
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
        const subTextures = xmlDoc.getElementsByTagName('SubTexture');
        const subtextureArray = [];
        for (let i = 0; i < subTextures.length; i++) {
            const subTexture = subTextures[i];
            const name = subTexture.getAttribute('name');
            if (name) {
                subtextureArray.push(name);
            }
        }
        return JSON.stringify(subtextureArray);
    }

    getFlippedImageURI(args) {
        const image = new Image();
        image.src = args.uri;
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        return new Promise((resolve) => {
            image.onload = function () {
                canvas.width = image.width;
                canvas.height = image.height;
                if (args.flipX || args.flipY) {
                    ctx.translate(args.flipX ? canvas.width : 0, args.flipY ? canvas.height : 0);
                    ctx.scale(args.flipX ? -1 : 1, args.flipY ? -1 : 1);
                }
                ctx.drawImage(image, 0, 0);
                canvas.toBlob(function (blob) {
                    if (!blob) {
                        resolve('');
                        return;
                    }
                    const reader = new FileReader();
                    reader.onloadend = function () {
                        resolve(reader.result);
                    };
                    reader.readAsDataURL(blob);
                }, 'image/png');
            };
        });
    }

    checked() {
        return true;
    }

    getSpritesheetAsset(args) {
        const asset = args.asset;
        if (asset === 'png') {
            return this.sheetDatabase.png || '';
        } else if (asset === 'xml') {
            return this.sheetDatabase.xml || '';
        }
        return '';
    }

    setSpritesheetToData(args) {
        this.sheetDatabase.png = args.dataurl;
        this.sheetDatabase.xml = args.xml;
    }

    async generateSpritesheet() {
        if (Object.keys(this.sheetDatabase.animations).length === 0) {
            return;
        }

        const padding = this.sheetDatabase.padding;
        const allFrames = [];
        const framePromises = [];

        for (const [animation, frames] of Object.entries(this.sheetDatabase.animations)) {
            for (let i = 0; i < frames.length; i++) {
                if (frames[i]) {
                    const promise = new Promise((resolve) => {
                        const img = new Image();
                        img.onload = () => {
                            const frameKey = `${animation}_${i}`;
                            const offsets = this.sheetDatabase.frameOffsets[frameKey] || { x: 0, y: 0 };
                            resolve({
                                img: img,
                                name: `${animation}${i.toString().padStart(4, '0')}`,
                                width: img.width,
                                height: img.height,
                                animation: animation,
                                frameIndex: i,
                                offsetX: offsets.x,
                                offsetY: offsets.y
                            });
                        };
                        img.src = frames[i];
                    });
                    framePromises.push(promise);
                }
            }
        }

        const loadedFrames = await Promise.all(framePromises);
        allFrames.push(...loadedFrames);

        if (allFrames.length === 0) return;

        const maxWidth = Math.max(...allFrames.map(frame => frame.width));
        const totalHeight = allFrames.reduce((sum, frame) => sum + frame.height + padding, 0);
        
        const canvas = document.createElement('canvas');
        canvas.width = maxWidth;
        canvas.height = totalHeight;
        const ctx = canvas.getContext('2d');

        let currentY = 0;
        const subTextures = [];

        for (const frame of allFrames) {
            ctx.drawImage(frame.img, 0, currentY, frame.width, frame.height);
            subTextures.push({
                name: frame.name,
                x: 0,
                y: currentY,
                width: frame.width,
                height: frame.height,
                frameX: -frame.offsetX,
                frameY: -frame.offsetY,
                frameWidth: frame.width,
                frameHeight: frame.height
            });

            currentY += frame.height + padding;
        }

        const pngDataURL = canvas.toDataURL('image/png');
        this.sheetDatabase.png = pngDataURL;
        
        const xmlContent = `<?xml version="1.0" encoding="utf-8"?>
<TextureAtlas imagePath="spritesheet.png">
${subTextures.map(sub => 
    `    <SubTexture name="${sub.name}" x="${sub.x}" y="${sub.y}" width="${sub.width}" height="${sub.height}" frameX="${sub.frameX}" frameY="${sub.frameY}" frameWidth="${sub.frameWidth}" frameHeight="${sub.frameHeight}"/>`
).join('\n')}
</TextureAtlas>`;
        
        this.sheetDatabase.xml = xmlContent;
    }

    importAnimationToSheetMaker(args) {
        const animation = args.animation;
        const dataurl = args.dataurl;
        const xml = args.xml;

        if (!dataurl || !dataurl.startsWith('data:image/png') || !xml) {
            return;
        }

        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xml, 'text/xml');
        const subTextures = xmlDoc.getElementsByTagName('SubTexture');
        
        const animationFrames = [];
        for (let i = 0; i < subTextures.length; i++) {
            const subTexture = subTextures[i];
            const name = subTexture.getAttribute('name');
            if (name && name.startsWith(animation)) {
                animationFrames.push({
                    name: name,
                    x: parseInt(subTexture.getAttribute('x')),
                    y: parseInt(subTexture.getAttribute('y')),
                    width: parseInt(subTexture.getAttribute('width')),
                    height: parseInt(subTexture.getAttribute('height'))
                });
            }
        }

        if (animationFrames.length === 0) {
            return;
        }

        const sourceImg = new Image();
        sourceImg.onload = () => {
            for (let i = 0; i < animationFrames.length; i++) {
                const frame = animationFrames[i];
                const canvas = document.createElement('canvas');
                canvas.width = frame.width;
                canvas.height = frame.height;
                const ctx = canvas.getContext('2d');
                
                ctx.drawImage(sourceImg, frame.x, frame.y, frame.width, frame.height, 0, 0, frame.width, frame.height);
                
                canvas.toBlob((blob) => {
                    if (!blob) return;
                    const reader = new FileReader();
                    reader.onloadend = () => {
                        const frameDataurl = reader.result;
                        this.addFrameToSpritesheet({
                            dataurl: frameDataurl,
                            number: i,
                            animation: animation
                        });
                    };
                    reader.readAsDataURL(blob);
                }, 'image/png');
            }
        };
        sourceImg.src = dataurl;
    }

    setFrameOffsets(args) {
        const number = args.number;
        const animation = args.animation;
        const x = args.x;
        const y = args.y;
        if (!animation || animation.trim() === '') return;
        if (number < 0) return;
        const frameKey = `${animation}_${number}`;
        this.sheetDatabase.frameOffsets[frameKey] = { x: x, y: y };
    }

    clearSheet() {
        this.sheetDatabase = {
            png: null,
            xml: null,
            padding: 0,
            animations: {},
            frameOffsets: {}
        };
    }

    setSpritesheetPadding(args) {
        const padding = args.padding;
        this.sheetDatabase.padding = Math.max(0, padding);
    }

    addFrameToSpritesheet(args) {
        const dataurl = args.dataurl;
        let number = args.number;
        const animation = args.animation;
        if (!animation || animation.trim() === '') return;
        if (!dataurl || !dataurl.startsWith('data:image/png')) return;
        if (!this.sheetDatabase.animations[animation]) {
            this.sheetDatabase.animations[animation] = [];
        }
        if (number < 0) {
            number = this.sheetDatabase.animations[animation].length;
        }
        this.sheetDatabase.animations[animation][number] = dataurl;
    }

    removeAnimationFromSheet(args) {
        const animation = args.animation;
        if (animation && this.sheetDatabase.animations[animation]) {
            delete this.sheetDatabase.animations[animation];
            Object.keys(this.sheetDatabase.frameOffsets).forEach(key => {
                if (key.startsWith(`${animation}_`)) {
                    delete this.sheetDatabase.frameOffsets[key];
                }
            });
        }
    }

    removeFrameFromSheet(args) {
        const number = args.number;
        const animation = args.animation;
        if (animation && this.sheetDatabase.animations[animation] && number >= 0) {
            this.sheetDatabase.animations[animation].splice(number, 1);
            const frameKey = `${animation}_${number}`;
            delete this.sheetDatabase.frameOffsets[frameKey];
            for (let i = number + 1; i < this.sheetDatabase.animations[animation].length; i++) {
                const oldKey = `${animation}_${i}`;
                const newKey = `${animation}_${i - 1}`;
                if (this.sheetDatabase.frameOffsets[oldKey]) {
                    this.sheetDatabase.frameOffsets[newKey] = this.sheetDatabase.frameOffsets[oldKey];
                    delete this.sheetDatabase.frameOffsets[oldKey];
                }
            }
        }
    }

    sheetmakerLengthOfFrames(args) {
        if (!this.sheetDatabase.xml) return 0;
        return this.lengthOfFrames({
            animationName: args.animationName,
            xmlText: this.sheetDatabase.xml
        });
    }

    sheetmakerLengthOfAllFrames() {
        if (!this.sheetDatabase.xml) return 0;
        return this.lengthOfAllFrames({
            xmlText: this.sheetDatabase.xml
        });
    }

    sheetmakerIfAnimationExists(args) {
        if (!this.sheetDatabase.xml) return false;
        return this.ifAnimationExists({
            animation: args.animation,
            xmlText: this.sheetDatabase.xml
        });
    }

    sheetmakerSubTextureExists(args) {
        if (!this.sheetDatabase.xml) return false;
        return this.subTextureExists({
            animation: args.animation,
            number: args.number,
            xmlText: this.sheetDatabase.xml
        });
    }

    sheetmakerLengthOfAnimations() {
        if (!this.sheetDatabase.xml) return 0;
        return this.lengthOfAnimations({
            xmlText: this.sheetDatabase.xml
        });
    }

    sheetmakerGetAnimationArray(args) {
        if (!this.sheetDatabase.xml) return '[]';
        return this.getAnimationArray({
            animation: args.animation,
            xmlText: this.sheetDatabase.xml
        });
    }

    sheetmakerGetXMLAnimationsArray() {
        if (!this.sheetDatabase.xml) return '[]';
        return this.getXMLAnimationsArray({
            xmlText: this.sheetDatabase.xml
        });
    }

    sheetmakerGetSubTextureCoordinates(args) {
        if (!this.sheetDatabase.xml) return '{}';
        return this.getSubTextureCoordinates({
            animation: args.animation,
            number: args.number,
            xmlText: this.sheetDatabase.xml
        });
    }

    sheetmakerGetSubtexturesArray() {
        if (!this.sheetDatabase.xml) return '[]';
        return this.getSubtexturesArray({
            xmlText: this.sheetDatabase.xml
        });
    }

    getIconSheet(args) {
        return new Promise((resolve) => {
            const icons = [
                { name: 'poise', dataurl: args.poise },
                { name: 'strain', dataurl: args.strain },
                { name: 'edge', dataurl: args.edge },
                { name: 'danger', dataurl: args.danger },
                { name: 'winning', dataurl: args.winning },
                { name: 'losing', dataurl: args.losing },
                { name: 'idle', dataurl: args.idle }
            ];

            const layout = args.layout || 'horizontal';

            const validatedIcons = icons.map(icon => ({
                ...icon,
                dataurl: icon.dataurl && icon.dataurl.trim() !== '' && icon.dataurl.startsWith('data:image/png') ? icon.dataurl : '',
                valid: false
            }));

            let lastValidDataURL = null;
            const processedIcons = [];
            
            for (let i = 0; i < validatedIcons.length; i++) {
                const icon = validatedIcons[i];
                if (icon.dataurl) {
                    lastValidDataURL = icon.dataurl;
                    processedIcons.push({ ...icon, valid: true });
                } else {
                    if (lastValidDataURL) {
                        processedIcons.push({ ...icon, dataurl: lastValidDataURL, valid: true });
                    } else {
                        processedIcons.push({ ...icon, valid: false });
                    }
                }
            }

            const reversedIcons = [...processedIcons].reverse();
            let validIconCount = 0;
            for (let i = 0; i < reversedIcons.length; i++) {
                if (reversedIcons[i].valid) {
                    validIconCount = i + 1;
                } else {
                    break;
                }
            }

            if (validIconCount === 0) {
                resolve('');
                return;
            }

            const finalIcons = reversedIcons.slice(0, validIconCount);

            const imagePromises = finalIcons.map(icon => {
                return new Promise((resolveImg) => {
                    const img = new Image();
                    img.onload = () => {
                        resolveImg({
                            img: img,
                            width: img.width,
                            height: img.height
                        });
                    };
                    img.onerror = () => {
                        resolveImg(null);
                    };
                    img.src = icon.dataurl;
                });
            });

            Promise.all(imagePromises).then(loadedImages => {
                const validLoadedImages = loadedImages.filter(img => img !== null);
                
                if (validLoadedImages.length === 0) {
                    resolve('');
                    return;
                }

                let cellSize = 150;
                let maxValidSize = 0;
                
                for (const imageData of validLoadedImages) {
                    const dimensions = [imageData.width, imageData.height];
                    for (const dimension of dimensions) {
                        if ((dimension % 16 === 0 || dimension % 25 === 0) && dimension > maxValidSize) {
                            maxValidSize = dimension;
                        }
                    }
                }
                
                if (maxValidSize > 0) {
                    cellSize = maxValidSize;
                }

                let totalWidth, totalHeight;

                if (layout === 'horizontal') {
                    totalWidth = cellSize * validLoadedImages.length;
                    totalHeight = cellSize;
                } else {
                    totalWidth = cellSize;
                    totalHeight = cellSize * validLoadedImages.length;
                }
                
                const canvas = document.createElement('canvas');
                canvas.width = totalWidth;
                canvas.height = totalHeight;
                const ctx = canvas.getContext('2d');

                for (let i = 0; i < validLoadedImages.length; i++) {
                    const imageData = validLoadedImages[i];
                    
                    if (layout === 'horizontal') {
                        const startX = i * cellSize;
                        const scale = Math.min(cellSize / imageData.width, cellSize / imageData.height);
                        const scaledWidth = imageData.width * scale;
                        const scaledHeight = imageData.height * scale;
                        const xOffset = (cellSize - scaledWidth) / 2;
                        const yOffset = (cellSize - scaledHeight) / 2;
                        
                        ctx.drawImage(imageData.img, startX + xOffset, yOffset, scaledWidth, scaledHeight);
                    } else {
                        const startY = i * cellSize;
                        const scale = Math.min(cellSize / imageData.width, cellSize / imageData.height);
                        const scaledWidth = imageData.width * scale;
                        const scaledHeight = imageData.height * scale;
                        const xOffset = (cellSize - scaledWidth) / 2;
                        const yOffset = (cellSize - scaledHeight) / 2;
                        
                        ctx.drawImage(imageData.img, xOffset, startY + yOffset, scaledWidth, scaledHeight);
                    }
                }

                canvas.toBlob(function (blob) {
                    if (!blob) {
                        resolve('');
                        return;
                    }
                    const reader = new FileReader();
                    reader.onloadend = function () {
                        resolve(reader.result);
                    };
                    reader.readAsDataURL(blob);
                }, 'image/png');
            });
        });
    }

    getIconFromSheet(args) {
        return new Promise((resolve) => {
            const icontype = args.icontype;
            const dataurl = args.dataurl;
            
            if (!dataurl || !dataurl.startsWith('data:image/png')) {
                resolve('');
                return;
            }

            const iconOrder = ['idle', 'losing', 'winning', 'danger', 'edge', 'strain', 'poise'];
            const iconIndex = iconOrder.indexOf(icontype);
            
            if (iconIndex === -1) {
                resolve('');
                return;
            }

            const img = new Image();
            img.onload = () => {
                const totalWidth = img.width;
                const totalHeight = img.height;
                
                if (totalWidth === 0 || totalHeight === 0) {
                    resolve('');
                    return;
                }

                let iconCount, cellWidth, cellHeight;
                
                if (totalWidth >= totalHeight * 2) {
                    iconCount = Math.round(totalWidth / totalHeight);
                    cellWidth = totalWidth / iconCount;
                    cellHeight = totalHeight;
                } else if (totalHeight >= totalWidth * 2) {
                    iconCount = Math.round(totalHeight / totalWidth);
                    cellWidth = totalWidth;
                    cellHeight = totalHeight / iconCount;
                } else {
                    iconCount = 1;
                    cellWidth = totalWidth;
                    cellHeight = totalHeight;
                }

                if (iconCount <= 0 || iconIndex >= iconCount) {
                    resolve('');
                    return;
                }

                const startX = (totalWidth >= totalHeight * 2) ? iconIndex * cellWidth : 0;
                const startY = (totalHeight >= totalWidth * 2) ? iconIndex * cellHeight : 0;

                const canvas = document.createElement('canvas');
                canvas.width = cellWidth;
                canvas.height = cellHeight;
                const ctx = canvas.getContext('2d');
                
                ctx.drawImage(img, startX, startY, cellWidth, cellHeight, 0, 0, cellWidth, cellHeight);

                canvas.toBlob(function (blob) {
                    if (!blob) {
                        resolve('');
                        return;
                    }
                    const reader = new FileReader();
                    reader.onloadend = function () {
                        resolve(reader.result);
                    };
                    reader.readAsDataURL(blob);
                }, 'image/png');
            };
            
            img.onerror = () => {
                resolve('');
            };
            
            img.src = dataurl;
        });
    }

    getIconCountOfSheet(args) {
        return new Promise((resolve) => {
            const dataurl = args.dataurl;
            
            if (!dataurl || !dataurl.startsWith('data:image/png')) {
                resolve('0');
                return;
            }

            const img = new Image();
            img.onload = () => {
                const totalWidth = img.width;
                const totalHeight = img.height;
                
                if (totalWidth === 0 || totalHeight === 0) {
                    resolve('0');
                    return;
                }

                let iconCount;
                
                if (totalWidth >= totalHeight * 2) {
                    iconCount = Math.round(totalWidth / totalHeight);
                } else if (totalHeight >= totalWidth * 2) {
                    iconCount = Math.round(totalHeight / totalWidth);
                } else {
                    iconCount = 1;
                }

                resolve(iconCount.toString());
            };
            
            img.onerror = () => {
                resolve('0');
            };
            
            img.src = dataurl;
        });
    }

    getIconArrayOfSheet(args) {
        return new Promise((resolve) => {
            const dataurl = args.dataurl;
            
            if (!dataurl || !dataurl.startsWith('data:image/png')) {
                resolve('[]');
                return;
            }

            const img = new Image();
            img.onload = () => {
                const totalWidth = img.width;
                const totalHeight = img.height;
                
                if (totalWidth === 0 || totalHeight === 0) {
                    resolve('[]');
                    return;
                }

                let iconCount;
                
                if (totalWidth >= totalHeight * 2) {
                    iconCount = Math.round(totalWidth / totalHeight);
                } else if (totalHeight >= totalWidth * 2) {
                    iconCount = Math.round(totalHeight / totalWidth);
                } else {
                    iconCount = 1;
                }

                const iconOrder = ['idle', 'losing', 'winning', 'danger', 'edge', 'strain', 'poise'];
                const iconArray = iconCount <= iconOrder.length ? 
                    iconOrder.slice(0, iconCount) : 
                    [...iconOrder, ...Array.from({length: iconCount - iconOrder.length}, (_, i) => `icon${i + 8}`)];

                resolve(JSON.stringify(iconArray));
            };
            
            img.onerror = () => {
                resolve('[]');
            };
            
            img.src = dataurl;
        });
    }

    getIconSheetOrientation(args) {
        return new Promise((resolve) => {
            const dataurl = args.dataurl;
            
            if (!dataurl || !dataurl.startsWith('data:image/png')) {
                resolve('single');
                return;
            }

            const img = new Image();
            img.onload = () => {
                const totalWidth = img.width;
                const totalHeight = img.height;
                
                if (totalWidth === 0 || totalHeight === 0) {
                    resolve('single');
                    return;
                }

                if (totalWidth >= totalHeight * 2) {
                    resolve('horizontal');
                } else if (totalHeight >= totalWidth * 2) {
                    resolve('vertical');
                } else {
                    resolve('single');
                }
            };
            
            img.onerror = () => {
                resolve('single');
            };
            
            img.src = dataurl;
        });
    }

    setFocusSheet(args) {
        const dataurl = args.dataurl;
        const jsonText = args.json;
        
        this.focusSheet.dataurl = dataurl || '';
        this.focusSheet.pendingFrames = {};
        
        if (jsonText && jsonText.trim() !== '') {
            try {
                const parsedJson = JSON.parse(jsonText);
                this.focusSheet.json = { 
                    cellCountX: parsedJson.cellCountX || 1,
                    cellCountY: parsedJson.cellCountY || 1,
                    cellWidth: parsedJson.cellWidth || 0,
                    cellHeight: parsedJson.cellHeight || 0
                };
            } catch (e) {
                this.focusSheet.json = {
                    cellCountX: 1,
                    cellCountY: 1,
                    cellWidth: 0,
                    cellHeight: 0
                };
            }
        } else {
            this.focusSheet.json = {
                cellCountX: 1,
                cellCountY: 1,
                cellWidth: 0,
                cellHeight: 0
            };
        }
        
        this.focusSheet.cellContents = {};
        
        if (dataurl && dataurl.startsWith('data:image/png')) {
            const img = new Image();
            img.onload = () => {
                const totalWidth = img.width;
                const totalHeight = img.height;
                
                if (this.focusSheet.json.cellCountX > 1 || this.focusSheet.json.cellCountY > 1) {
                    const cellWidth = Math.floor(totalWidth / this.focusSheet.json.cellCountX);
                    const cellHeight = Math.floor(totalHeight / this.focusSheet.json.cellCountY);
                    this.focusSheet.json.cellWidth = cellWidth;
                    this.focusSheet.json.cellHeight = cellHeight;
                } else if (this.focusSheet.json.cellWidth > 0 && this.focusSheet.json.cellHeight > 0) {
                    this.focusSheet.json.cellCountX = Math.floor(totalWidth / this.focusSheet.json.cellWidth);
                    this.focusSheet.json.cellCountY = Math.floor(totalHeight / this.focusSheet.json.cellHeight);
                } else {
                    this.focusSheet.json.cellCountX = 1;
                    this.focusSheet.json.cellCountY = 1;
                    this.focusSheet.json.cellWidth = totalWidth;
                    this.focusSheet.json.cellHeight = totalHeight;
                }
                
                const cellWidth = this.focusSheet.json.cellWidth;
                const cellHeight = this.focusSheet.json.cellHeight;
                const cellCountX = this.focusSheet.json.cellCountX;
                const cellCountY = this.focusSheet.json.cellCountY;
                
                const canvas = document.createElement('canvas');
                canvas.width = cellWidth;
                canvas.height = cellHeight;
                const ctx = canvas.getContext('2d');
                
                for (let y = 0; y < cellCountY; y++) {
                    for (let x = 0; x < cellCountX; x++) {
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        ctx.drawImage(
                            img,
                            x * cellWidth, y * cellHeight, cellWidth, cellHeight,
                            0, 0, cellWidth, cellHeight
                        );
                        
                        canvas.toBlob((blob) => {
                            if (!blob) return;
                            const reader = new FileReader();
                            reader.onloadend = () => {
                                const cellKey = `${x},${y}`;
                                this.focusSheet.cellContents[cellKey] = reader.result;
                            };
                            reader.readAsDataURL(blob);
                        }, 'image/png');
                    }
                }
            };
            img.src = dataurl;
        }
    }

    newSheet() {
        this.focusSheet = {
            dataurl: '',
            json: {
                cellCountX: 1,
                cellCountY: 1,
                cellWidth: 0,
                cellHeight: 0
            },
            cellContents: {},
            pendingFrames: {}
        };
    }

    generatePreciseSheet() {
        return new Promise((resolve) => {
            const pendingFrames = this.focusSheet.pendingFrames;
            const cellKeys = Object.keys(pendingFrames);
            
            if (cellKeys.length === 0 && Object.keys(this.focusSheet.cellContents).length === 0) {
                resolve();
                return;
            }
            
            for (const cellKey of cellKeys) {
                const [x, y] = cellKey.split(',').map(Number);
                this.focusSheet.cellContents[cellKey] = pendingFrames[cellKey];
                
                const cellX = x - 1;
                const cellY = y - 1;
                
                if (cellX >= this.focusSheet.json.cellCountX) {
                    this.focusSheet.json.cellCountX = cellX + 1;
                }
                if (cellY >= this.focusSheet.json.cellCountY) {
                    this.focusSheet.json.cellCountY = cellY + 1;
                }
            }
            
            this.focusSheet.pendingFrames = {};
            
            const cellSize = Math.max(this.focusSheet.json.cellWidth, this.focusSheet.json.cellHeight);
            if (cellSize === 0) {
                let maxSize = 0;
                const imagePromises = [];
                
                for (const cellKey in this.focusSheet.cellContents) {
                    const promise = new Promise((resolveImg) => {
                        const img = new Image();
                        img.onload = () => {
                            const size = Math.max(img.width, img.height);
                            if (size > maxSize) maxSize = size;
                            resolveImg();
                        };
                        img.onerror = resolveImg;
                        img.src = this.focusSheet.cellContents[cellKey];
                    });
                    imagePromises.push(promise);
                }
                
                Promise.all(imagePromises).then(() => {
                    this.focusSheet.json.cellWidth = maxSize;
                    this.focusSheet.json.cellHeight = maxSize;
                    this.regeneratePreciseSheet();
                    resolve();
                });
            } else {
                this.regeneratePreciseSheet();
                resolve();
            }
        });
    }

    regeneratePreciseSheet() {
        const cellWidth = this.focusSheet.json.cellWidth;
        const cellHeight = this.focusSheet.json.cellHeight;
        const cellCountX = this.focusSheet.json.cellCountX;
        const cellCountY = this.focusSheet.json.cellCountY;
        
        const canvas = document.createElement('canvas');
        canvas.width = cellCountX * cellWidth;
        canvas.height = cellCountY * cellHeight;
        const ctx = canvas.getContext('2d');
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const drawPromises = [];
        
        for (let y = 0; y < cellCountY; y++) {
            for (let x = 0; x < cellCountX; x++) {
                const cellKey = `${x},${y}`;
                if (this.focusSheet.cellContents[cellKey]) {
                    const promise = new Promise((resolveDraw) => {
                        const img = new Image();
                        img.onload = () => {
                            const scale = Math.min(cellWidth / img.width, cellHeight / img.height);
                            const scaledWidth = img.width * scale;
                            const scaledHeight = img.height * scale;
                            const xOffset = (cellWidth - scaledWidth) / 2;
                            const yOffset = (cellHeight - scaledHeight) / 2;
                            
                            ctx.drawImage(
                                img,
                                x * cellWidth + xOffset,
                                y * cellHeight + yOffset,
                                scaledWidth,
                                scaledHeight
                            );
                            resolveDraw();
                        };
                        img.onerror = resolveDraw;
                        img.src = this.focusSheet.cellContents[cellKey];
                    });
                    drawPromises.push(promise);
                }
            }
        }
        
        Promise.all(drawPromises).then(() => {
            canvas.toBlob((blob) => {
                if (!blob) return;
                const reader = new FileReader();
                reader.onloadend = () => {
                    this.focusSheet.dataurl = reader.result;
                };
                reader.readAsDataURL(blob);
            }, 'image/png');
        });
    }

    premadeJsonCutting(args) {
        const x = Math.max(1, args.x);
        const y = Math.max(1, args.y);
        
        const cuttingData = {
            cellCountX: x,
            cellCountY: y,
            cellWidth: 0,
            cellHeight: 0
        };
        
        return JSON.stringify(cuttingData);
    }

    getFocusSheetAsset(args) {
        const asset = args.asset;
        if (asset === 'dataurl') {
            return this.focusSheet.dataurl || '';
        } else if (asset === 'json') {
            return JSON.stringify(this.focusSheet.json);
        }
        return '';
    }

    getCellOfSheet(args) {
        return new Promise((resolve) => {
            const x = Math.max(1, args.x) - 1;
            const y = Math.max(1, args.y) - 1;
            const cellKey = `${x},${y}`;
            
            if (this.focusSheet.cellContents[cellKey]) {
                resolve(this.focusSheet.cellContents[cellKey]);
                return;
            }
            
            const sheetdataurl = this.focusSheet.dataurl;
            const json = this.focusSheet.json;

            if (!sheetdataurl || !sheetdataurl.startsWith('data:image/png')) {
                resolve('');
                return;
            }

            const img = new Image();
            img.onload = () => {
                const totalWidth = img.width;
                const totalHeight = img.height;

                if (totalWidth === 0 || totalHeight === 0) {
                    resolve('');
                    return;
                }

                let cellWidth, cellHeight;

                if (json.cellCountX && json.cellCountY) {
                    cellWidth = Math.floor(totalWidth / json.cellCountX);
                    cellHeight = Math.floor(totalHeight / json.cellCountY);
                } else if (json.cellWidth && json.cellHeight) {
                    cellWidth = json.cellWidth;
                    cellHeight = json.cellHeight;
                } else {
                    cellWidth = totalWidth;
                    cellHeight = totalHeight;
                }

                const cellCountX = Math.floor(totalWidth / cellWidth);
                const cellCountY = Math.floor(totalHeight / cellHeight);

                if (x < 0 || x >= cellCountX || y < 0 || y >= cellCountY) {
                    resolve('');
                    return;
                }

                const startX = x * cellWidth;
                const startY = y * cellHeight;

                const canvas = document.createElement('canvas');
                canvas.width = cellWidth;
                canvas.height = cellHeight;
                const ctx = canvas.getContext('2d');

                ctx.drawImage(
                    img,
                    startX, startY, cellWidth, cellHeight,
                    0, 0, cellWidth, cellHeight
                );

                canvas.toBlob(function (blob) {
                    if (!blob) {
                        resolve('');
                        return;
                    }
                    const reader = new FileReader();
                    reader.onloadend = function () {
                        resolve(reader.result);
                    };
                    reader.readAsDataURL(blob);
                }, 'image/png');
            };

            img.onerror = () => {
                resolve('');
            };

            img.src = sheetdataurl;
        });
    }

    getCellDimensions() {
        const json = this.focusSheet.json;
        return JSON.stringify({
            cellWidth: json.cellWidth || 0,
            cellHeight: json.cellHeight || 0
        });
    }

    setImageInSheet(args) {
        const dataurl = args.dataurl;
        const x = Math.max(1, args.x);
        const y = Math.max(1, args.y);
        const cellKey = `${x - 1},${y - 1}`;

        if (!dataurl || !dataurl.startsWith('data:image/png')) {
            return;
        }

        this.focusSheet.pendingFrames[cellKey] = dataurl;
        
        const cellX = x - 1;
        const cellY = y - 1;
        
        if (cellX >= this.focusSheet.json.cellCountX) {
            this.focusSheet.json.cellCountX = cellX + 1;
        }
        if (cellY >= this.focusSheet.json.cellCountY) {
            this.focusSheet.json.cellCountY = cellY + 1;
        }
    }

    removeCellFromSheet(args) {
        const x = Math.max(1, args.x) - 1;
        const y = Math.max(1, args.y) - 1;
        const cellKey = `${x},${y}`;

        delete this.focusSheet.cellContents[cellKey];
        delete this.focusSheet.pendingFrames[cellKey];
        
        this.regeneratePreciseSheet();
    }

    getSheetCellInfo() {
        return JSON.stringify(this.focusSheet.json);
    }

    resizeSheetCells(args) {
        const width = Math.max(1, args.width);
        const height = Math.max(1, args.height);

        this.focusSheet.json.cellWidth = width;
        this.focusSheet.json.cellHeight = height;
        
        this.regeneratePreciseSheet();
    }

    preciseSheetGetCell(args) {
        return new Promise((resolve) => {
            const x = Math.max(1, args.x);
            const y = Math.max(1, args.y);
            const dataurl = args.dataurl;
            const jsonText = args.json;
            
            if (!dataurl || !dataurl.startsWith('data:image/png')) {
                resolve('');
                return;
            }
            
            let json;
            try {
                json = JSON.parse(jsonText);
            } catch (e) {
                json = {
                    cellCountX: 1,
                    cellCountY: 1,
                    cellWidth: 0,
                    cellHeight: 0
                };
            }
            
            const cellX = x - 1;
            const cellY = y - 1;
            
            const img = new Image();
            img.onload = () => {
                const totalWidth = img.width;
                const totalHeight = img.height;
                
                let cellWidth, cellHeight;
                
                if (json.cellCountX > 1 || json.cellCountY > 1) {
                    cellWidth = Math.floor(totalWidth / json.cellCountX);
                    cellHeight = Math.floor(totalHeight / json.cellCountY);
                } else if (json.cellWidth > 0 && json.cellHeight > 0) {
                    cellWidth = json.cellWidth;
                    cellHeight = json.cellHeight;
                } else {
                    cellWidth = totalWidth;
                    cellHeight = totalHeight;
                }
                
                const cellCountX = Math.floor(totalWidth / cellWidth);
                const cellCountY = Math.floor(totalHeight / cellHeight);
                
                if (cellX < 0 || cellX >= cellCountX || cellY < 0 || cellY >= cellCountY) {
                    resolve('');
                    return;
                }
                
                const startX = cellX * cellWidth;
                const startY = cellY * cellHeight;
                
                const canvas = document.createElement('canvas');
                canvas.width = cellWidth;
                canvas.height = cellHeight;
                const ctx = canvas.getContext('2d');
                
                ctx.drawImage(
                    img,
                    startX, startY, cellWidth, cellHeight,
                    0, 0, cellWidth, cellHeight
                );
                
                canvas.toBlob(function (blob) {
                    if (!blob) {
                        resolve('');
                        return;
                    }
                    const reader = new FileReader();
                    reader.onloadend = function () {
                        resolve(reader.result);
                    };
                    reader.readAsDataURL(blob);
                }, 'image/png');
            };
            
            img.onerror = () => {
                resolve('');
            };
            
            img.src = dataurl;
        });
    }

    preciseSheetSetImage(args) {
        const dataurl = args.dataurl;
        const x = Math.max(1, args.x);
        const y = Math.max(1, args.y);
        const targetDataurl = args.targetDataurl;
        const targetJson = args.targetJson;
        
        if (!dataurl || !dataurl.startsWith('data:image/png') || !targetDataurl || !targetDataurl.startsWith('data:image/png')) {
            return;
        }
        
        let json;
        try {
            json = JSON.parse(targetJson);
        } catch (e) {
            json = {
                cellCountX: 1,
                cellCountY: 1,
                cellWidth: 0,
                cellHeight: 0
            };
        }
        
        const cellX = x - 1;
        const cellY = y - 1;
        
        const img = new Image();
        img.onload = () => {
            const totalWidth = img.width;
            const totalHeight = img.height;
            
            let cellWidth, cellHeight;
            
            if (json.cellCountX > 1 || json.cellCountY > 1) {
                cellWidth = Math.floor(totalWidth / json.cellCountX);
                cellHeight = Math.floor(totalHeight / json.cellCountY);
            } else if (json.cellWidth > 0 && json.cellHeight > 0) {
                cellWidth = json.cellWidth;
                cellHeight = json.cellHeight;
            } else {
                cellWidth = totalWidth;
                cellHeight = totalHeight;
            }
            
            const cellCountX = Math.max(json.cellCountX || 1, cellX + 1);
            const cellCountY = Math.max(json.cellCountY || 1, cellY + 1);
            
            const newCanvas = document.createElement('canvas');
            newCanvas.width = cellCountX * cellWidth;
            newCanvas.height = cellCountY * cellHeight;
            const newCtx = newCanvas.getContext('2d');
            
            newCtx.drawImage(img, 0, 0);
            
            const newImg = new Image();
            newImg.onload = () => {
                const scale = Math.min(cellWidth / newImg.width, cellHeight / newImg.height);
                const scaledWidth = newImg.width * scale;
                const scaledHeight = newImg.height * scale;
                const xOffset = (cellWidth - scaledWidth) / 2;
                const yOffset = (cellHeight - scaledHeight) / 2;
                
                newCtx.drawImage(
                    newImg,
                    cellX * cellWidth + xOffset,
                    cellY * cellHeight + yOffset,
                    scaledWidth,
                    scaledHeight
                );
                
                newCanvas.toBlob((blob) => {
                    if (!blob) return;
                    const reader = new FileReader();
                    reader.onloadend = () => {
                        const updatedJson = {
                            cellCountX: cellCountX,
                            cellCountY: cellCountY,
                            cellWidth: cellWidth,
                            cellHeight: cellHeight
                        };
                        this.setFocusSheet({
                            dataurl: reader.result,
                            json: JSON.stringify(updatedJson)
                        });
                    };
                    reader.readAsDataURL(blob);
                }, 'image/png');
            };
            newImg.src = dataurl;
        };
        img.src = targetDataurl;
    }

    preciseSheetRemoveCell(args) {
        const x = Math.max(1, args.x);
        const y = Math.max(1, args.y);
        const dataurl = args.dataurl;
        const jsonText = args.json;
        
        if (!dataurl || !dataurl.startsWith('data:image/png')) {
            return;
        }
        
        let json;
        try {
            json = JSON.parse(jsonText);
        } catch (e) {
            json = {
                cellCountX: 1,
                cellCountY: 1,
                cellWidth: 0,
                cellHeight: 0
            };
        }
        
        const cellX = x - 1;
        const cellY = y - 1;
        
        const img = new Image();
        img.onload = () => {
            const totalWidth = img.width;
            const totalHeight = img.height;
            
            let cellWidth, cellHeight;
            
            if (json.cellCountX > 1 || json.cellCountY > 1) {
                cellWidth = Math.floor(totalWidth / json.cellCountX);
                cellHeight = Math.floor(totalHeight / json.cellCountY);
            } else if (json.cellWidth > 0 && json.cellHeight > 0) {
                cellWidth = json.cellWidth;
                cellHeight = json.cellHeight;
            } else {
                cellWidth = totalWidth;
                cellHeight = totalHeight;
            }
            
            const cellCountX = Math.floor(totalWidth / cellWidth);
            const cellCountY = Math.floor(totalHeight / cellHeight);
            
            if (cellX < 0 || cellX >= cellCountX || cellY < 0 || cellY >= cellCountY) {
                return;
            }
            
            const canvas = document.createElement('canvas');
            canvas.width = totalWidth;
            canvas.height = totalHeight;
            const ctx = canvas.getContext('2d');
            
            ctx.drawImage(img, 0, 0);
            
            ctx.clearRect(
                cellX * cellWidth,
                cellY * cellHeight,
                cellWidth,
                cellHeight
            );
            
            canvas.toBlob((blob) => {
                if (!blob) return;
                const reader = new FileReader();
                reader.onloadend = () => {
                    this.setFocusSheet({
                        dataurl: reader.result,
                        json: jsonText
                    });
                };
                reader.readAsDataURL(blob);
            }, 'image/png');
        };
        img.src = dataurl;
    }

    preciseSheetResizeCells(args) {
        const width = Math.max(1, args.width);
        const height = Math.max(1, args.height);
        const dataurl = args.dataurl;
        const jsonText = args.json;
        
        if (!dataurl || !dataurl.startsWith('data:image/png')) {
            return;
        }
        
        let json;
        try {
            json = JSON.parse(jsonText);
        } catch (e) {
            json = {
                cellCountX: 1,
                cellCountY: 1,
                cellWidth: 0,
                cellHeight: 0
            };
        }
        
        json.cellWidth = width;
        json.cellHeight = height;
        
        this.setFocusSheet({
            dataurl: dataurl,
            json: JSON.stringify(json)
        });
    }

    preciseSheetGenerate(args) {
        return new Promise((resolve) => {
            const dataurl = args.dataurl;
            const jsonText = args.json;
            
            if (!dataurl || !dataurl.startsWith('data:image/png')) {
                resolve('');
                return;
            }
            
            let json;
            try {
                json = JSON.parse(jsonText);
            } catch (e) {
                json = {
                    cellCountX: 1,
                    cellCountY: 1,
                    cellWidth: 0,
                    cellHeight: 0
                };
            }
            
            const img = new Image();
            img.onload = () => {
                const totalWidth = img.width;
                const totalHeight = img.height;
                
                let cellWidth, cellHeight;
                
                if (json.cellCountX > 1 || json.cellCountY > 1) {
                    cellWidth = Math.floor(totalWidth / json.cellCountX);
                    cellHeight = Math.floor(totalHeight / json.cellCountY);
                } else if (json.cellWidth > 0 && json.cellHeight > 0) {
                    cellWidth = json.cellWidth;
                    cellHeight = json.cellHeight;
                } else {
                    cellWidth = totalWidth;
                    cellHeight = totalHeight;
                }
                
                const cellCountX = Math.floor(totalWidth / cellWidth);
                const cellCountY = Math.floor(totalHeight / cellHeight);
                
                const canvas = document.createElement('canvas');
                canvas.width = cellCountX * cellWidth;
                canvas.height = cellCountY * cellHeight;
                const ctx = canvas.getContext('2d');
                
                ctx.drawImage(img, 0, 0);
                
                canvas.toBlob((blob) => {
                    if (!blob) {
                        resolve('');
                        return;
                    }
                    const reader = new FileReader();
                    reader.onloadend = () => {
                        const resultJson = {
                            cellCountX: cellCountX,
                            cellCountY: cellCountY,
                            cellWidth: cellWidth,
                            cellHeight: cellHeight
                        };
                        resolve(JSON.stringify({
                            dataurl: reader.result,
                            json: JSON.stringify(resultJson)
                        }));
                    };
                    reader.readAsDataURL(blob);
                }, 'image/png');
            };
            img.onerror = () => {
                resolve('');
            };
            img.src = dataurl;
        });
    }

    setXMLSheet(args) {
        this.xmlSheet.dataurl = args.dataurl || '';
        this.xmlSheet.xml = args.xml || '';
    }

    newXMLSheet() {
        this.xmlSheet = {
            dataurl: '',
            xml: '',
            paddingX: 0,
            paddingY: 0,
            animations: {}
        };
    }

    importAnimationToXMLSheet(args) {
        const animation = args.animation;
        const dataurl = args.dataurl;
        const xml = args.xml;

        if (!dataurl || !dataurl.startsWith('data:image/png') || !xml) {
            return;
        }

        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xml, 'text/xml');
        const subTextures = xmlDoc.getElementsByTagName('SubTexture');
        
        const animationFrames = [];
        for (let i = 0; i < subTextures.length; i++) {
            const subTexture = subTextures[i];
            const name = subTexture.getAttribute('name');
            if (name && name.startsWith(animation)) {
                animationFrames.push({
                    name: name,
                    x: parseInt(subTexture.getAttribute('x')),
                    y: parseInt(subTexture.getAttribute('y')),
                    width: parseInt(subTexture.getAttribute('width')),
                    height: parseInt(subTexture.getAttribute('height'))
                });
            }
        }

        if (animationFrames.length === 0) {
            return;
        }

        const sourceImg = new Image();
        sourceImg.onload = () => {
            for (let i = 0; i < animationFrames.length; i++) {
                const frame = animationFrames[i];
                const canvas = document.createElement('canvas');
                canvas.width = frame.width;
                canvas.height = frame.height;
                const ctx = canvas.getContext('2d');
                
                ctx.drawImage(sourceImg, frame.x, frame.y, frame.width, frame.height, 0, 0, frame.width, frame.height);
                
                canvas.toBlob((blob) => {
                    if (!blob) return;
                    const reader = new FileReader();
                    reader.onloadend = () => {
                        const frameDataurl = reader.result;
                        this.addXMLFrame({
                            dataurl: frameDataurl,
                            animation: animation,
                            number: i
                        });
                    };
                    reader.readAsDataURL(blob);
                }, 'image/png');
            }
        };
        sourceImg.src = dataurl;
    }

    setXMLPadding(args) {
        this.xmlSheet.paddingX = Math.max(0, args.px);
        this.xmlSheet.paddingY = Math.max(0, args.py);
    }

    addXMLAnimation(args) {
        const name = args.name;
        if (name && name.trim() !== '') {
            if (!this.xmlSheet.animations[name]) {
                this.xmlSheet.animations[name] = [];
            }
        }
    }

    addXMLFrame(args) {
        const dataurl = args.dataurl;
        const animation = args.animation;
        let number = args.number;

        if (!dataurl || !dataurl.startsWith('data:image/png')) return;
        if (!animation || animation.trim() === '') return;

        if (!this.xmlSheet.animations[animation]) {
            this.xmlSheet.animations[animation] = [];
        }

        if (number < 0) {
            number = this.xmlSheet.animations[animation].length;
        }

        this.xmlSheet.animations[animation][number] = dataurl;
    }

    getXMLFrameCount(args) {
        const animation = args.animation;
        if (animation && this.xmlSheet.animations[animation]) {
            return this.xmlSheet.animations[animation].length;
        }
        return 0;
    }

    getXMLFrame(args) {
        return new Promise((resolve) => {
            const number = args.number;
            const animation = args.animation;

            if (!animation || !this.xmlSheet.animations[animation] || number < 0 || number >= this.xmlSheet.animations[animation].length) {
                resolve('');
                return;
            }

            const dataurl = this.xmlSheet.animations[animation][number];
            resolve(dataurl);
        });
    }

    getXMLPadding(args) {
        const dimension = args.dimension;
        if (dimension === 'x') {
            return this.xmlSheet.paddingX;
        } else {
            return this.xmlSheet.paddingY;
        }
    }

    getXMLSheetAsset(args) {
        const asset = args.asset;
        if (asset === 'png') {
            return this.xmlSheet.dataurl || '';
        } else if (asset === 'xml') {
            return this.xmlSheet.xml || '';
        }
        return '';
    }

    getXMLAnimationsData(args) {
        const dataType = args.dataType;
        if (dataType === 'count') {
            return Object.keys(this.xmlSheet.animations).length;
        } else if (dataType === 'array') {
            return JSON.stringify(Object.keys(this.xmlSheet.animations));
        }
        return '';
    }
}

Scratch.extensions.register(new PNGSHEETSEXT());
})(Scratch);