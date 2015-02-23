var express = require('express'),
	request = require('request'),
	app = express();

var proxy = function (req, res) {
	var query = req.path || '/';
	var url = 'http://google.com' + query;
	console.log(url);
	request.get(url).pipe(res);
};

app.get('/*', proxy);

var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('App running at http://%s:%s', host, port);
});