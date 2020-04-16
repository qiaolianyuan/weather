import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { HttpService } from './utils/http'
import './utils/rem';
import { Button, Tabbar, TabbarItem, Field, NoticeBar } from 'vant';
import 'vant/lib/index.css';
import './scss/reset.scss';

Vue.config.productionTip = false

Vue.prototype.$httpService = new HttpService()  // 挂载服务

Vue.use(Button)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Field)
Vue.use(NoticeBar)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
