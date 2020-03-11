<!-- yVueEditor -->
<template>
  <div class="y-VueEditor" :style="{width:width+'px',height:(height+40)+'px'}">
    <vue-html5-editor
      :content="content"
      :height="height"
      :z-index="zIndex"
      :auto-height="autoHeight"
      @change="updateData"
    ></vue-html5-editor>
  </div>
</template>

<script>
/**vueEditor */
// 引用编辑器
// import Vue from "vue";
// import VueHtml5Editor from "vue-html5-editor";
export default {
  components: {},
  name: "y-vueEditor",
  props: {
    content: {
      type: String,
      default() {
        return "imgPath";
      }
    },
    width: {
      type: Number,
      default() {
        return "100%";
      }
    },
    height: {
      type: Number,
      default() {
        return "100%";
      }
    },
    zIndex: {
      type: Number,
      default() {
        return 100;
      }
    },
    autoHeight: {
      type: Boolean,
      default() {
        return true;
      }
    },
  },
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    updateData(e = "") {
      let c1 = e.replace(/<img width="100%"/g, "<img");
      let c2 = c1.replace(/<img/g, '<img width="100%"');
      let str = c2.replace(/crossorigin="anonymous"/g, "");
      this.$emit("updateData", str);
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    document.querySelector('.y-VueEditor .toolbar').style['z-index']=this.zIndex;
  },
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