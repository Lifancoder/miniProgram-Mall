<script>
	export default {
		onLaunch: function() {
			/* uni.removeStorageSync('phone')
			uni.removeStorageSync('pwd')
			console.log('App Launch') */
			//验证是否登录
			global.isLogin=function(){
				try{
					var phone=uni.getStorageSync('phone')
					var pwd=uni.getStorageSync('pwd')
					
				}catch(e){
					
				}
				
				if(phone == ''||pwd == ''){
					return false
				}else{
					return [phone,pwd]
				}
			}
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import "./static/common/iconfont.css";
	
	
</style>
