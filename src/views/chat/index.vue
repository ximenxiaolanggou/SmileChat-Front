<script setup lang="ts">
import ChatNav from './components/ChatNav/index.vue'
import ChatContent from './components/ChatContent/index.vue'
import ChatGroupUser from './components/ChatOnline/index.vue'
import { onMounted, onUnmounted,ref, provide } from 'vue'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
import BaseMessage from "@/types/message/BaseMessage";
import ChatUser from '@/types/ChatUserCard'
let $router = useRouter()
const ws_url = import.meta.env.VITE_APP_WS_API

let audioRef = ref()

let onlineUsers = ref<ChatUser[]>();

let timerId:number
let timerRunning = ref(false)

let commandClose = ref(false)

// 标题
let title = ref('Smile Chat')

// 页面是否可见
let pageVisiable = ref(true);

// 新消息定时器
let newMsgTimer:number

// 新消息定时器 启动
let newMsgTimerRunning = ref(false)

// 实时数据
let timeMsg = ref<BaseMessage>()

// 创建 WebSocket 连接
let socket:any = null
const pingFun = () => socket.send(JSON.stringify({msgType: 100, content: 'ping'}))

const initWS = () => {
  socket = new WebSocket(
    `${ws_url}/chat?token=${localStorage.getItem('TOKEN')}`,
  )
  // 添加事件处理程序
  socket.addEventListener('open', (event: any) => {
    console.log('WebSocket连接已打开')
    if (timerId) clearInterval(timerId)
    timerId = setInterval(pingFun, 5000)
    timerRunning.value = true
  })

  socket.addEventListener('message', (event:any) => {
    // console.log('收到消息:', event.data)
    const data = JSON.parse(event.data)
    console.log(data)
    if (data) {
      switch (data.messageType) {
        case 98:
          onlineUsers.value = JSON.parse(data.content);
          break
        case 99:
          console.log(data)
          break
        case 101:
        case 104:
          audioRef.value.volume = 0.3
          audioRef.value.play()
          timeMsg.value = data
          if(!pageVisiable.value && !newMsgTimerRunning.value) newMsgTimerStart();
          break
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
          clearInterval(timerId)
          timerRunning.value = false
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
          clearInterval(timerId)
          timerRunning.value = false
          // 关闭ws
          socket.close()
          console.log('@@@@@@', $router)
          break
      }
    }
  })

  socket.addEventListener('close', (event:any) => {
    console.log('close event', event)
    console.log('commandClose', commandClose.value)
    clearInterval(timerId)
    if (!commandClose.value) {
      initWS()
    }
  })
}

const flashTitle = () => {
  document.title = document.title == 'Smile Chat' ? '新消息' : 'Smile Chat'
  console.log('@@@')
}

const newMsgTimerStart = () => {
  newMsgTimerRunning.value = true
  newMsgTimer = setInterval(flashTitle,100)
}

const newMsgTimerStop = () => {
  newMsgTimerRunning.value = false
  clearInterval(newMsgTimer);
}

/**
 * 发送消息
 */
const sendMsgHandle = (value:string) => {
  socket.send(value)
}

document.addEventListener('visibilitychange', () => {
  newMsgTimerStop()
  if (document.visibilityState === 'visible') {
    pageVisiable.value = true
    document.title = 'Smile Chat'
  } else {
    pageVisiable.value = false
  }
});

onMounted(() => {
  initWS()
})

</script>

<template>
  <div class="container">
    <div class="container-content">
      <ChatNav class="container-content-nav" />
      <ChatContent :message="timeMsg" @sendMsgHandle="sendMsgHandle" class="container-content-chat" />
      <ChatGroupUser :onlineUsers = "onlineUsers" class="container-content-online" />
    </div>
    <audio ref="audioRef">
      <source src="../../assets/tip.mp3" type="audio/mpeg">
    </audio>
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
    width: 1400px;
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
