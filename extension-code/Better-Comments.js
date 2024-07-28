// Name: Better Comments
// ID: SPcomments
// Description: Better Comments with More Customization
// By: SharkPool

// Version V.1.0.1

(function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) throw new Error("Better Comments Addon must run unsandboxed!");

  const menuIconURI =
"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5MC4yOTUiIGhlaWdodD0iOTAuMjk1IiB2aWV3Qm94PSIwIDAgOTAuMjk1IDkwLjI5NSI+PGcgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIj48cGF0aCBkPSJNMiA0NS4xNDhDMiAyMS4zMTggMjEuMzE4IDIgNDUuMTQ4IDJzNDMuMTQ4IDE5LjMxOCA0My4xNDggNDMuMTQ4LTE5LjMxOCA0My4xNDgtNDMuMTQ4IDQzLjE0OFMyIDY4Ljk3OCAyIDQ1LjE0OHoiIGZpbGw9IiM5YjkyNWQiIHN0cm9rZT0iIzVkNTgzOCIgc3Ryb2tlLXdpZHRoPSI0Ii8+PHBhdGggZD0iTTE5LjMxIDY0Ljk4NXYtMzljMC0zLjE0MiAzLjE2Ny02LjUgNi4xNzUtNi41aDM5LjY1YzMuNTY1IDAgNS44NTEgMy4zNTggNS44NTEgNi41djM5YzAgMy43NDktMi45NzcgNi4xNzUtNS44NSA2LjE3NUgyNS4xNmMtMy41NjIgMC01Ljg1LTIuNDI2LTUuODUtNi4xNzV6IiBmaWxsPSJub25lIiBzdHJva2Utb3BhY2l0eT0iLjUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSI0Ii8+PHBhdGggZD0iTTE5LjMxIDY0Ljk4NXYtMzljMC0zLjE0MiAzLjE2Ny02LjUgNi4xNzUtNi41aDM5LjY1YzMuNTY1IDAgNS44NTEgMy4zNTggNS44NTEgNi41djM5YzAgMy43NDktMi45NzcgNi4xNzUtNS44NSA2LjE3NUgyNS4xNmMtMy41NjIgMC01Ljg1LTIuNDI2LTUuODUtNi4xNzUiIGZpbGw9IiNmZmYwOTkiLz48cGF0aCBkPSJNMTkuMzEgMzIuMjI4di02LjI0NGMwLTMuMTQxIDMuMTY3LTYuNSA2LjE3NS02LjVoMzkuNjVjMy41NjUgMCA1Ljg1MSAzLjM1OSA1Ljg1MSA2LjV2Ni4yNDR6IiBmaWxsPSIjY2NiZjdhIi8+PHBhdGggZD0iTTE5LjI0NCAzMi4xNzFoNTEuODMzeiIgZmlsbD0ibm9uZSIgc3Ryb2tlLW9wYWNpdHk9Ii41IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMiIvPjxnIGZpbGw9Im5vbmUiIHN0cm9rZS1vcGFjaXR5PSIuNSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xOTQuODUyIC0xMzQuODUyKSIvPjxwYXRoIGQ9Ik00MS44NDggNTkuNTQ4di00LjVoLTQuNWMtMi4yMSAwLTQtMS40NzctNC0zLjNzMS43OS0zLjMgNC0zLjNoNC41di00LjVjMC0yLjIxIDEuNDc3LTQgMy4zLTRzMy4zIDEuNzkgMy4zIDR2NC41aDQuNWMyLjIxIDAgNCAxLjQ3NyA0IDMuM3MtMS43OSAzLjMtNCAzLjNoLTQuNXY0LjVjMCAyLjIxLTEuNDc3IDQtMy4zIDRzLTMuMy0xLjc5LTMuMy00eiIgZmlsbD0ibm9uZSIgc3Ryb2tlLW9wYWNpdHk9Ii41MDIiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSI1Ii8+PHBhdGggZD0iTTQxLjg0OCA1OS41NDh2LTQuNWgtNC41Yy0yLjIxIDAtNC0xLjQ3Ny00LTMuM3MxLjc5LTMuMyA0LTMuM2g0LjV2LTQuNWMwLTIuMjEgMS40NzctNCAzLjMtNHMzLjMgMS43OSAzLjMgNHY0LjVoNC41YzIuMjEgMCA0IDEuNDc3IDQgMy4zcy0xLjc5IDMuMy00IDMuM2gtNC41djQuNWMwIDIuMjEtMS40NzcgNC0zLjMgNHMtMy4zLTEuNzktMy4zLTQiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+";

  const colorIcon = 
"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAyMCIgaGVpZ2h0PSIyMCIgd2lkdGg9IjIwIj48cGF0aCBkPSJtMTQuMDQ1IDkuNjkzLS4wMTQtLjAxNGMtLjU5MS0uMzE1LTEuNTE0LS45ODktMi42MS0yLjA3OGExMyAxMyAwIDAgMS0uODc5LS45NDZsLjUyLS42NDVjLjMxNi4yNTguNjYyLjU3MyAxLjAyMy45MzIuMjMuMjI5LjQxOC40My42MDUuNjNhLjYuNiAwIDAgMCAuMTMuMTNjLjgwNy45MTcgMS4yODMgMS42NjIgMS40OTkgMi4wOTIgMCAuMDE0LjAxNC4wMjguMDE0LjA0My0uMDg2LS4wNDMtLjE4Ny0uMDg2LS4yODgtLjE0NG0tMy40NDUuMzczYy0uODY1LjQ3My0xLjY4Ny45MTctMi45ODQuNjE2LTEuNDQyLS4zMy0yLjEzMy0uOTE3LTIuNDIyLTEuMjZsMy4xMTQtNC4wMTRjLjIxNi40My41MzMuODc0Ljg2NSAxLjI5LS4zNDYuNTE2LS42Mi45NDYtLjc1IDEuMTQ3YS41NC41NCAwIDAgMCAuMTg4LjczLjUuNSAwIDAgMCAuMjczLjA4N2MuMTg4IDAgLjM2LS4xLjQ2Mi0uMjU4LjE1OC0uMjczLjM0Ni0uNTYuNTQ4LS44NDYuMzAyLjM0NC41NzYuNjE2Ljc2NC44MDMuNDE4LjQxNS44MzYuNzg4IDEuMjQgMS4xMTgtLjQ3Ni4xMjgtLjg5NC4zNzItMS4yOTguNTg3bS0uMzktNC43M2MtLjExNS4xNTgtLjI0NC4zMTYtLjM2LjQ1OS0uMzQ2LS40NTktLjU2Mi0uODMxLS42NzctMS4wOS4yNDUuMTAxLjU5LjMxNiAxLjAzOC42MzFtMy4zLTEuMjYxYy4xNiAwIC4zMzIuMDI5LjM2MS4xLjE3My4zMTYtLjI0NSAxLjMxOS0uODA3IDIuMjIybC0uMjE2LS4yMTVjLS4yMzEtLjIzLS42Mi0uNTg4LTEuMDY3LS45NzUuNjYzLS42NzMgMS4yNjgtMS4xMzIgMS43My0xLjEzMm0zLjA0MSA4LjA4NGE0LjcgNC43IDAgMCAwLS45NjUtMS40OS44LjggMCAwIDAtLjE2LS4xNDRjLjI0Ni0uNTMtLjE1OC0xLjI5LS41MDQtMS44MzVhMTAuNiAxMC42IDAgMCAwLTEuMDk1LTEuNDQ3Yy41NjItLjg2IDEuNTI4LTIuNTY2IDEuMDA5LTMuNTctLjE1OS0uMy0uNTE5LS42NzMtMS4zMjYtLjY3M2gtLjAxNWMtLjgyMSAwLTEuNzMuNjYtMi41NTEgMS41Mi0uOTIzLS42NzQtMS45MzItMS4yMDUtMi41MzctLjg2LS4wNTguMDI4LS4xMy4wNTctLjE3My4xMTQtLjAxNS4wMTQtLjA0My4wMjktLjA1OC4wNTdhLjIuMiAwIDAgMC0uMDQzLjA1OGwtLjAxNS4wMjhMNC4xMjggOS4wNWMtLjAxNSAwLS4wMTUgMC0uMDMuMDE0bC0uODkzIDEuMTYtLjA0My4wNDRhLjQuNCAwIDAgMC0uMDg3LjE0M3YuMDE0Yy0uNDQ3LjkxOCAxLjIxMSAyLjcxIDEuOTkgMy40OTguNjkxLjY4OCAyLjIyIDIuMDc4IDMuMTcgMi4wNzhhLjcuNyAwIDAgMCAuNTA1LS4xODZsNS41MjEtNC4yNTdjLjAzLS4wMTUuMDQ0LS4wNDMuMDcyLS4wNzIuMDMuMDI5LjA0NC4wNzIuMDU4LjEuMTczLjM0NC4yODguNzAzLjMwMyAxLjA5YTQuNiA0LjYgMCAwIDEtLjA0MyAxLjE3NXYuMDE0YTEuMyAxLjMgMCAwIDAgMCAuMzMgMS4xODEgMS4xODEgMCAwIDAgMi4zMzUtLjM1OGMtLjA4Ny0uNTYtLjIwMi0xLjEzMy0uNDMzLTEuNjc3IiBmaWxsPSIjNTc1RTc1IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=";
  const fontIcon =
"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMi4xNzQiIGhlaWdodD0iMzIuNjY2IiB2aWV3Qm94PSIwIDAgMzIuMTc0IDMyLjY2NiI+PGcgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIj48dGV4dCB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0LjEyMiAxNC4yMilzY2FsZSguMzI2NzgpIiBmb250LXNpemU9IjQwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBmaWxsPSIjNTc1ZTc1IiBzdHJva2U9IiM1NzVlNzUiIHN0cm9rZS13aWR0aD0iMS41IiBmb250LWZhbWlseT0iU2FucyBTZXJpZiIgZm9udC13ZWlnaHQ9IjQwMCI+PHRzcGFuIHg9IjAiIGR5PSIwIj5BPC90c3Bhbj48L3RleHQ+PHRleHQgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTMuMTIyIDIwLjcyKXNjYWxlKC4yODM0OCkiIGZvbnQtc2l6ZT0iNDUiIHhtbDpzcGFjZT0icHJlc2VydmUiIGZpbGw9IiM1NzVlNzUiIHN0cm9rZT0iIzU3NWU3NSIgc3Ryb2tlLXdpZHRoPSIxLjQiIGZvbnQtZmFtaWx5PSJDb21pYyBTYW5zIE1zIiBmb250LXdlaWdodD0iNDAwIj48dHNwYW4geD0iMCIgZHk9IjAiPkI8L3RzcGFuPjwvdGV4dD48dGV4dCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOS42MjIgMjcuNzIpc2NhbGUoLjMyMTgzKSIgZm9udC1zaXplPSI0MCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgZmlsbD0iIzU3NWU3NSIgc3Ryb2tlPSIjNTc1ZTc1IiBzdHJva2Utd2lkdGg9IjEuNSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXdlaWdodD0iNDAwIj48dHNwYW4geD0iMCIgZHk9IjAiPkM8L3RzcGFuPjwvdGV4dD48cGF0aCBkPSJNMCAzMi42NjZWLjQ5MmgzMi4xNzR2MzIuMTc0eiIgZmlsbD0ibm9uZSIvPjwvZz48L3N2Zz4=";

  const vm = Scratch.vm;
  const runtime = vm.runtime;
  const isPM = Scratch.extensions.isPenguinMod;
  let SPcommentStorage = {};

  // Modals
  function createModal(type, data) {
    return new Promise((resolve) => {
      const modal = document.createElement("div");
      modal.classList.add("SPcommentModal");
      modal.style.width = "100%";
      modal.style.height = "100%";
      modal.style.backgroundColor = "rgba(0,0,0,0.5)";
      modal.style.display = "flex";
      modal.style.justifyContent = "center";
      modal.style.alignItems = "center";
      modal.style.fontFamily = "Arial";
      modal.style.padding = "50px";
      modal.style.color = "white";
      modal.style.position = "fixed";
      modal.style.zIndex = "9999";
      modal.style.top = "50%";
      modal.style.left = "50%";
      modal.style.transform = "translate(-50%, -50%)";
  
      const modalContent = document.createElement("div");
      modalContent.classList.add("modal-content");
      modalContent.style.width = "350px";
      modalContent.style.height = "auto";
      modalContent.style.backgroundColor = "#262626";
      modalContent.style.textAlign = "center";
      modalContent.style.borderRadius = "15px";
      modalContent.style.boxShadow = "0px 0px 0px 5px rgba(125,125,125,0.5)";
      modal.appendChild(modalContent);
  
      const header = document.createElement("div");
      header.classList.add("header");
      header.style.borderRadius = "15px 15px 0px 0px";
      header.style.backgroundColor = isPM ? "#00c3ff" : document.documentElement.style.getPropertyValue("--looks-secondary") || "#ff4c4c";
      header.style.padding = "15px 5px";
      modalContent.appendChild(header);
      const h2 = document.createElement("h2");
      h2.textContent = "Comment Customization";
      h2.style.margin = "0";
      header.appendChild(h2);
  
      if (type === "txt") {
        const fontLabel = createInputLabel("font", "Font");
        modalContent.appendChild(fontLabel);
        modalContent.appendChild(document.createElement("br"));
        const fontInput = createInput("font", "text", data.font);
        fontInput.addEventListener("input", function() { fontInput.style.fontFamily = fontInput.value });
        modalContent.appendChild(fontInput);
        modalContent.appendChild(document.createElement("br"));
        const formatDiv = document.createElement("div");
        formatDiv.style.display = "inline";

        const boldness = createInputLabel("bold", "Bold");
        boldness.style.position = "absolute";
        boldness.style.transform = "translate(350%, 0%)";
        formatDiv.appendChild(boldness);
        const boldInput = createInput("bold", "checkbox", data.bold);
        boldInput.style.width = "50px";
        boldInput.style.position = "absolute";
        boldInput.style.transform = "translate(-175%, 95%)";
        formatDiv.appendChild(boldInput);
        const italic = createInputLabel("italic", "Italic");
        italic.style.display = "inline";
        italic.style.position = "absolute";
        italic.style.transform = "translate(80%, 0%)";
        formatDiv.appendChild(italic);
        const italInput = createInput("italic", "checkbox", data.italic);
        italInput.style.width = "50px";
        italInput.style.position = "absolute";
        italInput.style.transform = "translate(-15%, 95%)";
        formatDiv.appendChild(italInput);

        modalContent.appendChild(formatDiv);
        modalContent.appendChild(document.createElement("br"));
        modalContent.appendChild(document.createElement("br"));
  
        const alignmentLabel = createInputLabel("alignment", "Text Alignment");
        modalContent.appendChild(alignmentLabel);
        modalContent.appendChild(document.createElement("br"));
        const alignmentSelect = createSelect("alignment", ["left", "center", "right"]);
        alignmentSelect.style.marginBottom = "90px";
        modalContent.appendChild(alignmentSelect);

        const textDiv1 = document.createElement("div");
        textDiv1.style.position = "absolute";
        textDiv1.style.transform = "translate(60%, -130%)";
        const textDiv2 = document.createElement("div");
        textDiv2.style.position = "absolute";
        textDiv2.style.transform = "translate(190%, -127%)";

        const fontSizeLabel = createInputLabel("fontSize", "Font Size");
        textDiv1.appendChild(fontSizeLabel);
        textDiv1.appendChild(document.createElement("br"));
        const fontSizeInput = createInput("fontSize", "number", data.fontSize);
        fontSizeInput.setAttribute("min", "1");
        fontSizeInput.style.width = "100px";
        textDiv1.appendChild(fontSizeInput);
        modalContent.appendChild(textDiv1);
        const txtColorLabel = createInputLabel("txtColor", "Text Color");
        textDiv2.appendChild(txtColorLabel);
        textDiv2.appendChild(document.createElement("br"));
        const txtColorInput = createInput("txtColor", "color", data.txtColor);
        txtColorInput.style.width = "100px";
        textDiv2.appendChild(txtColorInput);
        modalContent.appendChild(textDiv2);
      } else {
        const colorDiv = document.createElement("div");
        colorDiv.style.position = "absolute";
        colorDiv.style.display = "inline";
        colorDiv.style.marginRight = "20px";
        colorDiv.style.marginTop = "15px";
        modalContent.appendChild(colorDiv);
  
        const hueDiv = document.createElement("div");
        hueDiv.style.position = "absolute";
        hueDiv.style.marginTop = "40px";

        const colorLabel = createInputLabel("color", "Color", true);
        colorLabel.style.transform = "translate(-50%, -50%)";
        hueDiv.appendChild(colorLabel);
        const colorInput = createInput("color", "color", data.color, true);
        colorInput.value = data.color; // have to hardcode it in for some reason
        colorInput.style.width = "100px";
        colorInput.style.transform = "translate(40%, -130%)";
        colorInput.style.textAlign = "center";
        colorInput.style.borderRadius = "8px";
        colorInput.addEventListener("input", updateDisplay);
        hueDiv.appendChild(colorInput);
        colorDiv.appendChild(hueDiv);

        const opaDiv = document.createElement("div");
        opaDiv.style.position = "absolute";
        opaDiv.style.marginTop = "80px";

        const opaLabel = createInputLabel("opacity", "Opacity", true);
        opaLabel.style.transform = "translate(-50%, -50%)";
        opaDiv.appendChild(opaLabel);
        const opacityInput = createInput("opacity", "range", data.opacity, true);
        opacityInput.setAttribute("max", "100");
        opacityInput.setAttribute("min", "10");
        opacityInput.style.width = "100px";
        opacityInput.style.transform = "translate(40%, -130%)";
        opacityInput.style.textAlign = "center";
        opacityInput.style.borderRadius = "8px";
        opacityInput.addEventListener("input", updateDisplay);
        opaDiv.appendChild(opacityInput);
        colorDiv.appendChild(opaDiv);

        const colorDisplayDiv = document.createElement("div");
        colorDisplayDiv.style.display = "block";
        colorDisplayDiv.style.borderRadius = "15px";
        colorDisplayDiv.style.border = "7px solid #4f4f4f";
        colorDisplayDiv.style.width = "85px";
        colorDisplayDiv.style.height = "85px";
        colorDisplayDiv.style.margin = "25px 10px 10px 30px";
        modalContent.appendChild(colorDisplayDiv);
  
        const colorDisplay = document.createElement("div");
        colorDisplay.classList.add("color-display");
        colorDisplay.style.display = "block";
        colorDisplay.style.borderRadius = "9px";
        colorDisplay.style.width = "85px";
        colorDisplay.style.height = "85px";
        colorDisplayDiv.appendChild(colorDisplay);
        function updateDisplay() {
          colorDisplay.style.backgroundColor = colorInput.value;
          colorDisplay.style.opacity = opacityInput.value / 100;
        }
        updateDisplay();
      }

      modalContent.appendChild(document.createElement("br"));
      const cancelBtn = createButton("cancelBtn", "Cancel");
      cancelBtn.style.marginRight = "10px";
      cancelBtn.addEventListener("click", () => {
        document.body.removeChild(modal);
        resolve();
      });
      modalContent.appendChild(cancelBtn);
  
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

  function createInputLabel(id, labelText, includeMargins) {
    const label = document.createElement("label");
    label.setAttribute("for", id);
    label.textContent = labelText;
    label.style.display = "block";
    if (!includeMargins) {
      label.style.marginTop = "10px";
      label.style.marginBottom = "-15px";
    }
    label.style.fontWeight = "700";
    return label;
  }

  function createInput(id, type, value, includePad) {
    const input = document.createElement("input");
    input.setAttribute("type", type);
    input.setAttribute("id", id);
    input.setAttribute("name", id);
    input[type === "checkbox" ? "checked" : "value"] = value;
    input.style.background = "radial-gradient(#ffffff 50%, #b3b3b3)";
    input.style.border = "2px solid white";
    if (!includePad) input.style.padding = "2px";
    input.style.width = "150px";
    input.style.textAlign = "center";
    input.style.borderRadius = "8px";
    input.style.color = "#000000";
    return input;
  }

  function createSelect(id, options) {
    const select = document.createElement("select");
    select.setAttribute("id", id);
    select.setAttribute("name", id);
    select.style.background = "radial-gradient(#ffffff 50%, #b3b3b3)";
    select.style.border = "2px solid white";
    select.style.padding = "2px";
    select.style.width = "150px";
    select.style.textAlign = "center";
    select.style.borderRadius = "8px";
    select.style.color = "#000000";
    options.forEach(optionText => {
      const option = document.createElement("option");
      option.setAttribute("value", optionText);
      option.textContent = optionText.charAt(0).toUpperCase() + optionText.slice(1);
      select.appendChild(option);
    });
    return select;
  }

  function createButton(id, buttonText) {
    const button = document.createElement("button");
    button.setAttribute("id", id);
    button.textContent = buttonText;
    button.style.fontSize = "18px";
    button.style.marginBottom = "15px";
    button.style.border = "none";
    button.style.padding = "10px 15px";
    button.style.backgroundColor = "#4f4f4f";
    button.style.textAlign = "center";
    button.style.borderRadius = "10px";
    button.style.fontWeight = "700";
    button.style.color = "#fff";
    return button;
  }

  // Functions
  async function colorListen(svg, ID) {
    const values = await createModal("color", SPcommentStorage[ID]);
    if (values !== undefined) {
      const color = values.color;
      const color2 = darkenColor(values.color, 27.75);
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
      SPcommentStorage[ID].color = color;
      SPcommentStorage[ID].color2 = color2;

      const opacity = Scratch.Cast.toNumber(values.opacity);
      svg.setAttribute("opacity", opacity / 100);
      SPcommentStorage[ID].opacity = opacity;
      if (!isPM) runtime.extensionStorage["SPcomments"] = { storage : SPcommentStorage };
    }
  }
  async function txtListen(svg, ID) {
    const values = await createModal("txt", SPcommentStorage[ID]);
    if (values !== undefined) {
      svg.style.fontFamily = values.font;
      SPcommentStorage[ID].font = values.font;
      svg.style.fontWeight = values.bold ? "bolder" : "normal";
      SPcommentStorage[ID].bold = values.bold;
      svg.style.fontStyle = values.italic ? "italic" : "normal";
      SPcommentStorage[ID].italic = values.italic;

      svg.style.textAlign = values.alignment;
      SPcommentStorage[ID].textAlign = values.alignment;

      const fontSize = Math.max(Scratch.Cast.toNumber(values.fontSize), 1)
      svg.style.fontSize = `${fontSize}px`;
      SPcommentStorage[ID].fontSize = fontSize;
      svg.style.color = values.txtColor;
      SPcommentStorage[ID].txtColor = values.txtColor;
      if (isPM) runtime.extensionStorage["SPcomments"] = { storage : SPcommentStorage };
    }
  }

  function darkenColor(hex, amount) {
    hex = hex.replace(/^#/, "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const darkenAmount = Math.round(255 * (amount / 100));

    const newR = Math.max(0, r - darkenAmount);
    const newG = Math.max(0, g - darkenAmount);
    const newB = Math.max(0, b - darkenAmount);
    return `#${((1 << 24) + (newR << 16) + (newG << 8) + newB).toString(16).slice(1)}`;
  }

  function redoComment(comment) {
    if (comment && document.getElementById(comment.id) === null) {
      // color
      const btn1 = document.createElementNS("http://www.w3.org/2000/svg", "image");
      btn1.setAttribute("id", comment.id);
      btn1.setAttribute("x", "25");
      btn1.setAttribute("y", "1");
      btn1.setAttribute("width", "32");
      btn1.setAttribute("height", "32");
      btn1.setAttribute("href", colorIcon);

      // text
      const btn2 = document.createElementNS("http://www.w3.org/2000/svg", "image");
      btn2.setAttribute("x", "60");
      btn2.setAttribute("y", "1");
      btn2.setAttribute("width", "32");
      btn2.setAttribute("height", "32");
      btn2.setAttribute("href", fontIcon);

      let path = comment;
      let path2 = "";
      let commentSVG = "";
      if (comment.svgHandleTarget_ !== undefined) {
        path = path.svgHandleTarget_.nextElementSibling;
        path2 = comment.minimizeArrow_;
        commentSVG = comment.svgGroup_;
      } else {
        // weird bug thats avoided:
        if (!path.bubble_) return;
        path = path.bubble_.commentTopBar_.nextElementSibling;
        path2 = comment.bubble_.minimizeArrow_;
        commentSVG = comment.bubble_.bubbleBack_.parentNode;
      }
      path.insertAdjacentElement("beforebegin", btn1);
      path.insertAdjacentElement("beforebegin", btn2);

      if (SPcommentStorage[comment.id] === undefined) {
        SPcommentStorage[comment.id] = {
          ID : comment.id, XY : comment.getXY(),
          colorBtn : btn1, textBtn : btn2, commentSVG : commentSVG,
          color : "#fff099", color2: "#b8af37", opacity : 100,
          txtColor: "#000000", font : "Arial", textAlign : "left",
          fontSize : 16, bold : false, italic : false
        };
      }

      path2.addEventListener("click", () => { minimizeListen(comment, [btn1, btn2]) });
      btn1.addEventListener("click", () => { colorListen(commentSVG, comment.id) });
      btn2.addEventListener("click", () => { txtListen(comment.textarea_, comment.id) });
    } else if (comment) {
      SPcommentStorage[comment.id] = { ...SPcommentStorage[comment.id], XY : comment.getXY() };
    }
  }

  function minimizeListen(comment, btns) {
    btns[0].style.display = comment.isMinimized_ ? "none" : "inline";
    btns[1].style.display = comment.isMinimized_ ? "none" : "inline";
  }

  function updateComment(comment) {
    const data = SPcommentStorage[comment.id];
    if (data === undefined) return;
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
  }

  function fixStorage() {
    const storedComments = SPcommentStorage;
    const storedKeys = Object.keys(storedComments);
    const internalComments = ScratchBlocks.mainWorkspace.commentDB_;
    const internalKeys = Object.keys(internalComments);
    if (internalKeys.length > 0) {
      for (let i = 0; i < internalKeys.length; i++) {
        const intComm = internalComments[internalKeys[i]];
        const storComm = storedComments[storedKeys[i]];
        if (intComm !== undefined && storComm !== undefined) {
          const storXY = `{"x":${Math.floor(storComm.XY.x)},"y":${Math.floor(storComm.XY.y)}}`;
          if (JSON.stringify(intComm.getXY()) === storXY) {
            SPcommentStorage[internalKeys[i]] = {
              ...SPcommentStorage[storedKeys[i]], ID : intComm.id
            };
            delete SPcommentStorage[storedKeys[i]];
          }
        }
      }
    }
  }

  function updateAllComments() {
    const allComments = ScratchBlocks.mainWorkspace.commentDB_;
    Object.keys(allComments).forEach(key => {
      redoComment(allComments[key]);
      updateComment(allComments[key]);
    });
  }

  // Listeners
  function handleMutation(mutationsList) {
    for(const mutation of mutationsList) {
      if (mutation.type === "childList" && typeof scaffolding === "undefined") {
        const workspace = ScratchBlocks.mainWorkspace;
        if (mutation.addedNodes && mutation.addedNodes[0]) {
          let comment = "";
          const allComments = workspace.commentDB_;
          Object.keys(allComments).forEach(key => {
            if (mutation.addedNodes[0] === allComments[key].svgGroup_ || allComments[key].iconGroup_) {
              comment = allComments[key];
              return;
            }
          });
          redoComment(comment);
        }
      }
    }
  }

  vm.on("workspaceUpdate", () => {
    if (typeof scaffolding !== "undefined") return;
    setTimeout(() => { updateAllComments() }, 10); // wait for Scratch to render its stupid Comments
  });
  runtime.on("PROJECT_LOADED", () => {
    if (typeof scaffolding !== "undefined") return;
    setTimeout(() => {
      fixStorage(); // Comment IDs are different upon project load
      updateAllComments();
    }, 100); // wait for Scratch to render its stupid Comments
  });

  class SPcomments {
    getInfo() {
      return {
        id: "SPcomments",
        name: "Better Comments",
        color1: "#b8af37",
        menuIconURI,
        blocks: [
          {
            blockType: Scratch.BlockType.LABEL,
            hideFromPalette: isPM,
            text: "Place in your Project to Save"
          },
          {
            opcode: "save", blockType: Scratch.BlockType.COMMAND,
            hideFromPalette: isPM,
            text: "save comment settings"
          }
        ]
      };
    }

    // TW Storage
    save() { return }

    // PenguinMod Storage
    serialize() { return { SPcomments : { storage : SPcommentStorage } } }
    deserialize(data) {
      if (data.SPcomments !== undefined) SPcommentStorage = data.SPcomments.storage;
    }
  }

  if (!isPM) {
    const storage = runtime.extensionStorage["SPcomments"];
    if (storage !== undefined) SPcommentStorage = storage.storage;
  }
  if (typeof scaffolding === "undefined" && 
    // Check if loaded manually or by project load
    Math.round(runtime.ioDevices.clock._projectTimer.startTime / 1000) * 1000 !==
    Math.round(Date.now() / 1000) * 1000
  ) {
    const observer = new MutationObserver(handleMutation);
    observer.observe(document, { childList: true, subtree: true });
    updateAllComments(); // update pre-existing comments
  }
  Scratch.extensions.register(new SPcomments());
})(Scratch);
