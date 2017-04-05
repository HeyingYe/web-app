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

    app.use(bodyParser.urlencoded({extended:false}));

    app.use(bodyParser.json());

	app.get("/index",function(req,res){
		//主页
		var data = {};
		pool.getConnection(function(err,connection){
			var sql = "select * from indexshops";
			connection.query(sql,function(err,result){
				data.shops = result;
				//console.log(result)
				sql = "select * from indexspecial";
				connection.query(sql,function(err,result){
					data.special = result;
					
					sql = "select * from indexreduce"
					connection.query(sql,function(err,result){
						data.reduce = result;
						
						sql = "select * from indexnav where navId limit 0,10"
						connection.query(sql,function(err,result){
							data.nav1 = result;
							
							sql = "select * from indexnav where navId limit 9,10"
							connection.query(sql,function(err,result){
								data.nav2 = result;
								
								sql = "select * from indexnav where navId limit 19,10"
								connection.query(sql,function(err,result){
									data.nav3 = result;
									
									sql = "select * from indexremark"
									connection.query(sql,function(err,result){
										data.remark = result;
										
										res.send(data);
										connection.release();
									})
								})
							})
						})
					})
				})
			})
		})
	})
	
	app.get("/specialty",function(req, res){
		var data = {};
		pool.getConnection(function(err, connection){
			var sql = "select * from specialtyfood";
			connection.query(sql, function(err, result){
				data.specialty = result;
				//发送数据
				res.send(data);
				connection.release();
			})
		})
	})

	app.get("/theatreList",function(req,res){
		var data ={};
		pool.getConnection(function(err,connection){
			var sql = "select * from thearelist";
			connection.query(sql,function(err,result){
				data.theatre =result;
	
				sql = "select * from " + result[0].gid;
		
				connection.query(sql,function(err,result){
					//电影列表
					data.movielist = result;
			
					//发送数据
					res.send(data);
				  //连接不再使用，返回到连接池
					connection.release();
			   })
         })
		
	  })
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
								sql = "select * from tomorrow1";
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
		//使用连接池
		var data = {};//返回的数据
		pool.getConnection(function(err,connection){
			var sql = "select * from movie";
			//使用连接
			connection.query(sql,function(err,result){
				// 电影信息
				data.movie = result;
				sql = "select * from detail ";
				connection.query(sql,function(err,result){
					//电影简介
					data.detail = result;
					sql = "select * from  evaluate";
					connection.query(sql,function(err,result){
						//电影评论
						data.evaluate = result;
						
						//发送数据
						res.send(data);
						//连接不再使用，返回到连接池
						connection.release();
					})
				})
			})
		})
	})

    app.get("/login", function(req, res) {
        //登录
        //使用连接池
        var data = {}; //返回的数据
        pool.getConnection(function(err, connection) {
            var sql = "select * from users"
            connection.query(sql, function(err, result) {
                data.users = result;
                //发送数据
                res.send(data);
                //连接不再使用，返回到连接池
                connection.release();
            })
        })
    })

    app.post("/reg", function(req, res) {
        //注册
        //console.log(req)
        console.log(req.body)
        console.log(req.body.userName)

        //return
        //使用连接池
        var data = {}; //返回的数据
        
        pool.getConnection(function(err, connection) {
            var sql = "select * from users"
            connection.query(sql, function(err, result) {
                data.users = result;
                console.log(data.users);
                for (var i = 0; i < data.users.length; i++) {
                    if (data.users[i].name == req.body.userName) {
                        res.send('帐号已注册');
                    } else if (data.users[i].name != req.body.userName && i == data.users.length - 1) {
                        var sql = "INSERT INTO  `users` ( `name` ,  `psw` ,  `email` ) VALUES ( '"+req.body.userName+"', '"+req.body.passWord+"',  '"+req.body.email+"')";
                        connection.query(sql,function(err,result){
                            if(err){
                              console.log('{err: 1, msg: "数据库出错"}');
                              res.end();
                          }
                          else{
                              console.log('{err: 0, msg: "注册成功"}');
                              res.end();
                          }
                        })
                    }
                }
                //发送数据
                res.send(data);
                //console.log(666)
                //连接不再使用，返回到连接池
                connection.release();
            })
        })
    })

	app.get("/seat",function(req,res){
		//选座
		
		var address = (req.headers.referer.split("?"))[1];
		// console.log(address)
		var search = (address.split("="))[1];
		// console.log(search)
		var data = {};
		pool.getConnection(function(err,connection){
			var sql = "select * from " + search;
			connection.query(sql,function(err,result){
				data.seat = result;
				data = result[0];
				res.send(data);
				connection.release();
			})
		})
	})

	app.get("/userMsg",function(req,res){
		var data = {};
		pool.getConnection(function(err,connection){
			var sql = "select * from message";
			connection.query(sql,function(err,result){
				data.goods = result;
				res.send(data);
				connection.release();
			})
		})
	})
	app.get("/city",function(req,res){
		var data ={};
		pool.getConnection(function(err,connection){
			var sql = "select * from zg_city";
			connection.query(sql,function(err,result){
				data =result;
			
					//发送数据
					res.send(data);
				  //连接不再使用，返回到连接池
					connection.release();
		   })
         })
		
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

		// 	})
		// });

