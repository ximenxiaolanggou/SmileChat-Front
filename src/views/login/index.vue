<script setup lang="ts">
import LoginTip from './components/LoginTip.vue'
import LoginMenu from './components/LoginMenu.vue'
import useLoginStore from '@/store/modules/login'
import { LoginState } from '@/store/modules/types/login'

let loginStore: LoginState = useLoginStore()
</script>

<template>
  <div class="container">
    <div class="container-login">
      <LoginTip
        :class="[
          'login-tip',
          loginStore.accountLogin ? 'login-tip-to-pwd' : 'login-tip-to-weixin',
        ]"
      />
      <LoginMenu
        :class="[
          'login-menu',
          loginStore.accountLogin
            ? 'login-menu-to-pwd'
            : 'login-menu-to-weixin',
        ]"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  height: 100vh;
  background-image: linear-gradient(to right, #fbc2eb, #a6c1ee);
  overflow: hidden;
  display: flex;

  .container-login {
    margin: auto;
    display: flex;
    width: 1000px;

    margin: auto auto;
    .login-tip {
      z-index: 200;
    }
    .login-meun {
      z-index: 100;
    }
  }
}

.login-tip-to-weixin {
  transform: translateX(680px);
  transition-duration: 0.5s;
}

.login-tip-to-pwd {
  transform: translateX(0px);
  transition-duration: 0.5s;
}

.login-menu-to-weixin {
  transform: translateX(-280px);
  transition-duration: 0.5s;
}

.login-menu-to-pwd {
  transform: translateX(0px);
  transition-duration: 0.5s;
}
</style>
