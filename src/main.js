import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 导入组件库
import yzfwork from './../packages/index'
// // 注册组件库
Vue.use(yzfwork)

/**代码高亮 */
import Highlight from '@/utils/highlight';
import 'highlight.js/styles/monokai-sublime.css';
Vue.use(Highlight);




Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')