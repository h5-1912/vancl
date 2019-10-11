$(function(){
    $('#submit').click(function(){
        var user = $('#username').val(); //获取账号
        var pass = $('#password').val(); //获取密码
        var pass1 = $('#password2').val(); //获取确认密码
        var userl = user.replace(/\s+/g,'');//去掉空格
        var reg = /^(1|\+861)[3-9][0-9]{9}$/g; //判断手机格式
        var pa = pass.replace(/\s+/g,''); //去掉空格
        var pas = /^[\da-zA-z]{6,12}$/; //判断密码格式 6-12位
       
        var info = true;
        //判断账号不能为空
        if($.trim(user)==''){
            $('.error-z').html('请输入有效的邮箱或手机');//提示账号
            $('#username').css('border','1px solid red');
            $('#username').keyup(function(){
                $('#username').css('border','1px solid #cccccc')
                $('.error-z').html('');
            });
            info = false;
            
        }else if(!reg.test(userl)){  //判断账号格式为 1开头 11位数
            //如果不是这个格式则显示
            $('.error-z').html('请输入有效的邮箱或手机');//提示账号
            $('#username').css('border','1px solid red');
            //然后按下
            $('#username').keyup(function(){
                $('#username').css('border','1px solid #cccccc')
                $('.error-z').html('');
            })
            info = false;
            
        }
        //判断密码不能为空
        if($.trim(pass)==''){
            $('.error-mm').html('请输入您的密码');//提示密码
            $('#password').css('border','1px solid red');
            $('#password').keyup(function(){
                $('#password').css('border','1px solid #cccccc')
                $('.error-mm').html('');
                
            });
            info = false;
        }else if(!pas.test(pa)){ //判断密码格式  6-12位
             //如果不是这个格式则显示
            $('.error-z').html('请输入有效的邮箱或手机');//提示账号
            $('#username').css('border','1px solid red');
            //然后按下
            $('#username').keyup(function(){
                $('#username').css('border','1px solid #cccccc')
                $('.error-z').html('');
            })
            info = false;
        }
        //确认密码不能为空
        if($.trim(pass1)==''){    
            $('.error-qm').html('请输入确认密码');//提示确认密码
            $('#password2').css('border','1px solid red');
            $('#password2').keyup(function(){
                $('#password').css('border','1px solid #cccccc')
                $('.error-qm').html('');
            })
            info = false;
        }else if(pass!==pass1){
            // //判断2次输入密码一致;
            $('.error-qm').html('两次密码不一致');//提示确认密码
            $('#password2').css('border','1px solid red');
            //然后按下
            $('#password2').keyup(function(){
                $('#password2').css('border','1px solid #cccccc')
                $('.error-qm').html('');
            })
            info = false;
        }

        if(info){
            // $.ajax({
            //     type: 'get',
            //     url: 'php/login.php',
            //     data:'act=add&user='+user+'&pass='+pass,
            //     cache: false,//不使用缓存
            //     dataType: 'json',
            //     success: function (str) {
            //        if(str.err==0){
            //            alert(str.msg);
            //            window.location.href='login.html';//成功后跳转页面
            //        }
            //     }
            // })
            var newDom=document.createElement("script");
            newDom.setAttribute("type","text/javascript");
            var str="http://localhost/vancl/dist/php/login.php?act=add&user=" + user + '&pass=' + pass+"&callback=fn"
            newDom.setAttribute("src",str);
            $("body").append($(newDom));

        }
    })  
})


