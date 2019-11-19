<template>
  <div class="table-box">
    <h1>form表单</h1>
    <ul class="ul-info">
      <li>通过声明formData(数据)和formModel(表单模型),迅速构建出基于 "el-form" 的表单</li>
      <li>可以使用 slot="iform-btns" 自定义按钮</li>
    </ul>
    <h3>示例代码</h3>
    <pre v-highlightA>
    <code>{{code}}</code>
    <h3>表格属性</h3>
    <y-table :tableData="tableData" :tableModel="tableModel" :border="false">
    </y-table>
    <h3>formModel属性</h3>
    <y-table :tableData="tableData1" :tableModel="tableModel" :border="false">
    </y-table>
    <h3>formModel  elemType 种类</h3>
    <y-table :tableData="tableData2" :tableModel="tableModel2" :border="false">
    </y-table>
</pre>
  </div>
</template>
<script>
import demoCode from "./demo";
export default {
  data() {
    return {
      code: demoCode.demoDefault(),
      tableData: demoCode.demoTableData,
      tableModel: demoCode.demoTableModel,
      tableData1: demoCode.demoTableData1,
      tableData2: demoCode.demoTableData2,
      tableModel2: demoCode.demoTableModel2
    };
  }
};
</script>
<style lang="less">
.table-box {
  width: calc(100%-60px);
}
</style>