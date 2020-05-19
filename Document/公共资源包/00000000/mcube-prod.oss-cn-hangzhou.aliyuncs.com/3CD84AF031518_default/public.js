(function () {
    console.log("func SUCCESS")
})();

window.isNotNebula = window.navigator.userAgent.toString().toLowerCase().indexOf("nebula") == -1;

(function () {
    var ie = !!(window.attachEvent && !window.opera);
    var wk = /webkit\/(\d+)/i.test(navigator.userAgent) && (RegExp.$1 < 525);
    var fn = [];
    var run = function () {
        for (var i = 0; i < fn.length; i++) fn[i]();
    };
    var d = document;
    d.ready = function (f) {
        if (!ie && !wk && d.addEventListener)
            return d.addEventListener('DOMContentLoaded', f, false);
        if (fn.push(f) > 1) return;
        if (ie)
            (function () {
                try {
                    d.documentElement.doScroll('left');
                    run();
                } catch (err) {
                    setTimeout(arguments.callee, 0);
                }
            })();
        else if (wk)
            var t = setInterval(function () {
                if (/^(loaded|complete)$/.test(d.readyState))
                    clearInterval(t), run();
            }, 0);
    };
})();

document.ready(function () {
    console.log("document SUCCESS")
    // console.log(new Date().getTime());
});

function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}

addLoadEvent(function () {
    console.log("window SUCCESS")
});

function AlipayJSBridge_call(rpcStr, paramDict, successFun, errorFun) {
    if(rpcStr == "pushWeb"){
        window.location.href = paramDict.url;
    }else if(rpcStr == "popWeb"){
        window.history.go(-1);
    }else{
        AlipayJSBridgeReadyFun(function () {
            AlipayJSBridge.call(rpcStr, paramDict, successFun);
        });
    }


}
function AlipayJSBridgeReadyFun(readyCallback) {
    function ready(callback) {
        // 如果 jsbridge 已经注入则直接调用
        if (window.AlipayJSBridge) {
            callback && callback();
        } else {
            document.addEventListener('AlipayJSBridgeReady', callback, false);
        }
    }
    ready(readyCallback);
}