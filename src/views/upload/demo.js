const demoCode = {
    demoDefault: function () {
        return `   /**main.js 引用***/
    import yzfwork from 'yzfwork;
    vue.use(yzfwork); 
    /*****  使用 ***/
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
      @uploadChildSay="uploadChildSay">
    </y-upload>
    `
    },
    demoTableData: [{
            name: "imgList",
            description: "图片的原始数据",
            type: "Array",
            value: "示例：[{imgPath:'https://www.baidu.com'}]",
            defaultValue: "[]",
            isSure: `true`
        },
        {
            name: "imgName",
            description: "图片原始信息中键值对的'键'",
            type: "String",
            value: "示例：imgPath | url",
            defaultValue: "imgPath",
            isSure: `false`
        },
        {
            name: "width",
            description: "图片显示宽度",
            type: "Number",
            value: "示例：60 | 100",
            defaultValue: "60",
            isSure: `false`
        },
        {
            name: "height",
            description: "图片显示高度",
            type: "Number",
            value: "示例：60 | 100",
            defaultValue: "60",
            isSure: `false`
        },
        {
            name: "sizeWidth",
            description: "图片实际尺寸宽度",
            type: "Number",
            value: "示例：60 | 100",
            defaultValue: "60",
            isSure: `false`
        },
        {
            name: "sizeHeight",
            description: "图片实际尺寸高度",
            type: "Number",
            value: "示例：60 | 100",
            defaultValue: "60",
            isSure: `false`
        },

        {
            name: "uploadUrl",
            description: "图片上传地址",
            type: "String",
            value: "示例：/api/upload",
            defaultValue: "——",
            isSure: `true`
        },
        {
            name: "uploadChildSay",
            description: '图片上传成功回调',
            type: "Function",
            value: "一般用于编辑内容 （修改/删除等）",
            defaultValue: '——',
            isSure: 'false'
        }
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
            minWidth: 60,
            align: "left"
        }
    ],
}
export default demoCode;