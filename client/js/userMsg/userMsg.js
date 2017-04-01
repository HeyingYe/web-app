var userMsg = angular.module("userMsg",["globalApp","ui.router"]);

//配置路由映射表
userMsg.config(function($stateProvider,$urlRouterProvider){
	$stateProvider.state("content1",{
		url:"/content1",
		templateUrl:"../html/userMsg/content.html?" + Math.random()

	}).state("content2",{
		url:"/content2",
		templateUrl:"../html/userMsg/content2.html?" + Math.random()
	})
})

// userMsg.config(function($stateProvider,$urlRouterProvider){
// 	$stateProvider.state("content1",{
// 		url:"/content1",
// 		templateUrl:"../html/userMsg/content.html?" + Math.random()

// 	}).state("content2",{
// 		url:"/content2",
// 		templateUrl:"../html/userMsg/content2.html?" + Math.random()
// 	}).state("content1.menu",{
// 		url:"/menu",
// 		templateUrl:"../html/userMsg/menucontent.html?" + Math.random()
// 	})
// })

userMsg.directive("top",function(){
	return {
		restrict:"E",
		templateUrl:"../html/userMsg/top.html?" + Math.random(),
		scope:false,
	}
})
userMsg.directive("list",function(){
	return {
		restrict:"E",
		templateUrl:"../html/userMsg/list.html?" + Math.random(),
		scope:false,
	}
})
userMsg.directive("content",function(){
	return {
		restrict:"E",
		templateUrl:"../html/userMsg/content.html?" + Math.random(),
		scope:false,
	}
})

userMsg.controller("userShop",["$scope","$http","baseUrl","color",function($scope,$http,baseUrl,color){
	$scope.baseUrl = baseUrl;
	$scope.color = color;
	$http.get(baseUrl + "/userMsg").success(function(res){
		$(".loading").remove();
		$scope.data = res.goods;
		console.log($scope.data);
		$scope.show = $scope.data;
		$scope.nopay = [];// 0:未付款
		$scope.use = [];// 1:可使用
		// $scope.end = [];// 2:已结束
		$scope.server = [];// 3:售后
		for(var i = 0;i < $scope.data.length;i++){
			if($scope.data[i].status == 0){
				$scope.data[i].status = "待付款";
				$scope.nopay.push($scope.data[i]);
			}else if($scope.data[i].status == 1){
				$scope.data[i].status = "可使用";
				$scope.use.push($scope.data[i]);
			}else if($scope.data[i].status == 2){
				$scope.data[i].status = "已结束";
				
			}else if($scope.data[i].status == 3){
				$scope.data[i].status = "退款";
				$scope.server.push($scope.data[i]);
			}
		}
	})
	
	$scope.event = {
		choose:function(e){
			$(".tab a").removeClass("active");
			$(e.target).addClass("active");
			
		},
		menu:function(e){
			$(".menu a").removeClass("on");
			console.log($(e.target).index())
			$(e.target).addClass("on");
			if($(e.target).index() == 0){
				//不为空
				$scope.show = $scope.data;
				$(".order").css({
					background:"#fff"
				})
				if($scope.show.length == 0){
					//为空
					// $("list").empty();
					$(".order").css({
						background:"#ccc url(../userMsg/img/piao.png) no-repeat 50% 50%",
						position:"absolute",
						top:100,
						left:0,
						bottom:0,
						right:0
					})
				}
			}else if($(e.target).index() == 1){
				//不为空
				$scope.show = $scope.nopay;
				$(".order").css({
					background:"#fff"
				})
				if($scope.show.length == 0){
					//为空
					// $("list").empty();
					$(".order").css({
						background:"#ccc url(../userMsg/img/piao.png) no-repeat 50% 50%",
						position:"absolute",
						top:100,
						left:0,
						bottom:0,
						right:0
					})
				}
			}else if($(e.target).index() == 2){				
				//不为空
				$scope.show = $scope.use;
				$(".order").css({
					background:"#fff"
				})
				if($scope.show.length == 0){
					//为空
					// $("list").empty();
					$(".order").css({
						background:"#ccc url(../userMsg/img/piao.png) no-repeat 50% 50%",
						position:"absolute",
						top:100,
						left:0,
						bottom:0,
						right:0
					})
				}
			}else if($(e.target).index() == 3){
				//不为空
				$scope.show = $scope.server;
				$(".order").css({
					background:"#fff"
				})
				if($scope.show.length == 0){
					//为空
					// $("list").empty();
					$(".order").css({
						background:"#ccc url(../userMsg/img/piao.png) no-repeat 50% 50%",
						position:"absolute",
						top:100,
						left:0,
						bottom:0,
						right:0
					})
				}
			}
		}
	}
}])
