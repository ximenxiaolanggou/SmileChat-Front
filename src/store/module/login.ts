//创建用户相关的小仓库
import { defineStore } from 'pinia'

import { LoginState } from './types/login'


//创建用户小仓库
const userLoginStore = defineStore('login', {
  //小仓库存储数据地方
  state: (): LoginState => {
    return {
      pwdLogin: true
    }
  },
  //异步|逻辑的地方
  actions: {
    
  },
  getters: {
    getPwdLogin():boolean{
        return this.pwdLogin;
    }
  },
})
//对外暴露获取小仓库方法
export default userLoginStore
