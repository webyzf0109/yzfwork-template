<template>
  <div class="table-box">
    <h1>form表单</h1>
    <ul class="ul-info">
      <li>通过声明formData(数据)和formModel(表单模型),迅速构建出基于 "el-form" 的表单</li>
      <li>可以使用 slot="iform-btns" 自定义按钮</li>
    </ul>
    <!-- /**示例一 */ -->
    <h3>示例:</h3>
    <y-form
      :labelWidth="130"
      ref="iforms"
      :formData="formData"
      :formModel="formModel"
      @uploadCallback="uploadCallback"
    >
      <div slot="iform-btns">
        <el-button type="primary" size="small" @click="submit('iforms')">提交</el-button>
        <el-button type="default" size="small" @click="reset('iforms')">重置</el-button>
      </div>
    </y-form>
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
import formData from "./form";
export default {
  data() {
    return {
      code: demoCode.demoDefault(),
      formModel: formData.formModel,
      formData: {},
      tableData: demoCode.demoTableData,
      tableModel: demoCode.demoTableModel,
      tableData1: demoCode.demoTableData1,
      tableData2: demoCode.demoTableData2,
      tableModel2: demoCode.demoTableModel2
    };
  },
  methods: {
    /**上传图片回调 */
    uploadCallback() {},
    /**提交 */
    submit(name) {
      let result = this.$refs[name].getFormData();
      console.log(result);
    },
    /**重置 */
    reset(name) {
      this.$refs[name].resetForm();
    }
  }
};
</script>
<style lang="less">
.table-box {
  width: calc(100%-60px);
}
</style>