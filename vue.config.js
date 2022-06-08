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
  },
  configureWebpack: {
    module: {
      rules: [
        // 配置读取 *.md 文件的规则
        {
          test: /\.md$/,
          use: [{ loader: 'html-loader' }, { loader: 'markdown-loader', options: {} }]
        }
      ]
    }
  }
})
