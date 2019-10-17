// 导入组件，组件必须声明 name
import yTable from './src/index.vue'
// 为组件提供 install 安装方法，供按需引入
yTable.install = function (Vue) {
 Vue.component(yTable.name, yTable)
}
// 默认导出组件
export default yTable
