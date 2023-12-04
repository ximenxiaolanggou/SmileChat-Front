import WS from 'ws'

export class WebSocket {
  /**
   * 链接地址
   * @private
   */
  private _url: string

  /**
   * 连接实例
   * @private
   */
  private _wsInstance

  get wsInstance() {
    return this._wsInstance
  }

  get url(): string {
    return this._url
  }

  /**
   * 连接方法
   */
  connect() {
    this._wsInstance = new WS(this._url) // 创建websocket实例
    this._wsInstance.onopen = this.onOpen.bind(this) // 绑定onopen事件处理函数
    this._wsInstance.onmessage = this.onMessage.bind(this) // 绑定onmessage事件处理函数
    this._wsInstance.onclose = this.onClose.bind(this) // 绑定onclose事件处理函数
    this._wsInstance.onerror = this.onError.bind(this) // 绑定onerror事件处理函数
  }

  /**
   * 连接成功
   */
  onOpen() {
    console.log('onOpen')
  }

  /**
   * 错误
   */
  onError() {
    console.log('onError')
  }

  /**
   * 监听消息
   * @param fn
   */
  onMessage(data) {
    console.log('onMessage', data)
  }

  /**
   * 监听关闭
   */
  onClose() {
    console.log('onClose')
  }

  /**
   * 发送消息
   * @param msg
   */
  sendMsg(msg: any) {}

  constructor(url: string) {
    this._url = url
  }
}
