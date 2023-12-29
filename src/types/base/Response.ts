export default interface Response<T> {
  /**
   * 成功|失败
   */
  flag: boolean

  /**
   * 状态码
   */
  code: number

  /**
   * 消息
   */
  msg: string

  /**
   * 数据
   */
  data: T
}
