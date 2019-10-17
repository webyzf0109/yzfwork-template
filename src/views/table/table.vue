<template>
  <div class="table-box">
    <y-table
      :tableData="tableData"
      :tableModel="tableModel"
      :border="border"
      :stripe="stripe"
      rowKey="id"
      :tableWidth="tableWidth"
      @selectionChange="selectChange"
    >
      <template slot="operation1" slot-scope="scope">
        <img class="img" :src="scope.scope.row.url" alt />
      </template>
      <template slot="operation2" slot-scope="scope">
        <span>aaaa</span>
      </template>
    </y-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      border: true,
      stripe:true,
      tableWidth:'100%',
      tableData: [
        {
          id: 1,
          name: "admin",
          password: "e9bc0e13a8a16cbb07b175d92a113126",
          status: 1,
          updateTime: "2019-09-19 16:19:43",
          updaterId: 1,
          url:
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1130583636,2033493811&fm=26&gp=0.jpg"
        },
        {
          id: 4,
          name: "123",
          password: "f5bb0c8de146c67b44babbf4e6584cc0",
          status: 3,
          updateTime: "2019-10-16 20:52:19",
          updaterId: 1,
          createTime: "2019-10-12 18:39:32",
          creatorId: 1,
          url:
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1130583636,2033493811&fm=26&gp=0.jpg"
        }
      ],
      tableModel: [
        {
          type: "selection",
          width: 50
        },
        {
          label: "序号",
          type: "index",
          width: 50
        },
        {
          prop: "name",
          label: "用户名",
          width: 100
        },
        {
          prop: "status",
          label: "员工状态",
          width: 120,
          formatter(row, col, colVal) {
            return colVal == 1 ? "正常" : "被禁用";
          }
        },
        {
          prop: "updateTime",
          label: "上次登录时间",
          width: 150
        },
        {
          prop: "createTime",
          label: "创建时间",
          width: 150
        },
        {
          slot: "operation1",
          width:100,
          label: "图片"
        },
        {
          slot: "operation2",
          width:100,
          label: "slot2"
        },
        {
          label: "操作",
          minWidth:150,
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
                      this.clickEvents(params);
                    }
                  }
                },
                "编辑"
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
                      this.clickEvents(params);
                    }
                  }
                },
                params.row.status == 1 ? "禁用" : "恢复"
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
                      this.clickEvents(params);
                    }
                  }
                },
                "删除"
              )
            ];
          },
        }
      ]
    };
  },
  methods: {
    selectChange(selections) {
      console.log(selections, "selections");
    },
    clickEvents(params) {
      console.log(params);
    },
    edit(params) {
      console.log(params);
    }
  }
};
</script>
<style lang="less" scoped>
.table-box {
  .img {
    width: 80px;
    height: 60px;
  }
}
</style>