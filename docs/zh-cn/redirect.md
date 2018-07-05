## 重定向

有时候，你希望在用户访问某些url的时候，能够跳转到另一个特定的地址。
这些跳转的配置过程如下：
1. 打开`src`目录下的`index.jsx`文件，找到类似如下的代码：

```jsx
<Redirect exact from="/docs" to="/docs/installation.md" />
<Redirect exact from="/docs/" to="/docs/installation.md" />
```

2. 修改或添加对应的跳转规则。其中`from`指待跳转的地址，`to`指跳转后的地址

整个工程采用hash路由，因此`from`和`to`的值最终会作为hash值在地址栏上体现，请以`/`作为开始。