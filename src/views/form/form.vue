<template>
  <div class="form-box">
    <div @click="show">出现</div>
    <el-dialog title="商品管理" :visible.sync="diaIsShow" class="diaForm">
      <y-form
        :labelWidth="130"
        ref="iforms"
        :formData="formData"
        :formModel="inLine_FormModel"
        @uploadCallback="uploadCallback"
        v-if="isReady"
      >
        <div slot="iform-btns">
          <el-button type="primary" size="small" @click="validate('iforms')">提交</el-button>
          <el-button type="default" size="small" @click="_reset('iforms')">重置</el-button>
        </div>
    </y-form>
    </el-dialog>
  </div>
</template>
<script>
import { inLine_FormModel } from "./state";
export default {
  created() {},
  data() {
    return {
      diaIsShow:false,
      isReady:false,
      formData: {
        houseType: "1",
      },
    };
  },
  computed: {
    inLine_FormModel() {
      return inLine_FormModel;
    }
  },
  methods: {
    show(){
      this.formData={};
      this.isReady=true;
      this.diaIsShow =true 
    },
    validate(name) {
      this.$refs[name].validate(valid => {
        console.log(111)
        if (valid) {
          console.log(222)
          this.$emit("submit", this.formData);
        }else{
          console.log(333)
        }
      });
    },
    _reset(name) {
      console.log(this.$refs[name]);
      this.$refs[name].resetForm(name);
      this.isReady=false;
      this.diaIsShow =false 
    },
    uploadCallback(val) {
      console.log(this.formData)
    }
  }
};
</script>

<style lang="less">
</style>