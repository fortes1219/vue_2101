<template>
  <div class="row vertical" data-inset="1rem">
    <el-button type="primary" @click="callApi">Call API</el-button>
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
    listener () {
      return this.tableData
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
}
</script>
