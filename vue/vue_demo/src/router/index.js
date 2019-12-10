import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/Index'
import Home from './../components/routers/home.vue'
import User from './../components/routers/user.vue'
import userRegister1 from './../components/routers/userRegister1.vue'
import userRegister2 from './../components/routers/userRegister2.vue'
import userList from './../components/routers/userList.vue'
import radioTable from './../components/routers/radioTable.vue'
import ComponentsIndex from './../components/demos/components/index.vue'

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
          path: '/',
          redirect: User
        },
        {
          // path: 'register1/:name/:id',
          path: 'register1',
          name: 'userRegister1',
          component: userRegister1
        },{
          path: 'register2',
          name: 'userRegister2',
          component: userRegister2
        },{
          path: 'userList',
          name: 'userList',
          component: userList
        },{
          path: 'radioTable',
          name: 'radioTable',
          component: radioTable
        }
      ]
    },{
      path: '/demos/index',
      name: 'ComponentsIndex',
      component: ComponentsIndex
    }
  ]
})
