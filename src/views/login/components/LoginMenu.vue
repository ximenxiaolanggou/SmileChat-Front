<script setup lang="ts">
import LoginPwd from './LoginAccount.vue';
import LoginWixin from './LoginWeixin.vue';

import useLoginStore from '@/store/modules/login'
import {LoginState} from '@/store/modules/types/login'

let loginStore:LoginState = useLoginStore()


</script>

<template>
  <div class="container-login-menu">
   <LoginPwd v-if="loginStore.accountLogin"/>
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
