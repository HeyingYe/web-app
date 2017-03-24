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
	// $http.get(baseUrl + "").success(function(res){
	// 	$scope.data = res;//存储数据
	// })
}])