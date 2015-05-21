# package.json常用字段

   node开发中一定会接触到package.json，关于[package.json中字段的详细说明](https://docs.npmjs.com/files/package.json#name)npm的官方文档上有介绍，最近详细的阅读了一下，下面列出了一些常用字段的介绍：

* name

    [string] `name` 和 `version` 是package.json里最重要的字段，它们决定了你的包的名称和版本，是你的包的唯一标识。

* version

    [string] version是指包的版本，当你修改包的时候需要同时修改你的版本号。

* description

    [string] 顾名思义，description是对你的包的一个描述。

* keyword

    [array] 关键字列表

* homepage

    [string] 默认首页。
    note: 用url替代homepage是可以被解析的，但是是极其不标准的写法，建议用 `homepage`
    
* bugs

    [object] 提供链接到你的项目issue的地址以及个人的email，方便问题的沟通和交流。例如：
    
    ```
    { 
        "url" : "https://github.com/owner/project/issues",
        "email" : "project@hostname.com"
    }

    ```
    其中 url 和 email 可以只声明其中的一项。
* license

    [string] 许可证，让使用者清除的明白你的包的使用限制。[完整的SPDX ID列表](https://spdx.org/licenses/)
    
* author

    [object] or [string] 项目的作者，注意作者只有一个，author 中包含 `name` 字段和可选的 `url` 和 `email`，例如：
    
    ```
    { 
        "name" : "Barney Rubble",
        "email" : "b@rubble.com",
        "url" : "http://barnyrubble.tumblr.com/"
    }
    ```
    
    或者可以把所有的字段整合到一个字符串：


    ```
    "Barney Rubble <b@rubble.com> (http://barnyrubble.tumblr.com/)"
    ```
    
* files

    `files` 字段是一个包含在你的项目中的文件的列表。如果一个文件的名称在这个列表中，那么它将包含这个文件中的所有文件。（除非他们被其他的规则忽略了。）

    你还可以在包的根目录中提供一个 `.nomignore` 的文件，这样的话，即使文件已经在文件列表中也不会被包含进去。`.npmignore` 的工作机制类似于 `.gitignore`。
    
* main

    [string] 主入口，假设你的包命名为foo, 有用户下载了它，那么可以通过require("foo")的方式加载你的包，而实际上加载的是foo下的入口文件，也就是main的值所对应的文件。所以，这个main的值应该是一个相对于你的包的根目录的模块的id.
    
* bin

    [object] or [string] 当你的项目中含有可执行的文件，可以将这些文件注册为全局的命令。例如：
    
    
    ```
    { "bin" : { "myapp" : "./cli.js" } }
    ```
    当你的项目中只含有一个可执行文件并且该文件的名称和包名相同时，可以这么写：
    
    ```
    { 
        "name": "my-program",
        "version": "1.2.5",
        "bin": "./path/to/program" // 等同于{ "my-program" : "./path/to/program" }
    }
    ```

* repository

    [object] or [string] 包的类型和地址。例如：
    
    ```
    "repository" :
    { 
        "type" : "git",
        "url" : "https://github.com/npm/npm.git"
    }

    ```

* scripts

    [object] 命名注册。可以在同时执行多个命令。与bin不同的是，scripts其实就是为了防止重复多次的执行同一命令，并不要求文件是可执行的，而bin要求文件是可执行的。例如：
    
    ```
    "scripts": {
        "index": ./node_modules/.bin/test --timeout 10000 test/*.test.js"
    }
    ```
* dependencies

    [object] 管理当前的包所依赖的其他包的名称及版本，依赖的包的版本的声明方式：
        
        - version 完全匹配version的版本
        - >version 大于version的版本
        - <version 小于version的版本
        - >=version 大于等于version的版本
        - <=version 小于等于version的版本
        - ~version 靠近version的版本，安装大于指定的这个版本，并且匹配到 x.y.z 中 z 最新的版本。
        - ^version 兼容的版本，0.x.y 匹配到z的最新版本，^1.x.y匹配到y和z的最新版本。
        - 1.2.x 1.2.0，1.2.1……1.2.9
        - v1 - v2 等价于 >=v1 && <=v2
        - range1 || range2   等价于 >=v1 || <=v2
        - latest 最新版
        
    关于包的版本建议阅读[node.js中的版本管理](http://deadhorse.me/nodejs/2014/04/27/semver-in-nodejs.html)

* devDependencies

    [object] 管理一些开发过程中需要但是不需要在包被加载的时候加载的包。依赖包加载的时候--dev 的包会默认到该字段下。
    
* engines

    [object] 管理node 或者 npm的版本。
    

* os

    [array] 包支持的系统类型。例如：
    
    ```
    "os" : [ "darwin", "linux" ]

    ```

* publishConfig

    [object] 注明包是在哪里发布的以及包的tag
    


