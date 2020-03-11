import { GMTToStr } from '../../utils/dateFormat.js'
const demoCode = {
  demoDefault: function () {
    return `  //html部分
  <y-table :tableData="demo_tableData" :tableModel="demo_tableModel" :defaultSort="{prop: 'create_time', order: 'descending'}" @sortChange="sortChange">
    <template slot="operation1" slot-scope="scope">
      <el-tag>{{scope.scope.row.Category.category_name}}</el-tag>
    </template>
    <template slot="operation2" slot-scope="scope">
      <img width="80" :src="scope.scope.row.url" alt />
    </template>
  </y-table>
  //js部分
  demo_tableData: [
    {
      Category:{
        category_name: "ins风插件植脂"
      },
      category_type: 1,
      create_time: "2019-11-18T08:20:02.000Z",
      delete_time: null,
      id: 21,
      name: "测试商品001",
      update_time: "2019-11-18T08:20:02.000Z",
      url: "http://qiniu.yyyzf.xyz/2a91177135be5.jpg",
    },
    {
      Category:{
        category_name: "ins风插件植脂2"
      },
      category_type: 1,
      create_time: "2019-11-19T08:20:02.000Z",
      delete_time: null,
      id: 21,
      name: "测试商品0020",
      update_time: "2019-11-18T08:20:02.000Z",
      url: "http://qiniu.yyyzf.xyz/2a91177135be5.jpg",
    },
  ],
  demo_tableModel: [
    {
      type: "index",
      label: "序号",
      width: 50,
      align:'center'
    },
    {
      slot: "operation1",
      label: "商品类型",
      minWidth: 100,
    },
    {
      label: "商品名称",
      prop: "name",
      minWidth: "100"
    },
    {
      slot: "operation2",
      label: "商品图片",
      minWidth: 100
    },
    {
      label:'创建时间',
      prop: "create_time",
      minWidth:100,
      sortable:true,
      //GMTToStr是定义好的一个时间转换函数 参数(转换格式，时间戳)
      formatter(row, col, colVal) { return  GMTToStr('yyyy-MM-dd hh:mm:ss', new Date(colVal))   },

    },
    {
      label: "操作",
      minWidth: 150,
      render: (h, params) => {
        return [
          h(
            "a",
            {
              //  class 跟 attrs可以自定义,下面演示的是工作中常用样式 如果是编辑的样式用的时候直接copy
              class: {
                "link-type": true
              },
              attrs: {
                href: "javascript:;"
              },
              on: {
                click: () => {
                  alert('修改')
                }
              }
            },
            "修改"
          ),
          h(
            "a",
            {
              class: {
                "link-type": true
              },
              attrs: {
                href: "javascript:;"
              },
              on: {
                click: () => {
                  alert('删除')
                }
              }
            },
            "删除"
          )
        ];
      }
    }
  ]
    `},
  demoTableData: [
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
      description: "全选的事件回调",
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
      description: '针对于复杂的横列内容推出的render',
      type: "Object | Array",
      value: "一般用于编辑内容 （修改/删除等）",
      defaultValue: '——',
      isSure: 'false'
    },
    {
      name: "defaultSort",
      description: '针对某一列排序的默认排序设置',
      type: "Object",
      value: "例如：{prop: 'create_time', order: 'descending'}",
      defaultValue: 'order的值油两个：descending/ascending  默认值是ascending',
      isSure: 'false'
    },
    {
      name: "sortChange",
      description: '针对某一列排序的默认排序设置的事件监听',
      type: "Function",
      value: "column, prop, order ",
      defaultValue: 'order的值油两个：descending/ascending  默认值是ascending',
      isSure: 'false'
    },
    {
      name: "rowKey",
      description: "行数据的 Key，用来优化 Table 的渲染；在使用 reserve-selection 功能与显示树形数据时，该属性是必填的。类型为 String 时，支持多层访问：user.info.id，但不支持 user.info[0].id，此种情况请使用 Function",
      type: "Function(row)/String",
      value: ``,
      defaultValue: `''`,
      isSure: `false`
    },
  ],
  demoTableModel: [
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
  demoTableModel2: [
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
  demoTableData2: [
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
    {
      name: "sortable",
      description: "列排序",
      type: "Boolean",
      value: `true | false`,
      defaultValue: "——",
      isSure: `false`
    },
    {
      name: "isReserve",
      description: "仅对 type=selection 的列有效，类型为 Boolean，为 true 则会在数据更新之后保留之前选中的数据（需指定 row-key）",
      type: "Boolean",
      value: `true | false`,
      defaultValue: "——",
      isSure: `false`
    },
  ],
  demo_tableData: [
    {
      Category: {
        category_name: "ins风插件植脂"
      },
      category_type: 1,
      create_time: "2019-11-18T08:20:02.000Z",
      delete_time: null,
      id: 21,
      name: "测试商品001",
      update_time: "2019-11-18T08:20:02.000Z",
      url: "http://qiniu.yyyzf.xyz/2a91177135be5.jpg",
    },
    {
      Category: {
        category_name: "ins风插件植脂2"
      },
      category_type: 1,
      create_time: "2019-11-19T08:20:02.000Z",
      delete_time: null,
      id: 21,
      name: "测试商品002",
      update_time: "2019-11-18T08:20:02.000Z",
      url: "http://qiniu.yyyzf.xyz/2a91177135be5.jpg",
    },
  ],
  demo_tableModel: [
    {
      type: "index",
      label: "序号",
      width: 50,
      align: 'center'
    },
    {
      slot: "operation1",
      label: "商品类型",
      minWidth: 100,
    },
    {
      label: "商品名称",
      prop: "name",
      minWidth: "100"
    },
    {
      slot: "operation2",
      label: "商品图片",
      minWidth: 100
    },
    {
      label: '创建时间',
      prop: "create_time",
      sortable: true,
      minWidth: 100,
      formatter(row, col, colVal) { return GMTToStr('yyyy-MM-dd hh:mm:ss', new Date(colVal)) }
    },
    {
      label: "操作",
      minWidth: 150,
      render: (h, params) => {
        return [
          h(
            "a",
            {
              class: {
                "link-type": true
              },
              attrs: {
                href: "javascript:;"
              },
              on: {
                click: () => {
                  alert('修改')
                }
              }
            },
            "修改"
          ),
          h(
            "a",
            {
              class: {
                "link-type": true
              },
              attrs: {
                href: "javascript:;"
              },
              on: {
                click: () => {
                  alert('删除')
                }
              }
            },
            "删除"
          )
        ];
      }
    }
  ]
}
export default demoCode;