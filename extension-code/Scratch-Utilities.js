// Name: Scratch Utilities
// ID: SPscratchUtilities
// Description: Fetch data from Scratch!
// By: SharkPool <https://github.com/SharkPool-SP>

// Version 2.0.0

(function (Scratch) {
  "use strict";

  if (!Scratch.extensions.unsandboxed) {
    throw new Error("Scratch Utilities must run unsandboxed");
  }

  const menuIconURI = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI5OS44NjU0OSIgaGVpZ2h0PSI5OS44NjU0OSIgdmlld0JveD0iMCwwLDk5Ljg2NTQ5LDk5Ljg2NTQ5Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTkwLjA2NzI1LC0xMzAuMDY3MjUpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTE5MC4wNjcyNiwxODBjMCwtMjcuNTc3MDkgMjIuMzU1NjYsLTQ5LjkzMjc1IDQ5LjkzMjc1LC00OS45MzI3NWMyNy41NzcwOSwwIDQ5LjkzMjc1LDIyLjM1NTY2IDQ5LjkzMjc1LDQ5LjkzMjc1YzAsMjcuNTc3MDkgLTIyLjM1NTY2LDQ5LjkzMjc1IC00OS45MzI3NSw0OS45MzI3NWMtMjcuNTc3MDksMCAtNDkuOTMyNzUsLTIyLjM1NTY2IC00OS45MzI3NSwtNDkuOTMyNzV6IiBmaWxsPSIjZmFhNTFmIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiLz48cGF0aCBkPSJNMjQzLjg0OTUsMTU4LjUxNjgybDcuMiwtN2wyLjgsMTEuMmMwLDAgNi4yLDQuNjAxIDguMSw3LjhjMy4xLDUuMzAxIDMuMTk5LDkuNiAzLjE5OSw5LjZjMCwwIDYuOTAxLDIuMSA4LjEwMSw3LjZjMS4yLDUuNSAtMy4xLDE2IC0yMS4yOTksMTkuNmMtMTguMiwzLjYgLTMyLjgwMSwtMS4zIC0zOS43LC0xMi40Yy02LjgsLTExIDQsLTI0LjIgMy4zOTksLTIzLjRsLTIuMiwtMTguM2wxMi42LDguMmMwLDAgNC4yOTksLTEuNyA4LjksLTEuOWMxLjY5OSwtMC4xIDQuOCwwLjEgNi4zLDAuMnoiIGZpbGw9IiNmYWE1MWYiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIvPjxwYXRoIGQ9Ik0yNjQuNzQ5NSwxODAuNjE3ODJjMCwwIDYuNiwxLjYgNy44LDcuMWMxLjUsNS41IC0zLjQwMSwxNS45IC0yMC42LDE5Yy0zLjksMC43IC03LjQsMS40IC0xMi45LDEuNGMtOC41LDAuMDk5IC0xNy44LC01LjIgLTE3LjEsLTE2LjNjMC4zOTksLTYuNCA4LjUsLTUuOSA4LjUsLTUuOWw3LjEsLTEuOGMwLDAgNy4xLDEuNTk5IDExLjMsMC43YzQuMiwtMC45IDQuMiwtNC4yIDQuMiwtNC4ybDguOCwtMi42MDFsMi40LDJ6IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiLz48cGF0aCBkPSJNMjgwLjI0OTUsMTgxLjQxNzgyYzAsMCAtMS43OTksMS42IC00LjQsMi41Yy0yLjIwMSwwLjggLTYuNiwxLjUgLTYuNiwxLjUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzhlNTMyMiIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik0yNzkuNjQ4NSwxOTIuNjE3ODJjMCwwIC0xLjgsMC4yIC00LjUsLTAuMTAxYy0yLjc5OSwtMC4xOTkgLTUuMzk5LC0xLjMgLTUuMzk5LC0xLjMiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzhlNTMyMiIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik0yMjguOTQ5NSwxNjMuNTE3ODJsLTUuMiwtMy42IiBmaWxsPSJub25lIiBzdHJva2U9IiM4ZTUzMjIiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBkPSJNMjQzLjg0OTUsMTU4LjUxNjgybDcuMiwtN2wyLjgsMTEuMmMwLDAgNi4yLDQuNjAxIDguMSw3LjhjMy4xLDUuMzAxIDMuMTk5LDkuNiAzLjE5OSw5LjZjMCwwIDYuOTAxLDIuMSA4LjEwMSw3LjZjMS4yLDUuNSAtMy4xLDE2IC0yMS4yOTksMTkuNmMtMTguMiwzLjYgLTMyLjgwMSwtMS4zIC0zOS43LC0xMi40Yy02LjgsLTExIDQsLTI0LjIgMy4zOTksLTIzLjRsLTIuMiwtMTguM2wxMi42LDguMmMwLDAgNC4yOTksLTEuNyA4LjksLTEuOWMxLjY5OSwtMC4xIDQuOCwwLjEgNi4zLDAuMnoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzhlNTMyMiIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik0yMTEuNjQ5NSwxOTAuNDE2ODJjMCwwIC0zLjUsMC41IC01LjMsMC42Yy0xLjgsMC4xIC01LjgsLTAuMyAtNS44LC0wLjMiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzhlNTMyMiIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik0xOTkuNzUwNSwxODEuMTE3ODJjMCwwIDIuMiwwLjM5OSA2LjIsMi4yYzMuNTk5LDEuNiA1Ljg5OSwzLjMgNS44OTksMy4zIiBmaWxsPSJub25lIiBzdHJva2U9IiM4ZTUzMjIiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBkPSJNMjU5Ljc0OTUsMTcwLjYxNzgyYzIuOCw0LjMgMi44OTksOS4zIDAuMiwxMWMtMi43LDEuOCAtNy4yLC0wLjMgLTEwLC00LjdjLTIuODAxLC00LjMgLTIuOSwtOS4zIC0wLjIsLTExYzIuNywtMS43IDcuMiwwLjQgMTAsNC43eiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjOGU1MzIyIiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTI1OS42NDk1LDE3NC4yMTY4MmMwLjMwMSwxIC0wLjE5OSwyIC0xLjE5OSwyLjNjLTAuOSwwLjMwMSAtMS45LC0wLjMgLTIuMiwtMS4zOTljLTAuMywtMSAwLjIsLTIgMS4yLC0yLjNjMC45OTksLTAuMiAxLjg5OSwwLjM5OSAyLjE5OSwxLjM5OSIgZmlsbD0iIzQxNDE0MiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIi8+PHBhdGggZD0iTTIzNi41NDk1LDE3My43MTY4MmMyLjgsNC4zIDIuNSw5LjUgLTAuNywxMS42MDFjLTMuMiwyLjEgLTguMSwwLjMgLTEwLjg5OSwtNC4xMDFjLTIuODAxLC00LjMgLTIuNSwtOS41IDAuNjk5LC0xMS42YzMuMiwtMS45OTkgOC4xLC0wLjE5OSAxMC45LDQuMXoiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzhlNTMyMiIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik0yMzYuMjQ5NSwxNzcuNjE3ODJjMCwxIC0wLjgsMS44OTkgLTEuNywxLjg5OWMtMSwwIC0xLjcsLTAuOCAtMS43LC0xLjg5OWMwLC0xIDAuOCwtMS45IDEuNywtMS45YzAuOSwwIDEuNywwLjc5OSAxLjcsMS45IiBmaWxsPSIjNDE0MTQyIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiLz48cGF0aCBkPSJNMjQ3LjU0OTUsMTgzLjYxNzgyYzEuNywtMC4yIDQsLTEuNSA0LjMsMC4zOTljMCwwLjgwMSAtMS42LDQuMTAxIC0zLjM5OSw0LjJjLTIsMC4xMDEgLTUuNSwtMi4zOTkgLTUuNCwtMy44OTljMC4xLC0xLjUgMi45OTksLTAuNSA0LjQ5OSwtMC43eiIgZmlsbD0iIzVmNGI0MyIgc3Ryb2tlPSIjOGU1MzIyIiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTI0Ni4zNDg1LDIwMC4yMTY4MmMtNS4zOTksMS4xMDEgLTcuODk5LC0xLjIgLTcuODk5LC0xLjIiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzhlNTMyMiIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvZz48L2c+PC9zdmc+";

  class SPscratchUtilities {
    getInfo() {
      return {
        id: "SPscratchUtilities",
        name: "Scratch Utilities",
        menuIconURI,
        color1: "#faa51f",
        color2: "#cf8919",
        color3: "#8e5322",
        blocks: [
          {
            blockType: Scratch.BlockType.LABEL,
            text: "Images",
          },
          {
            opcode: "profilePictureGrab",
            blockType: Scratch.BlockType.REPORTER,
            text: "[MENU] profile picture of user [WHO]",
            arguments: {
              MENU: {
                type: Scratch.ArgumentType.STRING,
                menu: "MENU",
                defaultValue: "original",
              },
              WHO: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "DemonX5",
              },
            },
          },
          {
            opcode: "projectThumbGrab",
            blockType: Scratch.BlockType.REPORTER,
            text: "[MENU] thumbnail of project ID [ID]",
            arguments: {
              MENU: {
                type: Scratch.ArgumentType.STRING,
                menu: "MENU",
                defaultValue: "original",
              },
              ID: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 820242622,
              },
            },
          },
          {
            blockType: Scratch.BlockType.LABEL,
            text: "Users",
          },
          {
            opcode: "msgCnt",
            blockType: Scratch.BlockType.REPORTER,
            text: "get message count of user [USERNAME]",
            arguments: {
              USERNAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "griffpatch",
              },
            },
          },
          "---",
          {
            opcode: "isFollowing",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "is user [FOLLOWER] following [USERNAME] on page [PAGE]?",
            arguments: {
              FOLLOWER: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "DemonX5",
              },
              USERNAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "griffpatch",
              },
              PAGE: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 1,
              },
            },
          },
          {
            opcode: "getFollowingUsers",
            blockType: Scratch.BlockType.REPORTER,
            text: "users that [USERNAME] is following on page [PAGE]",
            arguments: {
              USERNAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "DemonX5",
              },
              PAGE: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 1,
              },
            },
          },
          {
            opcode: "getFollowers",
            blockType: Scratch.BlockType.REPORTER,
            text: "users following [USERNAME] on page [PAGE]",
            arguments: {
              USERNAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "DemonX5",
              },
              PAGE: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 1,
              },
            },
          },
          {
            blockType: Scratch.BlockType.LABEL,
            text: "Projects",
          },
          {
            opcode: "getProjectID",
            blockType: Scratch.BlockType.REPORTER,
            text: "get ID of project titled [TITLE] by [USERNAME]",
            arguments: {
              USERNAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "DemonX5",
              },
              TITLE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "Flappy Bird +",
              },
            },
          },
          {
            opcode: "userFeatured",
            blockType: Scratch.BlockType.REPORTER,
            text: "get featured project from user profile [USERNAME]",
            arguments: {
              USERNAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "DemonX5",
              },
            },
          },
          {
            opcode: "recentlySharedProject",
            blockType: Scratch.BlockType.REPORTER,
            text: "most recent shared project from user [USERNAME]",
            arguments: {
              USERNAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "DemonX5",
              },
            },
          },
          {
            opcode: "getAllProjects",
            blockType: Scratch.BlockType.REPORTER,
            text: "projects made by user [USERNAME] on page [PAGE]",
            arguments: {
              USERNAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "DemonX5",
              },
              PAGE: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 1,
              },
            },
          },
        ],
        menus: {
          MENU: {
            acceptReporters: true,
            items: ["original", "importable"],
          },
        },
      };
    }

    projectThumbGrab(args) {
      let url = `https://uploads.scratch.mit.edu/get_image/project/${args.ID}_1000x1000.png`;
      if (args.MENU === "importable") {
        url = "https://corsproxy.io/?" + url;
      }
      return url;
    }

    async profilePictureGrab(args) {
      try {
        const url = `https://corsproxy.io/?https://api.scratch.mit.edu/users/${args.WHO}/`;
        const response = await fetch(url);
        const jsonData = await response.json();
        let fixedJSON = jsonData.profile.images["90x90"];
        if (args.MENU == "original") {
          fixedJSON = fixedJSON.replace("cdn2", "uploads");
          return fixedJSON;
        } else if (args.MENU == "importable") {
          fixedJSON = "https://corsproxy.io/?" + fixedJSON.replace("cdn2", "uploads");
          return fixedJSON;
        }
      } catch (error) {
        return "";
      }
    }

    async getProjectID(args) {
      try {
        const projectUrl = "https://corsproxy.io/?" + "https://api.scratch.mit.edu/users/" + args.USERNAME + "/projects";
        const response = await fetch(projectUrl);
        const projectsData = await response.json();
        const project = projectsData.find((project) => project.title === args.TITLE);
        if (project) {
          return project.id;
        } else {
          return "";
        }
      } catch (error) {
        return "";
      }
    }

    async recentlySharedProject(args) {
      try {
        const projectUrl = "https://corsproxy.io/?" + "https://api.scratch.mit.edu/users/" + args.USERNAME + "/projects";
        const response = await fetch(projectUrl);
        const projectsData = await response.json();
        if (projectsData.length === 0) {
          return "";
        }
        const mostRecentProject = projectsData[0];
        return mostRecentProject.title;
      } catch (error) {
        return "";
      }
    }

    async msgCnt(args) {
      try {
        const projectUrl = `https://corsproxy.io/?https://api.scratch.mit.edu/users/${args.USERNAME}/messages/count`;
        const response = await fetch(projectUrl);
        const messages = await response.json();
        if (messages.length === 0) {
          return "";
        } else {
          return messages.count;
        }
      } catch (error) {
        return "";
      }
    }

    async isFollowing(args) {
      try {
        const followerUrl = `https://corsproxy.io/?https://scratch.mit.edu/users/${args.FOLLOWER}/following/?page=${this.pageFix(args.PAGE)}`;
        const response = await fetch(followerUrl);
        let text = await response.text();
        text = text.toLowerCase();
        return text.includes(`href="/users/${args.USERNAME.toLowerCase()}/"`);
      } catch (error) {
        return false;
      }
    }

    async getFollowingUsers(args) {
      try {
        const followingUrl = `https://corsproxy.io/?https://scratch.mit.edu/users/${args.USERNAME}/following/?page=${this.pageFix(args.PAGE)}`;
        const response = await fetch(followingUrl);
        const text = await response.text();
        const followingList = [];
        const regex = /href="\/users\/([^/]+)\//g;
        let match;
        while ((match = regex.exec(text))) {
          followingList.push(match[1]);
        }
        let filteredList = followingList.filter((_, index) => index % 2 !== 0);
        filteredList = filteredList.slice(1);
        filteredList = JSON.stringify(filteredList);
        return filteredList !== "[]" ? filteredList : "";
      } catch (error) {
        return [];
      }
    }

    async getFollowers(args) {
      try {
        const followingUrl = `https://corsproxy.io/?https://scratch.mit.edu/users/${args.USERNAME}/followers/?page=${this.pageFix(args.PAGE)}`;
        const response = await fetch(followingUrl);
        const text = await response.text();
        const followingList = [];
        const regex = /href="\/users\/([^/]+)\//g;
        let match;
        while ((match = regex.exec(text))) {
          followingList.push(match[1]);
        }
        let filteredList = followingList.filter((_, index) => index % 2 !== 0);
        filteredList = filteredList.slice(1);
        filteredList = JSON.stringify(filteredList);
        return filteredList !== "[]" ? filteredList : "";
      } catch (error) {
        return [];
      }
    }

    async userFeatured(args) {
      try {
        const followingUrl = `https://corsproxy.io/?https://scratch.mit.edu/users/${args.USERNAME}/`;
        const response = await fetch(followingUrl);
        const text = await response.text();
        const featuredData = {};
        const regex = /featuredProject:\s*{\s*title:\s*'([^']+)',\s*id:\s*(\d+),\s*creator:\s*'([^']+)',\s*isPublished:\s*(true|false),\s*},/;
        const match = regex.exec(text);

        if (match) {
          featuredData.title = match[1];
          featuredData.id = parseInt(match[2]);
          featuredData.isPublished = match[4];
          return JSON.stringify(featuredData);
        } else {
          return "";
        }
      } catch (error) {
        return "";
      }
    }

    async getAllProjects(args) {
      try {
        const projectUrl = `https://corsproxy.io/?https://scratch.mit.edu/users/${args.USERNAME}/projects/?page=${this.pageFix(args.PAGE)}`;
        const response = await fetch(projectUrl);
        const text = await response.text();
        const projectList = [];
        const regex = /<a href="\/projects\/\d+\/">([^<]+)<\/a>/g;
        let match;
        while ((match = regex.exec(text))) {
          projectList.push(match[1]);
        }
        const jsonString = JSON.stringify(projectList);
        return jsonString !== "[]" ? jsonString : "";
      } catch (error) {
        return "";
      }
    }

    pageFix(page) {
      let newPage = Math.round(page + 0);
      if (newPage < 1 || Scratch.Cast.toString(newPage).includes(Infinity)) {
        newPage = 1;
      }
      return newPage;
    }
  }

  Scratch.extensions.register(new SPscratchUtilities());
})(Scratch);
