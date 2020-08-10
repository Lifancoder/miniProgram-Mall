<template>
	<view class="content">
		<view class="head-title">分类</view>
		<!-- 左侧菜单栏 -->
		<view class="scroll-content">
			<scroll-view class="scroll-content-left" 
			:style="{height:pageHeight+'px'}" 
			:scroll-into-view="clickToId" 
			:scroll-with-animation="true" 
			:scroll-y="true">
				<view   
				 v-for="(titles,index) in Testtitles" :key="index">
				<view :class="['list-left-before',{listLeft:index===currentNum}]" 
				:id="'to'+index"
				@click="setId(index)">
					{{titles.title}}
				</view>
				</view>
			</scroll-view>
			
			<!-- 主区域 -->
			<scroll-view  class="scroll-content-right" 
			:style="{height:pageHeight+'px'}" 
			:scroll-y="true"
			:scroll-into-view="clickId" 
			:scroll-with-animation="true" 
			@scroll="listenScroll($event)">
				<view class="classification"  v-for="(item ,index) in Testtitles" :key="index">
					<view   class="classification-title" :id="'po'+index">{{item.title}}</view>
					<view class="classification-show">
						<!-- <uni-grid column="3" :showBorder="false">
							<uni-grid-item  v-for="goods in listTitle" :key="goods.id">
								<view class="grid-item">
									<image class="grid-item-image" :src="goods.url" ></image>
								<text style="font-size: 12px;">{{goods.title}}</text>
								</view>
							</uni-grid-item>
						</uni-grid> -->
						<view class="grids">
							<view class="grids-item" v-for="goods in listTitle" :key="goods.id">
								<view class="grid-item">
									<image class="grid-item-image" :src="goods.url" ></image>
								<text style="font-size: 12px;">{{goods.title}}</text>
								</view>
							</view>
						</view>
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
				{id:9,title:'测试分类10',url:'../../static/testImages/test2.jpg'},
				{id:9,title:'测试分类10',url:'../../static/testImages/test2.jpg'}],
				Testtitles:[{id:'qq',title:'智能手机'},{id:'ww',title:'活动专场'},
				{id:'ee',title:'厨房用具'},{id:'rr',title:'厨房电器'},
				{id:'tt',title:'智能家电'},{id:'yy',title:'粮油干货'},
				{id:'uu',title:'有机系列'},{id:'ii',title:'居家日用'},
				{id:'oo',title:'酒水饮料'},{id:'pp',title:'零食干果'}],
				pageHeight:200,
				isListbefore:true,
				isLeftSelect:false,
				clickId:'',
				clickToId:'',
				currentNum:0,
				topList:[],
				isLeftClick:false,
				// classification:0
			}
		},
		onReady() {
		},
		methods:{
			// scroll-view左右联动
			setId(index){
				this.clickId='po'+index
				this.isLeftClick=true
				this.currentNum=index
			},
			
			//主区域滚动条监听
			listenScroll(info){
				if(this.isLeftClick){
					this.isLeftClick=false
					return
				}
				let scrollTop=info.detail .scrollTop+40
				for(let i=0;i<this.topList.length;i++){
					let h1 =this.topList[i]
					let h2 =this.topList[i+1]
					if(scrollTop>=h1&&scrollTop<h2){
						this.currentNum=i
						this.clickToId='to'+i
					}
				}
				console.log('滚动条信息：'+JSON.stringify(info.detail .scrollTop))
				
			},
			//获取主区域所有分类块dom的信息
			getElement(){
				const query = uni.createSelectorQuery().in(this)
				// query.selectAll('.classification-show').boundingClientRect().exec((res)=>{
				// 	console.log('dom信息：'+JSON.stringify(res))
					
				// })
				query.selectAll('.classification-title').boundingClientRect().exec((res)=>{
					console.log('dom信息：'+JSON.stringify(res))
					let nodes=res[0]
					let rel=[]
					nodes.map(item =>{
						rel.push(item.top)
					})
					console.log(rel)
					this.topList=rel
				})
			}
		},
		mounted() {
			let a =0
			uni.getSystemInfo({
				success:function(res){
					a=res.windowHeight - 40
					// console.log('手机信息：'+JSON.stringify(res) )
				}
			})
			this.pageHeight=a
			this.getElement()
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
	height: 100%;
	display: flex;
	flex-direction: row;
	
}
.scroll-content-left{
	width: 20%;
	height:100% ;
	margin-right:10px;
	background-color: #FFFFFF;
}
.scroll-content-right{
	width: 80%;
	background-color: #F5F5F5;
}
.list-left-before{
	display: flex;
	justify-content: center;
	align-items: center;
	width:100%;
	height: 50px;
	font-size: 14px;
	background-color: #FFFFFF;
}
.listLeft{
	display: flex;
	justify-content: center;
	align-items: center;
	width:100%;
	height: 50px;
	font-size: 14px;
	color: #fa436a;
	background-color: #FFFFFF;
}
.listLeft::before {
	content: " ";
	position: absolute;
	left: 0;
    /* -webkit-transform: translateY(-50%); */
    /* transform: translateY(-50%); */
    height:15px;
    width: 3px;
	color: #fa436a;
    background-color: #fa436a;
    border-radius: 0 4px 4px 0;
    opacity:0.8;
}
.classification{
	width:100%;
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

/* 以下测试css */
.grids{
	height: 100%;
	width: 100%;
	display: grid;
	grid-template-columns: auto auto auto; 
	grid-template-rows: auto auto auto;
	grid-gap: 2px;
}
.grids-item{
	width: 107px;
	height: 107px;
	background-color: #FFFFFF;
}
</style>
