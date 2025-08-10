<template>
  <div class="prompts-demo">
    <h1>Prompts 提示词组件示例</h1>
    
    <div class="demo-section">
      <h2>基础用法</h2>
      <x-prompts
        :items="basicPrompts"
        @item-click="handlePromptClick"
      />
    </div>

    <div class="demo-section">
      <h2>带图标的提示词</h2>
      <x-prompts
        :items="iconPrompts"
        @item-click="handlePromptClick"
      />
    </div>

    <div class="demo-section">
      <h2>自定义样式</h2>
      <x-prompts
        :items="customPrompts"
        :wrap="true"
        @item-click="handlePromptClick"
      />
    </div>

    <div class="demo-section">
      <h2>点击结果</h2>
      <div v-if="selectedPrompt" class="result">
        <strong>选中的提示词：</strong> {{ selectedPrompt }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const selectedPrompt = ref<string>('')

const basicPrompts = [
  { key: '1', label: '帮我写一个Vue组件' },
  { key: '2', label: '解释一下JavaScript闭包' },
  { key: '3', label: '如何优化网站性能？' },
  { key: '4', label: '推荐一些前端学习资源' }
]

const iconPrompts = [
  { 
    key: '1', 
    label: '代码审查', 
    icon: '🔍',
    description: '帮助审查和优化代码质量'
  },
  { 
    key: '2', 
    label: '文档生成', 
    icon: '📝',
    description: '自动生成项目文档'
  },
  { 
    key: '3', 
    label: '测试用例', 
    icon: '🧪',
    description: '生成单元测试代码'
  },
  { 
    key: '4', 
    label: '性能分析', 
    icon: '⚡',
    description: '分析应用性能瓶颈'
  }
]

const customPrompts = [
  { key: '1', label: 'React vs Vue 对比分析' },
  { key: '2', label: 'TypeScript 最佳实践' },
  { key: '3', label: '微前端架构设计' },
  { key: '4', label: 'GraphQL 入门指南' },
  { key: '5', label: 'Docker 容器化部署' },
  { key: '6', label: 'CI/CD 流水线搭建' }
]

const handlePromptClick = (item: any) => {
  selectedPrompt.value = item.label
  console.log('点击了提示词:', item)
}
</script>

<style scoped>
.prompts-demo {
  padding: 24px;
  max-width: 800px;
  margin: 0 auto;
}

.demo-section {
  margin-bottom: 32px;
  padding: 16px;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
}

.demo-section h2 {
  margin-top: 0;
  margin-bottom: 16px;
  color: #1890ff;
}

.result {
  padding: 12px;
  background: #f6ffed;
  border: 1px solid #b7eb8f;
  border-radius: 6px;
  margin-top: 16px;
}
</style>