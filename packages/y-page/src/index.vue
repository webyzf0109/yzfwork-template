<!-- page组件 -->
<template>
  <div class="y-page" :style="{width:width?width+'px':'','text-align':direction}">
    <el-pagination
      background
      layout="prev, pager, next,jumper"
      :page-size="rows"
      :current-page="page"
      :total="total"
      @current-change="pageChange"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  name: "y-page",
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  props: {
    total: {
      type: [Number],
      default() {
        return 0;
      }
    },
    page: {
      type: [Number],
      default() {
        return 0;
      }
    },
    rows: {
      type: [Number],
      default() {
        return 0;
      }
    },
    width: {
      type: [Number],
      default() {
        return null;
      }
    },
    direction: {
      type: [String],
      default() {
        return "right";
      }
    }
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    pageChange(val) {
      this.$emit("pageChange", val);
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
.y-page {
  width: 100%;
}
</style>