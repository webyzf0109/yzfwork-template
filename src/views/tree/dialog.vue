<!-- treeDialog -->
<template>
  <div class="treeDialog">
    <el-dialog
      title="弹窗显示"
      custom-class="treeDialog"
      :visible.sync="dialogVisible"
      :close-on-click-modal="false"
      width="480px"
      :before-close="cancle"
    >
      <y-tree :data="data" :defaultCheckedData="defaultCheckedData" @checkedChange="checkedChange"></y-tree>
    </el-dialog>
  </div>
</template>

<script>
import demoCode from "./demoCode";
export default {
  components: {},
  props: ["userId"],
  data() {
    //这里存放数据
    return {
      dialogVisible: true,
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
  watch: {},

  //方法集合
  methods: {
    cancle() {
      this.$emit("dialogSay");
    },
    //节点发生变化
    checkedChange(val) {
      // console.log(val);
    }
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
<style lang='less'>
//@import url(); 引入公共css类
.treeDialog {
  .el-dialog__body {
    padding-bottom: 0;
  }
}
</style>