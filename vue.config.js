const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      '': {
        target: 'http://127.0.0.1:7070'
      }
    }
  }
})
