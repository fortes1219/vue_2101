import Vue from 'vue'
import VueRouter from 'vue-router'
import Cookies from 'js-cookie'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: { requireAuth: true }
  },
  {
    path: '/restful_api',
    name: 'restful_api',
    component: () => import('../views/RestfulApi.vue'),
    meta: { requireAuth: true }
  },
  {
    path: '/vuex',
    name: 'vuex',
    component: () => import('../views/Vuex.vue'),
    meta: { requireAuth: true }
  },
  {
    path: '/form',
    name: 'form',
    component: () => import('../views/form.vue'),
    meta: { requireAuth: true }
  },
  {
    path: '/i18n',
    name: 'i18n',
    component: () => import('../views/i18n.vue'),
    meta: { requireAuth: true }
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach(async(to, from, next) => {
  if (to.meta.requireAuth) {
    const userInfo = Cookies.get('login')
    if (userInfo) {
      const token = JSON.parse(userInfo).token
      if (token.length > 0) {
        next()
      } else {
        next({ name: 'Login' })
      }
    } else {
      next({ name: 'Login' })
    }
  } else {
    next()
  }
})

export default router
