module.exports = {
    pages:{
        index :{
            entry : 'examples/main.js',
            template : 'public/index.html',
            filename:'index.html' 
        }
    },
    lintOnSave: false,

    css: { extract: false },
   
    publicPath: process.env.NODE_ENV === 'production' ? '/uilib/' : '/',
    
    
    //uilib-cli
  //   chainWebpack: config => {
  //   config.module
  //     .rule('js')
  //     .include
  //       .add('packages')
  //       .end()
  //     .use('babel')
  //       .loader('babel-loader')
  //       .tap(options => {
  //         return options
  //       })
  // }

//   configureWebpack: config => {
//     // if (process.env.NODE_ENV === 'production') {
//     //     // 为生产环境修改配置...
//     //   } else {
//     //     // 为开发环境修改配置...
//     //   }
//   }


}