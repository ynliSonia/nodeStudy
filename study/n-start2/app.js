
var express = require('express');

var path = require('path');

var app = express();

var routes = require('./router/index');



app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'xtpl');

app.use('/assets', express.static(__dirname + '/statics'));

app.use('/', routes);

// app.get('/', function(req, res) {

// 	res.send('hello world');
// });

// function test() {


// 	console.log('process NODE_ENV', process.env.NODE_ENV);

// 	app.set('env', 'production');

// 	console.log(app.get('env'));

// 	// 只用于开发环境
// 	if ('development' == app.get('env')) {
// 	  console.log('开发环境');
// 	}

// 	// 只用于生产环境
// 	if ('production' == app.get('env')) {
// 	  console.log('生产环境');
// 	}
// }
// test();
// 监听某个接口
var server = app.listen(8181, function() {

	console.log('I am listening the port of %d', server.address().port);
});


module.exports = app;
