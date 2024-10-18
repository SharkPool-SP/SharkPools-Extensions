// Name: Unit Converter
// ID: unitconverter
// Description: Convert units of temperature, distance and others using this extension!
// By: LucasA

// Version V.1.0.0
(function(Scratch) {
  const blocks = [];
  const vars = {};
  const menus = {};

  function wait(m) {
  return new Promise((r) => setTimeout(() => r(), m));
}

  if (!Scratch.extensions.unsandboxed) {
    throw new Error('Unit converter must run unsandboxed');
  }

  class Extension {
    getInfo() {
      return {
        "id": "unitconverter",
        "name": "Unit converter",
        "color1": "#00f0ec",
        "blocks": blocks,
        "menus": menus,
      }
    }
  }
  
blocks.push({
  opcode: "unitconverter_Block_converttemp",
  blockType: Scratch.BlockType.REPORTER,
  text: "Convert temperature [valuet] [temp] to [temp2]",
  arguments: {
      "valuet": {
      type: Scratch.ArgumentType.NUMBER,
      defaultValue: ``
    },
  "temp": {
    type: Scratch.ArgumentType.STRING,
    menu: "unitconverter_menu_0",
  },
  "temp2": {
    type: Scratch.ArgumentType.STRING,
    menu: "unitconverter_menu_1",
  },

  },
  disableMonitor: false
});
Extension.prototype["unitconverter_Block_converttemp"] = async function(args, util) {
  const localVars = {};
    if (args["temp"] == args["temp2"]) {
    return args["valuet"];}
  if (args["temp"] == 'Celsius') {
    if (args["temp2"] == 'Farenheit') {
      return args["valuet"] * 1.8 + 32;}
  }
  if (args["temp"] == 'Farenheit') {
    if (args["temp2"] == 'Celsius') {
      return (args["valuet"] - 32) / 1.8;}
  }
  if (args["temp2"] == 'Celsius') {
    if (args["temp2"] == 'Kelvin') {
      return args["valuet"] + 273;}
  }
  if (args["temp"] == 'Kelvin') {
    if (args["temp2"] == 'Celsius') {
      return args["valuet"] - 273;}
  }
  if (args["temp"] == 'Kelvin') {
    if (args["temp2"] == 'Farenheit') {
      return (args["valuet"] - 273) * 1.8 + 32;}
  }
  if (args["temp"] == 'Farenheit') {
    if (args["temp2"] == 'Kelvin') {
      return (args["valuet"] - 32) / 1.8 + 273;}
  }

};


blocks.push({
  opcode: "unitconverter_Block_convertdistance",
  blockType: Scratch.BlockType.REPORTER,
  text: "Convert Distance [valued] [dis1] to [dis2]",
  arguments: {
      "valued": {
      type: Scratch.ArgumentType.NUMBER,
      defaultValue: ``
    },
  "dis": {
    type: Scratch.ArgumentType.STRING,
    menu: "unitconverter_menu_2",
  },
  "dis2": {
    type: Scratch.ArgumentType.STRING,
    menu: "unitconverter_menu_3",
  },

  },
  disableMonitor: false
});
Extension.prototype["unitconverter_Block_convertdistance"] = async function(args, util) {
  const localVars = {};
    if (args["dis"] == args["dis2"]) {
    return args["valued"];}
  if (!(args["dis"] == args["dis2"])) {
    return args["dis"] == 'Kilometers' ? (args["dis2"] == 'Miles' ? args["valued"] * 1.609344 : (args["dis2"] == 'Meters' ? args["valued"] * 1000 : (args["dis2"] == 'Foots' ? (args["valued"] * 1000) / 0.3048 : (args["dis2"] == 'Centimeters' ? args["valued"] * 100000 : (args["dis2"] == 'Inches' ? args["valued"] * 1000 * 0.0254 : 'Extension error'))))) : (args["dis"] == 'Meters' ? (args["dis2"] == 'Miles' ? (args["valued"] / 1000) * 1.609344 : (args["dis2"] == 'Kilometers' ? args["valued"] / 1000 : (args["dis2"] == 'Foots' ? args["valued"] / 0.3048 : (args["dis2"] == 'Centimeters' ? args["valued"] * 100 : (args["dis2"] == 'Inches' ? args["valued"] * 0.0254 : 'Extension error'))))) : (args["dis"] == 'Centimeters' ? (args["dis2"] == 'Miles' ? (args["valued"] / 100000) * 1.609344 : (args["dis2"] == 'Meters' ? args["valued"] / 100 : (args["dis2"] == 'Foots' ? (args["valued"] / 100) / 0.3048 : (args["dis2"] == 'Kilometers' ? args["valued"] / 100000 : (args["dis2"] == 'Inches' ? (args["valued"] / 100) * 0.0254 : 'Extension error'))))) : (args["dis"] == 'Miles' ? (args["dis2"] == 'Meters' ? (args["valued"] / 1.609344) * 1000 : (args["dis2"] == 'Kilometers' ? args["valued"] / 1.609344 : (args["dis2"] == 'Foots' ? args["valued"] / 0.3048 : (args["dis2"] == 'Centimeters' ? (args["valued"] / 1.609344) * 1000 * 100 : (args["dis2"] == 'Inches' ? (args["valued"] / 1.609344) * 1000 * 0.0254 : 'Extension error'))))) : (args["dis"] == 'Foots' ? (args["dis2"] == 'Miles' ? (args["valued"] / 1000) * 1.609344 : (args["dis2"] == 'Kilometers' ? args["valued"] / 1000 : (args["dis2"] == 'Meters' ? args["valued"] / 0.3048 : (args["dis2"] == 'Centimeters' ? (args["valued"] / 0.3048) * 100 : (args["dis2"] == 'Inches' ? args["valued"] * 0.0254 : 'Extension error'))))) : (args["dis"] == 'Inches' ? (args["dis2"] == 'Miles' ? args["valued"] * 0.0000157828 : (args["dis2"] == 'Meters' ? args["valued"] * 0.0254 : (args["dis2"] == 'Foots' ? args["valued"] * 0.083333 : (args["dis2"] == 'Kilometers' ? args["valued"] * 0.0000254 : (args["dis2"] == 'Centimeters' ? args["valued"] * 2.54 : 'Extension error'))))) : 'Extension error')))));}

};



    blocks.push({
        opcode: "button_cda1ff3e-64e9-4826-a8b9-a7b585df780a",
        func: "button_cda1ff3e-64e9-4826-a8b9-a7b585df780a",
        blockType: Scratch.BlockType.BUTTON,
        text: "Alert",
      });
      Extension.prototype["button_cda1ff3e-64e9-4826-a8b9-a7b585df780a"] = async function(util) {
        const localVars = {};
          alert('Some blocks that convert units may have inaccurate/wrong conversions or may give an error (The block will return the message "Extension error")');

      };
menus["unitconverter_menu_0"] = {
acceptReporters: true,
items: ['Farenheit', 'Celsius', 'Kelvin'],
};


menus["unitconverter_menu_1"] = {
acceptReporters: true,
items: ['Farenheit', 'Celsius', 'Kelvin'],
};


menus["unitconverter_menu_2"] = {
acceptReporters: true,
items: ('Miles-Kilometers-Meters-Foots-Inches-Centimeters'.split('-')),
};


menus["unitconverter_menu_3"] = {
acceptReporters: true,
items: ('Miles-Kilometers-Meters-Foots-Inches-Centimeters'.split('-')),
};



    (() => {
    const temp = [
          "button_cda1ff3e-64e9-4826-a8b9-a7b585df780a", "unitconverter_Block_converttemp","unitconverter_Block_convertdistance",
    ];
    blocks.sort((a, b) => {
        a = temp.indexOf(a.opcode);
        b = temp.indexOf(b.opcode);
        if(a === -1) {
          if(b === -1) {
            return 0;
          } else {
            return 1;
          }
        } else if(b === -1) {
          return -1;
        }
        return a - b;
      })
})();
  Scratch.extensions.register(new Extension());
})(Scratch);
