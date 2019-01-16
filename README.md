# font-awesome5-js-example
Examples for importing **[Font Awesome 5](https://fontawesome.com/) into JavaScript based front end project.

Now there are 4 example projects here.

## [Step01 Using Font Awesome5 Basic packages](https://github.com/riversun/font-awesome5-js-example/tree/master/step01_basic)

Instructions and examples on how to use packages released as **@fortawesome/fontawesome-free**

**npm start** to start example apps.

```shell
npm install
npm start
```

**npm run build** to exec **Production** build.

```shell
npm run build
```

Open the browser with **npm install** on all samples and try it out

## [Step02 Using Font Awesome 5 SVG Core Library](https://github.com/riversun/font-awesome5-js-example/tree/master/step02_import)

- Import fontawesome-svg-core for advanced rendering icons and more control over some features.
- Add specific icons you want and build and make a small size bundle.js with only necessary minimum icons.

## [Step03 Using Deep Import](https://github.com/riversun/font-awesome5-js-example/tree/master/step03_import_deeply)

- If you are using **uglify-js** there is a bugs in tree-shaking, so it would be more effective to use deep import with that situation.

## [Step04 Using terser explicitly as minimizer in webpack.config](https://github.com/riversun/font-awesome5-js-example/tree/master/step04_with_terser)

- When explicitly building with [terser](https://github.com/terser-js/terser). 

  (Even without specifying minimizer, **terser** is the default minimizer of webpack4 and later.)
