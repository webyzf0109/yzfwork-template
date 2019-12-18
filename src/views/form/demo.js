const demoCode = {
    demoDefault: function () {
        return `//html部分
    <y-form
      :labelWidth="130"
      ref="iforms"
      :formData="formData"
      :formModel="formModel"
      @uploadCallback="uploadCallback"
    >
      <div slot="iform-btns">
        <el-button type="primary" size="small" @click="validate('iforms')">提交</el-button>
        <el-button type="default" size="small" @click="_reset('iforms')">重置</el-button>
      </div>
    </y-form>
    //js数据部分
    formData: {},
    formModel:[
        {
            elemType: "radio",
            label: "审核",
            prop: "radio",
            col: "isSelect",
            colVal: "value",
            labelWidth: 100,
            rules: ["required"],
            options: [
                { id: 1, value: "审核通过", isSelect: 1 },
                { id: 2, value: "审核不通过", isSelect: 0 }
            ],
            onChange: ($event, formModel, formData, index) => {
                if (!formData.radio) {
                    formData.stair = formData.end = "";
                }
            }
        },
        {
            elemType: "input",
            label: "佣金比例",
            placeholder: "请输入一级佣金比例",
            prop: "stair",
            labelWidth: 100,
            slotPre: "一级佣金比例",
            slotApp: "%",
            width: 350,
            rules: ["required",],
            visible: (formData) => {
                if (formData.radio) {
                    return true;
                } else {
                    return false;
                }
            },
            onChange: ($event, formModel, formData, index) => {
                let rules = formModel[index].rules;
                let newRule = (rule, val, callback) => {
                    let reg = /^(((\d|[1-9]\d)(\.\d{1,2})?)|100|100.0|100.00)$/;
                    let newVal = this.tofixed(val);
                    if (!reg.test(newVal) || (!reg.test(newVal) && newVal != 100)) {
                        callback(new Error("请输入0-100的数值"));
                    } else {
                        callback();
                    }
                };
                formModel[index].rules = rules.concat([newRule]);//把自定义的rule添加到原有的rule
            }
        },
        {
            elemType: "div",
            slot: "下级用户购买产生的佣金比例，范围0%--100%",
            labelWidth: 100,
            prop: "message",
            visible: (formData) => {
                if (formData.radio) {
                    return true;
                } else {
                    return false;
                }
            },
        },
        {
            elemType: "textarea",
            prop: 'describe',
            labelWidth: 100,
            label: '描述',
            maxlength: 200,
            rules: ["required"],
            width: 300,
            showWordLimit: true,
        },
        {
            elemType: 'select',
            label: '商品分类：',
            labelWidth: 100,
            placeholder: '请选择商品分类',
            defaultValue: '',
            width: 250,
            rules: ['required'],
            prop: 'category_type',
            col: 'name',
            colVal: 'id',
            options: []
        },
        {
            label: '上传图片：',
            labelWidth: 100,
            prop: 'url',
            elemType: 'upload',
            rules: ['required'],
            ref: 'upload',
            width: 60,
            height: 60,
            sizeWidth: 750,
            sizeHeight: 750,
            num: 1,
            maxNum: 1,
            uploadUrl: '/v1/upload',
            imgList: []
        },
        {
            label: '权限配置：',
            labelWidth: 100,
            prop: 'resource',
            elemType: 'tree',
            rules: ['required'],
            ref:'tree',
            data: [
                {
                    id: 1,
                    name: "数据",
                    list: [
                        {
                            id: 2,
                            name: "店铺总览"
                        },
                        {
                            id: 3,
                            name: "数据统计"
                        },
                        {
                            id: 4,
                            name: "财务管理"
                        }
                    ]
                },
                {
                    id: 5,
                    name: "账户",
                    list: [
                        {
                            id: 6,
                            name: "修改密码"
                        },
                        {
                            id: 7,
                            name: "员工管理"
                        }
                    ]
                }
            ],
            defaultCheckedData: [],
        }
    ],
    //js方法部分
    /**上传图片回调 */
    uploadCallback() {},
    /**提交 */
    submit(name) {
      let result = this.$refs[name].getFormData();
      console.log(result);
    },
    /**重置 */
    reset(name) {
      this.$refs[name].resetForm();
    }


    /*** 注意这一点：如果form 表单没写在弹窗里，控制isReady自动重置表单即可******/
    watch: {
      diaIsShow: function(newValue, oldValue) {
        this.isReady = newValue;
      }
    },
    /*** 注意这一点：如果form 表单没写在弹窗里，控制isReady自动重置表单即可******/
    `
    },
    demoTableData: [{
        name: "labelWidth",
        description: "表单域标签的宽度，例如 '50'。作为 Form 直接子元素的 form-item 会继承该值。",
        type: "Number",
        value: "130",
        defaultValue: "100",
        isSure: `false`
    },
    {
        name: "ref",
        description: "对于整个form的标识,便于本页面识别以及验证",
        type: "String",
        value: "只能是这一个值： iforms ",
        defaultValue: "iforms",
        isSure: `true`
    },
    {
        name: "formData",
        description: "表单的初始数据",
        type: "Object",
        value: "——",
        defaultValue: "{}",
        isSure: `true`
    },
    {
        name: "formModel",
        description: "表单模型",
        type: "Array",
        value: "——",
        defaultValue: "——",
        isSure: `true`
    },
    {
        name: "uploadCallback",
        description: "上传图片的回调",
        type: "Number",
        value: "Function(val)",
        defaultValue: "——",
        isSure: `false`
    },
    {
        name: "isReady",
        description: "控制重置表单（form在dialog里面才用）",
        type: "Boolean",
        value: "false",
        defaultValue: "false",
        isSure: `true`
    },
    ],
    demoTableModel: [{
        label: "参数",
        prop: "name",
        minWidth: 100,
        align: "left"
    },
    {
        label: "说明",
        prop: "description",
        minWidth: 150,
        align: "left"
    },
    {
        label: "类型",
        prop: "type",
        minWidth: 150,
        align: "left"
    },
    {
        label: "可选值",
        prop: "value",
        minWidth: 200,
        align: "left"
    },
    {
        label: "默认值",
        prop: "defaultValue",
        minWidth: 100,
        align: "left"
    },
    {
        label: "是否必填",
        prop: "isSure",
        minWidth: 100,
        align: "left"
    }
    ],
    demoTableData1: [{
        name: 'elemType',
        description: '表单类型',
        type: 'String',
        value: '见下表',
        defaultValue: '——',
        isSure: 'true'
    },
    {
        name: 'label',
        description: '表单名称',
        type: 'String',
        value: '——',
        defaultValue: '——',
        isSure: 'true,elemType=div 可以为false'
    },
    {
        name: 'placeholder',
        description: '默认提示语句',
        type: 'String',
        value: '——',
        defaultValue: '——',
        isSure: 'true'
    },
    {
        name: 'prop',
        description: '继承formData的字段名',
        type: 'String',
        value: '——',
        defaultValue: '——',
        isSure: 'true'
    },
    {
        name: 'colSpan',
        description: '响应式宽度',
        type: 'Number',
        value: '最大为24',
        defaultValue: '——',
        isSure: 'true'
    },
    {
        name: 'width',
        description: '表单的宽度',
        type: 'Number',
        value: 'input select等的宽度',
        defaultValue: '200',
        isSure: 'false'
    },
    {
        name: 'labelWidth',
        description: '表单域标签的宽度',
        type: 'Number',
        value: 'input select等的宽度',
        defaultValue: '100',
        isSure: 'false'
    },
    {
        name: 'col',
        description: "select/radio选中的数据值",
        type: 'String',
        value: 'elemType=select/radio 时,选中的数据值',
        defaultValue: '——',
        isSure: 'false'
    },
    {
        name: 'colVal',
        description: "select/radio选中的页面值",
        type: 'String',
        value: 'elemType=select/radio 时,选中的页面值',
        defaultValue: '——',
        isSure: 'false'
    },
    {
        name: 'defaultValue',
        description: "select/radio默认的数据值",
        type: 'String',
        value: 'elemType=select/radio默认的数据值',
        defaultValue: '——',
        isSure: 'false'
    },
    {
        name: 'options',
        description: "select/radio的数据挂载处",
        type: 'String',
        value: 'elemType=select/radio 时,数据挂载处',
        defaultValue: '——',
        isSure: 'false'
    },
    {
        name: 'maxlength',
        description: "表单的最大长度",
        type: 'Number',
        value: '——',
        defaultValue: '——',
        isSure: 'false'
    },
    {
        name: 'visible',
        description: "表单显示的条件",
        type: 'Function(formData)=>{return false}',
        value: '——',
        defaultValue: '——',
        isSure: 'false'
    },
    {
        name: 'slotPre',
        description: "input前置内容",
        type: 'String',
        value: '——',
        defaultValue: '——',
        isSure: 'false'
    },
    {
        name: 'slotApp',
        description: "input后置内容",
        type: 'String',
        value: '——',
        defaultValue: '——',
        isSure: 'false'
    },
    {
        name: 'timeRange',
        description: "time的时间段设置",
        type: 'Array',
        value: "例：['09:30:00 - 12:00:00', '14:30:00 - 18:30:00']",
        defaultValue: '——',
        isSure: 'false'
    },
    {
        name: 'showWordLimit',
        description: "elemType为textarea或者input时,是否显示剩余字数",
        type: 'Boolean',
        value: "false|true",
        defaultValue: 'false',
        isSure: 'false'
    },
    {
        name: 'ref',
        description: "表单为upload标识,其他值跟upload组件一模一样",
        type: 'String',
        value: "upload",
        defaultValue: 'upload',
        isSure: 'upload必传,其他不传'
    },
    {
        name: 'rules',
        description: "表单验证方式",
        type: 'Array',
        value: "required 必填 | phone 手机号 | email 邮箱 | idNo 身份证号 | intger 正整数(不包括0) | intgerZero | 正整数(包括0) | number 大于等于0的数字 | bNumber 大于0的数字 | custom 自定义",
        defaultValue: 'upload',
        isSure: 'upload必传,其他不传'
    },
    {
        name: 'onChange',
        description: "表单验证为custom时,可以把自定义的验证写在下边方法里",
        type: 'Function',
        value: "onChange($event, formModel, formData, index) { 详细参照上边代码 }",
        defaultValue: '——',
        isSure: 'false'
    }


    ],
    demoTableModel2: [{
        label: "种类",
        prop: "elemType",
        minWidth: 150,
        align: "left"
    },
    {
        label: "种类说明",
        prop: "description",
        minWidth: 150,
        align: "left"
    },
    {
        label: "类型",
        prop: "type",
        minWidth: 150,
        align: "left"
    },
    ],
    demoTableData2: [{
        elemType: 'select',
        description: '下拉框',
        type: 'String',
        placeholder: '默认提示'
    },
    {
        elemType: 'input',
        description: '输入框',
        type: 'String',
        placeholder: '默认提示'
    },
    {
        elemType: 'textarea',
        description: '文本框',
        type: 'String',
        placeholder: '默认提示'
    },
    {
        elemType: 'radio',
        description: '单选框',
        type: 'String',
        placeholder: '默认提示'
    },
    {
        elemType: 'date',
        description: '日期',
        type: 'String',
        placeholder: '默认提示'
    },
    {
        elemType: 'time',
        description: '时间',
        type: 'String',
        placeholder: '默认提示'
    },
    {
        elemType: 'daterange',
        description: '日期+时间',
        type: 'String',
        placeholder: '默认提示'
    },
    {
        elemType: 'upload',
        description: '上传图片',
        type: 'String',
        placeholder: '默认提示'
    },
    {
        elemType: 'div',
        description: '自定义内容',
        type: 'String',
        placeholder: '默认提示'
    },
    ]
}
export default demoCode;