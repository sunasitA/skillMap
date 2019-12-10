<template>
    <div>
        <el-button @click="visible = true">Button</el-button>
        <el-dialog :visible.sync="visible" title="Hello world">
            <p>Try Element</p>
        </el-dialog>
        <div :class="{'redClass': show}">container1</div>
        <div :class="showClass">container2</div>
        <div :class="['redClass', 'fontClass']">container3</div>
        <div :class="[show? 'redClass' : '', 'fontClass']">container4</div>

        <!-- <ul :class="ulCss">
            <li>menu1</li>
            <li class="li">menu2</li>
            <li>menu4</li>
        </ul> -->

        <div class="box">
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
        </div>

        <div>{{$store.state.count}}</div>
        <div>{{$store.getters.doubleCount}}</div>
        <div>{{$store.getters.sanCount}}</div>
        <el-button @click="add">升高</el-button>

        <el-row :gutter="20">
            <el-col :span="6"><div>1</div></el-col>
            <el-col :span="6"><div>2</div></el-col>
            <el-col :span="6"><div>3</div></el-col>
            <el-col :span="6"><div>4</div></el-col>
        </el-row>

        <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>

        <el-dialog
        :visible="dialogVisible"
        width="30%"
        :show-close="false"
        :close-on-click-modal="false"
        :before-close="handleClose">
            <template slot="title">
                <span class="el-icon-info"> 提示</span>
                <el-divider></el-divider>
            </template>
            <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
                <el-divider></el-divider>
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>

        <el-table :data="tableData" border>
             <el-table-column v-for="(value, key) in tableLabels" :prop="key" :label="value" :key="key" width="180"></el-table-column>
        </el-table>

        <parent :age.sync="age1"></parent>
        <parent :parentData.sync="parentData"></parent>
    </div>
</template>
<script>
import parentComponent from '../routers/backup/parentComponent'

export default {
    name: 'home',
    components: {
        'parent': parentComponent
    },
    data: function() {
        return {
            visible: false,
            show: true,
            showClass: {
                redClass: true
            },
            ulCss: 'ulCss',
            parentData: {
                name: 'papa',
                age: 31
            },
            age1: 31,
            dialogVisible: false,
            tableLabels: {
                date: '日期',
                name: '姓名',
                address: '地址'
            },
            tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
            }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
            }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
            }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
        }
    },
    mounted: function () {
        this.show = false;
        this.showClass = {
            redClass: this.show
        }
    },
    methods: {
        add() {
            this.$store.commit('increment');
        },
        handleClose(done) {
            this.$confirm('确认关闭？')
            .then(_ => {
                this.dialogVisible = false;
                done();
            })
            .catch(_ => {});
      }
    }
}
</script>

<style scoped>
.redClass {
    color: red;
}
.fontClass {
    font-size: 20px;
    text-decoration: underline;
}
/* .ulCss {
    display: flex;
    flex-direction: row;
    height: 20px;
    border: 1px solid lightgray;
} */
/* .ulCss li {
    list-style-type: none;
    text-align: center;
    width: 100px;
    border-right: 1px solid lightgray;
}
.ulCss .li {
    flex: 1;
} */
.box {
    display: flex;
    justify-content: center;
}
.item {
    height: 30px;
    flex: 1;
    margin-right: 5px;
    background: gray;
}

.el-row {
    margin-bottom: 20px;
    /* &:last-child {
      margin-bottom: 0;
    } */
  }
  .el-col {
    border-radius: 4px;
    text-align: center;
    padding-right: 5px !important;
  }
  .el-col div {
    background: #d3dce6;
    border-radius: 4px;
    min-height: 36px;
    line-height: 36px;
    vertical-align: middle;
  }
  .el-icon-info{
      color:green
  }
</style>
