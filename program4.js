var fs = require('fs');
var filePath = process.argv[2];
if(filePath){
	fs.readFile(filePath,{'encoding':'utf8'},function(err,data){
		if(err) throw err;
		var str = data.toString();
		var arr = str.split('\n');
		console.log(arr.length - 1);
	})
}