const demoCode = {
    defaultCode() {
        return `<y-tree :data="data" :defaultCheckedData="defaultCheckedData" @checkedChange="checkedChange"></y-tree>

        //js部分
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
          defaultCheckedData: [1, 2, 3, 4, 5, 6, 7],
          //事件
          checkedChange(val){
            console.log(所有选出的id)
          }
        `
    },
    tableData(){
        return [
            {
                name:'data',
                description:'初始数据',
                type:'Array',
                defaultValue:'[]',
                isSure:'true',
            },
            {
                name:'defaultCheckedData',
                description:'默认选中的数据',
                type:'Array',
                defaultValue:'[]',
                isSure:'false',
            },
            {
                name:'allCheckedShow',
                description:'是否需要全选',
                type:'Boolean',
                defaultValue:'true',
                isSure:'false',
            },
            {
                name:'defaultProps',
                description:'数据格式的字段名',
                type:'Object',
                defaultValue:'{children: "list",label: "name"}',
                isSure:'false',
            },
            {
                name:'checkedChange',
                description:'权限树节点变化的监听事件',
                type:'Function',
                defaultValue:'返回选中的数据的id',
                isSure:'true',
            }
            
        ]
    },

    tableModel(){
        return [
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
        ]
    },

}
export default demoCode;