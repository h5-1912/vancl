//获取min-max之间的随机整数
function getRand(min, max) {
	return parseInt(Math.random() * (max - min + 1) + min);
}

//获取十六进制的随机颜色值
function getColor() {
	str = "0123456789abcdef";
	var color = "#";
	var rand;
	for (var i = 0; i < 6; i++) {
		rand = getRand(0, 15); //调用获取随机整数的函数getRand;
		color += str.charAt(rand);
	}
	return color;
}

//获得随机验证码 num 传入需要的验证码位数,
function getYZM(num) {
	var str = "";
	var ch, randASC; //声明
	for (var i = 0; i < num; i++) {
		randASC = getRand(48, 122);
		if ((randASC >= 58 && randASC <= 64) || (randASC >= 91 && randASC <= 96)) {
			i--;

		} else {
			ch = String.fromCharCode(randASC);
			str += ch;
		}
	}
	return str;
}

function dateToString(date) {
	var str = "";
	var week = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
	var y = date.getFullYear();
	var m = date.getMonth() + 1;
	var d = date.getDate();
	var h = date.getHours();
	var f = date.getMinutes();
	var s = date.getSeconds();
	var w = date.getDay();
	str += y + "年" + getDB(m) + "月" + getDB(d) + "日 ";
	str += getDB(h) + ":" + getDB(f) + ":" + getDB(s) + " ";
	str += week[w];
	return str;
}

function getDB(num) {
	return num < 10 ? "0" + num : num;
}

//获取两个时间差的秒数
function difTime(startTime, endTime) {
	return (endTime.getTime() - startTime.getTime()) / 1000;
}

function $id(id) {
	return document.getElementById(id)
}


//兼容性获取所有的className 
//用法 getEleClassName("father")[0] ,括号内的className要双引号,后面要用下标获取
function getEleClassName(className) {
	var eleArr = [];
	var allEle = document.getElementsByTagName("*");
	for (var i = 0; i < allEle.length; i++) {
		if (allEle[i].className === className) {
			eleArr.push(allEle[i]);
		}
	}
	return eleArr;
}

//获取父元素内所有子元素节点,括号内传入父元素,不需要加双引号;
function getEleInChldren(supNode) {
	var nodesArr = [];
	//获取所有子节点
	var sub = supNode.childNodes;
	//	遍历所有子节点
	for (var i = 0; i < sub.length; i++) {
		if (sub[i].nodeType == 1) {
			nodesArr.push(sub[i]);
		}
	}
	return nodesArr;
}

//阻止事件冒泡的兼容
function stopProp(e) {
	if (e.stopPropagation) { //高版本浏览器
		e.stopPropagation();
	} else { //ie8
		e.cancelBubble = true;
	}
}

//阻止事件默认行为兼容
function preventDef(e) {
	if (e.preventDefault) { //高版本浏览器
		e.preventDefault();
	} else {
		e.returnValue = false;
	}
}


//兼容ie8获取事件对象的鼠标button属性
function getButton(eve) {
	if (eve) { //高版本浏览器
		return eve.button;
	} else { //ie8
		var but = window.event.button;
		switch (but) {
			case 1:
				return 0;
			case 4:
				return 1;
			case 2:
				return 2;
		}
	}
}

//身份证号验证
//450998 1999 07 30 345 6

//450998  [1-9]\d{5};

//1900 - 2100
//1999  (19\d{2}|20\d{2}|2100)
//07	(0[1-9]|1[0-2])
//30	(0[1-9]|[12]\d|3[01])
//345   \d{3};
//6|x|X (\d|x|X)
function checkIdCode(idCode) {
	var idCodeReg = /^[1-9]\d{5}(19\d{2}|20\d{2}|2100)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}(\d|x|X)$/;
	var idStr = idCode.toString();
	var y = idStr.substr(6, 4);
	var m = idStr.substr(10, 2);
	var d = idStr.substr(12, 2);
	console.log(y, m, d);
	var dReg30 = /^(0[1-9]|[12]\d|30)$/;
	var mReg2r = /^(0[1-9]|1\d|2[0-9])$/;
	var mReg2p = /^(0[1-9]|1\d|2[0-8])$/;
	if (idCodeReg.test(idCode)) { //
		switch (m) {
			case "04":
			case "06":
			case "09":
			case "11":
				//
				if (dReg30.test(d)) {
					return true;
				} else {
					return false;
				}
				case "02":
					if (y % 4 == 0 && y % 100 != 0 || y % 400 == 0) {
						if (mReg2r.test(d)) {
							return true;
						} else {
							return false;
						}
					} else {
						if (mReg2p.test(d)) {
							return true;
						} else {
							return false;
						}
					}
		}
		return true;
	} else {
		return false;
	}

}


//去除字符串左边空格
function myTrimLeft(str) {
	return str.replace(/^\s+/, "");
};

//去除字符串右边空格
function myTrimRight(str) {
	return str.replace(/\s+$/, "");
};

// 去除字符串左右两边的空格

function myTrim(str) {
	return str.replace(/^(\s+|\s+$)/g, "");
};


// 拖拽时,不会拖动框内文本的兼容
function getSelec() {
	return window.getSelection() ? window.getSelection().removeAllRanges() : document.selection.empty();
}

// 获得元素样式的兼容

/**
 *
 *
 * @param {*} dom 标签名
 * @param {*} attr  标签内需要获取的元素
 * @returns
 */
function getStyle(dom, attr) {
	if (dom.currentStyle) {
		return dom.currentStyle[attr];
	} else {
		return getComputedStyle(dom, false)[attr]
	}
}

//事件监听绑定方式
/**
 *
 *
 * @param {*} dom  添加事件监听器的节点,如: div,btn
 * @param {*} type 事件类型,不带"on",如: click,mousemove
 * @param {*} handle 事件驱动程序(函数),需要做的效果
 * @returns
 */
function addEvent(dom, type, handle) {
	
	try {
		return 	dom.addEventListener(type, handle)
	} catch (e) {
		return 	dom.attachEvent("on" + type, handle)
	}
	
}
//第二种兼容方式
// function addEvent(obj, type, callBack) {
// 	if (obj.addEventListener) {
// 		obj.addEventListener(type, callBack);
// 	} else {
// 		obj.attachEvent("on" + type, callBack);
// 	}
// }
//第三种用三目运算做的兼容
// function addEvent(obj, type, callBack) {
// 	obj.addEventListener ? obj.addEventListener(type, callBack) : obj.attachEvent("on" + type, callBack)
// }
//  addEvent(div,"click",function(){
// 	 alert(1);
//  })


//获得距离文档的高度的坐标兼容(包括滚走的距离)
function pageY(){
 return	e.clientY + (document.documentElement.scrollTop||document.body.scrollTop)
}

//获得距离文档的左边的坐标兼容(包括滚走的距离)
function pageX(){
	return	e.clientX + (document.documentElement.scrollLeft||document.body.scrollLeft)
   }


//封装一个方法,返回页面被卷曲的部分

/**
 *
 *
 * @returns scroll().left 或者scroll().top 调用
 */
function scroll(){
	return {
		"left":document.documentElement.scrollLeft||document.body.scrollLeft,
		"top":document.documentElement.scrollTop||document.body.scrollTop
	}
}


/**
 *
 *
 * @param {*} obj :需要运动的元素	
 * @param {*} attr : 需要运动的元素的"属性" 用双引号
 * @param {*} target  元素需要运动的目标位置 ,不带单位,如果是透明度,输入0-100;
 */
function move(obj,attr,target,fn){
	clearInterval(obj.timer);
	
	obj.timer=setInterval(function(){
		if (attr=="opacity"){
			var current =parseInt(getStyle(obj,"opacity")*100)
		}else{
			var current = parseInt(getStyle(obj,attr));
		}

	var speed = current>target? -3 :3;
	if(Math.abs(current-target)<3){
		if(attr=="opacity"){
			obj.style["opacity"]=target/100;
		}else{
			obj.style[attr]=target+"px";
		}
		clearInterval(obj.timer)
	}else{
		current=current+speed;
		if(attr=="opacity"){
			obj.style["opacity"]=current/100;
		}else{
			obj.style[attr]=current+"px";
		}
	}
	
	
	},20)
}



//封装一个多属性缓动函数
/**
 *
 *
 * @param {*} obj  需要运动的元素节点
 * @param {*} json 以对象的个是传入需要改变的属性和属性值,如,{width:200} 如果是opacity,传0-100
 * @param {*} fn  可以不传,若是需要链式运动 在animate(obj,{width:100},function(){animate(obj,{height:200})})
 */
function animate(obj,json,fn,speedTime){	
	// console.log(json)
	speedTime= speedTime||20	
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var flag = true;
		for(var attr in json){
			if(attr !="zIndex"){
				if(attr=="opacity"){
				//如果遍历到的属性是opacity要乘以100
				var current = parseInt(getStyle(obj,attr)*100);	
			}else{
				var current = parseInt(getStyle(obj,attr));	
			}
							
			var speed = (json[attr]-current)/10;
			speed = speed>0?Math.ceil(speed):Math.floor(speed)
			if(current==json[attr]){
				//如果遍历到的属性是opacity,赋值的时候要除以100
				if(attr=="opacity"){
					obj.style[attr] = json[attr]/100;
				}else{
					obj.style[attr] = json[attr]+"px";
				}
					
			}else{
				current = current + speed;
				//如果遍历到的属性是opacity,赋值的时候要除以100
				if(attr=="opacity"){
					obj.style[attr] = current/100;
				}else{
					obj.style[attr] = current+"px";
				}
				
				flag = false;
			}
		}else{
			obj.style[attr] = json[attr]
		}
			
		}
		if(flag){
			if(fn){
				fn();
			}
			clearInterval(obj.timer);
		}

	},speedTime)
}


