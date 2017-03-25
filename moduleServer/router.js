//加载原生模块
var path = require("path");

//加载文件模块
var fs = require("fs");
//加载第三方模块
var express = require("express");

var bodyParser = require("body-parser");

//加载第三方mysql模块
var mysql = require("mysql");

//配置数据库连接参数
var connection = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"",
	database:"webapp"//先在自己的mysql创建webapp数据库
})

//自定义mysql数据库模块，数据层
var mysqlHandle = require("../moduleServer/mysql");

module.exports = function(app){
	//静态资源路由
	app.use(express.static(path.join(__dirname,"../client/")));
	
	app.get("/",function(req,res){
		console.log("index")
	})
	app.get("/index",function(req,res){
		//主页
		console.log("/index")
	})
	app.get("/theatreList",function(req,res){
		//影院列表
	})
	app.get("/theatreDetail",function(req,res){
		//影院详情
		//连接mysql数据库
		mysqlHandle.connect(connection);
		var sql = "select * from theatreDetail";
		//获取webapp数据库的theatreDetail表内容
		var result = mysqlHandle.handle(connection,sql,function(result){
			res.send(result);
		});
		
		//关闭数据库连接
		mysqlHandle.close(connection);
	})
	app.get("/moveDetail",function(req,res){
		//电影详情
	})
	app.get("/seat",function(req,res){
		//选座
	})
}