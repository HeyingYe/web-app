var theatreDetail = angular.module("theatreDetail",["globalApp"]);
theatreDetail.directive("top",function(){
	return {
		restrict:"E",
		templateUrl:"../html/theatreDetail/top.html?" + Math.random(),
		scope:false,
		controller:function($scope,$http,baseUrl){

		}
	}
})
theatreDetail.directive("content",function(){
	return {
		restrict:"E",
		templateUrl:"../html/theatreDetail/content.html?" + Math.random(),
		scope:false,
		controller:function($scope,$http){

		}
	}
})
theatreDetail.directive("foot",function(){
	return {
		restrict:"E",
		templateUrl:"../html/theatreDetail/foot.html?" + Math.random(),
		scope:false,
		controller:function($scope,$http){

		}
	}
})
theatreDetail.controller("tDetail",["$scope","$http","baseUrl",function($scope,$http,baseUrl){
	// console.log(baseUrl + "/theatreDetail")
	$http.get(baseUrl + "/theatreDetail").success(function(res){
		// console.log(res)
		$scope.movielist = res.movielist;//电影列表
		$scope.theatre = res.theatre;//影院
		$scope.time = res.time;//上映时间:今天
		$scope.food = res.food;//食物
		$scope.toTime = res.tomorrow;//明天
		var date = new Date();
		var today = date.getMonth() + 1 + "月" + date.getDate() + "日(今天)";
		var tomorrow = date.getMonth() + 1 + "月" + (date.getDate() + 1) + "日(明天)";
		$scope.today = today;
		$scope.tomorrow = tomorrow;
		$scope.onflimTime = res.time;//默认显示今天上映的场次
		$scope.num = 0;//电影的序号
		$scope.movienum = "查看全部" + $scope.onflimTime.length + "个场次";
	})
	$scope.event = {
		show:function(e){
			if($(".down")[0]){
				$("tr").removeClass("flimhidden");
				$(".down").css({
					"background":"url(../img/icon/up.png) no-repeat;"
				});
				$scope.movienum = "收起";
				$(".down").removeClass().addClass("up");
			}else{
				$("tr").eq(2).nextAll().addClass("flimhidden");
				$(".last").removeClass("flimhidden");
				$(".up").css({
					"background":"url(../img/icon/down.png) no-repeat;"
				})
				$(".up").removeClass().addClass("down");
				$scope.movienum = "查看全部" + $scope.onflimTime.length + "个场次";
			}
		
		},
		choose:function(e){
			$scope.num = $(e.target).closest("li").index();
			$(".movie ul li").removeClass("active")
				.eq($scope.num).addClass("active");
		},
		chooseday:function(e){
			console.log($(e.target).index())//obj
			$("tr").eq(2).nextAll().addClass("flimhidden");
			$(".last").removeClass("flimhidden");
			$(".up").css({
				"background":"url(../img/icon/down.png) no-repeat;"
			})
			$(".up").removeClass().addClass("down");
			
			if($(e.target).index() == 0){
				console.log(2)
				$scope.onflimTime = $scope.time;//today
				$(".moveFilm ul li").removeClass()
				.eq(0).addClass("movieActive");
				$scope.movienum = "查看全部" + $scope.onflimTime.length + "个场次";
			}else if($(e.target).index() == 1){
				$scope.onflimTime = $scope.toTime;//tomorrow
				$scope.movienum = "查看全部" + $scope.onflimTime.length + "个场次";
				$(".moveFilm ul li").removeClass()
				.eq($(e.target).index()).addClass("movieActive");
			}
		},
		back:function(){
			history.back();
		}
	}	
}])
