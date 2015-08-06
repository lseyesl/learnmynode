var http = require('http');
var bl = require('bl')
http.get(process.argv[2],function(res){
	res.pipe(bl(function(err,data){
		if(err){
			console.log(err);
			return false;
		}
		var da = data.toString();
		console.log(da.length);
		console.log(da.toString());
	}))
})