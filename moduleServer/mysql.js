//数据层，mysql模块
module.exports = {
	connect:function(connection){
		//连接mysql数据库
		connection.connect();
	},
	handle:function(connection,sql,callback){
		//sql操作
		connection.query(sql,function(err,result){
			if(err){
				console.log(err.message);
				return;
			}
			console.log(result);
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
				return;
	        } 
	        if (err.code !== 'PROTOCOL_CONNECTION_LOST'){
	        	throw err;
	        } 
	        
	        console.log('> Re-connecting lost main MySQL connection: ' + err.stack);
	        connection = mysql.createConnection(connection.config);
	        handleDisconnect(connection);
	        connection.connect();
	    });
	}
}