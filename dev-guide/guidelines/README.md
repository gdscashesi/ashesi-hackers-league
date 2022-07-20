# GUIDELINES

1. Components should be capital letters
2. Use PascalCase for components with double or more words example: `ForgotPassword`
3. Folders should be small letters
4. Components and all their related stylesheets should be in the same folder. Example: the `button` folder should contain the `Button.js` component and `button.module.scss` files.
5. follow this [twitter guide](https://dev.to/pritampatil/12-css-best-practices-by-twitter-2fap) for styling
6. All imports should be arranged exactly like this (the imports below are merely examples)

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
2. When you find a problem or bug, create an issue for it and add a thorough description.
