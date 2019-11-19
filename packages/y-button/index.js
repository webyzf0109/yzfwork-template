// 导入组件，组件必须声明 name
import yButton from './src/index.vue'
// 为组件提供 install 安装方法，供按需引入
yButton.install = function (Vue) {
 Vue.component(yButton.name, yButton)
}
// 默认导出组件
export default yButton
