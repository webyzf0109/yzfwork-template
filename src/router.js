import Vue from 'vue'
import Router from 'vue-router'
import layout from './views/layout/layout.vue'
import table from './views/table/table.vue'
import form from './views/form/form.vue'
import upload from './views/upload/upload.vue'
import button from './views/button/button.vue'
import color from './views/color/color.vue'
import use from './views/use/use.vue'
import ueEditor from './views/editor/ueEditor.vue'
import vueHtmlEditor from './views/editor/vueHtmlEditor.vue'
import newLayout from './views/newLayout/newLayout.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/newLayout',
      name:'newLayout',
      component:newLayout
    },
    {
      path: '/',
      name: 'layout',
      component: layout,
      redirect: '/use',
      children: [
        {
          path: '/use',
          name: 'use',
          component: use
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
        {
          path: '/ueEditor',
          name: 'ueEditor',
          component: ueEditor
        },
        {
          path: '/vueHtmlEditor',
          name: 'vueHtmlEditor',
          component: vueHtmlEditor
        }
      ]
    },

  ]
})
