//跨浏览器获取视口大小
function getInner(){
	if(typeof window.innerWidth != 'undefined'){
		return{
			width :window.innerWidth,
			height:window.innerHeight
		}
	}else{
		return{
			width:document.documentElement.clientWidth,
			height:document.documentElement.clientHeight
		}
	}
}


//跨浏览器获取style
function getStyle(element,attr){
			//兼容获取外部样式  .getComputedStyle()获取的是最终应用在元素上的所有CSS属性对象
			if(typeof window.getComputedStyle != 'undefined'){ //w3c
				return window.getComputedStyle(element,null)[attr];
			}else if(typeof elements.currentStyle != 'undefined'){ //ie
				return element.currentStyle[attr];
			}
}


//判断是否存在class
function hasClass(element,className){
	return element.className.match(new RegExp("(\\s|^)"+className+"(\\s|$)" )); 
			
}

//跨浏览器添加link规则
function insertRule(sheet, selectorText,cssText,position){
	if(typeof sheet.insertRule !='undefined'){//W3C
		sheet.insertRule(selectorText +'{'+cssText+'}',position);
	}else if(typeof sheet.addRule !='undefined'){//IE
		sheet.addRule(seletorText,cssText,position);
	}
}  

//跨浏览器移除link规则
function deleteRule(sheet, index){
	if(typeof sheet.insertRule !='undefined'){//W3C
		sheet.deleteRule(index);
	}else if(typeof sheet.addRule !='undefined'){//IE
		sheet.removeRule(index);
	}

}