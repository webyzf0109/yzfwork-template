<template>
  <div class="table-box">
    <h1>上传图片</h1>
    <ul class="ul-info">
      <li>通过声明附件上传地址跟上传配置信息迅速构建出上传组件</li>
      <li>暴露出图片宽高以及尺寸宽高供不同地方使用</li>
      <li>有单传跟多传配置，还有最大上传数量限制</li>
      <li>注意：图片大小不得超过2M,格式为  gif | png | jpg | jpeg | webp</li>
    </ul>
    <h3>示例代码</h3>
    <pre v-highlightA>
    <code>{{code}}</code>
    <h3>表格属性</h3>
    <y-table :tableData="tableData" :tableModel="tableModel" :border="false">
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
    };
  }
};
</script>
<style lang="less">
.table-box {
  width: calc(100%-60px);
}
</style>