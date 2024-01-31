<template>
  <div class="chat-nav-friend">
    <div class="chat-nav-friend-tool">
      <el-input
        class="friend-tool-search"
        clearable
        v-model="searchKey"
        placeholder="好友"
        @blur="getFriendList"
        @clear="getFriendListAfterClear"
        @keyup.enter="getFriendList"
      />
      <span
        @click="addFriendHandle"
        class="iconfont icon-adduser friend-tool-add"
      ></span>
    </div>
    <el-scrollbar class="chat-nav-friend-cards">
      <div style="height: 660px" ref="scroLoading">
        <ChatNavFriendCard
          class="chat-nav-friend-card-item"
          v-for="(friend, index) in friendList"
          :key="index"
          :friend="friend"
        />
      </div>
      <el-empty v-if="friendsEmptyFlag" :image-size="100" />
    </el-scrollbar>
    <!--  -->
  </div>
  <ChatNavFriendApply class="friend-apply-model"/>
</template>

<script setup lang="ts">
import { ElLoading } from 'element-plus'
import ChatNavFriendCard from './ChatNavFriendCard.vue'
import FriendModel from '@/types/friend/friend'
import ChatNavFriendApply from './ChatNavFriendApply.vue'
import { ref, onMounted } from 'vue'

import { friends } from '@/api/chat/friends'

let searchKey = ref('')

let scroLoading = ref()

let friendsEmptyFlag = ref(false)

let friendList = ref<FriendModel[]>([])

// 加载框实例
let loadingInstance = null

// 添加好友按钮事件
const addFriendHandle = () => {

}

// 清除后获取好友列表
const getFriendListAfterClear = () => {
  searchKey.value = ''
  getFriendList()
}
onMounted(() => {
  getFriendList()
})

// 获取好友列表
const getFriendList = async () => {
  console.log('@@@', scroLoading.value)
  loadingInstance = ElLoading.service({
    fullscreen: false,
    target: scroLoading.value,
    background: 'transparent',
  })

  const res = await friends(searchKey.value)
  loadingInstance.close()
  friendList.value = res.data
  friendsEmptyFlag.value = res.data?.length == 0
}
</script>

<style scoped lang="scss">
.chat-nav-friend {
  height: 740px;
  width: 100%;
  .chat-nav-friend-tool {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
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
      color: #fff;
      font-size: 20px;
      margin-right: 10px;
    }
    :hover {
      cursor: pointer;
    }
  }
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
  .chat-nav-friend-cards {
    height: 660px;
    width: 100%;
    .chat-nav-friend-card-item {
      margin-top: 10px;
      cursor: pointer;
    }
  }
}

.loadingClass {
  height: 200px;
}

.friend-apply-model {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  top: 100px
}
</style>
