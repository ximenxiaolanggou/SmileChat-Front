<script setup lang="ts">


</script>

<template>
  <div class="container-login-tip">
    <div class="title">欢迎回来</div>
    <div class="greet">Hey, 好久不见！</div>
    <div class="weixin-login">微信登录</div>
  </div>
</template>

<style scoped lang="scss">
.container-login-tip {
  width: 280px;
  height: 500px;


  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  background-image: linear-gradient(to right, #2D9BA5, #35B38C);

  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    font-size: 28px;
    font-weight: 600;
    color: white;
    text-align: center;
    margin-top: 150px;

  }
  .greet {
    font-size: 18px;
    font-weight: 300;
    color: white;
    text-align: center;
    margin-top: 50px;
  }
  .weixin-login {
    font-size: 20;
    font-weight: 600;
    color: white;
    text-align: center;
    margin-top: 100px;
    border-radius: 10px;
    border: 1px solid white;
    padding: 8px 10px;
    box-shadow: 1px 1px 1px 1px rgba(0,0,0,.4) ;
    
  

  }
}
</style>
