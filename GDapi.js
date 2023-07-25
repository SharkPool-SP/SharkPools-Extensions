/*
* This Extension was made by SharkPool (https://www.youtube.com/@SharkPool_SP)
* Version 1.2
* Massive thank you to RobTopGames for creating Geometry Dash
* Also huge thanks to ColonGD (https://gdcolon.com/) for creating open-source GD API
* Do not remove this comment
*/
(function (Scratch) {
  'use strict';

  if (!Scratch.extensions.unsandboxed) {
    throw new Error('Geometry Dash API must run unsandboxed');
  }

	const menuIconURI = 
'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI5MCIgaGVpZ2h0PSI5MCIgdmlld0JveD0iMCwwLDkwLDkwIj48ZGVmcz48cmFkaWFsR3JhZGllbnQgY3g9IjIzNy41NzY1IiBjeT0iMTgwLjc1OTE3IiByPSI1NS41MjkwMyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci0xIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMwMGM3ZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMGM3ZmYiIHN0b3Atb3BhY2l0eT0iMCIvPjwvcmFkaWFsR3JhZGllbnQ+PHJhZGlhbEdyYWRpZW50IGN4PSIyMjYuOTk0MDciIGN5PSIxODQuODY3OSIgcj0iMzMuNDc4MiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci0yIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMwMGRlZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMGRlZmYiIHN0b3Atb3BhY2l0eT0iMCIvPjwvcmFkaWFsR3JhZGllbnQ+PHJhZGlhbEdyYWRpZW50IGN4PSIyMjYuOTk0MDciIGN5PSIxODQuODY3OSIgcj0iMzMuNDc4MiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci0zIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMwMGRlZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMGRlZmYiIHN0b3Atb3BhY2l0eT0iMCIvPjwvcmFkaWFsR3JhZGllbnQ+PC9kZWZzPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xOTkuNTEyMzgsLTEzMi41KSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTE5OS41MTIzOSwxNzcuNWMwLC0yNC44NTI4MiAyMC4xNDcxOCwtNDUgNDUsLTQ1YzI0Ljg1MjgyLDAgNDUsMjAuMTQ3MTggNDUsNDVjMCwyNC44NTI4MiAtMjAuMTQ3MTgsNDUgLTQ1LDQ1Yy0yNC44NTI4MiwwIC00NSwtMjAuMTQ3MTggLTQ1LC00NXoiIGZpbGw9IiMwMDRkZTgiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz48cGF0aCBkPSJNMjMzLjA3MDQyLDE1Ny43MzcwOWMzMC4zMzExMywtMTAuMDM2NTkgMjcuNDI2MjcsMzIuOTU2MDEgMTUuMDY5MDUsMzcuMDQ1MDNjLTguMTk3NDEsMi43MTI1MyAtMTkuMTIyOTksMTEuNDIyMjggLTI3LjE5OTk5LDIwLjEzNzY0Yy0wLjk1NjIxLDEuMDMxNzggLTkuMzIzNDIsLTUuOTk2ODIgLTE1LjM5OTM2LC0xNS4yNDc1NGMtNi4wMDIwOSwtOS4xMzgyNyAtNS45NTg0LC0yMi4xNTkzMyAtNS45OTgwNywtMjMuMzg1NDFjMTAuNzQ5MDksLTguMzQ1MjYgMjAuNjE2MzIsLTE0LjI3NzEyIDMzLjUyODM4LC0xOC41NDk3MnoiIGZpbGw9InVybCgjY29sb3ItMSkiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz48cGF0aCBkPSJNMjI0LjI3NzM3LDE3MC45ODc5NmMxOC4yODY1MSwtNi4wNTEwMSAxNi41MzUxOCwxOS44NjkwMyA5LjA4NTA2LDIyLjMzNDI4Yy03LjQ4OTc5LDIuNDc4MzggLTE0LjgxMTY2LDcuNzkwNTEgLTE5Ljg5OTUzLDE2LjY5MjU4Yy0xLjcyNDk5LC0xLjg3MzE2IC01LjY1MTY2LC02LjYyODI3IC04LjI5NDMzLC0xMS41MzIzMmMtMi43NDMwMiwtNS4wOTAyNiAtNC4xNzczMywtMTAuMzQwOTggLTQuNDkxODgsLTEyLjY5NTg0YzcuNzE0MDksLTcuNzgxMjkgMTQuMjE1MiwtMTEuNjkzMDMgMjMuNjAwNjcsLTE0Ljc5ODY5eiIgZmlsbD0idXJsKCNjb2xvci0yKSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPjxwYXRoIGQ9IiIgZmlsbD0idXJsKCNjb2xvci0zKSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPjxwYXRoIGQ9Ik0yNzguMjMwMDgsMTY2LjUzMzAzbC0yMS44OTk2Nyw0Mi45MTg1OWwtNDIuNzQyMjQsLTIyLjI0NTA4bDIxLjkwMTY1LC00Mi45MTkyMnoiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9IiBmaWxsPSIjZmRjYzAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjAiLz48cGF0aCBkPSJNMjQyLjQ0NDk1LDE4MC45MzEwMWM0LjEyMzE3LDEyLjgyNjQ1IDEyLjQxNTE0LDI2LjI0MDk0IDEyLjQxNTE0LDI2LjI0MDk0bC0zOS43NzYxOCwtMjAuMzIxNjVsMjAuNDg0NTgsLTM5LjY5MDk4YzAsMCAyLjc1MzI4LDIwLjk0NTI0IDYuODc2NDUsMzMuNzcxNjh6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZmlsbD0iI2ZmYTYwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMCIvPjxwYXRoIGQ9Ik0yNjMuODgyNzQsMTY5LjY3NDM1bC0zLjU3NDc1LDYuOTM2MzlsLTYuOTM2MzgsLTMuNTc0NzVsMy41NzQ3NSwtNi45MzYzOXoiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9IiBmaWxsPSIjNTlmYWZhIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIwIi8+PHBhdGggZD0iTTI0OC4yNzcxOSwxNjEuNjMxODNsLTMuNTc1MzksNi45MzQ0MWwtNi45MzU3NCwtMy41NzI3OGwzLjU3NDc1LC02LjkzNjM4ek0yNTkuNzcwODksMTg0Ljg5MTk5bC0zLjU3NDc1LDYuOTM2MzlsLTI4LjQzNzU5LC0xNC42NTU2OGwzLjU3NDc1LC02LjkzNjM4eiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGZpbGw9IiM1OWZhZmEiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjAiLz48L2c+PC9nPjwvc3ZnPg==';
	const blockIconURI =
'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI3Ny4zMzMzMyIgaGVpZ2h0PSI3Ny4zMzMzMyIgdmlld0JveD0iMCwwLDc3LjMzMzMzLDc3LjMzMzMzIj48ZGVmcz48cmFkaWFsR3JhZGllbnQgY3g9IjIyNi45OTQwNyIgY3k9IjE4NC44Njc5IiByPSIzMy40NzgyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTEiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzAwZGVmZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAwZGVmZiIgc3RvcC1vcGFjaXR5PSIwIi8+PC9yYWRpYWxHcmFkaWVudD48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwMS4zMzMzMywtMTQxLjMzMzMzKSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTIwMS4zMzMzMywxODBjMCwtMjEuMzU1MDIgMTcuMzExNjUsLTM4LjY2NjY3IDM4LjY2NjY3LC0zOC42NjY2N2MyMS4zNTUwMiwwIDM4LjY2NjY3LDE3LjMxMTY1IDM4LjY2NjY3LDM4LjY2NjY3YzAsMjEuMzU1MDIgLTE3LjMxMTY1LDM4LjY2NjY3IC0zOC42NjY2NywzOC42NjY2N2MtMjEuMzU1MDIsMCAtMzguNjY2NjcsLTE3LjMxMTY1IC0zOC42NjY2NywtMzguNjY2Njd6IiBmaWxsPSIjMDA0ZGU4IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+PHBhdGggZD0iIiBmaWxsPSJ1cmwoI2NvbG9yLTEpIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+PHBhdGggZD0iTTI3Mi4zMjA5NSwxNjkuNjYzNTZsLTIxLjg5OTY3LDQyLjkxODU5bC00Mi43NDIyNCwtMjIuMjQ1MDhsMjEuOTAxNjUsLTQyLjkxOTIyeiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGZpbGw9IiNmZGNjMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjIuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMCIvPjxwYXRoIGQ9Ik0yMzYuNTM1ODMsMTg0LjA2MTU0YzQuMTIzMTcsMTIuODI2NDUgMTIuNDE1MTQsMjYuMjQwOTQgMTIuNDE1MTQsMjYuMjQwOTRsLTM5Ljc3NjE4LC0yMC4zMjE2NWwyMC40ODQ1OCwtMzkuNjkwOThjMCwwIDIuNzUzMjgsMjAuOTQ1MjQgNi44NzY0NSwzMy43NzE2OHoiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9IiBmaWxsPSIjZmZhNjAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIwIi8+PHBhdGggZD0iTTI1Ny45NzM2MiwxNzIuODA0ODhsLTMuNTc0NzUsNi45MzYzOWwtNi45MzYzOCwtMy41NzQ3NWwzLjU3NDc1LC02LjkzNjM5eiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGZpbGw9IiM1OWZhZmEiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjAiLz48cGF0aCBkPSJNMjQyLjM2ODA3LDE2NC43NjIzNmwtMy41NzUzOSw2LjkzNDQxbC02LjkzNTc0LC0zLjU3Mjc4bDMuNTc0NzUsLTYuOTM2Mzh6TTI1My44NjE3NywxODguMDIyNTJsLTMuNTc0NzUsNi45MzYzOWwtMjguNDM3NTksLTE0LjY1NTY4bDMuNTc0NzUsLTYuOTM2Mzh6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZmlsbD0iIzU5ZmFmYSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMCIvPjwvZz48L2c+PC9zdmc+';
  class GDapiSP {
    getInfo() {
      return {
        id: 'GDapiSP',
        name: 'Geometry Dash API',
        docsURI: 'https://docs.google.com/document/d/1QfbpQhi-0Kabficb_9sFgv6x5adfIEQ-MD9jMX0DwVM/edit?usp=sharing',
	    menuIconURI,
	    blockIconURI,
	    color1: '#004de8',
        blocks: [
          {
            blockType: Scratch.BlockType.LABEL,
            text: 'Search Levels by URL',
          },
          {
            opcode: 'createSearchURL',
            blockType: Scratch.BlockType.REPORTER,
            text: 'create search URL with input [input]',
            arguments: {
              input: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'join-URL-strings-here'
              }
            }
          },
          {
            opcode: 'buildURL',
            blockType: Scratch.BlockType.REPORTER,
            text: 'search content: [query]',
            arguments: {
              query: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '*'
              }
            }
          },
          {
            opcode: 'levelLength',
            blockType: Scratch.BlockType.REPORTER,
            text: 'level length from [size1] to [size2]',
            arguments: {
              size1: {
                type: Scratch.ArgumentType.STRING,
                menu: 'size',
                defaultValue: 'tiny'
              },
              size2: {
                type: Scratch.ArgumentType.STRING,
                menu: 'size',
                defaultValue: 'medium'
              }
            }
          },
          {
            opcode: 'levelDifficulty',
            blockType: Scratch.BlockType.REPORTER,
            text: 'level difficulty from [difficulty1] to [difficulty2]',
            arguments: {
              difficulty1: {
                type: Scratch.ArgumentType.STRING,
                menu: 'difficulty',
                defaultValue: 'NA'
              },
              difficulty2: {
                type: Scratch.ArgumentType.STRING,
                menu: 'difficulty',
                defaultValue: 'Normal'
              }
            }
          },
          {
            opcode: 'demonDifficulty',
            blockType: Scratch.BlockType.REPORTER,
            text: 'demon difficulty: [demon]',
            arguments: {
              demon: {
                type: Scratch.ArgumentType.STRING,
                menu: 'demonDifficulty',
                defaultValue: 'Easy Demon'
              }
            }
          },
          {
            opcode: 'rating',
            blockType: Scratch.BlockType.REPORTER,
            text: 'star rating: [rating]',
            arguments: {
              rating: {
                type: Scratch.ArgumentType.STRING,
                menu: 'rating',
                defaultValue: 'starred'
              }
            }
          },
          {
            opcode: 'enableTag',
            blockType: Scratch.BlockType.REPORTER,
            text: 'enable [tag] tag',
            arguments: {
              tag: {
                type: Scratch.ArgumentType.STRING,
                menu: 'tags',
                defaultValue: 'featured'
              }
            }
          },
          {
            opcode: 'enableTypeTag',
            blockType: Scratch.BlockType.REPORTER,
            text: 'enable [typeTag] type tag',
            arguments: {
              typeTag: {
                type: Scratch.ArgumentType.STRING,
                menu: 'typeTags',
                defaultValue: 'mostdownloaded'
              }
            }
          },
          {
            opcode: 'addSongFromID',
            blockType: Scratch.BlockType.REPORTER,
            text: 'add [menu] song from Song ID: [id]',
            arguments: {
              menu: {
                type: Scratch.ArgumentType.STRING,
                menu: 'songMenu',
                defaultValue: 'Built-In'
              },
              id: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '396093'
              }
            }
          },
          {
            blockType: Scratch.BlockType.LABEL,
            text: 'Level Data Fetching',
          },
          {
            opcode: 'fetchDataFromID',
            blockType: Scratch.BlockType.REPORTER,
            text: 'fetch [menu] from level ID: [id]',
            arguments: {
              menu: {
                type: Scratch.ArgumentType.STRING,
                menu: 'fetchMenu',
                defaultValue: 'Level Name'
              },
              id: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '82540637'
              }
            }
          }
        ],
        menus: {
          size: ['tiny', 'short', 'medium', 'long', 'XL'],
          difficulty: ['NA', 'Auto', 'Easy', 'Normal', 'Hard', 'Harder', 'Insane', 'Demon'],
          demonDifficulty: ['Easy Demon', 'Medium Demon', 'Hard Demon', 'Insane Demon', 'Extreme Demon'],
          rating: ['starred', 'noStar'],
          tags: ['featured', 'epic', 'twoPlayer', 'coins', 'original'],
          typeTags: ['mostdownloaded', 'mostliked', 'trending', 'recent', 'magic', 'awarded', 'featured', 'daily', 'weekly'],
          songMenu: ['Built-In', 'Custom'],
          fetchMenu: ['Level Name', 'Level Creator', 'Level Description', 'Difficulty', 'Stars', 'Downloads', 'Level Length', 'Likes', 'Song in Use', 'Object Count']
        }
      };
    }

    createSearchURL(args) {
      const baseURL = 'https://gdbrowser.com';
      const input = args.input;
      return baseURL + '/' + input;
    }

    buildURL(args) {
      const query = args.query;
      return 'search/' + query;
    }

    levelLength(args) {
      const sizeMapping = {
        tiny: 0,
        short: 1,
        medium: 2,
        long: 3,
        XL: 4
      };

      const start = sizeMapping[args.size1] || 0;
      const end = sizeMapping[args.size2] || 0;

      const lengthParams = `?length=${Array.from({ length: end - start + 1 }, (_, i) => start + i).join(',')}`;
      return lengthParams;
    }

    levelDifficulty(args) {
      const difficultyMapping = {
        'NA': -3,
        'Auto': -1,
        'Easy': 1,
        'Normal': 2,
        'Hard': 3,
        'Harder': 4,
        'Insane': 5,
        'Demon': -2
      };

      const start = difficultyMapping[args.difficulty1.split(' ')[0]] || 0;
      const end = difficultyMapping[args.difficulty2.split(' ')[0]] || 0;

      const difficultyParams = `?diff=${Array.from({ length: end - start + 1 }, (_, i) => start + i).join(',')}`;
      return difficultyParams;
    }

    demonDifficulty(args) {
      const demonMapping = {
        'Easy Demon': 1,
        'Medium Demon': 2,
        'Hard Demon': 3,
        'Insane Demon': 4,
        'Extreme Demon': 5
      };

      const demon = demonMapping[args.demon] || 0;
      const demonParam = `?demonFilter=${demon}`;
      return demonParam;
    }

    rating(args) {
      const ratingParam = `?${args.rating}`;
      return ratingParam;
    }

    enableTag(args) {
      const tag = args.tag;
      return `?${tag}`;
    }

    enableTypeTag(args) {
      const typeTag = args.typeTag;
      return `?type=${typeTag}`;
    }

    addSongFromID(args) {
      const menu = args.menu;
      const id = args.id;
      let url = `?songID=${id}`;

      if (menu === 'Custom') {
        url += '&customSong';
      }

      return url;
    }

    fetchDataFromID(args) {
      const baseURL = 'https://gdbrowser.com/';
      const menu = args.menu;
      const id = args.id;
      const url = baseURL + id;

      return fetch(url)
        .then(response => response.text())
        .then(data => {
          switch (menu) {
            case 'Level Name':
              return data.match(/<meta id="meta-title" property="og:title" content="(.+) by (.+)">/)?.[1] || '';
            
            case 'Level Creator':
              return data.match(/<meta id="meta-title" property="og:title" content="(.+) by (.+)">/)?.[2] || '';
            
            case 'Level Description':
              return data.match(/<div class="transparentBox center" style="position:absolute; bottom: 32%; left: 0; right: 0; width: 75vh; margin-left: auto; margin-right: auto">\s+<p class="pre" style="padding: 0 5%; white-space:normal">(.+)<\/p>\s+<\/div>/)?.[1] || '';

            case 'Difficulty':
              return data.match(/property="og:description" content=".+\| [^|]+\| Difficulty: ([^|]+) \|/)?.[1] || '';
            
            case 'Stars':
              return data.match(/property="og:description" content=".+\| Stars: (\d+) \|/)?.[1] || '';

            case 'Downloads':
              return data.match(/property="og:description" content=".+\| Downloads: (\d+) \|/)?.[1] || '';

            case 'Level Length':
              return data.match(/property="og:description" content=".+\| Length: (.+) \|/)?.[1] || '';
            
            case 'Likes':
              return data.match(/property="og:description" content=".+\| Likes: (\d+) \|/)?.[1] || '';

            case 'Song in Use':
              return data.match(/property="og:description" content=".+Song: (.+)">/)?.[1] || '';

            case 'Object Count':
              return data.match(/.replace\('\[\[OBJECTINFO\]\]', '(\d+)'/)[1] || 0;

            default:
              return 'Invalid menu';
          }
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          return 'Error fetching data';
        });
    }
  }

  Scratch.extensions.register(new GDapiSP());
})(Scratch);
