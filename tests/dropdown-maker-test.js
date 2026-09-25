/**
 * Test suite for Dropdown Maker XML serialization hardening
 *
 * This test verifies that user-controlled menu text/value fields containing
 * XML metacharacters are properly escaped at the serialization boundary,
 * while preserving raw values internally.
 */

// Mock Scratch environment
const Scratch = {
  Cast: {
    toString: (val) => String(val)
  }
};

// Extract xmlEscape function (copied from Dropdown-Maker.js)
const xmlEscape = function (unsafe) {
  return Scratch.Cast.toString(unsafe)
    .replace(/&/g, '&amp;')   // MUST be first to avoid double-escaping
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
};

// Extract getEscapedMenus function (copied from Dropdown-Maker.js)
const hasOwn = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key);

function getEscapedMenus(customMenus) {
  const escaped = {};
  for (const menuName in customMenus) {
    if (hasOwn(customMenus, menuName)) {
      escaped[menuName] = {
        items: customMenus[menuName].items.map(item => ({
          text: xmlEscape(item.text),
          value: xmlEscape(item.value)
        })),
        acceptReporters: customMenus[menuName].acceptReporters
      };
    }
  }
  return escaped;
}

// Test utilities
let testsPassed = 0;
let testsFailed = 0;

function assert(condition, message) {
  if (condition) {
    testsPassed++;
    console.log(`✓ ${message}`);
  } else {
    testsFailed++;
    console.error(`✗ ${message}`);
  }
}

function assertEqual(actual, expected, message) {
  if (actual === expected) {
    testsPassed++;
    console.log(`✓ ${message}`);
  } else {
    testsFailed++;
    console.error(`✗ ${message}`);
    console.error(`  Expected: ${JSON.stringify(expected)}`);
    console.error(`  Actual:   ${JSON.stringify(actual)}`);
  }
}

console.log('=== Dropdown Maker XML Serialization Tests ===\n');

// Test 1: XML Metacharacter Escaping
console.log('Test 1: XML metacharacters are properly escaped');
const metacharacters = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&apos;'
};

for (const [char, expected] of Object.entries(metacharacters)) {
  assertEqual(xmlEscape(char), expected, `Escape ${char}`);
}

// Test 2: Complex values
console.log('\nTest 2: Complex values with multiple metacharacters');
assertEqual(
  xmlEscape('foo<bar>baz'),
  'foo&lt;bar&gt;baz',
  'Escape angle brackets in text'
);
assertEqual(
  xmlEscape('<script>alert("xss")</script>'),
  '&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;',
  'Escape script tag'
);
assertEqual(
  xmlEscape('</item>'),
  '&lt;/item&gt;',
  'Escape closing XML tag'
);
assertEqual(
  xmlEscape('Tom & Jerry'),
  'Tom &amp; Jerry',
  'Escape ampersand in text'
);

// Test 3: Ampersand escaping order (prevent double-escaping)
console.log('\nTest 3: Ampersand is escaped first (no double-escaping)');
assertEqual(
  xmlEscape('&lt;'),
  '&amp;lt;',
  'Already-escaped < should not become &amp;amp;lt;'
);

// Test 4: Raw values preserved in customMenus
console.log('\nTest 4: Internal customMenus preserves raw values');
const customMenus = {
  'test-menu': {
    items: [
      { text: '<script>alert("xss")</script>', value: 'Tom & Jerry' },
      { text: '</item>', value: 'foo<bar>baz' }
    ],
    acceptReporters: false
  }
};

assertEqual(
  customMenus['test-menu'].items[0].text,
  '<script>alert("xss")</script>',
  'Raw text preserved in customMenus'
);
assertEqual(
  customMenus['test-menu'].items[0].value,
  'Tom & Jerry',
  'Raw value preserved in customMenus'
);

// Test 5: getEscapedMenus escapes at boundary
console.log('\nTest 5: getEscapedMenus escapes values at serialization boundary');
const escapedMenus = getEscapedMenus(customMenus);

assertEqual(
  escapedMenus['test-menu'].items[0].text,
  '&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;',
  'Text escaped in output'
);
assertEqual(
  escapedMenus['test-menu'].items[0].value,
  'Tom &amp; Jerry',
  'Value escaped in output'
);
assertEqual(
  escapedMenus['test-menu'].items[1].text,
  '&lt;/item&gt;',
  'XML tag escaped in output'
);
assertEqual(
  escapedMenus['test-menu'].items[1].value,
  'foo&lt;bar&gt;baz',
  'Angle brackets escaped in output'
);

// Test 6: Original customMenus unchanged after escaping
console.log('\nTest 6: Original customMenus remains unchanged after getEscapedMenus');
assertEqual(
  customMenus['test-menu'].items[0].text,
  '<script>alert("xss")</script>',
  'Original text still raw after escaping'
);
assertEqual(
  customMenus['test-menu'].items[0].value,
  'Tom & Jerry',
  'Original value still raw after escaping'
);

// Test 7: acceptReporters flag preserved
console.log('\nTest 7: acceptReporters flag is preserved');
assertEqual(
  escapedMenus['test-menu'].acceptReporters,
  false,
  'acceptReporters preserved'
);

// Test 8: Multiple menus handled correctly
console.log('\nTest 8: Multiple menus handled correctly');
const multiMenus = {
  'menu-1': {
    items: [{ text: 'A & B', value: '1' }],
    acceptReporters: false
  },
  'menu-2': {
    items: [{ text: 'C < D', value: '2' }],
    acceptReporters: true
  }
};
const escapedMulti = getEscapedMenus(multiMenus);

assertEqual(
  escapedMulti['menu-1'].items[0].text,
  'A &amp; B',
  'First menu escaped'
);
assertEqual(
  escapedMulti['menu-2'].items[0].text,
  'C &lt; D',
  'Second menu escaped'
);
assertEqual(
  escapedMulti['menu-2'].acceptReporters,
  true,
  'Second menu acceptReporters preserved'
);

// Test 9: Empty and edge cases
console.log('\nTest 9: Edge cases');
assertEqual(xmlEscape(''), '', 'Empty string handled');
assertEqual(xmlEscape('normal text'), 'normal text', 'Normal text unchanged');
assertEqual(
  xmlEscape('&&&'),
  '&amp;&amp;&amp;',
  'Multiple ampersands escaped'
);

// Test 10: JSON round-trip integrity
console.log('\nTest 10: JSON import/export preserves raw values');
const testMenu = {
  'imported-menu': {
    items: [{ text: '<test>', value: 'A & B' }],
    acceptReporters: false
  }
};
const jsonStr = JSON.stringify(testMenu);
const parsed = JSON.parse(jsonStr);

assertEqual(
  parsed['imported-menu'].items[0].text,
  '<test>',
  'JSON round-trip preserves raw text'
);
assertEqual(
  parsed['imported-menu'].items[0].value,
  'A & B',
  'JSON round-trip preserves raw value'
);

// Test Summary
console.log('\n=== Test Summary ===');
console.log(`Passed: ${testsPassed}`);
console.log(`Failed: ${testsFailed}`);

if (testsFailed === 0) {
  console.log('\n✓ All tests passed!');
  process.exit(0);
} else {
  console.log(`\n✗ ${testsFailed} test(s) failed`);
  process.exit(1);
}
