/**
 * 基础消息内容
 */
import MessageType from './MessageType'
export default interface BaseMessage {
  /**
   * 消息ID
   */
  id: string

  /**
   * 消息类型
   */
  messageType: MessageType

  /**
   * 发送人 ID
   */
  senderId: string

  /**
   * 发送人 姓名
   */
  senderName: string

  /**
   * 发送人 头像
   */
  senderAvatar: string

  /**
   * 消息发送是否为本人 0 不是 > 0 是
   */
  messageOwner: number
}
