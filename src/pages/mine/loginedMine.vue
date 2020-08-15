<template>
	<view class="content">
		<view class="input-opacity" :style="{opacity:scroll}">
			<text style="color: #000000;">我的</text>
		</view>
		<view class="input-select" >
				<uni-icons class="icon-style" type="chat":color="textColor" size="20"></uni-icons>
			<uni-icons class="icon-style" type="gear" :color="textColor" size="22"></uni-icons>
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
			<view class="mine-assets">
				<text class="assets-title">我的资产</text>
				<view class="assets-more">
					<text class="more-text">更多</text>
					<uni-icons type="forward" size="12px" color="#909399"></uni-icons>
				</view>
			</view>
			<view class="assets-amount">
				<view class="amount-child" >
					<text class="amount">{{mineAmount.balance}}</text>
					<text class="amount-text">余额</text>
				</view>
				<view class="amount-child" >
					<text class="amount">{{mineAmount.income}}</text>
					<text class="amount-text">收益</text>
				</view>
				<view class="amount-child" >
					<text class="amount">{{mineAmount.coupons}}</text>
					<text class="amount-text">优惠券</text>
				</view>
				<view class="amount-child" >
					<text class="amount">{{mineAmount.integral}}</text>
					<text class="amount-text">积分</text>
				</view>
			</view>
		</view>
		
		<!-- 我的订单 -->
		<view class="assets">
			<view class="mine-assets">
				<text class="assets-title">我的订单</text>
				<view class="assets-more">
					<text class="more-text">全部订单</text>
					<uni-icons type="forward" size="12px" color="#909399"></uni-icons>
				</view>
			</view>
			<view class="assets-amount">
				<view class="amount-child" >
					<text class="iconfont icondaifukuan"></text>
					<text class="order">待付款</text>
				</view>
				<view class="amount-child" >
					<text class="iconfont icondaishouhuo"></text>
					<text class="order">待收货</text>
				</view>
				<view class="amount-child" >
					<text class="iconfont iconchenggong"></text>
					<text class="order">待评价</text>
				</view>
				<view class="amount-child" >
					<text class="iconfont icontuikuanshouhou"></text>
					<text class="order">退款/售后</text>
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
				}
			}
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
.icon-style{
	margin-right: 15px;
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
	font-size: 12px;
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
	font-size: 12px;
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
	font-size: 10px;
	color: #909399;
	margin-top: 5px;
}

.order{
	font-size: 10px;
	color: #000000;
	margin-top: 5px;
}
</style>
