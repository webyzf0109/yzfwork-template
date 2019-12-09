import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/newLayout',
      name:'newLayout',
      component: resolve=>(require(["@/views/newLayout/newLayout.vue"],resolve)),
    },
    {
      path: '/',
      name: 'layout',
      component: resolve=>(require(["@/views/layout/layout.vue"],resolve)),
      redirect: '/use',
      children: [
        {
          path: '/use',
          name: 'use',
          component: resolve=>(require(["@/views/use/use.vue"],resolve)),
        },
        {
          path: '/table',
          name: 'table',
          component: resolve=>(require(["@/views/table/table.vue"],resolve)),
        },
        {
          path: '/form',
          name: 'form',
          component: resolve=>(require(["@/views/form/form.vue"],resolve)),
        },
        {
          path: '/upload',
          name: 'upload',
          component: resolve=>(require(["@/views/upload/upload.vue"],resolve)),
        },
        {
          path: '/button',
          name: 'button',
          component: resolve=>(require(["@/views/button/button.vue"],resolve)),
        },
        {
          path: '/color',
          name: 'color',
          component: resolve=>(require(["@/views/color/color.vue"],resolve)),
        },
        {
          path: '/ueEditor',
          name: 'ueEditor',
          component: resolve=>(require(["@/views/editor/ueEditor.vue"],resolve)),
        },
        {
          path: '/vueHtmlEditor',
          name: 'vueHtmlEditor',
          component: resolve=>(require(["@/views/editor/vueHtmlEditor.vue"],resolve)),
        },
        {
          path: '/breadCrumb',
          name: 'breadCrumb',
          component: resolve=>(require(["@/views/breadCrumb/breadCrumb.vue"],resolve)),
        },
        {
          path:'/page',
          name:'page',
          component: resolve=>(require(["@/views/page/page.vue"],resolve)),
        },
        {
          path:'/tree',
          name:'tree',
          component: resolve=>(require(["@/views/tree/tree.vue"],resolve)),
        }
      ]
    },

  ]
})
