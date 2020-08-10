<template>
	<view class="content">
		<view class="head-title">分类</view>
		<view class="scroll-content">
			<scroll-view class="scroll-content-left" :style="{height:pageHeight+'px'}" :scroll-y="true">
				<view :id="titles.id" class="list-left" v-for="titles in Testtitles">{{titles.title}}</view>
			</scroll-view>
			<scroll-view  class="scroll-content-right" :style="{height:pageHeight+'px'}" :scroll-y="true">
				<view class="classification" v-for="item in Testtitles">
					<view :id="item.id" class="classification-title">{{item.title}}</view>
					<view class="classification-show">
						<uni-grid column="3" :showBorder="false">
							<uni-grid-item v-for="goods in listTitle">
								<view class="grid-item">
									<image class="grid-item-image" :src="goods.url" ></image>
								<text style="font-size: 12px;">{{goods.title}}</text></view>
							</uni-grid-item>
						</uni-grid>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import uniGrid from '@dcloudio/uni-ui/lib/uni-grid/uni-grid.vue'
	import uniGridItem  from '@dcloudio/uni-ui/lib/uni-grid-item/uni-grid-item.vue'
	export default{
		components:{
			uniGrid,
			uniGridItem
		},
		data(){
			return{
				//列表名称【此处模拟数据，真实场景可能为后端提供所有类别数据，前端进行取用，暂时用两个array替代】
				listTitle:[{id:0,title:'测试分类1',url:'../../static/testImages/test2.jpg'},
				{id:1,title:'测试分类2',url:'../../static/testImages/test1.jpg'},
				{id:2,title:'测试分类3',url:'../../static/testImages/test3.jpg'},
				{id:3,title:'测试分类4',url:'../../static/testImages/test2.jpg'},
				{id:4,title:'测试分类5',url:'../../static/testImages/test2.jpg'},
				{id:5,title:'测试分类6',url:'../../static/testImages/test2.jpg'},
				{id:6,title:'测试分类7',url:'../../static/testImages/test2.jpg'},
				{id:7,title:'测试分类8',url:'../../static/testImages/test2.jpg'},
				{id:8,title:'测试分类9',url:'../../static/testImages/test2.jpg'},
				{id:9,title:'测试分类10',url:'../../static/testImages/test2.jpg'}],
				Testtitles:[{id:10,title:'智能手机'},{id:11,title:'活动专场'},
				{id:12,title:'厨房用具'},{id:13,title:'厨房电器'},
				{id:14,title:'智能家电'},{id:15,title:'粮油干货'},
				{id:16,title:'有机系列'},{id:17,title:'居家日用'},
				{id:18,title:'酒水饮料'},{id:19,title:'零食干果'}],
				pageHeight:200
			}
		},
		methods:{
			// scroll-view左右联动
			
		},
		mounted() {
			let a =0
			uni.getSystemInfo({
				success:function(res){
					a=res.windowHeight - 40
					console.log('手机信息：'+JSON.stringify(res) )
				}
			})
			this.pageHeight=a
		}
	}
</script>

<style>
	page{
		background-color:"#F5F5F5";
	}
.content{
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: #F5F5F5;
	z-index: 1;
	}

.head-title{
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 40px;
	background-color: #FFFFFF;
	font-size: 14px;
	font-weight: 600;
}
.scroll-content{
	width: 100%;
	display: flex;
	flex-direction: row;
	
}
.scroll-content-left{
	width: 20%;
	margin-right:10px;
	background-color: #F5F5F5;
}
.scroll-content-right{
	width: 80%;
	background-color: #F5F5F5;
}
.list-left{
	display: flex;
	justify-content: center;
	align-items: center;
	width:100%;
	height: 50px;
	font-size: 14px;
	background-color: #FFFFFF;
}
.list-left::before {
	content: " ";
	position: absolute;
	left: 0;
    /* -webkit-transform: translateY(-50%); */
    /* transform: translateY(-50%); */
    height:15px;
    width: 3px;
    background-color: #fa436a;
    border-radius: 0 4px 4px 0;
    opacity:0.8;
}
.classification{
	width: 100%;
}
.classification-title{
	width: 100%;
	height: 30px;
	line-height: 30px;
	font-size: 14px;
	background-color: #F5F5F5;
}
.classification-show{
	width: 100%;
	min-height: 10px;
	padding-bottom: 10px;
	background-color: #FFFFFF;
}
.grid-item{
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.grid-item-image{
	width: 80%;
	height: 80%;
}
</style>
