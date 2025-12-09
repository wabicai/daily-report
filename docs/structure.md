---
id: structure
title: 目录结构
sidebar_label: 目录结构
---

当前主要目录说明：

- `docs/`：指南与长期沉淀文档（左侧导航自动生成）。
- `blog/`：每日/文章存档，按日期排序，自动生成 RSS。
- `src/pages/`：Landing Page 与静态页面，可自定义 React 组件。
- `src/components/`：复用组件与样式模块。
- `static/`：静态资源目录，构建时原样拷贝到站点根。
- `scripts/`：自动化脚本（如新建日记模板）。
- `docusaurus.config.ts`：站点配置与插件入口。
- `sidebars.ts`：文档侧边栏定义。

未来如果需要多语言或更多模块，可在 `docusaurus.config.ts` 中扩展配置。
