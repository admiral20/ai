<template>
  <div class="not-found">
    <h1>404</h1>
    <h2>页面未找到</h2>
    <p>抱歉，您访问的页面不存在</p>
    
    <div class="actions">
      <router-link to="/" class="home-link">
        返回首页
      </router-link>
      <button @click="goBack" class="back-button">
        返回上一页
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  router.go(-1)
}
</script>

<style scoped>
.not-found {
  padding: 50px 20px;
  text-align: center;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.not-found h1 {
  font-size: 72px;
  color: #ff4d4f;
  margin: 0;
}

.not-found h2 {
  font-size: 24px;
  margin: 20px 0 10px;
}

.not-found p {
  color: #666;
  margin-bottom: 30px;
}

.actions {
  display: flex;
  gap: 15px;
}

.home-link,
.back-button {
  padding: 10px 20px;
  border-radius: 4px;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
}

.home-link {
  background: #1890ff;
  color: white;
}

.home-link:hover {
  background: #40a9ff;
  color: white;
}

.back-button {
  background: #f5f5f5;
  color: #333;
  border: 1px solid #d9d9d9;
}

.back-button:hover {
  background: #e6f7ff;
  border-color: #1890ff;
}
</style>