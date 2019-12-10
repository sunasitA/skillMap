<template>
  <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      router>
      <el-menu-item v-for="item in naviWithNoChildren" :index="item.path" :key="item.path">
        <i :class="item.icon"></i>
        <span slot="title">{{item.label}}</span>
      </el-menu-item>

       <el-submenu :index="item.path" v-for="(item, index) in naviWithChildren" :key="index">
        <template slot="title">
          <i :class="item.icon"></i>
          <span>{{item.label}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item v-for="childItem in item.children" :index="childItem.path" :key="childItem.path">
            <i :class="childItem.icon"></i>
            <span>{{childItem.label}}</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
</template>

<script>
import {isPrimitive} from '../util.js'
export default {
  name: 'LeftTree',
  data() {
    return {
       navi: [
          {
            path: '/',
            label: '首页',
            icon: 'el-icon-s-home'
          },
          {
            path: '/',
            label: '用户管理',
            icon: 'el-icon-user-solid',
            children: [
              {
                path: '/user/userList',
                label: '用户列表',
                icon: 'el-icon-user'
              },{
                path: '/user/radioTable',
                label: '单选列表',
                icon: 'el-icon-user'
              },{
                path: '/user/register1',
                label: '用户创建1',
                icon: 'el-icon-setting'
              },{
                path: '/user/register2',
                label: '用户创建2',
                icon: 'el-icon-plus'
              }
            ]
          },
          {
            path: '/',
            label: '例子',
            icon: 'el-icon-user-solid',
            children: [
              {
                path: '/demos/index',
                label: '组件',
                icon: 'el-icon-user'
              }
            ]
          } 
        ]
      }
  },
  computed: {
    naviWithNoChildren() {
      return this.navi.filter(item => !item.hasOwnProperty("children"));
    },
    naviWithChildren() {
      return this.navi.filter(item => item.hasOwnProperty("children"));
    }
  }
}
</script>

<style scoped>
.el-menu {
  border: 1px solid gray;
}
</style>
