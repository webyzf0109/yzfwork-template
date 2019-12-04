<!-- 全局color -->
<template>
  <div class="color-box">
    <h1>全局color</h1>
    <ul class="ul-info">
      <li>全局定义颜色,为项目颜色一致、统一提供方便,下面展示的是项目常用的两类颜色</li>
    </ul>
    <h3>全局配置</h3>
    <ul class="ul-info">
      <li>下载两个插件 vue-cli-plugin-style-resources-loader 和 style-resources-loader</li>
      <li>在vue.config.js文件全局配置</li>
      <li>
        配置完成后下载已有的color.less文件并放置到相对应的文件目录
        <y-button>
          <a href="https://qiniu.yyyzf.xyz/common.0.1.28.less" download="">下载链接</a>
        </y-button>
      </li>
    </ul>
    <pre v-highlightA>
      <code>
        {{configCode}}
      </code>
    </pre>

    <!-- /**按钮颜色展示 */ -->
    <section>
      <h3>按钮颜色</h3>
      <ul class="ul-info">
        <li>变量名即为颜色</li>
      </ul>
      <div class="button button-red"></div>
      <div class="button button-red-hover"></div>
      <div class="button button-blue"></div>
      <div class="button button-blue-hover"></div>
      <div class="button button-orange"></div>
      <div class="button button-orange-hover"></div>
      <div class="button button-cheng"></div>
      <div class="button button-cheng-hover"></div>
      <div class="button button-green"></div>
      <div class="button button-green-hover"></div>
      <pre v-highlightA>
      <code>
        {{buttonCode}}
      </code>
    </pre>
    </section>
    <!-- /** 文字颜色 */ -->
    <section>
      <h3>文字颜色</h3>
      <ul class="ul-info">
        <li>变量名即为颜色</li>
      </ul>
      <div class="font font-blue">蓝色</div>
      <div class="font font-red">红色</div>
      <div class="font font-gray-night">9号灰</div>
      <div class="font font-gray-three">3号灰</div>
      <div class="font font-white">白色</div>
      <div class="font font-black">黑色</div>
      <div class="font font-cheng">橙色</div>
      <div class="font font-green">绿色</div>
      <pre v-highlightA>
      <code>
        {{fontCode}}
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
      buttonCode: demoCode.buttonCode,
      fontCode: demoCode.fontCode,
      configCode: demoCode.configCode
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
.color-box {
  a {
    color: #fff;
    text-decoration: none;
  }
  .button {
    width: 80px;
    height: 30px;
    display: inline-block;
    margin-right: 20px;
  }
  .button-red {
    background: @button-red;
  }
  .button-red-hover {
    background: @button-red-hover;
  }
  .button-blue {
    background: @button-blue;
  }
  .button-blue-hover {
    background: @button-blue-hover;
  }
  .button-orange {
    background: @button-orange;
  }
  .button-orange-hover {
    background: @button-orange-hover;
  }
  .button-cheng {
    background: @button-cheng;
  }
  .button-cheng-hover {
    background: @button-cheng-hover;
  }
  .button-green {
    background: @button-green;
  }
  .button-green-hover {
    background: @button-green-hover;
  }

  .font {
    display: inline-block;
    margin-right: 20px;
  }
  .font-blue {
    color: @font-blue;
  }
  .font-red {
    color: @font-red;
  }
  .font-gray-night {
    color: @font-gray-night;
  }
  .font-gray-three {
    color: @font-gray-three;
  }
  .font-white {
    color: @font-white;
  }
  .font-black {
    color: @font-black;
  }
  .font-cheng {
    color: @font-cheng;
  }
  .font-green {
    color: @font-green;
  }
}
</style>