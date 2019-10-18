<template>
  <div class="form-box">
    <y-form
      :labelWidth="130"
      ref="iforms"
      :formData="formData"
      :formModel="inLine_FormModel"
      formName="inLine"
      v-if="isReady"
    >
      <div slot="iform-btns">
        <el-button type='primary' size='small' @click='validate("iforms")'>提交</el-button>
        <el-button type='default' size='small' @click='_reset("iforms")'>重置</el-button>
      </div>
    </y-form>
  </div>
</template>
<script>
import { inLine_FormModel } from "./state";
export default {
  created() {
  },
  data() {
    return {
      formData: {
        houseType:'1',
      },
      isReady: true
    };
  },
  computed: {
    inLine_FormModel() {
      return inLine_FormModel;
    }
  },
  methods:{
    validate (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$emit('submit', this.iformData)
        }
      })
    },
     _reset (name) {
      this.$refs[name].resetForm(name)
    },
    resetForm (name) {
      this.$refs[name].resetFields()
    },
  }
};
</script>

<style lang="less">
</style>