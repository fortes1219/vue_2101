<template>
  <div class="theme-1-bg">
    <div class="block">
      <span v-for="(item, i) in itemsArr" :key="i" class="items">{{ item }}</span>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'theme-1-bg',
  data() {
    return {
      itemsArr: [
        0,
        1,
        2,
        3,
        4,
        5
      ]
    }
  },
  computed: {
    currentTheme() {
      return this.$store.state.theme.theme
    }
  },
  methods: {
    ...mapMutations(['SET_THEME'])
  }
}
</script>