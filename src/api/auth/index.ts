import {LoginParams} from './index.d.ts'
import request from '@/utils/request'

enum API {
  AUTH = '/system/auth/login',
  USERINFO = '/system/auth/userInfo'
}

/**
 * 登录接口
 * @param data
 */
export const login = (data:LoginParams) => {
  return request({
    url: API.AUTH,
    method: 'post',
    data
  })
}

/**
 * 用户信息
 */
export const userInfo = () => {
  return request({
    url: API.USERINFO,
    method: 'get'
  })
}
