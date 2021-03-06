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
      component: () => import(/* webpackChunkName: "newLayout" */ './views/newLayout/newLayout.vue'),
    },
    {
      path: '/',
      name: 'layout',
      component: () => import(/* webpackChunkName: "layout" */ './views/layout/layout.vue'),
      redirect: '/use',
      children: [
        {
          path: '/use',
          name: 'use',
          component: () => import(/* webpackChunkName: "use" */ './views/use/use.vue'),
        },
        {
          path: '/table',
          name: 'table',
          component: () => import(/* webpackChunkName: "table" */ './views/table/table.vue'),
        },
        {
          path: '/form',
          name: 'form',
          component: () => import(/* webpackChunkName: "form" */ './views/form/form.vue'),
        },
        {
          path: '/upload',
          name: 'upload',
          component: () => import(/* webpackChunkName: "upload" */ './views/upload/upload.vue'),
        },
        {
          path: '/button',
          name: 'button',
          component: () => import(/* webpackChunkName: "button" */ './views/button/button.vue'),
        },
        {
          path: '/color',
          name: 'color',
          component: () => import(/* webpackChunkName: "color" */ './views/color/color.vue'),
        },
        {
          path: '/vueHtmlEditor',
          name: 'vueHtmlEditor',
          component: () => import(/* webpackChunkName: "vueHtmlEditor" */ './views/editor/vueHtmlEditor.vue'),
        },
        {
          path: '/editor',
          name: 'editor',
          component: () => import(/* webpackChunkName: "vueHtmlEditor" */ './views/editor/editor.vue'),
        },
        {
          path: '/breadCrumb',
          name: 'breadCrumb',
          component: () => import(/* webpackChunkName: "breadCrumb" */ './views/breadCrumb/breadCrumb.vue'),
        },
        {
          path:'/page',
          name:'page',
          component: () => import(/* webpackChunkName: "page" */ './views/page/page.vue'),
        },
        {
          path:'/tree',
          name:'tree',
          component: () => import(/* webpackChunkName: "page" */ './views/tree/tree.vue'),
        }
      ]
    },

  ]
})
