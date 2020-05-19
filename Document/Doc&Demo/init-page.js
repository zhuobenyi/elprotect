"use strict";
var os = require("os");
Object.defineProperty(exports, "__esModule", {value: !0});
var _extends = Object.assign || function (t) {
	for (var e = 1; e < arguments.length; e++) {
		var a = arguments[e];
		for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (t[i] = a[i])
	}
	return t
};
exports.default = initPage;
var _chalk = require("chalk"), _chalk2 = _interopRequireDefault(_chalk), _ora = require("ora"),
	_ora2 = _interopRequireDefault(_ora), _userHome = require("user-home"),
	_userHome2 = _interopRequireDefault(_userHome), _path = require("path"), _path2 = _interopRequireDefault(_path),
	_utils = require("../utils"), _rimraf = require("rimraf"), _rimraf2 = _interopRequireDefault(_rimraf),
	_fs = require("fs"), _fs2 = _interopRequireDefault(_fs), _constant = require("../utils/constant");

function _interopRequireDefault(t) {
	return t && t.__esModule ? t : {default: t}
}

function* editPackageJsonPages(t, e) {
	var user = require(`${t.cwd}${_path2.default.sep}command${_path2.default.sep}common${_path2.default.sep}userConfig.json`);
	var hostName = null;
	user.forEach(item => {
		if (item.computerName.includes(require("os").hostname())) {
			hostName = item.userConfig.userFolder
		}
	});
	let a = e.pageNameMap, i = e.outputDir, l = e.layoutFile, n = e.configLayout, title = e.layoutTitle,
		desc = e.layoutDesc, packageinfo = e.layoutPackageInfo, isNeedLogin = e.layoutIsNeedLogin;
	const o = `${t.cwd}${_path2.default.sep}package.json`, r = require(o);
	if (!hostName) {
		throw new Error(`无法找到当前计算机名:${require("os").hostname()}对应用户的配置信息`)
	}
	const userConfig = `${t.cwd}${_path2.default.sep}command${_path2.default.sep}configJson${_path2.default.sep}config_${hostName}.json`;
	var userJson = require(userConfig);
	if (r && r.kylinApp) {
		const e = r.kylinApp.pages = r.kylinApp.pages || {};
		let s = _path2.default.relative(t.cwd, `${i}${_path2.default.sep}index.js`),
			u = n ? _path2.default.relative(t.cwd, l) : (_utils.isWin ? "" : void 0);
		var pageMsg = {
			entry: _path2.default.isAbsolute(s) ? s : `./${s}`,
			title: title,
			desc: desc,
			packageinfo: packageinfo,
			isNeedLogin: isNeedLogin
		};
		_utils.isWin && (s = s.replace(/\\/g, "/"), u = u.replace(/\\/g, "/"), pageMsg.entry = pageMsg.entry.replace(/\\/g, "/")), e[a.package_entry] = n ? {
			entry: _path2.default.isAbsolute(s) ? s : `./${s}`,
			template: _path2.default.isAbsolute(u) ? u : `./${u}`
		} : pageMsg, _fs2.default.writeFileSync(o, JSON.stringify(r, void 0, 2), "utf-8");
		if (userJson && userJson.pages) {
			userJson.pages[a.package_entry] = pageMsg;
			_fs2.default.writeFileSync(userConfig, JSON.stringify(userJson, void 0, 2), "utf-8")
		}
	}
}

function* getOutputDir(t, e) {
	let a = e.pageNameMap, i = e.configLayout, h = e.ifHtmlTemplate;
	const l = `${t.cwd}${_path2.default.sep}package.json`;
	if (_fs2.default.existsSync(l)) {
		const e = require(l);
		if (e && e.kylinApp) {
			const l = e.kylinApp.pages || {};
			if (0 === Object.keys(l).filter(t => t === a.dash || t === a.camel || t === a.origin).length) {
				let e = [{
					name: "outputDir",
					type: "input",
					message: `将在以下目录生成'${a.path}'页面模板\n`,
					default: `${t.cwd}${_path2.default.sep}src${_path2.default.sep}pages${_path2.default.sep}${a.path}/`
				}, {name: "layoutTitle", type: "input", message: "请输入模板的默认'title'\n", default: `${a.title}`}];
				h && i && (e = e.concat([{
					name: "layoutFile",
					type: "input",
					message: `将在以下路径生成'${a.path}.html'模板文件\n`,
					default: `${t.cwd}${_path2.default.sep}src${_path2.default.sep}layout${_path2.default.sep}${a.path}.html`
				}]));
				e = e.concat([{
					name: "layoutDesc",
					type: "input",
					message: `请输入简介\n`,
					default: `default desc`
				}, {
					name: "layoutPackageInfo",
					type: "input",
					message: `请输入包信息\n`,
					default: `1-default-packageinfo`
				}, {name: "layoutIsNeedLogin", type: "input", message: `是否需要登陆(Y/N)\n`, default: `N`}]);
				const l = yield(0, _utils.question)(e);
				return {
					outputDir: (0, _utils.getOutputAbsDir)(t, l.outputDir),
					layoutFile: l.layoutFile ? (0, _utils.getOutputAbsDir)(t, l.layoutFile) : void 0,
					layoutTitle: l.layoutTitle,
					hasPackageJson: !0,
					layoutDesc: l.layoutDesc,
					layoutPackageInfo: l.layoutPackageInfo,
					layoutIsNeedLogin: l.layoutIsNeedLogin
				}
			}
			{
				const t = `'${a.origin}'在kylinApp.pages中已存在重名页面配置`;
				throw _utils.hint.error("[package.json]", t), new Error(t)
			}
		}
	}
	const n = yield(0, _utils.question)([{
		name: "outputDir",
		type: "input",
		message: `无package.json或无kylinApp字段,\n将在以下目录生成'${a.path}'页面模板\n`,
		default: `${t.cwd}${_path2.default.sep}${a.path}${_path2.default.sep}`
	}]);
	return {outputDir: (0, _utils.getOutputAbsDir)(t, n.outputDir), hasPackageJson: !1}
}

function getPageNameByType(t, e) {
	switch (e) {
		case _constant.PAGE_NAME_TYPE.CAMEL:
			return (0, _utils.parseNameCamel)(t, !0);
		case _constant.PAGE_NAME_TYPE.DASH:
			return (0, _utils.parseNameDash)(t);
		case _constant.PAGE_NAME_TYPE.ORIGIN:
			return t;
		default:
			throw new Error("unknown type for pageName")
	}
}

function* initPage(t) {
	t.templatePath = t.t = t.t || "kylin_templates";
	const e = t.args;
	t.cwd;
	let a, i;
	if (0 === e.length) throw new Error("no args");
	1 === e.length ? (i = e[0], a = "page-template") : (i = e[1], a = e[0]);
	const l = !!t.t;
	const h = t.html;
	const n = {
		origin: _constant.PAGE_NAME_TYPE.ORIGIN,
		camel: _constant.PAGE_NAME_TYPE.CAMEL,
		dash: _constant.PAGE_NAME_TYPE.DASH,
		path: _constant.PAGE_NAME_TYPE.DASH,
		title: _constant.PAGE_NAME_TYPE.CAMEL,
		package_entry: _constant.PAGE_NAME_TYPE.DASH,
		template: _constant.PAGE_NAME_TYPE.CAMEL,
		template_layout: _constant.PAGE_NAME_TYPE.CAMEL
	};
	const o = Object.keys(n).reduce((t, e) => (t[e] = getPageNameByType(i, n[e]), t), {});
	var r = yield getOutputDir(t, {pageNameMap: o, configLayout: l, ifHtmlTemplate: h});
	const s = r.outputDir, u = r.layoutFile, p = r.layoutTitle, c = r.hasPackageJson,
		_ = getFullGitReps({template: a, program: t}), f = getTempPath(_extends({}, _, {program: t})),
		g = getRepo(_extends({}, _, {tmp: f, program: t}));
	_utils.hint.warn("[Info] Mode:", "init-page"), (0, _utils.hint)("[Info] Template:", a), (0, _utils.hint)("[Info] Repo:", g), (0, _utils.hint)("[Info] Tmp:", f), (0, _utils.hint)("[Info] OutputDir:", s);
	try {
		if (t.t) yield(0, _utils.gitlabCloneForLocal)({
			repo: g,
			tmp: f,
			program: t,
			template: a
		}), _utils.hint.success("[Copy]"); else {
			const e = yield gitlabClone({repo: g, tmp: f, program: t, template: a});
			_utils.hint.success("[Clone]"), console.log(e)
		}
	} catch (t) {
		return _utils.hint.error("[Fail] git clone to tmp directory"), void console.error(t)
	}
	try {
		(0, _utils.copyAndReplace)(f, s, {
			pageName: o.template.replace(/(?<=\/)\S/, $1 => {
				return $1.toUpperCase()
			}).replace(/\//g, ""), configLayout: l
		}, ["layout.html"]), u && l && (0, _utils.copyAndReplaceForFile)(`${f}/layout.html`, u, {
			title: p,
			pageName: o.template_layout.replace(/(?<=\/)\S/, $1 => {
				return $1.toUpperCase()
			}).replace(/\//g, "")
		}), c && (yield editPackageJsonPages(t, {
			pageNameMap: o,
			outputDir: s,
			layoutTitle: r.layoutTitle,
			layoutFile: u,
			layoutDesc: r.layoutDesc,
			layoutPackageInfo: r.layoutPackageInfo,
			layoutIsNeedLogin: r.layoutIsNeedLogin,
			configLayout: h ? l : false
		})), _utils.hint.success("[Done]")
	} catch (t) {
		_utils.hint.error("[Fail] copy template files to dest"), console.error(t)
	}
}

function getFullGitReps(t) {
	let e = t.template;
	return e.indexOf("/") > -1 ? {host: "gitlab.alipay-inc.com", template: e} : {
		host: "gitlab.alipay-inc.com",
		template: `kylin-templates/${e}`
	}
}

function getTempPath(t) {
	t.program;
	let e = t.template;
	const a = _path2.default.join(_userHome2.default, ".kylin-templates", e.replace(/\//g, "-"));
	return _rimraf2.default.sync(a), a
}

function getRepo(t) {
	t.program;
	return `git@${t.host}:${t.template}.git`
}

function* gitlabClone(t) {
	let e = t.repo, a = t.tmp;
	t.program;
	const i = yield(0, _utils.exec)(`git clone --progress ${e} -b master ${a}`, {slient: !0});
	if (!_fs2.default.existsSync(a)) throw new Error(`destination "${a}" not found`);
	return i.stderr
}

module.exports = exports.default;
