<template>
  <div class="chat-nav-session-card">
    <img :src="sessionDetail.avatar" alt="" />
    <div class="chat-nav-session-card-main">
      <span class="chat-nav-session-card-main-title">
        {{ sessionDetail.title }}
      </span>
      <span class="chat-nav-session-card-main-subtitle">
        {{ sessionDetail.subTitle }}
      </span>
      <div class="chat-nav-session-card-main-msg">
        {{ sessionDetail.latestMsg }}
      </div>
    </div>
    <span class="latest-msg-time">{{ sessionDetail.latestMsgTime }}</span>
  </div>
</template>

<script setup lang="ts">
import SessionDetail from '@/types/nav/SessionDetail'
defineProps<{ sessionDetail: SessionDetail }>()
</script>

<style scoped lang="scss">
.chat-nav-session-card {
  border-radius: 10px;
  width: 90%;
  height: 60px;
  background-color: #2c3e50;
  display: flex;
  align-items: center;
  justify-content: space-around;
  transition: 0.3s;
  img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }
  .chat-nav-session-card-main {
    color: white;
    width: 170px;
    .chat-nav-session-card-main-title {
      font-size: 16px;
      font-weight: bold;
    }
    .chat-nav-session-card-main-subtitle {
      font-size: 12px;
      color: darkgoldenrod;
      padding: 1px;
      margin-left: 5px;
      background-color: #efe2bb;
      border-radius: 3px;
    }
    .chat-nav-session-card-main-msg {
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
.chat-nav-session-card:hover {
  box-shadow: 0px 0px 20px;
}
</style>
@/types/ChatCard
