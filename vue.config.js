module.exports = {
    devServer:{
        port:8081, // 启动端口
        open:true  // 启动后是否自动打开网页
    },
    configureWebpack: {
		devtool: 'source-map'
	}
}

