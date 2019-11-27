<!-- 使用button组件 -->
<template>
  <div class="button-box">
    <h1>按钮</h1>
    <ul class="ul-info">
      <li>原来element支持的功能都有支持,主要功能是针对公司不同项目的所有按钮做一个统一</li>
      <li>color 跟 backgroundColor 两个属性可以自定义按钮背景颜色以及按钮字体颜色</li>
      <li>内容默认solt(直接写在标签对里就可以)</li>
    </ul>
    <!-- /**默认按钮 */ -->
    <section>
      <h3>默认按钮</h3>
      <ul class="ul-info">
        <li>什么都不用传</li>
      </ul>
      <y-button>默认按钮</y-button>
      <pre v-highlightA>
      <code>
        {{defaultCode}}
      </code>
    </pre>
    </section>

    <section>
      <h3>常用按钮</h3>
      <ul class="ul-info">
        <li>blue/orange/red/cheng/green 带有hover效果;</li>
        <li>支持自定义颜色,自定义颜色没有hover效果</li>
      </ul>
      <y-button backgroundColor="blue">蓝色</y-button>
      <y-button backgroundColor="orange">橘色</y-button>
      <y-button backgroundColor="red">红色</y-button>
      <y-button backgroundColor="cheng">橙色</y-button>
      <y-button backgroundColor="green">绿色</y-button>
      <y-button backgroundColor="#18e1ab">青色</y-button>
      <pre v-highlightA>
      <code>
        {{backgroundColorCode}}
      </code>
    </pre>
    </section>

    <section>
      <h3>文字颜色自定义按钮</h3>
      <ul class="ul-info">
        <li>支持自定义颜色</li>
      </ul>
      <y-button>白色</y-button>
      <y-button color="blue">蓝色</y-button>
      <y-button color="orange">橘色</y-button>
      <y-button color="red">红色</y-button>
      <y-button color="green">绿色</y-button>
      <y-button color="#18e1ab">青色</y-button>
      <pre v-highlightA>
      <code>
        {{fontColor}}
      </code>
    </pre>
    </section>

    <section>
      <h3>常用朴素按钮</h3>
      <ul class="ul-info"></ul>
      <y-button type="primary" plain>主要按钮</y-button>
      <y-button type="success" plain>成功按钮</y-button>
      <y-button type="info" plain>信息按钮</y-button>
      <y-button type="warning" plain>危险按钮</y-button>
      <pre v-highlightA>
      <code>
        {{plainColor}}
      </code>
    </pre>
    </section>
  </div>
</template>

<script>
import demoCode from "./demo";
export default {
  components: {},
  data() {
    //这里存放数据
    return {
      defaultCode: demoCode.defaultCode,
      backgroundColorCode: demoCode.backgroundColorCode,
      fontColor: demoCode.fontColor,
      plainColor:demoCode.plainColor
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
.button-box {
}
</style>