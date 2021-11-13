import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/restful_api',
    name: 'restful_api',
    component: () => import('../views/RestfulApi.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
