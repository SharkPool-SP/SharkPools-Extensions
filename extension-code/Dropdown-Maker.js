// Name: Dropdown Maker
// ID: SP0zMenuMaker
// Description: Create Custom Dropdowns
// By: SharkPool
// By: 0znzw <https://scratch.mit.edu/users/0znzw/>
// By: CST1229 <https://scratch.mit.edu/users/CST1229/>
// License: MIT AND LGPLv3

// Version V.1.0.01

(function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) throw new Error("Menu Maker needs to run unsandboxed!");

  const deleteSVG =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzOS43MzYiIGhlaWdodD0iMzkuNzM2IiB2aWV3Qm94PSIwIDAgMzkuNzM2IDM5LjczNiI+PHBhdGggZD0iTTEyLjU0MSAzNS4xOTVhOCA4IDAgMCAxLTgtOFYxMi41NDFhOCA4IDAgMCAxIDgtOGgxNC42NTRhOCA4IDAgMCAxIDggOHYxNC42NTRhOCA4IDAgMCAxLTggOHoiIGZpbGw9IiNmZjRkNGQiLz48cGF0aCBkPSJNMCAzOS43MzZWMGgzOS43MzZ2MzkuNzM2eiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0xMi41NDEgMzUuMTk1YTggOCAwIDAgMS04LThWMTIuNTQxYTggOCAwIDAgMSA4LThoMTQuNjU0YTggOCAwIDAgMSA4IDh2MTQuNjU0YTggOCAwIDAgMS04IDh6IiBmaWxsPSJub25lIiBzdHJva2Utb3BhY2l0eT0iLjI1MSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjUiLz48cGF0aCBkPSJNMTMuMTA4IDIyLjU5OWEyLjY3IDIuNjcgMCAwIDEtMi42Ny0yLjY3di0uMTIyYTIuNjcgMi42NyAwIDAgMSAyLjY3LTIuNjdoMTMuNTJhMi42NyAyLjY3IDAgMCAxIDIuNjcgMi42N3YuMTIyYTIuNjcgMi42NyAwIDAgMS0yLjY3IDIuNjd6IiBmaWxsPSIjZmZmIi8+PC9zdmc+";
  const addSVG =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzOS43MzYiIGhlaWdodD0iMzkuNzM2IiB2aWV3Qm94PSIwIDAgMzkuNzM2IDM5LjczNiI+PHBhdGggZD0iTTEyLjU0MSAzNS4xOTVhOCA4IDAgMCAxLTgtOFYxMi41NDFhOCA4IDAgMCAxIDgtOGgxNC42NTRhOCA4IDAgMCAxIDggOHYxNC42NTRhOCA4IDAgMCAxLTggOHoiIGZpbGw9IiM1MmZmM2UiLz48cGF0aCBkPSJNMTIuNTQxIDM1LjE5NWE4IDggMCAwIDEtOC04VjEyLjU0MWE4IDggMCAwIDEgOC04aDE0LjY1NGE4IDggMCAwIDEgOCA4djE0LjY1NGE4IDggMCAwIDEtOCA4eiIgZmlsbD0ibm9uZSIgc3Ryb2tlLW9wYWNpdHk9Ii4yNTEiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSI1Ii8+PHBhdGggZD0iTTEzLjEwOCAyMi41OTlhMi42NyAyLjY3IDAgMCAxLTIuNjctMi42N3YtLjEyMmEyLjY3IDIuNjcgMCAwIDEgMi42Ny0yLjY3aDEzLjUyYTIuNjcgMi42NyAwIDAgMSAyLjY3IDIuNjd2LjEyMmEyLjY3IDIuNjcgMCAwIDEtMi42NyAyLjY3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xNy4xMzcgMTMuMTA4YTIuNjcgMi42NyAwIDAgMSAyLjY3LTIuNjdoLjEyMmEyLjY3IDIuNjcgMCAwIDEgMi42NyAyLjY3djEzLjUyYTIuNjcgMi42NyAwIDAgMS0yLjY3IDIuNjdoLS4xMjJhMi42NyAyLjY3IDAgMCAxLTIuNjctMi42N3oiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNMCAzOS43MzZWMGgzOS43MzZ2MzkuNzM2eiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==";
  const editSVG =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzOS43MzYiIGhlaWdodD0iMzkuNzM2IiB2aWV3Qm94PSIwIDAgMzkuNzM2IDM5LjczNiI+PHBhdGggZD0iTTEyLjU0MSAzNS4xOTVhOCA4IDAgMCAxLTgtOFYxMi41NDFhOCA4IDAgMCAxIDgtOGgxNC42NTRhOCA4IDAgMCAxIDggOHYxNC42NTRhOCA4IDAgMCAxLTggOHoiIGZpbGw9IiM0MGQ4ZmYiLz48cGF0aCBkPSJNMTIuNTQxIDM1LjE5NWE4IDggMCAwIDEtOC04VjEyLjU0MWE4IDggMCAwIDEgOC04aDE0LjY1NGE4IDggMCAwIDEgOCA4djE0LjY1NGE4IDggMCAwIDEtOCA4eiIgZmlsbD0ibm9uZSIgc3Ryb2tlLW9wYWNpdHk9Ii4yNTEiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSI1Ii8+PHBhdGggZD0iTTEyLjU4NyAyMy4wOThjLjEwMi0uNDMuMzc3LS44Ni43MzQtMS4yLjMyMS0uMzA1IDQuODM4IDQuMTY4IDQuNTQ4IDQuNDgzLS4zNDQuMzczLS43ODguNjYzLTEuMjMxLjc2OGwtMy44NC45MTZjLS44MTcuMTk0LTEuMzIxLS4zMS0xLjEyNy0xLjEyNnptMTEuMTE4LTEwLjAzNmExLjA5NSAxLjA5NSAwIDAgMSAwLTEuNTQ4bC45NjYtLjk2N2ExLjA5NSAxLjA5NSAwIDAgMSAxLjU0OSAwbDIuOTY5IDIuOTdjLjQyNy40MjcuNDI3IDEuMTIgMCAxLjU0OGwtLjk2Ny45NjZhMS4wOTUgMS4wOTUgMCAwIDEtMS41NDggMHptLTguMzkxIDguMzkxYTEuMDk1IDEuMDk1IDAgMCAxIDAtMS41NDhsNi4wMS02LjAxYTEuMDk1IDEuMDk1IDAgMCAxIDEuNTQ4IDBsMi45NjkgMi45NjljLjQyOC40MjguNDI4IDEuMTIgMCAxLjU0OGwtNi4wMSA2LjAxYTEuMDk1IDEuMDk1IDAgMCAxLTEuNTQ4IDB6IiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTAgMzkuNzM2VjBoMzkuNzM2djM5LjczNnoiIGZpbGw9Im5vbmUiLz48L3N2Zz4=";
  const menuIconURI =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDYuNDE5IiBoZWlnaHQ9IjEwNi40MTkiIHZpZXdCb3g9IjAgMCAxMDYuNDE5IDEwNi40MTkiPjxwYXRoIGQ9Ik0yLjUgNTMuMjFDMi41IDI1LjIwNCAyNS4yMDQgMi41IDUzLjIxIDIuNXM1MC43MSAyMi43MDQgNTAuNzEgNTAuNzEtMjIuNzA0IDUwLjcxLTUwLjcxIDUwLjcxUzIuNSA4MS4yMTYgMi41IDUzLjIxeiIgZmlsbD0iIzBmYmQ4YyIgc3Ryb2tlPSIjMGE4MDVlIiBzdHJva2Utd2lkdGg9IjUiLz48cGF0aCBkPSJNMTkuOTIgNTMuMjFjMC0xOC4zODYgMTQuOTA0LTMzLjI5IDMzLjI5LTMzLjI5Uzg2LjUgMzQuODI0IDg2LjUgNTMuMjEgNzEuNTk2IDg2LjUgNTMuMjEgODYuNSAxOS45MiA3MS41OTYgMTkuOTIgNTMuMjF6IiBmaWxsPSIjMGM5OTcxIiBzdHJva2U9IiMwYTgwNWUiIHN0cm9rZS13aWR0aD0iNC41Ii8+PHBhdGggZD0iTTY3LjM0OCA0OS44MDJhNS4zNiA1LjM2IDAgMCAxLTEuNTggMy44MjdsLTguNzIgOC43MmE1LjQ1IDUuNDUgMCAwIDEtNy42NzYgMGwtOC42OTgtOC43MmE1LjM4IDUuMzggMCAwIDEtMS42MDItMy44MjcgNS41MiA1LjUyIDAgMCAxIDEuNTgtMy44NDljLjY0NS0uNTM0IDEuNjAxLTEuNTggMTIuNTctMS41OCAxMC45NjcgMCAxMS45OSAxLjAyNCAxMi41NDYgMS41OGE1LjQzIDUuNDMgMCAwIDEgMS41OCAzLjg1eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMGE4MDVlIiBzdHJva2Utd2lkdGg9IjcuNSIvPjxwYXRoIGQ9Ik02Ny4zNDggNDkuODAyYTUuMzYgNS4zNiAwIDAgMS0xLjU4IDMuODI3bC04LjcyIDguNzJhNS40NSA1LjQ1IDAgMCAxLTcuNjc2IDBsLTguNjk4LTguNzJhNS4zOCA1LjM4IDAgMCAxLTEuNjAyLTMuODI3IDUuNTIgNS41MiAwIDAgMSAxLjU4LTMuODQ5Yy42NDUtLjUzNCAxLjYwMS0xLjU4IDEyLjU3LTEuNTggMTAuOTY3IDAgMTEuOTkgMS4wMjQgMTIuNTQ2IDEuNThhNS40MyA1LjQzIDAgMCAxIDEuNTggMy44NSIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==";

  const vm = Scratch.vm;
  const runtime = vm.runtime;
  const isPM = Scratch.extensions.isPenguinMod;
  const TEMP_BLOCK_OPCODE = "SP0zMenuMaker___SP0zMenuMaker_TEMP_BLOCK"; // opcode of the temporary block added to keep the extension in the project

  let extRevmovable = false, extensionInstance; // created when the extension is "registered"
  let menusXML = `<label text="Try creating some menus!" />`;
  let customMenus = {
    "new-menu-1": { items: [{ text: "foo", value: "bar" }], acceptReporters: false }
  };

  // Helper Funcs
  const hasOwn = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key);

  const xmlEscape = function (unsafe) {
    return Scratch.Cast.toString(unsafe).replace(/[<>&'"]/g, c => {
      switch (c) {
        case "<": return "&lt;";
        case ">": return "&gt;";
        case "&": return "&amp;";
        case "'": return "&apos;";
        case "\"": return "&quot;";
      }
    });
  };

  function refreshMagic() {
    menusXML = Object.keys(customMenus).map(menuName => {
      const menuBlock = `SP0zMenuMaker_menu_${xmlEscape(menuName)}`;
      return `<block type="${menuBlock}" id="${menuBlock}"></block>`;
    }).join("") || `<label text="Try creating some menus!" />`;
    vm.extensionManager.refreshBlocks().then(() => vm.refreshWorkspace());
  }

  function patchDivColor(container, isDark) {
    for (let i = 0; i < container.childNodes.length; i++) {
      const child = container.childNodes[i];
      child.style.background = i % 2 !== 0 ? `radial-gradient(circle, ${isDark ? "#343434" : "#D9D9D9"} 80%, rgba(0,0,0,0))` : "";
    }
  }

  function patchName(name, array) {
    if (array.indexOf(name) > -1) {
      const appearance = array.filter((v) => v === name).length;
      const lastDash = name.lastIndexOf("-");
      let newName = `${name}-${appearance}`;
      if (lastDash !== -1) {
        const lastPart = name.slice(lastDash + 1);
        if (!isNaN(parseInt(lastPart))) newName = name.slice(0, lastDash) + `-${parseInt(lastPart) + appearance}`;
      }
      return array.indexOf(newName) > -1 ? patchName(newName, array) : newName;
    }
    return name;
  }

  // GUI
  function makeTitle(txt) {
    const title = document.createElement("div");
    title.textContent = txt;
    title.setAttribute("style", "display: inline-block; text-align: center; width: 47%; margin-right: 8px; margin-left: 8px; padding: 0px 0px 20px;");
    return title;
  }

  function makeLabel(txt) {
    const label = document.createElement("div");
    label.textContent = txt;
    label.setAttribute("style", "margin: 5px; display: inline-block; transform: translate(0%, -55%);");
    return label;
  }

  function createContain(clasS, darkGUI) {
    const box = document.createElement("div");
    box.classList.add(clasS);
    box.setAttribute("style", "overflow: hidden scroll; display: inline-block; width: 47%; height: 200px; padding: 2px; margin-right: 8px; margin-left: 8px; border-radius: 5px;");
    box.style.border = `solid ${darkGUI ? "#343434" : "#D9D9D9"} 2px`;
    return box;
  }

  function makeButton(img, clasS) {
    const button = document.createElement("img");
    button.classList.add(clasS);
    button.src = img;
    button.width = "32";
    button.style.cursor = "pointer";
    return button;
  }

  function makeInput(type, defaultV, opts) {
    const input = document.createElement("input");
    input.type = type;
    input.value = defaultV;
    input.style.width = opts?.width ?? "130px";
    input.style.transform = "translate(0%, -45%)";
    input.style.cursor = "pointer";
    return input;
  }

  function ghostInputRemove(selector) {
    // Block Text input Doesnt show immediately :(
    const element = document.querySelector(selector);
    if (element) element.style.opacity = 0;
    else setTimeout(() => { ghostInputRemove(selector) }, 5);
  }

  function makeMenuNameRow(name, namesArray, isDark, contain) {
    const rowDiv = document.createElement("div");
    rowDiv.style.height = "17%";
    if (namesArray.indexOf(name) % 2 !== 0) rowDiv.style.background = `radial-gradient(circle, ${isDark ? "#343434" : "#D9D9D9"} 80%, rgba(0,0,0,0))`;

    // Delete Button
    const del = makeButton(deleteSVG, "delete");
    rowDiv.appendChild(del);
    del.addEventListener("click", () => {
      // Super secret comment from ashime <3
      delete customMenus[name];
      namesArray.splice(namesArray.indexOf(name), 1);
      rowDiv.parentNode.removeChild(rowDiv);
      patchDivColor(contain, isDark);

      // Remove Items Container
      const itemCon = document.querySelector(`[class="items"]`);
      itemCon.innerHTML = "";
    });

    // Edit Button
    const edit = makeButton(editSVG, "edit");
    rowDiv.appendChild(edit);
    edit.addEventListener("click", () => {
      patchDivColor(contain, isDark);
      rowDiv.style.background = `radial-gradient(circle, #a3a3a3 80%, rgba(0,0,0,0))`;
      renderItemList(customMenus[name], isDark, name);
    });

    // Text & Input
    const listItem = makeInput("text", name);
    listItem.addEventListener("change", () => {
      const oldValue = customMenus[name];
      delete customMenus[name];
      const newName = patchName(listItem.value, namesArray);
      customMenus[newName] = oldValue;
      namesArray[namesArray.indexOf(name)] = newName;

      // refresh modal (will bug out if not refreshed)
      setTimeout(() => {
        const parent = rowDiv.parentNode.parentNode;
        for (let i = parent.childNodes.length - 1; i--; ) parent.childNodes[i].remove();
        createMenuList(Object.keys(customMenus), parent, isDark);
      }, 5);
    });
    listItem.addEventListener("click", () => {
      patchDivColor(contain, isDark);
      rowDiv.style.background = `radial-gradient(circle, #a3a3a3 80%, rgba(0,0,0,0))`;
      renderItemList(customMenus[name], isDark, name);
    });
    rowDiv.append(makeLabel("Name:"), listItem);
    return rowDiv;
  }

  function makeItemRow(item, index, isDark, contain, name) {
    const rowDiv = document.createElement("div");
    rowDiv.style.height = "17%";
    if (index % 2 !== 0) rowDiv.style.background = `radial-gradient(circle, ${isDark ? "#343434" : "#D9D9D9"} 80%, rgba(0,0,0,0))`;

    // Delete Button
    const del = makeButton(deleteSVG, "delete");
    rowDiv.appendChild(del);
    del.addEventListener("click", () => {
      customMenus[name].items.splice(index, 1);
      renderItemList(customMenus[name], isDark, name);
    });

    // Text & Input
    const text = makeInput("text", item.text, { width: "65px" });
    text.addEventListener("change", () => { customMenus[name].items[index].text = text.value });
    const value = makeInput("text", item.value, { width: "65px" });
    value.addEventListener("change", () => { customMenus[name].items[index].value = value.value });
    rowDiv.append(makeLabel("Text:"), text, makeLabel("Value:"), value);
    return rowDiv;
  }

  // Internal GUI
  function createMenuList(namesArray, parent, isDark) {
    // Inner Titles and Containers
    const title1 = makeTitle("Created Dropdowns"), title2 = makeTitle("Items in Dropdown");
    const listCon = createContain("menus", isDark);
    namesArray.forEach((name) => {
      listCon.appendChild(makeMenuNameRow(name, namesArray, isDark, listCon));
    });

    // Add Button
    const add = makeButton(addSVG, "add");
    add.addEventListener("click", () => {
      const newN = patchName(`new-menu-${namesArray.length + 1}`, namesArray);
      customMenus[newN] = { items: [{ text: "foo", value: "bar" }], acceptReporters: false };
      namesArray.push(newN);
      listCon.insertBefore(makeMenuNameRow(newN, namesArray, isDark, listCon), add);
      patchDivColor(listCon, isDark);
    });
    listCon.appendChild(add);

    // Menu Items Container (Initially Blank)
    parent.insertBefore(createContain("items", isDark), parent.children[0]);
    parent.insertBefore(listCon, parent.children[0]);
    parent.insertBefore(title2, parent.children[0]);
    parent.insertBefore(title1, parent.children[0]);
  }

  function renderItemList(items, isDark, key) {
    const itemCon = document.querySelector(`[class="items"]`);
    itemCon.innerHTML = ""; // cleanse items
    items = items.items;
    for (let i = 0; i < items.length; i++) itemCon.appendChild(makeItemRow(items[i], i, isDark, itemCon, key));

    // Add Button
    const add = makeButton(addSVG, "addItem");
    add.addEventListener("click", () => {
      customMenus[key].items.push({ text: "new item", value: "new value" });
      renderItemList(customMenus[key], isDark, key);
    });
    itemCon.appendChild(add);
  }

  function initMenuMaker() {
    extRevmovable = false;
    const allBlocks = ScratchBlocks.mainWorkspace.blockDB_; // Custom Block Modal Overrides BlockDB
    ScratchBlocks.Procedures.createProcedureDefCallback_();
    const isDark = isPM ? document.body.getAttribute("theme") === "dark" : ReduxStore.getState().scratchGui.theme.theme.gui === "dark";

    // Clean Modal
    const blockSpace = document.querySelector(`[class^="custom-procedures_workspace_"]`);
    blockSpace.remove();
    const buttons = document.querySelector(`[class*="custom-procedures_body_"]`);
    for (let i = buttons.children.length - 1; i--;) buttons.removeChild(buttons.firstChild);

    // New Title
    const title = document.querySelector(`[class*="modal_header-item-title_"]`);
    title.textContent = "Make a Dropdown";

    createMenuList(Object.keys(customMenus), buttons, isDark);
    ghostInputRemove(`[class*="removableTextInput"]`);

    // Override "OK" Button
    const okBtn = document.querySelector(`[class^="custom-procedures_ok-button_"]`);
    const clonedOkBtn = okBtn.cloneNode(true);
    okBtn.replaceWith(clonedOkBtn);
    clonedOkBtn.addEventListener("click", () => {
      // All Menus should Have At least 1 in a Menu
 			for (const [key, menu] of Object.entries(customMenus)) {
  			if (menu.items.length === 0) menu.items = [{ text: "foo", value: "bar" }];
			}
      document.querySelector(`[class^="close-button_close-button_"]`).click();
      refreshMagic();

      // Remove Menu Blocks that no Longer Exist
      const menuNames = Object.keys(customMenus);
      for (const [key, block] of Object.entries(allBlocks)) {
        if (block.type.startsWith("SP0zMenuMaker_menu_")) {
          if (menuNames.indexOf(block.type.replace("SP0zMenuMaker_menu_", "")) === -1) block.dispose();
        }
		  }
    });
  }

  // Menu Block Color Setters
  function updateMenuColor(id, mainWorkspace, tree) {
    const block = mainWorkspace.getBlockById(id);
    if (!block || !block.type.startsWith("SP0zMenuMaker_menu")) {
      if (block && tree && block.childBlocks_) {
        for (var i = 0; i < block.childBlocks_.length; i++) {
          const child = block.childBlocks_[i];
          if (child.type.startsWith("SP0zMenuMaker_menu")) updateMenuColor(child.id, mainWorkspace, false);
          else if (child.childBlocks_) updateMenuColor(child.id, mainWorkspace, true);
        }
      }
      return;
    }
    const parent = block.parentBlock_;
    const box = block.inputList[0]?.fieldRow[0]?.box_;
    if (!box) return;
    if (parent) {
      block.setColour(parent.colour_, parent.colourSecondary_, parent.colourTertiary_);
      box.setAttribute("fill", parent.colour_);
      box.setAttribute("stroke", parent.colourTertiary_);
    } else {
      block.setColour("#0FBD8C", "#0eaa7e", "#0c9770");
      box.setAttribute("fill", "#0FBD8C");
      box.setAttribute("stroke", "#0c9770");
    }
  }

  function attachEvents() {
    if (Scratch.gui) Scratch.gui.getBlockly().then(SB => {
      const mainWorkspace = SB.mainWorkspace;
      const workspaceEvents = (e) => {
        if (e.type == SB.Events.END_DRAG && Object.hasOwn(e, "blockId")) {
          if (mainWorkspace.id === e.workspaceId) updateMenuColor(e.blockId, mainWorkspace, true);
        }
      }
      mainWorkspace.addChangeListener(workspaceEvents);
      const updateAllBlocks = () => {
        for (const [key, block] of Object.entries(mainWorkspace.blockDB_)) updateMenuColor(block.id, mainWorkspace, false);
      };
      vm.on("workspaceUpdate", updateAllBlocks);
      updateAllBlocks();
	  });
  }
  function startListenerWorker() {
    if (typeof ReduxStore === "undefined") return;
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

  class SP0zMenuMaker {
    constructor() {
      const self = this; // To avoid slow writes every time a menu is changed
      const oldToJSON = vm.constructor.prototype.toJSON;
      vm.constructor.prototype.toJSON = function (...args) {
        if (extRevmovable) return oldToJSON.apply(this, args);
        if (!isPM) vm.runtime.extensionStorage.SP0zMenuMaker = self.serialize().SP0zMenuMaker;

        // Make the extension stay by adding a dummy block
        const blocks = runtime.targets[0].blocks;
        blocks._blocks[TEMP_BLOCK_OPCODE] = {
          opcode: TEMP_BLOCK_OPCODE, id: TEMP_BLOCK_OPCODE, fields: {},
          next: null, parent: null, shadow: false, toLevel: true,
          x: undefined, y: undefined
        }
        const jsonStr = oldToJSON.apply(this, args);
        // Block IDs may have been compressed at this point
        const tempBlockId = Object.values(blocks._blocks).find(o => o.opcode === TEMP_BLOCK_OPCODE)?.id;
        if (tempBlockId) delete blocks._blocks[tempBlockId];
        return jsonStr;
      };

      const oldinstallTargets = vm.installTargets;
      vm.installTargets = function (...args) {
        // Remove the dummy block
        if (args[0] && args[0][0]) {
          const tempBlockId = Object.values(args[0][0].blocks._blocks).find(o => o.opcode === TEMP_BLOCK_OPCODE)?.id;
          if (tempBlockId) delete args[0][0].blocks._blocks[tempBlockId];
        }
        return oldinstallTargets.apply(this, args);
      };

      // Load the menus
      this.refreshStorage();
      vm.runtime.on("PROJECT_LOADED", () => {
        const refreshWorkspace = vm.refreshWorkspace;
        vm.refreshWorkspace = () => {};
        this.refreshStorage();
        vm.extensionManager.refreshBlocks();
        vm.refreshWorkspace = refreshWorkspace;
        vm.once("BEFORE_EXECUTE", () => vm.refreshWorkspace());
    	});
    }

    refreshStorage() { // TurboWarp support
      if (!isPM) this.deserialize(vm.runtime.extensionStorage);
    }
    getInfo() {
      // Used to Load the Menus
      if (this.needsRefresh) {
        this.needsRefresh = false;
        setTimeout(() => refreshMagic(), 0);
      }
      return {
        id: "SP0zMenuMaker",
        name: "Dropdown Maker",
        menuIconURI,
        blocks: [
          {
            func: "makeMenu",
            blockType: Scratch.BlockType.BUTTON,
            text: "Open Menu Editor"
          },
          {
            func: "removeExt",
            blockType: Scratch.BlockType.BUTTON,
            text: "Remove this Extension"
          },
          {
            opcode: "importMenus",
            blockType: Scratch.BlockType.COMMAND,
            text: "import custom dropdown JSON [MENUS]",
            arguments: {
              MENUS: { type: Scratch.ArgumentType.STRING, defaultValue: `{ "myMenu-1": { "items": [{ "text": "one", "value": "1" }] } }` }
            }
          },
          {
            opcode: "exportMenus",
            blockType: Scratch.BlockType.REPORTER,
            text: "custom dropdowns JSON"
          },
          { blockType: Scratch.BlockType.LABEL, text: "My Menus" },
          { blockType: Scratch.BlockType.XML, xml: menusXML }
        ],
        menus: customMenus,
      };
    }

    makeMenu() { initMenuMaker() }

    removeExt() {
      extRevmovable = true;
      const deleteBlock = (target, blockId) => {
        if (target === vm.editingTarget && Scratch.gui) Scratch.gui.getBlockly().then(SB => SB.getMainWorkspace().getBlockById(blockId)?.dispose(true, false));
        else target.blocks.deleteBlock(blockId);
      };
      customMenus = {};
      menusXML = `<label text="Try creating some menus!" />`;
      for (const target of runtime.targets) {
        for (const block of Object.values(target.blocks._blocks)) {
          if (block.opcode.startsWith("SP0zMenuMaker_")) deleteBlock(target, block.id);
        }
      }
      vm.extensionManager.refreshBlocks();
      alert("Save and reload the project for the extension to fully be removed.");
    }

    importMenus(args) {
      try {
        const menus = JSON.parse(args.MENUS);
        if (typeof menus !== "object" || menus === null || Array.isArray(menus)) return alert("Imported JSON Must be an Object");
        for (const key in menus) {
          if (hasOwn(menus, key)) {
            const innerObject = menus[key];
            if (!hasOwn(innerObject, "items")) return alert(`${key} Menu Needs an "items" Key`);
            for (const innerKey in innerObject) {
              if (hasOwn(innerObject, innerKey) && innerKey !== "items") delete innerObject[innerKey];
            }
            menus[key].acceptReporters = false;
            const items = innerObject.items;
            if (!Array.isArray(items)) return alert(`"items" key in ${key} Menu Must be an Array`);
            if (items.length === 0) return alert(`"items" key in ${key} Menu Must have at Least 1 Item`);
            for (const item of items) {
              if (typeof item !== "object" || item === null || Array.isArray(item)) return alert(`items in "items" key in ${key} Menu Must be Objects`);
              const keys = Object.keys(item);
              if (keys.length !== 2 || !keys.includes("text") || !keys.includes("value")) return alert(`items in "items" key in ${key} Menu Must have 2 keys, "text" and "value"`);
              if (typeof item.text !== "string" || typeof item.value !== "string") return alert(`"item" values in ${key} Menu Must be Strings`);
            }
          }
        }
        customMenus = menus;
        refreshMagic();
        // Remove Menu Blocks that no Longer Exist
        const allBlocks = ScratchBlocks.mainWorkspace.blockDB_;
        const menuNames = Object.keys(customMenus);
        for (const [key, block] of Object.entries(allBlocks)) {
  	      if (block.type.startsWith("SP0zMenuMaker_menu_")) {
  	     	  if (menuNames.indexOf(block.type.replace("SP0zMenuMaker_menu_", "")) === -1) block.dispose();
  	      }
		    }
      } catch { alert("Couldnt Parse Imported Custom Menu JSON") }
    }

    exportMenus() { return JSON.stringify(customMenus) }

    // PenguinMod + IntermediaryTW Storage
    serialize() { return { SP0zMenuMaker : { menus : customMenus } } }
    deserialize(data) {
      if (data.SP0zMenuMaker !== undefined) customMenus = data.SP0zMenuMaker.menus;
      else startListenerWorker();
      this.needsRefresh = true;
    }
  }
  Scratch.extensions.register((extensionInstance = new SP0zMenuMaker()));
  if (isPM && typeof scaffolding === "undefined") {
    refreshMagic();
    startListenerWorker();
  }
})(Scratch);
