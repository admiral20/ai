<template>
  <div class="suggestion-demo">
    <h1>Suggestion 快捷指令</h1>
    <p>快捷指令组件演示</p>
    
    <div class="demo-section">
      <h2>基础用法</h2>
      <div class="demo-content">
        <p>Suggestion 组件用于提供快捷指令功能，帮助用户快速输入常用的指令或文本。</p>
        <div class="placeholder-content">
          <div class="suggestion-item">📝 写一篇关于...</div>
          <div class="suggestion-item">🔍 帮我搜索...</div>
          <div class="suggestion-item">💡 给我建议...</div>
          <div class="suggestion-item">📊 分析数据...</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Suggestion 组件逻辑
</script>

<style scoped>
.suggestion-demo {
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

.placeholder-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 16px;
}

.suggestion-item {
  padding: 12px 16px;
  background: white;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s;
}

.suggestion-item:hover {
  border-color: #1890ff;
  box-shadow: 0 2px 8px rgba(24, 144, 255, 0.1);
}
</style>