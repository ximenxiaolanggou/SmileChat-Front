<template>
  <div v-on:contextmenu="showContextMenu" class="container-group-user-item">
    <img :src="UserItem.headimgurl" alt="" />
    <span :class="{online: !!UserItem.isOnline}">{{ UserItem.nickname}}</span>
    <div
      :style="rightClickMenuStyle"
      :class="[
        'container-group-user-item-right-cilck-detail',
        rightClickMenuVisiable ? 'right-click-menu-visiable' : '',
      ]"
    >
      <div class="aite">@ 艾特Ta</div>
      <div class="add-friend">+ 添加好友</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import ChatUser from '@/types/ChatUserCard'
defineProps<{ UserItem: ChatUser}>()


const rightClickMenuStyle = reactive({ offsetX: '0px', offsetY: '0px' })

let rightClickMenuVisiable = ref(false)

const showContextMenu = (e: any) => {
  e.preventDefault() // Prevent the browser's context menu from showing up
  rightClickMenuStyle.offsetX = e.offsetX + 'px'
  rightClickMenuStyle.offsetY = e.offsetY + 'px'
  rightClickMenuVisiable.value = true
  console.log('Right clicked!', e)
}
</script>

<style scoped lang="scss">
.container-group-user-item {
  padding: 10px;
  line-height: 30px;
  position: relative;
  img {
    width: 30px;
    border-radius: 50%;
    vertical-align: top;
  }
  .online {
    color: limegreen;
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
  .container-group-user-item-right-cilck-detail {
    padding: 5px;
    border-radius: 5px;
    background-color: #272a37;
    position: absolute;
    display: none;
  }

  .right-click-menu-visiable {
    display: block;
  }
}
:hover {
  background-color: #424656;
  border-radius: 8px;
  cursor: pointer;
}
</style>
