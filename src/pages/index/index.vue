<template>
	<view class="content">
		<view class="input-opacity" :style="{opacity:scroll}"></view>
		<view class="swiper-image">
			<swiper class="swiper-image" :indicator-dots="indicatorDots" :indicator-active-color="indicatorActiveColor"
			 :indicator-color="indicatorColor" :autoplay="autoPlay" :interval="interval">
				<swiper-item v-for=" (image,index) in images" :key="index">
					<image :src="image" style="width: 100%;height: 100%;"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="input-select">
			<view class="search-box-cover"></view>
			<view class="input-select-imgae">
				<image src="../../static/images/logo.png" style="width: 80%;height: 80%;"></image>
			</view>
			<uni-search-bar class="new-search" style="width: 100%;" bgColor="rgba(235,235,228,0.5)" radius="100" placeholder="搜索商品名称"></uni-search-bar>
			<view class="input-button" @click="showDialog" :style="{color:textColor}"><text>关注</text></view>
		</view>
		<view class="head-label">
			<text>官方严选</text>
			<text>正品保障</text>
			<text>售后无忧</text>
			<text>七天无理由退换</text>
		</view>
		<view class="classification">
			<!-- <view class="classification-one"> -->
				<view class="classification-child" @click="toMember(images.title)" v-for=" (images,index) in buttonImagesOne" :key="index">
					<image :src="images.img" class="classification-image"></image>
					<text class="classification-text">{{images.title}}</text>
				</view>
			<!-- </view> -->
			<!-- <view class="classification-one">
				<view class="classification-child" v-for="(images,index) in buttonImageTwo" :key="index">
					<image :src="images.img" class="classification-image"></image>
					<text class="classification-text">{{images.title}}</text>
				</view>
			</view> -->
		</view>
		<view class="timer">
			<view style="display: flex;flex-direction: row;align-items: center;">
				<image class="timer-image" src="../../static/images/cjxx-ms.png"></image>
				<uni-countdown :showDay="false" :hour="countdown.hour" :minute="countdown.minute" :second="countdown.second"
				 :showColon="true" background-color="#000000" color="#FFFFFF" :reset="countdown.reset" @timeup="timerUp"></uni-countdown>
			</view>
			<uni-icons style="margin-right: 10px;" type="arrowright" size="16" color="#909399"></uni-icons>
		</view>
		<view class="new">
			<view class="recommended">
				<view class="recommended-left">
					<image class="recommended-img" src="../../static/images/new.png"></image>
					<text>新品推荐</text>
				</view>
				<view>
					<text style="font-size: 12px;color: #909399;">更多</text>
					<uni-icons type="arrowright" size="16" color="#909399"></uni-icons>
				</view>
			</view>
			<view class="commodity">
				<view v-for=" (i,index) in buttonImagesOne" class="commodity-child" @click="toDetails" :key="index">
					<image class="commodity-img"  :src="i.img"></image>
					<text class="commodity-text">江中猴菇米稀养胃早餐450g不好吃手动阀</text>
					<view class="commodity-label">
						<text style="font-size: 12px;">分享估赚￥3</text>
						<view style="width: 0;height: 0;border-top: 10px solid transparent;
						border-right: 10px solid #FFFFFF;
						border-bottom: 10px solid transparent;
						display: inline-block;"></view>
					</view>
					<view style="display: flex;justify-content: space-between;align-items: center;">
						<view style="display: inline-block;">
							<text style="color: #fa436a;font-size: 14px;">
								<text style="color: #fa436a;font-size: 10px;">￥</text>95.00</text>
							<text style="font-size: 10px;color: #909399;text-decoration: line-through;">￥135.00</text>
						</view>
						<text style="color: #909399;font-size: 12px;">已售721件</text>
					</view>
					<view style="display: flex;justify-content: space-between;align-items: center;width: 100%;">
						<text style="color: #909399;font-size: 12px;">优惠券 ￥10</text>
						<button class="shopping-button" >立即抢购</button>
					</view>
				</view>
			</view>
		</view>
		<view class="new">
			<view class="recommended">
				<view class="recommended-left">
					<image class="recommended-img" src="../../static/images/new.png"></image>
					<text>热卖推荐</text>
				</view>
				<view>
					<text style="font-size: 12px;color: #909399;">更多</text>
					<uni-icons type="arrowright" size="16" color="#909399"></uni-icons>
				</view>
			</view>
			<view class="commodity">
				<view v-for="(i,index) in buttonImagesOne" class="commodity-child" :key="index">
					<image class="commodity-img" :src="i.img"></image>
					<text class="commodity-text">江中猴菇米稀养胃早餐450g不好吃手动阀</text>
					<view class="commodity-label">
						<text style="font-size: 12px;">分享估赚￥3</text>
						<view style="width: 0;height: 0;border-top: 10px solid transparent;
						border-right: 10px solid #FFFFFF;
						border-bottom: 10px solid transparent;
						display: inline-block;"></view>
					</view>
					<view style="display: flex;justify-content: space-between;align-items: center;">
						<view style="display: inline-block;">
							<text style="color: #fa436a;font-size: 14px;">
								<text style="color: #fa436a;font-size: 10px;">￥</text>95.00</text>
							<text style="font-size: 10px;color: #909399;text-decoration: line-through;">￥135.00</text>
						</view>
						<text style="color: #909399;font-size: 12px;">已售721件</text>
					</view>
					<view style="display: flex;justify-content: space-between;align-items: center;width: 100%;">
						<text style="color: #909399;font-size: 12px;">优惠券 ￥10</text>
						<button class="shopping-button">立即抢购</button>
					</view>
				</view>
				<!-- <uni-load-more :status="more"></uni-load-more> -->
			</view>
		</view>
		<view class="new">
			<view class="recommended">
				<view class="recommended-left">
					<image class="recommended-img" src="../../static/images/new.png"></image>
					<text>人气推荐</text>
				</view>
				<view>
					<text style="font-size: 12px;color: #909399;">更多</text>
					<uni-icons type="arrowright" size="16" color="#909399"></uni-icons>
				</view>
			</view>
			<view class="commodity">
				<view v-for="(i,index) in buttonImagesOne" class="commodity-child" :key="index">
					<image class="commodity-img" :src="i.img"></image>
					<text class="commodity-text">江中猴菇米稀养胃早餐450g不好吃手动阀</text>
					<view class="commodity-label">
						<text style="font-size: 12px;">分享估赚￥3</text>
						<view style="width: 0;height: 0;border-top: 10px solid transparent;
						border-right: 10px solid #FFFFFF;
						border-bottom: 10px solid transparent;
						display: inline-block;"></view>
					</view>
					<view style="display: flex;justify-content: space-between;align-items: center;">
						<view style="display: inline-block;">
							<text style="color: #fa436a;font-size: 14px;">
								<text style="color: #fa436a;font-size: 10px;">￥</text>95.00</text>
							<text style="font-size: 10px;color: #909399;text-decoration: line-through;">￥135.00</text>
						</view>
						<text style="color: #909399;font-size: 12px;">已售721件</text>
					</view>
					<view style="display: flex;justify-content: space-between;align-items: center;width: 100%;">
						<text style="color: #909399;font-size: 12px;">优惠券 ￥10</text>
						<button class="shopping-button">立即抢购</button>
					</view>
				</view>
			</view>
		</view>

		<!-- 自定义悬浮按钮 -->
		<view class="to-top" :style="{opacity:scroll}" @click="toTop">
			<image src="../../static/images/upgrade.png" class="custom-img"></image>
		</view>
		<view class="custom-service">
			<image src="../../static/images/custom.png" class="custom-img"></image>
		</view>
		<!-- 关注二维码dialog -->
		<view class="dialog-pop" v-show="dialogCode" @click="closeDialog">
			<view @click.stop="showDialog" class="dialogImg">
				<image src="../../static/images/qr.png" show-menu-by-longpress="true" class="dialog-img"></image>
				<text class="code-text">长按图片【识别二维码】关注公众号</text>
			</view>
		</view>

	</view>
</template>

<script>
	import uniSearchBar from '@dcloudio/uni-ui/lib/uni-search-bar/uni-search-bar.vue'
	import uniCountdown from '@dcloudio/uni-ui/lib/uni-countdown/uni-countdown.vue'
	import uniIcons from '@dcloudio/uni-ui/lib/uni-icons/uni-icons.vue'
	import uniLoadMore from '@dcloudio/uni-ui/lib/uni-load-more/uni-load-more.vue'
	export default {
		components: {
			uniSearchBar,
			uniCountdown,
			uniIcons,
			uniLoadMore,
		},

		data() {
			return {
				//
				//轮播图//
				indicatorDots: true,
				indicatorActiveColor: '#FF2D2D',
				indicatorColor: '#9D9D9D',
				autoPlay: true,
				interval: 5000,
				images: ['http://ww1.sinaimg.cn/large/006AcIg8gy1ghx1ucdglwj30ku0autar.jpg',
					'http://ww1.sinaimg.cn/large/006AcIg8gy1ghx1uc1lisj30ku0augnv.jpg',
					'http://ww1.sinaimg.cn/large/006AcIg8gy1ghx1ucar6gj306o05274i.jpg'
				],

				// 中部分类
				buttonImagesOne: [{
						img: 'http://ww1.sinaimg.cn/large/006AcIg8gy1ghx1uc6de6j30eg07s75g.jpg',
						title: '会员专享'
					},
					{
						img: 'http://ww1.sinaimg.cn/large/006AcIg8gy1ghx1ucnfmtj3046046746.jpg',
						title: '有机专区'
					},
					{
						img: 'http://ww1.sinaimg.cn/large/006AcIg8gy1ghx1uc0ujmj30460463yd.jpg',
						title: '厨房用具'
					},
					{
						img: 'http://ww1.sinaimg.cn/large/006AcIg8gy1ghx1uc6nijj3046046jra.jpg',
						title: '生活电器'
					},
					{
						img: 'http://ww1.sinaimg.cn/large/006AcIg8gy1ghx1ucd4oej30460460sn.jpg',
						title: '食品粮油'
					},{
						img: 'http://ww1.sinaimg.cn/large/006AcIg8gy1ghx1ucpn5nj3046046746.jpg',
						title: '居家用品'
					},
					{
						img: 'http://ww1.sinaimg.cn/large/006AcIg8gy1ghx1ucidlaj3046046mx3.jpg',
						title: '限时秒杀'
					},
					{
						img: 'http://ww1.sinaimg.cn/large/006AcIg8gy1ghx1uc09trj3046046a9z.jpg',
						title: '一元抢购'
					},
					{
						img: 'http://ww1.sinaimg.cn/large/006AcIg8gy1ghx1uc4l7wj3046046745.jpg',
						title: '9.9拼团'
					},
					{
						img: 'http://ww1.sinaimg.cn/large/006AcIg8gy1ghx1uc6a0kj3046046dfq.jpg',
						title: '积分兑换'
					}
				],

				//倒计时
				countdown: {
					hour: 8,
					minute: 0,
					second: 0,
					reset: false
				},

				//搜索框
				scroll: 0,
				textColor: '#FFFFFF',
				dialogCode: false
			}
		},
		methods: {

			//计时器赋值（后期需要设置倒计时离开页面停止，进入时恢复）
			timerUp() {
				this.countdown.reset = !this.countdown.reset;
				this.countdown.hour = 8
			},
			// 一键回到Top
			toTop() {
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 500
				})
			},
			// 点击关注弹出dialog/关闭dialog
			showDialog() {
				this.dialogCode = true
			},
			closeDialog() {
				this.dialogCode = false
				console.log('点击遮罩')

			},
			
			//点击商品跳转详情
			toDetails(){
				uni.navigateTo({
					url:'childPage',
					success() {
						console.log('跳转进入')
					},
					fail(e) {
						console.log('跳转进入'+ JSON.stringify(e))
					},
				})
			},
			//点击会员专享
			toMember(val){
				if(val=='会员专享'){
					uni.navigateTo({
					url:'fastWay/member',
				})
				return true;
				}else if(val =='有机专区'){
					uni.navigateTo({
						url:'fastWay/organic'
					})
					return true;
				}else if(val =='厨房用具'){
					uni.navigateTo({
						url:'fastWay/kitchen'
					})
					return true;
				}else if(val =='生活电器'){
					uni.navigateTo({
						url:'fastWay/appliances'
					})
					return true;
				}else if(val =='食品粮油'){
					uni.navigateTo({
						url:'fastWay/grain'
					})
					return true;
				}else if(val =='居家用品'){
					uni.navigateTo({
						url:'fastWay/homeSupplies'
					})
					return true;
				}else if(val =='限时秒杀'){
					uni.navigateTo({
						url:'fastWay/snapped'
					})
					return true;
				}else if(val =='一元抢购'){
					uni.navigateTo({
						url:'fastWay/secondKill'
					})
					return true;
				}else if(val =='9.9拼团'){
					uni.navigateTo({
						url:'fastWay/collage'
					})
					return true;
				}else if(val =='积分兑换'){
					uni.navigateTo({
						url:'fastWay/integral'
					})
					return true;
				}
				
			}
		},
		mounted() {
			this.timerUp()
		},

		//实时监听滚动条距TOP距离
		onPageScroll(res) {
			let val = res.scrollTop / 200
			if (val < 1) {
				this.scroll = val
				this.textColor = '#FFFFFF'
			} else {
				this.scroll = 1
				this.textColor = '#000000'
			}

		},

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
		background-color: #F5F5F5;
		overflow: scroll;
		z-index: 1;
	}

	.swiper-image {
		width: 100%;
		height: 240px;
	}

	.input-opacity {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 40px;
		z-index: 2;
		background-color: #FFFFFF;
		opacity: 2;
	}

	.input-select {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 40px;
		background-color: rgba(255, 255, 255, 0);
		/* background-color:#333333; */
		display: flex;
		align-items: center;
		justify-content: space-between;
		z-index: 3;
	}

	.input-select-imgae {
		width: 45px;
		height: 40px;
		margin-left: 5px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.uni-searchbar.data-v-1b21e306 {
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		-webkit-box-orient: horizontal;
		-webkit-box-direction: normal;
		-webkit-flex-direction: row;
		flex-direction: row;
		position: relative;
		padding: 16rpx;
		background-color: rgba(255, 255, 255, 0) !important;

	}

	.uni-searchbar__box.data-v-1b21e306 {
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		box-sizing: border-box;
		overflow: hidden;
		position: relative;
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		flex: 1;
		-webkit-box-pack: center;
		-webkit-justify-content: center;
		justify-content: center;
		-webkit-box-orient: horizontal;
		-webkit-box-direction: normal;
		-webkit-flex-direction: row;
		flex-direction: row;
		-webkit-box-align: center;
		-webkit-align-items: center;
		align-items: center;
		height: 36px;
		padding: 5px 8px 5px 0;
		border-width: .5px;
		border: none !important;

	}

	.uni-searchbar.data-v-b0a8ce34 {
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		-webkit-box-orient: horizontal;
		-webkit-box-direction: normal;
		-webkit-flex-direction: row;
		flex-direction: row;
		position: relative;
		background-color: rgba(255, 255, 255, 0) !important;
	}

	.new-search>>>.uni-searchbar__box.data-v-b0a8ce34 {
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		box-sizing: border-box;
		overflow: hidden;
		position: relative;
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		flex: 1;
		-webkit-box-pack: center;
		-webkit-justify-content: center;
		justify-content: center;
		-webkit-box-orient: horizontal;
		-webkit-box-direction: normal;
		-webkit-flex-direction: row;
		flex-direction: row;
		-webkit-box-align: center;
		-webkit-align-items: center;
		align-items: center;
		width: 100% !important;
		height: 50% !important;
		padding: 5px 8px 5px 0px;
		border: none !important;
		border-style: none !important;
	}

	.input-button {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 45px;
		height: 40px;
		margin-right: 5px;
		color: #FFFFFF;
		font-weight: 200;
		font-size: 16px;
	}

	.head-label {
		width: 100%;
		height: 30px;
		display: flex;
		font-size: 12px;
		font-weight: 600;
		background-color: #f5f5f5;
		align-items: center;
		justify-content: space-around;
	}

	.classification {
		width: 100%;
		height: 160px;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		background-color: #FFFFFF;
	}

	.classification-one {
		width: 100%;
		height: 80px;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}

	.classification-child {
		width: 80px;
		height: 80px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.classification-image {
		width: 45px;
		height: 45px;
		border-radius: 45px;
	}

	.classification-text {
		font-size: 14px;
		font-weight: 100;
		margin-top: 5px;
	}

	.timer {
		width: 100%;
		height: 50px;
		margin: 10px 0;
		background-color: #FFFFFF;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.timer-image {
		width: 80px;
		height: 20px;
		margin: 0 10px;
	}

	.new {
		width: 100%;
		background-color: #FFFFFF;
	}

	.recommended {
		height: 40px;
		padding: 0 10px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.recommended-left {
		display: flex;
		align-items: center;
	}

	.recommended-img {
		width: 25px;
		height: 25px;
		margin-right: 10px;
	}

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

	.custom-service {
		position: fixed;
		bottom: 100px;
		right: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		border: 2px;
		box-shadow: 0 0 3px #ccc;
		background-color: #FFFFFF;
		z-index: 9;
	}

	.custom-img {
		width: 50%;
		height: 50%;
	}

	.to-top {
		position: fixed;
		bottom: 140px;
		right: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		border: 2px;
		box-shadow: 0 0 3px #ccc;
		background-color: #FFFFFF;
		z-index: 9;
	}

	.dialog-pop {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		z-index: 10;
	}

	.dialogImg {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.dialog-img {
		width: 200px;
		height: 200px;
		margin-bottom: 5px;
		z-index: 11;
	}

	.code-text {
		color: #FFFFFF;
		font-size: 16px;
		font-weight: 600;
		z-index: 12;
	}
</style>
