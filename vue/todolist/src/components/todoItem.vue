<template>
 <li @click="handleClick">
    {{content}}
 </li>
</template>

<script>
//子组件用props接收父组件传递的参数
export default {
  props:  ['content', 'index'],
  methods: {
      handleClick: function(){
          this.$emit('delete', this.index);
      }
  }
}
</script>

<style>

</style>
