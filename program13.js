var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res){
	if(req.method !== 'GET') return res.end('use get');
	var urls = url.parse(req.url,true);
	res.writeHead(200,{'Content-Type':'application/json'});
	if(urls.pathname === '/api/parsetime'){
		var time = urls.query.iso;
		var _time = new Date(time);
		var objTime = {}
		objTime.hour = _time.getHours();
		objTime.minute = _time.getMinutes();
		objTime.second = _time.getSeconds();
		res.write(JSON.stringify(objTime));
	}
	if(urls.pathname === '/api/unixtime'){
		var time = urls.query.iso;
		var _time = new Date(time);
		var objTime = {}
		objTime.unixtime = _time.getTime();
		res.write(JSON.stringify(objTime));
	}
	res.end();
})	
server.listen(process.argv[2]);