$(function(){
	$(".brand_1 .margin ul li .hide").hover(function(){
		$(this).stop().animate({opacity:1},500)
		.parent().find(".container").stop().animate({opacity:0.4},500);
		
	},function(){
		$(this).stop().animate({opacity:0},500)
		.parent().find(".container").stop().animate({opacity:0},500);
	});
	
	$(".brand_3 .margin img").hover(function(){
		  $(this).stop().animate({marginTop:-15},400);
		   $(this).addClass("active");
	},function(){
		 $(this).stop().animate({marginTop:0},400);
		 $(this).removeClass("active");
	});
	
	
	$(".brand_4 .brand_4_1 ul li a").not(".fir").hover(function(){
		$(this).addClass("act");
		$(this).parent().css("marginTop","-2px");
	},function(){
		$(this).parent().css("marginTop","0");
		$(this).removeClass("act");
	});
});