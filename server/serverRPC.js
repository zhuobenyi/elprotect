var http = require('http');
var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var request = require('request');
// 引用依赖
var express = require('express');
var app = express();

var proxy = require('http-proxy-middleware');
// proxy 中间件的选择项
var options = {
	target: 'https://cmps.test.cebbank.com:9001/mgw.htm', // 目标服务器 host
	changeOrigin: true               // 默认false，是否需要改变原始主机头为目标URL
};
// app.use('**/alipay.client**', proxy(options));

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

//CONFIG:启动服务器 端口配置 8800
app.listen(8800);
console.log("启动端口为:" + 8800)

// {
//     result =     {
//         Body =         {
//             advert =             {
//                 ACTIVETIMEEND = "2061/04/21";
//                 ACTIVETIMESTA = "2017/04/21";
//                 CREATEDATENBR = "20190410045719_216";
//                 DOWNLOADPATH = "http://10.200.181.117/static/picture/d77f974fce8346f68ea7f471554121c620190410045719_216.json";
//                 "IS_SUPPORT" = 1;
//                 "LEVEL_STATE" = 3;
//                 PICTURENAME = "d77f974fce8346f68ea7f471554121c620190410045719_216.json";
//                 "PIC_URL" = "http://10.200.160.162:17201/yghsh/login_system.do";
//                 SHOWTIME = 3;
//                 dataType = json;
//                 repeats = once;
//             };
//         };
//         Head =         {
//             IBSReturnCode = 000000;
//             TransCode = "QryStartupPageAdvertList_V3";
//         };
//     };
//     resultStatus = 1000;
//     tips = ok;
// }


var sessionID;
app.use(function (req, res, next) {
	/*
	console.error(req.headers["operation-type"]);
	console.error(JSON.stringify(req.body[0], null, 4));


	res.writeHead(200, {
		'X-Requested-With': 'XMLHttpRequest',
		"Content-Type": "application/json",
		"Result-Status": "1000",
		"tips":"ok"
	});
	res.write(JSON.stringify({
		asfasfsf: 1000,
		asfasfsdf: "ok"
	}));
	res.end();
	return;
*/

	var operationType = req.headers["operation-type"];
	if (false && soperationType && operationType.indexOf("alipay.client.") == -1) {
		console.log("=-=-=REQ operationType:");
		console.log(operationType);
		var response = req.body[0];
		if (response) {
			console.log("=-=-=REQ params:");
			delete response["interfaceSignature"];
			console.log(JSON.stringify(response));
		}

		var requestType = operationType;
		var requestData = response;
		var responseHeaders = {
			'X-Requested-With': 'XMLHttpRequest',
			"Content-Type": "application/json",
			"Result-Status": "1000",
			"tips": "ok"
		};

		/*
		 * 配置 IP:端口
		 */
		var SERVER_IP = "http://127.0.0.1:8808";
		var SERVER_URL = SERVER_IP + '/pweb/' + requestType;
		console.log("=-=-=REQ url:");
		console.log(SERVER_URL);

		request({
			url: SERVER_URL,
			method: "POST",
			json: true,
			headers: {
				cookie: sessionID
			},
			body: requestData ? requestData : {}
		}, function (error, response, body) {
			if (!error && response.statusCode == 200) {
				console.log("=-=-=RES params:");
				console.log(body);
				body = body ? body : {};
				// console.log("=-=-=RES headers:");
				// console.log(response.headers);
				if (response.headers['set-cookie']) {
					responseHeaders['set-cookie'] = response.headers['set-cookie'];
					var sessionIdStr = "";
					for (var i = 0; i < response.headers['set-cookie'].length; i++) {
						sessionIdStr += response.headers['set-cookie'][i].split(";")[0];
						sessionIdStr += ";"
					}
					sessionID = sessionIdStr;
				}
				res.writeHead(200, responseHeaders);
				res.write(JSON.stringify(body));
				res.end();
			}
		});

	} else if (operationType.indexOf("alipay.client.") != -1) {
		console.log(operationType);

		var responseHeaders = {
			'X-Requested-With': 'XMLHttpRequest',
			"Content-Type": "application/json",
			"Result-Status": "1000",
			"tips": "ok"
		};
		res.writeHead(200, responseHeaders);
				res.end();

	}
});