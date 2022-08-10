var express = require('express');
var app = express();
var http = require('http');
var path = require('path');

var port = 3000;
app.use('/', express.static(path.join(__dirname, './client')));
app.use('/@', express.static(path.join(__dirname, './node_modules')));

app.listen(port, () => {
    console.log('Server running on port ' + port);    
});

process.on('uncaughtException', (err) => {
	if(err.errno === 'EADDRINUSE')
		console.log("uncaughtException EADDRINUSE");
	else {
		console.log(err);
	}
	
	process.exit(1);
});