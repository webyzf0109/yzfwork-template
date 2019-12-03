<!-- page -->
<template>
  <div class="page">
    <h1>分页</h1>
    <ul class="ul-info">
      <li>基于电商平台的分页组件做统一</li>
    </ul>
    <section>
      <h1 style="margin-bottom:20px;">示例</h1>
      <y-page
        :rows="10"
        :page="1"
        :total="100"
        :width="900"
        direction="right"
        @pageChange="pageChange"
      ></y-page>
      <pre v-highlightA>
      <code>
        {{defaultCode}}
      </code>
    </pre>
    </section>

    <y-table :tableData="demo_tableData" :tableModel="demo_tableModel"></y-table>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    //这里存放数据
    return {
      defaultCode: `<y-page :rows="10" :page="1" :total="100" :width="900" :direction="right" @pageChange="pageChange"></y-page>`,
      demo_tableData: [
        {
          name: "page",
          description: "当前页",
          type: "Number",
          value: "-",
          defaultValue: "-",
          isSure: "true"
        },
        {
          name: "rows",
          description: "一页显示多少条",
          type: "Number",
          value: "-",
          defaultValue: "-",
          isSure: "true"
        },
        {
          name: "total",
          description: "数据总数",
          type: "Number",
          value: "-",
          defaultValue: "-",
          isSure: "true"
        },
        {
          name: "width",
          description: "分页宽度",
          type: "Number",
          value: "-",
          defaultValue: "22",
          isSure: "false"
        },
        {
          name: "pageChange",
          description: "当前页码变化的回调",
          type: "Number",
          value: "返回当前页码",
          defaultValue: "",
          isSure: "true"
        },
        {
          name: "direction",
          description: "一级标题/底部选中颜色",
          type: "String",
          value: "left/center/right",
          defaultValue: "right",
          isSure: "false"
        }
      ],
      demo_tableModel: [
        {
          label: "参数",
          prop: "name",
          minWidth: 100,
          align: "left"
        },
        {
          label: "说明",
          prop: "description",
          minWidth: 150,
          align: "left"
        },
        {
          label: "类型",
          prop: "type",
          minWidth: 150,
          align: "left"
        },
        {
          label: "可选值",
          prop: "value",
          minWidth: 200,
          align: "left"
        },
        {
          label: "默认值",
          prop: "defaultValue",
          minWidth: 100,
          align: "left"
        },
        {
          label: "是否必填",
          prop: "isSure",
          minWidth: 60,
          align: "left"
        }
      ]
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    pageChange(val) {
      console.log(val);
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