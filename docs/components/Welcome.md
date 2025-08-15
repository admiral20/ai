# Welcome 欢迎组件

欢迎组件用于展示应用的欢迎界面和引导信息。

## 基础用法

<script setup>
import { h, ref } from 'vue'
import { Welcome } from 'ant-design-x-vue'
import { RobotOutlined, MessageOutlined, BulbOutlined } from '@ant-design/icons-vue'

const features = [
  {
    icon: h(RobotOutlined),
    title: 'AI 助手',
    description: '智能对话，随时为您解答问题'
  },
  {
    icon: h(MessageOutlined),
    title: '实时聊天',
    description: '流畅的对话体验，支持多种消息类型'
  },
  {
    icon: h(BulbOutlined),
    title: '智能建议',
    description: '基于上下文的智能提示和建议'
  }
]

const onGetStarted = () => {
  console.log('开始使用')
}
</script>

<Welcome
  title="欢迎使用 AI 助手"
  description="体验全新的智能对话服务"
  :features="features"
  @get-started="onGetStarted"
/>

```vue
<template>
  <Welcome
    title="欢迎使用 AI 助手"
    description="体验全新的智能对话服务"
    :features="features"
    @get-started="onGetStarted"
  />
</template>

<script setup>
import { h } from 'vue'
import { Welcome } from 'ant-design-x-vue'
import { RobotOutlined, MessageOutlined, BulbOutlined } from '@ant-design/icons-vue'

const features = [
  {
    icon: h(RobotOutlined),
    title: 'AI 助手',
    description: '智能对话，随时为您解答问题'
  },
  {
    icon: h(MessageOutlined),
    title: '实时聊天',
    description: '流畅的对话体验，支持多种消息类型'
  },
  {
    icon: h(BulbOutlined),
    title: '智能建议',
    description: '基于上下文的智能提示和建议'
  }
]

const onGetStarted = () => {
  console.log('开始使用')
}
</script>
```

## 功能特性

- 欢迎信息展示
- 功能特性介绍
- 快速开始引导
- 自定义样式

## API

### Welcome Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | `string` | - |
| description | 描述 | `string` | - |
| features | 功能特性列表 | `FeatureItem[]` | `[]` |
| showGetStarted | 是否显示开始按钮 | `boolean` | `true` |

### FeatureItem

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| icon | 图标 | `VNode` | - |
| title | 标题 | `string` | - |
| description | 描述 | `string` | - |

### Welcome Events

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| get-started | 开始使用事件 | `() => void` |