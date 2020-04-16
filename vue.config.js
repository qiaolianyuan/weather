const merge = require("webpack-merge");
const tsImportPluginFactory = require("ts-import-plugin");

module.exports = {
    devServer: {
        open: true, // auto open brower 项目启动后自动打开浏览器...
        disableHostCheck: false,
        port: 8099, // 修改端口号
        https: false,
        hotOnly: false, // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
        proxy: {     // string | Object 解决跨域问题
            '/api': {
                target: 'http://v.juhe.cn/weather', // 对应自己的 跨域地址 即请求的后端地址
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    chainWebpack: config => {
        config.module
          .rule("ts")
          .use("ts-loader")
          .tap(options => {
            options = merge(options, {
              transpileOnly: true,
              getCustomTransformers: () => ({
                before: [
                  tsImportPluginFactory({
                    libraryName: "vant",
                    libraryDirectory: "es",
                    style: true
                  })
                ]
              }),
              compilerOptions: {
                module: "es2015"
              }
            });
            return options;
          });
      }
};