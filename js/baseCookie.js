//设置cookie经过iDay天后过期
function setCookie(key,value,iDay){
	var oDate = new Date();
	oDate.setDate(oDate.getDate()+iDay);//用来设置过去时间
	document.cookie = key+'='+value+";expires="+oDate.toString();
}
//获取指定的key的cookie值
function getCookie(key){
	var arr = document.cookie.split(";");//获取当前域名的所有的cookie,以;分割成数组;
	for(var i=0;i<arr.length;i++){
		var arr2 = arr[i].split('=');
		if(arr2[0].trim()==key){
			return arr2[1];
		}
	}
	return '';//没有找到返回值
}
//删除指定key的cookie
function removeCookie(key){
	setCookie(key,1,-1);//-1就是告诉系统已经过期,系统就会立刻去删除他;
}

