/*
@Under MIT LICENSE (C)
@Version 0.5
@Created by Mariocraft987
*/

(function (Scratch) {
  "use strict";
  class GongleUtilitys {
    getInfo() {
      return {
        id: 'gongleisbackloll',
        name: 'Gongle Utitlitys',
        color1: '#33cfff',
        color2: '#2ce8d6',
        blocks: [
          {
            opcode: 'alert',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Alert [STR]',
            disableMonitor: true,
            arguments: {
              STR: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "Hello, world!"
              },
            }
          },
            
        ],
      };
    }
    alert(args) {
      alert(args.STR)
    }

  }
  
  Scratch.extensions.register(new GongleUtilitys())
})(Scratch);
