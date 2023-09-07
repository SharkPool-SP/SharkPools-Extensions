/*
* This Extension was made by SharkPool
* The blocks featured in this extension were originally merged with Time.js by -SPIC- but were removed due to credit issues
* Do not delete this comment
*/

(function (Scratch) {
  'use strict';

  const menuIconURI = 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwLDAsMTA3LjUyMzI5LDExMC41OTgyOCIgaGVpZ2h0PSIxMTAuNTk4MjgiIHdpZHRoPSIxMDcuNTIzMjkiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE4Ny43NTE3MSwtMTI3Ljc1MTcxKSI+PGcgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIGZpbGwtcnVsZT0ibm9uemVybyIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9Ij48cGF0aCBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZT0ibm9uZSIgZmlsbD0iIzViNTRkMCIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGQ9Ik0yNDAsMjMyLjI0ODI5Yy0yOC44NTU5MywwIC01Mi4yNDgyOSwtMjMuMzkyMzYgLTUyLjI0ODI5LC01Mi4yNDgyOWMwLC0yOC44NTU5MyAyMy4zOTIzNiwtNTIuMjQ4MjggNTIuMjQ4MjksLTUyLjI0ODI4YzI4Ljg1NTkzLDAgNTIuMjQ4MjksMjMuMzkyMzUgNTIuMjQ4MjksNTIuMjQ4MjljMCwyOC44NTU5MyAtMjMuMzkyMzYsNTIuMjQ4MjkgLTUyLjI0ODI5LDUyLjI0ODI5eiI+PC9wYXRoPjxwYXRoIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlPSJub25lIiBmaWxsPSIjZmZmZmZmIiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZD0iTTIyNC41NTM4OCwyMTEuNzA1MjFjLTE3LjUxMDMsLTguNTMwNjYgLTI0Ljc4OTc1LC0yOS42NDEwMyAtMTYuMjU5MDgsLTQ3LjE1MTMzYzguNTMwNjYsLTE3LjUxMDMgMjkuNjQxMDMsLTI0Ljc4OTc1IDQ3LjE1MTMzLC0xNi4yNTkwOGMxNy41MTAzMSw4LjUzMDY2IDI0Ljc4OTc1LDI5LjY0MTAzIDE2LjI1OTA5LDQ3LjE1MTMzYy04LjUzMDY2LDE3LjUxMDMgLTI5LjY0MTAzLDI0Ljc4OTc1IC00Ny4xNTEzNCwxNi4yNTkwOXoiPjwvcGF0aD48cGF0aCBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZT0ibm9uZSIgZmlsbD0iIzViNTRkMCIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGQ9Ik0yNDMuOTcwMTcsMTc4LjA5MTE5Yy0wLjYzNTY1LDAuNjc5MjMgLTMuMTMyMzYsLTAuNDk0ODcgLTIuOTgxNTQsLTEuNDYzODljMC4zNzMwNSwtMi4zOTY3OCAyLjg3NTkyLC0xMy45NDg2MyAyLjg3NTkyLC0xMy45NDg2M2MwLDAgOC40MjE4MSwtOC44NzE5MiAxMC4wODY1MywtMTAuNjUwNzdjMC42Nzk0NywtMC43MjYwNiAxLjIzNDcsLTAuNDU1NTYgMS4wODE3NywwLjUyNzAyYy0wLjg4ODEzLDUuNzA2IC0yLjI5OTM5LDE0Ljc3Mjk1IC0yLjI5OTM5LDE0Ljc3Mjk1YzAsMCAtNy4xMzM4NCw5LjAyMjE2IC04Ljc2MzI5LDEwLjc2MzMyeiI+PC9wYXRoPjxwYXRoIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlPSJub25lIiBmaWxsPSIjNWI1NGQwIiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZD0iTTIzNi41MDcyNywxNzguOTg4NTFjMC42MjkzNSwwLjIxNjczIDAuNzI0NSwyLjY3OTgyIDAuMDYxMDQsMi45MDgzYy0xLjY0MTAxLDAuNTY1MTIgLTEwLjI3OTk4LDIuNDE5MDEgLTEwLjI3OTk4LDIuNDE5MDFjLTEuMjk4MjYsLTAuNDQ3MDkgLTguMjU3MzksLTIuODQzNjUgLTkuOTA1NjIsLTMuNDExMjZjLTAuNjcyNzQsLTAuMjMxNjcgLTAuNjcyNzQsLTAuNzIwMjggMCwtMC45NTE5NWMxLjY0ODIzLC0wLjU2NzYxIDEwLjExNDY2LC0zLjQ4MzI2IDEwLjExNDY2LC0zLjQ4MzI2YzAsMCA4LjM5NjYsMS45NjM1OCAxMC4wMDk5MSwyLjUxOTE3eiI+PC9wYXRoPjxwYXRoIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlPSJub25lIiBmaWxsPSIjNWI1NGQwIiBkPSJNMjM0LjMwOTUzLDE4MGMwLC0zLjE0Mjc2IDIuNTQ3NzEsLTUuNjkwNDcgNS42OTA0NywtNS42OTA0N2MzLjE0Mjc2LDAgNS42OTA0NywyLjU0NzcxIDUuNjkwNDcsNS42OTA0N2MwLDMuMTQyNzYgLTIuNTQ3NzEsNS42OTA0NyAtNS42OTA0Nyw1LjY5MDQ3Yy0zLjE0Mjc2LDAgLTUuNjkwNDcsLTIuNTQ3NzEgLTUuNjkwNDcsLTUuNjkwNDd6Ij48L3BhdGg+PHBhdGggc3Ryb2tlLXdpZHRoPSI1IiBzdHJva2U9IiM1YjU0ZDAiIGZpbGw9IiM1YjU0ZDAiIGQ9Ik0yNDYuMjc1LDIwOC4wNzkxN2MwLC0yLjI4Mjc4IDEuODUwNTYsLTQuMTMzMzMgNC4xMzMzMywtNC4xMzMzM2wzOC4yMzMzMywwYzIuMjgyNzgsMCA0LjEzMzMzLDEuODUwNTYgNC4xMzMzMyw0LjEzMzMzbDAsOS4wNDE2N2MwLDIuMjgyNzggLTEuODUwNTYsNC4xMzMzMyAtNC4xMzMzMyw0LjEzMzMzbC0zOC4yMzMzMywwYy0yLjI4Mjc4LDAgLTQuMTMzMzMsLTEuODUwNTYgLTQuMTMzMzMsLTQuMTMzMzN6Ij48L3BhdGg+PHBhdGggc3Ryb2tlLXdpZHRoPSI1IiBzdHJva2U9IiM1YjU0ZDAiIGZpbGw9IiM1YjU0ZDAiIGQ9Ik0yNjUuMDA0MTcsMjM1Ljg1Yy0yLjI4Mjc4LDAgLTQuMTMzMzMsLTEuODUwNTYgLTQuMTMzMzMsLTQuMTMzMzN2LTM4LjIzMzMzYzAsLTIuMjgyNzggMS44NTA1NiwtNC4xMzMzMyA0LjEzMzMzLC00LjEzMzMzaDkuMDQxNjdjMi4yODI3OCwwIDQuMTMzMzMsMS44NTA1NiA0LjEzMzMzLDQuMTMzMzN2MzguMjMzMzNjMCwyLjI4Mjc4IC0xLjg1MDU2LDQuMTMzMzMgLTQuMTMzMzMsNC4xMzMzM3oiPjwvcGF0aD48cGF0aCBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZT0ibm9uZSIgZmlsbD0iI2ZmZmZmZiIgZD0iTTI2Ny45LDIzMS44NWMtMi4yMDkxNCwwIC00LC0xLjc5MDg2IC00LC00di0zMC43NWMwLC0yLjIwOTE0IDEuNzkwODYsLTQgNCwtNGgzLjI1YzIuMjA5MTQsMCA0LDEuNzkwODYgNCw0djMwLjc1YzAsMi4yMDkxNCAtMS43OTA4Niw0IC00LDR6Ij48L3BhdGg+PHBhdGggc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2U9Im5vbmUiIGZpbGw9IiNmZmZmZmYiIGQ9Ik0yNTAuMjc1LDIxMC45NzVjMCwtMi4yMDkxNCAxLjc5MDg2LC00IDQsLTRoMzAuNzVjMi4yMDkxNCwwIDQsMS43OTA4NiA0LDR2My4yNWMwLDIuMjA5MTQgLTEuNzkwODYsNCAtNCw0bC0zMC43NSwwYy0yLjIwOTE0LDAgLTQsLTEuNzkwODYgLTQsLTR6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz48IS0tcm90YXRpb25DZW50ZXI6NTIuMjQ4Mjg1MDAwMDAwMDE6NTIuMjQ4Mjg0OTk5OTk5OTk2LS0+';
  const blockIconURI = 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwLDAsODEuMzAwNTgsODIuODc1NTkiIGhlaWdodD0iODIuODc1NTkiIHdpZHRoPSI4MS4zMDA1OCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjA0LjcyNDQyLC0xNDQuNzI0NDIpIj48ZyBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLXdpZHRoPSIwIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2lzUGFpbnRpbmdMYXllciZxdW90Ozp0cnVlfSI+PHBhdGggc3Ryb2tlPSJub25lIiBmaWxsPSIjZmZmZmZmIiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZD0iTTIyNC41NTM4OCwyMTEuNzA1MjJjLTE3LjUxMDMsLTguNTMwNjYgLTI0Ljc4OTc1LC0yOS42NDEwMyAtMTYuMjU5MDgsLTQ3LjE1MTMzYzguNTMwNjYsLTE3LjUxMDMgMjkuNjQxMDMsLTI0Ljc4OTc1IDQ3LjE1MTMzLC0xNi4yNTkwOGMxNy41MTAzMSw4LjUzMDY2IDI0Ljc4OTc1LDI5LjY0MTAzIDE2LjI1OTA5LDQ3LjE1MTMzYy04LjUzMDY2LDE3LjUxMDMgLTI5LjY0MTAzLDI0Ljc4OTc1IC00Ny4xNTEzNCwxNi4yNTkwOXoiPjwvcGF0aD48cGF0aCBzdHJva2U9Im5vbmUiIGZpbGw9IiM1YjU0ZDAiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9IiBkPSJNMjQzLjk3MDE4LDE3OC4wOTEyYy0wLjYzNTY1LDAuNjc5MjMgLTMuMTMyMzYsLTAuNDk0ODcgLTIuOTgxNTQsLTEuNDYzODljMC4zNzMwNSwtMi4zOTY3OCAyLjg3NTkyLC0xMy45NDg2MyAyLjg3NTkyLC0xMy45NDg2M2MwLDAgOC40MjE4MSwtOC44NzE5MiAxMC4wODY1MywtMTAuNjUwNzdjMC42Nzk0NywtMC43MjYwNiAxLjIzNDcsLTAuNDU1NTYgMS4wODE3NywwLjUyNzAyYy0wLjg4ODEzLDUuNzA2IC0yLjI5OTM5LDE0Ljc3Mjk1IC0yLjI5OTM5LDE0Ljc3Mjk1YzAsMCAtNy4xMzM4NCw5LjAyMjE2IC04Ljc2MzI5LDEwLjc2MzMyeiI+PC9wYXRoPjxwYXRoIHN0cm9rZT0ibm9uZSIgZmlsbD0iIzViNTRkMCIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGQ9Ik0yMzYuNTA3MjgsMTc4Ljk4ODUyYzAuNjI5MzUsMC4yMTY3MyAwLjcyNDUsMi42Nzk4MiAwLjA2MTA0LDIuOTA4M2MtMS42NDEwMSwwLjU2NTEyIC0xMC4yNzk5OCwyLjQxOTAxIC0xMC4yNzk5OCwyLjQxOTAxYy0xLjI5ODI2LC0wLjQ0NzA5IC04LjI1NzM5LC0yLjg0MzY1IC05LjkwNTYyLC0zLjQxMTI2Yy0wLjY3Mjc0LC0wLjIzMTY3IC0wLjY3Mjc0LC0wLjcyMDI4IDAsLTAuOTUxOTVjMS42NDgyMywtMC41Njc2MSAxMC4xMTQ2NiwtMy40ODMyNiAxMC4xMTQ2NiwtMy40ODMyNmMwLDAgOC4zOTY2LDEuOTYzNTggMTAuMDA5OTEsMi41MTkxN3oiPjwvcGF0aD48cGF0aCBzdHJva2U9Im5vbmUiIGZpbGw9IiM1YjU0ZDAiIGQ9Ik0yMzQuMzA5NTQsMTgwLjAwMDAxYzAsLTMuMTQyNzYgMi41NDc3MSwtNS42OTA0NyA1LjY5MDQ3LC01LjY5MDQ3YzMuMTQyNzYsMCA1LjY5MDQ3LDIuNTQ3NzEgNS42OTA0Nyw1LjY5MDQ3YzAsMy4xNDI3NiAtMi41NDc3MSw1LjY5MDQ3IC01LjY5MDQ3LDUuNjkwNDdjLTMuMTQyNzYsMCAtNS42OTA0NywtMi41NDc3MSAtNS42OTA0NywtNS42OTA0N3oiPjwvcGF0aD48cGF0aCBzdHJva2U9IiM1YjU0ZDAiIGZpbGw9IiM1YjU0ZDAiIGQ9Ik0yMzkuNTI1MDEsMTk5LjgyOTE4YzAsLTIuMjgyNzggMS44NTA1NiwtNC4xMzMzMyA0LjEzMzMzLC00LjEzMzMzaDM4LjIzMzMzYzIuMjgyNzgsMCA0LjEzMzMzLDEuODUwNTYgNC4xMzMzMyw0LjEzMzMzdjkuMDQxNjdjMCwyLjI4Mjc4IC0xLjg1MDU2LDQuMTMzMzMgLTQuMTMzMzMsNC4xMzMzM2gtMzguMjMzMzNjLTIuMjgyNzgsMCAtNC4xMzMzMywtMS44NTA1NiAtNC4xMzMzMywtNC4xMzMzM3oiPjwvcGF0aD48cGF0aCBzdHJva2U9IiM1YjU0ZDAiIGZpbGw9IiM1YjU0ZDAiIGQ9Ik0yNTguMjU0MTcsMjI3LjYwMDAxYy0yLjI4Mjc4LDAgLTQuMTMzMzMsLTEuODUwNTYgLTQuMTMzMzMsLTQuMTMzMzN2LTM4LjIzMzMzYzAsLTIuMjgyNzggMS44NTA1NiwtNC4xMzMzMyA0LjEzMzMzLC00LjEzMzMzaDkuMDQxNjdjMi4yODI3OCwwIDQuMTMzMzMsMS44NTA1NiA0LjEzMzMzLDQuMTMzMzN2MzguMjMzMzNjMCwyLjI4Mjc4IC0xLjg1MDU2LDQuMTMzMzMgLTQuMTMzMzMsNC4xMzMzM3oiPjwvcGF0aD48cGF0aCBzdHJva2U9Im5vbmUiIGZpbGw9IiNmZmZmZmYiIGQ9Ik0yNjEuMTUsMjIzLjYwMDAxYy0yLjIwOTE0LDAgLTQsLTEuNzkwODYgLTQsLTR2LTMwLjc1YzAsLTIuMjA5MTQgMS43OTA4NiwtNCA0LC00aDMuMjVjMi4yMDkxNCwwIDQsMS43OTA4NiA0LDR2MzAuNzVjMCwyLjIwOTE0IC0xLjc5MDg2LDQgLTQsNHoiPjwvcGF0aD48cGF0aCBzdHJva2U9Im5vbmUiIGZpbGw9IiNmZmZmZmYiIGQ9Ik0yNDMuNTI1MDEsMjAyLjcyNTAxYzAsLTIuMjA5MTQgMS43OTA4NiwtNCA0LC00aDMwLjc1YzIuMjA5MTQsMCA0LDEuNzkwODYgNCw0djMuMjVjMCwyLjIwOTE0IC0xLjc5MDg2LDQgLTQsNGgtMzAuNzVjLTIuMjA5MTQsMCAtNCwtMS43OTA4NiAtNCwtNHoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPjwhLS1yb3RhdGlvbkNlbnRlcjozNS4yNzU1ODMxOTMwMDM0NTY6MzUuMjc1NTgzMTkzMDAzNC0tPg==';

  class TimeCalc {
    getInfo() {
      return {
        id: 'SPtimeCalc',
        name: 'Time Calculation',
        color1: '#5b54d0',
        color2: '#373279',
        color3: '#373279',
        menuIconURI,
        blockIconURI,
        blocks: [
          {
            opcode: "calculatetimedurationfromdate",
            blockType: Scratch.BlockType.REPORTER,
            text: "difference between [DATE] to current date in [TIME_MENU]",
            arguments: {
              DATE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "2006-04-16",
              },
              TIME_MENU: {
                type: Scratch.ArgumentType.STRING,
                menu: "Time",
                defaultValue: "day",
              },
            },
          },
          {
            opcode: "calculatetimedurationfromtime",
            blockType: Scratch.BlockType.REPORTER,
            text: "difference between [START_TIME] to current time in [TIME_MENU]",
            arguments: {
              START_TIME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "00:00",
              },
              TIME_MENU: {
                type: Scratch.ArgumentType.STRING,
                menu: "Time",
                defaultValue: "hour",
              },
            },
          },
          {
            opcode: "calculatetimedifference",
            blockType: Scratch.BlockType.REPORTER,
            text: "difference between [START_TIME] and [END_TIME] in [TIME_MENU]",
            arguments: {
              START_TIME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "00:00",
              },
              END_TIME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "00:00",
              },
              TIME_MENU: {
                type: Scratch.ArgumentType.STRING,
                menu: "Time",
                defaultValue: "hour",
              },
            },
          },

          '---',

          {
            opcode: "converttotime",
            blockType: Scratch.BlockType.REPORTER,
            text: "convert [VALUE] to time (day:hour:minute)",
            arguments: {
              VALUE: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0,
              },
            },
          },
          {
            opcode: "daysinmonth",
            blockType: Scratch.BlockType.REPORTER,
            text: "number of days in [MONTH] [YEAR]",
            arguments: {
              MONTH: {
                type: Scratch.ArgumentType.STRING,
                menu: "Months",
                defaultValue: "January",
              },
              YEAR: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "2000",
              },
            },
          },

          '---',

          {
            opcode: "countdownReport",
            blockType: Scratch.BlockType.REPORTER,
            text: "countdown to [TIME] in [MENU]",
            arguments: {
              TIME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '2007-03-14 09:34:00',
              },
              MENU: {
                type: Scratch.ArgumentType.STRING,
                menu: "Time",
                defaultValue: "hour",
              },
            },
          },
          {
            opcode: "countdownBoolean",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "countdown to [TIME] reached?",
            arguments: {
              TIME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '2007-03-14 09:34:00',
              },
            },
          },
        ],
        menus: {
          Time: {
            acceptReporters: true,
            items: ["year", "month", "day", "hour", "minute", "second"],
          },
          Months: {
            acceptReporters: true,
            items: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ],
          },
        },
      };
    }
    calculateTimeDifference(startDate, endDate, timeMenu) {
      const timeDiff = Math.abs(endDate.getTime() - startDate.getTime());

      switch (timeMenu) {
        case "year":
          return Math.round(timeDiff / 946080000000);
        case "month":
          return Math.round(timeDiff / 2592000000);
        case "day":
          return Math.round(timeDiff / 86400000);
        case "hour":
          return Math.round(timeDiff / 3600000);
        case "minute":
          return Math.round(timeDiff / 60000);
        case "second":
          return Math.round(timeDiff / 1000);
        default:
          return "Invalid Menu Input";
      }
    }

    calculatetimedurationfromdate(args) {
      const dateString = args.DATE ? args.DATE : null;
      const timeMenu = args.TIME_MENU;
      const startDate = new Date(dateString);
      const endDate = new Date();
      const difference = this.calculateTimeDifference(startDate, endDate, timeMenu);
      if (isNaN(difference)) {
        return "Invalid Time Input";
      } else {
        return difference;
      }
    }

    calculatetimedurationfromtime(args) {
      const startTime = args.START_TIME ? args.START_TIME : null;
      const timeMenu = args.TIME_MENU;
      const [startHour, startMinute] = startTime.split(":");
      const startDate = new Date();
      startDate.setHours(parseInt(startHour), parseInt(startMinute), 0, 0);
      const endDate = new Date();
      const difference = this.calculateTimeDifference(startDate, endDate, timeMenu);

      if (isNaN(difference)) {
        return "Invalid Time Input";
      } else {
        return difference;
      }
    }

    calculatetimedifference(args) {
      const startTime = args.START_TIME ? args.START_TIME : null;
      const endTime = args.END_TIME ? args.END_TIME : null;
      const timeMenu = args.TIME_MENU;
      const startDate = new Date();
      const endDate = new Date();
      const startHour = parseInt(startTime.split(":")[0]);
      const startMinute = parseInt(startTime.split(":")[1]);
      const endHour = parseInt(endTime.split(":")[0]);
      const endMinute = parseInt(endTime.split(":")[1]);
      startDate.setHours(startHour, startMinute, 0, 0);
      endDate.setHours(endHour, endMinute, 0, 0);

      const difference = this.calculateTimeDifference(startDate, endDate, timeMenu);
      if (isNaN(difference)) {
        return "Invalid Time Input";
      } else {
        return difference;
      }
    }

    converttotime(args) {
      const value = args.VALUE ? args.VALUE : 0;
      const seconds = Math.floor(value);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);

      const timeString = `${hours % 24}:${minutes % 60}:${seconds % 60}`;
      return timeString;
    }

    daysinmonth(args) {
      const month = args.MONTH;
      const year = args.YEAR ? args.YEAR : null;
      const monthIndex = this._getMonthIndex(month);

      if (monthIndex === -1) {
        return "Invalid month";
      }

      const date = new Date(year, monthIndex + 1, 0);
      return date.getDate();
    }

    _getMonthIndex(month) {
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      return months.indexOf(month);
    }

    countdownReport(args) {
      const timeMenu = args.MENU;
      const endDate = Date.now();

      const dateTimeParts = args.TIME.split(/[- :]/);
      const year = parseInt(dateTimeParts[0]);
      const month = parseInt(dateTimeParts[1]) - 1;
      const day = parseInt(dateTimeParts[2]);
      const hour = parseInt(dateTimeParts[3]);
      const minute = parseInt(dateTimeParts[4]);
      const second = parseInt(dateTimeParts[5]);

      const startDate = new Date(year, month, day, hour, minute, second).getTime();
      const timeDifference = startDate - endDate;
      
      switch (timeMenu) {
        case "year":
          return Math.round(timeDifference / 946080000000);
        case "month":
          return Math.round(timeDifference / 2592000000);
        case "day":
          return Math.round(timeDifference / 86400000);
        case "hour":
          return Math.round(timeDifference / 3600000);
        case "minute":
          return Math.round(timeDifference / 60000);
        case "second":
          return Math.round(timeDifference / 1000);
        default:
          return "Invalid Menu Input";
      }
    }

    countdownBoolean(args) {
      const endDate = Date.now();

      const dateTimeParts = args.TIME.split(/[- :]/);
      const year = parseInt(dateTimeParts[0]);
      const month = parseInt(dateTimeParts[1]) - 1;
      const day = parseInt(dateTimeParts[2]);
      const hour = parseInt(dateTimeParts[3]);
      const minute = parseInt(dateTimeParts[4]);
      const second = parseInt(dateTimeParts[5]);

      const startDate = new Date(year, month, day, hour, minute, second).getTime();
      const timeDifference = startDate - endDate;
      return (timeDifference <= 0);
    }
  }
  Scratch.extensions.register(new TimeCalc());
})(Scratch);
