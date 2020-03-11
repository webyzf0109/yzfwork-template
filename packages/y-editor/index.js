// 导入组件，组件必须声明 name
import yEditor from './src/index.vue'
// 为组件提供 install 安装方法，供按需引入
yEditor.install = function (Vue) {
 Vue.component(yEditor.name, yEditor)
}
// 默认导出组件
export default yEditor
