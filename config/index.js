'use strict'
<<<<<<< HEAD
// Template version: 1.0.0
=======
// Template version: 1.3.1
>>>>>>> cd904d1ea0c05964b0355caca4519ea81e958e31
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

<<<<<<< HEAD
function resolve (dir) {
  return path.join(__dirname, '../../', dir)
}

module.exports = {
  mand: {
    theme: {
      path: path.join(__dirname, '../src/styles/theme.styl')
    },
    pxtorem: {
      // If you modify rootValue, you also need to modify rem in static/responsive.js
      rootValue: 100, // 1rem=100px
      propWhiteList: []
    }
  },
=======
module.exports = {
>>>>>>> cd904d1ea0c05964b0355caca4519ea81e958e31
  dev: {

    // Paths
    assetsSubDirectory: 'static',
<<<<<<< HEAD
    assetsPublicPath: '',
    // MARK:Mock 接口服务器代理配置
    proxyTable: {
      '/pweb': {
        target: 'http://127.0.0.1:8808', // 目标接口域名
        changeOrigin: true, // 是否跨域
        pathRewrite: {
          '^/pweb': '/pweb' // 重写接口
        }
      }
    },
=======
    assetsPublicPath: '/',
    proxyTable: {},
>>>>>>> cd904d1ea0c05964b0355caca4519ea81e958e31

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
<<<<<<< HEAD
    autoOpenBrowser: true,
=======
    autoOpenBrowser: false,
>>>>>>> cd904d1ea0c05964b0355caca4519ea81e958e31
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
<<<<<<< HEAD
    useEslint: false,
=======
    useEslint: true,
>>>>>>> cd904d1ea0c05964b0355caca4519ea81e958e31
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
<<<<<<< HEAD
    assetsPublicPath: '',
=======
    assetsPublicPath: '/',
>>>>>>> cd904d1ea0c05964b0355caca4519ea81e958e31

    /**
     * Source Maps
     */

<<<<<<< HEAD
    productionSourceMap: false,
=======
    productionSourceMap: true,
>>>>>>> cd904d1ea0c05964b0355caca4519ea81e958e31
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
