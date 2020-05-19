var exec = require('child_process').exec;
var fs = require('fs');
var archiver = require('archiver');
var path = require('path');
var colors = require('colors');

console.log("个人配置信息:"+require("os").hostname());

function deepClone(obj) {
    var objClone = Array.isArray(obj) ? [] : {};
    if (obj && typeof obj === "object") {
        for (key in obj) {
            if (obj.hasOwnProperty(key)) {
                //判断ojb子元素是否为对象，如果是，递归复制
                if (obj[key] && typeof obj[key] === "object") {
                    objClone[key] = deepClone(obj[key]);
                } else {
                    //如果不是，简单复制
                    objClone[key] = obj[key];
                }
            }
        }
    }
    return objClone;
}

String.prototype.Trim = function () {
    return this.replace(/(^\s*)|(\s*$)/g, "");
}
/*
 * 同步读取JSON配置文件
 */
function readJsonConfigSync(filename) {
    return JSON.parse(fs.readFileSync(filename, 'utf-8').toString("utf-8").Trim());
}

function writeJsonConfigSync(filename, data) {
    fs.writeFileSync(filename, data, { encoding: 'utf8' });
}

/*
 * 异步读取JSON配置文件
 */
function readJsonConfig(filename, callback) {
    fs.readFile(filename, function (err, content) {
        if (err) {
            console.log(err);
        } else {
            callback(JSON.parse(content.toString("utf-8").Trim()));
        }
    });
}

/*
 * 异步写入JSON配置文件
 */
function writeJsonConfig(filename, configObject, successCallback) {
    fs.writeFile(filename, JSON.stringify(configObject, null, 4), function (err) {
        if (err) {
            console.log(err);
        } else {
            try {
                if (typeof successCallback === "function") {
                    successCallback();
                }
            } catch (e) { }

        }
    });
}

/*
 * 配置文件过滤规则
 */
function filterConfigNode(filename) {
    if (filename.indexOf('pages') != -1) {
        // &&  filename.indexOf('pagesBack') == -1 ) {
        return true;
    } else {
        return false;
    }
}

/*
 * 配置文件过滤规则
 */
function filterConfigFile(filename) {
    if (filename.indexOf('Config_') != -1 &&
        // filename.indexOf('_Test') == -1 &&
        filename.indexOf('_ALL') == -1) {
        return true;
    } else {
        return false;
    }
}

function initconfig() {
    var filePath = path.resolve(__dirname, '../src/config');

    var fileArray = new Array();
    var filePathArray = new Array();

    //调用文件遍历方法
    fileDisplay(filePath);
    //文件遍历方法
    function fileDisplay(filePath) {
        //根据文件路径读取文件，返回文件列表
        fs.readdir(filePath, function (err, files) {
            for (var i = 0; i < files.length; i++) {
                var filename = files[i];
                var filedir = path.join(filePath, filename);
                var stats = fs.statSync(filedir);
                var isFile = stats.isFile();
                var isDir = stats.isDirectory();
                if (isFile) {
                    if (filterConfigFile(filedir)) {
                        var packageConfig = readJsonConfigSync(filedir);
                        fileArray.push(packageConfig);
                        filePathArray.push(filename);
                    }
                }
                if (isDir) {
                    fileDisplay(filedir);
                }
            }

            var conf = {};
            var packconf = {};

            for (var i = 0; i < fileArray.length; i++) {
                var configObj = fileArray[i];
                for (var config in configObj) {
                    if (filterConfigNode(config)) {
                        var pagesNodeConf = {};
                        for (var pagesNode in configObj[config]) {

                            const files = fs.readdirSync("./src/pages");
                            if (files.indexOf(pagesNode) == -1) {
                                console.log("页面信息配置异常:", pagesNode);
                            }else{
                                if (configObj[config][pagesNode]['pack']) {
                                    if (conf[pagesNode]) {
                                        console.log(pagesNode['red']);
                                        console.log('节点重复'['red']);
                                        console.log(filePathArray[i]['red']);
                                        console.log();
                                    }
                                    pagesNodeConf[pagesNode] = configObj[config][pagesNode];
                                } else {
                                    console.log(pagesNode['red']);
                                    console.log('节点配置信息不全'['red']);
                                    console.log(filePathArray[i]['red']);
                                    console.log();
                                }
                            }                            
                        }
                        conf = Object.assign(deepClone(pagesNodeConf), conf);
                    }

                    if (config === "packinfo") {
                        var pagesNodeConf = {};
                        for (var pagesNode in configObj[config]) {
                            if (configObj[config][pagesNode]['packid']) {
                                pagesNodeConf[pagesNode] = configObj[config][pagesNode];
                            } else {
                                console.log(pagesNode['red']);
                                console.log('分包配置信息不全'['red']);
                                console.log(filePathArray[i]['red']);
                                console.log();
                            }
                        }
                        packconf = Object.assign(deepClone(pagesNodeConf), packconf);
                    }
                }
            }

            if (!fs.existsSync('./output')) {
                fs.mkdirSync('./output');
            }

            // console.log(JSON.stringify(conf,null,4));

            var packDesc = {};
            for (var pid in packconf) {
                packDesc[packconf[pid]["packid"]] = packconf[pid]["packname"];
            }

            console.log("分包描述:" + JSON.stringify(packDesc, null, 4));
            writeJsonConfigSync('./output/分包对应关系描述.json', JSON.stringify(packDesc, null, 4));

            var packinfo = {};
            for (var pid in packconf) {
                packinfo[pid] = packconf[pid]["packid"];
            }

            var pageIndex = { pages: conf, packinfo: packinfo };
            console.log("分包索引:" + JSON.stringify(pageIndex, null, 4));
            writeJsonConfigSync('./output/pageIndex.json', JSON.stringify(pageIndex, null, 4));

            var pagePackConfig = {}
            var pagePackDesc = {}
            for (var page in conf) {
                if (pagePackConfig[conf[page]["pack"]] == undefined) {
                    pagePackConfig[conf[page]["pack"]] = new Array();
                }
                pagePackConfig[conf[page]["pack"]].push(page);
                if (pagePackDesc[packinfo[conf[page]["pack"]]] == undefined) {
                    pagePackDesc[packinfo[conf[page]["pack"]]] = {};
                }
                pagePackDesc[packinfo[conf[page]["pack"]]][page] = conf[page];
            }
            console.log("分包描述:" + JSON.stringify(pagePackDesc, null, 4));

            if (!fs.existsSync('./output/packinfo')) {
                fs.mkdirSync('./output/packinfo');
            }

            console.log("打包信息:");
            for (var pageid in pagePackConfig) {
                console.log(packinfo[pageid] + "\n" + JSON.stringify(pagePackConfig[pageid], null, 4));
                writeJsonConfigSync('./output/packinfo/' + packinfo[pageid] + '.json', JSON.stringify(pagePackConfig[pageid], null, 4));
            }
            if (!fs.existsSync('./output/分包描述')) {
                fs.mkdirSync('./output/分包描述');
            }
            for (var pageid in pagePackDesc) {
                writeJsonConfigSync('./output/分包描述/' + pageid + "_" + packDesc[pageid] + '.json', JSON.stringify(pagePackDesc[pageid], null, 4));
            }
        });
    }
}

exports.getUserConfig = function() {
    var userconfig = readJsonConfigSync("./src/config/UserConfig.json");
    var packconf = readJsonConfigSync("./src/config/Config_"+userconfig[require("os").hostname()]+".json");
    var result = new Array();
    for (var pid in packconf["pages"]) {
        result.push(pid);
    }
    return result;
}
var buildFileArray = new Array();

function buildFuncModel(){
    var fileNode = buildFileArray.pop();
	if (fileNode) {
        if (!fs.existsSync('./output/packages')) {
            fs.mkdirSync('./output/packages');
        }
        if (!fs.existsSync('./output/packages/'+fileNode["fileName"])) {
            fs.mkdirSync('./output/packages/'+fileNode["fileName"]);
        }
        process.env.FILE_PATH = require("path").resolve(__dirname, '../output/packages/'+fileNode["fileName"]);
        console.log(JSON.stringify(fileNode,null,4));
        runCommand(fileNode,function(){
            buildFuncModel();
        });
        // buildFuncModel();

	}else{
		console.log("全部任务完成");
	}
}

function packageZip(fileNode,callback) {
	var fileZip = require("path").resolve(__dirname, '../output/packages/' +fileNode["fileName"]+'.zip');
	var archive = archiver('zip', {
  		zlib: { level: 9 } // 设置压缩级别
	})
	var output = fs.createWriteStream(fileZip);
	output.on('close', function() {});
	archive.on('error', function(err) {
		throw err;
	});
	archive.on('end', function() {
		console.log('zip Success Archive wrote %d bytes', archive.pointer());
		callback();
	});
	archive.pipe(output);
	var directories = [require("path").resolve(__dirname, '../output/packages/' +fileNode["fileName"])]
	for (var i in directories) {
		archive.directory(directories[i], directories[i].replace(path.resolve(__dirname, '../output/packages/' +fileNode["fileName"]),""));
	}
	archive.finalize();
	console.log("zip package!");
}

function runCommand(fileNode,callback){
    process.env.FILE_NODE = JSON.stringify(fileNode);
    process.env.BUILD_ALL = true;
    var execObj = exec("cross-env NODE_OPTIONS=--max-old-space-size=8192 node build/build.js", {
		encoding: 'utf8',
		timeout: 0,
		maxBuffer: 200000 * 1024,
		killSignal: 'SIGTERM',
		cwd: null,
		env: null
	}, function(error, stdout, stderr) {
		// console.log(stdout);
		if (error) {
			console.log(error);
		} else {
			console.log("exec success!");
            packageZip(fileNode,callback);
		}
	});

	execObj.stdout.on('data', function(data) {
        console.log(data);
	});    
}


function buildall(){
    console.log("buildall");
    var filePath = path.resolve(__dirname, '../output/packinfo');

    //调用文件遍历方法
    fileDisplay(filePath);
    //文件遍历方法
    function fileDisplay(filePath) {
        //根据文件路径读取文件，返回文件列表
        fs.readdir(filePath, function (err, files) {
            for (var i = 0; i < files.length; i++) {
                var filename = files[i];
                var filedir = path.join(filePath, filename);
                var stats = fs.statSync(filedir);
                var isFile = stats.isFile();
                var isDir = stats.isDirectory();
                if (isFile) {
                    var packageConfig = readJsonConfigSync(filedir);
                    var packdict = {};
                    packdict["fileName"] = filename.replace(".json","");
                    packdict["files"] = packageConfig;
                    buildFileArray.push(packdict);
                }
                if (isDir) {
                    fileDisplay(filedir);
                }
            }
            // console.log(JSON.stringify(buildFileArray,null,4));
            buildFuncModel()

        });
    }
}

/*
 * 调用参数:用于区分业务逻辑
 */
var commandParam = process.argv.splice(2)[0];
if(commandParam === "initconfig"){
    initconfig();
}else if(commandParam === "buildall"){
    buildall();
}
