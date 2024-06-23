/**!
 * Script Manager
 * @author 0znzw https://scratch.mit.edu/users/0znzw/
 * @version 1.0 (Please update)
 * @copyright MIT License
 * Do not remove this comment
 */
(function (Scratch) {
  'use strict';

  console.log('"Script Manager": https://surv.is-a.dev/survs-gallery/');
  console.warn('This version of "Script Manager" is out of date, please use the latest version.', '\nhttps://surv.is-a.dev/survs-gallery/')
  if (!Scratch.extensions.unsandboxed) {
    throw new Error(`"Script Manager" extension must be ran unsandboxed.`);
  }
  // @ts-ignore This is a PenguinMod feature
  if (Scratch.extensions.isPenguinMod) console.warn('I see your using PenguinMod, please do not report any bugs that happen on here as i do not actively support PenguinMod.');

  let vm = Scratch.vm;

  function getBlockByID(target, id) {
    return target.blocks._blocks[id];
  }

  function getOuterCblock(target, startId) {
    let block = getBlockByID(target, startId);
    let isC = false;
    while (!isC && block.hasOwnProperty('parent') && block.parent !== null) {
      block = getBlockByID(target, block.parent);
      isC = block.hasOwnProperty('inputs') && block.inputs.hasOwnProperty('SUBSTACK');
    }
    return isC ? block : null;
  }

  function getOuterCtillOpcode(target, startId, opcode) {
    let currentC = getOuterCblock(target, startId);
    while (currentC != null && currentC.opcode !== opcode) {
      currentC = getOuterCblock(target, currentC.id);
    }
    return currentC;
  }

  function label(text) {
    return { blockType: 'label', text };
  }
  function button(text, func) {
    return { blockType: 'button', text, func };
  }
  //@ts-ignore
  let monitoredThreads = window.monitoredThreads || {};

  class extension {
    constructor() {
      this.lastBlock = '';
      this.lastUtil = {};
      this.target = undefined;
    }
    getInfo() {
      return {
        id: '0znzwScriptManagement',
        name: 'Script Management',
        color1: '#545454',
        color2: '#494949',
        menuIconURI: 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxMzEuNSIgaGVpZ2h0PSIxMzEuNSIgdmlld0JveD0iMCwwLDEzMS41LDEzMS41Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTc0LjI1LC0xMTQuMjUpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0xNzcuNSwxODBjMCwtMzQuNTE3OCAyNy45ODIyLC02Mi41IDYyLjUsLTYyLjVjMzQuNTE3OCwwIDYyLjUsMjcuOTgyMiA2Mi41LDYyLjVjMCwzNC41MTc4IC0yNy45ODIyLDYyLjUgLTYyLjUsNjIuNWMtMzQuNTE3OCwwIC02Mi41LC0yNy45ODIyIC02Mi41LC02Mi41eiIgZmlsbD0iIzU0NTQ1NCIgc3Ryb2tlPSIjMjgyODI4IiBzdHJva2Utd2lkdGg9IjYuNSIvPjxwYXRoIGQ9Ik0xOTAuMDEzMTMsMTY0LjcxNTAxYy0wLjI5NzA0LC0yLjEzNTYyIDEuMTkzNDIsLTQuMTA3NjcgMy4zMjkwNCwtNC40MDQ3Mmw3LjczMzc2LC0xLjA3NTY4YzEuOTMzNDQsLTAuMjY4OTIgMy4wMzQ2MiwwLjU2MzMzIDQuMTM1OCwxLjM5NTZsNC40MDQ3MiwzLjMyOTA0YzEuMTAxMTgsMC44MzIyNiAyLjIwMjM2LDEuNjY0NTIgNC4xMzU4LDEuMzk1NmwxMS42MDA2NCwtMS42MTM1MmMxLjkzMzQ0LC0wLjI2ODkyIDIuNzY1NywtMS4zNzAxIDMuNTk3OTYsLTIuNDcxMjhsMy4zMjkwNCwtNC40MDQ3MmMwLjgzMjI2LC0xLjEwMTE4IDEuNjY0NTIsLTIuMjAyMzYgMy41OTc5NiwtMi40NzEyOGw0NC4zMjU5MSwtNi4xNjUyNGMyLjEzNTYyLC0wLjI5NzA0IDQuMTA3NjcsMS4xOTM0MiA0LjQwNDcyLDMuMzI5MDRsNS4zNzg0LDM4LjY2ODhjMC4yOTcwNCwyLjEzNTYyIC0xLjE5MzQyLDQuMTA3NjcgLTMuMzI5MDQsNC40MDQ3MmwtNDQuMzI1OTEsNi4xNjUyNGMtMS45MzM0NCwwLjI2ODkyIC0yLjc2NTcsMS4zNzAxIC0zLjU5Nzk2LDIuNDcxMjhsLTMuMzI5MDQsNC40MDQ3MmMtMC44MzIyNiwxLjEwMTE4IC0xLjY2NDUyLDIuMjAyMzYgLTMuNTk3OTYsMi40NzEyOGwtMTEuNjAwNjQsMS42MTM1MmMtMS45MzM0NCwwLjI2ODkyIC0zLjAzNDYyLC0wLjU2MzMzIC00LjEzNTgsLTEuMzk1NmwtNC40MDQ3MiwtMy4zMjkwNGMtMS4xMDExOCwtMC44MzIyNiAtMi4yMDIzNiwtMS42NjQ1MiAtNC4xMzU4LC0xLjM5NTZsLTcuNzMzNzYsMS4wNzU2OGMtMi4xMzU2MiwwLjI5NzA0IC00LjEwNzY3LC0xLjE5MzQyIC00LjQwNDcyLC0zLjMyOTA0eiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiLz48cGF0aCBkPSJNMjc4LjM2NzY5LDE3OS4xMjZsLTEuMDk0ODQsMy4yMzk3OWMtMC4zNjczNCwxLjA4NyAtMS41NDg4NSwxLjYzODk2IC0yLjYzNTA2LDEuMjcxODlsLTEuOTE0ODIsLTAuNjQ3MDhjLTAuODIzOTgsMS4yNjUyMiAtMS44MjExOCwyLjM4NTI3IC0yLjk0NTU5LDMuMzMwMTlsMC45MDQ2NywxLjg1NDY0YzAuMjQ0OSwwLjQ5NzU2IDAuMjgzNzMsMS4wNjExMiAwLjEwNTksMS41ODczNGMtMC4xNzkxMywwLjUyNDkgLTAuNTUwMDMsMC45NTE3NSAtMS4wNDY4LDEuMTk2OTJsLTMuMDY3NiwxLjUxNjAxYy0wLjQ5Njc3LDAuMjQ1MTcgLTEuMDYxNjQsMC4yODI2OCAtMS41ODc4NSwwLjEwNDg1Yy0wLjUyNzAxLC0wLjE3ODA5IC0wLjk1MjgsLTAuNTQ5NTEgLTEuMTk5MDEsLTEuMDQ4MzhsLTAuOTQ2MTUsLTEuOTA1NDFjLTEuNDA4MjQsMC4yODgwNiAtMi44NDYzOSwwLjM5MDEzIC00LjM0ODg2LDAuMjYwNDNsLTAuNjkxNDEsMi4wNDU5OGMtMC4zNjcwNywxLjA4NjIxIC0xLjUzMDg4LDEuNjY4NjYgLTIuNjE3MSwxLjMwMTU5bC0zLjI0MjE1LC0xLjA5NTY0Yy0xLjA4NjIxLC0wLjM2NzA3IC0xLjY0NDc5LC0xLjUzMTU3IC0xLjI3NzcyLC0yLjYxNzc4bDAuNjkxMTQsLTIuMDQ1MTljLTEuMjcyMSwtMC44MDg4MSAtMi4zNjEzOCwtMS43NjQ5OCAtMy4zMDYyMSwtMi44NDgyM2wtMS45MjE2NCwwLjkzOTc5Yy0wLjQ5NzU2LDAuMjQ0OSAtMS4wNjE2NCwwLjI4MjY4IC0xLjU4NzA3LDAuMTA1MTJjLTAuNTI1NDQsLTAuMTc3NTYgLTAuOTUwNDUsLTAuNTQ4NzEgLTEuMTk3MTksLTEuMDQ2MDJsLTEuNTE4NjMsLTMuMDY3NjFjLTAuMjQ1OTUsLTAuNDk3MDQgLTAuMjgyOTQsLTEuMDYzNDcgLTAuMTA1MTEsLTEuNTg5NjljMC4xNzc4MywtMC41MjYyMiAwLjU1MDA0LC0wLjk1NDM3IDEuMDQ3ODcsLTEuMjAwMDZsMS44NDM5NiwtMC45MTk2NmMtMC4zMjEsLTEuNDMyNSAtMC40MzQ2MiwtMi45MjcwNiAtMC4zMjA5LC00LjQzNDA1bC0xLjkxNDgyLC0wLjY0NzA4Yy0xLjA4NywtMC4zNjczNCAtMS42NzU3OSwtMS41MTc1NCAtMS4zMDg0NSwtMi42MDQ1NGwxLjA5NDg0LC0zLjIzOTc5YzAuMzY2MjcsLTEuMDgzODYgMS41Mzg3MSwtMS42NjA3NSAyLjYyNTcxLC0xLjI5MzQybDEuOTE0ODIsMC42NDcwOGMwLjgyMzczLC0xLjI2NzA2IDEuODE4NzksLTIuMzc4MiAyLjk0MzcyLC0zLjMyMjA3bC0wLjkwODg5LC0xLjg0NzMyYy0wLjI0Njc0LC0wLjQ5NzMgLTAuMjgyOTUsLTEuMDYwODUgLTAuMTA1MzgsLTEuNTg2MjhjMC4xNzUxNywtMC41MTgzNyAwLjU1NjMzLC0wLjk1NDg3IDEuMDQ3ODUsLTEuMTk3NDRsMy4wNjYwMywtMS41MTY1NGMwLjk5NjQzLC0wLjQ5MTExIDIuMjk3MzMsLTAuMDUyMzcgMi43ODg3LDAuOTQzMjhsMC45NTE2MywxLjkwOTg5YzEuNDA4MjQsLTAuMjg4MDYgMi44NTQ1MSwtMC4zODgyNiA0LjM1NTkzLC0wLjI1ODA0bDAuNjkxOTQsLTIuMDQ3NTVjMC4zNjcwNywtMS4wODYyMSAxLjUyMzM3LC0xLjY5MDQ0IDIuNjA5NTgsLTEuMzIzMzdsMy4yNDIxNSwxLjA5NTY0YzEuMDg2MjEsMC4zNjcwNyAxLjY1MjMxLDEuNTUzMzYgMS4yODUyNCwyLjYzOTU3bC0wLjY5MjIxLDIuMDQ4MzNjMS4yNzMxNSwwLjgwODI4IDIuMzU0NTcsMS43NjE4MSAzLjI5ODEsMi44NDM3NGwxLjkxNTg4LC0wLjk0MDg2YzAuOTkxNzIsLTAuNDkyNyAyLjI5MTgzLC0wLjA1NDIzIDIuNzgzOTksMC45NDE2OGwxLjUxOTE2LDMuMDY2MDRjMC4yNDQ2NSwwLjQ5NTcyIDAuMjgyNjgsMS4wNjE2NCAwLjEwNTEyLDEuNTg3MDdjLTAuMTc3ODMsMC41MjYyMiAtMC41NDk1MSwwLjk1MjggLTEuMDQ2NTUsMS4xOTg3NmwtMS44NDIxLDAuOTE0MTZjMC4zMjI1NywxLjQzMzAzIDAuNDM4ODUsMi45MTk3NCAwLjMyNTkxLDQuNDI2OTlsMS45MTQwMywwLjY0NjgyYzEuMDg2MjEsMC4zNjcwNyAxLjY4MzI5LDEuNTQxOTUgMS4zMTYyMywyLjYyNTU0ek0yNjUuOTg4MDMsMTc2Ljc0Nzc5YzEuMTUxMzcsLTMuNDA3MDggLTAuNzA2MjQsLTcuMTA4MTggLTQuMTQ1NTIsLTguMjcwNDRjLTMuNDM4NSwtMS4xNjE5OSAtNy4xNTg4MiwwLjY1NDEyIC04LjMxMDIsNC4wNjEyYy0xLjE1MDU4LDMuNDA0NzMgMC43MDQxNCw3LjEwOTIyIDQuMTQyNjQsOC4yNzEyMWMzLjQzOTI4LDEuMTYyMjYgNy4xNjE0NSwtMC42NTY3MyA4LjMxMzA5LC00LjA2MTk4eiIgZmlsbD0iIzU0NTQ1NCIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAiLz48L2c+PC9nPjwvc3ZnPjwhLS1yb3RhdGlvbkNlbnRlcjo2NS43NTo2NS43NDk5OTk5OTk5OTk5Ny0tPg==',
        blocks: [
          button('Outdated pls update', 'update'),
          {
            blockType: 'reporter',
            opcode: 'toJSON',
            text: 'project json',
          },
          label('Threads'),
          /* managment */ {
            blockType: 'command',
            opcode: 'set_myself',
            text: 'use this place as command basis',
          },
          {
            blockType: 'reporter',
            opcode: 'get_myself_id',
            text: 'stored block sid',
          },
          {
            blockType: 'command',
            opcode: 'monitorThisThread',
            text: 'monitor current script w/ tid: [ID]',
            arguments: {
              ID: { type: 'string' },
            },
          },
          {
            blockType: Scratch.ArgumentType.BOOLEAN,
            opcode: 'isThreadWithIDrunning',
            text: 'is thread w/ tid: [ID] running?',
            arguments: {
              ID: { type: 'string' },
            },
          },
          {
            blockType: 'command',
            opcode: 'stopThreadWithID',
            text: 'stop thread w/ tid: [ID]',
            arguments: {
              ID: { type: 'string' },
            },
          },
          {
            blockType: 'command',
            opcode: 'restartThreadWithID',
            text: 'attempt restart thread w/ tid: [ID]',
            arguments: {
              ID: { type: 'string' },
            },
          },
          label('Blocks'),
          /* storage */ {
            blockType: 'command',
            opcode: 'setBlockViaID',
            text: 'set block w/ sid: [ID] and json: [block]',
            arguments: {
              ID: { type: 'string' },
              block: { type: 'string', defaultValue: '{}' },
            },
          },
          {
            blockType: 'reporter',
            opcode: 'getBlocksInThread',
            text: 'get blocks in thread w/ tid: [ID]',
            arguments: {
              ID: { type: 'string' },
            },
          },
          {
            blockType: 'reporter',
            opcode: 'getBlockViaID',
            text: 'get block w/ sid: [ID]',
            arguments: {
              ID: { type: 'string' },
            },
          },
          {
            blockType: 'command',
            opcode: 'storeInThread',
            text: 'store data in thread with key [key] and value [value]',
            arguments: {
              key: { type: 'string' },
              value: { type: 'string' },
            },
          },
          {
            blockType: 'reporter',
            opcode: 'getStoreInThread',
            text: 'get data with key [key] in thread data storage',
            arguments: {
              key: { type: 'string' },
            },
          },
          /* scripts */ '---',
          {
            blockType: 'command',
            opcode: 'deleteScriptViaThreadID',
            text: 'delete script w/ tid: [ID]',
            arguments: {
              ID: { type: 'string' },
            },
          },
          {
            blockType: 'command',
            opcode: 'toggleScriptViaThreadID',
            text: 'toggle script w/ tid: [ID]',
            arguments: {
              ID: { type: 'string' },
            },
          },
          {
            blockType: 'reporter',
            opcode: 'getScriptsInSprite',
            text: 'get all scripts in sprite containing thread of tid: [ID]',
            arguments: {
              ID: { type: 'string' },
            },
          },
          {
            blockType: 'reporter',
            opcode: 'getOuterC',
            text: 'get inner most c block relative to this block',
          },
          button('⚠️DANGEROUS OR BROKEN⚠️', 'danger'),
          {
            blockType: 'command',
            opcode: 'forceRestartThreadWithID',
            text: '(ub) force restart thread w/ tid: [ID] and update',
            arguments: {
              ID: { type: 'string' },
            },
          },
          {
            blockType: 'command',
            opcode: 'skipBlocks',
            text: '(eb) restart thread and start [BLOCKS] blocks ahead',
            arguments: {
              BLOCKS: { type: 'number' },
            },
          },
        ],
        menus: {},
      };
    }
    update() {
      if (window.confirm('This version of "Script Manager" is out of date and should not be used.\n\nClicking ok will redirect to my extension gallery so you can get updates. -0znzw')) {
        window.open('https://surv.is-a.dev/survs-gallery/', '_blank');
      };
    }
    danger() {
      alert(`⚠️DANGEROUS OR BROKEN⚠️\nTHESE BLOCKS COULD RUIN YOUR PROJECT
  Warning Prefix labels: 
    Format: (prefix) ...
    nc: No compiler
    ni: No interpreter
    ub: Unsafe or buggy
    eb: Extremely buggy or unsafe
    pc: Project corruption`);
    }
    deleteScriptViaThreadID(args, util) {
      let block = monitoredThreads[args.ID].topBlock;
      //@ts-ignore Yes it does bitch
      vm.runtime.quietGlow(block);
      this.lastUtil.target.blocks._deleteScript(block);
      delete monitoredThreads[args.ID];
    }
    setBlockViaID(args, util) {
      this.lastUtil.target.blocks._blocks[args.ID] = JSON.parse(args.block);
      vm.runtime.requestBlocksUpdate();
    }
    toggleScriptViaThreadID(args) {
      vm.runtime.toggleScript(monitoredThreads[args.ID].topBlock, this.lastUtil.target);
    }
    getBlockViaID(args, util) {
      try {
        return JSON.stringify(this.lastUtil.target.blocks._blocks[args.ID]);
      } catch {
        return '{"error":"invalid block"}';
      }
    }
    get_myself_id() {
      return this.lastBlock;
    }
    set_myself(args, util) {
      this.lastBlock = util.thread.peekStack();
      this.lastUtil = util;
    }
    monitorThisThread(args, util) {
      monitoredThreads[args.ID] = util.thread;
    }
    isThreadWithIDrunning(args) {
      return vm.runtime.isActiveThread(monitoredThreads[args.ID] || { isKilled: true, stack: [] });
    }
    stopThreadWithID(args) {
      try {
        monitoredThreads[args.ID].stopThisScript();
      } catch {}
    }
    restartThreadWithID(args) {
      try {
        vm.runtime._restartThread(monitoredThreads[args.ID]);
      } catch {}
    }
    forceRestartThreadWithID(args) {
      try {
        monitoredThreads[args.ID] = vm.runtime._pushThread(monitoredThreads[args.ID].topBlock, this.lastUtil.target, { stackClick: true });
      } catch {}
    }
    storeInThread(args, util) {
      let thread = util.thread;
      if (!thread.hasOwnProperty('customStorage')) thread.customStorage = {};
      thread.customStorage[args.key] = args.value;
    }
    getStoreInThread(args, util) {
      let thread = util.thread;
      if (!thread.hasOwnProperty('customStorage')) thread.customStorage = {};
      if (!thread.customStorage.hasOwnProperty(args.key)) return null;
      return thread.customStorage[args.key];
    }
    getBlocksInThread(args) {
      let thread = monitoredThreads[args.ID];
      let block = thread.blockContainer.getBlock(thread.topBlock);
      let found = [];
      while (block.next) {
        found.push(block.id);
        if (block.next) block = thread.blockContainer.getBlock(block.next);
      }
      found.push(block.id);
      return JSON.stringify(found);
    }
    getScriptsInSprite(args) {
      return JSON.stringify(monitoredThreads[args.ID].blockContainer.getScripts());
    }
    getOuterC(args, util) {
      return JSON.stringify(getOuterCblock(util.target, util.thread.peekStack()));
    }
    toJSON() {
      return vm.toJSON();
    }
    skipBlocks(args, util) {
      let thread = util.thread;
      let id = thread.peekStack();
      for (let i = 0; i <= Scratch.Cast.toNumber(args.BLOCKS) - 1; i++) {
        //@ts-ignore Nah boi, Ik what im doing.
        id = vm.runtime.targets[1].blocks.getNextBlock(id);
      }
      if (id) {
        thread.stopThisScript();
        vm.runtime._pushThread(id, util.target, { stackClick: true });
      }
    }
    skipBlock_SP(args, util) {
      /* interpreter only, sp made this */
      // start at -1 to skip over the starting block
      for (let i = -1; i < Scratch.Cast.toNumber(args.NUM); i++) {
        util.thread.goToNextBlock();
      }
    }
  }
  //@ts-ignore
  Scratch.extensions.register(new extension());
})(Scratch);
