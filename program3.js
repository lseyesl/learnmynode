var fs = require('fs');
var filePath = process.argv[2];
if(filePath){
	var Buffer = fs.readFileSync(filePath);
	var str = Buffer.toString();
	var arr = str.split('\n');
	console.log(arr.length-1);
}else{
	console.log(0);
}

