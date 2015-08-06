/*
*args 
*@param dir
*@param extname
*@param callback
*/
module.exports = function (dir, extname, callback) {
	var fs = require('fs');
	var path = require('path');
	var flag = false;
	if(extname !== undefined){
		extname = '.'+extname;
		flag = true;
	}
	if ( dir !== undefined ){
		fs.readdir(dir,function(err, list) {
			if(err){
				return callback(err);
			}
			var arr = [];
			for(var i = 0; i < list.length; i++){
				if(flag && path.extname(list[i]) === extname){
					arr.push(path.basename(list[i]));
				}
			}
			callback(null, arr);
		})
	}

}