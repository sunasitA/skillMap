<template>
    <div>
        <router-link to='/user/login/tom/123'>进入用户登陆页面</router-link>
        <router-link to='/user/register?name=jerry&id=321'>进入用户注册页面</router-link>
        <div><router-view></router-view></div>
    </div>
</template>
<script>
export default {
    name: 'user'
}
</script>