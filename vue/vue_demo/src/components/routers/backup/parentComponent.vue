<template>
  <div>
    <span>{{age}}</span>
    <span>{{parentData.name}} - {{parentData.age}}</span>
    <el-button @click="clickHandle">改变父组件的值</el-button>
  </div>
</template>

<script>
export default {
  name: "parentComponent",
  props: ["age"],
  props: ["parentData"],
  methods: {
    clickHandle() {
      this.$emit("update:age", 11);
      this.$emit("update:parentData", {
        name: "tom",
        age: 1111
      });
    }
  }
};
</script>

<style scoped>
</style>