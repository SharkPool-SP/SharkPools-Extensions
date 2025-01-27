// Name: Keys+
// ID: enderKeysPlus
// Description: more powerful and flexible key press detection blocks with some extra features.
// By: Ender-Studio
// Original: Ender-Studio
// License: MIT & LGPL-3.0

(function(Scratch){
    "use strict";

    if (!Scratch.extensions.unsandboxed) throw new Error("Keys+ must run unsandboxed");

    const runtime = Scratch.vm.runtime;

    const 
        _formatToValue = [ 
            "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", 
            "Digit0", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", 
            "KeyA", "KeyB", "KeyC", "KeyD", "KeyE", "KeyF", "KeyG", "KeyH", "KeyI", "KeyJ", "KeyK", "KeyL", "KeyM", "KeyN", "KeyO", "KeyP", "KeyQ", "KeyR", "KeyS", "KeyT", "KeyU", "KeyV", "KeyW", "KeyX", "KeyY", "KeyZ", 
            "Backquote", "Minus", "Equal", "BracketLeft", "BracketRight", "Backslash", "Semicolon", "Quote", "Comma", "Period", "Slash" 
        ],
        _formatReverseOrder = [ "Meta", "Control", "Shift", "Alt", "Arrow"],
        _buttonOrder = [ "left", "middle", "right", "back", "forward" ];
    let 
        _mouseButton = {},
        _keysPressed = {}, 
        _keybinds = {}, 
        _filter = { 
            name: {}, 
            value: {} 
        };

    function format(_key, _value) { 
        if (_formatToValue.includes(_key)) {
            return `_${_value}`; 
        }
        let key = _key.split(/(?=[A-Z0-9])/);
        if (_formatReverseOrder.some(item => key.includes(item))) {
            key = key.reverse().join(" ").replace("Meta", "Windows Key");
        } else {
            key = key.join(" ").replace("Numpad", "Numpad:");
        }
        return `_${key.toLowerCase()}`;
    }
    function _parseKeys(_keys) { 
        try { 
            const keys = /^\[.*\]$/.test(_keys) ? _keys : `[${_keys}]`;
            return JSON.parse(keys);
        } catch {
            return [];
        }
    }
    function parseKeys(_keys) { 
        const keys = [...new Set(_parseKeys(_keys))]; 
        return keys.includes("any") ? ["any", ...keys.filter(k => k !== "any")] : keys;
    }
    
    function getKeysPressed() {
        return Object.keys(_keysPressed).map(key => key.slice(1));
    }
    
    function refresh() { 
        if (!Object.keys(_filter.name).length || !Object.keys(_filter.value).length) { 
            _filter = { name: {}, value: {} };
            _keysPressed = {};
        } else if (!_keysPressed["_any"]) {
            _keysPressed = { "_any": [Date.now(), "N/A", "N/A"], ..._keysPressed };
        }
    }    
    
    class enderKeysPlus {
        constructor() {
            runtime.on("BEFORE_EXECUTE", () => { 
                runtime.startHats("enderKeysPlus_eventKeyPressed", { trigger: "while" } ); 
                runtime.startHats("enderKeysPlus_eventKeyPressedMultiple", { trigger: "while" } ); 
                runtime.startHats("enderKeysPlus_eventKeybindTriggered", { trigger: "while" } );
            })
            window.addEventListener("keydown", (event) => {
                const key = format(event.code, event.key);
                if (!_keysPressed[key]) {
                    _keysPressed[key] = [Date.now(), event.code, event.key];
                    _filter.name[event.code] = true;
                    _filter.value[event.key] = true;
                    runtime.startHats("enderKeysPlus_eventKeyPressed", { trigger: "when" } )
                    runtime.startHats("enderKeysPlus_eventKeyPressedMultiple", { trigger: "when" } );
                    runtime.startHats("enderKeysPlus_eventKeybindTriggered", { trigger: "when" } );
                    refresh();
                }
            });
            window.addEventListener("keyup", (event) => {
                const key = format(event.code, event.key);
                if (_keysPressed[key]) {
                    runtime.startHats("enderKeysPlus_eventKeyPressed", { trigger: "after" } )
                    runtime.startHats("enderKeysPlus_eventKeyPressedMultiple", { trigger: "after" } );
                    runtime.startHats("enderKeysPlus_eventKeybindTriggered", { trigger: "after" } );
                    delete _filter.name[event.code];
                    delete _filter.value[event.key];
                    delete _keysPressed[key];
                    refresh();
                }
            });
            window.addEventListener("blur", () => {
                _filter = { name: {}, value: {} };
                _keysPressed = {};
            });
            // Mouse
            window.addEventListener("mousedown", (event) => {
                _mouseButton[event.button] = {
                    down: true,
                    time: Date.now()
                };
            })
            window.addEventListener("mouseup", (event) => {
                delete _mouseButton[event.button];
            })
        };
        getInfo() {
            return {
                id: "enderKeysPlus",
                name: "Keys+",
                color1: "#647970",
                color2: "#4D5E56",
                blocks: [
                    { 
                        blockType: Scratch.BlockType.LABEL, text: "Mouse" 
                    },
                    {
                        opcode: "mouseDown", blockType: Scratch.BlockType.BOOLEAN,
                        text: "[button] mouse button down?",
                        arguments: {
                            button: { type: Scratch.ArgumentType.STRING, menu: "mouseButton" }
                        }
                    },
                    {
                        opcode: "timeMouseDown", blockType: Scratch.BlockType.REPORTER,
                        text: "seconds [button] mouse button down",
                        arguments: {
                            button: { type: Scratch.ArgumentType.STRING, menu: "mouseButton" }
                        }
                    },
                    { 
                        blockType: Scratch.BlockType.LABEL, text: "Keys" 
                    },
                    { 
                        opcode: "eventKeyPressed", blockType: Scratch.BlockType.HAT, 
                        text: "[trigger] [key] key is pressed", isEdgeActivated: false, 
                        arguments: { 
                            trigger: { type: Scratch.ArgumentType.STRING, menu: "triggerEventCondition" },
                            key: { type: Scratch.ArgumentType.STRING, menu: "keys" }
                        } 
                    },
                    { 
                        opcode: "eventKeyPressedMultiple",blockType: Scratch.BlockType.HAT,
                        text: "[trigger] ［[keys]］ keys is pressed [mode]", isEdgeActivated: false,
                        arguments: { 
                            trigger: { type: Scratch.ArgumentType.STRING, menu: "triggerEventCondition" },
                            keys: { type: Scratch.ArgumentType.STRING }, 
                            mode: { type: Scratch.ArgumentType.STRING, menu: "triggerMode" } 
                        } 
                    },
                    "---",
                    { 
                        opcode: "isKeyPressed", blockType: Scratch.BlockType.BOOLEAN, 
                        text: "is [key] key pressed?", 
                        arguments: { 
                            key: { type: Scratch.ArgumentType.STRING, menu: "keys" } 
                        } 
                    },
                    { 
                        opcode: "isKeyPressedMultiple", 
                        blockType: Scratch.BlockType.BOOLEAN, 
                        text: "are ［[keys]］ keys pressed? [mode]", 
                        arguments: { 
                            keys: { type: Scratch.ArgumentType.STRING }, 
                            mode: { type: Scratch.ArgumentType.STRING, menu: "returnMode" } 
                        } 
                    },
                    "---",
                    { 
                        opcode: "keyPressedAll", blockType: Scratch.BlockType.REPORTER, 
                        text: "current keys pressed" },
                    { 
                        opcode: "keyPressedCurrent", blockType: Scratch.BlockType.REPORTER, 
                        text: "current key pressed" },
                    { 
                        opcode: "keyPressedProperty", blockType: Scratch.BlockType.REPORTER, 
                        text: "current key pressed [property]", disableMonitor: true, 
                        arguments: { 
                            property: { type: Scratch.ArgumentType.STRING, menu: "property" } 
                        } 
                    },
                    "---",
                    { 
                        opcode: "keyPressedTime", blockType: Scratch.BlockType.REPORTER, 
                        text: "time [key] key pressed", 
                        arguments: { 
                            key: { type: Scratch.ArgumentType.STRING, menu: "keys" } 
                        } 
                    },
                    { 
                        opcode: "keyPressedMultipleTime", blockType: Scratch.BlockType.REPORTER, 
                        text: "time ［[keys]］ keys pressed", 
                        arguments: { 
                            keys: { type: Scratch.ArgumentType.STRING } 
                        } 
                    },
                    { 
                        blockType: Scratch.BlockType.LABEL, text: "Keybinding" 
                    },
                    { 
                        opcode: "eventKeybindTriggered", blockType: Scratch.BlockType.HAT, 
                        text: "[trigger] [event] is triggered", isEdgeActivated: false, 
                        arguments: { 
                            trigger: { type: Scratch.ArgumentType.STRING, menu: "triggerEventCondition" },
                            event: { type: Scratch.ArgumentType.STRING, defaultValue: "event"  } 
                        } 
                    },
                    { 
                        opcode: "keybindTriggered", blockType: Scratch.BlockType.BOOLEAN, 
                        text: "is [event] triggered?", 
                        arguments: { 
                            event: { type: Scratch.ArgumentType.STRING, defaultValue: "event"  } 
                        } 
                    },
                    "---",
                    { 
                        opcode: "keybindBind", blockType: Scratch.BlockType.COMMAND, 
                        text: "bind [key] key as [group] to [event]", 
                        arguments: { event: { type: Scratch.ArgumentType.STRING, defaultValue: "event"  }, group: { type: Scratch.ArgumentType.STRING, defaultValue: "group" }, key: { type: Scratch.ArgumentType.STRING, menu: "keys" } } },
                    { 
                        opcode: "keybindBindMultiple", blockType: Scratch.BlockType.COMMAND, 
                        text: "bind ［[keys]］ keys [mode] as [group] to [event]", 
                        arguments: { event: { type: Scratch.ArgumentType.STRING, defaultValue: "event" }, mode: { type: Scratch.ArgumentType.STRING, menu: "triggerMode"}, group: { type: Scratch.ArgumentType.STRING, defaultValue: "group" }, keys: { type: Scratch.ArgumentType.STRING } } },
                    { 
                        opcode: "keybindUnbind", blockType: Scratch.BlockType.COMMAND, 
                        text: "unbind [group] from [event]", 
                        arguments: { 
                            event: { type: Scratch.ArgumentType.STRING, defaultValue: "event" }, 
                            group: { type: Scratch.ArgumentType.STRING, defaultValue: "group" } 
                        } 
                    },
                    "---",
                    { 
                        opcode: "keybindReset",blockType: Scratch.BlockType.COMMAND, 
                        text: "reset binds of [event]", 
                        arguments: { 
                            event: { type: Scratch.ArgumentType.STRING, defaultValue: "event" } 
                        } 
                    },
                    { 
                        opcode: "keybindResetAll", blockType: Scratch.BlockType.COMMAND, 
                        text: "reset all keybinds" 
                    },
                    "---",
                    { 
                        opcode: "keybindListGroups", blockType: Scratch.BlockType.REPORTER, 
                        text: "list all groups in [event]", 
                        arguments: { 
                            event: { type: Scratch.ArgumentType.STRING, defaultValue: "event" } 
                        } 
                    },
                    { 
                        opcode: "keybindListGroupKeys", blockType: Scratch.BlockType.REPORTER, 
                        text: "keys binded to [group] in [event]", 
                        arguments: { 
                            event: { type: Scratch.ArgumentType.STRING, defaultValue: "event" }, 
                            group: { type: Scratch.ArgumentType.STRING, defaultValue: "group" } 
                        } 
                    },
                    "---",
                    { 
                        opcode: "keybindList", blockType: Scratch.BlockType.REPORTER, 
                        text: "list all keybindings"
                    },
                    { 
                        opcode: "keybindListActive", blockType: Scratch.BlockType.REPORTER, 
                        text: "active keybindings" 
                    },
                    "---",
                    { 
                        opcode: "keybindImport", blockType: Scratch.BlockType.COMMAND, 
                        text: "import keybinds from: [input]", 
                        arguments: { 
                            input: { type: Scratch.ArgumentType.STRING } 
                        } 
                    },
                    { 
                        opcode: "keybindExport", blockType: Scratch.BlockType.REPORTER, 
                        text: "export all keybinds", disableMonitor: true 
                    },
                ],
                menus: {
                    keys: { acceptReporters: true, items: [ "space", "up arrow", "down arrow", "right arrow", "left arrow", "backspace", "enter", "any", "right shift", "left shift", "right control", "left control", "right alt", "left alt", "right windows key", "left windows key", "context menu", "escape", "tab", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "=", "[", "]", "{", "}", "\\", "|", ";", ":", "'", "\"", ",", ".", "/", "?", "<", ">", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "caps lock", "scroll lock", "num lock", "insert", "delete", "home", "end", "page up", "page down", "numpad: divide", "numpad: multiply", "numpad: subtract", "numpad: add", "numpad: 0", "numpad: 1", "numpad: 2", "numpad: 3", "numpad: 4", "numpad: 5", "numpad: 6", "numpad: 7", "numpad: 8", "numpad: 9", "numpad: decimal", "numpad: enter" ] },
                    triggerMode: { items: [ { text:"together & in order", value: "true" }, { text: "together & ignore order", value: "false" } ] },
                    returnMode: { items: [ "together & in order", "together & ignore order", "individually"] },
                    property: { items: [ "time", "code", "value", "name"] },
                    triggerEventCondition: { items: ["when", "while", "after"] },
                    mouseButton: { items: [ "left", "middle", "right", "back", "forward" ], acceptReporters: true }
                }
            };
        };
        // Helper Functions
        _isKeysPressed(keys, ordered) { 
            if (keys.length === 0) return false; 
            const pressedKeys = getKeysPressed().filter(k => keys.includes(k));
            return ordered 
                ? pressedKeys.join("|") === keys.join("|")
                : keys.every(key => pressedKeys.includes(key));
        }
        _shouldKeybindTrigger(event) {
            const keybinds = Object.values(_keybinds[event] || []);
            return keybinds.some(keys => {
                const filteredKeys = keys.filter(key => key !== "@IgnoreOrder");
                const ordered = !keys.includes("@IgnoreOrder");
                return this._isKeysPressed(filteredKeys, ordered);
            });
        }
        // Mouse
        mouseDown(args) {
            let button = args.button
            if (typeof button === "string") {
                button = _buttonOrder.indexOf(button)
            }
            if (button === -1 || !_mouseButton[button] || !_mouseButton[button].down) {
                return false
            }
            return _mouseButton[button].down || false
        }
        timeMouseDown(args) {
            let button = args.button
            if (typeof button === "string") {
                button = _buttonOrder.indexOf(button);
            }
            if (button === -1 || !_mouseButton[button] || !_mouseButton[button].time) {
                return 0;
            }
            return ((Date.now() - _mouseButton[button].time) / 1000) || 0;
        }
        // KeysPlus
        eventKeyPressed(args) { 
            return getKeysPressed().includes(String(args.key));
        }
        eventKeyPressedMultiple(args) { 
            const parsedKeys = parseKeys(args.keys);
            return this._isKeysPressed(parsedKeys, Boolean(args.mode));
        }
        isKeyPressed(args) { 
            return getKeysPressed().includes(String(args.key)); 
        }
        isKeyPressedMultiple(args) { 
            const parsedKeys = parseKeys(args.keys);
            if (args.mode === "together & in order") {
                return this._isKeysPressed(parsedKeys, true);
            } 
            if (args.mode === "together & ignore order") {
                return this._isKeysPressed(parsedKeys, false);
            } 
            return JSON.stringify(parsedKeys.map(key => getKeysPressed().includes(key)));
        }
        keyPressedAll() { 
            return JSON.stringify(getKeysPressed().slice(1)); 
        }
        keyPressedCurrent() { 
            return getKeysPressed().reverse()[0] || "None"; 
        }
        keyPressedProperty(args) { 
            const lastKey = getKeysPressed().reverse()[0];
            const key = _keysPressed["_" + lastKey];
            if (!key) {
                return args.property === "name" ? "None" : "N/A";
            }
            switch (args.property) {
                case "name":
                    return format(key[1], key[2]).slice(1);
                case "time":
                    return (Date.now() - key[0]) / 1000;
                case "code":
                    return key[1];
                default:
                    return key[2];
            }
        }
        keyPressedTime(args) { 
            const key = _keysPressed["_" + String(args.key)];
            return key ? (Date.now() - key[0]) / 1000 : 0;
        }
        keyPressedMultipleTime(args) { 
            return JSON.stringify(_parseKeys(args.keys).map(k => (_keysPressed["_" + k] ? (Date.now() - _keysPressed["_" + k][0]) / 1000 : 0))); 
        }
        // Keybinding
        eventKeybindTriggered(args) { 
            return this._shouldKeybindTrigger(args.event) 
        }
        keybindTriggered(args) { 
            return this._shouldKeybindTrigger(args.event) 
        }
        keybindBind(args) { 
            if (!_keybinds[args.event]) _keybinds[args.event] = {};
            _keybinds[args.event][args.group] = [String(args.key)]; 
        }
        keybindBindMultiple(args) { 
            if (!_keybinds[args.event]) _keybinds[args.event] = {}; 
            _keybinds[args.event][args.group] = Scratch.Cast.toBoolean(args.mode) ? parseKeys(args.keys) : parseKeys(args.keys).concat("@IgnoreOrder"); 
        }
        keybindUnbind(args) {
            if (!_keybinds[args.event] || !_keybinds[args.group]) return;
            delete _keybinds[args.event][args.group]; 
        }
        keybindReset(args) {
            delete _keybinds[args.event]; 
        }
        keybindResetAll() { 
            _keybinds = {}; 
        }
        keybindListGroupKeys(args) { 
            return JSON.stringify((_keybinds[args.event]?.[args.group] || []).filter(k => k !== "@IgnoreOrder")); 
        }
        keybindListGroups(args) {
            return JSON.stringify(Object.keys(_keybinds[args.event] || {})); 
        }
        keybindList() { 
            return JSON.stringify(Object.keys(_keybinds)); 
        }
        keybindListActive() { 
            return JSON.stringify(Object.keys(_keybinds).filter(e => this._shouldKeybindTrigger(e))); 
        }
        keybindExport() { 
            return JSON.stringify(_keybinds); 
        }
        keybindImport(args) {
            let input = args.input;
            try { 
                input = JSON.parse(input); 
            } catch {
                console.error("Keys+ : Invalid Object.");
                return;
            }
            if (typeof input !== "object" || Array.isArray(input)) {
                console.error("Keys+ : Invalid Object or Input cannot be an Array.");
                return;
            }
            for (const group in input) {
                const groupData = input[group];
                if (typeof groupData !== "object" || Array.isArray(groupData)) {
                    console.error(`Keys+ : [./${group}] invalid or missing group.`);
                    return;
                }
                for (const subGroup in groupData) {
                    const subGroupData = groupData[subGroup];
                    if (!Array.isArray(subGroupData)) {
                        console.error(`Keys+ : [./${group}/${subGroup}] must be an array.`);
                        return;
                    }
                    if (!subGroupData.every(key => typeof key === "string")) {
                        console.error(`Keys+ : [./${group}/${subGroup}] contains non-string inputs.`);
                        return;
                    }
                }
            }
            _keybinds = input;
        }
    }
    Scratch.extensions.register(new enderKeysPlus());
})(Scratch);
