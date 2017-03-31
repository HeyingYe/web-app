   setTimeout(function(){
        	var $item=$(".fix_nav .item");
	          //触摸点击事件
	            var i=[1,1,1];
	            var j=[1,1,1];
	             touch.on($item, 'tap', function(ev) {
	             		ev.preventDefault();//阻止a标签默认事件
	             		 var index=$(ev.target).index();
	             		 // console.log(index);
	             	
	                     if(i[index]==1){
		                     	$item.eq(index).find(".drop").css("transform","rotate(180deg)");
		                     	$item.eq(index).siblings('.item').find(".drop").css("transform","rotate(0deg)");
		                     	for(x=0;x<i.length;x++){
		                         	i[x]=j[x];
		                         }
		                     	    i[index]=-1;
	                       }else if(i[index]!=1){
		                       	 $item.eq(index).find(".drop").css("transform","rotate(0deg)");
		                         i[index]=1;
	                       }
	                      /*if(i==-1){
	                       	$(this).find(".drop").css("transform","rotate(0deg)");
	                         i=1;
	                         console.log(i);
	                       }*/

	             	   //点击出现对应的菜单栏
	             	   // index = $(this).index();
	             	  
	             	   // console.log(index)
	             	   //判断当前状态

						if($(".details_menu").eq(index).css("display")=="none"){
							$(".details_menu").eq(index).siblings('.details_menu').css("display","none");
							$(".details_menu").eq(index).show();
                            $("#shop_list").css("background","rgba(0,0,0,0.5)");
                        
							
						}else{
							$(".details_menu").eq(index).hide();
							$(".details_menu").eq(index).siblings('.details_menu').css("display","none");
							$("#shop_list").css("background","rgb(255,255,255)");

						}	 
	             });
	         },500)