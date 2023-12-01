<script setup lang="ts">
import userLoginStore from '@/store/module/login'
import {LoginState} from '@/store/module/types/login'

let loginStore:LoginState = userLoginStore()

const changeLoginType = () => {
  loginStore.pwdLogin = !loginStore.pwdLogin
}

</script>

<template>
  <div class="container-login-tip">
    <div class="title">
      <div class="title-main">欢迎回来</div>
      <div class="title-sub">Hey, 好久不见！</div>
    </div>
    <div @click="changeLoginType" id="border-btn">
      <button>{{ loginStore.pwdLogin ? '微信登录' : '账号登录' }}</button>
    </div>

  </div>
</template>

<style scoped lang="scss">
.container-login-tip {
  width: 280px;
  height: 500px;
  box-sizing: border-box;

  background-image: linear-gradient(to right, #2D9BA5, #35B38C);

  color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  .title {
    text-align: center;
    .title-main {
      font-size: 32px;
      font-weight: 500;
    }
    .title-sub {
      margin-top: 20px;
    }
  }
  .login-type {
    font-size: 18px;

  }

}


#border-btn {

}

button {
  border: 0;
  border-radius: 10px;
  background: #2ec4b6;
  /* 文字变大写 */
  text-transform: uppercase;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 15px 30px;
  outline: none;
  position: relative;
  /* 添加动画，对元素的 border-radius 添加 3s 的延迟效果 */
  transition: border-radius 3s;
  -webkit-transition: border-radius 2s;
}

button:hover {
  border-bottom-right-radius: 50px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 10px;
  border-top-right-radius: 10px;
  cursor: pointer;
}
</style>
