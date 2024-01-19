// Name: Fetch Progress
// ID: SPprogress
// Description: Get the Loading Progress of Fetch Requests!
// By: SharkPool

// Version V.1.1.1

(function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) throw new Error("Fetch Progress Extension must run unsandboxed!");

  const menuIconURI =
"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIzMS41NjQ4OCIgaGVpZ2h0PSIzMS41NjQ4OCIgdmlld0JveD0iMCwwLDMxLjU2NDg4LDMxLjU2NDg4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjI0LjIxNzU3LC0xNjQuMjE3NTgpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0yMjQuOTY3NTgsMTgwLjAwMDAyYzAsLTguMzAyMTkgNi43MzAyNSwtMTUuMDMyNDQgMTUuMDMyNDQsLTE1LjAzMjQ0YzguMzAyMTksMCAxNS4wMzI0NCw2LjczMDI1IDE1LjAzMjQ0LDE1LjAzMjQ0YzAsOC4zMDIxOSAtNi43MzAyNSwxNS4wMzI0NCAtMTUuMDMyNDQsMTUuMDMyNDRjLTguMzAyMTksMCAtMTUuMDMyNDQsLTYuNzMwMjUgLTE1LjAzMjQ0LC0xNS4wMzI0NHoiIGZpbGw9IiMwMGJlMWUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSIjMDA4MDEzIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiLz48cGF0aCBkPSJNMjQ3LjYzNTIyLDE3OC42ODc0M2MwLDQuOTQyNSAtNC4wMDY2Miw4Ljk0OCAtOC45NDgsOC45NDhjLTQuOTQyNSwwIC04Ljk0OTEyLC00LjAwNTUgLTguOTQ5MTIsLTguOTQ4YzAsLTQuOTQyNSA0LjAwNjYyLC04Ljk0OTEyIDguOTQ5MTIsLTguOTQ5MTJjNC45NDEzOCwwIDguOTQ4LDQuMDA2NjIgOC45NDgsOC45NDkxMnoiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTI0My4yODg1LDE3OC42OTE4YzAsMS45NDIzIC0wLjMxNTY5LDMuNzM5MDcgLTAuODY0MjQsNS4yMDQ0N2MtMC44MzA2NSwyLjI2MTM2IC0yLjE5NjQyLDMuNzM3OTUgLTMuNzM5MDcsMy43Mzc5NWMtMS41NDI2NCwwIC0yLjkwMzkzLC0xLjQ3NjU5IC0zLjczOTA3LC0zLjczNzk1Yy0wLjU0Mjk1LC0xLjQ2NTQgLTAuODU5NzYsLTMuMjYyMTcgLTAuODU5NzYsLTUuMjA0NDdjMCwtMS45NDM0MiAwLjMxNjgxLC0zLjczOTA3IDAuODU5NzYsLTUuMjA0NDdjMC44MzUxNCwtMi4yNzM2NyAyLjE5NjQyLC0zLjc1MDI2IDMuNzM5MDcsLTMuNzUwMjZjMS41NDI2NCwwIDIuOTA4NDEsMS40NzY1OSAzLjczOTA3LDMuNzUwMjZjMC41NDg1NSwxLjQ2NTQgMC44NjQyNCwzLjI2MTA1IDAuODY0MjQsNS4yMDQ0N3oiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTIzMC4xNzM4OSwxODEuMjY2MzhoMTcuMDI1MDYiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTIzMC4xNzM4OSwxNzYuMTEwNzNoMTcuMDI1MDYiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTIzOC42ODY5OCwxODcuNjM3NTd2LTE3Ljg5ODI2IiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxnIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIj48cGF0aCBkPSJNMjQ5LjIxOTgsMTg5LjMzNTMxYy0wLjkyNjEyLC0wLjkyNjEyIC00Ljc4MjE3LC00Ljc4MjE3IC00Ljc4MjE3LC00Ljc4MjE3bDIuMjU3NDUsLTIuMjU3NDVjMCwwIDMuODYyNCwzLjg2MjQgNC44MTY4Myw0LjgxNjgzYzAuNDEyMDgsMC40MTIwOCAwLjI0MjkyLDEuMzcxNiAtMC4yOTY4NywxLjkyODIyYy0wLjUzOTc5LDAuNTU2NjIgLTEuNjIzNjUsMC42NjYxNSAtMS45OTUyMywwLjI5NDU3eiIgZmlsbD0iIzAwYmUxZSIvPjxwYXRoIGQ9Ik0yNDEuMDQ2MjIsMTg1LjE2NjU2Yy0xLjcyOTI4LC0xLjcyOTI4IC0xLjcyOTI4LC00LjUzMjk5IDAsLTYuMjYyMjdjMS43MjkyOCwtMS43MjkyOCA0LjUzMjk5LC0xLjcyOTI4IDYuMjYyMjcsMGMxLjcyOTI4LDEuNzI5MjggMS43MjkyOCw0LjUzMjk5IDAsNi4yNjIyN2MtMS43MjkyOCwxLjcyOTI4IC00LjUzMjk5LDEuNzI5MjggLTYuMjYyMjcsMHoiIGZpbGw9IiMwMGJlMWUiLz48cGF0aCBkPSJNMjQxLjc5OTU3LDE4NC40MTMyYy0xLjMxMzIxLC0xLjMxMzIxIC0xLjMxMzIxLC0zLjQ0MjM1IDAsLTQuNzU1NTZjMS4zMTMyMSwtMS4zMTMyMSAzLjQ0MjM1LC0xLjMxMzIxIDQuNzU1NTYsMGMxLjMxMzIxLDEuMzEzMjEgMS4zMTMyMSwzLjQ0MjM1IDAsNC43NTU1NmMtMS4zMTMyMSwxLjMxMzIxIC0zLjQ0MjM1LDEuMzEzMjEgLTQuNzU1NTYsMHoiIGZpbGw9IiNmZmZmZmYiLz48cGF0aCBkPSJNMjQyLjYwMDAyLDE4My42MTI3NmMtMC44NzExNCwtMC44NzExNCAtMC44NzExNCwtMi4yODM1NCAwLC0zLjE1NDY4YzAuODcxMTQsLTAuODcxMTQgMi4yODM1NCwtMC44NzExNCAzLjE1NDY4LDBjMC44NzExNCwwLjg3MTE0IDAuODcxMTQsMi4yODM1NCAwLDMuMTU0NjhjLTAuODcxMTQsMC44NzExNCAtMi4yODM1NCwwLjg3MTE0IC0zLjE1NDY4LDB6IiBmaWxsPSIjMDBiZTFlIi8+PHBhdGggZD0iTTI0OS41MjkzLDE4OC4zMzI2NGMtMC42NzcyMywtMC42NzcyMyAtNC4wMTE4MiwtNC4wMTE4MiAtNC4wMTE4MiwtNC4wMTE4MmwwLjk0NTI4LC0wLjk0NTI4YzAsMCAzLjI4NTI1LDMuMjg1MjUgMy45NzcxNiwzLjk3NzE2YzAuMjQ0MzIsMC4yNDQzMiAwLjMxMTM1LDAuNjU5NzMgMC4wMzk0MiwwLjk1MjM1Yy0wLjI3MTkyLDAuMjkyNjIgLTAuNzIwNDIsMC4yNTcyMSAtMC45NTAwNSwwLjAyNzU5eiIgZmlsbD0iI2ZmZmZmZiIvPjwvZz48L2c+PC9nPjwvc3ZnPg==";

  const blockIconURI =
"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMy40ODI4NCIgaGVpZ2h0PSIyMy40ODI4NCIgdmlld0JveD0iMCwwLDIzLjQ4Mjg0LDIzLjQ4Mjg0Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjI4LjI1ODU4LC0xNjguMjU4NTgpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0yMjguMjU4NTgsMTkxLjc0MTQydi0yMy40ODI4NGgyMy40ODI4NHYyMy40ODI4NHoiIGZpbGw9IiMwMGJlMWUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIi8+PHBhdGggZD0iTTI0Ny42MzUyLDE4MC4xMTI5NGMwLDQuMTU1MjkgLTMuMzY4NDcsNy41MjI4MiAtNy41MjI4Miw3LjUyMjgyYy00LjE1NTI5LDAgLTcuNTIzNzYsLTMuMzY3NTMgLTcuNTIzNzYsLTcuNTIyODJjMCwtNC4xNTUyOSAzLjM2ODQ3LC03LjUyMzc2IDcuNTIzNzYsLTcuNTIzNzZjNC4xNTQzNSwwIDcuNTIyODIsMy4zNjg0NyA3LjUyMjgyLDcuNTIzNzZ6IiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIxLjI1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBkPSJNMjQzLjk4MDgsMTgwLjExNjYxYzAsMS42MzI5NCAtMC4yNjU0MSwzLjE0MzUzIC0wLjcyNjU5LDQuMzc1NTNjLTAuNjk4MzUsMS45MDExOCAtMS44NDY1OSwzLjE0MjU5IC0zLjE0MzUzLDMuMTQyNTljLTEuMjk2OTQsMCAtMi40NDE0MSwtMS4yNDE0MSAtMy4xNDM1MywtMy4xNDI1OWMtMC40NTY0NywtMS4yMzIgLTAuNzIyODIsLTIuNzQyNTkgLTAuNzIyODIsLTQuMzc1NTNjMCwtMS42MzM4OCAwLjI2NjM1LC0zLjE0MzUzIDAuNzIyODIsLTQuMzc1NTNjMC43MDIxMiwtMS45MTE1MyAxLjg0NjU5LC0zLjE1Mjk0IDMuMTQzNTMsLTMuMTUyOTRjMS4yOTY5NCwwIDIuNDQ1MTgsMS4yNDE0MSAzLjE0MzUzLDMuMTUyOTRjMC40NjExOCwxLjIzMiAwLjcyNjU5LDIuNzQxNjUgMC43MjY1OSw0LjM3NTUzeiIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMS4yNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTIzMi45NTUwMSwxODIuMjgxMTNoMTQuMzEzNDEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjEuMjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik0yMzIuOTU1MDEsMTc3Ljk0NjY0aDE0LjMxMzQxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIxLjI1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBkPSJNMjQwLjExMjE5LDE3Mi41OTAwMnYxNS4wNDc1MyIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMS4yNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PGcgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiPjxwYXRoIGQ9Ik0yNDkuMjE5NzgsMTg5LjMzNTI5Yy0wLjkyNjEyLC0wLjkyNjEyIC00Ljc4MjE3LC00Ljc4MjE3IC00Ljc4MjE3LC00Ljc4MjE3bDIuMjU3NDUsLTIuMjU3NDVjMCwwIDMuODYyNCwzLjg2MjQgNC44MTY4Myw0LjgxNjgzYzAuNDEyMDgsMC40MTIwOCAwLjI0MjkyLDEuMzcxNiAtMC4yOTY4NywxLjkyODIyYy0wLjUzOTc5LDAuNTU2NjIgLTEuNjIzNjUsMC42NjYxNSAtMS45OTUyMywwLjI5NDU3eiIgZmlsbD0iIzAwYmUxZSIvPjxwYXRoIGQ9Ik0yNDEuMDQ2MiwxODUuMTY2NTRjLTEuNzI5MjgsLTEuNzI5MjggLTEuNzI5MjgsLTQuNTMyOTkgMCwtNi4yNjIyN2MxLjcyOTI4LC0xLjcyOTI4IDQuNTMyOTksLTEuNzI5MjggNi4yNjIyNywwYzEuNzI5MjgsMS43MjkyOCAxLjcyOTI4LDQuNTMyOTkgMCw2LjI2MjI3Yy0xLjcyOTI4LDEuNzI5MjggLTQuNTMyOTksMS43MjkyOCAtNi4yNjIyNywweiIgZmlsbD0iIzAwYmUxZSIvPjxwYXRoIGQ9Ik0yNDEuNzk5NTUsMTg0LjQxMzE4Yy0xLjMxMzIxLC0xLjMxMzIxIC0xLjMxMzIxLC0zLjQ0MjM1IDAsLTQuNzU1NTZjMS4zMTMyMSwtMS4zMTMyMSAzLjQ0MjM1LC0xLjMxMzIxIDQuNzU1NTYsMGMxLjMxMzIxLDEuMzEzMjEgMS4zMTMyMSwzLjQ0MjM1IDAsNC43NTU1NmMtMS4zMTMyMSwxLjMxMzIxIC0zLjQ0MjM1LDEuMzEzMjEgLTQuNzU1NTYsMHoiIGZpbGw9IiNmZmZmZmYiLz48cGF0aCBkPSJNMjQyLjYsMTgzLjYxMjc0Yy0wLjg3MTE0LC0wLjg3MTE0IC0wLjg3MTE0LC0yLjI4MzU0IDAsLTMuMTU0NjhjMC44NzExNCwtMC44NzExNCAyLjI4MzU0LC0wLjg3MTE0IDMuMTU0NjgsMGMwLjg3MTE0LDAuODcxMTQgMC44NzExNCwyLjI4MzU0IDAsMy4xNTQ2OGMtMC44NzExNCwwLjg3MTE0IC0yLjI4MzU0LDAuODcxMTQgLTMuMTU0NjgsMHoiIGZpbGw9IiMwMGJlMWUiLz48cGF0aCBkPSJNMjQ5LjUyOTI4LDE4OC4zMzI2MmMtMC42NzcyMywtMC42NzcyMyAtNC4wMTE4MiwtNC4wMTE4MiAtNC4wMTE4MiwtNC4wMTE4MmwwLjk0NTI4LC0wLjk0NTI4YzAsMCAzLjI4NTI1LDMuMjg1MjUgMy45NzcxNiwzLjk3NzE2YzAuMjQ0MzIsMC4yNDQzMiAwLjMxMTM1LDAuNjU5NzMgMC4wMzk0MiwwLjk1MjM1Yy0wLjI3MTkyLDAuMjkyNjIgLTAuNzIwNDIsMC4yNTcyMSAtMC45NTAwNSwwLjAyNzU5eiIgZmlsbD0iI2ZmZmZmZiIvPjwvZz48L2c+PC9nPjwvc3ZnPg==";

  class SPprogress {
    constructor() {
      this.fetchInProgress = false;
      this.fetchProgress = 0;
      this.response = " ";
      this.fileSize = 0;
    }

    getInfo() {
      return {
        id: "SPprogress",
        name: "Fetch Progress",
        color1: "#00be1e",
        menuIconURI,
        blockIconURI,
        blocks: [
          {
            blockType: Scratch.BlockType.LABEL,
            text: "Warning: Most Proxies Don't Work"
          },
          {
            opcode: "fetchThis",
            blockType: Scratch.BlockType.COMMAND,
            text: "fetch [URL] with size [SIZE] bytes",
            arguments: {
              URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "https://extensions.turbowarp.org/hello.txt"
              },
              SIZE: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 13
              }
            },
          },
          {
            opcode: "getProgress",
            blockType: Scratch.BlockType.REPORTER,
            text: "progress of fetch"
          },
          {
            opcode: "getResponse",
            blockType: Scratch.BlockType.REPORTER,
            text: "response from fetch"
          },
          {
            opcode: "getSize",
            blockType: Scratch.BlockType.REPORTER,
            text: "response size in bytes"
          },
        ],
      };
    }

    async fetchThis(args) {
      const url = `${args.URL}${args.URL.includes("?") ? "&" : "?"}cache=${Math.random()}`;
      if (!url.includes("http")) return;
      if (this.fetchInProgress) return;
      this.fetchInProgress = true;
      this.fetchProgress = 0;
      const xhr = new XMLHttpRequest();
      xhr.responseType = "text";
      xhr.onload = () => {
        if (xhr.status === 200) {
          this.response = xhr.responseText;
          this.fetchProgress = 100;
          this.fileSize = new TextEncoder().encode(this.response).length;
        } else {
          this.response = `Error: ${xhr.status} - ${xhr.statusText}`;
          this.fetchProgress = -1;
          this.fileSize = 0;
        }
        this.fetchInProgress = false;
      };
      xhr.onerror = () => {
        this.response = "Error: Couldn't fetch this URL";
        this.fetchProgress = 0;
        this.fetchInProgress = false;
        this.fileSize = 0;
      };
      xhr.onprogress = (event) => {
        if (event.total !== 0) {
          this.fetchProgress = Math.round((event.loaded / event.total) * 100);
        } else {
          this.fetchProgress = Math.round((event.loaded / Scratch.Cast.toNumber(args.SIZE)) * 100);
        }
      };
      xhr.open("GET", url, true);
      xhr.send();
    }

    getResponse() {return this.response || "Error: Couldn't Fetch this URL"}
    getProgress() {return this.fetchProgress + "%"}
    getSize() {return this.fileSize}
  }

  Scratch.extensions.register(new SPprogress());
})(Scratch);
