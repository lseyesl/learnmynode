var net = require('net');
var strftime = require('strftime');
var pro = process.argv[2];
var server = net.createServer(function(socket){
	/*
	socket.on('end',function(){
		return (strftime('%Y-%m-%d %H:%M', new Date())+'\n');
	})
	*/
	socket.end(strftime('%Y-%m-%d %H:%M', new Date())+'\n');
})
server.listen(Number(pro));