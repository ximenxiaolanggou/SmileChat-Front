<template>
  <div class="container-group-user">
    <div class="container-group-user-count">在线人数: {{ 82 }} 人</div>
    <div class="container-group-user-items">
      <ChatGroupUserItem
        v-for="user in users"
        :key="user.id"
        :UserItem="user"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import ChatGroupUserItem from './ChatGroupUserItem.vue'
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
.container-group-user {
  background-color: #323644;
  margin: 20px;
  border-radius: 10px;
  padding: 10px;
  padding-top: 0px;
  width: 100px;
  .container-group-user-count {
    color: #fff;
    height: 30px;
    line-height: 30px;
    font-size: 18px;
    background-color: #323644;
    width: 220px;
  }
  .container-group-user-items {
    overflow: auto;
    margin-top: 30px;
    height: 90%;
  }
}

/* 修改滚动条的颜色和宽度 */
::-webkit-scrollbar {
  width: 10px; /* 设置滚动条宽度 */
}

/* 滚动槽 */
::-webkit-scrollbar-track {
  background-color: #323644; /* 设置滚动槽的颜色 */
}

/* 滚动条的滑块 */
::-webkit-scrollbar-thumb {
  background-color: #888; /* 设置滚动条滑块的颜色 */
  border-radius: 5px; /* 设置滑块的圆角 */
}

/* 当鼠标悬停在滑块上时的样式 */
::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}
</style>
