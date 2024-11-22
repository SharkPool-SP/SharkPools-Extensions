// Name: My Blocks+
// ID: SPmbpCST
// Description: Create Better Custom Blocks
// By: SharkPool
// By: CST1229 <https://scratch.mit.edu/users/CST1229/>
// By: 0znzw <https://scratch.mit.edu/users/0znzw/>
// License: MIT

// Version V.1.1.0

/* TODO
V1.2
- set default value
- block images?
- branches
*/

(function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) throw new Error("My Blocks+ must run unsandboxed!");

  const menuIconURI =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0Ny45NDgiIGhlaWdodD0iNDcuOTQ4IiB2aWV3Qm94PSIwIDAgNDcuOTQ4IDQ3Ljk0OCI+PHBhdGggZD0iTTAgMjMuOTc0QzAgMTAuNzM0IDEwLjczMyAwIDIzLjk3NCAwczIzLjk3NCAxMC43MzMgMjMuOTc0IDIzLjk3NC0xMC43MzMgMjMuOTc0LTIzLjk3NCAyMy45NzRTMCAzNy4yMTUgMCAyMy45NzQiIGZpbGw9IiNjYzUyNjYiLz48cGF0aCBkPSJNMi4yMTEgMjMuOTc0YzAtMTIuMDIgOS43NDQtMjEuNzYzIDIxLjc2My0yMS43NjNzMjEuNzYzIDkuNzQ0IDIxLjc2MyAyMS43NjMtOS43NDQgMjEuNzYzLTIxLjc2MyAyMS43NjNTMi4yMTEgMzUuOTkzIDIuMjExIDIzLjk3NCIgZmlsbD0iI2ZmNjY4MCIvPjxwYXRoIGQ9Ik0zOS4xNTIgMTQuNDU1djE5LjAzOGExLjEyIDEuMTIgMCAwIDEtLjY1IDEuMDE5bC0xNC41NTggNi43MTlhMS4xMiAxLjEyIDAgMCAxLS45NCAwbC0xNC41NTgtNi43MmExLjEyIDEuMTIgMCAwIDEtLjY1LTEuMDE4VjE0LjQ1NGExLjEyIDEuMTIgMCAwIDEgLjY1LTEuMDE5bDE0LjU1OC02LjcxOWExLjEyIDEuMTIgMCAwIDEgLjk0IDBsMTQuNTU4IDYuNzJjLjM5Ny4xODMuNjUxLjU4LjY1IDEuMDE4bS0yNy41NiAwIDExLjg4MiA1LjQ4OCAxMS44ODItNS40ODgtMTEuODgyLTUuNDg3em0tMS41NTYgMTguMzIxIDEyLjMxOCA1LjY4OVYyMS44OWwtMTIuMzE4LTUuNjg5em0yNi44NzYgMFYxNi4yMDFsLTEyLjMxOCA1LjY5djE2LjU3M3oiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNMzIuMzQ2IDM2LjE2OXYtMi42NzhoLTIuNjc4Yy0xLjM2NSAwLTIuNDcyLS45NTMtMi40NzItMi4xMjhzMS4xMDctMi4xMjggMi40NzItMi4xMjhoMi42Nzh2LTIuNjc4YzAtMS4zNjUuOTUzLTIuNDcyIDIuMTI4LTIuNDcyczIuMTI4IDEuMTA3IDIuMTI4IDIuNDcydjIuNjc4aDIuNjc4YzEuMzY1IDAgMi40NzIuOTUyIDIuNDcyIDIuMTI4IDAgMS4xNzUtMS4xMDcgMi4xMjgtMi40NzIgMi4xMjhoLTIuNjc4djIuNjc4YzAgMS4zNjUtLjk1MyAyLjQ3Mi0yLjEyOCAyLjQ3MnMtMi4xMjgtMS4xMDctMi4xMjgtMi40NzJ6IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZjY2ODAiIHN0cm9rZS13aWR0aD0iNCIvPjxwYXRoIGQ9Ik0zMi4zNDYgMzYuMTY5di0yLjY3OGgtMi42NzhjLTEuMzY1IDAtMi40NzItLjk1My0yLjQ3Mi0yLjEyOHMxLjEwNy0yLjEyOSAyLjQ3Mi0yLjEyOWgyLjY3OHYtMi42NzdjMC0xLjM2NS45NTMtMi40NzIgMi4xMjgtMi40NzJzMi4xMjggMS4xMDcgMi4xMjggMi40NzJ2Mi42NzdoMi42NzhjMS4zNjUgMCAyLjQ3Mi45NTMgMi40NzIgMi4xMjkgMCAxLjE3NS0xLjEwNyAyLjEyOC0yLjQ3MiAyLjEyOGgtMi42Nzh2Mi42NzhjMCAxLjM2NS0uOTUyIDIuNDcyLTIuMTI4IDIuNDcyLTEuMTc1IDAtMi4xMjgtMS4xMDctMi4xMjgtMi40NzIiIGZpbGw9IiNmZmYiLz48L3N2Zz4=";

  const dropdwnURI =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NyIgaGVpZ2h0PSI0OSIgdmlld0JveD0iMCAwIDU3IDQ5Ij48ZyBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiPjxwYXRoIGQ9Ik00LjUgNDguNWE0IDQgMCAwIDEtNC00di00MGE0IDQgMCAwIDEgNC00aDQ4YTQgNCAwIDAgMSA0IDR2NDBhNCA0IDAgMCAxLTQgNHoiIGZpbGw9IiNmZjY2ODAiIHN0cm9rZT0iI2YzNSIvPjxwYXRoIGQ9Ik0xMi4xMjMgMzkuODNjLTEuNTA3IDAtMi43My0xLjE0NC0yLjczLTIuNTU1di0yNS41NWMwLTEuNDExIDEuMjIzLTIuNTU1IDIuNzMtMi41NTVoMzIuNzU0YzEuNTA3IDAgMi43MyAxLjE0NCAyLjczIDIuNTU1djI1LjU1YzAgMS40MTEtMS4yMjMgMi41NTUtMi43MyAyLjU1NXoiIGZpbGw9IiNmZjRkNmEiIHN0cm9rZT0iI2YzNSIvPjxwYXRoIGQ9Ik0zNi4wODQgMjIuMTY3YTIuODggMi44OCAwIDAgMS0uODQ4IDIuMDUzbC00LjY3NyA0LjY3N2EyLjkyNCAyLjkyNCAwIDAgMS00LjExOCAwbC00LjY2NS00LjY3N2EyLjkgMi45IDAgMCAxLS44Ni0yLjA1MyAyLjk2IDIuOTYgMCAwIDEgLjg0OC0yLjA2NGMuMzQ2LS4yODcuODU5LS44NDggNi43NDItLjg0OHM2LjQzMi41NSA2LjczLjg0OGMuNTQ2LjU0OC44NSAxLjI5Ljg0OCAyLjA2NCIgZmlsbD0iI2YzNSIvPjxwYXRoIGQ9Ik0yOC41MDYgMjguNTUxYTEuNyAxLjcgMCAwIDEtMS4xOTMtLjVsLTQuNzAyLTQuNjc5YTEuNzIgMS43MiAwIDAgMSAwLTIuMzg2Yy42NjgtLjY2OSAxMS4xMS0uNjY5IDExLjc3OCAwIC42NDMuNjY1LjY0MyAxLjcyIDAgMi4zODZsLTQuNjc4IDQuNjc4Yy0uMzIuMzItLjc1My41LTEuMjA1LjUwMSIgZmlsbD0iI2ZmZiIvPjwvZz48L3N2Zz4=";
  const colorPkrURI =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iLTIgLTMgMjAgMjAiPjxwYXRoIGQ9Ik0xMS4wNjQgNS41NjIgOS40MDkgMy45MDhsLTMuOTQgMy45MmMtLjEyLjEzNy0uMjA1LjI3NC0uMjQuNDEtLjE4Ny44NTItLjgxOCAxLjUtMS41MTcgMS43MjJhMSAxIDAgMCAwLS41OC41MTFsLS44MzYgMS43OWMtLjA1MS4xMi0uMDUxLjE4OC0uMDUxLjIwNWwuMjczLjI1NWEuNi42IDAgMCAwIC4xODctLjA1bDEuNzc0LS44MzZjLjI0LS4xMi40Ni0uMzU4LjUzLS41OC4yMDQtLjY5OS44Ny0xLjMzIDEuNTY4LTEuNDgzLjI3My0uMDY4LjQyNy0uMTUzLjU0Ni0uMjl6bTIuMDMtMS43OS4xMzYuMTM2LjU4LjU4YS44ODQuODg0IDAgMCAxIDAgMS4yNDRsLS42NjUuNjQ4YS44NDcuODQ3IDAgMCAxLTEuMTYuMDY4bC0zLjk1OCAzLjkzOGEyLjA3IDIuMDcgMCAwIDEtMS4wMDYuNTk3Yy0uNDEuMDg1LS43MTYuMzc1LS43ODUuNjQ3LS4xNy41NjMtLjY0OCAxLjA5MS0xLjIxIDEuMzY0bC0xLjc5Mi44MzZjLS4yMzkuMTAyLS40OTUuMTctLjcxNi4xN2ExLjIgMS4yIDAgMCAxLS44Ny0uMzRsLS4zNDEtLjM0MmMtLjM3Ni0uMzkyLS40NDQtMS4wMDYtLjE3MS0xLjYwMmwuODM2LTEuNzczYy4yNTYtLjU2My44MDItMS4wNCAxLjM2NC0xLjIxLjI3My0uMDg2LjU2My0uMzc2LjYxNS0uNjMxLjExOS0uNTEyLjMyNC0uODcuNjE0LTEuMTc3bDMuOTU3LTMuOTM3Yy0uMjktLjM0MS0uMjczLS44MzYuMDUxLTEuMTc3bC42NjUtLjY0OGEuODg2Ljg4NiAwIDAgMSAxLjI0NiAwbC41NDYuNTQ2LjE3LjE3TDEyLjY4NC4zOTZhMS4zMyAxLjMzIDAgMCAxIDEuODk0IDBjLjI1Ni4yNTYuMzkyLjU5Ny4zOTIuOTM4cy0uMTM2LjY5OS0uMzkyLjk1NXoiIGZpbGw9Im5vbmUiIHN0cm9rZS1vcGFjaXR5PSIuMjUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIzIi8+PHBhdGggZD0iTTExLjA2NCA1LjU2MiA5LjQwOSAzLjkwOGwtMy45NCAzLjkyYy0uMTIuMTM3LS4yMDUuMjc0LS4yNC40MS0uMTg3Ljg1Mi0uODE4IDEuNS0xLjUxNyAxLjcyMmExIDEgMCAwIDAtLjU4LjUxMWwtLjgzNiAxLjc5Yy0uMDUxLjEyLS4wNTEuMTg4LS4wNTEuMjA1bC4yNzMuMjU1YS42LjYgMCAwIDAgLjE4Ny0uMDVsMS43NzQtLjgzNmMuMjQtLjEyLjQ2LS4zNTguNTMtLjU4LjIwNC0uNjk5Ljg3LTEuMzMgMS41NjktMS40ODMuMjcyLS4wNjguNDI2LS4xNTMuNTQ1LS4yOXptMi4wMy0xLjc5LjEzNi4xMzYuNTguNThhLjg4NC44ODQgMCAwIDEgMCAxLjI0NGwtLjY2NS42NDhhLjg0Ny44NDcgMCAwIDEtMS4xNi4wNjhsLTMuOTU4IDMuOTM4YTIuMDcgMi4wNyAwIDAgMS0xLjAwNi41OTdjLS40MS4wODUtLjcxNi4zNzUtLjc4NS42NDctLjE3LjU2My0uNjQ4IDEuMDkxLTEuMjEgMS4zNjRsLTEuNzkyLjgzNmMtLjIzOS4xMDItLjQ5NS4xNy0uNzE2LjE3YTEuMiAxLjIgMCAwIDEtLjg3LS4zNDFsLS4zNDEtLjM0Yy0uMzc2LS4zOTMtLjQ0NC0xLjAwNy0uMTcxLTEuNjAzbC44MzYtMS43NzNjLjI1Ni0uNTYzLjgwMi0xLjA0IDEuMzY0LTEuMjEuMjczLS4wODYuNTYzLS4zNzYuNjE1LS42MzEuMTE5LS41MTIuMzI0LS44Ny42MTQtMS4xNzdsMy45NTctMy45MzhjLS4yOS0uMzQtLjI3My0uODM1LjA1MS0xLjE3NmwuNjY2LS42NDhhLjg4Ni44ODYgMCAwIDEgMS4yNDUgMGwuNTQ2LjU0Ni4xNy4xN0wxMi42ODQuMzk2YTEuMzMgMS4zMyAwIDAgMSAxLjg5NCAwYy4yNTYuMjU2LjM5Mi41OTcuMzkyLjkzOHMtLjEzNi42OTktLjM5Mi45NTV6IiBmaWxsPSIjZmZmIi8+PC9zdmc+";

  const inputURIs = (name) => {
    // lower file size moment
    const start = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NyA0OSI+PHJlY3QgeD0iLjUiIHk9Ii41IiB3aWR0aD0iNTYiIGhlaWdodD0iNDgiIHJ4PSI0IiByeT0iNCIgc3R5bGU9ImZpbGw6I2ZmNjY4MDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2U6I2YzNSIvPjxyZWN0IHg9IjguNSIgeT0iOC41IiB3aWR0aD0iNDAiIGhlaWdodD0iMzIiIHJ4PSIxNiIgcnk9IjE2IiBzdHlsZT0ic3Ryb2tlOiNm";
    return start + {
      "norm": "MzU7ZmlsbDojZmZmO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZCIvPjx0ZXh0IHN0eWxlPSJmb250LXNpemU6MTJweDtmaWxsOiM2ZTc0ODg7Zm9udC1mYW1pbHk6SGVsdmV0aWNhTmV1ZS1Cb2xkLCBIZWx2ZXRpY2EgTmV1ZSwgc2Fucy1zZXJpZjtmb250LXdlaWdodDo3MDA7bGV0dGVyLXNwYWNpbmc6MGVtOyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTcuNSAyOSkiPnRleHQ8L3RleHQ+PC9zdmc+",
      "num": "MzU7ZmlsbDojZmZmO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZCIvPjx0ZXh0IHN0eWxlPSJmb250LXNpemU6MTJweDtmaWxsOiM2ZTc0ODg7Zm9udC1mYW1pbHk6SGVsdmV0aWNhTmV1ZS1Cb2xkLEhlbHZldGljYSBOZXVlLHNhbnMtc2VyaWY7Zm9udC13ZWlnaHQ6NzAwO2xldHRlci1zcGFjaW5nOjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI1IDI5KSI+MDwvdGV4dD48L3N2Zz4=",
      "col": "ZmY7ZmlsbDojMGYwO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZCIvPjwvc3ZnPg==",
      "ang": "ZmY7ZmlsbDojNDQ4OGU2O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZCIvPjxwYXRoIGQ9Ik0xNi4xNTQgMjQuNWMwLTYuNzggNS40OTYtMTIuMjc2IDEyLjI3Ni0xMi4yNzZTNDAuNzA1IDE3LjcyIDQwLjcwNSAyNC41IDM1LjIxIDM2Ljc3NiAyOC40MyAzNi43NzYgMTYuMTU0IDMxLjI4IDE2LjE1NCAyNC41eiIgZmlsbD0iIzQyODBkNyIgc3Ryb2tlPSIjMzM3M2NjIiBzdHJva2Utd2lkdGg9Ii41Ii8+PHBhdGggZD0iTTI4LjQzIDI0LjVWMTIuNTA0YzYuNjI1IDAgMTEuOTk2IDUuMzcgMTEuOTk2IDExLjk5NnoiIGZpbGwtb3BhY2l0eT0iLjIiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNMjguNDMgMjQuNWgxMi4yNzUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTI4LjQzIDI0LjVWMTIuNDQ4IiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iLjUiLz48cGF0aCBkPSJNMzcuMzEgMjQuNWgxLjU2N20tLjM1NiAyLjcwNC0xLjUxMy0uNDA2bS0uODg4IDIuMTQyIDEuMzU4Ljc4NE0zNC43MSAzMC43OGwxLjEwNyAxLjEwN20tMi45NDcuMzAzLjc4NCAxLjM1OG0tMi45MjYtLjQ3LjQwNiAxLjUxM20tMi43MDQuMzU2VjMzLjM4bS0yLjI5OC0uMzAyLS40MDYgMS41MTNtLTIuNTItMS4wNDMuNzg0LTEuMzU4bS0xLjg0LTEuNDEtMS4xMDcgMS4xMDdtLS4zMDMtMi45NDctMS4zNTguNzg0bS40Ny0yLjkyNi0xLjUxMy40MDZNMTkuNTUgMjQuNWgtMS41NjdtMS44NjktMi4yOTgtMS41MTMtLjQwNm0xLjA0My0yLjUyIDEuMzU3Ljc4NG0xLjQxMS0xLjg0LTEuMTA3LTEuMTA3bTIuOTQ3LS4zMDMtLjc4NC0xLjM1OG0yLjkyNi40Ny0uNDA2LTEuNTEzbTIuNzA0IDEuMjExdi0xLjU2N20yLjcwNC4zNTYtLjQwNiAxLjUxM20yLjkyNi0uNDctLjc4NCAxLjM1OG0xLjg0IDEuNDEgMS4xMDctMS4xMDdtMS42NjEgMi4xNjMtMS4zNTguNzg0bS44ODggMi4xNDIgMS41MTMtLjQwNiIgc3Ryb2tlLW9wYWNpdHk9Ii41IiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iLjI1Ii8+PHBhdGggZD0iTTI3LjkwOCAyNC41YS41MjIuNTIyIDAgMSAxIDEuMDQ0IDAgLjUyMi41MjIgMCAwIDEtMS4wNDQgMHoiIGZpbGw9IiNmZmYiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIuNSIvPjxwYXRoIGQ9Ik0zOC41NTUgMjQuNWEyLjYxMiAyLjYxMiAwIDEgMSA1LjIyMyAwIDIuNjEyIDIuNjEyIDAgMCAxLTUuMjIzIDB6IiBmaWxsPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjI1IiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMiIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMTEuNSAtMTU1LjUpIiBmaWxsPSIjNGM5N2ZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48cGF0aCBkPSJNNDEuMTcxIDIzLjcxNWMwLS4xNDQuMDkzLS4xOS4yMS0uMTAzbDEgLjc0OWMuMTE2LjA4Ni4xMTcuMjI0LS4wMDMuMzFsLS45OTQuNzJjLS4xMTguMDg0LS4yMTMuMDM1LS4yMTMtLjEwN3YtLjQzNmwtMS4xNzgtLjE5NmEuMTYuMTYgMCAwIDEtLjEyOC0uMTUyYzAtLjA3My4wNi0uMTQuMTI4LS4xNTJsMS4xNzgtLjE5N3oiIGZpbGw9IiM0Yzk3ZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==",
      "note": "MzU7ZmlsbDojZmZmIi8+PHBhdGggZD0iTTM1Ljc0IDI4LjMwNGMuMjk2IDEuNDc5LTEuMDggMi42NzMtMy4wNzMgMi42NzMtMS45ODkgMC0zLjgzNi0xLjE5NC00LjEyNy0yLjY3My0uMjk3LTEuNDggMS4wNzgtMi42NzggMy4wNzItMi42NzguNDE5IDAgLjgzLjA1NCAxLjIyNC4xNTEuMjE5LjA1Ni40MTIuMTE3LjYwNy4xOTYuNTY0LS4wMTMtLjA2Ny0xLjQ4Ni0xLjE4OC03LjkyLTEuMzgyLTcuOTY4IDEuOTgxLTEuMjEyIDUuNjc4LTEuNzgzIDMuNjk3LS41NzMuMDUgMy4xMjEtMi4zNjQgMi40OS0yLjQxMi0uNjQtMy4wMTEtNC42MzMuMTcgOS41NDR6bS0xMS4wMDggMy44OGMuMjkgMS40OC0xLjA4NSAyLjY3OS0zLjA3MSAyLjY3OS0xLjk4OCAwLTMuODM1LTEuMi00LjEzMi0yLjY4LS4yOS0xLjQ3OCAxLjA4NC0yLjY3NyAzLjA3Ni0yLjY3Ny42NSAwIDEuMjguMTI3IDEuODUuMzUyLjUzMi0uMDM2LS4wOTgtMS41NC0xLjIwNy03LjkyLTEuMzgtNy45NjggMS45ODItMS4yMTEgNS42NzYtMS43ODMgMy42OTYtLjU3OS4wNSAzLjEyMi0yLjM2MiAyLjQ4My0yLjQxMi0uNjQtMy4wMTItNC42MzIuMTcgOS41NDV6IiBmaWxsPSIjNmU3NDg4Ii8+PC9zdmc+",
      "mat": "MzU7ZmlsbDojMGRhNTdhIi8+PHBhdGggZD0iTTE3LjUgMTYuNWExIDEgMCAwIDEtMS0xdi0yYTEgMSAwIDAgMSAxLTFoMmExIDEgMCAwIDEgMSAxdjJhMSAxIDAgMCAxLTEgMXptNSAwYTEgMSAwIDAgMS0xLTF2LTJhMSAxIDAgMCAxIDEtMWgyYTEgMSAwIDAgMSAxIDF2MmExIDEgMCAwIDEtMSAxeiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0yNy41IDE2LjVhMSAxIDAgMCAxLTEtMXYtMmExIDEgMCAwIDEgMS0xaDJhMSAxIDAgMCAxIDEgMXYyYTEgMSAwIDAgMS0xIDF6IiBmaWxsPSIjMGZiZDhjIi8+PHBhdGggZD0iTTMyLjUgMTYuNWExIDEgMCAwIDEtMS0xdi0yYTEgMSAwIDAgMSAxLTFoMmExIDEgMCAwIDEgMSAxdjJhMSAxIDAgMCAxLTEgMXptNSAwYTEgMSAwIDAgMS0xLTF2LTJhMSAxIDAgMCAxIDEtMWgyYTEgMSAwIDAgMSAxIDF2MmExIDEgMCAwIDEtMSAxem0tMjAgNWExIDEgMCAwIDEtMS0xdi0yYTEgMSAwIDAgMSAxLTFoMmExIDEgMCAwIDEgMSAxdjJhMSAxIDAgMCAxLTEgMXptNSAwYTEgMSAwIDAgMS0xLTF2LTJhMSAxIDAgMCAxIDEtMWgyYTEgMSAwIDAgMSAxIDF2MmExIDEgMCAwIDEtMSAxem01IDBhMSAxIDAgMCAxLTEtMXYtMmExIDEgMCAwIDEgMS0xaDJhMSAxIDAgMCAxIDEgMXYyYTEgMSAwIDAgMS0xIDF6bTUgMGExIDEgMCAwIDEtMS0xdi0yYTEgMSAwIDAgMSAxLTFoMmExIDEgMCAwIDEgMSAxdjJhMSAxIDAgMCAxLTEgMXptNSAwYTEgMSAwIDAgMS0xLTF2LTJhMSAxIDAgMCAxIDEtMWgyYTEgMSAwIDAgMSAxIDF2MmExIDEgMCAwIDEtMSAxem0tMjAgNWExIDEgMCAwIDEtMS0xdi0yYTEgMSAwIDAgMSAxLTFoMmExIDEgMCAwIDEgMSAxdjJhMSAxIDAgMCAxLTEgMXoiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNMjIuNSAyNi41YTEgMSAwIDAgMS0xLTF2LTJhMSAxIDAgMCAxIDEtMWgyYTEgMSAwIDAgMSAxIDF2MmExIDEgMCAwIDEtMSAxeiIgZmlsbD0iIzBmYmQ4YyIvPjxwYXRoIGQ9Ik0yNy41IDI2LjVhMSAxIDAgMCAxLTEtMXYtMmExIDEgMCAwIDEgMS0xaDJhMSAxIDAgMCAxIDEgMXYyYTEgMSAwIDAgMS0xIDF6IiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTMyLjUgMjYuNWExIDEgMCAwIDEtMS0xdi0yYTEgMSAwIDAgMSAxLTFoMmExIDEgMCAwIDEgMSAxdjJhMSAxIDAgMCAxLTEgMXoiIGZpbGw9IiMwZmJkOGMiLz48cGF0aCBkPSJNMzcuNSAyNi41YTEgMSAwIDAgMS0xLTF2LTJhMSAxIDAgMCAxIDEtMWgyYTEgMSAwIDAgMSAxIDF2MmExIDEgMCAwIDEtMSAxem0tMjAgNWExIDEgMCAwIDEtMS0xdi0yYTEgMSAwIDAgMSAxLTFoMmExIDEgMCAwIDEgMSAxdjJhMSAxIDAgMCAxLTEgMXoiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNMjIuNSAzMS41YTEgMSAwIDAgMS0xLTF2LTJhMSAxIDAgMCAxIDEtMWgyYTEgMSAwIDAgMSAxIDF2MmExIDEgMCAwIDEtMSAxem01IDBhMSAxIDAgMCAxLTEtMXYtMmExIDEgMCAwIDEgMS0xaDJhMSAxIDAgMCAxIDEgMXYyYTEgMSAwIDAgMS0xIDF6bTUgMGExIDEgMCAwIDEtMS0xdi0yYTEgMSAwIDAgMSAxLTFoMmExIDEgMCAwIDEgMSAxdjJhMSAxIDAgMCAxLTEgMXoiIGZpbGw9IiMwZmJkOGMiLz48cGF0aCBkPSJNMzcuNSAzMS41YTEgMSAwIDAgMS0xLTF2LTJhMSAxIDAgMCAxIDEtMWgyYTEgMSAwIDAgMSAxIDF2MmExIDEgMCAwIDEtMSAxem0tMjAgNWExIDEgMCAwIDEtMS0xdi0yYTEgMSAwIDAgMSAxLTFoMmExIDEgMCAwIDEgMSAxdjJhMSAxIDAgMCAxLTEgMXptNSAwYTEgMSAwIDAgMS0xLTF2LTJhMSAxIDAgMCAxIDEtMWgyYTEgMSAwIDAgMSAxIDF2MmExIDEgMCAwIDEtMSAxeiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0yNy41IDM2LjVhMSAxIDAgMCAxLTEtMXYtMmExIDEgMCAwIDEgMS0xaDJhMSAxIDAgMCAxIDEgMXYyYTEgMSAwIDAgMS0xIDF6IiBmaWxsPSIjMGZiZDhjIi8+PHBhdGggZD0iTTMyLjUgMzYuNWExIDEgMCAwIDEtMS0xdi0yYTEgMSAwIDAgMSAxLTFoMmExIDEgMCAwIDEgMSAxdjJhMSAxIDAgMCAxLTEgMXptNSAwYTEgMSAwIDAgMS0xLTF2LTJhMSAxIDAgMCAxIDEtMWgyYTEgMSAwIDAgMSAxIDF2MmExIDEgMCAwIDEtMSAxeiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg=="
    }[name];
  };

  const vm = Scratch.vm;
  const runtime = vm.runtime;
  const isPM = Scratch.extensions.isPenguinMod;

  const TEMP_BLOCK_OPCODE = "SPmbpCST_$-,.___SPmbpCST_TEMP_BLOCK"; // opcode of the temporary block added to keep the extension in the project
  const CUSTOM_MENU_ID = "SP0zMenuMaker_menu_";
  const targetProcData = Symbol("MBPprocedureData"); // place to store important global procedure data

  let proceduresXML = "", tempStore = {}, storage = {};
  let globalBlocksCache = {};

  let extensionRemovable = false;
  let ext; // extension object

  function randomColour() {
    const num = Math.floor(Math.random() * Math.pow(2, 24));
    return `#${num.toString(16).padStart(6, "0")}`;
  }

  function colorDarken(hex, amt) {
    const hex2Rgb = (h) => {
      h = h.replace("#", "");
      if (h.length === 3) h = h.split("").map(char => char + char).join("");
      let bigint = parseInt(h, 16);
      return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
    }
    return rgb2Hex(hex2Rgb(hex).map((part) => Math.round(part * (1 - amt))));
  }
  function rgb2Hex([r, g, b]) {
    return ("#" + [r, g, b].map((part) => {
      const hex = part.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    }).join(""));
  }

  const inputTypes = {
    col: { opcode: "colour_picker", fieldName: "COLOUR", defaultValue: randomColour },
    note: { opcode: "note", fieldName: "NOTE", defaultValue: "60" },
    mat: { opcode: "matrix", fieldName: "MATRIX", defaultValue: isPM ? "1111001010011100100011000" : "1111110101001000010001110" },
    ang: { opcode: "math_angle", fieldName: "NUM", defaultValue: "90" },
    // %n technically already exists but some parts of scratch-blocks replace it with %s so we can't use it
    num: { opcode: "math_number", fieldName: "NUM", defaultValue: "0" },
  };
  function getInputData(input) {
    if (input.isDrop) return { opcode: input.type, fieldName: null, defaultValue: null };
    if (!Object.prototype.hasOwnProperty.call(inputTypes, input.type)) return {};
    return inputTypes[input.type];
  }
  // Used for setting dropdowns to the correct block color. Update when adding new input types
  function isNormalInput(opcode) {
    return opcode === "note" || opcode === "matrix" || opcode === "colour_picker"
      || opcode === "math_angle" || opcode === "math_number" || opcode === "text";
  }

  // if true, scrolling to My Blocks will scroll to My Blocks+ instead
  // used to make the Make a Block dialog scroll to the MB+ category
  let shouldScrollToMBP = false;

  // Custom Block Modal
  const returnTypeError = (e) => {
    // used for PenguinMod
    const modal = document.querySelector(`div[class="ReactModalPortal"]`);
    if (modal?.parentNode) {
      console.warn("Ignore the following Error about 'connectionDBList', it fixes itself");
      modal.querySelector(`[class^="close-button_close-button_"]`).click();
    }
  };

  function openBlockMaker(workspace, isEditing) {
    if (extensionRemovable) return;
    shouldScrollToMBP = true;
    const isDark = isPM ? document.body.getAttribute("theme") === "dark" : ReduxStore.getState().scratchGui.theme.theme.gui === "dark";
    // Scratch creates a new workspace for Custom Blocks, we need to capture it
    const newWorkspace = ScratchBlocks.mainWorkspace;
    const modal = document.querySelector(`div[class="ReactModalPortal"]`);
    modal.querySelector(`div[class*="modal_header-item-title"]`).textContent = "Make a Block+";
    if (!isPM) modal.querySelector(`div[class*="modal_modal-overlay_"]`).style.top = "-25px";
    else {
      const optionRow = modal.querySelectorAll(`[class^="custom-procedures_options-row_"]`);
      const returnCheck = modal.querySelectorAll(`input[type="checkbox"]`);

      const innerModal = modal.firstChild;
      innerModal.style.overflow = "auto";
      let ogTop;
      innerModal.addEventListener("scroll", () => {
        const activeInput = document.querySelector(`div[class^="blocklyWidgetDiv"][class*="fieldTextInput"]`);
        if (activeInput) {
          if (!ogTop) {
            const modalRect = innerModal.getBoundingClientRect();
            const inputRect = activeInput.getBoundingClientRect();
            ogTop = inputRect.top - modalRect.top + innerModal.scrollTop;
          }
          activeInput.style.top = `${ogTop - innerModal.scrollTop}px`;
        }
      });

      modal.querySelector(`[class^="custom-procedures_color-picker-area_"]`).style.display = "none";
      if (optionRow[1]) optionRow[1].style.display = "none";
      if (returnCheck[1]) returnCheck[1].parentNode.addEventListener("click", (e) => {
        optionRow[1].style.display = e.target.checked ? "" : "none";
      });
    }
    const row = modal.querySelector(`[class^="custom-procedures_options-row_"]`);
    const blockEditor = newWorkspace.getBlockById(modal.querySelector("g[data-id]").getAttribute("data-id"));
    const curProc = blockEditor.procCode_;
    tempStore = structuredClone(storeGet(curProc)) || {}; // Reset
    blockEditor.SPmbpCST_store = tempStore;

    attachInputBtns(row, blockEditor, isDark, workspace);
    attachColors(row, isDark, blockEditor);
    attachCheckboxes(modal, blockEditor, isEditing, curProc);

    // Attach Okay Button Listener
    const okBtn = modal.querySelector(`button[class^="custom-procedures_ok-button_"]`);
    okBtn.addEventListener("click", (e) => {
      // prevent proccode conflicts
      const existingPrototype = ScratchBlocks.Procedures.getPrototypeBlock(blockEditor.procCode_, workspace);
      const existingCache = globalBlocksCache[blockEditor.procCode_];
      if (
        (existingPrototype && (!isEditing || curProc !== blockEditor.procCode_)) ||
        (existingCache !== undefined && !isEditing)
      ) {
        alert("A custom block with this text already exists!");
        e.stopImmediatePropagation();
        return;
      }

      cleanupBlockInputs(tempStore.inputs, blockEditor.argumentIds_);
      storeSet(blockEditor.procCode_, tempStore);
      if (isEditing && curProc !== blockEditor.procCode_) storeDel(curProc);
      refreshGlobalBlocksCache();

      if (isPM) {
        window.removeEventListener("error", returnTypeError, { once: true });
        window.addEventListener("error", returnTypeError, { once: true });
      }
    });
  }

  function attachInputBtns(row, editor, isDark, workspace) {
    // dropdown btn
    const dropBtn = row.childNodes[1].cloneNode(true);
    dropBtn.childNodes[0].src = dropdwnURI;
    dropBtn.childNodes[2].textContent = "dropdown";
    row.insertBefore(dropBtn, row.childNodes[2]);
    dropBtn.addEventListener("click", () => openMenuSelector(editor, isDark, workspace));

    // dynamic btn
    const paths = {
      "number or text": "norm", "number": "num", "angle": "ang", 
      "color": "col", "piano": "note", "matrix": "mat"
    };
    const inpBtn = row.childNodes[1].cloneNode(true);
    const img = inpBtn.childNodes[0], btn = inpBtn.childNodes[2];
    img.src = inputURIs("norm");
    // replace text with dropdown input
    let drpdown = document.createElement("select");
    drpdown.setAttribute("style", `border-radius: 5px; text-align: center; background: ${isDark ? "#1e1e1e" : "#fff"}; border: 2px solid var(--ui-black-transparent, rgba(0, 0, 0, 0.15));`);
    for (const [txt, val] of Object.entries(paths)) {
      let opt = document.createElement("option");
      opt.text = txt; opt.value = val;
      drpdown.appendChild(opt);
    };
    btn.replaceChild(drpdown, btn.querySelector("span"));
    drpdown.addEventListener("change", (e) => {
      img.src = inputURIs(e.target.value)
      inpBtn.click();
    });
    // on Firefox, the "click" event will propagate to the button, which will add another input. don't do that
    drpdown.addEventListener("click", (e) => { e.stopPropagation() });

    row.replaceChild(inpBtn, row.childNodes[0]);
    inpBtn.addEventListener("click", (e) => {
      if (e.target === drpdown) return;
      editor.addStringNumberExternal();
      e.stopImmediatePropagation(); // don't run the old add event
      if (drpdown.value === "norm") return;

      const args = editor.argumentIds_;
      const id = args[args.length - 1];
      const inputs = tempStore.inputs || {};
      inputs[id] = { type: drpdown.value, isDrop: false };
      tempStore.inputs = inputs;
      cleanupBlockInputs(inputs, args);

      editor.displayNames_[args.length - 1] = drpdown.selectedOptions[0].textContent;
      editor.updateDisplay_();
      editor.focusLastEditor_();
    });
  }

  // Clean nonexistent inputs from the inputs object
  function cleanupBlockInputs(inputs, args) {
    for (const inputId in inputs) {
      if (!args.includes(inputId)) delete inputs[inputId];
    }
  }

  function attachCheckboxes(modal, editor, isEditing, ogProcode) {
    const checkRow = isPM ? modal.querySelector(`div[class^="custom-procedures_button-row_"]`).previousSibling
      : modal.querySelector(`[class^="custom-procedures_checkbox-row"]`);
    const makeBox = (txt, val, func) => {
      const box = checkRow.firstChild.cloneNode(true);
      box.childNodes[1].textContent = txt;
      box.childNodes[0].checked = val;
      box.addEventListener("click", () => func(box.childNodes[0].checked));
      return box;
    };
    if (isEditing && isPM) {
      const isReturner = editor.getReturns();
      const returnType = makeBox(
        "Boolean", editor.outputType === "boolean",
        (val) => { editor.setType(val ? "boolean" : "string") }
      );
      returnType.style.display = isReturner ? "" : "none";
      returnType.style.marginLeft = "5px";
      const returnCheck = makeBox(
        "Returns a value", isReturner,
        (val) => {
          editor.setReturns(val);
          if (val) {
            editor.setType("string");
            returnType.childNodes[0].checked = false;
            returnType.style.display = "";
          } else {
            editor.setType("statement");
            returnType.style.display = "none";
          }
        }
      );
      checkRow.append(returnCheck, returnType);
    }
    checkRow.append(isPM && !isEditing ? "" : document.createElement("br"), makeBox(
      "Cap block", tempStore.isTerminal !== undefined ? tempStore.isTerminal : false,
      (val) => {
        editor.setNextStatement(!val);
        tempStore.isTerminal = val;
      }
    ));
    checkRow.append(document.createElement("br"), makeBox(
      "Available for all sprites", tempStore.global !== undefined ? tempStore.global : false,
      (val) => { tempStore.global = val }
    ));
  }

  function attachColors(row, isDark, editor) {
    const bounceAnim = (circ) => {
      circ.animate(
        [{ transform: "scale(0.75)" }, { transform: "scale(1)" }], { duration: 200, easing: "ease-in-out" }
      );
    };
    const setCol = (col) => {
      tempStore.color = col;
      if (isPM) editor.setColor(col, colorDarken(col, 0.1), colorDarken(col, 0.2));
      else {
        editor.setColour(col);
        editor.updateDisplay_();
      }
    };

    const colorDiv = document.createElement("div");
    colorDiv.setAttribute("style", "display: flex; justify-content: center; align-items: center; margin-top: 15px; border-radius: 10px;");
    if (isPM) colorDiv.style.marginBottom = "15px";
    colorDiv.style.border = `solid ${isDark ? "#343434" : "#D9D9D9"} 2.5px`;

    const mainColors = ScratchBlocks.Colours;
    const colors = [
      mainColors.motion.primary, mainColors.looks.primary, mainColors.sounds.primary,
      mainColors.event.primary, mainColors.control.primary, mainColors.sensing.primary,
      mainColors.operators.primary, mainColors.data.primary, mainColors.data_lists.primary,
      mainColors.more.primary, mainColors.pen.primary, "red",
    ];
    colors.forEach(color => {
      const circle = document.createElement("div");
      circle.setAttribute("style", "width: 35px; height: 35px; border-radius: 50%; border: 2.5px solid rgba(0, 0, 0, 0.13); margin: 7px; cursor: pointer;");
      circle.style.backgroundColor = color;
      circle.style.boxShadow = `0px 0px 0px 2.5px ${isDark ? "#343434" : "#D9D9D9"}`;
      colorDiv.appendChild(circle);
      if (color === "red") {
        const innerImg = document.createElement("img");
        innerImg.src = colorPkrURI;
        innerImg.setAttribute("style", "width: 25px; height: 25px; position: relative; padding: 2px; left: 50%; top: 50%; transform: translate(-50%, -50%);");
        circle.addEventListener("click", () => {
          bounceAnim(circle);
          colInp.click();
        });

        const colInp = document.createElement("input");
        colInp.type = "color";
        colInp.setAttribute("style", "opacity: 0; cursor: pointer; width: 1px; height: 1px; transform: translate(15px, -25px);");
        circle.append(innerImg, colInp);
        colInp.addEventListener("input", () => {
          circle.style.backgroundColor = colInp.value;
          setCol(colInp.value);
        });
      } else {
        circle.addEventListener("click", () => {
          bounceAnim(circle);
          setCol(color);
        });
      }
    });
    if (!tempStore.color) setCol(colors[9]);
    row.parentNode.insertBefore(colorDiv, row.parentNode.lastChild.previousSibling);
  }

  // Menu Modal
  function openMenuSelector(editor, isDark, ogWorkspace) {
    const arrowIcon = isPM ? "static/blocks-media/dropdown-arrow" : "/static/blocks-media/default/dropdown-arrow";
    const workspace = ScratchBlocks.mainWorkspace;
    ScratchBlocks.Variables.createVariable(workspace, null, "list");
    let modal = document.querySelectorAll(`div[class="ReactModalPortal"]`);
    modal = modal[modal.length - 1];
    modal.style.position = "relative"; modal.style.zIndex = "99999";

    modal.querySelector(`div[class*="modal_header-item-title"]`).textContent = "Select a Dropdown";
    const body = modal.querySelector(`div[class*="prompt_body_"]`);
    const childs = body.childNodes;
    for (let i = childs.length - 1; i--;) childs[i].remove();

    // Get All Dropdowns
    const avoid = ["looks_costumenumbername", "extension_wedo_tilt_menu", "lmsMoreEvents_menu_state"];
    let allBlocks = Object.keys(ScratchBlocks.Blocks);
    allBlocks = allBlocks.filter((i) => i.includes("menu") && !avoid.includes(i));
    allBlocks.unshift("looks_costume", "looks_backdrops", "sensing_keyoptions");
    allBlocks.forEach((e, i) => {
      if (e.startsWith(CUSTOM_MENU_ID)) {
        allBlocks.unshift(e);
        allBlocks.splice(i + 1, 1);
      }
    });
    let selectedMenu = allBlocks[0];

    const dropDiv = document.createElement("div");
    dropDiv.setAttribute("style", "width: 100%; height: 200px; margin-bottom: 15px; overflow: scroll; border-radius: 10px;");
    dropDiv.style.border = `solid ${isDark ? "#343434" : "#D9D9D9"} 2px`;

    for (let i = 0; i < allBlocks.length; i++) {
      const dropItem = document.createElement("div");
      const text = document.createElement("div");
      const prev = document.createElement("div");
      dropItem.setAttribute("style", "cursor: pointer; padding: 8px; width: 100%; height: max-content; display: flex; flex-direction: column; align-items: center; justify-content: center;");
      dropItem.append(prev, text);
      text.textContent = allBlocks[i].replace(CUSTOM_MENU_ID, "");

      const isCustom = allBlocks[i].includes(CUSTOM_MENU_ID);
      const block = ogWorkspace.getBlockById(allBlocks[i]);
      let prevTxt = block ? block.inputList[0].fieldRow[0].text_.substring(0, 17) : "";
      if (prevTxt.length === 17) prevTxt += "...";
      prev.outerHTML =  `
        <div style="color: #fff; background: ${isCustom ? "#FF6680" : block ? block.colour_ : "#505050"}; border-radius: ${block ? 50 : 5}px; width: max-content; text-align: center; margin-bottom: 5px; padding: 5px 10px 5px 10px; font-weight: 500; border: solid 1px rgba(0,0,0,0.3)">
          <span>${block ? prevTxt : "???"}</span><img style="margin-left: 5px;" src="${arrowIcon}.svg">
        </div>
      `;

      const bgColor = i % 2 === 0 ? isCustom ? "#cc526640" : "#aaa3" : isCustom ? "#cc526680" : "transparent";
      dropItem.style.backgroundColor = `var(--selected-color, ${bgColor})`;
      if (i === 0) dropItem.style.setProperty("--selected-color", isCustom ? "#f7889a99" : "#aaaa");
      dropDiv.appendChild(dropItem);
      dropItem.addEventListener("click", () => {
        Array.from(dropDiv.children).forEach(c => { c.style.removeProperty("--selected-color"); });
        dropItem.style.setProperty("--selected-color", isCustom ? "#f7889a99" : "#aaaa");
        selectedMenu = allBlocks[i];
      });
    }
    body.insertBefore(dropDiv, body.lastChild);

    // Override "OK" Button
    const okBtn = modal.querySelector(`button[class^="prompt_ok-button_"]`);
    const clone = okBtn.cloneNode(true);
    okBtn.replaceWith(clone);
    clone.addEventListener("click", () => {
      editor.addStringNumberExternal();
      const args = editor.argumentIds_;
      const id = args[args.length - 1];
      editor.displayNames_[args.length - 1] = selectedMenu.replace(CUSTOM_MENU_ID, "");
      editor.updateDisplay_();
      editor.focusLastEditor_();

      const inputs = tempStore.inputs || {};
      inputs[id] = { type: selectedMenu, isDrop: true };
      tempStore.inputs = inputs;
      cleanupBlockInputs(inputs, args);

      modal.querySelector(`div[class^="close-button_close-button_"]`).click();
    });
  }

  // Compiler Patches
  function getCompiler() {
    if (vm.exports.i_will_not_ask_for_help_when_these_break) return vm.exports.i_will_not_ask_for_help_when_these_break();
    else if (vm.exports.JSGenerator && vm.exports.IRGenerator?.exports) return {
      ...vm.exports, ScriptTreeGenerator: vm.exports.IRGenerator.exports.ScriptTreeGenerator
    };
  }
  const compiler = getCompiler();
  if (compiler) {
    const { JSGenerator, ScriptTreeGenerator } = compiler;
    const exp = JSGenerator.exports === undefined ? JSGenerator.unstable_exports : JSGenerator.exports;
    const _ogIRdescendStack = ScriptTreeGenerator.prototype.descendStackedBlock;
    ScriptTreeGenerator.prototype.descendStackedBlock = function (block) {
      if (block.opcode === "SPmbpCST_setParam") {
        let paramIndex = this.script.arguments.lastIndexOf(block.fields.PARAM.value);
        if (paramIndex === -1) {
          paramIndex = this.script.arguments.length;
          this.script.arguments.push(block.fields.PARAM.value);
        }
        return {
          kind: "SPmbpCST.setParam", paramIndex, val: this.descendInputOfBlock(block, "VALUE")
        };
      } else return _ogIRdescendStack.call(this, block);
    };
    const _ogIRdescendInp = ScriptTreeGenerator.prototype.descendInput;
    ScriptTreeGenerator.prototype.descendInput = function (block) {
      if (block.opcode === "SPmbpCST_getParam") return { kind: "SPmbpCST.getParam", param: this.descendInputOfBlock(block, "PARAM") };
      else return _ogIRdescendInp.call(this, block);
    };
    const _ogJSdescendStack = JSGenerator.prototype.descendStackedBlock;
    JSGenerator.prototype.descendStackedBlock = function (node) {
      if (node.kind === "SPmbpCST.setParam") {
        const val = this.descendInput(node.val);
        const i = node.paramIndex;
        if (i !== undefined && i !== -1) this.source += `p${i} = ${val.asSafe()};\n`;
      } else if (node.kind === "procedures.call") {
        // This gets Global Procedures to work for some reason
        return _ogJSdescendStack.call(this, node);
      } else return _ogJSdescendStack.call(this, node);
    };
    const _ogJSdescendInp = JSGenerator.prototype.descendInput;
    JSGenerator.prototype.descendInput = function (node) {
      if (node.kind === "SPmbpCST.getParam") {
        const val = this.descendInput(node.param).asSafe();
        return new exp.TypedInput(`(() => {
          let a = ${JSON.stringify(this.script.arguments)}, v = ${val};
          if (typeof v !== 'string') v = (v).toString();
          const i = a.indexOf(v);
          return i > -1 ? arguments[i] : "";
        })()`, exp.TYPE_STRING);
      } else if (node.kind === "procedures.call") {
        // This gets Global Procedures to work for some reason
        return _ogJSdescendInp.call(this, node);
      } else return _ogJSdescendInp.call(this, node);
    };
  }

  function syncFieldColors(block) {
    for (const input of block.inputList) {
      for (const field of input?.fieldRow) {
        if (field.arrow_) { // dropdown fields
          if (field.sourceBlock_.isShadow()) field.sourceBlock_.clearShadowColour();
        }
        if (field.box_) { // text input fields and round dropdowns
          field.box_.setAttribute("fill", field.sourceBlock_.getColour());
          if (field.box_.hasAttribute("stroke")) field.box_.setAttribute("stroke", field.sourceBlock_.getColourTertiary());
        }
      }
      // for shadow blocks, inherit the tertiary color
      if (input?.connection?.targetConnection?.sourceBlock_) {
        const otherBlock = input?.connection?.targetConnection?.sourceBlock_;
        if (otherBlock.isShadow()) {
          // penguinmod doesnt have quaternary colors yet
          if (isPM) otherBlock.setColour(otherBlock.getColour(), otherBlock.getColourSecondary(), block.getColourTertiary());
          else otherBlock.setColour(otherBlock.getColour(), otherBlock.getColourSecondary(), block.getColourTertiary(), otherBlock.getColourQuaternary());
        }
      }
    }
  }

  // ScratchBlocks and Editor Patches
  if (Scratch.gui) Scratch.gui.getBlockly().then(SB => {
    const recolorables = [
      "argument_reporter_string_number", "argument_reporter_boolean",
      "SPmbpCST_setParam", "SPmbpCST_getParam", "procedures_return",
      // penguinmod
      "procedures_definition_return", "procedures_set"
    ];

    let domToBlockXml = null;
    const oldDTBH = SB.Xml.domToBlockHeadless_;
    SB.Xml.domToBlockHeadless_ = function (...args) {
      domToBlockXml = args[0];
      const returnValue = oldDTBH.apply(this, args);
      domToBlockXml = null;
      return returnValue;
    }

    const oldScrollToCategory = ScratchBlocks.Toolbox.prototype.scrollToCategoryById;
    ScratchBlocks.Toolbox.prototype.scrollToCategoryById = function(id) {
      if (id === "myBlocks" && shouldScrollToMBP) {
        shouldScrollToMBP = false;
        id = "SPmbpCST";
      }
      return oldScrollToCategory.call(this, id);
    }

    const utils = SB.ScratchBlocks.ProcedureUtils;
    const ogUpdateDisplay = utils.updateDisplay_;
    utils.updateDisplay_ = function () {
      if (extensionRemovable) return ogUpdateDisplay.call(this);
      const store = this.SPmbpCST_store || storeGet(this.procCode_);
      if (store.color && !this.isInsertionMarker()) {
        this.setColour(store.color);
        if (this.type === "procedures_prototype") {
          // Recolor argument reporters and the define block to the block color
          this.setColour(store.color);
          // ScratchBlocks ways of getting the parent block won't work while the blocks are being created
          queueMicrotask(() => {
            const defineBlock = this.getParent();
            if (!defineBlock) return;
            defineBlock.setColour(store.color);
            syncFieldColors(defineBlock);
            for (const child of defineBlock.getDescendants(false, false)) {
              if (recolorables.includes(child.type)) updateArgumentReporterColor(child, defineBlock);
            }
          });
        }
        // Recolor dropdowns to the block color
        if (this.type === "procedures_call") {
          queueMicrotask(() => {
            for (const child of this.getChildren()) {
              if (child.isShadow() && child.outputConnection && !isNormalInput(child.type)) child.setColour(store.color);
            }
          });
        }
      }

      // Disconnect and reconnect the prototype from the define block when
      // changing the output type in PM because otherwise errors will happen
      // we have to create a new define block to change its type
      let defineBlock = (
        isPM && this.type === "procedures_prototype" && this.getParent()?.type?.startsWith("procedures_definition")
      ) ? this.getParent() : null;
      let savedDefConnect = null, savedShadow = null;
      const newOpcode = this.output_ ? "procedures_definition_return" : "procedures_definition";
      if (isPM && defineBlock && defineBlock.type !== newOpcode) {
        savedDefConnect = (this.previousConnection || this.outputConnection).targetConnection;
        savedShadow = savedDefConnect.getShadowDom();
        const savedNextConnect = defineBlock.nextConnection?.targetConnection;

        // Remove the shadow DOM, then disconnect the block.  Otherwise a shadow block
        // will respawn instantly, and we'd have to remove it when we remove the input.
        savedNextConnect?.disconnect();

        // Recreate the define block with a changed type
        const ws = defineBlock.workspace;
        const xml = ScratchBlocks.Xml.blockToDom(defineBlock);
        const position = defineBlock.getRelativeToSurfaceXY();
        xml.setAttribute("type", newOpcode);
        defineBlock.dispose();
        defineBlock = ScratchBlocks.Xml.domToBlock(xml, ws);
        defineBlock.moveBy(position.x, position.y);
        if (savedNextConnect) savedNextConnect.connect(defineBlock.nextConnection);
      }
      ogUpdateDisplay.call(this);
      if (savedDefConnect) {
        savedDefConnect = defineBlock.getInput("custom_block").connection;
        (this.previousConnection || this.outputConnection).connect(savedDefConnect);
        savedDefConnect.setShadowDom(savedShadow);
      }

      if (!this.isInsertionMarker()) {
        // ScratchBlocks ways of getting the next block won't work while the blocks are being created
        const actualNextBlock = this.getNextBlock() || vm?.editingTarget?.blocks?.getBlock(this.id)?.next || (domToBlockXml && domToBlockXml.querySelector("next"));
        const isReturner = isPM ? this.output_ : this.return_;
        if (!store.isTerminal !== undefined && !isReturner && !actualNextBlock) this.setNextStatement(!store.isTerminal, this.type === "procedures_prototype" ? true : undefined);
      } else {
        // The insertion marker should copy the terminal-ness of the source block,
        // otherwise Blockly will throw an error
        const targetBlock = this.workspace?.currentGesture_?.targetBlock_;
        // targetBlock doesn't exist when dragging to the start of a stack
        // In this case, it should always be a stack block
        this.setNextStatement(targetBlock ? !!targetBlock?.nextConnection : true);
      }
    }
    for (const opcode of ["procedures_call", "procedures_prototype", "procedures_declaration"]) {
      SB.Blocks[opcode].updateDisplay_ = utils.updateDisplay_;
    }

    const ogAttachShadow = utils.attachShadow_;
    utils.attachShadow_ = function (input, argumentType) {
      if (extensionRemovable) return ogAttachShadow.call(this, input, argumentType);
      // TODO use stored default values for V 1.2
      const store = this.SPmbpCST_store || storeGet(this.getProcCode());
      if (!store || !store.inputs || !store.inputs[input.name]) return ogAttachShadow.call(this, input, argumentType);
      const { opcode, fieldName, defaultValue } = getInputData(store.inputs[input.name]);
      if (!opcode) return ogAttachShadow.call(this, input, argumentType);

      // Add custom inputs
      const blockType = opcode;
      SB.Events.disable();
      let newBlock;
      try {
        newBlock = this.workspace.newBlock(blockType);
        if (fieldName) newBlock.setFieldValue(defaultValue instanceof Function ? defaultValue() : defaultValue, fieldName);
        newBlock.setShadow(true);
        if (!this.isInsertionMarker()) {
          newBlock.initSvg();
          newBlock.render(false);
        }
      } finally {
        SB.Events.enable();
      }
      if (SB.Events.isEnabled()) SB.Events.fire(new SB.Events.BlockCreate(newBlock));
      newBlock?.outputConnection.connect(input.connection);
    };
    SB.Blocks["procedures_call"].attachShadow_ = utils.attachShadow_;

    function updateArgumentReporterColor(block, defineBlock = null) {
      // Just stopped dragging (and dropping), update color according to the top define block
      if (extensionRemovable) return;
      if (!defineBlock) {
        defineBlock = block;
        while (defineBlock?.getParent()) {
          defineBlock = defineBlock?.getParent();
        }
      }
      if (defineBlock?.type.startsWith("procedures_definition")) block.setColour(defineBlock.getColour());
      else block.setColour(...Object.values(SB.Colours.more));
      syncFieldColors(block);
    }

    const ogSetDragging = SB.BlockSvg.prototype.setDragging;
    const argumentReporterSetDragging = function (adding) {
      if (!adding && !extensionRemovable && this.svgGroup_.classList.contains("blocklyDragging")) {
        queueMicrotask(() => { updateArgumentReporterColor(this) });
      }
      ogSetDragging.call(this, adding);
    };
    // this would run when the block is added to the workspace
    const ogSetParent = SB.BlockSvg.prototype.setParent;
    const argumentReporterSetParent = function (newParent) {
      if (newParent && !extensionRemovable) queueMicrotask(() => { updateArgumentReporterColor(this) });
      ogSetParent.call(this, newParent);
    };

    for (const opcode of recolorables) {
      if (!SB.Blocks[opcode]) continue;
      SB.Blocks[opcode].setDragging = argumentReporterSetDragging;
      SB.Blocks[opcode].setParent = argumentReporterSetParent;
    }
    try {
      SB.Extensions.register("SPmbpCST_defineColored", function () {
        this.setDragging = argumentReporterSetDragging;
        this.setParent = argumentReporterSetParent;
        updateArgumentReporterColor(this);
      });
    } catch {/* already defined */}

    // Turn procedure calls marked as cap blocks into cap blocks if they can be turned into cap blocks
    function checkCapBlock(block) {
      if (!block.isInsertionMarker()) {
        const store = storeGet(block.procCode_);
        if (store && store.isTerminal && block.nextConnection && !block.getNextBlock())
          block.setNextStatement(!store.isTerminal);
      } else {
        // The insertion marker should copy the next connection of the source block
        block.setNextStatement(Boolean(block.getNextBlock()));
      }
    }
    // For the previous block when starting a drag of the current block
    const ogUnplug = SB.Block.prototype.unplug;
    const procCallUnplug = function (opt_healStack) {
      if (extensionRemovable || this.isInsertionMarker() || this.getParent()?.isInsertionMarker()) return ogUnplug.call(this, opt_healStack);
      const parent = this.getParent();
      ogUnplug.call(this, opt_healStack);
      checkCapBlock(this);
      if (parent) checkCapBlock(parent);
    };
    SB.Blocks["procedures_call"].unplug = procCallUnplug;

    // Copy the define block's argument color when dragging an argument reporter
    const oldDuplicateOnDrag_ = SB.Gesture.prototype.duplicateOnDrag_;
    SB.Gesture.prototype.duplicateOnDrag_ = function () {
      const source = this.targetBlock_;
      oldDuplicateOnDrag_.call(this);
      const duplicated = this.targetBlock_;
      if (source && duplicated && source.type.startsWith("argument_reporter_")) {
        duplicated.setColour(source.getColour());
      }
    };

    // Patch Procedure Edit and Create to also open our Modal
    const procs = SB.Procedures;
    const ogCreateCall = procs.createProcedureDefCallback_;
    if (runtime.SPmbpCSTOldStorage === undefined) {
      procs.createProcedureDefCallback_ = function (workspace) {
        const sharedWork = SB.mainWorkspace;
        ogCreateCall.call(this, workspace);
        openBlockMaker(sharedWork, false);
      };
      const ogEditCall = procs.editProcedureCallback_;
      procs.editProcedureCallback_ = function (block) {
        if (block.type === "procedures_call") {
          const isGlobal = globalBlocksCache[block.procCode_];
          if (isGlobal && isGlobal.id !== vm.editingTarget.id) {
            alert("Global Blocks can only be editted in their Sprite of Origin");
            vm.setEditingTarget(isGlobal.id);
            return;
          }
        }
        const sharedWork = SB.mainWorkspace;
        const val = ogEditCall.call(this, block);
        openBlockMaker(sharedWork, true);
        return val;
      }
    }
    // Patch Procedure Flyout to also interact with the extension
    const ogFlyoutCall = procs.flyoutCategory;
    procs.flyoutCategory = function (workspace) {
      const val = ogFlyoutCall.call(this, workspace);
      compileProcedures(val, workspace, procs);
      return val;
    }
  })

  // Other patches
  function patchTarget() {
    // create a target to patch Target.Blocks
    const target = new vm.exports.RenderedTarget({blocks: null}, runtime);

    const Blocks = target.blocks.constructor;
    const oldGetProcDef = Blocks.prototype.getProcedureDefinition;
    Blocks.prototype.getProcedureDefinition = function (name) {
      const thisDef = oldGetProcDef.call(this, name);
      if (!thisDef && globalBlocksCache[name] && globalBlocksCache[name].blocks !== this) {
        return globalBlocksCache[name].blocks.getProcedureDefinition(name);
      }
      return thisDef;
    }
    const oldGetBlock = Blocks.prototype.getBlock;
    Blocks.prototype.getBlock = function (name) {
      const thisBlock = oldGetBlock.call(this, name);
      if (thisBlock) return thisBlock;
      for (const target of this.runtime.targets) {
        if (!target.isOriginal || target.blocks === this) continue;
        const targetBlock = oldGetBlock.call(target.blocks, name);
        if (targetBlock) return targetBlock;
      }
      return undefined;
    }
    const oldPopProcCache = Blocks.prototype.populateProcedureCache;
    Blocks.prototype.populateProcedureCache = function () {
      if (this._cache.proceduresPopulated) return;
      refreshGlobalBlocksCache();
      oldPopProcCache.call(this);
      for (const proccode of Object.keys(globalBlocksCache)) {
        const target = globalBlocksCache[proccode];
        if (target.blocks === this) continue;
        oldPopProcCache.call(target.blocks);
        // add global blocks to this cache if they aren't present already
        this._cache.procedureParamNames[proccode] = target.blocks._cache.procedureParamNames[proccode];
        this._cache.procedureDefinitions[proccode] = target.blocks._cache.procedureDefinitions[proccode];
      }
    }
  }
  patchTarget();

  const oldToJSON = vm.constructor.prototype.toJSON;
  vm.constructor.prototype.toJSON = function (...args) {
    if (extensionRemovable) return oldToJSON.apply(this, args);
    if (!isPM) {
      // penguinmod automatically does this
      removeUnusedProcs();
      ext?.serialize();
    }

    // Make the extension stay by adding a dummy block
    const blocks = runtime.targets[0].blocks;
    blocks._blocks[TEMP_BLOCK_OPCODE] = {
      opcode: TEMP_BLOCK_OPCODE, id: TEMP_BLOCK_OPCODE, fields: {},
      next: null, parent: null, shadow: false, toLevel: true,
      x: undefined, y: undefined
    }
    const jsonStr = oldToJSON.apply(this, args);
    // Block IDs may have been compressed at this point
    const tempBlockId = Object.values(blocks._blocks).find(o => o.opcode === TEMP_BLOCK_OPCODE)?.id;
    if (tempBlockId) delete blocks._blocks[tempBlockId];
    return jsonStr;
  }

  const oldGetOpcode = runtime.getOpcodeFunction;
  runtime.constructor.prototype.getOpcodeFunction = function (opcode) {
    if (opcode === "procedures_call") return patchedCallFunc;
    return oldGetOpcode.call(this, opcode);
  }

  const patchedCallFunc = (args, util) => {
    // Patched Block code from:
    // https://github.com/TurboWarp/scratch-vm/blob/develop/src/blocks/scratch3_procedures.js#L28-L82
    const stackFrame = util.stackFrame;
    const isReporter = !!args.mutation.return;
    if (stackFrame.executed) {
      if (isReporter) {
        const returnValue = stackFrame.returnValue;
        const threadStackFrame = util.thread.peekStackFrame();
        threadStackFrame.params = null;
        delete stackFrame.returnValue;
        delete stackFrame.executed;
        return returnValue;
      }
      return;
    }

    const procedureCode = args.mutation.proccode;
    const isGlobal = globalBlocksCache[procedureCode];

    const paramNamesIdsAndDefaults = (isGlobal ? isGlobal.blocks : util).getProcedureParamNamesIdsAndDefaults(procedureCode);
    if (paramNamesIdsAndDefaults === null) {
      if (isReporter) return "";
      return;
    }

    const [paramNames, paramIds, paramDefaults] = paramNamesIdsAndDefaults;
    util.initParams();
    for (let i = 0; i < paramIds.length; i++) {
      if (Object.prototype.hasOwnProperty.call(args, paramIds[i])) util.pushParam(paramNames[i], args[paramIds[i]]);
      else util.pushParam(paramNames[i], paramDefaults[i]);
    }

    const addonBlock = util.runtime.getAddonBlock(procedureCode);
    if (addonBlock) {
      const result = addonBlock.callback(util.thread.getAllparams(), util);
      if (util.thread.status === 1) stackFrame.executed = true;
      return result;
    }

    stackFrame.executed = true;
    if (isReporter) {
      util.thread.peekStackFrame().waitingReporter = true;
      stackFrame.returnValue = "";
    }
    util.startProcedure({ proc: procedureCode, isGlobal });
  };

  const oldStep2Proc = runtime.sequencer.stepToProcedure;
  runtime.sequencer.constructor.prototype.stepToProcedure = function (thread, procedureCode) {
    if (procedureCode.isGlobal === undefined) oldStep2Proc.call(this, thread, procedureCode.proc);
    else {
      const target = procedureCode.isGlobal;
      const def = target.blocks.getProcedureDefinition(procedureCode.proc);
      if (!def) return;
      if (thread.isPatched === undefined) {
        // patch this function for the thread
        thread.isPatched = true;
        thread.goToNextBlock = () => {
          thread.reuseStackForNextBlock(target.blocks.getNextBlock(thread.peekStack()));
        };
      }
      const isRecursive = thread.isRecursiveCall(procedureCode.proc);
      thread.pushStack(def);
      if (thread.peekStackFrame().warpMode && thread.warpTimer.timeElapsed() > Sequencer.WARP_TIME) thread.status = Thread.STATUS_YIELD;
      else {
        const defBlock = target.blocks.getBlock(def);
        const innerBlock = target.blocks.getBlock(defBlock.inputs.custom_block.block);
        let doWarp = false;
        if (innerBlock && innerBlock.mutation) {
          const warp = innerBlock.mutation.warp;
          if (typeof warp === "boolean") doWarp = warp;
          else if (typeof warp === "string") doWarp = JSON.parse(warp);
        }
        if (doWarp) thread.peekStackFrame().warpMode = true;
        else if (isRecursive) thread.status = Thread.STATUS_YIELD;
      }
    }
  }

  // Internals
  // Remove unused procedures before saving
  function removeUnusedProcs() {
    for (const target of runtime.targets) {
      for (const proccode of Object.keys(storage[target.id] || {})) {
        if (!target.blocks.getProcedureDefinition(proccode)) delete storage[target.id][proccode];
      }
    }
  }

  // Is-in-Editor Checker
  let startedListenerWorker = false;
  function startListenerWorker() {
    refreshGlobalBlocksCache();
    if (startedListenerWorker) return;
    startedListenerWorker = false;
    if (Scratch.gui) Scratch.gui.getBlockly().then(SB => {
      const workspace = SB.mainWorkspace;
      if (!isPM) workspace.enableProcedureReturns();
      vm.on("workspaceUpdate", () => { if (!extensionRemovable) SB.Procedures.flyoutCategory(workspace) });
    });
  }

  // Custom Blocks Internals
  function storeGet(name, target = null) {
    // first check if its a global block proccode
    const globalStore = globalBlocksCache[name];
    if (globalStore !== undefined) return storage[globalStore.id]?.[name] ?? {};

    const id = (target || vm.editingTarget).id;
    return storage[id]?.[name] ?? {};
  }
  function storeDel(name, target = null) {
    const id = (target || vm.editingTarget).id;
    delete storage[id][name];
  }
  function storeSet(name, value, target = null) {
    const id = (target || vm.editingTarget).id;
    if (!storage[id]) storage[id] = {};
    storage[id][name] = value;
    runtime.SPmbpCSTOldStorage = storage;
  }

  function deserializeStorage(data) {
    if (isPM) {
      storage = data.SPmbpCST || {};
      if (Scratch.gui) Scratch.gui.getBlockly().then(SB => {
        runtime.once("PROJECT_LOADED", () => SB.Procedures.flyoutCategory(SB.mainWorkspace));
      });
    } else {
      storage = {}; // target ID's change when saving :(
      for (let i = 0; i < runtime.targets.length; i++) {
        const target = runtime.targets[i];
        const store = target.extensionStorage?.SPmbpCST;
        if (store !== undefined) storage[target.id] = { ...store };
      }
      runtime.SPmbpCSTOldStorage = storage;
      startListenerWorker();
      vm.emitWorkspaceUpdate();
      if (Scratch.gui) Scratch.gui.getBlockly().then(SB => {
        SB.Procedures.flyoutCategory(SB.mainWorkspace);
      });
    }
  }
  // use existing storage when loaded twice
  storage = runtime.SPmbpCSTOldStorage || {};
  if (!isPM) runtime.once("PROJECT_LOADED", () => deserializeStorage());

  function refreshGlobalBlocksCache() {
    globalBlocksCache = {};
    vm.globalBlocksCache = globalBlocksCache;
    for (const targetId of Object.keys(storage)) {
      const target = runtime.getTargetById(targetId);
      if (!target) continue;
      for (const proccode of Object.keys(storage[targetId])) {
        if (storage[targetId][proccode]?.global) globalBlocksCache[proccode] = target;
      }
    }
  }

  function getBlockPrototype(target, proccode) {
    for (const id in target.blocks._blocks) {
      if (!Object.prototype.hasOwnProperty.call(target.blocks._blocks, id)) continue;
      const block = target.blocks._blocks[id];
      if (block.opcode === "procedures_prototype" && block.mutation && block.mutation.proccode === proccode) {
        return block;
      }
    }
    return;
  }

  function compileProcedures(xmlList, workspace, utils) {
    xmlList = xmlList.filter(o => o.getAttribute("type") === "procedures_call");
    const returnables = isPM ? {} : utils.getAllProcedureReturnTypes(workspace);

    refreshGlobalBlocksCache();
    const globalProcs = Object.keys(globalBlocksCache);
    for (let i = xmlList.length; i--;) {
      const proc = xmlList[i].querySelector("mutation").getAttribute("proccode");
      if (globalProcs.indexOf(proc) > -1) xmlList.splice(i, 1);
    }
    proceduresXML = xmlList.map(o => o.outerHTML).join("");

    if (globalProcs.length > 0) {
      let tempList = `<sep gap="12"/><label text="Global Blocks"/><sep gap="6"/>`;
      for (const proccode of globalProcs) {
        const target = globalBlocksCache[proccode];
        if (target[targetProcData] === undefined) target[targetProcData] = {};
        if (target[targetProcData][proccode] === undefined) target[targetProcData][proccode] = {};
        const proto = getBlockPrototype(target, proccode);
        if (proto) {
          const space = target[targetProcData][proccode];
          const pure = document.createElement("block");
          pure.setAttribute("type", "procedures_call");
          pure.setAttribute("gap", "12");
          pure.innerHTML = target.blocks.mutationToXML(proto.mutation);
          if (!isPM) {
            if (space.return === undefined) space.return = returnables[proccode] ?? 0;
            else {
              if (returnables[proccode] !== undefined && space.return !== returnables[proccode])
                space.return = returnables[proccode];
            }
          }
          tempList += pure.outerHTML.replace("<mutation", `<mutation generateshadows="true" ${isPM ? "" : `return="${space.return}"`}`);
        }
      }
      tempList += `<sep gap="6"/><label text="Private Blocks"/><sep gap="6"/>`;
      proceduresXML = tempList + proceduresXML;
    }
    vm.extensionManager.refreshBlocks();
  }

  function removeExtension() {
    extensionRemovable = true;
    shouldScrollToMBP = false; // just in case
    for (const target of runtime.targets) {
      for (const block of Object.values(target.blocks._blocks)) {
        if (block.opcode.startsWith("SPmbpCST_")) deleteBlock(target, block.id);
      }
    }
    for (const key in storage) delete storage[key];
    for (const key in tempStore) delete tempStore[key];
    runtime.SPmbpCSTOldStorage = storage;
    vm.refreshWorkspace();
    alert("Save and reload the project for the extension to fully be removed.");
  }

  function deleteBlock(target, blockId) {
    if (target === vm.editingTarget && Scratch.gui) {
      Scratch.gui.getBlockly().then(SB => {
        SB.getMainWorkspace().getBlockById(blockId)?.dispose(true, false);
      });
    } else {
      target.blocks.deleteBlock(blockId);
    }
  }

  const oldinstallTargets = vm.installTargets;
  vm.installTargets = function (...args) {
    // Remove the dummy block
    if (args[0] && args[0][0]) {
      const tempBlockId = Object.values(args[0][0].blocks._blocks).find(o => o.opcode === TEMP_BLOCK_OPCODE)?.id;
      if (tempBlockId) delete args[0][0].blocks._blocks[tempBlockId];
    }
    return oldinstallTargets.apply(this, args);
  }

  class SPmbpCST {
    constructor() { }
    getInfo() {
      return {
        id: "SPmbpCST",
        name: "My Blocks+",
        color1: "#FF6680",
        menuIconURI,
        blocks: [
          {
            func: "createBlock",
            blockType: Scratch.BlockType.BUTTON,
            hideFromPalette: extensionRemovable,
            text: "Make a Block+",
          },
          {
            func: "removeExt",
            blockType: Scratch.BlockType.BUTTON,
            hideFromPalette: extensionRemovable,
            text: "Remove This Extension",
          },
          {
            opcode: "setParam",
            blockType: Scratch.BlockType.COMMAND,
            text: "set [PARAM] to [VALUE]",
            extensions: ["SPmbpCST_defineColored"],
            hideFromPalette: extensionRemovable,
            arguments: {
              PARAM: { type: Scratch.ArgumentType.STRING, menu: "procedureParamMenu" },
              VALUE: { type: Scratch.ArgumentType.STRING, defaultValue: "value" }
            },
          },
          {
            opcode: "getParam",
            blockType: Scratch.BlockType.REPORTER,
            text: "get [PARAM]",
            extensions: ["SPmbpCST_defineColored"],
            allowDropAnywhere: true,
            hideFromPalette: extensionRemovable,
            arguments: {
              PARAM: { type: Scratch.ArgumentType.STRING, defaultValue: "parameter name" }
            },
          },
          {
            blockType: Scratch.BlockType.XML,
            hideFromPalette: extensionRemovable,
            xml: `<block type="procedures_return"><value name="${isPM ? "return" : "VALUE"}"><shadow type="text"><field name="TEXT"></field></shadow></value></block>`,
          },
          "---",
          { blockType: Scratch.BlockType.XML, xml: proceduresXML, hideFromPalette: extensionRemovable }
        ],
        menus: {
          procedureParamMenu: {
            acceptReporters: false, items: "getProcedureParamMenu"
          }
        },
      };
    }

    createBlock() {
      const workspace = ScratchBlocks.mainWorkspace;
      ScratchBlocks.Procedures.createProcedureDefCallback_(workspace);
    }

    removeExt() {
      if (confirm('Remove this extension? This will remove all "set parameter" and "get parameter" blocks, as well as reset any custom block colors and extra inputs.'))
        removeExtension();
    }

    setParam(args, util) {
      const thread = util.thread;
      const param = Scratch.Cast.toString(args.PARAM);
      for (let i = thread.stackFrames.length - 1; i >= 0; i--) {
        const frame = thread.stackFrames[i];
        if (frame.params === null) continue;
        frame.params[param] = args.VALUE;
        return;
      }
      // Parameters not present. Probably a lone script or a stack-clicked define block.
      // In this case, add the params to the bottom of the stack
      // (and push the current block to it so they aren't reset for some reason)
      thread.stackFrames[0].params = { [param]: args.VALUE };
      thread.pushStack(thread.peekStack());
      // Make the bottom of the stack point to a nonexistent block so the script just ends
      // instead of running part of it again
      thread.stack[0] = "";
    }

    getParam(args, util) {
      const param = util.thread.getParam(Scratch.Cast.toString(args.PARAM));
      return param ?? "";
    }

    getProcedureParamMenu() {
      if (
        !ScratchBlocks || !ScratchBlocks.selected || ScratchBlocks.selected.isInFlyout || ScratchBlocks.selected.type !== "SPmbpCST_setParam"
      ) return ["parameter name"];
      let topBlock = ScratchBlocks.selected, parent = null;
      while ((parent = topBlock?.getParent())) {
        topBlock = parent;
      }
      if (!topBlock || !topBlock.type.startsWith("procedures_definition")) return ["(not in a define script!)"];
      const innerBlock = topBlock.getInput("custom_block")?.connection?.targetBlock();
      if (!innerBlock || !innerBlock.type == "procedures_prototype") return ["(invalid define block!)"];
      return innerBlock.displayNames_.length ? innerBlock.displayNames_ : [""];
    }

    // Storage set/get
    serialize() {
      if (isPM) {
        removeUnusedProcs();
        return { SPmbpCST: storage };
      } else {
        // target ID's change when saving :(
        runtime.extensionStorage["SPmbpCST"] = { loaded: true };
        for (const [id, procs] of Object.entries(storage)) {
          const target = runtime.getTargetById(id);
          if (!target) continue;
          target.extensionStorage["SPmbpCST"] = { ...procs };
        }
      }
    }
    deserialize(data) {
      deserializeStorage(data);
    }
  }

  ext = new SPmbpCST();
  Scratch.extensions.register(ext);
})(Scratch);
