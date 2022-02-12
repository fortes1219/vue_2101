<template>
  <div class="theme-2-bg">
    <div class="block">
      <span v-for="(item, i) in itemsArr" :key="i" class="items">{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'theme-2-bg',
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
  }
}
</script>