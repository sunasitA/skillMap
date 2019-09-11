<template>
<div class="container">
    <div class="btn-group">
        <input class="form-control" v-model="inputValue" />
        <button class="btn btn-info" @click="ClickHandle">Commit</button>
    </div>
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

   <div class="label label-primary" v-show="repeated">{{inputValue}}已被加入到todo列表</div>
   <div class="label label-primary" v-if="count>0">你有{{count}}个todo</div>
   <div class="label label-primary" v-else-if="count==0">添加todo项</div>
   <div class="label label-primary" v-else>no todos</div>
</div>
</template>

<script>
import todoItem from '../components/todoItem';
export default {
  components: {
    "todo-item": todoItem
  },
  data: function() {
    return {
      inputValue: 'abc',
      list: [],
      count: 0,
      repeated: false 
    }
  },
  methods: {
    ClickHandle: function() {
      if(this.inputValue == "" || this.repeated) {
        return false;
      }
      this.list.push(this.inputValue)
      this.inputValue=""
    },
    DeleteHandle: function(index) {
      this.list.splice(index,1)
    }
  },
  watch: {
    list: function() {
      this.count=this.list.length
    },
    inputValue: function() {
      this.repeated=this.list.indexOf(this.inputValue) != -1
    }
  }
}
</script>

<style>

</style>
