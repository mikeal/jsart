var server = require('./server')
  , colors = require('colors')
  ;

server.debug = true

server.on('request', function (req, resp) {
  var length = 0
    , _write = resp.write
    , _end = resp.end
    ;
  resp.write = function (chunk) {
    length += chunk.length
    _write.apply(resp, arguments)
  }

  resp.end = function () {
    console.log(req.method.green, req.url.green, resp.statusCode.toString().red, length.toString().magenta)
    _end.apply(resp, arguments)
  }
})

server.listen(8080, function () {
  console.log('http://localhost:8080/')
})
