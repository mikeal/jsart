var response = require('response')
  , browserify = require('browserify')
  , path = require('path')
  , fs = require('fs')
  , http = require('http')
  ;

function endswith (str, sub) {
  return str.slice(str.length - sub.length) === sub
}

var server = http.createServer(function (req, res) {
  var p = path.join(__dirname, req.url)
  if (endswith(p, '.js')) {
    var b = browserify()
    b.add(p)
    b.bundle({debug: server.debug}).pipe(response.js()).pipe(res)
  } else {
    fs.createReadStream(p).pipe(response()).pipe(res)
  }
})

module.exports = server
