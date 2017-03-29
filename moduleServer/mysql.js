//数据层，mysql模块
var mysql = require("mysql");
module.exports = {
	connect:function(connection){
		//连接mysql数据库
		connection.connect(function(err){
			if(err){
				console.log('error connecting: ' + err.stack);
				return;
			}
			console.log('connected as id ' + connection.threadId)
		});
	},
	handle:function(connection,sql,callback){
		//sql操作
		connection.query(sql,function(err,result){
			if(err){
				console.log(err.message);
				return;
			}
			// console.log(result);
			if(callback){
				callback(result);
			}
		})
	},
	close:function(connection){
		//关闭连接
		connection.end();
	},
	handleDisconnect:function(connection) {
	    connection.on('error', function(err) {
	        if (!err.fatal){
	        	console.log(1)
				return;//出现致命的错误，退出
	        } 
	        if (err.code !== 'PROTOCOL_CONNECTION_LOST'){
	        	console.log(11)
	        	throw err;//如果不是连接丢失问题，则抛出错误
	        } 
	        console.log('> Re-connecting lost main MySQL connection: ' + err.stack);
	        //重新连接
	        connection.connect();
	        handleDisconnect(connection);
	    });
	}
}