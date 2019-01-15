# About This Project

- Import **@fortawesome/fontawesome-free** into your npm project
- **@fortawesome/fontawesome-free** will automatically replaces <i> tags with <svg>.
- **@fortawesome/fontawesome-free** watches the page for icon changes and additions.  

# Install @fortawesome/fontawesome-free

```shell
npm install @fortawesome/fontawesome-free --save
```

# Coding in JavaScript

```js
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
```

# Result

- This is the easiest way you can import font-awesome icons in your bundle, but you can not control the behavior of it.
- Since all icons are stored when merging into a bundle, the size of the bundle becomes large.
