import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
let events = {
  update: null
}
Vue.directive('update', {
  bind (el, binding) {
    events.update = new Event('update')
    el.addEventListener('update', () => {
    }, false)
  },
  update (el, binding) {
    el.dispatchEvent(events.update)
  }
})

// 导入组件库
import yzfwork from './../packages/y-form/index'
// 注册组件库
Vue.use(yzfwork)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
