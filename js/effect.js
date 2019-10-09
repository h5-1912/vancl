// 特效3: 懒加载
$(function () {
    //page=1 0~4
    //page=2 5~9
    //page=3 10~14
    var page = 0;
    $(window).on('mouseenter', function () {
        page++;
        var start = 5 * (page - 1);
        var end = 5 * page - 1;
        $("img").each(function (index, val) {
            if ((index >= start) && (index <= end)) {
                $(val).attr("src", $(val).attr("data-src")).removeAttr('data-src')
            }
        })
    })
})



// 特效2:放大镜(Magnifier)
var small = $('.small'); 
var big = $('.big'); 
small.on("mouseenter", function () {
    $(this).siblings('.big').css('display', 'block')
})
small.on('mouseleave', function () {
    $(this).siblings('.big').css('display', 'none')
})

// 特效1:小火箭(rocket)
//获取相关元素
var gotop = $id('gotop');
var height = 20; //一定距离就是height
//绑定页面滚动事件
window.onscroll = function () {
    var scrollTop = scroll().top //页面被卷曲的上部
    if (scrollTop > height) {
        //小火箭显示
        gotop.style.display = "block";
    } else {
        //小火箭显示
        gotop.style.display = "none";
    }
}


//点击小火箭,页面被卷曲的部分为0,小火箭隐藏
gotop.onclick = function () {
    //小火箭隐藏
    gotop.style.display = "none";
    if (document.documentElement.scrollTop) {
        document.documentElement.scrollTop = 0;
    } else {
        document.body.scrollTop = 0;
    }
}
//该方法根据传入的id返回该id对应的标签
function $id(id) {

    return document.getElementById(id);
}
//封装一个方法,返回页面被卷曲的部分
function scroll() {
    return {
        "left": document.documentElement.scrollLeft || document.body.scrollLeft,
        "top": document.documentElement.scrollTop || document.body.scrollTop
    }
}