<template>
    <div>
        <button :style="{'color': data.color}" @click="handle">{{data.name}}</button>
    </div>
</template>

<script>
export default {
    props: ['data'],
    methods: {
        handle(){
            this.$emit('c-click');
        }
    }
}
</script>

<style scoped>
</style>