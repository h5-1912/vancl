<?php
header("Content-Type:text/html;charset=UTF-8");
include "./conn.php";
$act = $_GET['act'];
$user = strtolower($_GET['user']);
$pass = $_GET['pass'];
// $query="SELECT * FROM user WHERE username='$user' AND password='$$pass'";
// $result=mysqli_query($conn,$query);
// $rows=mysqli_num_rows($result);
// if($rows){
// 	setcookie('id',$un,time()+24*60*60);
// 	$url1='../index.html';
// 	//echo "登录成功";
// 	echo "<script> window.location.href='$url1';</script>"; 
   
// }else{
// 	$url2='../zhuce.html';
// 	echo "<script> window.location.href='$url2';</script>";
// }
switch($act){
	case 'add':

		if($user==''||$user==null){
			echo '{"err":"1","msg":"用户名不能为空"}';
			exit();
		}

		if($pass==''||$pass==null){
			echo '{"err":"1","msg":"密码不能为空"}';
			exit();
		}
		$sql = "SELECT COUNT(*) FROM vancluser WHERE username='{$user}'";
		
		$res = mysqli_query($conn,$sql);
		
		$row = mysqli_fetch_array($res);
		
		if((int)$row[0]>0){
			echo '{"err":"1","msg":"此用户名已被占用"}';
			exit();
		}
		
		$sql = "INSERT INTO vancluser (username,password) VALUES('{$user}','{$pass}')";
		mysqli_query($conn,$sql);
		
		echo '{"err":"0","msg":"注册成功"}';
		break;
		
	case 'login':
		$sql = "SELECT COUNT(*) FROM vancluser WHERE username='{$user}' AND password='{$pass}'";
		$res = mysqli_query($conn,$sql);
		
		$row = mysqli_fetch_array($res);
		
		if((int)$row[0]>0){
		
			echo '{"err":"0","msg":"登录成功"}';
			
			exit();
		}else{
		
			echo '{"err":"1","msg":"用户名或密码有误"}';
			
			exit();
		}
		break;
}
?>