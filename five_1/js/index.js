
//$("#head").load("head_1.html");
$(document).ready(function(){
	//点击显示
	
	load();
	Denglu();
	cartbox();
	fn1();
	Cartbox_right()
	
	$(".head_1").click(function(){
		 $(".head_1 .head_1_1").css("display","block");
	});
	//点击隐藏
    $(".head_1 .head_1_1 img").click(function(e){
    	e.stopPropagation();
    	$(this).parent().css("display","none");    	
    });
    //导航栏 效果
    //我的第五大道鼠标滑过效果
    $(".head_2 .head_2_1_2 .mine").hover(function(){//我的第五大道
    	$(this).css('background','white');
    	$(".head_2 .head_2_1_2 .mine .sign").addClass("sign_chg");//鼠标移进添加类名
    	$(".head_2 .head_2_1_2 .mine .mine_1").css("display","block");
    },function(){
    	$(this).css('background','#f2f2f2');
    	$(".head_2 .head_2_1_2 .mine .sign").removeClass('sign_chg');
    	$(".head_2 .head_2_1_2 .mine .mine_1 span").attr("class","");//将类名置空
    	$(".head_2 .head_2_1_2 .mine .mine_1").css("display","none");
    });
    $(".head_2 .head_2_1_2 .mine .mine_1 span").hover(function(){
    	$(".head_2 .head_2_1_2 .mine .sign").removeClass('sign_chg');//鼠标移出删除类名
    	$(".head_2 .head_2_1_2 .mine .mine_1 span").attr("class","");//鼠标移出类名置为空
    	$(this).attr("class","active");
    });
    
    //手机版下载二维码区域
    $(".head_2 .head_2_1_2 .load").hover(function(){
    	$(this).css('background','white');
    	$(".head_2 .head_2_1_2 .load .sign").addClass("sign_chg");
    	$(".head_2 .head_2_1_2 .load .hide").css("display","block");
    },function(){
    	$(this).css('background','#f2f2f2');
    	$(".head_2 .head_2_1_2 .load .sign").removeClass("sign_chg");
    	$(".head_2 .head_2_1_2 .load .hide").css("display","none");
    });
    $(".head_2 .head_2_1_2 .load .hide").hover(function(){
    	$(".head_2 .head_2_1_2 .load .sign").removeClass("sign_chg");
    });
    
    //定位图标鼠标滑过效果
    $(".nav .margin ul li.last").hover(function(){
    	$(".nav .margin ul li.last span").attr("class","active");
        $(".nav .margin ul li.last a").css("color","#fff");
    },function(){
    	$(".nav .margin ul li.last span").attr("class","");
    	$(".nav .margin ul li.last a").css("color","#C69C6D");
    });
    
    //导航栏右侧
    $(".nav .margin .right div").hover(function(){
    	$(this).find('b').stop().eq(0).animate({width:110},300);
    },function(){
    	$(this).find('b').stop().eq(0).animate({width:0},300);
    });
    
    //隐藏的商品分类
    //ajax     导入分类列表
    
    function BgPosition(){
		    $(".nav .margin .first ul li").eq(0).css("background-position","-3px -5px");
		    $(".nav .margin .first ul li").eq(1).css("background-position","-3px -36px");
		    $(".nav .margin .first ul li").eq(2).css("background-position","-3px -68px");
		    $(".nav .margin .first ul li").eq(3).css("background-position","-3px -100px");
		    $(".nav .margin .first ul li").eq(4).css("background-position","-3px -132px");
		    $(".nav .margin .first ul li").eq(5).css("background-position","-3px -165px");
		    $(".nav .margin .first ul li").eq(6).css("background-position","-3px -196px");
		    $(".nav .margin .first ul li").eq(7).css("background-position","-3px -228px");
		    $(".nav .margin .first ul li").eq(8).css("background-position","-3px -261px");
		    $(".nav .margin .first ul li").eq(9).css("background-position","-3px -294px");
		    $(".nav .margin .first ul li").eq(10).css("background-position","-3px -326px");
		    $(".nav .margin .first ul li").eq(11).css("background-position","-3px -357px");
		    $(".nav .margin .first ul li").eq(12).css("background-position","-3px -390px");
		    $(".nav .margin .first ul li").eq(13).css("background-position","-3px -422px");
		    $(".nav .margin .first ul li").eq(14).css("background-position","-3px -458px");
    	
    }
   BgPosition();
    
   (function(){//使 右侧 栏目的 位置 向上靠拢  top为 负值
   	  //var i = 0;
      for(var i = 0;i<15;i++){
      	$(".nav .margin .first ul li .div_1").eq(i).css("top",(-1)*i*5+"px");
      }
   	  
   	  //i++
   })(); 
     
   //列表鼠标滑过效果
   $(".nav .margin .first").hover(function(){
        $(".nav .margin .first .list").css("display","block");	
   },function(){  	    
   	    $(".nav .margin .first .list").css("display","none");	 
   });
   $(".nav .margin .first ul li").hover(function(){
   	 $(this).find(".a_2").css("color"," #C69C6D");   	 
   	 $(this).find('span').attr("class","active");
   	 $(this).css("background","white url(images/brand_category2.png) no-repeat");
   	 BgPosition();
   	 
   },function(){
   	
   	$(this).find(".a_2").css("color"," #000"); 
   	$(this).find(".a_f").css("color"," #C69C6D");
   	$(this).css("background","#f7f7f7 url(images/brand_category1.png) no-repeat");
   	BgPosition();
   	$(this).find('span').removeClass("active");  
   }); 
   
   //右侧导航栏鼠标滑过 效果
   $(".nav .margin .first ul li").hover(function(){
   	      $(this).find(".div_1").css("display","block");
   },function(){
   	      $(this).find(".div_1").css("display","none");
   });
   
   //ajax  json 
   
   //搜索框下的json
    ajaxRequest("post","js/json_1.json",null,function(data){
               var _category = JSON.parse(data);
               //console.log(_category);              
                dataReader_1(_category);
            },true);
   
   //隐藏导航栏的json
   ajaxRequest("post","js/json_2.json",null,function(data){
               var _category = JSON.parse(data);
               //console.log(_category);              
                dataReader_2(_category);
            },true);
  
   
});

 
       
function dataReader_1(_category){
	var i = 0;
	for(var key in _category){
		$("<a href=\""+_category[key]["url"]+"?id="+key+"\">"+_category[key]["name"]+"</a>")
		.appendTo($(".logo .margin .search ul li").eq(i));	
				
		i++;
	}
}

function dataReader_2(_category){
	var i = 0,j = 0;
	var _h2 = null,_a = null,_div = null;
	for(var key in _category){
		_h2 = null;
		_a = null;
		_div = null;
		//创建h2标签 并加入到创建的div中    
		//把创建的a标签加入到h2中
		$(".nav .margin .first ul .a_2").eq(i).attr("href",_category[key]["url"]+"?id="+key)
		.html(_category[key]["name"]);
		j = 0;
		for(var k1 in _category[key]["children"]){	
			//创建h2
		    _h2 = $("<h2></h2>").html("<a class='key_title' href=''>"+_category[key]["children"][k1]["name"]+"</a>");						
			//创建div
			$("<div class='container clear'></div>").html(_h2).insertBefore($(".nav .margin .first ul li").eq(i).find(".div_1_1"));
			_div = $("<div class='div_new left'></div>").appendTo($(".nav .margin .first ul li").eq(i).find(".container").eq(j));
			j++;
		    for(var k2 in _category[key]["children"][k1]["children"]){
		       
		       $("<a class='key_t2' href=''>"+_category[key]["children"][k1]["children"][k2]["name"]+"</a>")
		            .appendTo(_div);
		    }
		}
		i++;
	}
}

function  Denglu(){//登录  注销  按钮      登录 按钮隐藏 
	if($.cookie("user")){
		$(".head_2_1_2 .login").find(".hide").hide();
		//alert(11);
		var _s = $.cookie("user").split(",")[0].substr(6,11);//获取 电话号码的后11位
		
		
		var _name = $.cookie("user").split(",")[0].replace(_s,"...")
		$(".head_2_1_2 .login").append($("<a id='name' href=''>"+_name+"</a>"));
		
		$(".head_2_1_2 .register").find("a").hide();
		
		$(".head_2_1_2 .register").append("<a id='cancel' href=''>注销</a>");
		//.append("<a id='cancel' href=''>注销</a>");
		//console.log($("#cancel"))
		$("#cancel").click(function(e){
			e.preventDefault();
			//alert(33);
			$(this).parents().find(".hide").show();
			$(".head_2_1_2 .register").find("a").show();
			$("#name,#cancel").hide();
			$.removeCookie("user",{path : "/"});
		});
		//return false;
		
	}else{
		//alert(22);
		return;
	}
}


function cartbox(){
	$(".logo .margin .cartbox").hover(function(){
		$("#cartbox_hide").show();
	},function(){
		$("#cartbox_hide").hide();
	});	
}


function Cartbox_right(){
	$(".fixed .right_hide2 .right_hide2_1 .span1").click(function(){
			$(this).parents(".fixed").stop().animate({right:-300},300);
			
	});
	$(".fixed .right_hide .li_1").click(function(){
		$(this).parents(".fixed").stop().animate({right:0},300);
	});
	
	$(".right_hide ul li").hover(function(){
		$(this).find("p").show();
		//$(this).find("img").show();
	},function(){
		$(this).find("p").hide();
		//$(this).find("img").show();
		
	});
	
	$(".right_hide ul .li_5").hover(function(){
		$(this).find("img").show();
	},function(){
		$(this).find("img").hide();
	});
	
	
	$(".right_hide ul .li_8").click(function(){
		 //$(document).scrollTop(0);
		 $("html,body").stop().animate({scrollTop:0},200);
	});
	
}
function fn1(){//右侧 固定栏
	$(".right_hide ul .li_1").hover(function(){
		$(this).css("background","#b28247 url(img_login/share02.png) -88px -121px");
	},function(){
		$(this).css("background","#333 url(img_login/share02.png) -88px -156px")
	});
	
	$(".right_hide ul .li_2").hover(function(){
		$(this).css("background","#b28247 url(img_login/share02.png) -141px -124px");
	},function(){
		$(this).css("background","#333 url(img_login/share02.png) -140px -154px")
	});
	
	$(".right_hide ul .li_3").hover(function(){
		$(this).css("background","#b28247 url(img_login/share02.png) -203px -126px");
	},function(){
		$(this).css("background","#333 url(img_login/share02.png) -202px -155px")
	});
	
	$(".right_hide ul .li_4").hover(function(){
		$(this).css("background","#b28247 url(img_login/share02.png) -258px -125px");
	},function(){
		$(this).css("background","#333 url(img_login/share02.png) -258px -125px")
	});
	
	$(".right_hide ul .li_5").hover(function(){
		$(this).css("background","#b28247 url(img_login/lux_index.png) -475px -52px");
	},function(){
		$(this).css("background","#333 url(img_login/share02.png) -312px -155px")
	});
	
	$(".right_hide ul .li_6").hover(function(){
		$(this).css("background","#b28247 url(img_login/lux_index.png) -124px -52px");
	},function(){
		$(this).css("background","#333 url(img_login/share02.png) -374px -157px")
	});
	
	
	$(".right_hide ul .li_7").hover(function(){
		$(this).css("background","#b28247 url(img_login/line_bg.png) 10px -19px");
	},function(){
		$(this).css("background","#333 url(img_login/line_bg.png) 10px 9px")
	});
	
	$(".right_hide ul .li_8").hover(function(){
		$(this).css("background","#b28247 url(img_login/lux_index.png) -401px -52px");
	},function(){
		$(this).css("background","#333 url(img_login/share02.png) -437px -153px");
	});
	
}


function load(){//加载cookie
	var cartStr = $.cookie("cart");
	    console.log(cartStr);
		if(!cartStr){
			$("#cartbox_right").show();
		}else{
			
			$("#cartbox_right").hide();
			
			var cartStr = $.cookie("cart");
			var cartObj = convertCartStrToObj(cartStr);
			var obj = cartObj["sp1"];
			
			var str = "<div class='GOOD'><ul>"+
			          "<li class='GOOD-1'>"+"<img class='GOOD-1-1' src="+obj.src+">"+"<span class='GOOD-1-2'>"+obj.name+"</span>"+"<span class='GOOD-1-3'>"+obj.num+"</span>"+"<span class='GOOD-1-4'>￥"+obj.price+"</span>"+"</li>"+
			          "<li class='GOOD-2'>"+"<span class='GOOD-2-1'></span>"+"<span class='GOOD-2-2'></span>"+"</li>"+
			          "<li class='GOOD-3'>结算</li>"
			          +"</ul></div>";
			//if($(".GOOD")){
				$("#HIDE .GOOD").remove();    
			//}
			
			$(str).appendTo($("#HIDE"));
			
			
			$("#HIDE .GOOD .GOOD-2-1").text(function(){
				return obj.num+"件商品";
			});
			$("#HIDE .GOOD .GOOD-2-2").text(function(){
				return "￥"+obj.num*obj.price;
			});
			console.log(obj);
			
			$("#num").text(function(){
					return obj.num;
				});
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