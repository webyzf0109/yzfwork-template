<!-- tree -->
<template>
  <div class="y-tree">
    <el-checkbox
      v-if="allCheckedShow"
      class="allChecked"
      v-model="allChecked"
      @change="allCheckedChange"
    >全选</el-checkbox>
    <el-tree
      :data="data"
      @check-change="checkedChange"
      show-checkbox
      default-expand-all
      node-key="id"
      ref="tree"
      highlight-current
      :props="defaultProps"
    ></el-tree>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    defaultCheckedData: {
      type: Array,
      default() {
        return [];
      }
    },
    allCheckedShow: {
      type: Boolean,
      default() {
        return true;
      }
    },
    defaultProps: {
      type: Object,
      default() {
        return {
          children: "list",
          label: "name"
        };
      }
    }
  },
  name: "y-tree",
  components: {},
  data() {
    //这里存放数据
    return {
      allChecked: false,
      arr: []
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    //设置初始选中数据
    setDefaultData() {
      this.$refs.tree.setCheckedKeys(this.defaultCheckedData);
    },
    //节点发生变化
    checkedChange() {
      let length = this.$refs.tree.getCheckedKeys().length;
      this.allChecked = length == this.arr.length ? true : false;
      this.$emit("checkedChange", this.$refs.tree.getCheckedKeys());
    },
    //全选监听
    allCheckedChange(val) {
      if (val) {
        this.$refs.tree.setCheckedKeys(this.arr);
      } else {
        this.$refs.tree.setCheckedKeys([]);
      }
    },
    //获取所有的id
    getAllId() {
      this.arr = [];
      this.data.forEach((val, index) => {
        this.arr.push(val.id);
        if (
          val[this.defaultProps.children] &&
          val[this.defaultProps.children].length > 0
        ) {
          val[this.defaultProps.children].forEach((item, idx) => {
            this.arr.push(item.id);
            if (
              item[this.defaultProps.children] &&
              item[this.defaultProps.children].length > 0
            ) {
              item[this.defaultProps.children].forEach((value, num) => {
                this.arr.push(value.id);
              });
            }
          });
        }
      });
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getAllId();
    this.$nextTick(()=>{
        this.setDefaultData();
    })
    
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
.y-tree {
  .allChecked {
    margin-left: 22px;
    margin-bottom: 10px;
  }
}
</style>