const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
}),

module.export = {
  devServer: {
    port: 8085 , // 设置开发服务器的端口为8085
  },
  // 关闭eslint
  lintOnSave: false,
}

