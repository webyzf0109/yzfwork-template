<template>
  <div class="y-upload" :style="{height:height+25+'px'}">
    <div
      class="view"
      v-if="imgUrl.length>0"
      v-for="(item,index) in imgUrl"
      :key="index"
      :style="{width:width+'px',height:height+'px'}"
    >
      <img :src="item.imgPath" alt />
      <div class="pop" :style="{'line-height':height+'px!important'}">
        <i
          class="el-icon-zoom-in"
          :style="{'line-height':height+'px!important'}"
          @click="viewPhoto(index)"
        ></i>
        <i
          class="el-icon-delete"
          :style="{'line-height':height+'px!important'}"
          @click="remove(index)"
        ></i>
      </div>
    </div>

    <div
      class="upload"
      :style="{width:width+'px',height:height+'px','line-height':height+'px!important'}"
      v-if="num==1?imgUrl.length<1:imgUrl.length< maxNum"
    >
      <i class="el-icon-plus" :style="{'line-height':height+'px!important'}"></i>
      <input :multiple="num!==1" type="file" @change="handle($event)" name="img" />
    </div>
    <section class="notice" v-if="sizeShow">建议尺寸：{{sizeWidth}}*{{sizeHeight}}px</section>
    <div class="elDialog">
      <el-dialog :visible.sync="dialogVisible" :close-on-click-modal="false" :append-to-body="true">
        <img width="100%" v-if="imgList[idx]" :src="imgUrl[idx][imgName]" alt />
      </el-dialog>
    </div>
  </div>
</template>
<script>
import ajax from "@/api/axios";
export default {
  name: "y-upload",
  data() {
    return {
      imgUrl: [],
      dialogVisible: false,
      idx: 0
    };
  },
  props: {
    imgList: {
      type: Array,
      default() {
        return [];
      }
    },
    imgName: {
      type: String,
      default() {
        return "imgPath";
      }
    },
    height: {
      type: Number,
      default() {
        return 60;
      }
    },
    width: {
      type: Number,
      default() {
        return 60;
      }
    },
    sizeWidth: {
      type: Number,
      default() {
        return 60;
      }
    },
    sizeHeight: {
      type: Number,
      default() {
        return 60;
      }
    },
    num: {
      type: Number,
      default() {
        return 1;
      }
    },
    maxNum: {
      type: Number,
      default() {
        return 1;
      }
    },
    uploadUrl: {
      type: String,
      default() {
        return 1;
      }
    },
    sizeShow: {
      type: Boolean,
      default() {
        return true;
      }
    },
    token: {
      type: String,
      default() {
        return "";
      }
    }
  },
  created() {
    this.imgUrl = this.imgList;
    // this.imgUrl=['https://ufund-1255803266.cos.ap-shanghai.myqcloud.com/67bfd9d51df648daac7679e843e07571.jpg','https://ufund-1255803266.cos.ap-shanghai.myqcloud.com/67bfd9d51df648daac7679e843e07571.jpg','https://ufund-1255803266.cos.ap-shanghai.myqcloud.com/67bfd9d51df648daac7679e843e07571.jpg']
  },
  watch: {
    imgList: function(newValue, oldValue) {
      this.imgUrl = newValue;
    }
  },
  methods: {
    viewPhoto(index) {
      this.idx = index;
      this.dialogVisible = true;
    },
    remove(index) {
      this.imgUrl.splice(index, 1);
    },
    handle(e) {
      var imgLength = this.imgUrl.length;
      if (imgLength >= 5) {
        this.$message.error("最多上传5张图片");
        return;
      }
      let files = e.target.files;
      for (let i = 0; i < files.length; i++) {
        if (imgLength + i >= 5) {
          this.$message.error("最多上传5张图片");
          return;
        }
        if (i >= 5) {
          this.$message.error("最多上传5张图片");
          return;
        }
        if (
          files[i].type !== "image/gif" &&
          files[i].type !== "image/png" &&
          files[i].type !== "image/jpeg" &&
          files[i].type !== "image/webp"
        ) {
          this.$message.error("上传文件格式不对");
          return;
        } else if (files[i].size >= 2048000) {
          this.$message.error("图片大小不得超过2M");
          return;
        }
        let formdata = new FormData();
        formdata.append("file", files[i]);
        ajax
          .post(this.uploadUrl, formdata, {
            headers: {
              Authorization: "Bearer " + this.token
            }
          })
          .then(res => {
            e.target.value = "";
            let obj = {
              imgPath: res.imgurl || res.data.path || res.data,
              id: res.data.id
            };
            this.imgUrl.push(obj);
            this.$emit("uploadChildSay", this.imgUrl);
            if (this.imgUrl.length == files.length) {
              this.$message.success("图片上传成功");
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  }
};
</script>
<style lang="less">
@font-blue: #409eff;
.y-upload {
  width: auto;
  display: flex;
  position: relative;
  .notice {
    color: #666;
    font-size: 12px;
    position: absolute;
    bottom: 0;
    left: 0;
    line-height: 20px;
  }
  .view {
    margin-right: 10px;
    cursor: pointer;
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    position: relative;
    .pop {
      width: 100%;
      height: 100%;
      overflow: hidden;
      text-align: center;
      display: flex;
      justify-content: space-around;
      background: rgba(0, 0, 0, 0.4);
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      i {
        color: #fff;
      }
    }
    img {
      width: 100%;
      height: 100%;
    }
    span {
      position: absolute;
      bottom: -28px;
      color: @font-blue;
      left: 0;
      display: block;
      font-size: 12px;
      width: 60px;
      text-align: center;
    }
  }
  .pop:hover {
    opacity: 1;
  }
  .pop:focus {
    opacity: 1;
  }
  .upload {
    background-color: #fbfdff;
    border: 1px dashed #c0ccda;
    border-radius: 6px;
    box-sizing: border-box;
    cursor: pointer;
    vertical-align: top;
    position: relative;
    text-align: center;
    input {
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 999;
      opacity: 0;
      cursor: pointer;
    }
  }
  .upload:hover {
    border-color: #409eff;
    color: #409eff;
  }
}
</style>