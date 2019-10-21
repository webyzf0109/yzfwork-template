const path = require('path');
module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  lintOnSave: false,
  // 强制内联CSS
  css: {
    extract: false
  },
  // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack: config => {
    config.module
      .rule('js')
      .include
      .add(path.join(__dirname, 'packages'))
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      })
  },
  devServer: {
    host: 'localhost',
    port: 8000,
    // https: false,
    // hotOnly: false,
    // baseUrl: '/',
    // proxy: 'http://dev.routine',
    proxy: {
      '/v1': {
        target: 'http://shop.yyyzf.xyz',
        changeOrigin: true,
        // ws: true,
        pathRewrite: {
          '^/v1': '/v1'
        }
      }
    }
    // before: app => {}
  },
}