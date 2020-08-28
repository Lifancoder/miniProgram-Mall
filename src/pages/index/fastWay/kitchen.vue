<template>
	<scroll-view >
		<view class="commodity">
		<view v-for="(i,index) in commodity" class="commodity-child" :key="index">
			<image class="commodity-img"  :src="i.img"></image>
			<text class="commodity-text">{{i.name}}</text>
			<view class="commodity-label" v-if="i.tab!==0">
				<text style="font-size: 12px;">分享估赚￥{{i.tab}}</text>
				<view style="width: 0;height: 0;border-top: 10px solid transparent;
				border-right: 10px solid #FFFFFF;
				border-bottom: 10px solid transparent;
				display: inline-block;"></view>
			</view>
			<view v-else></view>
			<view style="display: flex;justify-content: space-between;align-items: center;">
				<view style="display: inline-block;">
					<text style="color: #fa436a;font-size: 14px;">
						<text style="color: #fa436a;font-size: 10px;">￥</text>{{i.Current}}</text>
					<text style="font-size: 10px;color: #909399;text-decoration: line-through;">￥{{i.price}}</text>
				</view>
				<text style="color: #909399;font-size: 12px;" >已售{{i.sold}}件</text>
			</view>
			<view style="display: flex;justify-content: space-between;align-items: center;width: 100%;">
				<text style="color: #909399;font-size: 12px;" v-if="i.sold!==0">优惠券 ￥{{i.coupons}}</text>
				<text v-else></text>
				<button class="shopping-button">立即抢购</button>
			</view>
		</view>
		</view>
	</scroll-view>
</template>

<script>
	export default{
		data(){
			return{
				commodity:[{
					img:'',
					name:'',
					tab:0,
					Current:'',
					price:'',
					sold:0,
					coupons:0
				}]
				
			}
		},
		methods:{
			getCommodity(){
				/* this.http({
					url:'https://lifan.cool:8004/center/ucenter/login',
					method:'post',
					data:{},
					complete:(e) =>{
						console.log('接受的回调：'+e)
					}
				})*/
				this.commodity=[{
					img:'https://ftp.bmp.ovh/imgs/2020/08/37df1366650f1de3.jpg',
					name:'炊滕食客优宠新风格多功能可拆卸不沾电热锅',
					tab:4,
					Current:'399.00',
					price:'499.00',
					sold:911,
					coupons:0
				},{
					img:'https://ftp.bmp.ovh/imgs/2020/08/a83c25898e8b0756.jpg',
					name:'厨房刀具五件套菜刀套装',
					tab:3,
					Current:'68.00',
					price:'88.00',
					sold:684,
					coupons:3
				},{
					img:'https://ftp.bmp.ovh/imgs/2020/08/5ac1b460221c9930.jpg',
					name:'家家旺厨房不锈钢厨师刀具切水果刀',
					tab:0,
					Current:'26.00',
					price:'29.00',
					sold:704,
					coupons:2
				},{
					img:'https://ftp.bmp.ovh/imgs/2020/08/5ac1b460221c9930.jpg',
					name:'家家旺厨房不锈钢厨师刀具切水果刀',
					tab:2,
					Current:'26.00',
					price:'29.00',
					sold:704,
					coupons:2
				},{
					img:'https://ftp.bmp.ovh/imgs/2020/08/5ac1b460221c9930.jpg',
					name:'家家旺厨房不锈钢厨师刀具切水果刀',
					tab:2,
					Current:'26.00',
					price:'29.00',
					sold:704,
					coupons:2
				},{
					img:'https://ftp.bmp.ovh/imgs/2020/08/5ac1b460221c9930.jpg',
					name:'家家旺厨房不锈钢厨师刀具切水果刀',
					tab:2,
					Current:'26.00',
					price:'29.00',
					sold:704,
					coupons:2
				},{
					img:'https://ftp.bmp.ovh/imgs/2020/08/5ac1b460221c9930.jpg',
					name:'家家旺厨房不锈钢厨师刀具切水果刀',
					tab:2,
					Current:'26.00',
					price:'29.00',
					sold:704,
					coupons:2
				},{
					img:'https://ftp.bmp.ovh/imgs/2020/08/5ac1b460221c9930.jpg',
					name:'家家旺厨房不锈钢厨师刀具切水果刀',
					tab:2,
					Current:'26.00',
					price:'29.00',
					sold:704,
					coupons:2
				}]
			} 
		},
		mounted() {
			this.getCommodity()
		}
	}
</script>

<style>
	.commodity {
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
	.commodity-child {
		width: 46%;
		height: 250px;
		margin: 2%;
		background-color: #FFFFFF;
		display: flex;
		flex-direction: column;
	}
	.commodity-img {
		width: 100%;
		height: 150px;
	}
	
	.commodity-text {
		width: 100%;
		font-size: 12px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		margin-top: 5px;
	}
	
	.commodity-label {
		width: 80%;
		height: 20px;
		background-image: linear-gradient(to right, #DEB887, #F5DEB3);
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-left: 10px;
		margin: 5px 0;
	}
	
	.shopping-button {
		display: inline-block !important;
		margin: 0;
		padding-left: 14px;
		padding-right: 14px;
		box-sizing: border-box;
		font-size: 12px;
		text-align: center;
		text-decoration: none;
		line-height: 2.55555556;
		border-radius: 5px;
		-webkit-tap-highlight-color: transparent;
		overflow: hidden;
		cursor: pointer;
		color: #FFFFFF;
		background-color: #fa436a !important;
	}
</style>
