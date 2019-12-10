<template>
<div>
  <el-divider></el-divider>
  <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    border
    @select="handleSelection"
    @select-all="selectAll"
    :row-class-name="tableRowClassName"
    :row-style="rowStyle"
    @cell-dblclick="cellClick"
    >
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      label="日期"
      width="200"
      column-key="date">
      <template slot-scope="scope">
        <span v-if="!scope.row.dateEditable">{{ scope.row.date }}</span>
        <el-input placeholder="请输入内容" v-model="scope.row.date" v-if="scope.row.dateEditable" @blur="blurFn"></el-input>
      </template>
    </el-table-column>

    <el-table-column
      label="名称"
      width="200"
      column-key="name">
      <template slot-scope="scope">
        <span v-if="!scope.row.nameEditable">{{ scope.row.name }}</span>
        <el-input placeholder="请输入内容" v-model="scope.row.name" v-if="scope.row.nameEditable" @blur="blurFn"></el-input>
      </template>
    </el-table-column>

    <el-table-column
      label="地址"
      column-key="address">
      <template slot-scope="scope">
        <span v-if="!scope.row.addressEditable">{{ scope.row.address }}</span>
        <el-input placeholder="请输入内容" v-model="scope.row.address" v-if="scope.row.addressEditable" @blur="blurFn"></el-input>
      </template>
    </el-table-column>
  </el-table>
</div>
</template>

<script>
  export default {
    data() {
      return {
        name: "userList",
        tableData: [{
          id:0,
          date: '2016-05-03',
          dateEditable: false,
          name: '张三',
          nameEditable: false,
          address: '南京',
          addressEditable: false
        }, {
          id:1,
          date: '2016-05-02',
          dateEditable: false,
          name: '张三',
          nameEditable: false,
          address: '南京',
          addressEditable: false
        }, {
          id:2,
          date: '2016-05-04',
          dateEditable: false,
          name: '张三',
          nameEditable: false,
          address: '南京',
          addressEditable: false
        }, {
          id:3,
          date: '2016-05-01',
          dateEditable: false,
          name: '张三',
          nameEditable: false,
          address: '南京',
          addressEditable: false
        }, {
          id:4,
          date: '2016-05-08',
          dateEditable: false,
          name: '张三',
          nameEditable: false,
          address: '南京',
          addressEditable: false
        }, {
          id:5,
          date: '2016-05-06',
          dateEditable: false,
          name: '张三',
          nameEditable: false,
          address: '南京',
          addressEditable: false
        }, {
          id:6,
          date: '2016-05-07',
          dateEditable: false,
          name: '张三',
          nameEditable: false,
          address: '南京',
          addressEditable: false
        }],
        multipleSelection: [],
        numbers: []
      }
    },
    methods: {
      handleSelection(val, row) {//逐条选择
          this.tableData.forEach((item, i) => {
            if (item.id == row.id) {
                if (this.numbers.indexOf(i) == -1) {
                    this.numbers.push(i);
                } else {
                    this.numbers.splice(this.numbers.indexOf(i), 1);
                }
            }
        });
      },
      selectAll(selection) {//全部选中
          this.numbers = [];
          selection.forEach(row => this.numbers.push(row.id));
      },
      tableRowClassName({ row, rowIndex }) {
        let color = "";
        if(rowIndex%2 === 1){//条纹设置
              color += "striped-row";
        }
        this.numbers.forEach((r, i) => {
            if (rowIndex === r) {
                color = "warning-row";
            }
        });
        return color;
      },
      rowStyle({ row, rowIndex }) {
        if(rowIndex %2 === 0) {
          return "background: lightgreen";
        }else{
          return ""
        }
      },
      cellClick(row, column, cell, event) {
        switch(column.columnKey) {
          case 'date':
            row.dateEditable = !row.dateEditable;
            break;
          case 'name':
            row.nameEditable = !row.nameEditable;
            break;
          case 'address':
            row.addressEditable = !row.addressEditable;
            break;             
        }
      },
      blurFn({ row, rowIndex }){
        this.tableData.forEach(row=>{
          row.dateEditable = false;
          row.nameEditable = false;
          row.addressEditable = false;
        });
      }
    }
  }
</script>

<style scoped>
.el-table >>> .warning-row {
  text-decoration: line-through;
}

.el-table >>> .striped-row {
  background: lightgray;
}
</style>