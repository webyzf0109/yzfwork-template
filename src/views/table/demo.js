const demoCode = {
    demoDefault: function () {
        return `   /**main.js 引用***/
    import yzfwork from 'yzfwork;
    vue.use(yzfwork); 
    /*****  使用 ***/
    <y-table
     :tableData="tableData"
     :tableModel="tableModel"
     :border="border"
     :stripe="stripe"
     rowKey="id"
     :tableWidth="tableWidth"
     @selectionChange="selectChange">
       <template slot="operation1" slot-scope="scope">
        <img class="img" :src="scope.scope.row.url" alt />
       </template>
       <template slot="operation2" slot-scope="scope">
        <span>slot测试内容2</span>
       </template>
    </y-table>
    /***render 例子（类同iview的render）**/
    render: (h, params) => {
        return [
          h(
            "a",
            {
              class: {  //工作中常用样式 用的时候直接copy
                "link-type": true
              },
              attrs: {  //定义的属性 驼峰式
                href: "javascript:;"
              },
              on: {  //render的事件
                click: () => {
                  this.clickEvents(params);
                }
              }
            },
            "编辑"
          ),
        ]
    }
    `},
    demoTableData:[
        {
          name: "tableData",
          description: "表格的基础数据",
          type: "Array",
          value: "——",
          defaultValue: "——",
          isSure: `true`
        },
        {
          name: "tableModel",
          description: "表格的数据模型（表头信息）",
          type: "Array",
          value: "——",
          defaultValue: "——",
          isSure: `true`
        },
        {
          name: "border",
          description: "表格边框",
          type: "Boolean",
          value: "true,false",
          defaultValue: "true",
          isSure: `false`
        },
        {
          name: "stripe",
          description: "表格斑马纹",
          type: "Boolean",
          value: "true,false",
          defaultValue: "true",
          isSure: `false`
        },
        {
          name: "rowKey",
          description: "列表数据的主键",
          type: "String",
          value: "有单选/多选/全选的时候必须添",
          defaultValue: "id",
          isSure: `false`
        },
        {
          name: "tableWidth",
          description: "表格的宽度",
          type: "Number",
          value: "除了默认值为String,其他值都为Number",
          defaultValue: "100%",
          isSure: `false`
        },
        {
          name: "selectionChange",
          description: "全选的时间回调",
          type: "Function",
          value: "raadio/selection都触发此事件",
          defaultValue: "100%",
          isSure: `false`
        },
        {
          name: "selectable",
          description:
            "仅对 type=selection 的列有效，类型为 Function，Function 的返回值用来决定这一行的 CheckBox 是否可以勾选",
          type: "Function(row, index)",
          value: "——",
          defaultValue: "——",
          isSure: `false`
        },
        {
          name: "slot",
          description: "针对于复杂的横列内容推出的自定义",
          type: "String",
          value:
            "operation1 | operation2 | operation3 | operation4 | operation5",
          defaultValue:
            "推荐从1开始,目前最多支持5个,会比之前多一层scope,例如：scope.scope.row.value",
          isSure: `false`
        },
        {
          name: "render",
          description:'针对于复杂的横列内容推出的render',
          type:"Object | Array",
          value:"一般用于编辑内容 （修改/删除等）",
          defaultValue:'——',
          isSure:'false'
        }
      ],
      demoTableModel:[
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
      demoTableModel2:[
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
      demoTableData2:[
        {
          name: "label",
          description: "表头信息",
          type: "String",
          value: "——",
          defaultValue: "——",
          isSure: `true`
        },
        {
          name: "prop",
          description: "表头关联的字段",
          type: "String",
          value: "——",
          defaultValue: "——",
          isSure: `true`
        },
        {
          name: "width",
          description: "该字段的宽度",
          type: "Number",
          value: "——",
          defaultValue: "——",
          isSure: `false`
        },
        {
          name: "minWidth",
          description: "该字段的最小宽度",
          type: "Number",
          value: "——",
          defaultValue: "——",
          isSure: `false`
        },
        {
          name: "align",
          description: "该字段内容的对齐方式",
          type: "String",
          value: "left | center | right",
          defaultValue: "——",
          isSure: `false`
        },
        {
          name: "formatter",
          description: "格式化该字段内容",
          type: "Function(h, params)",
          value: `formatter(row, col, colVal) {
            return colVal == 1 ? "正常" : "被禁用";
          }`,
          defaultValue: "——",
          isSure: `false`
        },
        {
          name: "render",
          description: "复杂内容时(常用于编辑)",
          type: "Function(h, params)",
          value: `上面的例子`,
          defaultValue: "——",
          isSure: `false`
        },
      ],
}
export default demoCode;