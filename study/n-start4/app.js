
var path = require('path');

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var routes = require('./route');


app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'xtpl');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/assets', express.static(__dirname + '/statics'));

app.use('/', routes);

// 监听某个接口
var server = app.listen(8181, function() {

	console.log('I am listening the port of %d', server.address().port);
});


module.exports = app;
