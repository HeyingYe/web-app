var seatApp = angular.module("seatApp",["globalApp"]);
//加载头部
seatApp.directive("header",function(){
  return {
    restrict:"E",
    templateUrl:"../html/seat/header.html?" + Math.random(),
    scope:false,
    controller:function($scope,$http,baseUrl){

    }
  }
})
//加载主体内容
seatApp.directive("content",function(){
  return {
    restrict:"E",
    templateUrl:"../html/seat/content.html?" + Math.random(),
    scope:false,
    controller:function($scope,$http){

    }
  }
})
//加载底部
seatApp.directive("footer",function(){
  return {
    restrict:"E",
    templateUrl:"../html/seat/footer.html?" + Math.random(),
    scope:false,
    controller:function($scope,$http){

    }
  }
})
//生成座位列表
seatApp.filter('col',function(){
  return function(array,a){
    for(var i = 0; i < a; i++){
      array.push(i);
    }
    return array;
  }
})
seatApp.filter('row',function(){
  return function(array,a){
    for(var i = 0; i < a; i++){
      array.push(i);
    }
    return array;
  }
})
seatApp.controller("seatCtrl",["$scope","$http","baseUrl",function($scope,$http,baseUrl){
  //存储数据
  var search = location.search;
  var seatId = (search.split("="))[1];
  console.log(seatId)
  $http({
    url:baseUrl + "/seat",
    method:"get",
    data:{
      search:seatId
    },
  }).success(function(res){
   $scope.cinemaName = res.cinemaName;//影院名称
   $scope.movieName = res.movieName;//电影名称
   $scope.language = res.language;//电影语言
   $scope.time = res.time;//上映时间
   $scope.hall = res.hall;//银幕厅
   $scope.price = res.price;//票价
   var date = new Date();
   var weekday=new Array(7)
   weekday[0]="星期一"
   weekday[1]="星期二"
   weekday[2]="星期三"
   weekday[3]="星期四"
   weekday[4]="星期五"
   weekday[5]="星期六"
   weekday[6]="星期日"
   var tomorrow = "明天" + date.getMonth() + 1 + "月" + (date.getDate() + 1) + "日" + "（" + weekday[date.getDay()] + "）";
   $scope.tomorrow = tomorrow;
   // console.log(res);
   // console.log($scope.tomorrow)
   // console.log($scope.cinemaName)
   // console.log($scope.movieName)
   // console.log($scope.language)
   // console.log($scope.time)
   // console.log($scope.hall)
   // console.log($scope.price)
 })
  //事件
  var seatNum = 0;
  $scope.event = {
    slect:function(e){
      // console.log(e.target)
      var ulNum = $('ul').index($(e.target).parent());
      var liNum = $(e.target).parent().children().index($(e.target));
      // var x = $(".abc").length+1;
      // console.log(x);
      // console.log($('.abc'));
      if(seatNum < 4){
        if( $(e.target).hasClass('green') ){
          $(e.target).removeClass('green');
          seatNum -= 1;

          var x = $(".abc").length;
          console.log(x);
          console.log($(".abc"));
          $(".abc").eq(x-1).css("display","none");
        }else{
          $(e.target).addClass('green');
          seatNum += 1;
          $('.upLimit').hide();
          $("<span class='abc'>"+ulNum+"排"+liNum+"座</span>").appendTo('.seatPosition');
        }
      }else{
        if( $(e.target).hasClass('green') ){
          $(e.target).removeClass('green');
          seatNum = seatNum - 1;
        }else{
          $('<div class="mask"><span class="prompt">每次最多可选4个位置<span></div>').appendTo('body');
          setTimeout(function(){
            $('.mask').remove();
          },2500)
        }
      }
      $scope.prices = $scope.price * seatNum;
      if(seatNum != 0){
        $('#seatBtn').hide();
        $('#sbmBtn').css('display','block');
      }else{
        $('#seatBtn').show();
        $('#sbmBtn').css('display','none');
      }
    }
  }
}])
