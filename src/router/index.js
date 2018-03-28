import Vue from 'vue'
import Router from 'vue-router'
import ShowList from '@/components/ShowList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ShowList',
      component: ShowList
    }
  ]
})
