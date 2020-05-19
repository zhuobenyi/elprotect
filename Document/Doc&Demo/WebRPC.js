var webrpc = {
  _readableState: ReadableState {
    objectMode: false,
    highWaterMark: 16384,
    buffer: BufferList { head: null, tail: null, length: 0 },
  length: 0,
  pipes: null,
  pipesCount: 0,
  flowing: true,
  ended: true,
  endEmitted: true,
  reading: false,
  sync: true,
  needReadable: false,
  emittedReadable: false,
  readableListening: false,
  resumeScheduled: false,
  paused: false,
  emitClose: true,
  autoDestroy: false,
  destroyed: false,
  defaultEncoding: 'utf8',
  awaitDrain: 0,
  readingMore: true,
  decoder: null,
  encoding: null
  },
readable: false,
  _events: [Object: null prototype] {
  end: [Function: resetHeadersTimeoutOnReqEnd]
},
_eventsCount: 1,
  _maxListeners: undefined,
    socket: Socket {
  connecting: false,
    _hadError: false,
      _parent: null,
        _host: null,
          _readableState: ReadableState {
    objectMode: false,
      highWaterMark: 16384,
        buffer: BufferList { head: null, tail: null, length: 0 },
    length: 0,
      pipes: null,
        pipesCount: 0,
          flowing: true,
            ended: false,
              endEmitted: false,
                reading: true,
                  sync: false,
                    needReadable: true,
                      emittedReadable: false,
                        readableListening: false,
                          resumeScheduled: false,
                            paused: false,
                              emitClose: false,
                                autoDestroy: false,
                                  destroyed: false,
                                    defaultEncoding: 'utf8',
                                      awaitDrain: 0,
                                        readingMore: false,
                                          decoder: null,
                                            encoding: null
  },
  readable: true,
    _events: [Object: null prototype] {
    end: [Array],
      timeout: [Function: socketOnTimeout],
        data: [Function: bound socketOnData],
          error: [Function: socketOnError],
            close: [Array],
              drain: [Function: bound socketOnDrain],
                resume: [Function: onSocketResume],
                  pause: [Function: onSocketPause]
  },
  _eventsCount: 8,
    _maxListeners: undefined,
      _writableState: WritableState {
    objectMode: false,
      highWaterMark: 16384,
        finalCalled: false,
          needDrain: false,
            ending: false,
              ended: false,
                finished: false,
                  destroyed: false,
                    decodeStrings: false,
                      defaultEncoding: 'utf8',
                        length: 0,
                          writing: false,
                            corked: 0,
                              sync: true,
                                bufferProcessing: false,
                                  onwrite: [Function: bound onwrite],
                                    writecb: null,
                                      writelen: 0,
                                        bufferedRequest: null,
                                          lastBufferedRequest: null,
                                            pendingcb: 0,
                                              prefinished: false,
                                                errorEmitted: false,
                                                  emitClose: false,
                                                    autoDestroy: false,
                                                      bufferedRequestCount: 0,
                                                        corkedRequestsFree: [Object]
  },
  writable: true,
    allowHalfOpen: true,
      _sockname: null,
        _pendingData: null,
          _pendingEncoding: '',
            server: Server {
    _events: [Object: null prototype],
      _eventsCount: 2,
        _maxListeners: undefined,
          _connections: 1,
            _handle: [TCP],
              _usingWorkers: false,
                _workers: [],
                  _unref: false,
                    allowHalfOpen: true,
                      pauseOnConnect: false,
                        httpAllowHalfOpen: false,
                          timeout: 120000,
                            keepAliveTimeout: 5000,
                              maxHeadersCount: null,
                                headersTimeout: 40000,
                                  _connectionKey: '6::::8808',
                                    [Symbol(IncomingMessage)]: [Function: IncomingMessage],
                                      [Symbol(ServerResponse)]: [Function: ServerResponse],
                                        [Symbol(asyncId)]: 4
  },
  _server: Server {
    _events: [Object: null prototype],
      _eventsCount: 2,
        _maxListeners: undefined,
          _connections: 1,
            _handle: [TCP],
              _usingWorkers: false,
                _workers: [],
                  _unref: false,
                    allowHalfOpen: true,
                      pauseOnConnect: false,
                        httpAllowHalfOpen: false,
                          timeout: 120000,
                            keepAliveTimeout: 5000,
                              maxHeadersCount: null,
                                headersTimeout: 40000,
                                  _connectionKey: '6::::8808',
                                    [Symbol(IncomingMessage)]: [Function: IncomingMessage],
                                      [Symbol(ServerResponse)]: [Function: ServerResponse],
                                        [Symbol(asyncId)]: 4
  },
  timeout: 120000,
    parser: HTTPParser {
    '0': [Function: parserOnHeaders],
      '1': [Function: parserOnHeadersComplete],
        '2': [Function: parserOnBody],
          '3': [Function: parserOnMessageComplete],
            '4': [Function: bound onParserExecute],
              _headers: [],
                _url: '',
                  socket: [Circular],
                    incoming: [Circular],
                      outgoing: null,
                        maxHeaderPairs: 2000,
                          _consumed: true,
                            onIncoming: [Function: bound parserOnIncoming],
                              parsingHeadersStart: 1578230317679
  },
  on: [Function: socketListenerWrap],
    addListener: [Function: socketListenerWrap],
      prependListener: [Function: socketListenerWrap],
        _paused: false,
          _httpMessage: ServerResponse {
    _events: [Object: null prototype],
      _eventsCount: 1,
        _maxListeners: undefined,
          outputData: [],
            outputSize: 0,
              writable: true,
                _last: false,
                  chunkedEncoding: false,
                    shouldKeepAlive: true,
                      useChunkedEncodingByDefault: true,
                        sendDate: true,
                          _removedConnection: false,
                            _removedContLen: false,
                              _removedTE: false,
                                _contentLength: null,
                                  _hasBody: true,
                                    _trailer: '',
                                      finished: false,
                                        _headerSent: false,
                                          socket: [Circular],
                                            connection: [Circular],
                                              _header: null,
                                                _onPendingData: [Function: bound updateOutgoingData],
                                                  _sent100: false,
                                                    _expect_continue: false,
                                                      req: [Circular],
                                                        locals: [Object: null prototype] { },
    writeHead: [Function: writeHead],
      end: [Function: end],
        [Symbol(kNeedDrain)]: false,
          [Symbol(isCorked)]: false,
            [Symbol(kOutHeaders)]: [Object: null prototype]
  },
  [Symbol(asyncId)]: 11,
    [Symbol(kHandle)]: TCP {
    reading: true,
      onconnection: null,
        _consumed: true,
          [Symbol(owner)]: [Circular]
  },
  [Symbol(lastWriteQueueSize)]: 0,
    [Symbol(timeout)]: Timeout {
    _idleTimeout: 120000,
      _idlePrev: [TimersList],
        _idleNext: [TimersList],
          _idleStart: 5684,
            _onTimeout: [Function: bound],
              _timerArgs: undefined,
                _repeat: null,
                  _destroyed: false,
                    [Symbol(refed)]: false,
                      [Symbol(asyncId)]: 12,
                        [Symbol(triggerId)]: 11
  },
  [Symbol(kBuffer)]: null,
    [Symbol(kBufferCb)]: null,
      [Symbol(kBufferGen)]: null,
        [Symbol(kBytesRead)]: 0,
          [Symbol(kBytesWritten)]: 0
},
connection: Socket {
  connecting: false,
    _hadError: false,
      _parent: null,
        _host: null,
          _readableState: ReadableState {
    objectMode: false,
      highWaterMark: 16384,
        buffer: BufferList { head: null, tail: null, length: 0 },
    length: 0,
      pipes: null,
        pipesCount: 0,
          flowing: true,
            ended: false,
              endEmitted: false,
                reading: true,
                  sync: false,
                    needReadable: true,
                      emittedReadable: false,
                        readableListening: false,
                          resumeScheduled: false,
                            paused: false,
                              emitClose: false,
                                autoDestroy: false,
                                  destroyed: false,
                                    defaultEncoding: 'utf8',
                                      awaitDrain: 0,
                                        readingMore: false,
                                          decoder: null,
                                            encoding: null
  },
  readable: true,
    _events: [Object: null prototype] {
    end: [Array],
      timeout: [Function: socketOnTimeout],
        data: [Function: bound socketOnData],
          error: [Function: socketOnError],
            close: [Array],
              drain: [Function: bound socketOnDrain],
                resume: [Function: onSocketResume],
                  pause: [Function: onSocketPause]
  },
  _eventsCount: 8,
    _maxListeners: undefined,
      _writableState: WritableState {
    objectMode: false,
      highWaterMark: 16384,
        finalCalled: false,
          needDrain: false,
            ending: false,
              ended: false,
                finished: false,
                  destroyed: false,
                    decodeStrings: false,
                      defaultEncoding: 'utf8',
                        length: 0,
                          writing: false,
                            corked: 0,
                              sync: true,
                                bufferProcessing: false,
                                  onwrite: [Function: bound onwrite],
                                    writecb: null,
                                      writelen: 0,
                                        bufferedRequest: null,
                                          lastBufferedRequest: null,
                                            pendingcb: 0,
                                              prefinishe
    d: false,
      errorEmitted: false,
        emitClose: false,
          autoDestroy: false,
            bufferedRequestCount: 0,
              corkedRequestsFree: [Object]
  },
  writable: true,
    allowHalfOpen: true,
      _sockname: null,
        _pendingData: null,
          _pendingEncoding: '',
            server: Server {
    _events: [Object: null prototype],
      _eventsCount: 2,
        _maxListeners: undefined,
          _connections: 1,
            _handle: [TCP],
              _usingWorkers: false,
                _workers: [],
                  _unref: false,
                    allowHalfOpen: true,
                      pauseOnConnect: false,
                        httpAllowHalfOpen: false,
                          timeout: 120000,
                            keepAliveTimeout: 5000,
                              maxHeadersCount: null,
                                headersTimeout: 40000,
                                  _connectionKey: '6::::8808',
                                    [Symbol(IncomingMessage)]: [Function: IncomingMessage],
                                      [Symbol(ServerResponse)]: [Function: ServerResponse],
                                        [Symbol(asyncId)]: 4
  },
  _server: Server {
    _events: [Object: null prototype],
      _eventsCount: 2,
        _maxListeners: undefined,
          _connections: 1,
            _handle: [TCP],
              _usingWorkers: false,
                _workers: [],
                  _unref: false,
                    allowHalfOpen: true,
                      pauseOnConnect: false,
                        httpAllowHalfOpen: false,
                          timeout: 120000,
                            keepAliveTimeout: 5000,
                              maxHeadersCount: null,
                                headersTimeout: 40000,
                                  _connectionKey: '6::::8808',
                                    [Symbol(IncomingMessage)]: [Function: IncomingMessage],
                                      [Symbol(ServerResponse)]: [Function: ServerResponse],
                                        [Symbol(asyncId)]: 4
  },
  timeout: 120000,
    parser: HTTPParser {
    '0': [Function: parserOnHeaders],
      '1': [Function: parserOnHeadersComplete],
        '2': [Function: parserOnBody],
          '3': [Function: parserOnMessageComplete],
            '4': [Function: bound onParserExecute],
              _headers: [],
                _url: '',
                  socket: [Circular],
                    incoming: [Circular],
                      outgoing: null,
                        maxHeaderPairs: 2000,
                          _consumed: true,
                            onIncoming: [Function: bound parserOnIncoming],
                              parsingHeadersStart: 1578230317679
  },
  on: [Function: socketListenerWrap],
    addListener: [Function: socketListenerWrap],
      prependListener: [Function: socketListenerWrap],
        _paused: false,
          _httpMessage: ServerResponse {
    _events: [Object: null prototype],
      _eventsCount: 1,
        _maxListeners: undefined,
          outputData: [],
            outputSize: 0,
              writable: true,
                _last: false,
                  chunkedEncoding: false,
                    shouldKeepAlive: true,
                      useChunkedEncodingByDefault: true,
                        sendDate: true,
                          _removedConnection: false,
                            _removedContLen: false,
                              _removedTE: false,
                                _contentLength: null,
                                  _hasBody: true,
                                    _trailer: '',
                                      finished: false,
                                        _headerSent: false,
                                          socket: [Circular],
                                            connection: [Circular],
                                              _header: null,
                                                _onPendingData: [Function: bound updateOutgoingData],
                                                  _sent100: false,
                                                    _expect_continue: false,
                                                      req: [Circular],
                                                        locals: [Object: null prototype] { },
    writeHead: [Function: writeHead],
      end: [Function: end],
        [Symbol(kNeedDrain)]: false,
          [Symbol(isCorked)]: false,
            [Symbol(kOutHeaders)]: [Object: null prototype]
  },
  [Symbol(asyncId)]: 11,
    [Symbol(kHandle)]: TCP {
    reading: true,
      onconnection: null,
        _consumed: true,
          [Symbol(owner)]: [Circular]
  },
  [Symbol(lastWriteQueueSize)]: 0,
    [Symbol(timeout)]: Timeout {
    _idleTimeout: 120000,
      _idlePrev: [TimersList],
        _idleNext: [TimersList],
          _idleStart: 5684,
            _onTimeout: [Function: bound],
              _timerArgs: undefined,
                _repeat: null,
                  _destroyed: false,
                    [Symbol(refed)]: false,
                      [Symbol(asyncId)]: 12,
                        [Symbol(triggerId)]: 11
  },
  [Symbol(kBuffer)]: null,
    [Symbol(kBufferCb)]: null,
      [Symbol(kBufferGen)]: null,
        [Symbol(kBytesRead)]: 0,
          [Symbol(kBytesWritten)]: 0
},
httpVersionMajor: 1,
  httpVersionMinor: 1,
    httpVersion: '1.1',
      complete: true,
        headers: {
  uniformgateway: 'https://cn-hangzhou-component-gw.cloud.alipay.com/mgw.htm',
    mpaascomponentversion: '1.0.0.190909101115',
      'mgw-traceid': '0a1d75d11578230317038640530556',
        remote_addr: '117.101.110.22',
          remoteip: '117.101.110.22',
            'accept-language': 'zh-cn',
              cookie: 'connect.sid=s%3A5XMlKqysKpRom1oZQmpRL2f-7wOgFFkw.Xn3E1gMdK4KR1gbhrSZiyB%2FAKoL9OUBlSmO6ENjhe%2BU',
                sign: '968c565fad74f4f52054c16c75382fd2',
                  remote_port: '46075',
                    'x-forwarded-for': '117.101.110.22, 100.97.91.26, 101.37.80.12',
                      platform: 'IOS',
                        accept: '*/*',
                          'operation-type': 'AcctLost.do',
                            appid: '3CD84AF031518',
                              'content-type': 'application/json;charset=UTF-8',
                                'x-forwarded-by': '10.29.117.209:80',
                                  'accept-encoding': 'gzip, deflate, br',
                                    did: 'Xg7v2EBqoLoDAFDc5l4UVB0K',
                                      workspaceid: 'default',
                                        ts: 'Mzrst/L',
                                          'user-agent': 'CEB_MPAAS/1 CFNetwork/1121.2.2 Darwin/19.2.0',
                                            'content-length': '0',
                                              host: '276f2c4f.ngrok.io'
},
rawHeaders: [
  'uniformgateway',
  'https://cn-hangzhou-component-gw.cloud.alipay.com/mgw.htm',
  'mpaascomponentversion',
  '1.0.0.190909101115',
  'mgw-traceid',
  '0a1d75d11578230317038640530556',
  'remote_addr',
  '117.101.110.22',
  'remoteip',
  '117.101.110.22',
  'accept-language',
  'zh-cn',
  'cookie',
  'connect.sid=s%3A5XMlKqysKpRom1oZQmpRL2f-7wOgFFkw.Xn3E1gMdK4KR1gbhrSZiyB%2FAKoL9OUBlSmO6ENjhe%2BU',
  'sign',
  '968c565fad74f4f52054c16c75382fd2',
  'remote_port',
  '46075',
  'x-forwarded-for',
  '117.101.110.22, 100.97.91.26',
  'platform',
  'IOS',
  'accept',
  '*/*',
  'operation-type',
  'AcctLost.do',
  'appid',
  '3CD84AF031518',
  'content-type',
  'application/json;charset=UTF-8',
  'x-forwarded-by',
  '10.29.117.209:80',
  'accept-encoding',
  'gzip, deflate, br',
  'did',
  'Xg7v2EBqoLoDAFDc5l4UVB0K',
  'workspaceid',
  'default',
  'ts',
  'Mzrst/L',
  'user-agent',
  'CEB_MPAAS/1 CFNetwork/1121.2.2 Darwin/19.2.0',
  'Content-Length',
  '0',
  'Host',
  '276f2c4f.ngrok.io',
  'X-Forwarded-For',
  '101.37.80.12'
],
  trailers: { },
rawTrailers: [],
  aborted: false,
    upgrade: false,
      url: '/pweb/AcctLost.do?key1=value1',
        method: 'POST',
          statusCode: null,
            statusMessage: null,
              client: Socket {
  connecting: false,
    _hadError: false,
      _parent: null,
        _host: null,
          _readableState: ReadableState {
    objectMode: false,
      highWaterMark: 16384,
        buffer: BufferList { head: null, tail: null, length: 0 },
    length: 0,
      pipes: null,
        pipesCount: 0,
          flowing: true,
            ended: false,
              endEmitted: false,
                reading: true,
                  sync: false,
                    needReadable: true,
                      emittedReadable: false,
                        readableListening: false,
                          resumeScheduled: false,
                            paused: false,
                              emitClose: false,
                                autoDestroy: false,
                                  destroyed: false,
                                    defaultEncoding: 'utf8',
                                      awaitDrain: 0,
                                        readingMore: false,
                                          decoder: null,
                                            encoding: null
  },
  readable: true,
    _events: [Object: null prototype] {
    end: [Array],
      timeout: [Function: socketOnTimeout],
        data: [Function: bound socketOnData],
          error: [Function: socketOnError],
            close: [Array],
              drain: [Function: bound socketOnDrain],
                resume: [Function: onSocketResume],
                  pause: [Function: onSocketPause]
  },
  _eventsCount: 8,
    _maxListeners: undefined,
      _writableState: WritableState {
    objectMode: false,
      highWaterMark: 16384,
        finalCalled: false,
          needDrain: false,
            ending: false,
              ended: false,
                finished: false,
                  destroyed: false,
                    decodeStrings: false,
                      defaultEncoding: 'utf8',
                        length: 0,
                          writing: false,
                            corked: 0,
                              sync: true,
                                bufferProcessing: false,
                                  onwrite: [Function: bound onwrite],
                                    writecb: null,
                                      writelen: 0,
                                        bufferedRequest: null,
                                          lastBufferedRequest: null,
                                            pendingcb: 0,
                                              prefinished: false,
                                                errorEmitted: false,
                                                  emitClose: false,
                                                    autoDestroy: false,
                                                      bufferedRe
    questCount: 0,
      corkedRequestsFree: [Object]
  },
  writable: true,
    allowHalfOpen: true,
      _sockname: null,
        _pendingData: null,
          _pendingEncoding: '',
            server: Server {
    _events: [Object: null prototype],
      _eventsCount: 2,
        _maxListeners: undefined,
          _connections: 1,
            _handle: [TCP],
              _usingWorkers: false,
                _workers: [],
                  _unref: false,
                    allowHalfOpen: true,
                      pauseOnConnect: false,
                        httpAllowHalfOpen: false,
                          timeout: 120000,
                            keepAliveTimeout: 5000,
                              maxHeadersCount: null,
                                headersTimeout: 40000,
                                  _connectionKey: '6::::8808',
                                    [Symbol(IncomingMessage)]: [Function: IncomingMessage],
                                      [Symbol(ServerResponse)]: [Function: ServerResponse],
                                        [Symbol(asyncId)]: 4
  },
  _server: Server {
    _events: [Object: null prototype],
      _eventsCount: 2,
        _maxListeners: undefined,
          _connections: 1,
            _handle: [TCP],
              _usingWorkers: false,
                _workers: [],
                  _unref: false,
                    allowHalfOpen: true,
                      pauseOnConnect: false,
                        httpAllowHalfOpen: false,
                          timeout: 120000,
                            keepAliveTimeout: 5000,
                              maxHeadersCount: null,
                                headersTimeout: 40000,
                                  _connectionKey: '6::::8808',
                                    [Symbol(IncomingMessage)]: [Function: IncomingMessage],
                                      [Symbol(ServerResponse)]: [Function: ServerResponse],
                                        [Symbol(asyncId)]: 4
  },
  timeout: 120000,
    parser: HTTPParser {
    '0': [Function: parserOnHeaders],
      '1': [Function: parserOnHeadersComplete],
        '2': [Function: parserOnBody],
          '3': [Function: parserOnMessageComplete],
            '4': [Function: bound onParserExecute],
              _headers: [],
                _url: '',
                  socket: [Circular],
                    incoming: [Circular],
                      outgoing: null,
                        maxHeaderPairs: 2000,
                          _consumed: true,
                            onIncoming: [Function: bound parserOnIncoming],
                              parsingHeadersStart: 1578230317679
  },
  on: [Function: socketListenerWrap],
    addListener: [Function: socketListenerWrap],
      prependListener: [Function: socketListenerWrap],
        _paused: false,
          _httpMessage: ServerResponse {
    _events: [Object: null prototype],
      _eventsCount: 1,
        _maxListeners: undefined,
          outputData: [],
            outputSize: 0,
              writable: true,
                _last: false,
                  chunkedEncoding: false,
                    shouldKeepAlive: true,
                      useChunkedEncodingByDefault: true,
                        sendDate: true,
                          _removedConnection: false,
                            _removedContLen: false,
                              _removedTE: false,
                                _contentLength: null,
                                  _hasBody: true,
                                    _trailer: '',
                                      finished: false,
                                        _headerSent: false,
                                          socket: [Circular],
                                            connection: [Circular],
                                              _header: null,
                                                _onPendingData: [Function: bound updateOutgoingData],
                                                  _sent100: false,
                                                    _expect_continue: false,
                                                      req: [Circular],
                                                        locals: [Object: null prototype] { },
    writeHead: [Function: writeHead],
      end: [Function: end],
        [Symbol(kNeedDrain)]: false,
          [Symbol(isCorked)]: false,
            [Symbol(kOutHeaders)]: [Object: null prototype]
  },
  [Symbol(asyncId)]: 11,
    [Symbol(kHandle)]: TCP {
    reading: true,
      onconnection: null,
        _consumed: true,
          [Symbol(owner)]: [Circular]
  },
  [Symbol(lastWriteQueueSize)]: 0,
    [Symbol(timeout)]: Timeout {
    _idleTimeout: 120000,
      _idlePrev: [TimersList],
        _idleNext: [TimersList],
          _idleStart: 5684,
            _onTimeout: [Function: bound],
              _timerArgs: undefined,
                _repeat: null,
                  _destroyed: false,
                    [Symbol(refed)]: false,
                      [Symbol(asyncId)]: 12,
                        [Symbol(triggerId)]: 11
  },
  [Symbol(kBuffer)]: null,
    [Symbol(kBufferCb)]: null,
      [Symbol(kBufferGen)]: null,
        [Symbol(kBytesRead)]: 0,
          [Symbol(kBytesWritten)]: 0
},
_consuming: false,
  _dumped: false,
    next: [Function: next],
      baseUrl: '',
        originalUrl: '/pweb/AcctLost.do?key1=value1',
          _parsedUrl: Url {
  protocol: null,
    slashes: null,
      auth: null,
        host: null,
          port: null,
            hostname: null,
              hash: null,
                search: '?key1=value1',
                  query: 'key1=value1',
                    pathname: '/pweb/AcctLost.do',
                      path: '/pweb/AcctLost.do?key1=value1',
                        href: '/pweb/AcctLost.do?key1=value1',
                          _raw: '/pweb/AcctLost.do?key1=value1'
},
params: { },
query: { key1: 'value1' },
res: ServerResponse {
  _events: [Object: null prototype] { finish: [Function: bound resOnFinish] },
  _eventsCount: 1,
    _maxListeners: undefined,
      outputData: [],
        outputSize: 0,
          writable: true,
            _last: false,
              chunkedEncoding: false,
                shouldKeepAlive: true,
                  useChunkedEncodingByDefault: true,
                    sendDate: true,
                      _removedConnection: false,
                        _removedContLen: false,
                          _removedTE: false,
                            _contentLength: null,
                              _hasBody: true,
                                _trailer: '',
                                  finished: false,
                                    _headerSent: false,
                                      socket: Socket {
    connecting: false,
      _hadError: false,
        _parent: null,
          _host: null,
            _readableState: [ReadableState],
              readable: true,
                _events: [Object: null prototype],
                  _eventsCount: 8,
                    _maxListeners: undefined,
                      _writableState: [WritableState],
                        writable: true,
                          allowHalfOpen: true,
                            _sockname: null,
                              _pendingData: null,
                                _pendingEncoding: '',
                                  server: [Server],
                                    _server: [Server],
                                      timeout: 120000,
                                        parser: [HTTPParser],
                                          on: [Function: socketListenerWrap],
                                            addListener: [Function: socketListenerWrap],
                                              prependListener: [Function: socketListenerWrap],
                                                _paused: false,
                                                  _httpMessage: [Circular],
                                                    [Symbol(asyncId)]: 11,
                                                      [Symbol(kHandle)]: [TCP],
                                                        [Symbol(lastWriteQueueSize)]: 0,
                                                          [Symbol(timeout)]: Timeout {
      _idleTimeout: 120000,
        _idlePrev: [TimersList],
          _idleNext: [TimersList],
            _idleStart: 5684,
              _onTimeout: [Function: bound],
                _timerArgs: undefined,
                  _repeat: null,
                    _destroyed: false,
                      [Symbol(refed)]: false,
                        [Symbol(asyncId)]: 12,
                          [Symbol(triggerId)]: 11
    },
    [Symbol(kBuffer)]: null,
      [Symbol(kBufferCb)]: null,
        [Symbol(kBufferGen)]: null,
          [Symbol(kBytesRead)]: 0,
            [Symbol(kBytesWritten)]: 0
  },
  connection: Socket {
    connecting: false,
      _hadError: false,
        _parent: null,
          _host: null,
            _readableState: [ReadableState],
              readable: true,
                _events: [Object: null prototype],
                  _eventsCount: 8,
                    _maxListeners: undefined,
                      _writableState: [WritableState],
                        writable: true,
                          allowHalfOpen: true,
                            _sockname: null,
                              _pendingData: null,
                                _pendingEncoding: '',
                                  server: [Server],
                                    _server: [Server],
                                      timeout: 120000,
                                        parser: [HTTPParser],
                                          on: [Function: socketListenerWrap],
                                            addListener: [Function: socketListenerWrap],
                                              prependListener: [Function: socketListenerWrap],
                                                _paused: false,
                                                  _httpMessage: [Circular],
                                                    [Symbol(asyncId)]: 11,
                                                      [Symbol(kHandle)]: [TCP],
                                                        [Symbol(lastWriteQueueSize)]: 0,
                                                          [Symbol(timeout)]: Timeout {
      _idleTimeout: 120000,
        _idlePrev: [TimersList],
          _idleNext: [TimersList],
            _idleStart: 5684,
              _onTimeout: [Function: bound],
                _timerArgs: undefined,
                  _repeat: null,
                    _destroyed: false,
                      [Symbol(refed)]: false,
                        [Symbol(asyncId)]: 12,
                          [Symbol(triggerId)]: 11
    },
    [Symbol(kBuffer)]: null,
      [Symbol(kBufferCb)]: null,
        [Symbol(kBufferGen)]: null,
          [Symbol(kBytesRead)]: 0,
            [Symbol(kBytesWritten)]: 0
  },
  _header: null,
    _onPendingData: [Function: bound updateOutgoingData],
      _sent100: false,
        _expect_continue: false,
          req: [Circular],
            locals: [Object: null prototype] { },
  writeHead: [Function: writeHead],
    end: [Function: end],
      [Symbol(kNeedDrain)]: false,
        [Symbol(isCorked)]: false,
          [Symbol(kOutHeaders)]: [Object: null prototype] { 'x-powered-by': [Array] }
},
body: { },
_body: true,
  length: undefined,
    secret: 'MAGICString',
      cookies: { },
signedCookies: [Object: null
 prototype] { 'connect.sid': false },
_parsedOriginalUrl: Url {
  protocol: null,
    slashes: null,
      auth: null,
        host: null,
          port: null,
            hostname: null,
              hash: null,
                search: '?key1=value1',
                  query: 'key1=value1',
                    pathname: '/pweb/AcctLost.do',
                      path: '/pweb/AcctLost.do?key1=value1',
                        href: '/pweb/AcctLost.do?key1=value1',
                          _raw: '/pweb/AcctLost.do?key1=value1'
},
sessionStore: MemoryStore {
  _events: [Object: null prototype] {
    disconnect: [Function: ondisconnect],
      connect: [Function: onconnect]
  },
  _eventsCount: 2,
    _maxListeners: undefined,
      sessions: [Object: null prototype] { },
  generate: [Function]
},
sessionID: 'x1eP3J5-l4NUnMI-1Ar5L2MGz6n9_fdf',
  session: Session {
  cookie: { path: '/', _expires: null, originalMaxAge: null, httpOnly: true }
}
}