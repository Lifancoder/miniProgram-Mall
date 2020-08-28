<template>
	<view class="content">
		<view class="Operation">
			<view class="operation-child">
				<navigator class="index-page" hover-class='none'>
					<image class="navigator-img" src="../../static/images/tab-home.png"></image>
					<text class="navigator-text">首页</text>
				</navigator>
				<navigator class="index-page" hover-class='none'>
					<image class="navigator-img" src="../../static/images/tab-cart.png"></image>
					<text class="navigator-text">购物车</text>
				</navigator>
				<navigator class="index-page"hover-class='none'>
					<uni-icons type="star-filled" color="#909399" size="20"></uni-icons>
					<text class="navigator-text">收藏</text>
				</navigator>
			</view>
			<view class="Operation-btn">
				<button class="btn-add"><text class="btn-text">加入购物车</text></button>
				<view class="btn-content"></view>
				<button class="btn-buy"><text class="btn-text">立即购买</text></button>
			</view>
		</view>
		<view class="swiper-image">
			<swiper class="swiper-image" :indicator-dots="indicatorDots" :indicator-active-color="indicatorActiveColor"
			 :indicator-color="indicatorColor" :autoplay="autoPlay" :interval="interval">
				<swiper-item v-for=" (image,index) in images" :key="index">
					<image :src="image" style="width: 100%;height: 100%;"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="details">
			<text class="commodity-text">{{details.describe}}</text>
		<view>
			<text class="text-one">
				<text class="text-one">￥</text>{{details.current}}</text>
			<text style="font-size: 10px;color: #909399;text-decoration: line-through;">￥{{details.price}}</text>
		</view>
		<text style="color: #909399;font-size: 12px;">销量：{{details.sales}}</text>
		</view>
		<view class="tab-share">
			<view class="share-left">
				<image class="share-img" src="../../static/images/shareTab.png"></image>
				<text class="left-text">分享估赚 ￥{{details.shareAmount}}</text>
			</view>
			<view class="share-right" @click="openSharePopup">
				立即分享
				<text class="iconfont iconfenxiang"></text>
			</view>
		</view>
		<view class="details">
			<view class="select-style" @click="openSelect">
				<text>款式规格</text>
				<uni-icons type="forward" size="14" color="#909399"></uni-icons>
			</view>
			<view class="select-style">
				<text>优惠券</text>
				<view class="preferential">本产品可优惠抵扣￥{{details.preferential}}</view>
			</view>
		</view>
		<view class="semented">
			<view class="segmented-all">
				<view class="segmented-style">
				<uni-segmented-control :current="selectCurrent" 
			:values="items"
			 @clickItem="slectControl" 
			 styleType="text"
			 activeColor="#FA436A"></uni-segmented-control>
			</view>
			</view>
				<view class="semented-child" v-if="selectCurrent===0">
					<text class="separated">———— 商品信息 ————</text>
					<image class="show-img" 
					 v-for="(img,index) in details.images" 
					 :key="index" :src="img" :style="{height:getHeight+'px'}"></image>
					 <view class="botton-view"></view>
				</view>
				<view class="semented-parameters" v-else-if="selectCurrent===1">
					<view class="parameters-child" v-for="(item,index) in details.parameters" :key="index">
						<text space="emsp">• {{item.name}}：{{item.content}}</text></view>
				</view>
				<view class="semented-parameters" v-else>
					<view class="comments">
						<view class="comments-left">
							<view class="avatar">
							<image class="avatar-img" :src="images[0]"></image>
						</view>
						</view>
						<view class="comments-right">
							<view class="right-top">
								<view class="user-name">努力改变</view>
								<view class="star">
									<uni-icons type="star-filled" color="#FFC128" size="16"></uni-icons>
									<uni-icons type="star-filled" color="#FFC128" size="16"></uni-icons>
									<uni-icons type="star-filled" color="#FFC128" size="16"></uni-icons>
									<uni-icons type="star-filled" color="#FFC128" size="16"></uni-icons>
									<uni-icons type="star-filled" color="#FFC128" size="16"></uni-icons>
								</view>
							</view>
							<view class="right-content">
								<text>宝贝不错不错不错不错宝贝不错不错不错不错宝贝不错不错不错不错
								宝贝不错不错不错不错宝贝不错不错不错不错宝贝不错不错不错不错宝贝不错不错不错不错</text>
							</view>
							<view class="right-time"><text style="margin-right: 20px;">2020-08-20 14:27:00</text></view>
						</view>
					</view>
				</view>
		</view>
		
		<!-- 立即分享 -->
		<uni-popup type="bottom" ref="sharePopup">
			<view class="share-popup">
				<view class="chare-child">
					<view class="img-child">
						<image class="thumbnails-img" src="../../static/images/copy_link.png"></image>
					</view>
					<text>复制链接</text>
				</view>
				<view class="chare-child">
					<view class="img-child">
						<image class="thumbnails-img" src="../../static/images/gen_img.png"></image>
					</view>
					<text>生成海报</text>
				</view>
				<view class="chare-child">
					<view class="img-child">
						<image class="thumbnails-img" src="../../static/images/share_wechat.png"></image>
					</view>
					<text>分享好友</text>
				</view>
			</view>
			<view class="chare-cancel" @click="closeSharePopup"><text>取消</text></view>
		</uni-popup>
		<!-- 规格选择 -->
			<uni-popup type="bottom" ref="popup">
				<view class="select-dialog" :style="{height:getHeight/2 + 'px'}">
					<view class="dialog-top">
						<view class="thumbnails">
						<image class="thumbnails-img" :src="images[0]"></image>
					</view>
					<view class="commodity-title">
						<text class="text-one">￥{{details.current}}</text>
						<view class="text-tow">已选：{{details.describe}}</view>
					</view>
					</view>
					
					<!-- 已预留横向滚动 -->
					<view class="commodity-style">
						<text>款式</text>
						<scroll-view class="style-btn" :scroll-x="true" :show-scrollbar="true">
							<view class="btn-child"><text class="child-text">舒克流光白活炭早晚牙膏</text></view>
							
						</scroll-view>
					</view>
					
					<view class="commodity-style">
						<text>规格</text>
						<scroll-view class="style-btn" :scroll-x="true" :show-scrollbar="true">
							<view class="btn-child"><text class="child-text">65g+65g</text></view>
							
						</scroll-view>
					</view>
					<view class="success-btn" @click="closeSelect">完成</view>
				</view>
			</uni-popup>
		
	</view>
</template>

<script>
	import uniIcons from '@dcloudio/uni-ui/lib/uni-icons/uni-icons.vue'
	import uniSegmentedControl from '@dcloudio/uni-ui/lib/uni-segmented-control/uni-segmented-control.vue'
	import uniPopup  from '@dcloudio/uni-ui/lib/uni-popup/uni-popup.vue'
	export default{
		components:{
			uniIcons,
			uniSegmentedControl,
			uniPopup
		},
		data(){
			return{
				//屏幕可用高度
				getHeight:0,
				//轮播图//
				indicatorDots: true,
				indicatorActiveColor: '#000000',
				indicatorColor: '#9D9D9D',
				autoPlay: true,
				interval: 5000,
				images: ['http://ww1.sinaimg.cn/large/006AcIg8gy1ghx1ubzyp8j30m80m8n0h.jpg',
					'http://ww1.sinaimg.cn/large/006AcIg8gy1ghx1uch0vgj30m80m8jvi.jpg'
				],
				details:{
					describe:'舒克流光白活炭早晚牙膏65g+65g',
					current:'19.50',
					price:'21.80',
					sales:'909',
					shareAmount:'0.4',
					preferential:'1.00',
					images:['http://ww1.sinaimg.cn/large/006AcIg8gy1ghx1uc27tmj30ly0rsakz.jpg',
					'http://ww1.sinaimg.cn/large/006AcIg8gy1ghx1ubeifvj30ly0rsdp6.jpg',
					'http://ww1.sinaimg.cn/large/006AcIg8gy1ghx1ubrk6lj30ly0rstis.jpg',
					'http://ww1.sinaimg.cn/large/006AcIg8gy1ghx1ubgsrhj30ly0rsn69.jpg',
					'http://ww1.sinaimg.cn/large/006AcIg8gy1ghx1ubgnvvj30ly0rs47w.jpg',
					'http://ww1.sinaimg.cn/large/006AcIg8gy1ghx1ube8sgj30ly0rsq9b.jpg',
					'http://ww1.sinaimg.cn/large/006AcIg8gy1ghx1ubhx4tj30ly0rsn2p.jpg',
					'http://ww1.sinaimg.cn/large/006AcIg8gy1ghx1ubobqqj30ly0rs7d2.jpg',
					'http://ww1.sinaimg.cn/large/006AcIg8gy1ghx1ubtvjmj30ly0rsn3t.jpg',
					'http://ww1.sinaimg.cn/large/006AcIg8gy1ghx1uc61p3j30ly0rsjwm.jpg',
					'http://ww1.sinaimg.cn/large/006AcIg8gy1ghx1ubsf16j30ly0rsn5r.jpg',
					'http://ww1.sinaimg.cn/large/006AcIg8gy1ghx1ubrk12j30ly0itq7c.jpg'],
					parameters:[{name:'产品名称',content:'Saky/舒客 流光白活炭深洁牙膏'},
					{name:'功能',content:'美白 去牙渍 口气清新 清洁'},
					{name:'适用对象',content:'成人'},
					{name:'规格类型',content:'套装'},
					{name:'保质期',content:'3年'},
					{name:'是否含氟',content:'不含氟'},
					{name:'产地',content:'中国大陆'},
					{name:'是否贩装',content:'是'},
					{name:'品牌',content:'Saky/舒客'}]
				},
				
				//分段器
				items:['详情','参数','评价'],
				
				selectCurrent:0,
			}
		},
		methods:{
			//分段器选择（详情/参数/评价）
			slectControl(e){
				console.log('打印：'+ JSON.stringify(e) )
				if(this.selectCurrent!==e.currentIndex){
					this.selectCurrent=e.currentIndex
				}
			},
			//点击【款式规格】、【加入购物车】、【立即购买】或者点击立即分析/点击【完成】、【取消】关闭底下抽屉
			openSelect(){
				this.$refs.popup.open()
			},
			closeSelect(){
				this.$refs.popup.close()
			},
			openSharePopup(){
				this.$refs.sharePopup.open()
			},
			closeSharePopup(){
				this.$refs.sharePopup.close()
			}
		},
		mounted() {
			uni.getSystemInfo({
				success: (res) => {
					this.getHeight=res.windowHeight-100
					console.log('手机信息：'+this.getHeight)
				}
			})
		}
	}
</script>

<style>
	
	.content {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		overflow: scroll;
		/* background-color: #F5F5F5; */
		z-index: 1;
	}
	.text-one{
		font-size: 14px;
		color: #FA436A;
	}
	.Operation{
		position: fixed;
		bottom: 20px;
		right: 5%;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		box-shadow: 0 0 10px 0 rgba(0,0,0,.5);
		opacity: .9;
		width: 90%;
		height: 50px;
		background-color: #FFFFFF;
		border-radius: 6px;
	}
	.operation-child{
		width: 40%;
		height: 50px;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}
	.index-page{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 50px;
		height: 50px;
	}
	.index-page:active{
		background-color: #f3f3f3;
	}
	.swiper-image {
		width: 100%;
		height: 350px;
	}
	.commodity-text{
		width: 100%;
		font-size: 14px;
		font-weight: 500;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
		margin-top: 5px;
	}
	.details{
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		width: 95%;
		height: auto;
	}
	.navigator-img{
		width: 25px;
		height: 25px;
	}
	.navigator-text{
		font-size: 14px;
		color: #606266;
	}
	.Operation-btn{
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		width: 50%;
		height: 75%;
		border-radius: 40px;
		background-image: linear-gradient(to right,#FFA534,#FA436A,#F56C6C);
	}
	.btn-add{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 50%;
		height: 100%;
		padding: 0;
		border-radius: 40px 10px 10px 40px;
		/* box-sizing: border-box; */
		/* border-top: .9px solid rgba(0,0,0,.2);
		border-bottom: .9px solid rgba(0,0,0,.2);
		border-right: .9px solid rgba(0,0,0,.2); */
		background-color: rgb(0,0,0,0);
	}
	.btn-buy{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 50%;
		height: 100%;
		padding: 0;
		border-radius: 10px 40px 40px 10px;
		
		background-color: rgb(0,0,0,0);
	}
	.btn-text{
		font-size: 14px;
		/* font-weight: 500; */
		color: #FFFFFF;
	}
	.btn-content{
		width: .7px;
		height: 15px;
		background-color: rgb(255,255,255,0.5);
	}
	.tab-share{
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 30px;
		margin-top: 10px;
		background-image: linear-gradient(to right,#fdf5f6,#fbebf6) ;
	}
	.share-left{
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin-left: 15px;
		width: 50%;
		height: 80%;
	}
	.share-img{
		width: 18px;
		height: 20px;
		margin-right: 10px;
	}
	.left-text{
		font-size: 14px;
		color: #606266;
	}
	.share-right{
		display: flex;
		justify-content: flex-end;
		align-items: center;
		margin-right: 15px;
		width: 50%;
		height: 80%;
		color: #FA436A;
		font-size: 12px;
	}
	.iconfont{
		font-size: 16px;
		margin-left: 5px;
	}
	.select-style{
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 30px;
		font-size: 12px;
		color: #606266;
	}
	.preferential{
		display: flex;
		justify-content: flex-start;
		align-items: center;
		width: 80%;
		height: 30px;
		font-size: 12px;
		color: #FA436A;
	}
	.semented{
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		height: auto;
		padding-top: 10px;
		background-color: #F5F5F5;
	}
	.segmented-all{
		display: flex;
		justify-content: center;
		width: 100%;
		height: auto;
		margin-bottom: 2px;
		background: #FFFFFF;
	}
	.segmented-style{
		width: 80%;
		height: auto;
		background: #FFFFFF;
	}
	.semented-child{
		width: 100%;
		height: 500px;
		padding-bottom: 60px;
		background-color: #FFFFFF;
	}
	.botton-view{
		width: 100%;
		height: 90px;
		background: #FFFFFF;
	}
	.separated{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 30px;
		font-size: 14px;
		color: #909399;
	}
	.show-img{
		width: 100%;
		display: block;
	}
	.semented-parameters{
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 5px;
		margin-bottom:90px ;
		width: 100%;
		height: auto;
		background: #FFFFFF;
	}
	.comments{
		display: flex;
		flex-direction: row;
		width: 100%;
		height: fit-content;
		margin-top: 10px;
	}
	.comments-left{
		display: flex;
		justify-content: center;
		width: 20%;
		height: 60px;
	}
	.avatar{
		width: 40px;
		height: 40px;
		border-radius: 50%;
	}
	.avatar-img{
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
	.comments-right{
		display: flex;
		flex-direction: column;
		width: 80%;
		height: fit-content;
	}
	.right-top{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
		height: 30px;
	}
	.user-name{
		width: fit-content;
		height: 100%;
		font-size: 14px;
		color: #606266;
	}
	.star{
		display: flex;
		flex-direction: row;
		width:fit-content;
		margin-right: 20px;
		height: 100%;
	}
	.right-content{
		width: 100%;
		height: fit-content;
		padding-right: 20px;
		font-size: 16px;
	}
	.right-time{
		width: 100%;
		height: 20px;
		margin-top: 10px;
		display: flex;
		justify-content: flex-end;
		font-size: 12px;
		color: #909399;
	}
	.parameters-child{
		width: 90%;
		height: 20px;
		font-size: 14px;
		color: #606266;
	}
	.select-dialog{
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		border-radius: 5px 5px 0 0;
		background: #FFFFFF;
	}
	.dialog-top{
		display: flex;
		flex-direction: row;
		width: 100%;
		height: auto;
	}
	.thumbnails{
		position: relative;
		top: -20px;
		left: 20px;
		display: inline-block;
		border-radius: 5px 5px 0 0;
		width: 80px;
		height: 80px;
		background: #FFFFFF;
	}
	.thumbnails-img{
		width: 100%;
		height: 100%;
		border-radius: 5px 5px 0 0;
	}
	.commodity-title{
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: flex-start;
		width: 70%;
		height: 60px;
		margin-left: 30px;
		font-size: 14px;
		color: #606266;
	}
	.text-tow{
		width: 100%;
		height: 30px;
	}
	.commodity-style{
		display: flex;
		flex-direction: column;
		width: 90%;
		height: 70px;
		color: #606266;
	}
	.style-btn{
		white-space: nowrap;
		margin-top: 10px;
		width: 100%;
		height: 40px;
	}
	.btn-child{
		display: inline-block;
		width: fit-content;
		height: 30px;
		line-height: 30px;
		border-radius: 30px;
		background: #fbebee;
		margin-right: 10px;
	}
	.child-text{
		font-size: 14px;
		color: #FA436A;
		margin-left: 10px;
		margin-right: 10px;
	}
	.success-btn{
		width: 95%;
		height: 30px;
		text-align: center;
		line-height: 30px;
		border-radius: 30px;
		margin-top: 20px;
		font-size: 14px;
		color: #FFFFFF;
		background: #FA436A;
	}
	.share-popup{
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		width: 100%;
		height: 100px;
		background: #FFFFFF;
		border-radius: 5px 5px 0 0;
		font-size: 14px;
	}
	.chare-child{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		width: 80px;
		height: 80px;
		margin-top: 5px;
		color: #606266;
	}
	.img-child{
		width: 40px;
		height: 40px;
	}
	.chare-cancel{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 50px;
		font-size: 14px;
		background: #FFFFFF;
		border-top: 1px #f3f3f3 solid;
	}
</style>
