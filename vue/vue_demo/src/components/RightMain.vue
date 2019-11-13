<template>
  <div class='right'>
    <router-link to="/home">首页</router-link>
    <router-link to="/user">用户页面</router-link>
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
  }
</style>
