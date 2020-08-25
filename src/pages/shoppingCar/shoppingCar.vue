<template>
	<view class="nologin" :style="{height:phoneHeight+'px'}" v-if="islogined==false">
		<view class="nologin-content">
			<view class="nologin-img">
			<image class="car-img" src="../../static/images/nologin.jpg"></image>
		</view>
		<view class="nologin-text">
			<text class="text-left">空空如也</text>
			<navigator class="text-right" url="../mine/loginedMine" 
			 open-type="switchTab">去登陆></navigator>
		</view>
		</view>
	</view>
	<view class="content" v-else>
		<view class="Operation">
			<view class="operation-child">
				<view class="child-btn" @click="clearCar">
					<text class="iconfont iconchenggong"></text>
					<view class="btn-icon"><text class="icon-text">清空</text></view>
				</view>
			</view>
			<view class="Operation-btn">
				<view class="btn-add">￥{{settlement}}</view>
				<button class="btn-buy"><text class="btn-text">去结算</text></button>
			</view>
		</view>
		
		<!-- 购物车货物列表 -->
		<view class="page-title">购物车</view>
		<view class="car-list" v-for="(list,index) in lists" :key="index">
			<view class="list-item">
				<view class="item-left">
					<view class="left-top">
						<view @click="selectBefor(index)" v-show="list.beforSelect" class="iconfont iconchenggong" style="font-size: 20px;height: 20px;color:#C0C4CC ;"></view>
						<view @click="selected(index)" v-show="list.select" class="iconfont iconchenggong" style="font-size: 20px;height: 20px;"></view>
					</view>
					<view class="item-img">
						<image class="img" :src="list.image"></image>
					</view>
				</view>
				<view class="item-right">
					<view class="right-deatil">
						<view class="right-title">{{list.name}}</view>
						<view class="right-style">款式：{{list.name}}</view>
						<view class="right-current">￥{{list.current}}</view>
						<view class="right-num">
							<view class="num-delete" @click="deleteNum(list.num,index,list.beforSelect)">
								<view class="iconfont iconjianhao"></view>
							</view>
							<view class="number">{{list.num}}</view>
							<view class="num-add" @click="addNum(list.num,index,list.beforSelect)">
								<view class="iconfont iconjiahao"></view>
							</view>
						</view>
					</view>
					<view class="right-delete">
						<view class="iconfont iconguanbi" @click="deleteItem(index)"></view>
					</view>
				</view>
			</view>
		</view>
		
		<!-- 提示框 -->
		<view class="mask-alert" v-show="isAlert">
			<view class="mask-button">
				<view class="button-header">清空购物车？</view>
				<view class="button-footer" >
					<view class="footer-cancel" @click="closeAlert">取消</view>
					<view class="footer-true" @click="clearCarFinish">确定</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				phoneHeight:0,
				islogined:false,
				price:'19.90',
				settlement:0,
				isAlert:false,
				lists:[{
					beforSelect:false,
					select:true,
					name:'舒克流光白活炭早晚牙膏65g+65g',
					style:'舒克流光白活炭早晚牙膏65g+65g',
					current:19.50,
					num:1,
					image:'http://ww1.sinaimg.cn/large/006AcIg8gy1ghx1ubzyp8j30m80m8n0h.jpg'
				},{
					beforSelect:false,
					select:true,
					name:'舒克流光白活炭早晚牙膏65g+65g',
					style:'舒克流光白活炭早晚牙膏65g+65g',
					current:19.50,
					num:1,
					image:'http://ww1.sinaimg.cn/large/006AcIg8gy1ghx1ubzyp8j30m80m8n0h.jpg'
				}]
			}
		},
		methods:{
			// 减少商品数量
			deleteNum(e,index,select){
				if(e>1){
					for(let i=0;i<this.lists.length;i++){
						if(i==index){
							this.lists[i].num=e-1
						}
					}
				}else{
					return false
				}
				this.changeSettlement()
			},
			// 增加商品数量
			addNum(e,index,select){
				if(e>=1){
					for(let i=0;i<this.lists.length;i++){
							if(i==index){
								this.lists[i].num=e+1
							}
					}
				}
				this.changeSettlement()
			},
			// 总价增减
			changeSettlement(){
					this.settlement=0
					let a=[]
					let b=0
					let c=0
					for(let i=0;i<this.lists.length;i++){
						if(this.lists[i].beforSelect==true){
							a.push(this.lists[i])
						}
						c +=this.lists[i].num*this.lists[i].current
				}
				for(let j=0;j<a.length;j++){
					b +=a[j].num*a[j].current
				}
				this.settlement=c-b
			},
			
			//勾选商品
			selectBefor(index){
				for (let i=0;i<this.lists.length;i++) {
					if(i==index){
					this.lists[i].select=true
				this.lists[i].beforSelect=false	
					}
				}
				this.changeSettlement()
			},
			selected(index){
				let a=this.settlement
				let b=0
				for (let i=0;i<this.lists.length;i++) {
					if(i==index){
					this.lists[i].beforSelect=true
					this.lists[i].select=false
					b=a-(this.lists[i].num*this.lists[i].current)
					}
				}
				this.settlement=b
			},
			//删除商品
			deleteItem(index){
				this.lists.splice(index,1)
				this.changeSettlement()
			},
			// 清空购物车
			clearCar(){
				this.isAlert=true
			},
			closeAlert(){
				this.isAlert=false
			},
			clearCarFinish(){
				this.lists=[]
				this.changeSettlement()
				this.isAlert=false
			},
			
			//未登录状态
			isLogintype(){
			var res=global.isLogin()
			if(!res){
				this.islogined=false
			}else{
				this.islogined=true
			}	
			}
		},
		mounted() {
			this.isLogintype()
			this.changeSettlement()
			let a=0
			uni.getSystemInfo({
				success(e) {
					a=e.windowHeight
				}
			})
			this.phoneHeight=a
		}
	}
</script>

<style>
	.nologin{
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		/* background-color: #F5F5F5; */
		z-index: 1;
	}
	.nologin-content{
		width: fit-content;
		height: fit-content;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.nologin-img{
		width: 150px;
		height: 100px;
	}
	.car-img{
		width: 100%;
		height: 100%;
	}
	.nologin-text{
		width: 100%;
		height: 30px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	.text-left{
		font-size: 14px;
		color: #c0c4cc;
		margin-right: 10px;
	}
	.text-right{
		color: #FA436A;
		font-size: 14px;
	}
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
			.child-btn{
				display: flex;
				flex-direction: row;
				width: 100px;
				height: 30px;
			}
			
			.btn-icon{
				position: relative;
				left: -30px;
				top: 0.5px;
				width: 100px;
				height: 31px;
				line-height: 30px;
				border-radius: 30px;
				background: #C0C4CC;
				z-index: 3;
			}
			.icon-text{
				margin-left: 32px;
				color: #FFFFFF;
				font-size: 14px;
				font-weight: 200;
			}
			.iconfont.iconchenggong {
				font-size: 30px;
				color: #FA436A;
				font-style: normal;
				-webkit-font-smoothing: antialiased;
				-moz-osx-font-smoothing: grayscale;
				height: 30px;
				z-index: 4;
			}
			.Operation-btn{
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				width: 50%;
				height: 75%;
			}
			.btn-add{
				display: flex;
				justify-content: center;
				align-items: center;
				width: 50%;
				height: 100%;
				font-size: 14px;
				padding: 0;
			}
			.btn-buy{
				display: flex;
				justify-content: center;
				align-items: center;
				width: 50%;
				height: 35px;
				padding: 0;
				border-radius:40px;
				background:#FA436A;
				box-shadow: 1px 2px 5px rgba(217,60,93,.72);
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
			.car-list{
				display: flex;
				justify-content: center;
				width: 100%;
				height: 120px;
				margin-top: 30px;
			}
			.page-title{
				position: fixed;
				left: 0;
				top: 0;
				width: 100%;
				height: 30px;
				display: flex;
				justify-content: center;
				align-items: center;
				background: #FFFFFF;
				color: #000000;
				font-size: 16px;
				font-weight: 600;
			}
			.list-item{
				display: flex;
				flex-direction: row;
				width: 95%;
				height: 100%;
			}
			.item-left{
				width: 30%;
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
			}
			.left-top{
				width: 100%;
				height: 25px;
				display: flex;
				justify-content: flex-start;
				align-items: center;
			}
			.item-img{
				width: 98px;
				height: 98px;
			}
			.img{
				width: 100%;
				height: 100%;
			}
			.item-right{
				width: 70%;
				height: 100%;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
			}
			.right-deatil{
				display: flex;
				flex-direction: column;
				width: calc(100% - 30px);
				height: 100%;
			}
			.right-delete{
				width: 30px;
				height: 100%;
				margin-left: 5px;
			}
			.right-title{
				width: 100%;
				height: 25px;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				color: #000000;
				font-size: 16px;
			}
			.right-style{
				width: 100%;
				height: 20px;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				color: #606266;
				font-size: 14px;
			}
			.right-current{
				width: 50px;
				height: 20px;
				color: #000000;
				font-size: 16px;
			}
			.right-num{
				display: flex;
				flex-direction: row;
				margin-top: 10px;
				width: 120px;
				height: 35px;
			}
			.num-delete{
				display: flex;
				justify-content: center;
				align-items: center;
				width: 35px;
				height: 35px;
				background-color: #f5f5f5;
			}
			.number{
				display: flex;
				justify-content: center;
				align-items: center;
				width: 50px;
				height: 35px;
				background-color: #f5f5f5;
			}
			.num-add{
				display: flex;
				justify-content: center;
				align-items: center;
				width: 35px;
				height: 35px;
				background-color: #f5f5f5;
			}
			.iconfont.iconjianhao{
				color: #d6d6d6;
			}
			.iconfont.iconjiahao{
				color: #555555
			}
			.iconfont.iconguanbi{
				color: #606266;
				font-size: 14px;
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
</style>
