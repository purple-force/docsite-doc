## Custom style

Custom styles are divided into customizations for the entire site and customization of document presentation styles.

### Site customization

The `variables.scss` file in the `src` directory defines some scss variables that control the overall display style of the site. By modifying these variables, you can get different styles of sites.

Of course, if you still feel not satisfied , you can go to the style file of each specific page to modify it.

### Document style customization

The `markdown.scss` file in the `src` directory defines the style of the document style, which is divided into two parts, the presentation of the document and the highlighting of the code.

+ document

Github style [https://github.com/sindresorhus/github-markdown-css](https://github.com/sindresorhus/github-markdown-css) is by default , if you want other styles, please modify `markdown.scss` file.

+ Code highlight

In [https://highlightjs.org/static/demo/](https://highlightjs.org/static/demo/), select your favorite highlight color, and then according to the selected theme name, in [https: //github.com/isagalaev/highlight.js/tree/master/src/styles](https://github.com/isagalaev/highlight.js/tree/master/src/styles) copy the corresponding style code to the `markdown.scss`.