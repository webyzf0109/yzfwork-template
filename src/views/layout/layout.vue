<!-- layout组件 -->
<template>
  <div class="layout-box">
    <el-container>
      <header>
        <p :style="{'background-image': 'url('+logo+')'}"></p>
        <div class="navRight">
          <div>yzf-work文档</div>
        </div>
        <div style="clear:both"></div>
      </header>
      <el-aside width="120px" class="left-box" :style="{height:leftHeight,'z-index':1000}">
        <el-menu
          :default-active="activeIndex"
          background-color="#ffffff"
          active-text-color="#f15b1b"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          :unique-opened="true"
        >
          <el-submenu
            :index="item.id.toString()"
            v-if="item.childList && item.childList.length>0"
            v-for="(item,index) in navList"
            :key="index"
          >
            <template slot="title">
              <span>{{item.name}}</span>
            </template>
            <el-menu-item-group>
              <el-menu-item
                @click="handleChildrenClick(childItem,childIndex)"
                v-for="(childItem,childIndex) in item.childList"
                :key="childIndex"
                :index="childItem.id.toString()"
              >{{childItem.name}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item
            @click="handleChildrenClick(item)"
            v-for="(item,index) in navList"
            v-if="!item.childList || item.childList.length==0"
            :index="item.id.toString()"
            :key="item+index"
          >
            <span slot="title">{{item.name}}</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main class="right-box">
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    //这里存放数据
    const validatenewPwd = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入新密码"));
      } else {
        if (value.length > 5 && value.length < 22) {
          callback();
        } else {
          callback(new Error("请输入6到12位"));
        }
      }
    };
    const validateoldPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入旧密码"));
      } else {
        if (value.length > 5 && value.length < 22) {
          callback();
        } else {
          callback(new Error("请输入6到12位"));
        }
      }
    };
    return {
      logo: "https://qiniu.yyyzf.xyz/f2dccb137b5ec6f321fc4997ed3eb04.png",
      leftHeight: "",
      activeIndex: "0",
      navList: [
        {
          id: 1,
          name: "button",
          parentId: 0,
          path: "/button",
        },
        {
          id: 2,
          name: "表格",
          parentId: 0,
          path: "/table"
        },
        {
          id: 3,
          name: "表单",
          parentId: 0,
          path: "/form"
        },
        {
          id: 4,
          name: "upload",
          parentId: 0,
          path: "/upload"
        },
        {
          id: 5,
          name: "color",
          parentId: 0,
          path: "/color"
        },

      ]
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    getHeight() {
      let height =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;
      this.leftHeight = height - 60 + "px";
    },
    handleChildrenClick(item, index) {
      if (item.path == this.$route.path) {
        return;
      }
      this.$router.push(item.path);
    },
    handleOpen(key, keyPath) {
      this.navList.forEach((item, index) => {
        if (item.id == key) {
          if (item.list) {
            this.activeIndex = item.list[0].id.toString();
          } else {
            this.activeIndex = item.id.toString();
          }
        }
      });
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getHeight();
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
.layout-box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  header {
    border-bottom: 1px solid #ddd;
    -moz-box-shadow: 3px 3px 2px #ddd;
    /* 老的 Firefox */
    box-shadow: 3px 3px 2px #ddd;
    width: 100%;
    height: 50px;
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    background: #1c1c1c;
    p {
      width: 145px;
      height: 50px;
      line-height: 50px;
      float: left;
      background-position: center;
      background-size: cover;
    }
    .navRight {
      display: flex;
      float: right;
      margin-right: 60px;
      transition: all 0.8s;
    }
    .navRight div {
      display: inline-block;
      color: #fff;
      font-weight: bold;
      font-size: 14px;
      height: 50px;
      line-height: 50px;
      margin-right: 20px;
      cursor: pointer;
    }
  }

  .left-box {
    position: fixed;
    z-index: 999;
    left: 0;
    top: 50px;
    color: @font-black;
    font-size: 14px;
    height: 100%;
    width: 145px !important;
    background-color: #fff;
  }

  .right-box {
    margin-top: 50px;
    margin-left: 145px;
    padding: 20px 50px;
    background-color: #f7f7f7;
  }
}
</style>
<style lang="less">
.layout-box {
  .el-menu-item-group__title {
    display: none;
  }
}
</style>