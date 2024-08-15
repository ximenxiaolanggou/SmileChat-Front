import request from '@/utils/request'
import Response from '@/types/base/Response'
import SessionDetail from "@/types/nav/SessionDetail";
enum API {
    SESSION = '/chat/chatSession',
}

/**
 * 好友列表
 * @param searchKey
 */
export const sessions = (searchKey: string) => {
    return request<any, Response<SessionDetail[]>>({
        url: API.SESSION,
        method: 'get',
        params: { searchKey },
    })
}

export interface SessionInter {
    system?: SessionDetail[]
    user?: SessionDetail[]

}
