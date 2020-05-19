class TestWebpackPlugin {
  // 在构造函数中获取用户给该插件传入的配置
  constructor(options) {
    console.log("初始化插件");
    if (process.env.RUN_MODEL === "dev") {
      var execObj = require('child_process').exec('cd server/ && nodemon server', {
        encoding: 'utf8',
        timeout: 0,
        maxBuffer: 200000 * 1024,
        killSignal: 'SIGTERM',
        cwd: null,
        env: null
      }, function (error, stdout, stderr) {
        // console.log(stdout);
        if (error) {
          console.log(error);
        } else {
          console.log("exec success!");
        }
      });
      execObj.stdout.on('data', function (data) {
        console.log(data);
      });
      execObj.stderr.on('data', function (data) {
        console.log(data);
      });
    }
  }

  // Webpack 会调用 TestWebpackPlugin 实例的 apply 方法给插件实例传入 compiler 对象
  apply(compiler) {
    compiler.plugin('compilation', function (compilation) {
      // console.log("自定义插件");
    })
    compiler.plugin('emit', function (compilation, callback) {
      console.log("自定义插件emit");
      callback();
    });
    compiler.plugin('done', function (compilation) {
      console.log("自定义插件done");
    });
  }
}
// 导出 Plugin
module.exports = TestWebpackPlugin;