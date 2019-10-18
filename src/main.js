import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import plugins from '@/plugins/plugins';
Vue.use(ElementUI);
Vue.use(plugins)

// 导入组件库
import yzfwork from './../packages/y-table/index'
// 注册组件库
Vue.use(yzfwork)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
