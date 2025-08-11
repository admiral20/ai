<template>
  <div class="use-x-agent-demo">
    <h1>useXAgent 模型调度</h1>
    <p>模型调度 Hook 演示</p>
    
    <div class="demo-section">
      <h2>基础用法</h2>
      <div class="demo-content">
        <p>useXAgent 是一个用于模型调度的 Hook，提供了统一的模型管理和调用接口。</p>
        <div class="code-example">
          <pre><code>import { useXAgent } from 'ant-design-x-vue';

const { agent, loading, error } = useXAgent({
  model: 'gpt-3.5-turbo',
  apiKey: 'your-api-key'
});

// 调用模型
const response = await agent.chat('Hello, world!');</code></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// useXAgent Hook 演示逻辑
</script>

<style scoped>
.use-x-agent-demo {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.demo-section {
  margin-bottom: 32px;
}

.demo-section h2 {
  color: #1890ff;
  margin-bottom: 16px;
}

.demo-content {
  background: #fafafa;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #f0f0f0;
}

.code-example {
  margin-top: 16px;
  background: #f6f8fa;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  padding: 16px;
}

.code-example pre {
  margin: 0;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 14px;
  line-height: 1.5;
  color: #24292e;
}
</style>