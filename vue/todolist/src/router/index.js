import Vue from 'vue'
import Router from 'vue-router'
import home from '../views/home'
import todo from '../views/todos'

Vue.use(Router)

export default new Router({
  routes: [
  {  
      path:'/', 
      redirect:'home'
  },
  {
      path: '/home',
      component: home
    },{
      path: '/todo',
      component: todo
    }
  ]
})
