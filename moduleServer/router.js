//加载原生模块
var path = require("path");

//加载文件模块
var fs = require("fs");
//加载第三方模块
var express = require("express");

var bodyParser = require("body-parser");

//加载第三方mysql模块
var mysql = require("mysql");

var pool = mysql.createPool({
	connectionLimit:10,
	host:"localhost",
	user:"root",
	password:"",
	database:"webapp"
})

module.exports = function(app){
	//静态资源路由
	app.use(express.static(path.join(__dirname,"../client/")));
	
	app.get("/index",function(req,res){
		//主页
		console.log("/index")
	})

	app.get("/theatreList",function(req,res){
		//影院列表
	})

	app.get("/theatreDetail",function(req,res){
		//影院详情
		//使用连接池
		var data = {};//返回的数据
		pool.getConnection(function(err,connection){
			var sql = "select * from theatreDetail";
			//使用连接
			connection.query(sql,function(err,result){
				// 影院资料
				data.theatre = result;
				sql = "select * from " + result[0].gid;
				connection.query(sql,function(err,result){
					//电影列表
					data.movielist = result;
					sql = "select * from " + result[0].todaytime;
					connection.query(sql,function(err,result){
						//电影今天的场次
						data.time = result;
						sql = "select * from food1";
						connection.query(sql,function(err,result){
							data.food = result;
							//电影明天的场次
							sql = "select * from tomorrow1";
							connection.query(sql,function(err,result){
								data.tomorrow = result;
								//发送数据
								res.send(data);
								//连接不再使用，返回到连接池
								connection.release();
							})
							
						})
						
					})
				})
			})
		})
	})

	app.get("/moveDetail",function(req,res){
		//电影详情
	})

	app.get("/seat",function(req,res){
		//选座
	})
}

//配置数据库连接参数
// var connection = mysql.createConnection({
// 	host:"localhost",
// 	user:"root",
// 	password:"",
// 	database:"webapp"//先在自己的mysql创建webapp数据库
// })

//自定义mysql数据库模块，数据层
// var mysqlHandle = require("../moduleServer/mysql");
//解决mysql模块重新连接的问题（必需加，不然第二次连接数据库）
		// mysqlHandle.handleDisconnect(connection);
		// //连接mysql数据库
		// mysqlHandle.connect(connection);
		// //sql操作语句
		// var sql = "select * from theatreDetail";
		// var data = {};//返回的数据
		
		// mysqlHandle.handle(connection,sql,function(result){
		// 	//影院资料
		// 	data.theatre = result;
		// 	sql = "select * from " + result[0].gid;
		// 	mysqlHandle.handle(connection,sql,function(result){
		// 		//电影列表
		// 		data.movielist = result;
		// 		sql = "select * from " + result[0].todaytime;
		// 		mysqlHandle.handle(connection,sql,function(result){
		// 			//电影上映时间
		// 			data.time = result;
		// 			console.log(data);
		// 			//发送数据
		// 			res.send(data);
		// 			//关闭数据库连接
		// 			mysqlHandle.close(connection);
		// 		})
				
		// 	})
		// });