<template>
  <div class='left' :style="{ backgroundColor: colorVal, color: fontColor}">
    <slot></slot>
    <button @click="cgColor">改变背景</button>
    <div>{{leftData}}</div>
  </div>
</template>

<script>
import {isPrimitive} from '../util.js'
// import isPrimitive from '../util.js' 方法的引入没有加{},报错Object(...) is not a function  at VueComponent.created
export default {
  name: 'LeftTree',
  props: ['bcolor', 'value'],
  data: function(){
    return {
      colorVal: this.bcolor,
      fontColor: this.value,
      leftData: '我是left中的data值'
    }
  },
  methods: {
    cgColor: function(){
      this.colorVal = (this.colorVal === 'lightgrey') ? '#0787aa' : 'lightgrey';
      this.fontColor = (this.colorVal === 'lightgrey') ? 'black' : 'white';
      this.$emit('passColor2Parent', this.colorVal, this.fontColor);
      this.$emit('passLeftData', this.leftData);
    }
  },
  created (){
      // alert( isPrimitive(11) );
  }
}
</script>

<style scoped>
  .left{
    flex: 1;
    border: 1px solid gray;
    color: white;
  }
</style>
