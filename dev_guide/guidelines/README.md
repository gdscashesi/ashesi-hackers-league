# GUIDELINES

1. Components and their corresponding files should be capitalized : **Home.js -> function Home(){ }**
2. Use PascalCase for components with composite names: `ForgotPassword`
3. All folders should be small letters : **home -> Home.js -> function Home(){ }**
4. Folders with composite names should be underscored : **single_page, not singlePage**
5. Files with composite names should be hyphenated: **table-styles.modules.scss, not tableStyles.module.scss**
6. If a component is used only on one page, put it as a subfolder in the page's folder. For example, the **Table** component will only be used on the Rankings page, so subfolder called table should be created in the rankings folder, containing the Table.js and table.module.scss files.
7. Components that will be-reused in other places should be placed in the **components** folder.
8. Components and all their related stylesheets should be in the same folder. Example: the **button** folder should contain the **Button.js** component and **button.module.scss** file.
9. All imports should be arranged exactly like this (the imports below are merely examples)

```js
// libraries
import React from "react";

// components
import { Form } from "components/Form";

// styles
import "./index.scss";

// utils
import { debounce } from "utils/debounce.js";
```

Rules to Enforce for Github:

1. Every new feature or issue should be developed on a new branch
2. When you find a problem or bug, create an issue with a thorough description.
