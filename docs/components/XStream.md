# XStream X Stream 组件

X Stream 组件用于处理流式数据和实时通信。

## 基础用法

<script setup>
import { h, ref } from 'vue'
import { XStream } from 'ant-design-x-vue'
import { message } from 'ant-design-vue'

const [messageApi] = message.useMessage()
const connected = ref(false)
const messages = ref([])

const streamConfig = {
  url: 'ws://localhost:8080/stream',
  protocols: ['chat']
}

const onConnect = () => {
  connected.value = true
  messageApi.success('连接成功')
}

const onDisconnect = () => {
  connected.value = false
  messageApi.info('连接断开')
}

const onMessage = (data) => {
  messages.value.push(data)
}

const onError = (error) => {
  messageApi.error(`连接错误: ${error.message}`)
}
</script>

<XStream
  :config="streamConfig"
  :connected="connected"
  @connect="onConnect"
  @disconnect="onDisconnect"
  @message="onMessage"
  @error="onError"
/>

<div v-if="connected">
  <p>连接状态: 已连接</p>
  <div>
    <h4>接收到的消息:</h4>
    <ul>
      <li v-for="(msg, index) in messages" :key="index">
        {{ msg }}
      </li>
    </ul>
  </div>
</div>

## 功能特性

- WebSocket 连接
- 流式数据处理
- 自动重连
- 消息队列管理

## API

### XStream Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| config | 流配置 | `StreamConfig` | - |
| connected | 连接状态 | `boolean` | `false` |
| autoReconnect | 自动重连 | `boolean` | `true` |

### StreamConfig

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| url | 连接地址 | `string` | - |
| protocols | 协议 | `string[]` | `[]` |
| reconnectInterval | 重连间隔 | `number` | `3000` |

### XStream Events

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| connect | 连接事件 | `() => void` |
| disconnect | 断开连接事件 | `() => void` |
| message | 消息事件 | `(data: any) => void` |
| error | 错误事件 | `(error: Error) => void` |