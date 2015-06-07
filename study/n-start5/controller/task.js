
var task = require('../model/task');

// 首页展示To Do List的列表
exports.index = function(req, res, next) {

	// 文件读取
	var objs = task.readList();

	// 获得JSON + 列表
	var list = JSON.parse(objs).list;

	res.render('index', {title: '首页', list: list});
}

exports.new = function(req, res, next) {

	res.render('add', {title: '新增'});
}


// 新增
exports.add = function(req, res, next) {

	var item = req.body;

	task.addItem(item);

	// 页面跳转
	res.redirect('/');
}

// 删除
exports.del = function(req, res, next) {

	var delId = req.params.id;
	var result = task.delItem(delId);

	if(result) {
		res.json({'status': 1});
		return ;
	} 
	res.json({'status': 0});

}
