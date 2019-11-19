import Vue from 'vue'
import Router from 'vue-router'
import layout from './views/layout/layout.vue'
import table from './views/table/table.vue'
import form from './views/form/form.vue'
import upload from './views/upload/upload.vue'
import button from './views/button/button.vue'
import color from './views/color/color.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'layout',
      component: layout,
      children: [
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
        {
          path: '/button',
          name: 'button',
          component: button
        },
        {
          path: '/color',
          name: 'color',
          component: color
        },
      ]
    },

  ]
})
