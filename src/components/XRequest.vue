<template>
  <div class="x-request-demo">
    <h1>XRequest 请求</h1>
    <p>HTTP 请求管理组件演示</p>
    
    <div class="demo-section">
      <h2>基础用法</h2>
      <div class="demo-content">
        <p>XRequest 组件用于管理 HTTP 请求，提供了统一的请求接口和状态管理。</p>
        <div class="request-demo">
          <Space>
            <Button @click="sendGetRequest" :loading="loading.get">
              GET 请求
            </Button>
            <Button @click="sendPostRequest" :loading="loading.post">
              POST 请求
            </Button>
          </Space>
          
          <div v-if="response" class="response-area">
            <h3>响应结果：</h3>
            <pre>{{ JSON.stringify(response, null, 2) }}</pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { Button, Space, message } from 'ant-design-vue';

const loading = reactive({
  get: false,
  post: false
});

const response = ref(null);

const sendGetRequest = async () => {
  loading.get = true;
  try {
    // 模拟 GET 请求
    await new Promise(resolve => setTimeout(resolve, 1000));
    response.value = {
      method: 'GET',
      status: 200,
      data: {
        message: '这是一个模拟的 GET 请求响应',
        timestamp: new Date().toISOString()
      }
    };
    message.success('GET 请求成功');
  } catch (error) {
    message.error('GET 请求失败');
  } finally {
    loading.get = false;
  }
};

const sendPostRequest = async () => {
  loading.post = true;
  try {
    // 模拟 POST 请求
    await new Promise(resolve => setTimeout(resolve, 1500));
    response.value = {
      method: 'POST',
      status: 201,
      data: {
        message: '这是一个模拟的 POST 请求响应',
        id: Math.random().toString(36).substr(2, 9),
        timestamp: new Date().toISOString()
      }
    };
    message.success('POST 请求成功');
  } catch (error) {
    message.error('POST 请求失败');
  } finally {
    loading.post = false;
  }
};
</script>

<style scoped>
.x-request-demo {
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

.request-demo {
  margin-top: 16px;
}

.response-area {
  margin-top: 20px;
  padding: 16px;
  background: #f6f8fa;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
}

.response-area h3 {
  margin-top: 0;
  margin-bottom: 12px;
  color: #24292e;
}

.response-area pre {
  margin: 0;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 14px;
  line-height: 1.5;
  color: #24292e;
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>