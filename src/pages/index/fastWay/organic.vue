<template>
	<view class="content">
		<view class="module">
			<view v-for="(i,index) in buttonImagesOne" class="commodity-child" :key="index">
				<image class="commodity-img" :src="i.img"></image>
				<text class="commodity-text">{{i.describe}}</text>
				<view style="display: flex;justify-content: space-between;align-items: center;width: 100%;">
					<view style="display: inline-block;">
						<text style="color: #fa436a;font-size: 14px;">
							<text style="color: #fa436a;font-size: 10px;">￥</text>{{i.current}}</text>
						<text style="font-size: 10px;color: #909399;text-decoration: line-through;">￥{{i.price}}</text>
					</view>
					<button class="shopping-button" >立即抢购</button>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default{
		data(){
			return{
				buttonImagesOne:[{img:'http://ww1.sinaimg.cn/large/006AcIg8gy1ghx1ucluj4j30m80m80y6.jpg',
				describe:'东北五常特色稻花香大米礼盒4kg',current:'95.00',
				price:'112.00',sales:'188.00',}]
			}
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
	padding-top: 5px;
	background-color: #FFFFFF;
	z-index: 1;
}

.module{
	width: 95%;
	height: 100%;
}
.commodity-child{
	width:100%;
	height: 250px;
	background-color: #FFFFFF;
	display: flex;
	flex-direction: column;
}
.commodity-img{
	width: 100%;
	height: 150px;
}
.commodity-text{
	width: 100%;
	font-size: 12px;
	overflow: hidden;
	text-overflow:ellipsis;
	white-space: nowrap;
	margin-top: 5px;
}
.shopping-button{
display:inline-block!important;
margin:0;
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
