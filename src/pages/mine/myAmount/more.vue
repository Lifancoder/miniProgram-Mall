<template>
	<view class="content">
		<view class="balance" @click="toBalance(mineAmount.balance)">
			<text>余额</text>
			<view class="content-num">
				<text class="num-style">{{mineAmount.balance}}</text>
				<uni-icons type="forward" size="14" color="#909399"></uni-icons>
			</view>
		</view>
		<view class="balance" @click="toIncome(mineAmount.income)">
			<text>收益</text>
			<view class="content-num">
				<text class="num-style">{{mineAmount.income}}</text>
				<uni-icons type="forward" size="14" color="#909399"></uni-icons>
			</view>
		</view>
		<view class="balance" @click="toCoupons(mineAmount.coupons)">
			<text>优惠券</text>
			<view class="content-num">
				<text class="num-style">{{mineAmount.coupons}}</text>
				<uni-icons type="forward" size="14" color="#909399"></uni-icons>
			</view>
		</view>
		<view class="balance" @click="toIntegral(mineAmount.integral)">
			<text>积分</text>
			<view class="content-num">
				<text class="num-style">{{mineAmount.integral}}</text>
				<uni-icons type="forward" size="14" color="#909399"></uni-icons>
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
				mineAmount:{
					balance:0,
					income:0,
					coupons:0,
					integral:0
				},
			}
		},
		onLoad(res) {
			const a =JSON.parse(decodeURIComponent(res.info))
			this.mineAmount=a
		},
		methods:{
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
			}
		},
		mounted() {
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
	.balance{
		width: 98%;
		height: 50px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px ##909399 solid;
		font-size: 14px;
		padding: 0 20px;
		box-sizing: border-box;

	}
	.balance:active{
			background-color: #f3f3f3;
		}
	.content-num{
		width: 200px;
		height: 30px;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
	}
	.num-style{
		color: #909399;
		margin-right: 10px;
	}
</style>
