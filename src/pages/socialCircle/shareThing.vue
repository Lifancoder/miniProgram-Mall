<template>
	<view class="content">
		<view class="content-text">
			<input type="text" maxlength="300" placeholder="这一刻的想法..." v-model="shareText" />
		</view>
		<view class="upload-view">
			<view class="littleImg" v-show="isShow" v-for="(img,index) in images"  :key="img">
				<text class="iconfont iconguanbi" @click="deleteImg(index)"></text>
				<image class="tittle-image" @click="preview(index)" :src="img.path"></image>
			</view>
			<view class="upload-img" @click="addImg">
				<view class="iconfont iconjiahao1"></view>
			</view>
			
		</view>
		<view class="bottom-send" @click="send">确定发布</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				shareText:'',
				images:[],
				isShow:false
			}
		},
		methods:{
			// 添加图片
			addImg(){
				uni.chooseImage({
					
					success: (res) => {
						console.log('赋值前的：'+JSON.stringify(res))
						for(let i=0;i<res.tempFiles.length;i++){
							this.images.push(res.tempFiles[i])
						}
						if(this.images.length>0){
							this.isShow=true
						}
						console.log('赋值后的：'+JSON.stringify(this.images))
					},
					
				})
			},
			// 查看图片
			preview(item){
				let a=[]
				let imgurl=this.images
				imgurl.forEach(function(val,index){
					 a.push(imgurl[index].path) 
				})
				uni.previewImage({
					current:item,
					urls:a,
					success: (res) => {
						console.log('预览回调：'+res)
					},
					complete: (e) => {
						console.log('预览erro回调：'+JSON.stringify(e))
					}
				})
			},
			// 删除图片
			deleteImg(index){
				this.images.splice(index,1)
				return this.images
			},
			// 发布
			send(){
				if(this.shareText==''){
					uni.showModal({
						content:'内容不能为空',
						showCancel:false,
						success: (e) => {
							console.log(e)
						}
					})
				}else{
					uni.showModal({
						content:'无接口模式，测试！^_^!!',
						showCancel:false,
						success: (e) => {
							console.log(e)
						}
					})
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
		overflow: scroll;
	}
	.content-text{
		width: 95%;
		min-height: 120px;
		margin-top: 30px;
		font-size: 14px;
	}
	.upload-view{
		width: 95%;
		min-height: 300px;
		display: flex;
		flex-wrap: wrap;
		align-content: flex-start;
	}
	.iconfont.iconjiahao1{
		font-size: 40px;
		color: #D9D9D9;
	}
	.iconfont.iconguanbi{
		background: #DD524D;
		border-radius: 4px;
		font-size: 7px;
		color: #FFFFFF;
		position: absolute;
		top: 0px;
		right: 2px;
		width: 15px;
		height: 15px;
		align-items: center;
		display: flex;
		justify-content: center;

	}
	.upload-img{
		width: 100px;
		height: 100px;
		border: 1px solid #d9d9d9;
		position: relative;
		top: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.littleImg{
		width: 110px;
		height: 110px;
		position: relative;
		top: 10px;
		margin-right: 10px;
		margin-bottom: 10px;
	}
	.tittle-image{
		width: 100%;
		height: 100%;
	}
	.bottom-send{
		position: absolute;
		bottom: 0;
		right: 0;
		width: 100%;
		height: 50px;
		text-align: center;
		line-height: 50px;
		background: #FA436A;
		color: #FFFFFF;
	}
</style>
