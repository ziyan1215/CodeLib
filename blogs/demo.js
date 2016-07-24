/*window.onload = function(){
	alert(document.getElementById("box").innerHTML);
	alert(document.getElementsByName("sex")[0].value);
	alert(document.getElementsByTagName("p")[0].innerHTML);
}*/
/*window.onload = function(){

	alert(Base.getId("box").innerHTML);
	alert(Base.getName("sex")[0].value);
	alert(Base.getTagName("p")[0].innerHTML);
}
Base 是一个基础库核心对象，返回的是divElement 这个对象没有CSS方法*/

window.onload = function(){
	//个人中心
	$().getClass('member').hover(function(){
		//$().getId("set").style.display= "block";
		//$().getClass('member').css("background","green");
		$(this).css("background","green");
		
		$().getTagName("ul").show();
	},function(){
		$().getTagName("ul").hide();
		$(this).css("background","white");
	})

	//登录框
/*	var top=(document.documentElement.clientHeight-27)/2;
	var left=(document.documentElement.clientWidth-350)/2;
	//alert(top);
	//alert(left);
	$().getId('login').css('top',top+'px').css('left',left+'px');
*/
/*	window.onresize=function(){
		var top=(document.documentElement.clientHeight-200)/2;
		var left=(document.documentElement.clientWidth-350)/2;
		//alert(top);
		//alert(left);
		$().getId('login').css('top',top+'px').css('left',left+'px');
	}
*/
/* $().getId('login').center(200,350).resize(function(){
 		$().getId('login').center(200,350);
 });

  $().getClass('login').click(function(){
 	$().getId('login').css('display','block');
 	 $().getId('screen').css('display','block').lock();  

 });

 $().getClass('close').click(function(){
 	$().getId('login').css('display','none');
 	 $().getId('screen').css('display','none').unlock();  
 });*/
 
 var login = $().getId('login');
 var screen = $().getId('screen');

  login.center(200,350);
  $().resize(function(){
  	login.center(200,350); //锁屏居中
  if(login.css('display')=='block'){
  		screen.lock(); //锁屏
  };
  
  });
/* login.center(200,350);
login.center(200,350).resize(function(){
 		login.center(200,350);
 });*/

  $().getClass('login').click(function(){
 	login.css('display','block');
 	//screen.css('display','block').lock();  
 	screen.lock();

 });

 $().getClass('close').click(function(){
 	login.css('display','none');
 	//screen.css('display','none').unlock();  
 	screen.unlock();  
 });
 
//login.addClass('a');
//alert(document.styleSheets[0]);















	};

	
