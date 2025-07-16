// Name: Custom Input Test [PM]
// ID: SPcustomInputTest
// Description: Testing Custom Inputs
// By: SharkPool
// Licence: MIT

// Version V.1.0.0

(function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) throw new Error("Custom Input Test [PM] must run unsandboxed!");

  const vm = Scratch.vm;
  const runtime = vm.runtime;

  if (Scratch.gui) {
    Scratch.gui.getBlockly().then(SB => {
      SB.FieldCustom.registerInput(
        "button-test",
        (() => {
          const container = document.createElement('div');
          container.style.marginTop = "-2px";
          container.style.width = '150px';
          container.style.height = '100%';
          container.style.display = 'flex';

          const button1 = document.createElement("div");
          const img1 = document.createElement("img");
          img1.width = "25";
          img1.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NDgiIGhlaWdodD0iNDQ4IiB2aWV3Qm94PSIwIDAgNDQ4IDQ0OCI+PHBhdGggc3R5bGU9ImZpbGw6I2ZmZjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiBkPSJNMzIgNjM2LjM2MmgzODR2Mzg0SDMyeiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtNjA0LjM2MikiLz48L3N2Zz4=";
          button1.append(img1);
          button1.classList.add('button1');

          const button2 = document.createElement("div");
          const img2 = document.createElement("img");
          img2.width = "25";
          img2.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDE1IDE1IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNCA3LjVhNi41IDYuNSAwIDEgMS0xMyAwIDYuNSA2LjUgMCAwIDEgMTMgMCIvPjwvc3ZnPg==";
          button2.append(img2);
          button2.classList.add('button1');

          const button3 = document.createElement("div");
          const img3 = document.createElement("img");
          img3.width = "25";
          img3.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDE1IDE1IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik03LjUzOSAyYy0uMjk1IDAtLjQ4OS4xNzctLjYxNi4zODVsLTUuODQ2IDkuNTM4QzEgMTIgMSAxMi4xNTMgMSAxMi4zMDhjMCAuNTM4LjM4NS42OTIuNjkyLjY5MmgxMS42MTZjLjM4NCAwIC42OTItLjE1NC42OTItLjY5MiAwLS4xNTQgMC0uMjMxLS4wNzctLjM4NWwtNS43Ny05LjUzOEM4LjAyOSAyLjE3NyA3Ljc4OSAyIDcuNTM5IDIiLz48L3N2Zz4=";
          button3.append(img3);
          button3.classList.add('button1');

          container.append(button1, button2, button3);
          return container.cloneNode(true);
        })(),
        (field, input) => {
          input = field.inputParts.html;
          input.parentNode.setAttribute("height", 45);
          const block = field.sourceBlock_;
          const childs = Array.from(input.querySelectorAll(`div[class="button1"]`));
          for (var i = 0; i < childs.length; i++) {
            const e = childs[i];
            e.setAttribute("style", `box-shadow: #00000050 1.5px 1.5px 1px 1px; background: ${block.colour_}; border: solid 1.5px ${block.colourTertiary_}; margin-left: 5px; height: max-content;`);
            if (i === 0) e.style.borderRadius = "8px 0 0px 8px";
            if (i === 2) e.style.borderRadius = "0 8px 8px 0";
            e.firstChild.style.margin = "5px 5px 0px 5px";
          }

          input.addEventListener("mousedown", (e) => {
            const childs = Array.from(input.querySelectorAll(`div[class="button1"]`));
            const el = e.target.closest(`div[class="button1"]`);
            if (!el) return;
            for (const child of childs) {
              child.style.boxShadow = `#00000050 1.5px 1.5px 1px 1px`;
              child.style.transform = "";
            }
            el.style.boxShadow = ``;
            el.style.transform = "translate(2px, 2px)";
          });
        },
        (block, input) => {},
        (block, input) => {}
      );

      SB.FieldCustom.registerInput(
        "slider-test",
        (() => {
          const container = document.createElement('div');
          container.style.width = '120px';
          container.style.height = "90%";
          container.style.margin = "2px 0 0 0";
          container.style.position = 'relative';
          container.style.background = '#ddd';
          container.style.borderRadius = '12px';
          container.style.cursor = 'pointer';
          container.style.display = 'block';

          const fill = document.createElement('div');
          fill.style.position = 'absolute';
          fill.style.height = '100%';
          fill.style.left = '0';
          fill.style.top = '0';
          fill.style.background = 'red';
          fill.style.borderRadius = '10px';
          fill.style.width = '50%';
          container.appendChild(fill);

          const knob = document.createElement('div');
          knob.style.position = 'absolute';
          knob.style.top = '0';
          knob.style.width = '16px';
          knob.style.height = '100%';
          knob.style.background = '#222';
          knob.style.borderRadius = '0';
          knob.style.left = 'calc(50% - 8px)';
          container.appendChild(knob);

          return container;
        })(),
        (field, input) => {
          input.firstChild.style.background = field.sourceBlock_.getColourSecondary();
          input.style.border = `2px solid ${field.sourceBlock_.getColourTertiary()}`;

          function updateUI(value) {
            value = Math.max(0, Math.min(100, value));
            input.firstChild.style.width = `${value}%`;
            input.children[1].style.left = `calc(${value}% - 8px)`;
          }

          const val = parseFloat(field.getValue()) || 50;
          updateUI(val);

          let isDragging = false;

          function onMouseDown(e) {
            field.sourceBlock_?.setMovable(false);
            ScratchBlocks.mainWorkspace.isDraggable = () => false;
            isDragging = true;
            onMouseMove(e);
          }

          function onMouseUp() {
            isDragging = false;
            field.sourceBlock_?.setMovable(true);
            ScratchBlocks.mainWorkspace.isDraggable = () => !!ScratchBlocks.scrollbar;
          }

          function onMouseMove(e) {
            if (!isDragging) return;
            const rect = input.getBoundingClientRect();
            const relX = e.clientX - rect.left;
            let percent = (relX / rect.width) * 100;
            percent = Math.max(0, Math.min(100, percent));
            updateUI(percent);
            field.setValue(percent.toFixed(0));
          }

          input.addEventListener('mousedown', onMouseDown);
          document.addEventListener('mousemove', onMouseMove);
          document.addEventListener('mouseup', onMouseUp);

          input._cleanup = () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
          };
        },
        (block) => {},
        (block) => {}
      );
    });
  }

  class SPcustomInputTest {
    getInfo() {
      return {
        id: "SPcustomInputTest",
        name: "Custom Input Test [PM]",
        color1: "#ff2020",
        blocks: [
          {
            opcode: "buttonBlock",
            blockType: Scratch.BlockType.COMMAND,
            extensions: ["colours_looks"],
            text: "Buttons [THING]",
            arguments: {
              THING: { type: Scratch.ArgumentType.CUSTOM, id: "button-test", defaultValue: "test" }
            },
          },
          {
            opcode: "sliderTest",
            blockType: Scratch.BlockType.REPORTER,
            text: "slider [THING] test",
            arguments: {
              THING: { type: Scratch.ArgumentType.CUSTOM, id: "slider-test", defaultValue: "50" }
            },
          }
        ],
      };
    }

    // Block Funcs
    buttonBlock(args) {
      return args.THING;
    }

    sliderTest(args) {
      return args.THING;
    }
  }

  Scratch.extensions.register(new SPcustomInputTest());
})(Scratch);