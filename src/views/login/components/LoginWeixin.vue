<script setup lang="ts">
import { onMounted } from 'vue'

const getWxQrCode = () => {
  let obj = new WxLogin({
    self_redirect: false, //扫码后默认重新打开的回调地址，不是当前页打开
    id: 'wx_login_container',
    appid: 'wx59cfe0c2243b43c6',
    scope: 'snsapi_login',
    redirect_uri: encodeURIComponent(
      import.meta.env.VITE_APP_WX_REDIRECT, //配置自己申请的回调地址
    ),
    state: Math.ceil(Math.random() * 1000),
    style: 'black',
    href: '',
  })
}

onMounted(() => {
  setTimeout(function () {
    getWxQrCode()
  }, 1000)
})
</script>

<template>
  <div class="login-weixincontainer">
    <div v-loading="true" id="wx_login_container" style="height: 350px"></div>
  </div>
</template>

<style scoped lang="scss">
.login-weixincontainer {
  display: flex;
  height: 100%;
  #wx_login_container {
    margin: auto;
  }
}
</style>
