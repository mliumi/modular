const path = require('path')
module.exports={
  pages:{
      index:{
          entry:`src/project/${process.env.VUE_APP_BASE}/main.js`
      },
  },
  //关闭eslint校验
  lintOnSave:false,
  // 配置css
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "./src/styles/main/index.scss";`
      },
    }
  },
  //  修改路径别名
  configureWebpack: (config)=>{
    config.resolve = {
      extensions : ['.js','.json','.vue'],
      alias: {
        '@':path.resolve(__dirname,'./src'),
        '@c':path.resolve(__dirname,'./src/components')
      }
    }
  } 
}