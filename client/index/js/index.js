var indexApp = angular.module('indexApp',['globalApp']);


indexApp.directive('lHeader',function(){
	return{
		restrict: 'C',
		templateUrl:'indexModules/l_header.html?' + Math.random(),
		scope:false,
		controller:function($scope,$http,baseUrl){
			
		}
	}
});

indexApp.directive('lDownload',function(){
	return{
		restrict: 'C',
		templateUrl:'indexModules/l_download.html?' + Math.random(),
		scope:false,
		controller:function($scope,$http,baseUrl){
			
		}
	}
});

indexApp.directive('lNav',function(){
	return{
		restrict: 'C',
		templateUrl:'indexModules/l_nav.html?' + Math.random(),
		scope:false,
		controller:function($scope,$http,baseUrl){
			
		}
	}
});

indexApp.directive('lHeadline',function(){
	return{
		restrict: 'C',
		templateUrl:'indexModules/l_headline.html?' + Math.random(),
		scope:false,
		controller:function($scope,$http,baseUrl){
			
		}
	}
});

indexApp.directive('lBanner',function(){
	return{
		restrict: 'C',
		templateUrl:'indexModules/l_banner.html?' + Math.random(),
		scope:false,
		controller:function($scope,$http,baseUrl){
			
		}
	}
});

indexApp.directive('lWm',function(){
	return{
		restrict: 'C',
		templateUrl:'indexModules/l_wm.html?' + Math.random(),
		scope:false,
		controller:function($scope,$http,baseUrl){
			
		}
	}
});

indexApp.directive('lYyjyq',function(){
	return{
		restrict: 'C',
		templateUrl:'indexModules/l_yyjyq.html?' + Math.random(),
		scope:false,
		controller:function($scope,$http,baseUrl){
			
		}
	}
});

indexApp.directive('lCzth',function(){
	return{
		restrict: 'C',
		templateUrl:'indexModules/l_czth.html?' + Math.random(),
		scope:false,
		controller:function($scope,$http,baseUrl){
			
		}
	}
});

indexApp.directive('lTtlj',function(){
	return{
		restrict: 'C',
		templateUrl:'indexModules/l_ttlj.html?' + Math.random(),
		scope:false,
		controller:function($scope,$http,baseUrl){
			
		}
	}
});

indexApp.directive('lCnxh',function(){
	return{
		restrict: 'C',
		templateUrl:'indexModules/l_cnxh.html?' + Math.random(),
		scope:false,
		controller:function($scope,$http,baseUrl){
			
		}
	}
});

indexApp.directive('lFooter',function(){
	return{
		restrict: 'C',
		templateUrl:'indexModules/l_footer.html?' + Math.random(),
		scope:false,
		controller:function($scope,$http,baseUrl){
			
		}
	}
});

indexApp.directive('searchContainer',function(){
	return{
		restrict: 'C',
		templateUrl:'indexModules/search_container.html?' + Math.random(),
		scope:false,
		controller:function($scope,$http,baseUrl){
			
		}
	}
});



//-----------------------------
indexApp.controller('indexController',['$scope','$http','baseUrl',function($scope,$http,baseUrl){
	console.log(baseUrl + '/index')
	$http.get(baseUrl + '/index').success(function(res){
		$scope.shops = res.shops;
		$scope.special = res.special;
		$scope.reduce = res.reduce;
		$scope.nav1 = res.nav1;
		$scope.nav2 = res.nav2;
		$scope.nav3 = res.nav3;
		$scope.remark = res.remark;
		console.log(res)
		console.log($scope.shops)
		console.log($scope.special)
		console.log($scope.reduce)
		console.log($scope.nav1)
		console.log($scope.nav2)
		console.log($scope.nav3)
		console.log($scope.remark)
	})
	
	$scope.search = function(ev){
//		ev.preventDefault();
		touch.on('.search', 'tap', function(){
			$('.search_container').css('display','block');
		})
		touch.on('.cancel', 'tap', function(){
			$('.search_container').css('display','none');
		})
	}
	
//	$scope.setTimeLoad = function(){
		$(window).scroll(function(){
			var viewHeight = $(this).height();
			var contentHeight = $(document).height();
			var sTop = $(this).scrollTop();
//			console.log(viewHeight)
//			console.log(contentHeight)
//			console.log(sTop)
		})
//	}
	
	setTimeout(function(){
		var swiper = new Swiper('.swiper-container', {
	        pagination: '.swiper-pagination',
	        paginationClickable: true
    	});
    	var swiper = new Swiper('.swiper-fixedWindow', {
    	 	direction : 'vertical',
		    autoplay: 2500,
		    autoplayDisableOnInteraction: false,
		    slidesPerView: 1,
	        paginationClickable: true,
	        spaceBetween: 30,
	        loop: true
		});
	},500)
	
	if( window.location.href.split('?')[1]){
		$scope.parameter = decodeURIComponent( window.location.href.split('?')[1].split('=')[1] );
		console.log($scope.parameter)
	}else{
		$scope.parameter = "广州";
	}
	

}]);