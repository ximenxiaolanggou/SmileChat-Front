/**
 * 消息文本内容
 */

import BaseMessage from './BaseMessage'

export default interface TextMessage extends BaseMessage {
  /**
   * 文本消息内容
   */
  content: string
}
