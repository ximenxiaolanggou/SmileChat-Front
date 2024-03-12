//创建用户相关的小仓库
import { defineStore } from 'pinia'

import { UserInfo } from './user.d.ts'

import { userInfo } from '@/api/auth/index'

import { wxLogin } from '@/api/chat/Wx'

//创建用户小仓库
const useUserInfoStore = defineStore('user', {
  //小仓库存储数据地方
  state: (): UserInfo => {
    return {
      username: '',
      mobile: '',
      mail: '',
    }
  },
  //异步|逻辑的地方
  actions: {
    // 获取用户信息
    async userInfo() {
      const user = await userInfo()
      this.username = user.data.username
      this.mobile = user.data.mobile
      this.mail = user.data.mail
    },

    /**
     * 微信登录
     * @param code
     */
    async wxLogin(code: string) {
      const res = await wxLogin(code)
      localStorage.setItem('TOKEN', res.data)
    },
  },
  getters: {},
})
//对外暴露获取小仓库方法
export default useUserInfoStore
