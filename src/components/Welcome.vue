<template>
  <div class="welcome-container">
    <!-- 默认主题的 Welcome 组件 -->
    <ConfigProvider :theme="{ algorithm: theme.defaultAlgorithm }">
      <Welcome
        :style="{ backgroundImage: 'linear-gradient(7deg, rgba(90,196,255,0.8) 0%, rgba(174,136,255,1) 100%)', borderStartStartRadius: 14 }"
        icon="https://mdn.alipayobjects.com/huamei_iwk9zp/afts/img/A*s5sNRo5LjfQAAAAAAAAAAAAADgCCAQ/fmt.webp"
        title="Hello, I'm Ant Design X"
        description="Base on Ant Design, AGI product interface solution, create a better intelligent vision~"
      />
    </ConfigProvider>
    
    <hr />
    
    <!-- 无边框变体的 Welcome 组件 -->
    <ConfigProvider :theme="{ algorithm: theme.defaultAlgorithm }">
      <Welcome
        :style="{ backgroundImage: 'linear-gradient(70deg, rgba(10,196,25,0.8) 0%, rgba(174,136,255,1) 100%)', borderStartStartRadius: 14 }"
        variant="borderless"
        icon="https://mdn.alipayobjects.com/huamei_iwk9zp/afts/img/A*s5sNRo5LjfQAAAAAAAAAAAAADgCCAQ/fmt.webp"
        title="Hello, I'm Ant Design X"
        description="Base on Ant Design, AGI product interface solution, create a better intelligent vision~"
      >
        <template #extra>
          <Space>
            <Button>
              <template #icon>
                <ShareAltOutlined />
              </template>
            </Button>
            <Button>
              <template #icon>
                <EllipsisOutlined />
              </template>
            </Button>
          </Space>
        </template>
      </Welcome>
    </ConfigProvider>

    <hr />

    <!-- 主题切换演示区域 -->
    <Flex vertical>
      <div
        v-for="({ algorithm, background }, index) in items"
        :key="index"
        class="theme-demo-item"
      >
        <ConfigProvider :theme="{ algorithm }">
          <Card :style="{ borderRadius: 0 }">
            <Welcome
              :style="{ backgroundImage: background, borderStartStartRadius: 4 }"
              icon="https://mdn.alipayobjects.com/huamei_iwk9zp/afts/img/A*s5sNRo5LjfQAAAAAAAAAAAAADgCCAQ/fmt.webp"
              title="Hello, I'm Ant Design X"
              description="Base on Ant Design, AGI product interface solution, create a better intelligent vision~"
            />
          </Card>
        </ConfigProvider>
      </div>
    </Flex>
  </div>
</template>
<script setup lang="ts">
import { Welcome } from 'ant-design-x-vue';
import { EllipsisOutlined, ShareAltOutlined } from '@ant-design/icons-vue';
import { Button, Space, Card, ConfigProvider, Flex, theme } from 'ant-design-vue';

const items: {
  algorithm: typeof theme.defaultAlgorithm;
  background: string;
}[] = [
  {
    algorithm: theme.defaultAlgorithm,
    background: 'linear-gradient(97deg, #f2f9fe 0%, #f7f3ff 100%)',
  },
  {
    algorithm: theme.darkAlgorithm,
    background:
      'linear-gradient(97deg, rgba(90,196,255,0.12) 0%, rgba(174,136,255,0.12) 100%)',
  },
];
</script>

<style scoped>
.welcome-container {
  /* 确保组件样式不会泄露到全局 */
  isolation: isolate;
  padding: 20px;
}

.theme-demo-item {
  margin-bottom: 16px;
}

.theme-demo-item:last-child {
  margin-bottom: 0;
}

hr {
  margin: 24px 0;
  border: none;
  border-top: 1px solid #f0f0f0;
}
</style>