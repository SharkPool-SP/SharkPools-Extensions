// Name: Scenes
// ID: SPscenes
// Description: Create and Load Scenes in your Project!
// By: SharkPool
// Licence: MIT

// Version V.1.0.03

(function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) throw new Error("Scenes must run unsandboxed!");

  const menuIconURI =
"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNzAuNSIgaGVpZ2h0PSIxNzAuNSIgdmlld0JveD0iMCAwIDE3MC41IDE3MC41Ij48ZyBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiPjxwYXRoIGQ9Ik0wIDg1LjI1QzAgMzguMTY4IDM4LjE2OCAwIDg1LjI1IDBzODUuMjUgMzguMTY4IDg1LjI1IDg1LjI1LTM4LjE2OCA4NS4yNS04NS4yNSA4NS4yNVMwIDEzMi4zMzIgMCA4NS4yNSIgZmlsbD0iI2IzMmIyYiIvPjxwYXRoIGQ9Ik0xMC4yNSA4NS4yNWMwLTQxLjQyMSAzMy41NzktNzUgNzUtNzVzNzUgMzMuNTc5IDc1IDc1LTMzLjU3OSA3NS03NSA3NS03NS0zMy41NzktNzUtNzUiIGZpbGw9IiNmYTNlM2UiLz48cGF0aCBkPSJNNDUuNzg1IDEwMC44MzljLTQuMjI5IDAtNy42NjQtMy40MzctNy42NjQtNy42NjZWNTIuMzU4YzAtNC4yMjkgMy40MzUtNy42NjYgNy42NjQtNy42NjZoNDkuODIzYzQuMjI5IDAgNy42NjQgMy40MzcgNy42NjQgNy42NjZ2NDAuODE1YzAgNC4yMy0zLjQzNSA3LjY2Ni03LjY2NCA3LjY2NnoiIGZpbGw9IiNmYTNlM2UiLz48cGF0aCBkPSJNMTA0LjM1IDg3LjkzdjMuMDk0YzAgNi4wMTctNC44NzcgMTAuODk1LTEwLjg5NSAxMC44OTVoLTQ4LjAxYTguNDA1IDguNDA1IDAgMCAxLTguNDAzLTguNDA3bDEzLjI5LTEzLjk5YzIuMjM0LTEuOTcyIDYuMDYxLTEuNjQ1IDcuOTc0Ljk4NWwzLjY0OCAzLjcyN2MxLjkxNCAyLjYzIDMuMDc5LjMyMiA1LjYzLTEuNjVMODEuMjQ3IDY1LjAxYTUuMjg3IDUuMjg3IDAgMCAxIDcuMzM3LjMzMmwxNS40NDUgMjIuNTg3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMDQuMzUgNTIuNzA3djM5LjA2YTkuNjE1IDkuNjE1IDAgMCAxLTkuNjIgOS42Mkg0Ni42NTdhOS42MTUgOS42MTUgMCAwIDEtOS42MTUtOS42MnYtMzguNDZhOS42MTQgOS42MTQgMCAwIDEgOS42MTUtOS42MTRoNDguMzM3YzkuMjYyLS4wMzcgOS4zNTEgOS4wMTQgOS4zNTEgOS4wMTR6IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNOTUuNTgxIDEwMS4wNzdhNy42NTcgNy42NTcgMCAwIDAgNy42NTctNy42NTdWNTIuNjQ3YTcuNjU3IDcuNjU3IDAgMCAwLTcuNjU3LTcuNjU3aC00OS43N2E3LjY1NyA3LjY1NyAwIDAgMC03LjY1NiA3LjY1N1Y5My40MmE3LjY1NyA3LjY1NyAwIDAgMCA3LjY1NyA3LjY1N3ptLTUwLjk5OCAxLjM4NWE4LjAzNSA4LjAzNSAwIDAgMS04LjAzNS04LjAzNVY1MS42NGE4LjAzNSA4LjAzNSAwIDAgMSA4LjAzNS04LjAzNUg5Ni44MWE4LjAzNSA4LjAzNSAwIDAgMSA4LjAzNSA4LjAzNXY0Mi43ODdhOC4wMzUgOC4wMzUgMCAwIDEtOC4wMzUgOC4wMzV6IiBmaWxsPSIjZmZmIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMyIvPjxwYXRoIGQ9Ik03NC44OTIgMTI1LjI3MmMtNC4yMjkgMC03LjY2NC0zLjQzNy03LjY2NC03LjY2NVY3Ni43OWMwLTQuMjI5IDMuNDM1LTcuNjY2IDcuNjY0LTcuNjY2aDQ5LjgyM2M0LjIyOSAwIDcuNjY0IDMuNDM3IDcuNjY0IDcuNjY2djQwLjgxNmMwIDQuMjI4LTMuNDM1IDcuNjY1LTcuNjY0IDcuNjY1eiIgZmlsbD0iI2ZhM2UzZSIvPjxwYXRoIGQ9Ik0xMzMuNDU4IDExMi4zNjN2My4wOTRjMCA2LjAxNy00Ljg3OCAxMC44OTUtMTAuODk2IDEwLjg5NWgtNDguMDFhOC40MDUgOC40MDUgMCAwIDEtOC40MDMtOC40MDdsMTMuMjg5LTEzLjk5YzIuMjM1LTEuOTcxIDYuMDYyLTEuNjQ1IDcuOTc1Ljk4NmwzLjY0OCAzLjcyNmMxLjkxNCAyLjYzIDMuMDc5LjMyMiA1LjYzLTEuNjVsMTMuNjYzLTE3LjU3NGE1LjI4NyA1LjI4NyAwIDAgMSA3LjMzNy4zMzJsMTUuNDQ1IDIyLjU4OHoiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNMTMzLjQ1OCA3Ny4xNHYzOS4wNmE5LjYxNSA5LjYxNSAwIDAgMS05LjYyIDkuNjJINzUuNzY0YTkuNjE1IDkuNjE1IDAgMCAxLTkuNjE1LTkuNjJWNzcuNzQxYzAtNS4zMDggNC4zMDItOS42MTUgOS42MTUtOS42MTVoNDguMzM3YzkuMjYyLS4wMzcgOS4zNTEgOS4wMTQgOS4zNTEgOS4wMTR6IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNMTI0LjY4OCAxMjUuNTFhNy42NTcgNy42NTcgMCAwIDAgNy42NTctNy42NTdWNzcuMDhhNy42NTcgNy42NTcgMCAwIDAtNy42NTctNy42NTdoLTQ5Ljc3YTcuNjU3IDcuNjU3IDAgMCAwLTcuNjU2IDcuNjU3djQwLjc3M2E3LjY1NyA3LjY1NyAwIDAgMCA3LjY1NyA3LjY1N3ptLTUwLjk5OCAxLjM4NWE4LjAzNSA4LjAzNSAwIDAgMS04LjAzNS04LjAzNVY3Ni4wNzNhOC4wMzUgOC4wMzUgMCAwIDEgOC4wMzUtOC4wMzVoNTIuMjI3YTguMDM1IDguMDM1IDAgMCAxIDguMDM1IDguMDM1djQyLjc4N2E4LjAzNSA4LjAzNSAwIDAgMS04LjAzNSA4LjAzNXoiIGZpbGw9IiNmZmYiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIzIi8+PC9nPjwvc3ZnPg==";

  const sceneSVG =
`<svg xmlns="http://www.w3.org/2000/svg" width="18.331" height="18.331" viewBox="0 0 18.331 18.331"><g stroke-miterlimit="10"><path d="M15.55 12.085v.587a2.067 2.067 0 0 1-2.067 2.067H4.375c-.88 0-1.594-.714-1.594-1.595h0l2.521-2.654c.424-.374 1.15-.312 1.513.187l.692.707c.363.499.584.061 1.068-.313l2.592-3.334a1.003 1.003 0 0 1 1.392.063l2.93 4.285z" fill="#COLOR" stroke="#COLOR" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M15.55 5.403v7.41a1.824 1.824 0 0 1-1.825 1.825h-9.12a1.824 1.824 0 0 1-1.824-1.825V5.517c0-1.007.816-1.824 1.824-1.824h9.17c1.757-.007 1.774 1.71 1.774 1.71z" fill="none" stroke="#COLOR" stroke-width="1.5" stroke-linecap="round"/><path d="M0 18.331V0h18.331v18.331z" fill="none"/></g></svg>`;
  const defaultSceneThumb =
"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI0ODAuMDAwMDEiIGhlaWdodD0iMzYwIiB2aWV3Qm94PSIwLDAsNDgwLjAwMDAxLDM2MCI+PGcgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIj48cGF0aCBkPSJNMCwzNjB2LTM2MGg0ODB2MzYweiIgZmlsbD0iIzlhOWE5YSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiLz48cGF0aCBkPSJNMCwzNjBsMC4yMTAyNiwtNTAuMjE4MWwxMjEuNDIwMzcsLTEzNi41OTU3MWw3OS4yMDMwNyw2NC42NzMzNWwxNDQuNzAzMTEsLTE1MC40OTA1bDEzNC4yMzc4MiwxNDMuNzYzNzRsMC4yMjUzOCwxMjguODY3MjJ6IiBmaWxsPSIjNGU0ZTRlIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIvPjxwYXRoIGQ9Ik0yNS41NDA1NCw3OS44NzY1NmMwLC0zMC4yNjc4NiAyNC41MzY5NCwtNTQuODA0OCA1NC44MDQ4LC01NC44MDQ4YzMwLjI2Nzg2LDAgNTQuODA0ODEsMjQuNTM2OTQgNTQuODA0ODEsNTQuODA0OGMwLDMwLjI2Nzg2IC0yNC41MzY5NSw1NC44MDQ4MSAtNTQuODA0OCw1NC44MDQ4MWMtMzAuMjY3ODYsMCAtNTQuODA0OCwtMjQuNTM2OTUgLTU0LjgwNDgsLTU0LjgwNDgxeiIgZmlsbD0iIzRlNGU0ZSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiLz48ZyBmaWxsPSJub25lIiBzdHJva2U9IiM5YTlhOWEiIHN0cm9rZS13aWR0aD0iMjIuNSI+PHBhdGggZD0iTTI1NC44MzE2LDIwMS41MDE3NGMxMi42NTE2OCwxMi42NTE2OCA2My40NDUwNSw2My40NDUwNSA2My40NDUwNSw2My40NDUwNWMyLjI5NzkxLDIuMjk3OTEgMi4yOTc5MSw2LjAzMDE3IDAsOC4zMjgwOGMtMS4xNTEzNSwxLjE0NjU1IC0yLjY1NzcxLDEuNzI3MDEgLTQuMTY0MDUsMS43MjcwMWgwLjAwMDAyYy0xLjUwNjM2LDAgLTMuMDEyNzEsLTAuNTc1NjYgLTQuMTY0MDUsLTEuNzIyMjFjMCwwIC01MS45MTAwNCwtNTEuOTExNzQgLTY0LjExMzA3LC02NC4xMTUxNyIvPjxwYXRoIGQ9Ik0yOTUuNDYwNzksMjE4LjM5NjI5YzAsMTcuODg5MDggLTE0LjUwNjk4LDMyLjM5NjA0IC0zMi4zOTYwNCwzMi4zOTYwNGMtMTYuNjE2LDAgLTMwLjMxLC0xMi41MTU2NSAtMzIuMTc0OTIsLTI4LjYzMjE5Yy0wLjAxMjMyLC0wLjEwNjQzIDEuNTc1NTgsLTEwLjY3ODY0IDAuNzkyMzgsLTExLjUwMzAzYy0wLjgxNzk3LC0wLjg2MDk4IC00LjAwNjY5LDguMDI1NjYgLTMuOTI5MTMsNy45NzI4NGM0LjE0OTc2LC0yLjgyNjEyIDE2LjU2NDI4LC0xMS45ODkwMyAyMi40MzI4MiwtMTcuNzg1NDVjNi45MTk0MywtNi44MzQ0IDE0LjEzMjE5LC0xOC44MDk1NiAxNC4xNzgwMiwtMTguNjQyNjNjMC4wNzk2NiwwLjI5MDE5IC0xLjQ5NDc0LDIuNDc0OTQgLTAuOTEzOTIsMy40NjcxM2MwLjU5MTE4LDEuMDA5ODggMy4yNjA2NSwwLjUzNzYzIDMuNTU1MzEsMC41NzMzOGMxNi4wMzEyMywxLjk0NDc5IDI4LjQ1NTQ5LDE1LjYwMzEzIDI4LjQ1NTQ5LDMyLjE1MzkxeiIvPjwvZz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSI+PHBhdGggZD0iTTMwOS45NDg1NywyNzMuMjc5NjdjMCwwIC02MC41OTI4MSwtNjAuNTk0OCAtNjkuOTQ2MzEsLTY5Ljk0ODZjLTIuMzQ2OTQsLTIuMzQ3MDIgNC44MDcwNywtMTEuODUxNiA2LjY2MjY3LC05Ljk5NmM4LjUyOTk2LDguNTI5OTYgNzEuNjExNzIsNzEuNjExNzIgNzEuNjExNzIsNzEuNjExNzJjMi4yOTc5MSwyLjI5NzkxIDIuMjk3OTEsNi4wMzAxNyAwLDguMzI4MDhjLTEuMTUxMzQsMS4xNDY1NSAtMi42NTc3LDEuNzI3MDEgLTQuMTY0MDMsMS43MjcwMWgtMC4wMDAwMmMtMS41MDYzNSwwIC0zLjAxMjY5LC0wLjU3NTY3IC00LjE2NDAzLC0xLjcyMjIxeiIgZmlsbD0iIzRlNGU0ZSIvPjxwYXRoIGQ9IiIgZmlsbD0iIzVkM2U5YiIvPjxwYXRoIGQ9IiIgZmlsbD0iIzVkM2U5YiIvPjxwYXRoIGQ9IiIgZmlsbD0iIzVkM2U5YiIvPjxwYXRoIGQ9Ik0yNTkuMjYwNzUsMTkwLjE3OTUyYy0zLjkxOTM2LDE2LjU5ODI0IC0xOS45NTkxMywyNy4xNzEyOSAtMzYuNTMyODUsMjQuNTU5MzVjMC44MDA3MywtMS4xMzgxNSAzNi43OTE5MywtMzguNDAzODMgMzYuOTg1NjUsLTM3LjIxOTI4YzAuNjY4NzQsNC4wODkzNSAwLjU1ODg0LDguMzc1NzMgLTAuNDUyOCwxMi42NTk5M3oiIGZpbGw9IiM0ZTRlNGUiLz48cGF0aCBkPSIiIGZpbGw9IiM1ZDNlOWIiLz48cGF0aCBkPSJNMjk1LjQ2MDc5LDIxOC4wNjI5NWMwLDE3Ljg4OTA4IC0xNC41MDY5OCwzMi4zOTYwNCAtMzIuMzk2MDQsMzIuMzk2MDRjLTE3Ljg4OTA4LDAgLTMyLjM5MTI2LC0xNC41MDY5OCAtMzIuMzkxMjYsLTMyLjM5NjA0YzAsLTE3Ljg4OTA4IDE0LjUwMjE4LC0zMi4zOTEyNiAzMi4zOTEyNiwtMzIuMzkxMjZjMTcuODg5MDgsMCAzMi4zOTYwNCwxNC41MDY5OCAzMi4zOTYwNCwzMi4zOTEyNnoiIGZpbGw9IiM0ZTRlNGUiLz48L2c+PGcgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNGU0ZTRlIiBzdHJva2Utd2lkdGg9IjIyLjUiPjxwYXRoIGQ9Ik0yNDEuMDIxNDUsMjA0LjM1MDNsLTc4LjA2NjM5LC03OC4wNjg5NGMtMi4yOTc5MSwtMi4yOTc5MSAtMi4yOTc5MSwtNi4wMzAxNyAwLC04LjMyODA4YzIuMjk3OTEsLTIuMjk3OTEgNi4wMzAxNywtMi4yOTc5MSA4LjMyODA4LDBsNzcuNjUwOTQsNzcuNjUwOTQiLz48cGF0aCBkPSJNMjI0Ljc4MjQzLDE0Ny4zODkzOGMwLDE3Ljg4OTA4IC0xNC41MDIxOCwzMi4zOTEyNiAtMzIuMzkxMjYsMzIuMzkxMjZjLTE3Ljg4OTA4LDAgLTMyLjM5MTI2LC0xNC41MDIxOCAtMzIuMzkxMjYsLTMyLjM5MTI2YzAsLTE3Ljg4OTA4IDE0LjUwMjE4LC0zMi4zOTEyNiAzMi4zOTEyNiwtMzIuMzkxMjZjMTcuODg5MDgsMCAzMi4zOTEyNiwxNC41MDIxOCAzMi4zOTEyNiwzMi4zOTEyNnoiLz48cGF0aCBkPSJNMjIwLjI5MjU0LDIxNC4yNTk5M2MtMTcuNDEwNCwtNC4xMTExNCAtMjguMTkxNTUsLTIxLjU1NzgxIC0yNC4wODAzOSwtMzguOTY4MmM0LjExMTE0LC0xNy40MTA0IDIxLjU1NzgxLC0yOC4xOTE1NSAzOC45NjgxOSwtMjQuMDgwMzljMTIuMzM3MzUsMi45MTMyMyAyMS4zNDU4NywxMi41MjI3OSAyNC4wODUzNSwyNC4wNzA2Ii8+PHBhdGggZD0iTTIzMC45MzIxMywyMTMuOTUwMTZjMS41NjQyNSwtMTIuMzQ0MzUgMTAuMDc2MjQsLTIyLjUyMjA0IDIxLjQ5MzY0LC0yNi40OTA3NCIvPjwvZz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSI+PHBhdGggZD0iTTE2Mi45NTUwNSwxMjYuMjgxMzVjLTIuMjk3OTEsLTIuMjk3OTEgLTIuMjk3OTEsLTYuMDMwMTcgMCwtOC4zMjgwOGMyLjI5NzkxLC0yLjI5NzkxIDYuMDMwMTcsLTIuMjk3OTEgOC4zMjgwOCwwYzAsMCA2MC4zNDU4NSw2MC4zNDU4NSA3MS4yODE4LDcxLjI4MThjMy4yNjg5NSwzLjI2ODk1IC00Ljk4MzYsMTEuNjc0OTkgLTguNTI5MjMsOC4xMjkyNWMtMTEuMzA5OTksLTExLjMxMDM2IC03MS4wODA2NSwtNzEuMDgyOTcgLTcxLjA4MDY1LC03MS4wODI5N3oiIGZpbGw9IiM5YTlhOWEiLz48cGF0aCBkPSIiIGZpbGw9IiM5OTY2ZmYiLz48cGF0aCBkPSJNMjI0Ljc4MjQzLDE0Ny4zODkzOGMwLDE3Ljg4OTA4IC0xNC41MDIxOCwzMi4zOTEyNiAtMzIuMzkxMjYsMzIuMzkxMjZjLTE3Ljg4OTA4LDAgLTMyLjM5MTI2LC0xNC41MDIxOCAtMzIuMzkxMjYsLTMyLjM5MTI2YzAsLTE3Ljg4OTA4IDE0LjUwMjE4LC0zMi4zOTEyNiAzMi4zOTEyNiwtMzIuMzkxMjZjMTcuODg5MDgsMCAzMi4zOTEyNiwxNC41MDIxOCAzMi4zOTEyNiwzMi4zOTEyNnoiIGZpbGw9IiM5YTlhOWEiLz48cGF0aCBkPSJNMjIwLjI5MjU1LDIxNC4yNTk5MmMtMTcuNDEwNCwtNC4xMTExNCAtMjguMTkxNTUsLTIxLjU1NzgxIC0yNC4wODA0LC0zOC45NjgyYzQuMTExMTQsLTE3LjQxMDQgMjEuNTU3ODEsLTI4LjE5MTU1IDM4Ljk2ODIsLTI0LjA4MDRjMTMuNTk2NzEsMy4yMTA2IDIzLjE1MDMyLDE0LjU1NDM5IDI0LjcyNTE4LDI3LjY2MjQ0Yy0yLjg1NzYzLDIuNDkyODIgLTM0LjgwODQ4LDM2LjIyMjYgLTM2Ljk1NjI5LDM1Ljg5OTIyYy0wLjg4NDQ5LC0wLjEzMzE3IC0xLjc3MDYzLC0wLjMwMzgzIC0yLjY1NjY5LC0wLjUxMzA2eiIgZmlsbD0iIzlhOWE5YSIvPjxwYXRoIGQ9IiIgZmlsbD0iIzk5NjZmZiIvPjwvZz48L2c+PC9zdmc+";

  const vm = Scratch.vm;
  const runtime = vm.runtime;
  const render = vm.renderer;
  const isPM = Scratch.extensions.isPenguinMod;
  const isEditor = typeof scaffolding === "undefined";

  let thisScene = "";
  let scenes = {};
  let sceneThumbs = {};

  // custom GUI
  let guiElements = {};

  function openModal(titleName, func) {
    // in a Button Context, ScratchBlocks always exists
    ScratchBlocks.prompt(
      titleName,
      "",
      (value) => func(value),
      "Scene Manager",
      "broadcast_msg"
    );
  }

  function attachTab() {
    const tabs = document.querySelectorAll(`li[class*="react-tabs_react-tabs__tab"]`);
    const lastTab = tabs[tabs.length - 1];
    const cloneTab = lastTab.cloneNode(true);
    lastTab.insertAdjacentElement("afterend", cloneTab);

    const childs = isPM ? cloneTab.firstChild.children : cloneTab.children;
    childs[0].src = constructTabIMG();
    childs[1].textContent = "Scenes";
    guiElements["cloneTab"] = { cloneTab, img: childs[0] };
    cloneTab.setAttribute("style", "display: flex; justify-content: center; align-items: center;");
    cloneTab.addEventListener("click", (e) => {
      ReduxStore.dispatch({
        type: "scratch-gui/navigation/ACTIVATE_TAB", activeTabIndex: -1
      });
      e.stopPropagation();
    });
  }

  function startListenerWorker() {
    const checkInEditor = () => !ReduxStore.getState().scratchGui.mode.isPlayerOnly;
    let inEditor = checkInEditor();
    if (inEditor) attachTab();
    ReduxStore.subscribe(() => {
      const currentlyInEditor = checkInEditor();
      if (inEditor !== currentlyInEditor) {
        inEditor = currentlyInEditor;
        if (inEditor) vm.once("workspaceUpdate", () => attachTab());
      }
      if (currentlyInEditor) {
        if (guiElements["cloneTab"]) {
          const thisTab = ReduxStore.getState().scratchGui.editorTab.activeTabIndex;
          const tabImg = guiElements["cloneTab"].img;
          tabImg.src = constructTabIMG();
          if (thisTab === -1) {
            guiElements["cloneTab"].cloneTab.style.height = "calc(100% - 15%)";
            tabImg.style.filter = "saturate(1)";
            guiElements["manager"]?.remove();
            openSceneTab();
          } else {
            guiElements["cloneTab"].cloneTab.style.height = "calc(100% - 20%)";
            tabImg.style.filter = "";
            guiElements["manager"]?.remove();
            delete guiElements["manager"];
          }
        }
      }
    });
  }
  if (isEditor) startListenerWorker();

  function openSceneTab() {
    const theme = {
      main: isPM ? "#00c3ff" : document.documentElement.style.getPropertyValue("--looks-secondary") || "#ff4c4c",
      fade: isPM ? "hsla(194,100%,50%,0.35)" : document.documentElement.style.getPropertyValue("--looks-transparent") || "#ff4d4d59"
    };

    const container = document.createElement("div");
    container.classList.add("scene-manager");
    container.setAttribute("style", "height: 95%;");

    const inner = document.createElement("div");
    inner.classList.add("manager-inner");
    inner.setAttribute("style", "height: 100%; overflow-y: auto; margin: 0 15px 15px 15px; display: flex; flex-wrap: wrap; align-content: flex-start; align-items: stretch; border: grey solid 1px; border-radius: 0 10px 10px 0;");
    Object.entries(sceneThumbs).forEach((item) => inner.appendChild(genGUIThumb(item, theme)));

    container.appendChild(inner);
    const guiSpace = document.querySelector(`div[class^="gui_tabs_"]`).firstChild;
    guiSpace.insertAdjacentElement("afterend", container);
    guiElements["manager"] = container;
  }

  function constructTabIMG() {
    const theme = isPM ? "#00c3ff" : document.documentElement.style.getPropertyValue("--looks-secondary") || "#ff4c4c";
    return `data:image/svg+xml;base64,${btoa(sceneSVG.replaceAll("#COLOR", theme))}`;
  }

  function genGUIThumb(sceneInfo, theme) {
    const thumbDiv = document.createElement("div");
    if (thisScene === sceneInfo[0]) {
      thumbDiv.setAttribute("style", `width: 22.5%; height: max-content; padding: 4px; margin: 1.2%; background: ${theme.main}; border-radius: 15px; cursor: pointer; transition: box-shadow 200ms ease-in-out;`);
      thumbDiv.style.boxShadow = `${theme.fade} 0px 0px 0px 5px`;
    } else {
      thumbDiv.setAttribute("style", `width: 22.5%; height: max-content; padding: 4px; margin: 1.2%; border: solid grey 2px; border-radius: 15px; cursor: pointer; transition: box-shadow 200ms ease-in-out;`);
    }

    const thumbImg = document.createElement("img");
    thumbImg.setAttribute("style", "border-radius: 10px 10px 0 0; width: 100%;");
    thumbImg.src = sceneInfo[1].img;
    thumbDiv.appendChild(thumbImg);

    const title = document.createElement("div");
    title.setAttribute("style", "width: 100%; padding: 0 5px 5px 5px; text-align: center; text-overflow: ellipsis; white-space: nowrap; overflow: hidden;");
    title.textContent = sceneInfo[0];

    thumbDiv.addEventListener("mouseleave", () => { thumbDiv.style.boxShadow = "" });
    thumbDiv.addEventListener("mouseenter", () => { thumbDiv.style.boxShadow = `${theme.fade} 0px 0px 0px 5px` });
    thumbDiv.addEventListener("click", (e) => {
      runtime.getOpcodeFunction("SPscenes_switchScene")({ NAME: sceneInfo[0] });
      if (sceneInfo[1].isDefault) runtime.once("BEFORE_EXECUTE", async () => {
        sceneInfo[1].isDefault = false;
        sceneInfo[1].img = await new Promise((resolve) => {
          render.requestSnapshot((uri) => {
            thumbImg.src = uri;
            resolve(uri);
          });
        });
      });
      e.stopPropagation();
    });
    thumbDiv.append(thumbImg, title);
    return thumbDiv;
  }

  // Turbowarp Storage
  if (!isPM) {
    runtime.on("PROJECT_LOADED", () => {
      const stored = runtime.extensionStorage["SPscenes"];
      if (stored) {
        scenes = stored.scenes;
        if (isEditor) Object.keys(scenes).forEach((name) => {
          sceneThumbs[name] = { isDefault: true, img: defaultSceneThumb };
        });
      }
    });
  }

  class SPscenes {
    getInfo() {
      return {
        id: "SPscenes",
        name: "Scenes",
        color1: "#fa3e3e",
        color2: "#d43333",
        color3: "#b32b2b",
        menuIconURI,
        blocks: [
          {
            func: "createBtn",
            blockType: Scratch.BlockType.BUTTON,
            text: "Make a Scene"
          },
          {
            func: "deleteBtn",
            blockType: Scratch.BlockType.BUTTON,
            text: "Remove a Scene"
          },
          "---",
          {
            opcode: "createScene",
            blockType: Scratch.BlockType.COMMAND,
            text: "create new scene named [NAME]",
            arguments: {
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "scene-1" }
            },
          },
          {
            opcode: "deleteScene",
            blockType: Scratch.BlockType.COMMAND,
            text: "remove scene named [NAME]",
            arguments: {
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "scene-1" }
            },
          },
          {
            opcode: "deleteAll",
            blockType: Scratch.BlockType.COMMAND,
            text: "remove all scenes",
          },
          {
            opcode: "allScenes",
            blockType: Scratch.BlockType.REPORTER,
            text: "all scenes"
          },
          "---",
          {
            opcode: "whenSceneSwitch",
            blockType: Scratch.BlockType.EVENT,
            isEdgeActivated: false,
            text: "when scene switches to [NAME]",
            arguments: {
              NAME: { type: Scratch.ArgumentType.STRING, menu: "SCENES_ALL" }
            },
          },
          {
            opcode: "currentScene",
            blockType: Scratch.BlockType.REPORTER,
            text: "current scene",
          },
          {
            opcode: "switchScene",
            blockType: Scratch.BlockType.COMMAND,
            text: "switch to scene [NAME]",
            arguments: {
              NAME: { type: Scratch.ArgumentType.STRING, menu: "SCENES" }
            },
          },
          {
            opcode: "updateScene",
            blockType: Scratch.BlockType.COMMAND,
            text: "update contents of scene [NAME]",
            arguments: {
              NAME: { type: Scratch.ArgumentType.STRING, menu: "SCENES" }
            },
          }
        ],
        menus: {
          SCENES_ALL: { acceptReporters: false, items: "getScenesAll" },
          SCENES: { acceptReporters: true, items: "getScenes" }
        },
      };
    }

    // Helper Funcs
    getScenes() {
      const sceneList = Object.keys(scenes);
      return sceneList.length > 0 ? sceneList : ["create a scene!"];
    }

    getScenesAll() {
      const sceneList = [
        { text: "any", value: "_any_" },
        ...Object.keys(scenes)
      ];
      return sceneList;
    }

    createBtn() {
      openModal("New Scene name:", async (name) =>{
        if (name) {
          scenes[name] = this.convert2Scene();
          sceneThumbs[name] = { isDefault: false, img: "" };
          sceneThumbs[name].img = await new Promise((resolve) => {
            render.requestSnapshot((uri) => { resolve(uri) });
          });
          this.refreshBlocks(true);
        }
      });
    }

    deleteBtn() {
      openModal("Remove Scene named:", (name) =>{
        if (name) {
          delete scenes[name];
          delete sceneThumbs[name];
          this.refreshBlocks(true);
        }
      });
    }

    refreshBlocks(optSaveStorage) {
      if (isEditor) {
        runtime.once("BEFORE_EXECUTE", () => { runtime.requestBlocksUpdate() });
        if (optSaveStorage && !isPM) runtime.extensionStorage["SPscenes"] = { scenes };
      }
    }

    convert2Scene() {
      // encode scene data
      const sceneData = { targets: {}, extra: {} };
      for (let i = 0; i < runtime.targets.length; i++) {
        const target = runtime.targets[i];
        const realId = isPM ? target.id : target.extensionStorage["SPscenes"]?.ogID || target.id;
        const cloneOrigin = target.sprite.clones[0];

        // Turbowarp doesnt use the same target ID every project load :(
        if (!isPM && !target.extensionStorage["SPscenes"]) target.extensionStorage["SPscenes"] = { ogID: realId };

        const safeVars = [];
        Object.values(target.variables).map((vari) => {
          if (!vari.isCloud) safeVars.push([vari.id, vari.value]);
        });
        sceneData.targets[realId] = {
          x: target.x, y: target.y,
          rotation: target.rotationStyle,
          direction: target.direction,
          drag: target.draggable,
          size: target.size,

          effects: structuredClone(target.effects),
          visible: target.visible,
          costume: target.currentCostume,
          vars: safeVars,

          tempo: target.tempo,
          isStage: target.isStage,
          isOg: target.isOriginal,
          ogID: isPM ? cloneOrigin.id : cloneOrigin.extensionStorage["SPscenes"]?.ogID || cloneOrigin.id,
          penData: structuredClone(target._customState["Scratch.pen"]) || {},
          extStore: target.extensionStorage || {}
        };
      }

      if (runtime.ext_videoSensing !== undefined) {
        sceneData.extra.videoSensing = {
          isOn: runtime.ext_videoSensing.globalVideoState,
          ghost: runtime.ext_videoSensing.globalVideoTransparency
        };
      }
      if (runtime.ext_pen !== undefined) {
        const penSource = render._allDrawables[runtime.ext_pen._penDrawableId];
        const penSkin = penSource?.skin;
        if (penSkin) {
          const effects = structuredClone(penSource._uniforms);
          delete effects.u_silhouetteColor;
          delete effects.u_modelMatrix;
          sceneData.extra.penData = {
            visible: penSource._visible, effects,
            direction: penSource._direction,
            size: [penSource._scale[0], penSource._scale[1]],
            pos: [penSource._position[0], penSource._position[1]]
            // pen attributes is sprite-based and is stored in target storage
          };
        }
      }

      // save some runtime options
      sceneData.extra.runtimeOpts = {
        turbomode: runtime.turboMode,
        interpolate: runtime.interpolationEnabled,
        fence: runtime.runtimeOptions.fencing,
        miscLim: runtime.runtimeOptions.miscLimits,
        highQuality: render.useHighQualityRender,
        fps: runtime.frameLoop.framerate,
        dimensions: [runtime.stageWidth, runtime.stageHeight]
      };

      if (!isPM) {
        const cleanStorage = structuredClone(runtime.extensionStorage);
        delete cleanStorage["SPscenes"];
        sceneData.extra.extData = cleanStorage;

        // save to storage
        runtime.extensionStorage["SPscenes"] = { scenes };
      }
      return sceneData;
    }

    switch2Scene(name, sceneData) {
      // required to not delete real data
      sceneData = structuredClone(sceneData);
      thisScene = name;

      let penSource, penSkin;
      if (runtime.ext_pen !== undefined) {
        penSource = render._allDrawables[runtime.ext_pen._penDrawableId];
        penSkin = penSource?.skin;
      }

      // decode Sprite data
      const cloneHandler = (ogID) => {
        const cloneTarget = isPM ? runtime.getTargetById(ogID) :
          runtime.targets.find((t) => { return t.extensionStorage["SPscenes"]?.ogID === ogID });
        if (cloneTarget === undefined) return undefined;
        const clone = cloneTarget.makeClone();
        if (clone) {
          runtime.addTarget(clone);
          clone.goBehindOther(cloneTarget);
        }
        return clone || undefined;
      };
      const applyData = (target, data) => {
        target.x = data.x;
        target.y = data.y;
        target.rotationStyle = data.rotation;
        target.direction = data.direction;
        target.draggable = data.drag;
        target.size = data.size;
        target.effects = data.effects;
        target.visible = data.visible;
        target.currentCostume = data.costume;
        data.vars.forEach((item) => { target.variables[item[0]].value = item[1] });
        target.tempo = data.tempo;
        target.extensionStorage = data.extStore;

        target.updateAllDrawableProperties();
        if (data.penData.penDown !== undefined) penHandler(target, data.penData);
      };
      const penHandler = (target, penData) => {
        const penCtx = runtime.ext_pen;
        const colorConvert = (r, g, b, a) => {
          const red = Math.round(r * 255);
          const green = Math.round(g * 255);
          const blue = Math.round(b * 255);
          const alpha = Math.round(a * 255);
          return (alpha << 24) | (red << 16) | (green << 8) | blue;
        }

        if (penData.penDown) penCtx.penDown({}, { target });
        else penCtx.penUp({}, { target });
        penCtx.setPenSizeTo({ SIZE: penData.penAttributes.diameter }, { target });

        penCtx.setPenColorToColor({ COLOR: colorConvert(...penData.penAttributes.color4f) }, { target });
        penCtx.setPenColorParamTo({ COLOR_PARAM: "color", VALUE: penData.color }, { target });
        penCtx.setPenColorParamTo({ COLOR_PARAM: "saturation", VALUE: penData.saturation }, { target });
        penCtx.setPenColorParamTo({ COLOR_PARAM: "brightness", VALUE: penData.brightness }, { target });
        penCtx.setPenColorParamTo({ COLOR_PARAM: "transparency", VALUE: penData.transparency }, { target });
      };

      // iterate through each target and apply data
      // if there isnt any, remove extra sprites (delete clones vs hide normal sprites)
      const targetData = sceneData.targets;
      for (let i = runtime.targets.length; i--;) {
        const target = runtime.targets[i];
        // Turbowarp doesnt use the same target ID every project load :(
        const realId = isPM ? target.id : target.extensionStorage["SPscenes"]?.ogID || target.id;
        const data = targetData[realId];
        if (data === undefined) {
          if (target.isOriginal) target.setVisible(false);
          else {
            runtime.disposeTarget(target);
            runtime.stopForTarget(target);
          }
          continue;
        }
        applyData(target, data);
        delete targetData[realId];
      }
      Object.entries(targetData).forEach((item) => {
        const data = item[1];
        let target;
        if (!data.isOg) target = cloneHandler(data.ogID);
        else if (data.isStage) target = runtime.getTargetForStage();
        else target = runtime.getTargetById(item[0]);

        // shouldnt happen, but just in case
        if (target !== undefined) applyData(target, data);
      });

      // decode Extra data
      const extras = sceneData.extra;
      const videoSensing = runtime.ext_videoSensing;
      if (videoSensing !== undefined) {
        if (extras.videoSensing.isOn) runtime.ioDevices.video.enableVideo();
        else runtime.ioDevices.video.disableVideo();
        videoSensing.setVideoTransparency(extras.videoSensing.ghost);
      }
      if (penSource !== undefined) {
        penSource.updateProperties({
          position: extras.penData.pos,
          direction: extras.penData.direction,
          scale: extras.penData.size,
          visible: extras.penData.visible,
        });

        Object.entries(extras.penData.effects).forEach((att) => {
          penSource._uniforms[att[0]] = [att[1]];
        });
        render.dirty = true;
        penSource.setConvexHullDirty();
      }

      const runtimeOpts = extras.runtimeOpts;
      render.setUseHighQualityRender(runtimeOpts.highQuality);
      vm.setTurboMode(runtimeOpts.turbomode);
      vm.setInterpolation(runtimeOpts.interpolate);
      vm.setFramerate(runtimeOpts.fps);
      vm.setStageSize(runtimeOpts.dimensions[0], runtimeOpts.dimensions[1]);
      vm.setRuntimeOptions({ fencing: runtimeOpts.fence });

      if (!isPM) {
        runtime.extensionStorage = sceneData.extra.extData;
        // do this to prevent repetition in the json
        runtime.extensionStorage["SPscenes"] = { scenes };
      }

      runtime.startHats("SPscenes_whenSceneSwitch", { NAME: thisScene });
      runtime.startHats("SPscenes_whenSceneSwitch", { NAME: "_any_" });
    }

    // Block Funcs
    createScene(args) {
      const name = Scratch.Cast.toString(args.NAME);
      if (scenes[name] === undefined) {
        scenes[name] = this.convert2Scene();
        if (isEditor) sceneThumbs[name] = { isDefault: true, img: defaultSceneThumb };
        this.refreshBlocks();
      }
    }

    deleteScene(args) {
      const name = Scratch.Cast.toString(args.NAME);
      delete scenes[name];
      if (isEditor) delete sceneThumbs[name];
      if (thisScene === name) thisScene = "";
      this.refreshBlocks(true);
    }

    deleteAll() {
      scenes = {};
      sceneThumbs = {};
      this.refreshBlocks(true);
    }

    allScenes() { return JSON.stringify(Object.keys(scenes)) }

    currentScene() { return thisScene }

    switchScene(args) {
      const name = Scratch.Cast.toString(args.NAME);
      if (scenes[name] === undefined) alert(`SPscenes -- Scene named: ${name} does not exist!`);
      else this.switch2Scene(name, scenes[name]);
    }

    updateScene(args) {
      const name = Scratch.Cast.toString(args.NAME);
      if (scenes[name] === undefined) alert(`SPscenes -- Scene named: ${name} does not exist!`);
      else {
        scenes[name] = this.convert2Scene();
        if (isEditor) {
          this.refreshBlocks(true);
          sceneThumbs[name] = { isDefault: true, img: defaultSceneThumb };
        }
      }
    }

    // PenguinMod Storage
    serialize() {
      return { SPscenes: { scenes } };
    }
    deserialize(data) {
      if (data.SPscenes !== undefined) {
        scenes = data.SPscenes.scenes;
        if (isEditor) Object.keys(scenes).forEach((name) => {
          sceneThumbs[name] = { isDefault: true, img: defaultSceneThumb };
        });
      }
    }
  }

  Scratch.extensions.register(new SPscenes());
})(Scratch);
