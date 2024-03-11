// Name: Files Expanded
// ID: files
// Description: Read, upload, and download files.
// By: SharkPool, GarboMuffin, Drago Cuven, 0znzw, and FurryR

// Version 1.4.0

(function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) throw new Error("Files Expanded must be run unsandboxed");

  const menuIconURI =
"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxMzMuMTY0MzYiIGhlaWdodD0iMTMzLjE2NDM2IiB2aWV3Qm94PSIwLDAsMTMzLjE2NDM2LDEzMy4xNjQzNiI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE3My40MTc4MiwtMTEzLjQxNzgyKSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMTc2LjQxNzgyLDE4MGMwLC0zNS4xMTU0NyAyOC40NjY3MSwtNjMuNTgyMTggNjMuNTgyMTgsLTYzLjU4MjE4YzM1LjExNTQ3LDAgNjMuNTgyMTgsMjguNDY2NzEgNjMuNTgyMTgsNjMuNTgyMThjMCwzNS4xMTU0NyAtMjguNDY2NzEsNjMuNTgyMTggLTYzLjU4MjE4LDYzLjU4MjE4Yy0zNS4xMTU0NywwIC02My41ODIxOCwtMjguNDY2NzEgLTYzLjU4MjE4LC02My41ODIxOHoiIGZpbGw9IiNmY2IxMDMiIHN0cm9rZT0iI2JmOGIxMSIgc3Ryb2tlLXdpZHRoPSI2Ii8+PHBhdGggZD0iTTI3My4zMDkzMywxNjMuMzQ1MzN2NDkuOTY0YzAsNC41ODAwNCAtMy43NDcyOSw4LjMyNzMzIC04LjMyNzMzLDguMzI3MzNoLTUwLjAwNTY0Yy00LjU4MDA0LDAgLTguMjg1NjksLTMuNzQ3MjkgLTguMjg1NjksLTguMzI3MzNsMC4wNDE2NCwtNjYuNjE4NjZjMCwtNC41ODAwMiAzLjcwNTY3LC04LjMyNzMzIDguMjg1NjksLTguMzI3MzNoMzMuMzA5MzR6IiBmaWxsPSJub25lIiBzdHJva2Utb3BhY2l0eT0iMC4xNDkwMiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjEwIi8+PHBhdGggZD0iTTI3My4zMDkzMywxNjMuMzQ1MzN2NDkuOTY0YzAsNC41ODAwNCAtMy43NDcyOSw4LjMyNzMzIC04LjMyNzMzLDguMzI3MzNoLTUwLjAwNTY0Yy00LjU4MDA0LDAgLTguMjg1NjksLTMuNzQ3MjkgLTguMjg1NjksLTguMzI3MzNsMC4wNDE2NCwtNjYuNjE4NjZjMCwtNC41ODAwMiAzLjcwNTY3LC04LjMyNzMzIDguMjg1NjksLTguMzI3MzNoMzMuMzA5MzR6IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIvPjxwYXRoIGQ9Ik0yNDQuMTQwMTIsMTY3LjUzMjZ2LTIyLjk0NzI4bDIyLjk0NzI3LDIyLjk0NzI3eiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7bm9Ib3ZlciZxdW90OzpmYWxzZSwmcXVvdDtvcmlnSXRlbSZxdW90OzpbJnF1b3Q7UGF0aCZxdW90Oyx7JnF1b3Q7YXBwbHlNYXRyaXgmcXVvdDs6dHJ1ZSwmcXVvdDtzZWdtZW50cyZxdW90OzpbWzY4MS4yNDk5OCwyNjIuNV0sWzYxMi41LDE5My43NTAwMl0sWzYxMi41LDI2Mi41MDAwNF1dLCZxdW90O2Nsb3NlZCZxdW90Ozp0cnVlLCZxdW90O2ZpbGxDb2xvciZxdW90OzpbMCwwLDAsMV19XX0iIGZpbGw9IiNmY2IxMDMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48cGF0aCBkPSJNMjU4LjA4NTc0LDE4My4zMzIxNWMtMC4wMjA1NywwLjA4NzQxIC0wLjAzNTk5LDAuMTc0ODIgLTAuMDYxNywwLjI2MjIzYy0wLjA3NzEyLDAuMzIzOTMgLTAuMjM2NTIsMS4wOTAwNCAtMC4zOTU5MiwyLjU4NjI4YzAsMC4wMjU3MSAwLDAuMDQ2MjggLTAuMDA1MTQsMC4wNjE3YzAuODc5MjMsMy41Mzc1IC0wLjYwMTU4LDUuNjkxODcgLTEuNTgzNjUsNi42NzM5NWMtMC4wNjE3LDAuMDY2ODQgLTAuMTI4NTQsMC4xMjg1NCAtMC4yMDA1MywwLjE5MDI0Yy0wLjk2MTUsMC44NzQwOSAtMi42NDI4NCwxLjkxNzg2IC01LjE1MiwxLjkxNzg2Yy0xLjI0OTQ0LDAgLTIuNDE2NiwtMC4yNzc2NSAtMy40MzQ2NywtMC43ODY2OGMwLjAyNTcxLDEuNDAzNjggMC4wNDExMywzLjMzNjk3IDAuMDQxMTMsNi4wMjA5NGMwLjkyNTUxLDAuMzIzOTMgMS43NzM4OSwwLjg0ODM4IDIuNDkzNzMsMS41MzczN2MxLjQyOTM5LDEuMzcyODQgMi4yMTA5NCwzLjIwODQyIDIuMjEwOTQsNS4xNjc0MmMwLDIuOTEwMjEgLTEuNjc2Miw1LjQzOTkzIC00LjM3NTYsNi41OTY4MWMtMC4wNjY4NCwwLjAzMDg2IC0wLjEzODgzLDAuMDYxNyAtMC4yMDU2NiwwLjA4NzQxYy0wLjkwNDk0LDAuMzQ0NSAtMS45MjMsMC41MTQxNyAtMy4xMTU4OCwwLjUxNDE3Yy0wLjQzMTkxLDAgLTAuODk0NjUsLTAuMDIwNTcgLTEuMzk4NTUsLTAuMDY2ODRjLTAuMzA4NTEsLTAuMDE1NDIgLTAuNzYwOTcsLTAuMDEwMjkgLTEuMjk1NzIsMC4wMDUxNGMtMC45NzE3OSwwLjEwNzk4IC0yLjMzOTQ4LDAuMjE1OTUgLTQuMTY5OTIsMC4zMTg3OGMtMC4wMzU5OSwwIC0wLjA3MTk5LDAuMDA1MTQgLTAuMTEzMTIsMC4wMDUxNGMtMC4yNDE2NiwwLjAxMDI5IC0wLjQ3MzA0LDAuMDE1NDIgLTAuNjk5MjcsMC4wMTU0MmMtMy4yNzUyNywwIC01LjY2NjE3LC0xLjAzODYzIC03LjExMDk4LC0zLjA3OTg4Yy0wLjAzMDg2LC0wLjA0MTEzIC0wLjA1NjU1LC0wLjA4MjI3IC0wLjA4MjI3LC0wLjEyMzRjLTEuNDcwNTIsLTIuMTk1NTIgLTEuNTExNjYsLTQuOTcyMDQgLTAuMTEzMTIsLTcuMjM5NTNjMC4wMTAyOSwtMC4wMjU3MSAwLjAyNTcxLC0wLjA0NjI4IDAuMDQxMTMsLTAuMDcxOTljMC44ODk1MSwtMS4zOTg1NSAyLjE5MDM3LC0yLjM5NjAzIDMuODc2ODUsLTIuOTgyMTljMC4wMjA1NywtMC45OTIzNSAwLjAxNTQyLC0yLjIzNjY1IC0wLjAxNTQyLC0zLjcxMjMyYy0wLjgzODEsMC4zNDk2NCAtMS44MDQ3NCwwLjU1NTMgLTIuODg5NjQsMC41NTUzYy0yLjg2MzkzLDAgLTUuMjI5MTIsLTEuNzAxOTEgLTYuMDUxOCwtNC4yODgxOWMtMC4xNjk2OCwtMC41MjQ0NiAtMC4zMjkwNywtMS4yOTA1NyAtMC42OTkyNywtMy4wMTgxOGMtMC4wMTU0MiwtMC4wNjE3IC0wLjAyNTcxLC0wLjEyMzQgLTAuMDM1OTksLTAuMTg1MWwtMC43NjA5NywtNC4yNTIyYy0wLjAyNTcxLC0wLjA5MjU1IC0wLjA2MTcsLTAuMjAwNTMgLTAuMTAyODMsLTAuMzIzOTNjLTAuMzk1OTIsLTEuMTI2MDMgLTAuNTgxMDEsLTIuMDgyNCAtMC41ODEwMSwtMy4wMDc5MWMwLC0xLjE0NjYgMC4zMzQyMSwtMi44NzkzNiAxLjkxNzg2LC00LjYwNjk3YzAuNzk2OTcsLTAuODc0MDkgMi4yNDY5MywtMi4wMDUyNiA0LjU4MTI2LC0yLjM3MDMyYzAuMjg3OTQsLTAuMDQ2MjggMC41ODEwMSwtMC4wNzE5OSAwLjg3NDA5LC0wLjA3MTk5aDUuNjg2NzRjMC4xMjg1NCwwIDAuMjU3MDksMC4wMDUxNCAwLjM4NTYzLDAuMDE1NDJjMi4xNjk4MSwwLjA3NzEyIDQuMTEzMzcsMC4wNzE5OSA1Ljc3OTI4LC0wLjAwNTE0YzIuMzI5MTksLTAuMTAyODMgNC42NTMyNSwtMC4zMDMzNiA2LjkzMTAzLC0wLjU5NjQ0YzAuMjU3MDksLTAuMDgyMjcgMC41MzQ3NCwtMC4xNjQ1MyAwLjgzMjk2LC0wLjIzNjUyYzAuMjgyOCwtMC4wNzE5OSAwLjU3MDczLC0wLjExODI1IDAuODU4NjcsLTAuMTQ5MTFjMi4xOTAzNywtMC4yMDA1MyA0LjIzMTYzLDAuNDMxOTEgNS44MjA0MSwxLjc4OTMyYzEuOTY5MjcsMS42OTE2MiAyLjgzODIzLDQuMjUyMiAyLjMxODkxLDYuODUzOXoiIGZpbGw9IiNiZjhiMTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PHBhdGggZD0iTTI1Mi41Mzg4NywxODIuMjIzNjFjLTAuMjEwODEsMC44NDQ3OSAtMC4zOTE4LDEuOTg5ODQgLTAuNTQyNDUsMy40MzcyNGMtMC4wNjExOSwwLjcyMzk1IC0wLjAzMTM3LDEuMzExNjUgMC4wOTA0OSwxLjc2NDEyYzAuMjA5NzgsMC43NTQyOSAwLjE5NTksMS4yNTIwMSAtMC4wNDUyNSwxLjQ5MjY0Yy0wLjMzMjE2LDAuMzAxMyAtMC43ODQxMSwwLjQ1MTk2IC0xLjM1Njg5LDAuNDUxOTZjLTAuNjYzNzksMCAtMS4xMDE4NywtMC4xOTY5MyAtMS4zMTE2NSwtMC41OTE4MWMtMC4wMzEzNywtMS4yMTQ0NyAtMC4wMTU5NCwtMi4zNTM4NyAwLjA0NTI1LC0zLjQxNzE4YzAuMDU5MTMsLTEuMzA1OTkgMC4wOTA0OSwtMS45ODkzMyAwLjA5MDQ5LC0yLjA1Yy0wLjAzMTM3LDAgLTAuMDc2MSwtMC4wMzAzMyAtMC4xMzU3NCwtMC4wOTE1MmMtMi44MDQ4LDAuMTIxODYgLTUuNDQzMDEsMC4zMDI4NCAtNy45MTUxNSwwLjU0NDVjLTAuMDYwNjcsMC4zMDI4NCAtMC4wNjA2NywwLjc4NTY2IDAsMS40NDk5NmMwLjExOTgxLDAuOTM2ODIgMC4xODA5OCwxLjQ4MDgxIDAuMTgwOTgsMS42MzA5NWMtMC4xMjAzMiwwLjkzNjgyIC0wLjE4MDk4LDIuMzI2MTEgLTAuMTgwOTgsNC4xNjk0MWMwLjExOTgxLDAuNzg1NjYgMC4xODA5OCw0LjE1NDUgMC4xODA5OCwxMC4xMDYwM3YzLjMwODdjMCwwLjUxMzY2IDAuMDc0NTYsMC44NzYxNSAwLjIyNDE4LDEuMDg3NDdoMi43NzcwNGMwLjUwNzQ5LC0wLjA2MDE2IDAuOTE3NzksMC4wNjA2NyAxLjIzMTk2LDAuMzYxOThjMC4zMTMxMywwLjMwMTgyIDAuNDY5OTYsMC42NjMyOCAwLjQ2OTk2LDEuMDg0OWMwLDAuNjYyNzcgLTAuMzE2MjEsMS4xMzA2NiAtMC45NDk2NywxLjQwMjY2Yy0wLjM5MjMxLDAuMTUwMTQgLTEuMDg1NDIsMC4xODA5OCAtMi4wODAzMywwLjA5MDQ5Yy0wLjQ4MjMsLTAuMDMwODYgLTEuMTkxMzMsLTAuMDMwODYgLTIuMTI2MSwwYy0wLjg0NDI2LDAuMTA0ODkgLTIuMjAwNjUsMC4yMTAzIC00LjA3MDE3LDAuMzE2MjFjLTEuNjI4MzgsMC4wNjAxNiAtMi42MjMzLC0wLjE2NjA3IC0yLjk4NTI4LC0wLjY3ODE5Yy0wLjI0MTY2LC0wLjM2MTQ2IC0wLjI0MTY2LC0wLjczODg2IDAsLTEuMTMwNjZjMC40MjE2MiwtMC42NjI3NyAxLjUyMjQ2LC0wLjk5NDkzIDMuMzAyMDEsLTAuOTk0OTNjMC42MzI5NSwwIDEuMDI0MjMsLTAuMDUyNDQgMS4xNzU0LC0wLjE1Nzg0YzAuMTUwNjUsLTAuMTA1NCAwLjIyNjIzLC0wLjMwOTAyIDAuMjI2MjMsLTAuNjEwMzJjMCwtMC4yNzA0NiAwLC0wLjUyNiAwLC0wLjc2NzE0YzAsLTAuNDUwOTMgMCwtMS4xMTMxOCAwLC0xLjk4NTczYzAuMDkwNDksLTEuNTMzNzggMC4wOTA0OSwtMy44MjEzMSAwLC02Ljg2MDU4Yy0wLjEyMDgzLC00LjM2Mjc0IC0wLjA2MDY3LC04LjE5ODQ1IDAuMTgwOTgsLTExLjUwODY5Yy0wLjAzMDMzLC0wLjAyOTgyIC0wLjA3NTU4LC0wLjA3NTA3IC0wLjEzNjc3LC0wLjEzNTc0Yy0xLjA5MTU4LDAuMDYwNjcgLTIuODUwMDUsMC4wMzAzMyAtNS4yNzU0LC0wLjA5MTAxYy0wLjI3MzAzLDAgLTEuMTk4NTMsMC4wNjExOSAtMi43NzQ0NywwLjE4MTUxYzAuMzkxOCwyLjc0NDEzIDAuNjMyOTUsNC44MDk1NSAwLjcyMzQ0LDYuMTk2MjdjMCwwLjE4MDk4IC0wLjAzMDMzLDAuNTg4MjEgLTAuMDkwNDksMS4yMjExNmMtMC4wMzAzMywwLjQ1MTk2IC0wLjQwNzIzLDAuNjc4MTkgLTEuMTMwNjYsMC42NzgxOWMtMC4zOTIzMSwwIC0wLjYxODAzLC0wLjEzNDcyIC0wLjY3ODE5LC0wLjQwMzYyYy0wLjAzMDMzLC0wLjA1OTEzIC0wLjIxMTMzLC0wLjg2NzQgLTAuNTQyOTYsLTIuNDIyMjZjLTAuMTgwOTgsLTEuMDE2NTEgLTAuNDM3NTYsLTIuNDUyMDggLTAuNzY4NjgsLTQuMzA2MThjMCwtMC4xMTgyNSAtMC4xMDU5MSwtMC40OTIwNiAtMC4zMTYyMSwtMS4xMjA5Yy0wLjE3OTk3LC0wLjUwODUyIC0wLjI2OTkzLC0wLjg5NzIzIC0wLjI2OTkzLC0xLjE2NjE0YzAsLTAuMjA4NzYgMC4xNDI0MiwtMC40NzE1IDAuNDI5ODQsLTAuNzg0NjNjMC4yODYzOSwtMC4zMTM2NCAwLjcxNjI0LC0wLjUxNjIzIDEuMjg5MDMsLTAuNjA2MmMwLjA5MDQ5LDAgMC4yMzI5MiwwIDAuNDI5ODQsMGMwLjE5NTM5LDAgMC4zNTM3NSwwIDAuNDc0NTgsMGMzLjU4ODQsMCA1LjE1NjExLDAgNC43MDM2NCwwYzIuNDQyMzEsMC4wOTEwMSA0LjYxMzE1LDAuMDkxMDEgNi41MTI1LDBjMi43MTMyOCwtMC4xMTk4MSA1LjM5NjIyLC0wLjM2MTQ2IDguMDUwMzgsLTAuNzIzNDRjMC4xODA5OCwtMC4wOTA0OSAwLjQ1MTk2LC0wLjE4MDk4IDAuODEzNDIsLTAuMjcwOTdjMC42NjM3OSwtMC4wNjAxNiAxLjIwNjI0LDAuMDkwNDkgMS42Mjg4OSwwLjQ1MjQ3YzAuNDIxNjIsMC4zNjA5NSAwLjU3MjI3LDAuODQzNzUgMC40NTE5NiwxLjQ0Njg4eiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiLz48L2c+PC9nPjwvc3ZnPg==";

  let selectorOptions = {
    border: "#888", text: "#000000", outer: "#ffffff",
    sizeFont: 1.5, borderRadius: 16, borderType: "dashed",
    font: "inherit", shadow: 0.5, image: "", imageScale: 100,
    textV: "Select or drop file", fontWeight: 40, letterSpacing: "normal"
  };
  const builtInFonts = [
    "Sans Serif", "Serif", "Handwriting",
    "Marker", "Curly", "Pixel", "inherit"
  ];

  const MODE_MODAL = "modal";
  const MODE_IMMEDIATELY_SHOW_SELECTOR = "selector";
  const MODE_ONLY_SELECTOR = "only-selector";
  const ALL_MODES = [
    MODE_MODAL, MODE_IMMEDIATELY_SHOW_SELECTOR,
    MODE_ONLY_SELECTOR
  ];
  let openFileSelectorMode = MODE_MODAL;

  let FileName = "";
  let FileSize = "0kb";
  let RawFileSize = "0";
  let fileDate = "";
  let enableVis = true;
  let lastData = "";
  let openModals = 0;

  const AS_TEXT = "text";
  const AS_DATA_URL = "url";
  const AS_HEX = "hex";
  const AS_BASE64 = "base64";

  /**
   * @param {HTMLInputElement} input
   * @returns {boolean}
   */
  const isCancelEventSupported = (input) => {
    // Chrome 113+, Safari 16.4+
    if ("oncancel" in input) return true;
    // Firefox is weird. cancel is supported since Firefox 91, but oncancel doesn't exist.
    // Firefox 91 is from August 2021. That's old enough to not care about previous versions.
    return navigator.userAgent.includes("Firefox");
  };

  /**
   * @param {string} accepts base64
   * @param {string} the delimeter for the hex string
   * @returns {string} the base64 representation in hex
   */
  function base64ToHex(str, delim) {
    const raw = atob(str);
    let result = "";
    for (let i = 0; i < raw.length; i++) {
      const hex = raw.charCodeAt(i).toString(16);
      result += delim.toString()+(hex.length === 2 ? hex : "0" + hex);
    }
    return result.toUpperCase();
  }

  /**
   * @param {string} accept See MODE_ constants above
   * @param {string} as See AS_ constants above
   * @returns {Promise<string>} format given by as parameter
   */
  const showFilePrompt = (accept, as) =>
    new Promise((_resolve) => {
      // We can't reliably show an <input> picker without "user interaction" in all environments,
      // so we have to show our own UI anyways. We may as well use this to implement some nice features
      // that native file pickers don't have:
      //  - Easy drag+drop
      //  - Reliable cancel button (input cancel event is still not perfect)
      //    This is important so we can make this just a reporter instead of a command+hat block.
      //    Without an interface, the script would be stalled if the prompt was cancelled.
      /** @param {string} text */
      openModals++;
      const callback = (text) => {
        openModals--;
        _resolve(text);
        Scratch.vm.renderer.removeOverlay(outer);
        Scratch.vm.runtime.off("PROJECT_STOP_ALL", handleProjectStopped);
        document.body.removeEventListener("keydown", handleKeyDown);
      };
      let isReadingFile = false;

      /** @param {File} file */
      const readFile = (file) => {
        if (isReadingFile) return;
        isReadingFile = true;
        const reader = new FileReader();
        reader.onload = () => {
          FileName = file.name;
          FileSize = formatFileSize(file.size);
          RawFileSize = file.size;
          const rawDate = new Date(file.lastModified);
          fileDate = rawDate.toLocaleString();
          let result; // More Supported Stuff
          if ([AS_HEX, AS_BASE64].includes(as/* binary support later */)) {
            /* Getting the base64 (used for the hex also) */
            let uri = reader.result.split(",");
            result = uri.splice(1, uri.length).join(",");
            switch(as) {
              case AS_HEX: result = base64ToHex(result, " ");
              default: result; // base64; update this when its out dated
            }
          } else result = reader.result;
          lastData = result;
          callback(/** @type {string} */ (result));
        };
        reader.onerror = () => {
          console.error("Failed to read file as text", reader.error);
          callback("");
        };
        switch(as) {
          case AS_TEXT: reader.readAsText(file);
          case AS_DATA_URL: reader.readAsDataURL(file);
          default: reader.readAsDataURL(file);
        }
      };
      const formatFileSize = (size) => {
        const units = ["B", "KB", "MB", "GB", "TB"];
        let i = 0;
        while (size >= 1024 && i < units.length - 1) {
          size /= 1024;
          i++;
        }
        return `${size.toFixed(2)} ${units[i]}`;
      };
      /** @param {KeyboardEvent} e */
      const handleKeyDown = (e) => {
        if (e.key === "Escape") {
          e.stopPropagation();
          e.preventDefault();
          callback("");
        }
      };
      document.body.addEventListener("keydown", handleKeyDown, { capture: true });
      const handleProjectStopped = () => { callback("") };
      Scratch.vm.runtime.on("PROJECT_STOP_ALL", handleProjectStopped);

      const INITIAL_BORDER_COLOR = selectorOptions.border;
      const DROPPING_BORDER_COLOR = "#03a9fc";
      const outer = document.createElement("div");
      outer.style.pointerEvents = "auto";
      outer.style.width = "100%";
      outer.style.height = "100%";
      outer.style.display = "flex";
      outer.style.alignItems = "center";
      outer.style.justifyContent = "center";
      outer.style.background = `rgba(0, 0, 0, ${selectorOptions.shadow})`;
      outer.style.color = selectorOptions.text;
      outer.style.colorScheme = "light";
      outer.addEventListener("dragover", (e) => {
        if (e.dataTransfer.types.includes("Files")) {
          e.preventDefault();
          e.dataTransfer.dropEffect = "copy";
          modal.style.borderColor = DROPPING_BORDER_COLOR;
        }
      });
      outer.addEventListener("dragleave", () => { modal.style.borderColor = INITIAL_BORDER_COLOR });
      outer.addEventListener("drop", (e) => {
        const file = e.dataTransfer.files[0];
        if (file) {
          e.preventDefault();
          readFile(file);
        }
      });
      outer.addEventListener("click", (e) => { if (e.target === outer) callback("") });

      const modal = document.createElement("button");
      modal.style.boxShadow = "0 0 10px -5px currentColor";
      modal.style.cursor = "pointer";
      modal.style.font = selectorOptions.font;
      modal.style.fontFamily = selectorOptions.font;
      modal.style.background = selectorOptions.image ? selectorOptions.image : selectorOptions.outer;
      modal.style.backgroundSize = selectorOptions.imageScale + "%";
      modal.style.padding = "16px";
      modal.style.borderRadius = `${selectorOptions.borderRadius}px`;
      modal.style.border = `8px ${selectorOptions.borderType} ${INITIAL_BORDER_COLOR}`;
      modal.style.position = "relative";
      modal.style.textAlign = "center";
      modal.addEventListener("click", () => { input.click() });
      modal.focus();
      outer.appendChild(modal);

      const input = document.createElement("input");
      input.type = "file";
      input.accept = accept;
      input.addEventListener("change", (e) => {
        // @ts-expect-error
        const file = e.target.files[0];
        if (file) readFile(file);
      });

      const title = document.createElement("div");
      title.textContent = selectorOptions.textV;
      title.style.color = selectorOptions.text;
      title.style.fontSize = `${selectorOptions.sizeFont}em`;
      title.style.fontWeight =  selectorOptions.fontWeight * 9;
      title.style.letterSpacing = `${selectorOptions.letterSpacing}px`;
      title.style.marginBottom = "8px";
      modal.appendChild(title);

      const subtitle = document.createElement("div");
      const formattedAccept = accept || "any";
      subtitle.textContent = `Accepted Formats: ${formattedAccept}`;
      subtitle.style.fontSize = `${selectorOptions.sizeFont - 0.5}em`;
      subtitle.style.color = selectorOptions.text;
      subtitle.style.fontWeight =  selectorOptions.fontWeight * 9;
      subtitle.style.letterSpacing = `${selectorOptions.letterSpacing}px`;
      modal.appendChild(subtitle);

      // To avoid the script getting stalled forever, if cancel isn't supported, we'll just forcibly
      // show our modal.
      if (openFileSelectorMode === MODE_ONLY_SELECTOR && !isCancelEventSupported(input)) {
        openFileSelectorMode = MODE_IMMEDIATELY_SHOW_SELECTOR;
      }
      if (openFileSelectorMode !== MODE_ONLY_SELECTOR) {
        const overlay = Scratch.vm.renderer.addOverlay(outer, "scale");
        overlay.container.style.zIndex = "100";
      }
      if (
        openFileSelectorMode === MODE_IMMEDIATELY_SHOW_SELECTOR ||
        openFileSelectorMode === MODE_ONLY_SELECTOR
      ) {
        input.click();
      }
      if (openFileSelectorMode === MODE_ONLY_SELECTOR) {
        // Note that browser support for cancel is currently quite bad
        input.addEventListener("cancel", () => { callback("") });
      }
    });

  /**
   * @param {string} url a data:, blob:, or same-origin URL
   * @param {string} file
   */
  const downloadURL = (url, file) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = file;
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  /**
   * @param {Blob} blob Data to download
   * @param {string} file Name of the file
   */
  const downloadBlob = (blob, file) => {
    const url = URL.createObjectURL(blob);
    downloadURL(url, file);
    (requestIdleCallback ?? setTimeout)(() => URL.revokeObjectURL(url));
  };

  /**
   * @param {string} url
   * @returns {boolean}
   */
  const isDataURL = (url) => {
    try {
      const parsed = new URL(url);
      return parsed.protocol === "data:";
    } catch (e) { return false }
  };

  /**
   * @param {string} url
   * @param {string} file
   */
  const downloadUntrustedURL = (url, file) => {
    // Don't want to return a Promise here when not actually needed
    if (isDataURL(url)) downloadURL(url, file);
    else {
      return Scratch.fetch(url)
        .then((res) => res.blob())
        .then((blob) => {
          downloadBlob(blob, file);
        });
    }
  };

  class filesExpanded {
    getInfo() {
      return {
        id: "filesExpanded",
        name: "Files Expanded",
        menuIconURI,
        color1: "#fcb103",
        color2: "#db9a37",
        color3: "#db8937",
        blocks: [
          { blockType: Scratch.BlockType.LABEL, text: "Uploading" },
          {
            opcode: "showPicker",
            blockType: Scratch.BlockType.REPORTER,
            text: "open a file", hideFromPalette: true
          },
          {
            opcode: "showPickerExtensions",
            blockType: Scratch.BlockType.REPORTER,
            text: "open a [extension] file", hideFromPalette: true,
            arguments: {
              extension: { type: Scratch.ArgumentType.STRING, defaultValue: ".txt" }
            }
          },
          // Builder Functions ^
          {
            opcode: "showPickerAs",
            blockType: Scratch.BlockType.REPORTER,
            text: "open a file as [as]",
            arguments: {
              as: {
                type: Scratch.ArgumentType.STRING,
                menu: "encoding"
              }
            }
          },
          {
            opcode: "showPickerExtensionsAs",
            blockType: Scratch.BlockType.REPORTER,
            text: "open a [extension] file as [as]",
            arguments: {
              extension: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: ".txt"
              },
              as: {
                type: Scratch.ArgumentType.STRING,
                menu: "encoding"
              }
            }
          },
          "---",
          {
            opcode: "fileInfo",
            blockType: Scratch.BlockType.REPORTER,
            text: "last opened file [FORMAT]",
            arguments: {
              FORMAT: {
                type: Scratch.ArgumentType.STRING,
                menu: "FILE_INFO"
              }
            }
          },
          {
            opcode: "modalOpen",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "is modal open?"
          },
          { blockType: Scratch.BlockType.LABEL, text: "Downloading" },
          {
            opcode: "download",
            blockType: Scratch.BlockType.COMMAND,
            text: "download [text] as [file]",
            arguments: {
              text: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "Hello, world!"
              },
              file: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "save.txt"
              }
            }
          },
          {
            opcode: "downloadURL",
            blockType: Scratch.BlockType.COMMAND,
            text: "download URL [url] as [file]",
            arguments: {
              url: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "data:text/plain;base64,SGVsbG8sIHdvcmxkIQ=="
              },
              file: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "save.txt"
              }
            }
          },
          "---",
          {
            opcode: "setOpenMode",
            blockType: Scratch.BlockType.COMMAND,
            text: "set open file selector mode to [mode]",
            arguments: {
              mode: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: MODE_MODAL,
                menu: "automaticallyOpen"
              }
            }
          },
          { blockType: Scratch.BlockType.LABEL, text: "Visuals" },
          {
            func: "toggleVis",
            blockType: Scratch.BlockType.BUTTON,
            text: `${enableVis ? "En" : "Dis"}able Customization`,
          },
          {
            opcode: "resetStyle",
            blockType: Scratch.BlockType.COMMAND,
            text: "reset selector style to default",
            hideFromPalette: enableVis
          },
          "---",
          {
            opcode: "imageSet",
            blockType: Scratch.BlockType.COMMAND,
            text: "set selector image to [IMG]",
            hideFromPalette: enableVis,
            arguments: {
              IMG: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "https://extensions.turbowarp.org/dango.png"
              }
            }
          },
          {
            opcode: "scaleImage",
            blockType: Scratch.BlockType.COMMAND,
            text: "scale selector image to [SCALE]%",
            hideFromPalette: enableVis,
            arguments: {
              SCALE: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 100
              }
            }
          },
          "---",
          {
            opcode: "borderColors",
            blockType: Scratch.BlockType.COMMAND,
            text: "set selector [OPTION] color to [COLOR]",
            hideFromPalette: enableVis,
            arguments: {
              OPTION: {
                type: Scratch.ArgumentType.STRING,
                menu: "visualColors"
              },
              COLOR: {
                type: Scratch.ArgumentType.COLOR,
                defaultValue: "#ff0000"
              }
            }
          },
          {
            opcode: "visualsSelect",
            blockType: Scratch.BlockType.COMMAND,
            text: "set selector [OPTION] to [AMT]",
            hideFromPalette: enableVis,
            arguments: {
              OPTION: {
                type: Scratch.ArgumentType.STRING,
                menu: "visualOptions"
              },
              AMT: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 15
              }
            }
          },
          {
            opcode: "borderTypeSet",
            blockType: Scratch.BlockType.COMMAND,
            text: "set selector border type to [TYPE]",
            hideFromPalette: enableVis,
            arguments: {
              TYPE: {
                type: Scratch.ArgumentType.STRING,
                menu: "borderTypes"
              }
            }
          },
          {
            opcode: "fontSet",
            blockType: Scratch.BlockType.COMMAND,
            text: "set selector font to [FONT]",
            hideFromPalette: enableVis,
            arguments: {
              FONT: {
                type: Scratch.ArgumentType.STRING,
                menu: "font"
              }
            }
          },
          {
            opcode: "textSet",
            blockType: Scratch.BlockType.COMMAND,
            text: "set file selector text to [TEXT]",
            hideFromPalette: enableVis,
            arguments: {
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "Insert File Here"
              }
            }
          },
          {
            opcode: "currentX",
            blockType: Scratch.BlockType.REPORTER,
            text: "current selector [THING]",
            hideFromPalette: enableVis,
            arguments: {
              THING: {
                type: Scratch.ArgumentType.STRING,
                menu: "all"
              }
            }
          },
        ],
        menus: {
          encoding: {
            acceptReporters: true,
            items: [/* ctrl f point: selector values*/
              { text: "text", value: AS_TEXT },
              { text: "data: URL", value: AS_DATA_URL },
              { text: "base64", value: AS_BASE64 },
              { text: "hex", value: AS_HEX }
            ],
          },
          automaticallyOpen: {
            acceptReporters: true,
            items: [
              { text: "show modal", value: MODE_MODAL },
              { text: "open selector immediately", value: MODE_IMMEDIATELY_SHOW_SELECTOR },
              {
                // Will not work if the browser doesn't think we are responding to a click event.
                text: "only show selector (unreliable)", value: MODE_ONLY_SELECTOR
              }
            ],
          },
          font: { acceptReporters: true, items: "getFonts" },
          all: {
            acceptReporters: true,
            items: [
              { text: "border color", value: "border" },
              { text: "text color", value: "text" },
              { text: "background color", value: "outer" },
              { text: "shadow intensity", value: "shadow" },
              { text: "font", value: "font" },
              { text: "font size", value: "sizeFont" },
              { text: "font thickness", value: "fontWeight" },
              { text: "letter spacing", value: "letterSpacing" },
              { text: "border radius", value: "borderRadius" },
              { text: "border type", value: "borderType" },
              { text: "background image", value: "image" },
              { text: "text", value: "textV" }
            ],
          },
          FILE_INFO: {
            acceptReporters: true,
            items: ["data", "name", "modified date", "size formatted", "size unformatted"],
          },
          visualColors: {
            acceptReporters: true,
            items: ["border", "text", "background"],
          },
          visualOptions: {
            acceptReporters: true,
            items: ["font size", "font thickness", "letter spacing", "border radius", "shadow intensity"],
          },
          borderTypes: {
            acceptReporters: true,
            items: [
              "dotted", "dashed", "solid", "double", 
              "groove", "ridge", "inset", "outset", "none"
            ],
          },
        },
      };
    }

    getFonts() {
      const customFonts = Scratch.vm.runtime.fontManager
        ? Scratch.vm.runtime.fontManager.getFonts().map((i) => ({
            text: i.name, value: i.family
          }))
        : [];
      return [ ...builtInFonts, ...customFonts ];
    }

    toggleVis() { enableVis = enableVis ? false : true, Scratch.vm.extensionManager.refreshBlocks() }

    showPicker() { return showFilePrompt("", AS_TEXT) }

    showPickerExtensions(args) { return showFilePrompt(args.extension, AS_TEXT) }

    showPickerAs(args) { return showFilePrompt("", args.as) }

    showPickerExtensionsAs(args) { return showFilePrompt(args.extension, args.as) }

    download(args) {
      downloadBlob(
        new Blob([Scratch.Cast.toString(args.text)]),
        Scratch.Cast.toString(args.file)
      );
    }

    downloadURL(args) {
      return downloadUntrustedURL(
        Scratch.Cast.toString(args.url),
        Scratch.Cast.toString(args.file)
      );
    }

    setOpenMode(args) {
      if (ALL_MODES.includes(args.mode)) {
        openFileSelectorMode = args.mode;
      } else { console.warn(`unknown mode`, args.mode) }
    }

    fileInfo(args) {
      if (args.FORMAT === "size formatted") return FileSize;
      else if (args.FORMAT === "size unformatted") return RawFileSize;
      else if (args.FORMAT === "modified date") return fileDate;
      else if (args.FORMAT === "data") return lastData;
      return FileName
    }

    modalOpen() { return openModals !== 0 }

    resetStyle() {
      selectorOptions = {
        border: "#888", text: "#000000", outer: "#ffffff",
        sizeFont: 1.5, borderRadius: 16, borderType: "dashed",
        font: "inherit", shadow: 0.5, image: "", imageScale: 100,
        textV: "Select or drop file", fontWeight: 40, letterSpacing: "normal"
      };
    }

    borderColors(args) {
      switch (args.OPTION) {
        case "text":
          selectorOptions.text = args.COLOR;
          break;
        case "background":
          selectorOptions.outer = args.COLOR;
          selectorOptions.image = "";
          break;
        default: selectorOptions.border = args.COLOR;
      }
    }

    visualsSelect(args) {
      switch (args.OPTION) {
        case "font size": { selectorOptions.sizeFont = args.AMT / 10; break }
        case "font thickness": { selectorOptions.fontWeight = args.AMT; break }
        case "letter spacing": { selectorOptions.letterSpacing = args.AMT; break }
        case "border radius": { selectorOptions.borderRadius = args.AMT; break }
        case "shadow intensity": { selectorOptions.shadow = args.AMT / 100; break }
        default: selectorOptions.border = args.AMT;
      }
    }

    borderTypeSet(args) { selectorOptions.borderType = args.TYPE }

    fontSet(args) { selectorOptions.font = args.FONT }

    currentX(args) {
      if (args.THING === "shadow" || args.THING === "sizeFont") {
        const multiplier = args.THING === "shadow" ? 100 : 10;
        return selectorOptions[args.THING] * multiplier;
      }
      return selectorOptions[args.THING];
    }

    imageSet(args) {
      Scratch.canFetch(encodeURI(args.IMG))
        .then(canFetch => {
          if (canFetch) {
            selectorOptions.image = `url(${encodeURI(args.IMG)})`;
          } else { console.log("Cannot fetch content from the URL.") }
        });
    }

    scaleImage(args) { selectorOptions.imageScale = args.SCALE }

    textSet(args) { selectorOptions.textV = args.TEXT }
  }

  Scratch.extensions.register(new filesExpanded());
})(Scratch);
