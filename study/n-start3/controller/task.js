
// 首页展示To Do List的列表
exports.index = function(req, res, next) {

	var task = require('../model/task');

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
	var task = require('../model/task');
	
	// 创建时间
	var Time = new Date();
	item.times = Time.getFullYear() + '-' + (Time.getMonth() + 1) + '-' + Time.getDate();
	task.addItem(item);

	// 页面跳转
	res.redirect('/');
}
