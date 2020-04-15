import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { HttpService } from './utils/http'
import './utils/rem';

Vue.config.productionTip = false

Vue.prototype.$httpService = new HttpService()  // 挂载服务

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
