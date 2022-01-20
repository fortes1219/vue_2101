import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/style.scss'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import i18n from '@/lang'

import api from '@/service/api'

Vue.config.productionTip = false
Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
})

Vue.prototype.$api = api

const getConfig = async () => {
  const result = await (await fetch(`config.json`)).json()
  window['config'] = result
  console.log('###CONFIG JSON IN PUBLIC#### ', window['config'])
}

const init = async () => {
  await getConfig()
  new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
  }).$mount('#app')
}

init()

if (process.env.NODE_ENV === 'development') {
  // i18n check if there's existing key
  window['k'] = (v) => {
    const m = i18n.messages['zh_tw']
    const m2 = i18n.messages['en']
    for (let i in m) {
      if (m[i] == v) return i
      if (m2[i] == v) return i
    }
  }

  window['t'] = (v) => {
    return i18n.t(v)
  }

  window['r'] = Vue.$router
  window['i'] = Vue.$i18n
}