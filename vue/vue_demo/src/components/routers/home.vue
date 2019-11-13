<template>
    <div>
        <el-button @click="visible = true">Button</el-button>
        <el-dialog :visible.sync="visible" title="Hello world">
            <p>Try Element</p>
        </el-dialog>
        <div :class="{'redClass': show}">container1</div>
        <div :class="showClass">container2</div>
        <div :class="['redClass', 'fontClass']">container3</div>
        <div :class="[show? 'redClass' : '', 'fontClass']">container4</div>

        <!-- <ul :class="ulCss">
            <li>menu1</li>
            <li class="li">menu2</li>
            <li>menu4</li>
        </ul> -->

        <div class="box">
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'home',
    data: function() {
        return { 
            visible: false,
            show: true,
            showClass: {
                redClass: true
            },
            ulCss: 'ulCss'
        }
    },
    mounted: function () {
        this.show = false;
        this.showClass = {
             redClass: this.show
        }
    }
}
</script>

<style scoped>
.redClass {
    color: red;
}
.fontClass {
    font-size: 20px;
    text-decoration: underline;
}
/* .ulCss {
    display: flex;
    flex-direction: row;
    height: 20px;
    border: 1px solid lightgray;
} */
/* .ulCss li {
    list-style-type: none;
    text-align: center;
    width: 100px;
    border-right: 1px solid lightgray;
}
.ulCss .li {
    flex: 1;
} */
.box {
    display: flex;
    justify-content: center;
}
.item {
    height: 30px;
    flex: 1;
    margin-right: 5px;
    background: gray;
}
</style>