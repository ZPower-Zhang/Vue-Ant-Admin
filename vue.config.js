// vue.config.js
module.exports = {
  // 基本路径
  publicPath: './',

  // 输出文件目录
  outputDir: 'docs',

  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,

  // use the full build with in-browser compiler?
  // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
  // compiler: false,
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: true,

  transpileDependencies: [],

  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {},
    // 启用 CSS modules for all css / pre-processor files.
    modules: false,
  // loaderOptions: {
  //   scss: {
  //     modifyVars: {
  //       'primary-color': '#1DA57A',
  //       'link-color': '#1DA57A',
  //       'border-radius-base': '2px',
  //     },
  //     javascriptEnabled: true
  //   }
  // }
  },

  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: require('os').cpus().length > 1,

  // 是否启用dll
  // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode
  // dll: false,
  // PWA 插件相关配置
  // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {},

  // webpack-dev-server 相关配置
  devServer: {
    open: process.platform === 'darwin',
    // open: true,
    host: '0.0.0.0',
    port: 9527,
    https: false,
    hotOnly: false,
    proxy: null, // 设置代理
    before: app => {
    }
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: []
    }
  },

  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    // 清除已有的所有 loader。
    // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
    svgRule.uses.clear()

    // 添加要替换的 loader
    svgRule
      .include
      // .add(resolve('src/components/SvgIcon')) // 处理svg目录
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
  }

// chainWebpack: config => {
//   config.module.rules.delete('svg'); // 重点:删除默认配置中处理svg,
//   // const svgRule = config.module.rule('svg')
//   // svgRule.uses.clear()
//   config.module
//     .rule('svg-sprite-loader')
//     .test(/\.svg$/)
//     .include
//     .add(resolve('src/icons')) // 处理svg目录
//     .end()
//     .use('svg-sprite-loader')
//     .loader('svg-sprite-loader')
//     .options({
//       symbolId: 'icon-[name]'
//     })
// }
}
