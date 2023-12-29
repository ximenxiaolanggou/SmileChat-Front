<script setup lang="ts">
import ChatNav from './components/ChatNav/index.vue'
import ChatContent from './components/ChatContent.vue'
import ChatGroupUser from './components/ChatGroupUser.vue'
import { onMounted, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
let $router = useRouter()
const ws_url = import.meta.env.VITE_APP_WS_API
let pingFlag

let commandClose = ref(false)

// 创建 WebSocket 连接
let socket = null
const pingFun = () => socket.send('ping')

const initWS = () => {
  socket = new WebSocket(
    `${ws_url}/chat?token=${localStorage.getItem('TOKEN')}`,
  )
  // 添加事件处理程序
  socket.addEventListener('open', (event) => {
    console.log('WebSocket连接已打开')
    if (pingFlag) clearInterval(pingFlag)
    pingFlag = setInterval(pingFun, 5000)
  })

  socket.addEventListener('message', (event) => {
    console.log('收到消息:', event.data)
    const data = JSON.parse(event.data)
    if (data) {
      switch (data.msgType) {
        case 1:
          console.log('msgType', 1)
          socket.close()
          break
        case 2:
          console.log('msgType', 2)
          ElMessage({
            showClose: true,
            message: data.payload || '服务器错误',
            type: 'error',
          })
          // 命令关闭标志位置为true
          commandClose.value = true
          // 关闭ws
          socket.close()
          // 关闭定时器
          clearInterval(pingFlag)
          // 清除token
          localStorage.removeItem('TOKEN')
          // 跳转到首页
          console.log('@@@@@@', $router)
          $router.push({ path: '/login' })
          break
        case 3:
          console.log('msgType', 3)
          ElMessage({
            showClose: true,
            message: data.payload || '服务器错误',
            type: 'error',
          })
          // 命令关闭标志位置为true
          commandClose.value = true
          // 关闭定时器
          clearInterval(pingFlag)
          // 关闭ws
          socket.close()
          console.log('@@@@@@', $router)
          break
      }
    }
  })

  socket.addEventListener('close', (event) => {
    console.log('close', event)
    if (!commandClose) {
      initWS()
    }
  })
}

onMounted(() => {
  // initWS()
})
</script>

<template>
  <div class="container">
    <div class="container-content">
      <ChatNav class="container-content-nav" />
      <!-- <ChatContent class="container-content-chat" /> -->
      <!-- <ChatGroupUser class="container-content-online" /> -->
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background: url('../../assets/images/bg.png') no-repeat;
  background-size: cover;
  display: flex;
  .container-content {
    height: 750px;
    width: 1350px;
    margin: auto;
    background-color: #272a37;

    display: flex;
    .container-content-nav {
      width: 450px;
    }
    .container-content-chat {
      width: 700px;
    }
    .container-content-online {
      width: 250px;
    }
  }
}
</style>
