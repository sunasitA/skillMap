<template>
    <c-button :data="obj" v-on:c-click="clickMethod()"></c-button>
</template>

<script>
import cButton from './cButton'
export default {
    name: 'Index',
    data(){
        return {
            obj: {
                color: 'red',
                name: '点击按钮'
            }
        }
    },
    components: {
        'c-button': cButton
    },
    methods: {
        clickMethod(){
            console.log("called");
        }
    }
}
</script>

<style scoped>
</style>