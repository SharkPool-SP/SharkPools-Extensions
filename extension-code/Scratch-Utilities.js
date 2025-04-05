// Name: Scratch Utilities
// ID: SPscratchUtilities
// Description: Fetch data from Scratch!
// By: SharkPool
// License: MIT

// Version 2.4.11

(function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) throw new Error("Scratch Utilities must run unsandboxed");

  const menuIconURI =
"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5OS44NjUiIGhlaWdodD0iOTkuODY1IiB2aWV3Qm94PSIwIDAgOTkuODY1IDk5Ljg2NSI+PHBhdGggZD0iTTAgNDkuOTMzQzAgMjIuMzU2IDIyLjM1NiAwIDQ5LjkzMyAwczQ5LjkzMyAyMi4zNTYgNDkuOTMzIDQ5LjkzM1M3Ny41MSA5OS44NjYgNDkuOTMzIDk5Ljg2NiAwIDc3LjUxIDAgNDkuOTMzIiBmaWxsPSIjZmFhNTFmIi8+PHBhdGggZD0ibTUzLjc4MyAyOC40NSA3LjItNyAyLjggMTEuMnM2LjIgNC42IDguMSA3LjhjMy4xIDUuMyAzLjE5OSA5LjYgMy4xOTkgOS42czYuOSAyLjEgOC4xIDcuNi0zLjEgMTYtMjEuMjk5IDE5LjZjLTE4LjIgMy42LTMyLjgtMS4zLTM5LjctMTIuNC02LjgtMTEgNC0yNC4yIDMuNC0yMy40bC0yLjItMTguMyAxMi42IDguMnM0LjI5OC0xLjcgOC45LTEuOWMxLjY5OS0uMSA0LjguMSA2LjMuMnoiIGZpbGw9IiNmYWE1MWYiLz48cGF0aCBkPSJNNzQuNjgzIDUwLjU1MXM2LjYgMS42IDcuOCA3LjFjMS41IDUuNS0zLjQwMSAxNS45LTIwLjYgMTktMy45LjctNy40IDEuNC0xMi45IDEuNC04LjUuMDk5LTE3LjgtNS4yLTE3LjEtMTYuMy4zOTktNi40IDguNS01LjkgOC41LTUuOWw3LjEtMS44czcuMSAxLjU5OSAxMS4zLjdjNC4yLS45IDQuMi00LjIgNC4yLTQuMmw4LjgtMi42MDEgMi40IDJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTkwLjE4MyA1MS4zNTFzLTEuOCAxLjYtNC40IDIuNWMtMi4yMDEuOC02LjYgMS41LTYuNiAxLjVtMTAuMzk5IDcuMnMtMS44LjItNC41LS4xMDFjLTIuOC0uMi01LjQtMS4zLTUuNC0xLjNNMzguODgzIDMzLjQ1MWwtNS4yLTMuNiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjOGU1MzIyIiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0ibTUzLjc4MyAyOC40NSA3LjItNyAyLjggMTEuMnM2LjIgNC42IDguMSA3LjhjMy4xIDUuMyAzLjE5OSA5LjYgMy4xOTkgOS42czYuOSAyLjEgOC4xIDcuNi0zLjEgMTYtMjEuMjk5IDE5LjZjLTE4LjIgMy42LTMyLjgtMS4zLTM5LjctMTIuNC02LjgtMTEgNC0yNC4yIDMuNC0yMy40bC0yLjItMTguMyAxMi42IDguMnM0LjI5OC0xLjcgOC45LTEuOWMxLjY5OS0uMSA0LjguMSA2LjMuMnoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzhlNTMyMiIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik0yMS41ODMgNjAuMzVzLTMuNS41LTUuMy42LTUuOC0uMy01LjgtLjNtLS44LTkuNTk5czIuMi4zOTkgNi4yIDIuMmMzLjYgMS42IDUuOSAzLjMgNS45IDMuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjOGU1MzIyIiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTY5LjY4MyA0MC41NTFjMi44IDQuMyAyLjg5OSA5LjMuMiAxMS0yLjcgMS44LTcuMi0uMy0xMC00LjctMi44MDEtNC4zLTIuOS05LjMtLjItMTFzNy4yLjQgMTAgNC43IiBmaWxsPSIjZmZmIiBzdHJva2U9IiM4ZTUzMjIiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBkPSJNNjkuNTgzIDQ0LjE1Yy4zIDEtLjIgMi0xLjIgMi4zLS45LjMtMS45LS4zLTIuMi0xLjQtLjMtMSAuMi0yIDEuMi0yLjMgMS0uMiAxLjkuNCAyLjIgMS40IiBmaWxsPSIjNDE0MTQyIi8+PHBhdGggZD0iTTQ2LjQ4MyA0My42NWMyLjggNC4zIDIuNSA5LjUtLjcgMTEuNnMtOC4xLjMtMTAuOS00LjFjLTIuOC00LjMtMi41LTkuNS43LTExLjYgMy4yLTIgOC4xLS4yIDEwLjkgNC4xIiBmaWxsPSIjZmZmIiBzdHJva2U9IiM4ZTUzMjIiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBkPSJNNDYuMTgzIDQ3LjU1MWMwIDEtLjggMS44OTktMS43IDEuODk5LTEgMC0xLjctLjgtMS43LTEuOSAwLTEgLjgtMS45IDEuNy0xLjlzMS43LjggMS43IDEuOSIgZmlsbD0iIzQxNDE0MiIvPjxwYXRoIGQ9Ik01Ny40ODMgNTMuNTUxYzEuNy0uMiA0LTEuNSA0LjMuMzk5IDAgLjgtMS42IDQuMS0zLjQgNC4yLTIgLjEtNS41LTIuNC01LjQtMy45czMtLjUgNC41LS43IiBmaWxsPSIjNWY0YjQzIiBzdHJva2U9IiM4ZTUzMjIiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBkPSJNNTYuMjgyIDcwLjE1Yy01LjQgMS4xLTcuOS0xLjItNy45LTEuMiIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjOGU1MzIyIiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+";

  const vm = Scratch.vm;
  const proxy = "https://corsproxy.io/?url=";

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
          { blockType: Scratch.BlockType.LABEL, text: "Images" },
          {
            opcode: "profilePictureGrab",
            blockType: Scratch.BlockType.REPORTER,
            text: "[MENU] profile picture of user [WHO]",
            arguments: {
              MENU: { type: Scratch.ArgumentType.STRING, menu: "MENU" },
              WHO: { type: Scratch.ArgumentType.STRING, defaultValue: "DemonX5" }
            },
          },
          {
            opcode: "projectThumbGrab",
            blockType: Scratch.BlockType.REPORTER,
            text: "[MENU] thumbnail of project ID [ID]",
            arguments: {
              MENU: { type: Scratch.ArgumentType.STRING, menu: "MENU" },
              ID: { type: Scratch.ArgumentType.NUMBER, defaultValue: 820242622 }
            },
          },
          { blockType: Scratch.BlockType.LABEL, text: "Users" },
          {
            opcode: "isScratcher",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "is user [USERNAME] a Scratcher?",
            arguments: {
              USERNAME: { type: Scratch.ArgumentType.STRING, defaultValue: "DemonX5" }
            },
          },
          {
            opcode: "isFollowing",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "is user [FOLLOWER] following [USERNAME]?",
            arguments: {
              FOLLOWER: { type: Scratch.ArgumentType.STRING, defaultValue: "DemonX5" },
              USERNAME: { type: Scratch.ArgumentType.STRING, defaultValue: "griffpatch" }
            },
          },
          "---",
          {
            opcode: "msgCnt",
            blockType: Scratch.BlockType.REPORTER,
            text: "get message count of user [USERNAME]",
            arguments: {
              USERNAME: { type: Scratch.ArgumentType.STRING, defaultValue: "griffpatch" }
            },
          },
          {
            opcode: "getFollowingUsers",
            blockType: Scratch.BlockType.REPORTER,
            text: "users that [USERNAME] is following on page [PAGE]",
            arguments: {
              USERNAME: { type: Scratch.ArgumentType.STRING, defaultValue: "DemonX5" },
              PAGE: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 }
            },
          },
          {
            opcode: "getFollowers",
            blockType: Scratch.BlockType.REPORTER,
            text: "users following [USERNAME] on page [PAGE]",
            arguments: {
              USERNAME: { type: Scratch.ArgumentType.STRING, defaultValue: "DemonX5" },
              PAGE: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 }
            },
          },
          { blockType: Scratch.BlockType.LABEL, text: "Studios" },
          {
            opcode: "getCurates",
            blockType: Scratch.BlockType.REPORTER,
            text: "get studios curated by user [USERNAME]",
            arguments: {
              USERNAME: { type: Scratch.ArgumentType.STRING, defaultValue: "DemonX5" },
            },
          },
          {
            opcode: "getStudioProj",
            blockType: Scratch.BlockType.REPORTER,
            text: "get [NUM2] offset [NUM1] of projects in studio ID [ID]",
            arguments: {
              ID: { type: Scratch.ArgumentType.NUMBER, defaultValue: 33817173 },
              NUM1: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
              NUM2: { type: Scratch.ArgumentType.NUMBER, defaultValue: 20 }
            },
          },
          { blockType: Scratch.BlockType.LABEL, text: "Projects" },
          {
            opcode: "projectURI",
            blockType: Scratch.BlockType.REPORTER,
            text: "get project data.uri",
            disableMonitor: true
          },
          "---",
          {
            opcode: "getProject",
            blockType: Scratch.BlockType.REPORTER,
            text: "get project.json of ID [ID]",
            arguments: {
              ID: { type: Scratch.ArgumentType.NUMBER, defaultValue: 820242622 }
            },
          },
          {
            opcode: "loadJSON",
            blockType: Scratch.BlockType.COMMAND,
            text: "load project from json [JSON]",
            arguments: {
              JSON: { type: Scratch.ArgumentType.NUMBER, defaultValue: "{}" }
            },
          },
          "---",
          {
            opcode: "getAsset",
            blockType: Scratch.BlockType.REPORTER,
            text: "get project asset with ID [ID] type [TYPE]",
            arguments: {
              ID: { type: Scratch.ArgumentType.STRING, defaultValue: "3bb45d2f3346e4587d4dd0633ced0091" },
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "FILES" }
            },
          },
          "---",
          {
            opcode: "getProjectID",
            blockType: Scratch.BlockType.REPORTER,
            text: "get ID of project titled [TITLE] by [USERNAME]",
            arguments: {
              USERNAME: { type: Scratch.ArgumentType.STRING, defaultValue: "DemonX5" },
              TITLE: { type: Scratch.ArgumentType.STRING, defaultValue: "Flappy Bird Plus" }
            },
          },
          {
            opcode: "userFeatured",
            blockType: Scratch.BlockType.REPORTER,
            text: "get featured project from user profile [USERNAME]",
            arguments: {
              USERNAME: { type: Scratch.ArgumentType.STRING, defaultValue: "DemonX5" }
            },
          },
          {
            opcode: "recentlySharedProject",
            blockType: Scratch.BlockType.REPORTER,
            text: "most recent shared project from user [USERNAME]",
            arguments: {
              USERNAME: { type: Scratch.ArgumentType.STRING, defaultValue: "DemonX5" }
            },
          },
          {
            opcode: "getAllProjects",
            blockType: Scratch.BlockType.REPORTER,
            text: "projects made by user [USERNAME] on page [PAGE]",
            arguments: {
              USERNAME: { type: Scratch.ArgumentType.STRING, defaultValue: "DemonX5" },
              PAGE: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 }
            },
          },
          { blockType: Scratch.BlockType.LABEL, text: "Cloud Data" },
          {
            opcode: "getCloudData",
            blockType: Scratch.BlockType.REPORTER,
            text: "get [NUM2] [MENU] offset [NUM1] of cloud data from project ID [ID]",
            arguments: {
              MENU: { type: Scratch.ArgumentType.STRING, menu: "CLOUD" },
              ID: { type: Scratch.ArgumentType.NUMBER, defaultValue: 820242622 },
              NUM1: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
              NUM2: { type: Scratch.ArgumentType.NUMBER, defaultValue: 20 }
            },
          },
        ],
        menus: {
          MENU: {
            acceptReporters: true,
            items: ["original", "importable"]
          },
          CLOUD: {
            acceptReporters: true,
            items: ["all", "values", "variables", "users", "dates"]
          },
          FILES: {
            acceptReporters: true,
            items: ["svg", "png", "wav", "mp3"]
          },
        },
      };
    }

    projectThumbGrab(args) {
      let url = `https://uploads.scratch.mit.edu/get_image/project/${args.ID}_1000x1000.png`;
      if (args.MENU === "importable") url = proxy + url;
      return url;
    }

    async profilePictureGrab(args) {
      try {
        const response = await fetch(`${proxy}https://api.scratch.mit.edu/users/${args.WHO}/`);
        const jsonData = await response.json();
        let fixedJSON = jsonData.profile.images["90x90"].replace("cdn2", "uploads");
        if (args.MENU == "importable") fixedJSON = proxy + fixedJSON;
        return fixedJSON;
      } catch { return "" }
    }

    async getProjectID(args) {
      try {
        const response = await fetch(`${proxy}https://api.scratch.mit.edu/users/${args.USERNAME}/projects`);
        const projectsData = await response.json();
        const project = projectsData.find((project) => project.title === args.TITLE);
        return project ? project.id : "";
      } catch { return "" }
    }

    async recentlySharedProject(args) {
      try {
        const response = await fetch(`${proxy}https://api.scratch.mit.edu/users/${args.USERNAME}/projects`);
        const projectsData = await response.json();
        if (projectsData.length === 0) return "";
        const mostRecentProject = projectsData[0];
        return mostRecentProject.title;
      } catch { return "" }
    }

    async msgCnt(args) {
      try {
        const response = await fetch(`${proxy}https://api.scratch.mit.edu/users/${args.USERNAME}/messages/count`);
        const messages = await response.json();
        return messages.count || 0;
      } catch { return "" }
    }

    async isScratcher(args) {
      try {
        const response = await fetch(`https://scratchdb.lefty.one/v3/user/info/${args.USERNAME}`);
        const jsonData = await response.json();
        return jsonData.status === "Scratcher";
      } catch { return false }
    }

    async isFollowing(args) {
      try {
        const url = `${proxy}https://scratch.mit.edu/users/${args.FOLLOWER}/following/`;
        let response = await fetch(url);
        let text = await response.text();
        const pageNum = (text.match(/class="page-current"/g) || []).length;
        for (let i = 0; i < pageNum + 1; i++) {
          if (i > 0) {
            response = await fetch(url + `?page=${i + 1}`);
            text = await response.text();
          }
          text = text.toLowerCase();
          if (text.includes(`href="/users/${args.USERNAME.toLowerCase()}/"`)) return true;
        }
        return false;
      } catch { return false }
    }

    getFollowingUsers(args) {
      const followingUrl = `${proxy}https://scratch.mit.edu/users/${args.USERNAME}/following/?page=${this.pageFix(args.PAGE)}`;
      return this.getFollow(args, followingUrl);
    }

    getFollowers(args) {
      const followingUrl = `${proxy}https://scratch.mit.edu/users/${args.USERNAME}/followers/?page=${this.pageFix(args.PAGE)}`;
      return this.getFollow(args, followingUrl);
    }

    async getFollow(args, url) {
      try {
        const response = await fetch(url);
        const text = await response.text();
        const followingList = [];
        const regex = /href="\/users\/([^/]+)\//g;
        let match;
        while ((match = regex.exec(text))) {
          followingList.push(match[1]);
        }
        let filteredList = followingList.filter((_, index) => index % 2 !== 0);
        return JSON.stringify(filteredList.slice(1));
      } catch { return "[]" }
    }

    async userFeatured(args) {
      try {
        const response = await fetch(`${proxy}https://scratch.mit.edu/users/${args.USERNAME}/`);
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
      } catch { return "" }
    }

    async getStudioProj(args) {
      const lim = Math.round(args.NUM2);
      const off = Math.round(args.NUM1);
      try {
        const response = await fetch(`${proxy}https://api.scratch.mit.edu/studios/${args.ID}/projects/?limit=${lim}&offset=${off}&cache=${Math.random()}`);
        const json = await response.json();
        return JSON.stringify(json) ?? "[]";
      } catch { return "[]" }
    }

    async getCurates(args) {
      try {
        const response = await fetch(`${proxy}https://api.scratch.mit.edu/users/${encodeURIComponent(args.USERNAME)}/studios/curate?cache=${Math.random()}`);
        const json = await response.json();
        return JSON.stringify(json) ?? "[]";
      } catch { return "[]" }
    }

    async getAllProjects(args) {
      try {
        const response = await fetch(`${proxy}https://scratch.mit.edu/users/${args.USERNAME}/projects/?page=${this.pageFix(args.PAGE)}`);
        const text = await response.text();
        const projectList = [];
        const regex = /<a href="\/projects\/\d+\/">([^<]+)<\/a>/g;
        let match;
        while ((match = regex.exec(text))) {
          projectList.push(match[1]);
        }
        return JSON.stringify(projectList);
      } catch { return "[]" }
    }

    async getProject(args) {
      const ID = Math.abs(Scratch.Cast.toNumber(args.ID));
      try {
        let response = await fetch(`${proxy}https://api.scratch.mit.edu/projects/${ID}?cache=${Math.random()}`);
        let json = await response.json();
        if (!json) return "{}";
        const token = json.project_token;
        response = await fetch(`https://projects.scratch.mit.edu/${ID}?token=${token}`);
        json = await response.json();
        if (!json) return "{}";
        return JSON.stringify(json);
      } catch { return "{}" }
    }

    loadJSON(args) {
      try {
        vm.loadProject(Scratch.Cast.toString(args.JSON));
      } catch {}
    }

    async getAsset(args) {
      const ID = Scratch.Cast.toString(args.ID);
      const type = Scratch.Cast.toString(args.TYPE);
      try {
        const url =`${proxy}https://assets.scratch.mit.edu/internalapi/asset/${ID}.${type}/get/`;
        let response = await fetch(url);
        if ((response.text()) && type === "mp3" || type === "mpeg" || type === "wav" || type === "ogg") return url;
        if (response.status === 502) return "Non-Existent/Wrong File Type";
        return await response.text() ?? "Non-Existent/Wrong File Type";
      } catch { return "Non-Existent/Wrong File Type" }
    }

    pageFix(page) {
      let newPage = Math.abs(Math.round(Scratch.Cast.toNumber(page)));
      return newPage === Infinity || newPage === 0 ? 1 : newPage;
    }

    async getCloudData(args) {
      const lim = Math.round(args.NUM2);
      const off = Math.round(args.NUM1);
      try {
        const response = await fetch(`${proxy}https://clouddata.scratch.mit.edu/logs?projectid=${args.ID}&limit=${lim}&offset=${off}&cache=${Math.random()}`);
        const text = await response.json();
        if (args.MENU === "all") return JSON.stringify(text);
        const values = { "users": "user", "variables": "name", "values": "value", "dates": "timestamp" };
        if (values[args.MENU] === undefined) return "[]";
        let jsonData;
        if (args.MENU === "dates") jsonData = text.map(item => new Date(item[values[args.MENU]]).toLocaleString());
        else jsonData = text.map(item => item[values[args.MENU]]);
        return JSON.stringify(jsonData);
      } catch { return "[]" }
    }

    projectURI() {
      return new Promise((resolve) => {
        const url = "data:application/octet-stream;base64,";
        vm.saveProjectSb3().then(blob => {
          const fileReader = new FileReader();
          fileReader.onload = () => { resolve(fileReader.result) };
          fileReader.onerror = () => { resolve(url) }
          fileReader.readAsDataURL(blob);
        }).catch(() => { resolve(url) });
      });
    }
  }

  Scratch.extensions.register(new SPscratchUtilities());
})(Scratch);
