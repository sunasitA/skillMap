<template>
  <div>
   <input v-model="inputValue" />
   <button @click="ClickHandle">Commit</button>
   <ul>
    <todo-item
      v-for="(item, index) of list"
      :content="item"
      :index="index"
      @delete="DeleteHandle"
    >
    //向子组件传递参数content
    </todo-item>
   </ul>
  </div>
</template>

<script>
import todoItem from './components/todoItem';

export default {
  components: {
    "todo-item": todoItem
  },
  data: function() {
    return {
      inputValue: 'abc',
      list: []
    }
  },
  methods: {
    ClickHandle: function(){
      this.list.push(this.inputValue);
      this.inputValue="";
    },
    DeleteHandle: function(index){
      this.list.splice(index,1);
    }
  }
}
</script>

<style>

</style>
