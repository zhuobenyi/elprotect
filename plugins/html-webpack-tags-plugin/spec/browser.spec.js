/* eslint-env jasmine */
const path = require('path');
const fs = require('fs');
const https = require('https');
const http = require('http');

require('jasmine-expect');
const { addMatchers } = require('add-matchers');

const matchersByName = {
  toBeTag (tagProperties, actual) {
    const node = actual.length > 0 ? actual[0] : actual;
    if (!node || node.tagName !== tagProperties.tagName) {
      return false;
    }
    if (tagProperties.attributes) {
      const tagAttrs = tagProperties.attributes;
      const nodeAttrs = node.attribs || {};
      return !Object.keys(tagAttrs).some(tagAttr => tagAttrs[tagAttr] !== nodeAttrs[tagAttr]);
    } else {
      return true;
    }
  }
};

addMatchers(matchersByName);

const puppeteer = require('puppeteer');
const express = require('express');
const cheerio = require('cheerio');
const webpack = require('webpack');
const rimraf = require('rimraf');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTagsPlugin = require('../');

const SERVER_HOST = 'localhost';
const SERVER_PORT = '9119';

const OUTPUT_FILENAME = '[name].js';

const EXTERNALS_OUTPUT_DIR = path.join(__dirname, 'dist');

const EXTERNALS_PATH = path.join(__dirname, 'fixtures', 'external');
const EXTERNALS_MODULES_PATH = path.join(EXTERNALS_PATH, 'node_modules');
const EXTERNALS_ENTRY = path.join(EXTERNALS_PATH, 'external-entry.js');
const EXTERNALS_STYLE = path.join(EXTERNALS_PATH, 'external-style.css');
const EXTERNALS_TEMPLATE_FILE = path.join(EXTERNALS_PATH, 'index.html');

const WEBPACK_CSS_RULE = { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] };

const WEBPACK_ENTRY = {
  app: EXTERNALS_ENTRY,
  style: EXTERNALS_STYLE
};

const WEBPACK_OUTPUT = {
  path: EXTERNALS_OUTPUT_DIR,
  filename: OUTPUT_FILENAME
};

const WEBPACK_MODULE = {
  rules: [WEBPACK_CSS_RULE]
};

const createWebpackConfig = ({
  webpackEntry,
  webpackOutput,
  webpackPublicPath,
  copyOptions,
  htmlOptions,
  options,
  minimize = true
}) => {
  const createTagsPlugin = opts => new HtmlWebpackTagsPlugin(opts);

  const copyPlugins = copyOptions !== false ? [new CopyWebpackPlugin(copyOptions)] : [];
  const htmlPlugins = htmlOptions !== false ? [new HtmlWebpackPlugin(htmlOptions)] : [];
  const tagsPlugins = Array.isArray(options) ? options.map(createTagsPlugin) : options !== false ? [createTagsPlugin(options)] : [];

  return {
    entry: {
      ...WEBPACK_ENTRY,
      ...(webpackEntry !== undefined ? { app: webpackEntry } : {})
    },
    output: {
      ...WEBPACK_OUTPUT,
      ...(webpackOutput !== undefined ? { path: webpackOutput } : {}),
      ...(webpackPublicPath !== undefined ? { publicPath: webpackPublicPath } : {})
    },
    module: { ...WEBPACK_MODULE },
    plugins: [
      new MiniCssExtractPlugin({ filename: '[name].css' }),
      ...copyPlugins,
      ...htmlPlugins,
      ...tagsPlugins
    ],
    optimization: {
      minimize
    }
  };
};

async function startServer ({ serverPort, secure = false, path = EXTERNALS_OUTPUT_DIR }) {
  let theServer;
  function closeServer () {
    return new Promise((resolve, reject) => {
      try {
        theServer.close(() => resolve());
      } catch (error) {
        reject(error);
      }
    });
  }
  const app = express();
  app.use(express.static(path));

  if (secure) {
    const { keyPath, certPath } = secure;
    theServer = https.createServer({ key: fs.readFileSync(keyPath), cert: fs.readFileSync(certPath) }, app);
  } else {
    theServer = http.createServer(app);
  }

  return new Promise((resolve, reject) => {
    theServer = theServer.listen(serverPort, error => {
      if (error) {
        reject(error);
      } else {
        // theServer.keepAliveTimeout = 0; // FIX for Node > 8.0 < 8.1.1 issue: https://github.com/glenjamin/webpack-hot-middleware/issues/210
        resolve({ closeServer });
      }
    });
  });
}

async function getBrowserContent (options) {
  const { serverHost, serverPort, waitForSelector } = options;
  const { closeServer } = await startServer(options);
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', err => {
    errors.push(err);
  });
  await page.goto('http://' + serverHost + ':' + serverPort);
  if (waitForSelector !== undefined) {
    await page.waitForSelector(waitForSelector);
  }
  const content = await page.content();
  await browser.close();
  await closeServer();
  return {
    content,
    errors
  };
}

describe('browser', () => {
  beforeEach(done => {
    rimraf(EXTERNALS_OUTPUT_DIR, done);
  });

  it('should render correctly to the browser when an external script is used and append is set to false', done => {
    webpack(createWebpackConfig({
      copyOptions: [{ from: path.join(EXTERNALS_MODULES_PATH, 'fake-b-package', 'fake-b-bundle.js'), to: 'fake-b-bundle.js' }],
      htmlOptions: {
        template: EXTERNALS_TEMPLATE_FILE
      },
      options: {
        scripts: {
          path: 'fake-b-bundle.js',
          external: {
            packageName: 'fake-b-package',
            variableName: 'FakeB'
          }
        },
        links: {
          path: 'data:;base64,=',
          attributes: {
            rel: 'icon'
          }
        },
        append: false,
        publicPath: false,
        hash: false
      }
    }), (err, result) => {
      expect(err).toBeFalsy();
      expect(JSON.stringify(result.compilation.errors)).toBe('[]');

      getBrowserContent({ serverHost: SERVER_HOST, serverPort: SERVER_PORT })
        .then(({ content, errors }) => {
          expect(errors.length).toBe(0);
          const $ = cheerio.load(content);
          const divs = $('div.fake');

          expect(divs.length).toBe(3);
          expect($(divs.get(0)).contents().toString()).toBe('% webpack fakeA %');
          expect($(divs.get(1)).contents().toString()).toBe('% external fakeB %');
          expect($(divs.get(2)).contents().toString()).toBe('% webpack fakeC % - depends on - % external fakeB %');

          done();
        });
    });
  });

  it('should throw an error in the browser when an external script is used and append is set to true', done => {
    webpack(createWebpackConfig({
      copyOptions: [{ from: path.join(EXTERNALS_MODULES_PATH, 'fake-b-package', 'fake-b-bundle.js'), to: 'fake-b-bundle.js' }],
      htmlOptions: {
        template: EXTERNALS_TEMPLATE_FILE
      },
      options: {
        scripts: {
          path: 'fake-b-bundle.js',
          external: {
            packageName: 'fake-b-package',
            variableName: 'FakeB'
          }
        },
        links: {
          path: 'data:;base64,=',
          attributes: {
            rel: 'icon'
          }
        },
        append: true,
        prependExternals: false,
        publicPath: false,
        hash: false
      }
    }), (err, result) => {
      expect(err).toBeFalsy();
      expect(JSON.stringify(result.compilation.errors)).toBe('[]');

      getBrowserContent({ serverHost: SERVER_HOST, serverPort: SERVER_PORT })
        .then(({ content, errors }) => {
          expect(errors.length).toBe(1);
          expect(errors[0].message).toContain('FakeB is not defined');

          const $ = cheerio.load(content);
          const divs = $('div.fake');
          expect(divs.length).toBe(0);

          done();
        });
    });
  });

  it('should render correctly to the browser when a non-webpack external script is used with append set to false', done => {
    webpack(createWebpackConfig({
      copyOptions: [
        {
          from: path.join(EXTERNALS_MODULES_PATH, 'fake-b-package', 'fake-b-bundle.js'),
          to: 'fake-b-bundle.js'
        },
        {
          from: path.join(EXTERNALS_MODULES_PATH, 'fake-other-package', 'fake-other-bundle.js'),
          to: 'fake-other-bundle.js'
        }
      ],
      htmlOptions: {
        template: EXTERNALS_TEMPLATE_FILE
      },
      options: [
        {
          scripts: [
            {
              path: 'fake-b-bundle.js',
              external: {
                packageName: 'fake-b-package',
                variableName: 'FakeB'
              }
            }
          ],
          links: {
            path: 'data:;base64,=',
            attributes: {
              rel: 'icon'
            }
          },
          append: false,
          prependExternals: false,
          publicPath: false,
          hash: false
        },
        {
          scripts: {
            path: 'fake-other-bundle.js',
            external: {
              packageName: 'fake-other-package',
              variableName: 'FakeOther'
            }
          },
          append: false,
          prependExternals: false,
          publicPath: false,
          hash: false
        }
      ]
    }), (err, result) => {
      expect(err).toBeFalsy();
      expect(JSON.stringify(result.compilation.errors)).toBe('[]');

      getBrowserContent({
        serverHost: SERVER_HOST,
        serverPort: SERVER_PORT
        // waitForSelector: '.fake-other'
      })
        .then(({ content, errors }) => {
          expect(errors.length).toBe(0);
          const $ = cheerio.load(content);
          const divs = $('div.fake');

          expect(divs.length).toBe(3);
          expect($(divs.get(0)).contents().toString()).toBe('% webpack fakeA %');
          expect($(divs.get(1)).contents().toString()).toBe('% external fakeB %');
          expect($(divs.get(2)).contents().toString()).toBe('% webpack fakeC % - depends on - % external fakeB %');

          done();
        });
    });
  });

  it('should render correctly to the browser when a non-webpack external script is used with append set to true', done => {
    webpack(createWebpackConfig({
      copyOptions: [
        {
          from: path.join(EXTERNALS_MODULES_PATH, 'fake-b-package', 'fake-b-bundle.js'),
          to: 'fake-b-bundle.js'
        },
        {
          from: path.join(EXTERNALS_MODULES_PATH, 'fake-other-package', 'fake-other-bundle.js'),
          to: 'fake-other-bundle.js'
        }
      ],
      htmlOptions: {
        template: EXTERNALS_TEMPLATE_FILE
      },
      options: [
        {
          scripts: [
            {
              path: 'fake-b-bundle.js',
              external: {
                packageName: 'fake-b-package',
                variableName: 'FakeB'
              }
            }
          ],
          links: {
            path: 'data:;base64,=',
            attributes: {
              rel: 'icon'
            }
          },
          prependExternals: false,
          append: false,
          publicPath: false,
          hash: false
        },
        {
          scripts: {
            path: 'fake-other-bundle.js',
            external: {
              packageName: 'fake-other-package',
              variableName: 'FakeOther'
            }
          },
          prependExternals: false,
          append: true,
          publicPath: false,
          hash: false
        }
      ]
    }), (err, result) => {
      expect(err).toBeFalsy();
      expect(JSON.stringify(result.compilation.errors)).toBe('[]');

      getBrowserContent({
        serverHost: SERVER_HOST,
        serverPort: SERVER_PORT
        // waitForSelector: '.fake-other'
      })
        .then(({ content, errors }) => {
          expect(errors.length).toBe(0);
          const $ = cheerio.load(content);
          const divs = $('div.fake');

          expect(divs.length).toBe(1);
          expect($(divs.get(0)).contents().toString()).toBe('% fakeOther %');

          done();
        });
    });
  });

  it('should render correctly to the browser when two external scripts are used', done => {
    webpack(createWebpackConfig({
      copyOptions: [
        {
          from: path.join(EXTERNALS_MODULES_PATH, 'fake-b-package', 'fake-b-bundle.js'),
          to: 'fake-b-bundle.js'
        },
        {
          from: path.join(EXTERNALS_MODULES_PATH, 'fake-a-package', 'fake-a-bundle.js'),
          to: 'fake-a-bundle.js'
        }
      ],
      htmlOptions: {
        template: EXTERNALS_TEMPLATE_FILE
      },
      options: {
        scripts: [
          {
            path: 'fake-b-bundle.js',
            external: {
              packageName: 'fake-b-package',
              variableName: 'FakeB'
            }
          },
          {
            path: 'fake-a-bundle.js',
            external: {
              packageName: 'fake-a-package',
              variableName: 'FakeA'
            }
          }
        ],
        links: {
          path: 'data:;base64,=',
          attributes: {
            rel: 'icon'
          }
        },
        append: false,
        publicPath: false,
        hash: false
      }
    }), (err, result) => {
      expect(err).toBeFalsy();
      expect(JSON.stringify(result.compilation.errors)).toBe('[]');

      getBrowserContent({ serverHost: SERVER_HOST, serverPort: SERVER_PORT })
        .then(({ content, errors }) => {
          expect(errors.length).toBe(0);
          const $ = cheerio.load(content);
          const divs = $('div.fake');

          expect(divs.length).toBe(3);
          expect($(divs.get(0)).contents().toString()).toBe('% external fakeA %');
          expect($(divs.get(1)).contents().toString()).toBe('% external fakeB %');
          expect($(divs.get(2)).contents().toString()).toBe('% webpack fakeC % - depends on - % external fakeB %');

          done();
        });
    });
  });

  it('should render correctly to the browser when two dependency linked scripts are used', done => {
    webpack(createWebpackConfig({
      copyOptions: [
        {
          from: path.join(EXTERNALS_MODULES_PATH, 'fake-b-package', 'fake-b-bundle.js'),
          to: 'fake-b-bundle.js'
        },
        {
          from: path.join(EXTERNALS_MODULES_PATH, 'fake-c-package', 'fake-c-bundle.js'),
          to: 'fake-c-bundle.js'
        }
      ],
      htmlOptions: {
        template: EXTERNALS_TEMPLATE_FILE
      },
      options: {
        scripts: [
          {
            path: 'fake-b-bundle.js',
            external: {
              packageName: 'fake-b-package',
              variableName: 'FakeB'
            }
          },
          {
            path: 'fake-c-bundle.js',
            external: {
              packageName: 'fake-c-package',
              variableName: 'FakeC'
            }
          }
        ],
        links: {
          path: 'data:;base64,=',
          attributes: {
            rel: 'icon'
          }
        },
        append: false,
        publicPath: false,
        hash: false
      }
    }), (err, result) => {
      expect(err).toBeFalsy();
      expect(JSON.stringify(result.compilation.errors)).toBe('[]');

      getBrowserContent({ serverHost: SERVER_HOST, serverPort: SERVER_PORT })
        .then(({ content, errors }) => {
          expect(errors.length).toBe(0);
          const $ = cheerio.load(content);
          const divs = $('div.fake');

          expect(divs.length).toBe(3);
          expect($(divs.get(0)).contents().toString()).toBe('% webpack fakeA %');
          expect($(divs.get(1)).contents().toString()).toBe('% external fakeB %');
          expect($(divs.get(2)).contents().toString()).toBe('% external fakeC % - depends on - % external fakeB %');

          done();
        });
    });
  });

  it('should throw an error in the browser when two dependency linked scripts are specified in the wrong order', done => {
    webpack(createWebpackConfig({
      copyOptions: [
        {
          from: path.join(EXTERNALS_MODULES_PATH, 'fake-b-package', 'fake-b-bundle.js'),
          to: 'fake-b-bundle.js'
        },
        {
          from: path.join(EXTERNALS_MODULES_PATH, 'fake-c-package', 'fake-c-bundle.js'),
          to: 'fake-c-bundle.js'
        }
      ],
      htmlOptions: {
        template: EXTERNALS_TEMPLATE_FILE
      },
      options: {
        scripts: [
          {
            path: 'fake-c-bundle.js',
            external: {
              packageName: 'fake-c-package',
              variableName: 'FakeC'
            }
          },
          {
            path: 'fake-b-bundle.js',
            external: {
              packageName: 'fake-b-package',
              variableName: 'FakeB'
            }
          }
        ],
        links: {
          path: 'data:;base64,=',
          attributes: {
            rel: 'icon'
          }
        },
        append: false,
        publicPath: false,
        hash: false
      }
    }), (err, result) => {
      expect(err).toBeFalsy();
      expect(JSON.stringify(result.compilation.errors)).toBe('[]');

      getBrowserContent({ serverHost: SERVER_HOST, serverPort: SERVER_PORT })
        .then(({ content, errors }) => {
          expect(errors.length).toBe(1);
          expect(errors[0].message).toContain('Cannot read property \'fakeB\' of undefined');

          const $ = cheerio.load(content);
          const divs = $('div.fake');
          expect(divs.length).toBe(0);

          done();
        });
    });
  });

  it('should throw an error the browser when one linked script is used that is dependent on a webpack bundled package and append is set to false', done => {
    webpack(createWebpackConfig({
      copyOptions: [{
        from: path.join(EXTERNALS_MODULES_PATH, 'fake-c-package', 'fake-c-bundle.js'),
        to: 'fake-c-bundle.js'
      }],
      htmlOptions: {
        template: EXTERNALS_TEMPLATE_FILE
      },
      options: {
        scripts: [
          {
            path: 'fake-c-bundle.js',
            external: {
              packageName: 'fake-c-package',
              variableName: 'FakeC'
            }
          }
        ],
        links: {
          path: 'data:;base64,=',
          attributes: {
            rel: 'icon'
          }
        },
        append: false,
        publicPath: false,
        hash: false
      }
    }), (err, result) => {
      expect(err).toBeFalsy();
      expect(JSON.stringify(result.compilation.errors)).toBe('[]');

      getBrowserContent({ serverHost: SERVER_HOST, serverPort: SERVER_PORT })
        .then(({ content, errors }) => {
          expect(errors.length).toBe(1);
          expect(errors[0].message).toContain('Cannot read property \'fakeB\' of undefined');

          const $ = cheerio.load(content);
          const divs = $('div.fake');
          expect(divs.length).toBe(0);

          done();
        });
    });
  });
});
