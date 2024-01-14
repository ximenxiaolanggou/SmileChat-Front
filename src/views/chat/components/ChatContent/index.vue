<template>
  <div class="chat-content">
    <el-scrollbar class="chat-content-msg">
      <ChatContentMsgItem
        v-for="message in messages"
        :key="message.id"
        :message="message"
      />
    </el-scrollbar>
    <div class="chat-content-tool">
      <ChatContentTool />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import ChatContentMsgItem from './ChatContentMsgItem.vue'
import ChatContentTool from './ChatContentTool.vue'
import TextMessage from '@/types/message/TextMessage'
let messages = reactive<TextMessage[]>([
  {
    id: '1',
    messageType: 1,
    senderId: '1',
    senderName: '西门',
    messageOwner: 0,
    senderAvatar:
      'https://thirdwx.qlogo.cn/mmopen/vi_32/m5tWwzPm5KULpuWEmAicrrQasbS8WlKZicMD8qkAOhk3T5ciaMYqJVIniaS7RgObgYqaemvHj7LumsyialRd6InFhLA/132',
    textMessageContent: 'hellohellohehellohello',
  },
  {
    id: '2',
    messageType: 1,
    senderId: '1',
    senderName: '西门',
    messageOwner: 1,
    senderAvatar:
      'https://thirdwx.qlogo.cn/mmopen/vi_32/m5tWwzPm5KULpuWEmAicrrQasbS8WlKZicMD8qkAOhk3T5ciaMYqJVIniaS7RgObgYqaemvHj7LumsyialRd6InFhLA/132',
    textMessageContent: 'helllohellohellohellohello',
  },
  {
    id: '3',
    messageType: 1,
    senderId: '1',
    senderName: '西门',
    messageOwner: 0,
    senderAvatar:
      'https://thirdwx.qlogo.cn/mmopen/vi_32/m5tWwzPm5KULpuWEmAicrrQasbS8WlKZicMD8qkAOhk3T5ciaMYqJVIniaS7RgObgYqaemvHj7LumsyialRd6InFhLA/132',
    textMessageContent: 'helloheelllohellohello',
  },
  {
    id: '3',
    messageType: 1,
    senderId: '1',
    senderName: '西门',
    messageOwner: 0,
    senderAvatar:
      'https://thirdwx.qlogo.cn/mmopen/vi_32/m5tWwzPm5KULpuWEmAicrrQasbS8WlKZicMD8qkAOhk3T5ciaMYqJVIniaS7RgObgYqaemvHj7LumsyialRd6InFhLA/132',
    textMessageContent: 'helloheelllohellohello',
  },
  {
    id: '3',
    messageType: 1,
    senderId: '1',
    senderName: '西门',
    messageOwner: 0,
    senderAvatar:
      'https://thirdwx.qlogo.cn/mmopen/vi_32/m5tWwzPm5KULpuWEmAicrrQasbS8WlKZicMD8qkAOhk3T5ciaMYqJVIniaS7RgObgYqaemvHj7LumsyialRd6InFhLA/132',
    textMessageContent: 'helloheelllohellohello',
  },
  {
    id: '3',
    messageType: 1,
    senderId: '1',
    senderName: '西门',
    messageOwner: 0,
    senderAvatar:
      'https://thirdwx.qlogo.cn/mmopen/vi_32/m5tWwzPm5KULpuWEmAicrrQasbS8WlKZicMD8qkAOhk3T5ciaMYqJVIniaS7RgObgYqaemvHj7LumsyialRd6InFhLA/132',
    textMessageContent: 'helloheelllohellohello',
  },
  {
    id: '3',
    messageType: 1,
    senderId: '1',
    senderName: '西门',
    messageOwner: 0,
    senderAvatar:
      'https://thirdwx.qlogo.cn/mmopen/vi_32/m5tWwzPm5KULpuWEmAicrrQasbS8WlKZicMD8qkAOhk3T5ciaMYqJVIniaS7RgObgYqaemvHj7LumsyialRd6InFhLA/132',
    textMessageContent: 'helloheelllohellohello',
  },
  {
    id: '3',
    messageType: 1,
    senderId: '1',
    senderName: '西门',
    messageOwner: 0,
    senderAvatar:
      'https://thirdwx.qlogo.cn/mmopen/vi_32/m5tWwzPm5KULpuWEmAicrrQasbS8WlKZicMD8qkAOhk3T5ciaMYqJVIniaS7RgObgYqaemvHj7LumsyialRd6InFhLA/132',
    textMessageContent: 'helloheelllohellohello',
  },
  {
    id: '3',
    messageType: 1,
    senderId: '1',
    senderName: '西门',
    messageOwner: 0,
    senderAvatar:
      'https://thirdwx.qlogo.cn/mmopen/vi_32/m5tWwzPm5KULpuWEmAicrrQasbS8WlKZicMD8qkAOhk3T5ciaMYqJVIniaS7RgObgYqaemvHj7LumsyialRd6InFhLA/132',
    textMessageContent: 'helloheelllohellohello',
  },
  {
    id: '3',
    messageType: 1,
    senderId: '1',
    senderName: '西门',
    messageOwner: 0,
    senderAvatar:
      'https://thirdwx.qlogo.cn/mmopen/vi_32/m5tWwzPm5KULpuWEmAicrrQasbS8WlKZicMD8qkAOhk3T5ciaMYqJVIniaS7RgObgYqaemvHj7LumsyialRd6InFhLA/132',
    textMessageContent: 'helloheelllohellohello',
  },
  {
    id: '3',
    messageType: 1,
    senderId: '1',
    senderName: '西门',
    messageOwner: 0,
    senderAvatar:
      'https://thirdwx.qlogo.cn/mmopen/vi_32/m5tWwzPm5KULpuWEmAicrrQasbS8WlKZicMD8qkAOhk3T5ciaMYqJVIniaS7RgObgYqaemvHj7LumsyialRd6InFhLA/132',
    textMessageContent: 'helloheelllohellohello',
  },
  {
    id: '3',
    messageType: 1,
    senderId: '1',
    senderName: '西门',
    messageOwner: 0,
    senderAvatar:
      'https://thirdwx.qlogo.cn/mmopen/vi_32/m5tWwzPm5KULpuWEmAicrrQasbS8WlKZicMD8qkAOhk3T5ciaMYqJVIniaS7RgObgYqaemvHj7LumsyialRd6InFhLA/132',
    textMessageContent: 'helloheelllohellohello',
  },
  {
    id: '3',
    messageType: 1,
    senderId: '1',
    senderName: '西门',
    messageOwner: 0,
    senderAvatar:
      'https://thirdwx.qlogo.cn/mmopen/vi_32/m5tWwzPm5KULpuWEmAicrrQasbS8WlKZicMD8qkAOhk3T5ciaMYqJVIniaS7RgObgYqaemvHj7LumsyialRd6InFhLA/132',
    textMessageContent: 'helloheelllohellohello',
  },
])
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
