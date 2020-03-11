<template>
  <div class="table-box">
    <h1>表格</h1>
    <ul class="ul-info">
      <li>通过声明tableData(数据)和tableModel(表头),迅速构建出基于 "el-table" 的表格</li>
      <li>模型的构建支持 render</li>
      <li>对于复杂的横列信息,我们提供了slot属性,可以自定义自己想要的内容（不超过5个）</li>
      <li>html代码量很少,方便阅读,js数据是动态获取,model模型可以提出到js。这样写的好处是 便于后期维护以及样式的统一性、一致性，最主要的还是提升效率</li>
      <li class="active"> 设置默认选中数据：this.$refs.tableBox.toggleSelection(rows);</li>
      <li class="active"> 有全选时,isReserve为true时：清除选中数据  this.$refs.tableBox.clearSelect();</li>
    </ul>
    <h3>示例</h3>
    <y-table
      :tableData="demo_tableData"
      :tableModel="demo_tableModel"
      :defaultSort="{prop: 'create_time', order: 'descending'}"
      @sortChange="sortChange"
    >
      <template slot="operation1" slot-scope="scope">
        <el-tag>{{scope.scope.row.Category.category_name}}</el-tag>
      </template>
      <template slot="operation2" slot-scope="scope">
        <img width="80" :src="scope.scope.row.url" alt />
      </template>
    </y-table>
    <pre v-highlightA>
      <code>{{code}}</code>
    </pre>
    <h3>表格属性</h3>
    <y-table :tableData="tableData" :tableModel="tableModel" :border="false"></y-table>
    <h3>tableModel属性</h3>
    <y-table :tableData="tableData2" :tableModel="tableModel2" :border="false"></y-table>
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
      tableData2: demoCode.demoTableData2,
      tableModel2: demoCode.demoTableModel2,
      demo_tableData: demoCode.demo_tableData,
      demo_tableModel: demoCode.demo_tableModel
    };
  },
  methods:{
    sortChange(val){
      console.log(val,'val')
    }
  }
};
</script>
<style lang="less">
.table-box {
  width: calc(100%-60px);
  h3 {
    margin: 20px 0;
  }
}
</style>