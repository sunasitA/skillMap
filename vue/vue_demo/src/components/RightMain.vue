<template>
  <div class="right">
    <div style="margin-top:20px;">
      <router-link to="/home">首页</router-link>
      <el-divider direction="vertical"></el-divider>
      <router-link to="/user/userList">用户管理</router-link>
    </div>
    <el-divider></el-divider>
    <div>
      <router-view></router-view>
      <div>{{leftDataFromParent}}</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'RightMain',
  props: ['leftDataFromParent']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .right{
    flex: 3;
    border: 1px solid gray;
    margin-left: 5px;
    text-align: center;
  }
</style>
