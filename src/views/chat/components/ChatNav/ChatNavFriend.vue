<template>
  <div class="chat-nav-friend">
    <div class="chat-nav-friend-tool">
      <el-input
        class="friend-tool-search"
        clearable
        v-model="searchKey"
        placeholder="好友"
      />
      <span class="iconfont icon-adduser friend-tool-add"></span>
    </div>
    <ChatNavFriendCard
      class="chat-nav-friend-card"
      v-for="(friend, index) in friendList"
      :key="index"
      :friend="friend"
    />
  </div>
  <!-- <el-scrollbar class="chat-nav-friend-scrollbar" >
      11111
    </el-scrollbar> -->
</template>

<script setup lang="ts">
import ChatNavFriendCard from './ChatNavFriendCard.vue'
import FriendModel from '@/types/friend/friend'
import { ref, onMounted } from 'vue'

import { friends } from '@/api/chat/friends'

let searchKey = ref('')

let friendList = ref<FriendModel[]>([])

onMounted(() => {
  getFriendList()
})

// 获取好友列表
const getFriendList = async () => {
  const res = await friends(searchKey.value)
  friendList.value = res.data
}
</script>

<style scoped lang="scss">
.chat-nav-friend {
  height: 100%;
  width: 100%;
  .chat-nav-friend-tool {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    .friend-tool-search {
      width: 250px;
      margin-left: 10px;
    }
    ::v-deep(.el-input__wrapper) {
      box-shadow: 0 0 0 0;
      background-color: transparent;
      outline-color: transparent;
    }
    ::v-deep(.el-input__inner) {
      color: azure;
      border: 0px solid transparent;
    }
    .friend-tool-add {
      font-size: 20px;
      margin-right: 10px;
    }
  }
  flex: 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  .friend-header {
    width: 100%;
    margin-top: 15px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    .friend-header-input {
      width: 250px;
    }

    ::v-deep(.el-input__wrapper) {
      box-shadow: 0 0 0 0;
      background-color: transparent;
      outline-color: transparent;
    }
    ::v-deep(.el-input__inner) {
      color: azure;
      border: 0px solid transparent;
    }
    .user-header-add {
      color: white;
      font-size: 20px;
    }
    :hover {
      cursor: pointer;
    }
  }
  .user-item {
    height: 90%;
    .user-item-card {
      margin-top: 10px;
    }
  }
}
</style>
