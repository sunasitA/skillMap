<template>
    <!-- <div>这是用户登陆页面。。。。{{$route.params.name}}-{{$route.params.id}}登陆了</div> -->
    <div style="padding-top:20px">
    <el-form ref="ruleForm" label-width="100px" class="demo-ruleForm">
         <el-form-item label="名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="市内" prop="delivery">
            <el-switch v-model="ruleForm.delivery"></el-switch>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm()">创建</el-button>
            <el-button @click="resetForm()">重置</el-button>
        </el-form-item>
    </el-form>

    <el-table :data="userList" style="width: 100%; padding-left:50px" @selection-change="checkedFn">
      <el-table-column type="selection" width="55">
    </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="delivery" label="市内人?" width="180"></el-table-column>
      <el-table-column label="操作" width="100">
        <template slot-scope="scope">
            <el-button @click="deleteUser(scope.row)" type="text" size="small">删除</el-button>
        </template>
    </el-table-column>

    </el-table>
    </div>
</template>
<script>
export default {
    name: 'userLogin',
    data: function(){
        return {
            ruleForm: {
                name: '',
                delivery: false
            },
            userList: []
        }
    },
    methods: {
        submitForm: function (userList) {
            var cgdRuleForm = {};
            Object.keys(this.ruleForm).forEach((key)=>{
                cgdRuleForm[key] = typeof this.ruleForm[key] === 'boolean' ? this.ruleForm[key] === true ? '市内人': '不是市内人' : this.ruleForm[key]
            })
            this.userList.push(cgdRuleForm);
            this.ruleForm = {
                name: '',
                delivery: false
            }
        },
        resetForm: function () {
            this.ruleForm = {
                name: '',
                delivery: false
            }
        },
        deleteUser: function (dUser) {
            var dIndex;
            this.userList.forEach((user, index) => {
                if (dUser.name === user.name) {
                    dIndex = index;
                }
            });
            (typeof dIndex === 'number') && this.userList.splice(dIndex,1);
        },
        checkedFn: function (val) {
            console.log(val);
        }
    }
}
</script>