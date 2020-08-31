<template>
	<view class="content">
		<view class="top-content">我的订单</view>
		<view class="segment-all">
			<view class="segmented-style">
			<uni-segmented-control :current="selectCurrent"
			:values="items"
			 @clickItem="slectControl" 
			 styleType="text"
			 activeColor="#FA436A">
			 </uni-segmented-control>
			 </view>
			 <view class="AllOrder"></view>
		</view>
	</view>
</template>

<script>
	import uniSegmentedControl from '@dcloudio/uni-ui/lib/uni-segmented-control/uni-segmented-control.vue'
	export default{
		components:{
			uniSegmentedControl
		},
		data(){
			return{
				selectCurrent:0,
				items:['全部','待付款','待发货','待收货','待评价','售后']
			}
		},
		onLoad(e) {
			this.selectCurrent=e.index
		},
		methods:{
			//选择订单类型页面
			slectControl(index){
				if(this.selectCurrent!==index.currentIndex){
					this.selectCurrent=index.currentIndex
				}
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
	.top-content{
		width: 100%;
		height: 40px;
		background: #007AFF;
		text-align: center;
		line-height: 40px;
		font-weight: 600;
	}
	.segment-all{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.segmented-style{
		width: 100%;
		height: auto;
		background: #FFFFFF;
	}
	.AllOrder{
		width: 100%;
		height: 500px;
		background: #F5F5F5;
	}
</style>
