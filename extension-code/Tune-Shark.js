// Name: Tune Shark (Legacy)
// ID: SPtuneShark
// Description: Advanced Sound Engine, inspired by LilyMakesThings
// By: SharkPool

// Version V.2.6.1
// Credit to HOME for the song "Resonance" being used as the default audio link

(function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) throw new Error("Tune Shark V2 must be run unsandboxed");

  const vm = Scratch.vm;
  const runtime = vm.runtime;

  // Create an Event for when Pause Project is Activated
  // Save original function if it exists
  let ogPauseFunc = Object.getOwnPropertyDescriptor(runtime.ioDevices.clock, "_paused")?.set;
  Object.defineProperty(runtime.ioDevices.clock, "_paused", {
    set: function(value) {
      this._pausedValue = value;
      runtime.emit("SP_TUNESHARK2_PROJECT_PAUSED", value);
      if (ogPauseFunc) ogPauseFunc.call(this, value);
    },
    get: function() { return this._pausedValue }
  });

  let enableBlock = true;
  let flagCon = false;
  let globalPauseBank = [];

  const menuIconURI =
"data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwLDAsMTAyLjE4NTE4LDEwMi4xODUxOCIgaGVpZ2h0PSIxMDIuMTg1MTgiIHdpZHRoPSIxMDIuMTg1MTgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI0OC45MDc0MSwtMTQ4LjkwNzQxKSI+PGcgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9Ij48cGF0aCBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2U9IiMwMDAwMDAiIGZpbGwtcnVsZT0ibm9uemVybyIgZmlsbD0iIzg0ODQ4NCIgZD0iTTI0OC45MDc0MSwyMDBjMCwtMjguMjE3NjYgMjIuODc0OTMsLTUxLjA5MjU5IDUxLjA5MjU5LC01MS4wOTI1OWMyOC4yMTc2NiwwIDUxLjA5MjU5LDIyLjg3NDkzIDUxLjA5MjU5LDUxLjA5MjU5YzAsMjguMjE3NjYgLTIyLjg3NDkzLDUxLjA5MjU5IC01MS4wOTI1OSw1MS4wOTI1OWMtMjguMjE3NjYsMCAtNTEuMDkyNTksLTIyLjg3NDkzIC01MS4wOTI1OSwtNTEuMDkyNTl6Ij48L3BhdGg+PHBhdGggc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGZpbGw9IiNmZmZmZmYiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9IiBkPSJNMzIyLjMxMzMsMjMyLjkyMTI4bC0wLjAwMDQzLC0wLjAwMjA4Yy0xLjE4NCwyLjM5NTg3IC00LjQxMDE4LDMuNzE3NjMgLTcuODA4MywzLjAyMTA3Yy0zLjg5MTU1LC0wLjc5ODA4IC02LjUzNDQyLC0zLjk0MDg3IC01LjkwMjczLC03LjAxOTk5YzAuNjMxNDgsLTMuMDc5NyA0LjI5Nzc3LC00LjkyODM3IDguMTg5MzMsLTQuMTMwMjljMS43NzIxMiwwLjM2MzIzIDMuMjgzMjYsMS4yMTMzIDQuMzQ2MTcsMi4zMjE0NWw2LjMxNTc1LC0xMy4zOTY5Yy05Ljk4MzkyLC0zLjkwNzUxIC0xOC42NzI4MywtNC44MTYxOCAtMTguNjcyODMsLTQuODE2MThsLTguNDkxNjIsMTguMDEyMzRjLTAuOTEzNDYsMi43NjU4NiAtNC4zODE0Nyw0LjM2NzM2IC04LjA1MDg1LDMuNjE1MjljLTMuODkxMTYsLTAuNzk3OSAtNi41MzM4NSwtMy45NDEwNyAtNS45MDI1NSwtNy4wMjAzOGMwLjYzMTMsLTMuMDc5MzEgNC4yOTc1OSwtNC45Mjc5OSA4LjE4OTMzLC00LjEzMDI5YzEuODA1MTcsMC4zNjk4OCAzLjM0MTYsMS4yNDUwMyA0LjQwNzQ5LDIuMzgzNzJsMTEuMzcyNTUsLTI0LjEwMzQyYzAsMCAxMi43ODgxNiwwLjIyMjY0IDI1LjQ2NDk3LDYuNzIyMzN6Ij48L3BhdGg+PHBhdGggc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2U9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgZmlsbD0ibm9uZSIgZD0iTTI3NC44MTgyNSwxNzguMTkxNTZsMy42ODc2LDIxLjYwMzkyIj48L3BhdGg+PHBhdGggc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2U9IiMwMDAwMDAiIGZpbGwtcnVsZT0ibm9uemVybyIgZmlsbD0iI2ZmZmZmZiIgZD0iTTI4MC4wMzkzOCwyMDAuNDM3NDVjMS4yNTk2NywyLjM3NzYgLTAuNzA0MDcsNS41MTAwNyAtNC4zODYxMyw2Ljk5NjU3Yy0zLjY4MjA2LDEuNDg2NSAtNy42ODgxMywwLjc2NDExIC04Ljk0NzgsLTEuNjEzNDljLTEuMjU5NjcsLTIuMzc3NiAwLjcwNDA3LC01LjUxMDA3IDQuMzg2MTMsLTYuOTk2NTdjMy42ODIwNiwtMS40ODY1IDcuNjg4MTMsLTAuNzY0MTEgOC45NDc4LDEuNjEzNDl6Ij48L3BhdGg+PHBhdGggc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlPSIjMDAwMDAwIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGZpbGw9IiNmZmZmZmYiIGQ9Ik0yNzIuNzg3MTQsMTc1Ljc0Njk1YzAsMCA4Ljg1MzU3LC0xLjU1NTA0IDExLjI3NzM3LDIuNTI2NzVjMi4xNjY1NywzLjY0ODg1IDAuMDY1MjcsNy45MzA3OCAwLjE5MzQ3LDkuMjM4MDdjMC4xMjgyLDEuMzA3MjkgMS45ODQwNSwxLjAxMTU5IDEuOTg0MDUsMS4wMTE1OWwtMC4wMTIxLDEuNTI3MTFjMCwwIC0yLjYxMjk1LDAuNjEwMjggLTMuMTEyNCwtMS4yMDMzMmMtMC40OTk0NSwtMS44MTM1OSAtMC41MTAzOSwtNS40NTMzNiAtMi41NzU2MiwtNy41MDUzMmMtMi4wNjU4MSwtMi4wNTE3NyAtNi44NzUwOSwtMC42OTIwNyAtNi44NzUwOSwtMC42OTIwNyI+PC9wYXRoPjxwYXRoIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2U9IiMwMDAwMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI2ZmZmZmZiIgZD0iTTMwOS4wNzk1NCwxODQuNjY2ODFjLTAuMzI1ODksMi4wNjkyNCAtMi4yOTkxMywzLjIzMzIzIC00LjA5MzM3LDMuOTEwMThjLTEuNjEyMDYsMC43MDk1MSAtMy40Njg4LDAuOTg0OTkgLTUuMTU1MTQsMC4zNjE0NWMtMS41OTQ2MiwtMC4zNzIyOSAtMy4xMTUzOCwtMS43NjU0OSAtMi45MjYyLC0zLjUxNTE2YzAuMTUwOSwtMi4wMzc0NiAxLjg1MzI3LC0zLjczNTEyIDMuNzU0NjEsLTQuMzA0MzZjMS44OTQ4NiwtMC43ODA5NiA0LjE1NTczLC0wLjcxMzc3IDUuOTY1MTcsMC4yNTI5MmMwLjg5MTg1LDAuNDEyNTQgMi4xMzkwOCwtMTMuODE3NjMgMi45NjU3NiwtMjAuMTExODRjMC4wOTgxOSwtMC42MjcxNCAyLjUyNDk2LC0wLjQ2MDE3IDIuNDU1NTMsMC4xNDc2YzAsMCAtMS44MTEyLDE1LjE2Nzc0IC0yLjk2NjM3LDIzLjI1OTIxeiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+PCEtLXJvdGF0aW9uQ2VudGVyOjUxLjA5MjU5OjUxLjA5MjU5LS0+";
  const blockIconURI =
"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI4Ni4zNDQ5MiIgaGVpZ2h0PSI3OC45NzQwMSIgdmlld0JveD0iMCwwLDg2LjM0NDkyLDc4Ljk3NDAxIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjU2LjgyNzU0LC0xNjAuNTEyOTkpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTI1Ni44Mjc1NCwyMzkuNDg3MDF2LTc4Ljk3NDAxaDg2LjM0NDkydjc4Ljk3NDAxeiIgZmlsbD0iIzg0ODQ4NCIgc3Ryb2tlLXdpZHRoPSIwIi8+PHBhdGggZD0iTTMyMS43MTUyLDIxNC4zNDg2NWwtMC4wMDE3NywtMC4wMDIzNmMtMC4wNjg0NCwzLjcwOTM1IC0zLjMzNzA2LDcuMjc4ODcgLTguMDE2MzgsOC40MTU4MWMtNS4zNTksMS4zMDE1NSAtMTAuNTM4MDUsLTEuMDgwMyAtMTEuNTY3NjEsLTUuMzIwNjVjLTEuMDMwMTUsLTQuMjQwOTUgMi40NzkxOSwtOC43MzI2NCA3LjgzODIsLTEwLjAzNDE5YzIuNDQwMjUsLTAuNTkyOTUgNC44NDA5OCwtMC40MjAwOCA2LjgzMTY1LDAuMzQyMnYtMjAuNTYxMDNjLTE0Ljg0OTgsMS4wMDM2IC0yNi4yOTgyMyw1LjAwNjE4IC0yNi4yOTgyMyw1LjAwNjE4djI3LjY0NDYyYzAuNDkwMjksNC4wMTM3OSAtMi45MTYzOSw4LjA3Nzc0IC03Ljk2OTE4LDkuMzA1NTRjLTUuMzU4NDEsMS4zMDE1NSAtMTAuNTM3NDYsLTEuMDgwODkgLTExLjU2NzYxLC01LjMyMTI0Yy0xLjAzMDE1LC00LjI0MDM2IDIuNDc5MTksLTguNzMyMDUgNy44MzgyLC0xMC4wMzQxOWMyLjQ4NTY4LC0wLjYwNDE2IDQuOTMzMDIsLTAuNDE0NzcgNi45NDU1MiwwLjM4NDA5bDAuMDExOCwtMzYuOTk4NTNjMCwwIDE2LjE4OTcsLTcuMjkwNjcgMzUuOTU1NDEsLTYuNjMzNDF6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvZz48L3N2Zz4=";

  const groupIconURI =
"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI4Ni4zNDQ5MiIgaGVpZ2h0PSI3OC45NzQwMSIgdmlld0JveD0iMCwwLDg2LjM0NDkyLDc4Ljk3NDAxIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTk2LjgyNzU0LC0xNDAuNTEyOTkpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0xOTYuODI3NTQsMjE5LjQ4NzAxdi03OC45NzQwMWg4Ni4zNDQ5MnY3OC45NzQwMXoiIGZpbGw9IiM4NDg0ODQiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIi8+PHBhdGggZD0iTTI2NS45NTc3MSwxODMuMjM1NjVsLTAuMDAxMDgsLTAuMDAyMTZjLTAuNjA0MDcsMi45Nzk1NCAtMy43NjY3NCw1LjM3MjgyIC03LjcwNjQzLDUuNTk2NzJjLTQuNTExODYsMC4yNTYgLTguMzMzNjEsLTIuNDMwMTIgLTguNTM1OTMsLTYuMDAwMTJjLTAuMjAyNzEsLTMuNTcwNTcgMy4yOTA0NCwtNi42NzE0OCA3LjgwMjMxLC02LjkyNzQ4YzIuMDU0NTQsLTAuMTE2OCAzLjk2MzksMC4zNzc3OSA1LjQ1NTU1LDEuMjg2NzVsMy4wNDI2MiwtMTYuNTcxODFjLTEyLjExNzE4LC0xLjM4ODU5IC0yMS45MzY3MSwwLjE0MzI4IC0yMS45MzY3MSwwLjE0MzI4bC00LjA5MDg1LDIyLjI4MTA2Yy0wLjE5ODgsMy4zMDc1OSAtMy41NDU5LDYuMDc4OTQgLTcuODAwMDUsNi4zMjA4MWMtNC41MTEzOCwwLjI1NjA5IC04LjMzMzA1LC0yLjQzMDUxIC04LjUzNTg0LC02LjAwMDZjLTAuMjAyNzksLTMuNTcwMDkgMy4yOTAzNSwtNi42NzEgNy44MDIzMSwtNi45Mjc0OGMyLjA5MjgyLC0wLjExOTExIDQuMDM3MywwLjM5NTY5IDUuNTQxMTIsMS4zMzczN2w1LjQ4NDU1LC0yOS44MTgzOWMwLDAgMTQuMTI3NDcsLTMuNDgwMzkgMjkuOTYxMDEsLTAuMDI1NzJ6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiLz48cGF0aCBkPSJNMjE2LjcyNjQ0LDIwNi4wMzdjLTMuNDE2NzksLTE0Ljk2NzA5IC05LjE1ODY2LC00My4wNzgzNCAtOS4xNTg2NiwtNDMuMDc4MzRjLTAuMjI0MTksLTEuMTI2OSA0LjI5MjUyLC0xLjgxNTY4IDQuNTczNTUsLTAuNjU2OThjMi41MjMyNiwxMS42NTM3OCA3LjA2NDA5LDM4LjA5NzQ2IDguNjY5NTYsMzcuMTg2OTdjMy4yMzcxNywtMi4wOTAwNSA3LjQ1ODgxLC0yLjU2NjMzIDExLjEyNjgyLC0xLjM5ODI1YzMuNjQ3MzEsMC43NzA3NyA3LjA5NzEzLDMuNjg0NjQgNy42OTU0Nyw3LjQ3NTExYzAuNjI1MzgsMy4yNDU4MyAtMi4wMDUyOSw2LjA4OTQ5IC00LjkzMjQ5LDcuMDMzNTljLTMuMDU5OTQsMS40Mjg2MyAtNi41NzgyMywxLjIwMDgzIC05LjcwNTc5LDAuMTIyNjRjLTMuNDYzNTQsLTAuOTg4OTkgLTcuMzM3NjUsLTIuODYxOTEgLTguMjY4NDgsLTYuNjg0NzN6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9nPjwvZz48L3N2Zz4=";
  const settingsIconURI =
"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI4Ni4zNDQ5MiIgaGVpZ2h0PSI3OC45NzQwMSIgdmlld0JveD0iMCwwLDg2LjM0NDkyLDc4Ljk3NDAxIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTk2LjgyNzU0LC0xNDAuNTEzMDEpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTE5Ni44Mjc1NCwyMTkuNDg3MDJ2LTc4Ljk3NDAxaDg2LjM0NDkydjc4Ljk3NDAxeiIgZmlsbD0iIzg0ODQ4NCIgc3Ryb2tlPSJub25lIi8+PHBhdGggZD0iTTIxMi40MjMyLDE3Ni4wODE5OGMtMi4yMzEyMSwtMC45MDE0MyAtMy4zMDkyLC0zLjQ0MDkzIC0yLjQwNzc4LC01LjY3MjEzbDEuNzUzMiwtNC4zMzk1YzAuOTAxNDMsLTIuMjMxMjEgMy40NDA5MywtMy4zMDkyIDUuNjcyMTMsLTIuNDA3NzhsMTguMDI3NTQsNy4yODMzYy0yLjEyODcyLDEuMDg4NDggLTMuODkwMzYsMi45MTkwOSAtNC44NTYyNiw1LjMwOTg5Yy0wLjk0OTkzLDIuMzUxMjUgLTAuOTY5ODcsNC44NDczNSAtMC4yMzI4OSw3LjA4MDU5eiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMDAwMDAwIi8+PHBhdGggZD0iTTI0My45MTgwMiwxNTIuNDIzMmMwLjkwMTQzLC0yLjIzMTIxIDMuNDQwOTMsLTMuMzA5MiA1LjY3MjEzLC0yLjQwNzc4bDQuMzM5NSwxLjc1MzJjMi4yMzEyMSwwLjkwMTQzIDMuMzA5MiwzLjQ0MDkzIDIuNDA3NzgsNS42NzIxM2wtNy4xNTM2OCwxNy43MDY2OWMtMS4xMDI0NywtMi4wMDU4IC0yLjg3NzIxLC0zLjY1ODU2IC01LjE2NDg2LC00LjU4Mjc5Yy0yLjQ1NjExLC0wLjk5MjI5IC01LjA3MDI3LC0wLjk2OTggLTcuMzc3NzcsLTAuMTI5Nzl6IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMwMDAwMDAiLz48cGF0aCBkPSJNMjM2LjA4MTk3LDIwNy41NzY4MWMtMC45MDE0MywyLjIzMTIxIC0zLjQ0MDkzLDMuMzA5MiAtNS42NzIxMywyLjQwNzc4bC00LjMzOTUsLTEuNzUzMmMtMi4yMzEyMSwtMC45MDE0MyAtMy4zMDkyLC0zLjQ0MDkzIC0yLjQwNzc4LC01LjY3MjEzbDcuMjQzMTQsLTE3LjkyODE0YzEuMDc2NDIsMi4yMDcxNSAyLjk0MTMxLDQuMDM5MjIgNS4zOTc0Miw1LjAzMTUyYzIuMjg3NjQsMC45MjQyMyA0LjcxMjQsMC45NjgxMSA2Ljg5ODc2LDAuMjkxMDR6IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMwMDAwMDAiLz48cGF0aCBkPSJNMjY4LjIzMTM4LDE5My45Mjk2NmMtMC45MDE0MywyLjIzMTIxIC0zLjQ0MDkzLDMuMzA5MiAtNS42NzIxMywyLjQwNzc4bC0xNy42MDAxNywtNy4xMTA2NGMyLjA4MTQ1LC0xLjA5NDU3IDMuODAxLC0yLjkwNDAxIDQuNzUwOTIsLTUuMjU1MjdjMC45NjU5MSwtMi4zOTA4MSAwLjk3MDI4LC00LjkzMTM3IDAuMTk1MDUsLTcuMTkzMDdsMTcuNjcxNzYsNy4xMzk1N2MyLjIzMTIxLDAuOTAxNDMgMy4zMDkyLDMuNDQwOTMgMi40MDc3OCw1LjY3MjEzeiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMDAwMDAwIi8+PHBhdGggZD0iTTIxMi40MjMyLDE3Ni4wODE5OGMtMi4yMzEyMSwtMC45MDE0MyAtMy4zMDkyLC0zLjQ0MDkzIC0yLjQwNzc4LC01LjY3MjEzbDEuNzUzMiwtNC4zMzk1YzAuOTAxNDMsLTIuMjMxMjEgMy40NDA5MywtMy4zMDkyIDUuNjcyMTMsLTIuNDA3NzhsMTAuMDc2NDcsNC4wNzA5OWwtNC4yNDY1MiwtMTAuMDAzNzdjLTAuOTQwMjksLTIuMjE1MTEgMC4wOTMxNCwtNC43NzMwNyAyLjMwODI1LC01LjcxMzM2bDQuMzA4MTksLTEuODI4NzljMi4yMTUxMSwtMC45NDAyOSA0Ljc3MzA3LDAuMDkzMTQgNS43MTMzNiwyLjMwODI1bDcuNTM4MTQsMTcuNzU4MDVjLTUuMDQ1MTMsLTEuNTMgLTEwLjUxMzcyLDEuMDE5NDkgLTEyLjUyNjYzLDYuMDAxODFjLTAuOTQ5OTMsMi4zNTEyNSAtMC45Njk4Nyw0Ljg0NzM1IC0wLjIzMjg5LDcuMDgwNTl6IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMwMDAwMDAiLz48cGF0aCBkPSJNMjY4LjIzMTM4LDE5My45Mjk2NmMtMC45MDE0MywyLjIzMTIxIC0zLjQ0MDkzLDMuMzA5MiAtNS42NzIxMywyLjQwNzc4bC0xMC4wNzY0NywtNC4wNzA5OWw0LjI0NjUyLDEwLjAwMzc3YzAuOTQwMjksMi4yMTUxMSAtMC4wOTMxNCw0Ljc3MzA3IC0yLjMwODI1LDUuNzEzMzZsLTQuMzA4MTksMS44Mjg3OWMtMi4yMTUxMSwwLjk0MDI5IC00Ljc3MzA3LC0wLjA5MzE0IC01LjcxMzM2LC0yLjMwODI1bC03LjQ3NjgyLC0xNy42MTM2MWM1LjExNjEzLDEuNzAwMDggMTAuNzM5NywtMC44NTA3MSAxMi43ODczNCwtNS45MTg5N2MwLjk2NTkxLC0yLjM5MDgxIDAuOTcwMjgsLTQuOTMxMzcgMC4xOTUwNSwtNy4xOTMwN2wxNy42NzE3Niw3LjEzOTU3YzIuMjMxMjEsMC45MDE0MyAzLjMwOTIsMy40NDA5MyAyLjQwNzc4LDUuNjcyMTN6IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMwMDAwMDAiLz48cGF0aCBkPSJNMjE3LjcyOTc5LDE5Ni43MjkyOWMtMi4yMTUxMSwwLjk0MDI5IC00Ljc3MzA3LC0wLjA5MzE0IC01LjcxMzM2LC0yLjMwODI1bC0xLjgyODc5LC00LjMwODE5Yy0wLjk0MDI5LC0yLjIxNTExIDAuMDkzMTQsLTQuNzczMDcgMi4zMDgyNSwtNS43MTMzNmwxMC4wMDM3NywtNC4yNDY1MmwtMTAuMDc2NDcsLTQuMDcwOTljLTIuMjMxMjEsLTAuOTAxNDMgLTMuMzA5MiwtMy40NDA5MyAtMi40MDc3OCwtNS42NzIxM2wxLjc1MzIsLTQuMzM5NWMwLjkwMTQzLC0yLjIzMTIxIDMuNDQwOTMsLTMuMzA5MiA1LjY3MjEzLC0yLjQwNzc4bDE4LjAyNzU0LDcuMjgzM2MtMi4xMjg3MiwxLjA4ODQ4IC0zLjg5MDM2LDIuOTE5MDkgLTQuODU2MjYsNS4zMDk4OWMtMi4wMDIzNyw0Ljk1NjIzIDAuMTI3NDgsMTAuNTU2MDQgNC43Njg1NywxMi45ODA5eiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMDAwMDAwIi8+PHBhdGggZD0iTTI2OC4yMzEzOCwxOTMuOTI5NjZjLTAuOTAxNDMsMi4yMzEyMSAtMy40NDA5MywzLjMwOTIgLTUuNjcyMTMsMi40MDc3OGwtMTcuNjAwMTcsLTcuMTEwNjRjMi4wODE0NSwtMS4wOTQ1NyAzLjgwMSwtMi45MDQwMSA0Ljc1MDkyLC01LjI1NTI3YzIuMDU4NDEsLTUuMDk0OTUgLTAuMjQ5OTQsLTEwLjg3MDAyIC01LjE2NDE1LC0xMy4xNzY5N2wxNy43MjQzNiwtNy41MjM4NGMyLjIxNTExLC0wLjk0MDI5IDQuNzczMDcsMC4wOTMxNCA1LjcxMzM2LDIuMzA4MjVsMS44Mjg3OSw0LjMwODE5YzAuOTQwMjksMi4yMTUxMSAtMC4wOTMxNCw0Ljc3MzA3IC0yLjMwODI1LDUuNzEzMzZsLTEwLjAwMzc3LDQuMjQ2NTFsMTAuMDc2NDcsNC4wNzA5OWMyLjIzMTIxLDAuOTAxNDMgMy4zMDkyLDMuNDQwOTMgMi40MDc3OCw1LjY3MjEzeiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMDAwMDAwIi8+PHBhdGggZD0iTTI2OC4yMzEzOCwxOTMuOTI5NjZjLTAuOTAxNDMsMi4yMzEyMSAtMy40NDA5MywzLjMwOTIgLTUuNjcyMTMsMi40MDc3OGwtMi4wMDExOCwtMC44MDg0OWMtNi44NDU4Miw5LjA3NDYyIC0xOS4xNjQ4OCwxMi44MTQxOSAtMzAuMjA2NjgsOC4zNTMxOWMtMTEuMDQxODEsLTQuNDYxIC0xNy4zMDU5OCwtMTUuNzA4MzggLTE1LjkyNzAxLC0yNi45OTE2NWwtMi4wMDExOCwtMC44MDg0OWMtMi4yMzEyMSwtMC45MDE0MyAtMy4zMDkyLC0zLjQ0MDkzIC0yLjQwNzc4LC01LjY3MjEzbDEuNzUzMiwtNC4zMzk1YzAuOTAxNDMsLTIuMjMxMjEgMy40NDA5MywtMy4zMDkyIDUuNjcyMTMsLTIuNDA3NzhsMi4wMDExOCwwLjgwODQ5YzYuODQ1ODIsLTkuMDc0NjIgMTkuMTY0ODcsLTEyLjgxNDE5IDMwLjIwNjY4LC04LjM1MzE5YzExLjA0MTgxLDQuNDYxIDE3LjMwNTk5LDE1LjcwODM4IDE1LjkyNzAxLDI2Ljk5MTY1bDIuMDAxMTgsMC44MDg0OWMyLjIzMTIxLDAuOTAxNDMgMy4zMDkyLDMuNDQwOTMgMi40MDc3OCw1LjY3MjEzek0yNDkuNzEsMTgzLjk3MTU0YzIuMTMwNjUsLTUuMjczNzYgLTAuNDE3MzQsLTExLjI3NjIxIC01LjY5MTEsLTEzLjQwNjg2Yy01LjI3Mzc2LC0yLjEzMDY1IC0xMS4yNzYyMSwwLjQxNzM0IC0xMy40MDY4Niw1LjY5MTFjLTIuMTMwNjUsNS4yNzM3NiAwLjQxNzM0LDExLjI3NjIxIDUuNjkxMSwxMy40MDY4NmM1LjI3Mzc2LDIuMTMwNjUgMTEuMjc2MjEsLTAuNDE3MzQgMTMuNDA2ODYsLTUuNjkxMXoiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzAwMDAwMCIvPjwvZz48L2c+PC9zdmc+";

  const stopSign =
"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxNCAxNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTQgMTQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRUM1OTU5O3N0cm9rZTojQjg0ODQ4O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cjwvc3R5bGU+Cjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iNC4zLDAuNSA5LjcsMC41IDEzLjUsNC4zIDEzLjUsOS43IDkuNywxMy41IDQuMywxMy41IDAuNSw5LjcgMC41LDQuMyAiLz4KPC9zdmc+Cg==";
  const startFlag =
"data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNi42MyAxNy41Ij48ZGVmcz48c3R5bGU+LmNscy0xLC5jbHMtMntmaWxsOiM0Y2JmNTY7c3Ryb2tlOiM0NTk5M2Q7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30uY2xzLTJ7c3Ryb2tlLXdpZHRoOjEuNXB4O308L3N0eWxlPjwvZGVmcz48dGl0bGU+aWNvbi0tZ3JlZW4tZmxhZzwvdGl0bGU+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNLjc1LDJBNi40NCw2LjQ0LDAsMCwxLDguNDQsMmgwYTYuNDQsNi40NCwwLDAsMCw3LjY5LDBWMTIuNGE2LjQ0LDYuNDQsMCwwLDEtNy42OSwwaDBhNi40NCw2LjQ0LDAsMCwwLTcuNjksMCIvPjxsaW5lIGNsYXNzPSJjbHMtMiIgeDE9IjAuNzUiIHkxPSIxNi43NSIgeDI9IjAuNzUiIHkyPSIwLjc1Ii8+PC9zdmc+";

  class SPtuneShark {
    constructor() {
      this.sounds = {};
      this.overlappables = {};
      this.overriddenVol = {};
      runtime.on("PROJECT_START", () => {
        if (flagCon) this.controlAllSounds({ CONTROL : "stop" });
      });
      runtime.on("PROJECT_STOP_ALL", () => {
        if (flagCon) this.controlAllSounds({ CONTROL : "stop" });
      });
      runtime.on("BEFORE_EXECUTE", () => {
        const projectVal = runtime.audioEngine.inputNode.gain.value;
        const names = Object.keys(this.sounds);
        if (names.length > 0) {
          names.forEach(name => {
            if (this.overriddenVol[name] !== undefined) { // This Shouldnt happen but just in case
              const curVol = this.overriddenVol[name].val !== undefined ? this.overriddenVol[name].val : 100;
              const volume = Math.min(100, Math.max(0, curVol)) / 100;
              const soundInstances = this.sounds[name];
              if (soundInstances && soundInstances.length > 0) soundInstances.forEach((audio) => { audio.volume = volume * projectVal });
            }
          });
        }
      });
      runtime.on("SP_TUNESHARK2_PROJECT_PAUSED", () => {
        if (runtime.ioDevices.clock._paused) {
          globalPauseBank = [];
          const names = Object.keys(this.sounds);
          if (names.length > 0) {
            names.forEach(name => {
              const soundInstances = this.sounds[name];
              if (soundInstances && soundInstances.length > 0) {
                soundInstances.forEach((audio) => {
                  if (!audio.paused) {
                    globalPauseBank.push(audio);
                    audio.pause();
                  }
                });
              }
            });
          }
        } else {
          for (let i = 0; i < globalPauseBank.length; i++) { globalPauseBank[i].play() }
        }
      });
    }
    getInfo() {
      return {
        id: "SPtuneShark",
        name: "Tune Shark (Legacy)",
        color1: "#848484",
        color2: "#676767",
        color3: "#4e4e4e",
        menuIconURI,
        blockIconURI,
        blocks: [
          {
            func: "readMe",
            blockType: Scratch.BlockType.BUTTON,
            text: "Read Me!"
          },
          {
            opcode: "importSound",
            blockType: Scratch.BlockType.COMMAND,
            text: "import sound from URL/URI [URL] named [NAME]",
            blockIconURI: settingsIconURI,
            arguments: { 
              URL: { type: Scratch.ArgumentType.STRING, defaultValue: "https://sharkpools-extensions.vercel.app/extension-utils/TS/Resonance-Home.mp3" }, 
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "MySound" } 
            }
          },
          {
            func: "enableTest",
            blockType: Scratch.BlockType.BUTTON,
            text: "Enable Sprite Sound Block",
            hideFromPalette: !enableBlock
          },
          {
            opcode: "importMenuSound",
            blockType: Scratch.BlockType.COMMAND,
            text: "import sound [SOUND] named [NAME]",
            blockIconURI: settingsIconURI,
            hideFromPalette: enableBlock,
            arguments: {
              SOUND: { type: Scratch.ArgumentType.SOUND }, 
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "MySound" } 
            }
          },
          {
            opcode: "convertURLToURI",
            blockType: Scratch.BlockType.COMMAND,
            text: "convert sound [INPUT_NAME] from URL to URI and save it to sound [OUTPUT_NAME]",
            arguments: {
              INPUT_NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "MySound" },
              OUTPUT_NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "MySound2" }
            },
          },
          { blockType: Scratch.BlockType.LABEL, text: "Audio Playback" },
          {
            opcode: "playSound",
            blockType: Scratch.BlockType.COMMAND,
            text: "play sound [NAME]",
            arguments: {
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "MySound" }
            },
          },
          {
            opcode: "playSoundAt",
            blockType: Scratch.BlockType.COMMAND,
            text: "start sound [NAME] at time [START_TIME]",
            arguments: {
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "MySound" },
              START_TIME: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 }
            },
          },
          {
            opcode: "startAndStop", blockType: Scratch.BlockType.COMMAND,
            text: "play sound [NAME] and stop at [MAX] seconds",
            hideFromPalette: true, // deprecated block
            arguments: {
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "MySound" }, MAX: { type: Scratch.ArgumentType.NUMBER, defaultValue: 2 }
            }
          },
          {
            opcode: "lateStartAndStop",
            blockType: Scratch.BlockType.COMMAND,
            text: "start sound [NAME] at time [START_TIME] and stop at [MAX] seconds",
            arguments: {
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "MySound" },
              START_TIME: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
              MAX: { type: Scratch.ArgumentType.NUMBER, defaultValue: 2 }
            },
          },
          {
            opcode: "stopSound",
            blockType: Scratch.BlockType.COMMAND,
            text: "stop sound [NAME]",
            arguments: {
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "MySound" }
            },
          },
          {
            opcode: "controlAllSounds",
            blockType: Scratch.BlockType.COMMAND,
            text: "[CONTROL] all sounds",
            arguments: {
              CONTROL: { type: Scratch.ArgumentType.STRING, menu: "control" }
            },
          },
          "---",
          {
            opcode: "pauseUnpauseSound",
            blockType: Scratch.BlockType.COMMAND,
            text: "[PAUSE_UNPAUSE] sound [NAME]",
            arguments: {
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "MySound" },
              PAUSE_UNPAUSE: { type: Scratch.ArgumentType.STRING, menu: "pauseUnpauseMenu" }
            },
          },
          {
            opcode: "pauseUnpauseAllSounds",
            blockType: Scratch.BlockType.COMMAND,
            text: "[PAUSE_UNPAUSE] all sounds",
            arguments: {
              PAUSE_UNPAUSE: { type: Scratch.ArgumentType.STRING, menu: "pauseUnpauseMenu" }
            },
          },
          { blockType: Scratch.BlockType.LABEL, text: "Audio Effects" },
          {
            opcode: "setSoundVolume",
            blockType: Scratch.BlockType.COMMAND,
            text: "set volume of sound [NAME] to [VOLUME]",
            arguments: {
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "MySound" },
              VOLUME: { type: Scratch.ArgumentType.NUMBER, defaultValue: 100 }
            },
          },
          {
            opcode: "setSoundSpeed",
            blockType: Scratch.BlockType.COMMAND,
            text: "set speed of sound [NAME] to [SPEED]",
            arguments: {
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "MySound" },
              SPEED: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1.0 }
            },
          },
          {
            opcode: "setSoundPitch",
            blockType: Scratch.BlockType.COMMAND,
            text: "set pitch of sound [NAME] to [PITCH]",
            arguments: {
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "MySound" },
              PITCH: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1.0 }
            },
          },
          { blockType: Scratch.BlockType.LABEL, text: "Audio Operations" },
          {
            opcode: "toggleLoopSound",
            blockType: Scratch.BlockType.COMMAND,
            text: "set sound [NAME] to [LOOP_STATE]",
            blockIconURI: settingsIconURI,
            arguments: {
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "MySound" },
              LOOP_STATE: { type: Scratch.ArgumentType.STRING, menu: "loopMenu" }
            },
          },
          {
            opcode: "toggleOverlap",
            blockType: Scratch.BlockType.COMMAND,
            text: "toggle sound [NAME] overlapping [OVERLAP]",
            blockIconURI: settingsIconURI,
            arguments: {
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "MySound" },
              OVERLAP: { type: Scratch.ArgumentType.STRING, menu: "overlapMenu", }
            },
          },
          "---",
          {
            opcode: "soundProperty",
            blockType: Scratch.BlockType.REPORTER,
            text: "sound [NAME] [PROPERTY]",
            blockIconURI: settingsIconURI,
            arguments: {
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "MySound" },
              PROPERTY: { type: Scratch.ArgumentType.STRING, menu: "soundProperties" }
            },
          },
          {
            opcode: "currentSoundTime",
            blockType: Scratch.BlockType.REPORTER,
            text: "current time of sound [NAME]",
            blockIconURI: settingsIconURI,
            arguments: {
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "MySound" }
            },
          },
          {
            opcode: "getLoudnessAtTime",
            blockType: Scratch.BlockType.REPORTER,
            text: "loudness of sound [NAME] at time [TIME]",
            blockIconURI: settingsIconURI,
            arguments: {
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "MySound" },
              TIME: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 }
            },
          },
          "---",
          {
            opcode: "returnInfo",
            blockType: Scratch.BlockType.REPORTER,
            text: "URL used by sound [NAME]",
            blockIconURI: settingsIconURI,
            arguments: {
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "MySound" }
            },
          },
          {
            opcode: "soundCheck",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "sound [NAME] [CONTROL]",
            blockIconURI: settingsIconURI,
            arguments: {
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "MySound" },
              CONTROL: { type: Scratch.ArgumentType.STRING, menu: "control2" }
            },
          },
          {
            opcode: "allSounds",
            blockType: Scratch.BlockType.REPORTER,
            text: "all sounds",
            disableMonitor: true,
            blockIconURI: settingsIconURI
          },
          {
            opcode: "allPlaySounds",
            blockType: Scratch.BlockType.REPORTER,
            text: "all playing sounds",
            disableMonitor: true,
            blockIconURI: settingsIconURI
          },
          {
            opcode: "deleteSound",
            blockType: Scratch.BlockType.COMMAND,
            text: "delete sound [NAME]",
            blockIconURI: settingsIconURI,
            arguments: {
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "MySound" }
            },
          },
          {
            opcode: "deleteAllSounds",
            blockType: Scratch.BlockType.COMMAND,
            text: "delete all sounds",
            blockIconURI: settingsIconURI
          },
          {
            opcode: "enableControllers",
            blockType: Scratch.BlockType.COMMAND,
            text: "toggle sound link to [GO] [STOP] [ON_OFF]",
            blockIconURI: settingsIconURI,
            arguments: {
              GO: { type: Scratch.ArgumentType.IMAGE, dataURI: startFlag },
              STOP: { type: Scratch.ArgumentType.IMAGE, dataURI: stopSign },
              ON_OFF: { type: Scratch.ArgumentType.STRING, menu: "overlapMenu" }
            }
          },
          { blockType: Scratch.BlockType.LABEL, text: "Array Sound Grouping" },
          {
            opcode: "playSounds",
            blockType: Scratch.BlockType.COMMAND,
            text: "play sounds [NAMES]",
            blockIconURI: groupIconURI,
            arguments: {
              NAMES: { type: Scratch.ArgumentType.STRING, defaultValue: "[\"MySound\", \"MySound2\"]" }
            },
          },
          {
            opcode: "playSoundsAt",
            blockType: Scratch.BlockType.COMMAND,
            text: "start sounds [NAMES] at time [START_TIME]",
            blockIconURI: groupIconURI,
            arguments: {
              NAMES: { type: Scratch.ArgumentType.STRING, defaultValue: "[\"MySound\", \"MySound2\"]" },
              START_TIME: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 }
            },
          },
          {
            opcode: "stopSounds",
            blockType: Scratch.BlockType.COMMAND,
            text: "stop sounds [NAMES]",
            blockIconURI: groupIconURI,
            arguments: {
              NAMES: { type: Scratch.ArgumentType.STRING, defaultValue: "[\"MySound\", \"MySound2\"]" }
            },
          },
          {
            opcode: "pauseUnpauseSounds",
            blockType: Scratch.BlockType.COMMAND,
            text: "[PAUSE_UNPAUSE] sounds [NAMES]",
            blockIconURI: groupIconURI,
            arguments: {
              NAMES: { type: Scratch.ArgumentType.STRING, defaultValue: "[\"MySound\", \"MySound2\"]" },
              PAUSE_UNPAUSE: { type: Scratch.ArgumentType.STRING, menu: "pauseUnpauseMenu" }
            },
          },
          { blockType: Scratch.BlockType.LABEL, text: "Group Effects" },
          {
            opcode: "setSoundsVolume",
            blockType: Scratch.BlockType.COMMAND,
            text: "set volume of sounds [NAMES] to [VOLUME]",
            blockIconURI: groupIconURI,
            arguments: {
              NAMES: { type: Scratch.ArgumentType.STRING, defaultValue: "[\"MySound\", \"MySound2\"]" },
              VOLUME: { type: Scratch.ArgumentType.NUMBER, defaultValue: 100 }
            },
          },
          {
            opcode: "setSoundSpeeds",
            blockType: Scratch.BlockType.COMMAND,
            text: "set speed of sounds [NAMES] to [SPEED]",
            blockIconURI: groupIconURI,
            arguments: {
              NAMES: { type: Scratch.ArgumentType.STRING, defaultValue: "[\"MySound\", \"MySound2\"]" },
              SPEED: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1.0 }
            },
          },
          {
            opcode: "setSoundsPitch",
            blockType: Scratch.BlockType.COMMAND,
            text: "set pitch of sounds [NAMES] to [PITCH]",
            blockIconURI: groupIconURI,
            arguments: {
              NAMES: { type: Scratch.ArgumentType.STRING, defaultValue: "[\"MySound\", \"MySound2\"]" },
              PITCH: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1.0 }
            },
          }
        ],
        menus: {
          pauseUnpauseMenu: ["pause", "unpause"],
          soundProperties: {
            acceptReporters: true,
            items: ["length", "volume", "speed", "pitch", "paused?", "looping?"]
          },
          loopMenu: ["loopable", "unloopable"],
          control: ["play", "stop"],
          control2: ["exists?", "playing?"],
          overlapMenu: ["on", "off"]
        },
      };
    }

    readMe() {
      alert(
        "You are using an old legacy version of Tune Shark, it is suggested you use Tune Shark V3, found at \nhttps://sharkpools-extensions.vercel.app/\nThere are more features, less bugs, audio effects, and more!"
      );
    }

    enableTest() {
      let popup = [
        "This will enable the \"Import Sound from Sprite Menu\" Block. WARNING! Although this Block will Import Sounds from the Sprite Libary, it might not always work for every sound.",
        "Continue?"
      ];
      if (confirm(popup.join("\n\n"))) {
        enableBlock = false;
        vm.extensionManager.refreshBlocks();
      }
    }

    importSound(args) {
      if (this.sounds[args.NAME] !== undefined) this.deleteSound(args);
      const audio = new Audio(args.URL);
      this.sounds[args.NAME] = [audio];
      this.overriddenVol[args.NAME] = { val : 100 };
    }

    importMenuSound(args, util) {
      if (this.sounds[args.NAME] !== undefined) this.deleteSound(args);
      const index = this.SoundIndex(args.SOUND, util);
      if (index < 0) return;
      const sprite = util.target.sprite;
      const soundDataURI = sprite.sounds[index].asset.encodeDataURI();
      const { URI = soundDataURI, NAME } = args;
      const audio = new Audio(soundDataURI);
      this.sounds[NAME] = [audio];
    }
    SoundIndex(soundName, util) {
      const sounds = util.target.sprite.sounds;
      return sounds.indexOf(sounds.filter((sound) => { return sound.name == soundName })[0]);
    }

    playSound(args) {
      const soundInstances = this.sounds[args.NAME];
      if (soundInstances && soundInstances.length > 0) {
        soundInstances.forEach((audio) => {
          if (audio.currentTime > 0.2 && audio.currentTime !== audio.duration) this.checkOverlap(args);
          audio.play();
        });
      }
    }

    playSoundAt(args) {
      const soundInstances = this.sounds[args.NAME];
      if (soundInstances && soundInstances.length > 0) {
        soundInstances.forEach((audio) => {
          if (audio.currentTime !== args.START_TIME && audio.currentTime > 0.2) this.checkOverlap(args);
          audio.currentTime = args.START_TIME;
          audio.play();
        });
      }
    }
    
    async startAndStop(args) { await this.playSoundandStop(args.NAME, args.MAX, 0) }
    async lateStartAndStop(args) { await this.playSoundandStop(args.NAME, args.MAX, args.START_TIME) }

    async playSoundandStop(NAME, MAX, START_TIME) {
      const soundInstances = this.sounds[NAME];
      if (soundInstances && soundInstances.length > 0) {
        soundInstances.forEach((audio) => {
          audio.currentTime = START_TIME;
          audio.play();
        });
      }
      await new Promise((resolve, reject) => {
        const maxTime = (MAX - START_TIME) * 1000;
        setTimeout(() => {
          const soundInstances = this.sounds[NAME];
          if (soundInstances && soundInstances.length > 0) {
            soundInstances.forEach((audio) => {
              audio.pause();
              audio.currentTime = 0;
            });
          }
          resolve();
        }, maxTime);
      });
    }

    stopSound(args) {
      const soundInstances = this.sounds[args.NAME];
      if (soundInstances && soundInstances.length > 0) {
        soundInstances.forEach((audio) => {
          audio.pause();
          audio.currentTime = 0;
        });
      }
    }

    controlAllSounds(args) {
      Object.values(this.sounds).forEach((soundInstances) => {
        soundInstances.forEach((audio) => {
          if (args.CONTROL === "play") audio.play();
          else {
            audio.pause();
            audio.currentTime = 0;
          }
        });
      });
    }

    setSoundVolume(args) {
      args.VOLUME = Math.max(0, Math.min(100, args.VOLUME));
      const soundInstances = this.sounds[args.NAME];
      if (soundInstances && soundInstances.length > 0) {
        soundInstances.forEach((audio) => { audio.volume = args.VOLUME / 100 });
        this.overriddenVol[args.NAME] = { val : args.VOLUME };
      }
    }

    setSoundSpeed(args) {
      if (args.SPEED < 0) args.SPEED = 0;
      const soundInstances = this.sounds[args.NAME];
      if (soundInstances && soundInstances.length > 0) {
        soundInstances.forEach((audio) => { audio.playbackRate = args.SPEED });
      }
    }

    setSoundPitch(args) {
      const soundInstances = this.sounds[args.NAME];
      if (soundInstances && soundInstances.length > 0) {
        soundInstances.forEach((audio) => {
          audio.mozPreservesPitch = false;
          audio.playbackRate = 1;
          const semitoneRatio = Math.pow(2, 1 / 12);
          const currentPitch = Math.pow(semitoneRatio, args.PITCH);
          audio.playbackRate = currentPitch;
        });
      }
    }

    toggleLoopSound(args) {
      const soundInstances = this.sounds[args.NAME];
      if (soundInstances && soundInstances.length > 0) {
        const loop = args.LOOP_STATE === "loopable";
        soundInstances.forEach((audio) => { audio.loop = loop });
      }
    }

    toggleOverlap(args) {
      if (args.OVERLAP === "on") {
        const source = this.returnInfo(args);
        if (source !== "Audio Doesnt Exist!") this.overlappables[args.NAME] = {src : source};
      } else {
        delete this.overlappables[args.NAME];
      }
    }

    pauseUnpauseSound(args) {
      const soundInstances = this.sounds[args.NAME];
      if (soundInstances && soundInstances.length > 0) {
        const pause = args.PAUSE_UNPAUSE === "pause";
        soundInstances.forEach((audio) => {
          if (pause && !audio.paused) audio.pause();
          else if (!pause && audio.paused) audio.play();
        });
      }
    }

    pauseUnpauseAllSounds(args) {
      const pause = args.PAUSE_UNPAUSE === "pause";
      Object.values(this.sounds).forEach((soundInstances) => {
        soundInstances.forEach((audio) => {
          if (pause && !audio.paused) audio.pause();
          else if (!pause && audio.paused) audio.play();
        });
      });
    }

    soundCheck(args) {
      if (args.CONTROL === "exists?") return this.sounds.hasOwnProperty(args.NAME);
      else {
        const soundInstances = this.sounds[args.NAME];
        if (soundInstances && soundInstances.length > 0) {
          const audio = soundInstances[0];
          return (audio.currentTime !== 0 && !audio.paused);
        }
        return false;
      }
    }

    soundProperty(args) {
      const soundInstances = this.sounds[args.NAME];
      if (soundInstances && soundInstances.length > 0) {
        const audio = soundInstances[0];
        switch (args.PROPERTY) {
          case "length": return audio.duration;
          case "volume": return this.overriddenVol[args.NAME].val;
          case "speed": return audio.playbackRate;
          case "pitch": return this.getPitchFromAudio(audio);
          case "paused?": return audio.paused;
          case "looping?": return audio.loop;
        }
      }
      return 0;
    }

    getPitchFromAudio(audio) {
      const semitoneRatio = Math.pow(2, 1 / 12);
      const currentPitch = Math.log(audio.playbackRate) / Math.log(semitoneRatio);
      return Math.round(currentPitch * 10) / 10;
    }

    currentSoundTime(args) {
      const soundInstances = this.sounds[args.NAME];
      if (soundInstances && soundInstances.length > 0) {
        const audio = soundInstances[0];
        return audio.currentTime;
      }
      return 0;
    }

    allSounds() { return JSON.stringify(Object.keys(this.sounds)) }

    allPlaySounds() {
      const playingSounds = [];
      Object.entries(this.sounds).forEach(([key, soundInstances]) => {
        soundInstances.forEach(audio => {
          if (!audio.paused) playingSounds.push(key);
        });
      });
      return JSON.stringify(playingSounds);
    }

    deleteAllSounds() {
      this.controlAllSounds("stop");  
      this.sounds = {};
      this.overlappables = {};
      this.overriddenVol = {};
    }

    deleteSound(args) {
      this.stopSound(args);
      delete this.sounds[args.NAME];
      delete this.overlappables[args.NAME];
      delete this.overriddenVol[args.NAME];
    }

    enableControllers(args) { flagCon = args.ON_OFF === "on" }

    playSounds(args) {
      const namesArray = JSON.parse(args.NAMES);
      namesArray.forEach((name) => {
        const soundInstances = this.sounds[name];
        if (soundInstances && soundInstances.length > 0) soundInstances.forEach((audio) => { audio.play() });
      });
    }

    playSoundsAt(args) {
      const namesArray = JSON.parse(args.NAMES);
      namesArray.forEach((name) => {
        const soundInstances = this.sounds[name];
        if (soundInstances && soundInstances.length > 0) {
          soundInstances.forEach((audio) => {
            audio.currentTime = args.START_TIME;
            audio.play();
          });
        }
      });
    }

    stopSounds(args) {
      const namesArray = JSON.parse(args.NAMES);
      namesArray.forEach((name) => {
        const soundInstances = this.sounds[name];
        if (soundInstances && soundInstances.length > 0) {
          soundInstances.forEach((audio) => {
            audio.pause();
            audio.currentTime = 0;
          });
        }
      });
    }

    pauseUnpauseSounds(args) {
      const namesArray = JSON.parse(args.NAMES);
      const pause = args.PAUSE_UNPAUSE === "pause";
      namesArray.forEach((name) => {
        const soundInstances = this.sounds[name];
        if (soundInstances && soundInstances.length > 0) {
          soundInstances.forEach((audio) => {
            if (pause && !audio.paused) audio.pause();
            else if (!pause && audio.paused) audio.play();
          });
        }
      });
    }

    setSoundsVolume(args) {
      const adjustedVolume = Math.max(0, Math.min(100, args.VOLUME));
      const namesArray = JSON.parse(args.NAMES);
      namesArray.forEach((name) => {
        const soundInstances = this.sounds[name];
        if (soundInstances && soundInstances.length > 0) {
          soundInstances.forEach((audio) => { audio.volume = adjustedVolume / 100 });
          this.overriddenVol[name] = { val : adjustedVolume };
        }
      });
    }

    setSoundSpeeds(args) {
      if (args.SPEED < 0) args.SPEED = 0;
      const namesArray = JSON.parse(args.NAMES);
      namesArray.forEach((name) => {
        const soundInstances = this.sounds[name];
        if (soundInstances && soundInstances.length > 0) {
          soundInstances.forEach((audio) => { audio.playbackRate = args.SPEED });
        }
      });
    }

    setSoundsPitch(args) {
      const namesArray = JSON.parse(args.NAMES);
      namesArray.forEach((name) => {
        const soundInstances = this.sounds[name];
        if (soundInstances && soundInstances.length > 0) {
          soundInstances.forEach((audio) => {
            audio.mozPreservesPitch = false;
            audio.playbackRate = 1;
            const semitoneRatio = Math.pow(2, 1 / 12);
            const currentPitch = Math.pow(semitoneRatio, args.PITCH);
            audio.playbackRate = currentPitch;
          });
        }
      });
    }

    getLoudnessAtTime(args) {
      const { NAME, TIME } = args;
      const soundInstances = this.sounds[NAME];
      if (soundInstances && soundInstances.length > 0) {
        const audio = soundInstances[0];
        const audioDuration = audio.duration;
        if (TIME >= 0 && TIME <= audioDuration) {
          let audioURI = audio.src;
          if (!audioURI.startsWith("data:")) return "Audio URLs DO NOT WORK, convert to URI!";
          const uriIndex = Math.floor(audioURI.length * (TIME / audioDuration));
          if (uriIndex >= 0 && uriIndex < audioURI.length) {
            const characterAtTime = audioURI.charAt(uriIndex);
            let loudnessValue = characterAtTime.charCodeAt(0);
            loudnessValue = (Math.PI / 180) * loudnessValue; 
            loudnessValue = (Math.sin(loudnessValue / 2) * 100) - 50;
            return loudnessValue * ((loudnessValue < 0) ? -2 : 3);
          }
        }
      }
      return soundInstances ? "Invalid Time Input!" : "Audio Doesnt Exist!";
    }

    async convertURLToURI(args) {
      const soundInstances = this.sounds[args.INPUT_NAME];
      if (soundInstances && soundInstances.length > 0) {
        const audio = soundInstances[0];
        const audioURI = audio.src;
        try {
          const response = await fetch(audioURI);
          const audioBlob = await response.blob();
          const audioDataURL = await new Promise((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.readAsDataURL(audioBlob);
          });
          this.sounds[args.OUTPUT_NAME] = [new Audio(audioDataURL)];
          console.log("Conversion Success!");
        } catch (error) { console.error("Error Converting: " + error.message) }
      } else { console.log("Audio Doesnt Exist!") }
    }

    returnInfo(args) {
      const soundInstances = this.sounds[args.NAME];
      if (soundInstances && soundInstances.length > 0) return Scratch.Cast.toString(this.sounds[args.NAME][0].src);
      return "Audio Doesnt Exist!";
    }

    checkOverlap(args) {
      if (this.overlappables[args.NAME] !== undefined) {
        const sourcePlayer = this.sounds[args.NAME][0];
        const audioOver = new Audio(this.overlappables[args.NAME].src);
        audioOver.playbackRate = sourcePlayer.playbackRate || audioOver.defaultPlaybackRate;
        audioOver.currentTime = args.START_TIME || 0;
        audioOver.volume = sourcePlayer.volume || 1;
        audioOver.play();

        const checkConInter = setInterval(() => {
          audioOver.playbackRate = sourcePlayer.playbackRate || audioOver.defaultPlaybackRate;
          audioOver.volume = sourcePlayer.volume || 1;
          const curTime = Math.round(sourcePlayer.currentTime * 1000) / 1000;
          const curLen = Math.round(sourcePlayer.duration * 1000) / 1000;
          if (sourcePlayer.paused && curTime !== curLen) {
            audioOver.pause();
            const checkCon = () => {
              if (sourcePlayer.paused) setTimeout(checkCon, 10);
              else audioOver.play()
            };
            checkCon();
          }
          if (sourcePlayer.paused && sourcePlayer.currentTime === 0) {
            audioOver.pause();
            audioOver.currentTime = 0;
            audioOver.src = "";
            if (audioOver.context) audioOver.context.close();
            clearInterval(checkConInter);
          }
        }, 100);
      }
    }
  }

  Scratch.extensions.register(new SPtuneShark());
})(Scratch);
