<template>
    <div>
        <el-divider></el-divider>
        <el-table ref="singleTable" :data="tableData" tooltip-effect="dark" style="width:80%;margin: 0 auto" @current-change="handleCurrentChange" @row-dblclick="handleRowClick">
        <el-table-column width="55">
            <template scope="scope">
                <!-- radio点击弹出框  开始 -->
                <el-dialog title="更多信息展示" :visible.sync="scope.row.visible" width="30%" :modal="modal" @close="close">
                    <span>姓名</span>
                    <el-divider direction="vertical"></el-divider>
                    <span>{{scope.row.name}}</span>
                    <el-divider></el-divider>

                    <span>描述</span>
                    <el-divider direction="vertical"></el-divider>
                    <span>{{scope.row.description}}</span>

                    <span slot="footer" class="dialog-footer">
                        <el-button @click="cancel(scope.row)">取 消</el-button>
                        <el-button type="primary" @click="confirm(scope.row)">确 定</el-button>
                    </span>
                </el-dialog>
                <!-- radio点击弹出框  结束 -->
                <el-radio class="radio" slot="reference" v-model="radio" :label="scope.row.id" @change.native="toggleRadio(scope.$index,scope.row)">&nbsp;</el-radio>
            </template>
        </el-table-column>
        <el-table-column label="日期" width="120">
            <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
    </div>
</template>

<script>
export default {
    data(){
        return {
            modal: true,
            radio: '0', //默认选中值
            tableData:[{
                id: '1',
                date: '2016-05-02',
                name: '王小虎2',
                address: '上海市普陀区金沙江路 1518 弄',
                description: 'TUIKit (Android)里面会话列表的布局可以自己定义或者有修改的方法吗？SDKAppID是7月19号之前创建的可以用新算法吗？使用eclipse学习字符读写中遇到java.io.FileNotFoundException？',
                visible: false
                }, {
                id: '2',
                date: '2016-05-04',
                name: '王小虎3',
                address: '上海市普陀区金沙江路 1517 弄',
                description: 'TUIKit (Android)里面会话列表的布局可以自己定义或者有修改的方法吗？SDKAppID是7月19号之前创建的可以用新算法吗？使用eclipse学习字符读写中遇到java.io.FileNotFoundException？',
                visible: false
                }, {
                id: '3',
                date: '2016-05-01',
                name: '王小虎1',
                address: '上海市普陀区金沙江路 1519 弄',
                description: 'TUIKit (Android)里面会话列表的布局可以自己定义或者有修改的方法吗？SDKAppID是7月19号之前创建的可以用新算法吗？使用eclipse学习字符读写中遇到java.io.FileNotFoundException？',
                visible: false
                }, {
                id: '4',
                date: '2016-05-03',
                name: '王小虎4',
                address: '上海市普陀区金沙江路 1516 弄',
                description: 'TUIKit (Android)里面会话列表的布局可以自己定义或者有修改的方法吗？SDKAppID是7月19号之前创建的可以用新算法吗？使用eclipse学习字符读写中遇到java.io.FileNotFoundException？',
                visible: false
            }],
             currentRow: {},
           sortOpts:{prop: 'date', order: 'descending'}
        }
    },
    methods: {
        toggleRadio(index,row){
            this.$refs.singleTable.setCurrentRow(row);
            // alert('当前选中数据：'+ (index+1));
            row.visible=!row.visible;
        },
        handleCurrentChange(val){
            this.currentRow = val;
        },
        handleRowClick(row, column, event){
            this.$refs.singleTable.setCurrentRow(row);
            row.visible=!row.visible;
        },
        // 弹出框方法 --开始--
        cancel(row){
            row.visible = false;
            this.radio = '0';
        },
        confirm(row){
            row.visible = false;
            this.radio = '0';
        },
        close(){
            this.radio = '0';
        }
        // 弹出框方法 --结束--
    }
}
</script>