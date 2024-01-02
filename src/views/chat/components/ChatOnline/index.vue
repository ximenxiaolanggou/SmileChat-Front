<template>
    <div class="container-online-user">
      <div class="container-online-user-count">在线人数: {{ 82 }} 人</div>
      <el-scrollbar class="container-online-user-items">
        <ChatGroupUserItem
          v-for="user in users"
          :key="user.id"
          :UserItem="user"
        />
      </el-scrollbar>
    </div>
  </template>
  
  <script setup lang="ts">
  import { reactive } from 'vue'
  import ChatGroupUserItem from './ChatOnlineUserItem.vue'
  import ChatUser from '@/types/ChatUserCard'
  
  const users = reactive<ChatUser[]>([
    {
      id: '1',
      avatar:
        'https://thirdwx.qlogo.cn/mmopen/vi_32/m5tWwzPm5KULpuWEmAicrrQasbS8WlKZicMD8qkAOhk3T5ciaMYqJVIniaS7RgObgYqaemvHj7LumsyialRd6InFhLA/132',
      nickname: '西门小狼狗西门小狼狗西门小狼狗西门小狼狗西门小狼狗',
    },
    {
      id: '2',
      avatar:
        'https://thirdwx.qlogo.cn/mmopen/vi_32/m5tWwzPm5KULpuWEmAicrrQasbS8WlKZicMD8qkAOhk3T5ciaMYqJVIniaS7RgObgYqaemvHj7LumsyialRd6InFhLA/132',
      nickname: '西门小狼狗',
    },
    {
      id: '3',
      avatar:
        'https://thirdwx.qlogo.cn/mmopen/vi_32/m5tWwzPm5KULpuWEmAicrrQasbS8WlKZicMD8qkAOhk3T5ciaMYqJVIniaS7RgObgYqaemvHj7LumsyialRd6InFhLA/132',
      nickname: '西门小狼狗',
    },
    {
      id: '4',
      avatar:
        'https://thirdwx.qlogo.cn/mmopen/vi_32/m5tWwzPm5KULpuWEmAicrrQasbS8WlKZicMD8qkAOhk3T5ciaMYqJVIniaS7RgObgYqaemvHj7LumsyialRd6InFhLA/132',
      nickname: '西门小狼狗',
    },
    {
      id: '5',
      avatar:
        'https://thirdwx.qlogo.cn/mmopen/vi_32/m5tWwzPm5KULpuWEmAicrrQasbS8WlKZicMD8qkAOhk3T5ciaMYqJVIniaS7RgObgYqaemvHj7LumsyialRd6InFhLA/132',
      nickname: '西门小狼狗',
    },
    {
      id: '6',
      avatar:
        'https://thirdwx.qlogo.cn/mmopen/vi_32/m5tWwzPm5KULpuWEmAicrrQasbS8WlKZicMD8qkAOhk3T5ciaMYqJVIniaS7RgObgYqaemvHj7LumsyialRd6InFhLA/132',
      nickname: '西门小狼狗',
    },
    {
      id: '7',
      avatar:
        'https://thirdwx.qlogo.cn/mmopen/vi_32/m5tWwzPm5KULpuWEmAicrrQasbS8WlKZicMD8qkAOhk3T5ciaMYqJVIniaS7RgObgYqaemvHj7LumsyialRd6InFhLA/132',
      nickname: '西门小狼狗',
    },
    {
      id: '8',
      avatar:
        'https://thirdwx.qlogo.cn/mmopen/vi_32/m5tWwzPm5KULpuWEmAicrrQasbS8WlKZicMD8qkAOhk3T5ciaMYqJVIniaS7RgObgYqaemvHj7LumsyialRd6InFhLA/132',
      nickname: '西门小狼狗',
    },
    {
      id: '9',
      avatar:
        'https://thirdwx.qlogo.cn/mmopen/vi_32/m5tWwzPm5KULpuWEmAicrrQasbS8WlKZicMD8qkAOhk3T5ciaMYqJVIniaS7RgObgYqaemvHj7LumsyialRd6InFhLA/132',
      nickname: '西门小狼狗',
    },
    {
      id: '10',
      avatar:
        'https://thirdwx.qlogo.cn/mmopen/vi_32/m5tWwzPm5KULpuWEmAicrrQasbS8WlKZicMD8qkAOhk3T5ciaMYqJVIniaS7RgObgYqaemvHj7LumsyialRd6InFhLA/132',
      nickname: '西门小狼狗',
    },
    {
      id: '11',
      avatar:
        'https://thirdwx.qlogo.cn/mmopen/vi_32/m5tWwzPm5KULpuWEmAicrrQasbS8WlKZicMD8qkAOhk3T5ciaMYqJVIniaS7RgObgYqaemvHj7LumsyialRd6InFhLA/132',
      nickname: '西门小狼狗',
    },
    {
      id: '12',
      avatar:
        'https://thirdwx.qlogo.cn/mmopen/vi_32/m5tWwzPm5KULpuWEmAicrrQasbS8WlKZicMD8qkAOhk3T5ciaMYqJVIniaS7RgObgYqaemvHj7LumsyialRd6InFhLA/132',
      nickname: '西门小狼狗',
    },
    {
      id: '1',
      avatar:
        'https://thirdwx.qlogo.cn/mmopen/vi_32/m5tWwzPm5KULpuWEmAicrrQasbS8WlKZicMD8qkAOhk3T5ciaMYqJVIniaS7RgObgYqaemvHj7LumsyialRd6InFhLA/132',
      nickname: '西门小狼狗',
    },
    {
      id: '13',
      avatar:
        'https://thirdwx.qlogo.cn/mmopen/vi_32/m5tWwzPm5KULpuWEmAicrrQasbS8WlKZicMD8qkAOhk3T5ciaMYqJVIniaS7RgObgYqaemvHj7LumsyialRd6InFhLA/132',
      nickname: '西门小狼狗',
    },
    {
      id: '13',
      avatar:
        'https://thirdwx.qlogo.cn/mmopen/vi_32/m5tWwzPm5KULpuWEmAicrrQasbS8WlKZicMD8qkAOhk3T5ciaMYqJVIniaS7RgObgYqaemvHj7LumsyialRd6InFhLA/132',
      nickname: '西门小狼狗',
    },
    {
      id: '13',
      avatar:
        'https://thirdwx.qlogo.cn/mmopen/vi_32/m5tWwzPm5KULpuWEmAicrrQasbS8WlKZicMD8qkAOhk3T5ciaMYqJVIniaS7RgObgYqaemvHj7LumsyialRd6InFhLA/132',
      nickname: '西门小狼狗',
    },
    {
      id: '13',
      avatar:
        'https://thirdwx.qlogo.cn/mmopen/vi_32/m5tWwzPm5KULpuWEmAicrrQasbS8WlKZicMD8qkAOhk3T5ciaMYqJVIniaS7RgObgYqaemvHj7LumsyialRd6InFhLA/132',
      nickname: '西门小狼狗',
    },
    {
      id: '13',
      avatar:
        'https://thirdwx.qlogo.cn/mmopen/vi_32/m5tWwzPm5KULpuWEmAicrrQasbS8WlKZicMD8qkAOhk3T5ciaMYqJVIniaS7RgObgYqaemvHj7LumsyialRd6InFhLA/132',
      nickname: '西门小狼狗',
    },
    {
      id: '13',
      avatar:
        'https://thirdwx.qlogo.cn/mmopen/vi_32/m5tWwzPm5KULpuWEmAicrrQasbS8WlKZicMD8qkAOhk3T5ciaMYqJVIniaS7RgObgYqaemvHj7LumsyialRd6InFhLA/132',
      nickname: '西门小狼狗',
    },
    {
      id: '13',
      avatar:
        'https://thirdwx.qlogo.cn/mmopen/vi_32/m5tWwzPm5KULpuWEmAicrrQasbS8WlKZicMD8qkAOhk3T5ciaMYqJVIniaS7RgObgYqaemvHj7LumsyialRd6InFhLA/132',
      nickname: '西门小狼狗',
    },
  ])
  </script>
  <style scoped lang="scss">
  .container-online-user {
    width: 230px !important;
    height: 730px;
    background-color: #323644;
    margin: 10px;
    box-sizing: content-box;
    .container-online-user-count {
      color: #fff;
      height: 40px;
      line-height: 40px;
      font-size: 20px;
      text-align: center;
      background-color: #323644;
      width: 100%;
    }
    .container-online-user-items {
      margin-top: 10px;
      height: 680px;
    }
  }
  

  </style>
  