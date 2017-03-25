//加载 express 模块（第三方模块）
var express = require("express");

var app = express();

//加载自定义模块
//路由模块
var router = require("./moduleServer/router");

// //mysql数据库模块，数据层
// var mysql = require("./moduleServer/mysql");

//调用路由
router(app);

// //连接mysql数据库
// mysql(connection);
//开启服务器
app.listen(8080);