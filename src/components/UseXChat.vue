<template>
  <div class="use-x-chat-demo">
    <h1>useXChat 数据管理</h1>
    <p>聊天数据管理 Hook 演示</p>
    
    <div class="demo-section">
      <h2>基础用法</h2>
      <div class="demo-content">
        <p>useXChat 是一个用于聊天数据管理的 Hook，提供了消息存储、历史记录管理等功能。</p>
        <div class="code-example">
          <pre><code>import { useXChat } from 'ant-design-x-vue';

const { 
  messages, 
  addMessage, 
  clearMessages,
  loading 
} = useXChat();

// 添加消息
addMessage({
  role: 'user',
  content: 'Hello!'
});</code></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// useXChat Hook 演示逻辑
</script>

<style scoped>
.use-x-chat-demo {
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