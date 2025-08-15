# Sender 发送器组件

发送器组件用于输入和发送消息，支持多种输入方式和附件。

## 基础用法

<script setup>
import { h, ref } from 'vue'
import { Sender } from 'ant-design-x-vue'
import { message } from 'ant-design-vue'

const [messageApi] = message.useMessage()
const value = ref('')

const onSubmit = (text) => {
  messageApi.success(`发送消息: ${text}`)
  value.value = ''
}
</script>

<Sender
  v-model:value="value"
  placeholder="请输入消息..."
  @submit="onSubmit"
/>

```vue
<template>
  <Sender
    v-model:value="value"
    placeholder="请输入消息..."
    @submit="onSubmit"
  />
</template>

<script setup>
import { ref } from 'vue'
import { Sender } from 'ant-design-x-vue'
import { message } from 'ant-design-vue'

const [messageApi] = message.useMessage()
const value = ref('')

const onSubmit = (text) => {
  messageApi.success(`发送消息: ${text}`)
  value.value = ''
}
</script>
```

## 功能特性

- 文本输入
- 快捷键发送
- 附件支持
- 自定义前缀/后缀
- 加载状态

## API

### Sender Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 输入值 | `string` | - |
| placeholder | 占位符 | `string` | - |
| disabled | 是否禁用 | `boolean` | `false` |
| loading | 加载状态 | `boolean` | `false` |
| prefix | 前缀内容 | `VNode` | - |
| suffix | 后缀内容 | `VNode` | - |

### Sender Events

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| submit | 提交事件 | `(text: string) => void` |
| change | 值变化事件 | `(value: string) => void` |