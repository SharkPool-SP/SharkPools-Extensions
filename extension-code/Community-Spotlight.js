// Name: Community Spotlight
// ID: SPspotlight
// Description: Display and advertise promotional content for free.
// By: SharkPool
// Licence: MIT

// Version V.1.1.0

(async function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) throw new Error("Community Spotlight must run unsandboxed!");

  const menuIconURI =
"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3Ny4yMDUiIGhlaWdodD0iNzcuMjA1IiB2aWV3Qm94PSIwIDAgNzcuMjA1IDc3LjIwNSI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIyMTIuNzA0IiB5MT0iMTUyLjcwNCIgeDI9IjI2Ny4yOTYiIHkyPSIyMDcuMjk2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImEiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzAwOTk0ZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAwNzg5OSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSIyMTUuODk0IiB5MT0iMTU1Ljg5NCIgeDI9IjI2NC4xMDYiIHkyPSIyMDQuMTA2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImIiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzAwZmY4NCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAwYzlmZiIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIHN0cm9rZS1taXRlcmxpbWl0PSIxMCI+PHBhdGggZD0iTTIxMi43MDQgMjA3LjI5NmMtMTUuMDc1LTE1LjA3NS0xNS4wNzUtMzkuNTE3IDAtNTQuNTkyczM5LjUxNy0xNS4wNzUgNTQuNTkyIDAgMTUuMDc1IDM5LjUxNyAwIDU0LjU5Mi0zOS41MTcgMTUuMDc1LTU0LjU5MiAwIiBmaWxsPSJ1cmwoI2EpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjAxLjM5OCAtMTQxLjM5OCkiLz48cGF0aCBkPSJNMjE1Ljg5NCAyMDQuMTA2Yy0xMy4zMTMtMTMuMzE0LTEzLjMxMy0zNC44OTggMC00OC4yMTJzMzQuODk4LTEzLjMxMyA0OC4yMTIgMCAxMy4zMTMgMzQuODk4IDAgNDguMjEyLTM0Ljg5OCAxMy4zMTMtNDguMjEyIDAiIGZpbGw9InVybCgjYikiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMDEuMzk4IC0xNDEuMzk4KSIvPjxwYXRoIGQ9Im00Ny42MzQgMzcuMzI0LTctNS42OTQgMTQuNTI3LTEyLjc2NXMxLjM1LTEuNDI0IDIuMzE2LTEuMDFjMS41NjEuNjY4Ljg2NSAyLjI4OC44NjUgMi4yODh6TTE3LjQyNSA1MS45ODljLjQ4NS0uNDg4IDEuMDMzLS45MDYgMS41NS0xLjM2bDQuOTE3LTQuMzEzIDQuODk2LTQuMjk1IDcuOTc5IDEyLjcxM3MtLjAzMS4wOTItLjI0Ni40MzdjLS40NTcuNzM1LS43NDcgMS41MDMtMS40MTIgMi4xMDQtMS40NTkgMS4zMTUtMy41MiAxLjkxLTUuNDEzIDIuMjI5LTIuNDgyLjQyLTUuMDg4LjQwMS03LjU2LS4wNzYtMS44MTktLjM1Mi0zLjgxLS45NzQtNS4xNjMtMi4zMDctLjQ4Mi0uNDc1LS44Ny0xLjA2My0xLjAwMS0xLjczNmEyLjY0IDIuNjQgMCAwIDEgLjA1NC0xLjIzNGMuMTMzLS40NjMuNjI5LTEuMzkgMS4zOTktMi4xNjJtOC44Mi0uMTRjLTQuNDA3IDAtNy45OCAxLjM2OC03Ljk4IDMuMDU2czMuNTczIDMuMDU2IDcuOTggMy4wNTYgNy45OC0xLjM2OCA3Ljk4LTMuMDU2LTMuNTczLTMuMDU2LTcuOTgtMy4wNTZtMzEuODE2LTEuMzY5IDEuNDg0IDEuMzAyYy41NC40NzMuOTY5IDEuMDUxIDEuMzMgMS42N3EuMDAxLjAwNi4wMDUuMDFjLjI1LjQyOS40LjkxNC40IDEuNDEyIDAgMy4yNzMtNC44NzYgNC41MDItNy4zMzYgNC43MzItMy43MDYuMzQ3LTguMTM2LjI2NC0xMS4yMS0xLjgzNS0xLjAwOC0uNjg5LTEuNDM0LTEuNjEzLTIuMDQyLTIuNTlsLTEuNjM3LTIuNjNRMzEuOTkgNDEuMjA4IDI0LjkyOCAyOS44NjNsLTYuNTM0LTEwLjQ5NWMtLjYyMy0uOTk4IDEuMTY3LTIuNjYgMi4zMTEtMS42NTdsOC43MDMgNy42MzQgMjEuNzE1IDE5LjA0OHptLTYuOTkgMS4zNjljLTQuNDA3IDAtNy45OCAxLjM2OC03Ljk4IDMuMDU2czMuNTczIDMuMDU2IDcuOTggMy4wNTYgNy45OC0xLjM2OCA3Ljk4LTMuMDU2LTMuNTczLTMuMDU2LTcuOTgtMy4wNTYiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+Cg==";

  const Cast = Scratch.Cast;
  const vm = Scratch.vm;
  const runtime = vm.runtime;

  /**
   * Community Spotlight Exports (minified)
   * By: Community Spotlight Team <https://github.com/Community-Spotlight>
   * Licence: MIT
   * Version: 2.0.03
   */
  // eslint-disable-next-line
  //prettier-ignore
  !function(){let t="promo-space",e="https://cdn.jsdelivr.net/gh/Community-Spotlight/",i=[{accept:["image","images","img"],value:"image",dom:"img"},{accept:["video","videos","vid"],value:"video",dom:"video"},{accept:["html","embed"],value:"html",dom:"iframe"},];class s{static _sessionNeedsInit=!0;static _sessionIndex=null;static _globalTags=[];static _normalizeMediaType(t){t=t.toLowerCase();let e=i.find(e=>e.accept.includes(t));return e??i[0]}static _normalizeTags(t){return t&&Array.isArray(t)?t.map(t=>String(t).toLowerCase()):[]}static _rngListItem(t){return 1===t.length?t[0]:t[Math.floor(Math.random()*t.length)]}static async startSession(){if(!s._sessionNeedsInit)return;s._sessionNeedsInit=!1;let t=await fetch(e+"promotion-index/index.json");if(!t.ok){console.error(`Couldn't start Community Spotlight Session! (${t.status})`);return}s._sessionIndex=Object.values(await t.json());let i=document.createElement("link");i.rel="stylesheet",i.href=e+"promotion-exports/src/cs-promo.css",document.head.appendChild(i)}static setGlobalTags(t){s._globalTags=s._normalizeTags(t)}static getGlobalTags(){return s._globalTags}static getIndex(){return s._sessionIndex}static cleansePromo(t){if(!t)return null;let i={id:t.id,tags:t.tags,name:t.promoter,url:t["promoter-url"],media:e+"promotion-media/"},s=t.media,a=s.type,o=encodeURIComponent(i.id)+"/";return"html"===a||"mp4"===a?(o+=`sz${s.size.replace(":","x")}`,"mp4"===a&&(o+=`leng${s.length}`)):o+=s.size,i.media+=`${o}.${s.type}`,i}static getPromo(t,e,i,a=0){t||(t="image"),i||(i=s._globalTags);let o=s._normalizeMediaType(t).value+"s",r=s.getIndex();i.length&&(r=r.filter(t=>t.tags.some(t=>i.includes(t)))),e&&(r=r.map(t=>({...t,media:{...t.media,[o]:t.media[o].filter(t=>t.size===e)}}))),"videos"===o&&a>0&&(r=r.map(t=>({...t,media:{...t.media,[o]:t.media[o].filter(t=>t.length===a)}}))),r=(r=r.filter(t=>t.media[o].length)).map(t=>({...t,media:s._rngListItem(t.media[o])}));let l=s._rngListItem(r);return l?s.cleansePromo(l):null}}class a extends HTMLElement{static _clickWrap(t,e){t.addEventListener("click",t=>{e(t),t.stopPropagation()})}static createControlsBar(t){let i=`<button class="open" title="See Promoter"><img draggable="false" src="${e}assets/eye.svg"/></button>`,s=`<button class="close" title="Close"><img draggable="false" src="${e}assets/exit.svg"/></button>`,o=document.createElement("div");return o.setAttribute("class","controls"),o.innerHTML=`<div class="controls-inner"><span class="title"></span>${i}${s}</div>`,o.querySelector(".title").textContent=t.name,a._clickWrap(o.querySelector(".open"),()=>{window.open(t.url,"_blank")}),a._clickWrap(o.querySelector(".close"),()=>{o.parentNode.remove()}),o}extractMetaData(){return{type:this.getAttribute("type"),tags:this.getAttribute("tags"),videoLength:this.getAttribute("length"),ratio:this.getAttribute("aspect-ratio")??this.getAttribute("ratio"),width:this.getAttribute("width"),height:this.getAttribute("height"),hasControls:this.hasAttribute("controls")}}initGraphic(){let t=this._metadata,e=this._promo,i=t.type.dom;t.hasControls;let s=document.createElement(i);s.setAttribute("class","media"),s.setAttribute("loading","lazy"),s.setAttribute("src",e.media),"img"===i&&s.setAttribute("draggable",!1),"video"===i&&s.setAttribute("controls",""),"iframe"===i&&s.setAttribute("sandbox","allow-scripts"),this.appendChild(s),this.title=e.name,t.hasControls?this.appendChild(a.createControlsBar(e)):a._clickWrap(this,()=>window.open(e.url,"_blank"))}initElement(){try{let t=this.extractMetaData();if(t.videoLength=Number(t.videoLength),t.type=s._normalizeMediaType(t.type),t.tags=t.tags?String(t.tags).replaceAll(", ",",").split(","):null,t.width&&(this.style.width=t.width),t.height&&(this.style.height=t.height),this._metadata=t,this._promo=s.getPromo(t.type.value,t.ratio,t.tags,t.videoLength),!this._promo){console.warn("Community Spotlight: No Promotion Found!"[this]);return}this.initGraphic()}catch(e){console.warn("Could not initialize Promotion: ",[this],e)}}connectedCallback(){if(s._sessionNeedsInit){s.startSession().then(()=>{let e=Array.from(document.querySelectorAll(t));e.forEach(t=>t.initElement())});return}s._sessionIndex&&this.initElement()}}let o={startSession:s.startSession,setGlobalTagFilter:s.setGlobalTags,getGlobalTagFilter:s.getGlobalTags,getAllPromos:s.getIndex,randomPromotion:s.getPromo};window.customElements.define(t,a),window._communitySpotlight=o}();

  const csContext = window._communitySpotlight;
  window._communitySpotlight = undefined;

  let IMG_RATIOS = {}, VIDEO_HTML_RATIOS = {}, VIDEO_LENGTHS = [];
  const fileTypes = await Scratch.external.importModule("https://cdn.jsdelivr.net/gh/Community-Spotlight/uploader-site/static/file-types.js");
  IMG_RATIOS = fileTypes.IMG_RATIOS;
  VIDEO_HTML_RATIOS = fileTypes.VIDEO_HTML_RATIOS;
  VIDEO_LENGTHS = fileTypes.VIDEO_LENGTHS;

  const container = document.createElement("div");
  container.classList.add("Community-Spotlight-Container");
  container.setAttribute("style", `pointer-events: auto; transform: translate(-50%, -50%); position: absolute;`);
  vm.renderer.addOverlay(container, "scale-centered");

  const promoDisplay = { pos: [0, 0], sz: [1, 1] };
  let currentPromotion = null;
  let sessionStarted = false;

  class SPspotlight {
    constructor() {
      runtime.on("PROJECT_STOP_ALL", this.deletePromo);
      runtime.on("PROJECT_START", this.deletePromo);
      runtime.on("RUNTIME_PAUSED", () => {
        const video = container.querySelector("video");
        if (video) video.pause();
      });
      runtime.on("RUNTIME_UNPAUSED", () => {
        const video = container.querySelector("video");
        if (video) video.play();
      });
      runtime.once("BEFORE_EXECUTE", async () => {
        await csContext.startSession();
        sessionStarted = true;
      });
    }
    getInfo() {
      return {
        id: "SPspotlight",
        name: "Community Spotlight",
        color1: "#14c490",
        color2: "#00a674",
        color3: "#01855d",
        menuIconURI,
        blocks: [
          {
            func: "promoDisclaim",
            blockType: Scratch.BlockType.BUTTON,
            text: "Disclaimer"
          },
          {
            func: "addPromo",
            blockType: Scratch.BlockType.BUTTON,
            text: "Submit a Promotion"
          },
          "---",
          {
            opcode: "activeTags",
            blockType: Scratch.BlockType.REPORTER,
            text: "active tags"
          },
          {
            opcode: "filterTags",
            blockType: Scratch.BlockType.COMMAND,
            text: "filter promotions with tags [TAGS]",
            arguments: {
              TAGS: { type: Scratch.ArgumentType.STRING, defaultValue: "[\"Gaming\", \"Art\"]" }
            },
          },
          { blockType: Scratch.BlockType.LABEL, text: "Promotion Display" },
          {
            opcode: "showImgPromo",
            blockType: Scratch.BlockType.COMMAND,
            text: "display image with size [SIZE]",
            arguments: {
              SIZE: { type: Scratch.ArgumentType.STRING, menu: "IMGS" }
            },
          },
          {
            opcode: "showVidPromo",
            blockType: Scratch.BlockType.COMMAND,
            text: "display [LENGTH] sec video with size [SIZE]",
            arguments: {
              SIZE: { type: Scratch.ArgumentType.STRING, menu: "VID_RATIO" },
              LENGTH: { type: Scratch.ArgumentType.STRING, menu: "VID_LENGTH" }
            },
          },
          {
            opcode: "showHTMLPromo",
            blockType: Scratch.BlockType.COMMAND,
            text: "display HTML embed with size [SIZE]",
            arguments: {
              SIZE: { type: Scratch.ArgumentType.STRING, menu: "VID_RATIO" }
            },
          },
          "---",
          {
            opcode: "visiblePromo",
            blockType: Scratch.BlockType.COMMAND,
            text: "[TYPE] current promotion",
            arguments: {
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "VISIBLE" }
            },
          },
          {
            opcode: "deletePromo",
            blockType: Scratch.BlockType.COMMAND,
            text: "delete current promotion"
          },
          "---",
          {
            opcode: "setPromoPos",
            blockType: Scratch.BlockType.COMMAND,
            text: "set promotion position to x [x] y [y]",
            arguments: {
              x: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
              y: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 }
            },
          },
          {
            opcode: "setPromoScale",
            blockType: Scratch.BlockType.COMMAND,
            text: "set promotion scale to x [x] y [y]",
            arguments: {
              x: { type: Scratch.ArgumentType.NUMBER, defaultValue: 200 },
              y: { type: Scratch.ArgumentType.NUMBER, defaultValue: 100 }
            },
          },
          { blockType: Scratch.BlockType.LABEL, text: "Advanced" },
          {
            opcode: "getImgPromo",
            blockType: Scratch.BlockType.REPORTER,
            text: "get random image with size [SIZE]",
            arguments: {
              SIZE: { type: Scratch.ArgumentType.STRING, menu: "IMGS" }
            },
          },
          {
            opcode: "getVidPromo",
            blockType: Scratch.BlockType.REPORTER,
            text: "get random [LENGTH] sec video with size [SIZE]",
            arguments: {
              SIZE: { type: Scratch.ArgumentType.STRING, menu: "VID_RATIO" },
              LENGTH: { type: Scratch.ArgumentType.STRING, menu: "VID_LENGTH" }
            },
          },
          {
            opcode: "getHTMLPromo",
            blockType: Scratch.BlockType.REPORTER,
            text: "get random HTML embed with size [SIZE]",
            arguments: {
              SIZE: { type: Scratch.ArgumentType.STRING, menu: "VID_RATIO" },
            },
          },
          /* Deprecation Marker */
          {
            opcode: "refresh", blockType: Scratch.BlockType.COMMAND,
            text: "refresh promo cache", hideFromPalette: true,
          },
          /* Marker End */
        ],
        menus: {
          VISIBLE: {
            acceptReporters: true,
            items: ["show", "hide"]
          },
          IMGS: {
            acceptReporters: true,
            items: [
              { text: "250x250 Square", value: "250x250 Square" },
              { text: "300x250 Rectangle", value: "300x250 Rectangle" },
              { text: "480x270 Widescreen", value: "480x270 Widescreen" },
              { text: "300x50 Horizontal Banner", value: "300x50 Horizontal Banner" },
              { text: "50x300 Vertical Banner", value: "50x300 Vertical Banner" },
              { text: "360x120 Large Horizontal Banner", value: "360x120 Large Horizontal Banner" },
              { text: "120x360 Large Vertical Banner", value: "120x360 Large Vertical Banner" }
            ]
          },
          VID_RATIO: { acceptReporters: true, items: "_getEmbedRatios" },
          VID_LENGTH: { acceptReporters: true, items: "_getVideoLengths" }
        }
      };
    }

    // Helper Funcs
    _getEmbedRatios() {
      const menu = Object.keys(VIDEO_HTML_RATIOS)
        .map(r => ({ text: Cast.toString(r), value: Cast.toString(r) }));
      return menu.length ? menu : [""];
    }

    _getVideoLengths() {
      return ["any"].concat(VIDEO_LENGTHS)
        .map(l => ({ text: Cast.toString(l), value: Cast.toString(l) }));
    }

    promoDisclaim() {
      alert([
        "DISCLAIMER: Community Spotlight does NOT earn you money. It exists solely to help promote your content and the work of other creators.",
        "Scratch projects are not designed to securely handle financial transactions or protect sensitive information. Due to platform limitations and various security vulnerabilities, monetization systems are impractical and can be easily bypassed.",
        "All promotions are free, moderated, and accessible to everyone.",
        "Learn more about Community Spotlight and its mission:",
        "https://community-spotlight.github.io/"
      ].join("\n\n"));
    }

    addPromo() {
      Scratch.openWindow("https://community-spotlight.github.io/uploader-site/");
    }

    _displayPromo(type, ratio, opt_videoLength) {
      this.deletePromo();

      currentPromotion = document.createElement("promo-space");
      currentPromotion.setAttribute("type", type);
      currentPromotion.setAttribute("controls", true);
      currentPromotion.setAttribute("ratio", ratio);
      if (opt_videoLength > 0) currentPromotion.setAttribute("length", opt_videoLength);

      // we dont need to apply a 'tags' attribute since the
      // GlobalTagFilter in the exports handles it for us.

      // Apply a forced size ratio to videos and embeds since
      // they are locked to a relative aspect ratio.
      if (type === "html" || type === "video") {
        currentPromotion.setAttribute("width", `${runtime.stageWidth / 2}px`);
        currentPromotion.setAttribute("height", `${runtime.stageHeight / 2}px`);
      }

      container.appendChild(currentPromotion);
      this._updateCurrentPromo();

      if (type === "video") {
        currentPromotion.querySelector("video")?.play();
      }
    }

    _updateCurrentPromo() {
      if (!currentPromotion) return;

      const { pos, sz } = promoDisplay;
      currentPromotion.style.transform = `translate(${pos[0]}px, ${pos[1]}px) scale(${sz[0]},${sz[1]})`;
    }

    _returnJSON(json) {
      return vm.extensionManager._loadedExtensions.has("SPjson")
        ? json : JSON.stringify(json);
    }

    _getRatio(type, txt) {
      let text = Cast.toString(txt);
      text = text.split(" ")[0].trim(); // split 'ratio desc' -> 'ratio'

      if (type === "img") return IMG_RATIOS[text] ? text : null;
      else return VIDEO_HTML_RATIOS[text] ? text : null
    }

    // Block Funcs
    activeTags() {
      return this._returnJSON(csContext.getGlobalTagFilter());
    }

    filterTags(args) {
      try {
        const parsed = JSON.parse(Cast.toString(args.TAGS));
        csContext.setGlobalTagFilter(parsed);
      } catch {}
    }

    showImgPromo(args) {
      const ratio = this._getRatio("img", args.SIZE);
      if (ratio) this._displayPromo("image", ratio);
    }

    showVidPromo(args) {
      const videoLength = args.LENGTH === "any" ? 0 : Cast.toNumber(args.LENGTH);
      const ratio = this._getRatio("video", args.SIZE);
      if (ratio) this._displayPromo("video", ratio, videoLength);
    }

    showHTMLPromo(args) {
      const ratio = this._getRatio("html", args.SIZE);
      if (ratio) this._displayPromo("html", ratio);
    }

    visiblePromo(args) {
      if (currentPromotion) currentPromotion.style.display = args.TYPE === "show" ? "" : "none";
    }

    deletePromo() {
      if (currentPromotion) {
        currentPromotion.remove();
        currentPromotion = null;
      }
    }

    setPromoPos(args) {
      promoDisplay.pos = [
        Cast.toNumber(args.x),
        Cast.toNumber(args.y) * -1
      ];

      this._updateCurrentPromo();
    }

    setPromoScale(args) {
      promoDisplay.sz = [
        Cast.toNumber(args.x) / 100,
        Cast.toNumber(args.y) / 100
      ];

      this._updateCurrentPromo();
    }

    getImgPromo(args) {
      const ratio = this._getRatio("img", args.SIZE);
      if (!sessionStarted || !ratio) return this._returnJSON({});

      return this._returnJSON(
        csContext.randomPromotion("image", ratio) ?? {},
        args.FORCE_RAW
      );
    }

    getVidPromo(args) {
      const videoLength = args.LENGTH === "any" ? 0 : Cast.toNumber(args.LENGTH);
      const ratio = this._getRatio("video", args.SIZE);
      if (!sessionStarted || !ratio) return this._returnJSON({});

      return this._returnJSON(
        csContext.randomPromotion("video", ratio, undefined, videoLength) ?? {},
        args.FORCE_RAW
      );
    }

    getHTMLPromo(args) {
      const ratio = this._getRatio("html", args.SIZE);
      if (!sessionStarted || !ratio) return this._returnJSON({});

      return this._returnJSON(
        csContext.randomPromotion("html", ratio) ?? {},
        args.FORCE_RAW
      );
    }

    /* Deprecation Marker */
    refresh() {}
    /* Marker End */
  }

  Scratch.extensions.register(new SPspotlight());
})(Scratch);
