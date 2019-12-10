<template>
    <div>
        <div style="margin-top:20px;text-align:center;">
            <router-link v-for="(route, index) in routers" :key="index" :to="route.to" class="aLink">
                <span :class="[{'currentClass': current === route.name}]" @click="change(route.name)">{{route.label}}</span>
                <el-divider direction="vertical" v-if="routers.length>index+1"></el-divider>
            </router-link>
        </div>
        <div><router-view></router-view></div>
    </div>
</template>
<script>
export default {
    name: 'user',
    data(){
        return{
            current:'',
            routers: [
                {to:'/user/register1', label:'用户创建1', name: 'userRegister1'},
                {to:'/user/register2', label:'用户创建2', name: 'userRegister2'},
                {to:'/user/userList', label:'多选编辑列表', name: 'userList'},
                {to:'/user/radioTable', label:'单选列表', name: 'radioTable'}
            ]
        }
    },
    beforeMount(){
        this.current = this.$route.name;
    },
    methods:{
        change(name){
            this.current = name;
        }
    }
}
</script>

<style scoped>
.currentClass {
    font-size: 1.2em;
    color:#0000FF; 
}
.aLink:link { 
    text-decoration:none; 
} 
.aLink:active {
    color:#0000FF; 
}
</style>