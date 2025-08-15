# UseXChat X Chat 组件

X Chat 组件提供了完整的聊天功能和界面。

## 基础用法

<script setup>
import { h, ref } from 'vue'
import { UseXChat } from 'ant-design-x-vue'

const messages = ref([
  {
    id: '1',
    role: 'user',
    content: '你好！',
    timestamp: Date.now() - 1000 * 60 * 5
  },
  {
    id: '2',
    role: 'assistant', 
    content: '你好！我是 AI 助手，有什么可以帮助你的吗？',
    timestamp: Date.now() - 1000 * 60 * 4
  }
])

const onSend = (message) => {
  messages.value.push({
    id: Date.now().toString(),
    role: 'user',
    content: message,
    timestamp: Date.now()
  })
}
</script>

<UseXChat
  :messages="messages"
  @send="onSend"
/>

## 功能特性

- 完整聊天界面
- 消息历史
- 实时对话
- 多媒体支持

## API

### UseXChat Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| messages | 消息列表 | `ChatMessage[]` | `[]` |
| loading | 加载状态 | `boolean` | `false` |
| placeholder | 输入占位符 | `string` | `'请输入消息...'` |

### ChatMessage

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| id | 消息ID | `string` | - |
| role | 角色 | `'user' \| 'assistant'` | - |
| content | 内容 | `string` | - |
| timestamp | 时间戳 | `number` | - |

### UseXChat Events

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| send | 发送消息 | `(message: string) => void` |