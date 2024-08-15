<template>
  <div class="chat-content-tool">
    <div class="chat-content-tool-input">
      <span class="iconfont icon-yuyin chat-content-tool-input-voice"></span>
      <el-upload class="chat-content-tool-input-upload-component"
        :action="uploadPath"
        :headers="headers"
        :before-upload="fileBeforeupload"
         :show-file-list="false"
      >
        <span class="iconfont icon-wenjianjia chat-content-tool-input-wenjianjia"></span>
      </el-upload>
      <span class="iconfont icon-Smile chat-content-tool-input-smile" @click="switchEmojiVisibleHandle">
        <Picker v-if="emojiVisible" class="chat-content-tool-input-emoji" :data="emojiIndex" set="twitter" @select="showEmoji" />
      </span>
      <el-input
        ref="contentRef"
        type="text"
        placeholder="输入内容"
        v-model="content"
        class="chat-content-tool-input-text"
        @keyup.enter="sendMsg"
      ></el-input>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {FILE_UPLOAD} from "@/api/chat/ChatSessionMessage";
import useChatSessionStore from "@/store/modules/chatSessionStore";
import data from "emoji-mart-vue-fast/data/all.json";
import { Picker, EmojiIndex } from "emoji-mart-vue-fast/src";
let content = ref('')
let uploadPath = ref()
let emojiVisible = ref(false);
const contentRef = ref()

const emojiIndex = new EmojiIndex(data)
const emojisOutput = ref('')
const showEmoji = (emoji)=> {
  content.value = content.value + emoji.native;
  contentRef.value.focus()
}

// Emoji 显示和隐藏事件
const switchEmojiVisibleHandle = (e) => {
  emojiVisible.value = !emojiVisible.value;
}

const chatSessionStore = useChatSessionStore();

const emit = defineEmits(['sendMsg'])

let headers = ref({
  Authorization: `bearer ${localStorage.getItem('TOKEN')}`
})

// 文件上传前钩子
const fileBeforeupload = () => {
  uploadPath.value = FILE_UPLOAD + '/' + chatSessionStore.activeSession;
}

/**
 * 发送消息
 */
const sendMsg = () => {
  if(content.value && !!content.value.trim() ) {
    emit('sendMsg', 101,content.value)
  }
  content.value = ''
}


</script>
<style scoped lang="scss">
.chat-content-tool {
  height: 50px;
  width: 95%;
  border-radius: 10px;
  margin: 5px auto;
  background-color: #424656;
  .chat-content-tool-input {
    margin-left: 10px;
    height: 50px;
    display: flex;
    align-items: center;
    .chat-content-tool-input-voice {
      font-size: 28px;
    }
    .chat-content-tool-input-upload-component {
      display: flex;
      align-items: center;
      .chat-content-tool-input-wenjianjia {
        margin-left: 5px;
        font-size: 28px;
      }
      :hover {
        cursor: pointer;
      }
    }
    .chat-content-tool-input-smile {
      margin-left: 5px;
      font-size: 25px;
      position: relative;
      .chat-content-tool-input-emoji {
        transform: translate(-50%, -108%);
        //top: -425px;
        //left: -200px;
        position: absolute;
      }
    }
    :hover {
      cursor: pointer;
    }
    .chat-content-tool-input-text {
      margin-left: 10px;
      width: 600px;
      ::v-deep(.el-input__wrapper) {
        box-shadow: 0 0 0 0;
        background-color: transparent;
        outline-color: transparent;
      }
      ::v-deep(.el-input__inner) {
        color: azure;
        border: 0px solid transparent;
      }
    }
  }
}
</style>
