
/*//函数式写法
function $(id){
	return document.getElementById(id);
}*/

/*

 ///对象式
var base = {
	$ : function(id){
		return document.getElementById(id);
	},
	$$ : function(name){
		return document.getElementsByName(name);
	},
	$$$ : function(tagName){
		return document.getElementsByTagName(tagName);
	},
}
*/

/*//对象式
var Base = {
	getId : function(id){
		return document.getElementById(id);
	},
	getName : function(name){
		return document.getElementsByName(name);
	},
	getTagName : function(tagName){
		return document.getElementsByTagName(tagName);
	},
}*/
//前台调用
var $ = function(_this){
	return new Base(_this);
}

//基础库
function Base(_this){
	//创建一个数组，用来保存获取的节点和节点数组
	this.elements = []; //放进基础库里面防止变量公有化。
	if(_this!=undefined){//_this是一个对象，undefined也是一个对象，区别于typeof带单引号的对象
		this.elements[0] = _this;
	}
}


	
	//获取ID
	Base.prototype.getId = function(id){
		this.elements.push(document.getElementById(id));
		return this;
	}

	//获取TagName
	Base.prototype.getTagName = function(tagName){
		var tags = document.getElementsByTagName(tagName);
		for(var i = 0 ;i<tags.length;i++){
			this.elements.push(tags[i]);
		}
		return this;
	}



/*//设置CSS
Base.prototype.css = function(attr,value){
	for(var i = 0 ; i<this.elements.length;i++){
		if(arguments.length == 1){ //只有一个参数的时候  获取该CSS属性值
			return this.elements[i].style[attr];
		}
			this.elements[i].style[attr]=value;
	
	}
	return this;
}*/

//设置CSS
Base.prototype.css = function(attr,value){
	for(var i = 0 ; i<this.elements.length;i++){
		if(arguments.length == 1){ //只有一个参数的时候  获取该CSS属性值
			//兼容获取外部样式  .getComputedStyle()获取的是最终应用在元素上的所有CSS属性对象
			if(typeof window.getComputedStyle != 'undefined'){ //w3c
				return window.getComputedStyle(this.elements[i],null)[attr];
			}else if(typeof this.elements[i] != 'undefined'){ //ie
				return this.elements.style[attr];
			}
		}
			this.elements[i].style[attr]=value;
	
	}
	return this;
}

//添加class
Base.prototype.addClass = function(className){
	for(var i=0;i<this.elements.length;i++){
		if(!this.elements[i].className.match(new RegExp("(\\s|^)"+className+"(\\s|$)" ))){
			this.elements[i].className += " "+ className; //" "里面要加空格  防止添加的时候类名叠加在一起 a b 形成 ab
		}
		
	}
	return this;
}

//设置innerHTML
Base.prototype.html = function(str){

	for(var i =0;i<this.elements.length;i++){
		if(arguments.length==0){//假如没有参数的时候  就获取该element的innerHTML值
		return this.elements[i].innerHTML;
	}
		this.elements[i].innerHTML = str;
	}
	return this;
}

//触发点击事件
Base.prototype.click=function(fn){
	for(var i =0;i<this.elements.length;i++){
		this.elements[i].onclick = fn;
	}
}

/*//获取class节点数组
Base.prototype.getClass=function(className){
	var all = document.getElementsByTagName("*");
	for(var i=0;i<all.length;i++){
		if(all[i].className==className){
			this.elements.push(all[i]);
		}
	}
	return this;
}*/
//获取class节点数组，增加一个获取区间的参数
Base.prototype.getClass=function(className,idName){
	var node = null;
	if(arguments.length==2){
		node = document.getElementById(idName);
	}else{
		node=document;
	}
	var all = node.getElementsByTagName("*");
	for(var i=0;i<all.length;i++){
		if(all[i].className==className){
			this.elements.push(all[i]);
		}
	}
	return this;
}



//获取某一个节点
Base.prototype.getElement = function(num){
	var element = this.elements[num]; //新建一个变量存储获取的class对象
	this.elements = []; //清空获取的对象
	this.elements[0] = element;//给返回值赋值为获取的第几个对象
	return this;

}

//设置鼠标移入移出
Base.prototype.hover=function(over,out){
	for(var i=0;i<this.elements.length;i++){
		this.elements[i].onmouseover = over;
		this.elements[i].onmouseout = out;
	}
	return this;
}
//设置显示
Base.prototype.show = function(){
	for(var i=0;i<this.elements.length;i++){
		this.elements[i].style.display = "block";
	}
	return this;
}
//设置隐藏
Base.prototype.hide = function(){
	for(var i=0;i<this.elements.length;i++){
		this.elements[i].style.display = "none";
	}
	return this;
}

