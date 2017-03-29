var movieDetail = angular.module("movieDetail",["globalApp"]);
movieDetail.directive("top",function(){
	return {
		restrict:"E",
		templateUrl:"../../html/movieDetail/top.html?" + Math.random(),
		scope:false,
		controller:function($scope,$http,baseUrl){
			
		}
	}
})
movieDetail.directive("detail",function(){
	return {
		restrict:"E",
		templateUrl:"../../html/movieDetail/detail.html?" + Math.random(),
		scope:false,
		controller:function($scope,$http){
			
		}
	}
})
movieDetail.directive("evaluate",function(){
	return {
		restrict:"E",
		templateUrl:"../../html/movieDetail/evaluate.html?" + Math.random(),
		scope:false,
		controller:function($scope,$http){
			
		}
	}
})
movieDetail.directive("foot",function(){
	return {
		restrict:"E",
		templateUrl:"../../html/movieDetail/foot.html?" + Math.random(),
		scope:false,
		controller:function($scope,$http){
			
		}
	}
})
movieDetail.controller("mDetail",["$scope","$http","baseUrl",function($scope,$http,baseUrl){
	$http.get(baseUrl + "/moveDetail").success(function(res){
        //?movieId=1
        // var str = location.serach;
        // var arr=str.split('=');
        // var id = arr[1];
        // $scope.num = id;
		console.log(res);
        $scope.data = res;//存储数据
        for(var i=0;i<$scope.data.movie.length;i++){
            var arr1 = $scope.data.movie[i].src.split(",");
            $scope.data.movie[i].src = arr1;
        }
        for(var i=0;i<$scope.data.detail.length;i++){
            var arr1 = $scope.data.detail[i].src.split(",");
            $scope.data.detail[i].src = arr1;
        }
        for(var i=0;i<$scope.data.evaluate.length;i++){
            var arr1 = $scope.data.evaluate[i].src.split(",");
            $scope.data.evaluate[i].src = arr1;
        }
    })

	//点击分享按钮弹出遮罩层
	$scope.click = function() {

        $('#shodow').show();
        $('#sharewb').show();

    
	}
	//点击关闭按钮隐藏遮罩层
	$scope.click_close = function() {
        //console.log(333)
        //$event.target.parentNode.parentNode.remove();
        $('#shodow').hide();
        $('#sharewb').hide();
        
    }
    //点击查看更多详情介绍
    var bool = false;
    $scope.check_more = function() {
       $scope.bool = !$scope.bool;
       console.log(bool)
    }
}])
$(document).on('click','.see-more',function(){
    if ($(this).siblings('.talk').css('-webkit-line-clamp')=='4') {
        $(this).siblings('.talk').css('-webkit-line-clamp','22')
        $(this).siblings('.talk').css('height','auto')
        $(this).find('span').html('&lt')
    }else{
        $(this).siblings('.talk').css('-webkit-line-clamp','4')
        $(this).siblings('.talk').css('height','80px')
        $(this).find('span').html('&gt')
    }
})
$(document).on('click','.img-enlarge',function(){
    $(this).prop('src');
    console.log($(this).prop('src'))
    $('#shodow1').show();
    $('.swiper-container').show();
})
$(document).on('click','#shodow1',function(){
    $('#shodow1').hide();
    $('.swiper-container').hide();
})
$(document).on('click','.swiper-container img',function(){
    $('#shodow1').hide();
    $('.swiper-container').hide();
})
