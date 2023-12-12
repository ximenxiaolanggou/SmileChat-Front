<template>
  <div class="chat-card">
    <img :src="ChatCard.avatar" alt="">
    <div class="chat-card-main">
        <span class="chat-card-main-title">{{ ChatCard.title }}</span>
        <span class="chat-card-main-subtitle">{{ ChatCard.subTitle }}</span>
      <div class="chat-card-main-msg">
        {{ ChatCard.latestMsg }}
      </div>
    </div>
    <span class="latest-msg-time">{{ChatCard.latestMsgTime}}</span>
  </div>
</template>

<script setup lang="ts">
import Card from "@/api/chat/ChatCard";
defineProps<{ChatCard:Card}>()

</script>

<style scoped lang="scss">
.chat-card {
  border-radius: 10px;
  width: 90%;
  height: 60px;
  background-color: #2C3E50;
  display: flex;
  align-items: center;
  justify-content: space-around;
  transition: 0.3s;
  img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }
  .chat-card-main {
    color: white;
    width: 170px;
    .chat-card-main-title {
      font-size: 16px;
      font-weight: bold;
    }
    .chat-card-main-subtitle {
      font-size: 12px;
      color: darkgoldenrod;
      padding: 1px;
      margin-left: 5px;
      background-color: #EFE2BB;
      border-radius: 3px;
    }
    .chat-card-main-msg {
      font-size: 12px;
      color: lightgray;
      margin-top: 10px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  .latest-msg-time {
    width: 40px;
    font-size: 12px;
    color: darkgrey;

  }
}
.chat-card:hover {
  box-shadow: 0px 0px 20px;
}
</style>
