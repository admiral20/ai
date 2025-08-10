<template>
  <div class="attachments-demo">
    <h1>Attachments 附件组件示例</h1>
    
    <div class="demo-section">
      <h2>基础附件列表</h2>
      <x-attachments
        :items="basicAttachments"
        @remove="handleRemove"
        @download="handleDownload"
      />
    </div>

    <div class="demo-section">
      <h2>图片附件预览</h2>
      <x-attachments
        :items="imageAttachments"
        @remove="handleRemove"
        @preview="handlePreview"
      />
    </div>

    <div class="demo-section">
      <h2>文档附件</h2>
      <x-attachments
        :items="documentAttachments"
        @remove="handleRemove"
        @download="handleDownload"
      />
    </div>

    <div class="demo-section">
      <h2>上传新附件</h2>
      <a-upload
        :file-list="fileList"
        :before-upload="beforeUpload"
        @remove="handleFileRemove"
        multiple
      >
        <a-button>
          <upload-outlined />
          选择文件
        </a-button>
      </a-upload>
      
      <div v-if="uploadedAttachments.length > 0" style="margin-top: 16px;">
        <h3>已上传的附件：</h3>
        <x-attachments
          :items="uploadedAttachments"
          @remove="handleUploadedRemove"
        />
      </div>
    </div>

    <div class="demo-section">
      <h2>操作日志</h2>
      <div class="action-log">
        <div 
          v-for="(log, index) in actionLogs" 
          :key="index"
          class="log-item"
        >
          <span class="log-time">{{ log.time }}</span>
          <span class="log-action">{{ log.action }}</span>
          <span class="log-file">{{ log.fileName }}</span>
        </div>
        <div v-if="actionLogs.length === 0" class="empty-log">
          暂无操作记录
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { UploadOutlined } from '@ant-design/icons-vue'

const fileList = ref([])
const actionLogs = ref<Array<{time: string, action: string, fileName: string}>>([])

const basicAttachments = ref([
  {
    id: '1',
    name: 'project-proposal.pdf',
    size: '2.5MB',
    type: 'pdf',
    url: '#'
  },
  {
    id: '2',
    name: 'meeting-notes.docx',
    size: '1.2MB',
    type: 'docx',
    url: '#'
  },
  {
    id: '3',
    name: 'budget-analysis.xlsx',
    size: '856KB',
    type: 'xlsx',
    url: '#'
  }
])

const imageAttachments = ref([
  {
    id: '4',
    name: 'screenshot-1.png',
    size: '445KB',
    type: 'image',
    url: 'https://via.placeholder.com/300x200/1890ff/ffffff?text=Screenshot+1',
    thumbnail: 'https://via.placeholder.com/100x100/1890ff/ffffff?text=Thumb+1'
  },
  {
    id: '5',
    name: 'design-mockup.jpg',
    size: '1.8MB',
    type: 'image',
    url: 'https://via.placeholder.com/300x200/52c41a/ffffff?text=Design+Mockup',
    thumbnail: 'https://via.placeholder.com/100x100/52c41a/ffffff?text=Thumb+2'
  }
])

const documentAttachments = ref([
  {
    id: '6',
    name: 'api-documentation.md',
    size: '125KB',
    type: 'markdown',
    url: '#'
  },
  {
    id: '7',
    name: 'database-schema.sql',
    size: '89KB',
    type: 'sql',
    url: '#'
  },
  {
    id: '8',
    name: 'config.json',
    size: '12KB',
    type: 'json',
    url: '#'
  }
])

const uploadedAttachments = ref([])

const addLog = (action: string, fileName: string) => {
  actionLogs.value.unshift({
    time: new Date().toLocaleTimeString(),
    action,
    fileName
  })
}

const handleRemove = (item: any) => {
  console.log('删除附件:', item)
  addLog('删除', item.name)
  
  // 从对应的数组中移除
  const arrays = [basicAttachments, imageAttachments, documentAttachments]
  arrays.forEach(arr => {
    const index = arr.value.findIndex(att => att.id === item.id)
    if (index > -1) {
      arr.value.splice(index, 1)
    }
  })
}

const handleDownload = (item: any) => {
  console.log('下载附件:', item)
  addLog('下载', item.name)
  // 模拟下载
  alert(`开始下载: ${item.name}`)
}

const handlePreview = (item: any) => {
  console.log('预览附件:', item)
  addLog('预览', item.name)
  // 模拟预览
  window.open(item.url, '_blank')
}

const beforeUpload = (file: any) => {
  console.log('准备上传文件:', file)
  
  // 模拟上传成功，添加到已上传列表
  const newAttachment = {
    id: Date.now().toString(),
    name: file.name,
    size: formatFileSize(file.size),
    type: getFileType(file.name),
    url: '#'
  }
  
  uploadedAttachments.value.push(newAttachment)
  addLog('上传', file.name)
  
  // 阻止默认上传行为
  return false
}

const handleFileRemove = (file: any) => {
  console.log('移除文件:', file)
  return true
}

const handleUploadedRemove = (item: any) => {
  console.log('删除已上传附件:', item)
  const index = uploadedAttachments.value.findIndex(att => att.id === item.id)
  if (index > -1) {
    uploadedAttachments.value.splice(index, 1)
    addLog('删除', item.name)
  }
}

const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 B'
  const k = 1024
  const sizes = ['B', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i]
}

const getFileType = (fileName: string): string => {
  const ext = fileName.split('.').pop()?.toLowerCase()
  const typeMap: Record<string, string> = {
    'pdf': 'pdf',
    'doc': 'docx',
    'docx': 'docx',
    'xls': 'xlsx',
    'xlsx': 'xlsx',
    'png': 'image',
    'jpg': 'image',
    'jpeg': 'image',
    'gif': 'image',
    'md': 'markdown',
    'sql': 'sql',
    'json': 'json'
  }
  return typeMap[ext || ''] || 'file'
}
</script>

<style scoped>
.attachments-demo {
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

.action-log {
  max-height: 200px;
  overflow-y: auto;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  padding: 12px;
  background: #fafafa;
}

.log-item {
  display: flex;
  padding: 8px 0;
  border-bottom: 1px solid #f0f0f0;
  font-size: 12px;
}

.log-item:last-child {
  border-bottom: none;
}

.log-time {
  color: #999;
  margin-right: 12px;
  min-width: 80px;
}

.log-action {
  color: #1890ff;
  margin-right: 12px;
  min-width: 40px;
}

.log-file {
  color: #333;
  flex: 1;
}

.empty-log {
  text-align: center;
  color: #999;
  font-style: italic;
}
</style>