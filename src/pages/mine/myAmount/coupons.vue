<template>
	<view class="content" :style="{height:(phoneHeight-100)+'px'}">
		<view class="content-navigation">
			<view class="navigation-left"></view>
				<text class="navigation-text">我的优惠券</text>
				<text class="navigation-right">优惠记录</text>
		</view>
		
		<view class="content-center">
			<view class="iconfont iconyouhuiquan"></view>
			<view>我的优惠券</view>
			<view class="text-style">￥{{coupons}}</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				coupons:0,
				phoneHeight:0,
			}
		},
		onLoad(res) {
			const a=JSON.parse(decodeURIComponent(res.info))
			this.coupons=a
		},
		mounted() {
			uni.getSystemInfo({
				success: (res) => {
				this.phoneHeight=res.windowHeight
				}
			})
		}
	}
</script>

<style>
	.content{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.content-navigation{
		width: 100%;
		height: 50px;
		position: absolute;
		top: 0;
		left: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.navigation-left{
		width: 70px;
		height: 10px;
	}
	.navigation-text{
		width: 70px;
		text-align: center;
		font-size: 14px;
		font-weight: 600;
	}
	.navigation-right{
		width: 70px;
		font-size: 14px;
	}
	.content-center{
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		height: 150px;

	}
	.iconfont.iconyouhuiquan{
		font-size: 40px;
		color: #FE8E2E;
	}
	.text-style{
		font-size: 20px;
		font-weight: 600;
	}
	
	
	
	
</style>
