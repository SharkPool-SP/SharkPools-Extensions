// Name: Sprite Panel
// ID: SPspritePanel
// Description: Complex Panel for Sprite and Clone Management
// Licence: MIT AND LGPLv3 License
// By: SharkPool & FurryR

// Version V.1.1.11

(function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) throw new Error("Sprite Panel needs to run unsandboxed");

  const menuIconURI =
    "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI5Ni45OTE3NSIgaGVpZ2h0PSI5Ni45OTE3NSIgdmlld0JveD0iMCwwLDk2Ljk5MTc1LDk2Ljk5MTc1Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTkxLjUwNDE2LC0xMzEuNTA0MTIpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTI0MC4wMDAwNCwxMzEuNTA0MTJjMjYuNzgzNTMsMCA0OC40OTU4NywyMS43MTIzNCA0OC40OTU4Nyw0OC40OTU4N2MwLDI2Ljc4MzUzIC0yMS43MTIzNCw0OC40OTU4OCAtNDguNDk1ODcsNDguNDk1ODhjLTI2Ljc4MzUzLDAgLTQ4LjQ5NTg4LC0yMS43MTIzNSAtNDguNDk1ODgsLTQ4LjQ5NTg4YzAsLTI2Ljc4MzUzIDIxLjcxMjM1LC00OC40OTU4NyA0OC40OTU4OCwtNDguNDk1ODd6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZmlsbD0iIzI5NjY2NiIgc3Ryb2tlPSIjMjk0YTY2Ii8+PHBhdGggZD0iTTI0MC4wMDAwMywxMzcuMzgyNDFjMjMuNTM3MDUsMCA0Mi42MTc1OSwxOS4wODA1NSA0Mi42MTc1OSw0Mi42MTc1OWMwLDIzLjUzNzA1IC0xOS4wODA1NSw0Mi42MTc1OSAtNDIuNjE3NTksNDIuNjE3NTljLTIzLjUzNzA1LDAgLTQyLjYxNzU5LC0xOS4wODA1NSAtNDIuNjE3NTksLTQyLjYxNzU5YzAsLTIzLjUzNzA1IDE5LjA4MDU1LC00Mi42MTc1OSA0Mi42MTc1OSwtNDIuNjE3NTl6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZmlsbD0iIzNkOTk5OSIgc3Ryb2tlPSIjMjk0YTY2Ii8+PHBhdGggZD0iTTI1My44MTY4NCwxNTMuODE2OGM2LjEwNzI3LDAgMTEuMDU4Miw0Ljk1MDkyIDExLjA1ODIsMTEuMDU4MmMwLDYuMTA3MjcgLTQuOTUwOTIsMTEuMDU4MiAtMTEuMDU4MiwxMS4wNTgyaC0yNy42MzM2Yy02LjEwNzI3LDAgLTExLjA1ODIsLTQuOTUwOTIgLTExLjA1ODIsLTExLjA1ODJjMCwtNi4xMDcyNyA0Ljk1MDkyLC0xMS4wNTgyIDExLjA1ODIsLTExLjA1ODJ6TTIxOC44NzUwMywxNjQuODc1MDFjMCw0LjU1NjM1IDMuNjkzNjUsOC4yNSA4LjI1LDguMjVjNC41NTYzNSwwIDguMjUsLTMuNjkzNjUgOC4yNSwtOC4yNWMwLC00LjU1NjM1IC0zLjY5MzY1LC04LjI1IC04LjI1LC04LjI1Yy00LjU1NjM1LDAgLTguMjUsMy42OTM2NSAtOC4yNSw4LjI1eiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0ibm9uZSIvPjxwYXRoIGQ9Ik0yMjYuMTgzMjQsMjA2LjE4MzIxYy02LjEwNzI4LDAgLTExLjA1ODIsLTQuOTUwOTMgLTExLjA1ODIsLTExLjA1ODJjMCwtNi4xMDcyNyA0Ljk1MDkyLC0xMS4wNTgyIDExLjA1ODIsLTExLjA1ODJoMjcuNjMzNmM2LjEwNzI4LDAgMTEuMDU4Miw0Ljk1MDkzIDExLjA1ODIsMTEuMDU4MmMwLDYuMTA3MjcgLTQuOTUwOTIsMTEuMDU4MiAtMTEuMDU4MiwxMS4wNTgyek0yNjEuMTI1MDQsMTk1LjEyNTAxYzAsLTQuNTU2MzUgLTMuNjkzNjUsLTguMjUgLTguMjUsLTguMjVjLTQuNTU2MzUsMCAtOC4yNSwzLjY5MzY1IC04LjI1LDguMjVjMCw0LjU1NjM1IDMuNjkzNjUsOC4yNSA4LjI1LDguMjVjNC41NTYzNSwwIDguMjUsLTMuNjkzNjUgOC4yNSwtOC4yNXoiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9Im5vbmUiLz48L2c+PC9nPjwvc3ZnPg==";
  const deleteSVG =
    "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIzOS43MzU4NSIgaGVpZ2h0PSIzOS43MzU4NSIgdmlld0JveD0iMCwwLDM5LjczNTg1LDM5LjczNTg1Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjIwLjEzMjA4LC0xNjAuMTMyMDcpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0yMzIuNjczNDksMTk1LjMyNjUyYy00LjQxODI4LDAgLTgsLTMuNTgxNzIgLTgsLTh2LTE0LjY1MzAzYzAsLTQuNDE4MjggMy41ODE3MiwtOCA4LC04aDE0LjY1MzAzYzQuNDE4MjgsMCA4LDMuNTgxNzIgOCw4djE0LjY1MzAzYzAsNC40MTgyOCAtMy41ODE3Miw4IC04LDh6IiBmaWxsPSIjZmY0ZDRkIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIvPjxwYXRoIGQ9Ik0yMjAuMTMyMDksMTk5Ljg2Nzkydi0zOS43MzU4NWgzOS43MzU4NXYzOS43MzU4NXoiIGZpbGw9Im5vbmUiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIi8+PHBhdGggZD0iTTIzMi42NzM1LDE5NS4zMjY1M2MtNC40MTgyOCwwIC04LC0zLjU4MTcyIC04LC04di0xNC42NTMwM2MwLC00LjQxODI4IDMuNTgxNzIsLTggOCwtOGgxNC42NTMwM2M0LjQxODI4LDAgOCwzLjU4MTcyIDgsOHYxNC42NTMwM2MwLDQuNDE4MjggLTMuNTgxNzIsOCAtOCw4eiIgZmlsbD0ibm9uZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMjUwOTgiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSI1Ii8+PHBhdGggZD0iTTIzNC4yMTM0NCwxNzYuODE2MjZoMTEuNTcyOTRjMC4yOTMwNiwwIDAuNTMwNjQsMC4yMzc1NyAwLjUzMDY0LDAuNTMwNjNjMCwwLjAxNjA0IC0wLjAwMDcyLDAuMDMyMDcgLTAuMDAyMTgsMC4wNDgwNWwtMC44MzMxNyw5LjE2NDA0Yy0wLjA5OTM5LDEuMDkzMTkgLTEuMDE1OTEsMS45MzAyNCAtMi4xMTM2LDEuOTMwMzVsLTYuNzM1ODcsMC4wMDA3MWMtMS4wOTc4NywwLjAwMDExIC0yLjAxNDY1LC0wLjgzNzAxIC0yLjExNDA1LC0xLjkzMDM3bC0wLjgzMzE1LC05LjE2NDczYy0wLjAyNjUzLC0wLjI5MTg2IDAuMTg4NTUsLTAuNTQ5OTYgMC40ODA0MSwtMC41NzY1YzAuMDE1OTcsLTAuMDAxNDUgMC4wMzIsLTAuMDAyMTcgMC4wNDgwNSwtMC4wMDIxN3pNMjM3LjE2OTk1LDE3My42MzI1bDAuNTg2NTgsLTEuNzU5NzFjMC4wNzIyMiwtMC4yMTY2OCAwLjI3NSwtMC4zNjI4MiAwLjUwMzQsLTAuMzYyODJoMy40ODAxNmMwLjIyODQxLDAgMC40MzExOCwwLjE0NjE0IDAuNTAzNCwwLjM2MjgybDAuNTg2NTgsMS43NTk3Mmg0LjA2ODIxYzAuMjkzMDYsMCAwLjUzMDYzLDAuMjM3NTggMC41MzA2MywwLjUzMDY0djEuMDYxMjdjMCwwLjI5MzA2IC0wLjIzNzU3LDAuNTMwNjMgLTAuNTMwNjMsMC41MzA2M2gtMTMuNzk2NTJjLTAuMjkzMDYsMCAtMC41MzA2NCwtMC4yMzc1NyAtMC41MzA2NCwtMC41MzA2M3YtMS4wNjEyN2MwLC0wLjI5MzA2IDAuMjM3NTgsLTAuNTMwNjQgMC41MzA2NCwtMC41MzA2NHpNMjM4LjI4ODYzLDE3My42MzI1aDMuNDIyNzZsLTAuMzUzNzcsLTEuMDYxMjdoLTIuNzE1MjR6TTIzOC4zMDcwMiwxODAuMDU3MzFjLTAuMjA3MjIsLTAuMjA3MjIgLTAuNTQzMjEsLTAuMjA3MjIgLTAuNzUwNDQsMGwtMC4wNzY4NCwwLjA3Njg0Yy0wLjIwNzIyLDAuMjA3MjIgLTAuMjA3MjIsMC41NDMyMSAwLDAuNzUwNDRsMS42OTI5OCwxLjY5Mjk5bC0xLjY5Mjk4LDEuNjkyOThjLTAuMjA3MjIsMC4yMDcyMiAtMC4yMDcyMiwwLjU0MzIxIDAsMC43NTA0M2wwLjA3Njg0LDAuMDc2ODVjMC4yMDcyMiwwLjIwNzIyIDAuNTQzMjEsMC4yMDcyMiAwLjc1MDQ0LDBsMS42OTI5OSwtMS42OTI5OGwxLjY5Mjk4LDEuNjkyOThjMC4yMDcyMiwwLjIwNzIyIDAuNTQzMiwwLjIwNzIyIDAuNzUwNDMsMGwwLjA3Njg1LC0wLjA3Njg1YzAuMjA3MjIsLTAuMjA3MjIgMC4yMDcyMiwtMC41NDMyMSAwLC0wLjc1MDQzbC0xLjY5Mjk4LC0xLjY5Mjk4bDEuNjkyOTgsLTEuNjkyOTljMC4yMDcyMiwtMC4yMDcyMiAwLjIwNzIyLC0wLjU0MzIxIDAsLTAuNzUwNDRsLTAuMDc2ODUsLTAuMDc2ODRjLTAuMjA3MjIsLTAuMjA3MjIgLTAuNTQzMiwtMC4yMDcyMiAtMC43NTA0MywwbC0xLjY5Mjk4LDEuNjkyOTh6IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIvPjwvZz48L2c+PC9zdmc+";
  const editSVG =
    "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIzOS43MzU4NSIgaGVpZ2h0PSIzOS43MzU4NSIgdmlld0JveD0iMCwwLDM5LjczNTg1LDM5LjczNTg1Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjIwLjEzMjA4LC0xNjAuMTMyMDcpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0yMzIuNjczNDgsMTk1LjMyNjVjLTQuNDE4MjgsMCAtOCwtMy41ODE3MiAtOCwtOHYtMTQuNjUzMDNjMCwtNC40MTgyOCAzLjU4MTcyLC04IDgsLThoMTQuNjUzMDNjNC40MTgyOCwwIDgsMy41ODE3MiA4LDh2MTQuNjUzMDNjMCw0LjQxODI4IC0zLjU4MTcyLDggLTgsOHoiIGZpbGw9IiM0MGQ4ZmYiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIi8+PHBhdGggZD0iTTIzMi42NzM0OSwxOTUuMzI2NTJjLTQuNDE4MjgsMCAtOCwtMy41ODE3MiAtOCwtOHYtMTQuNjUzMDNjMCwtNC40MTgyOCAzLjU4MTcyLC04IDgsLThoMTQuNjUzMDNjNC40MTgyOCwwIDgsMy41ODE3MiA4LDh2MTQuNjUzMDNjMCw0LjQxODI4IC0zLjU4MTcyLDggLTgsOHoiIGZpbGw9Im5vbmUiIHN0cm9rZS1vcGFjaXR5PSIwLjI1MDk4IiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iNSIvPjxwYXRoIGQ9Ik0yMjAuMTMyMDgsMTk5Ljg2Nzkydi0zOS43MzU4NWgzOS43MzU4NXYzOS43MzU4NXoiIGZpbGw9Im5vbmUiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIi8+PHBhdGggZD0iTTI0Ny44NTc1NCwxNzguMjg5MDJjMC42NzEwOCwwLjk0NDk1IDAuNjk4MzcsMi40OTkwOCAwLDMuNDIxOThjMCwwIC0zLjI1MDc2LDQuMDQzNjIgLTcuOTMyMzMsNC4wNDM2MmMtNC42ODE1NywwIC03Ljc4Mjc1LC00LjA0MzYyIC03Ljc4Mjc1LC00LjA0MzYyYy0wLjY3MTA4LC0wLjk0NDk1IC0wLjY5ODM3LC0yLjQ5OTA4IDAsLTMuNDIxOThjMCwwIDMuMTAxMTgsLTQuMDQzNjIgNy43ODI3NSwtNC4wNDM2MmM0LjY4MTU3LDAgNy45MzIzMyw0LjA0MzYyIDcuOTMyMzMsNC4wNDM2MnpNMjM5LjkyNDA1LDE4NC4xODQwMmMyLjMxMTA4LDAgNC4xODQ1OSwtMS44NzM1MSA0LjE4NDU5LC00LjE4NDU5YzAsLTIuMzExMDggLTEuODczNSwtNC4xODQ1OSAtNC4xODQ1OSwtNC4xODQ1OWMtMi4zMTEwOCwwIC00LjE4NDU5LDEuODczNSAtNC4xODQ1OSw0LjE4NDU5YzAsMi4zMTEwOCAxLjg3MzUxLDQuMTg0NTkgNC4xODQ1OSw0LjE4NDU5eiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNMjM3LjgzMjYzLDE4MGMwLC0xLjE1NTcgMC45MzY4OCwtMi4wOTI1OSAyLjA5MjU5LC0yLjA5MjU5YzEuMTU1NywwIDIuMDkyNTksMC45MzY4OCAyLjA5MjU5LDIuMDkyNTljMCwxLjE1NTcgLTAuOTM2ODgsMi4wOTI1OSAtMi4wOTI1OSwyLjA5MjU5Yy0xLjE1NTcsMCAtMi4wOTI1OSwtMC45MzY4OCAtMi4wOTI1OSwtMi4wOTI1OXoiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvZz48L3N2Zz4=";
  // Use Raw SVG Data for changeColor()
  const miniAssets = {
    xy : `<svg xmlns="http://www.w3.org/2000/svg" width="19.483" height="19.483" viewBox="0 0 19.483 19.483"><g fill="#fff" stroke="#fff" stroke-miterlimit="10" style="mix-blend-mode:normal"><path d="M17.738 9.741H1.744m7.997-7.997v15.994" fill-rule="evenodd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12.531 16.029c.259.26.259.68 0 .939l-2.32 2.32c-.26.26-.68.26-.94 0l-2.32-2.32a.664.664 0 0 1 0-.94s1.663-.6 2.769-.6c1.105 0 2.81.6 2.81.6zM9.72 4.054c-1.106 0-2.769-.6-2.769-.6a.664.664 0 0 1 0-.94l2.32-2.32c.26-.26.68-.26.94 0l2.32 2.32c.259.26.259.68 0 .94 0 0-1.706.6-2.811.6m-6.267 8.477a.665.665 0 0 1-.939 0l-2.32-2.32a.664.664 0 0 1 0-.94l2.32-2.32a.666.666 0 0 1 .94 0s.6 1.663.6 2.769c0 1.105-.6 2.81-.6 2.81zM15.428 9.72c0-1.106.6-2.769.6-2.769a.666.666 0 0 1 .94 0l2.32 2.32c.26.26.26.68 0 .94l-2.32 2.32a.666.666 0 0 1-.94 0s-.6-1.706-.6-2.811" stroke="none"/></g></svg>`,
    size : `<svg xmlns="http://www.w3.org/2000/svg" width="19.866" height="19.959" viewBox="0 0 19.866 19.959"><g fill="none" stroke-miterlimit="10" ><path d="M0 19.96V0h19.866v19.96z"/><path d="M16.499 16.502 3.367 3.369m0 13.133L16.499 3.369" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.737 2.01h4.129v4.116m-15.865 0V2.01h4.13m11.734 11.824v4.116h-4.13m-7.606 0H2v-4.116" stroke="#fff" stroke-width="2" stroke-linecap="round"/></g></svg>`,
    dir : `<svg xmlns="http://www.w3.org/2000/svg" width="19.05" height="19.118" viewBox="0 0 19.05 19.118"><g fill="none" stroke="#fff" stroke-width="2" stroke-miterlimit="10" style="mix-blend-mode:normal"><path d="M18.1 18.118H1V1" stroke-linecap="round"/><path d="M9.044 9.985s.117.113.196.193c2.043 2.075 3.356 4.857 3.436 7.884.003.092-9.038.021-11.231.003-.303-.003-.255-.227-.003-.482a4301 4301 0 0 1 7.602-7.598z"/><path d="M2.464 16.565 14.62 4.41" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.966 3.147h4.924v4.909" stroke-linecap="round"/></g></svg>`,
    visible : `<svg xmlns="http://www.w3.org/2000/svg" width="19.857" height="19.857" viewBox="0 0 19.857 19.857"><g stroke-miterlimit="10" style="mix-blend-mode:normal"><path d="M19.232 7.844c.818 1.151.85 3.046 0 4.17 0 0-3.597 4.929-9.303 4.929S.626 12.014.626 12.014c-.818-1.151-.85-3.046 0-4.17 0 0 3.597-4.929 9.303-4.929s9.303 4.929 9.303 4.929m-9.304 7.185a5.1 5.1 0 1 0 0-10.2 5.1 5.1 0 0 0 0 10.2" fill="#fff"/><path d="M7.379 9.929a2.55 2.55 0 1 1 5.1 0 2.55 2.55 0 0 1-5.1 0" fill="#fff"/><path d="M0 19.858V-.001h19.858v19.858z" fill="none"/></g></svg>`,
    drag : `<svg xmlns="http://www.w3.org/2000/svg" width="19.857" height="19.857" viewBox="0 0 19.857 19.857"><g stroke-miterlimit="10"><path d="M0 19.858V-.001h19.858v19.858z" fill="none"/><path d="M4.254 14.233a2.794 2.794 0 0 1-2.794-2.794V2.795A2.794 2.794 0 0 1 4.254 0h8.644a2.794 2.794 0 0 1 2.795 2.795v8.124c-1.451-1.324-2.553-2.158-3.177-2.733-2.478-2.264-3.382-.836-3.382 1.4v4.647z" fill="#fff"/><path d="M11.559 18.873c-.361.402-1.031.149-1.031-.39V9.425c0-.51.612-.776.99-.43l6.688 6.105c.396.361.139 1.016-.4 1.016h-2.718l1.076 2.397a.957.957 0 0 1-.47 1.26.94.94 0 0 1-1.246-.475l-1.088-2.423z" fill="#fff" fill-rule="evenodd"/></g></svg>`,
    stretch : `<svg xmlns="http://www.w3.org/2000/svg" width="19.857" height="19.857" viewBox="0 0 19.857 19.857"><g stroke-miterlimit="10" style="mix-blend-mode:normal"><path d="M0 19.858V-.001h19.858v19.858z" fill="none"/><path d="M6.998 9.929H1.932" fill="#fff" fill-rule="evenodd" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.641 12.719a.665.665 0 0 1-.939 0l-2.32-2.32a.664.664 0 0 1 0-.94l2.32-2.32a.666.666 0 0 1 .94 0s.6 1.663.6 2.769c0 1.105-.6 2.81-.6 2.81z" fill="#fff"/><path d="M6.207 1.108s1.857 5.24 1.857 8.794c0 3.553-1.857 8.848-1.857 8.848" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"/><path d="M17.926 9.929H12.86" fill="#fff" fill-rule="evenodd" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.217 12.719s-.601-1.706-.601-2.811c0-1.106.6-2.769.6-2.769a.666.666 0 0 1 .94 0l2.32 2.32c.26.26.26.68 0 .94l-2.32 2.32a.666.666 0 0 1-.94 0z" fill="#fff"/><path d="M13.651 18.75s-1.857-5.295-1.857-8.848 1.857-8.794 1.857-8.794" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"/></g></svg>`,
    effect : `<svg xmlns="http://www.w3.org/2000/svg" width="19.857" height="19.857" viewBox="0 0 19.857 19.857"><g stroke-miterlimit="10" style="mix-blend-mode:normal"><path d="M0 19.858V-.001h19.858v19.858z" fill="none"/><path d="M11.352 13.792a1.86 1.86 0 0 0 1.312-1.311l.39-1.455c.187-.688 1.162-.688 1.347 0l.392 1.455c.172.64.672 1.14 1.31 1.311l1.455.391c.688.186.688 1.162 0 1.347l-1.454.391a1.86 1.86 0 0 0-1.31 1.31l-.393 1.456c-.185.687-1.16.687-1.346 0l-.391-1.455a1.86 1.86 0 0 0-1.312-1.31l-1.454-.392c-.688-.185-.688-1.161 0-1.347zM3.278 8.759c.487-.272.793-.782.802-1.339l.022-1.267c.011-.599.807-.798 1.098-.275l.617 1.107a1.56 1.56 0 0 0 1.337.802l1.267.022c.6.011.799.807.276 1.1l-1.107.616a1.56 1.56 0 0 0-.802 1.337l-.023 1.267c-.01.599-.806.798-1.098.275l-.616-1.107a1.56 1.56 0 0 0-1.338-.801l-1.267-.022c-.599-.011-.798-.807-.275-1.1zm8.161-6.164a1.21 1.21 0 0 0 .96-.734l.379-.906c.18-.429.81-.344.87.116l.128.974c.055.429.335.795.733.961l.906.379c.429.18.344.81-.116.87l-.974.127a1.21 1.21 0 0 0-.96.734l-.38.906c-.178.429-.809.344-.87-.116l-.127-.974a1.21 1.21 0 0 0-.734-.96l-.906-.38c-.429-.179-.344-.81.116-.87z" fill="#fff" fill-rule="evenodd"/></g></svg>`,
    layer : `<svg xmlns="http://www.w3.org/2000/svg" width="19.857" height="19.857" viewBox="0 0 19.857 19.857"><g stroke-width="0" stroke-miterlimit="10" style="mix-blend-mode:normal" fill="#fff"><path d="M12.342 19.235c-1.333.83-3.493.83-4.826 0L1 15.174c-1.333-.83-1.333-2.177 0-3.008l6.516-4.06c1.333-.831 3.493-.831 4.826 0l6.516 4.06c1.333.83 1.333 2.177 0 3.008z" fill-opacity=".5"/><path d="M12.342 15.494c-1.333.83-3.493.83-4.826 0L1 11.433c-1.333-.83-1.333-2.177 0-3.008l6.516-4.06c1.333-.831 3.493-.831 4.826 0l6.516 4.06c1.333.83 1.333 2.177 0 3.008z" fill-opacity=".75"/><path d="M12.342 11.753c-1.333.83-3.493.83-4.826 0L1 7.692c-1.333-.83-1.333-2.177 0-3.008L7.516.624c1.333-.831 3.493-.831 4.826 0l6.516 4.06c1.333.83 1.333 2.177 0 3.008z"/></g></svg>`,
    costume : `<svg xmlns="http://www.w3.org/2000/svg" width="20.032" height="20.032" viewBox="0 0 20.032 20.032"><g stroke-miterlimit="10" style="mix-blend-mode:normal"><path d="M18.001 5.62c-.846 1.746-2.103 3.76-3.289 5.252-.992 1.256-1.789 1.994-2.55 2.353a.54.54 0 0 1-.513.018.63.63 0 0 1-.371-.34 3.15 3.15 0 0 0-.918-1.224 3.8 3.8 0 0 0-1.398-.666.63.63 0 0 1-.41-.305.72.72 0 0 1-.088-.502c.212-.827.761-1.797 1.716-3.002 1.878-2.41 5.63-5.986 7.45-6.186.496-.072.78.09.956.234.461.395.922 1.26-.584 4.368m-7.642 9.547c.106.899-.125 1.78-.676 2.481a3.36 3.36 0 0 1-1.908 1.24.4.4 0 0 1-.124.037l-.179.018c-.334.054-.653.09-.974.09-2.545 0-4.335-1.728-5.04-2.86-.268-.448-.673-1.276-.32-1.797.089-.126.336-.396.866-.288 1.681.36 2.283-.395 2.39-.538 1.133-1.493 3.24-1.763 4.688-.648.71.555 1.17 1.37 1.277 2.265" fill="#fff" fill-rule="evenodd"/><path d="M.001 20.033V.001h20.031v20.031z" fill="none"/></g></svg>`
  };

  const vm = Scratch.vm;
  const runtime = vm.runtime;
  const render = vm.renderer;
  const isPM = Scratch.extensions.isPenguinMod;
  let guiInfo = { incClones : false, ordLayer : false, ordAsc : false, fadeModal : false };

  // Modify Editor Tab Row to Include our Addon
  function addBarItem() {
    if (typeof scaffolding !== "undefined") return;
    const editorBars = document.querySelectorAll(`div[class^="menu-bar_menu-bar-item_"][class*="menu-bar_hoverable_"]`);
    const lastChild = editorBars[editorBars.length - 1];
    const clone = lastChild.cloneNode(true);
    clone.textContent = "Sprite Panel";
    clone.addEventListener("click", () => { initPanel() });
    lastChild.parentNode.insertBefore(clone, lastChild.nextElementSibling);
  }
  addBarItem();

  // Internal Helper Funcs
  function getTargets(incClones) {
    let spriteNames = [];
    const targets = runtime.targets;
    for (let index = 1; index < targets.length; index++) {
      const target = targets[index];
      const name = target.getName();
      if (target.isOriginal) {
        spriteNames.push({ text: name, value: target.id, ind: target.getLayerOrder() });
        if (incClones) {
          const clones = target.sprite.clones;
          for (let i = 1; i < clones.length; i++) {
            const clone = clones[i];
            spriteNames.push({ text: `${name} (Clone)`, value: clone.id, ind: clone.getLayerOrder() });
          }
        }
      }
    }
    if (guiInfo.ordLayer) {
      if (guiInfo.ordAsc) spriteNames.sort((a, b) => a.ind - b.ind);
      else spriteNames.sort((a, b) => b.ind - a.ind);
    }
    return spriteNames;
  }

  function patchName(name, array) {
    if (array.indexOf(name) > -1) {
      const appearance = array.filter((v) => v === name).length;
      const lastDash = name.lastIndexOf("-");
      let newName = `${name}-${appearance}`;
      if (lastDash !== -1) {
        const lastPart = name.slice(lastDash + 1);
        if (!isNaN(parseInt(lastPart))) newName = name.slice(0, lastDash) + `-${parseInt(lastPart) + appearance}`;
      }
      if (array.indexOf(newName) > -1) return patchName(newName, array);
      else return newName;
    }
    return name;
  }

  function applyProperty(target, type, value) {
    const stretchSet = (x, y) => {
      if (isPM) target.setStretch(x ?? target.stretch[0], y ?? target.stretch[1]);
      else {
        const thisTarget = render._allDrawables[target.drawableID];
        thisTarget.updateScale([x ?? thisTarget.scale[0], y ?? thisTarget.scale[1]]);
      }
    };
    const setter = {
      x: x => target.setXY(x, target.y),
      y: y => target.setXY(target.x, y),
      size: size => target.setSize(size),
      dir: direction => target.setDirection(direction),
      visible: visibility => target.setVisible(!!visibility),
      stchX: x => stretchSet(x, null),
      stchY: y => stretchSet(null, y),
      drag: draggable => target.setDraggable(!!draggable),
      effect: ([effectName, value]) => target.setEffect(effectName, parseInt(value)),
      layer: layer => target.goForwardLayers(layer - target.getLayerOrder()),
      costume: ind => target.setCostume(ind - 1)
    };
    return setter[type](value);
  }

  function changeColor(asset, color) { return `data:image/svg+xml;base64,${btoa(asset.replaceAll("#fff", color))}` }

  // GUI Helper Funcs
  function ghostInputRemove(selector) {
    // Blockly Text input Doesnt show immediately :(
    const element = document.querySelector(selector);
    if (element) element.style.opacity = 0;
    else setTimeout(() => { ghostInputRemove(selector) }, 5);
  }

  function refreshModal() {
    const modal = guiInfo.modalBody;
    for (var i = modal.childNodes.length - 9; i--; ) {
      modal.childNodes[i].remove();
    }
    guiInfo = {
      ...guiInfo,
      editableClones : [], targets : runtime.targets,
      targetMenu : getTargets(guiInfo.incClones)
    };
    createMenuList(guiInfo.targetMenu, guiInfo.modalBody);
    if (guiInfo.lastSelect && runtime.getTargetById(guiInfo.lastSelect.id)) selectTarget(guiInfo.lastSelect);
  }

  function patchDivColor(container) {
    for (let i = 0; i < container.childNodes.length; i++) {
      const child = container.childNodes[i];
      child.style.background = i % 2 !== 0 ? `radial-gradient(circle, ${guiInfo.isDark ? "#343434" : "#D9D9D9"} 80%, rgba(0,0,0,0))` : "";
    }
  }

  function targetFlash(target) {
    const oldBox = document.querySelector(`div[class="SP-Panel-flash-box"]`);
    const modal = guiInfo.modalBody.parentNode.parentNode.parentNode;
    if (oldBox) render.removeOverlay(oldBox);
    const box = document.createElement("div");
    const bounds = target.getBounds();
    const fixBox = (bnds) => {
      box.style.width = `${bnds.width}px`;
      box.style.height = `${bnds.height}px`;
      box.style.left = `${(bnds.left + (bnds.width / 2)) + (runtime.stageWidth / 2)}px`;
      box.style.top = `${(-bnds.top + (bnds.height / 2)) + (runtime.stageHeight / 2)}px`;
    };

    box.className = "SP-Panel-flash-box";
    box.style.border = "solid";
    box.style.borderRadius = "5px";
    box.style.borderWidth = "2px";
    box.style.borderColor = "#ff0000";
    box.style.position = "absolute";
    box.style.transform = "translate(-50%, -50%)";
    box.style.background = "rgba(255, 100, 100, 0.5)";
    box.style.opacity = "1";
    fixBox(bounds);
    render.addOverlay(box);
    if (guiInfo.fadeModal) modal.style.opacity = 0;

    const startTime = performance.now();
    const animate = (time) => {
      const elapsedTime = time - startTime;
      if (elapsedTime >= 600) {
        modal.style.opacity = 1;
        return render.removeOverlay(box)
      };
      const phase = (elapsedTime % (200)) / 100;
      const opacity = phase < 1 ? phase : 2 - phase;
      box.style.opacity = opacity.toString();
      fixBox(target.getBounds()); // In case target is moving during this
      requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
  }

  // Main GUI
  function initPanel() {
    ScratchBlocks.Procedures.createProcedureDefCallback_();
    const isDark = isPM ? document.body.getAttribute("theme") === "dark" : ReduxStore.getState().scratchGui.theme.theme.gui === "dark";
    // Clean Modal
    const blockSpace = document.querySelector(`div[class^="custom-procedures_workspace_"]`);
    blockSpace.remove();
    const buttons = document.querySelector(`div[class*="custom-procedures_body_"]`);
    const pmChilds = isPM ? 5 : 3;
		for (var i = 0; i < pmChilds; i++) {
    	buttons.removeChild(buttons.firstChild);
		}
    // Modify Closing Function
    const closeBtn = document.querySelector(`div[class^="close-button_close-button_"]`);
    const bgScreen = document.querySelector(`div[class^="ReactModal__Overlay ReactModal__Overlay--after-open modal_modal-overlay_"]`);
    closeBtn.addEventListener("click", () => { vm.refreshWorkspace() });
    bgScreen.addEventListener("click", () => { vm.refreshWorkspace() });

    guiInfo = {
      ...guiInfo,
      isDark : isPM ? document.body.getAttribute("theme") === "dark" : ReduxStore.getState().scratchGui.theme.theme.gui === "dark",
      targets : runtime.targets, targetMenu : getTargets(guiInfo.incClones),
      lastSelect : runtime.targets[1], editableClones : [], modalBody : buttons
    };
    const inputCSS = [
      { width: "50px", translate : "translate(-40%, -65%)", margin: "20px 0px 0px 10px" },
      { width: "50px", translate : "translate(-40%, -65%)", margin: "0px 0px 0px 10px" }
    ];

    // Title and Target List
    const title = document.querySelector(`div[class*="modal_header-item-title_"]`);
    title.textContent = "Sprite Panel";
    createMenuList(guiInfo.targetMenu, buttons);
    ghostInputRemove(`[class*="removableTextInput"]`);

    // GUI Options
    const layer = makeInput("checkbox", guiInfo.ordLayer, inputCSS[0]);
    const orderType = makeInput("checkbox", guiInfo.ordAsc, inputCSS[0]);
    const clones = makeInput("checkbox", guiInfo.incClones, inputCSS[1]);
    const fadeModal = makeInput("checkbox", guiInfo.fadeModal, inputCSS[1]);

    const onClick = (type) => (event) => {
      guiInfo[type] = event.target.checked;
      if (type === "ordAsc") {
        layer.checked = true;
        guiInfo.ordLayer = true;
      }
      refreshModal();
    };
    layer.addEventListener("input", onClick("ordLayer"));
    orderType.addEventListener("input", onClick("ordAsc"));
    clones.addEventListener("input", onClick("incClones"));
    fadeModal.addEventListener("input", onClick("fadeModal"));

    buttons.append(
      makeLabel("Order By Layer:", undefined, "translate(5%, -55%)"), layer,
      makeLabel("Ascending:", undefined, "translate(5%, -55%)"), orderType
    );
    buttons.appendChild(document.createElement("br"));
    buttons.append(
      makeLabel("Include Clones:", undefined, "translate(5%, -55%)"), clones,
      makeLabel("Hide Modal on Select:", undefined, "translate(3%, -55%)"), fadeModal
    );
    selectTarget(guiInfo.lastSelect);
  }

  function createMenuList(targetArray, modal) {
    const isDark = guiInfo.isDark;
    // Inner Titles
    const title1 = makeTitle("All Sprites");
    const title2 = makeTitle("Sprite Properties");

    // Menu Name Container
    const listCon = createContain("sprites", isDark, true);
    for (let i = 0; i < targetArray.length; i++) {
      listCon.appendChild(makeMenuNameRow(targetArray[i], i, isDark, listCon));
    }
    modal.insertBefore(createContain("items", isDark, false), modal.children[0]);
    modal.insertBefore(listCon, modal.children[0]);
    modal.insertBefore(title2, modal.children[0]);
    modal.insertBefore(title1, modal.children[0]);

    // Fix Long Clone Names
    for (let j = 0; j < guiInfo.editableClones.length; j++) {
      const label = guiInfo.editableClones[j];
      const name = label.textContent;
      if (parseFloat(window.getComputedStyle(label).width) > 203) label.textContent = `${name.slice(0, 12)}… (Clone)`;
    }
  }

  function makeMenuNameRow(item, index, isDark, contain) {
    const name = item.text;
    const target = runtime.getTargetById(item.value);
    const rowDiv = document.createElement("div");
    rowDiv.style.height = "10.5%";
    rowDiv.id = item.value;
    if (index % 2 !== 0) rowDiv.style.background = `radial-gradient(circle, ${isDark ? "#343434" : "#D9D9D9"} 80%, rgba(0,0,0,0))`;

    // Delete Button
    const del = makeButton(deleteSVG, "delete");
    rowDiv.appendChild(del);
    del.addEventListener("click", () => {
      if (target.isOriginal) {
        const clones = target.sprite.clones;
        for (let i = clones.length; i--;) {
          const clone = target.sprite.clones[i];
          const row = document.getElementById(clone.id);
          row.remove();
          runtime.disposeTarget(clone);
          runtime.stopForTarget(clone);
        }
      } else {
        runtime.disposeTarget(target);
        runtime.stopForTarget(target);
      }
      rowDiv.remove();
      patchDivColor(contain);
      selectTarget(runtime.targets[1]);
    });

    // Edit Button
    const edit = makeButton(editSVG, "edit");
    rowDiv.appendChild(edit);
    edit.addEventListener("click", () => {
      patchDivColor(contain);
      selectTarget(target);
      targetFlash(target);
    });

    // Text & Input
    if (target.isOriginal) {
      const listItem = makeInput("text", name);
      listItem.addEventListener("change", () => {
        const newName = patchName(listItem.value, guiInfo.targetMenu.map(obj => obj.text));
        listItem.value = newName;
        target.sprite.name = newName;
        setTimeout(() => { refreshModal() }, 5);
      });
      listItem.addEventListener("click", () => {
        patchDivColor(contain);
        selectTarget(target);
      });
      rowDiv.append(makeLabel("Name:"), listItem);
    } else {
      const label = makeLabel(`Name: ${name}`, isDark ? "#FFC0CB" : "#C41E3A");
      guiInfo.editableClones.push(label);
      rowDiv.appendChild(label);
    }
    return rowDiv;
  }

  function selectTarget(target) {
    const valsCon = document.querySelector(`div[class="items"]`);
    valsCon.innerHTML = ""; // cleanse existing items
    // confirm target exists
    const targetCheck = runtime.getTargetById(target?.id);
    guiInfo.lastSelect = targetCheck ? target : runtime.targets[1];
    if (!targetCheck) return;
    const isDark = guiInfo.isDark;
    const row = document.getElementById(target.id);
    if (row) row.style.background = `radial-gradient(circle, #a3a3a3 80%, rgba(0,0,0,0))`;
    const propNames = {
      "x" : { newLine : false, img : true, type : "number", path : "x", name : "x" },
      "y" : { newLine : true, img : false, type : "number", path : "y", name : " y" },
      "size" : { newLine : true, img : true, type : "number", path : "size", name : "size" },
      "stchX" : { newLine : false, img : true, type : "number", path : "stchX", name : "stretch x" },
      "stchY" : { newLine : true, img : false, type : "number", path : "stchY", name : " y" },
      "dir" : { newLine : true, img : true, type : "number", path : "direction", name : "direction" },
      "visible" : { newLine : false, img : true, type : "checkbox", path : "visible", name : "show" },
      "layer" : { newLine : true, img : true, type : "number", path : "lay", name : "layer" },
      "costume" : { newLine : false, img : true, type : "number", path : "currentCostume", name : "costume" },
      "drag" : { newLine : true, img : true, type : "checkbox", path : "draggable", name : "draggable" },
      "effect" : { newLine : false, img : true, type : "number", path : "effects", name : "effect" },
    };
    for (const [key, prop] of Object.entries(propNames)) {
      let drpd;
      const fixedKey = key === "x" || key === "y" ? "xy" : key.startsWith("stch") ? "stretch" : key;
      const getVal = (path) => {
        if (path === "lay") return target.getLayerOrder();
        else if (path === "effects") return 0;
        else if (path.startsWith("stch")) {
          if (isPM) return target.stretch[path.endsWith("X") ? 0 : 1];
          else return render._allDrawables[target.drawableID].scale[path.endsWith("X") ? 0 : 1];
        } else return target[path];
      };

      const input = makeInput(
        prop.type, getVal(prop.path),
        prop.type === "checkbox" ? { width : "15px", translate : "translate(0%, -80%)" } :
        { width : key === "dir" || key === "costume" || key === "effect" ? "45px" : "65px", align : "center" }
      );
      if (key === "size") input.min = 0;
      else if (key === "layer" || key === "costume") {
        input.min = 1;
        if (key === "layer") input.max = guiInfo.targetMenu.length;
        else {
          input.max = target.sprite.costumes_.length;
          input.value = Math.max(1, parseInt(input.value) + 1);
        }
      }
      if (prop.img) valsCon.appendChild(makeImg(changeColor(
        miniAssets[fixedKey], isDark ? "#fff" : "#808080"),
        key, { width : "25", margin : "5px 3px 5px 3px" }
      ));

      if (key === "effect") {
        let effects = Object.keys(target.effects);
        if (isPM) effects.splice(effects.indexOf("tintColor"), 1);
        drpd = makeInput(
          "select", effects[0], { width : "100px", align : "center", translate : "translate(0%, -50%)" }, effects
        );
        valsCon.appendChild(drpd);
      }
      valsCon.append(makeLabel(prop.name, undefined, "translate(0%, -60%)"), input);
      if (prop.newLine) valsCon.appendChild(document.createElement("br"));
      const setProp = () => {
        if (key === "effect") applyProperty(target, key, [drpd.value, input.value]);
        else applyProperty(target, key, input[prop.type === "checkbox" ? "checked" : "value"]);
        if (key === "layer") refreshModal();
      };
      input.addEventListener("input", setProp);
      if (drpd) drpd.addEventListener("input", setProp);
		}
  }

  // GUI Builder Funcs
  function makeTitle(txt) {
    const title = document.createElement("div");
    title.textContent = txt;
    title.style.display = "inline-block";
    title.style.textAlign = "center";
    title.style.width = "47%";
    title.style.marginRight = "8px";
    title.style.marginLeft = "8px";
    title.style.padding = "0px 0px 20px 0px";
    return title;
  }

  function makeLabel(txt, optColor, optPos) {
    const label = document.createElement("div");
    label.textContent = txt;
    label.style.margin = "5px";
    label.style.display = "inline-block";
    label.style.transform = optPos === undefined ? "translate(0%, -55%)" : optPos;
    if (optColor !== undefined) label.style.color = optColor;
    return label;
  }

  function makeImg(img, clasS, opts) {
    const image = document.createElement("img");
    image.classList.add(clasS);
    image.src = img;
    image.width = opts?.width ?? "32";
    if (opts?.margin !== undefined) image.style.margin = opts.margin;
    return image;
  }

  function createContain(clasS, darkGUI, scroll) {
    const box = document.createElement("div");
    box.classList.add(clasS);
    box.style.overflow = scroll ? "scroll" : "hidden";
    box.style.overflowX = "hidden";
    box.style.display = "inline-block";
    box.style.width = "47%";
    box.style.height = "310px";
    box.style.padding = "2px";
    box.style.marginRight = "8px";
    box.style.marginLeft = "8px";
    box.style.border = `solid ${darkGUI ? "#343434" : "#D9D9D9"} 2px`;
    box.style.borderRadius = "5px";
    return box;
  }

  function makeButton(img, clasS) {
    const button = makeImg(img, clasS);
    button.style.cursor = "pointer";
    return button;
  }

  function makeInput(type, defaultV, opts, optArray) {
    const input = document.createElement(type === "select" ? "select" : "input");
    if (type === "select") {
      optArray.forEach(item => {
        let option = document.createElement("option");
        option.value = item; option.text = item;
        input.appendChild(option);
      });
    } else input.type = type;
    if (type === "checkbox") input.checked = defaultV;
    else input.value = defaultV;
    input.value = defaultV;
    if (opts?.margin !== undefined) input.style.margin = opts.margin;
    input.style.width = opts?.width ?? "130px";
    input.style.transform = `${opts?.translate ?? "translate(0%, -45%)"}${type === "checkbox" ? " scale(1.3)" : ""}`;
    input.style.textAlign = opts?.align ?? "left";
    input.style.cursor = "pointer";
    return input;
  }
  
  class SPspritePanel {
    getInfo() {
      return {
        id: "SPspritePanel",
        name: "Sprite Panel",
        color1: "#3d6f99",
        menuIconURI,
        blocks: [
          {
            func: "openPanel",
            blockType: Scratch.BlockType.BUTTON,
            text: "Open Sprite Panel"
          }
        ],
      };
    }

    openPanel() { initPanel() }
  }
  Scratch.extensions.register(new SPspritePanel());
})(Scratch);
