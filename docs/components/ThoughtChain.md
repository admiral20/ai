# ThoughtChain 思维链组件

思维链组件用于展示 AI 的思考过程和推理步骤。

## 基础用法

<script setup>
import { h, ref } from 'vue'
import { ThoughtChain } from 'ant-design-x-vue'

const thoughts = [
  {
    key: '1',
    title: '分析问题',
    content: '首先需要理解用户的需求和问题背景',
    status: 'completed'
  },
  {
    key: '2',
    title: '收集信息',
    content: '搜集相关的数据和资料',
    status: 'completed'
  },
  {
    key: '3',
    title: '制定方案',
    content: '基于分析结果制定解决方案',
    status: 'processing'
  },
  {
    key: '4',
    title: '验证结果',
    content: '验证方案的可行性和有效性',
    status: 'pending'
  }
]
</script>

<ThoughtChain :items="thoughts" />

```vue
<template>
  <ThoughtChain :items="thoughts" />
</template>

<script setup>
import { ThoughtChain } from 'ant-design-x-vue'

const thoughts = [
  {
    key: '1',
    title: '分析问题',
    content: '首先需要理解用户的需求和问题背景',
    status: 'completed'
  },
  {
    key: '2',
    title: '收集信息',
    content: '搜集相关的数据和资料',
    status: 'completed'
  },
  {
    key: '3',
    title: '制定方案',
    content: '基于分析结果制定解决方案',
    status: 'processing'
  },
  {
    key: '4',
    title: '验证结果',
    content: '验证方案的可行性和有效性',
    status: 'pending'
  }
]
</script>
```

## 功能特性

- 步骤化展示思考过程
- 状态指示器
- 时间线布局
- 可折叠内容

## API

### ThoughtChain Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| items | 思维步骤列表 | `ThoughtItem[]` | `[]` |
| collapsible | 是否可折叠 | `boolean` | `false` |

### ThoughtItem

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| key | 唯一标识 | `string` | - |
| title | 步骤标题 | `string` | - |
| content | 步骤内容 | `string` | - |
| status | 状态 | `'pending' \| 'processing' \| 'completed' \| 'error'` | `'pending'` |