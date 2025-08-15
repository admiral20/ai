# Attachments 附件组件

附件组件用于需要展示一组附件信息集合的场景。

## 基础用法

<script setup>
import { h, ref } from 'vue'
import { Attachments, Sender } from 'ant-design-x-vue'
import { Flex, Switch } from 'ant-design-vue'

const fullScreenDrop = ref(false)

const attachmentsNode = h(Attachments, {
  items: [
    {
      uid: '1',
      name: 'document.pdf',
      status: 'done',
      url: '#'
    },
    {
      uid: '2', 
      name: 'image.png',
      status: 'done',
      url: '#'
    }
  ]
})
</script>

<Flex vertical gap="middle" align="flex-start">
  <Sender :prefix="attachmentsNode" />
  <Switch
    v-model:checked="fullScreenDrop"
    checked-children="全屏拖拽"
    un-checked-children="全屏拖拽"
  />
</Flex>

```vue
<template>
  <Flex vertical gap="middle" align="flex-start">
    <Sender :prefix="attachmentsNode" />
    <Switch
      v-model:checked="fullScreenDrop"
      checked-children="全屏拖拽"
      un-checked-children="全屏拖拽"
    />
  </Flex>
</template>

<script setup>
import { h, ref } from 'vue'
import { Attachments, Sender } from 'ant-design-x-vue'
import { Flex, Switch } from 'ant-design-vue'

const fullScreenDrop = ref(false)

const attachmentsNode = h(Attachments, {
  items: [
    {
      uid: '1',
      name: 'document.pdf',
      status: 'done',
      url: '#'
    },
    {
      uid: '2', 
      name: 'image.png',
      status: 'done',
      url: '#'
    }
  ]
})
</script>
```

## 功能特性

- 支持多种文件类型
- 拖拽上传
- 文件预览
- 删除操作
- 全屏拖拽模式

## API

### Attachments Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| items | 附件列表 | `AttachmentItem[]` | `[]` |
| disabled | 是否禁用 | `boolean` | `false` |
| multiple | 是否支持多选 | `boolean` | `true` |
| accept | 接受的文件类型 | `string` | - |

### AttachmentItem

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| uid | 唯一标识 | `string` | - |
| name | 文件名 | `string` | - |
| status | 状态 | `'uploading' \| 'done' \| 'error'` | - |
| url | 文件地址 | `string` | - |