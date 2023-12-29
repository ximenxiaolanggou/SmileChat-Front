<script setup lang="ts">
import ChatCard from './ChatCard.vue'
import ChatUserCard from './ChatUserCard.vue'
import Card from '@/types/ChatCard'
import { ref, onMounted } from 'vue'
import { friends } from '@/api/chat/friends'
import FriendModel from '@/types/friend/friend'

let activeFlag = ref(1)
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

const commonToolChange = (arg: number) => {
  activeFlag.value = arg
}

let cards = ref<Card[]>([
  {
    id: '1',
    title: '全员群',
    subTitle: '官方',
    avatar:
      'https://thirdwx.qlogo.cn/mmopen/vi_32/m5tWwzPm5KULpuWEmAicrrQasbS8WlKZicMD8qkAOhk3T5ciaMYqJVIniaS7RgObgYqaemvHj7LumsyialRd6InFhLA/132',
    latestMsg: '西门小狼狗: hello world haha aaaaaaaaaaaaaaaaaaaaaa',
    latestMsgTime: '12:12',
  },
  {
    id: '2',
    title: '全员群',
    subTitle: '官方',
    avatar:
      'https://thirdwx.qlogo.cn/mmopen/vi_32/m5tWwzPm5KULpuWEmAicrrQasbS8WlKZicMD8qkAOhk3T5ciaMYqJVIniaS7RgObgYqaemvHj7LumsyialRd6InFhLA/132',
    latestMsg: '西门小狼狗: hello world haha aaaaaaaaaaaaaaaaaaaaaa',
    latestMsgTime: '12:12',
  },
  {
    id: '3',
    title: '全员群',
    subTitle: '官方',
    avatar:
      'https://thirdwx.qlogo.cn/mmopen/vi_32/m5tWwzPm5KULpuWEmAicrrQasbS8WlKZicMD8qkAOhk3T5ciaMYqJVIniaS7RgObgYqaemvHj7LumsyialRd6InFhLA/132',
    latestMsg: '西门小狼狗: hello world haha aaaaaaaaaaaaaaaaaaaaaa',
    latestMsgTime: '12:12',
  },
])
</script>
<template>
  <div class="menu">
    <div class="nav-bar">
      <!--导航栏上面公用操作-->
      <div class="nav-bar-common">
        <img
          src="https://thirdwx.qlogo.cn/mmopen/vi_32/m5tWwzPm5KULpuWEmAicrrQasbS8WlKZicMD8qkAOhk3T5ciaMYqJVIniaS7RgObgYqaemvHj7LumsyialRd6InFhLA/132"
        />
        <span
          @click="commonToolChange(1)"
          :class="[
            'iconfont',
            'icon-chat',
            activeFlag == 1 ? 'color-blue' : '',
          ]"
        ></span>
        <span
          @click="commonToolChange(2)"
          :class="[
            'iconfont',
            'icon-yonghuguanli_huaban',
            activeFlag == 2 ? 'color-blue' : '',
          ]"
        ></span>
      </div>
      <div class="nav-bar-tool">
        <span class="iconfont icon-dengchu"></span>
      </div>
    </div>
    <!-- 聊天 -->
    <div class="channel" v-if="activeFlag == 1">
      <ChatCard
        class="channel-item"
        v-for="card in cards"
        :key="card.id"
        :ChatCard="card"
      />
    </div>
    <!-- 用户 -->
    <div class="user" v-else>
      <div class="user-header">
        <el-input
          class="user-header-input"
          clearable
          v-model="searchKey"
          placeholder="搜索"
        />
        <span class="iconfont icon-adduser user-header-add"></span>
      </div>
      <el-scrollbar class="user-item">
        <ChatUserCard
          class="user-item-card"
          v-for="(friend, index) in friendList"
          :key="index"
          :friend="friend"
        />
      </el-scrollbar>
    </div>
  </div>
</template>

<style scoped lang="scss">
.menu {
  background-color: #272a37;
  display: flex;
  .nav-bar {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .nav-bar-common {
      height: 250px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      img {
        width: 80%;
        border-radius: 50%;
      }
      span {
        color: white;
        font-size: 36px;
      }
      :hover {
        color: dodgerblue;
        cursor: pointer;
      }
    }
    .nav-bar-tool {
      margin-bottom: 10px;
      span {
        color: white;
        font-size: 36px;
      }
      :hover {
        color: dodgerblue;
        cursor: pointer;
      }
    }
  }
  .channel {
    flex: 4;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    height: 500px;
    .channel-item {
      margin-top: 10px;
    }
  }

  .user {
    flex: 4;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    .user-header {
      width: 100%;
      margin-top: 15px;
      margin-bottom: 10px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      .user-header-input {
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
}
.color-blue {
  color: dodgerblue !important;
}

.el-input__inner {
  background-color: pink !important;
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
