<script setup lang="ts">
import ChatCard from './ChatCard.vue'
import Card from "@/api/chat/ChatCard";
import {ref} from 'vue'
let activeFlag = ref(1)

const commonToolChange = (arg) => {
  activeFlag.value = arg
}


let cards = ref<Card>([
  {
    title: '全员群',
    subTitle: '官方',
    avatar: 'https://thirdwx.qlogo.cn/mmopen/vi_32/m5tWwzPm5KULpuWEmAicrrQasbS8WlKZicMD8qkAOhk3T5ciaMYqJVIniaS7RgObgYqaemvHj7LumsyialRd6InFhLA/132',
    latestMsg: '西门小狼狗: hello world haha aaaaaaaaaaaaaaaaaaaaaa',
    latestMsgTime: '12:12'

  },
  {
    title: '全员群',
    subTitle: '官方',
    avatar: 'https://thirdwx.qlogo.cn/mmopen/vi_32/m5tWwzPm5KULpuWEmAicrrQasbS8WlKZicMD8qkAOhk3T5ciaMYqJVIniaS7RgObgYqaemvHj7LumsyialRd6InFhLA/132',
    latestMsg: '西门小狼狗: hello world haha aaaaaaaaaaaaaaaaaaaaaa',
    latestMsgTime: '12:12'

  },
  {
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
      <ChatCard class="channel-item" v-for="card in cards" :key="card" :ChatCard="card"/>
    </div>
    <!-- 用户 -->
    <div class="users" v-else>
      users
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

  .users {
    flex: 4;
  }
}
.color-blue {
  color: dodgerblue !important;
}
</style>
