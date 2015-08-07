var http = require("http"),
    urls = process.argv.slice(2),
    datas = [];

function getHTML( url, callback ) {
    http.get( url, function( res ) {
        var result = "";
        res.on( "data", function(chunk) { result += chunk; })
           .on( "end", function() { callback( result ); });
   })
}

(function get( p ) {
    if( p === urls.length ) return last();
    getHTML( urls[p], function(res) {
        datas.push( res )
        get( ++p );
    })
    function last() {
        datas.forEach(function(d){ console.log(d) })
    }
})(0);

