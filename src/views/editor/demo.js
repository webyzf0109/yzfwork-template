const demoCode = {
    code: `<y-vueEditor :content="content" :width="500" :height="300" :uploadUrl="uploadUrl" :token="token" @updateData="updateData"></y-vueEditor>
      
        //update事件回调示例
        updateData(){
        let c1 = e.replace(/<img width="100%"/g, "<img");
        let c2 = c1.replace(/<img/g, '<img width="100%"');
        let str = c2.replace(/crossorigin="anonymous"/g, "");
        console.log(str)//str即为最终数据
        }`,
    demo_tableData: [
        {
            name: 'content',
            description: '编辑器渲染的内容',
            type: 'String',
            value: '无',
            isTrue: 'true',
        },
        {
            name: 'width',
            description: '编辑器宽度',
            type: 'Number',
            value: '默认为父元素的100%',
            isTrue: 'false',
        },
        {
            name: 'height',
            description: '编辑器高度',
            type: 'Number',
            value: '默认为父元素的100%',
            isTrue: 'false',
        },
        {
            name: 'zIndex',
            description: '编辑器z-index',
            type: 'Number',
            value: '默认:100',
            isTrue: 'false',
        },
        {
            name: 'token',
            description: '编辑器上传图片的token凭证',
            type: 'String',
            value: 'token',
            isTrue: 'false',
        },
        {
            name: 'uploadUrl',
            description: '编辑器上传路径',
            type: 'String',
            value: '示例：/api/upload',
            isTrue: 'true',
        },
        {
            name: 'updateData',
            description: '动态监听编辑器内容变化的事件',
            type: 'Function',
            value: '默认支持微信公众号文章(须在此函数内添加正则,如上图)',
            isTrue: 'true',
        },
    ],
    demo_tableModel: [
        {
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
            label: "是否必填",
            prop: "isTrue",
            minWidth: 60,
            align: "left"
        }
    ]
}

export default demoCode;