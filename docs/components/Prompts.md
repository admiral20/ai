# Prompts 提示词组件

提示词组件用于显示一组与当前上下文相关的预定义的问题或建议。

## 基础用法

<script setup>
import { h, ref } from 'vue'
import { Prompts } from 'ant-design-x-vue'
import { CoffeeOutlined, SmileOutlined, FireOutlined, BulbOutlined, HeartOutlined, StarOutlined } from '@ant-design/icons-vue'
import { message } from 'ant-design-vue'

const [messageApi] = message.useMessage()

const items = [
  {
    key: '1',
    icon: h(CoffeeOutlined, { style: { color: '#964B00' } }),
    label: '如何在长时间工作后有效休息？',
    description: '学习科学的休息方法'
  },
  {
    key: '2',
    icon: h(SmileOutlined, { style: { color: '#FAAD14' } }),
    label: '保持积极心态的秘诀是什么？',
    description: '心理健康小贴士'
  },
  {
    key: '3',
    icon: h(FireOutlined, { style: { color: '#FF4D4F' } }),
    label: '如何在巨大压力下保持冷静？',
    description: '压力管理技巧'
  }
]

const items1 = [
  {
    key: '4',
    icon: h(BulbOutlined, { style: { color: '#1890FF' } }),
    label: '创新思维的培养方法',
    description: '激发创造力'
  },
  {
    key: '5',
    icon: h(HeartOutlined, { style: { color: '#F5222D' } }),
    label: '如何建立良好的人际关系？',
    description: '社交技巧分享'
  },
  {
    key: '6',
    icon: h(StarOutlined, { style: { color: '#722ED1' } }),
    label: '目标设定与实现的策略',
    description: '成功规划指南'
  }
]

const onItemClick = (info) => {
  messageApi.success(`你点击了提示词: ${info.data.label}`)
}
</script>

<Prompts
  wrap
  title="✨ 灵感火花和精彩小贴士"
  :items="items"
  :on-item-click="onItemClick"
/>

```vue
<template>
  <Prompts
    wrap
    title="✨ 灵感火花和精彩小贴士"
    :items="items"
    :on-item-click="onItemClick"
  />
</template>

<script setup>
import { h } from 'vue'
import { Prompts } from 'ant-design-x-vue'
import { CoffeeOutlined, SmileOutlined, FireOutlined } from '@ant-design/icons-vue'
import { message } from 'ant-design-vue'

const [messageApi] = message.useMessage()

const items = [
  {
    key: '1',
    icon: h(CoffeeOutlined, { style: { color: '#964B00' } }),
    label: '如何在长时间工作后有效休息？',
    description: '学习科学的休息方法'
  },
  {
    key: '2',
    icon: h(SmileOutlined, { style: { color: '#FAAD14' } }),
    label: '保持积极心态的秘诀是什么？',
    description: '心理健康小贴士'
  },
  {
    key: '3',
    icon: h(FireOutlined, { style: { color: '#FF4D4F' } }),
    label: '如何在巨大压力下保持冷静？',
    description: '压力管理技巧'
  }
]

const onItemClick = (info) => {
  messageApi.success(`你点击了提示词: ${info.data.label}`)
}
</script>
```

## 垂直布局

<Prompts 
  title="🤔 你可能还想问:" 
  :items="items1" 
  vertical 
  :on-item-click="onItemClick"
/>

```vue
<template>
  <Prompts 
    title="🤔 你可能还想问:" 
    :items="items1" 
    vertical 
    :on-item-click="onItemClick"
  />
</template>

<script setup>
import { h } from 'vue'
import { Prompts } from 'ant-design-x-vue'
import { BulbOutlined, HeartOutlined, StarOutlined } from '@ant-design/icons-vue'
import { message } from 'ant-design-vue'

const [messageApi] = message.useMessage()

const items1 = [
  {
    key: '4',
    icon: h(BulbOutlined, { style: { color: '#1890FF' } }),
    label: '创新思维的培养方法',
    description: '激发创造力'
  },
  {
    key: '5',
    icon: h(HeartOutlined, { style: { color: '#F5222D' } }),
    label: '如何建立良好的人际关系？',
    description: '社交技巧分享'
  },
  {
    key: '6',
    icon: h(StarOutlined, { style: { color: '#722ED1' } }),
    label: '目标设定与实现的策略',
    description: '成功规划指南'
  }
]

const onItemClick = (info) => {
  messageApi.success(`你点击了提示词: ${info.data.label}`)
}
</script>
```

## 响应式宽度

<Prompts
  title="✨ 响应式提示词"
  :items="items"
  wrap
  :on-item-click="onItemClick"
/>

## 功能特性

- 支持图标和文本
- 响应式布局
- 垂直/水平排列
- 点击事件处理
- 自定义样式

## API

### Prompts Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | `string` | - |
| items | 提示词列表 | `PromptItem[]` | `[]` |
| vertical | 是否垂直排列 | `boolean` | `false` |
| wrap | 是否换行 | `boolean` | `false` |
| onItemClick | 点击事件 | `(info: ClickInfo) => void` | - |

### PromptItem

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| key | 唯一标识 | `string` | - |
| label | 标签文本 | `string` | - |
| description | 描述文本 | `string` | - |
| icon | 图标 | `VNode` | - |
| disabled | 是否禁用 | `boolean` | `false` |