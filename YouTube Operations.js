/*
* v1.3| Created by SharkPool and help from Nekl300.
* https://www.youtube.com/c/SharkPoolthe1
* Do not remove this comment
*/
(function (Scratch) {
    'use strict';
  
    if (!Scratch.extensions.unsandboxed) {
      throw new Error('This Extension must run unsandboxed');
    }
  
    const menuIconURI = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxNDUuMzU3NjQiIGhlaWdodD0iMTQ1LjM1NzY0IiB2aWV3Qm94PSIwLDAsMTQ1LjM1NzY0LDE0NS4zNTc2NCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE2Ny4zMjExOCwtMTA3LjMyMTE4KSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0xNjcuMzIxMTgsMTgwYzAsLTQwLjEzOTQgMzIuNTM5NDIsLTcyLjY3ODgyIDcyLjY3ODgyLC03Mi42Nzg4MmM0MC4xMzk0LDAgNzIuNjc4ODIsMzIuNTM5NDIgNzIuNjc4ODIsNzIuNjc4ODJjMCw0MC4xMzk0IC0zMi41Mzk0Miw3Mi42Nzg4MiAtNzIuNjc4ODIsNzIuNjc4ODJjLTQwLjEzOTQsMCAtNzIuNjc4ODIsLTMyLjUzOTQyIC03Mi42Nzg4MiwtNzIuNjc4ODJ6IiBmaWxsPSIjZmYwMDAwIiBzdHJva2U9IiMwMDAwMDAiLz48cGF0aCBkPSJNMjY2LjczNTExLDE4My45NjIxN2MtMTAuNTg2MzgsNS44NTkwNiAtMzAuMDk5NDcsMTYuNjU4NjIgLTM2LjI4NjY5LDIwLjA4Mjk1Yy0zLjY5NDk2LDIuMDQ0OTkgLTcuOTEyMTYsMS4wMzg2NiAtNy45MTIxNiwtMy45MTI3OGMwLC0xMS43NTY5MiAwLC0zMi41OTcxNSAwLC0zOS4zNzEwMWMwLC00LjE4NDE2IDMuNTIzNywtNy4wNTM5NiA2Ljc2OTcsLTUuMjU3NDVjNi4wMDQyNSwzLjMyMzA3IDI2LjUwMDE1LDE0LjY2NjU3IDM3LjQyODg5LDIwLjcxNTExYzQuMjA2MzgsMi4zMjgwMyA0LjIwMDQ2LDUuNDE4NTYgMC4wMDAyNSw3Ljc0MzE4eiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSJub25lIi8+PC9nPjwvZz48L3N2Zz4=";
    const icon2 = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxNjguOTYyNzMiIGhlaWdodD0iMTY4Ljk2MjczIiB2aWV3Qm94PSIwLDAsMTY4Ljk2MjczLDE2OC45NjI3MyI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE1NS41MTg2NCwtOTUuNTE4NjQpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTE1NS41MTg2NCwxODBjMCwtNDYuNjU3NzYgMzcuODIzNiwtODQuNDgxMzYgODQuNDgxMzYsLTg0LjQ4MTM2YzQ2LjY1Nzc2LDAgODQuNDgxMzYsMzcuODIzNiA4NC40ODEzNiw4NC40ODEzNmMwLDQ2LjY1Nzc2IC0zNy44MjM2LDg0LjQ4MTM2IC04NC40ODEzNiw4NC40ODEzNmMtNDYuNjU3NzYsMCAtODQuNDgxMzYsLTM3LjgyMzYgLTg0LjQ4MTM2LC04NC40ODEzNnoiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzAwMDAwMCIvPjxwYXRoIGQ9Ik0xNjcuMzIxMTgsMTgwYzAsLTQwLjEzOTQgMzIuNTM5NDIsLTcyLjY3ODgyIDcyLjY3ODgyLC03Mi42Nzg4MmM0MC4xMzk0LDAgNzIuNjc4ODIsMzIuNTM5NDIgNzIuNjc4ODIsNzIuNjc4ODJjMCw0MC4xMzk0IC0zMi41Mzk0Miw3Mi42Nzg4MiAtNzIuNjc4ODIsNzIuNjc4ODJjLTQwLjEzOTQsMCAtNzIuNjc4ODIsLTMyLjUzOTQyIC03Mi42Nzg4MiwtNzIuNjc4ODJ6IiBmaWxsPSIjZmYwMDAwIiBzdHJva2U9IiMwMDAwMDAiLz48cGF0aCBkPSJNMjcxLjkzNjIzLDE4NC45NjYyOGMtMTMuMjY5MjQsNy4zNDM5IC0zNy43Mjc0NCwyMC44ODAzNCAtNDUuNDgyNjYsMjUuMTcyNDhjLTQuNjMxMzYsMi41NjMyNCAtOS45MTczLDEuMzAxODggLTkuOTE3MywtNC45MDQzOGMwLC0xNC43MzY0MiAwLC00MC44NTgxIDAsLTQ5LjM0ODYzYzAsLTUuMjQ0NTMgNC40MTY3LC04Ljg0MTYxIDguNDg1MzEsLTYuNTg5ODJjNy41MjU4OCw0LjE2NTIyIDMzLjIxNTk2LDE4LjM4MzQ1IDQ2LjkxNDMzLDI1Ljk2NDg1YzUuMjcyMzgsMi45MTgwMSA1LjI2NDk2LDYuNzkxNzYgMC4wMDAzMSw5LjcwNTV6IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9Im5vbmUiLz48L2c+PC9nPjwvc3ZnPg==";
  
    class YoutubeOperations {
      constructor() {
        this.youtubeWindows = {};
      }
  
      getInfo() {
        return {
          id: 'youtubeoperations',
          name: 'Youtube Operations',
          menuIconURI,
          blockIconURI: icon2,
          color1: '#FF0000',
          color2: '#FF0000',
          blocks: [
            {
              opcode: 'fetchStats',
              blockType: Scratch.BlockType.REPORTER,
              text: 'fetch [STAT] count of video [VIDEO_ID]',
              arguments: {
                STAT: {
                  type: Scratch.ArgumentType.STRING,
                  menu: 'STAT_OPTIONS',
                  defaultValue: 'like'
                },
                VIDEO_ID: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'dQw4w9WgXcQ'
                }
              }
            },
            {
                opcode: 'fetchtitle', //made by Nekl300
                blockType: Scratch.BlockType.REPORTER,
                text: 'grab [STAT] of [VIDEO_ID] video',
                arguments: {
                STAT: {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'STAT_OPTION',
                    defaultValue: 'author'
                  },
                  VIDEO_ID: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: 'dQw4w9WgXcQ'
                  }
                }
              },
            {
              opcode: 'extractVideoID',
              blockType: Scratch.BlockType.REPORTER,
              text: 'extract video ID from [URL]',
              arguments: {
                URL: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUJcmljayByb2xs'
                }
              }
            },
            {
              opcode: 'openYouTubeLinkInNewWindow',
              blockType: Scratch.BlockType.COMMAND,
              text: 'open YouTube video window with ID: [ID] with width: [WIDTH] height: [HEIGHT] x: [LEFT] y: [TOP] and play from start',
              arguments: {
                ID: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'dQw4w9WgXcQ'
                },
                WIDTH: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: 800
                },
                HEIGHT: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: 600
                },
                LEFT: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: 0
                },
                TOP: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: 0
                }
              }
            },
            {
              opcode: 'openYouTubeLinkInNewWindowAtTime',
              blockType: Scratch.BlockType.COMMAND,
              text: 'open YouTube video window with ID: [ID] with width: [WIDTH] height: [HEIGHT] x: [LEFT] y: [TOP] and play video at [MINUTES]:[SECONDS]',
              arguments: {
                ID: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'dQw4w9WgXcQ'
                },
                WIDTH: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: 800
                },
                HEIGHT: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: 600
                },
                LEFT: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: 0
                },
                TOP: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: 0
                },
                MINUTES: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: 0
                },
                SECONDS: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: 0
                }
              }
            },
            {
              opcode: 'closeYouTubeWindow',
              blockType: Scratch.BlockType.COMMAND,
              text: 'close YouTube window with video ID: [VIDEO_ID]',
              arguments: {
                VIDEO_ID: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'dQw4w9WgXcQ'
                }
              }
            },
          ],
          menus: {
            STAT_OPTIONS: ['like', 'dislike', 'view count', 'rating', 'date created'],
            STAT_OPTION: ['author', 'title', 'thumbnail']
          },
        };
      }
  
      async fetchStats(args) {
        try {
          const videoId = args.VIDEO_ID;
          const stat = args.STAT.toLowerCase().replace(' ', '');
  
          const response = await Scratch.fetch(`https://returnyoutubedislikeapi.com/votes?videoId=${videoId}`);
  
          if (response.ok) {
            const jsonData = await response.json();
  
            if (stat === 'like') {
              return jsonData.likes;
            } else if (stat === 'dislike') {
              return jsonData.dislikes;
            } else if (stat === 'viewcount' || stat === 'view count') {
              return jsonData.viewCount;
            } else if (stat === 'rating') {
              return jsonData.rating;
            } else if (stat === 'datecreated') {
              return jsonData.dateCreated;
            } else {
              return '';
            }
          } else {
            return '';
          }
        } catch (error) {
          return '';
        }
      }
  
      extractVideoID(args) {
        const url = args.URL;
        const urlObj = new URL(url);
        const videoId = urlObj.searchParams.get('v');
        return videoId || '';
      }
  
      async fetchDateCreated(videoId) {
        try {
          const response = await Scratch.fetch(`https://returnyoutubedislikeapi.com/video/${videoId}`);
          if (response.ok) {
            const jsonData = await response.json();
            return jsonData.dateCreated;
          }
          return '';
        } catch (error) {
          return '';
        }
      }
  
      openYouTubeLinkInNewWindow(args) {
        const videoId = args.ID;
        const url = `https://www.yout-ube.com/watch?v=${videoId}`;
        let params = 'fullscreen=yes';
        params += isNaN(args.WIDTH) ? '' : `,width=${Math.max(100, Math.min(args.WIDTH, window.screen.width))}`;
        params += isNaN(args.HEIGHT) ? '' : `,height=${Math.max(100, Math.min(args.HEIGHT, window.screen.height))}`;
        params += isNaN(args.LEFT) ? '' : `,left=${Math.max(0, Math.min(args.LEFT, window.screen.width))}`;
        params += isNaN(args.TOP) ? '' : `,top=${Math.max(0, Math.min(args.TOP, window.screen.height))}`;
        const newWindow = window.open(url, '_blank', params);
        this.youtubeWindows[videoId] = newWindow;
        this.playVideoAutomatically(newWindow);
      }
  
      openYouTubeLinkInNewWindowAtTime(args) {
        const videoId = args.ID;
        const minutes = args.MINUTES;
        const seconds = args.SECONDS;
        const startTime = minutes * 60 + seconds;
        const url = `https://www.yout-ube.com/watch?v=${videoId}&t=${startTime}`;
        let params = 'fullscreen=yes';
        params += isNaN(args.WIDTH) ? '' : `,width=${Math.max(100, Math.min(args.WIDTH, window.screen.width))}`;
        params += isNaN(args.HEIGHT) ? '' : `,height=${Math.max(100, Math.min(args.HEIGHT, window.screen.height))}`;
        params += isNaN(args.LEFT) ? '' : `,left=${Math.max(0, Math.min(args.LEFT, window.screen.width))}`;
        params += isNaN(args.TOP) ? '' : `,top=${Math.max(0, Math.min(args.TOP, window.screen.height))}`;
        const newWindow = window.open(url, '_blank', params);
        this.youtubeWindows[videoId] = newWindow;
        this.playVideoAutomatically(newWindow);
      }
  
      closeYouTubeWindow(args) {
        const videoId = args.VIDEO_ID;
        const windowToClose = this.youtubeWindows[videoId];
        if (windowToClose) {
          windowToClose.close();
          delete this.youtubeWindows[videoId];
        }
      }

      async fetchtitle(args) {
        const stat = args.STAT.toLowerCase().replace(' ', '');
        try {
            const videoId = args.VIDEO_ID;
            const response = await Scratch.fetch("https://www.youtube.com/oembed?url=http%3A//youtube.com/watch%3Fv%3D"+videoId+"&format=json");

            if (response.ok) {
                const jsonData = await response.json()
                if (stat == 'author') {
                    return jsonData.author_url.slice(24);
                } else if (stat == 'title') {
                    return jsonData.title; 
                } else if (stat == 'thumbnail') {
                    return jsonData.thumbnail_url;
                }
            }
            return ''
        }
        catch(error) {
            return ''
        }
      }
  
      playVideoAutomatically(newWindow) {
        setTimeout(() => {
          if (newWindow) {
            newWindow.document.getElementsByTagName('video')[0].play();
          }
        }, 1000);
      }
    }
  
    Scratch.extensions.register(new YoutubeOperations());
  })(Scratch);
