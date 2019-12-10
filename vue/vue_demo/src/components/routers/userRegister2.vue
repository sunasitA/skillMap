<template>
    <div style="width:80%;margin: 0 auto">
        <div style="padding-top:20px">
            <el-divider></el-divider>
        </div>
        <!-- <div>这是用户注册页面。。。{{$route.query.name}}-{{$route.query.id}}想要注册</div> -->
        <el-row :gutter="20">
            <el-col :span="5"><el-input placeholder="请输入姓名" v-model="name" @keyup.enter.native="addUser($event)"></el-input></el-col>
            <el-col :span="4"><el-input-number v-model="age" :min="1" :max="100"></el-input-number></el-col>
            <el-col :span="3">
                <input type="checkbox" v-model="hobby" value="读书">读书</input>
                <input type="checkbox" v-model="hobby" value="运动">运动</input>
            </el-col>
            <el-col :span="6"><el-button type="primary" :disabled="name.length<=0" @click.stop="addUser">追加</el-button></el-col>
            <el-col :span="6"><el-input placeholder="请输入过滤项" v-model="search" v-focus></el-input></el-col>
        </el-row>
        <el-table :data="getUserList()" style="width: 100%" border highlight-current-row>
            <el-table-column prop="id" label="编号" width="140px"></el-table-column>
            <el-table-column prop="name" label="姓名" width="270px"></el-table-column>
            <el-table-column prop="age" label="年龄" width="270px"></el-table-column>
            <el-table-column prop="hobby" label="爱好" width="270px"></el-table-column>
            <el-table-column label="操作" width="433px">
                <template slot-scope="scope">
                    <el-dialog title="确认删除" width="30%" :visible="dialogVisible">
                        <span>确认删除数据1:{{dID}}</span>
                         <span slot="footer" class="dialog-footer">
                            <el-button @click="cancel">取 消</el-button>
                            <el-button type="primary" @click="confirm">确 定</el-button>
                        </span>
                    </el-dialog>
                    <el-button @click.prevent="deleteRow(scope.row.id)" type="text" size="small">移除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
    name: 'userRegister2',
    data() {
        return {
            name: '', //姓名框
            age: 1, //年龄框
            hobby: [], //兴趣多选框
            search: '', //检索框
            maxID: 0, //当前表格使用到的最大的ID
            userList: [], //user表格数据
            dID: 0, //待删除数据
            dialogVisible: false //删除数据弹出的确认框显示与否
        }
    },
    methods: {
        //user表格数据的获取方法
        getUserList() {
            if(this.search === '') {
                return this.userList;
            }
            return this.userList.filter(item => {
                return item.name.includes(this.search) || (new String(item.age)).includes(this.search) || item.hobby.includes(this.search);
            })
        },
        //追加用户
        addUser(e) {
            //enter键，name为空的话，不做任何处理
            if(e.key === "Enter" && this.name === ""){
                return;
            }
            this.getMaxID();
            this.userList.push({
                id: this.maxID + 1,
                name: this.name,
                age: this.age,
                hobby: (this.hobby.length !== 0) ? this.hobby.join(",") : '-'
            });
            this.name = '';
            this.age = 1;
            this.hobby = [];
            this.getUserList();
        },
        //“移除”的响应事件
        deleteRow(dID) {
            this.dialogVisible = true;
            this.dID = dID;
        },
        //删除数据
        delete() {
            return this.userList.some((item, index) => {
                if(this.dID === item.id){
                    this.userList.splice(index, 1);
                    return;
                }
            })
        },
        //获取表格最大的id
        getMaxID() {
            var ids = [];
            if(this.userList.length === 0) {
                this.maxID = 0;
                return;
            }
            this.userList.forEach(item => {
                ids.push(item.id);
            })
            this.maxID = ids.reverse()[0];
        },
        //弹框的cancel
        cancel() {
            this.dialogVisible = false;
        },
        //弹框的删除
        confirm() {
            this.dialogVisible = false;
            this.delete();
        }
    },
    directives: {
        focus: {
            inserted: function(el) {
                el.children[0].focus();
            }
        }
    }
}
</script>

<style scoped>
.el-table {
    margin-top: 10px;
}
</style>