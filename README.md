# 说明
> 该项目是基于AngularJS实现的一个SPA小应用，项目中使用到了AngularJS的路由与自定义指令、过滤器、原生JSONP等。

## 开发环境与工具
> OS: Ubuntu 16.04  
> IDE: VSCode  
> API测试工具: Postman  
> 包管理: NPM [NodeJS的安装与基本使用](https://github.com/cdting/document/blob/master/NodeJS开发环境.md)


## 下载与演示

### 下载并初始化项目
```cmd
    git clone https://github.com/cdting/Angular-demo.git 
    cd Angular-demo
    npm install
```

### 演示
- 需要在本地启动http服务，直接打开index页面是不会发送请求的   
- 在项目初始化成功后可以使用命令启动

```cmd
    npm start
    或
    npm test
```


## 特殊文件说明

### 统一开发规则(.editorconfig)
> 在使用不同开发工具的时候，有些开发规则需要统一规范  
> 我们可以在项目根目录下配置一个.editorconfig文件   
> 可以在里面写一些开发规则约束等  
> 在sublime中使用需要安装一个EnditorConfig插件

### 忽略git提交(.gitignore)
> 我们可能在git版本库的时候不想提交某些文件到版本库中  
> 那我们就可以在这个文件中写入不想提交的文件名，一行一个
