<template>
  <div class="thought-chain-demo">
    <h1>ThoughtChain 思维链组件示例</h1>
    
    <div class="demo-section">
      <h2>基础思维链</h2>
      <x-thought-chain :items="basicThoughts" />
    </div>

    <div class="demo-section">
      <h2>带状态的思维链</h2>
      <x-thought-chain 
        :items="statusThoughts"
        :collapsible="true"
      />
    </div>

    <div class="demo-section">
      <h2>实时思维链演示</h2>
      <div style="margin-bottom: 16px;">
        <a-button @click="startThinking" :loading="isThinking" type="primary">
          {{ isThinking ? '思考中...' : '开始思考' }}
        </a-button>
        <a-button @click="resetThinking" style="margin-left: 8px;">
          重置
        </a-button>
      </div>
      <x-thought-chain 
        :items="realTimeThoughts"
        :collapsible="true"
      />
    </div>

    <div class="demo-section">
      <h2>复杂推理链</h2>
      <x-thought-chain 
        :items="complexThoughts"
        :collapsible="true"
        :showIndex="true"
      />
    </div>

    <div class="demo-section">
      <h2>自定义样式思维链</h2>
      <x-thought-chain 
        :items="customThoughts"
        :collapsible="true"
        class="custom-thought-chain"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isThinking = ref(false)

const basicThoughts = [
  {
    id: '1',
    title: '分析问题',
    content: '首先需要理解用户的需求，这是一个关于Vue组件开发的问题。',
    status: 'success'
  },
  {
    id: '2',
    title: '制定方案',
    content: '基于Vue 3 Composition API来设计组件结构，使用TypeScript提供类型安全。',
    status: 'success'
  },
  {
    id: '3',
    title: '实现功能',
    content: '编写组件代码，包括模板、逻辑和样式部分。',
    status: 'success'
  }
]

const statusThoughts = [
  {
    id: '1',
    title: '数据收集',
    content: '正在收集相关的技术文档和最佳实践...',
    status: 'success'
  },
  {
    id: '2',
    title: '方案评估',
    content: '评估不同实现方案的优缺点，考虑性能和可维护性。',
    status: 'processing'
  },
  {
    id: '3',
    title: '代码生成',
    content: '基于选定方案生成具体的代码实现。',
    status: 'pending'
  },
  {
    id: '4',
    title: '测试验证',
    content: '对生成的代码进行测试和验证。',
    status: 'pending'
  }
]

const realTimeThoughts = ref([])

const complexThoughts = [
  {
    id: '1',
    title: '需求分析',
    content: '用户希望创建一个可复用的数据表格组件，需要支持排序、筛选、分页等功能。',
    status: 'success',
    children: [
      {
        id: '1-1',
        title: '功能拆解',
        content: '将复杂需求拆解为：基础表格显示、排序功能、筛选功能、分页功能。',
        status: 'success'
      },
      {
        id: '1-2',
        title: '技术选型',
        content: '选择Ant Design Vue作为UI库，Vue 3 + TypeScript作为开发框架。',
        status: 'success'
      }
    ]
  },
  {
    id: '2',
    title: '架构设计',
    content: '设计组件的整体架构和数据流。',
    status: 'success',
    children: [
      {
        id: '2-1',
        title: '组件结构',
        content: '采用组合式API设计，将不同功能拆分为独立的composables。',
        status: 'success'
      },
      {
        id: '2-2',
        title: '状态管理',
        content: '使用reactive和ref管理组件内部状态，通过props和emits与父组件通信。',
        status: 'success'
      }
    ]
  },
  {
    id: '3',
    title: '代码实现',
    content: '开始编写具体的组件代码。',
    status: 'processing'
  }
]

const customThoughts = [
  {
    id: '1',
    title: '🎯 目标确定',
    content: '明确项目目标和成功标准，确保所有团队成员理解一致。',
    status: 'success'
  },
  {
    id: '2',
    title: '🔍 深度调研',
    content: '进行市场调研和技术调研，了解现有解决方案和最佳实践。',
    status: 'success'
  },
  {
    id: '3',
    title: '💡 创新思考',
    content: '基于调研结果，思考创新的解决方案和差异化优势。',
    status: 'processing'
  },
  {
    id: '4',
    title: '🚀 快速原型',
    content: '构建最小可行产品(MVP)来验证核心假设。',
    status: 'pending'
  }
]

const thinkingSteps = [
  {
    title: '理解问题',
    content: '正在分析用户输入的问题内容...',
    duration: 1000
  },
  {
    title: '搜索知识',
    content: '在知识库中搜索相关信息和解决方案...',
    duration: 1500
  },
  {
    title: '生成方案',
    content: '基于搜索结果生成多个可能的解决方案...',
    duration: 2000
  },
  {
    title: '评估方案',
    content: '评估各个方案的可行性和优缺点...',
    duration: 1200
  },
  {
    title: '优化答案',
    content: '选择最佳方案并进行细节优化...',
    duration: 800
  },
  {
    title: '生成回复',
    content: '将最终方案整理成用户友好的回复格式。',
    duration: 600
  }
]

const startThinking = async () => {
  if (isThinking.value) return
  
  isThinking.value = true
  realTimeThoughts.value = []
  
  for (let i = 0; i < thinkingSteps.length; i++) {
    const step = thinkingSteps[i]
    
    // 添加新的思考步骤
    realTimeThoughts.value.push({
      id: (i + 1).toString(),
      title: step.title,
      content: step.content,
      status: 'processing'
    })
    
    // 等待指定时间
    await new Promise(resolve => setTimeout(resolve, step.duration))
    
    // 标记当前步骤完成
    realTimeThoughts.value[i].status = 'success'
  }
  
  isThinking.value = false
}

const resetThinking = () => {
  isThinking.value = false
  realTimeThoughts.value = []
}
</script>

<style scoped>
.thought-chain-demo {
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

.custom-thought-chain {
  --thought-chain-bg: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --thought-chain-color: white;
}

:deep(.custom-thought-chain .ant-steps-item-title) {
  color: #333 !important;
  font-weight: 600;
}

:deep(.custom-thought-chain .ant-steps-item-description) {
  color: #666 !important;
}
</style>