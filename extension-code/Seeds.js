// Name: Seeds
// ID: SeedsSP
// Description: Generate random seeded numbers, generated terrain, and more!
// By: SharkPool
// License: MIT

// Version V.2.0.0
  
(function(Scratch) {
  "use strict";
  
  if (!Scratch.extensions.unsandboxed) throw new Error("Seeds must run unsandboxed");

  const menuIconURI =
"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjEuMDAyIiBoZWlnaHQ9IjEyMS4wMDIiIHZpZXdCb3g9IjAgMCAxMjEuMDAyIDEyMS4wMDIiPjxwYXRoIGQ9Ik0wIDYwLjUwMUMwIDI3LjA4NyAyNy4wODYgMCA2MC41IDBzNjAuNTAxIDI3LjA4NyA2MC41MDEgNjAuNTAxLTI3LjA4NyA2MC41MDEtNjAuNTAxIDYwLjUwMVMwIDkzLjkxNSAwIDYwLjUwMSIgZmlsbD0iI2U2NGUyOCIvPjxwYXRoIGQ9Ik02Ni4yMDYgNDQuMzYxYy43MjMtMS4yNjUuOTcxLTMuMDA5IDEuOTgtMy45ODZxLjIzLS4yMjUuNTItLjM4OWMuMjQ2LS4xMzguNTA4LS4yNDEuNzgtLjMyYTUgNSAwIDAgMSAxLjcyLS4zMDVjMS4wMzYtLjEzNCA5LjM4My00LjM0NyA3Ljg1Mi02LjgwNy0zLjE1NC01LjA2Ny0xMy41MTEtNi42MzctMTQuNDIzLTEzLjAyMi0uNTktNC4xMzIgMS43NS03Ljg0OSA2LjU3MS02Ljg4NiAyLjYyLjUyNCAxMi42NDggNC45MDQgMTEuNDI0IDYuMDYtMS4wODMgMS4wMjItMTAuOTUyLTEuODI0LTkuNy45OHM5LjIzNCA0LjMxIDEyLjY3OCAxMC43NzIgMi45NjEgOC43OTQtMi4wMzggMTMuNTU1Yy0yLjY1NSAyLjUzLTUuODY3IDUuMzk3LTkuODYyIDUuMzQ4LS43NTQtLjAxLTQuNDkyLjI2OC01LjA0LS42OXoiIGZpbGw9IiNmZmUxNjYiLz48cGF0aCBkPSJNODAuNDg3IDgxLjczNmMtMy4xMDIgNS43ODMtNC4zNTkgMTIuMzM4LTguNDA4IDE2LjI4LTguOTEgOC42NzUtMjEuNjc4IDEwLjczOC0yOS4wOTMgNi43NjEtOC44NDMtNC43NDMtMTIuNzg4LTIwLjA5Ni03Ljc2OC0zNS4yMjMgMS4xMDEtMy4zMiA0LjQzLTUuNDMyIDYuMjE2LTguNzYzIDguNTMtMTUuOTA2IDIyLjEzLTI1Ljc2MSAzMi42My0yNC41NDggMS43MTkuMTk5LTcuMDE4IDEyLjk1MS01LjUwMSAxMy43NjUgMi4wMjIgMS4wODQgMTQuMDYxLTkuNiAxNS4zNy03LjYzNiA1LjY3MyA4LjUwNiA0LjYyIDI0LjMyNi0zLjQ0NiAzOS4zNjQiIGZpbGw9IiM4YjM5MDAiLz48cGF0aCBkPSJNMzQuODM0IDg0LjI3NmMtLjU0Ny0uMi0uMjc2LTYuMjItLjIyNy02Ljg1Mi42NjItOC41NTggNS4wMDMtMjEuMTcgMTMuNDg4LTI3LjQ4NiAyLjI1NC0xLjY3OSAxMC43NzUtOS4xMSAxMi44NS0xMS4wMjYuNjUzLS42MDMgMTAuODA0LTMuMDQ2IDEwLjgwNC0uODM3IDAgLjg4NC0uMjg3IDEuNzAxLS43NzIgMi4zNjNsLTEuNDU2IDIuMDM4Yy0zLjY0NSA2LjQzLTQuODA2IDE0LjI3LTguODg5IDIwLjIzOSAwIDAtMy40NDUtOS41MzgtNC43MTEtOC40OC0yLjkwNCAyLjQzLTcuMTA4IDcuMDgtOC4xMTkgNy44MDctMS40IDEuMDA4LTcuODMgMjQuMTE5LTEyLjk2OCAyMi4yMzRtNDMuMzgzLTQwLjk3OGMzLjU3OC0xLjc5IDYuMzEtLjcyNiA2LjMxLS43MjYgMi40MjYgNC45NDMgMS45NjIgOC44NDggMi4zIDE0LjExMi4yNzUgNC4yOTItMS4zNDggOC42OTQtMS45MDggMTIuOTk1LS45NjYgNy40MTgtNS4wNiAxMy40MDQtOC42NjkgMTkuNzI1LTIuMDQ1IDMuNTc0LTIuMzU1IDguNTYzLTUuNjk3IDExLjIwMy0zLjAxNiAyLjM4Mi0yMy4wOSA5LjAzMi0yMi42NTIgNS4zNS4xNC0xLjE3Mi41MDktNS4yMzggNS4yNTMtOC4zNjMgMi44MzYtMS44NjcgOS4yNTQtMS43OCAxMi41MTMtNS4wMjUgMS45NS0xLjk0My4yODktNi45OTYgMi4yMzctOS45ODEgMi42MjgtNC4wMjUgOC43MzMtNi4wOSA5Ljk4OC04LjY4NCAyLjMwNS00Ljc2NS0zLjIxNi0xMC0zLjQ5Ny0xNC43NzQtLjQ5MS04LjM1NSAyLjc1Mi0xNS4yOTcgMy44MjItMTUuODMyIiBmaWxsPSIjYWQ0ODAwIi8+PHBhdGggZD0iTTgwLjQ4NyA4MS43MzZhNjUgNjUgMCAwIDEtNC4zMjcgNi45NzdjLTIuMjUxIDMuMTU2LTEuMjQgOC4xNi0zLjc4NyAxMC41NTMtMi42OTkgMi41MzUtOC45NjcgMi40MDktMTEuNzc3IDMuOTUtMy4wOCAxLjY5Mi02LjE2IDQuOTQ0LTkuMDg3IDUuMjY0LTMuMDY0LjMzNi01Ljk2My0yLjMzLTguNTIzLTMuNzAzLTEuNzctLjk0OS01LjQ2Ny0xLjAxNS02LjY5LTIuNjQ2LTEuMzcyLTEuODI5LS4yLTUuMy0uODgtNy44MDgtLjg5NC0zLjI5OC0xLjE4OC03LjEwMi0uODczLTExLjE5OS4zMDQtMy45NTgtMS45NjYtOC4xODktLjUyLTEyLjUgMS4wOTQtMy4yNiA1LjY1OC02LjU2NCA3LjQxLTkuODMzIDIuNTItNC42OTggNS40ODItOC44NjggOC42NzUtMTIuMzggMS4yODItMS40MS4wODYtMi43MTMgMS40MjgtMy45MDMuODk1LS43OTMgNC4zMTUtMS41MzYgNS4yMjgtMi4yMjUgNi4zNzctNC44MiAxMy4wNzItNy4wMzcgMTguNzEtNS44MDYuNTk0LjEzLTcuNTcgMTAuMzAyLTEyLjc0IDIwLjg4My01LjMxMyAxMC44NzYtOC40NjggMjEuNzI2LTcuOTEyIDIyLjAyNC41NjcuMzA0IDQuMjg4LTkuNTkxIDEwLjc4Mi0yMC4wMjggNi4xMy05Ljg1IDE1Ljg4NS0xOS44MzUgMTYuMzE4LTE5LjQxNSAxLjExMyAxLjA4IDQuODg5IDIuMzYzIDUuNjcgMy44MTYgMS4yMiAyLjI2Ni0uNzk2IDQuOTQ3LS4zOTEgNy45MjMuNzg4IDUuNzk3LjAyMiAxMi43MTQtMi4zMjggMTkuODY4LS42IDEuODI1LjU4MyA1LjIzNy0uMjIzIDcuMDc5LS42ODUgMS41NjMtMy4zMyAxLjU1NC00LjE2MyAzLjExeiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNjUyYTAwIiBzdHJva2Utd2lkdGg9IjUiLz48cGF0aCBkPSJNNDMuODYzIDkzLjA3NnMtMi43ODktOC4zNS0yLjUxNS0xMy44MjljLjI3NC01LjQ3OCAzLjE3NC02LjE4IDUuMDI5LTEwLjM3MSAxLjg1NS00LjE5IDMuNDU3LTguOCAzLjQ1Ny04LjhtMzIuMTc5LTEwLjc0NXMtLjc0NSAzLjQ4OC0xLjE3MiA2LjgxYy0uNDI4IDMuMzIzIDEuMTE4IDQuODYtLjc4NiA4LjM5YTYxMSA2MTEgMCAwIDEtNC42MSA4LjMybS02LjI0MS0uMTQ4cy00LjE4IDIuODQxLTUuNDk0IDUuOTIyLjY5OCA3LjgxLTIuMDk0IDEwLjY4OC01LjEyOCA0LjI0LTUuMTI4IDQuMjQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzY1MmEwMCIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPg==";
  const blockIconURI =
"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1OC40MzkiIGhlaWdodD0iOTguNDg4IiB2aWV3Qm94PSIwIDAgNTguNDM5IDk4LjQ4OCI+PHBhdGggZD0iTTM0LjU1MyAzMS44NjhjLjcyMy0xLjI2NS45NzEtMy4wMDkgMS45OC0zLjk4NnEuMjMtLjIyNC41Mi0uMzg5Yy4yNDYtLjEzOC41MDgtLjI0MS43OC0uMzJhNSA1IDAgMCAxIDEuNzItLjMwNWMxLjAzNi0uMTM0IDkuMzgzLTQuMzQ3IDcuODUyLTYuODA3LTMuMTU0LTUuMDY3LTEzLjUxMS02LjYzNy0xNC40MjMtMTMuMDIyLS41OS00LjEzMiAxLjc1LTcuODQ5IDYuNTcxLTYuODg2IDIuNjIuNTI0IDEyLjY0OCA0LjkwNCAxMS40MjQgNi4wNi0xLjA4MyAxLjAyMi0xMC45NTItMS44MjQtOS43Ljk4czkuMjM0IDQuMzEgMTIuNjc4IDEwLjc3MiAyLjk2MSA4Ljc5NC0yLjAzOCAxMy41NTVjLTIuNjU1IDIuNTMtNS44NjcgNS4zOTctOS44NjIgNS4zNDgtLjc1NC0uMDEtNC40OTIuMjY4LTUuMDQtLjY5eiIgZmlsbD0iI2ZmZTE2NiIvPjxwYXRoIGQ9Ik00OC44MzQgNjkuMjQzYy0zLjEwMiA1Ljc4My00LjM1OSAxMi4zMzgtOC40MDggMTYuMjgtOC45MSA4LjY3NS0yMS42NzggMTAuNzM4LTI5LjA5MyA2Ljc2MUMyLjQ5IDg3LjU0MS0xLjQ1NSA3Mi4xODggMy41NjUgNTcuMDYxYzEuMTAxLTMuMzIgNC40My01LjQzMiA2LjIxNi04Ljc2MyA4LjUzLTE1LjkwNiAyMi4xMy0yNS43NjEgMzIuNjMtMjQuNTQ4IDEuNzE5LjE5OS03LjAxOCAxMi45NTEtNS41MDEgMTMuNzY1IDIuMDIyIDEuMDg0IDE0LjA2MS05LjYgMTUuMzctNy42MzYgNS42NzMgOC41MDYgNC42MiAyNC4zMjYtMy40NDYgMzkuMzY0IiBmaWxsPSIjOGIzOTAwIi8+PHBhdGggZD0iTTMuMTgxIDcxLjc4M2MtLjU0Ny0uMi0uMjc2LTYuMjItLjIyNy02Ljg1Mi42NjItOC41NTggNS4wMDMtMjEuMTcgMTMuNDg4LTI3LjQ4NiAyLjI1NC0xLjY3OSAxMC43NzUtOS4xMSAxMi44NS0xMS4wMjYuNjUzLS42MDMgMTAuODA0LTMuMDQ2IDEwLjgwNC0uODM3IDAgLjg4NC0uMjg3IDEuNzAxLS43NzIgMi4zNjNsLTEuNDU2IDIuMDM4Yy0zLjY0NSA2LjQzLTQuODA2IDE0LjI3LTguODg5IDIwLjIzOSAwIDAtMy40NDUtOS41MzgtNC43MTEtOC40OC0yLjkwNCAyLjQzLTcuMTA4IDcuMDgtOC4xMTkgNy44MDctMS40IDEuMDA4LTcuODMgMjQuMTE5LTEyLjk2OCAyMi4yMzRtNDMuMzgzLTQwLjk3OGMzLjU3OC0xLjc5IDYuMzEtLjcyNiA2LjMxLS43MjYgMi40MjYgNC45NDMgMS45NjIgOC44NDggMi4zIDE0LjExMi4yNzUgNC4yOTItMS4zNDggOC42OTQtMS45MDggMTIuOTk1LS45NjYgNy40MTgtNS4wNiAxMy40MDQtOC42NjkgMTkuNzI1LTIuMDQ1IDMuNTc0LTIuMzU1IDguNTYzLTUuNjk3IDExLjIwMy0zLjAxNiAyLjM4Mi0yMy4wOSA5LjAzMi0yMi42NTIgNS4zNS4xNC0xLjE3Mi41MDktNS4yMzggNS4yNTMtOC4zNjMgMi44MzYtMS44NjcgOS4yNTQtMS43OCAxMi41MTMtNS4wMjUgMS45NS0xLjk0My4yODktNi45OTYgMi4yMzctOS45ODEgMi42MjgtNC4wMjUgOC43MzMtNi4wOSA5Ljk4OC04LjY4NCAyLjMwNS00Ljc2NS0zLjIxNi0xMC0zLjQ5Ny0xNC43NzQtLjQ5MS04LjM1NSAyLjc1Mi0xNS4yOTcgMy44MjItMTUuODMyIiBmaWxsPSIjYWQ0ODAwIi8+PHBhdGggZD0iTTQ4LjgzNCA2OS4yNDNhNjUgNjUgMCAwIDEtNC4zMjcgNi45NzdjLTIuMjUxIDMuMTU2LTEuMjQgOC4xNi0zLjc4NyAxMC41NTMtMi42OTkgMi41MzUtOC45NjcgMi40MDktMTEuNzc3IDMuOTUtMy4wOCAxLjY5Mi02LjE2IDQuOTQ0LTkuMDg3IDUuMjY0LTMuMDY0LjMzNi01Ljk2My0yLjMzLTguNTIzLTMuNzAzLTEuNzctLjk0OS01LjQ2Ny0xLjAxNS02LjY5LTIuNjQ2LTEuMzcyLTEuODI5LS4yLTUuMy0uODgtNy44MDgtLjg5NC0zLjI5OC0xLjE4OC03LjEwMi0uODczLTExLjE5OS4zMDQtMy45NTgtMS45NjYtOC4xODktLjUyLTEyLjUgMS4wOTQtMy4yNiA1LjY1OC02LjU2NCA3LjQxLTkuODMzIDIuNTItNC42OTggNS40ODItOC44NjggOC42NzUtMTIuMzggMS4yODItMS40MS4wODYtMi43MTMgMS40MjgtMy45MDMuODk1LS43OTMgNC4zMTUtMS41MzYgNS4yMjgtMi4yMjUgNi4zNzctNC44MiAxMy4wNzItNy4wMzcgMTguNzEtNS44MDYuNTk0LjEzLTcuNTcgMTAuMzAyLTEyLjc0IDIwLjg4My01LjMxMyAxMC44NzYtOC40NjggMjEuNzI2LTcuOTEyIDIyLjAyNC41NjcuMzA0IDQuMjg4LTkuNTkxIDEwLjc4Mi0yMC4wMjggNi4xMy05Ljg1IDE1Ljg4NS0xOS44MzUgMTYuMzE4LTE5LjQxNSAxLjExMyAxLjA4IDQuODg5IDIuMzYzIDUuNjcgMy44MTYgMS4yMiAyLjI2Ni0uNzk2IDQuOTQ3LS4zOTEgNy45MjMuNzg4IDUuNzk3LjAyMiAxMi43MTQtMi4zMjggMTkuODY4LS42IDEuODI1LjU4MyA1LjIzNy0uMjIzIDcuMDc5LS42ODUgMS41NjMtMy4zMyAxLjU1NC00LjE2MyAzLjExeiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNjUyYTAwIiBzdHJva2Utd2lkdGg9IjUiLz48cGF0aCBkPSJNMTIuMjEgODAuNTgzcy0yLjc4OS04LjM1LTIuNTE1LTEzLjgyOWMuMjc0LTUuNDc4IDMuMTc0LTYuMTggNS4wMjktMTAuMzcxIDEuODU1LTQuMTkgMy40NTctOC44IDMuNDU3LTguOE01MC4zNiAzNi44MzhzLS43NDUgMy40ODgtMS4xNzIgNi44MWMtLjQyOCAzLjMyMyAxLjExOCA0Ljg2LS43ODYgOC4zOWE2MTEgNjExIDAgMCAxLTQuNjEgOC4zMm0tNi4yNDEtLjE0OHMtNC4xOCAyLjg0MS01LjQ5NCA1LjkyMi42OTggNy44MS0yLjA5NCAxMC42ODgtNS4xMjggNC4yNC01LjEyOCA0LjI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM2NTJhMDAiIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L3N2Zz4=";

  class SeedsSP {
    constructor() { this.seeds = {} }
    getInfo() {
      return {
        id: "SeedsSP",
        name: "Seeds",
        docsURI: "https://docs.google.com/document/d/19Xo41od1j6AhFrOQ3_NrJl-OC8cp3Z2FEm3V9lIYSCQ",
        color1: "#e64e28",
        menuIconURI,
        blockIconURI,
        blocks: [
          { blockType: Scratch.BlockType.LABEL, text: "Operations" },
          {
            opcode: "reportSeed",
            blockType: Scratch.BlockType.REPORTER,
            text: "return seed ID [SEED_NAME] [REPORT]",
            arguments: {
              REPORT: { type: Scratch.ArgumentType.STRING, menu: "REPORT" },
              SEED_NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "seed-1"
              }
            }
          },
          {
            opcode: "resetSeed",
            blockType: Scratch.BlockType.COMMAND,
            text: "delete seed ID [SEED_NAME]",
            arguments: {
              SEED_NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "seed-1"
              }
            }
          },
          /* Deprecation Marker */
          {
            opcode: "toArray",
            blockType: Scratch.BlockType.REPORTER,
            text: "seed ID [SEED_NAME] to Array",
            hideFromPalette: true,
            arguments: {
              SEED_NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "seed-1" }
            }
          },
          /* Marker End */
          {
            opcode: "seedExists",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "seed ID [SEED_NAME] exists?",
            arguments: {
              SEED_NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "seed-1"
              }
            }
          },
          {
            opcode: "allSeeds",
            blockType: Scratch.BlockType.REPORTER,
            text: "all seed IDs"
          },
          { blockType: Scratch.BlockType.LABEL, text: "Number Randomizer" },
          {
            opcode: "genSeed",
            blockType: Scratch.BlockType.COMMAND,
            text: "generate number with ID [NAME] from [MIN] to [MAX] and length [LENGTH]",
            arguments: {
              NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "seed-1"
              },
              LENGTH: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 1
              },
              MIN: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 1
              },
              MAX: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 10
              }
            }
          },
          { blockType: Scratch.BlockType.LABEL, text: "Basic Terrain Generation" },
          {
            opcode: "genTerrain",
            blockType: Scratch.BlockType.COMMAND,
            text: "generate new terrain with ID [NAME] length [LENGTH] with lowpoint [MIN] and peak [MAX]",
            arguments: {
              NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "seed-1"
              },
              LENGTH: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 10
              },
              MIN: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0
              },
              MAX: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 10
              }
            }
          },
          { blockType: Scratch.BlockType.LABEL, text: "Pseudorandom Noise Generation" },
          {
            opcode: "genCoolNoise",
            blockType: Scratch.BlockType.COMMAND,
            text: "generate noise with ID [NAME] seed [KEY] repeated [REPEAT] times",
            arguments: {
              NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "noise-1"
              },
              KEY: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 15
              },
              REPEAT: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 10
              }
            }
          },
          {
            opcode: "genAcceptedNoise",
            blockType: Scratch.BlockType.COMMAND,
            text: "generate noise with ID [NAME] seed [KEY] repeated [REPEAT] times with accepted number array: [ALLOW]",
            arguments: {
              NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "noise-1"
              },
              KEY: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 15
              },
              REPEAT: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 10
              },
              ALLOW: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "[1, 2, 3, 4, 5]"
              }
            }
          }
        ],
        menus: {
          REPORT: ["json", "type", "settings", "output"]
        }
      }
    }

    reportSeed(args) {
      const seedName = args.SEED_NAME;
      if (this.seeds[seedName] === undefined) return "seed doesnt exist!";
      switch (args.REPORT) {
        case "type":
          return this.seeds[seedName].type;
        case "settings":
          return JSON.stringify(this.seeds[seedName].settings);
        case "output":
          return JSON.stringify(this.seeds[seedName].output);
        default:
          return JSON.stringify(this.seeds[seedName]);
      }
    }

    /* Deprecation Marker */
    toArray(args) { return JSON.stringify(this.seeds[args.SEED_NAME].output) }
    /* Marker End */

    resetSeed(args) { delete this.seeds[args.SEED_NAME] }

    seedExists(args) { return Scratch.Cast.toBoolean(this.seeds[args.SEED_NAME]) }

    allSeeds(args) { return JSON.stringify(Object.keys(this.seeds)) }

    genSeed(args) {
      if (args.LENGTH < 1) args.LENGTH = 1;
      let generatedSeed = "";
      const settings = { min: Math.round(args.MIN), max: Math.round(args.MAX), length: Math.round(args.LENGTH) };
      for (let i = 0; i < settings["length"]; i++) {
        generatedSeed += Math.floor(Math.random() * (settings.max - settings.min + 1)) + settings.min;
      }
      this.seeds[args.NAME] = { type: "RND", settings: settings, output: [generatedSeed] };
    }

    genTerrain(args) {
      if (args.LENGTH < 1) args.LENGTH = 1;
      const settings = { min: Math.round(args.MIN), max: Math.round(args.MAX), length: Math.round(args.LENGTH) };
      let generatedNoise = [];
      let currentValue = (settings.min + settings.max) / 2;
      for (let i = 0; i < settings["length"]; i++) {
        const randomChange = Math.floor(Math.random() * (settings.max - settings.min + 1)) + settings.min;
        currentValue += randomChange * (Math.random() < 0.5 ? -1 : 1);
        currentValue = Math.max(settings.min, Math.min(settings.max, currentValue));
        generatedNoise.push(currentValue);
      }
      this.seeds[args.NAME] = { type: "TER", settings: settings, output: generatedNoise };
    }

    genCoolNoise(args) {
      const noiseName = args.NAME;
      const settings = { seed: args.KEY, repeat: Math.round(args.REPEAT) };
      let key = BigInt((settings.seed * 100) + 100);
      let generatedNoise = [];
      for (let i = 0; i < settings.repeat; i++) {
        const squaredKey = key * key;
        if (squaredKey.toString().length < 3) {
          generatedNoise = `Error: ${settings.seed} is a Bad Seed`;
          break;
        }
        generatedNoise.push(squaredKey.toString().substring(1, 4));
        key = BigInt(squaredKey.toString().substring(1, 4));
      }
      this.seeds[args.NAME] = { type: "NOI1", settings: settings, output: generatedNoise };
    }

    genAcceptedNoise(args) {
      let allowedNums = args.ALLOW ? args.ALLOW : [0];
      try {
        allowedNums = JSON.parse(args.ALLOW);
        if (!Array.isArray(allowedNums)) {
          allowedNums = [0];
        } else {
          allowedNums = allowedNums.filter(value => !isNaN(value));
          if (allowedNums.length === 0) allowedNums = [0];
        }
      } catch (error) { allowedNums = [0] }
      const settings = { seed: args.KEY, repeat: Math.round(args.REPEAT), allowedValues: allowedNums };
      let key = (settings.seed * 100) + 100;
      let generatedNoise = [];
      for (let i = 0; i < settings.repeat; i++) {
        const squaredKey = key * key;
        if (squaredKey.toString().length < 3) {
          generatedNoise = `Error: ${args.KEY} is a Bad Seed`;
          break;
        }
        const noiseValue = parseInt(squaredKey.toString().substring(1, 4));
        let replacementValue;
        if (args.ALLOW.length > 0) {
          const acceptItems = settings.allowedValues;
          const numAcceptItems = acceptItems.length;
          if (numAcceptItems === 1) {
            replacementValue = acceptItems[0];
          } else {
            const rangeDivider = 1000 / numAcceptItems;
            for (let j = 0; j < numAcceptItems; j++) {
              const lowerRange = j * rangeDivider;
              const upperRange = (j + 1) * rangeDivider;
              if (noiseValue >= lowerRange && noiseValue < upperRange) {
                replacementValue = acceptItems[j];
                break;
              }
            }
          }
        }
        generatedNoise.push(replacementValue === null || replacementValue === undefined ? 0 : replacementValue);
        key = BigInt(squaredKey.toString().substring(1, 4));
      }
      this.seeds[args.NAME] = { type: "NOI2", settings: settings, output: generatedNoise };
    }
  }
  
  Scratch.extensions.register(new SeedsSP());
})(Scratch);
