<template>
  <div class="chat-nav-friend-card">
    <img :src="friend.headimgurl" alt="" />
    <span class="chat-nav-friend-card-nickname">{{ friend.nickname }}</span>
  </div>
</template>

<script setup lang="ts">
import Friend from '@/types/friend/friend'
defineProps<{ friend: Friend }>()
</script>

<style scoped lang="scss">
.cchat-nav-friend-card {
  border-radius: 10px;
  width: 90%;
  height: 60px;
  background-color: #2c3e50;
  display: flex;
  align-items: center;
  justify-content: start;
  transition: 0.3s;
  img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    margin-left: 10px;
  }
  .chat-nav-friend-card-nickname {
    margin-left: 20px;
    color: white;
    width: 170px;
  }
}
.chat-nav-friend-card:hover {
  box-shadow: 0px 0px 20px;
}
</style>
@/types/ChatCard
