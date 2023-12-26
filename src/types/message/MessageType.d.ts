// 消息类型（需要和后端对应起来）
enum MessageType{
    text = 1, // 1 文本
    voice,    // 2 语音
    video,    // 3 视屏
    file,     // 4 文件
}

export default MessageType 