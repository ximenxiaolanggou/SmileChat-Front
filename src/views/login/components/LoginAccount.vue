<script setup lang="ts">
import {login} from '@/api/auth/index'
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import useUserInfoStore from '@/store/modules/user'
import { useRouter } from 'vue-router'
let $router = useRouter()

const userInfoStore = useUserInfoStore()

const ruleFormRef = ref<FormInstance>()

const validateUsername = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入用户名'))
  }else {
    callback()
  }
}
const validatePwd = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入密码'))
  } else {
    callback()
  }
}

const ruleForm = reactive({
  username: '',
  password: ''
})

const rules = reactive<FormRules<typeof ruleForm>>({
  username: [{ validator: validateUsername, trigger: 'blur' }],
  password: [{ validator: validatePwd, trigger: 'blur' }]
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate(async (valid) => {
    if (valid) {
      const {data} = await login(ruleForm)
      localStorage.setItem('TOKEN', data)
      $router.push({name: 'chat'})
      console.log('submit!', data)
    } else {
      console.log('error submit!')
      return false
    }
  })
}

</script>

<template>
  <div class="login-pwd-container">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      status-icon
      :rules="rules"
      label-width="120px"
      class="login-from"
  >
    <el-form-item label="用户名" prop="username">
      <template #label>
        <span style="color: gray;">用户名</span>
      </template>
      <el-input v-model="ruleForm.username" autocomplete="off" placeholder="请输入用户名"/>
    </el-form-item>
    <el-form-item label="密码" prop="password" >
      <template #label>
        <span style="color: gray;">密码</span>
      </template>
      <el-input
        v-model="ruleForm.password"
        type="password"

        placeholder="请输入用密码"
      />
    </el-form-item>
    <el-form-item>
      <el-button  @click="submitForm(ruleFormRef)"
        >登录</el-button
      >
    </el-form-item>
  </el-form>
  </div>
</template>

<style scoped lang="scss">
.login-pwd-container {
  height: 100%;
  display: flex;
  .login-from {
    margin: auto;
  }
}

 .el-input {
  --el-input-width: 300px;
}

</style>
