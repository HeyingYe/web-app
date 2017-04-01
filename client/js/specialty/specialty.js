var specialtyApp = angular.module('specialtyApp',['globalApp']);

specialtyApp.directive('itemList',function(){
	return{
		restrict: 'C',
		templateUrl:'../html/specialty/specialty.html?' + Math.random(),
		scope:false,
		controller:function($scope,$http,baseUrl){
			
		}
	}
});

specialtyApp.controller('specialtyController',['$scope','$http','baseUrl',function($scope,$http,baseUrl){
	$http.get(baseUrl + '/specialty').success(function(res){
		$scope.specialty = res.specialty;
		console.log($scope.specialty)
	})
}])
