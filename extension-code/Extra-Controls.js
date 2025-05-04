// Name: Extra Controls
// ID: SPadvControl
// Description: New Advanced Control Blocks
// By: SharkPool
// License: MIT

// Version V.1.7.05

(function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) throw new Error("Extra Controls must run unsandboxed");

  const menuIconURI =
"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2OS41NjUiIGhlaWdodD0iNjkuNTY1IiB2aWV3Qm94PSIwIDAgNjkuNTY1IDY5LjU2NSI+PGcgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIj48cGF0aCBkPSJNMiAzNC43ODNDMiAxNi42NzggMTYuNjc4IDIgMzQuNzgzIDJzMzIuNzgzIDE0LjY3OCAzMi43ODMgMzIuNzgzLTE0LjY3OCAzMi43ODMtMzIuNzgzIDMyLjc4M1MyIDUyLjg4OCAyIDM0Ljc4M3oiIGZpbGw9IiNmZmFiMTkiIHN0cm9rZT0iI2NmOGIxNyIgc3Ryb2tlLXdpZHRoPSI0Ii8+PHBhdGggZD0iTTU0Ljk1IDM0Ljc4M0gxNC42MTZNNTQuOTUgMjIuMTc5SDE0LjYxNk01NC45NSA0Ny4zODdIMTQuNjE2IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTE4LjYxNiAzNC45NWE2LjE2NyA2LjE2NyAwIDEgMSAxMi4zMzQgMCA2LjE2NyA2LjE2NyAwIDAgMS0xMi4zMzQgMHptMjAtMTIuNjY3YTYuMTY3IDYuMTY3IDAgMSAxIDEyLjMzNCAwIDYuMTY3IDYuMTY3IDAgMCAxLTEyLjMzNCAwek0zNS40NSA0Ny40NWE2LjE2NyA2LjE2NyAwIDEgMSAxMi4zMzMgMCA2LjE2NyA2LjE2NyAwIDAgMS0xMi4zMzMgMHoiIGZpbGw9IiNmZmYiIHN0cm9rZT0iI2ZmYWIxOSIgc3Ryb2tlLXdpZHRoPSI1Ii8+PHBhdGggZD0iTTE4LjYxNiAzNC45NWE2LjE2NyA2LjE2NyAwIDEgMSAxMi4zMzQgMCA2LjE2NyA2LjE2NyAwIDAgMS0xMi4zMzQgMG0yMC0xMi42NjdhNi4xNjcgNi4xNjcgMCAxIDEgMTIuMzM0IDAgNi4xNjcgNi4xNjcgMCAwIDEtMTIuMzM0IDBNMzUuNDUgNDcuNDVhNi4xNjcgNi4xNjcgMCAxIDEgMTIuMzMzIDAgNi4xNjcgNi4xNjcgMCAwIDEtMTIuMzMzIDAiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+";

  const getIconURI = (name) => {
    const start = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIH";
    return start + {
      "loop": "dpZHRoPSIyMC4xMTgiIGhlaWdodD0iMjAuMTE4IiB2aWV3Qm94PSIwIDAgMjAuMTE4IDIwLjExOCI+PGcgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIj48cGF0aCBkPSJNMCAyMC4xMThWLS4wMDFoMjAuMTE4djIwLjExOHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMTguMjQ3IDguNjE0aC0yLjZjMCAxLjUtLjMgMi45LTEgNC4yLS44IDEuNi0yLjEgMi44LTMuNyAzLjYtMS41LjgtMy4zIDEuMS00LjkuOC0xLjYtLjItMy4yLTEtNC40LTIuMS0uNC0uMy0uNC0uOS0uMS0xLjIuMy0uNC45LS40IDEuMi0uMSAxIC43IDIuMiAxLjEgMy40IDEuMXMyLjMtLjMgMy4zLTFjLjktLjYgMS42LTEuNSAyLTIuNi4zLS45LjQtMS44LjItMi44aC0yLjRjLS40IDAtLjctLjMtLjctLjcgMC0uMi4xLS4zLjItLjRsNC40LTQuNGMuMy0uMy43LS4zLjkgMGw0LjQgNC40cS40NS40NS4zLjljLS4xLjMtLjMuMy0uNS4zeiIgZmlsbD0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xNTciIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIyLjUiLz48cGF0aCBkPSJNMTguMjQ3IDguNjE0aC0yLjZjMCAxLjUtLjMgMi45LTEgNC4yLS44IDEuNi0yLjEgMi44LTMuNyAzLjYtMS41LjgtMy4zIDEuMS00LjkuOC0xLjYtLjItMy4yLTEtNC40LTIuMS0uNC0uMy0uNC0uOS0uMS0xLjIuMy0uNC45LS40IDEuMi0uMSAxIC43IDIuMiAxLjEgMy40IDEuMXMyLjMtLjMgMy4zLTFjLjktLjYgMS42LTEuNSAyLTIuNi4zLS45LjQtMS44LjItMi44aC0yLjRjLS40IDAtLjctLjMtLjctLjcgMC0uMi4xLS4zLjItLjRsNC40LTQuNGMuMy0uMy43LS4zLjkgMGw0LjQgNC40cS40NS40NS4zLjljLS4xLjMtLjMuMy0uNS4zIiBmaWxsPSIjZmZmIi8+PC9nPjwvc3ZnPg==",
      "break": "dpZHRoPSI2NS43OTYiIGhlaWdodD0iNjAuMDc1IiB2aWV3Qm94PSIwIDAgNjUuNzk2IDYwLjA3NSI+PGcgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIj48cGF0aCBkPSJNMjIuMDcyIDQuNDcxYzAgMS4yLjUgMi40IDEuMSAyLjYuOS4zLjkgMS41LjMgNC4zLS43IDMtMS42IDQuMS0zLjkgNC44LTEuNy41LTQuOCAyLjMtNi45IDMuOC00LjggMy41LTcuMiAzLjYtMTAuMy43LTMuNy0zLjUtMy4xLTcuOCAyLTEzIDIuMy0yLjQgNS44LTUuMSA3LjctNiA2LjEtMyAxMC0xLjkgMTAgMi44bS04LjUgMS4zYy00LjggMy05LjggOC44LTkuMiAxMC41LjkgMi4zIDMuMSAyIDguNC0xLjQgMi42LTEuNyA1LjMtMyA2LTNzMS4zLS41IDEuMy0xYzAtLjYtLjYtMS0xLjQtMS0xLjkgMC0yLjktMy0xLjUtNC42IDEuNi0yLS4xLTEuNy0zLjYuNSIgZmlsbC1vcGFjaXR5PSIuMTU3Ii8+PHBhdGggZD0iTTE3LjIwNiA1LjIzNGMtMS40IDEuNi0uMzg0IDQuNjMgMS41MTYgNC42My44IDAgMS40LjQwNyAxLjQgMS4wMDcgMCAuNS0uNiAxLjAwOC0xLjMgMS4wMDhzLTMuNDQzIDEuMzQyLTYuMDQzIDMuMDQyYy01LjMgMy40LTcuNTQ4IDMuNjc5LTguNDQ4IDEuMzc5LS42LTEuNyA0LjQ1NC03LjU3NyA5LjI1NC0xMC41NzcgMy41LTIuMiA1LjIyLTIuNDkgMy42Mi0uNDkiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJtMzQuMzcyLjU3MSA2LjEuNmM2LjkuNyAxNCAyLjkgMTcuNCA1LjUgMi4xIDEuNiAyLjIgMi4yIDEuMyA2LjItMS44IDguMi05LjYgMTIuOS0xNSA5LjEtMS42LTEuMi0zLjQtMi4xLTQtMi4xLTEuOSAwLTEwLjEtOC4yLTEwLjEtMTAuMSAwLTEgMS0zLjQgMi4yLTUuNXptMS4yIDYuN2MtMS41IDIuMi0xLjQgMi42LjggNSAxLjMgMS40IDIuOCAyLjYgMy4yIDIuNi41IDAgMi44LjkgNS4yIDIuMSA0IDEuOSA0LjUgMiA2LjcuNSAxLjQtLjggMi43LTMgMy4xLTQuNy45LTQtLjYtNS4zLTcuNy02LjgtNy40LTEuNi05LjYtMS40LTExLjMgMS4zIiBmaWxsLW9wYWNpdHk9Ii4xNTciLz48cGF0aCBkPSJNNDYuODkgNS45MjRjNy4xIDEuNSA4LjYzMiAyLjg1MiA3LjczMiA2Ljg1Mi0uNCAxLjctMS43MTEgMy45MjctMy4xMTEgNC43MjctMi4yIDEuNS0yLjczOCAxLjQxOC02LjczOC0uNDgyLTIuNC0xLjItNC43NDMtMi4xMjQtNS4yNDMtMi4xMjQtLjQgMC0xLjkwOC0xLjIyMy0zLjIwOC0yLjYyMy0yLjItMi40LTIuMjk1LTIuODI1LS43OTUtNS4wMjUgMS43LTIuNyAzLjk2My0yLjkyNSAxMS4zNjMtMS4zMjUiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJtNDAuMjcyIDI0Ljk3MSA0LjQgMi4xYzQuMyAyLjEgNC4zIDIuMSA3LjkuMiA1LjMtMi44IDctMS4zIDcgNi42LjEgNS43LjMgNi4zIDIuOCA3LjYgMy40IDEuOCA0LjQgNS42IDIuNCA4LjgtMS4yIDEuOC00LjggMy41LTE0LjEgNi42LTE2LjYgNS41LTE2LjUgNS42LTIyLjUtMTMuNC0zLjItOS45LTMuMi0xMC0xLjMtMTIuNSAyLTIuNyA2LjYtMy40IDEwLjQtMS43IDEuMy42IDEuOS4yIDIuNC0xLjh6bTQuOSA2LjljLTEuNC0uNy0yLjEtLjQtMy4xIDEuNWwtMS4zIDIuMy00LjMtMi4xYy03LTMuMy03LjMtMS44LTIuOSAxMS4zIDIuMSA2LjEgNC4yIDExLjMgNC41IDExLjUgMSAuNiAyMC44LTYuMSAyMi42LTcuNiAyLjItMS44IDEuNy0yLjgtMy01LjFsLTQuNC0yLjEgMS40LTMuM2MuOC0xLjggMS40LTQuMyAxLjQtNS40IDAtMi4xLTEuNC0yLjctMi41LTEtLjMuNS0yIDEtMy42IDEtMS43IDAtMy44LS40LTQuOC0xIiBmaWxsLW9wYWNpdHk9Ii4xNTciLz48cGF0aCBkPSJNNDkuOTg4IDMyLjgyNGMxLjYgMCAzLjMxLS40OTUgMy42MS0uOTk1IDEuMS0xLjcgMi41MDgtMS4wOTUgMi41MDggMS4wMDUgMCAxLjEtLjU5MiAzLjYxLTEuMzkyIDUuNDFsLTEuMzk0IDMuMzEzIDQuNDAyIDIuMTE0YzQuNyAyLjMgNS4xOTcgMy4zMTcgMi45OTcgNS4xMTctMS44IDEuNS0yMS42NzQgOC4yMjUtMjIuNjc0IDcuNjI1LS4zLS4yLTIuNDIyLTUuNDM3LTQuNTIyLTExLjUzNy00LjQtMTMuMS00LjA4Ni0xNC42NCAyLjkxNC0xMS4zNGw0LjMwNyAyLjA5NCAxLjMxLTIuMzA1YzEtMS45IDEuNzE0LTIuMjA0IDMuMTE0LTEuNTA0IDEgLjYgMy4xMiAxLjAwMyA0LjgyIDEuMDAzIiBmaWxsPSIjZmZmIi8+PC9nPjwvc3ZnPg==",
      "new": "dpZHRoPSIyMS4zMzMiIGhlaWdodD0iMjEuMzMzIiB2aWV3Qm94PSIwIDAgMjEuMzMzIDIxLjMzMyI+PGcgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIj48cGF0aCBkPSJNMTUuMDE1IDcuMjU4aC0yLjEwN2wtLjI4IDIuMTc0LTMuOTc0LjAwNi0uMjc1LTIuMThINi4zMjFjLS41ODYgMC0uODY5LS43MzMtLjQ2NC0xLjE1N2w0LjM0NS00LjU3NmEuNjQzLjY0MyAwIDAgMSAuOTE4IDBsNC4zNiA0LjU3NmMuNDA0LjQyNC4xMSAxLjE1Ny0uNDY1IDEuMTU3bTAgNi44MThjLjU3NSAwIC44NjkuNzMzLjQ2NSAxLjE1N2wtNC4zNiA0LjU3NmEuNjQzLjY0MyAwIDAgMS0uOTE4IDBsLTQuMzQ1LTQuNTc2Yy0uNDA1LS40MjQtLjEyMi0xLjE1Ny40NjQtMS4xNTdoMi4wNThsLjI1My0yLjE0OSAzLjk4LjAyNC4yOTYgMi4xMjVoMi4xMDciIGZpbGw9Im5vbmUiIHN0cm9rZS1vcGFjaXR5PSIuMiIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjIuNSIvPjxwYXRoIGQ9Ik0xNS4wMTUgNy4yNThoLTIuMTA3bC0uOTA1IDYuODM4Yy0uMDk4Ljc4NC0uNzk2IDEuMzM3LTEuNTU1IDEuMjIxLS42MTItLjA5LTEuMDktLjYwNC0xLjE2NC0xLjIybC0uOTA1LTYuODM5SDYuMzIxYy0uNTg2IDAtLjg2OS0uNzMzLS40NjQtMS4xNTdsNC4zNDUtNC41NzZhLjY0My42NDMgMCAwIDEgLjkxOCAwbDQuMzYgNC41NzZjLjQwNC40MjQuMTEgMS4xNTctLjQ2NSAxLjE1NyIgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PHBhdGggZD0iTTE1LjAxNSAxNC4wNzZjLjU3NSAwIC44NjkuNzMzLjQ2NSAxLjE1N2wtNC4zNiA0LjU3NmEuNjQzLjY0MyAwIDAgMS0uOTE4IDBsLTQuMzQ1LTQuNTc2Yy0uNDA1LS40MjQtLjEyMi0xLjE1Ny40NjQtMS4xNTdoMi4wNThsLjkwNS02LjgzOGMuMDc1LS42MTcuNTUyLTEuMTMxIDEuMTY0LTEuMjIxLjc2LS4xMTYgMS40NTcuNDM3IDEuNTU1IDEuMjJsLjkwNSA2LjgzOXoiIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjxwYXRoIGQ9Ik0wIDIxLjMzNFYwaDIxLjMzNHYyMS4zMzR6IiBmaWxsPSJub25lIi8+PC9nPjwvc3ZnPg==",
      "time": "dpZHRoPSIxOC40MSIgaGVpZ2h0PSIxOC40MSIgdmlld0JveD0iMCAwIDE4LjQxIDE4LjQxIj48ZyBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiPjxwYXRoIGQ9Ik0yLjEyOCA5Ljg3OWE3LjA3IDcuMDcgMCAwIDEgMy4zNDYtNi4wMTV2LS42NzhjMC0uOTU3Ljc3Ni0xLjczMiAxLjczMi0xLjczMmgzLjk5OWMuOTU2IDAgMS43MzIuNzc1IDEuNzMyIDEuNzMydi42NzhBNy4wNzcgNy4wNzcgMCAxIDEgMi4xMjkgOS44Nzl6bTguNzAzLTIuNzhjLjIyMyAwIC4zMzctLjI4NC4xOC0uNDQ4TDkuMzE5IDQuODc0YS4yNS4yNSAwIDAgMC0uMzU3IDBMNy4yNzYgNi42NTFjLS4xNTguMTY0LS4wNDguNDQ5LjE4LjQ0OWguNzk5bC4zNDQgMi42YS44NzQuODc0IDAgMCAwIC41NjMgMS41N2wxLjg5NiAxLjctMS4wMzguNzIyYy0uMTYxLjE2MS0uMDM4LjQ0LjE5LjQ0NWwyLjQ0OS4wNjNhLjI1LjI1IDAgMCAwIC4yNTItLjI1MmwtLjA2LTIuNDUyYy0uMDA1LS4yMjgtLjI4Ny0uMzQ4LS40NDUtLjE5bC0uNTc4LjU3OC0xLjgzLTEuNDAyYS44Ny44NyAwIDAgMC0uMzMxLS43NzVsLS4wMjMtMi44MTh6IiBmaWxsPSJub25lIiBzdHJva2Utb3BhY2l0eT0iLjIiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIxLjc1Ii8+PHBhdGggZD0iTTAgMTguNDFWMGgxOC40MXYxOC40MXoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMi4xMjggOS44NzlhNy4wNyA3LjA3IDAgMCAxIDMuMzQ2LTYuMDE1di0uNjc4YzAtLjk1Ny43NzYtMS43MzIgMS43MzItMS43MzJoMy45OTljLjk1NiAwIDEuNzMyLjc3NSAxLjczMiAxLjczMnYuNjc4QTcuMDc3IDcuMDc3IDAgMSAxIDIuMTI5IDkuODc5em04LjcwMy0yLjc4Yy4yMjMgMCAuMzM3LS4yODQuMTgtLjQ0OEw5LjMxOSA0Ljg3NGEuMjUuMjUgMCAwIDAtLjM1NyAwTDcuMjc2IDYuNjUxYy0uMTU4LjE2NC0uMDQ4LjQ0OS4xOC40NDloLjc5OWwuMzQ0IDIuNmEuODc0Ljg3NCAwIDAgMCAuNTYzIDEuNTdsMS40MjMgMS44NTctLjU2NS41NjVjLS4xNjEuMTYxLS4wMzguNDQuMTkuNDQ1bDIuNDQ5LjA2M2EuMjUuMjUgMCAwIDAgLjI1Mi0uMjUybC0uMDYtMi40NTJjLS4wMDUtLjIyOC0uMjg3LS4zNDgtLjQ0NS0uMTlsLS41NzguNTc4LTEuODMtMS40MDJhLjg3Ljg3IDAgMCAwLS4zMzEtLjc3NWwuMzQ2LTIuNjA3eiIgZmlsbD0iI2ZmZiIvPjwvZz48L3N2Zz4=",
      "flag": "ZpZXdCb3g9IjAgMCAxNi42MyAxNy41Ij48cGF0aCBkPSJNLjc1IDJhNi40NCA2LjQ0IDAgMCAxIDcuNjkgMGgwYTYuNDQgNi40NCAwIDAgMCA3LjY5IDB2MTAuNGE2LjQ0IDYuNDQgMCAwIDEtNy42OSAwaDBhNi40NCA2LjQ0IDAgMCAwLTcuNjkgMCIgc3R5bGU9ImZpbGw6IzRjYmY1NjtzdHJva2U6IzQ1OTkzZDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQiLz48cGF0aCBzdHlsZT0iZmlsbDojNGNiZjU2O3N0cm9rZTojNDU5OTNkO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MS41cHgiIGQ9Ik0uNzUgMTYuNzV2LTE2Ii8+PC9zdmc+"
    }[name]
  };

  const { vm, Cast } = Scratch;
  const runtime = vm.runtime;
  const isPM = Scratch.extensions.isPenguinMod;

  const keysMenu = [
    { text: "space", value: "space" }, { text: "up arrow", value: "up arrow" }, { text: "down arrow", value: "down arrow" },
    { text: "right arrow", value: "right arrow" }, { text: "left arrow", value: "left arrow" },
    { text: "a", value: "a" }, { text: "b", value: "b" }, { text: "c", value: "c" },
    { text: "d", value: "d" }, { text: "e", value: "e" }, { text: "f", value: "f" },
    { text: "g", value: "g" }, { text: "h", value: "h" }, { text: "i", value: "i" },
    { text: "j", value: "j" }, { text: "k", value: "k" }, { text: "l", value: "l" },
    { text: "m", value: "m" }, { text: "n", value: "n" }, { text: "o", value: "o" },
    { text: "p", value: "p" }, { text: "q", value: "q" }, { text: "r", value: "r" },
    { text: "s", value: "s" }, { text: "t", value: "t" }, { text: "u", value: "u" },
    { text: "v", value: "v" }, { text: "w", value: "w" }, { text: "x", value: "x" },
    { text: "y", value: "y" }, { text: "z", value: "z" }, { text: "0", value: "0" },
    { text: "1", value: "1" }, { text: "2", value: "2" }, { text: "3", value: "3" },
    { text: "4", value: "4" }, { text: "5", value: "5" }, { text: "6", value: "6" },
    { text: "7", value: "7" }, { text: "8", value: "8" }, { text: "9", value: "9" }
  ];

  let Thread; // defined by exports
  let conditionStorage = Object.create(null), keybinds = Object.create(null);
  let hats = { ...runtime._hats }, overrideCalls = {};
  window.SPadvControlIssueTimes = [];

  const regenReporters = ["SPadvControl_threadArgs"];
  if (Scratch.gui) Scratch.gui.getBlockly().then(SB => {
    const originalCheck = SB.scratchBlocksUtils.isShadowArgumentReporter;
    SB.scratchBlocksUtils.isShadowArgumentReporter = function (block) {
      if (originalCheck(block)) return true;
      return block.isShadow() && regenReporters.includes(block.type);
    };
  });

  const resetStorage = () => {
    conditionStorage = Object.create(null);
    window.SPadvControlIssueTimes = [];
  };
  runtime.on("PROJECT_STOP_ALL", resetStorage);
  runtime.on("PROJECT_START", resetStorage);

  const postData = (key, down) => {
    if (key === "space") key = " ";
    if (key.includes("arrow")) key = key.charAt(0).toUpperCase() + key.slice(1).replace(" arrow", "");
    runtime.ioDevices.keyboard.postData({ key, isDown: down });
  };
  runtime.on("KEY_PRESSED", (key) => {
    key = key.toLowerCase();
    // Use this for compatibility with other extensions
    if (keybinds[key] !== undefined) keybinds[key].keyV.forEach(item => postData(item, true));
  });
  runtime.on("AFTER_EXECUTE", () => {
    const keys = runtime.ioDevices.keyboard._keysPressed;
    for (let i = 0; i < Object.keys(keybinds).length; i++) {
      const keyName = Object.keys(keybinds)[i];
      const key = keybinds[keyName];
      if (keys.indexOf(keyName.toLowerCase()) === -1) key.keyV.forEach(i => postData(i, false));
    }
  });

  // capture all types of blockable Errors
  const ogError = Error;
  window.Error = function(message) {
    window.SPadvControlIssueTimes.push(Math.floor(Date.now() / 200) * 200);
    const err = new ogError(message);
    Object.setPrototypeOf(err, window.Error.prototype);
    return err;
  };
  Object.setPrototypeOf(window.Error, ogError);
  window.Error.prototype = Object.create(ogError.prototype);
  window.Error.prototype.constructor = window.Error;

  const ogConsoleEr = console.error;
  console.error = (...args) => {
    window.SPadvControlIssueTimes.push(Math.floor(Date.now() / 200) * 200);
    return ogConsoleEr.apply(this, args);
  }

  // Override needed for "ifRunBlock"
  const ogRestartThread = runtime._restartThread;
  runtime._restartThread = function (thread) {
    const forceStop = (t, c) => {
      if (c && t.procedures !== null && Object.keys(t.procedures).length > 0) try { t.generator.return() } catch {}
      t.status = 4;
    }
    // Check if we exist in the thread, then stop the script
    if (thread.isCompiled) {
      const e = thread.compatibilityStackFrame;
      if (e !== undefined && e !== null && e.SPifThread !== undefined) forceStop(e.SPifThread, true);
    } else {
      for (let i = 0; i < thread.stackFrames.length; i++) {
        const e = thread.stackFrames[i].executionContext;
        if (e !== null && e.SPifThread !== undefined) {
          forceStop(e.SPifThread, false);
          break;
        }
      }
    }
    return ogRestartThread.call(this, thread);
  };

  // override needed for "get from sprite" blocks
  const ogVisReport = runtime.visualReport;
  if (isPM) {
    runtime.visualReport = function (blockId, value) {
      if (overrideCalls[blockId]) {
        overrideCalls[blockId].pushReportedValue(value);
        delete overrideCalls[blockId];
        return;
      }
      return ogVisReport.call(this, blockId, value);
    }
  } else {
    runtime.visualReport = function (target, blockId, value) {
      if (overrideCalls[blockId]) {
        overrideCalls[blockId].pushReportedValue(value);
        delete overrideCalls[blockId];
        return;
      }
      return ogVisReport.call(this, target, blockId, value);
    }
  }

  // thread patcher for special threads
  const expRenderedTarget = new vm.exports.RenderedTarget({ blocks: null }, runtime);
  const Blocks = expRenderedTarget.blocks.constructor;
  const ogGetNext = Blocks.prototype.getNextBlock;
  Blocks.prototype.getNextBlock = function(name) {
    const thisBlock = ogGetNext.call(this, name);
    if (thisBlock) return thisBlock;
    for (const target of this.runtime.targets) {
      if (!target.isOriginal || target.blocks === this) continue;
      const targetBlock = ogGetNext.call(target.blocks, name);
      if (targetBlock) return targetBlock;
    }
    return undefined;
  }
  const ogGetBranch = Blocks.prototype.getBranch;
  Blocks.prototype.getBranch = function(id, branchNum) {
    const thisBlock = ogGetBranch.call(this, id, branchNum);
    if (thisBlock) return thisBlock;
    for (const target of this.runtime.targets) {
      if (!target.isOriginal || target.blocks === this) continue;
      const targetBlock = ogGetBranch.call(target.blocks, id, branchNum);
      if (targetBlock) return targetBlock;
    }
    return undefined;
  }

  // Thank you to @FurryR for the help
  function getUnsafeExports() {
    if (vm.exports.i_will_not_ask_for_help_when_these_break) return vm.exports.i_will_not_ask_for_help_when_these_break();
    else if (vm.exports.JSGenerator && vm.exports.IRGenerator?.exports) return {
      ...vm.exports, ScriptTreeGenerator: vm.exports.IRGenerator.exports.ScriptTreeGenerator
    };
  }
  const exports = getUnsafeExports();
  if (exports) {
    Thread = exports.Thread;
    const { JSGenerator, ScriptTreeGenerator } = exports;
    const _ogIRdescendStack = ScriptTreeGenerator.prototype.descendStackedBlock;
    ScriptTreeGenerator.prototype.descendStackedBlock = function (block) {
      switch (block.opcode) {
        case "SPadvControl_breakLoop": return { kind: "SPadvControl.break", id: block.id };
        case "SPadvControl_continueLoop": return { kind: "SPadvControl.continue", id: block.id };
        default: return _ogIRdescendStack.call(this, block);
      }
    };
    const _ogJSdescendStack = JSGenerator.prototype.descendStackedBlock;
    JSGenerator.prototype.descendStackedBlock = function (node) {
      switch (node.kind) {
        case "SPadvControl.break": {
          // execute in compatibility layer in case we are in a non-compiled loop block
          if (this.frames.find(frame => frame.isLoop)?.isLoop) this.source += "break;\n";
          else this.source += `yield* executeInCompatibilityLayer({}, runtime.getOpcodeFunction("SPadvControl_breakLoop"), false, false, "${node.id}", null);\n`;
          break;
        }
        case "SPadvControl.continue": {
          // execute in compatibility layer in case we are in a non-compiled loop block
          if (this.frames.find(frame => frame.isLoop)?.isLoop) this.source += "continue;\n";
          else this.source += `yield* executeInCompatibilityLayer({}, runtime.getOpcodeFunction("SPadvControl_continueLoop"), false, false, "${node.id}", null);\n`;
          break;
        }
        default: return _ogJSdescendStack.call(this, node);
      }
    };
  }

  class SPadvControl {
    getInfo() {
      return {
        id: "SPadvControl",
        name: "Extra Controls",
        docsURI: "https://extensions.penguinmod.com/docs/Extra-Control",
        color1: "#FFAB19",
        color2: "#EC9C13",
        color3: "#CF8B17",
        menuIconURI,
        blocks: [
          {
            opcode: "runFlag",
            extensions: ["colours_control"],
            blockType: Scratch.BlockType.COMMAND,
            text: "run [FLAG] and continue",
            arguments: {
              FLAG: { type: Scratch.ArgumentType.IMAGE, dataURI: getIconURI("flag") }
            }
          },
          "---",
          {
            opcode: "waitSecsOrCon",
            extensions: ["colours_control"],
            blockType: Scratch.BlockType.CONDITIONAL,
            branchCount: -1,
            text: "wait [NUM] seconds or until [CON]",
            arguments: {
              NUM: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 },
              CON: { type: Scratch.ArgumentType.BOOLEAN }
            }
          },
          {
            opcode: "waitChanged",
            extensions: ["colours_control"],
            blockType: Scratch.BlockType.CONDITIONAL,
            branchCount: -1,
            text: "wait until [THING] changes",
            arguments: {
              THING: {}
            }
          },
          "---",
          {
            opcode: "repeatForUntil",
            extensions: ["colours_control"],
            blockType: Scratch.BlockType.LOOP,
            text: "repeat [NUM] or until [CON]",
            arguments: {
              NUM: { type: Scratch.ArgumentType.STRING, defaultValue: 10 },
              CON: { type: Scratch.ArgumentType.BOOLEAN }
            }
          },
          {
            opcode: "repeatSecs",
            extensions: ["colours_control"],
            blockType: Scratch.BlockType.LOOP,
            text: "repeat for [NUM] secs",
            arguments: {
              NUM: { type: Scratch.ArgumentType.STRING, defaultValue: 1 }
            }
          },
          {
            opcode: "repeatSecUntil",
            extensions: ["colours_control"],
            blockType: Scratch.BlockType.LOOP,
            text: "repeat for [NUM] secs or until [CON]",
            arguments: {
              NUM: { type: Scratch.ArgumentType.STRING, defaultValue: 1 },
              CON: { type: Scratch.ArgumentType.BOOLEAN }
            }
          },
          {
            opcode: "spayedCondition",
            extensions: ["colours_control"],
            blockType: Scratch.BlockType.LOOP,
            text: ["if [CON1] start loop", "repeat until [CON2]"],
            arguments: {
              CON1: { type: Scratch.ArgumentType.BOOLEAN },
              CON2: { type: Scratch.ArgumentType.BOOLEAN }
            }
          },
          "---",
          {
            opcode: "loopInd",
            extensions: ["colours_control"],
            blockType: Scratch.BlockType.REPORTER,
            disableMonitor: true,
            text: "loop index"
          },
          {
            opcode: "loopTimer",
            extensions: ["colours_control"],
            blockType: Scratch.BlockType.REPORTER,
            disableMonitor: true,
            text: "timer in loop"
          },
          {
            opcode: "continueLoop",
            extensions: ["colours_control"],
            blockType: Scratch.BlockType.COMMAND,
            text: "run next cycle [ICON]",
            isTerminal: true,
            arguments: {
              ICON: { type: Scratch.ArgumentType.IMAGE, dataURI: getIconURI("loop") }
            }
          },
          {
            opcode: "breakLoop",
            extensions: ["colours_control"],
            blockType: Scratch.BlockType.COMMAND,
            text: "break out loop [ICON]",
            isTerminal: true,
            arguments: {
              ICON: { type: Scratch.ArgumentType.IMAGE, dataURI: getIconURI("break") }
            }
          },
          "---",
          { blockType: Scratch.BlockType.XML, xml: `<block type="SPadvControl_newThreadAdv"><value name="ARGS"><shadow type="text"><field name="TEXT">{ info: 1 }</field></shadow></value><value name="FRAME"><shadow type="SPadvControl_threadArgs"></shadow></value></block>` },
          {
            opcode: "newThreadAdv",
            blockType: Scratch.BlockType.CONDITIONAL,
            extensions: ["colours_control"],
            text: "new thread with [FRAME] [ARGS]",
            hideFromPalette: true, branchIconURI: getIconURI("new"),
            arguments: {
              ARGS: { type: Scratch.ArgumentType.STRING },
              FRAME: {}
            }
          },
          {
            opcode: "threadArgs", blockType: Scratch.BlockType.REPORTER, extensions: ["colours_control"],
            hideFromPalette: true, text: "data", allowDropAnywhere: true,
          },
          {
            opcode: "runType",
            extensions: ["colours_control"],
            blockType: Scratch.BlockType.LOOP,
            text: "run [TYPE]",
            arguments: {
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "runTypes" }
            }
          },
          {
            opcode: "asyncCode",
            extensions: ["colours_control"],
            blockType: Scratch.BlockType.CONDITIONAL,
            text: "[ICON] run async",
            arguments: {
              ICON: { type: Scratch.ArgumentType.IMAGE, dataURI: getIconURI("time") }
            }
          },
          {
            opcode: "simuRun",
            extensions: ["colours_control"],
            blockType: Scratch.BlockType.CONDITIONAL,
            text: "simultaneously run",
            branchCount: 2
          },
          "---",
          {
            opcode: "ifRunBlock",
            extensions: ["colours_control"],
            blockType: Scratch.BlockType.CONDITIONAL,
            text: "step through blocks while [CON]",
            arguments: {
              CON: { type: Scratch.ArgumentType.BOOLEAN }
            }
          },
          {
            opcode: "doThenWhile",
            extensions: ["colours_control"],
            blockType: Scratch.BlockType.LOOP,
            text: ["if [CON] then", "while running", "then"],
            branchCount: 3,
            arguments: {
              CON: { type: Scratch.ArgumentType.BOOLEAN }
            }
          },
          {
            opcode: "ifPart",
            extensions: ["colours_control"],
            blockType: Scratch.BlockType.CONDITIONAL,
            text: ["if [CON]", "branch ID [ID]"],
            arguments: {
              CON: { type: Scratch.ArgumentType.BOOLEAN },
              ID: { type: Scratch.ArgumentType.STRING, defaultValue: "my-block1" }
            }
          },
          {
            opcode: "elsePart",
            extensions: ["colours_control"],
            blockType: Scratch.BlockType.CONDITIONAL,
            text: ["else", "branch ID [ID]"],
            arguments: {
              ID: { type: Scratch.ArgumentType.STRING, defaultValue: "my-block1" }
            }
          },
          {
            opcode: "ifElseVal",
            extensions: ["colours_control"],
            blockType: Scratch.BlockType.BOOLEAN,
            text: "is branch with ID [ID] true?",
            arguments: {
              ID: { type: Scratch.ArgumentType.STRING, defaultValue: "my-block1" }
            }
          },
          "---",
          {
            opcode: "tryCatch",
            extensions: ["colours_control"],
            blockType: Scratch.BlockType.CONDITIONAL,
            text: ["try", "catch"],
            branchCount: 2
          },
          "---",
          {
            opcode: "runInSprite",
            extensions: ["colours_control"],
            blockType: Scratch.BlockType.CONDITIONAL,
            text: ["as [SPRITE] do", "then [TYPE] to finish"],
            arguments: {
              SPRITE: { type: Scratch.ArgumentType.STRING, menu: "targets3" },
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "contType" },
            }
          },
          {
            opcode: "asClone",
            extensions: ["colours_control"],
            blockType: Scratch.BlockType.CONDITIONAL,
            text: "as clones of [SPRITE] with [VAR] set to [VAL]",
            arguments: {
              SPRITE: { type: Scratch.ArgumentType.STRING, menu: "targets2" },
              VAR: { type: Scratch.ArgumentType.STRING, defaultValue: "my variable" },
              VAL: { type: Scratch.ArgumentType.STRING, defaultValue: "0" }
            }
          },
          {
            opcode: "asParent",
            extensions: ["colours_control"],
            blockType: Scratch.BlockType.CONDITIONAL,
            text: "as clone parent"
          },
          {
            opcode: "getInSprite",
            extensions: ["colours_control"],
            blockType: Scratch.BlockType.REPORTER,
            text: "get [THING] from [SPRITE]",
            allowDropAnywhere: true,
            arguments: {
              SPRITE: { type: Scratch.ArgumentType.STRING, menu: "targets" },
              THING: {}
            }
          },
          {
            opcode: "getInClone",
            extensions: ["colours_control"],
            blockType: Scratch.BlockType.REPORTER,
            text: "get [THING] from clone [ID] of [SPRITE] with [VAR] set to [VAL]",
            allowDropAnywhere: true,
            arguments: {
              SPRITE: { type: Scratch.ArgumentType.STRING, menu: "targets2" },
              THING: {},
              ID: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 },
              VAR: { type: Scratch.ArgumentType.STRING, defaultValue: "my variable" },
              VAL: { type: Scratch.ArgumentType.STRING, defaultValue: "0" }
            }
          },
          /* Deprecation Marker */
          {
            opcode: "deleteRun", extensions: ["colours_control"], blockType: Scratch.BlockType.LOOP,
            text: "delete this clone and tell main sprite", isTerminal: true, hideFromPalette: true
          },
          /* Marker End */
          { blockType: Scratch.BlockType.LABEL, text: "Functions" },
          {
            opcode: "onCall",
            extensions: ["colours_control"],
            blockType: Scratch.BlockType.CONDITIONAL,
            text: "on call [CALL] run",
            arguments: {
              CALL: { type: Scratch.ArgumentType.STRING, defaultValue: "branch1" }
            }
          },
          {
            opcode: "runBranch",
            extensions: ["colours_control"],
            blockType: Scratch.BlockType.COMMAND,
            text: "call [ID] to run",
            arguments: {
              ID: { type: Scratch.ArgumentType.STRING, defaultValue: "branch1" }
            }
          },
          {
            opcode: "runBranchWait",
            extensions: ["colours_control"],
            blockType: Scratch.BlockType.COMMAND,
            text: "call [ID] to run and wait",
            arguments: {
              ID: { type: Scratch.ArgumentType.STRING, defaultValue: "branch1" }
            }
          },
          "---",
          { blockType: Scratch.BlockType.XML, xml: `<block type="SPadvControl_defineFunc"><value name="NAME"><shadow type="text"><field name="TEXT">my-function</field></shadow></value><value name="ARG"><shadow type="SPadvControl_threadArgs"></shadow></value><value name="SUBSTACK"><block type="SPadvControl_returnFunc"><value name="VALUE"><shadow type="text"><field name="TEXT">value</field></shadow></value></block></value></block>` },
          {
            opcode: "defineFunc",
            extensions: ["colours_control"],
            blockType: Scratch.BlockType.CONDITIONAL,
            text: "define thread func [NAME] [ARG]",
            hideFromPalette: true,
            arguments: {
              NAME: { type: Scratch.ArgumentType.STRING },
              ARG: {}
            }
          },
          {
            opcode: "returnFunc",
            extensions: ["colours_control"],
            blockType: Scratch.BlockType.COMMAND,
            text: "return [VALUE]",
            isTerminal: true, hideFromPalette: true,
            arguments: {
              VALUE: { type: Scratch.ArgumentType.STRING }
            }
          },
          {
            opcode: "callFunc",
            extensions: ["colours_control"],
            blockType: Scratch.BlockType.COMMAND,
            text: "run func [NAME] with data [ARG]",
            arguments: {
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "my-function" },
              ARG: { type: Scratch.ArgumentType.STRING, defaultValue: "{ data: 123 }" }
            }
          },
          {
            opcode: "reportFunc",
            extensions: ["colours_control"],
            blockType: Scratch.BlockType.REPORTER,
            text: "run func [NAME] with data [ARG]",
            allowDropAnywhere: true,
            arguments: {
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "my-function" },
              ARG: { type: Scratch.ArgumentType.STRING, defaultValue: "{ data: 123 }" }
            }
          },
          { blockType: Scratch.BlockType.LABEL, text: "Hat Control" },
          {
            opcode: "forceHat",
            extensions: ["colours_control"],
            blockType: Scratch.BlockType.COMMAND,
            text: "force hat [HAT] to [TYPE] on activate",
            arguments: {
              HAT: { type: Scratch.ArgumentType.STRING, menu: "HAT_MENU" },
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "ACTIVATE" }
            }
          },
          {
            opcode: "resetHats",
            extensions: ["colours_control"],
            blockType: Scratch.BlockType.COMMAND,
            text: "reset forced hats"
          },
          { blockType: Scratch.BlockType.LABEL, text: "Key Control" },
          {
            opcode: "keybind",
            extensions: ["colours_control"],
            blockType: Scratch.BlockType.COMMAND,
            text: "bind key [KEY2] to [KEY1]",
            arguments: {
              KEY1: { type: Scratch.ArgumentType.STRING, menu: "keys" },
              KEY2: { type: Scratch.ArgumentType.STRING, menu: "keys" }
            }
          },
          {
            opcode: "getKeybind",
            extensions: ["colours_control"],
            blockType: Scratch.BlockType.REPORTER,
            text: "binds of [KEY] key",
            arguments: {
              KEY: { type: Scratch.ArgumentType.STRING, menu: "keys" }
            }
          },
          {
            opcode: "resetKey",
            extensions: ["colours_control"],
            blockType: Scratch.BlockType.COMMAND,
            text: "unbind all keybinds of [KEY]",
            arguments: {
              KEY: { type: Scratch.ArgumentType.STRING, menu: "keys" }
            }
          },
          {
            opcode: "resetBinds",
            extensions: ["colours_control"],
            blockType: Scratch.BlockType.COMMAND,
            text: "reset keybinds"
          }
        ],
        menus: {
          ACTIVATE: ["finish", "restart"],
          targets: { acceptReporters: true, items: this.getTargets(false, false) },
          targets2: { acceptReporters: true, items: this.getTargets(true, false) },
          targets3: { acceptReporters: true, items: this.getTargets(false, true) },
          HAT_MENU: { acceptReporters: true, items: "organizeHats" },
          keys: { acceptReporters: true, items: keysMenu },
          contType: { acceptReporters: true, items: ["wait", "dont wait"] },
          runTypes: {
            acceptReporters: true,
            items: ["forward", "reversed", "forward and reversed", "randomized"]
          }
        },
      };
    }

    // Helper Functions
    getTargets(myself, all) {
      const spriteNames = [];
      if (myself) spriteNames.push({ text: "myself", value: "_myself_" });
      else spriteNames.push({ text: "Stage", value: "_stage_" });
      if (all) {
        spriteNames.push(
          { text: "All Sprites", value: "_all_" }, { text: "All Main Sprites", value: "_all_2" }, { text: "All Clones", value: "_all_3" }
        );
      }  
      const targets = runtime.targets;
      for (let i = 1; i < targets.length; i++) {
        const target = targets[i];
        const name = target.getName();
        if (target.isOriginal) spriteNames.push({ text: name, value: name });
      }
      return spriteNames.length > 0 ? spriteNames : [""];
    }

    organizeHats() {
      const allHats = runtime._hats;
      const vanillaHats = [
        {text: "when I start as clone", value: "control_start_as_clone"},
        {text: "when green flag clicked", value: "event_whenflagclicked"},
        {text: "when key pressed", value: "event_whenkeypressed"},
        {text: "when sprite clicked", value: "event_whenthisspriteclicked"},
        {text: "when stage clicked", value: "event_whenstageclicked"},
        {text: "when backdrop switches", value: "event_whenbackdropswitchesto"},
        {text: "when touching object", value: "event_whentouchingobject"},
        {text: "when value greater than", value: "event_whengreaterthan"},
        {text: "when broadcast received", value: "event_whenbroadcastreceived"}
      ];
      const startIndex = Object.keys(allHats).findIndex(k => k === "event_whenbroadcastreceived");
      const filteredHats = Object.keys(allHats).filter((_, i) => i > startIndex).map(k => ({ text: k, value: k }));
      return [...vanillaHats, ...filteredHats];
    }

    addMissKeys(sourceObj, checkedObj) {
      Object.keys(sourceObj).forEach(key => {
        if (!(key in checkedObj)) checkedObj[key] = sourceObj[key];
      });
      Object.keys(sourceObj.stackFrames[0]).forEach(key => {
        if (!(key in checkedObj.stackFrames[0])) checkedObj.stackFrames[0][key] = sourceObj.stackFrames[0][key];
      });
      return checkedObj;
    }

    pushThreadTarget(id, newT, oldT, stack) {
      const thread = runtime._pushThread(id, oldT, { stackClick: stack });
      thread.target = newT; thread.ogTarget = oldT;
      if (runtime.compilerOptions.enabled) thread.tryCompile();
      return thread;
    }

    pushThread(id, util, opts) {
      const ogTarget = util.thread.ogTarget;
      const target = ogTarget ? ogTarget : util.target;
      const thread = runtime._pushThread(id, target, opts);
      if (ogTarget) {
        thread.target = util.target;
        thread.ogTarget = target;
      }
      if (runtime.compilerOptions.enabled) thread.tryCompile();
      return thread;
    }

    genFakeCode(block, util, newTarget) {
      if (!Thread) return "Extra Controls could not access Exports!";
      if (!block) return "";
      return new Promise((resolve) => {
        const thread = util.thread;
        const tempThread = new Thread(block.id);
        tempThread.pushStack(block.id);
        overrideCalls[block.id] = tempThread;
        tempThread.stackClick = true;
        tempThread.blockContainer = thread.blockContainer;
        tempThread.target = newTarget;
        tempThread.ogTarget = util.ogTarget ?? util.target;
        tempThread.pushReportedValue = (value) => resolve(value);
        runtime.threads.push(tempThread);
        if (!tempThread.stackClick && !tempThread.updateMonitor) runtime.threadMap.set(tempThread.getId(), tempThread);
        if (runtime.compilerOptions.enabled) tempThread.tryCompile();
      });
    }

    getThisBlock(util, branch, optBranch) {
      if (branch) return util.thread.blockContainer.getBranch(util.thread.peekStack(), optBranch ? optBranch : 1);
      else return util.thread.blockContainer.getBlock(util.thread.isCompiled ? util.thread.peekStack() : util.thread.peekStackFrame().op.id);
    }

    getLoopBlock(thread) {
      const stackFrames = thread.stackFrames, frameCount = stackFrames.length;
      let loopBlock = null, stackIndex = -1;
      for (let i = frameCount - 1; i >= 0; i--) {
        if (i < 0) break;
        if (!stackFrames[i].isLoop) continue;
        loopBlock = stackFrames[i].op.id;
        stackIndex = i;
        break;
      }
      if (!loopBlock) return false;
      return { block: loopBlock, index: stackIndex };
    }

    // Block Functions
    runFlag(_, util) {
      const thisThread = util.thread.topBlock;
      runtime.emit("PROJECT_START_BEFORE_RESET");
      runtime.threads.filter(thread => thread.topBlock !== thisThread).forEach(thread => thread.stopThisScript());

      runtime.ext_scratch3_sound.stopAllSounds();
      runtime.emit("PROJECT_START");
      runtime.updateCurrentMSecs();
      runtime.ioDevices.clock.resetProjectTimer();
      runtime.targets.forEach(target => target.clearEdgeActivatedValues());
      for (let i = runtime.targets.length - 1; i >= 0; i--) {
        const thisTarget = runtime.targets[i];
        thisTarget.onGreenFlag();
        if (!thisTarget.isOriginal) {
          runtime.disposeTarget(thisTarget);
          runtime.stopForTarget(thisTarget);
        }
      }
      runtime.startHats("event_whenflagclicked");
    }

    waitSecsOrCon(args, util) {
      this.repeatSecUntil(args, util);
    }

    waitChanged(args, util) {
      const input = Cast.toString(args.THING);
      if (util.stackFrame.SPwaitChange === undefined) util.stackFrame.SPwaitChange = input;
      if (Cast.compare(util.stackFrame.SPwaitChange, input) === 0) util.startBranch(1, true);
    }

    repeatForUntil(args, util) {
      if (typeof util.stackFrame.loopCounter === "undefined") util.stackFrame.loopCounter = Math.round(Cast.toNumber(args.NUM));
      util.stackFrame.loopCounter--;
      if (!Cast.toBoolean(args.CON) && util.stackFrame.loopCounter >= 0) util.startBranch(1, true);
    }

    repeatSecs(args, util) {
      if (util.stackTimerNeedsInit()) {
        util.startStackTimer(Math.max(0, 1000 * Cast.toNumber(args.NUM)));
        runtime.requestRedraw();
        util.startBranch(1, true);
      } else if (!util.stackTimerFinished()) {
        util.startBranch(1, true);
      }
    }

    repeatSecUntil(args, util) {
      const con = Cast.toBoolean(args.CON);
      if (con) return; // Dont run once
      if (util.stackTimerNeedsInit()) {
        util.startStackTimer(Math.max(0, 1000 * Cast.toNumber(args.NUM)));
        runtime.requestRedraw();
        util.startBranch(1, true);
      } else if (!util.stackTimerFinished() && !con) {
        util.startBranch(1, true)
      }
    }

    spayedCondition(args, util) {
      if (typeof util.stackFrame.index === "undefined") util.stackFrame.index = true;
      if (!Cast.toBoolean(args.CON1) && util.stackFrame.index) return;
      else {
        if (!Cast.toBoolean(args.CON2)) {
          util.stackFrame.index = false;
          util.startBranch(1, true);
        } else {
          util.stackFrame.index = true;
          return;
        }
      }
    }

    loopInd(_, util) {
      const ID = this.getThisBlock(util)?.id;
      if (typeof util.thread.SPloopReader === "undefined") util.thread.SPloopReader = {};
      if (util.thread.SPloopReader[ID] === undefined) util.thread.SPloopReader[ID] = 0;
      util.thread.SPloopReader[ID]++;
      return util.thread.SPloopReader[ID];
    }

    loopTimer(_, util) {
      const ID = this.getThisBlock(util)?.id;
      if (typeof util.thread.SPloopReader === "undefined") util.thread.SPloopReader = {};
      if (util.thread.SPloopReader[ID] === undefined) util.thread.SPloopReader[ID] = util.sequencer.timer.startTime;
      return (Date.now() - util.thread.SPloopReader[ID]) / 1000;
    }

    continueLoop(_, util) { this.blockLoop("continue", util) }
    breakLoop(_, util) { this.blockLoop("break", util) }
    blockLoop(b, util) {
      const thread = util.thread;
      const wasCompiled = thread.isCompiled;
      thread.isCompiled = false; // Failsafe
      const frameData = this.getLoopBlock(thread);
      if (!frameData) return;
      const block = frameData.block;
      const afterLoop = thread.blockContainer.getBlock(frameData.block).next;
      if (b === "break") {
        while(thread.stack.at(-1) !== frameData.block) thread.popStack();
        thread.popStack();
        if (afterLoop) thread.pushStack(afterLoop);
      } else {
        while (thread.stack[0] && thread.stack.at(-1) !== block) thread.popStack();
        thread.status = thread.constructor.STATUS_YIELD;
      }
      thread.isCompiled = wasCompiled;
    }

    threadArgs(_, util) { return util.thread.stackFrames[0].SPadvCtrl ?? "" }
    newThreadAdv(args, util) {
      const branch = this.getThisBlock(util, true, 1);
      if (branch) {
        const thread = this.pushThread(branch, util, { stackClick: false });
        this.addMissKeys(util.thread, thread);
        if (thread.SPadvCtrl === undefined) thread.stackFrames[0].SPadvCtrl = args.ARGS;
      }
    }

    async runType(args, util) {
      if (args.TYPE === "forward") {
        util.startBranch(1, false);
        return;
      }

      if (!Thread) return "Extra Controls could not access Exports!";
      const branch = this.getThisBlock(util, true, 1);
      if (!branch) return;
      
      const container = util.thread.blockContainer;
      let stack = [], block = branch;
      while (block !== null) {
        stack.push(block);
        block = container.getBlock(block).next;
      }
      if (args.TYPE === "reversed") stack = stack.reverse();
      else if (args.TYPE === "randomized") stack = stack.sort(() => Math.random() - 0.5);
      else stack = [...stack, ...stack.reverse()];

      // TODO forces interpretor version of blocks, which might not exist
      return new Promise((resolve) => {
        const thread = util.thread;
        const tempThread = new Thread(stack[0]);
        tempThread.pushStack(stack[0]);
        tempThread.blockContainer = thread.blockContainer;
        tempThread.target = util.target;
        tempThread.ogTarget = thread.ogTarget ?? util.target;
        tempThread.pushReportedValue = () => resolve();
        tempThread.stackIndex = 0;
        const ogPushStack = tempThread.pushStack;
        tempThread.pushStack = function(blockId) {
          this.stackIndex++;
          ogPushStack.call(this, blockId);
        };
        runtime.threads.push(tempThread);
        if (!tempThread.stackClick && !tempThread.updateMonitor) runtime.threadMap.set(tempThread.getId(), tempThread);
      });
    }

    async asyncCode(args, util) {
      if (!Thread) return "Extra Controls could not access Exports!";
      const branch = this.getThisBlock(util, true, 1);
      if (!branch) return;
      // TODO forces interpretor version of blocks, which might not exist
      return new Promise((resolve) => {
        const thread = util.thread;
        const tempThread = new Thread(branch);
        tempThread.pushStack(branch);
        tempThread.blockContainer = thread.blockContainer;
        tempThread.target = util.target;
        tempThread.ogTarget = thread.ogTarget ?? util.target;
        tempThread.pushReportedValue = () => resolve();
        const ogPushStack = tempThread.pushStack;
        tempThread.pushStack = function(blockId) {
          runtime.requestRedraw();
          ogPushStack.call(this, blockId);
        };
        runtime.threads.push(tempThread);
        if (!tempThread.stackClick && !tempThread.updateMonitor) runtime.threadMap.set(tempThread.getId(), tempThread);
      });
    }

    simuRun(_, util) {
      const branches = [this.getThisBlock(util, true, 1), this.getThisBlock(util, true, 2)];
      if (branches[0] && branches[1]) {
        const { target, thread } = util;
        const thread1 = this.pushThread(branches[0], util, { stackClick: false });
        thread1.status = 5;
        this.addMissKeys(thread, thread1);
        const thread2 = this.pushThread(branches[1], util, { stackClick: false });
        this.addMissKeys(thread, thread2);
        thread1.status = 0;
      }
    }

    ifRunBlock(args, util) {
      const con = Cast.toBoolean(args.CON);
      if (util.stackFrame.SPifThread) {
        const thread = util.stackFrame.SPifThread;
        if (con && runtime.isActiveThread(thread)) util.startBranch(2, true);
        else {
          if (thread.isCompiled) {
            // Force Stop Custom Compiled Blocks
            if (thread.procedures !== null && Object.keys(thread.procedures).length > 0) try { thread.generator.return() } catch {}
          }
          thread.status = 4; // Works better than stopThisScript() for Custom Blocks
        }
      } else {
        const branch = this.getThisBlock(util, true, 1);
        if (branch && con) {
          util.stackFrame.SPifThread = this.pushThread(branch, util, { stackClick: false });
          this.addMissKeys(util.thread, util.stackFrame.SPifThread);
          util.startBranch(2, true);
        }
      }
    }

    doThenWhile(args, util) {
      if (util.stackFrame.whileThread === undefined) {
        if (Cast.toBoolean(args.CON)) {
          const branch = this.getThisBlock(util, true, 0);
          if (branch) {
            let thread = this.pushThread(branch, util, { stackClick: false });
            this.addMissKeys(util.thread, thread);
            util.stackFrame.whileThread = thread;
            util.startBranch(2, true);
          }
        }
      } else {
        if (runtime.isActiveThread(util.stackFrame.whileThread)) util.startBranch(2, true);
        else util.startBranch(3, false);
      }
    }

    ifPart(args, util) {
      const con = Cast.toBoolean(args.CON);
      conditionStorage[Cast.toString(args.ID)] = con;
      if (con) util.startBranch(1, false);
    }
    elsePart(args, util) {
      const ID = Cast.toString(args.ID);
      if (conditionStorage[ID] !== undefined && conditionStorage[ID] === false) util.startBranch(1, false);
    }
    ifElseVal(args) {
      return Cast.toBoolean(conditionStorage[Cast.toString(args.ID)]);
    }

    async tryCatch(_, util) {
      const branch = this.getThisBlock(util, true, 1);
      if (branch) {
        const issueTimes = window.SPadvControlIssueTimes;
        const thread = this.pushThread(branch, util, { stackClick: false });
        this.addMissKeys(util.thread, thread);
        await new Promise(resolve => {
          const checkThread = () => {
            thread.pushTime = Math.floor(Date.now() / 200) * 200;
            if (!runtime.isActiveThread(thread)) resolve();
            else if (issueTimes.indexOf(thread.pushTime) !== -1) {
              thread.stopThisScript();
              resolve();
            }
            else setTimeout(checkThread, 1);
          };
          checkThread();
        });
        if (issueTimes.indexOf(thread.pushTime) !== -1) util.startBranch(2, false);
      }
    }

    async runInSprite(args, util) {
      const thisSprite = util.thread.ogTarget !== undefined ? util.thread.ogTarget : util.target;
      const branch = util.thread.ogTarget !== undefined ? util.thread.ogTarget.blocks.getBranch(util.thread.peekStack(), 1) :
        this.getThisBlock(util, true, 1);
      const name = Cast.toString(args.SPRITE);
      let newTarget = name === "_stage_" ? runtime.getTargetForStage() : runtime.getSpriteTargetByName(name);
      let targets = runtime.targets, thread;
      if (!branch) return;
      if (name.startsWith("_all_")) {
        if (name.includes("2")) targets = targets.filter(target => target.isOriginal); // Main Sprites
        if (name.includes("3")) targets = targets.filter(target => !target.isOriginal); // Clones
        newTarget = targets[0];
      }
      if (newTarget) {
        thread = this.pushThreadTarget(branch, newTarget, thisSprite, false);
        this.addMissKeys(util.thread, thread);
      }
      if (name.startsWith("_all_")) for (let i = 0; i < targets.length; i++)
        this.addMissKeys(util.thread, this.pushThreadTarget(branch, targets[i], thisSprite, false));
      // Branch is the same, no need to wait for all threads to finish when they are the same
      if (args.TYPE === "wait" && thread) {
        await new Promise(resolve => {
          const interval = setInterval(() => {
            if (!runtime.isActiveThread(thread)) {
              clearInterval(interval);
              resolve();
            }
          }, 1);
        });
      }
    }

    asClone(args, util) {
      const thisSprite = util.thread.ogTarget !== undefined ? util.thread.ogTarget : util.target;
      const target = args.SPRITE === "_myself_" ? thisSprite : runtime.getSpriteTargetByName(args.SPRITE);
      if (!target) return;
      const clones = target.sprite.clones;
      const branch = this.getThisBlock(util, true, 1);
      if (branch) {
        const pushThread = (clone) => {
          let thread;
          if (args.SPRITE === "_myself_") thread = runtime._pushThread(branch, clone);
          else thread = this.pushThreadTarget(branch, clone, thisSprite, false);
          this.addMissKeys(util.thread, thread);
        };
        const varName = Cast.toString(args.VAR);
        if (!varName) for (var i = 1; i < clones.length; i++) pushThread(clones[i]);
        else {
          for (var i = 1; i < clones.length; i++) {
            const variable = clones[i].lookupVariableByNameAndType(varName, "", true);
            if (variable && Cast.toString(variable.value) === Cast.toString(args.VAL)) pushThread(clones[i]);
          }
        }
      }
    }

    async getInSprite(args, util) {
      const block = this.getThisBlock(util, false);
      const newTarget = args.SPRITE === "_stage_" ? runtime.getTargetForStage() : runtime.getSpriteTargetByName(args.SPRITE);
      if (!newTarget || !block?.inputs.THING) return "";
      const thing = util.thread.blockContainer.getBlock(block.inputs.THING.block);
      return await this.genFakeCode(thing, util, newTarget) ?? "";
    }

    async getInClone(args, util) {
      const target = args.SPRITE === "_myself_" ? util.target : runtime.getSpriteTargetByName(args.SPRITE);
      const block = this.getThisBlock(util, false);
      if (!block || !target) return "";
      const clones = target.sprite.clones;
      const varName = Cast.toString(args.VAR);
      let newTarget = [];
      if (!varName) newTarget = clones[Cast.toNumber(args.ID) - 1];
      else {
        for (let i = 1; i < clones.length; i++) {
          const variable = clones[i]?.lookupVariableByNameAndType(varName, "", true);
          if (variable && Cast.toString(variable.value) === Cast.toString(args.VAL)) newTarget.push(clones[i]);
        }
        newTarget = newTarget[Cast.toNumber(args.ID) - 1];
      }

      if (!newTarget || !block?.inputs.THING) return "";
      const thing = util.thread.blockContainer.getBlock(block.inputs.THING.block);
      return await this.genFakeCode(thing, util, newTarget) ?? "";
    }

    asParent(args, util) {
      const target = util.target;
      if (target.isOriginal) return;
      const branch = this.getThisBlock(util, true, 1);
      if (branch) this.addMissKeys(util.thread, this.pushThread(branch, { ...util, target: target.sprite.clones[0] }, { stackClick: false }));
    }

    /* Deprecation Marker */
    deleteRun(args, util) {
      const target = util.target;
      if (target.isOriginal) return;
      const branch = this.getThisBlock(util, true, 1);
      runtime.disposeTarget(target);
      runtime.stopForTarget(target);
      if (branch) this.addMissKeys(util.thread, this.pushThread(branch, { ...util, target: target.sprite.clones[0] }, { stackClick: false }));
    }
    /* Marker End */

    onCall(args, util) {
      if (util.thread.SPcallID === args.CALL && util.stackFrame.doneJob === undefined) {
        util.stackFrame.doneJob = true;
        util.startBranch(1, true);
      } else { util.thread.stopThisScript() }
    }

    runBranch(args, util) {
      const allBlocks = [], newThreads = [];
      for (const thisT in runtime.targets) {
        const target = runtime.targets[thisT];
        const targetBlocks = target.blocks._blocks;
        for (const block in targetBlocks) {
          if (targetBlocks[block].opcode === "SPadvControl_onCall") allBlocks.push({ block, target});
        };
      }
      for (let i = 0; i < allBlocks.length; i++) {
        const thread = runtime._pushThread(allBlocks[i].block, allBlocks[i].target);
        thread.SPcallID = Cast.toString(args.ID);
        newThreads.push(thread);
      }
      return newThreads; // used for "run and wait"
    }
    runBranchWait(args, util) {
      if (util.stackFrame.newThreads === undefined) util.stackFrame.newThreads = this.runBranch(args, util);
      if (util.stackFrame.newThreads.some((thread) => runtime.threads.indexOf(thread) !== -1)) {
        if (util.stackFrame.newThreads.every((thread) => runtime.isWaitingThread(thread))) util.yieldTick();
        else util.yield();
      }
    }

    defineFunc(args, util) {
      util.thread[`SPfunction-${args.NAME}`] = this.getThisBlock(util, true, 1);
    }

    returnFunc(args, util) {
      util.thread.justReported = args.VALUE;
      //Delay the Deletion of this Thread
      if (util.stackTimerNeedsInit()) {
        util.startStackTimer(0);
        runtime.requestRedraw();
        util.yield();
      } else if (!util.stackTimerFinished()) util.yield();
      util.thread.stopThisScript();
    }

    callFunc(args, util) {
      if (util.stackFrame.SPran) {
        if (runtime.isActiveThread(util.stackFrame.SPran)) util.yield();
      } else {
        const func = util.thread[`SPfunction-${args.NAME}`];
        if (func !== undefined) {
          const thread = this.pushThread(func, util, { stackClick: false });
          this.addMissKeys(util.thread, thread);
          if (thread.SPadvCtrl === undefined) thread.stackFrames[0].SPadvCtrl = args.ARG;
          util.stackFrame.SPran = thread;
          util.yield();
        }
      }
    }
    reportFunc(args, util) {
      if (util.stackFrame.SPran) {
        if (runtime.isActiveThread(util.stackFrame.SPran)) util.yield();
        else return util.stackFrame.SPran.justReported ?? "";
      } else {
        const func = util.thread[`SPfunction-${args.NAME}`];
        if (func === undefined) return "";
        else {
          const thread = this.pushThread(func, util, { stackClick: false });
          this.addMissKeys(util.thread, thread);
          if (thread.SPadvCtrl === undefined) thread.stackFrames[0].SPadvCtrl = args.ARG;
          util.stackFrame.SPran = thread;
          util.yield();
        }
      }
    }

    forceHat(args) {
      const thisHat = runtime._hats[args.HAT];
      if (thisHat) thisHat.restartExistingThreads = args.TYPE === "restart";
    }

    resetHats(args) {
      const currentHats = runtime._hats;
      for (const key in hats) currentHats[key].restartExistingThreads = hats[key].restartExistingThreads;
      hats = { ...runtime._hats };
    }

    keybind(args) {
      const key1 = Cast.toString(args.KEY1);
      const key2 = Cast.toString(args.KEY2);
      if (key1 === key2) return;
      if (keybinds[key1]) {
        if (keybinds[key1].keyV.indexOf(key2) === -1) keybinds[key1].keyV.push(key2);
      } else { keybinds[key1] = { keyV : [key2] } }
    }

    getKeybind(args) {
      const key = keybinds[Cast.toString(args.KEY)];
      return key ? JSON.stringify(key.keyV) : `["${args.KEY}"]`;
    }

    resetKey(args) { delete keybinds[Cast.toString(args.KEY)] }

    resetBinds() { keybinds = Object.create(null) }
  }

  Scratch.extensions.register(new SPadvControl());
})(Scratch);
