import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/Index'
import Home from './../components/routers/home.vue'
import User from './../components/routers/user.vue'
import userLogin from './../components/routers/userLogin.vue'
import userRegister from './../components/routers/userRegister.vue'
import userList from './../components/routers/userList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/user',
      name: 'User',
      component: User,
      children: [
        {
          path: 'login/:name/:id',
          name: 'userLogin',
          component: userLogin
        },{
          path: 'register',
          name: 'userRegister',
          component: userRegister
        },{
          path: 'userList',
          name: 'userList',
          component: userList
        }
      ]
    }
  ]
})
