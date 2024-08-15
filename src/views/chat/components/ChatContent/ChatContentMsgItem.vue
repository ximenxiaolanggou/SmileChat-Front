<template>
  <div
    :class="[
      'chat-content-msg-item',
      message.messageOwner ? 'flex-right' : 'flex-left',
    ]"
  >
    <img
      class="chat-content-msg-item-avatar"
      :src="message.avatar"
      alt=""
    />
    <div
      :class="[
        'chat-content-msg-item-sender',
        message.messageOwner ? 'msg-sender-right' : 'msg-sender-left',
      ]"
    >
      <div
        :class="[
          'chat-content-msg-item-sender-name',
          message.messageOwner
            ? 'msg-sender-name-right'
            : 'msg-sender-name-left',
        ]"
      >
        {{ message.senderName }}
      </div>
      <div
        :class="[
          'chat-content-msg-item-sender-content',
          message.messageOwner
            ? 'msg-sender-content-right'
            : 'msg-sender-content-left',
        ]"
      >
        <div v-if="message.messageType == 101">
          <!-- 文本消息 -->
          {{ message.content }}
        </div>
        <div v-else-if="message.messageType == 104">
          <!-- 图片消息 -->
          <img style="width: 200px;" :src="`${previewUrl}/${message.messageFile?.diskPath}`" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseMessage from '@/types/message/BaseMessage'
import TextMessage from '@/types/message/TextMessage'
import {FILE_PREVIEW} from "@/api/chat/ChatSessionMessage";
import {ref} from 'vue'

const props = defineProps<{ message: BaseMessage }>()

let previewUrl = ref(FILE_PREVIEW)

let message = props.message as TextMessage
// const type = message.messageType
// switch(type) {
//     case 1:
//         message = message as TextMessage
//         console.log('文本类型', message)
//         break;
//     case 2:
//         break;
//     case 3:
//         break;
//     default:
//         break;
// }
</script>
<style scoped lang="scss">
.chat-content-msg-item {
  border-radius: 10px;
  padding: 5px;
  display: flex;
  .chat-content-msg-item-avatar {
    border-radius: 50%;
    height: 50px;
  }
  .chat-content-msg-item-sender {
    margin-left: 10px;
    .chat-content-msg-item-sender-name {
      font-weight: 400;
      color: #999;
    }
    .chat-content-msg-item-sender-content {
      border-radius: 20px;
      border-top-left-radius: 0px;
      padding: 10px;
      background-color: #282a35;
      margin-top: 5px;
      color: #fff;
      font-size: 20px;
      line-height: 22px;
      word-break: break-all;
    }
  }
}

.flex-left {
  justify-content: start;
}

.flex-right {
  flex-direction: row-reverse;
  justify-content: end;
}

.msg-sender-left {
  margin-left: 10px;
  margin-right: 0px;
}

.msg-sender-right {
  margin-left: 0px;
  margin-right: 10px;
}

.msg-sender-name-left {
  text-align: left;
}

.msg-sender-name-right {
  text-align: right;
}

.msg-sender-content-left {
  border-radius: 20px !important;
  border-top-left-radius: 0px !important;
}

.msg-sender-content-right {
  border-radius: 20px !important;
  border-top-right-radius: 0px !important;
}
</style>
