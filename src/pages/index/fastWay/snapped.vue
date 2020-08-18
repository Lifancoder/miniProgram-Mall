<template>
	<view class="content">
		<view class="module">
			<text class="module-text">正在疯抢...</text>
			<view class="timing">
				<text class="timing-text">距结束 </text>
				<uni-countdown :showDay="false"
				:hour="countdown.hour" 
				:minute="countdown.minute" 
				:second="countdown.second"
				:showColon="true"
				background-color="#FFFFFF"
				color="#757575"
				:reset="countdown.reset"
				@timeup="timerUp"></uni-countdown>
			</view>
		</view>
		</view>
</template>

<script>
	import uniCountdown from '@dcloudio/uni-ui/lib/uni-countdown/uni-countdown.vue'
	export default{
		components:{
			uniCountdown
		},
		data(){
			return{
				//倒计时
				countdown:{
					hour:8,
					minute:0,
					second:0,
					reset:false},
			}
		},
		methods:{
			timerUp(){
				this.countdown.reset = !this.countdown.reset;
				this.countdown.hour=8
			}
		},
		mounted() {
			this.timerUp()
		}
		
	}
</script>

<style>
.content{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		/* background-color: #F5F5F5; */
		z-index: 1;
		}
.module{
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height:100px;
}
.module-text{
	font-size: 16px;
	color: #FA436A;
}
.timing{
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 200px;
	height: 30px;
}
.timing-text{
	font-size: 14px;
	color: #757575;
}
</style>
