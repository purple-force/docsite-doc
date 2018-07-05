## 创建站点

> 在做好前面的准备工作后，现在可以着手定义属于你自己的站点了。

在项目根目录下执行`docsite start`命令，会在浏览器中自动打开页面。

初始化生成的模板工程默认集成了首页、文档页、博客列表页、博客详情页、社区页及中英文国际化功能。可以按照需求自行添加和删除页面。

### 添加文档

1. 将对应的`.md`或者`.markdown`文件放进`docs`文件夹下的对应语言目录中，支持多级目录存放
2. 在`site_config`文件夹下的`docs.js`中配置文档的菜单项

### 添加博客

1. 将对应的`.md`或者`.markdown`文件放进`blog`文件夹下的对应语言目录中，支持多级目录存放
2. 在`site_config`文件夹下的`blog.js`中配置博客的列表项

> markdown文件均支持在文档顶部自定义元数据，顶部的`---`（至少三个`-`）之间的数据会被认为是元数据，一个key占用一行。这些数据解析后会对应存放在`md_json`文件夹下的`blog.json`和`docs.json`文件中，其中`filename`和`__html`为保留字段，请勿使用。

```
---
key1: hello
key2: world
---

your markdown content
```

### 自定义页面

1. 如果想增加页面，在`pages`目录下增加相应的页面，并在`src`目录下的`index.jsx`文件中配置对应的路由，同步在`site_config`文件夹下增加对应的页面配置
2. 如果想修改页面，在`pages`目录下针对修改对应的页面，并同步修改`site_config`文件夹下对应的页面配置
3. 如果想删除页面，在`pages`目录下增加相应的页面，并在`src`目录下的`index.jsx`文件中删除对应的路由，同步在`site_config`文件夹下删除对应的页面配置
4. 如果想修改站点的整体色调，请修改`src`目录下的`variables.scss`
5. 如果想修改markdown文档的样式，请修改`src`目录下的`markdown.scss`

### 页面标签及站点ico

修改根目录下的`index.html`中的`<title>页面标签标题</title>`和`<link rel="icon" href="./img/dubbo.ico">`的`href`属性。



