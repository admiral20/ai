<template>
  <div class="about">
    <h1>关于我们</h1>
    <p>这是一个基于Vue 3 + TypeScript + Ant Design Vue的应用</p>
    
    <div class="features">
      <h2>主要特性</h2>
      <ul>
        <li>Vue 3 Composition API</li>
        <li>TypeScript 支持</li>
        <li>Vue Router 路由管理</li>
        <li>Ant Design Vue UI组件库</li>
        <li>Ant Design X Vue 扩展组件</li>
      </ul>
    </div>
    
    <router-link to="/" class="back-link">
      返回首页
    </router-link>
  </div>
</template>

<script setup lang="ts">
// 关于页面逻辑
</script>

<style scoped>
.about {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.features {
  margin: 30px 0;
}

.features ul {
  text-align: left;
  display: inline-block;
}

.features li {
  margin: 10px 0;
}

.back-link {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background: #52c41a;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.back-link:hover {
  background: #73d13d;
  color: white;
}
</style>