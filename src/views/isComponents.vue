<template>
  <div class="row vertical grow" :class="`theme-${getTheme}`" :data-theme="getTheme">
    <div class="row horizontal v_center">
      <el-button type="primary" @click="changeTheme(1)">Change to Theme 1</el-button>
      <el-button type="warning" @click="changeTheme(2)">Change to Theme 2</el-button>
    </div>
    <bg />
    <!-- <component :is="currentTheme" /> -->
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import { isMobile } from '../utils/checkMobile'
import bg from '@/components/bg.vue'
// import theme1Bg from '@/components/theme_1/bg.vue'
// import theme2Bg from '@/components/theme_2/bg.vue'
export default {
  name: 'isComponents',
  components: {
    bg,
    // theme1Bg,
    // theme2Bg
  },
  data() {
    return {}
  },
  computed: {
    getTheme() {
      return this.$store.state.theme.theme
    },
    // currentTheme() {
    //   let str = ''
    //   const obj = {
    //     0: () => {
    //       str = 'theme1Bg'
    //     },
    //     1: () => {
    //       str = 'theme1Bg'
    //     },
    //     2: () => {
    //       str = 'theme2Bg'
    //     }
    //   }
    //   obj[this.getTheme]()
    //   return str
    // }
  },
  methods: {
    ...mapMutations(['SET_THEME']),
    changeTheme(val) {
      this.SET_THEME(val)
    }
  },
  created() {
    console.log('is mobile?', isMobile())
  }
}
</script>