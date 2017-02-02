$(function(){
	banner();
	bannerLogo();
	 
	//品牌旗舰
	ajaxRequest("post","js/json_3.json",null,function(data){
               var _data = JSON.parse(data);
               //console.log(_data);              
                dataReader_3(_data);
            },true);
            
    ajaxRequest("post","js/json_4.json",null,function(data){
               var _data = JSON.parse(data);
               console.log(_data);              
               dataReader_4(_data);
               
               //使动态创建的div在一行显示  祛除border-right
               $("#main_1 .margin .main_1_2 .list ul li").each(function(){
               	     $(this).find(".div_img1").eq(6).css("marginRight","0");
               });
               
               $("#main_1 .margin .main_1_2 .list ul li").each(function(){
               	   $(this).find(".div_img1").eq(13).css("marginRight","0");
               });
               
                Display();
            },true);
    Click_1();
	Hover();
	Position();
	Star();
	Shopping_1();
	Promotionpic();
	Leftlunbo()
	//Carouse();
});



function Star(){//鼠标 滑过display  block
	$("#main_2 .main_2_2 ul .li_3 .nodes").hover(function(){
		$(this).find(".hide").css("display","block");
	},function(){
		$(this).find(".hide").css("display","none");
	});
	
	
	$("#main_2 .main_2_2 ul .li_3 .nodes_t").hover(function(){
		$(this).find(".hide").css("display","block");
	},function(){
		$(this).find(".hide").css("display","none");
	});
	
}

function Shopping_1(){
	$("#main_3 .main_3_2 ul li").scrollTop(0);
	$("#main_3 .main_3_2 ul li").hover(function(){
		$(this).stop().animate({scrollTop:50},300);
	},function(){
		$(this).stop().animate({scrollTop:0},300);
	});
}

function Click_1(){
	var _left = 0;
	if($("#main_1 .margin .main_1_2 .list").scrollLeft()%1210!=0){
		return;
	}
	
	$("#main_1 .margin .main_1_2 .t_title .t_right .t_right_1").click(function(){
		
		  _left = $("#main_1 .margin .main_1_2 .list").scrollLeft();
		  //alert(_left);
		  $("#main_1 .margin .main_1_2 .list").stop().animate({scrollLeft:_left-1210},500)
	});
	
	$("#main_1 .margin .main_1_2 .t_title .t_right .t_right_2").click(function(){
		
		  _left = $("#main_1 .margin .main_1_2 .list").scrollLeft();
		  //alert(_left);
		  $("#main_1 .margin .main_1_2 .list").stop().animate({scrollLeft:_left+1210},500)
	});
}

function Hover(){
	$("#main_2 .main_2_1 ul li").eq(0).addClass("active");
	$("#main_2 .main_2_1 ul li").hover(function(){
		$("#main_2 .main_2_1 ul li").removeClass("active");
		$(this).addClass("active");
		var _i = parseInt($(this).index());
		//$(this).css("background","#000");
		$("#main_2 .main_2_2").stop().animate({scrollLeft:_i*1210},200);
	},function(){
		$(this).siblings().removeClass("active");
		//$("#main_2 .main_2_1 ul li").not($(this)).css("style","");
		//alert(3);
	});
}


function Position(){
	$("#main_2 .main_2_2 .li_1 .right_div").hover(function(){
		 $(this).find(".words").stop().animate({left:-20},200);
		 $(this).find("img").stop().animate({left:20},200);
	},function(){
		$(this).find(".words").stop().animate({left:0},200);
		 $(this).find("img").stop().animate({left:0},200);
	});
}

function Display(){//鼠标滑过显示文字
	//alert(33);
	$("#main_1 .margin .main_1_2 .list ul li").each(function(){//遍历每个li标签
		//alert(33);
		$(this).find(".div_img2").each(function(){
			//alert(33);
			$(this).hover(function(){//遍历每个div绑定事件
				//console.log(33);
				//e.stopPropagation();
				var _this = $(this);
				$(this).siblings(".border_top").stop().animate({width:167},100,function(){
					_this.stop().animate({opacity:1},200);
				});
				$(this).siblings(".border_left").stop().animate({height:83},100);
				$(this).siblings(".border_bottom").stop().animate({width:167},100);
				$(this).siblings(".border_right").stop().animate({height:83},100);
			},function(){
				var _this = $(this);
				//$(this).find("a").css('color',"#000000");
				$(this).siblings(".border_top").stop().animate({width:0},100,function(){
					_this.stop().animate({opacity:0},200);
				});
				$(this).siblings(".border_left").stop().animate({height:0},100);
				$(this).siblings(".border_bottom").stop().animate({width:0},100);
				$(this).siblings(".border_right").stop().animate({height:0},100);
			});
		});
});
	//alert(44);
	
}

function dataReader_4(_data){//json
	var _div1 = null,_div2 = null,i = 0;
	 for(var key in _data){
	 	 for(var k1 in _data[key]){
	 	 	console.log(_data);
	 	 	_div = $("<div class='div_img1'></div>")
	 	 	.appendTo($("#main_1 .margin .main_1_2 .list ul li").eq(i));
	 	 	
	 	 	$("<img src="+_data[key][k1]["src"]+" />").appendTo(_div);
	 	 	
	 	 	_div2 = $("<div class='div_img2'></div>")
	 	 	.appendTo(_div);//保存 文字  图片说明
	 	 	
	 	 	//$("<span class='img_span'></span>").appendTo(_div2);
	 	 	
	 	 	$("<p><a href=''>"+_data[key][k1]["name"]+"</a></p>").appendTo(_div2);
	 	 	
	 	 	
	 	 	var _span = "<div class='img_bottom'><span class='img_span'></span></div>"
	 	 	$(_span).appendTo(_div2);
	 	 	
	 	 	
	 	 	
	 	 	//加入四个边框的div
	 	 	var _border = "<div class='border_top'></div>"+
	 	 	              "<div class='border_left'></div>"+
	 	 	              "<div class='border_bottom'></div>"+
	 	 	              "<div class='border_right'></div>";
	 	 	$(_border).appendTo(_div);  
	 	 }
	 	 i++;
	 }
}


 function dataReader_3(_data){//解析json数据
 	  var i = 0;
  	  for(var key in _data){
  	  	 $("<img src="+_data[key]["src"]+" />")
  	  	 .appendTo($("#main_1 .margin .main_1_1 ul li").eq(i).find("a"));
  	  	 
  	  	 $("<img src="+_data[key]["children"]["src"]+" />")
  	  	 .appendTo($("#main_1 .margin .main_1_1 ul li").eq(i).find(".banner_logo"));
  	  	 
  	  	 $("<span></span>")
  	  	 .appendTo($("#main_1 .margin .main_1_1 ul li").eq(i).find("a .banner_logo"));
  	  	 
  	  	 $("<p>"+_data[key]["name"]+"</p>")
  	  	 .appendTo($("#main_1 .margin .main_1_1 ul li").eq(i).find("a .banner_logo"));
  	  	 
  	  	 $("<p>"+_data[key]["chinese"]+"</p>")
  	  	 .appendTo($("#main_1 .margin .main_1_1 ul li").eq(i).find("a .banner_logo"));
  	  	 
  	  	 i++;
  	  }
  	  
  }

 function bannerLogo(){//品牌旗舰 图片效果
  	$("#main_1 .margin .main_1_1 ul li").hover(function(){
  		$(this).find("a .banner_logo").stop().animate({height:154},200);
  	},function(){
  		$(this).find("a .banner_logo").stop().animate({height:50},200);
  	});
  }


function banner(){//轮播图
	var i = 0,_timer = 0;
	exec(i);
	Over();
	ClickLeft();
	ClickRight();
	BtnOver(); 
		function exec(i){//轮播图
			$("#banner .margin_1 .container").scrollLeft(i*1440);
			$("#banner .margin_1 .btn ul li").eq(i).addClass("active");
			_timer = setInterval(function(){
				i++;
				//console.log(i);
					$("#banner .margin_1 .btn ul li").eq(i-1).removeClass("active");
				    $("#banner .margin_1 .btn ul li").eq(i).addClass("active");	
				    if(i == 4){//解决  i每次从1开始的bug		    	
				    		$("#banner .margin_1 .btn ul li").eq(0).addClass("active");		    	
				    }
				$("#banner .margin_1 .container").stop(true).animate({scrollLeft:i*1440},500,function(){
					//console.log($("#banner .margin_1 .container").scrollLeft());
					if(i == 4){				 	
						$("#banner .margin_1 .container").scrollLeft(0);
						i = 0;			
					  }
				});								 
			},3000);
		}
		function Over(){
			$("#banner .margin_1 .btn ul li").hover(function(){
				$("#banner .margin_1 .btn ul li").removeClass("active");
				window.clearInterval(_timer);
				$(this).addClass("active");
				i = $(this).index();
				$("#banner .margin_1 .container").stop(true).animate({scrollLeft:i*1440},200);
			},function(){
				$(this).removeClass("active");
					exec(i*1);
			});
		}
		
		function ClickLeft(){
			$("#banner .margin_1 .templateleft").click(function(){	
				//window.clearInterval(_timer);
				$("#banner .margin_1 .btn ul li").removeClass("active"); 
				var _left = $("#banner .margin_1 .container").scrollLeft();
				var _t = parseInt(_left/1440)-1;
				if(_left == 0){
					$("#banner .margin_1 .container").scrollLeft(5760);
					_left = $("#banner .margin_1 .container").scrollLeft();
				}
				
				$("#banner .margin_1 .btn ul li").eq(_t).addClass("active");
				$("#banner .margin_1 .container").stop(true).animate({scrollLeft:_left-1440},200);
				
			});
		}
		function ClickRight(){	
			$("#banner .margin_1 .templateright").click(function(){		
				//window.clearInterval(_timer);		
				$("#banner .margin_1 .btn ul li").removeClass("active");
				var _right = $("#banner .margin_1 .container").scrollLeft();
				var _t = Math.floor(_right/1440)+1;//_t的最小值为2
				console.log(_t);
				if(_right == 5760){
					$("#banner .margin_1 .container").scrollLeft(0);
					_right = $("#banner .margin_1 .container").scrollLeft();
				}	
				 if(_t == 4){//解决  i每次从1开始的bug		    	
				    		$("#banner .margin_1 .btn ul li").eq(0).addClass("active");		    	
				    }
				 if(_t == 5){
				 	    $("#banner .margin_1 .btn ul li").eq(1).addClass("active");		
				 }
				$("#banner .margin_1 .btn ul li").eq(_t).addClass("active");
				$("#banner .margin_1 .container").stop(true).animate({scrollLeft:_right+1440},200);		
			});
		}
		
		function BtnOver(){
			$("#banner .margin_1 .temp").hover(function(){
				 window.clearInterval(_timer);
			},function(){
				$("#banner .margin_1 .btn ul li").removeClass("active");
				var _i = parseInt($("#banner .margin_1 .container").scrollLeft()/1440);
				exec(_i);
			});
		}
}


function Promotionpic(){
	$("#main_11 .margin .left li").hover(function(){
		var i = parseInt($(this).index())+1;
		$(this).find(".border_top").stop().animate({width:192},200,function(){
			//alert(i);
			  $("#main_11 .margin .right").find("img").attr("src","img_main2/"+i+"bank.jpg");
		});
		$(this).find(".border_left").stop().animate({height:63},200);
		$(this).find(".border_bottom").stop().animate({width:192},200);
		$(this).find(".border_right").stop().animate({height:62},200);
	},function(){
		$(this).find(".border_top").stop().animate({width:0},200);
		$(this).find(".border_left").stop().animate({height:0},200);
		$(this).find(".border_bottom").stop().animate({width:0},200);
		$(this).find(".border_right").stop().animate({height:0},200);
	});
}




function Leftlunbo(){//右侧小轮播图
	$(".main_5 .margin .left .carouse .pic .btn").each(function(){
		var _this = $(this),_left = 0,i = 0;
		$(this).parents(".carouse").scrollLeft(0);
		//alert(44);
		$(this).find("li").eq(0).addClass("active");
		$(this).find("._left").click(function(){
			i++;
			_left = _this.parents(".carouse").scrollLeft();
			_this.find("li").removeClass("active");
			i = i%3;
			_this.find("li").eq(i).addClass("active");
			_this.parents(".carouse").stop().animate({scrollLeft:_left+224},200,function(){
				if(_left+224 == 672){
					_this.parents(".carouse").scrollLeft(0);
				}
			});
		});
		$(this).find("._right").click(function(){
			i--;
			if(_this.parents(".carouse").scrollLeft() != 0){
				
			i = Math.abs(i%3);	
			_left = _this.parents(".carouse").scrollLeft();
			_this.find("li").removeClass("active");
			//i = parseInt(_left/224)-1;
			_this.find("li").eq(i).addClass("active");
			_this.parents(".carouse").stop().animate({scrollLeft:_left-224},200,function(){
				 
			});
			}else{
				_this.parents(".carouse").scrollLeft(672);
				_this.find("li").removeClass("active");
				
				i = 2;	
			   // i = parseInt(_left/224)-1;
			    _this.find("li").eq(i).addClass("active");
				_left = _this.parents(".carouse").scrollLeft();
				_this.parents(".carouse").stop().animate({scrollLeft:_left-224},200,function(){
				  if(_left-224 == 224){
				  	 _this.parents(".carouse").scrollLeft(672);
				  }
			   });
			}
		});
	});
}
