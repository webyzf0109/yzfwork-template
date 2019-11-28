class formData {
    constructor() {
        this.formModel = [
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
                    formModel[index].rules = rules.concat([newRule]);
                }
            },
            {
                elemType: "div",
                slot: "下级用户购买产生的佣金比例，范围0%--100%",
                labelWidth: "0px",
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
                sizeShow:false,
                uploadUrl: '/v1/upload',
                uploadUrl:'/ikucun-service/web/distributionExtract/uploadImg',
                imgList: []
            }

        ]
    }
    tofixed(x) {
        var f = parseFloat(x);
        if (isNaN(f)) {
            return false;
        }
        var f = Math.round(x * 100) / 100;
        var s = f.toString();
        var rs = s.indexOf(".");
        if (rs < 0) {
            rs = s.length;
            s += ".";
        }
        while (s.length <= rs + 2) {
            s += "0";
        }
        return s;
    }
}

let obj = new formData();
export default obj;