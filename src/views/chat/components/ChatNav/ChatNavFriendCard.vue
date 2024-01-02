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
.chat-nav-friend-card {
  border-radius: 10px;
  width: 90% !important;
  height: 60px;
  background-color: #2c3e50;
  display: flex;
  align-items: center;
  justify-content: start;
  transition: 0.3s;
  margin: 10px auto;
  img {
    width: 50px;
    height: 50px;
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
