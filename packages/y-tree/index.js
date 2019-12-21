// 导入组件，组件必须声明 name
import yTree from './src/index.vue'
// 为组件提供 install 安装方法，供按需引入
yTree.install = function (Vue) {
 Vue.component(yTree.name, yTree)
}
// 默认导出组件
export default yTree
