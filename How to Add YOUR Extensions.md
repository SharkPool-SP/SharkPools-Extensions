**How to add YOUR Extension to SharkPool's Extension Collection**
---

***Step-By-Step Tutorial***

**Step 1**: Make Your Extension
---
  - Rule 1: Please Follow **Normal** Extension JS Format, extensions made with Turbobuilder or anything alike are **Not Allowed**

Add your Extension Code to '[extension-code](https://github.com/SharkPool-SP/SharkPools-Extensions/tree/main/extension-code)'

**Step 2**: Make a Banner for Your Extension
---
  - Rule 1: It **MUST** be 300x150px SVG (without Border)
  - Rule 2: It **MUST** have a curved outline bordering the Banner (Copy the Borders used in Existing Banners)

Add your Banner to '[extension-thumbs](https://github.com/SharkPool-SP/SharkPools-Extensions/tree/main/extension-thumbs)'

**Step 3**: Edit [Extension Keys JSON](https://github.com/SharkPool-SP/SharkPools-Extensions/blob/main/Gallery%20Files/Extension-Keys.json)
---
  - Rule 1: Under the 'extensions' key, you need to add a new sub-key right before the 'example' extension
  - Rule 2: Format it like this, replace the [text] with your links/text:
    ```
    "[Extension-Name]": {
       "desc": "[A Short Description of your Extension with Credits]",
       "creator": "[Your Creator Name]",
       "url": "[File path to your Extension Code]",
       "banner": "[File path to your Extension Banner]",
       "overrideLabeler": [false],
       "tags": "[Array of Tags that Relate to your Extension]"
       "status": "[use 'new' if its a new extension or 'update' if its an update to an existing extension]"
    }
  (If you cant link the raw file then SharkPool will do it for you)
  - Sub Rule 1: Extension Name **MUST NOT** include spaces, use '-' instead
  - Sub Rule 2: Tags **MUST** start with 'all'
  - Sub Rule 3: Tags **MUST** be an Array of items from this list:
    - 'utilities' --> Utility Blocks
    - 'expanded' --> Expansion of an existing Custom/Vanilla Extension
    - 'category' --> Expansion of an existing Main/Sub Category (Motion, Looks, Control, etc)
    - 'fetching' --> Extensions that use 'fetch' or anything related to it
    - 'addon' --> Extensions that are Addons to the Editor (i.e Better Comments, Sprite Panel)

**Step 4**: Pull Request and You're Done!
---

**Note: Remember to include all files and changes (SVG Banner, Extension Code, and JSON additions: Code Link, Credits, Name, Tags))**
