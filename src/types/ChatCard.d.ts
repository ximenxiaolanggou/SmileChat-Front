export default interface ChatCard {
  /**
   * id
   */
  id: string

  /**
   * 标题
   */
  title: string

  /**
   * 副标题
   */
  subTitle?: string

  /**
   * 头像
   */
  avatar?: string

  /**
   * 最新的消息
   */
  latestMsg?: string

  /**
   * 最新的消息时间
   */
  latestMsgTime?: string
}
