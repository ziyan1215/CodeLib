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
	$().getClass('member').hover(function(){
		//$().getId("set").style.display= "block";
		//$().getClass('member').css("background","green");
		$(this).css("background","green");
		
		$().getTagName("ul").show();
	},function(){
		$().getTagName("ul").hide();
		$(this).css("background","white");
	})
	};
