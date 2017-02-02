$(function(){
	            Bg();
	            Jug();
	            
	            
	          /*  $("#chk").click(function(){
	            	
		           //alert(33);
		            	$('#usrname').val("");
		            	$("#pwd").val("");
		              
	            });*/
	            
	            
				$("#sub").click(function (){
					// 获取用户输入的用户名和密码
					
					var usn = $('#usrname').val();
					var pwd = $("#pwd").val();
					var reg_1 = /\w+[@]{1}\w+[.]\w+/;//邮箱
					var reg_2 = /^[1][3578][0-9]{9}/;//手机号码
					$("#usrname,#pwd").focus(function(){
						$(".login .hide").hide();
					});
					
					if(!reg_1.test(usn)){//判断用户名输入 是否合法
						if(!reg_2.test(usn)){
							$(".login .hide").show();
							return;
						}
				
					}
					
					// 校验用户名和密码是否正确
					
					// 如果正确，则登录成功
					// name value expires
					var user = $.cookie("registerUsers")? $.cookie("registerUsers"): "";
					//alert(33);
					
					
					console.log(user);
					var _rememberUsers = Confirm(user,usn,pwd);
					//alert(_rememberUsers);
					remember(user,_rememberUsers);
				});
				
				
			
});

function Confirm(user,usn,pwd){//验证 用户名和密码 是否匹配
	user = user.split(":");
	//console.log(user);
	var _res = [];
	//console.log(_res);
	for(var i = 0;i<user.length;i++){
		_res = user[i].split(",");
		 if(_res[0] == usn ){
		 	 if(_res[1] == pwd){
		 	 	var keywords = _res[0]+","+_res[1]+":";
		 	 	$.cookie("user", keywords, {expires:7, path:"/"});		 	 	
		 	 	window.location.href = "index_1.html";
		 	 	return keywords;
		 	 }else{
		 	 	alert("密码错误！");
		 	 	return;
		 	 }
		 }
	}
	alert("用户名不存在");
	return;
}


function Bg(){//随机背景
	var _t = parseInt(Math.random()*2)+1;
	$(".login").css("background","url(img_login/b"+_t+".jpg)")
	.find(".img").attr("src","img_login/bg"+_t+".png");			
}

function remember(user,_rememberUsers){//将  本次登录的用户名和密码 存进cookie
	if($("#chk").get(0).checked){
		//alert(_rememberUsers);
	  $.cookie("rememberUser",_rememberUsers, {expires:7, path:"/"});
	}else{//如果 记住我 没有点击 就删除 cookie
	  $.removeCookie("rememberUser",{path : "/"});
	}
	
	//var user = $.cookie("registerUsers");
	
}

function Jug(){//判断 上次登录的用户是哪个   cookie的 最后一组数据
	//alert(33);
	var usr = $.cookie("rememberUser");
	var pwd = 0,name = 0;
	//alert(usr);
	if(usr){
		//console.log(33);
		
		usr = usr.split(":");
		name = usr[usr.length-2].split(",")[0];
		pwd = usr[usr.length-2].split(",")[1];		 
		//console.log("remember");
		$('#usrname').val(name);
		$("#pwd").val(pwd);
	}else{
		return;
	}
}
