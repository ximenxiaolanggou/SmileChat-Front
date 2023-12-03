<script setup lang="ts">
import ChatMenu from  './components/ChatMenu.vue'
import ChatContent from  './components/ChatContent.vue'
import ChatGroupUser from  './components/ChatGroupUser.vue'
import { onMounted } from 'vue'

const ws_url =  import.meta.env.VITE_APP_WS_API
let pingFlag


// 创建 WebSocket 连接
let socket = null;
const pingFun = () => socket.send('ping')

const initWS = () => {
  socket = new WebSocket(`${ws_url}/chat?token=${localStorage.getItem('TOKEN')}`);
  // 添加事件处理程序
  socket.addEventListener('open', (event) => {
    console.log('WebSocket连接已打开');
    if(pingFlag) clearInterval(pingFlag)
    pingFlag = setInterval(pingFun, 5000)
  });

  socket.addEventListener('message', (event) => {
    console.log('收到消息:', event.data);
  });

  socket.addEventListener('close', (event) => {
    initWS()
  });
}

onMounted(() => {
  initWS()
})

</script>


<template>
  <div class="container">
    <div class='container-main'>
      <ChatMenu class='chat-menu'/>
      <ChatContent class='chat-content'/>
      <ChatGroupUser class='chat-group-user'/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background: url("../../assets/images/bg.png") no-repeat;
  background-size: cover;
  display: flex;
  .container-main {
    height: 80%;
    width: 70%;
    margin: auto;
    background-color: rgba(100, 200, 100, 0.5);

    display: flex;
    .chat-menu {
      flex: 1.5;
    }
    .chat-content {
      flex: 4;
    }
    .chat-group-user {
      flex: 1;
    }
  }
}
</style>
