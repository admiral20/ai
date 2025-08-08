<template>
  <div class="home">
    <h1>欢迎使用Vue应用</h1>
    <p>这是首页内容</p>
    
    <div class="navigation">
      <router-link to="/bubble" class="nav-link">
        查看Bubble组件演示 对话气泡
      </router-link>
      <router-link to="/conversations" class="nav-link">
        查看Conversations组件演示 管理对话
      </router-link>
      <router-link to="/about" class="nav-link">
        关于页面
      </router-link>
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
  display: flex;
  gap: 20px;
  justify-content: center;
}

.nav-link {
  padding: 10px 20px;
  background: #1890ff;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.nav-link:hover {
  background: #40a9ff;
  color: white;
}
</style>