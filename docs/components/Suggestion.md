# Suggestion 建议组件

建议组件用于显示智能建议和推荐内容。

## 基础用法

<script setup>
import { h, ref } from 'vue'
import { Suggestion } from 'ant-design-x-vue'
import { message } from 'ant-design-vue'

const [messageApi] = message.useMessage()

const suggestions = [
  {
    key: '1',
    title: '优化代码性能',
    description: '使用更高效的算法和数据结构'
  },
  {
    key: '2', 
    title: '改进用户体验',
    description: '简化操作流程，提升界面友好性'
  },
  {
    key: '3',
    title: '增强安全性',
    description: '添加数据验证和权限控制'
  }
]

const onSelect = (suggestion) => {
  messageApi.success(`选择了建议: ${suggestion.title}`)
}
</script>

<Suggestion
  :items="suggestions"
  @select="onSelect"
/>

```vue
<template>
  <Suggestion
    :items="suggestions"
    @select="onSelect"
  />
</template>

<script setup>
import { Suggestion } from 'ant-design-x-vue'
import { message } from 'ant-design-vue'

const [messageApi] = message.useMessage()

const suggestions = [
  {
    key: '1',
    title: '优化代码性能',
    description: '使用更高效的算法和数据结构'
  },
  {
    key: '2', 
    title: '改进用户体验',
    description: '简化操作流程，提升界面友好性'
  },
  {
    key: '3',
    title: '增强安全性',
    description: '添加数据验证和权限控制'
  }
]

const onSelect = (suggestion) => {
  messageApi.success(`选择了建议: ${suggestion.title}`)
}
</script>
```

## 功能特性

- 智能建议展示
- 点击选择
- 自定义样式
- 响应式布局

## API

### Suggestion Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| items | 建议列表 | `SuggestionItem[]` | `[]` |
| loading | 加载状态 | `boolean` | `false` |

### SuggestionItem

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| key | 唯一标识 | `string` | - |
| title | 标题 | `string` | - |
| description | 描述 | `string` | - |

### Suggestion Events

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| select | 选择事件 | `(item: SuggestionItem) => void` |