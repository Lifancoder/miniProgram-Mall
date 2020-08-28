<template>
	<view class="content" :style="{height:(phoneHeight-100)+'px'}">
		<view class="content-navigation">
			<view class="navigation-left"></view>
				<text class="navigation-text">我的收益</text>
				<text class="navigation-right">收益记录</text>
		</view>
		
		<view class="content-center">
			<view class="iconfont iconzu-copy"></view>
			<view>我的收益</view>
			<view class="text-style">￥{{income}}</view>
			<view class="content-text">可转入余额金额
			<text class="exoprt-balance">￥{{exportBalance}}</text>
			<text class="because-style">查看原因</text></view>
			<button class="btn-one">转 入 余 额</button>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				income:0,
				phoneHeight:0,
				exportBalance:'0.00'
				
			}
		},
		onLoad(res) {
			const a=JSON.parse(decodeURIComponent(res.info))
			this.income=a
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
		height: 250px;

	}
	.iconfont.iconzu-copy{
		font-size: 40px;
		color: #FE8E2E;
	}
	.text-style{
		font-size: 20px;
		font-weight: 600;
	}
	.content-text{
		font-size: 14px;
	}
	.btn-one{
		width: 200px;
		height: 40px;
		line-height: 40px;
		background: #FA436A;
		color: #FFFFFF;
		font-weight: 100;

	}
	
	.exoprt-balance{
		margin: 0 5px;
		color: #FA436A;
		font-weight: 600;
	}
	.because-style{
		color: #FFB400;
		text-decoration:underline;
	}
</style>
