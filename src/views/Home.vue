<template>
  <div class="home">
    <h1>欢迎使用Vue应用</h1>
    <p>这是首页内容</p>
    
    <div class="navigation">
      <h2>Ant Design X Vue 组件演示</h2>
      <div class="component-grid">
        <router-link to="/bubble" class="nav-card">
          <div class="card-icon">💬</div>
          <div class="card-title">Bubble</div>
          <div class="card-desc">对话气泡组件</div>
        </router-link>
        
        <router-link to="/conversations" class="nav-card">
          <div class="card-icon">📋</div>
          <div class="card-title">Conversations</div>
          <div class="card-desc">对话列表管理</div>
        </router-link>
        
        <router-link to="/welcome" class="nav-card">
          <div class="card-icon">👋</div>
          <div class="card-title">Welcome</div>
          <div class="card-desc">欢迎页面组件</div>
        </router-link>
        
        <router-link to="/prompts" class="nav-card">
          <div class="card-icon">💡</div>
          <div class="card-title">Prompts</div>
          <div class="card-desc">提示词组件</div>
        </router-link>
        
        <router-link to="/sender" class="nav-card">
          <div class="card-icon">📤</div>
          <div class="card-title">Sender</div>
          <div class="card-desc">消息发送组件</div>
        </router-link>
        
        <router-link to="/attachments" class="nav-card">
          <div class="card-icon">📎</div>
          <div class="card-title">Attachments</div>
          <div class="card-desc">附件管理组件</div>
        </router-link>
        
        <router-link to="/thought-chain" class="nav-card">
          <div class="card-icon">🧠</div>
          <div class="card-title">ThoughtChain</div>
          <div class="card-desc">思维链组件</div>
        </router-link>
        
        <router-link to="/about" class="nav-card">
          <div class="card-icon">ℹ️</div>
          <div class="card-title">About</div>
          <div class="card-desc">关于页面</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 首页逻辑
</script>

<style scoped>
.home {
  padding: 20px;
  text-align: center;
}

.navigation {
  margin-top: 30px;
}

.navigation h2 {
  color: #1890ff;
  margin-bottom: 24px;
}

.component-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  max-width: 1000px;
  margin: 0 auto;
}

.nav-card {
  display: block;
  padding: 24px;
  background: white;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.nav-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  border-color: #1890ff;
  color: inherit;
}

.card-icon {
  font-size: 32px;
  margin-bottom: 12px;
}

.card-title {
  font-size: 18px;
  font-weight: 600;
  color: #1890ff;
  margin-bottom: 8px;
}

.card-desc {
  font-size: 14px;
  color: #666;
  line-height: 1.4;
}
</style>