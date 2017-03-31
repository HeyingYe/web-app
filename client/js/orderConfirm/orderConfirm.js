var confirmApp = angular.module("confirmApp",["globalApp"]);
//加载头部
confirmApp.directive("header",function(){
  return {
    restrict:"E",
    templateUrl:"../html/orderConfirm/header.html?" + Math.random(),
    scope:false,
    controller:function($scope,$http,baseUrl){

    }
  }
})
//加载页面内容
confirmApp.directive('content',function(){
  return {
    restrict:"E",
    templateUrl:"../html/orderConfirm/content.html?" + Math.random(),
    scope:false,
    controller:function($scope,$http,baseUrl){

    }
  }
})

confirmApp.controller("confirmCtrl",["$scope","$http","baseUrl",function($scope,$http,baseUrl){

}])
