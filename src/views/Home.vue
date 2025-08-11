<template>
  <div class="home">
    <div class="header">
      <h1>Ant Design X Vue</h1>
      <p>基于 Ant Design 的 AGI 产品界面解决方案</p>
    </div>
    
    <div class="categories">
      <!-- 通用 -->
      <div class="category-section">
        <h2 class="category-title">通用</h2>
        <div class="component-grid">
          <router-link to="/bubble" class="nav-card">
            <div class="card-icon">💬</div>
            <div class="card-title">Bubble</div>
            <div class="card-desc">对话气泡框</div>
          </router-link>
          
          <router-link to="/conversations" class="nav-card">
            <div class="card-icon">📋</div>
            <div class="card-title">Conversations</div>
            <div class="card-desc">管理对话</div>
          </router-link>
        </div>
      </div>

      <!-- 唤醒 -->
      <div class="category-section">
        <h2 class="category-title">唤醒</h2>
        <div class="component-grid">
          <router-link to="/welcome" class="nav-card">
            <div class="card-icon">👋</div>
            <div class="card-title">Welcome</div>
            <div class="card-desc">欢迎</div>
          </router-link>
          
          <router-link to="/prompts" class="nav-card">
            <div class="card-icon">💡</div>
            <div class="card-title">Prompts</div>
            <div class="card-desc">提示集</div>
          </router-link>
        </div>
      </div>

      <!-- 表达 -->
      <div class="category-section">
        <h2 class="category-title">表达</h2>
        <div class="component-grid">
          <router-link to="/sender" class="nav-card">
            <div class="card-icon">📤</div>
            <div class="card-title">Sender</div>
            <div class="card-desc">输入框</div>
          </router-link>
          
          <router-link to="/attachments" class="nav-card">
            <div class="card-icon">📎</div>
            <div class="card-title">Attachments</div>
            <div class="card-desc">输入附件</div>
          </router-link>
          
          <router-link to="/suggestion" class="nav-card">
            <div class="card-icon">🔍</div>
            <div class="card-title">Suggestion</div>
            <div class="card-desc">快捷指令</div>
          </router-link>
        </div>
      </div>

      <!-- 确认 -->
      <div class="category-section">
        <h2 class="category-title">确认</h2>
        <div class="component-grid">
          <router-link to="/thought-chain" class="nav-card">
            <div class="card-icon">🧠</div>
            <div class="card-title">ThoughtChain</div>
            <div class="card-desc">思维链</div>
          </router-link>
        </div>
      </div>

      <!-- 工具 -->
      <div class="category-section">
        <h2 class="category-title">工具</h2>
        <div class="component-grid">
          <router-link to="/use-x-agent" class="nav-card">
            <div class="card-icon">🤖</div>
            <div class="card-title">useXAgent</div>
            <div class="card-desc">模型调度</div>
          </router-link>
          
          <router-link to="/use-x-chat" class="nav-card">
            <div class="card-icon">💬</div>
            <div class="card-title">useXChat</div>
            <div class="card-desc">数据管理</div>
          </router-link>
          
          <router-link to="/x-stream" class="nav-card">
            <div class="card-icon">🌊</div>
            <div class="card-title">XStream</div>
            <div class="card-desc">流</div>
          </router-link>
          
          <router-link to="/x-request" class="nav-card">
            <div class="card-icon">📡</div>
            <div class="card-title">XRequest</div>
            <div class="card-desc">请求</div>
          </router-link>
          
          <router-link to="/x-provider" class="nav-card">
            <div class="card-icon">⚙️</div>
            <div class="card-title">XProvider</div>
            <div class="card-desc">全局化配置</div>
          </router-link>
        </div>
      </div>

      <!-- 其他 -->
      <div class="category-section">
        <h2 class="category-title">其他</h2>
        <div class="component-grid">
          <router-link to="/about" class="nav-card">
            <div class="card-icon">ℹ️</div>
            <div class="card-title">About</div>
            <div class="card-desc">关于页面</div>
          </router-link>
        </div>
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
  max-width: 1200px;
  margin: 0 auto;
}

.header {
  text-align: center;
  margin-bottom: 48px;
  padding: 40px 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  color: white;
}

.header h1 {
  font-size: 36px;
  margin-bottom: 12px;
  font-weight: 700;
}

.header p {
  font-size: 16px;
  opacity: 0.9;
  margin: 0;
}

.categories {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.category-section {
  background: white;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid #f0f0f0;
}

.category-title {
  font-size: 24px;
  font-weight: 600;
  color: #262626;
  margin-bottom: 24px;
  padding-bottom: 12px;
  border-bottom: 2px solid #f0f0f0;
  position: relative;
}

.category-title::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 60px;
  height: 2px;
  background: linear-gradient(90deg, #1890ff, #40a9ff);
}

.component-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;
}

.nav-card {
  display: block;
  padding: 24px;
  background: #fafafa;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.nav-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #1890ff, #40a9ff);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.nav-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  border-color: #1890ff;
  background: white;
  color: inherit;
}

.nav-card:hover::before {
  transform: scaleX(1);
}

.card-icon {
  font-size: 36px;
  margin-bottom: 16px;
  display: block;
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
  line-height: 1.5;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .home {
    padding: 16px;
  }
  
  .header {
    padding: 24px 16px;
    margin-bottom: 32px;
  }
  
  .header h1 {
    font-size: 28px;
  }
  
  .category-section {
    padding: 24px 16px;
  }
  
  .component-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  
  .categories {
    gap: 24px;
  }
}

@media (max-width: 480px) {
  .header h1 {
    font-size: 24px;
  }
  
  .category-title {
    font-size: 20px;
  }
}
</style>