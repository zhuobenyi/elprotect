'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
<<<<<<< HEAD
const TestWebpackPlugin = require('../plugins/test-webpack-plugin')
const TestLoader = path.resolve(__dirname, '../loaders/test-loader.js')
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin')

/* MARK:多页 */
const {
  AutoWebPlugin
} = require('web-webpack-plugin')
const autoWebPlugin = new AutoWebPlugin('src/pages', {
  template: './src/template.html',
  postEntrys: [],
  commonsChunk: {
    name: 'common',
    minChunks: 2
  },
  output: require('path').resolve(__dirname, '../dist')
})

// console.log("-----------autoWebPlugin-----------");
// console.log(JSON.stringify(autoWebPlugin,null,4));
// console.log("-----------autoWebPlugin-----------");

function resolve (dir) {
  return path.join(__dirname, '../', dir)
=======

function resolve (dir) {
  return path.join(__dirname, '..', dir)
>>>>>>> cd904d1ea0c05964b0355caca4519ea81e958e31
}

const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [resolve('src'), resolve('test')],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: !config.dev.showEslintErrorsInOverlay
  }
})

module.exports = {
<<<<<<< HEAD
  externals: {
    'vue': 'Vue',
    'vue-router': 'VueRouter',
    'vuex': 'Vuex',
    'axios': 'axios',
    'fastclick': 'FastClick'
  },
  context: path.resolve(__dirname, '..'),

  /* MARK:单页 */
  // entry: {
  //   app: './src/pages/kylin/index.js'
  // },

  /* MARK:多页 */
  entry: autoWebPlugin.entry({}),

  plugins: [
    new TestWebpackPlugin(),

    /* MARK:多页 */
    autoWebPlugin,

    new HtmlWebpackTagsPlugin({
      tags: ['http://127.0.0.1:8808/lib/public.js'],
      publicPath: false,
      append: false
    })
  ],
=======
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/main.js'
  },
>>>>>>> cd904d1ea0c05964b0355caca4519ea81e958e31
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
<<<<<<< HEAD
      '@mandmobile': path.resolve(__dirname, '../src/components') // '../../components'//MARK:文件路径:组件源码引入
      // '@vant': path.resolve(__dirname, '../src/components') // '../../components'//MARK:文件路径:组件源码引入
=======
      '@': resolve('src'),
>>>>>>> cd904d1ea0c05964b0355caca4519ea81e958e31
    }
  },
  module: {
    rules: [
      ...(config.dev.useEslint ? [createLintingRule()] : []),
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
<<<<<<< HEAD
        use: [{
          loader: 'babel-loader'
        }, {
          loader: TestLoader,
          options: {
            output: 'info'
          }
        }],
        include: [
          resolve('src'),
          resolve('test'),
          resolve('node_modules/webpack-dev-server/client')
          // resolve('test'),
          // resolve('node_modules/webpack-dev-server/client')
        ]
=======
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
>>>>>>> cd904d1ea0c05964b0355caca4519ea81e958e31
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
