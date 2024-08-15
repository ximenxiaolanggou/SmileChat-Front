<template>
  <!-- 聊天 -->
  <el-scrollbar class="chat-nav-session">
    <ChatNavSessionCard
      class="chat-nav-session-item"
      v-for="(sessionDetail, index) in sessionDetails"
      :key="index"
      :sessionDetail="sessionDetail"
      @click="activeChatSessionHandle(sessionDetail.id)"
    />
  </el-scrollbar>
</template>

<script setup lang="ts">
import SessionDetail from '@/types/nav/SessionDetail'
import ChatNavSessionCard from './ChatNavSessionCard.vue'
import { ref, onMounted } from 'vue'
import {sessions} from "@/api/chat/ChatSession";
import useChatSessionStore from "@/store/modules/chatSessionStore"
let sessionDetails = ref<SessionDetail[]>([])
const chatSessionStore = useChatSessionStore()
onMounted(() => {
  sessions("")
      .then((res) => {
        sessionDetails.value = res.data
        activeChatSessionHandle(sessionDetails.value[0]?.id)
      })
})

/**
 * 点击会话
 */
const activeChatSessionHandle = (chatSessionId:string | undefined)=> {
  chatSessionStore.activeSession = chatSessionId
}

// let sessionDetails = ref<SessionDetail[]>([
//   {
//     id: '1',
//     title: '全员群',
//     subTitle: '官方',
//     avatar:
//       'https://thirdwx.qlogo.cn/mmopen/vi_32/m5tWwzPm5KULpuWEmAicrrQasbS8WlKZicMD8qkAOhk3T5ciaMYqJVIniaS7RgObgYqaemvHj7LumsyialRd6InFhLA/132',
//     latestMsg: '西门小狼狗: hello world haha aaaaaaaaaaaaaaaaaaaaaa',
//     latestMsgTime: '12:12',
//   },
//   {
//     id: '2',
//     title: '全员群',
//     subTitle: '官方',
//     avatar:
//       'https://thirdwx.qlogo.cn/mmopen/vi_32/m5tWwzPm5KULpuWEmAicrrQasbS8WlKZicMD8qkAOhk3T5ciaMYqJVIniaS7RgObgYqaemvHj7LumsyialRd6InFhLA/132',
//     latestMsg: '西门小狼狗: hello world haha aaaaaaaaaaaaaaaaaaaaaa',
//     latestMsgTime: '12:12',
//   },
//   {
//     id: '3',
//     title: '全员群',
//     subTitle: '官方',
//     avatar:
//       'https://thirdwx.qlogo.cn/mmopen/vi_32/m5tWwzPm5KULpuWEmAicrrQasbS8WlKZicMD8qkAOhk3T5ciaMYqJVIniaS7RgObgYqaemvHj7LumsyialRd6InFhLA/132',
//     latestMsg: '西门小狼狗: hello world haha aaaaaaaaaaaaaaaaaaaaaa',
//     latestMsgTime: '12:12',
//   },
// ])
</script>

<style scoped lang="scss">
.chat-nav-session {
  width: 100%;
  height: 100%;
  .chat-nav-session-item {
    margin: 10px auto;
    cursor: pointer;
  }
}
</style>
