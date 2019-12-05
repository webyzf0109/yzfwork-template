<!-- button组件 -->
<template>
  <el-button
    :class="backgroundColor?'y-button-'+backgroundColor:'y-button'"
    :style="{'background':backgroundColor,'border-color': backgroundColor,color:color}"
    :type="type"
    :size="size"
    :icon="icon"
    :plain="plain"
    :round="round"
    :circle="circle"
    :loading="loading"
    :disabled="disabled"
    :autofocus="autofocus"
    :native-type="nativeType"
    @click="click"
  >
    <slot></slot>
  </el-button>
</template>

<script>
export default {
  name: "y-button",
  components: {},
  props: {
    size: {
      type: [String],
      default() {
        return "small";
      }
    },
    type: {
      type: [String],
      default() {
        return "primary";
      }
    },
    icon: {
      type: [String],
      default() {
        return "";
      }
    },
    plain: {
      type: [Boolean],
      default() {
        return false;
      }
    },
    round: {
      type: [Boolean],
      default() {
        return false;
      }
    },
    circle: {
      type: [Boolean],
      default() {
        return false;
      }
    },
    loading: {
      type: [Boolean],
      default() {
        return false;
      }
    },
    disabled: {
      type: [Boolean],
      default() {
        return false;
      }
    },
    autofocus: {
      type: [Boolean],
      default() {
        return false;
      }
    },
    nativeType: {
      type: [String],
      default() {
        return "button";
      }
    },
    backgroundColor: {
      type: [String]
    },
    color: {
      type: [String],
      default() {
        return "";
      }
    }
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
    click(val){
      this.$emit('click',val)
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
<style lang='less' >
//@import url(); 引入公共css类
/**消除默认hover */
// .y-button:hover {
//   background: none !important;
//   border-color: none !important;
// }
/**深蓝色 */
.y-button-blue {
  background: @button-blue !important;
  border-color: @button-blue !important;
}
.y-button-blue:focus,
.y-button-blue:hover {
  background: @button-blue-hover !important;
  border-color: @button-blue-hover!important;
}
/**橘色 */
.y-button-orange {
  background: @button-orange !important;
  border-color: @button-orange!important;
}
.y-button-orange:focus,
.y-button-orange:hover {
  background: @button-orange-hover !important;
  border-color: @button-orange-hover !important;
}
/**红色 */
.y-button-red {
  background: @button-red !important;
  border-color: @button-red !important;
}
.y-button-red:focus,
.y-button-red:hover {
  background: @button-red-hover !important;
  border-color: @button-red-hover !important;
}

/**橙色 */
.y-button-cheng {
  background: @button-cheng !important;
  border-color: @button-cheng !important;
}
.y-button-cheng:focus,
.y-button-cheng:hover {
  background: @button-cheng-hover !important;
  border-color: @button-cheng-hover !important;
}
/**绿色 */
.y-button-green {
  background: @button-green !important;
  border-color: @button-green !important;
}
.y-button-green:focus,
.y-button-green:hover {
  background: @button-green-hover !important;
  border-color: @button-green-hover !important;
}
</style>