<template>
  <div class="chat-content">
    <el-scrollbar class="chat-content-msg" id="sc" @scroll="scrollHandle" ref="scrollbarRef">
      <div ref="innerRef">
        <ChatContentMsgItem
            v-for="message in messages"
            :key="message.id"
            :message="message"
        />
      </div>
    </el-scrollbar>
    <div class="chat-content-tool">
      <ChatContentTool @sendMsg="sendMsg" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, inject  } from 'vue'
import { ElScrollbar } from 'element-plus'
import ChatContentMsgItem from './ChatContentMsgItem.vue'
import ChatContentTool from './ChatContentTool.vue'
import {getChatSessinMessage} from "@/api/chat/ChatSessionMessage";
import BaseMessage from "@/types/message/BaseMessage";
import useChatSessionStore from "@/store/modules/chatSessionStore"
import TextMessage from "@/types/message/TextMessage";
const chatSessionStore = useChatSessionStore();
const props = defineProps<{message: BaseMessage | undefined}>()
const emits = defineEmits(['sendMsgHandle'])
let messages = ref<BaseMessage[]>([])
const scrollbarRef = ref<InstanceType<typeof ElScrollbar>>()
let innerRef = ref<HTMLDivElement>()


onMounted(() => {
  // chageSessionMessage("1");
})

// 滚动事件
const scrollHandle = (e:any) => {
  console.log('scrollHandle', e)
}

const chageSessionMessage = (chatId:string) => {
  getChatSessinMessage("1")
      .then(res => {
        messages.value = res.data;
        setTimeout(setScrollTopHandle, 10)
      })
}

let setScrollTopHandle = () => scrollbarRef.value!.setScrollTop(innerRef.value!.clientHeight + 1000)

watch(() => chatSessionStore.activeSession, (newVal:any, oldVal:any) => {
  chageSessionMessage(newVal)
})

watch(() => props.message, (newVal, oldVal) => {
  let msg = newVal as TextMessage
  messages.value.push(msg)
  setTimeout( setScrollTopHandle, 50)
})


/**
 * 发送消息
 */
const sendMsg = (msgType: number,val: any) => {
  const data = {
    msgType,
    chatSessionId: chatSessionStore.activeSession ,
    content: val
  }
  emits('sendMsgHandle', JSON.stringify(data))
}



// let messages = reactive<TextMessage[]>([
//   {
//     id: '1',
//     messageType: 1,
//     senderId: '1',
//     senderName: '西门',
//     messageOwner: 0,
//     senderAvatar:
//       'https://thirdwx.qlogo.cn/mmopen/vi_32/m5tWwzPm5KULpuWEmAicrrQasbS8WlKZicMD8qkAOhk3T5ciaMYqJVIniaS7RgObgYqaemvHj7LumsyialRd6InFhLA/132',
//     textMessageContent: 'hellohellohehellohello',
//   },
//   {
//     id: '2',
//     messageType: 1,
//     senderId: '1',
//     senderName: '西门',
//     messageOwner: 1,
//     senderAvatar:
//       'https://thirdwx.qlogo.cn/mmopen/vi_32/m5tWwzPm5KULpuWEmAicrrQasbS8WlKZicMD8qkAOhk3T5ciaMYqJVIniaS7RgObgYqaemvHj7LumsyialRd6InFhLA/132',
//     textMessageContent: 'helllohellohellohellohello',
//   },
//   {
//     id: '3',
//     messageType: 1,
//     senderId: '1',
//     senderName: '西门',
//     messageOwner: 0,
//     senderAvatar:
//       'https://thirdwx.qlogo.cn/mmopen/vi_32/m5tWwzPm5KULpuWEmAicrrQasbS8WlKZicMD8qkAOhk3T5ciaMYqJVIniaS7RgObgYqaemvHj7LumsyialRd6InFhLA/132',
//     textMessageContent: 'helloheelllohellohello',
//   },
//   {
//     id: '3',
//     messageType: 1,
//     senderId: '1',
//     senderName: '西门',
//     messageOwner: 0,
//     senderAvatar:
//       'https://thirdwx.qlogo.cn/mmopen/vi_32/m5tWwzPm5KULpuWEmAicrrQasbS8WlKZicMD8qkAOhk3T5ciaMYqJVIniaS7RgObgYqaemvHj7LumsyialRd6InFhLA/132',
//     textMessageContent: 'helloheelllohellohello',
//   },
//   {
//     id: '3',
//     messageType: 1,
//     senderId: '1',
//     senderName: '西门',
//     messageOwner: 0,
//     senderAvatar:
//       'https://thirdwx.qlogo.cn/mmopen/vi_32/m5tWwzPm5KULpuWEmAicrrQasbS8WlKZicMD8qkAOhk3T5ciaMYqJVIniaS7RgObgYqaemvHj7LumsyialRd6InFhLA/132',
//     textMessageContent: 'helloheelllohellohello',
//   },
//   {
//     id: '3',
//     messageType: 1,
//     senderId: '1',
//     senderName: '西门',
//     messageOwner: 0,
//     senderAvatar:
//       'https://thirdwx.qlogo.cn/mmopen/vi_32/m5tWwzPm5KULpuWEmAicrrQasbS8WlKZicMD8qkAOhk3T5ciaMYqJVIniaS7RgObgYqaemvHj7LumsyialRd6InFhLA/132',
//     textMessageContent: 'helloheelllohellohello',
//   },
//   {
//     id: '3',
//     messageType: 1,
//     senderId: '1',
//     senderName: '西门',
//     messageOwner: 0,
//     senderAvatar:
//       'https://thirdwx.qlogo.cn/mmopen/vi_32/m5tWwzPm5KULpuWEmAicrrQasbS8WlKZicMD8qkAOhk3T5ciaMYqJVIniaS7RgObgYqaemvHj7LumsyialRd6InFhLA/132',
//     textMessageContent: 'helloheelllohellohello',
//   },
//   {
//     id: '3',
//     messageType: 1,
//     senderId: '1',
//     senderName: '西门',
//     messageOwner: 0,
//     senderAvatar:
//       'https://thirdwx.qlogo.cn/mmopen/vi_32/m5tWwzPm5KULpuWEmAicrrQasbS8WlKZicMD8qkAOhk3T5ciaMYqJVIniaS7RgObgYqaemvHj7LumsyialRd6InFhLA/132',
//     textMessageContent: 'helloheelllohellohello',
//   },
//   {
//     id: '3',
//     messageType: 1,
//     senderId: '1',
//     senderName: '西门',
//     messageOwner: 0,
//     senderAvatar:
//       'https://thirdwx.qlogo.cn/mmopen/vi_32/m5tWwzPm5KULpuWEmAicrrQasbS8WlKZicMD8qkAOhk3T5ciaMYqJVIniaS7RgObgYqaemvHj7LumsyialRd6InFhLA/132',
//     textMessageContent: 'helloheelllohellohello',
//   },
//   {
//     id: '3',
//     messageType: 1,
//     senderId: '1',
//     senderName: '西门',
//     messageOwner: 0,
//     senderAvatar:
//       'https://thirdwx.qlogo.cn/mmopen/vi_32/m5tWwzPm5KULpuWEmAicrrQasbS8WlKZicMD8qkAOhk3T5ciaMYqJVIniaS7RgObgYqaemvHj7LumsyialRd6InFhLA/132',
//     textMessageContent: 'helloheelllohellohello',
//   },
//   {
//     id: '3',
//     messageType: 1,
//     senderId: '1',
//     senderName: '西门',
//     messageOwner: 0,
//     senderAvatar:
//       'https://thirdwx.qlogo.cn/mmopen/vi_32/m5tWwzPm5KULpuWEmAicrrQasbS8WlKZicMD8qkAOhk3T5ciaMYqJVIniaS7RgObgYqaemvHj7LumsyialRd6InFhLA/132',
//     textMessageContent: 'helloheelllohellohello',
//   },
//   {
//     id: '3',
//     messageType: 1,
//     senderId: '1',
//     senderName: '西门',
//     messageOwner: 0,
//     senderAvatar:
//       'https://thirdwx.qlogo.cn/mmopen/vi_32/m5tWwzPm5KULpuWEmAicrrQasbS8WlKZicMD8qkAOhk3T5ciaMYqJVIniaS7RgObgYqaemvHj7LumsyialRd6InFhLA/132',
//     textMessageContent: 'helloheelllohellohello',
//   },
//   {
//     id: '3',
//     messageType: 1,
//     senderId: '1',
//     senderName: '西门',
//     messageOwner: 0,
//     senderAvatar:
//       'https://thirdwx.qlogo.cn/mmopen/vi_32/m5tWwzPm5KULpuWEmAicrrQasbS8WlKZicMD8qkAOhk3T5ciaMYqJVIniaS7RgObgYqaemvHj7LumsyialRd6InFhLA/132',
//     textMessageContent: 'helloheelllohellohello',
//   },
// ])
</script>

<style scoped lang="scss">
.chat-content {
  border-radius: 20px;
  height: 730px;
  margin: 10px auto;
  background-clip: content-box;
  background-color: #323644;
  .chat-content-msg {
    height: 650px;
    margin: 10px;
  }
  .chat-content-tool {
    height: 50px;
    margin-top: 10px;
  }
}
</style>
