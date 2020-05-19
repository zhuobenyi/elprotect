var babel = {
    "babelrc": false,
    "presets": [
        [
            "/Users/liuwang/Desktop/kylin-demo/node_modules/_@ali_babel-preset-es2015-nebula@6.22.7@@ali/babel-preset-es2015-nebula/lib/index.js",
            {
                "enableTypeofSymbol": false,
                "enableGenerator": false,
                "enableForOfArray": false,
                "nebulaTarget": "common",
                "loose": {
                    "TemplateLiterals": false,
                    "Classes": true,
                    "ComputedProperties": false,
                    "ForOf": false,
                    "Spread": true,
                    "Destructuring": true,
                    "Modules": false
                },
                "requeue": false,
                "preferExternalPromise": true,
                "ensureExitPromise": true,
                "loosePolyfill": true
            }
        ]
    ],
    "plugins": [
        [
            "/Users/liuwang/Desktop/kylin-demo/node_modules/_babel-plugin-import@1.13.0@babel-plugin-import/lib/index.js",
            [
                {
                    "libraryName": "@alipay/antui-vue",
                    "style": false,
                    "libraryDirectory": "lib",
                    "camel2DashComponentName": true
                }
            ]
        ],
        "/Users/liuwang/Desktop/kylin-demo/node_modules/_babel-plugin-transform-vue-jsx@3.7.0@babel-plugin-transform-vue-jsx/index.js",
        [
            "/Users/liuwang/Desktop/kylin-demo/node_modules/_@ali_babel-plugin-decorators-inject@6.22.10@@ali/babel-plugin-decorators-inject/lib/index.js",
            {
                "className": "Component",
                "PropertyName": "Property",
                "propertyIgnoreName": "Property",
                "enableComponentLazyRequire": true,
                "enableRenderInjectH": false,
                "injectComponentName": true
            }
        ],
        "/Users/liuwang/Desktop/kylin-demo/node_modules/_babel-plugin-transform-decorators-legacy@1.3.5@babel-plugin-transform-decorators-legacy/lib/index.js",
        "/Users/liuwang/Desktop/kylin-demo/node_modules/_babel-plugin-transform-class-properties@6.24.1@babel-plugin-transform-class-properties/lib/index.js",
        [
            "/Users/liuwang/Desktop/kylin-demo/node_modules/_@ali_babel-plugin-fast-async@1.1.0@@ali/babel-plugin-fast-async/plugin.js",
            {
                "spec": true,
                "useRuntimeModule": false,
                "hoistFuns": true
            }
        ],
        "/Users/liuwang/Desktop/kylin-demo/node_modules/_babel-plugin-transform-do-expressions@6.22.0@babel-plugin-transform-do-expressions/lib/index.js",
        "/Users/liuwang/Desktop/kylin-demo/node_modules/_babel-plugin-transform-function-bind@6.22.0@babel-plugin-transform-function-bind/lib/index.js",
        "/Users/liuwang/Desktop/kylin-demo/node_modules/_babel-plugin-transform-class-constructor-call@6.24.1@babel-plugin-transform-class-constructor-call/lib/index.js",
        "/Users/liuwang/Desktop/kylin-demo/node_modules/_babel-plugin-transform-export-extensions@6.22.0@babel-plugin-transform-export-extensions/lib/index.js",
        "/Users/liuwang/Desktop/kylin-demo/node_modules/_babel-plugin-transform-class-properties@6.24.1@babel-plugin-transform-class-properties/lib/index.js",
        "/Users/liuwang/Desktop/kylin-demo/node_modules/_babel-plugin-transform-decorators@6.24.1@babel-plugin-transform-decorators/lib/index.js",
        "/Users/liuwang/Desktop/kylin-demo/node_modules/_babel-plugin-syntax-dynamic-import@6.18.0@babel-plugin-syntax-dynamic-import/lib/index.js",
        "/Users/liuwang/Desktop/kylin-demo/node_modules/_babel-plugin-syntax-trailing-function-commas@6.22.0@babel-plugin-syntax-trailing-function-commas/lib/index.js",
        "/Users/liuwang/Desktop/kylin-demo/node_modules/_babel-plugin-transform-exponentiation-operator@6.24.1@babel-plugin-transform-exponentiation-operator/lib/index.js",
        "/Users/liuwang/Desktop/kylin-demo/node_modules/_babel-plugin-transform-object-rest-spread@6.26.0@babel-plugin-transform-object-rest-spread/lib/index.js"
    ]
};

var webpack = {
    "babel": {
        "babelrc": false,
        "presets": [
            [
                "/Users/liuwang/Desktop/kylin-demo/node_modules/_@ali_babel-preset-es2015-nebula@6.22.7@@ali/babel-preset-es2015-nebula/lib/index.js",
                {
                    "enableTypeofSymbol": false,
                    "enableGenerator": false,
                    "enableForOfArray": false,
                    "nebulaTarget": "common",
                    "loose": {
                        "TemplateLiterals": false,
                        "Classes": true,
                        "ComputedProperties": false,
                        "ForOf": false,
                        "Spread": true,
                        "Destructuring": true,
                        "Modules": false
                    },
                    "requeue": false,
                    "preferExternalPromise": true,
                    "ensureExitPromise": true,
                    "loosePolyfill": true
                }
            ]
        ],
        "plugins": [
            [
                "/Users/liuwang/Desktop/kylin-demo/node_modules/_babel-plugin-import@1.13.0@babel-plugin-import/lib/index.js",
                [
                    {
                        "libraryName": "@alipay/antui-vue",
                        "style": false,
                        "libraryDirectory": "lib",
                        "camel2DashComponentName": true
                    }
                ]
            ],
            "/Users/liuwang/Desktop/kylin-demo/node_modules/_babel-plugin-transform-vue-jsx@3.7.0@babel-plugin-transform-vue-jsx/index.js",
            [
                "/Users/liuwang/Desktop/kylin-demo/node_modules/_@ali_babel-plugin-decorators-inject@6.22.10@@ali/babel-plugin-decorators-inject/lib/index.js",
                {
                    "className": "Component",
                    "PropertyName": "Property",
                    "propertyIgnoreName": "Property",
                    "enableComponentLazyRequire": true,
                    "enableRenderInjectH": false,
                    "injectComponentName": true
                }
            ],
            "/Users/liuwang/Desktop/kylin-demo/node_modules/_babel-plugin-transform-decorators-legacy@1.3.5@babel-plugin-transform-decorators-legacy/lib/index.js",
            "/Users/liuwang/Desktop/kylin-demo/node_modules/_babel-plugin-transform-class-properties@6.24.1@babel-plugin-transform-class-properties/lib/index.js",
            [
                "/Users/liuwang/Desktop/kylin-demo/node_modules/_@ali_babel-plugin-fast-async@1.1.0@@ali/babel-plugin-fast-async/plugin.js",
                {
                    "spec": true,
                    "useRuntimeModule": false,
                    "hoistFuns": true
                }
            ],
            "/Users/liuwang/Desktop/kylin-demo/node_modules/_babel-plugin-transform-do-expressions@6.22.0@babel-plugin-transform-do-expressions/lib/index.js",
            "/Users/liuwang/Desktop/kylin-demo/node_modules/_babel-plugin-transform-function-bind@6.22.0@babel-plugin-transform-function-bind/lib/index.js",
            "/Users/liuwang/Desktop/kylin-demo/node_modules/_babel-plugin-transform-class-constructor-call@6.24.1@babel-plugin-transform-class-constructor-call/lib/index.js",
            "/Users/liuwang/Desktop/kylin-demo/node_modules/_babel-plugin-transform-export-extensions@6.22.0@babel-plugin-transform-export-extensions/lib/index.js",
            "/Users/liuwang/Desktop/kylin-demo/node_modules/_babel-plugin-transform-class-properties@6.24.1@babel-plugin-transform-class-properties/lib/index.js",
            "/Users/liuwang/Desktop/kylin-demo/node_modules/_babel-plugin-transform-decorators@6.24.1@babel-plugin-transform-decorators/lib/index.js",
            "/Users/liuwang/Desktop/kylin-demo/node_modules/_babel-plugin-syntax-dynamic-import@6.18.0@babel-plugin-syntax-dynamic-import/lib/index.js",
            "/Users/liuwang/Desktop/kylin-demo/node_modules/_babel-plugin-syntax-trailing-function-commas@6.22.0@babel-plugin-syntax-trailing-function-commas/lib/index.js",
            "/Users/liuwang/Desktop/kylin-demo/node_modules/_babel-plugin-transform-exponentiation-operator@6.24.1@babel-plugin-transform-exponentiation-operator/lib/index.js",
            "/Users/liuwang/Desktop/kylin-demo/node_modules/_babel-plugin-transform-object-rest-spread@6.26.0@babel-plugin-transform-object-rest-spread/lib/index.js"
        ]
    },
    "output": {
        "path": "/",
        "publicPath": "",
        "filename": "js/[name].[hash:7].js",
        "chunkFilename": "js/[id].[chunkhash:7].js"
    },
    "externals": {
        "zepto": "Zepto",
        "fastclick": "FastClick",
        "vue": "Vue",
        "es6-promise": "Promise",
        "fetch": "fetch"
    },
    "resolve": {
        "extensions": [
            "",
            ".jsx",
            ".js",
            ".vue",
            ".less",
            ".css"
        ],
        "alias": {
            "@mandmobile": "/Users/liuwang/Desktop/kylin-demo/src/components/",
            "common": "/Users/liuwang/Desktop/kylin-demo/src/common/",
            "pages": "/Users/liuwang/Desktop/kylin-demo/src/pages/"
        }
    },
    "module": {
        "preLoaders": [],
        "loaders": [
            {
                "test": {},
                "loader": "/Users/liuwang/Desktop/kylin-demo/node_modules/_vue-style-loader@1.0.0@vue-style-loader/index.js!css-loader?minimize=false&sourceMap!postcss-loader?sourceMap"
            },
            {
                "test": {},
                "loader": "/Users/liuwang/Desktop/kylin-demo/node_modules/_vue-style-loader@1.0.0@vue-style-loader/index.js!css-loader?minimize=false&sourceMap!postcss-loader?sourceMap"
            },
            {
                "test": {},
                "loader": "/Users/liuwang/Desktop/kylin-demo/node_modules/_vue-style-loader@1.0.0@vue-style-loader/index.js!css-loader?minimize=false&sourceMap!postcss-loader?sourceMap!less-loader?sourceMap"
            },
            {
                "test": {},
                "loader": "/Users/liuwang/Desktop/kylin-demo/node_modules/_source-map-loader@0.1.6@source-map-loader/index.js",
                "include": [
                    "/Users/liuwang",
                    {}
                ],
                "exclude": null,
                "enforce": "pre"
            },
            {
                "test": {},
                "loader": "/Users/liuwang/Desktop/kylin-demo/node_modules/_@ali_kylin-vue-loader@0.3.1@@ali/kylin-vue-loader/index.js"
            },
            {
                "test": {},
                "loader": "/Users/liuwang/Desktop/kylin-demo/node_modules/_babel-loader@6.2.10@babel-loader/lib/index.js",
                "include": "/Users/liuwang/Desktop/kylin-demo",
                "exclude": {},
                "query": {
                    "babelrc": false,
                    "presets": [
                        [
                            "/Users/liuwang/Desktop/kylin-demo/node_modules/_@ali_babel-preset-es2015-nebula@6.22.7@@ali/babel-preset-es2015-nebula/lib/index.js",
                            {
                                "enableTypeofSymbol": false,
                                "enableGenerator": false,
                                "enableForOfArray": false,
                                "nebulaTarget": "common",
                                "loose": {
                                    "TemplateLiterals": false,
                                    "Classes": true,
                                    "ComputedProperties": false,
                                    "ForOf": false,
                                    "Spread": true,
                                    "Destructuring": true,
                                    "Modules": false
                                },
                                "requeue": false,
                                "preferExternalPromise": true,
                                "ensureExitPromise": true,
                                "loosePolyfill": true
                            }
                        ]
                    ],
                    "plugins": [
                        [
                            "/Users/liuwang/Desktop/kylin-demo/node_modules/_babel-plugin-import@1.13.0@babel-plugin-import/lib/index.js",
                            [
                                {
                                    "libraryName": "@alipay/antui-vue",
                                    "style": false,
                                    "libraryDirectory": "lib",
                                    "camel2DashComponentName": true
                                }
                            ]
                        ],
                        "/Users/liuwang/Desktop/kylin-demo/node_modules/_babel-plugin-transform-vue-jsx@3.7.0@babel-plugin-transform-vue-jsx/index.js",
                        [
                            "/Users/liuwang/Desktop/kylin-demo/node_modules/_@ali_babel-plugin-decorators-inject@6.22.10@@ali/babel-plugin-decorators-inject/lib/index.js",
                            {
                                "className": "Component",
                                "PropertyName": "Property",
                                "propertyIgnoreName": "Property",
                                "enableComponentLazyRequire": true,
                                "enableRenderInjectH": false,
                                "injectComponentName": true
                            }
                        ],
                        "/Users/liuwang/Desktop/kylin-demo/node_modules/_babel-plugin-transform-decorators-legacy@1.3.5@babel-plugin-transform-decorators-legacy/lib/index.js",
                        "/Users/liuwang/Desktop/kylin-demo/node_modules/_babel-plugin-transform-class-properties@6.24.1@babel-plugin-transform-class-properties/lib/index.js",
                        [
                            "/Users/liuwang/Desktop/kylin-demo/node_modules/_@ali_babel-plugin-fast-async@1.1.0@@ali/babel-plugin-fast-async/plugin.js",
                            {
                                "spec": true,
                                "useRuntimeModule": false,
                                "hoistFuns": true
                            }
                        ],
                        "/Users/liuwang/Desktop/kylin-demo/node_modules/_babel-plugin-transform-do-expressions@6.22.0@babel-plugin-transform-do-expressions/lib/index.js",
                        "/Users/liuwang/Desktop/kylin-demo/node_modules/_babel-plugin-transform-function-bind@6.22.0@babel-plugin-transform-function-bind/lib/index.js",
                        "/Users/liuwang/Desktop/kylin-demo/node_modules/_babel-plugin-transform-class-constructor-call@6.24.1@babel-plugin-transform-class-constructor-call/lib/index.js",
                        "/Users/liuwang/Desktop/kylin-demo/node_modules/_babel-plugin-transform-export-extensions@6.22.0@babel-plugin-transform-export-extensions/lib/index.js",
                        "/Users/liuwang/Desktop/kylin-demo/node_modules/_babel-plugin-transform-class-properties@6.24.1@babel-plugin-transform-class-properties/lib/index.js",
                        "/Users/liuwang/Desktop/kylin-demo/node_modules/_babel-plugin-transform-decorators@6.24.1@babel-plugin-transform-decorators/lib/index.js",
                        "/Users/liuwang/Desktop/kylin-demo/node_modules/_babel-plugin-syntax-dynamic-import@6.18.0@babel-plugin-syntax-dynamic-import/lib/index.js",
                        "/Users/liuwang/Desktop/kylin-demo/node_modules/_babel-plugin-syntax-trailing-function-commas@6.22.0@babel-plugin-syntax-trailing-function-commas/lib/index.js",
                        "/Users/liuwang/Desktop/kylin-demo/node_modules/_babel-plugin-transform-exponentiation-operator@6.24.1@babel-plugin-transform-exponentiation-operator/lib/index.js",
                        "/Users/liuwang/Desktop/kylin-demo/node_modules/_babel-plugin-transform-object-rest-spread@6.26.0@babel-plugin-transform-object-rest-spread/lib/index.js"
                    ]
                }
            },
            {
                "test": {},
                "loader": "/Users/liuwang/Desktop/kylin-demo/node_modules/_json-loader@0.5.7@json-loader/index.js"
            },
            {
                "test": {},
                "loader": "/Users/liuwang/Desktop/kylin-demo/node_modules/_url-loader@0.5.9@url-loader/index.js",
                "query": {
                    "limit": 10000,
                    "name": "img/[name].[hash:7].[ext]"
                }
            },
            {
                "test": {},
                "loader": "/Users/liuwang/Desktop/kylin-demo/node_modules/_url-loader@0.5.9@url-loader/index.js",
                "query": {
                    "limit": 10000,
                    "name": "fonts/[name].[hash:7].[ext]"
                }
            },
            {
                "test": {},
                "loader": "/Users/liuwang/Desktop/kylin-demo/node_modules/_webpack-px2rem-loader@0.0.4@webpack-px2rem-loader/index.js",
                "exclude": [
                    "/Users/liuwang/Desktop/kylin-demo/node_modules",
                    "/Users/liuwang/Desktop/kylin-demo/src/components"
                ],
                "include": "/Users/liuwang/Desktop/kylin-demo/src",
                "query": {
                    "basePx": 100,
                    "min": 1,
                    "floatWidth": 3
                }
            },
            {
                "test": {},
                "loader": "/Users/liuwang/Desktop/kylin-demo/node_modules/_webpack-px2rem-loader@0.0.4@webpack-px2rem-loader/index.js",
                "include": "/Users/liuwang/Desktop/kylin-demo/src/components",
                "query": {
                    "basePx": 200,
                    "min": 1,
                    "floatWidth": 3
                }
            },
            {
                "test": {},
                "loader": "svg-sprite-loader",
                "include": [
                    "/Users/liuwang/Desktop/kylin-demo/src/common/img"
                ]
            },
            {
                "test": {},
                "loader": "style-loader!css-loader!stylus-loader"
            }
        ]
    },
    "vue": {
        "preserveWhitespace": true,
        "esModule": true,
        "loaders": {
            "css": "/Users/liuwang/Desktop/kylin-demo/node_modules/_vue-style-loader@1.0.0@vue-style-loader/index.js!css-loader?minimize=false&sourceMap",
            "postcss": "/Users/liuwang/Desktop/kylin-demo/node_modules/_vue-style-loader@1.0.0@vue-style-loader/index.js!css-loader?minimize=false&sourceMap",
            "less": "/Users/liuwang/Desktop/kylin-demo/node_modules/_vue-style-loader@1.0.0@vue-style-loader/index.js!css-loader?minimize=false&sourceMap!less-loader?sourceMap",
            "stylus": {
                "loader": "style-loader!css-loader!stylus-loader",
                "options": {
                    "import": [
                        "/Users/liuwang/Desktop/kylin-demo/src/components/_style/mixin/util.styl",
                        "/Users/liuwang/Desktop/kylin-demo/src/components/_style/global.styl",
                        "/Users/liuwang/Desktop/kylin-demo/src/components/_style/mixin/theme.basic.styl",
                        "/Users/liuwang/Desktop/kylin-demo/src/components/_style/mixin/theme.components.styl"
                    ]
                }
            },
            "style": {
                "loader": "style-loader!css-loader!stylus-loader",
                "options": {
                    "import": [
                        "/Users/liuwang/Desktop/kylin-demo/src/components/_style/mixin/util.styl",
                        "/Users/liuwang/Desktop/kylin-demo/src/components/_style/global.styl",
                        "/Users/liuwang/Desktop/kylin-demo/src/components/_style/mixin/theme.basic.styl",
                        "/Users/liuwang/Desktop/kylin-demo/src/components/_style/mixin/theme.components.styl"
                    ]
                }
            }
        },
        "postcss": [
            null,
            null
        ],
        "componentImport": []
    },
    "plugins": [
        {},
        {
            "resourceJs": {
                "Zepto": "https://a.alipayobjects.com/amui/zepto/1.1.3/zepto.js",
                "FastClick": "http://127.0.0.1:8800/lib/0.1.0/fastclick.js",
                "Vue": "http://127.0.0.1:8800/lib/2.5.13/vue.js",
                "Promise": "https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js",
                "fetch": "https://as.alipayobjects.com/g/component/fetch/1.0.0/fetch.min.js"
            },
            "resourceCss": {}
        },
        {},
        {
            "definitions": {
                "process.env": {
                    "NODE_ENV": "\"development\""
                }
            }
        },
        {},
        {},
        {},
        {
            "options": {
                "template": "/Users/liuwang/Desktop/kylin-demo/node_modules/_@ali_kylin-build@0.1.49-open01@@ali/kylin-build/lib/build/plugin/nunjucks-loader.js!/Users/liuwang/Desktop/kylin-demo/node_modules/_@ali_kylin-build@0.1.49-open01@@ali/kylin-build/lib/build/plugin/nunjucks-template-loader.js?data={}!/Users/liuwang/Desktop/kylin-demo/src/layout/layout.html",
                "filename": "mypage.html",
                "hash": false,
                "inject": true,
                "compile": true,
                "favicon": false,
                "minify": false,
                "cache": true,
                "showErrors": true,
                "chunks": [
                    "mypage"
                ],
                "excludeChunks": [],
                "title": "Webpack App",
                "xhtml": false
            }
        },
        {
            "options": {
                "template": "/Users/liuwang/Desktop/kylin-demo/node_modules/_@ali_kylin-build@0.1.49-open01@@ali/kylin-build/lib/build/plugin/nunjucks-loader.js!/Users/liuwang/Desktop/kylin-demo/node_modules/_@ali_kylin-build@0.1.49-open01@@ali/kylin-build/lib/build/plugin/nunjucks-template-loader.js?data={}!/Users/liuwang/Desktop/kylin-demo/src/layout/layout.html",
                "filename": "targetpage.html",
                "hash": false,
                "inject": true,
                "compile": true,
                "favicon": false,
                "minify": false,
                "cache": true,
                "showErrors": true,
                "chunks": [
                    "targetpage"
                ],
                "excludeChunks": [],
                "title": "Webpack App",
                "xhtml": false
            }
        },
        {
            "options": {
                "template": "/Users/liuwang/Desktop/kylin-demo/node_modules/_@ali_kylin-build@0.1.49-open01@@ali/kylin-build/lib/build/plugin/nunjucks-loader.js!/Users/liuwang/Desktop/kylin-demo/node_modules/_@ali_kylin-build@0.1.49-open01@@ali/kylin-build/lib/build/plugin/nunjucks-template-loader.js?data={}!/Users/liuwang/Desktop/kylin-demo/src/layout/creditCard.html",
                "filename": "creditCard.html",
                "hash": false,
                "inject": true,
                "compile": true,
                "favicon": false,
                "minify": false,
                "cache": true,
                "showErrors": true,
                "chunks": [
                    "creditCard"
                ],
                "excludeChunks": [],
                "title": "Webpack App",
                "xhtml": false
            }
        }
    ],
    "devtool": "eval-module-source-map",
    "entry": {
        "mypage": [
            "/Users/liuwang/Desktop/kylin-demo/node_modules/_@ali_kylin-build@0.1.49-open01@@ali/kylin-build/lib/build/project/server-client",
            "./src/pages/mypage/index.js"
        ],
        "targetpage": [
            "/Users/liuwang/Desktop/kylin-demo/node_modules/_@ali_kylin-build@0.1.49-open01@@ali/kylin-build/lib/build/project/server-client",
            "./src/pages/targetpage/index.js"
        ],
        "creditCard": [
            "/Users/liuwang/Desktop/kylin-demo/node_modules/_@ali_kylin-build@0.1.49-open01@@ali/kylin-build/lib/build/project/server-client",
            "./src/pages/creditCard/index.js"
        ]
    },
    "watch": true,
    "watchOptions": {
        "aggregateTimeout": 300,
        "poll": 1000,
        "ignored": {}
    }
};