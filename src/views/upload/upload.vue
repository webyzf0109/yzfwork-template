<template>
  <div class="upload-box">
    <y-upload
      :imgList="imgList"
      :imgName="imgName"
      :width="100"
      :height="100"
      :sizeWidth="200"
      :sizeHeight="200"
      :num="1"
      :maxNum="5"
      :uploadUrl="uploadUrl"
      @uploadChildSay="uploadChildSay"
    ></y-upload>
  </div>
</template>
<script>
export default {
  data() {
    return {
      uploadUrl: "/v1/upload",
      imgList: [
          
      ],
      imgName:'imgPath',
    };
  },
  methods:{
      uploadChildSay(val){
          console.log(val)
      }
  }
};
</script>
<style lang="less">
</style>