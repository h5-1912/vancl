$(function(){
	//点击登录
	 $('#submit').click(function(){
		var user=$('#username').val();
		var pass=$('#password').val();
		var userl = user.replace(/\s+/g,'');
		var reg = /^(1|\+861)[3-9][0-9]{9}$/g; //判断手机格式
        var pa = pass.replace(/\s+/g,''); //去掉空格
        var pas = /^[\da-zA-z]{6,12}$/; //判断密码格式 6-12位
        var info = true;
       //判断手机号不能为空
       if($.trim(user)==''){  
            $('.error-z').html('请输入有效的邮箱或手机号码')
            $('#username').css('border','1px solid red')

            $('#username').keyup(function(){
                $('#username').css('border','1px solid #cccccc')
                $('.error-z').html('');
            })
            info = false;
        }else if(!reg.test(userl)){
            $('.error-z').html('请输入有效的邮箱或手机号码')
            $('#username').css('border','1px solid red')

            $('#username').keyup(function(){
                $('#username').css('border','1px solid #cccccc')
                $('.error-z').html('');
            })
            info = false;
        }
        // 判断密码不能为空
        if($.trim(pass)==''){
            $('.error-m').html('请输入你的密码');
            $('#password').css('border','1px solid red');
            $('#username').keyup(function(){
                $('#password').css('border','1px solid #cccccc')
                $('.error-m').html('');
            })
            info = false;
        }else if(!pas.test(pa)){
            $('.error-m').html('请输入你的密码');
            $('#password').css('border','1px solid red');
            $('#username').keyup(function(){
                $('#password').css('border','1px solid #cccccc')
                $('.error-m').html('');
            })
            info = false;
        }
         if(info){
            // $.ajax({
            //     type: 'get',
            //     url: 'http://localhost/php/login.php',
            //     data:'act=login&user='+user+'&pass='+pass,
            //     dataType: 'json',
            //     cache: false,//不使用缓存
            //     success: function (str) {
            //         if(str.err==0){
            //             alert('登录成功')
            //             window.location.href='../index.html';//登录成功跳转首页
            //         }
            //     }
            // });
            var newDom=document.createElement("script");
            newDom.setAttribute("type","text/javascript");
            var str="http://localhost/vancl/dist/php/login.php?act=login&user=" + user + '&pass=' + pass+"&callback=fn"
            newDom.setAttribute("src",str);
            $("body").append($(newDom));
       }
	})
	
})