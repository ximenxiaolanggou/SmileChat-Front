<template>
  <div class="container-group-user-item">
    <img :src="userItem.avatar" alt="">
    <span>{{ userItem.nickname }}</span>
  </div>
</template>

<script setup lang="ts">

const userItemProps = defineProps<{UserItem: {id:string, nickname:string, avatar:string}}>()
const userItem = userItemProps.UserItem
</script>

<style scoped lang="scss">
.container-group-user-item {
  padding: 10px;
  line-height: 30px;
    img {
      width: 30px;
      border-radius: 50%;
      vertical-align: top;
    }
    span {
      display: inline-block;
      width: 70%;
      margin-left: 10px;
      color: #fff;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
}
:hover {
  background-color: #424656;
  border-radius: 8px;
  cursor: pointer;
}
</style>
