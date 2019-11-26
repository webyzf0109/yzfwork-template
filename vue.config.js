const path = require('path');
module.exports = {
  publicPath: './',
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
  /**配置全局的less */
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [
        //这个是加上自己的路径，
        //注意：试过不能使用别名路径
        path.resolve(__dirname, "./src/assets/common/common.less")
      ]
    }
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
      config.resolve.alias
            .set('@', path.resolve(__dirname, './src'))
            .set('&', path.resolve(__dirname, './static'))
            .set('vue$', 'vue/dist/vue.esm.js', )
  },
  devServer: {
    host: 'localhost',
    port: 8000,
    // https: false,
    hotOnly: true,
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