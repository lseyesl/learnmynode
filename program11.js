var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req, res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	var files = fs.createReadStream(process.argv[3]).pipe(res);
})
server.listen(Number(process.argv[2]));