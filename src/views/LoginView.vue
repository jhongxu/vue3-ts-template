<template>
  <div class="login-view">
    <el-form :model="loginForm" class="login-form">
      <h3 class="login-title">若依后台管理系统</h3>
      <el-form-item>
        <el-input
          v-model="loginForm.username"
          size="large"
          placeholder="请输入用户名"
        >
          <template #prefix>
            <svg-icon icon-class="user" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          v-model="loginForm.password"
          size="large"
          placeholder="请输入密码"
        >
          <template #prefix>
            <svg-icon icon-class="user" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item v-if="captchaEnabled">
        <el-input
          v-model="loginForm.code"
          size="large"
          style="width: 63%"
          placeholder="请输入验证码"
        >
          <template #prefix>
            <svg-icon icon-class="user" />
          </template>
        </el-input>
        <div class="login-code">
          <img :src="codeUrl" alt="" class="login-code-img" @click="getCode" />
        </div>
      </el-form-item>
      <el-checkbox v-model="loginForm.rememberMe" style="margin: 0 0 25px 0">
        记住密码
      </el-checkbox>
      <el-form-item>
        <el-button type="primary" style="width: 100%" @click="handleLogin">
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup name="LoginView">
import { logger } from '@/utils'
import { getCodeImg } from '@/api/login'
// 验证码开关
const captchaEnabled = ref(true)
const codeUrl = ref('')
const loginForm = reactive({
  username: 'admin',
  password: 'admin123',
  rememberMe: false,
  code: '',
  uuid: ''
})

const getCode = () => {
  getCodeImg().then((res: any) => {
    captchaEnabled.value =
      res.captchaEnabled === undefined ? true : res.captchaEnabled
    if (captchaEnabled.value) {
      codeUrl.value = 'data:image/gif;base64,' + res.img
      loginForm.uuid = res.uuid
    }
  })
}

const handleLogin = () => {
  console.log(logger)
  // logger.println({ loginForm })
}
getCode()

const obj = reactive([
  { name: '张三', age: 20 },
  { name: '猪八戒', age: 30 }
])
logger.println({ obj })
obj[0].name = '孙悟空'
logger.println({ obj })
</script>

<style scoped lang="scss">
.login-view {
  @apply w-full h-full  bg-blue-200 flex justify-center items-center;
}

.login-title {
  @apply text-black text-center mt-0 mb-8 text-2xl;
}

.login-form {
  @apply w-100 bg-white rounded p-7 pb-0.5;
}

.login-code {
  @apply w-1/3 h-10;
  img {
    @apply cursor-pointer align-middle;
  }
}

.login-code-img {
  @apply h-10 pl-3;
}
</style>
