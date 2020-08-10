<template name="navi-Bar">
	<view class="content">
		<view class="naviBarStyle-type" 
		 ><!-- 状态栏占位 --></view>
	<view class="naviBar-style">
		<span class="title-style">{{title}}</span>
	</view>
	</view>
</template>

<script>
	export default{
		name:'navi-Bar',
		props:{
			title:{
				type:String,
				value:''
			},
			
		},
		
		
		
	}
</script>

<style>
	
	.naviBarStyle-type{
		width:100%;
		height: var(--status-bar-height);
	}
	.naviBar-style{
		width: 100%;
		height: 48px;
		background-color: #4CD964;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.title-style{
		color: #333333;
		font-size: 18px;
		font-weight: 500;
	}
</style>
