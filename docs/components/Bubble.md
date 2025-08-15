# Bubble 气泡组件

气泡组件用于显示对话消息，支持多种样式和交互功能。

## 基础用法

<script setup>
import { h, ref } from 'vue'
import { UserOutlined, CopyOutlined, SyncOutlined } from '@ant-design/icons-vue'
import { Bubble, Prompts } from 'ant-design-x-vue'
import { Flex, Avatar, Button, Space, Switch, theme, message } from 'ant-design-vue'

const { token } = theme.useToken()
const [messageApi] = message.useMessage()

const fooAvatar = {
  color: '#f56a00',
  backgroundColor: '#fde3cf',
}

const barAvatar = {
  color: '#fff',
  backgroundColor: '#87d068',
}

const hideAvatar = {
  visibility: 'hidden',
}

const loading = ref(false)

const onCopy = (textToCopy) => {
  messageApi.success(`文本已复制：${textToCopy}`)
}
</script>

<Flex gap="middle" vertical>
  <Bubble
    placement="start"
    content="早上好，你好吗？"
    :avatar="{ icon: h(UserOutlined), style: fooAvatar }"
  />
  <Bubble
    placement="start"
    content="多么美好的一天！"
    :styles="{ avatar: hideAvatar }"
    :avatar="{}"
  />
  <Bubble
    placement="end"
    content="你好，早上好，我很好！"
  >
    <template #avatar>
      <Avatar
        :icon="h(UserOutlined)"
        :style="barAvatar"
      />
    </template>
  </Bubble>
  <Bubble
    placement="end"
    content="谢谢你！"
    :styles="{ avatar: hideAvatar }"
    :avatar="{}"
  />
</Flex>

```vue
<template>
  <Flex gap="middle" vertical>
    <Bubble
      placement="start"
      content="早上好，你好吗？"
      :avatar="{ icon: h(UserOutlined), style: fooAvatar }"
    />
    <Bubble
      placement="start"
      content="多么美好的一天！"
      :styles="{ avatar: hideAvatar }"
      :avatar="{}"
    />
    <Bubble
      placement="end"
      content="你好，早上好，我很好！"
    >
      <template #avatar>
        <Avatar
          :icon="h(UserOutlined)"
          :style="barAvatar"
        />
      </template>
    </Bubble>
    <Bubble
      placement="end"
      content="谢谢你！"
      :styles="{ avatar: hideAvatar }"
      :avatar="{}"
    />
  </Flex>
</template>

<script setup>
import { h } from 'vue'
import { UserOutlined } from '@ant-design/icons-vue'
import { Bubble } from 'ant-design-x-vue'
import { Flex, Avatar } from 'ant-design-vue'

const fooAvatar = {
  color: '#f56a00',
  backgroundColor: '#fde3cf',
}

const barAvatar = {
  color: '#fff',
  backgroundColor: '#87d068',
}

const hideAvatar = {
  visibility: 'hidden',
}
</script>
```

## 加载状态

<Bubble
  :loading="loading"
  content="Hello world!"
  :avatar="{ icon: h(UserOutlined) }"
/>
<Switch v-model:checked="loading" />

```vue
<template>
  <Bubble
    :loading="loading"
    content="Hello world!"
    :avatar="{ icon: h(UserOutlined) }"
  />
  <Switch v-model:checked="loading" />
</template>

<script setup>
import { h, ref } from 'vue'
import { UserOutlined } from '@ant-design/icons-vue'
import { Bubble } from 'ant-design-x-vue'
import { Switch } from 'ant-design-vue'

const loading = ref(false)
</script>
```

## 自定义头部和底部

<Bubble
  content="你好，欢迎使用 Ant Design X！如果有任何问题请随时询问。"
  :avatar="{ icon: h(UserOutlined) }"
>
  <template #header="{ content }">
    <Space :size="token.paddingXXS">
      <div>{{ content }}</div>
    </Space>
  </template>
  <template #footer="{ content }">
    <Space :size="token.paddingXXS">
      <Button
        type="text"
        size="small"
        :icon="h(SyncOutlined)"
      />
      <Button
        type="text"
        size="small"
        :icon="h(CopyOutlined)"
        @click="() => onCopy(content)"
      />
    </Space>
  </template>
</Bubble>

```vue
<template>
  <Bubble
    content="你好，欢迎使用 Ant Design X！如果有任何问题请随时询问。"
    :avatar="{ icon: h(UserOutlined) }"
  >
    <template #header="{ content }">
      <Space :size="token.paddingXXS">
        <div>{{ content }}</div>
      </Space>
    </template>
    <template #footer="{ content }">
      <Space :size="token.paddingXXS">
        <Button
          type="text"
          size="small"
          :icon="h(SyncOutlined)"
        />
        <Button
          type="text"
          size="small"
          :icon="h(CopyOutlined)"
          @click="() => onCopy(content)"
        />
      </Space>
    </template>
  </Bubble>
</template>

<script setup>
import { h } from 'vue'
import { UserOutlined, CopyOutlined, SyncOutlined } from '@ant-design/icons-vue'
import { Bubble } from 'ant-design-x-vue'
import { Button, Space, theme, message } from 'ant-design-vue'

const { token } = theme.useToken()
const [messageApi] = message.useMessage()

const onCopy = (textToCopy) => {
  messageApi.success(`文本已复制：${textToCopy}`)
}
</script>
```

## 不同变体

<Flex vertical gap="middle">
  <Bubble
    variant="filled"
    :avatar="{ icon: h(UserOutlined) }"
    content="variant: filled"
  />
  <Bubble
    variant="outlined"
    :avatar="{ icon: h(UserOutlined) }"
    content="variant: outlined"
  />
  <Bubble
    variant="shadow"
    :avatar="{ icon: h(UserOutlined) }"
    content="variant: shadow"
  />
  <Bubble
    variant="borderless"
    :avatar="{ icon: h(UserOutlined) }"
    content="variant: borderless"
  />
</Flex>

```vue
<template>
  <Flex vertical gap="middle">
    <Bubble
      variant="filled"
      :avatar="{ icon: h(UserOutlined) }"
      content="variant: filled"
    />
    <Bubble
      variant="outlined"
      :avatar="{ icon: h(UserOutlined) }"
      content="variant: outlined"
    />
    <Bubble
      variant="shadow"
      :avatar="{ icon: h(UserOutlined) }"
      content="variant: shadow"
    />
    <Bubble
      variant="borderless"
      :avatar="{ icon: h(UserOutlined) }"
      content="variant: borderless"
    />
  </Flex>
</template>

<script setup>
import { h } from 'vue'
import { UserOutlined } from '@ant-design/icons-vue'
import { Bubble } from 'ant-design-x-vue'
import { Flex } from 'ant-design-vue'
</script>
```

## 不同形状

<Flex gap="middle" vertical>
  <Bubble content="shape: default" />
  <Bubble content="shape: round" shape="round" />
  <Bubble content="shape: corner" shape="corner" />
</Flex>

```vue
<template>
  <Flex gap="middle" vertical>
    <Bubble content="shape: default" />
    <Bubble content="shape: round" shape="round" />
    <Bubble content="shape: corner" shape="corner" />
  </Flex>
</template>

<script setup>
import { Bubble } from 'ant-design-x-vue'
import { Flex } from 'ant-design-vue'
</script>
```

## API

### Bubble Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| content | 气泡内容 | `string \| VNode` | - |
| placement | 气泡位置 | `'start' \| 'end'` | `'start'` |
| avatar | 头像配置 | `AvatarProps` | - |
| loading | 加载状态 | `boolean` | `false` |
| variant | 变体 | `'filled' \| 'outlined' \| 'shadow' \| 'borderless'` | `'filled'` |
| shape | 形状 | `'default' \| 'round' \| 'corner'` | `'default'` |
| typing | 打字效果配置 | `TypingConfig` | - |

### Bubble Slots

| 名称 | 说明 | 参数 |
| --- | --- | --- |
| avatar | 自定义头像 | - |
| header | 自定义头部 | `{ content }` |
| footer | 自定义底部 | `{ content }` |
| message | 自定义消息内容 | `{ content }` |