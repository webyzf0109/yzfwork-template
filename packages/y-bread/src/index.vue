<!-- yBread -->
<template>
  <div class="y-bread">
    <div
      class="nav"
      :style="{'font-size':fontSize+'px',width:realyWidth,'border-bottom':'2px solid '+borderColor}"
    >
      <section
        ref="one"
        :class="twoLevelTitle?'active':''"
        :style="{color:twoLevelTitle?borderColor:''}"
        @click="jump"
      >{{title}}</section>
      <section ref="two" v-if="twoLevelTitle">&nbsp;>&nbsp;</section>
      <section
        ref="three"
        v-if="twoLevelTitle"
        :style="{'font-size':twoFontSize+'px'}"
      >{{twoLevelTitle}}</section>
    </div>
  </div>
</template>

<script>
export default {
  name: "y-bread",
  components: {},
  props: {
    fontSize: {
      type: [Number],
      default() {
        return 22;
      }
    },
    twoFontSize: {
      type: [Number],
      default() {
        return 16;
      }
    },
    title: {
      type: [String]
    },
    twoLevelTitle: {
      type: [String],
      default() {
        return "";
      }
    },
    borderColor: {
      type: [String],
      default() {
        return "#409eff";
      }
    },
    url: {
      type: [String]
    }
  },
  data() {
    //这里存放数据
    return {
      realyWidth: ""
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    jump() {
      if (!this.url) {
        return;
      }
      this.$router.push(this.url);
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.$nextTick(() => {
      this.realyWidth = this.twoLevelTitle
        ? this.$refs.one.offsetWidth +
          this.$refs.two.offsetWidth +
          this.$refs.three.offsetWidth +
          65 +
          "px"
        : this.$refs.one.offsetWidth + 65 + "px";
    });
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
.y-bread {
  width: 100%;
  height: 40px;
  border-bottom: 2px solid #d9d9d9;
  .nav {
    width: auto;
    height: 100%;
    display: flex;
    line-height: 30px;
    section:nth-child(2) {
      line-height: 30px;
    }
    .active {
      cursor: pointer;
    }
  }
}
</style>