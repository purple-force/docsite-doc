// 全局的一些配置
export default {
  rootPath: '/docsite-doc', // 发布到服务器的根目录，需以/开头但不能有尾/，如果只有/，请填写空字符串
  port: 8080, // 本地开发服务器的启动端口
  defaultLanguage: 'zh-cn',
  'en-us': {
    pageMenu: [
      {
        key: 'docs',
        text: 'DOCS',
        link: '/en-us/docs/installation.html',
      },
    ],
  },
  'zh-cn': {
    pageMenu: [
      {
        key: 'docs',
        text: '文档',
        link: '/zh-cn/docs/installation.html',
      },
    ],
  }
};
