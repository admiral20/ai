# XRequest X Request 组件

X Request 组件用于处理 HTTP 请求和 API 调用。

## 基础用法

<script setup>
import { h, ref } from 'vue'
import { XRequest } from 'ant-design-x-vue'
import { message } from 'ant-design-vue'

const [messageApi] = message.useMessage()
const loading = ref(false)
const data = ref(null)

const requestConfig = {
  url: '/api/chat',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
}

const onSuccess = (response) => {
  data.value = response.data
  messageApi.success('请求成功')
}

const onError = (error) => {
  messageApi.error(`请求失败: ${error.message}`)
}
</script>

<XRequest
  :config="requestConfig"
  :loading="loading"
  @success="onSuccess"
  @error="onError"
/>

## 功能特性

- HTTP 请求封装
- 错误处理
- 加载状态管理
- 请求拦截器

## API

### XRequest Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| config | 请求配置 | `RequestConfig` | - |
| loading | 加载状态 | `boolean` | `false` |
| autoRequest | 自动请求 | `boolean` | `true` |

### RequestConfig

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| url | 请求地址 | `string` | - |
| method | 请求方法 | `'GET' \| 'POST' \| 'PUT' \| 'DELETE'` | `'GET'` |
| headers | 请求头 | `Record<string, string>` | `{}` |
| data | 请求数据 | `any` | - |

### XRequest Events

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| success | 成功事件 | `(response: any) => void` |
| error | 错误事件 | `(error: Error) => void` |
| loading | 加载状态变化 | `(loading: boolean) => void` |