
var fs = require('fs');
var path = require('path');

// 读取文件中的值
exports.readList = function() {

	var dir = path.resolve(__dirname, '../DB/task.json');

	var list = fs.readFileSync(dir, 'utf-8');

	return list;
}

// 增加新的任务
exports.addItem = function(item) {
	
	var dir = path.resolve(__dirname, '../DB/task.json');

	var objs = fs.readFileSync(dir, 'utf-8');

	var list = JSON.parse(objs).list;

	list.push(item);

	var result = {
		list: list
	};

	fs.writeFileSync(dir, JSON.stringify(result), {encoding: 'utf8'});

}