#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const componentName = process.argv[2]

if (!componentName) {
  console.error('请提供组件名称: node scripts/generate-doc.js ComponentName')
  process.exit(1)
}

const template = `# ${componentName} 组件

${componentName} 组件的描述。

## 基础用法

<script setup>
import { h, ref } from 'vue'
import { ${componentName} } from 'ant-design-x-vue'
import { message } from 'ant-design-vue'

const [messageApi] = message.useMessage()
</script>

<${componentName} />

\`\`\`vue
<template>
  <${componentName} />
</template>

<script setup>
import { ${componentName} } from 'ant-design-x-vue'
</script>
\`\`\`

## 功能特性

- 功能1
- 功能2
- 功能3

## API

### ${componentName} Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| - | - | - | - |

### ${componentName} Events

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| - | - | - |
`

const filePath = path.join(__dirname, '..', 'docs', 'components', `${componentName}.md`)

fs.writeFileSync(filePath, template)

console.log(`✅ 已生成 ${componentName} 组件文档: ${filePath}`)
console.log('📝 请记得在 docs/.vitepress/config.ts 中添加侧边栏配置')
`