// Name: Time Calculation
// ID: SPtimeCalc
// Description: Blocks for calculating and converting Time.
// By: SharkPool

// Version V.2.0.2

// Excuse horrible naming of opcodes, this was made a LONG time ago and I cant change it

(function (Scratch) {
  "use strict";

  const menuIconURI =
"data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwLDAsMTA3LjUyMzI5LDExMC41OTgyOCIgaGVpZ2h0PSIxMTAuNTk4MjgiIHdpZHRoPSIxMDcuNTIzMjkiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE4Ny43NTE3MSwtMTI3Ljc1MTcxKSI+PGcgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIGZpbGwtcnVsZT0ibm9uemVybyIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9Ij48cGF0aCBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZT0ibm9uZSIgZmlsbD0iIzViNTRkMCIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGQ9Ik0yNDAsMjMyLjI0ODI5Yy0yOC44NTU5MywwIC01Mi4yNDgyOSwtMjMuMzkyMzYgLTUyLjI0ODI5LC01Mi4yNDgyOWMwLC0yOC44NTU5MyAyMy4zOTIzNiwtNTIuMjQ4MjggNTIuMjQ4MjksLTUyLjI0ODI4YzI4Ljg1NTkzLDAgNTIuMjQ4MjksMjMuMzkyMzUgNTIuMjQ4MjksNTIuMjQ4MjljMCwyOC44NTU5MyAtMjMuMzkyMzYsNTIuMjQ4MjkgLTUyLjI0ODI5LDUyLjI0ODI5eiI+PC9wYXRoPjxwYXRoIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlPSJub25lIiBmaWxsPSIjZmZmZmZmIiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZD0iTTIyNC41NTM4OCwyMTEuNzA1MjFjLTE3LjUxMDMsLTguNTMwNjYgLTI0Ljc4OTc1LC0yOS42NDEwMyAtMTYuMjU5MDgsLTQ3LjE1MTMzYzguNTMwNjYsLTE3LjUxMDMgMjkuNjQxMDMsLTI0Ljc4OTc1IDQ3LjE1MTMzLC0xNi4yNTkwOGMxNy41MTAzMSw4LjUzMDY2IDI0Ljc4OTc1LDI5LjY0MTAzIDE2LjI1OTA5LDQ3LjE1MTMzYy04LjUzMDY2LDE3LjUxMDMgLTI5LjY0MTAzLDI0Ljc4OTc1IC00Ny4xNTEzNCwxNi4yNTkwOXoiPjwvcGF0aD48cGF0aCBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZT0ibm9uZSIgZmlsbD0iIzViNTRkMCIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGQ9Ik0yNDMuOTcwMTcsMTc4LjA5MTE5Yy0wLjYzNTY1LDAuNjc5MjMgLTMuMTMyMzYsLTAuNDk0ODcgLTIuOTgxNTQsLTEuNDYzODljMC4zNzMwNSwtMi4zOTY3OCAyLjg3NTkyLC0xMy45NDg2MyAyLjg3NTkyLC0xMy45NDg2M2MwLDAgOC40MjE4MSwtOC44NzE5MiAxMC4wODY1MywtMTAuNjUwNzdjMC42Nzk0NywtMC43MjYwNiAxLjIzNDcsLTAuNDU1NTYgMS4wODE3NywwLjUyNzAyYy0wLjg4ODEzLDUuNzA2IC0yLjI5OTM5LDE0Ljc3Mjk1IC0yLjI5OTM5LDE0Ljc3Mjk1YzAsMCAtNy4xMzM4NCw5LjAyMjE2IC04Ljc2MzI5LDEwLjc2MzMyeiI+PC9wYXRoPjxwYXRoIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlPSJub25lIiBmaWxsPSIjNWI1NGQwIiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZD0iTTIzNi41MDcyNywxNzguOTg4NTFjMC42MjkzNSwwLjIxNjczIDAuNzI0NSwyLjY3OTgyIDAuMDYxMDQsMi45MDgzYy0xLjY0MTAxLDAuNTY1MTIgLTEwLjI3OTk4LDIuNDE5MDEgLTEwLjI3OTk4LDIuNDE5MDFjLTEuMjk4MjYsLTAuNDQ3MDkgLTguMjU3MzksLTIuODQzNjUgLTkuOTA1NjIsLTMuNDExMjZjLTAuNjcyNzQsLTAuMjMxNjcgLTAuNjcyNzQsLTAuNzIwMjggMCwtMC45NTE5NWMxLjY0ODIzLC0wLjU2NzYxIDEwLjExNDY2LC0zLjQ4MzI2IDEwLjExNDY2LC0zLjQ4MzI2YzAsMCA4LjM5NjYsMS45NjM1OCAxMC4wMDk5MSwyLjUxOTE3eiI+PC9wYXRoPjxwYXRoIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlPSJub25lIiBmaWxsPSIjNWI1NGQwIiBkPSJNMjM0LjMwOTUzLDE4MGMwLC0zLjE0Mjc2IDIuNTQ3NzEsLTUuNjkwNDcgNS42OTA0NywtNS42OTA0N2MzLjE0Mjc2LDAgNS42OTA0NywyLjU0NzcxIDUuNjkwNDcsNS42OTA0N2MwLDMuMTQyNzYgLTIuNTQ3NzEsNS42OTA0NyAtNS42OTA0Nyw1LjY5MDQ3Yy0zLjE0Mjc2LDAgLTUuNjkwNDcsLTIuNTQ3NzEgLTUuNjkwNDcsLTUuNjkwNDd6Ij48L3BhdGg+PHBhdGggc3Ryb2tlLXdpZHRoPSI1IiBzdHJva2U9IiM1YjU0ZDAiIGZpbGw9IiM1YjU0ZDAiIGQ9Ik0yNDYuMjc1LDIwOC4wNzkxN2MwLC0yLjI4Mjc4IDEuODUwNTYsLTQuMTMzMzMgNC4xMzMzMywtNC4xMzMzM2wzOC4yMzMzMywwYzIuMjgyNzgsMCA0LjEzMzMzLDEuODUwNTYgNC4xMzMzMyw0LjEzMzMzbDAsOS4wNDE2N2MwLDIuMjgyNzggLTEuODUwNTYsNC4xMzMzMyAtNC4xMzMzMyw0LjEzMzMzbC0zOC4yMzMzMywwYy0yLjI4Mjc4LDAgLTQuMTMzMzMsLTEuODUwNTYgLTQuMTMzMzMsLTQuMTMzMzN6Ij48L3BhdGg+PHBhdGggc3Ryb2tlLXdpZHRoPSI1IiBzdHJva2U9IiM1YjU0ZDAiIGZpbGw9IiM1YjU0ZDAiIGQ9Ik0yNjUuMDA0MTcsMjM1Ljg1Yy0yLjI4Mjc4LDAgLTQuMTMzMzMsLTEuODUwNTYgLTQuMTMzMzMsLTQuMTMzMzN2LTM4LjIzMzMzYzAsLTIuMjgyNzggMS44NTA1NiwtNC4xMzMzMyA0LjEzMzMzLC00LjEzMzMzaDkuMDQxNjdjMi4yODI3OCwwIDQuMTMzMzMsMS44NTA1NiA0LjEzMzMzLDQuMTMzMzN2MzguMjMzMzNjMCwyLjI4Mjc4IC0xLjg1MDU2LDQuMTMzMzMgLTQuMTMzMzMsNC4xMzMzM3oiPjwvcGF0aD48cGF0aCBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZT0ibm9uZSIgZmlsbD0iI2ZmZmZmZiIgZD0iTTI2Ny45LDIzMS44NWMtMi4yMDkxNCwwIC00LC0xLjc5MDg2IC00LC00di0zMC43NWMwLC0yLjIwOTE0IDEuNzkwODYsLTQgNCwtNGgzLjI1YzIuMjA5MTQsMCA0LDEuNzkwODYgNCw0djMwLjc1YzAsMi4yMDkxNCAtMS43OTA4Niw0IC00LDR6Ij48L3BhdGg+PHBhdGggc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2U9Im5vbmUiIGZpbGw9IiNmZmZmZmYiIGQ9Ik0yNTAuMjc1LDIxMC45NzVjMCwtMi4yMDkxNCAxLjc5MDg2LC00IDQsLTRoMzAuNzVjMi4yMDkxNCwwIDQsMS43OTA4NiA0LDR2My4yNWMwLDIuMjA5MTQgLTEuNzkwODYsNCAtNCw0bC0zMC43NSwwYy0yLjIwOTE0LDAgLTQsLTEuNzkwODYgLTQsLTR6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz48IS0tcm90YXRpb25DZW50ZXI6NTIuMjQ4Mjg1MDAwMDAwMDE6NTIuMjQ4Mjg0OTk5OTk5OTk2LS0+";
  const blockIconURI =
"data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwLDAsODEuMzAwNTgsODIuODc1NTkiIGhlaWdodD0iODIuODc1NTkiIHdpZHRoPSI4MS4zMDA1OCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjA0LjcyNDQyLC0xNDQuNzI0NDIpIj48ZyBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLXdpZHRoPSIwIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2lzUGFpbnRpbmdMYXllciZxdW90Ozp0cnVlfSI+PHBhdGggc3Ryb2tlPSJub25lIiBmaWxsPSIjZmZmZmZmIiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZD0iTTIyNC41NTM4OCwyMTEuNzA1MjJjLTE3LjUxMDMsLTguNTMwNjYgLTI0Ljc4OTc1LC0yOS42NDEwMyAtMTYuMjU5MDgsLTQ3LjE1MTMzYzguNTMwNjYsLTE3LjUxMDMgMjkuNjQxMDMsLTI0Ljc4OTc1IDQ3LjE1MTMzLC0xNi4yNTkwOGMxNy41MTAzMSw4LjUzMDY2IDI0Ljc4OTc1LDI5LjY0MTAzIDE2LjI1OTA5LDQ3LjE1MTMzYy04LjUzMDY2LDE3LjUxMDMgLTI5LjY0MTAzLDI0Ljc4OTc1IC00Ny4xNTEzNCwxNi4yNTkwOXoiPjwvcGF0aD48cGF0aCBzdHJva2U9Im5vbmUiIGZpbGw9IiM1YjU0ZDAiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9IiBkPSJNMjQzLjk3MDE4LDE3OC4wOTEyYy0wLjYzNTY1LDAuNjc5MjMgLTMuMTMyMzYsLTAuNDk0ODcgLTIuOTgxNTQsLTEuNDYzODljMC4zNzMwNSwtMi4zOTY3OCAyLjg3NTkyLC0xMy45NDg2MyAyLjg3NTkyLC0xMy45NDg2M2MwLDAgOC40MjE4MSwtOC44NzE5MiAxMC4wODY1MywtMTAuNjUwNzdjMC42Nzk0NywtMC43MjYwNiAxLjIzNDcsLTAuNDU1NTYgMS4wODE3NywwLjUyNzAyYy0wLjg4ODEzLDUuNzA2IC0yLjI5OTM5LDE0Ljc3Mjk1IC0yLjI5OTM5LDE0Ljc3Mjk1YzAsMCAtNy4xMzM4NCw5LjAyMjE2IC04Ljc2MzI5LDEwLjc2MzMyeiI+PC9wYXRoPjxwYXRoIHN0cm9rZT0ibm9uZSIgZmlsbD0iIzViNTRkMCIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGQ9Ik0yMzYuNTA3MjgsMTc4Ljk4ODUyYzAuNjI5MzUsMC4yMTY3MyAwLjcyNDUsMi42Nzk4MiAwLjA2MTA0LDIuOTA4M2MtMS42NDEwMSwwLjU2NTEyIC0xMC4yNzk5OCwyLjQxOTAxIC0xMC4yNzk5OCwyLjQxOTAxYy0xLjI5ODI2LC0wLjQ0NzA5IC04LjI1NzM5LC0yLjg0MzY1IC05LjkwNTYyLC0zLjQxMTI2Yy0wLjY3Mjc0LC0wLjIzMTY3IC0wLjY3Mjc0LC0wLjcyMDI4IDAsLTAuOTUxOTVjMS42NDgyMywtMC41Njc2MSAxMC4xMTQ2NiwtMy40ODMyNiAxMC4xMTQ2NiwtMy40ODMyNmMwLDAgOC4zOTY2LDEuOTYzNTggMTAuMDA5OTEsMi41MTkxN3oiPjwvcGF0aD48cGF0aCBzdHJva2U9Im5vbmUiIGZpbGw9IiM1YjU0ZDAiIGQ9Ik0yMzQuMzA5NTQsMTgwLjAwMDAxYzAsLTMuMTQyNzYgMi41NDc3MSwtNS42OTA0NyA1LjY5MDQ3LC01LjY5MDQ3YzMuMTQyNzYsMCA1LjY5MDQ3LDIuNTQ3NzEgNS42OTA0Nyw1LjY5MDQ3YzAsMy4xNDI3NiAtMi41NDc3MSw1LjY5MDQ3IC01LjY5MDQ3LDUuNjkwNDdjLTMuMTQyNzYsMCAtNS42OTA0NywtMi41NDc3MSAtNS42OTA0NywtNS42OTA0N3oiPjwvcGF0aD48cGF0aCBzdHJva2U9IiM1YjU0ZDAiIGZpbGw9IiM1YjU0ZDAiIGQ9Ik0yMzkuNTI1MDEsMTk5LjgyOTE4YzAsLTIuMjgyNzggMS44NTA1NiwtNC4xMzMzMyA0LjEzMzMzLC00LjEzMzMzaDM4LjIzMzMzYzIuMjgyNzgsMCA0LjEzMzMzLDEuODUwNTYgNC4xMzMzMyw0LjEzMzMzdjkuMDQxNjdjMCwyLjI4Mjc4IC0xLjg1MDU2LDQuMTMzMzMgLTQuMTMzMzMsNC4xMzMzM2gtMzguMjMzMzNjLTIuMjgyNzgsMCAtNC4xMzMzMywtMS44NTA1NiAtNC4xMzMzMywtNC4xMzMzM3oiPjwvcGF0aD48cGF0aCBzdHJva2U9IiM1YjU0ZDAiIGZpbGw9IiM1YjU0ZDAiIGQ9Ik0yNTguMjU0MTcsMjI3LjYwMDAxYy0yLjI4Mjc4LDAgLTQuMTMzMzMsLTEuODUwNTYgLTQuMTMzMzMsLTQuMTMzMzN2LTM4LjIzMzMzYzAsLTIuMjgyNzggMS44NTA1NiwtNC4xMzMzMyA0LjEzMzMzLC00LjEzMzMzaDkuMDQxNjdjMi4yODI3OCwwIDQuMTMzMzMsMS44NTA1NiA0LjEzMzMzLDQuMTMzMzN2MzguMjMzMzNjMCwyLjI4Mjc4IC0xLjg1MDU2LDQuMTMzMzMgLTQuMTMzMzMsNC4xMzMzM3oiPjwvcGF0aD48cGF0aCBzdHJva2U9Im5vbmUiIGZpbGw9IiNmZmZmZmYiIGQ9Ik0yNjEuMTUsMjIzLjYwMDAxYy0yLjIwOTE0LDAgLTQsLTEuNzkwODYgLTQsLTR2LTMwLjc1YzAsLTIuMjA5MTQgMS43OTA4NiwtNCA0LC00aDMuMjVjMi4yMDkxNCwwIDQsMS43OTA4NiA0LDR2MzAuNzVjMCwyLjIwOTE0IC0xLjc5MDg2LDQgLTQsNHoiPjwvcGF0aD48cGF0aCBzdHJva2U9Im5vbmUiIGZpbGw9IiNmZmZmZmYiIGQ9Ik0yNDMuNTI1MDEsMjAyLjcyNTAxYzAsLTIuMjA5MTQgMS43OTA4NiwtNCA0LC00aDMwLjc1YzIuMjA5MTQsMCA0LDEuNzkwODYgNCw0djMuMjVjMCwyLjIwOTE0IC0xLjc5MDg2LDQgLTQsNGgtMzAuNzVjLTIuMjA5MTQsMCAtNCwtMS43OTA4NiAtNCwtNHoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPjwhLS1yb3RhdGlvbkNlbnRlcjozNS4yNzU1ODMxOTMwMDM0NTY6MzUuMjc1NTgzMTkzMDAzNC0tPg==";

  class TimeCalc {
    getInfo() {
      return {
        id: "SPtimeCalc",
        name: "Time Calculation",
        color1: "#5b54d0",
        color2: "#373279",
        color3: "#373279",
        menuIconURI,
        blockIconURI,
        blocks: [
          {
            opcode: "calculatetimedurationfromdate",
            blockType: Scratch.BlockType.REPORTER,
            text: "difference between [DATE] and now in [TIME_MENU]",
            arguments: {
              DATE: { type: Scratch.ArgumentType.STRING, defaultValue: "2007-03-14 09:34:00" },
              TIME_MENU: { type: Scratch.ArgumentType.STRING, menu: "Time" }
            },
          },
          {
            opcode: "calculatetimedurationfromstamp",
            blockType: Scratch.BlockType.REPORTER,
            text: "difference between [START_TIME] and [END_TIME] in [TIME_MENU]",
            arguments: {
              START_TIME: { type: Scratch.ArgumentType.STRING, defaultValue: "2007-03-14 09:34:00" },
              END_TIME: { type: Scratch.ArgumentType.STRING, defaultValue: "2016-07-21 15:03:00" },
              TIME_MENU: { type: Scratch.ArgumentType.STRING, menu: "Time" }
            },
          },
          {
            opcode: "calculatetimedurationfromtime",
            blockType: Scratch.BlockType.REPORTER,
            text: "difference between [START_TIME] and now in [TIME_MENU]",
            arguments: {
              START_TIME: { type: Scratch.ArgumentType.STRING, defaultValue: "00:00:00" },
              TIME_MENU: { type: Scratch.ArgumentType.STRING, menu: "Time" }
            },
          },
          {
            opcode: "calculatetimedifference",
            blockType: Scratch.BlockType.REPORTER,
            text: "difference between [START_TIME] and [END_TIME] in [TIME_MENU]",
            arguments: {
              START_TIME: { type: Scratch.ArgumentType.STRING, defaultValue: "00:00:00" },
              END_TIME: { type: Scratch.ArgumentType.STRING, defaultValue: "00:00:00" },
              TIME_MENU: { type: Scratch.ArgumentType.STRING, menu: "Time" }
            },
          },
          "---",
          {
            opcode: "evaluateTime",
            blockType: Scratch.BlockType.REPORTER,
            text: "[MATH] [START_TIME] and [END_TIME]",
            arguments: {
              START_TIME: { type: Scratch.ArgumentType.STRING, defaultValue: "2023-10-10 00:00:00" },
              END_TIME: { type: Scratch.ArgumentType.STRING, defaultValue: "1970-01-01 00:10:00" },
              MATH: { type: Scratch.ArgumentType.STRING, menu: "MathType" }
            },
          },
          {
            opcode: "converttotime",
            blockType: Scratch.BlockType.REPORTER,
            text: "convert [VALUE] seconds to [ROUND] time",
            arguments: {
              VALUE: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
              ROUND: { type: Scratch.ArgumentType.NUMBER, menu: "Round" }
            },
          },
          {
            opcode: "daysinmonth",
            blockType: Scratch.BlockType.REPORTER,
            text: "number of days in [MONTH] [YEAR]",
            arguments: {
              MONTH: { type: Scratch.ArgumentType.STRING, menu: "Months" },
              YEAR: { type: Scratch.ArgumentType.NUMBER, defaultValue: "2000" }
            },
          },
          "---",
          {
            opcode: "countdownReport",
            blockType: Scratch.BlockType.REPORTER,
            text: "countdown to [TIME] in [MENU]",
            arguments: {
              TIME: { type: Scratch.ArgumentType.STRING, defaultValue: "2007-03-14 09:34:00" },
              MENU: { type: Scratch.ArgumentType.STRING, menu: "Time" }
            },
          },
          {
            opcode: "countdownBoolean",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "countdown to [TIME] reached?",
            arguments: {
              TIME: { type: Scratch.ArgumentType.STRING, defaultValue: "2007-03-14 09:34:00" }
            },
          },
          {
            opcode: "convertToValue", blockType: Scratch.BlockType.REPORTER, // Deprecated
            text: "convert [VALUE] to [TIME]", hideFromPalette: true,
            arguments: {
              VALUE: { type: Scratch.ArgumentType.STRING, defaultValue: "1970-01-01 00:00:00" }, TIME: { type: Scratch.ArgumentType.STRING, menu: "Time" }
            },
          }
        ],
        menus: {
          MathType: { acceptReporters: true, items: ["add", "subtract"] },
          Round: { acceptReporters: true, items: ["rounded", "exact"] },
          Time: {
            acceptReporters: true,
            items: ["year", "month", "day", "hour", "minute", "second"]
          },
          Months: {
            acceptReporters: true,
            items: [
              "January", "February", "March", "April",
              "May", "June", "July", "August",
              "September", "October", "November", "December",
            ]
          },
        },
      };
    }

    // Helper funcs
    _getMonthIndex(month) {
      const months = [
        "January", "February", "March",
        "April", "May", "June",
        "July", "August", "September",
        "October", "November", "December",
      ];
      return months.indexOf(month);
    }

    calcTimeDiff(startDate, endDate, timeMenu, abs) {
      let timeDiff = endDate.getTime() - startDate.getTime();
      timeDiff = abs ? Math.abs(timeDiff) : timeDiff * -1;
      switch (timeMenu) {
        case "year": return timeDiff / 31536000000;
        case "month": return timeDiff / 2629746000;
        case "day": return timeDiff / 86400000;
        case "hour": return timeDiff / 3600000;
        case "minute": return timeDiff / 60000;
        case "second": return timeDiff / 1000;
        default: return "Invalid Menu Input";
      }
    }

    // Blocks
    calculatetimedurationfromdate(args) {
      const startDate = new Date(args.DATE ? args.DATE : null);
      const difference = this.calcTimeDiff(
        startDate, new Date(), args.TIME_MENU, true
      );
      if (isNaN(difference)) return "Invalid Time Input";
      else return difference;
    }

    calculatetimedurationfromstamp(args) {
      const startDate = new Date(args.START_TIME ? args.START_TIME : null);
      const endDate = new Date(args.END_TIME ? args.END_TIME : null);
      const difference = this.calcTimeDiff(
        startDate, endDate, args.TIME_MENU, true
      );
      if (isNaN(difference)) return "Invalid Time Input";
      else return difference;
    }

    calculatetimedurationfromtime(args) {
      const startTime = args.START_TIME ? args.START_TIME : null;
      const [startHour, startMinute] = startTime.split(":");
      const startDate = new Date();
      startDate.setHours(parseInt(startHour), parseInt(startMinute), 0, 0);
      const difference = this.calcTimeDiff(
        startDate, new Date(), args.TIME_MENU, true
      );
      if (isNaN(difference)) return "Invalid Time Input";
      else return difference;
    }

    calculatetimedifference(args) {
      const startTime = args.START_TIME ? args.START_TIME : null;
      const endTime = args.END_TIME ? args.END_TIME : null;
      const startDate = new Date();
      const endDate = new Date();
      const startHour = parseInt(startTime.split(":")[0]);
      const startMinute = parseInt(startTime.split(":")[1]);
      const endHour = parseInt(endTime.split(":")[0]);
      const endMinute = parseInt(endTime.split(":")[1]);
      startDate.setHours(startHour, startMinute, 0, 0);
      endDate.setHours(endHour, endMinute, 0, 0);
      const difference = this.calcTimeDiff(
        startDate, endDate, args.TIME_MENU, true
      );
      if (isNaN(difference)) return "Invalid Time Input";
      else return difference;
    }

    converttotime(args) {
      const totalSeconds = Scratch.Cast.toNumber(args.VALUE);
      const seconds = args.ROUND === "rounded" ? Math.round(totalSeconds % 60).toString().padStart(2, "0") : (totalSeconds % 60).toFixed(3).padStart(6, "0");
      const minutes = Math.floor((totalSeconds / 60) % 60).toString().padStart(2, "0");
      const hours = Math.floor(totalSeconds / 3600).toString().padStart(2, "0");
      return `${hours}:${minutes}:${seconds}`;
    }

    daysinmonth(args) {
      const year = args.YEAR ? args.YEAR : null;
      const monthIndex = this._getMonthIndex(Scratch.Cast.toString(args.MONTH));
      if (monthIndex === -1) return "Invalid month";
      const date = new Date(year, monthIndex + 1, 0);
      return date.getDate();
    }

    countdownReport(args) {
      const dateString = args.TIME ? args.TIME : null;
      const startDate = new Date(dateString);
      const difference = this.calcTimeDiff(
        startDate, new Date(), args.MENU, false
      );
      if (isNaN(difference)) return "Invalid Time Input";
      else return difference;
    }

    countdownBoolean(args) {
      const startDate = new Date(args.TIME ? args.TIME : null);
      return startDate - Date.now() <= 0;
    }

    evaluateTime(args) {
      const startDate = new Date(args.START_TIME ? args.START_TIME : null);
      const endDate = new Date(args.END_TIME ? args.END_TIME : null);
      if (isNaN(startDate) || isNaN(endDate)) return "Invalid Time Input";
      let timeDifference = "";
      if (args.MATH === "add") timeDifference = startDate.getTime() + endDate.getTime();
      else timeDifference = startDate.getTime() - endDate.getTime();
      const resultDate = new Date(timeDifference);

      const year = resultDate.getFullYear();
      const month = String(resultDate.getMonth() + 1).padStart(2, "0");
      const day = String(resultDate.getDate()).padStart(2, "0");
      const changer = args.MATH === "add" ? 8 : -8;
      const hours = String(resultDate.getHours() - changer).padStart(2, "0");
      const minutes = String(resultDate.getMinutes()).padStart(2, "0");
      const seconds = String(resultDate.getSeconds()).padStart(2, "0");
      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }

    convertToValue(args) {
      let date = new Date(args.VALUE ? args.VALUE : null);
      date = Math.round(date.getTime() / 1000) - 28800;
      switch (args.TIME) {
        case "year": return date / 31536000;
        case "month": return date / 2629746;
        case "day": return date / 86400;
        case "hour": return date / 3600;
        case "minute": return date / 60;
        case "second": return date;
        default: return "Invalid Menu Input";
      }
    }
  }
  Scratch.extensions.register(new TimeCalc());
})(Scratch);
