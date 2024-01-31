<template>
  <div class="chat-nav-friend-apply">
      <div class="chat-nav-friend-apply-search">
        <el-input
          clearable
          type="text"
          placeholder="输入内容"
          v-model="content"
          class="chat-nav-friend-apply-text"
          @keyup.enter="say"
        ></el-input>
      </div>
      <div class="chat-nav-friend-apply-search-res">

      </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

let content = ref('')

const say = () => {alert()}

</script>

<style scoped lang="scss">
.chat-nav-friend-apply {
  background-color: #272A37;
  padding: 15px;
  border-radius: 15px;
  .chat-nav-friend-apply-text {
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
  .chat-nav-friend-apply-search-res {
    margin-top: 10px;

  }
}

.search-res-visiable {
  display: block;
}
</style>
