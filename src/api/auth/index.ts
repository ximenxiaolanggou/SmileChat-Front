import { LoginParams } from './index.d.ts'
import request from '@/utils/request'

enum API {
  AUTH = '/system/auth/login',
  WX_AUTH = '/system/wxAuth/login',
  USERINFO = '/system/auth/userInfo',
}

export const WX_AUTH = API.WX_AUTH

/**
 * 登录接口
 * @param data
 */
export const login = (data: LoginParams) => {
  return request({
    url: API.AUTH,
    method: 'post',
    data,
  })
}

/**
 * 用户信息
 */
export const userInfo = () => {
  return request({
    url: API.USERINFO,
    method: 'get',
  })
}

/**
 * 微信登录
 * @param code
 */
export const wxLogin = (code: string) => {
  return request({
    url: API.WX_AUTH,
    method: 'get',
    params: { code },
  })
}
