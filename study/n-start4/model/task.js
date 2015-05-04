
var fs = require('fs');
var path = require('path');

var dataPath = path.resolve(__dirname, '../DB/task.json');

// 读取文件中的值
exports.readList = function() {

	var list = fs.readFileSync(dataPath, 'utf-8');

	return list;
}

// 增加新的任务
exports.addItem = function(item) {

	var taskObj = fs.readFileSync(dataPath, 'utf-8');

	var list = JSON.parse(taskObj).list;

	// 创建时间
	var Time = new Date();
	item.times = Time.getFullYear() + '-' + (Time.getMonth() + 1) + '-' + Time.getDate();

	// 任务id
	var len = list.length;

	item.id = len > 0 ? list[len - 1].id + 1 : 1;

	list.push(item);

	var result = {
		list: list
	};

	fs.writeFileSync(dataPath, JSON.stringify(result), {encoding: 'utf8'});

}

// 删除任务
exports.delItem = function(delId) {

	var taskObj = fs.readFileSync(dataPath, 'utf-8');

	var list = JSON.parse(taskObj).list;
	var len = list.length;

	var flag = false;

	for(var i = 0; i < len ; i++) {

		if(list[i].id == delId) {

			list.splice(i, 1);
			flag = true;
			break;
		}

	}

	var result = {
		list: list
	};

	fs.writeFileSync(dataPath, JSON.stringify(result), {encoding: 'utf8'});
	return flag;
}