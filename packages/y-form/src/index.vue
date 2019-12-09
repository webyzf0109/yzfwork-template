<template>
  <div class="y-iform">
    <div class="formHeader">
      <slot name="header"></slot>
    </div>
    <el-form
      :model="iformData"
      :validate-on-rule-change="false"
      :rules="!disabled ? iRules : {}"
      :ref="formName"
      :label-width="labelWidth + 'px' "
      :inline="inline"
      :disabled="disabled"
      v-update="formName"
    >
      <el-row class="clearfix">
        <!-- :lg='!item.colSpan?colSpan:item.colSpan' :md='!item.mdSpan?colSpan:item.mdSpan' :sm='!item.smSpan?colSpan:item.smSpan' :xs='!item.smSpan?24:item.smSpan'  -->
        <!-- :lg='!item.colSpan?colSpan:item.colSpan' :md='!item.colSpan?colSpan:item.colSpan'  :sm='!item.colSpan?colSpan:item.colSpan' :xs='!item.colSpan?colSpan:item.colSpan' -->
        <el-col
          v-for="(item, index) in iformModel"
          :lg="!item.colSpan?colSpan:item.colSpan"
          :md="!item.colSpan?colSpan:item.colSpan"
          :sm="!item.colSpan?colSpan:item.colSpan"
          :xs="!item.colSpan?colSpan:item.colSpan"
          :key="index"
        >
          <el-form-item
            :prop="item.prop"
            :label="item.label"
            v-if="item.visible(iformData, iformModel, index)"
            :class="item.classes"
            :ref="item.ref"
            :label-width="item.labelWidth ? item.labelWidth + 'px' : labelWidth+'px' "
          >
            <el-input
              class="cusInput"
              v-if=" item.elemType == 'input'"
              :type="item.type"
              v-model="iformData[item.prop]"
              :maxlength="item.maxlength"
              :readonly="item.readonly"
              :disabled="item.disabled"
              :show-word-limit="item.showWordLimit"
              :placeholder="item.placeholder?item.placeholder:'请输入'+item.label"
              @change="item.onChange($event, iformModel, iformData, index)"
              :style="{width:item.width+'px!important'}"
            >
              <template slot="prepend" v-if="item.slotPre != undefined ">{{item.slotPre}}</template>
              <template slot="append" v-if="item.slotApp != undefined ">{{item.slotApp}}</template>
            </el-input>
            <el-input
              type="textarea"
              v-else-if=" item.elemType == 'textarea' "
              v-model="iformData[item.prop]"
              :rows="item.rows"
              :maxlength="item.maxlength"
              :readonly="item.readonly"
              :show-word-limit="item.showWordLimit"
              resize="both"
              :placeholder="item.placeholder?item.placeholder:'请输入'+item.label+'......'"
              @change="item.onChange($event, iformModel, iformData, index)"
              :style="{width:item.width+'px!important'}"
            ></el-input>
            <el-select
              :clearable="item.clearable === false ? false : true"
              v-else-if=" item.elemType == 'select' "
              v-model="iformData[item.prop]"
              :filterable="item.filterable"
              :multiple="item.multiple"
              :placeholder="item.placeholder?item.placeholder:'请选择'+item.label"
              @change="item.onChange($event, iformModel, iformData, index)"
              @focus="item.onFocus($event, iformModel, iformData, index)"
              :style="{width:item.width+'px!important'}"
            >
              <el-option
                v-for=" (option, index) in item.options"
                :key="index"
                :disabled="option.disabled"
                :label="option[item.col]"
                :value="option[item.colVal]"
              ></el-option>
            </el-select>
            <el-date-picker
              :editable="item.dateEditable"
              clearable
              v-else-if=" item.elemType == 'date' "
              v-model="iformData[item.prop]"
              :type="item.type"
              @change="item.onChange($event, iformModel, iformData, index)"
              :placeholder="item.placeholder?item.placeholder:item.label"
              :style="{width:item.width+'px!important'}"
            ></el-date-picker>
            <el-checkbox-group
              v-else-if=" item.elemType == 'checkbox' "
              v-model="iformData[item.prop]"
              :placeholder="item.placeholder?item.placeholder:item.label"
              @change="item.onChange($event, iformModel, iformData, index)"
              :style="{width:item.width+'px!important'}"
            >
              <el-checkbox
                v-for="(option, oindex) in item.options"
                :label="option[item.colVal]"
                :key="oindex"
              >{{option[item.col]}}</el-checkbox>
            </el-checkbox-group>
            <el-checkbox-group
              v-else-if=" item.elemType == 'checkbox_label' "
              v-model="iformData[item.prop]"
              :placeholder="item.placeholder?item.placeholder:item.label"
              @change="item.onChange($event, iformModel, iformData, index)"
              :style="{width:item.width+'px!important'}"
            >
              <el-checkbox
                v-for="(option, oindex) in item.options"
                :label="option[item.colVal]+'_' +option[item.col]"
                :key="oindex"
              >{{option[item.col]}}</el-checkbox>
            </el-checkbox-group>
            <el-radio-group
              v-else-if=" item.elemType == 'radio' "
              v-model="iformData[item.prop]"
              size="small"
              @change="item.onChange($event, iformModel, iformData, index)"
              :style="{width:item.width+'px!important'}"
            >
              <el-radio
                v-for="(option, rindex) in item.options"
                v-if="!item.type"
                :label="option[item.col]"
                :key="rindex"
              >{{option[item.colVal]}}</el-radio>
              <el-radio-button
                v-else
                :label="option[item.col]"
                :key="rindex"
              >{{option[item.colVal]}}</el-radio-button>
            </el-radio-group>
            <!-- 时间 time v-validate='!item.directive?"void":{model: iformData, prop:item.prop, rule: item.directive}' -->
            <el-time-picker
              v-else-if=" item.elemType == 'time' "
              v-model="iformData[item.prop]"
              :picker-options="{
                selectableRange: item.timeRange
              }"
              placeholder="请选择时间点"
            ></el-time-picker>
            <el-date-picker
              :editable="item.dateEditable"
              clearable
              v-else-if=" item.elemType == 'daterange'"
              v-model="iformData[item.prop]"
              @change="item.onChange($event, iformModel, iformData, index)"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :picker-options="item.options"
              :style="{width:item.width+'px!important'}"
            ></el-date-picker>
            <div v-else-if="item.elemType === 'temp'" v-html="item.temp(iformData[item.prop])"></div>
            <el-switch
              v-else-if="item.elemType === 'switch'"
              v-model="iformData[item.prop]"
              :active-text="item.activeText"
              @change="item.onChange($event, formModel, iformData, index)"
              :inactive-text="item.inactiveText"
            ></el-switch>

            <!-- <div v-else-if='item.elemType === "div"' v-html='item.format ? item.format(iformData, item.prop) : iformData[item.prop]'></div> -->
            <div v-else-if="item.elemType === 'div'">
              <div v-if="item.slot">{{item.slot}}</div>
              <div v-else>{{iformData[item.prop]}}</div>
            </div>

            <!-- /**图片 */ -->
            <div class="upload-box" v-else-if="item.elemType === 'upload'">
              <y-upload
                ref="uploads"
                :imgList="item.imgList"
                :width="item.width"
                :height="item.height"
                :sizeWidth="item.sizeWidth"
                :sizeHeight="item.sizeHeight"
                :sizeShow="item.sizeShow"
                :num="item.num"
                :maxNum="item.maxNum"
                :token="item.token"
                :uploadUrl="item.uploadUrl"
                @uploadChildSay="uploadChildSay($event,item.prop)"
              ></y-upload>
            </div>
          </el-form-item>
        </el-col>
        <div :style="{'float': direction}">
          <el-form-item label-width="20px">
            <slot name="iform-btns"></slot>
          </el-form-item>
        </div>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import * as validators from "@/utils/validator";
let events = {
  update: null
};
export default {
  name: "y-form",
  directives: {
    update: {
      bind(el, binding) {
        events.update = new Event("update");
        el.addEventListener("update", () => {}, false);
      },
      update(el, binding) {
        el.dispatchEvent(events.update);
      }
    }
  },
  data() {
    return {
      iformModel: this.formModel.length > 0 ? this.formModel : [],
      iformData: Object.keys(this.formData).length > 0 ? this.formData : [],
      iRules: {},
      imgList: []
    };
  },
  props: {
    formModel: {
      type: Array,
      default() {
        return [];
      }
    },
    formData: {
      type: Object,
      default() {
        return {};
      }
    },
    inline: {
      type: [Boolean, String],
      default() {
        return false;
      }
    },
    colSpan: {
      type: Number,
      default() {
        return 24;
      }
    },
    rules: {
      type: Object,
      default() {
        return {};
      }
    },
    formName: {
      type: String,
      default() {
        return "iform";
      }
    },
    labelWidth: {
      type: Number,
      default() {
        return 100;
      }
    },
    width: {
      type: Number,
      default() {
        return 200;
      }
    },
    disabled: {
      type: Boolean,
      default() {
        return false;
      }
    },
    autoValidate: {
      type: Boolean,
      default() {
        return false;
      }
    },
    isSync: {
      type: Boolean,
      default() {
        return true;
      }
    },
    direction: {
      type: String,
      default() {
        return "left";
      }
    }
  },
  watch: {
    formData: {
      handler(val) {
        this.iformData = this.clearObj(this.formData);
      },
      deep: true
    },
    iformData: {
      handler(val) {
        /*
         * 发送表单数据到业务组件中
         */
        this.$emit("$update", this.iformData);
        /*
         * 默认将各自的表单信息同步到vuex中对应的表单formData中
         */
        // if (this.isSync) {
        //   // 调用vuex的mutation同步数据
        //   this.syncFormData({formData: val, formName: this.formName})
        // }
      },
      deep: true
    },
    /*
     * 监听表单模型的变化，重新生成校验规则
     */
    iformModel: {
      handler(val) {
        // 根据表单模型数据的变化
        this._initRules();
      },
      deep: true
    },
    validateting: {
      handler(val) {
        !val && this.clearValidate();
      },
      deep: true
    }
  },
  created() {
    this._initRules();
    this.initForm(this.iformModel);
  },
  methods: {
    /*
     * 初始化验证规则
     */
    _initRules() {
      /*
       * 判断是否存在表单验证规则
       */
      if (Object.keys(this.rules).length === 0) {
        this.iRules = this.initRules(this.iformModel);
      } else {
        this.iRules = this.rules;
      }
    },
    /*
     * 初始化表单数据
     */
    initForm(list) {
      let formData = {};
      list.map(item => {
        if (item.group) {
          this.initForm(item.childs, formData);
        } else {
          /*
           * 初始化表单数据
           */
          if (!this.iformData[item.prop]) {
            formData[item.prop] =
              item.defaultValue !== undefined ? item.defaultValue : "";
          } else {
            formData[item.prop] = this.iformData[item.prop];
          }
          /*
           * 给每个表单控件添加change时间
           */
          if (!item.onChange) {
            item.onChange = ($event, formModel, formData, index) => {};
          }
          /*
           * 给每个表单控件添加显示隐藏函数
           */
          if (item.visible === undefined) {
            item.visible = (formData, formModel, index) => {
              return true;
            };
          }
          /*
           * 给每个表单控件添加focus函数
           */
          if (!item.onFocus) {
            item.onFocus = () => {};
          }
        }
      });
      /*
       * 将初始化的formData和props => formData合并
       */
      this.iformData = this.clearObj(
        Object.assign({}, formData, this.formData)
      );
      /*
       * 设置表单渲染的模型
       */
      this.$set(this, "iformModel", list);
      /*
       * 执行表单数据里的初始化change事件
       */
      this.iformModel.map((item, index) => {
        if (item.onChange) {
          if (this.iformData[item.prop]) {
            item.onChange(
              this.iformData[item.prop],
              this.iformModel,
              this.iformData,
              index
            );
          }
        }
      });
    },
    /*
     * 重置表单
     */
    resetForm() {
      this.$refs[this.formName].resetFields();
      if (this.iformData.url && this.iformData.url.length > 0) {
        this.iformModel.forEach(item => {
          if (item.elemType == "upload") {
            item.imgList = [];
          }
        });
        this.iformData.url=[];
        this.$refs["upload"][0].clearValidate();
      }

      if (this.$refs[this.formName + "searchTree"]) {
        this.$refs[this.formName + "searchTree"][0].resetTree();
      }
    },
    uploadChildSay(val, prop) {
      if (val.length > 0) {
        this.iformData[prop] = val;
        this.$refs["upload"][0].clearValidate();
        this.$emit('uploadCallback',this.iformData[prop])
      }
    },
    /*
     * 手动获取当前表单的数据
     */
    getFormData() {
      if (this.validate()) {
        return this.iformData;
      } else {
        return false;
      }
    },
    /*
     * 表单验证
     */
    validate() {
      let status = false;
      this.$refs[this.formName].validate(valid => {
        status = valid;
      });
      return status;
    },
    /*
     * 清除校验的信息
     */
    clearValidate() {
      this.$refs[this.formName].clearValidate();
    },

    /**
     * 核心逻辑
     */
    initRules(formModel) {
      var rules = {};
      if (!formModel.map) {
        throw new Error("请传入数组");
      } else {
        formModel.map(item => {
          if (item.visible !== false) {
            if (item.group) {
              item.childs.map(citem => {
                this.makeValidator(citem, rules);
              });
            } else {
              this.makeValidator(item, rules);
            }
          }
        });
      }
      return rules;
    },
    makeValidator(item, rules) {
      if (item.rules !== undefined && item.visible !== false) {
        rules[item.prop] = [];
        item.rules &&
          item.rules.map(rule => {
            if (typeof rule === "function") {
              rules[item.prop].push({ validator: rule });
            } else {
              if (rule === "required") {
                rules[item.prop].push({
                  required: true,
                  message: "此项为必填项"
                });
              } else {
                rules[item.prop].push({
                  validator: validators[rule + "Check"]
                });
              }
            }
          });
      }
    },
    clearObj(obj) {
      return JSON.parse(JSON.stringify(obj));
    }
  }
};
</script>
