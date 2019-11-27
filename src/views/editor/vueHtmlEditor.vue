<!-- vue-htmleditor -->
<template>
  <div class="vue-htmleditor">
    <h1>vue-html5editor</h1>
    <ul class="ul-info">
      <li>这里封装 直接调用即可,只需传相关配置项</li>
    </ul>
    <h1>效果展示</h1>
    <div style="margin-top:20px;">
      <y-vueEditor
        :content="content"
        :uploadUrl="uploadUrl"
        :width="500"
        :height="300"
        :token="token"
        @updateData="updateData"
      ></y-vueEditor>
    </div>
    <pre v-highlightA>
      <code>
          {{code}}
      </code>
    </pre>
    <y-table :tableData="demo_tableData" :tableModel="demo_tableModel"></y-table>
  </div>
</template>

<script>
import demoCode from './demo';
export default {
  components: {},
  data() {
    //这里存放数据
    return {
      uploadUrl: process.env.VUE_APP_manage_uploadUrl,
      token:"Bearer " + localStorage.getItem("token"),
      content: "这是vueEditor组件",
      code: demoCode.code,
      demo_tableData: demoCode.demo_tableData,
      demo_tableModel: demoCode.demo_tableModel
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    updateData(str) {
      console.log(str);
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
</style>