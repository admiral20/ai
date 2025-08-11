import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
// import type { RouteRecordRaw } from 'vue-router'

// 路由配置
const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue'),
        meta: {
            title: '首页'
        }
    },
    {
        path: '/bubble',
        name: 'Bubble',
        component: () => import('../components/Bubble.vue'),
        meta: {
            title: '对话气泡'
        }
    },
    {
        path: '/conversations',
        name: 'Conversations',
        component: () => import('../components/Conversations.vue'),
        meta: {
            title: '管理对话'
        }
    },
    {
        path: '/welcome',
        name: 'Welcome',
        component: () => import('../components/Welcome.vue'),
        meta: {
            title: '欢迎'
        }
    },
    {
        path: '/prompts',
        name: 'Prompts',
        component: () => import('../components/Prompts.vue'),
        meta: {
            title: '提示词'
        }
    },
    {
        path: '/sender',
        name: 'Sender',
        component: () => import('../components/Sender.vue'),
        meta: {
            title: '消息发送'
        }
    },
    {
        path: '/attachments',
        name: 'Attachments',
        component: () => import('../components/Attachments.vue'),
        meta: {
            title: '附件管理'
        }
    },
    {
        path: '/thought-chain',
        name: 'ThoughtChain',
        component: () => import('../components/ThoughtChain.vue'),
        meta: {
            title: '思维链'
        }
    },
    {
        path: '/suggestion',
        name: 'Suggestion',
        component: () => import('../components/Suggestion.vue'),
        meta: {
            title: '快捷指令'
        }
    },
    {
        path: '/use-x-agent',
        name: 'UseXAgent',
        component: () => import('../components/UseXAgent.vue'),
        meta: {
            title: '模型调度'
        }
    },
    {
        path: '/use-x-chat',
        name: 'UseXChat',
        component: () => import('../components/UseXChat.vue'),
        meta: {
            title: '数据管理'
        }
    },
    {
        path: '/x-stream',
        name: 'XStream',
        component: () => import('../components/XStream.vue'),
        meta: {
            title: '流'
        }
    },
    {
        path: '/x-request',
        name: 'XRequest',
        component: () => import('../components/XRequest.vue'),
        meta: {
            title: '请求'
        }
    },
    {
        path: '/x-provider',
        name: 'XProvider',
        component: () => import('../components/XProvider.vue'),
        meta: {
            title: '全局化配置'
        }
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue'),
        meta: {
            title: '关于'
        }
    },
    {
        // 404页面
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('../views/NotFound.vue'),
        meta: {
            title: '页面未找到'
        }
    }
]

// 创建路由实例
const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // 路由切换时的滚动行为
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    }
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
    // 设置页面标题
    if (to.meta?.title) {
        document.title = to.meta.title as string
    }
    next()
})

export default router