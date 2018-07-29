const gulp = require('gulp');
const gutil = require('gulp-util');
const webpack = require('webpack');
const opn = require('opn');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackDevServer = require('webpack-dev-server');
const siteConfig = require('./site_config/site.js');
const webpackConfig = require('./webpack.config.js');

// The development server (the recommended option for development)
gulp.task('default', ['webpack-dev-server']);

// Build and watch cycle (another option for development)
// Advantage: No server required, can run app from filesystem
// Disadvantage: Requests are not blocked until bundle is available,
//               can serve an old app on refresh
gulp.task('build-dev', ['webpack:build-dev'], () => {

});

// Production build
gulp.task('build', ['webpack:build']);

gulp.task('webpack:build', (callback) => {
  // modify some webpack config options
  const myConfig = Object.create(webpackConfig);
  myConfig.output.publicPath = `${siteConfig.rootPath}/build/`;
  myConfig.plugins = myConfig.plugins.concat(
    new webpack.DefinePlugin({
      'process.env': {
        // This has effect on the react lib size
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      title: siteConfig.title,
      template: 'index.ejs',
      filename: '../index.html', // 文件目录是相对于webpackConfig.output.path路径而言的
      inject: false, // 不注入静态资源
      // 注入自定义变量，该配置项不是HtmlWebpackPlugin内置的功能配置项
      customVar: {
        rootPath: siteConfig.rootPath,
      },
    }),
    new HtmlWebpackPlugin({
      title: siteConfig.title,
      template: '404.ejs',
      filename: '../404.html', // 文件目录是相对于webpackConfig.output.path路径而言的
      inject: false, // 不注入静态资源
      customVar: {
        rootPath: siteConfig.rootPath,
      },
    }),
  );

  // run webpack
  webpack(myConfig, (err, stats) => {
    if (err) throw new gutil.PluginError('webpack:build', err);
    gutil.log('[webpack:build]', stats.toString({
      colors: true
    }));
    callback();
  });
});

// modify some webpack config options
const myDevConfig = Object.create(webpackConfig);

// create a single instance of the compiler to allow caching
const devCompiler = webpack(myDevConfig);

gulp.task('webpack:build-dev', (callback) => {
  // run webpack

  devCompiler.run((err, stats) => {
    if (err) throw new gutil.PluginError('webpack:build-dev', err);

    gutil.log('[webpack:build-dev]', stats.toString({
      colors: true
    }));
    callback();
  });
});

gulp.task('webpack-dev-server', () => {
  // modify some webpack config options
  const myConfig = Object.create(webpackConfig);
  myConfig.output.publicPath = '/build/';
  myConfig.plugins.push(new webpack.SourceMapDevToolPlugin({}));
  myConfig.plugins.push(new HtmlWebpackPlugin({
    title: siteConfig.title,
    template: 'index.ejs',
    filename: '../index.html',  // 相对于webpackConfig.output.path路径而言的
    inject: false, // 不注入静态资源
    customVar: {
      rootPath: ''
    },
  }));
  myConfig.plugins.push(new HtmlWebpackPlugin({
    title: siteConfig.title,
    template: '404.ejs',
    filename: '../404.html', // 文件目录是相对于webpackConfig.output.path路径而言的
    inject: false, // 不注入静态资源
    customVar: {
      rootPath: ''
    },
  }));
  // Start a webpack-dev-server
  new WebpackDevServer(webpack(myConfig), {
    publicPath: myConfig.output.publicPath,
    historyApiFallback: {
      disableDotRule: true,
      index: '/index.html'
    },
    stats: {
      colors: true
    }
  }).listen(8080, 'localhost', (err) => {
    if (err) throw new gutil.PluginError('webpack-dev-server', err);
    opn('http://localhost:8080/');
    gutil.log('[webpack-dev-server]', 'http://localhost:8080/webpack-dev-server/index.html');
  });
});
