import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Ant Design X Vue 组件文档',
  description: '基于 Ant Design X Vue 的组件库文档',
  
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '组件', link: '/components/' }
    ],

    sidebar: {
      '/components/': [
        {
          text: '组件',
          items: [
            { text: 'Attachments', link: '/components/Attachments' },
            { text: 'Bubble', link: '/components/Bubble' },
            { text: 'Conversations', link: '/components/Conversations' },
            { text: 'Prompts', link: '/components/Prompts' },
            { text: 'Sender', link: '/components/Sender' },
            { text: 'SenderTsx', link: '/components/SenderTsx' },
            { text: 'Suggestion', link: '/components/Suggestion' },
            { text: 'ThoughtChain', link: '/components/ThoughtChain' },
            { text: 'UseXAgent', link: '/components/UseXAgent' },
            { text: 'UseXChat', link: '/components/UseXChat' },
            { text: 'Welcome', link: '/components/Welcome' },
            { text: 'XProvider', link: '/components/XProvider' },
            { text: 'XRequest', link: '/components/XRequest' },
            { text: 'XStream', link: '/components/XStream' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ant-design/ant-design-x' }
    ]
  },

  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.includes('-')
      }
    }
  }
})