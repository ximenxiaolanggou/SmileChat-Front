import request from '@/utils/request'

enum API {
  friends = '/chat/friends/list',
}


/**
 * 好友列表
 * @param searchKey
 */
export const friends = (searchKey: string) => {
  return request({
    url: API.friends,
    method: 'get',
    params: {searchKey}
  })
}
