<template>
	<scroll-view >
		<view class="commodity">
		<view v-for="(i,index) in commodity" class="commodity-child" :key="index">
			<image class="commodity-img"  :src="i.img"></image>
			<text class="commodity-text">{{i.name}}</text>
			<view class="commodity-label" >
			</view>
			<view style="display: flex;justify-content: space-between;align-items: center;">
				<view style="display: inline-block;">
					<text style="color: #fa436a;font-size: 14px;">
						兑换积分{{i.Current}}</text>
					<text style="font-size: 10px;color: #909399;text-decoration: line-through;"></text>
				</view>
				<text style="color: #909399;font-size: 12px;" >￥{{i.price}}</text>
			</view>
			<view style="display: flex;justify-content: space-between;align-items: center;width: 100%;">
				<text style="color: #909399;font-size: 12px;" v-if="i.coupons!==0">已兑换 {{i.coupons}}件</text>
				<text v-else></text>
				<button class="shopping-button">立即兑换</button>
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
					img:'https://kyun.ltyuanfang.cn/tc/2020/08/28/f8446ae9791ae.jpg',
					name:'江中猴菇米稀养胃早餐450g不好吃手动阀',
					tab:3,
					Current:'199',
					price:'258.00',
					sold:2654,
					coupons:10
				},{
					img:'https://kyun.ltyuanfang.cn/tc/2020/08/28/d6aaa8beafcbc.jpg',
					name:'香喷喷东北大米长粒香米5kg装',
					tab:4,
					Current:'100',
					price:'120.00',
					sold:684,
					coupons:3
				},{
					img:'https://kyun.ltyuanfang.cn/tc/2020/08/28/caf00ad3fd926.jpg',
					name:'溢田食用植物调和油健康养生',
					tab:0,
					Current:'102',
					price:'110.00',
					sold:1350,
					coupons:2
				},{
					img:'https://kyun.ltyuanfang.cn/tc/2020/08/28/c275bc1bb9a7e.jpg',
					name:'散养土鸡蛋舌尖上的健康10Kg',
					tab:1,
					Current:'230',
					price:'158.00',
					sold:1143,
					coupons:2
				},{
					img:'https://kyun.ltyuanfang.cn/tc/2020/08/28/84193fac92e4d.jpg',
					name:'良品铺子干果2Kg腰果核桃杏仁',
					tab:0,
					Current:'188',
					price:'288.00',
					sold:35604,
					coupons:3
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
		height:5px;
		background-image: #FFFFFF;
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
