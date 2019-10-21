// 导入组件，组件必须声明 name
import yUpload from './src/index.vue'
// 为组件提供 install 安装方法，供按需引入
yUpload.install = function (Vue) {
 Vue.component(yUpload.name, yUpload)
}
// 默认导出组件
export default yUpload
