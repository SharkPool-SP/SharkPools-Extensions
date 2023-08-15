/*
* This extension was made by SharkPool
* Version 1.0
* Do NOT delete these comments
* Extension is under development
*/

(function(Scratch) {
  'use strict';

  if (!Scratch.extensions.unsandboxed) {
    throw new Error('Camera Sensing Plus must run unsandboxed');
  }
  
    const menuIconURI = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxMDYuNTQ0NTgiIGhlaWdodD0iMTA2LjU0NDU4IiB2aWV3Qm94PSIwLDAsMTA2LjU0NDU4LDEwNi41NDQ1OCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE4Ni43Mjc3MSwtMTI2LjcyNzcxKSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0xODYuNzI3NzEsMTgwYzAsLTI5LjQyMTQ3IDIzLjg1MDgyLC01My4yNzIyOSA1My4yNzIyOSwtNTMuMjcyMjljMjkuNDIxNDcsMCA1My4yNzIyOSwyMy44NTA4MiA1My4yNzIyOSw1My4yNzIyOWMwLDI5LjQyMTQ3IC0yMy44NTA4Miw1My4yNzIyOSAtNTMuMjcyMjksNTMuMjcyMjljLTI5LjQyMTQ3LDAgLTUzLjI3MjI5LC0yMy44NTA4MiAtNTMuMjcyMjksLTUzLjI3MjI5eiIgZmlsbD0iIzAwYjJhNCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PHBhdGggZD0iTTI1MS44NzE4NSwxNjYuNzYyMDVjMC4xNzQ4NSwwLjM1NzY2IDAuMzEwMjgsMC42NzM2NSAwLjMxMDI4LDAuNTg1MDR2MjQuODIzODFjMCwwLjY4MDkgLTAuNTYxNTgsMS4yMDUwNCAtMS4yMDUwNCwxLjIwNTA0Yy0wLjExNjgyLDAgLTAuMzA0MTgsLTAuMDgwMzEgLTAuMzUyOTQsLTAuMTI5MDdsLTAuMjMyMTEsLTAuMTgxMjJsLTE1LjA4MDQ3LC05LjA0ODI4djUuNTAyNDRjMCw0LjY5MTMzIC0zLjg1MjExLDguNjc2MjggLTguNDM1MjcsOC42NzYyOGgtMjEuNDQ5NzFjLTQuODU3NTIsLTAuMjEyMzQgLTguNjc2MjgsLTQuMDMxMDkgLTguNjc2MjgsLTguNjc2Mjh2LTE5LjAzOTYyYzAsLTQuODc3NjYgMy43OTg2MSwtOC42NzYyOCA4LjY3NjI4LC04LjY3NjI4aDIxLjQ0OTcxYzQuNjY4NzYsMCA4LjQzNTI3LDMuODMxNDYgOC40MzUyNyw4LjY3NjI4djUuNTkxMThsMTQuODc0OSwtOS42NDExM2MwLjY0OTg3LC0wLjM4OTA5IDEuMzM1MDcsLTAuMjUyMDMgMS42ODUzNywwLjMzMTh6IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48cGF0aCBkPSJNMjcxLjk5NDkyLDE3MC44MTg1NHYxOC4zNjI5TTI4MS4xNzYzNywxODBoLTE4LjM2MzI2IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMTEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik0yNzEuOTk0OTIsMTg5LjE4MTQ1di0xOC4zNjI5TTI4MS4xNzYzNywxODBoLTE4LjM2MzI2IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMGIyYTQiIHN0cm9rZS13aWR0aD0iNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9nPjwvZz48L3N2Zz4=';
  
    const blockIconURI = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI2Ni42OTIxOCIgaGVpZ2h0PSI2Ni42OTIxOCIgdmlld0JveD0iMCwwLDY2LjY5MjE4LDY2LjY5MjE4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjA2LjY1MzkxLC0xNDYuNjUzOTEpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTIwNi42NTM5MSwyMTMuMzQ2MDl2LTY2LjY5MjE4aDY2LjY5MjE4djY2LjY5MjE4eiIgZmlsbD0iIzAwYjJhNCIgc3Ryb2tlPSJub25lIi8+PHBhdGggZD0iTTI2NC4yNjkzNywxNjguMjc3YzAuMTU0ODQsMC4zMTY3MyAwLjI3NDc3LDAuNTk2NTYgMC4yNzQ3NywwLjUxODA5djIxLjk4M2MwLDAuNjAyOTggLTAuNDk3MzEsMS4wNjcxNCAtMS4wNjcxNCwxLjA2NzE0Yy0wLjEwMzQ1LDAgLTAuMjY5MzcsLTAuMDcxMTIgLTAuMzEyNTUsLTAuMTE0M2wtMC4yMDU1NSwtMC4xNjA0OGwtMTMuMzU0NjgsLTguMDEyODF2NC44NzI3NWMwLDQuMTU0NDYgLTMuNDExMjgsNy42ODMzOCAtNy40Njk5NSw3LjY4MzM4aC0xOC45OTUwM2MtNC4zMDE2MywtMC4xODgwNCAtNy42ODMzOCwtMy41Njk3OCAtNy42ODMzOCwtNy42ODMzOHYtMTYuODYwNzVjMCwtNC4zMTk0NyAzLjM2MzksLTcuNjgzMzggNy42ODMzOCwtNy42ODMzOGgxOC45OTUwM2M0LjEzNDQ3LDAgNy40Njk5NSwzLjM5Mjk5IDcuNDY5OTUsNy42ODMzOHY0Ljk1MTMzbDEzLjE3MjYzLC04LjUzNzgxYzAuNTc1NSwtMC4zNDQ1NiAxLjE4MjI5LC0wLjIyMzE5IDEuNDkyNSwwLjI5MzgzeiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMDAwMDAwIi8+PC9nPjwvZz48L3N2Zz4=';
     
    const cameraIconURI = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1My45MDY2MyIgaGVpZ2h0PSI1My45MDY2MyIgdmlld0JveD0iMCwwLDUzLjkwNjYzLDUzLjkwNjYzIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjEzLjA0NjY4LC0xNTMuMDQ2NykiPjxnIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2lzUGFpbnRpbmdMYXllciZxdW90Ozp0cnVlfSIgc3Ryb2tlPSJub25lIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTIxMy4wNDY2OCwyMDYuOTUzMzR2LTUzLjkwNjYzaDUzLjkwNjYzdjUzLjkwNjYzeiIgZmlsbD0iIzAwYjJhNCIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2Utd2lkdGg9IjAiLz48cGF0aCBkPSJNMjQwLDE5MC43NDI1MmMzLjk3MTE1LDAgNy4xNjE2NywtMy4yMTkxNyA3LjE2MTY3LC03LjE2MTY3YzAsLTMuOTcxMTUgLTMuMTkwNTIsLTcuMTYxNjcgLTcuMTYxNjcsLTcuMTYxNjdjLTMuOTQyNSwwIC03LjE2MTY3LDMuMTkwNTIgLTcuMTYxNjcsNy4xNjE2N2MwLDMuOTQyNSAzLjIxOTE3LDcuMTYxNjcgNy4xNjE2Nyw3LjE2MTY3TTI1NC4zMjMzNCwxNzEuMDQ3OTNjMS45Njk0NiwwIDMuNTgwODMsMS42MTEzOCAzLjU4MDgzLDMuNTgwODR2MTcuOTA0MTdjMCwxLjk3MzA0IC0xLjYxMTM3LDMuNTgwODQgLTMuNTgwODMsMy41ODA4NGgtMjguNjQ2NjdjLTEuOTY5NDYsMCAtMy41ODA4NCwtMS42MDc4IC0zLjU4MDg0LC0zLjU4MDg0di0xNy45MDQxN2MwLC0xLjk2OTQ2IDEuNjExMzgsLTMuNTgwODQgMy41ODA4NCwtMy41ODA4NGgyLjU0MjM5YzAuNjQ0NTUsMCAxLjIxNzQ4LC0wLjM1ODA4IDEuNTM5NzUsLTAuOTMxMDJsMi40MzEzOSwtNC4zNjUwNGMwLjY0ODEzLC0xLjE0OTQ1IDEuODI5OCwtMS44NjU2MSAzLjE1NDcxLC0xLjg2NTYxaDkuMzQ1OThjMS4zMjQ5MSwwIDIuNTA2NTksMC43MTYxNiAzLjE0NzU2LDEuODY1NjFsMi4zOTkxNiw0LjM2NTA0YzAuMzI1ODUsMC41NzI5NCAwLjg5NTIxLDAuOTMxMDIgMS41NzkxNSwwLjkzMTAyaDIuNTA2NTgiIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvZz48L3N2Zz4=';
  
  class CameraSensingPlus {
    constructor() {
      this.camWidth = '640';
      this.camHeight = '480';
    }
  
    getInfo() {
      return {
        id: 'CameraSensingPlusSP',
        name: 'Camera Sensing+',
        color1: '#00b2a4',
        menuIconURI,
        blockIconURI,
        blocks: [
          {
            blockType: Scratch.BlockType.LABEL,
            text: 'Camera Feed',
          },
          {
            opcode: 'turnOnCamera',
            blockType: Scratch.BlockType.COMMAND,
            text: 'turn camera [ON_OFF]',
            arguments: {
              ON_OFF: {
                type: Scratch.ArgumentType.STRING,
                menu: 'onOffMenu',
                defaultValue: 'on'
              }
            }
          },
          {
            opcode: 'captureWebcamFootage',
            blockType: Scratch.BlockType.REPORTER,
            text: 'webcam frame data.URI',
            disableMonitor: true
          },
          {
            blockType: Scratch.BlockType.LABEL,
            text: '^ Use Skins/Import Image to display',
          },
          {
              blockType: Scratch.BlockType.LABEL,
            text: 'Camera Settings',
          },
          {
            opcode: 'setResolution',
            blockType: Scratch.BlockType.COMMAND,
            text: 'set camera resolution to width [WIDTH] and height [HEIGHT]',
            blockIconURI: cameraIconURI,
            arguments: {
              WIDTH: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '640'
              },
              HEIGHT: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '480'
              }
            }
          },
          {
            opcode: 'defaultRes',
            blockType: Scratch.BlockType.REPORTER,
            text: 'default camera [W_H]',
            blockIconURI: cameraIconURI,
            arguments: {
              W_H: {
                type: Scratch.ArgumentType.STRING,
                menu: 'widthHeight',
                defaultValue: 'width'
              }
            }
          },
          {
            opcode: 'currentRes',
            blockType: Scratch.BlockType.REPORTER,
            text: 'current camera [W_H]',
            blockIconURI: cameraIconURI,
            arguments: {
              W_H: {
                type: Scratch.ArgumentType.STRING,
                menu: 'widthHeight',
                defaultValue: 'width'
              }
            }
          }
        ],
        menus: {
          onOffMenu: ['on', 'off'],
          widthHeight: ['width', 'height']
        }
      };
    }

    async turnOnCamera(args) {
      const turnOn = args.ON_OFF === 'on';
      if (turnOn) {
        if (!this.mediaStream) {
          try {
            this.mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
            this.videoElement = document.createElement('video');
            this.videoElement.srcObject = this.mediaStream;
            this.videoElement.play();
          } catch (error) {
            console.error('Error accessing the camera:', error);
          }
        }
      } else {
        this.turnOffCamera();
      }
    }

    turnOffCamera() {
      if (this.mediaStream) {
        this.mediaStream.getTracks().forEach(track => track.stop());
        this.videoElement.remove();
        this.videoElement = null;
        this.mediaStream = null;
      }
    }
  
    setResolution(args) {
      this.camWidth = args.WIDTH;
      this.camHeight = args.HEIGHT;
    }
  
    defaultRes(args) {
      if (!this.videoElement || !this.mediaStream) {
        return 'camera is not on';
      }
      if (args.W_H === 'width') {
        return this.videoElement.videoWidth;
      } else {
        return this.videoElement.videoHeight;
      }
    }
  
    currentRes(args) {
      if (args.W_H === 'width') {
        return this.camWidth;
      } else {
        return this.camHeight;
      }
    }

    captureWebcamFootage() {
      if (this.videoElement) {
        const canvasElement = document.createElement('canvas');
        canvasElement.width = this.camWidth;
        canvasElement.height = this.camHeight;
        const context = canvasElement.getContext('2d');
        context.drawImage(this.videoElement, 0, 0, canvasElement.width, canvasElement.height);
        const dataURI = canvasElement.toDataURL('image/png');
        return dataURI;
      } else {
        console.error('Camera is not turned on.');
        return '';
      }
    }
  }

  Scratch.extensions.register(new CameraSensingPlus());
})(Scratch);
