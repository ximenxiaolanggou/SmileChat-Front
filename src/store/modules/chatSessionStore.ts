import { defineStore } from 'pinia'
import {ChatSessionState} from "@/store/modules/types/chatSession";

const useChatSessionStore = defineStore("chatSession", {
    state: ():ChatSessionState => {
        return {
            activeSession: undefined
        }
    },
    //异步|逻辑的地方
    actions: {},
    getters: {
    },
})
//对外暴露获取小仓库方法
export default useChatSessionStore
