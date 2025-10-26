class CryptoExtensions {
  constructor() {
    // Initialize the improved AES cipher
    this.initializeAES();
    
    // Load saved custom ciphers FIRST
    this.loadCustomCiphers();
    
    // Initialize cipher registry - new centralized system
    this.initializeCipherRegistry();
    
    // Initialize custom cipher methods BEFORE setting up tables
    this.initializeCustomCiphers();
    
    // Generate color variations for each category
    this.generateColorVariations();
    
    // Create opcode to category mapping for dynamic color lookup
    this.createOpcodeCategoryMap();
    
    // Validate configuration in development mode
    if (this.isDevelopmentMode()) {
      this.validateConfiguration();
    }
  }


  // New: Centralized cipher registry system
  initializeCipherRegistry() {
    // Define cipher tables for each category
    this.cipherTables = {
      substitution: {
        name: 'Substitution Ciphers',
        baseColor: [255, 224, 162], // Light yellow base (#FFE0A2)
        ciphers: [
          { name: 'caesar', displayName: 'Caesar' },
          { name: 'rot13', displayName: 'ROT13' },
          { name: 'atbash', displayName: 'Atbash' },
          { name: 'a1z26', displayName: 'A1Z26' },
          { name: 'polybius', displayName: 'Polybius Square' }
        ]
      },
      transposition: {
        name: 'Transposition Ciphers', 
        baseColor: [179, 229, 252], // Light blue base (#B3E5FC)
        ciphers: [
          { name: 'vigenere', displayName: 'Vigenère' },
          { name: 'playfair', displayName: 'Playfair' }
        ]
      },
      modern: {
        name: 'Modern Cryptography Ciphers',
        baseColor: [209, 196, 233], // Light purple base (#D1C4E9)
        ciphers: [
          { name: 'aes256', displayName: 'AES-256' },
          { name: 'otp', displayName: 'One-time Pad' },
          { name: 'rsa', displayName: 'RSA',  pairs: ['rsaEncode', 'rsaDecode', 'rsaGenerateKeysEncode']},
          { name: 'enigma', displayName: 'Enigma Machine' }
        ]
      },
      encoding: {
        name: 'Encoding Systems',
        baseColor: [178, 223, 219], // Light teal base (#B2DFDB)
        ciphers: [
          { name: 'hex', displayName: 'Hexadecimal' },
          { name: 'binary', displayName: 'Binary' },
          { name: 'morse', displayName: 'Morse Code' }
        ]
      },
      custom: {
        name: 'Custom Ciphers',
        baseColor: [255, 183, 197], // Light pink base (#FFB7C5)
        ciphers: [] // Will be populated from saved data
      }
    };
    
    // Automatically add custom ciphers to the table
    this.addCustomCiphersToTable();
    
    // Automatically add encoding/decoding pairs to each cipher
    this.autoAssignCipherPairs();
  }
  
  // New: Automatically assign encode/decode pairs to each cipher
  autoAssignCipherPairs() {
    Object.keys(this.cipherTables).forEach(category => {
      const table = this.cipherTables[category];
      
      table.ciphers.forEach(cipher => {
        // Skip if pairs are already assigned
        if (!cipher.pairs) {
          cipher.pairs = [
            `${cipher.name}Encode`, 
            `${cipher.name}Decode`
          ];
        }
      });
    });
  }


  // CUSTOM CIPHER MANAGEMENT
  
  /**
   * Load custom ciphers from memory storage
   */
  loadCustomCiphers() {
    if (!window.cryptoCustomCiphers) {
      window.cryptoCustomCiphers = {};
    }
    this.customCiphers = window.cryptoCustomCiphers;
  }


  /**
   * Save custom ciphers to memory storage
   */
  saveCustomCiphers() {
    window.cryptoCustomCiphers = this.customCiphers;
  }


  /**
   * Add custom ciphers to the cipher table
   */
  addCustomCiphersToTable() {
    this.cipherTables.custom.ciphers = [];
    
    Object.keys(this.customCiphers).forEach(cipherName => {
      const displayName = this.customCiphers[cipherName].name || cipherName;
      this.cipherTables.custom.ciphers.push({
        name: cipherName,
        displayName: displayName,
        pairs: [cipherName + 'Encode', cipherName + 'Decode']
      });
    });
  }


  /**
   * Load custom cipher methods on initialization
   */
  initializeCustomCiphers() {
    Object.keys(this.customCiphers || {}).forEach(cipherName => {
      const cipher = this.customCiphers[cipherName];
      if (cipher && cipher.mappings) {
        this.createCustomCipherMethods(cipherName, cipher.mappings);
      }
    });
  }


  /**
   * Create a new custom cipher
   */
  createCustomCipher(args) {
    const name = this.safeStringConvert(args.NAME).toLowerCase().replace(/[^a-z0-9]/g, '');
    const displayName = this.safeStringConvert(args.DISPLAY_NAME) || name;
    const substitutionMap = this.safeStringConvert(args.SUBSTITUTION_MAP);
    
    if (!name) {
      return this.createStatusBlock('❌ Error', 'Cipher name cannot be empty', '#FF6B6B');
    }
    
    if (!substitutionMap) {
      return this.createStatusBlock('❌ Error', 'Substitution map cannot be empty', '#FF6B6B');
    }
    
    try {
      const mappings = this.parseSubstitutionMap(substitutionMap);
      const cipherDef = {
        name: displayName,
        mappings: mappings,
        created: new Date().toISOString()
      };
      this.customCiphers[name] = cipherDef;
      this.saveCustomCiphers();
      
      const existingCipher = this.cipherTables.custom.ciphers.find(c => c.name === name);
      if (!existingCipher) {
        this.cipherTables.custom.ciphers.push({
          name: name,
          displayName: displayName,
          pairs: [name + 'Encode', name + 'Decode']
        });
        this.generateColorVariations();
        this.createOpcodeCategoryMap();
      }
      this.createCustomCipherMethods(name, mappings);
      this.refreshBlocks();
      
      return this.createStatusBlock('✅ Success', `Custom cipher "${displayName}" created! Refresh the page to see new blocks.`, '#4ECDC4');
      
    } catch (error) {
      return this.createStatusBlock('❌ Error', `Failed to create cipher: ${error.message}`, '#FF6B6B');
    }
  }


  refreshBlocks() {
    if (typeof vm !== 'undefined' && vm.runtime) {
      try {
        vm.runtime.emit('EXTENSION_ADDED', { id: 'cryptoextensions' });
      } catch (e) {
        console.log('Block refresh attempted - please refresh page to see new custom cipher blocks');
      }
    }
  }


  parseSubstitutionMap(mapString) {
    const mappings = { encode: {}, decode: {} };
    const pairs = mapString.split(',').map(s => s.trim());
    for (const pair of pairs) {
      let from, to;
      if (pair.includes('->')) {
        [from, to] = pair.split('->').map(s => s.trim());
      } else if (pair.includes('=')) {
        [from, to] = pair.split('=').map(s => s.trim());
      } else if (pair.includes(':')) {
        [from, to] = pair.split(':').map(s => s.trim());
      } else {
        throw new Error(`Invalid mapping format: "${pair}". Use format like "a->z" or "a=z"`);
      }
      if (!from || !to) throw new Error(`Invalid mapping pair: "${pair}"`);
      mappings.encode[from] = to;
      mappings.decode[to] = from;
    }
    return mappings;
  }


  createCustomCipherMethods(name, mappings) {
    const encodeName = name + 'Encode';
    const decodeName = name + 'Decode';
    this[encodeName] = (args) => {
      return this.applyCustomCipher(args.TEXT, mappings.encode);
    };
    this[decodeName] = (args) => {
      return this.applyCustomCipher(args.TEXT, mappings.decode);
    };
  }


  applyCustomCipher(input, mapping) {
    input = this.safeStringConvert(input);
    if (!input) return '';
    let result = '';
    for (let i = 0; i < input.length; i++) {
      const char = input[i];
      result += mapping[char] || char;
    }
    return result;
  }


  listCustomCiphers(args) {
    const cipherNames = Object.keys(this.customCiphers);
    if (cipherNames.length === 0) {
      return this.createStatusBlock('ℹ️ Info', 'No custom ciphers created yet', '#74B9FF');
    }
    const cipherList = cipherNames.map(name => {
      const cipher = this.customCiphers[name];
      return `${cipher.name} (${name})`;
    }).join(', ');
    return this.createStatusBlock('📋 Custom Ciphers', cipherList, '#74B9FF');
  }


  deleteCustomCipher(args) {
    const name = this.safeStringConvert(args.NAME).toLowerCase().replace(/[^a-z0-9]/g, '');
    if (!name) return this.createStatusBlock('❌ Error', 'Cipher name cannot be empty', '#FF6B6B');
    if (!this.customCiphers[name]) {
      return this.createStatusBlock('❌ Error', `Custom cipher "${name}" not found`, '#FF6B6B');
    }
    delete this.customCiphers[name];
    this.saveCustomCiphers();
    this.cipherTables.custom.ciphers = this.cipherTables.custom.ciphers.filter(c => c.name !== name);
    delete this[name + 'Encode'];
    delete this[name + 'Decode'];
    this.generateColorVariations();
    this.createOpcodeCategoryMap();
    return this.createStatusBlock('✅ Success', `Custom cipher "${name}" deleted. Refresh page to update blocks.`, '#4ECDC4');
  }


  // VISUAL FEEDBACK SYSTEM

  createStatusBlock(title, message, color = '#74B9FF') {
    return `╭─── ${title} ───╮\n│ ${message.padEnd(40)} │\n╰${'─'.repeat(44)}╯`;
  }


  validateConfiguration() {
    const errors = [];
    let warnings = [];
    Object.keys(this.cipherTables).forEach(category => {
      const table = this.cipherTables[category];
      if (!table.name || !table.baseColor || !table.ciphers) {
        errors.push(`${category}: missing properties`);
      }
      if (!Array.isArray(table.baseColor) || table.baseColor.length !== 3) {
        errors.push(`${category}: invalid baseColor`);
      }
      table.ciphers.forEach((cipher, index) => {
        if (!cipher.name || !cipher.pairs || !Array.isArray(cipher.pairs)) {
          errors.push(`${category}[${index}]: invalid structure`);
        }
        cipher.pairs.forEach(opcode => {
          if (typeof this[opcode] !== 'function') {
            warnings.push(`Function ${opcode} not implemented`);
          }
        });
      });
    });
    if (errors.length > 0) {
      return this.createStatusBlock('❌ Config Error', `${errors.length} errors found: ${errors.join(', ')}`, '#FF6B6B');
    }
    if (warnings.length > 0) {
      return this.createStatusBlock('⚠️ Config Warning', `${warnings.length} warnings: ${warnings.join(', ')}`, '#FDCB6E');
    }
    return this.createStatusBlock('✅ Config Valid', 'All configurations passed validation', '#4ECDC4');
  }


  validateCipher(cipherName, testCases) {
    const results = { passed: 0, failed: 0, errors: [] };
    const encodeFn = this[cipherName + 'Encode'];
    const decodeFn = this[cipherName + 'Decode'];
    if (!encodeFn || !decodeFn) {
      return this.createStatusBlock('❌ Test Error', `Functions ${cipherName}Encode/Decode not found`, '#FF6B6B');
    }
    if (testCases.encode) {
      testCases.encode.forEach((test, index) => {
        try {
          const args = { TEXT: test.input };
          if (test.key) args.KEY = test.key;
          if (test.shift !== undefined) args.SHIFT = test.shift;
          if (test.mode) args.MODE = test.mode;
          const result = encodeFn.call(this, args);
          if (result === test.expected) results.passed++; else {
            results.failed++; results.errors.push(`E${index}: "${test.expected}" ≠ "${result}"`);
          }
        } catch (error) {
          results.failed++; results.errors.push(`E${index}: ${error.message}`);
        }
      });
    }
    if (testCases.decode) {
      testCases.decode.forEach((test, index) => {
        try {
          const args = { TEXT: test.input };
          if (test.key) args.KEY = test.key;
          if (test.shift !== undefined) args.SHIFT = test.shift;
          if (test.mode) args.MODE = test.mode;
          const result = decodeFn.call(this, args);
          if (result === test.expected) results.passed++; else {
            results.failed++; results.errors.push(`D${index}: "${test.expected}" ≠ "${result}"`);
          }
        } catch (error) {
          results.failed++; results.errors.push(`D${index}: ${error.message}`);
        }
      });
    }
    const color = results.failed === 0 ? '#4ECDC4' : '#FF6B6B';
    const status = results.failed === 0 ? '✅ Tests Passed' : '❌ Tests Failed';
    const summary = `${results.passed} passed, ${results.failed} failed`;
    let message = summary;
    if (results.errors.length > 0) {
      message += `\n${results.errors.slice(0, 3).join('\n')}`;
      if (results.errors.length > 3) message += `\n... ${results.errors.length - 3} more errors`;
    }
    return this.createStatusBlock(status, message, color);
  }


  getSystemInfo(args) {
    const customCount = Object.keys(this.customCiphers).length;
    const totalCiphers = Object.values(this.cipherTables).reduce((sum, table) => sum + table.ciphers.length, 0);
    const info = [
      `Total Ciphers: ${totalCiphers}`,
      `Custom Ciphers: ${customCount}`,
      `Categories: ${Object.keys(this.cipherTables).length}`,
      `Development Mode: ${this.isDevelopmentMode() ? 'Yes' : 'No'}`
    ].join('\n');
    return this.createStatusBlock('ℹ️ System Info', info, '#74B9FF');
  }
  
  initializeAES() {
    this.sBox = [
      0x63, 0x7c, 0x77, 0x7b, 0xf2, 0x6b, 0x6f, 0xc5, 0x30, 0x01, 0x67, 0x2b, 0xfe, 0xd7, 0xab, 0x76,
      0xca, 0x82, 0xc9, 0x7d, 0xfa, 0x59, 0x47, 0xf0, 0xad, 0xd4, 0xa2, 0xaf, 0x9c, 0xa4, 0x72, 0xc0,
      0xb7, 0xfd, 0x93, 0x26, 0x36, 0x3f, 0xf7, 0xcc, 0x34, 0xa5, 0xe5, 0xf1, 0x71, 0xd8, 0x31, 0x15,
      0x04, 0xc7, 0x23, 0xc3, 0x18, 0x96, 0x05, 0x9a, 0x07, 0x12, 0x80, 0xe2, 0xeb, 0x27, 0xb2, 0x75,
      0x09, 0x83, 0x2c, 0x1a, 0x1b, 0x6e, 0x5a, 0xa0, 0x52, 0x3b, 0xd6, 0xb3, 0x29, 0xe3, 0x2f, 0x84,
      0x53, 0xd1, 0x00, 0xed, 0x20, 0xfc, 0xb1, 0x5b, 0x6a, 0xcb, 0xbe, 0x39, 0x4a, 0x4c, 0x58, 0xcf,
      0xd0, 0xef, 0xaa, 0xfb, 0x43, 0x4d, 0x33, 0x85, 0x45, 0xf9, 0x02, 0x7f, 0x50, 0x3c, 0x9f, 0xa8,
      0x51, 0xa3, 0x40, 0x8f, 0x92, 0x9d, 0x38, 0xf5, 0xbc, 0xb6, 0xda, 0x21, 0x10, 0xff, 0xf3, 0xd2,
      0xcd, 0x0c, 0x13, 0xec, 0x5f, 0x97, 0x44, 0x17, 0xc4, 0xa7, 0x7e, 0x3d, 0x64, 0x5d, 0x19, 0x73,
      0x60, 0x81, 0x4f, 0xdc, 0x22, 0x2a, 0x90, 0x88, 0x46, 0xee, 0xb8, 0x14, 0xde, 0x5e, 0x0b, 0xdb,
      0xe0, 0x32, 0x3a, 0x0a, 0x49, 0x06, 0x24, 0x5c, 0xc2, 0xd3, 0xac, 0x62, 0x91, 0x95, 0xe4, 0x79,
      0xe7, 0xc8, 0x37, 0x6d, 0x8d, 0xd5, 0x4e, 0xa9, 0x6c, 0x56, 0xf4, 0xea, 0x65, 0x7a, 0xae, 0x08,
      0xba, 0x78, 0x25, 0x2e, 0x1c, 0xa6, 0xb4, 0xc6, 0xe8, 0xdd, 0x74, 0x1f, 0x4b, 0xbd, 0x8b, 0x8a,
      0x70, 0x3e, 0xb5, 0x66, 0x48, 0x03, 0xf6, 0x0e, 0x61, 0x35, 0x57, 0xb9, 0x86, 0xc1, 0x1d, 0x9e,
      0xe1, 0xf8, 0x98, 0x11, 0x69, 0xd9, 0x8e, 0x94, 0x9b, 0x1e, 0x87, 0xe9, 0xce, 0x55, 0x28, 0xdf,
      0x8c, 0xa1, 0x89, 0x0d, 0xbf, 0xe6, 0x42, 0x68, 0x41, 0x99, 0x2d, 0x0f, 0xb0, 0x54, 0xbb, 0x16
    ];

    this.invSBox = new Array(256);
    for (let i = 0; i < 256; i++) {
      this.invSBox[this.sBox[i]] = i;
    }

    this.rcon = [0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36, 0x6c, 0xd8, 0xab, 0x4d];

    this.mul2 = []; this.mul3 = []; this.mul9 = []; this.mul11 = []; this.mul13 = []; this.mul14 = [];
    for (let i = 0; i < 256; i++) {
      this.mul2[i] = this.galoisMultiply(i, 2);
      this.mul3[i] = this.galoisMultiply(i, 3);
      this.mul9[i] = this.galoisMultiply(i, 9);
      this.mul11[i] = this.galoisMultiply(i, 11);
      this.mul13[i] = this.galoisMultiply(i, 13);
      this.mul14[i] = this.galoisMultiply(i, 14);
    }
  }


  generateColorVariations() {
    this.colors = {};
    Object.keys(this.cipherTables).forEach(category => {
      const table = this.cipherTables[category];
      this.colors[category] = [];
      const cipherPairs = table.ciphers.length;
      for (let i = 0; i < cipherPairs; i++) {
        let darkeningFactor;
        if (cipherPairs === 1) {
          darkeningFactor = 1.0;
        } else {
          const baseDarkening = 0.15;
          const scaledDarkening = Math.min(0.45, baseDarkening + (0.3 * Math.log(cipherPairs) / Math.log(10)));
          darkeningFactor = 1.0 - (i * scaledDarkening / (cipherPairs - 1));
        }
        const r = Math.round(table.baseColor[0] * darkeningFactor);
        const g = Math.round(table.baseColor[1] * darkeningFactor);  
        const b = Math.round(table.baseColor[2] * darkeningFactor);
        const hex = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
        this.colors[category].push(hex);
      }
    });
  }


  createOpcodeCategoryMap() {
    this.opcodeMap = {};
    Object.keys(this.cipherTables).forEach(category => {
      const table = this.cipherTables[category];
      table.ciphers.forEach((cipher, cipherIndex) => {
        cipher.pairs.forEach(opcode => {
          this.opcodeMap[opcode] = { category, cipherIndex };
        });
      });
    });
  }


  getColorForOpcode(opcode) {
    const mapping = this.opcodeMap[opcode];
    if (!mapping) return '#CCCCCC';
    const categoryColors = this.colors[mapping.category];
    return categoryColors[mapping.cipherIndex] || categoryColors[categoryColors.length - 1];
  }


  getInfo() {
    const blocks = [];

    Object.keys(this.cipherTables).forEach(category => {
      const table = this.cipherTables[category];
      if (category === 'custom' && table.ciphers.length === 0) return;
      blocks.push({
        opcode: `${category}Header`,
        blockType: Scratch.BlockType.LABEL,
        text: table.name,
        color1: '#FFFFFF',
      });
      table.ciphers.forEach(cipher => {
        cipher.pairs.forEach(opcode => {
          blocks.push(this.createBlockDefinition(opcode, cipher.displayName));
        });
      });
    });

    blocks.push(
      {
        opcode: 'managementHeader',
        blockType: Scratch.BlockType.LABEL,
        text: 'Cipher Management',
        color1: '#FFFFFF',
      },
      this.createBlockDefinition('createCustomCipher'),
      this.createBlockDefinition('listCustomCiphers'),
      this.createBlockDefinition('deleteCustomCipher'),
      this.createBlockDefinition('validateConfiguration'),
      this.createBlockDefinition('getSystemInfo')
    );

    blocks.push(
      {
        opcode: 'creditHeader',
        blockType: Scratch.BlockType.LABEL,
        text: 'Made by JayGamingStudiosYT <3',
        color1: '#FFFFFF',
      },
      {
        opcode: 'updateHeader',
        blockType: Scratch.BlockType.LABEL,
        text: 'Update 1 | 25/10/2025',
        color1: '#FFFFFF',
      }
    );

    return { id: 'cryptoextensions', name: 'Crypto Tools', blocks };
  }


  createBlockDefinition(opcode, displayName) {
    const blockDefinitions = {
      caesarEncode: {
        blockType: Scratch.BlockType.REPORTER,
        text: 'Caesar cipher encode [TEXT] with shift [SHIFT]',
        arguments: {
          TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: 'Hello123' },
          SHIFT: { type: Scratch.ArgumentType.NUMBER, defaultValue: 3 }
        }
      },
      caesarDecode: {
        blockType: Scratch.BlockType.REPORTER,
        text: 'Caesar cipher decode [TEXT] with shift [SHIFT]',
        arguments: {
          TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: 'Khoor456' },
          SHIFT: { type: Scratch.ArgumentType.NUMBER, defaultValue: 3 }
        }
      },
      rot13Encode: {
        blockType: Scratch.BlockType.REPORTER,
        text: 'ROT13 cipher encode [TEXT]',
        arguments: {
          TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: 'Hello123' }
        }
      },
      rot13Decode: {
        blockType: Scratch.BlockType.REPORTER,
        text: 'ROT13 cipher decode [TEXT]',
        arguments: {
          TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: 'Uryyb678' }
        }
      },
      atbashEncode: {
        blockType: Scratch.BlockType.REPORTER,
        text: 'Atbash cipher encode [TEXT]',
        arguments: {
          TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: 'Hello123' }
        }
      },
      atbashDecode: {
        blockType: Scratch.BlockType.REPORTER,
        text: 'Atbash cipher decode [TEXT]',
        arguments: {
          TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: 'Svool876' }
        }
      },
      a1z26Encode: {
        blockType: Scratch.BlockType.REPORTER,
        text: 'A1Z26 cipher encode [TEXT]',
        arguments: {
          TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: 'Hello123' }
        }
      },
      a1z26Decode: {
        blockType: Scratch.BlockType.REPORTER,
        text: 'A1Z26 cipher decode [NUMBERS]',
        arguments: {
          NUMBERS: { type: Scratch.ArgumentType.STRING, defaultValue: '8 31 38 38 41 54 55 56' }
        }
      },
      vigenereEncode: {
        blockType: Scratch.BlockType.REPORTER,
        text: 'Vigenère cipher encode [TEXT] with key [KEY]',
        arguments: {
          TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: 'Hello123' },
          KEY: { type: Scratch.ArgumentType.STRING, defaultValue: 'KEY' }
        }
      },
      vigenereDecode: {
        blockType: Scratch.BlockType.REPORTER,
        text: 'Vigenère cipher decode [TEXT] with key [KEY]',
        arguments: {
          TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: 'Rijvs527' },
          KEY: { type: Scratch.ArgumentType.STRING, defaultValue: 'KEY' }
        }
      },
      playfairEncode: {
        blockType: Scratch.BlockType.REPORTER,
        text: 'Playfair encode [TEXT] with key [KEY] mode [MODE]',
        arguments: {
          TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: 'Hello123' },
          KEY: { type: Scratch.ArgumentType.STRING, defaultValue: 'KEY' },
          MODE: { type: Scratch.ArgumentType.STRING, defaultValue: 'Friendly' }
        }
      },
      playfairDecode: {
        blockType: Scratch.BlockType.REPORTER,
        text: 'Playfair decode [TEXT] with key [KEY] mode [MODE]',
        arguments: {
          TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: 'DB NV MI' },
          KEY: { type: Scratch.ArgumentType.STRING, defaultValue: 'KEY' },
          MODE: { type: Scratch.ArgumentType.STRING, defaultValue: 'Friendly' } // or 'Friendly'
        }
      },

      aes256Encode: {
        blockType: Scratch.BlockType.REPORTER,
        text: 'AES-256 cipher encode [TEXT] with key [KEY]',
        arguments: {
          TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: 'Hello123' },
          KEY: { type: Scratch.ArgumentType.STRING, defaultValue: 'KEY' }
        }
      },
      aes256Decode: {
        blockType: Scratch.BlockType.REPORTER,
        text: 'AES-256 cipher decode [TEXT] with key [KEY]',
        arguments: {
          TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: '24a7670c90d1e606d3ba31d6d7b6c52bca95dc56f76a02e1cbc01960116f8c1b' },
          KEY: { type: Scratch.ArgumentType.STRING, defaultValue: 'KEY' }
        }
      },
      otpEncode: {
        blockType: Scratch.BlockType.REPORTER,
        text: 'One-time pad encode [TEXT] with key [KEY]',
        arguments: {
          TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: 'Hello123' },
          KEY: { type: Scratch.ArgumentType.STRING, defaultValue: 'KEYKEYKEY' }
        }
      },
      otpDecode: {
        blockType: Scratch.BlockType.REPORTER,
        text: 'One-time pad decode [HEX] with key [KEY]',
        arguments: {
          HEX: { type: Scratch.ArgumentType.STRING, defaultValue: '032035272a687976' },
          KEY: { type: Scratch.ArgumentType.STRING, defaultValue: 'KEYKEYKEY' }
        }
      },
      rsaEncode: {
        blockType: Scratch.BlockType.REPORTER,
        text: 'RSA encrypt [TEXT] with public key [PUBLIC_KEY]',
        arguments: {
          TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: 'Hello123' },
          PUBLIC_KEY: { type: Scratch.ArgumentType.STRING, defaultValue: '' }
        }
      },
      rsaDecode: {
        blockType: Scratch.BlockType.REPORTER,
        text: 'RSA decrypt [HEX_CHUNKS] with private key [PRIVATE_KEY]',
        arguments: {
          HEX_CHUNKS: { type: Scratch.ArgumentType.STRING, defaultValue: '' },
          PRIVATE_KEY: { type: Scratch.ArgumentType.STRING, defaultValue: '' }
        }
      },
      rsaGenerateKeysEncode: {
        blockType: Scratch.BlockType.REPORTER,
        text: 'RSA generate keys with bits [BITS]',
        arguments: {
          BITS: { type: Scratch.ArgumentType.NUMBER, defaultValue: 512 }
        }
      },
      hexEncode: {
        blockType: Scratch.BlockType.REPORTER,
        text: 'Hexadecimal encode [TEXT]',
        arguments: {
          TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: 'Hello123' }
        }
      },
      hexDecode: {
        blockType: Scratch.BlockType.REPORTER,
        text: 'Hexadecimal decode [HEX]',
        arguments: {
          HEX: { type: Scratch.ArgumentType.STRING, defaultValue: '48656c6c6f313233' }
        }
      },
      binaryEncode: {
        blockType: Scratch.BlockType.REPORTER,
        text: 'Binary encode [TEXT]',
        arguments: {
          TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: 'Hello123' }
        }
      },
      binaryDecode: {
        blockType: Scratch.BlockType.REPORTER,
        text: 'Binary decode [BINARY]',
        arguments: {
          BINARY: { type: Scratch.ArgumentType.STRING, defaultValue: '01001000 01100101 01101100 01101100 01101111 00110001 00110010 00110011' }
        }
      },
      morseEncode: {
        blockType: Scratch.BlockType.REPORTER,
        text: 'Morse code encode [TEXT]',
        arguments: {
          TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: 'Hello123' }
        }
      },
      morseDecode: {
        blockType: Scratch.BlockType.REPORTER,
        text: 'Morse code decode [MORSE]',
        arguments: {
          MORSE: { type: Scratch.ArgumentType.STRING, defaultValue: '.... . .-.. .-.. --- .---- ..--- ...--' }
        }
      },
      polybiusEncode: {
        blockType: Scratch.BlockType.REPORTER,
        text: 'Polybius square encode [TEXT]',
        arguments: {
          TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: 'Hello123' }
        }
      },
      polybiusDecode: {
        blockType: Scratch.BlockType.REPORTER,
        text: 'Polybius square decode [POLYBIUS]',
        arguments: {
          POLYBIUS: { type: Scratch.ArgumentType.STRING, defaultValue: '23 615 631 631 634 71 72 73' }
        }
      },
      enigmaEncode: {
        blockType: Scratch.BlockType.REPORTER,
        text: 'Enigma machine encode [TEXT] with settings [SETTINGS]',
        arguments: {
          TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: 'Hello123' },
          SETTINGS: { type: Scratch.ArgumentType.STRING, defaultValue: 'III-IV-V|AAA|B' }
        }
      },
      enigmaDecode: {
        blockType: Scratch.BlockType.REPORTER,
        text: 'Enigma machine decode [TEXT] with settings [SETTINGS]',
        arguments: {
          TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: 'Ajkuh047' },
          SETTINGS: { type: Scratch.ArgumentType.STRING, defaultValue: 'III-IV-V|AAA|B' }
        }
      },
      createCustomCipher: {
        blockType: Scratch.BlockType.REPORTER,
        text: 'Create custom cipher [NAME] display as [DISPLAY_NAME] with mapping [SUBSTITUTION_MAP]',
        arguments: {
          NAME: { type: Scratch.ArgumentType.STRING, defaultValue: 'mycustomcipher' },
          DISPLAY_NAME: { type: Scratch.ArgumentType.STRING, defaultValue: 'My Custom Cipher' },
          SUBSTITUTION_MAP: { type: Scratch.ArgumentType.STRING, defaultValue: 'a->z,b->y,c->x,1->9,2->8,3->7' }
        }
      },
      listCustomCiphers: {
        blockType: Scratch.BlockType.REPORTER,
        text: 'List all custom ciphers',
        arguments: {}
      },
      deleteCustomCipher: {
        blockType: Scratch.BlockType.REPORTER,
        text: 'Delete custom cipher [NAME]',
        arguments: {
          NAME: { type: Scratch.ArgumentType.STRING, defaultValue: 'mycustomcipher' }
        }
      },
      validateConfiguration: {
        blockType: Scratch.BlockType.REPORTER,
        text: 'Validate cipher configuration',
        arguments: {}
      },
      getSystemInfo: {
        blockType: Scratch.BlockType.REPORTER,
        text: 'Get system information',
        arguments: {}
      }
    };

    Object.keys(this.customCiphers || {}).forEach(cipherName => {
      const displayName = this.customCiphers[cipherName].name;
      blockDefinitions[cipherName + 'Encode'] = {
        blockType: Scratch.BlockType.REPORTER,
        text: `${displayName} encode [TEXT]`,
        arguments: { TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: 'Hello123' } }
      };
      blockDefinitions[cipherName + 'Decode'] = {
        blockType: Scratch.BlockType.REPORTER,
        text: `${displayName} decode [TEXT]`,
        arguments: { TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: 'encoded_text' } }
      };
    });

    const definition = blockDefinitions[opcode];
    if (!definition) {
      return { opcode, blockType: Scratch.BlockType.REPORTER, text: `Unknown: ${opcode}`, color1: '#CCCCCC' };
    }

    return { opcode, ...definition, color1: this.getColorForOpcode(opcode) };
  }


  // DEVELOPMENT AND VALIDATION TOOLS

  isDevelopmentMode() {
    return window.location.hostname === 'localhost' || 
           window.location.search.includes('debug=true') ||
           window.location.hash.includes('debug');
  }

  generateCipherTemplate(cipherName, needsKey = false) {
    const capitalizedName = cipherName.charAt(0).toUpperCase() + cipherName.slice(1);
    const template = `
// Add to createBlockDefinition method:
${cipherName}Encode: {
  blockType: Scratch.BlockType.REPORTER,
  text: '${capitalizedName} encode [TEXT]${needsKey ? ' with key [KEY]' : ''}',
  arguments: {
    TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: 'Hello123' }${needsKey ? ',\n    KEY: { type: Scratch.ArgumentType.STRING, defaultValue: \'SECRET\' }' : ''}
  }
}


// Implement methods:
${cipherName}Encode(args) {
  return this.${cipherName}Transform(args.TEXT${needsKey ? ', args.KEY' : ''}, false);
}


${cipherName}Decode(args) {
  return this.${cipherName}Transform(args.TEXT${needsKey ? ', args.KEY' : ''}, true);
}`;
    return this.createStatusBlock('📋 Template Generated', template, '#A29BFE');
  }



  // UTILITY FUNCTIONS

  safeStringConvert(input) {
    if (input === null || input === undefined) return '';
    return String(input);
  }

  normalizeShift(shift) {
    const num = parseInt(shift);
    return isNaN(num) ? 0 : num;
  }

  isLetter(char) { return /[a-zA-Z]/.test(char); }
  isNumber(char) { return /[0-9]/.test(char); }
  isAlphanumeric(char) { return /[a-zA-Z0-9]/.test(char); }

  getAlphabetPosition(char) {
    if (char >= 'A' && char <= 'Z') return char.charCodeAt(0) - 65;
    if (char >= 'a' && char <= 'z') return char.charCodeAt(0) - 97;
    return -1;
  }

  alphabetPositionToChar(pos, uppercase = false) {
    const base = uppercase ? 65 : 97;
    return String.fromCharCode(base + (pos % 26));
  }

  errorHandler(fn, operation) {
    return (...args) => {
      try { return fn.apply(this, args); }
      catch (error) { return this.createStatusBlock('❌ Error', `${operation}: ${error.message}`, '#FF6B6B'); }
    };
  }
  
  // Morse

  morseEncode(args) {
    try {
      const text = this.safeStringConvert(args.TEXT);
      return this.morseTransform(text, false);
    } catch (error) {
      return 'Morse Encode Error: ' + error.message;
    }
  }

  morseDecode(args) {
    try {
      const morse = this.safeStringConvert(args.MORSE);
      return this.morseTransform(morse, true);
    } catch (error) {
      return 'Morse Decode Error: ' + error.message;
    }
  }

  morseTransform(input, decode) {
    const morseCodeMap = {
      'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 
      'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 
      'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 
      'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 
      'Y': '-.--', 'Z': '--..',
      '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', 
      '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
      '.': '.-.-.-', ',': '--..--', '?': '..--..', "'": '.----.', '!': '-.-.--', 
      '/': '-..-.', '(': '-.--.', ')': '-.--.-', '&': '.-...', ':': '---...', 
      ';': '-.-.-.', '=': '-...-', '+': '.-.-.', '-': '-....-', '_': '..--.-', 
      '"': '.-..-.', '$': '...-..-', '@': '.--.-.'
    };

    const reverseMorseMap = {};
    Object.keys(morseCodeMap).forEach(key => { reverseMorseMap[morseCodeMap[key]] = key; });

    if (decode) {
      let morseText = input;
      let caseInfo = null;
      const zwsp = String.fromCharCode(0x200B);
      if (input.includes(zwsp)) {
        const parts = input.split(zwsp);
        morseText = parts[0];
        if (parts[1]) {
          caseInfo = [];
          for (let i = 0; i < parts[1].length; i++) {
            const code = parts[1].charCodeAt(i);
            if (code === 0x200C) caseInfo.push(1);
            else if (code === 0x200D) caseInfo.push(2);
            else caseInfo.push(0);
          }
        }
      }
      const words = morseText.trim().split('   ');
      let decoded = words.map(word => {
        const characters = word.split(' ');
        return characters.map(char => reverseMorseMap[char] || '').join('');
      }).join(' ');
      if (caseInfo) {
        let result = '', caseIndex = 0;
        for (let i = 0; i < decoded.length; i++) {
          const char = decoded[i];
          const caseType = caseInfo[caseIndex] || 0;
          if (caseType === 2 && char >= 'A' && char <= 'Z') result += char.toLowerCase();
          else result += char;
          caseIndex++;
        }
        return result;
      }
      return decoded;
    } else {
      let result = [];
      let caseMap = [];
      for (let i = 0; i < input.length; i++) {
        const char = input[i];
        if (char === ' ') { result.push('  '); caseMap.push(0); }
        else {
          const upperChar = char.toUpperCase();
          const morseCode = morseCodeMap[upperChar];
          if (morseCode) {
            result.push(morseCode);
            if (char >= 'A' && char <= 'Z') caseMap.push(1);
            else if (char >= 'a' && char <= 'z') caseMap.push(2);
            else caseMap.push(0);
          } else { result.push(''); caseMap.push(0); }
        }
      }
      let caseString = '';
      for (let i = 0; i < caseMap.length; i++) {
        if (caseMap[i] === 1) caseString += String.fromCharCode(0x200C);
        else if (caseMap[i] === 2) caseString += String.fromCharCode(0x200D);
        else caseString += String.fromCharCode(0xFEFF);
      }
      const zwsp = String.fromCharCode(0x200B);
      return result.join(' ') + zwsp + caseString;
    }
  }

  // Polybius

  polybiusEncode(args) {
    try {
      const text = this.safeStringConvert(args.TEXT);
      return this.polybiusTransform(text, false);
    } catch (error) {
      return 'Polybius Encode Error: ' + error.message;
    }
  }

  polybiusDecode(args) {
    try {
      const polybius = this.safeStringConvert(args.POLYBIUS);
      return this.polybiusTransform(polybius, true);
    } catch (error) {
      return 'Polybius Decode Error: ' + error.message;
    }
  }

  polybiusTransform(input, decode) {
    const polybiusSquare = [
      ['A', 'B', 'C', 'D', 'E'],
      ['F', 'G', 'H', 'I/J', 'K'],
      ['L', 'M', 'N', 'O', 'P'],
      ['Q', 'R', 'S', 'T', 'U'],
      ['V', 'W', 'X', 'Y', 'Z']
    ];
    const lowercaseSquare = [
      ['a', 'b', 'c', 'd', 'e'],
      ['f', 'g', 'h', 'i/j', 'k'],
      ['l', 'm', 'n', 'o', 'p'],
      ['q', 'r', 's', 't', 'u'],
      ['v', 'w', 'x', 'y', 'z']
    ];
    const numberRow = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const symbolRow = ['.', ',', '?', '!', ':', ';', '-', '_', '"', "'"];
    if (decode) {
      const pairs = input.trim().split(/\s+/);
      return pairs.map(pair => {
        if (pair === '00') return ' ';
        if (pair.length === 2) {
          const row = parseInt(pair[0]) - 1;
          const col = parseInt(pair[1]) - 1;
          if (row >= 0 && row < 5 && col >= 0 && col < 5) {
            let char = polybiusSquare[row][col];
            if (char === 'I/J') char = 'I';
            return char;
          }
        }
        if (pair.length === 3) {
          const specialRow = parseInt(pair[0]);
          const row = parseInt(pair[1]) - 1;
          const col = parseInt(pair[2]) - 1;
          if (specialRow === 6 && row >= 0 && row < 5 && col >= 0 && col < 5) {
            let char = lowercaseSquare[row][col];
            if (char === 'i/j') char = 'i';
            return char;
          }
        }
        if (pair.length === 2 && pair[0] === '7') {
          const idx = parseInt(pair[1]);
          return (idx >= 0 && idx < numberRow.length) ? numberRow[idx] : '';
        }
        if (pair.length === 2 && pair[0] === '8') {
          const idx = parseInt(pair[1]);
          return (idx >= 0 && idx < symbolRow.length) ? symbolRow[idx] : '';
        }
        return '';
      }).join('');
    } else {
      let result = [];
      for (let i = 0; i < input.length; i++) {
        const char = input[i];
        if (char === ' ') { result.push('00'); continue; }
        if (char >= 'A' && char <= 'Z') {
          let found = false;
          for (let row = 0; row < 5; row++) {
            for (let col = 0; col < 5; col++) {
              const squareChar = polybiusSquare[row][col];
              if ((char === 'I' || char === 'J') && squareChar === 'I/J') {
                result.push(`${row + 1}${col + 1}`); found = true; break;
              } else if (char === squareChar) {
                result.push(`${row + 1}${col + 1}`); found = true; break;
              }
            }
            if (found) break;
          }
        } else if (char >= 'a' && char <= 'z') {
          let found = false;
          for (let row = 0; row < 5; row++) {
            for (let col = 0; col < 5; col++) {
              const squareChar = lowercaseSquare[row][col];
              if ((char === 'i' || char === 'j') && squareChar === 'i/j') {
                result.push(`6${row + 1}${col + 1}`); found = true; break;
              } else if (char === squareChar) {
                result.push(`6${row + 1}${col + 1}`); found = true; break;
              }
            }
            if (found) break;
          }
        } else if (char >= '0' && char <= '9') {
          const idx = numberRow.indexOf(char);
          if (idx !== -1) result.push(`7${idx}`);
        } else if (symbolRow.includes(char)) {
          const idx = symbolRow.indexOf(char);
          result.push(`8${idx}`);
        }
      }
      return result.join(' ');
    }
  }

  // Enigma (unchanged)

  enigmaEncode(args) {
    try {
      const text = this.safeStringConvert(args.TEXT);
      const settings = this.safeStringConvert(args.SETTINGS);
      return this.enigmaTransform(text, settings);
    } catch (error) {
      return 'Enigma Encode Error: ' + error.message;
    }
  }

  enigmaDecode(args) {
    try {
      const text = this.safeStringConvert(args.TEXT);
      const settings = this.safeStringConvert(args.SETTINGS);
      return this.enigmaTransform(text, settings);
    } catch (error) {
      return 'Enigma Decode Error: ' + error.message;
    }
  }

  enigmaTransform(input, settings) {
    let rotorNames, positions, reflectorName, plugboardPairs;
    try {
      const parts = settings.split('|');
      rotorNames = (parts[0] || 'I-II-III').split('-');
      positions = (parts[1] || 'AAA').split('');
      reflectorName = parts[2] || 'B';
      plugboardPairs = parts.length > 3 ? parts[3] : '';
    } catch (e) {
      throw new Error('Invalid enigma settings format');
    }
    const rotorWirings = {
      'I': 'EKMFLGDQVZNTOWYHXUSPAIBRCJ',
      'II': 'AJDKSIRUXBLHWTMCQGZNPYFVOE',
      'III': 'BDFHJLCPRTXVZNYEIWGAKMUSQO',
      'IV': 'ESOVPZJAYQUIRHXLNFTGKDCMWB',
      'V': 'VZBRGITYUPSDNHLXAWMJQOFECK'
    };
    const rotorNotches = { 'I': 'Q', 'II': 'E', 'III': 'V', 'IV': 'J', 'V': 'Z' };
    const reflectorWirings = {
      'A': 'EJMZALYXVBWFCRQUONTSPIKHGD',
      'B': 'YRUHQSLDPXNGOKMIEBFZCWVJAT',
      'C': 'FVPJIAOYEDRZXWGCTKUQSBNMHL'
    };
    const plugboard = {};
    if (plugboardPairs) {
      const pairs = plugboardPairs.trim().split(/\s+/);
      pairs.forEach(pair => {
        if (pair.length === 2) {
          const [a, b] = pair.toUpperCase().split('');
          plugboard[a] = b; plugboard[b] = a;
        }
      });
    }
    const rotors = rotorNames.map((name, index) => {
      if (!rotorWirings[name]) throw new Error(`Unknown rotor: ${name}`);
      return {
        name,
        wiring: rotorWirings[name],
        position: positions[index] ? positions[index].toUpperCase().charCodeAt(0) - 65 : 0,
        notch: rotorNotches[name]
      };
    });
    if (!reflectorWirings[reflectorName]) throw new Error(`Unknown reflector: ${reflectorName}`);
    const reflector = reflectorWirings[reflectorName];

    let result = '';
    for (let i = 0; i < input.length; i++) {
      const char = input[i];
      if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
        let processChar = char;
        const isLowercase = char >= 'a' && char <= 'z';
        const isNumber = char >= '0' && char <= '9';
        let originalNumber = null;
        if (isNumber) {
          originalNumber = char;
          const numberToLetter = 'QWERTYUIOP';
          processChar = numberToLetter[parseInt(char)];
        } else if (isLowercase) {
          processChar = char.toUpperCase();
        }

        let step_middle = false, step_left = false;
        if (rotors.length > 1) {
          const middle_rotor = rotors[1];
          const middle_notch_pos = middle_rotor.notch.charCodeAt(0) - 65;
          if (middle_rotor.position === middle_notch_pos) { step_middle = true; step_left = true; }
        }
        if (rotors.length > 2) {
          const right_rotor = rotors[2];
          const right_notch_pos = right_rotor.notch.charCodeAt(0) - 65;
          if (right_rotor.position === right_notch_pos) step_middle = true;
        }
        if (step_left && rotors.length > 2) rotors[0].position = (rotors[0].position + 1) % 26;
        if (step_middle && rotors.length > 1) rotors[1].position = (rotors[1].position + 1) % 26;
        if (rotors.length > 0) rotors[2].position = (rotors[2].position + 1) % 26;

        let c = processChar;
        if (plugboard[c]) c = plugboard[c];

        for (let j = rotors.length - 1; j >= 0; j--) {
          const rotor = rotors[j];
          const offset = rotor.position;
          const idx = (c.charCodeAt(0) - 65 + offset) % 26;
          c = rotor.wiring[idx];
          c = String.fromCharCode(((c.charCodeAt(0) - 65 - offset + 26) % 26) + 65);
        }

        const refIdx = c.charCodeAt(0) - 65;
        c = reflector[refIdx];

        for (let j = 0; j < rotors.length; j++) {
          const rotor = rotors[j];
          const offset = rotor.position;
          const idx = (c.charCodeAt(0) - 65 + offset) % 26;
          const pos = rotor.wiring.indexOf(String.fromCharCode(idx + 65));
          c = String.fromCharCode(((pos - offset + 26) % 26) + 65);
        }

        if (plugboard[c]) c = plugboard[c];

        if (isNumber) {
          const letterToNumber = 'QWERTYUIOP';
          const letterIndex = letterToNumber.indexOf(c);
          result += (letterIndex !== -1) ? letterIndex.toString() : originalNumber;
        } else if (isLowercase) {
          result += c.toLowerCase();
        } else {
          result += c;
        }
      } else {
        result += char;
      }
    }
    return result;
  }

  // AES (unchanged)

  aes256Encode(args) {
    try {
      const text = String(args.TEXT);
      const key = String(args.KEY);
      return this.aesEncrypt(text, key);
    } catch (error) {
      return 'AES Encryption Error: ' + error.message;
    }
  }

  aes256Decode(args) {
    try {
      const text = String(args.TEXT);
      const key = String(args.KEY);
      return this.aesDecrypt(text, key);
    } catch (error) {
      return 'AES Decryption Error: ' + error.message;
    }
  }

  aesEncrypt(plaintext, key) {
    const plaintextBytes = this.stringToBytes(plaintext);
    const keyBytes = this.prepareKey256(key);
    const iv = this.generateRandomIV();
    const paddedPlaintext = this.pkcs7Pad(plaintextBytes, 16);
    const encrypted = [];
    let previousBlock = iv;
    for (let i = 0; i < paddedPlaintext.length; i += 16) {
      const block = paddedPlaintext.slice(i, i + 16);
      const xorBlock = this.xorBlocks(block, previousBlock);
      const encryptedBlock = this.aesEncryptBlock(xorBlock, keyBytes);
      encrypted.push(...encryptedBlock);
      previousBlock = encryptedBlock;
    }
    const result = [...iv, ...encrypted];
    return this.bytesToHex(result);
  }

  aesDecrypt(ciphertext, key) {
    try {
      const ciphertextBytes = this.hexToBytes(ciphertext);
      const keyBytes = this.prepareKey256(key);
      if (ciphertextBytes.length < 32) throw new Error('Invalid ciphertext length');
      const iv = ciphertextBytes.slice(0, 16);
      const encrypted = ciphertextBytes.slice(16);
      const decrypted = [];
      let previousBlock = iv;
      for (let i = 0; i < encrypted.length; i += 16) {
        const block = encrypted.slice(i, i + 16);
        const decryptedBlock = this.aesDecryptBlock(block, keyBytes);
        const xorBlock = this.xorBlocks(decryptedBlock, previousBlock);
        decrypted.push(...xorBlock);
        previousBlock = block;
      }
      const unpadded = this.pkcs7Unpad(decrypted);
      return this.bytesToString(unpadded);
    } catch (error) {
      return 'Decryption failed: ' + error.message;
    }
  }

  aesEncryptBlock(block, expandedKey) {
    let state = [...block];
    state = this.addRoundKey(state, expandedKey.slice(0, 16));
    for (let round = 1; round < 14; round++) {
      state = this.subBytes(state);
      state = this.shiftRows(state);
      state = this.mixColumns(state);
      state = this.addRoundKey(state, expandedKey.slice(round * 16, (round + 1) * 16));
    }
    state = this.subBytes(state);
    state = this.shiftRows(state);
    state = this.addRoundKey(state, expandedKey.slice(14 * 16, 15 * 16));
    return state;
  }

  aesDecryptBlock(block, expandedKey) {
    let state = [...block];
    state = this.addRoundKey(state, expandedKey.slice(14 * 16, 15 * 16));
    state = this.invShiftRows(state);
    state = this.invSubBytes(state);
    for (let round = 13; round >= 1; round--) {
      state = this.addRoundKey(state, expandedKey.slice(round * 16, (round + 1) * 16));
      state = this.invMixColumns(state);
      state = this.invShiftRows(state);
      state = this.invSubBytes(state);
    }
    state = this.addRoundKey(state, expandedKey.slice(0, 16));
    return state;
  }

  subBytes(state) { return state.map(byte => this.sBox[byte]); }
  invSubBytes(state) { return state.map(byte => this.invSBox[byte]); }

  shiftRows(state) {
    return [
      state[0], state[5], state[10], state[15],
      state[4], state[9], state[14], state[3],
      state[8], state[13], state[2], state[7],
      state[12], state[1], state[6], state[11]
    ];
  }

  invShiftRows(state) {
    return [
      state[0], state[13], state[10], state[7],
      state[4], state[1], state[14], state[11],
      state[8], state[5], state[2], state[15],
      state[12], state[9], state[6], state[3]
    ];
  }

  mixColumns(state) {
    const result = new Array(16);
    for (let col = 0; col < 4; col++) {
      const offset = col * 4;
      result[offset] = this.mul2[state[offset]] ^ this.mul3[state[offset + 1]] ^ state[offset + 2] ^ state[offset + 3];
      result[offset + 1] = state[offset] ^ this.mul2[state[offset + 1]] ^ this.mul3[state[offset + 2]] ^ state[offset + 3];
      result[offset + 2] = state[offset] ^ state[offset + 1] ^ this.mul2[state[offset + 2]] ^ this.mul3[state[offset + 3]];
      result[offset + 3] = this.mul3[state[offset]] ^ state[offset + 1] ^ state[offset + 2] ^ this.mul2[state[offset + 3]];
    }
    return result;
  }

  invMixColumns(state) {
    const result = new Array(16);
    for (let col = 0; col < 4; col++) {
      const offset = col * 4;
      result[offset] = this.mul14[state[offset]] ^ this.mul11[state[offset + 1]] ^ this.mul13[state[offset + 2]] ^ this.mul9[state[offset + 3]];
      result[offset + 1] = this.mul9[state[offset]] ^ this.mul14[state[offset + 1]] ^ this.mul11[state[offset + 2]] ^ this.mul13[state[offset + 3]];
      result[offset + 2] = this.mul13[state[offset]] ^ this.mul9[state[offset + 1]] ^ this.mul14[state[offset + 2]] ^ this.mul11[state[offset + 3]];
      result[offset + 3] = this.mul11[state[offset]] ^ this.mul13[state[offset + 1]] ^ this.mul9[state[offset + 2]] ^ this.mul14[state[offset + 3]];
    }
    return result;
  }

  addRoundKey(state, roundKey) { return state.map((byte, i) => byte ^ roundKey[i]); }

  keyExpansion(key) {
    const expandedKey = [...key];
    for (let i = 8; i < 60; i++) {
      let temp = [
        expandedKey[(i - 1) * 4],
        expandedKey[(i - 1) * 4 + 1],
        expandedKey[(i - 1) * 4 + 2],
        expandedKey[(i - 1) * 4 + 3]
      ];
      if (i % 8 === 0) {
        temp = [
          this.sBox[temp[1]] ^ this.rcon[Math.floor(i / 8) - 1],
          this.sBox[temp[2]],
          this.sBox[temp[3]],
          this.sBox[temp[0]]
        ];
      } else if (i % 8 === 4) {
        temp = temp.map(byte => this.sBox[byte]);
      }
      expandedKey[i * 4] = expandedKey[(i - 8) * 4] ^ temp[0];
      expandedKey[i * 4 + 1] = expandedKey[(i - 8) * 4 + 1] ^ temp[1];
      expandedKey[i * 4 + 2] = expandedKey[(i - 8) * 4 + 2] ^ temp[2];
      expandedKey[i * 4 + 3] = expandedKey[(i - 8) * 4 + 3] ^ temp[3];
    }
    return expandedKey;
  }

  galoisMultiply(a, b) {
    let result = 0;
    for (let i = 0; i < 8; i++) {
      if (b & 1) result ^= a;
      const hiBitSet = a & 0x80;
      a <<= 1;
      if (hiBitSet) a ^= 0x1b;
      b >>= 1;
    }
    return result & 0xff;
  }

  prepareKey256(keyString) {
    const keyBytes = this.stringToBytes(keyString);
    const key256 = new Array(32);
    for (let i = 0; i < 32; i++) {
      let keyByte = 0;
      for (let j = 0; j < keyBytes.length; j++) {
        keyByte ^= keyBytes[j] + i + j + (keyBytes[j % keyBytes.length] << (i % 8));
      }
      key256[i] = keyByte & 0xff;
    }
    return this.keyExpansion(key256);
  }

  generateRandomIV() {
    const iv = new Array(16);
    for (let i = 0; i < 16; i++) iv[i] = Math.floor(Math.random() * 256);
    return iv;
  }

  pkcs7Pad(data, blockSize) {
    const paddingLength = blockSize - (data.length % blockSize);
    const padding = new Array(paddingLength).fill(paddingLength);
    return [...data, ...padding];
  }

  pkcs7Unpad(data) {
    const paddingLength = data[data.length - 1];
    if (paddingLength > 16 || paddingLength === 0) throw new Error('Invalid padding');
    for (let i = data.length - paddingLength; i < data.length; i++) {
      if (data[i] !== paddingLength) throw new Error('Invalid padding');
    }
    return data.slice(0, data.length - paddingLength);
  }

  xorBlocks(block1, block2) { return block1.map((byte, i) => byte ^ block2[i]); }

  stringToBytes(str) { return Array.from(str, char => char.charCodeAt(0)); }
  bytesToString(bytes) { return String.fromCharCode(...bytes); }

  bytesToHex(bytes) { return bytes.map(byte => byte.toString(16).padStart(2, '0')).join(''); }

  hexToBytes(hex) {
    const cleaned = hex.replace(/[^0-9a-fA-F]/g, '');
    const bytes = [];
    for (let i = 0; i < cleaned.length; i += 2) {
      if (i + 1 < cleaned.length) bytes.push(parseInt(cleaned.substr(i, 2), 16));
    }
    return bytes;
  }

  // Classic ciphers

  vigenereEncode(args) { return this.vigenereCipher(args.TEXT, args.KEY, false); }
  vigenereDecode(args) { return this.vigenereCipher(args.TEXT, args.KEY, true); }

  caesarEncode(args) { return this.caesarCipher(args.TEXT, args.SHIFT, false); }
  caesarDecode(args) { return this.caesarCipher(args.TEXT, args.SHIFT, true); }

  caesarCipher(text, shift, decode = false) {
    text = String(text);
    if (!text) return '';
    let result = '';
    const letterShift = decode ? (26 - (shift % 26)) % 26 : shift % 26;
    const numberShift = decode ? (10 - (shift % 10)) % 10 : shift % 10;
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (/[a-zA-Z]/.test(char)) {
        const isUpperCase = char === char.toUpperCase();
        const base = isUpperCase ? 65 : 97;
        const newChar = String.fromCharCode(((char.charCodeAt(0) - base + letterShift) % 26) + base);
        result += newChar;
      } else if (/[0-9]/.test(char)) {
        const newNum = ((parseInt(char) + numberShift) % 10).toString();
        result += newNum;
      } else {
        result += char;
      }
    }
    return result;
  }

  vigenereCipher(text, key, decode = false) {
    text = String(text);
    key = String(key);
    if (!text || !key) return '';
    let result = '', keyIndex = 0;
    for (let i = 0; i < text.length; i++) {
      const textChar = text[i];
      if (/[a-zA-Z0-9]/.test(textChar)) {
        const keyChar = key[keyIndex % key.length];
        if (/[a-zA-Z]/.test(textChar)) {
          const isUpperCase = textChar === textChar.toUpperCase();
          const textCode = textChar.toLowerCase().charCodeAt(0) - 97;
          let keyCode;
          if (/[a-zA-Z]/.test(keyChar)) keyCode = keyChar.toLowerCase().charCodeAt(0) - 97;
          else if (/[0-9]/.test(keyChar)) keyCode = parseInt(keyChar);
          else keyCode = 0;
          const newCode = decode ? (textCode - keyCode + 26) % 26 : (textCode + keyCode) % 26;
          const newChar = String.fromCharCode(newCode + 97);
          result += isUpperCase ? newChar.toUpperCase() : newChar;
        } else if (/[0-9]/.test(textChar)) {
          const textNum = parseInt(textChar);
          let keyNum;
          if (/[0-9]/.test(keyChar)) keyNum = parseInt(keyChar);
          else if (/[a-zA-Z]/.test(keyChar)) keyNum = (keyChar.toLowerCase().charCodeAt(0) - 97) % 10;
          else keyNum = 0;
          const newNum = decode ? (textNum - keyNum + 10) % 10 : (textNum + keyNum) % 10;
          result += newNum.toString();
        }
        keyIndex++;
      } else {
        result += textChar;
      }
    }
    return result;
  }

  atbashEncode(args) { return this.atbashCipher(args.TEXT); }
  atbashDecode(args) { return this.atbashCipher(args.TEXT); }

  atbashCipher(text) {
    text = String(text);
    if (!text) return '';
    let result = '';
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (/[a-zA-Z]/.test(char)) {
        const isUpperCase = char === char.toUpperCase();
        const base = isUpperCase ? 65 : 97;
        const newChar = String.fromCharCode(base + (25 - (char.charCodeAt(0) - base)));
        result += newChar;
      } else if (/[0-9]/.test(char)) {
        const newNum = (9 - parseInt(char)).toString();
        result += newNum;
      } else {
        result += char;
      }
    }
    return result;
  }

  rot13Encode(args) { return this.rot13Cipher(args.TEXT, false); }
  rot13Decode(args) { return this.rot13Cipher(args.TEXT, true); }

  rot13Cipher(text, decode = false) {
    text = String(text);
    if (!text) return '';
    let result = '';
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (/[a-zA-Z]/.test(char)) {
        const isUpperCase = char === char.toUpperCase();
        const base = isUpperCase ? 65 : 97;
        const shift = 13;
        const newChar = String.fromCharCode(((char.charCodeAt(0) - base + shift) % 26) + base);
        result += newChar;
      } else if (/[0-9]/.test(char)) {
        const shift = 5;
        const newNum = ((parseInt(char) + shift) % 10).toString();
        result += newNum;
      } else {
        result += char;
      }
    }
    return result;
  }

  hexEncode(args) {
    const text = String(args.TEXT);
    let hex = '';
    for (let i = 0; i < text.length; i++) {
      hex += text.charCodeAt(i).toString(16).padStart(2, '0');
    }
    return hex;
  }

  hexDecode(args) {
    let str = '';
    const hex = String(args.HEX).replace(/[^0-9a-fA-F]/g, '').trim();
    for (let i = 0; i < hex.length; i += 2) {
      const hexPair = hex.substr(i, 2);
      if (hexPair.length === 2) {
        const charCode = parseInt(hexPair, 16);
        if (!isNaN(charCode)) str += String.fromCharCode(charCode);
        else return 'Error: Invalid hex input';
      }
    }
    return str;
  }

  a1z26Encode(args) { return this.a1z26Cipher(args.TEXT, false); }
  a1z26Decode(args) { return this.a1z26Cipher(args.NUMBERS, true); }

  a1z26Cipher(input, decode) {
    input = String(input);
    if (!input) return '';
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ';
    let result = '';
    if (decode) {
      const parts = input.split(' ');
      for (let part of parts) {
        const num = parseInt(part);
        if (!isNaN(num) && num >= 1 && num <= alphabet.length) {
          result += alphabet[num - 1];
        }
      }
    } else {
      for (let char of input) {
        const index = alphabet.indexOf(char);
        if (index !== -1) result += (index + 1) + ' ';
      }
    }
    return result.trim();
  }

  binaryEncode(args) { return this.binaryCipher(args.TEXT, false); }
  binaryDecode(args) { return this.binaryCipher(args.BINARY, true); }

  binaryCipher(input, decode) {
    input = String(input);
    if (!input) return '';
    let result = '';
    if (decode) {
      const binaryArray = input.split(' ');
      for (let binary of binaryArray) {
        const charCode = parseInt(binary, 2);
        if (!isNaN(charCode)) result += String.fromCharCode(charCode);
      }
    } else {
      for (let char of input) {
        const charCode = char.charCodeAt(0);
        result += charCode.toString(2).padStart(8, '0') + ' ';
      }
    }
    return result.trim();
  }

// Playfair cipher methods with MODE parameter

playfairEncode(args) {
  try {
    const text = this.safeStringConvert(args.TEXT);
    const key = this.safeStringConvert(args.KEY);
    const mode = this.safeStringConvert(args.MODE).toLowerCase();
    
    if (!text || !key) return '';
    
    const matrix = this.buildPlayfairMatrix(key);
    
    // Classic mode: standard encryption, uppercase output
    // Friendly mode: preserves original format (spaces, capitalization)
    const useFriendly = (mode === 'friendly');
    
    return this.playfairEncryptWithFormat(text, matrix, useFriendly);
  } catch (error) {
    return this.createStatusBlock('❌ Error', `Playfair encode error: ${error.message}`, '#FF6B6B');
  }
}

playfairDecode(args) {
  try {
    const text = this.safeStringConvert(args.TEXT);
    const key = this.safeStringConvert(args.KEY);
    const mode = this.safeStringConvert(args.MODE).toLowerCase();
    
    if (!text || !key) return '';
    
    const matrix = this.buildPlayfairMatrix(key);
    
    // Classic mode: standard decryption, removes padding
    // Friendly mode: restores original format
    const useFriendly = (mode === 'friendly');
    
    return this.playfairDecryptWithFormat(text, matrix, useFriendly);
  } catch (error) {
    return this.createStatusBlock('❌ Error', `Playfair decode error: ${error.message}`, '#FF6B6B');
  }
}

playfairEncryptWithFormat(text, matrix, friendly) {
  let formatMap = null;
  
  if (friendly) {
    // Store format in friendly mode only
    formatMap = [];
    const originalChars = text.split('');
    
    for (let i = 0; i < originalChars.length; i++) {
      const char = originalChars[i];
      if (/[a-zA-Z]/.test(char)) {
        formatMap.push({
          type: 'letter',
          isLower: char >= 'a' && char <= 'z'
        });
      } else {
        formatMap.push({
          type: 'non-letter',
          char: char
        });
      }
    }
  }
  
  let letters = text.toUpperCase().replace(/[^A-Z]/g, '').replace(/J/g, 'I');
  
  // Prepare digraphs
  let prepared = '';
  let i = 0;
  while (i < letters.length) {
    const a = letters[i];
    const b = letters[i + 1];
    
    prepared += a;
    
    if (!b) {
      prepared += 'X';
      break;
    } else if (a === b) {
      prepared += 'X';
      i++;
    } else {
      prepared += b;
      i += 2;
    }
  }
  
  // Encrypt pairs
  let encrypted = '';
  for (let i = 0; i < prepared.length; i += 2) {
    const a = prepared[i];
    const b = prepared[i + 1];
    const pair = this.encryptPlayfairPair(a, b, matrix);
    encrypted += pair + ' ';
  }
  
  encrypted = encrypted.trim();
  
  // Store format map in memory only if friendly mode
  if (friendly && formatMap) {
    if (!window.playfairFormats) {
      window.playfairFormats = {};
    }
    window.playfairFormats[encrypted] = formatMap;
  }
  
  return encrypted;
}

playfairDecryptWithFormat(text, matrix, friendly) {
  const cleanText = text.toUpperCase().replace(/[^A-Z]/g, '');
  
  let decrypted = '';
  for (let i = 0; i < cleanText.length; i += 2) {
    if (i + 1 >= cleanText.length) break;
    const a = cleanText[i];
    const b = cleanText[i + 1];
    const pair = this.decryptPlayfairPair(a, b, matrix);
    decrypted += pair;
  }
  
  // Remove padding X at the end
  if (decrypted.endsWith('X')) {
    decrypted = decrypted.slice(0, -1);
  }
  
  // Remove filler X between doubled letters
  let cleanedDecrypted = '';
  for (let i = 0; i < decrypted.length; i++) {
    if (i < decrypted.length - 1 && 
        decrypted[i] === 'X' && 
        i > 0 && 
        decrypted[i-1] === decrypted[i+1]) {
      continue;
    }
    cleanedDecrypted += decrypted[i];
  }
  decrypted = cleanedDecrypted;
  
  // In friendly mode, try to restore format from memory
  if (friendly) {
    const normalizedInput = text.trim();
    if (window.playfairFormats && window.playfairFormats[normalizedInput]) {
      const formatMap = window.playfairFormats[normalizedInput];
      let result = '';
      let letterIndex = 0;
      
      for (const item of formatMap) {
        if (item.type === 'non-letter') {
          result += item.char;
        } else if (item.type === 'letter' && letterIndex < decrypted.length) {
          const letter = decrypted[letterIndex];
          result += item.isLower ? letter.toLowerCase() : letter;
          letterIndex++;
        }
      }
      
      return result;
    }
  }
  
  // Classic mode or no format found: return uppercase decrypted text
  return decrypted;
}

// Helper methods
buildPlayfairMatrix(key) {
  const alphabet = 'ABCDEFGHIKLMNOPQRSTUVWXYZ';
  const keyUpper = key.toUpperCase().replace(/[^A-Z]/g, '').replace(/J/g, 'I');
  
  let matrixString = '';
  const seen = new Set();
  
  for (const char of keyUpper) {
    if (!seen.has(char) && alphabet.includes(char)) {
      seen.add(char);
      matrixString += char;
    }
  }
  
  for (const char of alphabet) {
    if (!seen.has(char)) {
      seen.add(char);
      matrixString += char;
    }
  }
  
  const matrix = [];
  for (let i = 0; i < 5; i++) {
    matrix.push(matrixString.slice(i * 5, (i + 1) * 5).split(''));
  }
  
  return matrix;
}

findInMatrix(matrix, char) {
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 5; col++) {
      if (matrix[row][col] === char) {
        return { row, col };
      }
    }
  }
  return null;
}

encryptPlayfairPair(a, b, matrix) {
  const posA = this.findInMatrix(matrix, a);
  const posB = this.findInMatrix(matrix, b);
  
  if (!posA || !posB) return a + b;
  
  if (posA.row === posB.row) {
    const newColA = (posA.col + 1) % 5;
    const newColB = (posB.col + 1) % 5;
    return matrix[posA.row][newColA] + matrix[posB.row][newColB];
  }
  
  if (posA.col === posB.col) {
    const newRowA = (posA.row + 1) % 5;
    const newRowB = (posB.row + 1) % 5;
    return matrix[newRowA][posA.col] + matrix[newRowB][posB.col];
  }
  
  return matrix[posA.row][posB.col] + matrix[posB.row][posA.col];
}

decryptPlayfairPair(a, b, matrix) {
  const posA = this.findInMatrix(matrix, a);
  const posB = this.findInMatrix(matrix, b);
  
  if (!posA || !posB) return a + b;
  
  if (posA.row === posB.row) {
    const newColA = (posA.col + 4) % 5;
    const newColB = (posB.col + 4) % 5;
    return matrix[posA.row][newColA] + matrix[posB.row][newColB];
  }
  
  if (posA.col === posB.col) {
    const newRowA = (posA.row + 4) % 5;
    const newRowB = (posB.row + 4) % 5;
    return matrix[newRowA][posA.col] + matrix[newRowB][posB.col];
  }
  
  return matrix[posA.row][posB.col] + matrix[posB.row][posA.col];
}

  // One-time Pad

  otpEncode(args) {
    const text = this.safeStringConvert(args.TEXT);
    const key = this.safeStringConvert(args.KEY);
    const textBytes = this.stringToBytes(text);
    const keyBytes = this.stringToBytes(key);
    if (keyBytes.length < textBytes.length) {
      return this.createStatusBlock('❌ Error', 'Key must be at least as long as text', '#FF6B6B');
    }
    const out = textBytes.map((b, i) => b ^ keyBytes[i]);
    return this.bytesToHex(out);
  }

  otpDecode(args) {
    const hex = this.safeStringConvert(args.HEX);
    const key = this.safeStringConvert(args.KEY);
    const cipherBytes = this.hexToBytes(hex);
    const keyBytes = this.stringToBytes(key);
    if (keyBytes.length < cipherBytes.length) {
      return this.createStatusBlock('❌ Error', 'Key must be at least as long as ciphertext bytes', '#FF6B6B');
    }
    const out = cipherBytes.map((b, i) => b ^ keyBytes[i]);
    return this.bytesToString(out);
  }

  // RSA (fixed parsing and chunking)

 rsaGenerateKeysEncode(args) {
  const bits = parseInt(args.BITS) || 512;
  try {
    const { n, e, d } = this.rsaGenerateKeys(bits);
    const pub = JSON.stringify({ n: '0x' + n.toString(16), e: e.toString() });
    const priv = JSON.stringify({ n: '0x' + n.toString(16), d: '0x' + d.toString(16) });
    const message = `Public Key:\n${pub}\n\nPrivate Key:\n${priv}`;
    return this.createStatusBlock('🔑 RSA Keys Generated', message, '#A29BFE');
  } catch (err) {
    return this.createStatusBlock('❌ Error', `RSA keygen failed: ${err.message}`, '#FF6B6B');
  }
}


 

  rsaGenerateKeysEncode(args) {
  const bits = parseInt(args.BITS) || 512;
  try {
    const { n, e, d } = this.rsaGenerateKeys(bits);
    const pub = JSON.stringify({ n: '0x' + n.toString(16), e: e.toString() });
    const priv = JSON.stringify({ n: '0x' + n.toString(16), d: '0x' + d.toString(16) });
    const message = `Public Key:\n${pub}\n\nPrivate Key:\n${priv}`;
    return this.createStatusBlock('🔑 RSA Keys Generated', message, '#A29BFE');
  } catch (err) {
    return this.createStatusBlock('❌ Error', `RSA keygen failed: ${err.message}`, '#FF6B6B');
  }
}

rsaEncode(args) {
  try {
    const text = this.safeStringConvert(args.TEXT);
    if (!text) return '';
    
    const publicKey = JSON.parse(args.PUBLIC_KEY);
    if (!publicKey.n || !publicKey.e) {
      return this.createStatusBlock('❌ Error', 'Invalid public key format', '#FF6B6B');
    }

    const n = this.parseBigInt(publicKey.n);
    const e = this.parseBigInt(publicKey.e);

    // Encrypt each character individually
    const encrypted = [];
    for (let i = 0; i < text.length; i++) {
      const charCode = BigInt(text.charCodeAt(i));
      const encryptedChar = this.modPow(charCode, e, n);
      encrypted.push(encryptedChar.toString(16));
    }

    return encrypted.join(' ');
  } catch (error) {
    return this.createStatusBlock('❌ Error', `RSA encrypt error: ${error.message}`, '#FF6B6B');
  }
}

rsaDecode(args) {
  try {
    const hexChunks = this.safeStringConvert(args.HEX_CHUNKS);
    if (!hexChunks) return '';
    
    const privateKey = JSON.parse(args.PRIVATE_KEY);
    if (!privateKey.n || !privateKey.d) {
      return this.createStatusBlock('❌ Error', 'Invalid private key format', '#FF6B6B');
    }

    const n = this.parseBigInt(privateKey.n);
    const d = this.parseBigInt(privateKey.d);

    // Split encrypted chunks and decrypt each one
    const chunks = hexChunks.trim().split(/\s+/);
    let decrypted = '';
    
    for (const chunk of chunks) {
      if (!chunk) continue;
      const encryptedValue = BigInt('0x' + chunk);
      const decryptedValue = this.modPow(encryptedValue, d, n);
      decrypted += String.fromCharCode(Number(decryptedValue));
    }

    return decrypted;
  } catch (error) {
    return this.createStatusBlock('❌ Error', `RSA decrypt error: ${error.message}`, '#FF6B6B');
  }
}

// Helper function to parse BigInt from various formats
parseBigInt(value) {
  const s = String(value).trim();
  if (s.startsWith('0x') || s.startsWith('0X')) {
    return BigInt(s);
  }
  if (/^-?\d+$/.test(s)) {
    return BigInt(s);
  }
  if (/^[0-9a-fA-F]+$/.test(s)) {
    return BigInt('0x' + s);
  }
  throw new Error('Invalid number format');
}

// RSA helpers

  parseBigInt(value) {
    const s = String(value).trim();
    if (s.startsWith('0x') || s.startsWith('0X')) return BigInt(s);
    if (/^-?\d+$/.test(s)) return BigInt(s);
    // allow pure hex without 0x
    if (/^[0-9a-fA-F]+$/.test(s)) return BigInt('0x' + s);
    throw new Error('Invalid BigInt format');
  }

  rsaGenerateKeys(bits) {
    const e = 65537n;
    const p = this.randomPrime(bits / 2);
    const q = this.randomPrime(bits / 2);
    if (p === q) return this.rsaGenerateKeys(bits);
    const n = p * q;
    const phi = (p - 1n) * (q - 1n);
    if (this.gcd(e, phi) !== 1n) return this.rsaGenerateKeys(bits);
    const d = this.modInverse(e, phi);
    return { n, e, d };
  }

  bytesToBigInt(arr) {
    let x = 0n;
    for (const b of arr) x = (x << 8n) + BigInt(b);
    return x;
  }

  bigIntToBytes(x) {
    if (x === 0n) return [0];
    const bytes = [];
    while (x > 0) {
      bytes.unshift(Number(x & 0xffn));
      x >>= 8n;
    }
    return bytes;
  }

  modPow(base, exp, mod) {
    let result = 1n, b = base % mod, e = exp;
    while (e > 0) {
      if (e & 1n) result = (result * b) % mod;
      b = (b * b) % mod;
      e >>= 1n;
    }
    return result;
  }

  gcd(a, b) {
    while (b) { const t = b; b = a % b; a = t; }
    return a;
  }

  modInverse(a, m) {
    let m0 = m, x0 = 0n, x1 = 1n;
    if (m === 1n) return 0n;
    let aa = a;
    while (aa > 1n) {
      const q = aa / m;
      let t = m;
      m = aa % m; aa = t;
      t = x0;
      x0 = x1 - q * x0;
      x1 = t;
    }
    if (x1 < 0n) x1 += m0;
    return x1;
  }

  randomPrime(bits) {
    let x = this.randomOddBigInt(bits);
    while (!this.isProbablePrime(x, 8)) {
      x = this.randomOddBigInt(bits);
    }
    return x;
  }

  randomOddBigInt(bits) {
    const bytes = Math.max(1, Math.ceil(bits / 8));
    const arr = new Uint8Array(bytes);
    for (let i = 0; i < bytes; i++) arr[i] = Math.floor(Math.random() * 256);
    const topMask = 1 << ((bits - 1) % 8);
    arr[0] |= topMask;
    arr[arr.length - 1] |= 1;
    return this.bytesToBigInt(Array.from(arr));
  }

  isProbablePrime(n, k = 8) {
    if (n < 2n) return false;
    const small = [2n, 3n, 5n, 7n, 11n, 13n, 17n, 19n, 23n, 29n];
    for (const p of small) {
      if (n === p) return true;
      if (n % p === 0n) return false;
    }
    let d = n - 1n, r = 0;
    while ((d & 1n) === 0n) { d >>= 1n; r++; }
    for (let i = 0; i < k; i++) {
      const a = this.uniformRandom(2n, n - 2n);
      let x = this.modPow(a, d, n);
      if (x === 1n || x === n - 1n) continue;
      let cont = false;
      for (let j = 1; j < r; j++) {
        x = (x * x) % n;
        if (x === n - 1n) { cont = true; break; }
      }
      if (cont) continue;
      return false;
    }
    return true;
  }

  uniformRandom(min, max) {
    const range = max - min + 1n;
    const bits = range.toString(2).length;
    while (true) {
      const candidate = this.randomOddBigInt(bits) & ((1n << BigInt(bits)) - 1n);
      if (candidate <= range - 1n) return min + candidate;
    }
  }
}




Scratch.extensions.register(new CryptoExtensions());
