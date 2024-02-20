// Name: Extra Controls
// ID: SPadvControl
// Description: New Advanced Control Blocks
// By: SharkPool

// Version V.1.1.0

(function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) throw new Error("Extra Controls must run unsandboxed");

  const vm = Scratch.vm;
  const runtime = vm.runtime;
  const regeneratedReporters = ["SPadvControl_threadArgs"];

  const menuIconURI =
"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI2OS41NjUyMyIgaGVpZ2h0PSI2OS41NjUyMyIgdmlld0JveD0iMCwwLDY5LjU2NTIzLDY5LjU2NTIzIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjA1LjIxNzM4LC0xNDUuMjE3MzgpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTIwNy4yMTczOSwxODBjMCwtMTguMTA1MzMgMTQuNjc3MjgsLTMyLjc4MjYxIDMyLjc4MjYxLC0zMi43ODI2MWMxOC4xMDUzNCwwIDMyLjc4MjYyLDE0LjY3NzI4IDMyLjc4MjYyLDMyLjc4MjYxYzAsMTguMTA1MzMgLTE0LjY3NzI4LDMyLjc4MjYxIC0zMi43ODI2MiwzMi43ODI2MWMtMTguMTA1MzMsMCAtMzIuNzgyNjEsLTE0LjY3NzI4IC0zMi43ODI2MSwtMzIuNzgyNjF6IiBmaWxsPSIjZmZhYjE5IiBzdHJva2U9IiNjZjhiMTciIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48cGF0aCBkPSJNMjYwLjE2NjY3LDE4MGgtNDAuMzMzMzMiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI1IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNMjYwLjE2NjY3LDE2Ny4zOTU4NGgtNDAuMzMzMzMiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI1IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNMjYwLjE2NjY3LDE5Mi42MDQxN2gtNDAuMzMzMzMiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI1IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNMjIzLjgzMzM0LDE4MC4xNjY2N2MwLC0zLjQwNTc1IDIuNzYwOTEsLTYuMTY2NjYgNi4xNjY2NiwtNi4xNjY2NmMzLjQwNTc1LDAgNi4xNjY2NiwyLjc2MDkxIDYuMTY2NjYsNi4xNjY2NmMwLDMuNDA1NzUgLTIuNzYwOTEsNi4xNjY2NyAtNi4xNjY2Niw2LjE2NjY3Yy0zLjQwNTc1LDAgLTYuMTY2NjYsLTIuNzYwOTIgLTYuMTY2NjYsLTYuMTY2Njd6IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiNmZmFiMTkiIHN0cm9rZS13aWR0aD0iNSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48cGF0aCBkPSJNMjQzLjgzMzM0LDE2Ny41YzAsLTMuNDA1NzUgMi43NjA5MSwtNi4xNjY2NiA2LjE2NjY2LC02LjE2NjY2YzMuNDA1NzUsMCA2LjE2NjY3LDIuNzYwOTEgNi4xNjY2Nyw2LjE2NjY2YzAsMy40MDU3NSAtMi43NjA5MSw2LjE2NjY2IC02LjE2NjY3LDYuMTY2NjZjLTMuNDA1NzUsMCAtNi4xNjY2NiwtMi43NjA5MSAtNi4xNjY2NiwtNi4xNjY2NnoiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iI2ZmYWIxOSIgc3Ryb2tlLXdpZHRoPSI1IiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjxwYXRoIGQ9Ik0yNDAuNjY2NjcsMTkyLjY2NjY3YzAsLTMuNDA1NzUgMi43NjA5MSwtNi4xNjY2NiA2LjE2NjY2LC02LjE2NjY2YzMuNDA1NzUsMCA2LjE2NjY2LDIuNzYwOTEgNi4xNjY2Niw2LjE2NjY2YzAsMy40MDU3NSAtMi43NjA5MSw2LjE2NjY2IC02LjE2NjY2LDYuMTY2NjZjLTMuNDA1NzUsMCAtNi4xNjY2NiwtMi43NjA5MSAtNi4xNjY2NiwtNi4xNjY2NnoiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iI2ZmYWIxOSIgc3Ryb2tlLXdpZHRoPSI1IiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjxwYXRoIGQ9Ik0yMjMuODMzMzQsMTgwLjE2NjY3YzAsLTMuNDA1NzUgMi43NjA5MSwtNi4xNjY2NiA2LjE2NjY2LC02LjE2NjY2YzMuNDA1NzUsMCA2LjE2NjY2LDIuNzYwOTEgNi4xNjY2Niw2LjE2NjY2YzAsMy40MDU3NSAtMi43NjA5MSw2LjE2NjY3IC02LjE2NjY2LDYuMTY2NjdjLTMuNDA1NzUsMCAtNi4xNjY2NiwtMi43NjA5MiAtNi4xNjY2NiwtNi4xNjY2N3oiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iI2ZmYWIxOSIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjxwYXRoIGQ9Ik0yNDMuODMzMzQsMTY3LjVjMCwtMy40MDU3NSAyLjc2MDkxLC02LjE2NjY2IDYuMTY2NjYsLTYuMTY2NjZjMy40MDU3NSwwIDYuMTY2NjcsMi43NjA5MSA2LjE2NjY3LDYuMTY2NjZjMCwzLjQwNTc1IC0yLjc2MDkxLDYuMTY2NjYgLTYuMTY2NjcsNi4xNjY2NmMtMy40MDU3NSwwIC02LjE2NjY2LC0yLjc2MDkxIC02LjE2NjY2LC02LjE2NjY2eiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjZmZhYjE5IiBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PHBhdGggZD0iTTI0MC42NjY2NywxOTIuNjY2NjdjMCwtMy40MDU3NSAyLjc2MDkxLC02LjE2NjY2IDYuMTY2NjYsLTYuMTY2NjZjMy40MDU3NSwwIDYuMTY2NjYsMi43NjA5MSA2LjE2NjY2LDYuMTY2NjZjMCwzLjQwNTc1IC0yLjc2MDkxLDYuMTY2NjYgLTYuMTY2NjYsNi4xNjY2NmMtMy40MDU3NSwwIC02LjE2NjY2LC0yLjc2MDkxIC02LjE2NjY2LC02LjE2NjY2eiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjZmZhYjE5IiBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PC9nPjwvZz48L3N2Zz4=";

  const breakIcon =
"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI2NS43OTU1MSIgaGVpZ2h0PSI2MC4wNzQ5MiIgdmlld0JveD0iMCwwLDY1Ljc5NTUxLDYwLjA3NDkyIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjA3LjEwMjI1LC0xNDkuOTYyNTQpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTIyOS4xNzQzNSwxNTQuNDM0MjJjMCwxLjIgMC41LDIuNCAxLjEsMi42YzAuOSwwLjMgMC45LDEuNSAwLjMsNC4zYy0wLjcsMyAtMS42LDQuMSAtMy45LDQuOGMtMS43LDAuNSAtNC44LDIuMyAtNi45LDMuOGMtNC44LDMuNSAtNy4yLDMuNiAtMTAuMywwLjdjLTMuNywtMy41IC0zLjEsLTcuOCAyLC0xM2MyLjMsLTIuNCA1LjgsLTUuMSA3LjcsLTZjNi4xLC0zIDEwLC0xLjkgMTAsMi44ek0yMjAuNjc0MzUsMTU1LjczNDIyYy00LjgsMyAtOS44LDguOCAtOS4yLDEwLjVjMC45LDIuMyAzLjEsMiA4LjQsLTEuNGMyLjYsLTEuNyA1LjMsLTMgNiwtM2MwLjcsMCAxLjMsLTAuNSAxLjMsLTFjMCwtMC42IC0wLjYsLTEgLTEuNCwtMWMtMS45LDAgLTIuOSwtMyAtMS41LC00LjZjMS42LC0yIC0wLjEsLTEuNyAtMy42LDAuNXoiIGZpbGwtb3BhY2l0eT0iMC4xNTY4NiIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIxIi8+PHBhdGggZD0iTTIyNC4zMDc2NSwxNTUuMTk2OTJjLTEuNCwxLjYgLTAuMzgzODUsNC42Mjk4NyAxLjUxNjE1LDQuNjI5ODdjMC44LDAgMS40MDA1NSwwLjQwNzYgMS40MDA1NSwxLjAwNzZjMCwwLjUgLTAuNjAwNiwxLjAwNzU1IC0xLjMwMDYsMS4wMDc1NWMtMC43LDAgLTMuNDQyMzQsMS4zNDE3OCAtNi4wNDIzNCwzLjA0MTc4Yy01LjMsMy40IC03LjU0ODE1LDMuNjc5IC04LjQ0ODE1LDEuMzc5Yy0wLjYsLTEuNyA0LjQ1NDE2LC03LjU3Njc1IDkuMjU0MTYsLTEwLjU3Njc1YzMuNSwtMi4yIDUuMjIwMjIsLTIuNDg5MDQgMy42MjAyMiwtMC40ODkwNHoiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O25vSG92ZXImcXVvdDs6ZmFsc2UsJnF1b3Q7b3JpZ0l0ZW0mcXVvdDs6WyZxdW90O1BhdGgmcXVvdDsseyZxdW90O2FwcGx5TWF0cml4JnF1b3Q7OnRydWUsJnF1b3Q7c2VnbWVudHMmcXVvdDs6W1tbMjIwLjY3NDM0LDE1NS43MzQyMl0sWzMuNSwtMi4yXSxbLTQuOCwzXV0sW1syMTEuNDc0MzQsMTY2LjIzNDIyXSxbLTAuNiwtMS43XSxbMC45LDIuM11dLFtbMjE5Ljg3NDM0LDE2NC44MzQyMl0sWy01LjMsMy40XSxbMi42LC0xLjddXSxbWzIyNS44NzQzNCwxNjEuODM0MjJdLFstMC43LDBdLFswLjcsMF1dLFtbMjI3LjE3NDM0LDE2MC44MzQyMl0sWzAsMC41XSxbMCwtMC42XV0sW1syMjUuNzc0MzQsMTU5LjgzNDIyXSxbMC44LDBdLFstMS45LDBdXSxbWzIyNC4yNzQzNCwxNTUuMjM0MjJdLFstMS40LDEuNl0sWzEuNiwtMl1dXSwmcXVvdDtjbG9zZWQmcXVvdDs6dHJ1ZSwmcXVvdDtmaWxsQ29sb3ImcXVvdDs6WzAsMCwwXX1dfSIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48cGF0aCBkPSJNMjQxLjQ3NDM1LDE1MC41MzQyMmw2LjEsMC42YzYuOSwwLjcgMTQsMi45IDE3LjQsNS41YzIuMSwxLjYgMi4yLDIuMiAxLjMsNi4yYy0xLjgsOC4yIC05LjYsMTIuOSAtMTUsOS4xYy0xLjYsLTEuMiAtMy40LC0yLjEgLTQsLTIuMWMtMS45LDAgLTEwLjEsLTguMiAtMTAuMSwtMTAuMWMwLC0xIDEsLTMuNCAyLjIsLTUuNXpNMjQyLjY3NDM1LDE1Ny4yMzQyMmMtMS41LDIuMiAtMS40LDIuNiAwLjgsNWMxLjMsMS40IDIuOCwyLjYgMy4yLDIuNmMwLjUsMCAyLjgsMC45IDUuMiwyLjFjNCwxLjkgNC41LDIgNi43LDAuNWMxLjQsLTAuOCAyLjcsLTMgMy4xLC00LjdjMC45LC00IC0wLjYsLTUuMyAtNy43LC02LjhjLTcuNCwtMS42IC05LjYsLTEuNCAtMTEuMywxLjN6IiBmaWxsLW9wYWNpdHk9IjAuMTU2ODYiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMSIvPjxwYXRoIGQ9Ik0yNTMuOTkyMDksMTU1Ljg4NzQ3YzcuMSwxLjUgOC42MzE5OSwyLjg1MTk3IDcuNzMxOTksNi44NTE5N2MtMC40LDEuNyAtMS43MTE1NSwzLjkyNzA2IC0zLjExMTU1LDQuNzI3MDZjLTIuMiwxLjUgLTIuNzM3MzUsMS40MTc3MSAtNi43MzczNSwtMC40ODIyOWMtMi40LC0xLjIgLTQuNzQzNDQsLTIuMTIzODQgLTUuMjQzNDQsLTIuMTIzODRjLTAuNCwwIC0xLjkwNzI4LC0xLjIyMjkyIC0zLjIwNzI4LC0yLjYyMjkyYy0yLjIsLTIuNCAtMi4yOTUwMSwtMi44MjUyMiAtMC43OTUwMSwtNS4wMjUyMmMxLjcsLTIuNyAzLjk2MjY1LC0yLjkyNDc2IDExLjM2MjY1LC0xLjMyNDc2eiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7bm9Ib3ZlciZxdW90OzpmYWxzZSwmcXVvdDtvcmlnSXRlbSZxdW90OzpbJnF1b3Q7UGF0aCZxdW90Oyx7JnF1b3Q7YXBwbHlNYXRyaXgmcXVvdDs6dHJ1ZSwmcXVvdDtzZWdtZW50cyZxdW90OzpbW1syNDIuNjc0MzQsMTU3LjIzNDIyXSxbMS43LC0yLjddLFstMS41LDIuMl1dLFtbMjQzLjQ3NDM0LDE2Mi4yMzQyMl0sWy0yLjIsLTIuNF0sWzEuMywxLjRdXSxbWzI0Ni42NzQzNCwxNjQuODM0MjJdLFstMC40LDBdLFswLjUsMF1dLFtbMjUxLjg3NDM0LDE2Ni45MzQyMl0sWy0yLjQsLTEuMl0sWzQsMS45XV0sW1syNTguNTc0MzQsMTY3LjQzNDIyXSxbLTIuMiwxLjVdLFsxLjQsLTAuOF1dLFtbMjYxLjY3NDM0LDE2Mi43MzQyMl0sWy0wLjQsMS43XSxbMC45LC00XV0sW1syNTMuOTc0MzQsMTU1LjkzNDIyXSxbNy4xLDEuNV0sWy03LjQsLTEuNl1dXSwmcXVvdDtjbG9zZWQmcXVvdDs6dHJ1ZSwmcXVvdDtmaWxsQ29sb3ImcXVvdDs6WzAsMCwwXX1dfSIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48cGF0aCBkPSJNMjQ3LjM3NDM1LDE3NC45MzQyMmw0LjQsMi4xYzQuMywyLjEgNC4zLDIuMSA3LjksMC4yYzUuMywtMi44IDcsLTEuMyA3LDYuNmMwLjEsNS43IDAuMyw2LjMgMi44LDcuNmMzLjQsMS44IDQuNCw1LjYgMi40LDguOGMtMS4yLDEuOCAtNC44LDMuNSAtMTQuMSw2LjZjLTE2LjYsNS41IC0xNi41LDUuNiAtMjIuNSwtMTMuNGMtMy4yLC05LjkgLTMuMiwtMTAgLTEuMywtMTIuNWMyLC0yLjcgNi42LC0zLjQgMTAuNCwtMS43YzEuMywwLjYgMS45LDAuMiAyLjQsLTEuOHpNMjUyLjI3NDM1LDE4MS44MzQyMmMtMS40LC0wLjcgLTIuMSwtMC40IC0zLjEsMS41bC0xLjMsMi4zbC00LjMsLTIuMWMtNywtMy4zIC03LjMsLTEuOCAtMi45LDExLjNjMi4xLDYuMSA0LjIsMTEuMyA0LjUsMTEuNWMxLDAuNiAyMC44LC02LjEgMjIuNiwtNy42YzIuMiwtMS44IDEuNywtMi44IC0zLC01LjFsLTQuNCwtMi4xbDEuNCwtMy4zYzAuOCwtMS44IDEuNCwtNC4zIDEuNCwtNS40YzAsLTIuMSAtMS40LC0yLjcgLTIuNSwtMWMtMC4zLDAuNSAtMiwxIC0zLjYsMWMtMS43LDAgLTMuOCwtMC40IC00LjgsLTF6IiBmaWxsLW9wYWNpdHk9IjAuMTU2ODYiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMSIvPjxwYXRoIGQ9Ik0yNTcuMDkwNDksMTgyLjc4NjljMS42LDAgMy4zMTAxNCwtMC40OTUyMSAzLjYxMDE0LC0wLjk5NTIxYzEuMSwtMS43IDIuNTA3MzEsLTEuMDk0NSAyLjUwNzMxLDEuMDA1NWMwLDEuMSAtMC41OTE1MiwzLjYxMDAzIC0xLjM5MTUyLDUuNDEwMDNsLTEuMzk0MTYsMy4zMTI3NWw0LjQwMjA4LDIuMTE0MzZjNC43LDIuMyA1LjE5NzEsMy4zMTY2OCAyLjk5NzEsNS4xMTY2OGMtMS44LDEuNSAtMjEuNjc0MjQsOC4yMjUyMSAtMjIuNjc0MjQsNy42MjUyMWMtMC4zLC0wLjIgLTIuNDIyNjMsLTUuNDM3MiAtNC41MjI2MywtMTEuNTM3MmMtNC40LC0xMy4xIC00LjA4NTE0LC0xNC42NDA1OSAyLjkxNDg2LC0xMS4zNDA1OWw0LjMwNjQ0LDIuMDk0N2wxLjMwOTQ2LC0yLjMwNTE0YzEsLTEuOSAxLjcxNDI2LC0yLjIwMzUzIDMuMTE0MjYsLTEuNTAzNTNjMSwwLjYgMy4xMjA4OSwxLjAwMjQ1IDQuODIwODksMS4wMDI0NXoiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O25vSG92ZXImcXVvdDs6ZmFsc2UsJnF1b3Q7b3JpZ0l0ZW0mcXVvdDs6WyZxdW90O1BhdGgmcXVvdDsseyZxdW90O2FwcGx5TWF0cml4JnF1b3Q7OnRydWUsJnF1b3Q7c2VnbWVudHMmcXVvdDs6W1tbMjUyLjI3NDM0LDE4MS44MzQyMl0sWzEsMC42XSxbLTEuNCwtMC43XV0sW1syNDkuMTc0MzQsMTgzLjMzNDIyXSxbMSwtMS45XSxbMCwwXV0sWzI0Ny44NzQzNCwxODUuNjM0MjJdLFtbMjQzLjU3NDM0LDE4My41MzQyMl0sWzAsMF0sWy03LC0zLjNdXSxbWzI0MC42NzQzNCwxOTQuODM0MjJdLFstNC40LC0xMy4xXSxbMi4xLDYuMV1dLFtbMjQ1LjE3NDM0LDIwNi4zMzQyMl0sWy0wLjMsLTAuMl0sWzEsMC42XV0sW1syNjcuNzc0MzQsMTk4LjczNDIyXSxbLTEuOCwxLjVdLFsyLjIsLTEuOF1dLFtbMjY0Ljc3NDM0LDE5My42MzQyMl0sWzQuNywyLjNdLFswLDBdXSxbMjYwLjM3NDM0LDE5MS41MzQyMl0sW1syNjEuNzc0MzQsMTg4LjIzNDIyXSxbMCwwXSxbMC44LC0xLjhdXSxbWzI2My4xNzQzNCwxODIuODM0MjJdLFswLDEuMV0sWzAsLTIuMV1dLFtbMjYwLjY3NDM0LDE4MS44MzQyMl0sWzEuMSwtMS43XSxbLTAuMywwLjVdXSxbWzI1Ny4wNzQzNCwxODIuODM0MjJdLFsxLjYsMF0sWy0xLjcsMF1dXSwmcXVvdDtjbG9zZWQmcXVvdDs6dHJ1ZSwmcXVvdDtmaWxsQ29sb3ImcXVvdDs6WzAsMCwwXX1dfSIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L2c+PC9nPjwvc3ZnPg==";

  const newThread =
"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMS4zMzMzMyIgaGVpZ2h0PSIyMS4zMzMzMyIgdmlld0JveD0iMCwwLDIxLjMzMzMzLDIxLjMzMzMzIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjI5LjMzMzMzLC0xNjkuMzMzMzMpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMjQ0LjM0NzY4LDE3Ni41OTA5OGgtMi4xMDY5NGwtMC4yODAyLDIuMTc0MTlsLTMuOTczMzUsMC4wMDYxMWwtMC4yNzQ5NSwtMi4xODAzaC0yLjA1Nzk3Yy0wLjU4NjQxLDAgLTAuODY5MjEsLTAuNzMyNjUgLTAuNDYzOTksLTEuMTU2ODJsNC4zNDQ4NywtNC41NzU4N2MwLjI1NzA5LC0wLjI1NzA3IDAuNjc0NTYsLTAuMjU3MDcgMC45MTgxOCwwbDQuMzU5NTYsNC41NzU4N2MwLjQwNDAxLDAuNDI0MTcgMC4xMTAxOSwxLjE1NjgyIC0wLjQ2NTIyLDEuMTU2ODIiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLW9wYWNpdHk9IjAuMiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjIuNSIvPjxwYXRoIGQ9Ik0yNDQuMzQ3NjgsMTgzLjQwOTAzYzAuNTc1NCwwIDAuODY5MjIsMC43MzI2NSAwLjQ2NTIyLDEuMTU2ODJsLTQuMzU5NTYsNC41NzU4N2MtMC4yNDM2MywwLjI1NzA3IC0wLjY2MTA5LDAuMjU3MDcgLTAuOTE4MTgsMGwtNC4zNDQ4NywtNC41NzU4N2MtMC40MDUyMywtMC40MjQxNyAtMC4xMjI0MiwtMS4xNTY4MiAwLjQ2Mzk5LC0xLjE1NjgyaDIuMDU3OTdsMC4yNTI2LC0yLjE0ODZsMy45ODA2MiwwLjAyMzE2bDAuMjk1MjgsMi4xMjU0NGgyLjEwNjk0IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2Utb3BhY2l0eT0iMC4yIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMi41Ii8+PHBhdGggZD0iTTI0NC4zNDc2OCwxNzYuNTkwOThoLTIuMTA2OTRsLTAuOTA0NzIsNi44MzgxYy0wLjA5Nzk0LDAuNzg0MDcgLTAuNzk1NzYsMS4zMzY3NyAtMS41NTQ4LDEuMjIxMDljLTAuNjEyMTIsLTAuMDg5OTggLTEuMDg5NTgsLTAuNjA0MTIgLTEuMTY0MjYsLTEuMjIxMDlsLTAuOTA0NzIsLTYuODM4MWgtMi4wNTc5N2MtMC41ODY0MSwwIC0wLjg2OTIxLC0wLjczMjY1IC0wLjQ2Mzk5LC0xLjE1NjgybDQuMzQ0ODcsLTQuNTc1ODdjMC4yNTcwOSwtMC4yNTcwNyAwLjY3NDU2LC0wLjI1NzA3IDAuOTE4MTgsMGw0LjM1OTU2LDQuNTc1ODdjMC40MDQwMSwwLjQyNDE3IDAuMTEwMTksMS4xNTY4MiAtMC40NjUyMiwxLjE1NjgyIiBmaWxsPSIjZmZmZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PHBhdGggZD0iTTI0NC4zNDc2OCwxODMuNDA5MDNjMC41NzU0LDAgMC44NjkyMiwwLjczMjY1IDAuNDY1MjIsMS4xNTY4MmwtNC4zNTk1Niw0LjU3NTg3Yy0wLjI0MzYzLDAuMjU3MDcgLTAuNjYxMDksMC4yNTcwNyAtMC45MTgxOCwwbC00LjM0NDg3LC00LjU3NTg3Yy0wLjQwNTIzLC0wLjQyNDE3IC0wLjEyMjQyLC0xLjE1NjgyIDAuNDYzOTksLTEuMTU2ODJoMi4wNTc5N2wwLjkwNDcyLC02LjgzODExYzAuMDc0NjgsLTAuNjE2OTcgMC41NTIxNCwtMS4xMzExMSAxLjE2NDI2LC0xLjIyMTA5YzAuNzU5MDQsLTAuMTE1NjggMS40NTY4NiwwLjQzNzAyIDEuNTU0OCwxLjIyMTA5bDAuOTA0NzIsNi44MzgxMWgyLjEwNjk0IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIvPjxwYXRoIGQ9Ik0yMjkuMzMzMzMsMTkwLjY2NjY3di0yMS4zMzMzM2gyMS4zMzMzM3YyMS4zMzMzM3oiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiLz48L2c+PC9nPjwvc3ZnPg==";

  const keysMenu = [
    { text: "space", value: "space" },
    { text: "up arrow", value: "up arrow" }, { text: "down arrow", value: "down arrow" },
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

  let keybinds = {};
  runtime.on("KEY_PRESSED", key => {
    key = key.toLowerCase();
    if (keybinds[key]) {
      // Use this for compatibility with other extensions
      keybinds[key].keyV.forEach(item => {
        if (item === "space") item = " ";
        if (item.includes("arrow")) item = item.charAt(0).toUpperCase() + item.slice(1).replace(" arrow", "");
        runtime.ioDevices.keyboard.postData({ key: item, isDown: true });
      });
    }
  });

  vm.on("EXTENSION_ADDED", tryUseScratchBlocks);
  vm.on("BLOCKSINFO_UPDATE", tryUseScratchBlocks);
  tryUseScratchBlocks();
  function tryUseScratchBlocks() {
    if (!window.ScratchBlocks) return;
    vm.removeListener("EXTENSION_ADDED", tryUseScratchBlocks);
    vm.removeListener("BLOCKSINFO_UPDATE", tryUseScratchBlocks);
    const originalCheck = ScratchBlocks.scratchBlocksUtils.isShadowArgumentReporter;
    ScratchBlocks.scratchBlocksUtils.isShadowArgumentReporter = function (block) {
      const result = originalCheck(block);
      if (result) return true;
      return block.isShadow() && regeneratedReporters.includes(block.type);
    };
  }

  class SPadvControl {
    getInfo() {
      return {
        id: "SPadvControl",
        name: "Extra Controls",
        color1: "#FFAB19",
        color2: "#EC9C13",
        color3: "#CF8B17",
        menuIconURI,
        blocks: [
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
            branchIconURI: "",
            arguments: {
              CON1: { type: Scratch.ArgumentType.BOOLEAN },
              CON2: { type: Scratch.ArgumentType.BOOLEAN }
            }
          },
          "---",
          {
            opcode: "simuRun",
            extensions: ["colours_control"],
            blockType: Scratch.BlockType.CONDITIONAL,
            text: "simultaneously run",
            branchCount: 2
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
            blockType: Scratch.BlockType.LOOP,
            text: "async"
          },
          { blockType: Scratch.BlockType.XML, xml: `<block type="SPadvControl_newThreadAdv"><value name="ARGS"><shadow type="text"><field name="TEXT">{ info : 1 }</field></shadow></value><value name="FRAME"><shadow type="SPadvControl_threadArgs"></shadow></value></block>` },
          {
            opcode: "newThreadAdv", blockType: Scratch.BlockType.LOOP,
            text: "start new thread with [FRAME] set to [ARGS]",
            hideFromPalette: true, branchIconURI: newThread,
            arguments: {
              ARGS: { type: Scratch.ArgumentType.STRING, defaultValue: "{ info : 1 }" },
              FRAME: {}
            }
          },
          {
            opcode: "threadArgs", blockType: Scratch.BlockType.REPORTER,
            hideFromPalette: true, text: "argument"
          },
          "---",
          {
            opcode: "onCall",
            extensions: ["colours_control"],
            blockType: Scratch.BlockType.CONDITIONAL,
            text: "on call [CALL] run",
            branchCount: 1,
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
          {
            opcode: "asClone",
            extensions: ["colours_control"],
            blockType: Scratch.BlockType.LOOP,
            text: "as clones of myself with [VAR] set to [VAL]",
            arguments: {
              VAR: { type: Scratch.ArgumentType.STRING, menu: "varsMenu" },
              VAL: { type: Scratch.ArgumentType.STRING, defaultValue: "0" }
            }
          },
          {
            opcode: "deleteRun",
            extensions: ["colours_control"],
            blockType: Scratch.BlockType.LOOP,
            text: "delete this clone and tell main sprite",
            isTerminal: true
          },
          { blockType: Scratch.BlockType.LABEL, text: "Mostly Functional" },
          {
            opcode: "breakLoop",
            extensions: ["colours_control"],
            blockType: Scratch.BlockType.COMMAND,
            text: "break out loop [ICON]",
            isTerminal: true,
            arguments: {
              ICON: { type: Scratch.ArgumentType.IMAGE, dataURI: breakIcon }
            }
          }
        ],
        menus: {
          varsMenu: {
            acceptReporters: true,
            items: "getPrivateVars"
          },
          runTypes: {
            acceptReporters: true,
            items: ["forward", "reversed", "forward and reversed", "randomized"]
          },
          keys: {
            acceptReporters: true,
            items: keysMenu
          }
        },
      };
    }

    getPrivateVars() {
      const vars = typeof Blockly === "undefined" ? [] : Blockly.getMainWorkspace()
        .getVariableMap().getVariablesOfType("").filter((model) => model.isLocal).map((model) => (model.name));
      if (vars.length > 0) return vars;
      else return [""];
    }

    keybind(args) {
      const key1 = Scratch.Cast.toString(args.KEY1);
      const key2 = Scratch.Cast.toString(args.KEY2);
      if (key1 === key2) return;
      if (keybinds[key1]) {
        if (keybinds[key1].keyV.indexOf(key2) === -1) keybinds[key1].keyV.push(key2);
      } else { keybinds[key1] = { keyV : [key2] } }
    }

    getKeybind(args) {
      const key = keybinds[Scratch.Cast.toString(args.KEY)];
      return key ? JSON.stringify(key.keyV) : `["${args.KEY}"]`;
    }

    resetKey(args) { delete keybinds[Scratch.Cast.toString(args.KEY)] }

    resetBinds() { keybinds = {} }

    repeatForUntil(args, util) {
      const condition = Scratch.Cast.toBoolean(args.CON);
      if (typeof util.stackFrame.loopCounter === "undefined") util.stackFrame.loopCounter = Math.round(Scratch.Cast.toNumber(args.NUM));
      util.stackFrame.loopCounter--;
      if (!condition && util.stackFrame.loopCounter >= 0) util.startBranch(1, true);
    }

    repeatSecUntil(args, util) {
      const condition = Scratch.Cast.toBoolean(args.CON);
      if (condition) return; // Dont run once
      if (util.stackTimerNeedsInit()) {
        args.NUM = Math.max(0, 1000 * args.NUM);
        util.startStackTimer(args.NUM);
        Scratch.vm.runtime.requestRedraw();
        util.startBranch(1, true);
      } else if (!util.stackTimerFinished() && !condition) {
        util.startBranch(1, true);
      }
    }

    spayedCondition(args, util) {
      if (typeof util.stackFrame.index === "undefined") util.stackFrame.index = true;
      if (!Scratch.Cast.toBoolean(args.CON1) && util.stackFrame.index) {
        return;
      } else {
        if (!Scratch.Cast.toBoolean(args.CON2)) {
          util.stackFrame.index = false;
          util.startBranch(1, true);
        } else {
          util.stackFrame.index = true;
          return;
        }
      }
    }

    simuRun(args, util) {
      if (
        util.thread.target.blocks.getBranch(util.thread.peekStack(), 1) &&
        util.thread.target.blocks.getBranch(util.thread.peekStack(), 2)
      ) {
        let thread1 = util.thread.target.blocks.getBranch(util.thread.peekStack(), 1);
        const thread2 = util.thread.target.blocks.getBranch(util.thread.peekStack(), 2);
        const target = util.target;
        const newRuntime = util.sequencer.runtime;
        //minimize push time
        thread1 = newRuntime._pushThread(thread1, target);
        thread1.status = 1;
        newRuntime._pushThread(thread2, target);
        thread1.status = 0;
      }
    }

    async runType(args, util) {
      const branch = util.thread.target.blocks.getBranch(util.thread.peekStack(), 1);
      if (branch) {
        if (args.TYPE === "forward") runtime._pushThread(branch, util.target);
        else if (args.TYPE === "reversed" || args.TYPE === "randomized") {
          const container = util.target.blocks;
          let blockOrder = [];
          let ID = branch;
          while (ID !== null) {
            blockOrder.push(ID);
            var blockInfo = container.getBlock(ID);
            ID = blockInfo.next;
          }
          if (args.TYPE === "reversed") blockOrder = blockOrder.reverse();
          else blockOrder = blockOrder.sort(() => Math.random() - 0.5);
          for (let i = 0; i < blockOrder.length; i++) {
            ID = blockOrder[i];
            var blockInfo = container.getBlock(ID);
            var oldInfo = [blockInfo.parent, blockInfo.next];
            blockInfo.parent = null;
            blockInfo.next = null;
            var thread = runtime._pushThread(ID, util.target, {stackClick: true});
            thread.stack = [];
            thread.pushStack(ID);
            if (vm.runtime.compilerOptions.enabled) thread.tryCompile();
            await new Promise(resolve => {
              const interval = setInterval(() => {
                if (!vm.runtime.isActiveThread(thread)) {
                  clearInterval(interval);
                  resolve();
                }
              }, 1);
            });
            blockInfo.parent = oldInfo[0];
            blockInfo.next = oldInfo[1];
          }
        } else {
          const thread = runtime._pushThread(branch, util.target);
          await new Promise(resolve => {
            const checkThread = () => {
              if (!vm.runtime.isActiveThread(thread)) resolve();
              else setTimeout(checkThread, 1);
            };
            checkThread();
          });
          await this.runType({ ...args, TYPE: "reversed" }, util);
        }
      }
    }

    onCall() { /* ignore initially running */ }

    runBranch(args, util) {
      const callID = Scratch.Cast.toString(args.ID);
      const threads2Wait = []; // used for "run and wait"
      for (const target of runtime.targets) {
        const blocks = target.blocks;
        const blockIDs = Object.keys(blocks._blocks)
          .filter(key => {
            const block = blocks._blocks[key];
            return (
              block.opcode === "SPadvControl_onCall" && 
              blocks.getBlock(block.inputs.CALL.block)?.fields?.TEXT?.value === callID
            );
          })
          .map(key => blocks._blocks[key].id);
        for (const blockID of blockIDs) {
          const branch = blocks.getBranch(blockID, 1);
          if (branch) threads2Wait.push(util.sequencer.runtime._pushThread(branch, target));
        }
      }
      return threads2Wait;
    }

    async runBranchWait(args, util) {
      let threads2Wait = this.runBranch(args, util);
      await new Promise(resolve => {
        const interval = setInterval(() => {
          for (let i = threads2Wait.length - 1; i >= 0; i--) {
            if (!vm.runtime.isActiveThread(threads2Wait[i])) threads2Wait.splice(i, 1);
          }
          if (threads2Wait.length === 0) {
            clearInterval(interval);
            resolve();
          }
        }, 1);
      });
    }

    async asyncCode(args, util) {
      const target = util.target;
      const container = target.blocks;
      if (util.thread.target.blocks.getBranch(util.thread.peekStack(), 1)) {
        let ID = util.thread.target.blocks.getBranch(util.thread.peekStack(), 1);
        while (ID !== null) {
          var blockInfo = container.getBlock(ID);
          var oldInfo = [blockInfo.parent, blockInfo.next];
          blockInfo.parent = null;
          blockInfo.next = null;
          var thread = runtime._pushThread(ID, target, {stackClick: true});
          thread.stack = [];
          thread.pushStack(ID);
          if (vm.runtime.compilerOptions.enabled) thread.tryCompile();
          await new Promise(resolve => {
            const interval = setInterval(() => {
              if (!vm.runtime.isActiveThread(thread)) {
                clearInterval(interval);
                resolve();
              }
            }, 1);
          });
          blockInfo.parent = oldInfo[0];
          blockInfo.next = oldInfo[1];
          ID = blockInfo.next;
        }
      }
    }

    asClone(args, util) {
      const clones = util.target.sprite.clones;
      const branch = util.thread.target.blocks.getBranch(util.thread.peekStack(), 1);
      if (branch) {
        for (var i = 1; i < clones.length; i++) {
          if (clones[i]) {
            const variable = clones[i].lookupVariableByNameAndType(args.VAR);
            if (variable && variable.value === args.VAL) runtime._pushThread(branch, clones[i]);
          }
        }
      }
    }

    deleteRun(args, util) {
      const target =  util.target;
      if (target.isOriginal) return;
      const branch = util.thread.target.blocks.getBranch(util.thread.peekStack(), 1);
      runtime.disposeTarget(target);
      runtime.stopForTarget(target);
      if (branch) runtime._pushThread(branch, target.sprite.clones[0]);
    }

    newThreadAdv(args, util) {
      const branch = util.thread.target.blocks.getBranch(util.thread.peekStack(), 0);
      if (branch) {
        const thread = util.sequencer.runtime._pushThread(branch, util.target);
        const params = thread.advCtrl;
        if (typeof params === "undefined") thread.stackFrames[0].advCtrl = {};
        thread.stackFrames[0].advCtrl.arg = Scratch.Cast.toString(args.ARGS);
      }
    }
    threadArgs(args, util) {
      const stack = util.thread.stackFrames;
      if (typeof stack === "undefined") return "";
      const params = stack[0].advCtrl;
      if (typeof params === "undefined") return "";
      return params.arg || "";
    }

    // Todo: Somehow tell breaked loops inside a loop to continue running the outer loop
    // Cant do it currently... maybe in the future. This is the best we get
    breakLoop(_, util) {
      return new Promise(resolve => {
        const container = util.thread.blockContainer;
        const myID = container.getBlock(util.thread.isCompiled ? util.thread.peekStack() : util.thread.peekStackFrame().op.id);
        let newID = myID;
        let con = true;
        while (con) {
          if (newID.parent !== null) {
            newID = container.getBlock(newID.parent);
            // check if block is IN or UNDER this Loop Block
            if (container.getBranch(newID.id) !== null && this.isInLoop(container, myID.id, newID.id)) {
              con = false;
            }
          } else {
            newID = null;
            con = false;
            break;
          }
        }
        if (!newID) {
          resolve();
          return;
        }
        newID = newID.next || this.getOuterNext(container, newID);
        util.stopThisScript();
        if (newID) vm.runtime._pushThread(newID, util.target);
        resolve();
      });
    }
    isInLoop(container, myID, loopBlock) {
      let value = false;
      let ID = container.getBranch(loopBlock, 1);
      if (ID) {
        while (ID !== null) {
          var blockInfo = container.getBlock(ID);
          if (ID === myID) value = true;
          ID = blockInfo.next;
        }
      }
      return value;
    }
    getOuterNext(container, block) {
      let value = null;
      let ID = block;
      while (ID !== null) {
        ID = container.getBlock(ID.parent);
        if (ID) {
          if (container.getBranch(ID.id) !== null && ID.next) {
            value = ID.next;
            ID = null;
          }
        } else { ID = null }
      }
      return value;
    }
  }

  Scratch.extensions.register(new SPadvControl());
})(Scratch);
