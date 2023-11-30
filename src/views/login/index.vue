<script setup lang="ts">
import LoginTip from './components/LoginTip.vue'
import LoginMenu from './components/LoginMenu.vue'

</script>

<template>
  <div class="container">
   <div class="container-login">
    <LoginTip/>
    <LoginMenu/>
   </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  height: 100vh;
  background-image: linear-gradient(to right, #fbc2eb, #a6c1ee);
  overflow: hidden;
  
  .container-login {
    display: flex;
    width: 860px;
    margin: 200px auto;
  }
}
</style>
