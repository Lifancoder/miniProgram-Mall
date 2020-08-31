<template>
	<view class="content-login" v-if="showLogin==false">
		<view class="home-button" @click="toIndex">
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
				<input class="input-style" type="number" maxlength=11 placeholder="请输入手机号" 
				v-model="loginInfo.phoneNum"	placeholder-style="font-size:12px" />
			</view>
			<view class="phone">
				<view class="icon-style">
				<uni-icons type="locked" color="#909399" size="16"></uni-icons>
				<text class="icon-text">密码</text>	
				</view>
				<input class="input-style" password="true" type="text" placeholder="请输入密码" 
				v-model="loginInfo.password"	placeholder-style="font-size:12px" />
			</view>
			<view class="forget">
				<text class="forgetPwd">忘记密码</text>
			</view>
				<button class="button-login" @click="login">登录</button>
				<view class="split-line">————快速登录————</view>
				<view class="weixinIcon"><uni-icons color="#3ab54a" type="weixin" size="40"></uni-icons></view>
				
		</view>
		<view class="bottom">
					<text>还没有账号？</text>
					<text class="registered">马上注册</text>
				</view>
	</view>
	
	
	<view class="content" v-else>
		<view class="input-opacity" :style="{opacity:scroll}">
			<text style="color: #000000;">我的</text>
		</view>
		<view class="input-select"  >
				<uni-icons class="icon-styles" type="chat":color="textColor" size="20"></uni-icons>
			<uni-icons class="icon-styles" type="gear" :color="textColor" size="22" @click="showGear(showgearview)"></uni-icons>
		</view>
		<view class="show-gear" v-show="showgearview">
			<text @click="colseGear">退出</text>
		</view>
		<view class="background-view">
			<view class="avatar">
				<image class="avatar-image" :src="avatarUrl"></image>
			</view>
			<view class="avatar-right">
				<view class="userName">{{userName}}</view>
				<view class="userTag"><text>{{userTag}}</text></view>
			</view>
		</view>
		<view style="width: 100%;height: 100%;padding: 0 10px;box-sizing: border-box;">
			<view class="phoneNum"><text style="margin-left: 10px;">{{phone}}</text></view>
			
			<!-- 我的资产 -->
		<view class="assets">
			<view class="mine-assets" @click="toMore">
				<text class="assets-title">我的资产</text>
				<view class="assets-more">
					<text class="more-text">更多</text>
					<uni-icons type="forward" size="14" color="#909399"></uni-icons>
				</view>
			</view>
			<view class="assets-amount">
				<view class="amount-child" @click="toBalance(mineAmount.balance)">
					<text class="amount">{{mineAmount.balance}}</text>
					<text class="amount-text">余额</text>
				</view>
				<view class="amount-child" @click="toIncome(mineAmount.income)">
					<text class="amount">{{mineAmount.income}}</text>
					<text class="amount-text">收益</text>
				</view>
				<view class="amount-child" @click="toCoupons(mineAmount.coupons)">
					<text class="amount">{{mineAmount.coupons}}</text>
					<text class="amount-text">优惠券</text>
				</view>
				<view class="amount-child" @click="toIntegral(mineAmount.integral)">
					<text class="amount">{{mineAmount.integral}}</text>
					<text class="amount-text">积分</text>
				</view>
			</view>
		</view>
		
		<!-- 我的订单 -->
		<view class="assets">
			<view class="mine-assets" @click="toMyOrder(0)">
				<text class="assets-title">我的订单</text>
				<view class="assets-more">
					<text class="more-text">全部订单</text>
					<uni-icons type="forward" size="14" color="#909399"></uni-icons>
				</view>
			</view>
			<view class="assets-amount">
				<view class="amount-child" @click="toMyOrder(1)">
					<text class="iconfont icondaifukuan"></text>
					<text class="order" >待付款</text>
				</view>
				<view class="amount-child" @click="toMyOrder(3)">
					<text class="iconfont icondaishouhuo"></text>
					<text class="order" >待收货</text>
				</view>
				<view class="amount-child" @click="toMyOrder(4)">
					<text class="iconfont iconchenggong"></text>
					<text class="order" >待评价</text>
				</view>
				<view class="amount-child" @click="toMyOrder(5)">
					<text class="iconfont icontuikuanshouhou"></text>
					<text class="order" >退款/售后</text>
				</view>
			</view>
		</view>
		
		<!-- 我的服务 -->
		<view class="assets">
			<view class="mine-assets">
				<text class="assets-title">我的服务</text>
				<view class="assets-more">
					<text class="more-text"></text>
				</view>
			</view>
			<view class="assets-amount">
				<view class="amount-child" >
					<text class="iconfont icontuitetwitter43"></text>
					<text class="order">我要推广</text>
				</view>
				<view class="amount-child" >
					<text class="iconfont icontuandui"></text>
					<text class="order">我的团队</text>
				</view>
				<view class="amount-child" >
					<text class="iconfont iconwodeshoucang"></text>
					<text class="order">我的收藏</text>
				</view>
				<view class="amount-child" >
					<text class="iconfont iconlishijilu"></text>
					<text class="order">我的足迹</text>
				</view>
				<view class="amount-child" >
					<text class="iconfont icongengduopintuan"></text>
					<text class="order">我的拼团</text>
				</view>
				<view class="amount-child" >
					<text class="iconfont iconicon_shangchengzhoubian"></text>
					<text class="order">积分商城</text>
				</view>
				<view class="amount-child" >
					<text class="iconfont iconqiandao"></text>
					<text class="order">签到中心</text>
				</view>
				<view class="amount-child" >
					<text class="iconfont iconyiliaohangyedeICON-"></text>
					<text class="order">地址管理</text>
				</view>
				<view class="amount-child" >
					<text class="iconfont iconkefu"></text>
					<text class="order">客服中心</text>
				</view>
				<view class="amount-child" >
					<text class="iconfont iconfankuiguanli"></text>
					<text class="order">意见反馈</text>
				</view>
				<view class="amount-child" >
					<text class="iconfont iconpengyouquan"></text>
					<text class="order">我的发布</text>
				</view>
				<view class="amount-child" >
					<text class="iconfont iconshezhi"></text>
					<text class="order">设置中心</text>
				</view>
			</view>
		</view>
		
		<!-- 占位测试 -->
		<view class="assets">
			<view class="mine-assets">
				<text class="assets-title"></text>
				<view class="assets-more">
					<text class="more-text"></text>
				</view>
			</view>
			<view class="assets-amount">
				<view class="amount-child" >
				</view>
			</view>
		</view>
		
		</view>
	</view>
</template>

<script>
	import {uniIcons} from '@dcloudio/uni-ui/lib/uni-icons/uni-icons.vue'
	export default{
		components:{
			uniIcons
		},
		data(){
			return{
				showgearview:false,
				showLogin:false,
				scroll: 0,
				textColor:'#FFFFFF',
				avatarUrl:'../../static/images/mineimage.png',
				userName:'02',
				userTag:'团队长',
				phone:'13800000002',
				mineAmount:{
					balance:9037.15,
					income:53.10,
					coupons:982,
					integral:10
				},
				loginInfo:{
					phoneNum:'',
					password:''
				}
			}
		},
		methods:{
			colseGear(){
				this.showgearview=false
				uni.removeStorageSync('phone'),
				uni.removeStorageSync('pwd'),
				uni.reLaunch({
					url:'/pages/mine/loginedMine',
					complete(e) {
						console.log('重新进入')
					}
				})
			},
			showGear(e){
				if(!e){
					this.showgearview=true
				}else{
					this.showgearview=false
				}
				
			},
			toIndex(){
				uni.switchTab({
					url:'/pages/index/index',
					complete(e) {
						console.log('！！！'+JSON.stringify(e))
					}
				})
			},
			login(){
				if(this.loginInfo.phoneNum.length!==11){
					uni.showToast({
						icon:'none',
						title:'请输入正确的手机号',
						position:'center'
					})
					return false;
				}else{
						this.http({
							url:'/xiaochengxu',
							method:'POST',
							data:{
								username:this.loginInfo.phoneNum,
								password:this.loginInfo.password
							},
							
							success:(res) =>{
								console.log('请求成功：'+res)
								if(res.code==0){
									try{
									uni.setStorageSync('phone',this.loginInfo.phoneNum)
									uni.setStorageSync('pwd',this.loginInfo.password)
									this.showLogin=true
								} catch(e){
								}
								}else{
									uni.showToast({
										icon:"none",
										title:'账号密码错误',
										duration:2000,
										position:'center'
									})
									return false
								}
								
							},
							complete:(e) =>{
								console.log('请求返回：'+e)
							},
							
						}) 
						
						
				
				}
				},
				
				//跳转相关子页面(我的资产)
				toMore(){
						uni.navigateTo({
						url:'/pages/mine/myAmount/more?info='+encodeURIComponent(JSON.stringify(this.mineAmount)),
					})	
				},	
				toBalance(val){
					uni.navigateTo({
					url:'/pages/mine/myAmount/balance?info='+encodeURIComponent(JSON.stringify(val)),
				})	
				},
				toIncome(val){
					uni.navigateTo({
						url:'/pages/mine/myAmount/income?info='+encodeURIComponent(JSON.stringify(val))
					})
				},
				toCoupons(val){
					uni.navigateTo({
						url:'/pages/mine/myAmount/coupons?info='+encodeURIComponent(JSON.stringify(val))
					})
				},
				toIntegral(val){
					uni.navigateTo({
						url:'/pages/mine/myAmount/integral?info='+encodeURIComponent(JSON.stringify(val))
					})
				},
				//跳转相关子页面(我的订单)
				toMyOrder(e){
					uni.navigateTo({
						url:'/pages/mine/myOrder/order?index='+e
					})
				}
		},
		onShow() {
			var res=global.isLogin()
			console.log('测试：'+ res)
			if(!res){
				this.showLogin=false
			}else{
				console.log('重新进入')
				this.showLogin=true
			}
			
		},
		mounted() {
		},
		//实时监听滚动条距TOP距离
		onPageScroll(res){
			let val =res.scrollTop/200
			if(val <0.5){
				this.scroll= val
				this.textColor='#FFFFFF'
			}else{
				this.scroll= 1
				this.textColor='#000000'
			}
				
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
		background-color: #F5F5F5;
		overflow: scroll;
		z-index: 1;
	}
	.show-gear{
		position: absolute;
		top: 45px;
		right: 0;
		width: 100px;
		height: 60px;
		background: #FFFFFF;
	}
.input-select{
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 40px;
	background-color: rgba(255,255,255,0);
	/* background-color:#333333; */
	display: flex;
	align-items: center;
	justify-content:flex-end;
	z-index: 3;
}

.input-opacity{
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 40px;
	z-index: 2;
	background-color: #FFFFFF;
	opacity: 2;
}
.icon-styles{
	width: 30px;
	height: 30px;
	
}
.background-view{
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 100%;
	height: 150px;
	background-color:#fa436a;
}
.avatar{
	width: 60px;
	height: 60px;
	border-radius: 50%;
	margin-left: 15px;
}
.avatar-image{
	width: 60px;
	height: 60px;
	border-radius: 50%;
}
.avatar-right{
	width: 100%;
	height: 60px;
	padding-left: 10px;
	
}
.userName{
	width: 50px;
	height: 20px;
	margin: 5px 0;
	color: #FFFFFF;
}
.userTag{
	display: flex;
	justify-content: center;
	align-items: center;
	width: 55px;
	height: 25px;
	font-size: 12px;
	border-radius:25px 25px 25px 25px;
	color: #fa436a;
	background-color: #FFFFFF;
}
.phoneNum{
	width: 100%;
	height: 40px;
	line-height: 40px;
	margin-top: 5px;
	margin-bottom: 5px;
	font-size: 12px;
	font-weight: 500;
	background-color: #FFFFFF;
}
.phoneNum:active{
		background-color:#f3f3f3;
	}
.assets{
	width: 100%;
	height:auto;
	background-color: #FFFFFF;
	margin-top: 5px;
	margin-bottom: 5px;
}
.mine-assets{
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 30px;
	border-bottom: 1px #f3f3f3 solid;
}
.mine-assets:active{
		background-color: #f3f3f3;
	}
.assets-title{
	font-size: 14px;
	margin-left: 10px;
}
.assets-more{
	display: flex;
	align-items: center;
	justify-content: flex-end;
	margin-right: 20px;
	width: 100px;
	height: 20px;
}
.more-text{
	font-size: 14px;
	color: #909399;
	margin-right: 5px;
}
.assets-amount{
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	flex-wrap: wrap;
	width: 100%;
	height: auto;
}
.amount-child{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 80px;
	height: 80px;
}
.amount-child:active{
		background-color: #f3f3f3;
	}
.amount{
	font-size: 14px;
}
.amount-text{
	font-size: 14px;
	color: #909399;
	margin-top: 5px;
}

.order{
	font-size: 14px;
	color: #000000;
	margin-top: 5px;
}
.content-login {
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
