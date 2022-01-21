<template>
  <div class="row horizontal v_center" data-inset="1rem">
    <el-button :class="buttonStatus" :disabled="checkApi" type="primary" @click="callApi">{{ $t('call_api') }}</el-button>
    <el-button type="primary" @click="callApi">{{ $t('call_api') }}</el-button>
    <el-button @click="tableData = []">{{ $t('clear_api') }}</el-button>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {

  },
  data() {
    return {
      tableData: []
    }
  },
  computed: {
    checkApi () {
      if (this.tableData.length === 0) {
        return true
      } else {
        return false
      }
    },
    buttonStatus () {
      return this.tableData.length === 0 ? 'noShow' : ''
    }
  },
  methods: {
    async callApi () {
      const url = 'http://localhost:3000/tableApi'  // json-server  API 位置
      const res = await this.$api.get(url)
      this.tableData = [...res]  // 透過ES6語法將res的內容直接繼承到tableData
      console.log(res, this.tableData)
    },
  },
  created () {
    console.log('in created')
    this.callApi()
  },
  mounted () {

  },
  beforeDestroy () {

  },
}
</script>
<style lang="scss">
.noShow {
  display: none;
}
</style>
