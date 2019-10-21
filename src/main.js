import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import ajax from './api/axios'
Vue.prototype.$post = ajax.post;


// 导入组件库
import yzfwork from './../packages/index'
// // 注册组件库
Vue.use(yzfwork)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')