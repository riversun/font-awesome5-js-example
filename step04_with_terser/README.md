# About This Project

- Import fontawesome-svg-core for advanced rendering icons and more control over some features.
- Using **fontawesome API(@fortawesome/fontawesome-svg-core)** instead of non-API-based approach like **@fortawesome/fontawesome-free**  

# Install fontawesome-svg-core

```shell
npm install @fortawesome/fontawesome-svg-core
npm install @fortawesome/free-solid-svg-icons
npm install @fortawesome/free-regular-svg-icons

npm install babel-minify-webpack-plugin --save-dev

```

# Coding in JavaScript

```js
import {config, dom, library} from '@fortawesome/fontawesome-svg-core';
import {faDog, faCat} from '@fortawesome/free-solid-svg-icons';
import {faComments} from '@fortawesome/free-regular-svg-icons';

config.showMissingIcons = false;

//Add whole set of solid icons and regular icons as fas/far.
library.add(faDog,faComments,faCat);

//Automatically find any <i> tags in the page and replace those with <svg> elements when calling #i2svg
dom.i2svg();
```

# HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>I love fontawesome</title>
</head>
<body>
<i class="fas fa-dog fa-3x"></i>
<i class="far fa-comments fa-3x"></i>
<i class="fas fa-cat fa-3x fa-flip-horizontal"></i>
<script src="js/app.js"></script>
</body>
</html>
```

# Result

- This is the easiest way you can import font-awesome icons in your bundle, but you can not control the behavior of it.
- Since all icons are stored when merging into a bundle, the size of the bundle becomes large.
