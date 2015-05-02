
# n-start2 总结

## 准备工作

shell小白的成长之路：

* 文件复制

   复制n-start1中文件并更名为n-start2，命令行：
   
   ```
   cp -r n-start1 n-start2
   ```
* 顺便学习了相关命名：

   参考博客：http://blog.csdn.net/junmail/article/details/4602745
   
## node相关

* layout是什么？

   公共部分模板的抽离
   
* 页面加载静态资源
   
   ```
   // 资源的地址名称按个人习惯，这里用的assets
   app.use('/assets', express.static(__dirname + '/statics'));

   ```


