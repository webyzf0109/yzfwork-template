<!-- breadCrumb -->
<template>
  <div class="breadCrumb">
    <h1>面包屑导航</h1>
    <ul class="ul-info">
      <li>基于电商平台的面包屑导航做统一</li>
    </ul>

    <section>
      <h1 style="margin-bottom:20px;">示例</h1>
      <y-bread title="商品管理" twoLevelTitle="添加商品" url="/button"></y-bread>
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
      defaultCode: `<y-bread title="商品管理" twoLevelTitle="添加商品" url="/button"></y-bread>`,
      demo_tableData: [
          {
              name:'title',
              description:'一级标题',
              type:'String',
              value:'-',
              defaultValue:'-',
              isSure:'true'
          },
          {
              name:'twoLevelTitle',
              description:'二级标题',
              type:'String',
              value:'-',
              defaultValue:'-',
              isSure:'false'
          },
          {
              name:'url',
              description:'点击一级标题要跳转的链接',
              type:'String',
              value:'-',
              defaultValue:'-',
              isSure:'true'
          },
          {
              name:'fontSize',
              description:'一级标题字体大小',
              type:'Number',
              value:'-',
              defaultValue:'22',
              isSure:'true'
          },
          {
              name:'twoFontSize',
              description:'二级标题字体大小',
              type:'Number',
              value:'-',
              defaultValue:'16',
              isSure:'false'
          },
          {
              name:'borderColor',
              description:'一级标题/底部选中颜色',
              type:'String',
              value:'-',
              defaultValue:'#409eff 电商面包屑默认色',
              isSure:'false'
          },
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
  methods: {},
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