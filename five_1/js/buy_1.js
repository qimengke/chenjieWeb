$(function(){
	 Obtain();
	del();
	Buy();
	
	
});


function Obtain(){
	var cartStr = $.cookie("cart");
	    console.log(cartStr);
		if(!cartStr){
			$(".blank").show();
		}else{ 
		
	        console.log(5555);
	        
			$(".blank").hide();
			//$(".fixed .right_hide2 .cartbox_right img").css("display","none");
			//console.log($(""));
			var cartObj = convertCartStrToObj(cartStr);
			console.log(cartObj);
			/*for(key in cartObj){
				
			}*/
			var obj = cartObj["sp1"];
			console.log(cartObj["sp1"].price);
			var str = "<div id='goods'>"+
			         "<ul><li class='goods-1'><input type='checkbox'/></li>"+
			         "<li class='goods-2'><img src="+obj.src+"></li>"+
			         "<li class='goods-3'>"+obj.name+"</li>"+
			         "<li class='goods-4'>"+obj.price+"</li>"+
			         "<li class='goods-5'>"+obj.num+"</li>"+
			         "<li class='goods-6'>"+"</li>"+
			         "<li class='goods-7'>"+obj.num*obj.price+"</li>"+
			         "<li class='goods-8'>"+"<a href=''>删除</a>"+"</li></ul>"+
			         "</div>"+
			         "<div id='del'><ul>"+
			           "<li class='del-1'><input type='checkbox'>全选</li>"+
			           "<li class='del-2'>继续购物</li>"+
			           "<li class='del-3'>清空购物车</li>"+
			           "<li class='del-4'>已选商品：<span class='del-4-1'></span>件  商品总金额(不含运费)：<span class='del-4-2'></span></li>"+
			           "<li class='del-5'><a class='del-5-1' href=''>点击结算</a></li>"
			         +"</ul></div>"
			 $(str).appendTo(".step .margin");
		}
}



function del(){
	$("#goods ul li.goods-8 a").click(function(e){
		e.preventDefault();
		$("#goods").hide();
		$(".blank").show();
		$("#del").hide();
		
		$.removeCookie("cart",{path : "/"});
		
	});
}


function Buy(){//点击结算
	$("#del .del-4-2").text(function(){
		//alert($("#goods .goods-7").text());
		return "￥"+$("#goods .goods-7").text();
	});
	$("#del .del-4-1").text(function(){
		//alert($("#goods .goods-5").text());
		return $("#goods .goods-5").text();
	});
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