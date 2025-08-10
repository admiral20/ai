<template>
  <div class="sender-demo">
    <h1>Sender 消息发送组件示例</h1>
    
    <div class="demo-section">
      <h2>基础发送器</h2>
      <x-sender
        v-model:value="message1"
        placeholder="请输入消息..."
        @submit="handleSubmit1"
      />
    </div>

    <div class="demo-section">
      <h2>带附件的发送器</h2>
      <x-sender
        v-model:value="message2"
        placeholder="支持文件上传..."
        :actions="senderActions"
        @submit="handleSubmit2"
        @action-click="handleActionClick"
      />
    </div>

    <div class="demo-section">
      <h2>多行输入发送器</h2>
      <x-sender
        v-model:value="message3"
        placeholder="支持多行输入，Shift+Enter换行，Enter发送"
        :autoSize="{ minRows: 3, maxRows: 6 }"
        @submit="handleSubmit3"
      />
    </div>

    <div class="demo-section">
      <h2>自定义样式发送器</h2>
      <x-sender
        v-model:value="message4"
        placeholder="自定义样式的发送器"
        :loading="loading"
        :disabled="disabled"
        @submit="handleSubmit4"
      />
      <div style="margin-top: 12px;">
        <a-button @click="toggleLoading" style="margin-right: 8px;">
          {{ loading ? '停止加载' : '开始加载' }}
        </a-button>
        <a-button @click="toggleDisabled">
          {{ disabled ? '启用' : '禁用' }}
        </a-button>
      </div>
    </div>

    <div class="demo-section">
      <h2>发送历史</h2>
      <div class="message-history">
        <div 
          v-for="(msg, index) in messageHistory" 
          :key="index"
          class="history-item"
        >
          <strong>{{ msg.timestamp }}:</strong> {{ msg.content }}
        </div>
        <div v-if="messageHistory.length === 0" class="empty-history">
          暂无消息记录
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const message1 = ref('')
const message2 = ref('')
const message3 = ref('')
const message4 = ref('')
const loading = ref(false)
const disabled = ref(false)
const messageHistory = ref<Array<{content: string, timestamp: string}>>([])

const senderActions = [
  {
    key: 'attachment',
    icon: '📎',
    tooltip: '添加附件'
  },
  {
    key: 'emoji',
    icon: '😊',
    tooltip: '添加表情'
  },
  {
    key: 'voice',
    icon: '🎤',
    tooltip: '语音输入'
  }
]

const addToHistory = (content: string) => {
  if (content.trim()) {
    messageHistory.value.unshift({
      content,
      timestamp: new Date().toLocaleTimeString()
    })
  }
}

const handleSubmit1 = (value: string) => {
  console.log('基础发送器提交:', value)
  addToHistory(`[基础] ${value}`)
  message1.value = ''
}

const handleSubmit2 = (value: string) => {
  console.log('附件发送器提交:', value)
  addToHistory(`[附件] ${value}`)
  message2.value = ''
}

const handleSubmit3 = (value: string) => {
  console.log('多行发送器提交:', value)
  addToHistory(`[多行] ${value}`)
  message3.value = ''
}

const handleSubmit4 = (value: string) => {
  console.log('自定义发送器提交:', value)
  addToHistory(`[自定义] ${value}`)
  message4.value = ''
}

const handleActionClick = (action: any) => {
  console.log('点击了操作按钮:', action)
  switch (action.key) {
    case 'attachment':
      alert('打开文件选择器')
      break
    case 'emoji':
      alert('打开表情面板')
      break
    case 'voice':
      alert('开始语音输入')
      break
  }
}

const toggleLoading = () => {
  loading.value = !loading.value
}

const toggleDisabled = () => {
  disabled.value = !disabled.value
}
</script>

<style scoped>
.sender-demo {
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

.message-history {
  max-height: 200px;
  overflow-y: auto;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  padding: 12px;
  background: #fafafa;
}

.history-item {
  padding: 8px 0;
  border-bottom: 1px solid #f0f0f0;
}

.history-item:last-child {
  border-bottom: none;
}

.empty-history {
  text-align: center;
  color: #999;
  font-style: italic;
}
</style>