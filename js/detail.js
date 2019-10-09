var small = $id("ZRPsmall");
var mask = $id("ZRPmask");
var big = $id("ZRPbig");
var bigImg = $id("ZRPbigImg");
var box = $id("ZRPbox");
small.onmouseenter = function (e) {
    var e = e || event;
    big.style.display = "block";
    mask.style.display = "block";
    bigImg.style.zIndex = 2;
}
small.onmousemove = function (e) {
    var e = e || event;
    var l = e.pageX - box.offsetLeft - (mask.offsetWidth / 2)
    var t = e.pageY - box.offsetTop - (mask.offsetHeight / 2)
    var maxL = box.offsetWidth - mask.offsetWidth;
    var maxT = box.offsetHeight - mask.offsetHeight;
    if (l < 0) {
        l = 0; //让小图可视区最小值不小于小图的边界
    }
    if (l > maxL) {
        l = maxL - 2;
    }
    if (t < 0) {
        t = 0;
    }
    if (t > maxT) {
        t = maxT - 2;
    }

    mask.style.left = l + "px"; //小图可视区的左定位
    mask.style.top = t + "px";
    var smallL = small.clientWidth - mask.clientWidth;
    var bigL = bigImg.clientWidth - big.clientWidth;
    var smallT = small.clientHeight - mask.clientHeight;
    var bigT = bigImg.clientHeight - big.clientHeight;
    bigImg.style.left = -(l / smallL) * bigL + "px";
    bigImg.style.top = -(t / smallT) * bigT + "px";
}
box.onmouseleave = function () {
    mask.style.display = "none";
    big.style.display = "none";
    bigImg.style.zIndex = null;
    mask.style.top = 0;
    mask.style.left = 0;
}
//吸顶效果
window.onscroll = function () {
    if (scroll().top >= 600) {
        $(".ZRP-title-product-hidden").css({
            "position": "fixed",
            "display": "block",
            "top": 0,
            "width": "100%"
        })
    } else {
        $(".ZRP-title-product-hidden").css({
            "position": "fixed",
            "display": "none",
            "top": 0,
            "width": "100%"
        })
    }

}
//吸顶效果 end
    //第一个小图的缩略图
    $(".thumbnail1").click(function () {
        $(".thumbnail1").css({
            "border": "2px solid #a50000",
            "width": "70px",
            "height": "70px"
        })
        $(".thumbnail2").css({
            "border": "2px solid transparent",
            "width": "70px",
            "height": "70px"
        });
        if ($(this).css('background-image').substr(-21, 15) == "joinimagesWhite") {
            $("#ZRPsmall").children("img").attr("src", "./images/xiangqing/smallpicWhite.jpg")
            $("#ZRPbigImg").attr("src", "./images/xiangqing/bigpicWhite.jpg");
        } else {
            $("#ZRPsmall").children("img").attr("src", "./images/xiangqing/smallPicBlack.jpg")
            $("#ZRPbigImg").attr("src", "./images/xiangqing/bigPicBlack.jpg");
        }


    })
    //第二个小图的缩略图
    $(".thumbnail2").click(function () {
        $(".thumbnail2").css({
            "border": "2px solid #a50000",
            "width": "68px",
            "height": "68px"
        })
        $(".thumbnail1").css({
            "border": "2px solid transparent",
            "width": "70px",
            "height": "70px"
        });
        if ($(this).css('background-image').substr(-21, 15) == "joinimagesWhite") {
            $("#ZRPsmall").children("img").attr("src", "./images/xiangqing/smallpicWhite2.jpg")
            $("#ZRPbigImg").attr("src", "./images/xiangqing/bigpicWhite2.jpg");
        } else {
            $("#ZRPsmall").children("img").attr("src", "./images/xiangqing/smallPicBlack2.jpg")
            $("#ZRPbigImg").attr("src", "./images/xiangqing/bigPicBlack2.jpg");
        }
    })
   
    //产品颜色白色的选择框
    $(".checkbox-color-white").click(function () {
        $(this).css({
            "border": "2px solid #a50000"
        }).siblings("li").has("img").css({
            "border": "2px solid #b3b3b3"
        })
        $(".checkedVal").html($(".checkbox-color-white").text())
        $(".ZRSelectorColor").html($(".checkbox-color-white").text());
        $(".thumbnail1").css({
            "border": "2px solid #a50000"
        }).siblings().css({
            "border": "none"
        })
        $("#ZRPsmall").children("img").attr("src", "./images/xiangqing/smallpicWhite.jpg");
        $("#ZRPbigImg").attr("src", "./images/xiangqing/bigpicWhite.jpg");

        $(".thumbnail1").css({
            "background": "url('./images/xiangqing/joinimagesWhite.jpg') no-repeat -2px 4px"
        })

        $(".thumbnail2").css({
            "background": "url('./images/xiangqing/joinimagesWhite.jpg') 0 -68px no-repeat"
        })

    })
    //产品颜色黑色的选择框
    $(".checkbox-color-black").click(function () {
        $(this).css({
            "border": "2px solid #a50000"
        }).siblings().has("img").css({
            "border": "2px solid #b3b3b3"
        })
        $(".checkedVal").html($(".checkbox-color-black").text());
        $(".ZRSelectorColor").html($(".checkbox-color-black").text());
        $(".thumbnail1").css({
            "border": "2px solid #a50000"
        })
        $(".thumbnail2").css({
            "border": "2px solid transparent"
        })
        $("#ZRPsmall").children("img").attr("src", "./images/xiangqing/smallpicBlack.jpg");
        $("#ZRPbigImg").attr("src", "./images/xiangqing/bigpicBlack.jpg");

        $(".thumbnail1").css({
            "background": "url('./images/xiangqing/joinimagesBlack.jpg')   no-repeat -2px 4px"
        })

        $(".thumbnail2").css({
            "background": "url('./images/xiangqing/joinimagesBlack.jpg') 0px -68px no-repeat"
        })
    })
    //产品尺码按键;
    $(".productSize").click(function () {
        $(this).css({
            "border": "2px solid #a50000"
        }).siblings("li").css({
            "border": "2px solid #b3b3b3"
        })
        $(".checkedSizeVal").text($(this).text())
    })

    $(".ZRP-title-product-right-hidden").children("li").children("a").click(function () {
        $(this).css({
            "color": "#a50000",
            "font-weight": "700"
        });
        $(this).parent().siblings("li").children("a").css({
            "color": "black"
        })
    })
    //立即购买按键
    $(".buyNow").click(function () {
        var checkVal = $(".checkedVal").html()
        var checkedSizeVal = $(".checkedSizeVal").text()
        // var productNum = $(".selectBtn").children().value;
        var productNum = parseInt($(".selectBtn")[0].value);
        var productName = $(".ZRP-nav-list").children("li:nth-child(5)").children().html();
        var productPrice = $(".after2").html();
        var productPIC = $("#ZRPbigImg").attr("src");

        //获取本地购物车列表数据
        var productList = JSON.parse(window.localStorage.getItem("list") || "[]");
        //产品数据
        var product = {
            img: productPIC,
            name: productName,
            color: checkVal,
            size: checkedSizeVal,
            price: productPrice,
            num: productNum

        }

        productList.push(product);
        //把数据加入后台,跳转
        window.localStorage.setItem("list", JSON.stringify(productList))
        window.location.href = "./mycart.html"
    })
    //加入购物车按键
    $(".cartBtn").click(function () {
        var checkVal = $(".checkedVal").html()
        var checkedSizeVal = $(".checkedSizeVal").text()
        var productNum = $(".selectBtn").children().value;
        var productNum = parseInt($(".selectBtn")[0].value);
        var productName = $(".ZRP-nav-list").children("li:nth-child(5)").children().html();
        var productPrice = $(".after2").html();
        var productPIC = $("#ZRPbigImg").attr("src")

        var productList = JSON.parse(window.localStorage.getItem("list") || "[]");
        var product = {
            img: productPIC,
            name: productName,
            color: checkVal,
            size: checkedSizeVal,
            price: productPrice,
            num: productNum
        }
        productList.push(product);
        window.localStorage.setItem("list", JSON.stringify(productList))
        window.location.href = "./mycart.html"
        console.log(productList)
    })
    //获取所有评论的数量
    $(".radio-box").children("h2").children("span").html($(".evaluate-box").children().size()-1);
     //获取图片评论的数量
    $(".radio-box").children("span").html($(".evaluate-box").children("div:has(img)").size());
    //评论图片放大事件
    // $(".radio-box").children("div:has(img)").click(function(){
    //     $(this).css({"width":"100px"})
    // })
    var containPICBoxChildren= $(".containPICBox").children("div").children("div ").children("div:has(img)").children("img")
    var flag=true;
    $(containPICBoxChildren).click(function(){
        if(flag){
            $(this).css({"width":"400px","height":"400px","position":"absolute"})
            flag=!flag
        }else{
            $(this).css({"width":"60px","height":"60px","position":"static"});
            flag=!flag
        }
    })
    
    //买家评论含图片的选择框
    $("#picBtn").click(function () {
        $(".containBox").css({
            "display": "none"
        })
    })
    //全部买家评论的选择框
    $("#allBtn").click(function () {
        $(".containBox").css({
            "display": "block"
        })
    })


    //产品主图下方的活动倒计时
    function getRTime() {
        var EndTime = new Date("2019/11/01 00:00:00"); //截止时间
        var NowTime = new Date();
        var t = EndTime.getTime() - NowTime.getTime();
        var d = Math.floor(t / 1000 / 60 / 60 / 24);
        var h = Math.floor(t / 1000 / 60 / 60 % 24);
        var m = Math.floor(t / 1000 / 60 % 60);
        var s = Math.floor(t / 1000 % 60);

        $(".huodongtimeBox").html(d + "天:" + h + "时:" + m + "分:" + s + "秒")
    }
    setInterval(getRTime, 1000);
 

$(function () {
    var $li = $(".xwrap>ul>li");
    $li.mouseenter(function () {
        $(this).children("ul").stop().slideDown();
    });

    $li.mouseleave(function () {
        $(this).children("ul").stop().slideUp();
    });
});

var wei = document.getElementById('wei');
var img = document.getElementById("ximg");
wei.onmouseenter = function () {

    img.style.display = "block";
}
wei.onmouseleave = function () {
    img.style.display = "none";
}

var slider = $('slider');
var prev = $('prev');
var next = $('next');