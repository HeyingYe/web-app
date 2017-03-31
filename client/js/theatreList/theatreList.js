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
   $scope.choose=function(){
	         //获取菜单栏
	       
	         var $item=$(".fix_nav .item");
	          //触摸点击事件
	         var i=1;
             touch.on($item, 'tap', function(ev) {
             		ev.preventDefault();//阻止a标签默认事件
                     if(i==1){
                     	$(this).find(".drop").css("transform","rotate(180deg)");
                     	i=i*(-1); //-1 
                       }else{
                       	$(this).find(".drop").css("transform","rotate(0deg)");
                         i=i*(-1); //1
                       }

             	   //点击出现对应的菜单栏
             	   index = $(this).index();
             	   // console.log(index);
             	   //判断当前状态
					if ($(".details_menu").eq(index).css("display")=="block") {

						$(".details_menu").eq(index).css("display","none");
					// 删除遮罩层
						$("#shop_list").css("background","rgb(255,255,255)");

					}else{
						$(".details_menu").eq(index).css("display","block");
					// 添加遮罩层
						$("#shop_list").css("background","rgba(0,0,0,0.5)");
					}
					// 排除相邻兄弟的样式
						$(".details_menu").eq(index).siblings('.details_menu').css("display","none");
             	 
             });
          }
        
}])