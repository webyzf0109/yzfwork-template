<template>
  <div class="y-table">
    <el-table
      :data="tableData"
      :border="border"
       highlight-current-row
       ref="table"
      :span-method="merge"
      :stripe="stripe"
      :default-sort="defaultSort"
      :row-key="rowKey"
      @current-change="handleCurrentChange"
      @selection-change="selectChangeHandler"
      @sort-change="sortChange"
      :style="{width: tableWidth+'px'}"
    >
      <el-table-column
        v-for="(col,index) in tableModel"
        :prop="col.prop"
        :label="col.label"
        :align="col.align"
        :key="col.prop"
        :width="col.width"
        :min-width="col.minWidth"
        :sortable="col.sortable"
        :formatter="col.formatter"
        v-if="col.render === undefined && col.type === undefined && col.slot === undefined"
      ></el-table-column>
      <el-table-column
        :align="col.align"
        v-else-if="col.type === 'selection' && col.render === undefined"
        :type="col.type"
        :width="col.width"
        :min-width="col.minWidth"
        :selectable="col.selectable"
        :reserve-selection="col.isReserve"
      ></el-table-column>
      <el-table-column
        :align="col.align"
        :label="col.label"
        v-else-if="col.type === 'index' && col.render === undefined"
        :type="col.type"
        :width="col.width"
        :min-width="col.minWidth"
      ></el-table-column>
      <el-table-column
        :align="col.align"
        v-else-if="col.type === 'radio' && col.render === undefined"
        :type="col.type"
        :width="col.width"
        :min-width="col.minWidth"
        :label="col.label"
      >
        <template slot-scope="scope">
          <el-radio v-model="curRowKey" :label="scope.row[rowKey]">&nbsp;</el-radio>
        </template>
      </el-table-column>
      <el-table-column
        v-else-if="col.type === undefined && col.render !== undefined"
        :label="col.label"
        :id="col.prop"
        :align="col.align"
        :width="col.width"
        :min-width="col.minWidth"
        :sortable="col.sortable"
        :key="col.prop"
      >
        <template slot-scope="scope">
          <v-render
            :render="col.render"
            :row="scope"
            :column="scope.row.column"
            :index="scope.row.$index"
          ></v-render>
        </template>
      </el-table-column>

      <template
          v-for="(item, index) in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]"
        >
          <el-table-column
            :show-overflow-tooltip="iSTooltip ? iSTooltip : col.iSTooltip"
            :fixed="col.fixed"
            :key="col.prop"
            :align="col.align"
            :label="col.label"
            :width="col.width"
            :min-width="col.minWidth"
            :sortable="col.sortable"
            v-if="col.slot == 'operation' + (index + 1)"
          >
            <template slot-scope="scope">
              <slot :name="'operation' + (index + 1)" :scope="scope"></slot>
            </template>
          </el-table-column>
        </template>
     
    </el-table>
  </div>
</template>

<script>
import render from "./expand";
export default {
  name: "y-table",
  data() {
    return {
      curRowKey: ""
    };
  },
  props: {
    rowKey:{
      type: [String, Function],
      default() {
        return "";
      }
    },
    tableWidth: {
      type: [String, Number],
      default() {
        return "100%";
      }
    },
    defaultSort: {
      type: [Object],
      default() {
        return {};
      }
    },
    stripe: {
      type: Boolean,
      default() {
        return true;
      }
    },
    tableData: {
      type: Array,
      default() {
        return [];
      }
    },
    tableModel: {
      type: Array,
      default() {
        return [];
      }
    },
    border: {
      type: Boolean,
      default() {
        return true;
      }
    },
    rowKey: {
      type: [String, Number],
      default() {
        return "id";
      }
    },
    selectionChange: {
      type: Function,
      default() {
        return "";
      }
    },
    merge: {
      type: Function,
      default() {
        return function() {
          return { rowspan: 1, colspan: 1 };
        };
      }
    }
  },
  created() {},
  methods: {
    // 复选框发生变化的时候
    selectChangeHandler(selections) {
      if (!selections) {
        return;
      }
      this.$emit("selectionChange", selections);
    },
    sortChange(column, prop, order ){
      this.$emit("sortChange", column, prop, order );
    },
    /**设置默认选中项 */
    toggleSelection(rows,selected=true) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.table.toggleRowSelection(row,selected);
        });
      } else {
        this.$refs.table.clearSelection();
      }
    },
    /**清空选中的值 */
    clearSelect () {
      this.$refs.table.clearSelection()
    },
    // 单选发生变化的时候
    handleCurrentChange(row) {
      if (!row) {
        return;
      }
      this.curRow = row;
      this.curRowKey = row[this.rowKey];
      this.$emit("currentChange", row);
    }
  },
  components: {
    "v-render": render
  }
};
</script>

<style lang="less"  scoped>
.y-table {
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, SimSun, sans-serif;
  .el-table {
    font-size: 12px;
  }
  a {
    text-decoration: none;
  }
  .link-type {
    color: #409eff;
    padding: 0 5px;
    cursor: pointer;
  }
}
</style>