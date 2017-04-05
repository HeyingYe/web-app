var citylist =angular.module("city",["globalApp"]);
citylist.directive("top",function(){
	return {
		restrict:"C",
		templateUrl:"../../html/city/citytop.html?" + Math.random(),
		scope:false,
		controller:function($scope,$http,baseUrl){
			
		}
    }
	
})
citylist.directive("city",function(){
	return {
		restrict:"C",
		templateUrl:"../../html/city/hostcity.html?" + Math.random(),
		scope:false,
		controller:function($scope,$http,baseUrl){
			
		}
    }
	
})
citylist.directive("morecity",function(){
	return {
		restrict:"C",
		templateUrl:"../../html/city/morecity.html?" + Math.random(),
		scope:false,
		controller:function($scope,$http,baseUrl){
			
		}
    }
	
})
citylist.directive("foot",function(){
	return {
		restrict:"C",
		templateUrl:"../../html/city/footer.html?" + Math.random(),
		scope:false,
		controller:function($scope,$http,baseUrl){
			
		}
    }
	
})

citylist.controller("cityController",["$scope","$http","baseUrl",function($scope,$http,baseUrl){
	$scope.baseUrl = baseUrl;
	$http.get(baseUrl + "/city").success(function(res){
		
		var data =res;
		 var AObjectList=[];
         var BObjectList=[];
         var CObjectList=[];
         var DObjectList=[];
         var EObjectList=[];
         var FObjectList=[];
         var GObjectList=[];
         var HObjectList=[];
         var IObjectList=[];
         var JObjectList=[];
         var KObjectList=[];
         var LObjectList=[];
         var MObjectList=[];
         var NObjectList=[];
         var OObjectList=[];
         var PObjectList=[];
         var QObjectList=[];
         var RObjectList=[];
         var SObjectList=[];
         var TObjectList=[];
         var UObjectList=[];
         var VObjectList=[];
         var WObjectList=[];
         var XObjectList=[];
         var YObjectList=[];
         var ZObjectList=[];
		 for(key in data){
			// console.log(data[key].pinyin);
			switch(data[key].pinyin.substring(0,1)){
				 case "a":
				 	AObjectList.push(data[key].CityName);
					break;
			     case "b":
			        BObjectList.push(data[key].CityName);
			         break;
		         case "c":
		         	CObjectList.push(data[key].CityName);
		         break;
		         case "d":
		         	DObjectList.push(data[key].CityName);
		         break;
		         case "e":
		         	EObjectList.push(data[key].CityName);
		         break;
		         case "f":
		         	FObjectList.push(data[key].CityName);
		         break;
		         case "g":
		         	GObjectList.push(data[key].CityName);
		         break;
		         case "h":
		         	HObjectList.push(data[key].CityName);
		         break;
		         case "i":
		         	IObjectList.push(data[key].CityName);
		         break;
		         case "j":
		         	JObjectList.push(data[key].CityName);
		         break;
		         case "k":
		         	KObjectList.push(data[key].CityName);
		         break;
		         case "l":
		         	LObjectList.push(data[key].CityName);
		         break;
		         case "m":
		        	 MObjectList.push(data[key].CityName);
		         break;
		         case "n":
		         NObjectList.push(data[key].CityName);
		         	break;
		         case "o":
		         	OObjectList.push(data[key].CityName);
		         break;
		         case "p":
		         	PObjectList.push(data[key].CityName);
		         break;
		         case "q":
		        	 QObjectList.push(data[key].CityName);
		         break;
		         case "r":
		         	RObjectList.push(data[key].CityName);
		         break;
		         case "s":
		         	SObjectList.push(data[key].CityName);
		         break;
		         case "t":
		         	TObjectList.push(data[key].CityName);
		         break;
		         case "w":
		        	 WObjectList.push(data[key].CityName);
		         break;
		         case "x":
		         	XObjectList.push(data[key].CityName);
		         break;
		         case "y":
		         	YObjectList.push(data[key].CityName);
		         break;
		         case "z":
		         	ZObjectList.push(data[key].CityName);
		         break;
			}
			
		}


		$scope.obj ={A :AObjectList,
			      B :BObjectList,
			      C :CObjectList,
			      D :DObjectList,
			      E :EObjectList,
			      F :FObjectList,
			      G :GObjectList,
			      H :HObjectList,
			      I :IObjectList,
			      J :JObjectList,
			      K :KObjectList,
			      L :LObjectList,
			      M :MObjectList,
			      N :NObjectList,
			      O :OObjectList,
			      P :PObjectList,
			      Q :QObjectList,
			      R :RObjectList,
			      S :SObjectList,
			      T :TObjectList,
			      W :WObjectList,
			      X :XObjectList,
			      Y :YObjectList,
			      Z :ZObjectList};
	   console.log($scope.obj);
	})
   
}])