<template>
  <h1>Prompts 提示词组件示例</h1>
  <p>用于显示一组与当前上下文相关的预定义的问题或建议。</p>
  <context-holder />
  <Prompts
    wrap
    title="✨ Inspirational Sparks and Marvelous Tips"
    :items="items"
    :on-item-click="(info) => {
      message.success(`You clicked a prompt: ${info.data.label}`);
    }"
  />
  <hr/>
  <Prompts title="🤔 You might also want to ask:" :items="items1" vertical />
  <hr/>
  <span>响应式宽度</span>
  <Prompts
    title="✨ Inspirational Sparks and Marvelous Tips666"
    :items="items"
    wrap
    :styles="{
      item: {
        flex: 'none',
        width: 'calc(30% - 6px)',
      },
    }"
  />

  <span>嵌套组合</span>
  <ConfigProvider
    :theme="{
      algorithm: theme.defaultAlgorithm,
    }"
  >
    <Card :style="{ borderRadius: 0, border: 0 }">
      <Prompts
        title="Do you want?"
        :items="items2"
        wrap
        :styles="{
          item: {
            flex: 'none',
            width: 'calc(30% - 6px)',
            backgroundImage: `linear-gradient(137deg, #e5f4ff 0%, #efe7ff 100%)`,
            border: 0,
          },
          subItem: {
            background: 'rgba(255,255,255,0.45)',
            border: '1px solid #FFF',
          },
        }"
        @item-click="(info) => {
          message.success(`You clicked: ${info.data.description}`);
        }"
      />
    </Card>
  </ConfigProvider>

</template>

<script setup lang="ts">
import {
  BulbOutlined,
  InfoCircleOutlined,
  RocketOutlined,
  SmileOutlined,
  WarningOutlined,
  CoffeeOutlined,
  FireOutlined,
  CommentOutlined,
  HeartOutlined,
  ReadOutlined 
} from '@ant-design/icons-vue';

import { App, Card, ConfigProvider, theme, message as messageAnt, Space,  } from 'ant-design-vue';
import { Prompts, type PromptsProps } from 'ant-design-x-vue';
import { h } from 'vue';
const [message, contextHolder] = messageAnt.useMessage();

const items: PromptsProps['items'] = [
  {
    key: '1',
    disabled: true,
    icon: h(BulbOutlined, { style: { color: '#FFD700' } }),
    label: 'Ignite Your Creativity',
    description: 'Got any sparks for a new project?',
  },
  {
    key: '2',
    icon: h(InfoCircleOutlined, { style: { color: '#1890FF' } }),
    label: 'Uncover Background Info',
    description: 'Help me understand the background of this topic.',
  },
  {
    key: '3',
    icon: h(RocketOutlined, { style: { color: '#722ED1' } }),
    label: 'Efficiency Boost Battle',
    description: 'How can I work faster and better?',
  },
  {
    key: '4',
    icon: h(SmileOutlined, { style: { color: '#52C41A' } }),
    label: 'Tell me a Joke',
    description: 'Why do not ants get sick? Because they have tiny ant-bodies!',
  },
  {
    key: '5',
    icon: h(WarningOutlined, { style: { color: '#FF4D4F' } }),
    label: 'Common Issue Solutions',
    description: 'How to solve common issues? Share some tips!',
  },
];

const items1: PromptsProps['items'] = [
  {
    key: '6',
    icon: h(CoffeeOutlined, { style: { color: '#964B00' } }),
    description: 'How to rest effectively after long hours of work?How to rest effectively after long hours of work?How to rest effectively after long hours of work?How to rest effectively after long hours of work?How to rest effectively after long hours of work?How to rest effectively after long hours of work?',
    disabled: false,
  },
  {
    key: '7',
    icon: h(SmileOutlined, { style: { color: '#FAAD14' } }),
    description: 'What are the secrets to maintaining a positive mindset?',
    disabled: false,
  },
  {
    key: '8',
    icon: h(FireOutlined, { style: { color: '#FF4D4F' } }),
    description: 'How to stay calm under immense pressure?',
    disabled: false,
  },
];


const renderTitle = (icon: any, title: string) => {
  return h(Space, { align: 'start' }, () => [
    icon,
    h('span', null, title)
  ]);
};

const items2: PromptsProps['items'] = [
  {
    key: '1',
    label: renderTitle(h(FireOutlined, { style: { color: '#FF4D4F' } }), 'Hot Topics'),
    description: 'What are you interested in?',
    children: [
      {
        key: '1-1',
        description: `What's new in X?`,
      },
      {
        key: '1-2',
        description: `What's AGI?`,
      },
      {
        key: '1-3',
        description: `Where is the doc?`,
      },
    ],
  },
  {
    key: '2',
    label: renderTitle(h(ReadOutlined, { style: { color: '#1890FF' } }), 'Design Guide'),
    description: 'How to design a good product?',
    children: [
      {
        key: '2-1',
        icon: h(HeartOutlined),
        description: `Know the well`,
      },
      {
        key: '2-2',
        icon: h(SmileOutlined),
        description: `Set the AI role`,
      },
      {
        key: '2-3',
        icon: h(CommentOutlined),
        description: `Express the feeling`,
      },
    ],
  },
  {
    key: '3',
    label: renderTitle(h(RocketOutlined, { style: { color: '#722ED1' } }), 'Start Creating'),
    description: 'How to start a new project?',
    children: [
      {
        key: '3-1',
        label: 'Fast Start',
        description: `Install Ant Design X`,
      },
      {
        key: '3-2',
        label: 'Online Playground',
        description: `Play on the web without installing`,
      },
    ],
  },
];
</script>

<style scoped>
.prompts-demo {
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

.result {
  padding: 12px;
  background: #f6ffed;
  border: 1px solid #b7eb8f;
  border-radius: 6px;
  margin-top: 16px;
}
</style>