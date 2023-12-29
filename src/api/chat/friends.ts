import request from '@/utils/request'
import Friend from '@/types/friend/friend'
import Response from '@/types/base/Response'
enum API {
  friends = '/chat/friends/list',
}

/**
 * 好友列表
 * @param searchKey
 */
export const friends = (searchKey: string) => {
  return request<any, Response<Friend[]>>({
    url: API.friends,
    method: 'get',
    params: { searchKey },
  })
}
