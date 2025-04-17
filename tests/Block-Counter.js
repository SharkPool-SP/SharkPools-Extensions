(function(Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) throw new Error("... must run unsandboxed!");

  const vm = Scratch.vm;
  const runtime = vm.runtime;

  let oldListener;

  function updateCategoryCount(SB, autoUpdate) {
    const workspace = SB.mainWorkspace;
    const categories = workspace.toolbox_?.categoryMenu_?.categories_ ?? [];

    const categoryCounts = {};
    if (autoUpdate) {
      const blocks = Object.values(workspace.blockDB_);
      for (const block of blocks) {
        if (!block.rendered) continue;
        let category = block.category_;
        if (category === "data") category = "variables";
        else if (category === "data-lists") category = "lists";
        else if (!category) {
          if (block.type.startsWith("procedures_") || block.type.startsWith("argument_reporter_")) category = "myBlocks";
          else continue;
        }
        if (!categoryCounts[category]) categoryCounts[category] = 0;
        categoryCounts[category]++;
      }
    }

    for (const category of categories) {
      let label;
      if (category.countLabel) label = category.countLabel.label;
      else {
        label = document.createElement("div");
        category.countLabel = { ind: 0, label };
        label.style.color = category.colour_;
        category.label_.appendChild(label)
      }

      let count = autoUpdate ? categoryCounts[category.id_] ??
        categoryCounts[category.name_] ?? 0 : category.countLabel.ind;
      label.textContent = `(${count})`;
    }
  }

  function blockListener(event, SB) {
    const { Events, mainWorkspace } = SB;
    if (mainWorkspace.id === event.workspaceId) {
      const ogToolboxUpdate = mainWorkspace.updateToolbox;
      mainWorkspace.updateToolbox = function(tree) {
        ogToolboxUpdate.call(this, tree);
        updateCategoryCount({ mainWorkspace: this });
      }

      if (event.type === Events.CREATE || event.type === Events.DELETE) {
        updateCategoryCount(SB, true);
      }
    }
  }

  function initBlockEvents() {
    if (Scratch.gui) Scratch.gui.getBlockly().then(SB => {
      const mainWorkspace = SB.mainWorkspace;
      if (!mainWorkspace?.rendered) return;

      if (oldListener) mainWorkspace.removeChangeListener(oldListener);
      oldListener = (event) => blockListener(event, SB);
      mainWorkspace.addChangeListener(oldListener);
    });
  }

  function startListenerWorker() {
    const checkInEditor = () => !ReduxStore.getState().scratchGui.mode.isPlayerOnly;
    let inEditor = checkInEditor();
    if (inEditor) initBlockEvents();
    ReduxStore.subscribe(() => {
      const currentlyInEditor = checkInEditor();
      if (inEditor !== currentlyInEditor) inEditor = currentlyInEditor;
      if (inEditor) initBlockEvents();
    });
  }
  if (typeof scaffolding === "undefined") startListenerWorker();

  class SPtest {
    getInfo() {
      return {
        id: "SPtest",
        name: "...",
        blocks: [],
        menus: {},
      };
    }
  }

  Scratch.extensions.register(new SPtest());
})(Scratch);
