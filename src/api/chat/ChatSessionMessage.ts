import request from '@/utils/request'
import Response from '@/types/base/Response'
import BaseMessage from "@/types/message/BaseMessage";
enum API {
    DETAIL = '/chat/chatSession/messages',
    FILE_UPLOAD = '/chat/chatSessionMessageFile/upload',
    FILE_PREVIEW = '/uploadMessageFile'
}

export const FILE_UPLOAD = import.meta.env.VITE_APP_BASE_API + API.FILE_UPLOAD;

export const FILE_PREVIEW = import.meta.env.VITE_APP_STATIC_API + API.FILE_PREVIEW

/**
 * 好友列表
 * @param searchKey
 */
export const getChatSessinMessage = (chatId: string) => {
    return request<any, Response<BaseMessage[]>>({
        url: `${API.DETAIL}/${chatId}`,
        method: 'get',
    })
}

export interface ChatSessionMessage {

    /**
     * 主键
     */
    id:string

    /**
     * 消息
     */
    message:string

    /**
     * 消息类型 1 文本（默认）
     */
    messageType: number

    /**
     * 创建用户
     */
    createuser:string

    /**
     * 聊天会话ID
     */
    chatSessionId:string

    /**
     * 创建时间
     */
    createtime:string

    /**
     * 修改时间
     */
    updatetime:string


}
