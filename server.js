var http = require('http');
var handler = require('./handler');


var server = http.createServer(handler.handleRequest).listen(3000);