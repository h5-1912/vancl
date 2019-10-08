
 
var small=document.getElementById("small");
var mask=document.getElementById("mask");
var big=document.getElementById("big");
var bigImg=document.getElementById("bigImg");
var box=document.getElementById("box");

small.onmouseenter=function(e){
    
    var e=e||event;
    // var x=e.offsetX;
    // var y=e.offsetY;
    big.style.display="block";
    mask.style.display="block";
    bigImg.style.zIndex=2;    
            
}
small.onmousemove=function(e){

    var e=e||event;
    var l=e.pageX-box.offsetLeft-(mask.offsetWidth/2)
   
    var t=e.pageY-box.offsetTop-(mask.offsetHeight/2)
    
    var maxL=box.offsetWidth-mask.offsetWidth;
    var maxT=box.offsetHeight-mask.offsetHeight;
    if(l<0){
        l=0;   //让小图可视区最小值不小于小图的边界
     }
     if(l>maxL){
         l=maxL;
     }
     if(t<0){
         t=0;
     }
     if(t>maxT){
         t=maxT;
     }
    
    mask.style.left=l+"px";  //小图可视区的左定位
    mask.style.top=t+"px";
    
    var smallL =small.clientWidth-mask.clientWidth; 	
    var bigL =bigImg.clientWidth-big.clientWidth;       
    var smallT=	small.clientHeight-mask.clientHeight;
    var bigT=bigImg.clientHeight-big.clientHeight; 
    bigImg.style.left=-(l/smallL)* bigL +"px";
    bigImg.style.top=-(t/smallT)*bigT +"px";
}
box.onmouseleave=function(){
    mask.style.display="none";
    big.style.display="none";
    bigImg.style.zIndex=null;
    mask.style.top=0;
    // mask.style.left=0;
}
window.onscroll=function(){
    if(scroll().top>=600) {
        $(".title-product-hidden").css({"position":"fixed","display":"block","top":0,"width":"100%"})
    }else{
     $(".title-product-hidden").css({"position":"fixed","display":"none","top":0,"width":"100%"})
    }
      
 }