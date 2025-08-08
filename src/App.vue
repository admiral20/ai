<template>
  <div id="app">
    <header class="app-header">
      <nav class="nav">
        <router-link to="/" class="logo">
          Vue App
        </router-link>
        <div class="nav-links">
          <router-link to="/" class="nav-item">首页</router-link>
          <router-link to="/bubble" class="nav-item">对话气泡</router-link>
          <router-link to="/conversations" class="nav-item">管理对话</router-link>
          <router-link to="/about" class="nav-item">关于</router-link>
        </div>
      </nav>
    </header>
    <main class="app-main">
      <router-view />
    </main>
    <footer class="app-footer">
      <p>&copy; 2025 Vue应用. All rights reserved.</p>
    </footer>
  </div>
</template>
<style>
#app {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-header {
  background: #001529;
  color: white;
  padding: 0 20px;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  max-width: 1200px;
  margin: 0 auto;
}

.logo {
  font-size: 20px;
  font-weight: bold;
  color: white;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 20px;
}

.nav-item {
  color: rgba(255, 255, 255, 0.65);
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 4px;
  transition: all 0.3s;
}

.nav-item:hover,
.nav-item.router-link-active {
  color: white;
  background: rgba(255, 255, 255, 0.1);
}

.app-main {
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: 20px;
}

.app-footer {
  background: #f0f2f5;
  text-align: center;
  padding: 20px;
  color: #666;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .nav {
    flex-direction: column;
    height: auto;
    padding: 10px 0;
  }
  
  .nav-links {
    margin-top: 10px;
  }
  
  .app-main {
    padding: 10px;
  }
}
</style>