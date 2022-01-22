<template>
  <div class="row horizontal v_center" data-inset="1rem">
    <div class="row vertical" data-width="20rem">
      <el-input v-model="loginForm.username" type="text" placeholder="Username" />
      <el-input v-model="loginForm.password" type="password" placeholder="Password" />
      <br>
      <el-button type="primary" @click="handleLogin">Login</el-button>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
        token: 'asds32adsavrAS3Fadf5567'
      }
    }
  },
  methods: {
    handleLogin() {
      const user = this.loginForm.username
      const pwd = this.loginForm.password
      const token = this.loginForm.token
      if (user !== '' && pwd !== '') {
        Cookies.set('login', JSON.stringify(this.loginForm), { expires: 1 })
      } else {
        alert('帳號密碼不能為空')
      }

      if (Cookies.get('login') && this.loginForm.token) {
        this.$router.push({ name: 'Home' })
      }
    },

    removeCookie() {
      Cookies.remove('login')
    }
  },
  created() {
    
  },
  mounted() {
    this.removeCookie()
  }
}
</script>