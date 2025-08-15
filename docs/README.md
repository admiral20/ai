# 文档开发指南

## 启动文档

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run docs:dev

# 构建文档
npm run docs:build

# 预览构建结果
npm run docs:preview
```

## 文档结构

```
docs/
├── .vitepress/
│   ├── config.ts          # VitePress 配置
│   └── theme/
│       ├── index.ts       # 主题配置
│       └── style.css      # 自定义样式
├── components/            # 组件文档
│   ├── Bubble.md
│   ├── Prompts.md
│   └── ...
└── index.md              # 首页
```

## 添加新组件文档

1. 在 `docs/components/` 目录下创建新的 `.md` 文件
2. 在 `docs/.vitepress/config.ts` 中添加侧边栏配置
3. 按照现有格式编写文档，包含示例和代码

## 注意事项

- 每个示例后面都会显示对应的源代码
- 使用 Vue 3 Composition API 语法
- 确保导入正确的组件和图标
- 代码示例要完整可运行