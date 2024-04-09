// Name: Better Comments
// ID: SPcomments
// Description: Better Comments with More Customization
// By: SharkPool

// Version V.1.0.0

(function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) throw new Error("Better Comments Extension must run unsandboxed!");

  const menuIconURI =
"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI5MC4yOTUwMiIgaGVpZ2h0PSI5MC4yOTUwMiIgdmlld0JveD0iMCwwLDkwLjI5NTAyLDkwLjI5NTAyIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTk0Ljg1MjQ5LC0xMzQuODUyNDkpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTE5Ni44NTI0OSwxODBjMCwtMjMuODI5NzEgMTkuMzE3OCwtNDMuMTQ3NTEgNDMuMTQ3NTEsLTQzLjE0NzUxYzIzLjgyOTcxLDAgNDMuMTQ3NTEsMTkuMzE3OCA0My4xNDc1MSw0My4xNDc1MWMwLDIzLjgyOTcxIC0xOS4zMTc4LDQzLjE0NzUxIC00My4xNDc1MSw0My4xNDc1MWMtMjMuODI5NzEsMCAtNDMuMTQ3NTEsLTE5LjMxNzggLTQzLjE0NzUxLC00My4xNDc1MXoiIGZpbGw9IiM5YjkyNWQiIHN0cm9rZT0iIzVkNTgzOCIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjxwYXRoIGQ9Ik0yMTQuMTYxOTcsMTk5LjgzNzI4YzAsLTEwLjg2NzAzIDAsLTMyLjg0MjU2IDAsLTM5LjAwMDhjMCwtMy4xNDE3MSAzLjE2NjY3LC02LjUwMDEzIDYuMTc1MTMsLTYuNTAwMTNjNi4xNDU3LDAgMjguODEwNjMsMCAzOS42NTA4MSwwYzMuNTY0MjUsMCA1Ljg1MDEyLDMuMzU4NDMgNS44NTAxMiw2LjUwMDE0YzAsNi4xNTgyNCAwLDI4LjEzMzc4IDAsMzkuMDAwOGMwLDMuNzQ4NCAtMi45NzY3LDYuMTc1MTMgLTUuODUwMTIsNi4xNzUxM2MtNC41MjIzNiwwIC0yOC42Njc4LDAgLTM5Ljk3NTgyLDBjLTMuNTYxOTIsMCAtNS44NTAxMiwtMi40MjY3MyAtNS44NTAxMiwtNi4xNzUxM3oiIGZpbGw9Im5vbmUiIHN0cm9rZS1vcGFjaXR5PSIwLjQ3NDUxIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48cGF0aCBkPSJNMjE0LjE2MTk3LDE5OS44MzcyOGMwLC0xMC44NjcwMyAwLC0zMi44NDI1NiAwLC0zOS4wMDA4YzAsLTMuMTQxNzEgMy4xNjY2NywtNi41MDAxMyA2LjE3NTEzLC02LjUwMDEzYzYuMTQ1NywwIDI4LjgxMDYzLDAgMzkuNjUwODEsMGMzLjU2NDI1LDAgNS44NTAxMiwzLjM1ODQzIDUuODUwMTIsNi41MDAxNGMwLDYuMTU4MjQgMCwyOC4xMzM3OCAwLDM5LjAwMDhjMCwzLjc0ODQgLTIuOTc2Nyw2LjE3NTEzIC01Ljg1MDEyLDYuMTc1MTNjLTQuNTIyMzYsMCAtMjguNjY3OCwwIC0zOS45NzU4MiwwYy0zLjU2MTkyLDAgLTUuODUwMTIsLTIuNDI2NzMgLTUuODUwMTIsLTYuMTc1MTN6IiBmaWxsPSIjZmZmMDk5IiBzdHJva2Utb3BhY2l0eT0iMC40NzQ1MSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PHBhdGggZD0iTTIxNC4xNjE5NywxNjcuMDc5NmMwLDAgMCwtNS4yNzQyNiAwLC02LjI0MzEzYzAsLTMuMTQxNzEgMy4xNjY2NywtNi41MDAxMyA2LjE3NTEzLC02LjUwMDEzYzYuMTQ1NywwIDI4LjgxMDYzLDAgMzkuNjUwODEsMGMzLjU2NDI1LDAgNS44NTAxMiwzLjM1ODQzIDUuODUwMTIsNi41MDAxNGMwLDAuMTY4MzcgMCw2LjI0MzEzIDAsNi4yNDMxM3oiIGZpbGw9IiNjY2JmN2EiIHN0cm9rZS1vcGFjaXR5PSIwLjQ3NDUxIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48cGF0aCBkPSJNMjE0LjA5NTYzLDE2Ny4wMjI5N2g1MS44MzMzM3oiIGZpbGw9Im5vbmUiIHN0cm9rZS1vcGFjaXR5PSIwLjUwMTk2IiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48cGF0aCBkPSIiIGZpbGw9Im5vbmUiIHN0cm9rZS1vcGFjaXR5PSIwLjUwMTk2IiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMTAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9IiIgZmlsbD0ibm9uZSIgc3Ryb2tlLW9wYWNpdHk9IjAuNTAxOTYiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIxMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iIiBmaWxsPSJub25lIiBzdHJva2Utb3BhY2l0eT0iMC41MDE5NiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI1IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48ZyBmaWxsPSJub25lIiBzdHJva2Utb3BhY2l0eT0iMC41MDE5NiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiPjxwYXRoIGQ9IiIvPjxwYXRoIGQ9IiIvPjwvZz48cGF0aCBkPSJNMjM2LjcsMTk0LjR2LTQuNWgtNC41Yy0yLjIwOTE0LDAgLTQsLTEuNDc3NDYgLTQsLTMuM2MwLC0xLjgyMjU0IDEuNzkwODYsLTMuMyA0LC0zLjNoNC41di00LjVjMCwtMi4yMDkxNCAxLjQ3NzQ2LC00IDMuMywtNGMxLjgyMjU0LDAgMy4zLDEuNzkwODYgMy4zLDR2NC41aDQuNWMyLjIwOTE0LDAgNCwxLjQ3NzQ2IDQsMy4zYzAsMS44MjI1NCAtMS43OTA4NiwzLjMgLTQsMy4zaC00LjV2NC41YzAsMi4yMDkxNCAtMS40Nzc0Niw0IC0zLjMsNGMtMS44MjI1NCwwIC0zLjMsLTEuNzkwODYgLTMuMywtNHoiIGZpbGw9Im5vbmUiIHN0cm9rZS1vcGFjaXR5PSIwLjUwMTk2IiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iNSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48cGF0aCBkPSJNMjM2LjcsMTk0LjR2LTQuNWgtNC41Yy0yLjIwOTE0LDAgLTQsLTEuNDc3NDYgLTQsLTMuM2MwLC0xLjgyMjU0IDEuNzkwODYsLTMuMyA0LC0zLjNoNC41di00LjVjMCwtMi4yMDkxNCAxLjQ3NzQ2LC00IDMuMywtNGMxLjgyMjU0LDAgMy4zLDEuNzkwODYgMy4zLDR2NC41aDQuNWMyLjIwOTE0LDAgNCwxLjQ3NzQ2IDQsMy4zYzAsMS44MjI1NCAtMS43OTA4NiwzLjMgLTQsMy4zaC00LjV2NC41YzAsMi4yMDkxNCAtMS40Nzc0Niw0IC0zLjMsNGMtMS44MjI1NCwwIC0zLjMsLTEuNzkwODYgLTMuMywtNHoiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjwvZz48L2c+PC9zdmc+";

  const colorIcon = 
"data:image/svg+xml;base64,PHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyMCAyMCIgaGVpZ2h0PSIyMHB4IiB3aWR0aD0iMjBweCI+CiAgICAKICAgIDx0aXRsZT5maWxsPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZT0ibm9uZSIgaWQ9IlBhZ2UtMSI+CiAgICAgICAgPGcgZmlsbD0iIzU3NUU3NSIgaWQ9ImZpbGwiPgogICAgICAgICAgICA8cGF0aCBpZD0iRmlsbC0xIiBkPSJNMTQuMDQ1MDk2OSw5LjY5MzQ5NTA0IEwxNC4wMzA2ODE4LDkuNjc5MTYyMDcgQzEzLjQzOTY2MjksOS4zNjM4MzY4MiAxMi41MTcwOTY4LDguNjkwMTg3NDMgMTEuNDIxNTQ5Niw3LjYwMDg4MjAzIEMxMS4wOTAwMDI0LDcuMjcxMjIzODEgMTAuNzg3Mjg1NCw2Ljk1NTg5ODU3IDEwLjU0MjIyODgsNi42NTQ5MDYyOCBDMTAuNzE1MjEsNi40Mzk5MTE4IDEwLjg4ODE5MTEsNi4yMjQ5MTczMSAxMS4wNjExNzIyLDYuMDA5OTIyODIgQzExLjM3ODMwNDMsNi4yNjc5MTYyMSAxMS43MjQyNjY2LDYuNTgzMjQxNDYgMTIuMDg0NjQ0LDYuOTQxNTY1NiBDMTIuMzE1Mjg1NSw3LjE3MDg5MzA1IDEyLjUwMjY4MTcsNy4zNzE1NTQ1OCAxMi42OTAwNzgsNy41NzIyMTYxIEMxMi43MTg5MDgxLDcuNjE1MjE0OTkgMTIuNzYyMTUzNCw3LjY1ODIxMzg5IDEyLjgxOTgxMzgsNy43MDEyMTI3OSBDMTMuNjI3MDU5MSw4LjYxODUyMjYgMTQuMTAyNzU3Myw5LjM2MzgzNjgyIDE0LjMxODk4MzcsOS43OTM4MjU4IEMxNC4zMTg5ODM3LDkuODA4MTU4NzcgMTQuMzMzMzk4OCw5LjgyMjQ5MTczIDE0LjMzMzM5ODgsOS44MzY4MjQ3IEMxNC4yNDY5MDgyLDkuNzkzODI1OCAxNC4xNDYwMDI1LDkuNzUwODI2OSAxNC4wNDUwOTY5LDkuNjkzNDk1MDQgTTEwLjU5OTg4OTIsMTAuMDY2MTUyMSBDOS43MzQ5ODM1LDEwLjUzOTE0IDguOTEzMzIzMDksMTAuOTgzNDYyIDcuNjE1OTY0NTUsMTAuNjgyNDY5NyBDNi4xNzQ0NTUwNiwxMC4zNTI4MTE1IDUuNDgyNTMwNSw5Ljc2NTE1OTg3IDUuMTk0MjI4NjEsOS40MjExNjg2OSBMOC4zMDc4ODkxLDUuNDA3OTM4MjYgQzguNTI0MTE1NTMsNS44Mzc5MjcyMyA4Ljg0MTI0NzYyLDYuMjgyMjQ5MTcgOS4xNzI3OTQ4LDYuNjk3OTA1MTggQzguODI2ODMyNTIsNy4yMTM4OTE5NSA4LjU1Mjk0NTcyLDcuNjQzODgwOTMgOC40MjMyMDk4Niw3Ljg0NDU0MjQ1IEM4LjI3OTA1ODkxLDguMDg4MjAyODcgOC4zNTExMzQzOSw4LjQxNzg2MTA4IDguNjEwNjA2MSw4LjU3NTUyMzcgQzguNjk3MDk2NjcsOC42MzI4NTU1NyA4Ljc5ODAwMjMzLDguNjYxNTIxNSA4Ljg4NDQ5MjksOC42NjE1MjE1IEM5LjA3MTg4OTEzLDguNjYxNTIxNSA5LjI0NDg3MDI3LDguNTYxMTkwNzQgOS4zNDU3NzU5NCw4LjQwMzUyODExIEM5LjUwNDM0MTk4LDguMTMxMjAxNzYgOS42OTE3MzgyMSw3Ljg0NDU0MjQ1IDkuODkzNTQ5NTQsNy41NTc4ODMxMyBDMTAuMTk2MjY2NSw3LjkwMTg3NDMxIDEwLjQ3MDE1MzMsOC4xNzQyMDA2NiAxMC42NTc1NDk2LDguMzYwNTI5MjIgQzExLjA3NTU4NzMsOC43NzYxODUyMyAxMS40OTM2MjUxLDkuMTQ4ODQyMzQgMTEuODk3MjQ3Nyw5LjQ3ODUwMDU1IEMxMS40MjE1NDk2LDkuNjA3NDk3MjQgMTEuMDAzNTExOSw5Ljg1MTE1NzY2IDEwLjU5OTg4OTIsMTAuMDY2MTUyMSBNMTAuMjEwNjgxNiw1LjMzNjI3MzQzIEMxMC4wOTUzNjA5LDUuNDkzOTM2MDUgOS45NjU2MjUwMiw1LjY1MTU5ODY4IDkuODUwMzA0MjYsNS43OTQ5MjgzNCBDOS41MDQzNDE5OCw1LjMzNjI3MzQzIDkuMjg4MTE1NTYsNC45NjM2MTYzMiA5LjE3Mjc5NDgsNC43MDU2MjI5MyBDOS40MTc4NTE0MSw0LjgwNTk1MzY5IDkuNzYzODEzNjksNS4wMjA5NDgxOCAxMC4yMTA2ODE2LDUuMzM2MjczNDMgTTEzLjUxMTczODQsNC4wNzQ5NzI0NCBDMTMuNjcwMzA0NCw0LjA3NDk3MjQ0IDEzLjg0MzI4NTUsNC4xMDM2MzgzNyAxMy44NzIxMTU3LDQuMTc1MzAzMiBDMTQuMDQ1MDk2OSw0LjQ5MDYyODQ1IDEzLjYyNzA1OTEsNS40OTM5MzYwNSAxMy4wNjQ4NzA0LDYuMzk2OTEyOSBMMTIuODQ4NjQ0LDYuMTgxOTE4NDEgQzEyLjYxODAwMjUsNS45NTI1OTA5NiAxMi4yMjg3OTQ5LDUuNTk0MjY2ODEgMTEuNzgxOTI3LDUuMjA3Mjc2NzQgQzEyLjQ0NTAyMTMsNC41MzM2MjczNCAxMy4wNTA0NTUzLDQuMDc0OTcyNDQgMTMuNTExNzM4NCw0LjA3NDk3MjQ0IE0xNi41NTMzMjM0LDEyLjE1ODc2NTIgQzE2LjMzNzA5NywxMS41OTk3Nzk1IDE1Ljk5MTEzNDcsMTEuMDk4MTI1NyAxNS41ODc1MTIsMTAuNjY4MTM2NyBDMTUuNTQ0MjY2NywxMC42MTA4MDQ5IDE1LjQ4NjYwNjQsMTAuNTY3ODA2IDE1LjQyODk0NiwxMC41MjQ4MDcxIEMxNS42NzQwMDI2LDkuOTk0NDg3MzIgMTUuMjcwMzc5OSw5LjIzNDg0MDEzIDE0LjkyNDQxNzcsOC42OTAxODc0MyBDMTQuNjUwNTMwOSw4LjI0NTg2NTQ5IDE0LjI3NTczODQsNy43NDQyMTE2OSAxMy44Mjg4NzA1LDcuMjQyNTU3ODggQzE0LjM5MTA1OTIsNi4zODI1Nzk5MyAxNS4zNTY4NzA1LDQuNjc2OTU3IDE0LjgzNzkyNzEsMy42NzM2NDkzOSBDMTQuNjc5MzYxLDMuMzcyNjU3MTEgMTQuMzE4OTgzNywzIDEzLjUxMTczODQsMyBMMTMuNDk3MzIzMywzIEMxMi42NzU2NjI5LDMgMTEuNzY3NTExOSwzLjY1OTMxNjQzIDEwLjk0NTg1MTUsNC41MTkyOTQzOCBDMTAuMDIzMjg1NCwzLjg0NTY0NDk4IDkuMDE0MjI4NzUsMy4zMTUzMjUyNSA4LjQwODc5NDc3LDMuNjU5MzE2NDMgQzguMzUxMTM0MzksMy42ODc5ODIzNiA4LjI3OTA1ODkxLDMuNzE2NjQ4MjkgOC4yMzU4MTM2MywzLjc3Mzk4MDE1IEM4LjIyMTM5ODUzLDMuNzg4MzEzMTIgOC4xOTI1NjgzNSwzLjgwMjY0NjA5IDguMTc4MTUzMjUsMy44MzEzMTIwMiBDOC4xNjM3MzgxNiwzLjg0NTY0NDk4IDguMTQ5MzIzMDYsMy44NTk5Nzc5NSA4LjEzNDkwNzk3LDMuODg4NjQzODggTDguMTIwNDkyODcsMy45MTczMDk4MSBMNC4xMjc1MTE1OCw5LjA0ODUxMTU4IEM0LjExMzA5NjQ5LDkuMDQ4NTExNTggNC4xMTMwOTY0OSw5LjA0ODUxMTU4IDQuMDk4NjgxMzksOS4wNjI4NDQ1NCBMMy4yMDQ5NDU1MSwxMC4yMjM4MTQ4IEwzLjE2MTcwMDIzLDEwLjI2NjgxMzcgQzMuMTE4NDU0OTQsMTAuMzA5ODEyNiAzLjA4OTYyNDc1LDEwLjM2NzE0NDQgMy4wNzUyMDk2NiwxMC40MTAxNDMzIEwzLjA3NTIwOTY2LDEwLjQyNDQ3NjMgQzIuNjI4MzQxNzEsMTEuMzQxNzg2MSA0LjI4NjA3NzYzLDEzLjEzMzQwNjggNS4wNjQ0OTI3NSwxMy45MjE3MiBDNS43NTY0MTczMSwxNC42MDk3MDIzIDcuMjg0NDE3MzcsMTYgOC4yMzU4MTM2MywxNiBDOC40Mzc2MjQ5NiwxNiA4LjU5NjE5MSwxNS45NDI2NjgxIDguNzQwMzQxOTUsMTUuODEzNjcxNCBMMTQuMjYxMzIzMywxMS41NTY3ODA2IEMxNC4yOTAxNTM1LDExLjU0MjQ0NzYgMTQuMzA0NTY4NiwxMS41MTM3ODE3IDE0LjMzMzM5ODgsMTEuNDg1MTE1OCBDMTQuMzYyMjI5LDExLjUxMzc4MTcgMTQuMzc2NjQ0MSwxMS41NTY3ODA2IDE0LjM5MTA1OTIsMTEuNTg1NDQ2NSBDMTQuNTY0MDQwMywxMS45Mjk0Mzc3IDE0LjY3OTM2MSwxMi4yODc3NjE5IDE0LjY5Mzc3NjEsMTIuNjc0NzUxOSBDMTQuNzM3MDIxNCwxMy4wNjE3NDIgMTQuNzA4MTkxMiwxMy40NjMwNjUgMTQuNjUwNTMwOSwxMy44NTAwNTUxIEwxNC42NTA1MzA5LDEzLjg2NDM4ODEgQzE0LjYzNjExNTgsMTMuOTc5MDUxOCAxNC42MzYxMTU4LDE0LjA3OTM4MjYgMTQuNjUwNTMwOSwxNC4xOTQwNDYzIEMxNC43NTE0MzY1LDE0LjgzOTAyOTggMTUuMzU2ODcwNSwxNS4yODMzNTE3IDE1Ljk5MTEzNDcsMTUuMTgzMDIwOSBDMTYuNjM5ODE0LDE1LjA4MjY5MDIgMTcuMDg2NjgxOSwxNC40ODA3MDU2IDE2Ljk4NTc3NjIsMTMuODM1NzIyMiBDMTYuODk5Mjg1NywxMy4yNzY3MzY1IDE2Ljc4Mzk2NDksMTIuNzAzNDE3OSAxNi41NTMzMjM0LDEyLjE1ODc2NTIiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==";

  const fontIcon =
"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIzMi4xNzM2IiBoZWlnaHQ9IjMyLjY2NTg0IiB2aWV3Qm94PSIwLDAsMzIuMTczNiwzMi42NjU4NCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIyMy45MTMyLC0xNjMuNDIwOTYpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjx0ZXh0IHRyYW5zZm9ybT0idHJhbnNsYXRlKDIyOC4wMzQ1LDE3Ny42NDEpIHNjYWxlKDAuMzI2NzgsMC4zMjY3OCkiIGZvbnQtc2l6ZT0iNDAiIHhtbDpzcGFjZT0icHJlc2VydmUiIGZpbGw9IiM1NzVlNzUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSIjNTc1ZTc1IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9IlNhbnMgU2VyaWYiIGZvbnQtd2VpZ2h0PSI0MDAiIHRleHQtYW5jaG9yPSJzdGFydCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjx0c3BhbiB4PSIwIiBkeT0iMCI+QTwvdHNwYW4+PC90ZXh0Pjx0ZXh0IHRyYW5zZm9ybT0idHJhbnNsYXRlKDIzNy4wMzQ1LDE4NC4xNDEpIHNjYWxlKDAuMjgzNDgsMC4yODM0OCkiIGZvbnQtc2l6ZT0iNDUiIHhtbDpzcGFjZT0icHJlc2VydmUiIGZpbGw9IiM1NzVlNzUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSIjNTc1ZTc1IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9IkNvbWljIFNhbnMgTXMiIGZvbnQtd2VpZ2h0PSI0MDAiIHRleHQtYW5jaG9yPSJzdGFydCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjx0c3BhbiB4PSIwIiBkeT0iMCI+QjwvdHNwYW4+PC90ZXh0Pjx0ZXh0IHRyYW5zZm9ybT0idHJhbnNsYXRlKDI0My41MzQ1LDE5MS4xNDEpIHNjYWxlKDAuMzIxODMsMC4zMjE4MykiIGZvbnQtc2l6ZT0iNDAiIHhtbDpzcGFjZT0icHJlc2VydmUiIGZpbGw9IiM1NzVlNzUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSIjNTc1ZTc1IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXdlaWdodD0iNDAwIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48dHNwYW4geD0iMCIgZHk9IjAiPkM8L3RzcGFuPjwvdGV4dD48cGF0aCBkPSJNMjIzLjkxMzIsMTk2LjA4Njh2LTMyLjE3MzZoMzIuMTczNnYzMi4xNzM2eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiLz48L2c+PC9nPjwvc3ZnPg==";

  const vm = Scratch.vm;
  let SPcommentStorage = {};

  // Modals
  function createModal(type, data) {
    return new Promise((resolve) => {
      const modal = document.createElement("div");
      modal.classList.add("SPcommentModal");
      modal.style.width = "100%";
      modal.style.height = "100%";
      modal.style.backgroundColor = "rgba(0,0,0,0.5)";
      modal.style.display = "flex";
      modal.style.justifyContent = "center";
      modal.style.alignItems = "center";
      modal.style.fontFamily = "Arial";
      modal.style.padding = "50px";
      modal.style.color = "white";
      modal.style.position = "fixed";
      modal.style.zIndex = "9999";
      modal.style.top = "50%";
      modal.style.left = "50%";
      modal.style.transform = "translate(-50%, -50%)";
  
      const modalContent = document.createElement("div");
      modalContent.classList.add("modal-content");
      modalContent.style.width = "350px";
      modalContent.style.height = "auto";
      modalContent.style.backgroundColor = "#262626";
      modalContent.style.textAlign = "center";
      modalContent.style.borderRadius = "15px";
      modalContent.style.boxShadow = "0px 0px 0px 5px rgba(125,125,125,0.5)";
      modal.appendChild(modalContent);
  
      const header = document.createElement("div");
      header.classList.add("header");
      header.style.borderRadius = "15px 15px 0px 0px";
      header.style.backgroundColor = Scratch.extensions.isPenguinMod ? "#00c3ff" : document.documentElement.style.getPropertyValue("--looks-secondary") || "#ff4c4c";
      header.style.padding = "15px 5px";
      modalContent.appendChild(header);
      const h2 = document.createElement("h2");
      h2.textContent = "Comment Customization";
      h2.style.margin = "0";
      header.appendChild(h2);
  
      if (type === "txt") {
        const fontLabel = createInputLabel("font", "Font");
        modalContent.appendChild(fontLabel);
        modalContent.appendChild(document.createElement("br"));
        const fontInput = createInput("font", "text", data.font);
        fontInput.addEventListener("input", function() { fontInput.style.fontFamily = fontInput.value });
        modalContent.appendChild(fontInput);
        modalContent.appendChild(document.createElement("br"));
        const formatDiv = document.createElement("div");
        formatDiv.style.display = "inline";

        const boldness = createInputLabel("bold", "Bold");
        boldness.style.position = "absolute";
        boldness.style.transform = "translate(350%, 0%)";
        formatDiv.appendChild(boldness);
        const boldInput = createInput("bold", "checkbox", data.bold);
        boldInput.style.width = "50px";
        boldInput.style.position = "absolute";
        boldInput.style.transform = "translate(-175%, 95%)";
        formatDiv.appendChild(boldInput);
        const italic = createInputLabel("italic", "Italic");
        italic.style.display = "inline";
        italic.style.position = "absolute";
        italic.style.transform = "translate(80%, 0%)";
        formatDiv.appendChild(italic);
        const italInput = createInput("italic", "checkbox", data.italic);
        italInput.style.width = "50px";
        italInput.style.position = "absolute";
        italInput.style.transform = "translate(-15%, 95%)";
        formatDiv.appendChild(italInput);

        modalContent.appendChild(formatDiv);
        modalContent.appendChild(document.createElement("br"));
        modalContent.appendChild(document.createElement("br"));
  
        const alignmentLabel = createInputLabel("alignment", "Text Alignment");
        modalContent.appendChild(alignmentLabel);
        modalContent.appendChild(document.createElement("br"));
        const alignmentSelect = createSelect("alignment", ["left", "center", "right"]);
        alignmentSelect.style.marginBottom = "90px";
        modalContent.appendChild(alignmentSelect);

        const textDiv1 = document.createElement("div");
        textDiv1.style.position = "absolute";
        textDiv1.style.transform = "translate(60%, -130%)";
        const textDiv2 = document.createElement("div");
        textDiv2.style.position = "absolute";
        textDiv2.style.transform = "translate(190%, -127%)";

        const fontSizeLabel = createInputLabel("fontSize", "Font Size");
        textDiv1.appendChild(fontSizeLabel);
        textDiv1.appendChild(document.createElement("br"));
        const fontSizeInput = createInput("fontSize", "number", data.fontSize);
        fontSizeInput.setAttribute("min", "1");
        fontSizeInput.style.width = "100px";
        textDiv1.appendChild(fontSizeInput);
        modalContent.appendChild(textDiv1);
        const txtColorLabel = createInputLabel("txtColor", "Text Color");
        textDiv2.appendChild(txtColorLabel);
        textDiv2.appendChild(document.createElement("br"));
        const txtColorInput = createInput("txtColor", "color", data.txtColor);
        txtColorInput.style.width = "100px";
        textDiv2.appendChild(txtColorInput);
        modalContent.appendChild(textDiv2);
      } else {
        const colorDiv = document.createElement("div");
        colorDiv.style.position = "absolute";
        colorDiv.style.display = "inline";
        colorDiv.style.marginRight = "20px";
        colorDiv.style.marginTop = "15px";
        modalContent.appendChild(colorDiv);
  
        const hueDiv = document.createElement("div");
        hueDiv.style.position = "absolute";
        hueDiv.style.marginTop = "40px";

        const colorLabel = createInputLabel("color", "Color", true);
        colorLabel.style.transform = "translate(-50%, -50%)";
        hueDiv.appendChild(colorLabel);
        const colorInput = createInput("color", "color", data.color, true);
        colorInput.value = data.color; // have to hardcode it in for some reason
        colorInput.style.width = "100px";
        colorInput.style.transform = "translate(40%, -130%)";
        colorInput.style.textAlign = "center";
        colorInput.style.borderRadius = "8px";
        colorInput.addEventListener("input", updateDisplay);
        hueDiv.appendChild(colorInput);
        colorDiv.appendChild(hueDiv);

        const opaDiv = document.createElement("div");
        opaDiv.style.position = "absolute";
        opaDiv.style.marginTop = "80px";

        const opaLabel = createInputLabel("opacity", "Opacity", true);
        opaLabel.style.transform = "translate(-50%, -50%)";
        opaDiv.appendChild(opaLabel);
        const opacityInput = createInput("opacity", "range", data.opacity, true);
        opacityInput.setAttribute("max", "100");
        opacityInput.setAttribute("min", "10");
        opacityInput.style.width = "100px";
        opacityInput.style.transform = "translate(40%, -130%)";
        opacityInput.style.textAlign = "center";
        opacityInput.style.borderRadius = "8px";
        opacityInput.addEventListener("input", updateDisplay);
        opaDiv.appendChild(opacityInput);
        colorDiv.appendChild(opaDiv);

        const colorDisplayDiv = document.createElement("div");
        colorDisplayDiv.style.display = "block";
        colorDisplayDiv.style.borderRadius = "15px";
        colorDisplayDiv.style.border = "7px solid #4f4f4f";
        colorDisplayDiv.style.width = "85px";
        colorDisplayDiv.style.height = "85px";
        colorDisplayDiv.style.margin = "25px 10px 10px 30px";
        modalContent.appendChild(colorDisplayDiv);
  
        const colorDisplay = document.createElement("div");
        colorDisplay.classList.add("color-display");
        colorDisplay.style.display = "block";
        colorDisplay.style.borderRadius = "9px";
        colorDisplay.style.width = "85px";
        colorDisplay.style.height = "85px";
        colorDisplayDiv.appendChild(colorDisplay);
        function updateDisplay() {
          colorDisplay.style.backgroundColor = colorInput.value;
          colorDisplay.style.opacity = opacityInput.value / 100;
        }
        updateDisplay();
      }

      modalContent.appendChild(document.createElement("br"));
      const cancelBtn = createButton("cancelBtn", "Cancel");
      cancelBtn.style.marginRight = "10px";
      cancelBtn.addEventListener("click", () => {
        document.body.removeChild(modal);
        resolve();
      });
      modalContent.appendChild(cancelBtn);
  
      const okayBtn = createButton("okayBtn", "Okay");
      okayBtn.addEventListener("click", () => {
        const inputs = modalContent.querySelectorAll("input, select");
        const values = {};
        inputs.forEach(input => { values[input.id] = input[input.type === "checkbox" ? "checked" : "value"] });
        document.body.removeChild(modal);
        resolve(values);
      });
      modalContent.appendChild(okayBtn);
      document.body.appendChild(modal);
    });
  }

  function createInputLabel(id, labelText, includeMargins) {
    const label = document.createElement("label");
    label.setAttribute("for", id);
    label.textContent = labelText;
    label.style.display = "block";
    if (!includeMargins) {
      label.style.marginTop = "10px";
      label.style.marginBottom = "-15px";
    }
    label.style.fontWeight = "700";
    return label;
  }

  function createInput(id, type, value, includePad) {
    const input = document.createElement("input");
    input.setAttribute("type", type);
    input.setAttribute("id", id);
    input.setAttribute("name", id);
    input[type === "checkbox" ? "checked" : "value"] = value;
    input.style.background = "radial-gradient(#ffffff 50%, #b3b3b3)";
    input.style.border = "2px solid white";
    if (!includePad) input.style.padding = "2px";
    input.style.width = "150px";
    input.style.textAlign = "center";
    input.style.borderRadius = "8px";
    input.style.color = "#000000";
    return input;
  }

  function createSelect(id, options) {
    const select = document.createElement("select");
    select.setAttribute("id", id);
    select.setAttribute("name", id);
    select.style.background = "radial-gradient(#ffffff 50%, #b3b3b3)";
    select.style.border = "2px solid white";
    select.style.padding = "2px";
    select.style.width = "150px";
    select.style.textAlign = "center";
    select.style.borderRadius = "8px";
    select.style.color = "#000000";
    options.forEach(optionText => {
      const option = document.createElement("option");
      option.setAttribute("value", optionText);
      option.textContent = optionText.charAt(0).toUpperCase() + optionText.slice(1);
      select.appendChild(option);
    });
    return select;
  }

  function createButton(id, buttonText) {
    const button = document.createElement("button");
    button.setAttribute("id", id);
    button.textContent = buttonText;
    button.style.fontSize = "18px";
    button.style.marginBottom = "15px";
    button.style.border = "none";
    button.style.padding = "10px 15px";
    button.style.backgroundColor = "#4f4f4f";
    button.style.textAlign = "center";
    button.style.borderRadius = "10px";
    button.style.fontWeight = "700";
    button.style.color = "#fff";
    return button;
  }

  // Functions
  async function colorListen(svg, ID) {
    const values = await createModal("color", SPcommentStorage[ID]);
    if (values !== undefined) {
      const color = values.color;
      const color2 = darkenColor(values.color, 27.75);
      svg.style.backgroundColor = color;
      const svgBar = svg.querySelector("rect.scratchWorkspaceCommentBorder") ?? svg.querySelector("rect.scratchCommentRect");
      const svgText = svg.querySelector("body");
      const textArea = svg.querySelector(".scratchCommentTextarea.scratchCommentText");
      if (svgBar) {
        svgBar.style.fill = color;
        svgBar.style.stroke = color2;
      }
      if (svgText) svgText.style.backgroundColor = color;
      if (textArea) textArea.style.backgroundColor = color;
      SPcommentStorage[ID].color = color;
      SPcommentStorage[ID].color2 = color2;

      const opacity = Scratch.Cast.toNumber(values.opacity);
      svg.setAttribute("opacity", opacity / 100);
      SPcommentStorage[ID].opacity = opacity;
      if (!Scratch.extensions.isPenguinMod) vm.runtime.extensionStorage["SPcomments"] = { storage : SPcommentStorage };
    }
  }
  async function txtListen(svg, ID) {
    const values = await createModal("txt", SPcommentStorage[ID]);
    if (values !== undefined) {
      svg.style.fontFamily = values.font;
      SPcommentStorage[ID].font = values.font;
      svg.style.fontWeight = values.bold ? "bolder" : "normal";
      SPcommentStorage[ID].bold = values.bold;
      svg.style.fontStyle = values.italic ? "italic" : "normal";
      SPcommentStorage[ID].italic = values.italic;

      svg.style.textAlign = values.alignment;
      SPcommentStorage[ID].textAlign = values.alignment;

      const fontSize = Math.max(Scratch.Cast.toNumber(values.fontSize), 1)
      svg.style.fontSize = `${fontSize}px`;
      SPcommentStorage[ID].fontSize = fontSize;
      svg.style.color = values.txtColor;
      SPcommentStorage[ID].txtColor = values.txtColor;
      if (!Scratch.extensions.isPenguinMod) vm.runtime.extensionStorage["SPcomments"] = { storage : SPcommentStorage };
    }
  }

  function darkenColor(hex, amount) {
    hex = hex.replace(/^#/, "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const darkenAmount = Math.round(255 * (amount / 100));

    const newR = Math.max(0, r - darkenAmount);
    const newG = Math.max(0, g - darkenAmount);
    const newB = Math.max(0, b - darkenAmount);
    return `#${((1 << 24) + (newR << 16) + (newG << 8) + newB).toString(16).slice(1)}`;
  }

  function redoComment(comment) {
    if (comment && document.getElementById(comment.id) === null) {
      // color
      const btn1 = document.createElementNS("http://www.w3.org/2000/svg", "image");
      btn1.setAttribute("id", comment.id);
      btn1.setAttribute("x", "25");
      btn1.setAttribute("y", "1");
      btn1.setAttribute("width", "32");
      btn1.setAttribute("height", "32");
      btn1.setAttribute("href", colorIcon);

      // text
      const btn2 = document.createElementNS("http://www.w3.org/2000/svg", "image");
      btn2.setAttribute("x", "60");
      btn2.setAttribute("y", "1");
      btn2.setAttribute("width", "32");
      btn2.setAttribute("height", "32");
      btn2.setAttribute("href", fontIcon);

      let path = comment;
      let path2 = "";
      let commentSVG = "";
      if (comment.svgHandleTarget_ !== undefined) {
        path = path.svgHandleTarget_.nextElementSibling;
        path2 = comment.minimizeArrow_;
        commentSVG = comment.svgGroup_;
      } else {
        // weird bug thats avoided:
        if (!path.bubble_) return;
        path = path.bubble_.commentTopBar_.nextElementSibling;
        path2 = comment.bubble_.minimizeArrow_;
        commentSVG = comment.bubble_.bubbleBack_.parentNode;
      }
      path.insertAdjacentElement("beforebegin", btn1);
      path.insertAdjacentElement("beforebegin", btn2);

      if (SPcommentStorage[comment.id] === undefined) {
        SPcommentStorage[comment.id] = {
          ID : comment.id, XY : comment.getXY(),
          colorBtn : btn1, textBtn : btn2, commentSVG : commentSVG,
          color : "#fff099", color2: "#b8af37", opacity : 100,
          txtColor: "#000000", font : "Arial", textAlign : "left",
          fontSize : 16, bold : false, italic : false
        };
      }

      path2.addEventListener("click", function() { minimizeListen(comment, [btn1, btn2]) });
      btn1.addEventListener("click", function() { colorListen(commentSVG, comment.id) });
      btn2.addEventListener("click", function() { txtListen(comment.textarea_, comment.id) });
    } else if (comment) {
      // TODO: Need to Move this Somewhere else to Fix Auto Saving
      SPcommentStorage[comment.id] = {
        ...SPcommentStorage[comment.id],
        XY : comment.getXY()
      };
    }
  }

  function minimizeListen(comment, btns) {
    btns[0].style.display = comment.isMinimized_ ? "none" : "inline";
    btns[1].style.display = comment.isMinimized_ ? "none" : "inline";
  }

  function updateComment(comment) {
    const data = SPcommentStorage[comment.id];
    if (data === undefined) return;
    const svg = comment.svgHandleTarget_ !== undefined ? comment.svgGroup_ : comment.bubble_.bubbleBack_.parentNode;
    const txt = comment.textarea_;
    const svgBar = svg.querySelector("rect.scratchWorkspaceCommentBorder") ?? svg.querySelector("rect.scratchCommentRect");
    const svgText = svg.querySelector("body");
    const textArea = svg.querySelector(".scratchCommentTextarea.scratchCommentText");
    svg.style.backgroundColor = data.color;
    if (svgBar) {
      svgBar.style.fill = data.color;
      svgBar.style.stroke = data.color2;
    }
    if (svgText) svgText.style.backgroundColor = data.color;
    if (textArea) textArea.style.backgroundColor = data.color;
    svg.setAttribute("opacity", data.opacity / 100);

    txt.style.fontFamily = data.font || "Arial";
    txt.style.fontWeight = data.bold ? "bolder" : "normal";
    txt.style.fontStyle = data.italic ? "italic" : "normal";
    txt.style.textAlign = data.textAlign;
    txt.style.fontSize = `${data.fontSize || 16}px`;
    txt.style.color = data.txtColor;
  }

  function fixStorage() {
    const storedComments = SPcommentStorage;
    const storedKeys = Object.keys(storedComments);
    const internalComments = ScratchBlocks.mainWorkspace.commentDB_;
    const internalKeys = Object.keys(internalComments);
    if (internalKeys.length > 0) {
      for (let i = 0; i < internalKeys.length; i++) {
        const intComm = internalComments[internalKeys[i]];
        const storComm = storedComments[storedKeys[i]];
        if (intComm !== undefined && storComm !== undefined) {
          const storXY = `{"x":${Math.floor(storComm.XY.x)},"y":${Math.floor(storComm.XY.y)}}`;
          if (JSON.stringify(intComm.getXY()) === storXY) {
            SPcommentStorage[internalKeys[i]] = {
              ...SPcommentStorage[storedKeys[i]],
              ID : intComm.id
            };
            delete SPcommentStorage[storedKeys[i]];
          }
        }
      }
    }
  }

  function updateAllComments() {
    const allComments = ScratchBlocks.mainWorkspace.commentDB_;
    Object.keys(allComments).forEach(key => {
      redoComment(allComments[key]);
      updateComment(allComments[key]);
    });
  }

  // Listeners
  function handleMutation(mutationsList) {
    for(const mutation of mutationsList) {
      if (mutation.type === "childList" && typeof scaffolding === "undefined") {
        const workspace = ScratchBlocks.mainWorkspace;
        if (mutation.addedNodes && mutation.addedNodes[0]) {
          let comment = "";
          const allComments = workspace.commentDB_;
          Object.keys(allComments).forEach(key => {
            if (mutation.addedNodes[0] === allComments[key].svgGroup_ || allComments[key].iconGroup_) {
              comment = allComments[key];
              return;
            }
          });
          redoComment(comment);
        }
      }
    }
  }

  vm.on("workspaceUpdate", () => {
    if (typeof scaffolding !== "undefined") return;
    setTimeout(function() { updateAllComments() }, 10); // wait for Scratch to render its stupid Comments
  });
  vm.runtime.on("PROJECT_LOADED", () => {
    if (typeof scaffolding !== "undefined") return;
    setTimeout(function() {
      fixStorage(); // Comment IDs are different upon project load
      updateAllComments();
    }, 100); // wait for Scratch to render its stupid Comments
  });

  class SPcomments {
    getInfo() {
      return {
        id: "SPcomments",
        name: "Better Comments",
        color1: "#b8af37",
        menuIconURI,
        blocks: [
          {
            blockType: Scratch.BlockType.LABEL,
            hideFromPalette: Scratch.extensions.isPenguinMod,
            text: "Place in your Project to Save"
          },
          {
            opcode: "save", blockType: Scratch.BlockType.COMMAND,
            hideFromPalette: Scratch.extensions.isPenguinMod,
            text: "save comment settings"
          }
        ]
      };
    }

    // TW Storage
    save() { return }

    // PenguinMod Storage
    serialize() { return { SPcomments : { storage : SPcommentStorage } } }
    deserialize(data) {
      if (data.SPcomments !== undefined) SPcommentStorage = data.SPcomments.storage;
    }
  }

  if (!Scratch.extensions.isPenguinMod) {
    const storage = vm.runtime.extensionStorage["SPcomments"];
    if (storage !== undefined) SPcommentStorage = storage.storage;
  }
  if (typeof scaffolding === "undefined" && 
    // Check if loaded manually or by project load
    Math.round(vm.runtime.ioDevices.clock._projectTimer.startTime / 1000) * 1000 !==
    Math.round(Date.now() / 1000) * 1000
  ) {
    const observer = new MutationObserver(handleMutation);
    observer.observe(document, { childList: true, subtree: true });
    updateAllComments(); // update pre-existing comments
  }
  Scratch.extensions.register(new SPcomments());
})(Scratch);
