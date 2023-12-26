<script setup lang="ts">
import ChatCard from './ChatCard.vue'
import ChatUserCard from './ChatUserCard.vue'
import Card from "@/types/ChatCard"
import UserCard from "@/types/ChatUserCard"
import {ref} from 'vue'
let activeFlag = ref(1)
let searchKey = ref('')

const commonToolChange = (arg:number) => {
  activeFlag.value = arg
}

let userCards = ref<UserCard[]>([
  {
    id: '1',
    avatar: 'https://thirdwx.qlogo.cn/mmopen/vi_32/m5tWwzPm5KULpuWEmAicrrQasbS8WlKZicMD8qkAOhk3T5ciaMYqJVIniaS7RgObgYqaemvHj7LumsyialRd6InFhLA/132',
    nickname: '西门小狼狗'
  },
  {
    id: '2',
    avatar: 'https://thirdwx.qlogo.cn/mmopen/vi_32/m5tWwzPm5KULpuWEmAicrrQasbS8WlKZicMD8qkAOhk3T5ciaMYqJVIniaS7RgObgYqaemvHj7LumsyialRd6InFhLA/132',
    nickname: '西门小狼狗'
  }
])

let cards = ref<Card[]>([
  {
    id: '1',
    title: '全员群',
    subTitle: '官方',
    avatar: 'https://thirdwx.qlogo.cn/mmopen/vi_32/m5tWwzPm5KULpuWEmAicrrQasbS8WlKZicMD8qkAOhk3T5ciaMYqJVIniaS7RgObgYqaemvHj7LumsyialRd6InFhLA/132',
    latestMsg: '西门小狼狗: hello world haha aaaaaaaaaaaaaaaaaaaaaa',
    latestMsgTime: '12:12'

  },
  {
    id: '2',
    title: '全员群',
    subTitle: '官方',
    avatar: 'https://thirdwx.qlogo.cn/mmopen/vi_32/m5tWwzPm5KULpuWEmAicrrQasbS8WlKZicMD8qkAOhk3T5ciaMYqJVIniaS7RgObgYqaemvHj7LumsyialRd6InFhLA/132',
    latestMsg: '西门小狼狗: hello world haha aaaaaaaaaaaaaaaaaaaaaa',
    latestMsgTime: '12:12'

  },
  {
    id: '3',
    title: '全员群',
    subTitle: '官方',
    avatar: 'https://thirdwx.qlogo.cn/mmopen/vi_32/m5tWwzPm5KULpuWEmAicrrQasbS8WlKZicMD8qkAOhk3T5ciaMYqJVIniaS7RgObgYqaemvHj7LumsyialRd6InFhLA/132',
    latestMsg: '西门小狼狗: hello world haha aaaaaaaaaaaaaaaaaaaaaa',
    latestMsgTime: '12:12'

  },
])
</script>
<template>
  <div class="menu">
    <div class="nav-bar">
      <!--导航栏上面公用操作-->
      <div class="nav-bar-common">
        <img src="https://thirdwx.qlogo.cn/mmopen/vi_32/m5tWwzPm5KULpuWEmAicrrQasbS8WlKZicMD8qkAOhk3T5ciaMYqJVIniaS7RgObgYqaemvHj7LumsyialRd6InFhLA/132"/>
        <span @click="commonToolChange(1)" :class="['iconfont', 'icon-chat', activeFlag == 1 ? 'color-blue': '']"></span>
        <span @click="commonToolChange(2)" :class="['iconfont', 'icon-yonghuguanli_huaban', activeFlag == 2 ? 'color-blue': '']"></span>
      </div>
      <div class="nav-bar-tool">
        <span class="iconfont icon-dengchu"></span>
      </div>
    </div>
    <!-- 聊天 -->
    <div class="channel" v-if="activeFlag == 1">
      <ChatCard class="channel-item" v-for="card in cards" :key="card.id" :ChatCard="card"/>
    </div>
    <!-- 用户 -->
    <div class="user" v-else>
      <div class="user-header">
        <el-input class="user-header-input" clearable v-model="searchKey" placeholder="搜索" />
        <span class="iconfont icon-adduser user-header-add"></span>
      </div>
      <ChatUserCard
        class="user-item"
        v-for="card in userCards"
        :key="card.id"
        :ChatUserCard="card"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.menu {
  background-color: #272A37;
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
    .channel-item {
      margin-top: 10px;
    }
  }

  .user {
    flex: 4;
    display: flex;
    flex-direction: column;
    align-items: center;
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
      margin-top: 10px;
    }
  }
}
.color-blue {
  color: dodgerblue !important;
}

.el-input__inner {
  background-color: pink !important;
}
</style>
