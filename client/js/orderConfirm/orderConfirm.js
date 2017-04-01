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
  $scope.time = 60 * 15;
  $scope.event = {
    timeout: function(){
     $scope.time --;
     var seconds = $scope.time % 60;
     var minutes = Math.floor($scope.time / 60);
     $scope.timeCount = minutes +'分' + seconds + '秒';
       if($scope.time <= 0){
        $('<div class="mask">\
            <div class="prompt">\
              <div class="message">\
                <h3>温馨提示</h3>\
                <p>超过支付等待时间，订单已失效，请重新预定</p>\
             </div>\
             <a href="">重新预订</a>\
            </div>\
          </div>').appendTo('body');
       }
    }
  }
  if($scope.time > 0 ){
    var time = setInterval(function(){
      $("#timeCount").trigger("click")
      if($scope.time <= 0){
        clearInterval(time)
      }
    },1000)
  }
}])
