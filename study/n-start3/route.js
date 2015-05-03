
var express = require('express');
var router = express.Router();

var task = require('./controller/task');

// 首页
router.get('/', task.index);

// 新增页面
router.get('/new', task.new);

// 新增任务接口
router.post('/addItem', task.add);

module.exports = router;