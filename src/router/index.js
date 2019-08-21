import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import learn from '@/components/learn'
import entrance from '@/components/employee/entrance'
import registration from '@/components/employee/registration'
import finish from '@/components/employee/finish'

import infoRecord from '@/components/admin/InfoRecord'
import allPersonInfo from '@/components/admin/allRegisterInfo'
import detail from '@/components/admin/detail'
import checklist from '@/components/admin/checklist'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/learn',
      name: 'learn',
      component: learn
    },
    {
      path: '/',
      name: 'entrance',
      component: entrance
    },
    {
      path: '/registration',
      name: 'registration',
      component: registration
    },
    {
      path: '/infoRecord',
      name: 'infoRecord',
      component: infoRecord
    },
    {
      path: '/finish',
      name: 'finish',
      component: finish
    },
    {
      path: '/allPersonInfo',
      name: 'allPersonInfo',
      component: allPersonInfo
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/checklist',
      name: 'checklist',
      component: checklist
    },
  ]
})
