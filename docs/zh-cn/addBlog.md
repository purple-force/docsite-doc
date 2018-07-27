## 添加博客

### 放置位置

根据文档对应的语言版本，放入`blog`目录下的`zh-cn`或者`en-us`，可以是一层或者多层目录。

### 博客列表页配置

文档放入对应语言的目录中后，需要在`site_config/blog.js`中配置。其中的`link`字段用于配置访问地址，格式为`/blog/path-to-the-md`，需要注意的是这个路径不要包括语言路径（`zh-cn`或`en-us`）。

例如，某个博客的存放位置为`root_directory/blog/en-us/demo/xxx.md`，那么`link`字段的配置值为`/blog/demo/xxx.md`。
