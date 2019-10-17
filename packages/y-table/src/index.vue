<template>
  <div class="ytable">
    <el-table
      :data="tableData"
      :border="border"
      highlight-current-row
      :span-method="merge"
      :stripe="stripe"
      @current-change="handleCurrentChange"
      @selection-change="selectChangeHandler"
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
      ></el-table-column>
      <el-table-column
        :align="col.align"
        :label="col.label"
        v-else-if="col.type === 'index' && col.render === undefined"
        :type="col.type"
        :width="col.width"
        :min-width="col.minWidth"
        :selectable="col.selectable"
      ></el-table-column>
      <el-table-column
        :align="col.align"
        v-else-if="col.type === 'radio' && col.render === undefined"
        :type="col.type"
        :width="col.width"
        :min-width="col.minWidth"
        :label="col.label"
        :selectable="col.selectable"
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
      <el-table-column
        :label="col.label"
        :width="col.width"
        :min-width="col.minWidth"
        v-else-if="col.slot=='operation1'"
      >
        <template slot-scope="scope">
          <slot name="operation1" :scope="scope"></slot>
        </template>
      </el-table-column>
      <el-table-column
        :label="col.label"
        :width="col.width"
        :min-width="col.minWidth"
        v-else-if="col.slot=='operation2'"
      >
        <template slot-scope="scope" v-if="col.slot=='operation2'">
          <slot name="operation2" :scope="scope"></slot>
        </template>
      </el-table-column>
      <el-table-column
        :label="col.label"
        :width="col.width"
        :min-width="col.minWidth"
        v-else-if="col.slot=='operation3'"
      >
        <template slot-scope="scope" v-if="col.slot=='operation3'">
          <slot name="operation3" :scope="scope"></slot>
        </template>
      </el-table-column>
      <el-table-column
        :label="col.label"
        :width="col.width"
        :min-width="col.minWidth"
        v-else-if="col.slot=='operation4'"
      >
        <template slot-scope="scope" v-if="col.slot=='operation4'">
          <slot name="operation4" :scope="scope"></slot>
        </template>
      </el-table-column>
      <el-table-column
        :label="col.label"
        :width="col.width"
        :min-width="col.minWidth"
        v-else-if="col.slot=='operation5'"
      >
        <template slot-scope="scope" v-if="col.slot=='operation5'">
          <slot name="operation5" :scope="scope"></slot>
        </template>
      </el-table-column>
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
    tableWidth: {
      type: [String, Number],
      default() {
        return "100%";
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
.ytable {
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