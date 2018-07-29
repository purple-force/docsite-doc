// 全局的一些配置
module.exports = {
  title: 'docsite-doc', // 网页标签的标题
  rootPath: '/docsite-doc', // 发布到服务器的根目录，需以/开头但不能有尾/
  defaultLanguage: 'zh-cn',
  'en-us': {
    pageMenu: [
      {
        text: 'DOCS',
        link: '/docs/installation.md',
      },
    ],
  },
  'zh-cn': {
    pageMenu: [
      {
        text: '文档',
        link: '/docs/installation.md',
      },
    ],
  }
};
