<template>
  <div class="row vertical" data-inset="1rem">
    <el-form
      ref="forms"
      :model="formModel"
      :rules="ruleList"
      label-width="160px"
    >
      <el-form-item label="Username" prop="username">
        <el-input
          type="text"
          v-model="formModel.username"
          placeholder="Username"
        />
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input
          type="password"
          v-model="formModel.password"
          placeholder="Password"
        />
      </el-form-item>
      <el-form-item label="Email" prop="email">
        <el-input type="text" v-model="formModel.email" placeholder="Email" />
      </el-form-item>
      <el-form-item label="Website" prop="website">
        <el-input
          type="text"
          v-model="formModel.website"
          placeholder="Website"
        />
      </el-form-item>
      <el-form-item label="Job" prop="job">
        <el-select v-model="formModel.job" placeholder="Select Job">
          <el-option
            v-for="(item, i) in selectList"
            :key="i"
            :label="item.name"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="Exp" prop="exp">
        <el-input
          type="text"
          v-model="formModel.exp"
          placeholder="Exp(Years)"
        />
      </el-form-item>
      <div class="row horizontal h_end">
        <el-button type="primary" @click="submit('forms')">Submit</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formModel: {
        username: "",
        password: "",
        email: "",
        website: "",
        job: "",
        exp: ""
      },
      selectList: [
        { name: "Designer", value: "Designer" },
        { name: "Developer", value: "Developer" },
        { name: "Supervisor", value: "Supervisor" },
      ],
      ruleList: {
        username: [{ required: true, trigger: 'blur' }],
        password: [{ required: true, trigger: 'blur' }],
        email: [
          { 
            required: true,
            pattern: /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/,
            message: 'Email Format Error!!',
            trigger: 'blur'
          }
        ],
        website: [{ required: false, trigger: 'blur' }],
        job: [{ required: true, trigger: 'blur' }],
        exp: [
          { required: true, validator: this.validateExp, trigger: 'blur' }
        ]
      },
    };
  },

  methods: {
    submit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$message({
            message: 'Submit Success!!',
            type: 'success'
          });
        } else {
          this.$message({
            message: 'Submit Failed!!',
            type: 'error'
          });
          return false;
        }
      });
    },

    validateExp(rule, value, callback) {
      if (!value) return callback(new Error('Exp is required!!'))
      setTimeout(() => {
        if (!Number(value)) {
          callback(new Error('Must be Integer Number!!'));
        } else {
          if (value < 3) {
            callback(new Error('Must 3 or more years!!'));
          } else {
            callback();
          }
        }
      }, 1000)
    }
  },
};
</script>