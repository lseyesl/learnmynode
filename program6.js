var promodule = require('./program6_module');
promodule(process.argv[2],process.argv[3],function(err,data){
	if(err){
		console.log(err);
		return ;
	}
	for(var i = 0; i < data.length; i++){
		console.log(data[i]);
	}

})