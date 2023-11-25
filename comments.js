//create a simple web server
var http = require('http');
var fs = require('fs');
var url = require('url');
var port = 3000;

//create a server
var server = http.createServer(function (req, res) {
  var parsedUrl = url.parse(req.url, true);
  var path = parsedUrl.pathname;
  var query = parsedUrl.query;
  var method = req.method;

  if (path === '/home') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
  } else if (path === '/getData') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
  } else if (path === '/writeData') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('404 Not Found\n');
  }
});

//listen to the port
server.listen(port);
console.log('Server running at http://
