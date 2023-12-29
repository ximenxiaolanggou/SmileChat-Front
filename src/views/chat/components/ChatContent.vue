<template>
  <div class="container-content">
    <div class="container-content-msg">
      <ChatContentMsgItem
        v-for="message in messages"
        :key="message.id"
        :message="message"
      />
    </div>
    <div class="container-content-tool">
      <ChatContentTool />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import ChatContentMsgItem from './content/ChatContentMsgItem.vue'
import ChatContentTool from './content/ChatContentTool.vue'
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
.container-content {
  border-radius: 30px;
  background-clip: content-box;
  background-color: #323644;
  // padding: 20px;
  .container-content-msg {
    overflow-y: scroll;
    height: 90%;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 5px;
  }
  .container-content-tool {
    margin-top: 10px;
  }
}

/* 修改滚动条的颜色和宽度 */
::-webkit-scrollbar {
  width: 10px; /* 设置滚动条宽度 */
}

/* 滚动槽 */
::-webkit-scrollbar-track {
  background-color: #323644; /* 设置滚动槽的颜色 */
}

/* 滚动条的滑块 */
::-webkit-scrollbar-thumb {
  background-color: #888; /* 设置滚动条滑块的颜色 */
  border-radius: 5px; /* 设置滑块的圆角 */
}

/* 当鼠标悬停在滑块上时的样式 */
::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}
</style>
