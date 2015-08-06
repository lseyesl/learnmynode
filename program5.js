var fs = require('fs');
var path = require('path');
var _path = process.argv[2];
var _exname = process.argv[3];
//console.log(_path,_exname);
var falg = false;
if(_exname !== undefined){
	_exname = '.' + _exname;
	falg = true;
}
if( _path !== undefined){
	fs.readdir( _path, function(err, list) {

		for(var i = 0; i < list.length; i++){
			if(falg && path.extname(list[i]) === _exname){
				console.log(path.basename(list[i]));
			}
		}
	})

}
