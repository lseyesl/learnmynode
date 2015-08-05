var numArr = process.argv.slice(2);
var sun = 0;
for(var i = 0 ; i < numArr.length ; i++) {
	sun += Number(numArr[i]);
}
console.log(sun);