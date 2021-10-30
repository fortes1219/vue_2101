import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/style.scss'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import api from '@/service/api'

Vue.config.productionTip = false
Vue.use(ElementUI)

Vue.prototype.$api = api

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')