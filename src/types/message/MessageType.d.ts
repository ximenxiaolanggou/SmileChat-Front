// 消息类型（需要和后端对应起来）
enum MessageType {
  TEXT = 100, // 100 文本
  VOICE, // 101 语音
  VIDEO, // 102 视屏
  FILE, // 103 文件
}

export default MessageType
