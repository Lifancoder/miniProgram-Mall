<template>
	<view class="content">
		<view class="head-title">
			<text>社交圈详情</text></view>
			<view class="share-content">
				<view style="width: 15%;height: 100%;display: flex;justify-content: center;">
					<view class="content-left">
					<image class="content-avatar" :src="obj.avatar"></image>
					</view>
				</view>
				<view class="content-right">
					<view class="content-name">{{obj.name}}</view>
					<text class="content-text">{{obj.content}}</text>
					<view class="grids">
						<view class="grids-item" v-for="(image,s) in obj.images" :key="s">
							<image class="grid-image" @click="preview(obj.images,s)" :src="image"></image>
						</view>
					</view>
					<view class="content-footer">
						<view class="footer-time">{{obj.time}}</view>
						<view class="footer-operation">
							<view class="iconfont iconshare_icon" @click="showDilog(index)"></view>
							<view class="operation-child" @click="showAlert">
								<view class="iconfont icondianzan" @click="unLike()" v-if="content.islike==true"></view>
								<view class="iconfont icondianzan1"@click="showAlert(index)"  v-else></view>
								<text class="operation-text">{{obj.likenum}}</text>
							</view>
							<view class="operation-child" @click="comments">
								<view class="iconfont iconpinglun"></view>
								<text class="operation-text">{{obj.comments}}</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 分割线 -->
			<view class="split-line"></view>
			<!-- 分享dialog -->
			<view class="mask" v-show="isShare" @click="closeDiog">
				<view class="mask-plane">
					<image class="plane-image" src="../../static/images/Plane.png"></image>
				</view>
				<view class="mask-shareText">立即分享给好友吧</view>
				<view class="mask-Text">点击屏幕右上角 · · · 将厨家心选分享给好友</view>
			</view>
			<!-- 未登录dialog -->
			<view class="mask-alert" v-show="isAlert">
				<view class="mask-button">
					<view class="button-header">您尚未登录，前往登录？</view>
					<view class="button-footer" >
						<view class="footer-cancel" @click="closeAlert">取消</view>
						<view class="footer-true">确定</view>
					</view>
				</view>
			</view>
			
			<!-- 评论区 -->
			<view class="comments">
				<view style="width: 98%;height: 40px;font-size: 16px;margin-left: 5px;">评论</view>
				<view class="comments-list">
					<uni-list :border="false">
						<uni-list-item v-for="(comment,index) in commentsList" :key="index"
						:title="comment.name" :note="comment.content" :thumb="comment.avatar"
						:showExtraIcon="true"  thumbSize="lg" :showArrow="false"
						:clickable="false">
						<view class="comment-time">{{comment.time}}</view>
						</uni-list-item>
					</uni-list>
				</view>
			</view>
			
			<!-- 输入评论内容 -->
			<view class="input-content" v-show="showInput">
				<input class="inputStyle" placeholder="评论"/>
				<view class="input-btn" @click="send">发送</view>
			</view>
	</view>
</template>

<script>
	import uniList from '@dcloudio/uni-ui/lib/uni-list/uni-list.vue'
	import uniListItem from '@dcloudio/uni-ui/lib/uni-list-item/uni-list-item.vue'
	export default{
		onLoad:function(e){
			let a= parseInt(e.index)
			this.nowIndex=a
			console.log('前一页传递数据：'+ JSON.stringify(this.nowIndex))
			this.obj=this.contentArray[this.nowIndex]
		},
		components:{
			uniList,
			uniListItem
		},
		data(){
			return{
				showInput:false,
				nowIndex:0,
				isLogined:false,
				obj:{},
				contentArray:[{avatar:'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
				name:'大兵',content:'新年新气象，旧锅换新颜！翰乐公司以旧换新活动火爆进行中，'+
				'只要你家有不用的坏锅都可以拿到翰乐公司换新锅，邮费报销，你还等待什么呢！趁着过年前赶紧换个高颜值，高品质的厨具吧！',
				images:['https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
          'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
          'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
          'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
          'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
          'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
          'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
		  'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
          'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'],
		  time:'2020-08-12 15:14:16',likenum:2,comments:4, islike:false},
		  {avatar:'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
		  	name:'大兵',content:'新年新气象，旧锅换新颜！翰乐公司以旧换新活动火爆进行中，'+
		  	'只要你家有不用的坏锅都可以拿到翰乐公司换新锅，邮费报销，你还等待什么呢！趁着过年前赶紧换个高颜值，高品质的厨具吧！',
		  	images:['https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
		  'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
		  'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
		  'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
		  'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
		  'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
		  'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
		  'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
		  'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg'],
		  time:'2020-08-12 15:14:16',likenum:34,comments:4, islike:false}],
				
		  commentsList:[{avatar:'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
				name:'刘国庆',content:'测试评论。。。。。。',time:'2020-08-12 15:14:16'},
				{avatar:'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
				name:'高涛',content:'前端运行日志，请另行在小程序开发工具的控制台查看士大夫士大夫十分大的发发是发',
				time:'2020-08-13 18:24:14'},
				{avatar:'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
				name:'张三',content:'测试评论。。。。。。评论区测试测试评论区测试测试',time:'2020-08-13 20:12:50'}],
				isShare:false,
				isAlert:false
			}
		},
		methods:{
			// 分享、点赞、评论操作
			showDilog(){
				this.isShare=true
			},
			showAlert(){
				if(!this.isLogined){
					this.isAlert=true
				}else{
					
				}
				
			},
			unLike(){
				
				console.log('不喜欢')
			},
			comments(){
				this.showInput=true
			},
			closeDiog(){
				this.isShare=false
			},
			closeAlert(){
				this.isAlert=false
			},
			// 预览图片
			preview(images,s){
				console.log(images)
				console.log('索引：'+s)
				uni.previewImage({
					current:s,
					urls:images,
					success() {
						
					}
				})
			},
			// 发送
			send(){
				uni.showModal({
					content:'无接口模式，测试！^_^!!',
					showCancel:false,
					success() {
						this.showInput=false
					}
				})
			}
		},
		mounted() {
			var res=global.isLogin()
			if(!res){
				this.isLogined=false
			}else{
				this.isLogined=true
			}
		},
		
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
		/* z-index: 1; */
	}
	.input-content{
		width: 100%;
		height: 50px;
		position: fixed;
		bottom: 0;
		right: 0;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		background: #f4f5f6;
		border-top: solid 1px #bbb ;
	}
	.inputStyle{
		width:80%;
		height: 30px;
		background: #FFFFFF;
		border-radius: 5px;
		border: none;
	}
	.input-btn{
		width: 45px;
		height: 35px;
		background: #FA436A;
		border-radius: 5px;
		text-align: center;
		line-height: 35px;
		font-size: 14px;
		color: #FFFFFF;
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
		z-index: 10;
	}
.comments{
	width: 100%;
	height: 100%;
}
.comments-list{
	width: 100%;
	height: 100%;
	margin-bottom: 30px;
}
	.mask{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,.6);
		z-index: 15;
	}
	.mask-alert{
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,.6);
		z-index: 15;
	}
	.mask-button{
		width: 300px;
		height: 100px;
		border-radius: 5px;
		background-color: #FFFFFF;
	}
	.iconfont.iconshare_icon{
		font-size: 16px;
		color: #36648b;
	}
	.iconfont.icondianzan1{
		font-size: 18px;
		color: #36648b;
	}
	.iconfont.icondianzan{
		font-size: 16px;
		color: #FA436A;
	}
	.iconfont.iconpinglun{
		font-size: 16px;
		color: #36648b;
	}
	.button-header{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 60%;
		color: #999999;
		border-bottom: 1px #F5F5F5 solid;
	}
	.button-footer{
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 40%;
	}
	.footer-cancel{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 50%;
		height: 99%;
		border-radius: 0 0 0 5px;
		color: #000000;
		font-size: 16px;
		font-weight: 500;
		border-right: 0.5px #F5F5F5 solid;
	}
	.footer-cancel:active{
		background-color: rgba(233, 230, 221);
	}
	.footer-true{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 50%;
		height: 99%;
		border-radius: 0 0 5px 0;
		color: #007aff;
		font-size: 16px;
		font-weight: 500;
		border-left: 0.5px #F5F5F5 solid;
	}
	.footer-true:active{
		background-color: rgba(233, 230, 221);
	}
	.mask-plane{
		width: 100%;
		height: 110px;
		display: flex;
		justify-content: flex-end;
	}
	.plane-image{
		width: 50px;
		height: 50px;
		margin-right: 60px;
		margin-top: 10px;
	}
	.mask-shareText{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 20px;
		font-size: 16px;
		font-weight: 500;
		color: #FFFFFF;
	}
	.mask-Text{
		width: 100%;
		height: 20px;
		font-size: 12px;
		color: #FFFFFF;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.share-content{
		width: 100%;
		height: 100%;
		padding: 10px 0;
		display: flex;
		flex-direction: row;
	}
	.split-line{
		width: 100%;
		height: 2px;
		background-color: #F5F5F5;
	}
	.content-left{
		width: 50px;
		height: 50px;
		border-radius: 5px 5px 5px 5px;
	}
	.content-avatar{
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 5px 5px 5px 5px;
	}
	.content-right{
		width: 85%;
		height: 100%;
		margin-right: 7px;
		background-color: #FFFFFF;
	}
	.content-name{
		width: 100%;
		height: 25px;
		color: #36648b;
		font-size: 14px;
		font-weight: 600;
	}
	.content-text{
		font-size: 12px;
		width: 100%;
	}
	.grids{
		height: 100%;
		width: 100%;
		display: grid;
		margin-top: 5px;
		grid-template-columns: 80px 80px 80px; 
		grid-template-rows: 80px 80px 80px;
		grid-gap: 3px;
	}
	.grids-item{
		width: 80px;
		height: 80px;
	}
	.grid-image{
		width: 100%;
		height: 100%;
	}
	.content-footer{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 30px;
		margin-top: 5px;
	}
	.footer-time{
		color: #757575;
		font-size: 10px;
	}
	.comment-time{
		width: 100%;
		height: 20px;
		display: flex;
		justify-content: flex-end;
		color: #757575;
		font-size: 10px;
	}
	.footer-operation{
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		width: 120px;
		height: 30px;
	}
	
	.operation-child{
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	.operation-text{
		font-size: 14px;
	}
</style>
