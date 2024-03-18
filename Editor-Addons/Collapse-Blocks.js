// Name: Collapse Blocks
// ID: SPcollapse
// Description: Collapse C-Blocks
// By: SharkPool

// Version V.1.0.0

(function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) throw new Error("Collapse Block Extension must run unsandboxed!");

  const vm = Scratch.vm;
  const runtime = vm.runtime;

  const menuIconURI =
"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI3Mi42NDM5OCIgaGVpZ2h0PSI3Mi42NDM5OCIgdmlld0JveD0iMCwwLDcyLjY0Mzk4LDcyLjY0Mzk4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjAzLjY3ODAxLC0xNDMuNjc4MDEpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0yMDUuNDI4MDEsMTgwYzAsLTE5LjA5MzU4IDE1LjQ3ODQxLC0zNC41NzE5OSAzNC41NzE5OSwtMzQuNTcxOTljMTkuMDkzNTgsMCAzNC41NzE5OSwxNS40Nzg0MSAzNC41NzE5OSwzNC41NzE5OWMwLDE5LjA5MzU4IC0xNS40Nzg0MSwzNC41NzE5OSAtMzQuNTcxOTksMzQuNTcxOTljLTE5LjA5MzU4LDAgLTM0LjU3MTk5LC0xNS40Nzg0MSAtMzQuNTcxOTksLTM0LjU3MTk5eiIgZmlsbD0iIzcxNWI0YSIgc3Ryb2tlPSIjM2UyNjE0IiBzdHJva2Utd2lkdGg9IjMuNSIvPjxwYXRoIGQ9Ik0yMzcuMDY2MDMsMTYxLjU4OTE0YzAsMCAtMC4wMDY4OCwtNi40MDgwNSAtMC4wMDg0NywtOC41ODgzN2MtMC4wMDA2NywtMC45NTU0MiAxLjUzMTYzLC0xLjczMDU5IDIuOTA3NDIsLTEuNzMxMTljMS4zNzU3OSwtMC4wMDA2IDIuOTA5MDMsMC43NzMyMiAyLjkwOTc0LDEuNzI4NjdjMC4wMDEzOCwxLjg4ODE5IDAuMDA4NzQsOC42ODE2NSAwLjAwODc0LDguNjgxNjVjMCwwIDMuODQ0NTcsLTAuOTM2ODcgNC41MjA1NCwtMC4yNjE3MWMwLjY3NTk3LDAuNjc1NDggMC42NzY5NSwxLjc3MDQ5IDAuMDAxNzksMi40NDY0NmMtMi4xNjA3MSwyLjE2NDIxIC02LjIwMTkxLDYuMjEwODEgLTYuMjAxOTEsNi4yMTA4MWMtMC42NzUxMywwLjY3NTk3IC0xLjc3MDQ5LDAuNjc2NzcgLTIuNDQ2MzIsMC4wMDE3OWMwLDAgLTMuNDkyMjYsLTMuNDg3IC02LjE2MTI0LC02LjE1MjFjLTAuNjc2NDYsLTAuNjc1NDggLTAuNjc3MjYsLTEuNzcwNjcgLTAuMDAxNzksLTIuNDQ2NWMwLjY3NDk5LC0wLjY3NjE0IDQuNDcxNTEsMC4xMTA0OSA0LjQ3MTUxLDAuMTEwNDl6IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMCIvPjxwYXRoIGQ9Ik0yMzIuNTk0NTIsMTk4LjUyMTM1Yy0wLjY3NTQ4LC0wLjY3NTgzIC0wLjY3NDY3LC0xLjc3MTAyIDAuMDAxNzksLTIuNDQ2NWMyLjY2ODk4LC0yLjY2NTEgNi4xNjEyNCwtNi4xNTIxIDYuMTYxMjQsLTYuMTUyMWMwLjY3NTgzLC0wLjY3NDk5IDEuNzcxMTksLTAuNjc0MTkgMi40NDYzMiwwLjAwMTc4YzAsMCA0LjA0MTIsNC4wNDY2IDYuMjAxOTEsNi4yMTA4MmMwLjY3NTE2LDAuNjc1OTcgMC42NzQxOSwxLjc3MDk4IC0wLjAwMTc4LDIuNDQ2NDZjLTAuNjc1OTcsMC42NzUxNiAtNC41MjA1NSwtMC4yNjE3MSAtNC41MjA1NSwtMC4yNjE3MWMwLDAgLTAuMDA3MzYsNi43OTM0NSAtMC4wMDg3NCw4LjY4MTY0Yy0wLjAwMDcsMC45NTU0NSAtMS41MzM5NSwxLjcyOTI3IC0yLjkwOTc0LDEuNzI4NjdjLTEuMzc1NzksLTAuMDAwNiAtMi45MDgwOSwtMC43NzU3NyAtMi45MDc0MiwtMS43MzExOWMwLjAwMTU5LC0yLjE4MDMyIDAuMDA4NDcsLTguNTg4MzcgMC4wMDg0NywtOC41ODgzN2MwLDAgLTMuNzk2NTIsMC43ODY2NCAtNC40NzE1MSwwLjExMDQ5eiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIwIi8+PHBhdGggZD0iTTIxNy4zNTI2NywxODMuOTg2MDhjMCwtMi45MTE4OCAwLC02LjEwMzY3IDAsLTcuODY1ODljMCwtMi41MzI4NyAxLjMyMzc0LC02LjAzMDU0IDMuMzgzMTQsLTUuNTk4NzZjNC44OTI4MiwxLjAyNTg1IDEzLjkzODE4LDIuNzU3NDEgMTkuMjQ5MzMsMi43NTc0MWM1LjI5NjU4LDAgMTQuMzExNzgsLTEuNzE5ODEgMTkuMjIzNTksLTIuNzQ2OTNjMi4wOTExOCwtMC40MzcyOSAzLjQzODU5LDEuODQ4OTUgMy40Mzg1OSwzLjg0MDNjMCwxLjg5OTY5IDAsNi4wMzE2OCAwLDkuNjEzODdjMCwzLjQxODA1IC0xLjM4MzM3LDUuOTc1NDcgLTMuNTIyMTQsNS40NzMyNGMtNC45Mjk5LC0xLjE1NzY0IC0xMy44NzMzNSwtMy4wNzA2NiAtMTkuMTQwMDQsLTMuMDcwNjZjLTUuMjMxMDYsMCAtMTQuMDg0NTYsMS44ODk3IC0xOS4wMjUxOCwzLjA0OTM0Yy0yLjE4NywwLjUxMzMzIC0zLjYwNzI5LC0yLjA5ODU0IC0zLjYwNzI5LC01LjQ1MTkyeiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiLz48L2c+PC9nPjwvc3ZnPg==";

  function collapse() {
    if (ScratchBlocks.selected) {
      const inputs = ScratchBlocks.selected.inputList;
      for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].name.includes("SUBSTACK")) {
          if (inputs[i].visible_) inputs[i].setVisible(false);
          else inputs[i].setVisible(true);
        }
      }
      ScratchBlocks.mainWorkspace.render();
    }
  }

  function handleMutation(mutationsList) {
    for(const mutation of mutationsList) {
      if (mutation.type === "childList") {
        const targetNode = Array.from(mutation.addedNodes).find(node => node.classList && node.classList.contains("goog-menu") && node.classList.contains("goog-menu-vertical") && node.classList.contains("blocklyContextMenu"));
        if (targetNode && ScratchBlocks.selected !== null) {
          let inputs = ScratchBlocks.selected.inputList;
          let type = ["Collapse", 0];
          for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].name.includes("SUBSTACK")) {
              type[1]++;
              if (!inputs[i].visible_) { type[0] = "Uncollapse"; break }
            }
          }
          if (type[1] === 0) return;
          const newItem = document.createElement("div");
          newItem.classList.add("goog-menuitem", "sa-blockly-menu-item-border");
          newItem.addEventListener("mouseenter", function() { newItem.classList.add("goog-menuitem-highlight") });
          newItem.addEventListener("mouseleave", function() { newItem.classList.remove("goog-menuitem-highlight") });

          newItem.setAttribute("role", "menuitem");
          newItem.id = ":99"; newItem.style.userSelect = "none";
          newItem.style.paddingTop = "2px"; newItem.style.borderTop = "1px solid var(--ui-black-transparent)";
          newItem.innerHTML = `<div class="goog-menuitem-content" style="user-select: none;">${type[0]}</div>`;
          newItem.addEventListener("click", handleClick);
          const thirdChild = targetNode.children[2];
          thirdChild.parentNode.insertBefore(newItem, thirdChild.nextSibling);
        }
      }
    }
  }
  function handleClick(event) {
    collapse();
    event.target.removeEventListener("click", handleClick);
    ScratchBlocks.selected = null;
    const item = event.currentTarget.parentNode;
    item.parentNode.removeChild(item);
  }
  const observer = new MutationObserver(handleMutation);
  observer.observe(document, { childList: true, subtree: true });

  class SPcollapse {
    getInfo() {
      return {
        id: "SPcollapse",
        name: "Collapse Blocks",
        menuIconURI,
        blocks: [
          { blockType: Scratch.BlockType.XML, xml: "<sep gap=\"6\"/><label text=\"Right-Clicking Blocks Should\"/><sep gap=\"0\"/><sep gap=\"0\"/>" },
          { blockType: Scratch.BlockType.XML, xml: "<sep gap=\"-6\"/><label text=\"Have an Option to Collapse\"/><sep gap=\"-24\"/><sep gap=\"12\"/>" }
        ],
      };
    }
  }

  Scratch.extensions.register(new SPcollapse());
})(Scratch);
