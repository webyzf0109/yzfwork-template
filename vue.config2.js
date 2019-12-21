const path = require('path')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const name = 'yzfwork组件库' // page title
const port = process.env.port || process.env.npm_config_port || 8000
const cdnDomian = './' // cdn域名，如果有cdn修改成对应的cdn
const IS_PRODUCTION = process.env.NODE_ENV === 'production'
const cdn = {
  css: [],
  js: [
    'https://cdn.bootcss.com/vue/2.6.10/vue.min.js',
    'https://cdn.bootcss.com/vue-router/3.0.3/vue-router.min.js',
    'https://cdn.bootcss.com/vuex/3.1.0/vuex.min.js',
    'https://cdn.bootcss.com/axios/0.19.0-beta.1/axios.min.js'
  ]
}

const externals = {
  vue: 'Vue',
  'vue-router': 'VueRouter',
  vuex: 'Vuex',
  axios: 'axios',
}

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: IS_PRODUCTION ? cdnDomian : './',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
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
  devServer: {
    host: 'localhost',
    port: 8000,
    // https: false,
    hotOnly: true,
    // baseUrl: '/',
    // proxy: 'http://dev.routine',
    proxy: {
      //自己的
      '/v1': {
        target: 'http://shop.yyyzf.xyz',
        changeOrigin: true,
        // ws: true,
        pathRewrite: {
          '^/v1': '/v1'
        }
      },
      //爱库存的
      '/ikucun-service': {
        target: 'http://dev.routine',
        changeOrigin: true,
        // ws: true,
        pathRewrite: {
          '^/ikucun-service': '/ikucun-service'
        }
      },
      //电商的
      '/manage': {
        target: 'http://test.routine/',
        // target: 'http://dev.routine',
        changeOrigin: true,
        // ws: true,
        pathRewrite: {
            '^/manage': '/manage'
        }
    },
    }
    // before: app => {}
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: name,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'), // 主目录
        'views': path.resolve(__dirname, './src/views'), // 页面
        'components': resolve('src/components'), // 组件
        'api': resolve('src/api'), // 接口
        'utils': resolve('src/utils'), // 通用功能
        'assets': path.resolve(__dirname, './src/assets'), // 静态资源
      }
    }
  },
  chainWebpack (config) {
    config.plugins.delete('preload') // TODO: need test
    config.plugins.delete('prefetch') // TODO: need test

    // // set svg-sprite-loader
    // config.module
    //   .rule('svg')
    //   .exclude.add(resolve('src/icons'))
    //   .end()
    // config.module
    //   .rule('icons')
    //   .test(/\.svg$/)
    //   .include.add(resolve('src/icons'))
    //   .end()
    //   .use('svg-sprite-loader')
    //   .loader('svg-sprite-loader')
    //   .options({
    //     symbolId: 'icon-[name]'
    //   })
    //   .end()

    // set preserveWhitespace
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.preserveWhitespace = true
        return options
      })
      .end()

    config
    // https://webpack.js.org/configuration/devtool/#development
      .when(process.env.NODE_ENV === 'development',
        config => config.devtool('cheap-source-map')
      )

    config
      .when(process.env.NODE_ENV !== 'development',
        config => {
          config
            .plugin('ScriptExtHtmlWebpackPlugin')
            .after('html')
            .use('script-ext-html-webpack-plugin', [{
            // `runtime` must same as runtimeChunk name. default is `runtime`
              inline: /runtime\..*\.js$/
            }])
            .end()
          config
            .optimization.splitChunks({
              chunks: 'all',
              cacheGroups: {
                libs: {
                  name: 'chunk-libs',
                  test: /[\\/]node_modules[\\/]/,
                  priority: 10,
                  chunks: 'initial' // only package third parties that are initially dependent
                },
                // commons: {
                //   name: 'chunk-commons',
                //   test: resolve('src/components'), // can customize your rules
                //   minChunks: 3, //  minimum common number
                //   priority: 5,
                //   reuseExistingChunk: true
                // }
              }
            })
          config.optimization.runtimeChunk('single')
        }
      )
    if (IS_PRODUCTION) {
      config.plugin('analyzer').use(BundleAnalyzerPlugin)
      config.plugin('html').tap(args => {
        console.log(args,'args')
        args[0].cdn = cdn
        return args
      })
      config.externals(externals)
      config.plugin('html').tap(args => {
        args[0].minify.minifyCSS = true // 压缩html中的css
        return args
      })
      // gzip需要nginx进行配合
      config
        .plugin('compression')
        .use(CompressionWebpackPlugin)
        .tap(() => [
          {
            test: /\.js$|\.html$|\.css/, // 匹配文件名
            threshold: 10240, // 超过10k进行压缩
            deleteOriginalAssets: false // 是否删除源文件
          }
        ])
      config.optimization.minimizer([
        new UglifyjsWebpackPlugin({
          // 生产环境推荐关闭 sourcemap 防止源码泄漏
          // 服务端通过前端发送的行列，根据 sourcemap 转为源文件位置
          // sourceMap: true,
          uglifyOptions: {
            warnings: false,
            compress: {
              drop_console: false,
              drop_debugger: true
            }
          }
        })
      ])
    }
  },
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: !!IS_PRODUCTION,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    // 启用 CSS modules for all css / pre-processor files.
    modules: false,
    loaderOptions: {
      sass: {
        data: '@import "style/_mixin.scss";@import "style/_variables.scss";@import "style/common.scss";' // 全局引入
      }
    }
  }
}
