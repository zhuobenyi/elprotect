window.isNotNebula = window.navigator.userAgent.toString().toLowerCase().indexOf("nebula") == -1;
if (isNotNebula) {
    var Mock = require('mockjs');
    var axios = require('axios');
    const Axios = axios.create({
        baseURL: "", // 因为我本地做了反向代理
        timeout: 40000,
        responseType: "json",
        withCredentials: true, // 是否允许带cookie这些
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            "Content-Type": "application/json",
            "type": "Web",
        },
        transformRequest: [function (data) {
            // Do whatever you want to transform the data
            let data2 = {
                ...data,
                "headChannelId": "62", //渠道
                // "headChannelId": "82", //支付宝渠道
                // "headChannelId": "83", //威信渠道
                "headAppVersion": '1.0', //版本
                "headEquipmentId": '9852365263' //设备ID
            }
            //  console.log(data2);

            return JSON.stringify(data2);
        }],
        transformResponse: [function (data) {
            //  console.log(data);
            // 这里提前处理返回的数据
            if (data && data.jsonError) {
                if (data.jsonError[0]._exceptionMessageCode == "role.invalid_user") {
                    alert(data.jsonError[0]._exceptionMessage);
                };
            } else {
                return data;
            }

        }],
    });

    //MARK:Mock 直接配置交易接口
    Mock.mock("/pweb/mock.do", {
        "userInfo|4": [
            {
                //生成|num个如下格式名字的数据
                "id|+1": 1, //数字从当前数开始后续依次加一
                name: "@cname", //名字为随机中文名字
                "ago|18-28": 25, //年龄为18-28之间的随机数字
                "sex|1": ["男", "女"], //性别是数组中的一个，随机的
                "job|1": ["web", "UI", "python", "php"] //工作是数组中的一个
            }
        ]
    });

    const config = {};
    config.call = {
        //MARK:Mock 原生JSAPI
        rpc: function (opts, callback) {
            console.log(JSON.stringify(opts));

            var isLogON = true;

            if (isLogON) {
                if (window.WebSocket) {
                    var ws = new WebSocket('ws://127.0.0.1:8801');
                    ws.onopen = function (e) {
                        ws.send(JSON.stringify({
                            Type: "LOG_REQ",
                            operationType: opts.operationType,
                            Data: opts.requestData[0]?opts.requestData[0]:{}
                        }));
                    }
                }
            }
            Axios.post("/pweb/" + opts.operationType, opts.requestData[0]).then(
                function (response) {
                    if (isLogON) {
                        if (window.WebSocket) {
                            var ws = new WebSocket('ws://127.0.0.1:8801');
                            ws.onopen = function (e) {
                                ws.send(JSON.stringify({
                                    Type: "LOG_RES",
                                    operationType: opts.operationType,
                                    Data: JSON.parse(response.data)
                                }));
                            }
                        }
                    }
                    callback && callback(JSON.parse(response.data));
                }
            )
        },
        postNotification: function (opts) {
            if (window.WebSocket) {
                var ws = new WebSocket('ws://127.0.0.1:8801');
                ws.onopen = function (e) {
                    ws.send(JSON.stringify({
                        Type: "P",
                        Name: opts.name,
                        Data: opts.data
                    }));
                    ws.close();
                }
                ws.onclose = function (e) { }
                ws.onerror = function () { }
                ws.onmessage = function (e) { }
            }
        },
        pushWindow: function (opts, callback) {
            AlipayJSBridgeReadyFun(function () {
                if (window.__hasLunaMock) {
                    //注册监听 用于同时存在多个H5容器的情况 就是H5页面作为片段同时存在多个
                    AlipayJSBridge.call('addNotifyListener', {
                        name: 'NEBULANOTIFY_resume'
                    }, function (result) {
                        var event = document.createEvent('HTMLEvents');
                        event.initEvent("resume", true, true);
                        event.data = result.data;
                        document.dispatchEvent(event);
                    });
                };
            });
            console.log(JSON.stringify(opts, null, 4));
            window.open(opts.url);
            callback && callback({ isSuccess: true });
        },
        popWindow: function (opts, callback) {
            AlipayJSBridgeReadyFun(function () {
                if (window.__hasLunaMock) {
                    if (opts) {
                        AlipayJSBridge.call('postNotification', {
                            name: 'resume',
                            data: opts
                        });
                    } else {
                        AlipayJSBridge.call('postNotification', {
                            name: 'resume'
                        });
                    }
                };
            });
            console.log(JSON.stringify(opts, null, 4));
            setTimeout(() => {
                window.opener = null;
                window.open('', '_self');
                window.close();
                callback && callback({ isSuccess: true });
            }, 500);
        },
        pushWeb: function (opts, callback) {
            console.log(JSON.stringify(opts, null, 4));
            window.location.href = opts.url;
            callback && callback({ isSuccess: true });
        },
        popWeb: function (opts, callback) {
            console.log(JSON.stringify(opts, null, 4));
            window.history.go(-1);
            callback && callback({ isSuccess: true });
        },
        addNotifyListener: function (opts, callback) {
            if (window.WebSocket) {
                var ws = new WebSocket('ws://127.0.0.1:8801');
                ws.onopen = function (e) {
                    ws.send(JSON.stringify({
                        Type: "L",
                        Name: opts.name
                    }));
                }
                ws.onclose = function (e) { }
                ws.onerror = function () { }
                ws.onmessage = function (e) {
                    callback(JSON.parse(e.data));
                }
            }
        },
        postNotification: function (opts) {
            if (window.WebSocket) {
                var ws = new WebSocket('ws://127.0.0.1:8801');
                ws.onopen = function (e) {
                    ws.send(JSON.stringify({
                        Type: "P",
                        Name: opts.name,
                        Data: opts.data
                    }));
                    ws.close();
                }
                ws.onclose = function (e) { }
                ws.onerror = function () { }
                ws.onmessage = function (e) { }
            }
        },
    }

    window.AlipayJSBridge = {
        call: function (funcName, param, callback) {
            if (config.call[funcName] != undefined) {
                config.call[funcName](param, callback);
                return "AlipayJSBridge.call('" + funcName + "')";
            } else {
                alert("接口 \"" + funcName + "\" 未在 mock.js中定义");
            }
        }
    }

    var evt = document.createEvent('Events');
    evt.initEvent('AlipayJSBridgeReady', false, false);
    document.dispatchEvent(evt);

    window.__hasLunaMock = true;
    window.lunaMockConfig = config;

    console.log("mock.js SUCCESS")
}
