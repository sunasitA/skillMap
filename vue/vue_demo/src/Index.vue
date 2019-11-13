<template>
  <div class='index'>
    <left-tree 
      :bcolor='bcolor'
      v-model='fcolor'
      v-on:passColor2Parent='colorChanged'
      v-on:passLeftData='getLeftData'
    >
      这是左侧导航
    </left-tree>
    <right-main
      :leftDataFromParent = 'ld'
    >
    </right-main>
  </div>
</template>

<script>
import LeftTree from '@/components/LeftTree'
import RightMain from '@/components/RightMain'
export default {
  name: 'Index',
  data: function(){
    return {
      bcolor: '#0787aa',
      fcolor: 'white',
      ld: ''
    }
  },
  methods: {
    colorChanged: function(bcolor, fcolor) {
      console.log(bcolor + ' ' +fcolor);
    },
    getLeftData: function(leftData) {
      this.ld = leftData;
    }
  },
  components: {
    'left-tree': LeftTree,
    'right-main': RightMain
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  *{
    margin-left: 6px;
  }
  .index {
    display: flex;
    flex-direction: row;
    height: 98vh;
    width: 98vw;
  }
</style>
