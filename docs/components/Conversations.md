# Conversations 对话组件

对话组件用于展示对话列表，支持分组和菜单操作。

## 基础用法

<script setup>
import { h, ref } from 'vue'
import { Conversations } from 'ant-design-x-vue'
import { message } from 'ant-design-vue'

const [messageApi] = message.useMessage()

const items = [
  {
    key: 'item1',
    label: '对话 1',
    timestamp: Date.now() - 1000 * 60 * 5,
    content: '这是第一个对话的内容...'
  },
  {
    key: 'item2', 
    label: '对话 2',
    timestamp: Date.now() - 1000 * 60 * 30,
    content: '这是第二个对话的内容...'
  },
  {
    key: 'item3',
    label: '对话 3', 
    timestamp: Date.now() - 1000 * 60 * 60,
    content: '这是第三个对话的内容...'
  }
]

const style = {
  width: '300px',
  height: '400px'
}

const groupable = true
const activeKey = ref('item1')

const menuConfig = {
  items: [
    {
      key: 'rename',
      label: '重命名'
    },
    {
      key: 'delete',
      label: '删除'
    }
  ],
  onClick: ({ key }) => {
    messageApi.info(`点击了菜单项: ${key}`)
  }
}
</script>

<Conversations
  :items="items"
  default-active-key="item1"
  :style="style"
  :groupable="groupable"
/>

```vue
<template>
  <Conversations
    :items="items"
    default-active-key="item1"
    :style="style"
    :groupable="groupable"
  />
</template>

<script setup>
import { Conversations } from 'ant-design-x-vue'

const items = [
  {
    key: 'item1',
    label: '对话 1',
    timestamp: Date.now() - 1000 * 60 * 5,
    content: '这是第一个对话的内容...'
  },
  {
    key: 'item2', 
    label: '对话 2',
    timestamp: Date.now() - 1000 * 60 * 30,
    content: '这是第二个对话的内容...'
  },
  {
    key: 'item3',
    label: '对话 3', 
    timestamp: Date.now() - 1000 * 60 * 60,
    content: '这是第三个对话的内容...'
  }
]

const style = {
  width: '300px',
  height: '400px'
}

const groupable = true
</script>
```

## 带菜单的对话列表

<Conversations
  default-active-key="item1"
  :menu="menuConfig"
  :items="items"
  :style="style"
/>

```vue
<template>
  <Conversations
    default-active-key="item1"
    :menu="menuConfig"
    :items="items"
    :style="style"
  />
</template>

<script setup>
import { ref } from 'vue'
import { Conversations } from 'ant-design-x-vue'
import { message } from 'ant-design-vue'

const [messageApi] = message.useMessage()

const items = [
  {
    key: 'item1',
    label: '对话 1',
    timestamp: Date.now() - 1000 * 60 * 5,
    content: '这是第一个对话的内容...'
  },
  {
    key: 'item2', 
    label: '对话 2',
    timestamp: Date.now() - 1000 * 60 * 30,
    content: '这是第二个对话的内容...'
  }
]

const style = {
  width: '300px',
  height: '400px'
}

const menuConfig = {
  items: [
    {
      key: 'rename',
      label: '重命名'
    },
    {
      key: 'delete',
      label: '删除'
    }
  ],
  onClick: ({ key }) => {
    messageApi.info(`点击了菜单项: ${key}`)
  }
}
</script>
```

## 功能特性

- 对话列表展示
- 支持分组
- 右键菜单操作
- 时间戳显示
- 活跃状态管理

## API

### Conversations Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| items | 对话列表 | `ConversationItem[]` | `[]` |
| activeKey | 当前激活的对话 | `string` | - |
| defaultActiveKey | 默认激活的对话 | `string` | - |
| groupable | 是否支持分组 | `boolean` | `false` |
| menu | 菜单配置 | `MenuConfig` | - |

### ConversationItem

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| key | 唯一标识 | `string` | - |
| label | 对话标题 | `string` | - |
| content | 对话内容 | `string` | - |
| timestamp | 时间戳 | `number` | - |
| group | 分组 | `string` | - |