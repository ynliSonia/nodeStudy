
# n-start1 总结

## 准备工作

github的配置，需要配置多个本地ssh-key，之前配过，没记，命令都忘了

``
    // 生成新的ssh，名称自定，我用的github
    ssh-keygen -t rsa -C "ynliMango@gmail.com" -f ~/.ssh/github

``
粘贴github.pub（*.pub）的内容到github的SSH
``
    // 更改配置项，新增本地ssh
    sudo vi ~/.ssh/config
``
复制相关内容到config：
``
    host github
    user git
    hostname github.com
    port 22
    identityfile ~/.ssh/github
``

测试：
`ssh -T github`

参考博客：
http://www.cnblogs.com/shure/archive/2012/11/07/2758545.html

## node相关

* step1: 初始化npm

    `npm init`
    生成packge.json

* step2: 下载express病添加至package.json

    `npm install express --save`

* step3:
    
    创建项目的目录结构

├── node_modules    // npm
├── router          // 路由
├── statics         // 静态资源
│   ├── css         // css
│   └── script      // js
└── views           // 页面


* step4: 编码




