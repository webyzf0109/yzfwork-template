const demoCode = {
    buttonCode: `background:@button-red;
      background:@button-red-hover;
      background:@button-blue;
      background:@button-blue-hover;
      background:@button-orange;
      background:@button-orange-hover;`,
    fontCode:`color:@font-blue;
      color:@font-red;
      color:@font-gray-night;
      color:@font-gray-three;
      color:@font-white;
      color:@font-black;`,
    configCode:`/**下载插件**/
      cnpm install --save vue-cli-plugin-style-resources-loader style-resources-loader 
      /**在vue.config.js配置全局的less */
      pluginOptions: {
        "style-resources-loader": {
          preProcessor: "less",
          patterns: [
            //这个是加上自己的路径，该路径可自由配只要路径对即可
            //注意：试过不能使用别名路径
            path.resolve(__dirname, "./src/assets/common/color.less")
          ]
        }
      },`
}
export default demoCode;