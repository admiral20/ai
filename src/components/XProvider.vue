<template>
  <div class="x-provider-demo">
    <h1>XProvider 全局化配置</h1>
    <p>全局配置提供者组件演示</p>
    
    <div class="demo-section">
      <h2>基础用法</h2>
      <div class="demo-content">
        <p>XProvider 组件用于提供全局配置，包括主题、语言、API 配置等。</p>
        
        <div class="config-demo">
          <h3>当前配置：</h3>
          <div class="config-item">
            <span class="config-label">主题模式：</span>
            <Switch 
              v-model:checked="isDark" 
              checked-children="暗色" 
              un-checked-children="亮色"
              @change="handleThemeChange"
            />
          </div>
          
          <div class="config-item">
            <span class="config-label">语言：</span>
            <Select v-model:value="language" style="width: 120px" @change="handleLanguageChange">
              <SelectOption value="zh-CN">中文</SelectOption>
              <SelectOption value="en-US">English</SelectOption>
            </Select>
          </div>
          
          <div class="config-item">
            <span class="config-label">API 端点：</span>
            <Input 
              v-model:value="apiEndpoint" 
              placeholder="输入 API 端点"
              style="width: 300px"
              @change="handleApiChange"
            />
          </div>
        </div>
        
        <div class="config-preview">
          <h3>配置预览：</h3>
          <pre>{{ JSON.stringify(currentConfig, null, 2) }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { Switch, Select, SelectOption, Input, message } from 'ant-design-vue';

const isDark = ref(false);
const language = ref('zh-CN');
const apiEndpoint = ref('https://api.example.com');

const currentConfig = computed(() => ({
  theme: isDark.value ? 'dark' : 'light',
  language: language.value,
  apiEndpoint: apiEndpoint.value,
  timestamp: new Date().toISOString()
}));

const handleThemeChange = (checked: boolean) => {
  message.success(`主题已切换为${checked ? '暗色' : '亮色'}模式`);
};

const handleLanguageChange = (value: string) => {
  message.success(`语言已切换为${value === 'zh-CN' ? '中文' : '英文'}`);
};

const handleApiChange = () => {
  message.success('API 端点已更新');
};
</script>

<style scoped>
.x-provider-demo {
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

.config-demo {
  margin: 16px 0;
}

.config-demo h3 {
  margin-bottom: 16px;
  color: #333;
}

.config-item {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.config-label {
  min-width: 100px;
  color: #666;
  margin-right: 12px;
}

.config-preview {
  margin-top: 24px;
  padding: 16px;
  background: #f6f8fa;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
}

.config-preview h3 {
  margin-top: 0;
  margin-bottom: 12px;
  color: #24292e;
}

.config-preview pre {
  margin: 0;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 14px;
  line-height: 1.5;
  color: #24292e;
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>