/*window.onload = function(){
	alert(document.getElementById("box").innerHTML);
	alert(document.getElementsByName("sex")[0].value);
	alert(document.getElementsByTagName("p")[0].innerHTML);
}*/
window.onload = function(){

	alert(Base.getId("box").innerHTML);
	alert(Base.getName("sex")[0].value);
	alert(Base.getTagName("p")[0].innerHTML);
}