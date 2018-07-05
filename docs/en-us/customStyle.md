## 自定义样式

自定义样式分为整个站点的自定义和文档展示风格的自定义。

### 站点自定义

`src`目录下的`variables.scss`文件中，定义了一些用于控制站点整体显示风格的一些scss变量。通过修改这些变量，能够获得不同风格的站点。

当然，如果这样还觉得不满足需求，可以进入到每个具体的页面的样式文件中去修改。

### 文档展示风格自定义

`src`目录下的`markdown.scss`文件中，定义了文档展示风格的样式。分为两部分，文档的展示和代码高亮的展示。

+ 文档的展示

默认采用github风格[https://github.com/sindresorhus/github-markdown-css](https://github.com/sindresorhus/github-markdown-css)，如果想要其他风格，请修改`markdown.scss`文件。

+ 代码高亮

在[https://highlightjs.org/static/demo/](https://highlightjs.org/static/demo/)中去选择喜爱的高亮配色，然后根据选择后的主题名称，在[https://github.com/isagalaev/highlight.js/tree/master/src/styles](https://github.com/isagalaev/highlight.js/tree/master/src/styles)中复制对应的样式文件到`markdown.scss`中即可。