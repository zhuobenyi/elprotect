'use strict'
require('./check-versions')()

process.env.NODE_ENV = 'production'

const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('../config')
const webpackConfig = require('./webpack.prod.conf')

const spinner = ora('building for production...')
spinner.start()

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
<<<<<<< HEAD
  // console.log("-----------webpackConfig-----------");
  // console.log("webpackConfig:"+JSON.stringify(webpackConfig,null,4));
  // console.log("-----------webpackConfig-----------");
=======
>>>>>>> cd904d1ea0c05964b0355caca4519ea81e958e31
  webpack(webpackConfig, (err, stats) => {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
<<<<<<< HEAD
      children: false, // if you are using ts-loader, setting this to true will make typescript errors show up during build
=======
      children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
>>>>>>> cd904d1ea0c05964b0355caca4519ea81e958e31
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})
