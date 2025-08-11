<template>
  <div class="x-stream-demo">
    <h1>XStream 流</h1>
    <p>流式数据处理组件演示</p>
    
    <div class="demo-section">
      <h2>基础用法</h2>
      <div class="demo-content">
        <p>XStream 组件用于处理流式数据，支持实时数据流的展示和处理。</p>
        <div class="stream-demo">
          <div class="stream-item" v-for="item in streamData" :key="item.id">
            <span class="timestamp">{{ item.timestamp }}</span>
            <span class="content">{{ item.content }}</span>
          </div>
        </div>
        <Button @click="startStream" :loading="streaming">
          {{ streaming ? '流式传输中...' : '开始流式传输' }}
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Button } from 'ant-design-vue';

const streamData = ref<Array<{ id: number; timestamp: string; content: string }>>([]);
const streaming = ref(false);

const startStream = () => {
  streaming.value = true;
  streamData.value = [];
  
  let count = 0;
  const interval = setInterval(() => {
    count++;
    streamData.value.push({
      id: count,
      timestamp: new Date().toLocaleTimeString(),
      content: `流式数据 ${count}: 这是一条实时传输的消息`
    });
    
    if (count >= 10) {
      clearInterval(interval);
      streaming.value = false;
    }
  }, 500);
};
</script>

<style scoped>
.x-stream-demo {
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

.stream-demo {
  max-height: 300px;
  overflow-y: auto;
  background: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  padding: 12px;
  margin: 16px 0;
}

.stream-item {
  display: flex;
  gap: 12px;
  padding: 8px 0;
  border-bottom: 1px solid #f0f0f0;
}

.stream-item:last-child {
  border-bottom: none;
}

.timestamp {
  color: #666;
  font-size: 12px;
  min-width: 80px;
}

.content {
  flex: 1;
  color: #333;
}
</style>