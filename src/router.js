import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import table from './views/table/table.vue'
import form from './views/form/form.vue'
import upload from './views/upload/upload.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/table',
      name: 'table',
      component: table
    },
    {
      path: '/form',
      name: 'form',
      component: form
    },
    {
      path: '/upload',
      name: 'upload',
      component: upload
    },
  ]
})
