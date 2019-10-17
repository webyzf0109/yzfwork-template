<template>
  <div class="form-box">
    <y-form :labelWidth="130" ref="iforms" :formData="formData" :formModel="inLine_FormModel" formName="inLine" v-if="isReady">
      <div slot="iform-btns">
        <el-button type="primary" size="small">提交</el-button>
        <el-button type="default" size="small">重置</el-button>
      </div>
    </y-form>
  </div>
</template>
<script>
import {inLine_FormModel} from './state'
export default {
  created() {
      console.log(this.inLine_FormModel)
    this.isReady = true;
  },
  data() {
    return {
      formData: {},
      isReady: false
    };
  },
  computed:{
      inLine_FormModel(){
          return inLine_FormModel
      }
  }
};
</script>

<style lang="less">
</style>