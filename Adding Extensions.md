**Adding Your Extension to SharkPool's Extension Collection**
---

### Step 1: Extension Format
**Specifications**
- Extensions made with Turbobuilder or anything alike are **Not Allowed**
- Extensions must be made with the _traditional_ format:
```js
// header metadata

(function (Scratch) {
  "use strict";

  // ...

  class Extension {
    // ...
  }

  Scratch.extensions.register(extClass);
})(Scratch);
```
- Use _traditional_ practices, cast your inputs with `Scratch.Cast`, made your code readable
- Extension ID should include your username
- Include commented header metadata at the top of your extension. You can copy+paste this from any extension file. This includes:
  - Name
  - ID
  - Author
  - Description
  - License
  - Version

### Step 2: Pull Request Format
#### Step 2.1: Code

- Insert your extension's code to the '[extension-code](https://github.com/SharkPool-SP/SharkPools-Extensions/tree/main/extension-code)'
directory. Make a subfolder with your username, and the actual js file

#### Step 2.2: Extension Banner

- Banners (without its border) **MUST** be a SVG sized 300x150px
- Banners **MUST** have a bordered outline. Use this preset:
```svg
<svg xmlns="http://www.w3.org/2000/svg" width="309.298" height="159.648" viewBox="0 0 309.298 159.648"><defs><linearGradient x1="240" y1="105.675" x2="240" y2="255.323" gradientUnits="userSpaceOnUse" id="a"><stop offset="0" stop-color="RED"/><stop offset="1" stop-color="BLUE"/></linearGradient></defs><path d="M90.352 118.17c0-6.398 5.915-12.494 13.12-12.494h272.61c8.613 0 13.568 4.642 13.568 12.245v125.705c0 6.04-4.86 11.697-13.32 11.697H103.72c-7.327 0-13.368-4.523-13.368-11.947z" fill="none" stroke="url(#a)" stroke-width="10" transform="translate(-85.352 -100.675)"/></svg>
```
- Banner border and content should reflect your extension and its colors
- Insert your extension's banner to the '[extension-thumbs](https://github.com/SharkPool-SP/SharkPools-Extensions/tree/main/extension-thumbs)'
directory. Make a subfolder with your username, and the actual js file

#### Step 2.3: Extension Gallery Display

_Insert the following template into '[Extension Keys.json](https://github.com/SharkPool-SP/SharkPools-Extensions/blob/main/Gallery%20Files/Extension-Keys.json)'_
**NOTE: MUST** be inserted in the `extensions` key, just before the `example` item

**Template:** _(Replace `<text>` with your information)_
```json
"<Extension-Name>": {
  "desc": <Short description of extension]>,
  "creator": <Username>,
  "url": <Filename of your code (from 2.1)>,
  "banner": <Filename of your banner (from 2.2)>,
  "tags": <Array of tags associated with the extension>,
  "date": ""
}
```

- Extension Name **MUST NOT** include spaces, use `-` instead
- Extension tags **MUST** be an array of items from [this list](https://github.com/SharkPool-SP/SharkPools-Extensions/blob/main/Gallery%20Files/Extension-Keys.json#L610-L626)

#### Step 3: Submit Pull Request

And youre done!

At some point a reviewer will take a look at your PR and either merge, close, or request changes to your file.
