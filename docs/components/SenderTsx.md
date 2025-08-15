# SenderTsx TSX发送器组件

TSX 版本的发送器组件，提供更灵活的 TypeScript 支持。

## 基础用法

<script setup>
import { h, ref } from 'vue'
import { message } from 'ant-design-vue'

const [messageApi] = message.useMessage()
const value = ref('')

const onSubmit = (text) => {
  messageApi.success(`TSX发送消息: ${text}`)
  value.value = ''
}
</script>

::: info
SenderTsx 组件提供了与 Sender 相同的功能，但使用 TSX 语法实现，提供更好的 TypeScript 类型支持。
:::

## 功能特性

- 完整的 TypeScript 类型支持
- TSX 语法
- 与 Sender 相同的 API
- 更好的开发体验

## API

参考 [Sender 组件](/components/Sender) 的 API 文档。