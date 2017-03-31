var theatreListDetail =angular.module("theatreDetail",["globalApp"]);
theatreListDetail.directive("top",function(){
	return {
		restrict:"C",
		templateUrl:"../../html/theatreList/theatreListTop.html?" + Math.random(),
		scope:false,
		controller:function($scope,$http,baseUrl){
			
		}
    }
	
})
theatreListDetail.directive("banner",function(){
	return {
		restrict:"C",
		templateUrl:"../../html/theatreList/theatreListbanner.html?" + Math.random(),
		scope:false,
		controller:function($scope,$http,baseUrl){
			
		}
    }
	
})
theatreListDetail.directive("shop",function(){
	return {
		restrict:"C",
		templateUrl:"../../html/theatreList/theatreListShop.html?" + Math.random(),
		scope:false,
		controller:function($scope,$http,baseUrl){
			
		}
    }
	
})

theatreListDetail.controller("moveController",["$scope","$http","baseUrl",function($scope,$http,baseUrl){
	$scope.baseUrl = baseUrl;
	$http.get(baseUrl + "/theatreList").success(function(res){
		// console.log(res)
		$scope.movielist = res.movielist;
		$scope.theatre = res.theatre;
	})
        
}])