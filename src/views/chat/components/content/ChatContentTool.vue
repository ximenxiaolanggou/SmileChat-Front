<template>
    <div class="chat-content-tool">
        <div class="chat-content-tool-input">
            <span class="iconfont icon-yuyin chat-content-tool-input-voice"></span>
            <el-input type="text" placeholder="输入内容" v-model="content" class="chat-content-tool-input-text"></el-input>
        </div>
        <div class="chat-content-tool-extra">
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';
let content  = ref('')
</script>
<style scoped lang="scss">
.chat-content-tool {
    height: 50px;
    width: 95%;
    border-radius: 10px;
    margin: 5px auto;
    background-color: #424656;
    .chat-content-tool-input {
        margin-left: 10px;
        height: 50px;
        display: flex;
        align-items: center;
        .chat-content-tool-input-voice {
            font-size: 28px;
        }
        .chat-content-tool-input-text {
            margin-left: 10px;
            width: 600px;
            ::v-deep(.el-input__wrapper) {
                box-shadow: 0 0 0 0;
                background-color: transparent;
                outline-color: transparent;
            }
            ::v-deep(.el-input__inner) {
                color: azure;
                border: 0px solid transparent;
            }
        }
    }
}

</style>
  