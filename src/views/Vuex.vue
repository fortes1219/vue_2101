<template>
  <div class="row vertical" data-inset="1rem">
    <div class="row horizontal v_center" data-space-bottom="1rem">
      <el-button type="primary" @click="addProduct">新增商品</el-button>
    </div>
    <el-table :data="getResponse" style="width: 100%">
      <el-table-column prop="name" label="商品名稱" />
      <el-table-column prop="price" label="售價" />
      <el-table-column prop="count" label="庫存數量" />
      <el-table-column label="操作">
        <template slot-scope="obj">
          <div class="row horizontal v_center">
            <el-button type="warning" @click="handleEdit(obj.row)">編輯</el-button>
            <el-button type="danger" @click="handleDel(obj.row.id)">刪除</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      title="提示"
      :visible.sync="showDialog"
      width="40%"
      @close="handleClose">
      <el-form ref="productForm" :model="formData" label-width="100px">
        <el-form-item label="ID:">
          <el-input v-model.trim="formData.id" placeholder="請輸入ID" />
        </el-form-item>
        <el-form-item label="商品名稱:">
          <el-input v-model.trim="formData.name" placeholder="請輸入商品名稱" />
        </el-form-item>
        <el-form-item label="售價:">
          <el-input v-model.trim="formData.price" placeholder="請輸入售價" />
        </el-form-item>
        <el-form-item label="庫存數量:">
          <el-input v-model.trim="formData.count" placeholder="請輸入庫存數量" />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="showDialog = false">取消</el-button>
        <el-button @click="handleSubmit(getSubmitStatus)" type="primary" >送出</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex"
export default {
  name: 'restful_api',
  data() {
    return {
      tableData: [],
      showDialog: false,
      formData: {
        id: '',
        name: '',
        price: '',
        count: '',
        img: ''
      },
      submitStatus: ''
    }
  },
  computed: {
    ...mapGetters(['getResponse']),
    getSubmitStatus () {
      let result = false
      const caseObj = {
        add: () => { result = true },
        edit: () => { result = false }
      }
      caseObj[this.submitStatus]()
      return result
    }
  },
  methods: {
    ...mapActions(['GET_API', 'POST_API', 'PUT_API', 'DELETE_API']),
    async callApi () {
      this.GET_API()
    },
    // 新增商品
    addProduct () {
      this.showDialog = true
      this.submitStatus = 'add'
    },
    async postData () {
      try {
        await this.POST_API(this.formData)
        this.$message({
          type: 'success',
          message: '新增成功!'
        });
        this.showDialog = false
      } catch {
        this.$message({
          type: 'error',
          message: '發生錯誤'
        });
      }
    },
    // POST/PUT 新增/編輯商品
    handleSubmit (add = false) {
      if (add) {
        this.postData()
      } else {
        this.editData()
      }
    },
    // 編輯商品資訊時載入該欄位資料
    handleEdit (obj) {
      this.formData.id = obj.id
      this.formData.name = obj.name
      this.formData.price = obj.price
      this.formData.count = obj.count
      this.showDialog = true
      this.submitStatus = 'edit'
    },
    async editData () {
      try {
        await this.PUT_API(this.formData)
         this.$message({
          type: 'success',
          message: '更新成功!'
        });
        this.showDialog = false
      } catch {
        this.$message({
          type: 'error',
          message: '更新失敗!'
        });
      }
    },
    // 刪除資料
    async deleteData(id) {
      await this.DELETE_API(id)
      this.callApi()
    },
    handleDel (id) {
      this.$confirm('將會刪除商品資訊，是否繼續？', '提示訊息', {
        confirmButtonText: '確定',
         cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.deleteData(id)
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });          
      });
    },
    handleClose () {
      Object.keys(this.formData).map(el => {
        this.formData[el] = ''
      })
      console.log('##on close: ', this.formData)
    },
  },
  created () {
    this.callApi()
  },
  mounted () {

  }
}
</script>