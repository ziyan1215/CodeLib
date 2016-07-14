
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr]; //currentStyle 针对IE浏览器
	}else{
		return getComputedStyle(obj,false)[attr];//getComputedStyle针对firefox浏览器
	}
}

/*
function startMove(obj,attr,iTarget,fn){
			clearInterval(obj.timer);
//假如var icur=parseInt(getStyle(obj,'width')); 放这里会出问题
			obj.timer = setInterval(function(){
				var icr=0;
				if(attr == 'opacity'){
					icur =Math.round(parseFloat(getStyle(obj,attr))*100);//对小数四舍五入
				}
				else{
					icur=parseInt(getStyle(obj,attr));
				}
				
				if(icur == iTarget){
					clearInterval(obj.timer);	
					if(fn){
						fn();
					}			
				}else{
				
				var speed = (iTarget-icur)/8;
				speed = speed > 0 ?  Math.ceil(speed) : Math.floor(speed);//缓冲运动要对speed取整
				if(attr == 'opacity'){
					obj.style.filter = 'alpha(opacity:'+(icur+speed)+')'; //兼容IE浏览器
					obj.style.opacity = (icur+speed)/100; //兼容火狐谷歌浏览器
				}
				else{
					obj.style[attr] = icur+speed+'px';
				}
				
				}

			},30)
		}*/

/*
function startMove(obj,json,fn){
			clearInterval(obj.timer);
//假如var icur=parseInt(getStyle(obj,'width')); 放这里会出问题
			obj.timer = setInterval(function(){
				for(var attr in json){

				//1.取当前的值
				var icr=0;
				if(attr == 'opacity'){
					icur =Math.round(parseFloat(getStyle(obj,attr))*100);//对小数四舍五入
				}
				else{
					icur=parseInt(getStyle(obj,attr));
				}
				//3.检测停止
				if(icur == json[attr]){
					clearInterval(obj.timer);	
					if(fn){
						fn();
					}			
				}else{
				//2.计算速度
				var speed = (json[attr]-icur)/8;
				speed = speed > 0 ?  Math.ceil(speed) : Math.floor(speed);//缓冲运动要对speed取整
				if(attr == 'opacity'){
					obj.style.filter = 'alpha(opacity:'+(icur+speed)+')'; //兼容IE浏览器
					obj.style.opacity = (icur+speed)/100; //兼容火狐谷歌浏览器
				}
				else{
					obj.style[attr] = icur+speed+'px';
				}
				
				}
				}

			},30)
		}*/



function startMove(obj,json,fn){
			var flag = true;//假设
			clearInterval(obj.timer);
//假如var icur=parseInt(getStyle(obj,'width')); 放这里会出问题
			obj.timer = setInterval(function(){
				for(var attr in json){

				//1.取当前的值
				var icr=0;
				if(attr == 'opacity'){
					icur =Math.round(parseFloat(getStyle(obj,attr))*100);//对小数四舍五入
				}
				else{
					icur=parseInt(getStyle(obj,attr));
				}
				//3.检测停止
				if(icur ！= json[attr]){
					flag = false;
					}			
				//2.计算速度
				var speed = (json[attr]-icur)/8;
				speed = speed > 0 ?  Math.ceil(speed) : Math.floor(speed);//缓冲运动要对speed取整
				if(attr == 'opacity'){
					obj.style.filter = 'alpha(opacity:'+(icur+speed)+')'; //兼容IE浏览器
					obj.style.opacity = (icur+speed)/100; //兼容火狐谷歌浏览器
				}
				else{
					obj.style[attr] = icur+speed+'px';
				}
				if(flag){
					clearInterval(obj.timer);
					if(fn){
						fn();
					}
				}
				
				}
				

			},30)
		}