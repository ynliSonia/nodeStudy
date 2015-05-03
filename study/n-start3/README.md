
# n-start3 总结


## node相关
* 实现功能：

   做一个To do list，包括列表（首页）页面和新增页面，数据暂时用json文件存储，主要为了熟悉node开发的整个过程和一些文件操作，页面模板从jade切换到xtemplate。

* 项目结构

   将router抽离为单独的route.js文件，对于页面的一些逻辑操作放到controller里。

   ```
├── DB            // 数据存储
├── controller    // 逻辑控制
├── model            // 处理数据
├── node_modules
├── statics
│   ├── css
│   └── script
├── package.json
├── route.js         // 路由
├── README.md
├── app.js        // 入口
└── views

   ```

* path模块(只列举几个常用的方法)


    - `path.normalize(p)`
    
      文件路径的格式化
    
         ```
      path.normalize('/foo/bar//baz/asdf/quux/..')
      // returns
      '/foo/bar/baz/asdf'
      ```
    
    - `path.join([path1][, path2][, ...])`
    
      拼接所有的文件路径并且格式化输出结果
    
    
      ```
      path.join('/foo', 'bar', 'baz/asdf', 'quux', '..')
      // returns
      '/foo/bar/baz/asdf'

         ```
    
   - `path.resolve([from...], to)`
   
      将to解析为一个绝对路径，如果to本身不是一个相对路径路径，会对`from`从右都左进行遍历，知道得到一个相对路径，具体可以看例子：
   
      ```
      path.resolve('foo/bar', '/tmp/file/', '..', 'a/../subfile')
   
      // 等同于
      cd foo/bar
      cd /tmp/file/
      cd ..
      cd a/../subfile
      pwd
   
      ```

   - `path.isAbsolute(path)`
   
      判断`path`是不是绝对路径，返回值为Boolean
    
    
   - `path.relative(from, to)`
   
      获得`to`相对`from`的相对路径
   
   - `path.extname(p)`
   
      获取文件的扩展名，返回结果从 "." 开始。
    
      参考文档：https://nodejs.org/api/path.html
   
* 文件操作
   
   暂时没有引入数据库的概念，把数据存储在一个json文件中，需要 `fs`模块来实现文件的读取和写入的操作
   - `readFileSync` ： 同步读取数据，返回的是string，需要自己转换为JSON（`JSON.parse()`）
   - `writeFileSync` : 同步写回数据，数据写回时转换为string（`JSON.stringify()`）


