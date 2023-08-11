/*
* This extension was made by SharkPool
* Credit to Griffpatch and the Scratch Team for the Scratch Cat Icon
* Inspired by the S-Grab Extension by NexusKitten
* Do not remove this comment
*/

(function(Scratch) {
  'use strict';

  if (!Scratch.extensions.unsandboxed) {
    throw new Error('Scratch Utilities must run unsandboxed');
  }

  const menuIconURI = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI5OS44NjU0OSIgaGVpZ2h0PSI5OS44NjU0OSIgdmlld0JveD0iMCwwLDk5Ljg2NTQ5LDk5Ljg2NTQ5Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTkwLjA2NzI1LC0xMzAuMDY3MjUpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTE5MC4wNjcyNiwxODBjMCwtMjcuNTc3MDkgMjIuMzU1NjYsLTQ5LjkzMjc1IDQ5LjkzMjc1LC00OS45MzI3NWMyNy41NzcwOSwwIDQ5LjkzMjc1LDIyLjM1NTY2IDQ5LjkzMjc1LDQ5LjkzMjc1YzAsMjcuNTc3MDkgLTIyLjM1NTY2LDQ5LjkzMjc1IC00OS45MzI3NSw0OS45MzI3NWMtMjcuNTc3MDksMCAtNDkuOTMyNzUsLTIyLjM1NTY2IC00OS45MzI3NSwtNDkuOTMyNzV6IiBmaWxsPSIjZmFhNTFmIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiLz48cGF0aCBkPSJNMjQzLjg0OTUsMTU4LjUxNjgybDcuMiwtN2wyLjgsMTEuMmMwLDAgNi4yLDQuNjAxIDguMSw3LjhjMy4xLDUuMzAxIDMuMTk5LDkuNiAzLjE5OSw5LjZjMCwwIDYuOTAxLDIuMSA4LjEwMSw3LjZjMS4yLDUuNSAtMy4xLDE2IC0yMS4yOTksMTkuNmMtMTguMiwzLjYgLTMyLjgwMSwtMS4zIC0zOS43LC0xMi40Yy02LjgsLTExIDQsLTI0LjIgMy4zOTksLTIzLjRsLTIuMiwtMTguM2wxMi42LDguMmMwLDAgNC4yOTksLTEuNyA4LjksLTEuOWMxLjY5OSwtMC4xIDQuOCwwLjEgNi4zLDAuMnoiIGZpbGw9IiNmYWE1MWYiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIvPjxwYXRoIGQ9Ik0yNjQuNzQ5NSwxODAuNjE3ODJjMCwwIDYuNiwxLjYgNy44LDcuMWMxLjUsNS41IC0zLjQwMSwxNS45IC0yMC42LDE5Yy0zLjksMC43IC03LjQsMS40IC0xMi45LDEuNGMtOC41LDAuMDk5IC0xNy44LC01LjIgLTE3LjEsLTE2LjNjMC4zOTksLTYuNCA4LjUsLTUuOSA4LjUsLTUuOWw3LjEsLTEuOGMwLDAgNy4xLDEuNTk5IDExLjMsMC43YzQuMiwtMC45IDQuMiwtNC4yIDQuMiwtNC4ybDguOCwtMi42MDFsMi40LDJ6IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiLz48cGF0aCBkPSJNMjgwLjI0OTUsMTgxLjQxNzgyYzAsMCAtMS43OTksMS42IC00LjQsMi41Yy0yLjIwMSwwLjggLTYuNiwxLjUgLTYuNiwxLjUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzhlNTMyMiIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik0yNzkuNjQ4NSwxOTIuNjE3ODJjMCwwIC0xLjgsMC4yIC00LjUsLTAuMTAxYy0yLjc5OSwtMC4xOTkgLTUuMzk5LC0xLjMgLTUuMzk5LC0xLjMiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzhlNTMyMiIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik0yMjguOTQ5NSwxNjMuNTE3ODJsLTUuMiwtMy42IiBmaWxsPSJub25lIiBzdHJva2U9IiM4ZTUzMjIiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBkPSJNMjQzLjg0OTUsMTU4LjUxNjgybDcuMiwtN2wyLjgsMTEuMmMwLDAgNi4yLDQuNjAxIDguMSw3LjhjMy4xLDUuMzAxIDMuMTk5LDkuNiAzLjE5OSw5LjZjMCwwIDYuOTAxLDIuMSA4LjEwMSw3LjZjMS4yLDUuNSAtMy4xLDE2IC0yMS4yOTksMTkuNmMtMTguMiwzLjYgLTMyLjgwMSwtMS4zIC0zOS43LC0xMi40Yy02LjgsLTExIDQsLTI0LjIgMy4zOTksLTIzLjRsLTIuMiwtMTguM2wxMi42LDguMmMwLDAgNC4yOTksLTEuNyA4LjksLTEuOWMxLjY5OSwtMC4xIDQuOCwwLjEgNi4zLDAuMnoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzhlNTMyMiIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik0yMTEuNjQ5NSwxOTAuNDE2ODJjMCwwIC0zLjUsMC41IC01LjMsMC42Yy0xLjgsMC4xIC01LjgsLTAuMyAtNS44LC0wLjMiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzhlNTMyMiIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik0xOTkuNzUwNSwxODEuMTE3ODJjMCwwIDIuMiwwLjM5OSA2LjIsMi4yYzMuNTk5LDEuNiA1Ljg5OSwzLjMgNS44OTksMy4zIiBmaWxsPSJub25lIiBzdHJva2U9IiM4ZTUzMjIiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBkPSJNMjU5Ljc0OTUsMTcwLjYxNzgyYzIuOCw0LjMgMi44OTksOS4zIDAuMiwxMWMtMi43LDEuOCAtNy4yLC0wLjMgLTEwLC00LjdjLTIuODAxLC00LjMgLTIuOSwtOS4zIC0wLjIsLTExYzIuNywtMS43IDcuMiwwLjQgMTAsNC43eiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjOGU1MzIyIiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTI1OS42NDk1LDE3NC4yMTY4MmMwLjMwMSwxIC0wLjE5OSwyIC0xLjE5OSwyLjNjLTAuOSwwLjMwMSAtMS45LC0wLjMgLTIuMiwtMS4zOTljLTAuMywtMSAwLjIsLTIgMS4yLC0yLjNjMC45OTksLTAuMiAxLjg5OSwwLjM5OSAyLjE5OSwxLjM5OSIgZmlsbD0iIzQxNDE0MiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIi8+PHBhdGggZD0iTTIzNi41NDk1LDE3My43MTY4MmMyLjgsNC4zIDIuNSw5LjUgLTAuNywxMS42MDFjLTMuMiwyLjEgLTguMSwwLjMgLTEwLjg5OSwtNC4xMDFjLTIuODAxLC00LjMgLTIuNSwtOS41IDAuNjk5LC0xMS42YzMuMiwtMS45OTkgOC4xLC0wLjE5OSAxMC45LDQuMXoiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzhlNTMyMiIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik0yMzYuMjQ5NSwxNzcuNjE3ODJjMCwxIC0wLjgsMS44OTkgLTEuNywxLjg5OWMtMSwwIC0xLjcsLTAuOCAtMS43LC0xLjg5OWMwLC0xIDAuOCwtMS45IDEuNywtMS45YzAuOSwwIDEuNywwLjc5OSAxLjcsMS45IiBmaWxsPSIjNDE0MTQyIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiLz48cGF0aCBkPSJNMjQ3LjU0OTUsMTgzLjYxNzgyYzEuNywtMC4yIDQsLTEuNSA0LjMsMC4zOTljMCwwLjgwMSAtMS42LDQuMTAxIC0zLjM5OSw0LjJjLTIsMC4xMDEgLTUuNSwtMi4zOTkgLTUuNCwtMy44OTljMC4xLC0xLjUgMi45OTksLTAuNSA0LjQ5OSwtMC43eiIgZmlsbD0iIzVmNGI0MyIgc3Ryb2tlPSIjOGU1MzIyIiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTI0Ni4zNDg1LDIwMC4yMTY4MmMtNS4zOTksMS4xMDEgLTcuODk5LC0xLjIgLTcuODk5LC0xLjIiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzhlNTMyMiIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvZz48L2c+PC9zdmc+';

  class SPscratchUtilities {
    getInfo() {
      return {
        id: 'SPscratchUtilities',
        name: 'Scratch Utilities',
        menuIconURI,
        color1: '#faa51f',
        color3: '#8e5322',
        blocks: [
          {
            blockType: Scratch.BlockType.LABEL,
            text: 'Images',
          },
          {
            opcode: 'profilePictureGrab',
            blockType: Scratch.BlockType.REPORTER,
            text: '[MENU] profile picture URL of user [WHO]',
            arguments: {
              MENU: {
                type: Scratch.ArgumentType.STRING,
                menu: 'MENU',
              },
              WHO: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'DemonX5',
              },
            },
          },
          {
            blockType: Scratch.BlockType.LABEL,
            text: 'Users',
          },
          {
            opcode: 'isFollowing',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'is user [FOLLOWER] is following [FOLLOWED]?',
            arguments: {
              FOLLOWER: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'DemonX5',
              },
              FOLLOWED: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'griffpatch',
              },
            },
          },
          {
            opcode: 'getFollowingUsers',
            blockType: Scratch.BlockType.REPORTER,
            text: 'users that [USERNAME] is following',
            arguments: {
              USERNAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'DemonX5',
              },
            },
          },
          {
            opcode: 'getFollowers',
            blockType: Scratch.BlockType.REPORTER,
            text: 'users following [USERNAME]',
            arguments: {
              USERNAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'DemonX5',
              },
            },
          },
          {
            blockType: Scratch.BlockType.LABEL,
            text: 'Projects',
          },
          {
            opcode: 'recentlySharedProject',
            blockType: Scratch.BlockType.REPORTER,
            text: 'most recent shared project from user [USERNAME]',
            arguments: {
              USERNAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'DemonX5',
              },
            },
          },
          {
            opcode: 'getAllProjects',
            blockType: Scratch.BlockType.REPORTER,
            text: 'titles of projects made by user [USERNAME]',
            arguments: {
              USERNAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'DemonX5',
              },
            },
          },
          {
            opcode: 'getProjectID',
            blockType: Scratch.BlockType.REPORTER,
            text: 'get ID of project titled [TITLE] that is made by [USERNAME]',
            arguments: {
              USERNAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'DemonX5',
              },
              TITLE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Flappy Bird +',
              },
            },
          },
          {
            blockType: Scratch.BlockType.LABEL,
            text: 'Warning! Fetching Blocks are limited',
          },
          {
            blockType: Scratch.BlockType.LABEL,
            text: 'to the FIRST 20 Users/Projects',
          },
        ],
        menus: {
          MENU: {
            acceptReporters: true,
            items: ['original', 'importable'],
          },
        },
      };
    }

    async profilePictureGrab(args) {
      try {
        if (args.MENU == 'original') {
          const corsProxy = 'https://corsproxy.io/?';
          const url = corsProxy + 'https://api.scratch.mit.edu/users/' + args.WHO;
          const response = await fetch(url);
          const jsonData = await response.json();
          let fixedJSON = jsonData.profile.images['90x90'];
          fixedJSON = fixedJSON.replace('cdn2', 'uploads');
          return fixedJSON;
        } else if (args.MENU == 'importable') {
          const corsProxy = 'https://corsproxy.io/?';
          const url = corsProxy + 'https://api.scratch.mit.edu/users/' + args.WHO;
          const response = await fetch(url);
          const jsonData = await response.json();
          let fixedJSON = jsonData.profile.images['90x90'];
          fixedJSON = 'https://corsproxy.io/?' + fixedJSON.replace('cdn2', 'uploads');
          return fixedJSON;
        }
      } catch (error) {
        return '';
      }
    }

    async isFollowing(args) {
      try {
        const corsProxy = 'https://corsproxy.io/?';
        const followerUrl = corsProxy + 'https://api.scratch.mit.edu/users/' + args.FOLLOWER + '/following';
        const response = await fetch(followerUrl);
        const followingData = await response.json();
        const followedUser = args.FOLLOWED.toLowerCase();

        return followingData.some((user) => user.username.toLowerCase() === followedUser);
      } catch (error) {
        return false;
      }
    }

    async getFollowingUsers(args) {
      try {
        const corsProxy = 'https://corsproxy.io/?';
        const followingUrl = corsProxy + 'https://api.scratch.mit.edu/users/' + args.USERNAME + '/following';
        const response = await fetch(followingUrl);
        const followingData = await response.json();

        const followingUsers = followingData.slice(0, 20).map((user) => user.username);
        return followingUsers;
      } catch (error) {
        return [];
      }
    }

    async getFollowers(args) {
      try {
        const corsProxy = 'https://corsproxy.io/?';
        const followersUrl = corsProxy + 'https://api.scratch.mit.edu/users/' + args.USERNAME + '/followers';
        const response = await fetch(followersUrl);
        const followersData = await response.json();

        const followers = followersData.slice(0, 20).map((user) => user.username);
        return followers;
      } catch (error) {
        return [];
      }
    }

    async recentlySharedProject(args) {
      try {
        const corsProxy = 'https://corsproxy.io/?';
        const projectUrl = corsProxy + 'https://api.scratch.mit.edu/users/' + args.USERNAME + '/projects';
        const response = await fetch(projectUrl);
        const projectsData = await response.json();

        if (projectsData.length === 0) {
          return '';
        }

        const mostRecentProject = projectsData[0];
        return mostRecentProject.title;
      } catch (error) {
        return '';
      }
    }

    async getAllProjects(args) {
      try {
        const corsProxy = 'https://corsproxy.io/?';
        const projectUrl = corsProxy + 'https://api.scratch.mit.edu/users/' + args.USERNAME + '/projects';
        const response = await fetch(projectUrl);
        const projectsData = await response.json();

        const projectTitles = projectsData.map((project) => project.title);
        return projectTitles;
      } catch (error) {
        return [];
      }
    }

    async getProjectID(args) {
      try {
        const corsProxy = 'https://corsproxy.io/?';
        const projectUrl = corsProxy + 'https://api.scratch.mit.edu/users/' + args.USERNAME + '/projects';
        const response = await fetch(projectUrl);
        const projectsData = await response.json();

        const project = projectsData.find((project) => project.title === args.TITLE);
        if (project) {
          return project.id;
        } else {
          return '';
        }
      } catch (error) {
        return '';
      }
    }
  }

  Scratch.extensions.register(new SPscratchUtilities());
})(Scratch);
