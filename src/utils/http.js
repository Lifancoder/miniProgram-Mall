module.exports=(params)=>{
	let url='http://172.20.10.2:9090'+params.url
	let method =params.method
	let header=params.header ||{}
	let data =params.data ||{}
	
	// 请求方式GET POST
	if(method){
		method =method.toUpperCase()//小写转大写
		if(method == "POST"){
			header={"content-type":"application/json"}
		}
	}
	//发起请求 加载动画
	if(!params.hideLoading){
		uni.showLoading({
			title:"加载中..."
		})
	}
	uni.request({
		url:url,
		method:method||'GET',
		header:header,
		data:data,
		dataType:"json",
		sslVerify:false ,//是否验证ssl证书
		success: (res) => {
			if(res.statusCode&&res.statusCode!=200){
				//api错误
				uni.showModal({
					content:res.msg
				})
				return;
			}
			typeof params.success =="function"&&params.success(res.data)
		},
		fail: (err) => {
			uni.showModal({
				content:err.msg
			})
			typeof params.fail == "function"&&params.fail(err.data)
		},
		complete: (e) => {
			console.log('请求完成')
			uni.hideLoading()
			typeof params.complete == "function"&&params.complete(e.data)
			console.log('请求完成返回数据：'+JSON.stringify( e.data))
		}
	})
}