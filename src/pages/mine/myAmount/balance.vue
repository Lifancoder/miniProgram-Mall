<template>
	<view class="content" :style="{height:(phoneHeight-100)+'px'}">
		<view class="content-navigation">
			<view class="navigation-left"></view>
				<text class="navigation-text">我的账户</text>
				<text class="navigation-right">账户流水</text>
		</view>
		
		<view class="content-center">
			<view class="iconfont iconqianbao1"></view>
			<view>账户余额</view>
			<view class="text-style">￥{{balances}}</view>
			<button class="btn-one" @click="getMoney">提 现</button>
			<button class="btn-two" @click="setMoney">转 账</button>
		</view>
		
		<!-- 提现/转账 -->
		<view class="mask-alert" v-show="isAlert">
			<view class="mask-button">
				<view class="button-title">{{titleName}}</view>
				<view class="button-header">
					<input class="input-style" v-model="price" placeholder-style="margin-left:5px;" :placeholder="getPlaceholder"/>
					<input class="input-style" v-model="phone" placeholder-style="margin-left:5px;" placeholder="输入收款人手机号" v-show="isSent"/>
				</view>
				<view class="button-footer" >
					<view class="footer-cancel" @click="isAlert=false">取消</view>
					<view class="footer-true">确定</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				balances:0,
				phoneHeight:0,
				titleName:'提现',
				getPlaceholder:'提现金额',
				isAlert:false,
				isSent:false,
				price:null,
				phone:null
			}
		},
		onLoad(res) {
			const a=JSON.parse(decodeURIComponent(res.info))
			this.balances=a
			console.log(a)
		},
		methods:{
			getMoney(){
				this.price=null
				this.phone=null
				this.getPlaceholder='提现金额'
				this.titleName='提现'
				this.isAlert=true
				this.isSent=false
			},
			setMoney(){
				this.price=null
				this.phone=null
				this.getPlaceholder='转账金额'
				this.titleName='转账'
				this.isAlert=true
				this.isSent=true
			}
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
		width: 50%;
		display: flex;
		flex-direction: column;
		align-items: center;
		display: flex;
		justify-content: space-around;
		height: 250px;

	}
	.iconfont.iconqianbao1{
		font-size: 40px;
		color: #FE8E2E;
	}
	.text-style{
		font-size: 20px;
		font-weight: 600;
	}
	.btn-one{
		width: 100%;
		height: 50px;
		background: #FA436A;
		color: #FFFFFF;
		font-weight: 100;

	}
	.btn-two{
		width: 100%;
		height: 50px;
		background: #FFFFFF;
		border: 1px #FA436A solid;
		color: #FA436A;
		font-weight: 100;
	}
	.mask-alert{
		position: absolute;
		top: 0;
		left: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,.6);
		z-index: 15;
	}
	.button-title{
		width: 100%;
		height: 50px;
		text-align: center;
		line-height: 50px;
		color: #FA436A;
		font-size: 14px;
		font-weight: 600;
	}
	.mask-button{
		width: 300px;
		height: fit-content;
		border-radius: 5px;
		background-color: #FFFFFF;
	}
	.button-header{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 80px;
		border-bottom: 1px #F5F5F5 solid;
	}
	.input-style{
		width: 80%;
		height: 40px;
		margin-bottom: 10px;
		border: 1px #909399 solid;
		border-radius: 5px;
	}
	.button-footer{
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		width: 100%;
		height: 60px;
	}
	.footer-cancel{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 90px;
		height: 40px;
		border-radius: 5px 5px 5px 5px;
		background: #F8F8F8;
		color: #000000;
		font-size: 16px;
		border: 1px #909399 solid;
	}
	.footer-cancel:active{
		background-color: rgba(233, 230, 221);
	}
	.footer-true{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 90px;
		height: 40px;
		border-radius: 5px 5px 5px 5px;
		color: #FFFFFF;
		font-size: 16px;
		background: #FA436A;
	}
	/* .footer-true:active{
		background-color: rgba(233, 230, 221);
	} */
</style>
