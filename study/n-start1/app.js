
var express = require('express');

var path = require('path');

var app = express();

var routes = require('./router/index');

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'jade');

app.use('/', routes);

// app.get('/', function(req, res) {

// 	res.send('hello world');
// });

// 监听某个接口
var server = app.listen(8181, function() {

	console.log('I am listening the port of %d', server.address().port);
});


module.exports = app;
