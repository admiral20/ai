# XProvider X Provider 组件

X Provider 组件提供了全局的配置和状态管理。

## 基础用法

<script setup>
import { h, ref } from 'vue'
import { XProvider } from 'ant-design-x-vue'

const config = {
  apiKey: 'your-api-key',
  baseURL: 'https://api.example.com',
  timeout: 30000
}
</script>

<XProvider :config="config">
  <div>
    <p>在 XProvider 包裹下的组件可以访问全局配置</p>
  </div>
</XProvider>

## 功能特性

- 全局配置管理
- 状态共享
- 上下文提供
- 主题配置

## API

### XProvider Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| config | 全局配置 | `ProviderConfig` | - |
| theme | 主题配置 | `ThemeConfig` | - |

### ProviderConfig

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| apiKey | API 密钥 | `string` | - |
| baseURL | 基础 URL | `string` | - |
| timeout | 超时时间 | `number` | `30000` |

### XProvider Slots

| 名称 | 说明 |
| --- | --- |
| default | 默认插槽 |