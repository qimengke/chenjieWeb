$(function(){
	cart_over()
	Big();
	cart_click();
	Huiyuan();
	Num();
	addtoCart();
	Car();
	Bag();
});
function Big(){ //普通 放大镜
	    var  x = 0,
            $small = $("#small"),
            $large = $("#big"),
            
            $move_1 = $("#move_1"),
            $move_2 = $("#move_2"),
            $img_2 = $("#move_2 img"),
            $pic = $("#pic"),
            //$big = $("#big");           
            $big_img = $("#container img");
        var $small_img = $("#small");
        
        var _x =0,_y=0;
                     
        $("#pic").mousemove(function(e){
        	_height = $move_2.height();
            _width = $move_2.width();
        	
            //有滚动条  必须 要用 pageX  pageY 
            //console.log(e.pageY);
        	$move_2.css({left:(e.pageX-$pic.offset().left-_width/2),top:(e.pageY-$pic.offset().top-_height/2)});
        	//判断 是否出边界
        	if($move_2.position().left<0){
        		   //return;
        		///$move_2.position().left-50  
        		$move_2.css({left:0});
        	}
        	if($move_2.position().top<0){
        		$move_2.css({top:0});
        	}
        	if(parseInt($move_2.position().left)+_width>480){
        		$move_2.css({left:480-_width});
        		//$("#container").hide();
        	}
        	if(parseInt($move_2.position().top)+_width>480){
        		$move_2.css({top:480-_width});
        	}
        	
        	//记录鼠标坐标
        	_x = $move_2.position().left+_width/2;
        	_y = $move_2.position().top+_height/2;       	
        	
            x = $move_2.offset();
            // move_2高度的一半  _width/2
            //背后的图片的坐标位置
        	$img_2.css({left:-x.left+$pic.offset().left,top:-x.top+$pic.offset().top}); 
        	
        	//计算大图坐标
        	var _t = 480/_width;
        	var w_big = $big_img.width();
        	var h_big = $big_img.height();
        	    
        	    
        	    //_width为移动的小div的高度 _t为外边框的宽度比上_width
        	    //1
        	    $big_img.width(w_big*_t*(480/w_big));//比例  重置左侧 图片的宽高
        	    $big_img.height(h_big*_t*(480/h_big));
        	var big_width = $big_img.width(),
        	    big_height = $big_img.height(),
        	    small_width = $small_img.width(),
        	    small_height = $small_img.height(),       	    
        	    small_x = $move_2.position().left,//移动的div
        	    small_y = $move_2.position().top;
        	    
        	    //console.log(small_x);  
        	    //比例2
        	var big_x = (small_x/small_width)*big_width;
        	var big_y = (small_y/small_height)*big_height;
        	
        	
        	//$big_img.stop(true).animate({left:-big_x,top:-big_y},100);
        	$big_img.css({left:-big_x,top:-big_y});
        	
        	
            Wheel(_x,_y);
        	
        	
        	
        	
        });
        
        
       
}
function  Wheel(_x,_y){//鼠标  滚轮 放大镜
	 $("#pic").on("mousewheel DOMMouseScroll", function (e) {
        	    var $move_2 = $("#move_2");
        	    var $pic = $("#pic");
        	    $img_2 = $("#move_2 img");
		            //$small_img = $("#small");
		                   
		            
        	    var temp = 0.3;
		        	native_width = 0,
		            native_height = 0,
		            //current_width = 0,
		            //current_height = 0,
		        	native_height = $move_2.height(),
		            native_width = $move_2.width();
		       
        	   //e.stopPropagation();
        	   e.preventDefault();//阻止鼠标滚轮的默认行为
			    var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
			                (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));              // firefox
			
			    
			    
			     native_height += (native_height * temp * delta);
                 native_width += (native_width * temp * delta);
			    //console.log(delta);
			    if(native_width>480){
			    	return;
			    }
			    
			    //以下两行 同步 坐标
			    $move_2.css({left:(_x-native_width/2),top:(_y-native_height/2)}); 
			    $img_2.css({left:-$move_2.offset().left+$pic.offset().left,top:-$move_2.offset().top+$pic.offset().top}); 
			      
			    $move_2.stop(true).animate({width:native_width,height:native_height},1);
			    //$move_2.css({width:native_width,height:native_height});
        });
}


function cart_over(){
	
	
	 $("#container").hover(function(e){
	 	e.stopPropagation();
	 	if($(this).height()>=280){
	 		    $("#move_2").hide();
        		$(this).stop().animate({top:240,left:240,width:0,height:0},500);
        		$("#big").stop().animate({opacity:0},1000);
        		$("#move_1").stop().animate({opacity:0},1);
	 	}
	 	//e.cancelBubble();
	 	return false;
	 });
    
    
	$("#pic").hover(function(e){    
		        e.stopPropagation();
        		$("#move_2").show();
        		$("#container")
        		.stop().animate({top:0,left:500,width:480,height:480},500);
        		$("#big").stop().animate({opacity:1});
        		$("#move_1").stop().animate({opacity:0.6},1);
        	},function(){
        		$("#move_2").hide();
        		$("#container")
        		.stop().animate({top:240,left:240,width:0,height:0},500);
        		$("#big").stop().animate({opacity:0},2000);
        		$("#move_1").stop().animate({opacity:0},1);
        	});  
}


function cart_click(){//放大镜下图片的点击效果
	$(".cartbox .margin .bottom_pic ._right").click(function(e){//右侧点击
		e.stopPropagation();
		var _left = parseInt($(this).parent().find("ul").css("marginLeft"));
		if(_left<-200){
			return;
		}
		//alert(46);
		$(this).parent().find("ul").css({marginLeft:_left-20});
	});
	
	$(".cartbox .margin .bottom_pic ._left").click(function(e){//左侧点击
		e.stopPropagation();
		var _left = parseInt($(this).parent().find("ul").css("marginLeft"));
		if(_left>=0){
			return;
		}
		//alert(46);
		$(this).parent().find("ul").css({marginLeft:_left+20});
	});
	
	
	$(".cartbox .margin .bottom_pic ul li").click(function(){
		var _src = $(this).find("img").attr("src");
		$("#small,#big").attr({src:_src});
		$("#move_2 img").attr({src:_src});
		//$("#small").css({opacity:1});
		$("#small").hide();
		$("#small").show(300);
	});
	
}


function  Huiyuan(){//会员图标
	$(".cartbox .margin .product .li_2 .li_2_2 .li_2_2_1")
	.hover(function(){
		$(".cartbox .margin .product .li_2 .li_2_2 .hide").show();
	},function(){
		$(".cartbox .margin .product .li_2 .li_2_2 .hide").hide();
	});
}



function Num(){//计数
		//$("#num").text(1);
	
	//var _num = $("#num").text();
	//alert(_num);
	var native_val = 0;
	$("#add").click(function(){
		//alert(33);
		native_val =  parseInt($("#num_1").html())+1;
		
		$("#num_1").html(native_val);
		//alert($(".li_3_3  #num").html());
	});
	
	$("#sub").click(function(){
		
		native_val =  parseInt($("#num_1").html())-1;
		if(native_val<=0){
			return;
		}
		
		$("#num_1").html(native_val);
	});
	//$("#num").text(native_val);
}



function addtoCart(){
	$("#Add").click(function(){
		//loadCart();
		//获取商品id
		var goodId = $(".cartbox .margin .product").attr("data-good-id");
		//console.log(goodId);
		//获取商品名
		var goodName = $(".cartbox .margin .product .li_1 .li_1_2").text();
		//console.log(name);
		//var goodKind = $(".cartbox .margin .product .li_3 .li_3_2 .span_1").text()+","
		            //+$(".cartbox .margin .product .li_3 .li_3_2 .span_2").text();
		
		
		//获取商品价格
		var goodPrice = parseFloat($(".cartbox .margin .product .li_2 .li_2_1 .li_2_a1").text().replace("￥",""));
		console.log(goodPrice);
		//获取商品图片地址
		var goodSrc = $("#small").attr("src");
		//console.log(src);
		//从cookie获取 已存在的商品信息
		//obj.toJSONString()
		//JSON.stringify()
       //var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
       var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
	   var cartObj = convertCartStrToObj(cartStr);
	   
	   if(goodId in cartObj){
	   	   cartObj[goodId].num += 1;
	   }else{
	   	    cartObj[goodId]={
	   	    	name: goodName,
	   	    	price: goodPrice,
	   	    	num: 1,
	   	    	src: goodSrc
	   	    }
	   }
	   
	  // console.log(cartStr);
	   cartStr = convertObjToCartStr(cartObj);
	  //console.log(cartStr);
	   $.cookie("cart", cartStr, {expires:7, path:"/"});
	   
	   
	   
	   
			  
				$("#bag").show();
				
				var cartStr = $.cookie("cart");
				var cartObj = convertCartStrToObj(cartStr);
				var obj = cartObj["sp1"];
				
				$("#num").text(function(){
					return obj.num;
				});
				
				
				$("#bag-num1").text(function(){
					return obj.num;
				});
				$("#bag-num2").text(function(){
					return "￥"+obj.num*obj.price+"元";
				});
				load();
			
		
	});
}


function Car(){//页面加载时加载购物车的里的数据
	//alert(33);
	    var cartStr = $.cookie("cart");
	    console.log(cartStr);
		if(!cartStr){
			//$(".right_hide2 .cartbox_right").show();
		}else{ 
		
	        console.log(5555);
	        
			$("#HIDE .cartbox_right").hide();
			//$(".fixed .right_hide2 .cartbox_right img").css("display","none");
			//console.log($(""));
			var cartObj = convertCartStrToObj(cartStr);
			var goodName = cartObj[goodName];	
		}
		
	
	
}






function convertCartStrToObj(cartStr){
				// 如果是空字符串，即没有购物车信息，那么购物车为空，直接返回一个空对象
				if(!cartStr){
					return {};
				}
				// "sp1,香蕉,30,1,src1:sp2,苹果,40,2,src2:sp3,梨,50,3,src3"
				var goods = cartStr.split(":");
				var obj = {};
				for(var i = 0 ; i < goods.length; i++){
					var data = goods[i].split(",");
					// 以商品的id为键，商品的其他信息为值, 这个值也设计为一个对象
					obj[data[0]] = {
						name : data[1],
						price : parseFloat(data[2]),
						num : parseInt(data[3]),
						src : data[4]
					};
				}
				
				return obj;
			}
			
function convertObjToCartStr(obj){
					/* {
					 * 	sp1 : {
					 * 		name : "香蕉",
					 *      price  : 30,
					 *      num  : 1,
					 *      src : "img/1.jpg"
					 * 	},
					 * sp2 : {
					 * 		name : "苹果",
					 *      price  : 40,
					 *      num  : 2,
					 *      src : "img/2.jpg"
					 * 	},
					 * sp3 : {
					 * 		name : "梨",
					 *      price  : 50,
					 *      num  : 3,
					 *      src : "img/3.jpg"
					 * 	},
					 * }
					 * 
					 */
					// "sp1,香蕉,30,1,src1:sp2,苹果,40,2,src2:sp3,梨,50,3,src3"
					
					var cartStr = "";
					for(var id in obj){
						if(cartStr){
							cartStr += ":";
						}
						cartStr += id + "," + obj[id].name + "," + obj[id].price + "," + obj[id].num + "," + obj[id].src;
					}
					
					return cartStr;
}



function Bag(){
	$("#bag .bag-2").click(function(){
		$("#bag").hide();
	});
	
	
	
	
	
		
}
