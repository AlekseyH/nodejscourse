var http = require('http');
var fs = require('fs');

http.createServer(function(res,req){

	if(res.url === '/'){
		req.writeHead(200,{'Content-Type' : 'text/html'});
		fs.createReadStream(__dirname + '/template.htm').pipe(req);
	}
	else if(res.url === '/api'){
		req.writeHead(200,{'Content-Type' : 'application/json'});
		person = {
			name : 'Aleksey',
			surname : 'Haitman'
		}

		req.end(JSON.stringify(person))
	}
	else{

		req.writeHead(404);
		req.end();
	}
	

}).listen(1377,'127.0.0.1');