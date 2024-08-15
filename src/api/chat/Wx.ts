import request from '@/utils/request'
enum API {
  WX_AUTH = '/chat/wxAuth/login',
  USERINFO = '/chat/wxAuth/userInfo',
}

export const WX_AUTH = API.WX_AUTH

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

/**
 * 用户信息
 */
export const userInfo = () => {
  return request({
    url: API.USERINFO,
    method: 'get',
  })
}
