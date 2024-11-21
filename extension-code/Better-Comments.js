// Name: Better Comments
// ID: SPcomments
// Description: Better Comments with More Customization
// By: SharkPool
// License: MIT

// Version V.2.0.1

(function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) throw new Error("Better Comments Addon must run unsandboxed!");

  const menuIconURI =
"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5MC4yOTUiIGhlaWdodD0iOTAuMjk1IiB2aWV3Qm94PSIwIDAgOTAuMjk1IDkwLjI5NSI+PHBhdGggZD0iTTIgNDUuMTQ4QzIgMjEuMzE4IDIxLjMxOCAyIDQ1LjE0OCAyczQzLjE0OCAxOS4zMTggNDMuMTQ4IDQzLjE0OC0xOS4zMTggNDMuMTQ4LTQzLjE0OCA0My4xNDhTMiA2OC45NzggMiA0NS4xNDh6IiBmaWxsPSIjOWI5MjVkIiBzdHJva2U9IiM1ZDU4MzgiIHN0cm9rZS13aWR0aD0iNCIvPjxwYXRoIGQ9Ik0xOS4zMSA2NC45ODV2LTM5YzAtMy4xNDIgMy4xNjctNi41IDYuMTc1LTYuNWgzOS42NWMzLjU2NSAwIDUuODUxIDMuMzU4IDUuODUxIDYuNXYzOWMwIDMuNzQ5LTIuOTc3IDYuMTc1LTUuODUgNi4xNzVIMjUuMTZjLTMuNTYyIDAtNS44NS0yLjQyNi01Ljg1LTYuMTc1eiIgZmlsbD0ibm9uZSIgc3Ryb2tlLW9wYWNpdHk9Ii41IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iNCIvPjxwYXRoIGQ9Ik0xOS4zMSA2NC45ODV2LTM5YzAtMy4xNDIgMy4xNjctNi41IDYuMTc1LTYuNWgzOS42NWMzLjU2NSAwIDUuODUxIDMuMzU4IDUuODUxIDYuNXYzOWMwIDMuNzQ5LTIuOTc3IDYuMTc1LTUuODUgNi4xNzVIMjUuMTZjLTMuNTYyIDAtNS44NS0yLjQyNi01Ljg1LTYuMTc1IiBmaWxsPSIjZmZmMDk5Ii8+PHBhdGggZD0iTTE5LjMxIDMyLjIyOHYtNi4yNDRjMC0zLjE0MSAzLjE2Ny02LjUgNi4xNzUtNi41aDM5LjY1YzMuNTY1IDAgNS44NTEgMy4zNTkgNS44NTEgNi41djYuMjQ0eiIgZmlsbD0iI2NjYmY3YSIvPjxwYXRoIGQ9Ik0xOS4yNDQgMzIuMTcxaDUxLjgzM3oiIGZpbGw9Im5vbmUiIHN0cm9rZS1vcGFjaXR5PSIuNSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjIiLz48ZyBmaWxsPSJub25lIiBzdHJva2Utb3BhY2l0eT0iLjUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIxMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTk0Ljg1MiAtMTM0Ljg1MikiLz48cGF0aCBkPSJNNDEuODQ4IDU5LjU0OHYtNC41aC00LjVjLTIuMjEgMC00LTEuNDc3LTQtMy4zczEuNzktMy4zIDQtMy4zaDQuNXYtNC41YzAtMi4yMSAxLjQ3Ny00IDMuMy00czMuMyAxLjc5IDMuMyA0djQuNWg0LjVjMi4yMSAwIDQgMS40NzcgNCAzLjNzLTEuNzkgMy4zLTQgMy4zaC00LjV2NC41YzAgMi4yMS0xLjQ3NyA0LTMuMyA0cy0zLjMtMS43OS0zLjMtNHoiIGZpbGw9Im5vbmUiIHN0cm9rZS1vcGFjaXR5PSIuNTAyIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iNSIvPjxwYXRoIGQ9Ik00MS44NDggNTkuNTQ4di00LjVoLTQuNWMtMi4yMSAwLTQtMS40NzctNC0zLjNzMS43OS0zLjMgNC0zLjNoNC41di00LjVjMC0yLjIxIDEuNDc3LTQgMy4zLTRzMy4zIDEuNzkgMy4zIDR2NC41aDQuNWMyLjIxIDAgNCAxLjQ3NyA0IDMuM3MtMS43OSAzLjMtNCAzLjNoLTQuNXY0LjVjMCAyLjIxLTEuNDc3IDQtMy4zIDRzLTMuMy0xLjc5LTMuMy00IiBmaWxsPSIjZmZmIi8+PC9zdmc+";

  const colorIcon = 
"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAyMCIgaGVpZ2h0PSIyMCIgd2lkdGg9IjIwIj48cGF0aCBkPSJtMTQuMDQ1IDkuNjkzLS4wMTQtLjAxNGMtLjU5MS0uMzE1LTEuNTE0LS45ODktMi42MS0yLjA3OGExMyAxMyAwIDAgMS0uODc5LS45NDZsLjUyLS42NDVjLjMxNi4yNTguNjYyLjU3MyAxLjAyMy45MzIuMjMuMjI5LjQxOC40My42MDUuNjNhLjYuNiAwIDAgMCAuMTMuMTNjLjgwNy45MTcgMS4yODMgMS42NjIgMS40OTkgMi4wOTIgMCAuMDE0LjAxNC4wMjguMDE0LjA0My0uMDg2LS4wNDMtLjE4Ny0uMDg2LS4yODgtLjE0NG0tMy40NDUuMzczYy0uODY1LjQ3My0xLjY4Ny45MTctMi45ODQuNjE2LTEuNDQyLS4zMy0yLjEzMy0uOTE3LTIuNDIyLTEuMjZsMy4xMTQtNC4wMTRjLjIxNi40My41MzMuODc0Ljg2NSAxLjI5LS4zNDYuNTE2LS42Mi45NDYtLjc1IDEuMTQ3YS41NC41NCAwIDAgMCAuMTg4LjczLjUuNSAwIDAgMCAuMjczLjA4N2MuMTg4IDAgLjM2LS4xLjQ2Mi0uMjU4LjE1OC0uMjczLjM0Ni0uNTYuNTQ4LS44NDYuMzAyLjM0NC41NzYuNjE2Ljc2NC44MDMuNDE4LjQxNS44MzYuNzg4IDEuMjQgMS4xMTgtLjQ3Ni4xMjgtLjg5NC4zNzItMS4yOTguNTg3bS0uMzktNC43M2MtLjExNS4xNTgtLjI0NC4zMTYtLjM2LjQ1OS0uMzQ2LS40NTktLjU2Mi0uODMxLS42NzctMS4wOS4yNDUuMTAxLjU5LjMxNiAxLjAzOC42MzFtMy4zLTEuMjYxYy4xNiAwIC4zMzIuMDI5LjM2MS4xLjE3My4zMTYtLjI0NSAxLjMxOS0uODA3IDIuMjIybC0uMjE2LS4yMTVjLS4yMzEtLjIzLS42Mi0uNTg4LTEuMDY3LS45NzUuNjYzLS42NzMgMS4yNjgtMS4xMzIgMS43My0xLjEzMm0zLjA0MSA4LjA4NGE0LjcgNC43IDAgMCAwLS45NjUtMS40OS44LjggMCAwIDAtLjE2LS4xNDRjLjI0Ni0uNTMtLjE1OC0xLjI5LS41MDQtMS44MzVhMTAuNiAxMC42IDAgMCAwLTEuMDk1LTEuNDQ3Yy41NjItLjg2IDEuNTI4LTIuNTY2IDEuMDA5LTMuNTctLjE1OS0uMy0uNTE5LS42NzMtMS4zMjYtLjY3M2gtLjAxNWMtLjgyMSAwLTEuNzMuNjYtMi41NTEgMS41Mi0uOTIzLS42NzQtMS45MzItMS4yMDUtMi41MzctLjg2LS4wNTguMDI4LS4xMy4wNTctLjE3My4xMTQtLjAxNS4wMTQtLjA0My4wMjktLjA1OC4wNTdhLjIuMiAwIDAgMC0uMDQzLjA1OGwtLjAxNS4wMjhMNC4xMjggOS4wNWMtLjAxNSAwLS4wMTUgMC0uMDMuMDE0bC0uODkzIDEuMTYtLjA0My4wNDRhLjQuNCAwIDAgMC0uMDg3LjE0M3YuMDE0Yy0uNDQ3LjkxOCAxLjIxMSAyLjcxIDEuOTkgMy40OTguNjkxLjY4OCAyLjIyIDIuMDc4IDMuMTcgMi4wNzhhLjcuNyAwIDAgMCAuNTA1LS4xODZsNS41MjEtNC4yNTdjLjAzLS4wMTUuMDQ0LS4wNDMuMDcyLS4wNzIuMDMuMDI5LjA0NC4wNzIuMDU4LjEuMTczLjM0NC4yODguNzAzLjMwMyAxLjA5YTQuNiA0LjYgMCAwIDEtLjA0MyAxLjE3NXYuMDE0YTEuMyAxLjMgMCAwIDAgMCAuMzMgMS4xODEgMS4xODEgMCAwIDAgMi4zMzUtLjM1OGMtLjA4Ny0uNTYtLjIwMi0xLjEzMy0uNDMzLTEuNjc3IiBmaWxsPSIjNTc1RTc1IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=";
  const fontIcon =
"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMi4xNzQiIGhlaWdodD0iMzIuNjY2IiB2aWV3Qm94PSIwIDAgMzIuMTc0IDMyLjY2NiI+PHRleHQgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNC4xMjIgMTQuMjIpc2NhbGUoLjMyNjc4KSIgZm9udC1zaXplPSI0MCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgZmlsbD0iIzU3NWU3NSIgc3Ryb2tlPSIjNTc1ZTc1IiBzdHJva2Utd2lkdGg9IjEuNSIgZm9udC1mYW1pbHk9IlNhbnMgU2VyaWYiIGZvbnQtd2VpZ2h0PSI0MDAiPjx0c3BhbiB4PSIwIiBkeT0iMCI+QTwvdHNwYW4+PC90ZXh0Pjx0ZXh0IHRyYW5zZm9ybT0idHJhbnNsYXRlKDEzLjEyMiAyMC43MilzY2FsZSguMjgzNDgpIiBmb250LXNpemU9IjQ1IiB4bWw6c3BhY2U9InByZXNlcnZlIiBmaWxsPSIjNTc1ZTc1IiBzdHJva2U9IiM1NzVlNzUiIHN0cm9rZS13aWR0aD0iMS40IiBmb250LWZhbWlseT0iQ29taWMgU2FucyBNcyIgZm9udC13ZWlnaHQ9IjQwMCI+PHRzcGFuIHg9IjAiIGR5PSIwIj5CPC90c3Bhbj48L3RleHQ+PHRleHQgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTkuNjIyIDI3LjcyKXNjYWxlKC4zMjE4MykiIGZvbnQtc2l6ZT0iNDAiIHhtbDpzcGFjZT0icHJlc2VydmUiIGZpbGw9IiM1NzVlNzUiIHN0cm9rZT0iIzU3NWU3NSIgc3Ryb2tlLXdpZHRoPSIxLjUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC13ZWlnaHQ9IjQwMCI+PHRzcGFuIHg9IjAiIGR5PSIwIj5DPC90c3Bhbj48L3RleHQ+PHBhdGggZD0iTTAgMzIuNjY2Vi40OTJoMzIuMTc0djMyLjE3NHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4=";

  const vm = Scratch.vm;
  const runtime = vm.runtime;

  const isPM = Scratch.extensions.isPenguinMod;
  const markdownConsts = {
    "**": "b", "*/": "i", "~~": "s", "#1": "h1", "#2": "h2",
    "@c": `span style="color: ---"`, "@h": `span style="background-color: ---"`, "@f": `span style="font-family: ---"`,
    "<i": "img", "<a": "audio", "<v": "video",
  };
  let commentStore = {};

  // utils
  const xmlEscape = function (unsafe) {
    return Scratch.Cast.toString(unsafe).replace(/[&'"]/g, c => {
      switch (c) {
        case "&": return "&amp;";
        case "'": return "&apos;";
        case "\"": return "&quot;";
      }
    });
  };

  function txt2md(txt) {
    const mdCache = [];
    let md = "";
    txt = xmlEscape(Scratch.Cast.toString(txt));
    for (let i = 0; i < txt.length; i++) {
      const lett = txt[i];
      const code = `${lett}${txt[i + 1]}`;
      if (!markdownConsts[code]) md += lett === "<" ? "&lt;" : lett === ">" ? "&gt;" : lett;
      else {
        const form = markdownConsts[code];
        const cacheInd = mdCache.indexOf(form);
        if (cacheInd === -1) {
          if (code === "@c" || code === "@h" || code === "@f") {
            const testString = txt.substring(i + 2, txt.length);
            const ind = testString.indexOf(":");
            if (testString.indexOf(code) > -1 && ind) {
              const color = testString.substring(0, ind);
              md += `<${form.replace("---", color)}>`;
              mdCache.push(form);
              i += ind + 1;
            } else {
              md += code;
            }
          } else if (form === "img" || form === "audio" || form === "video") {
            const testString = txt.substring(i + 2, txt.length);
            const ind = testString.indexOf(`${form[0]}>`);
            if (ind === -1) md += `&lt;${form[0]}`;
            else {
              md += `<${form} width="auto" height="auto" ${form !== "img" ? "controls" : ""} crossorigin="Anonymous" src="${testString.substring(0, ind)}">`;
              if (form !== "img") md += `</${form}>`;
              i += ind + 2;
            }
          } else {
            md += `<${form}>`;
            mdCache.push(form);
          }
        } else {
          md += `</${form}>`;
          mdCache.splice(cacheInd, 1);
        }
        i++;
      }
    }
    if (mdCache.length > 0) {
      const mdConstVals = Object.entries(markdownConsts);
      for (let i = 0; i < mdCache.length; i++) {
        const oldForm = mdConstVals.find(([k, v]) => v === mdCache[i])?.[0];
        const item = `<${mdCache[i]}>`;
        const lastInd = md.lastIndexOf(item);
        md = md.substring(0, lastInd) + oldForm + md.substring(lastInd + item.length, md.length); 
      }
    }
    return md.replace(/\n/g, "<br>");
  }

  function colorDarken(hex, amt) {
    const rgb2Hex = ([r, g, b]) => {
      return ("#" + [r, g, b].map((part) => {
        const hex = part.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      }).join(""));
    };
    const hex2Rgb = (h) => {
      h = h.replace("#", "");
      if (h.length === 3) h = h.split("").map(char => char + char).join("");
      let bigint = parseInt(h, 16);
      return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
    };
    return rgb2Hex(hex2Rgb(hex).map((part) => Math.round(part * (1 - amt))));
  }

  function createInputLabel(id, labelText, includeMargins, optStyles) {
    const label = document.createElement("label");
    label.setAttribute("for", id);
    label.textContent = labelText;
    label.setAttribute("style", "display: block; font-weight: 700;" + (optStyles ?? ""));
    if (!includeMargins) {
      label.style.marginTop = "10px";
      label.style.marginBottom = "-15px";
    }
    return label;
  }

  function createInput(id, type, value, includePad, optStyles) {
    const input = document.createElement("input");
    input[type === "checkbox" ? "checked" : "value"] = value;
    input.setAttribute("type", type);
    input.setAttribute("id", id);
    input.setAttribute("name", id);
    input.setAttribute("style", "background: radial-gradient(#fff 50%, #b3b3b3); border: 2px solid white; width: 150px; text-align: center; border-radius: 8px; color: #000;" + (optStyles ?? ""));
    if (!includePad) input.style.padding = "2px";
    input[type === "checkbox" ? "checked" : "value"] = value;
    return input;
  }

  function createSelect(id, options, value) {
    const select = document.createElement("select");
    select.setAttribute("id", id);
    select.setAttribute("name", id);
    select.setAttribute("style", "background: radial-gradient(#fff 50%, #b3b3b3); border: 2px solid white; padding: 2px; width: 150px; text-align: center; border-radius: 8px; color: #000;");
    options.forEach(optionText => {
      const option = document.createElement("option");
      option.setAttribute("value", optionText);
      option.textContent = optionText.charAt(0).toUpperCase() + optionText.slice(1);
      select.appendChild(option);
    });
    select.value = value;
    return select;
  }

  function createButton(id, buttonText) {
    const button = document.createElement("button");
    button.setAttribute("id", id);
    button.setAttribute("style", "font-size: 18px; margin-bottom: 15px; border: none; padding: 10px 15px; background-color: #4f4f4f; text-align: center; border-radius: 10px; font-weight: 700; color: #fff;");
    button.textContent = buttonText;
    return button;
  }

  // Modals
  function createModal(type, data) {
    return new Promise((resolve) => {
      const modal = document.createElement("div");
      modal.classList.add("SPcommentModal");
      modal.setAttribute("style", "width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5); display: flex; justify-content: center; align-items: center; font-family: Arial; padding: 50px; color: white; position: fixed; z-index: 9999; top: 50%; left: 50%; transform: translate(-50%, -50%);");

      const modalContent = document.createElement("div");
      modalContent.classList.add("modal-content");
      modalContent.setAttribute("style", "width: 350px; height: auto; background-color: #262626; text-align: center; border-radius: 15px; box-shadow: rgba(125, 125, 125, 0.5) 0px 0px 0px 5px;");
      modal.appendChild(modalContent);
  
      const header = document.createElement("div");
      header.classList.add("header");
      header.setAttribute("style", "border-radius: 15px 15px 0px 0px; padding: 15px 5px");
      header.style.backgroundColor = isPM ? "#00c3ff" : document.documentElement.style.getPropertyValue("--looks-secondary") || "#ff4c4c";
      modalContent.appendChild(header);
      const h2 = document.createElement("h2");
      h2.textContent = "Comment Customization";
      h2.style.margin = "0";
      header.appendChild(h2);
  
      if (type === "txt") {
        const fontLabel = createInputLabel("font", "Font");
        modalContent.append(fontLabel, document.createElement("br"));
        const fontInput = createInput("font", "text", data.font);
        fontInput.addEventListener("input", () => { fontInput.style.fontFamily = fontInput.value });
        modalContent.append(fontInput, document.createElement("br"));
        const formatDiv = document.createElement("div");
        formatDiv.style.display = "inline";

        const boldness = createInputLabel("bold", "Bold", false, "position: absolute; transform: translate(350%, 0%);");
        const boldInput = createInput("bold", "checkbox", data.bold, false, "width: 50px; position: absolute; transform: translate(-175%, 95%)");
        const italic = createInputLabel("italic", "Italic", false, "position: absolute; transform: translate(80%, 0%); display: inline;");
        const italInput = createInput("italic", "checkbox", data.italic, false, "width: 50px; position: absolute; transform: translate(-15%, 95%)");

        formatDiv.append(boldness, boldInput, italic, italInput);
        modalContent.append(formatDiv, document.createElement("br"), document.createElement("br"));
  
        const alignmentLabel = createInputLabel("alignment", "Text Alignment");
        modalContent.append(alignmentLabel, document.createElement("br"));
        const alignmentSelect = createSelect("alignment", ["left", "center", "right"], data.textAlign || "left");
        alignmentSelect.style.marginBottom = "90px";
        modalContent.appendChild(alignmentSelect);

        const textDiv1 = document.createElement("div");
        textDiv1.setAttribute("style", "position: absolute; transform: translate(60%, -130%);");
        const textDiv2 = document.createElement("div");
        textDiv2.setAttribute("style", "position: absolute; transform: translate(190%, -127%);");

        const fontSizeLabel = createInputLabel("fontSize", "Font Size");
        textDiv1.append(fontSizeLabel, document.createElement("br"));
        const fontSizeInput = createInput("fontSize", "number", data.fontSize, false, "width: 100px;");
        fontSizeInput.setAttribute("min", "1");
        textDiv1.appendChild(fontSizeInput);
        const txtColorLabel = createInputLabel("txtColor", "Text Color");
        textDiv2.append(txtColorLabel, document.createElement("br"));
        const txtColorInput = createInput("txtColor", "color", data.txtColor, false, "width: 100px;");
        textDiv2.appendChild(txtColorInput);
        modalContent.append(textDiv1, textDiv2);
      } else {
        const updateDisplay = () => {
          colorDisplay.style.backgroundColor = colorInput.value;
          colorDisplay.style.opacity = opacityInput.value / 100;
        };

        const colorDiv = document.createElement("div");
        colorDiv.setAttribute("style", "position: absolute; display: inline; margin-right: 20px; margin-top: 15px;");
        modalContent.appendChild(colorDiv);
  
        const hueDiv = document.createElement("div");
        hueDiv.setAttribute("style", "position: absolute; margin-top: 40px;");

        const colorLabel = createInputLabel("color", "Color", true);
        colorLabel.style.transform = "translate(-50%, -50%)";
        hueDiv.appendChild(colorLabel);
        const colorInput = createInput("color", "color", data.color, true, "width: 100px; transform: translate(40%, -130%);");
        colorInput.value = data.color; // have to hardcode it in for some reason
        colorInput.addEventListener("input", updateDisplay);
        hueDiv.appendChild(colorInput);
        colorDiv.appendChild(hueDiv);

        const opaDiv = document.createElement("div");
        opaDiv.setAttribute("style", "position: absolute; margin-top: 80px;");

        const opaLabel = createInputLabel("opacity", "Opacity", true, "transform: translate(-50%, -50%);");
        opaDiv.appendChild(opaLabel);
        const opacityInput = createInput("opacity", "range", data.opacity, true, "width: 100px; transform: translate(40%, -130%);");
        opacityInput.setAttribute("max", 100);
        opacityInput.setAttribute("min", 10);
        opacityInput.addEventListener("input", updateDisplay);
        opaDiv.appendChild(opacityInput);
        colorDiv.appendChild(opaDiv);

        const colorDisplayDiv = document.createElement("div");
        colorDisplayDiv.setAttribute("style", "display: block; border-radius: 15px; border: 7px solid #4f4f4f; width: 85px; height: 85px; margin: 25px 10px 10px 30px;");
        modalContent.appendChild(colorDisplayDiv);
  
        const colorDisplay = document.createElement("div");
        colorDisplay.classList.add("color-display");
        colorDisplay.setAttribute("style", "display: block; border-radius: 9px; width: 85px; height: 85px;");
        colorDisplayDiv.appendChild(colorDisplay);
        updateDisplay();
      }

      const cancelBtn = createButton("cancelBtn", "Cancel");
      cancelBtn.style.marginRight = "10px";
      cancelBtn.addEventListener("click", () => {
        document.body.removeChild(modal);
        resolve();
      });
      modalContent.append(document.createElement("br"), cancelBtn);
  
      const okayBtn = createButton("okayBtn", "Okay");
      okayBtn.addEventListener("click", () => {
        const inputs = modalContent.querySelectorAll("input, select");
        const values = {};
        inputs.forEach(input => { values[input.id] = input[input.type === "checkbox" ? "checked" : "value"] });
        document.body.removeChild(modal);
        resolve(values);
      });
      modalContent.appendChild(okayBtn);
      document.body.appendChild(modal);
    });
  }

  // Comment Funcs
  async function colorListen(svg, comment) {
    const ID = comment.id;
    const values = await createModal("color", commentStore[ID]);
    if (values !== undefined) {
      const color = values.color;
      const color2 = colorDarken(values.color, 0.2);
      svg.style.backgroundColor = color;
      const svgBar = svg.querySelector("rect.scratchWorkspaceCommentBorder") ?? svg.querySelector("rect.scratchCommentRect");
      const svgText = svg.querySelector("body");
      const textArea = svg.querySelector(".scratchCommentTextarea.scratchCommentText");
      if (svgBar) {
        svgBar.style.fill = color;
        svgBar.style.stroke = color2;
      }
      if (svgText) svgText.style.backgroundColor = color;
      if (textArea) textArea.style.backgroundColor = color;
      commentStore[ID].color = color;
      commentStore[ID].color2 = color2;

      const opacity = Scratch.Cast.toNumber(values.opacity);
      svg.setAttribute("opacity", opacity / 100);
      commentStore[ID].opacity = opacity;
      if (!isPM) runtime.extensionStorage["SPcomments"] = { storage: commentStore };
      convert2Md(comment, comment.getText());
    }
  }

  async function txtListen(svg, comment) {
    const ID = comment.id;
    const values = await createModal("txt", commentStore[ID]);
    if (values !== undefined) {
      const fontSize = Math.max(Scratch.Cast.toNumber(values.fontSize), 1);
      svg.style.fontFamily = values.font;
      svg.style.fontWeight = values.bold ? "bolder" : "normal";
      svg.style.fontStyle = values.italic ? "italic" : "normal";
      svg.style.textAlign = values.alignment;
      svg.style.fontSize = `${fontSize}px`;
      svg.style.color = values.txtColor;

      commentStore[ID] = {
        ...commentStore[ID],
        font: values.font, bold: values.bold, italic: values.italic,
        textAlign: values.alignment, fontSize, txtColor: values.txtColor
      };
      if (isPM) runtime.extensionStorage["SPcomments"] = { storage: commentStore };
      convert2Md(comment, comment.getText());
    }
  }

  function redoComment(comment) {
    if (commentStore[comment.id]) commentStore[comment.id].XY = comment.getXY();
    if (comment.SPbuttons) return;

    // add new buttons
    const btn1 = document.createElementNS("http://www.w3.org/2000/svg", "image");
    btn1.setAttribute("id", comment.id);
    btn1.setAttribute("x", "25"); btn1.setAttribute("y", "1");
    btn1.setAttribute("width", "32"); btn1.setAttribute("height", "32");
    btn1.setAttribute("href", colorIcon);
    btn1.style.display = comment.isMinimized_ ? "none" : "inline";

    const btn2 = btn1.cloneNode(true);
    btn2.setAttribute("x", "60");
    btn2.setAttribute("href", fontIcon);

    let path = comment, commentSVG = "";
    if (comment.blockId) {
      if (!comment.bubble_) return; // weird bug thats avoided
      path = comment.bubble_.minimizeArrow_;
      commentSVG = comment.bubble_.bubbleBack_.parentNode;
    } else {
      path = comment.minimizeArrow_;
      commentSVG = comment.svgGroup_;
    }
    path.insertAdjacentElement("beforebegin", btn1);
    path.insertAdjacentElement("beforebegin", btn2);
    btn1.addEventListener("click", () => { colorListen(commentSVG, comment) });
    btn2.addEventListener("click", () => { txtListen(comment.textarea_, comment) });
    comment.SPbuttons = [btn1, btn2];

    if (commentStore[comment.id] === undefined) {
      commentStore[comment.id] = {
        ID : comment.id, XY : comment.getXY(),
        colorBtn : btn1, textBtn : btn2, commentSVG : commentSVG,
        color : "#fff099", color2: "#b8af37", opacity : 100,
        txtColor: "#000000", font : "Arial", textAlign : "left",
        fontSize : 16, bold : false, italic : false
      };
    }
  }

  function updateComment(comment) {
    const data = commentStore[comment.id];
    if (data === undefined || (comment.blockId && !comment.bubble_)) return;
    const svg = comment.svgHandleTarget_ !== undefined ? comment.svgGroup_ : comment.bubble_.bubbleBack_.parentNode;
    const txt = comment.textarea_;
    const svgBar = svg.querySelector("rect.scratchWorkspaceCommentBorder") ?? svg.querySelector("rect.scratchCommentRect");
    const svgText = svg.querySelector("body");
    const textArea = svg.querySelector(".scratchCommentTextarea.scratchCommentText");
    svg.style.backgroundColor = data.color;
    if (svgBar) {
      svgBar.style.fill = data.color;
      svgBar.style.stroke = data.color2;
    }
    if (svgText) svgText.style.backgroundColor = data.color;
    if (textArea) textArea.style.backgroundColor = data.color;
    svg.setAttribute("opacity", data.opacity / 100);

    txt.style.fontFamily = data.font || "Arial";
    txt.style.fontWeight = data.bold ? "bolder" : "normal";
    txt.style.fontStyle = data.italic ? "italic" : "normal";
    txt.style.textAlign = data.textAlign;
    txt.style.fontSize = `${data.fontSize || 16}px`;
    txt.style.color = data.txtColor;

    convert2Md(comment, comment.getText());
  }

  function convert2Md(comment, txt) {
    if (!txt) return;
    const txtArea = comment.textarea_;
    if (txtArea.previousSibling) txtArea.previousSibling.remove();

    const mdSpace = document.createElement("pre");
    const mdTxt = document.createElement("div");
    mdSpace.style = txtArea.getAttribute("style").replace(`display: none`, "") + " text-wrap: wrap;";
    mdSpace.appendChild(mdTxt);
    mdTxt.outerHTML = txt2md(txt);
    mdSpace.addEventListener("click", (e) => {
      txtArea.style.display = "";
      txtArea.focus();
      mdSpace.remove();
      e.stopPropagation();
    });

    txtArea.insertAdjacentElement("beforebegin", mdSpace);
    txtArea.style.display = "none";
    txtArea.addEventListener("blur", (e) => {
      txtArea.style.display = "none";
      convert2Md(comment, txt);
      e.stopPropagation();
    });
  }

  function updateAllComments() {
    const allComments = ScratchBlocks.mainWorkspace.commentDB_;
    Object.values(allComments).forEach(comment => {
      redoComment(comment);
      updateComment(comment);
    });
  }

  // Patches and Storage
  if (!isPM) {
    const storage = runtime.extensionStorage["SPcomments"];
    if (storage !== undefined) commentStore = storage.storage;
  }

  function fixStorage(ws) {
    const storePos = {}, interPos = {};
    const storedComments = Object.values(commentStore);
    storedComments.forEach((i) => {
      const key = `{"x":${Math.floor(i.XY.x)},"y":${Math.floor(i.XY.y)}}`;
      storePos[key] = i;
    });
    const internalComments = Object.values(ws.commentDB_);
    internalComments.forEach((i) => { interPos[JSON.stringify(i.getXY())] = i });

    const interPosKeys = Object.keys(interPos);
    const newStorage = {};
    for (let i = 0; i < interPosKeys.length; i++) {
      const comment = interPos[interPosKeys[i]];
      const stored = storePos[interPosKeys[i]];
      if (stored) newStorage[comment.id] = { ...stored, ID: comment.id };
    }
    commentStore = newStorage;
  }

  function attachEvents() {
    if (Scratch.gui) Scratch.gui.getBlockly().then(SB => {
      const { Events, mainWorkspace } = SB;
      const comments = mainWorkspace.commentDB_;
      const workspaceEvents = (event) => {
        if (mainWorkspace.id === event.workspaceId) {
          const comment = comments[event.commentId];
          if (event.type === Events.COMMENT_MOVE) redoComment(comment);
          else if (event.type === Events.COMMENT_CREATE) {
            redoComment(comment);
            updateComment(comment);
          } else if (event.type === Events.COMMENT_CHANGE) {
            const isMin = event.newContents_.minimized
            if (isMin !== undefined) {
              comment.SPbuttons[0].style.display = isMin ? "none" : "inline";
              comment.SPbuttons[1].style.display = isMin ? "none" : "inline";
            }
            if (!isMin) convert2Md(comment, comment.getText());
          }
        }
      };
      mainWorkspace.addChangeListener(workspaceEvents);
      updateAllComments();
      runtime.once("PROJECT_LOADED", () => {
        fixStorage(mainWorkspace); // Comment IDs are different upon project load
        updateAllComments();
      });
    });
  }

  function startListenerWorker() {
    const checkInEditor = () => !ReduxStore.getState().scratchGui.mode.isPlayerOnly;
    let inEditor = checkInEditor();
    if (inEditor) attachEvents();
    ReduxStore.subscribe(() => {
      const currentlyInEditor = checkInEditor();
      if (inEditor !== currentlyInEditor) {
        inEditor = currentlyInEditor;
        if (inEditor) attachEvents();
      }
    });
  }
  if (typeof scaffolding === "undefined") startListenerWorker();

  class SPcomments {
    getInfo() {
      return {
        id: "SPcomments",
        name: "Better Comments",
        color1: "#b8af37",
        menuIconURI,
        blocks: [
          {
            func: "tutorial",
            blockType: Scratch.BlockType.BUTTON,
            text: "Comment Formatting"
          },
          {
            opcode: "save", blockType: Scratch.BlockType.COMMAND,
            hideFromPalette: isPM, text: "place me in project to save"
          }
        ]
      };
    }

    tutorial() {
      alert([
        "Can be Inlined:\n",
        "Bold Text → **text**\n","Italic Text → */text*/\n","Strike Text → ~~text~~\n","Header 1 Text → #1text#1\n","Header 2 Text → #2text#2\n",
        "\nCannot be Inlined:\n",
        "Color → @c #ff0000: text@c\n","Highlight → @h #00ff00: text@h\n","Font → @f name: text@f\n",
        "Image → <i url i>\n", "Audio → <a url a>\n", "Video → <v url v>"
      ].join(""));
    }

    // TW Storage
    save() { return }

    // PenguinMod Storage
    serialize() {
      return { SPcomments: { storage: commentStore } }
    }
    deserialize(data) {
      if (data.SPcomments !== undefined) commentStore = data.SPcomments.storage;
    }
  }

  Scratch.extensions.register(new SPcomments());
})(Scratch);
