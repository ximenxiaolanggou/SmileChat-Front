<script setup lang="ts">
import Card from '@/types/ChatCard'
import ChatNavSession from './ChatNavSession.vue'
import ChatNavFriend from './ChatNavFriend.vue'
import { ref, onMounted } from 'vue'
import { friends } from '@/api/chat/friends'
import FriendModel from '@/types/friend/friend'
import useUserInfoStore from "@/store/modules/user";

const userInfoStore = useUserInfoStore()

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
  <div class="chat-nav">
    <div class="chat-nav-bar">
      <!--导航栏上面公用操作-->
      <div class="chat-nav-bar-common">
        <img
          :src="userInfoStore.avatar"
        />
        <span
          @click="commonToolChange(1)"
          :class="[
            'iconfont',
            'icon-chat',
            activeFlag == 1 ? 'chat-nav-bar-active' : 'chat-nav-bar-inactive',
          ]"
        ></span>
        <span
          @click="commonToolChange(2)"
          :class="[
            'iconfont',
            'icon-yonghuguanli_huaban',
            activeFlag == 2 ? 'chat-nav-bar-active' : 'chat-nav-bar-inactive',
          ]"
        ></span>
      </div>
      <div class="chat-nav-bar-tool">
        <span class="iconfont icon-dengchu"></span>
      </div>
    </div>
    <div class="chat-nav-bar-content">
      <!-- 会话 -->
      <ChatNavSession v-if="activeFlag == 1" class="session" />

      <!-- 好友 -->
      <ChatNavFriend v-if="activeFlag == 2" class="friend" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.chat-nav {
  width: 400px;
  display: flex;
  .chat-nav-bar {
    width: 100px;
    margin: 20px 0px;
    border-right: 1px solid gray;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .chat-nav-bar-common {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      img {
        height: 60px;
        border-radius: 50%;
      }

      span {
        margin-top: 20px;
        font-size: 28px;
        cursor: pointer;
      }
    }
    .chat-nav-bar-tool {
      span {
        font-size: 28px;
      }
    }
  }
  .chat-nav-bar-content {
    width: 350px;
    box-sizing: border-box;
    border-right: 1px solid gray;

    .session {
    }
  }
}

.chat-nav-bar-active {
  color: lightseagreen;
}

.chat-nav-bar-inactive {
  color: #fff;
}
</style>
