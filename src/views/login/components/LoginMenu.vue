<script setup lang="ts">
import LoginPwd from './LoginPwd.vue';
import LoginWixin from './LoginWeixin.vue';

import userLoginStore from '@/store/module/login'
import {LoginState} from '@/store/module/types/login'

let loginStore:LoginState = userLoginStore()


</script>

<template>
  <div class="container-login-menu">
   <LoginPwd v-if="loginStore.pwdLogin"/>
   <LoginWixin v-else/>
  </div>
</template>

<style scoped lang="scss">
.container-login-menu {
  width: 680px;
  height: 500px;
  background-image: linear-gradient(to bottom, #DBABA9,#AADCF5);
  

}
</style>
