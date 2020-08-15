<template>
	<view class="content">
		<view class="home-button">
			<uni-icons type="home" size="20" color="#FFFFFF"></uni-icons>
		</view>
		<view class="content-image">
			<image class="image-logo"  src="../../static/images/minelogo.png"></image>
		</view>
		<view class="login-view">
			<view class="phone">
				<view class="icon-style">
				<uni-icons type="phone" color="#909399" size="16"></uni-icons>
				<text class="icon-text">手机号码</text>	
				</view>
				<input class="input-style" type="number" placeholder="请输入手机号" 
					placeholder-style="font-size:12px" />
			</view>
			<view class="phone">
				<view class="icon-style">
				<uni-icons type="locked" color="#909399" size="16"></uni-icons>
				<text class="icon-text">密码</text>	
				</view>
				<input class="input-style" password="true" type="text" placeholder="请输入密码" 
					placeholder-style="font-size:12px" />
			</view>
			<view class="forget">
				<text class="forgetPwd">忘记密码</text>
			</view>
				<button class="button-login">登录</button>
				<view class="split-line">————快速登录————</view>
				<view class="weixinIcon"><uni-icons color="#3ab54a" type="weixin" size="40"></uni-icons></view>
				
		</view>
		<view class="bottom">
					<text>还没有账号？</text>
					<text class="registered">马上注册</text>
				</view>
	</view>
</template>

<script>
	import {uniIcons} from '@dcloudio/uni-ui/lib/uni-icons/uni-icons.vue'
	export default{
		components:{
			uniIcons
		}
	}
</script>

<style>
.content {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		 /* background-color: #F5F5F5; */
		z-index: 1;
	}
.content-image{
	width: 100%;
	height:260px;
}
.image-logo{
	width: 100%;
	height: 100%;
}
.login-view{
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.phone{
	width: 95%;
	height: 40px;
	display: flex;
	flex-direction: row;
	border-bottom: 1px #ccc solid;
}
.icon-style{
	width: 150px;
	height: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
}
.icon-text{
	font-size: 12px;
	margin-left: 5px;
}
.input-style{
	width: 90%;
	height: 100%;
	display: block;
	text-overflow: clip;
	overflow: hidden;
	white-space: nowrap;
	font-family: UICTFontTextStyleBody;
}
.forget{
	width: 100%;
	height: 50px;
	display: flex;
	justify-content: flex-end;
	padding-top: 5px;
}
.forgetPwd{
	font-size: 12px;
	color: #4399fc;
	padding-right:10px ;
}
.button-login{
	width: 80%;
	height: 40px;
	border-radius: 40px;
	position: relative;
	display: block;
	margin-left: auto;
	margin-right: auto;
	padding-left: 14px;
	padding-right: 14px;
	box-sizing: border-box;
	font-size: 16px;
	font-weight: 100;
	text-align: center;
	text-decoration: none;
	line-height: 40px;
	-webkit-tap-highlight-color: transparent;
	overflow: hidden;
	cursor: pointer;
	color: #FFFFFF;
	background-color: #fa436a;

}
.split-line{
	width: 50%;
	height: 50px;
	font-weight: 500;
	color: #909399;
	line-height: 50px;
	text-align: center;
}
.weixinIcon{
	width: 100%;
	height: 60px;
	display: flex;
	justify-content: center;
	align-items: center;
}
.bottom{
	position: absolute;
	bottom: 0;
	right: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 20px;
	font-size: 12px;
}
.registered{
	color: #4399fc;
}
.home-button{
	position: absolute;
	top: 10px;
	left: 89%;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 35px;
	height: 35px;
	background-color: rgba(0,0,0,.5);
	border-radius: 50%;
}
</style>
