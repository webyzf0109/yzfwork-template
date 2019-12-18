<!-- tree -->
<template>
  <div class="tree">
    <h1>权限树</h1>
    <ul class="ul-info">
      <li>基于所有的权限树做个统一,只需传入原始数据和初始选中数据,对里面的逻辑做了封装,不用每次再写</li>
    </ul>
    <section>
      <h1 style="margin-bottom:20px;">示例</h1>
      <y-tree :data="data" :defaultCheckedData="defaultCheckedData" @checkedChange="checkedChange"></y-tree>
      <pre v-highlightA>
      <code>
        {{defaultCode}}
      </code>
    </pre>
    </section>

    <y-table :tableData="tableData" :tableModel="tableModel" :border="false"></y-table>
  </div>
</template>

<script>
import demoCode from "./demoCode";
export default {
  components: {},
  data() {
    //这里存放数据
    return {
      defaultCode: demoCode.defaultCode(),
      tableData: demoCode.tableData(),
      tableModel: demoCode.tableModel(),
      data: [
        {
          id: 1,
          name: "数据",
          list: [
            {
              id: 2,
              name: "店铺总览"
            },
            {
              id: 3,
              name: "数据统计"
            },
            {
              id: 4,
              name: "财务管理"
            }
          ]
        },
        {
          id: 5,
          name: "账户",
          list: [
            {
              id: 6,
              name: "修改密码"
            },
            {
              id: 7,
              name: "员工管理"
            }
          ]
        }
      ],
      defaultCheckedData: [1, 2, 3, 5, 6, 7]
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    //节点发生变化
    checkedChange(val) {
      // console.log(val);
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {

  },
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