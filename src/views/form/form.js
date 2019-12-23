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
                maxlength: 20,
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
                elemType: 'slot',
                slot: 'fromslot1',
                labelWidth: 100,
                label: '自定义',
                slotValue: [{
                    url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576737807834&di=45b19807ae2c8f35b70a68366d565254&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fb1cce6f996734bdbb9b3fb9ef7705deabc980e35493b-ysf8BZ_fw658'
                },{
                    url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576737807834&di=45b19807ae2c8f35b70a68366d565254&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fb1cce6f996734bdbb9b3fb9ef7705deabc980e35493b-ysf8BZ_fw658'
                },{
                    url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576737807834&di=45b19807ae2c8f35b70a68366d565254&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fb1cce6f996734bdbb9b3fb9ef7705deabc980e35493b-ysf8BZ_fw658'
                }]
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
                sizeShow: true,
                token: '5753607077759900',
                // uploadUrl:'/ikucun-service/web/distributionExtract/uploadImg',//爱库存的
                uploadUrl: '/manage/attachmentSubdivide/uploadImg',//电商分类
                // uploadUrl: '/v1/upload',//自己的
                imgList: []
            },
            {
                label: '权限配置：',
                labelWidth: 100,
                prop: 'resource',
                elemType: 'tree',
                rules: ['required'],
                ref: 'tree',
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