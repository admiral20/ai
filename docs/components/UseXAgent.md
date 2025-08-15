# UseXAgent X Agent 组件

X Agent 组件提供了 AI 代理的核心功能和交互接口。

## 基础用法

<script setup>
import { h, ref } from 'vue'
import { UseXAgent } from 'ant-design-x-vue'
import { message } from 'ant-design-vue'

const [messageApi] = message.useMessage()

const agentConfig = {
  name: 'AI助手',
  description: '智能对话助手',
  capabilities: ['文本生成', '问答', '代码辅助']
}

const onMessage = (msg) => {
  messageApi.info(`收到消息: ${msg}`)
}
</script>

<UseXAgent
  :config="agentConfig"
  @message="onMessage"
/>

## 功能特性

- AI 代理管理
- 消息处理
- 能力配置
- 状态监控

## API

### UseXAgent Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| config | 代理配置 | `AgentConfig` | - |
| enabled | 是否启用 | `boolean` | `true` |

### AgentConfig

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 代理名称 | `string` | - |
| description | 描述 | `string` | - |
| capabilities | 能力列表 | `string[]` | `[]` |

### UseXAgent Events

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| message | 消息事件 | `(message: string) => void` |
| error | 错误事件 | `(error: Error) => void` |