var http = require('http');
var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var ws = require("nodejs-websocket");
var path = require('path');
require('colors');

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
	console.log(filename);
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

var listener = {};
var server = ws.createServer(function (conn) {
	// console.log("建立连接");
	conn.on("text", function (str) {
		console.log(("WebSocket收到信息:" + str)['yellow'])
		var obj = JSON.parse(str);

		var userFoder = "./"
		var isLogON = true;

		if (obj.Type == "L") {
			if ((obj.Name).indexOf('NEBULANOTIFY_') != -1) {
				obj.Name = (obj.Name).substring('NEBULANOTIFY_'.length);
			}
			listener[obj.Name] = conn;
		} else if (obj.Type == "P") {
			if (listener[obj.Name]) {
				listener[obj.Name].sendText(JSON.stringify(obj.Data ? obj.Data : {}));
			}
		} else if (obj.Type == "LOG_REQ") {
			if (isLogON) {
				obj.Data = obj.Data ? obj.Data : {};
				// require('fs').writeFile(userFoder + 'REQ_B_M_' + obj.operationType + '_' + new Date().getTime() + '.json', JSON.stringify(obj.Data, null, 4), function (err) {
				// 	if (err) {
				// 		throw err;
				// 	} else { }
				// });
			}
		} else if (obj.Type == "LOG_RES") {
			if (isLogON) {
				obj.Data = obj.Data ? obj.Data : {};
				// if (obj.Data['_RejCode'] == '000000') {
				// 	require('fs').writeFile(userFoder + 'RES_B_M_' + obj.operationType + '_S_' + new Date().getTime() + '.json', JSON.stringify(obj.Data, null, 4), function (err) {
				// 		if (err) {
				// 			throw err;
				// 		} else { }
				// 	});
				// } else {
				// 	require('fs').writeFile(userFoder + 'RES_B_M_' + obj.operationType + '_F_' + new Date().getTime() + '.json', JSON.stringify(obj.Data, null, 4), function (err) {
				// 		if (err) {
				// 			throw err;
				// 		} else { }
				// 	});
				// }
			}
		}
	})
	conn.on("close", function (code, reason) {
		// console.log("关闭连接")
	});
	conn.on("error", function (code, reason) {
	});
}).listen(8801);
console.log("WebSocket建立完毕:8801");

 
/*
 * 同步读取JSON配置文件
 */
function readJsonConfigSync(filename) {
	return JSON.parse(fs.readFileSync(filename, 'utf-8').toString("utf-8").Trim());
}



var app = express();
app.use(bodyParser.urlencoded({
	extended: false
}))
app.use(bodyParser.json());
app.use(cookieParser('MAGICString'));
app.use(session({
	resave: false,
	saveUninitialized: true,
	secret: 'asgjkasg'
}));

//CONFIG:启动服务器 端口配置 8808
app.listen(8808);
console.log("HTTP启动端口:" + 8808)


//解决跨域  
/*
app.all('*', function(req, res, next) {  
    res.header("Access-Control-Allow-Origin", "*");  
    res.header("Access-Control-Allow-Headers", "X-Requested-With");  
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  
    res.header("X-Powered-By",' 3.2.1')  
    res.header("Content-Type", "application/json;charset=utf-8");  
    next();  
}); 
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization,\'Origin\',Accept,X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('X-Powered-By', ' 3.2.1');
    res.header('Content-Type', 'application/json;charset=utf-8');
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});
*/

app.use(function (req, res, next) {
	var url = req.originalUrl;
	console.log("----------------------------------------------------");
	console.log("RequestURL:");
	console.log(url);
	// console.log("RequestData:");
	// console.log(req.body);

	if (req.query != undefined) {
		console.log("RPC RequestData:");
		console.log(req.query);
	}

	// console.log("RequestHeader:");
	// console.log(req.headers);

	// console.log("AAA:");
	// console.log(req);
	// console.log("AAA:");

	if (req.path.toString().indexOf('.do') != -1) {

		if (req.path.toString().indexOf('test.do') != -1 && !req.session.user) {
			console.log("ResponseData:");
			var response = {
				_RejCode: "444444",
				_RejMsg: "请登录"
			};
			console.log(response);
			res.json(response);
			return;
		}

		//CONFIG:登出交易
		if (req.path.toString().indexOf('logout.do') != -1) {
			delete req.session.user;
			console.log("ResponseData:");
			var response = {
				_RejCode: "000000",
				Info: "登出成功",
			};
			console.log(response);
			res.json(response);
			return;
		}

		//CONFIG:登录交易
		if (req.path.toString().indexOf('login.do') != -1) {
			req.session.regenerate(function () {
				req.session.user = req.session.id;
				console.log("ResponseData:");
				var response = {
					_RejCode: "000000",
					Info: "登录成功",
					sessionid: req.session.id
				};
				console.log(response);
				// res.json(response);

				setTimeout(function () {
					res.json(response);
				}, 1000);
			});
			return;
		}

		//CONFIG:带逻辑的交易
		if (req.path.toString().indexOf('test.do') != -1) {
			console.log("ResponseData:");
			var response = {
				_RejCode: "000000",
				Info: req.session.id
			};
			console.log(response);
			res.json(response);
			return;
		}

		//CONFIG:不带逻辑读取文件的交易
		fs.readFile('Response' + req.path.toString(), function (err, content) {
			if (err) {
				console.log("异常信息：" + err.message);
				console.log("ResponseData:");
				var response = {
					_RejCode: "444444",
					_RejMsg: "接口未定义"
				};
				res.json(response);
				return;
			} else {
				console.log("响应的文件:" + 'Response' + req.path.toString());
				res.writeHead(200, {
					'Content-type': 'application/json; charset=UTF-8'
				});
				res.write(content);
				console.log("ResponseData:");
				// console.log('\n' + content.toString("utf-8").Trim());
				res.end();
				return;
			}
		});
		return;
	}

	switch (req.path.toString()) {
		case '' || '/':

			//CONFIG:默认路径进入首页
			fs.readFile('Response' + '/index.html', function (err, content) {
				if (err) {
					console.log("异常信息：" + err.message);
					res.writeHead(404, {
						'Content-type': 'application/json; charset=UTF-8'
					});
					res.write('{"_RejCode":"444444","jsonError":"服务未找到！","errtype":"defaultPublicError"}');
					res.end();
					return;
				} else {
					console.log("响应的文件:" + 'Response' + '/index.html');
					console.log("ResponseData:FILE");
					res.writeHead(200, {
						'Content-Type': 'text/html; charset=UTF-8'
					});
					res.write(content);
					res.end();
					return;
				}
			});
			return;
		case '/sleep':

			//CONFIG:此处用于模拟缓慢的网络连接
			// 使用查询字符串来获取延迟时长,或者2000毫秒
			var delay = parseInt(url.query) || 20000;
			res.writeHead(200, {
				'Content-type': 'text/plain; charset=UTF-8'
			});
			res.write('Sleeping for' + delay + ' milliseconds...');
			setTimeout(function () {
				res.write('done.');
				res.end();
			}, delay);
			return;
		case 'MP_verify_1jV0u90mmeKRu2By':
			fs.readFile('Response' + 'MP_verify_1jV0u90mmeKRu2By.txt', function (err, content) {
				if (err) {
					console.log("异常信息：" + err.message);
					res.writeHead(404, {
						'Content-type': 'application/json; charset=UTF-8'
					});
					res.write('未找到文件');
					res.end();
					return;
				} else {
					console.log("响应的文件:" + 'Response' + '/index.html');
					console.log("ResponseData:FILE");
					res.writeHead(200, {
						'Content-Type': 'text/html; charset=UTF-8'
					});
					res.write(content);
					res.end();
					return;
				}
			});
			return;
		default:
			// 处理来自本地目录的文件
			var filename = req.path.toString().substring(1);
			// 去掉前导'/'
			var type = getType(filename.substring(filename.lastIndexOf('.') + 1));
			// 异步读取文件,并将内容作为单独的数据模块传给回调函数
			// 对于确实很大的文件,使用流API fs.createReadStream()更好
			fs.readFile('Response/' + filename, function (err, content) {
				if (err) {
					console.log("异常信息：404 " + err.message);

					res.writeHead(404, {
						'Content-Type': 'text/plain; charset="UTF-8"'
					});
					res.write("404 " + err.message);
					res.end();
				} else {
					console.log("响应的文件:" + 'Response' + req.path.toString());
					console.log("ResponseData:FILE");
					res.writeHead(200, {
						'Content-Type': type
					});
					res.write(content);
					res.end();
				}
			});
			return;
	}
});

String.prototype.Trim = function () {
	return this.replace(/(^\s*)|(\s*$)/g, "");
} //去除空格,回车
String.prototype.LTrim = function () {
	return this.replace(/(^\s*)/g, "");
	//删除字符串左边的空格回车
}
String.prototype.RTrim = function () {
	return this.replace(/(\s*$)/g, "");
}

function getType(endTag) {
	var type = null;
	switch (endTag) {
		case 'html':
		case 'htm':
			type = 'text/html; charset=UTF-8';
			break;
		case 'js':
			type = 'application/javascript; charset="UTF-8"';
			break;
		case 'css':
			type = 'text/css; charset="UTF-8"';
			break;
		case 'txt':
			type = 'text/plain; charset="UTF-8"';
			break;
		case 'manifest':
			type = 'text/cache-manifest; charset="UTF-8"';
			break;
		default:
			type = 'application/octet-stream';
			break;
	}
	return type;
}