---
id: writing-guide
title: 写作约定
sidebar_label: 写作约定
---

## Frontmatter 规范

建议每篇日记或文章在头部使用如下字段：

```mdx
---
title: 2025-01-01 今日记录
date: 2025-01-01
tags: [daily, 工作]
summary: 用一句话概括当天的主题或收获
mood: calm
---
```

- `title`：标题，默认可用日期 + 主题。
- `date`：ISO 日期字符串，博客列表按此排序。
- `tags`：标签，用于归类检索。
- `summary`：列表页摘要，方便快速浏览。
- `mood`：心情或状态，可选。

## 内容结构建议

- `# 今日概览`：当天目标、产出、重要事件。
- `## 进展`：完成的任务与要点，可用 bullet。
- `## 反思`：问题、复盘、下次优化点。
- `## 学习`：今天学到的知识、链接或代码片段。
- `## 待办`：明天/下次要跟进的事项。

## 嵌入代码/笔记

- 支持标准 Markdown 代码块；需要交互时可以使用 MDX 引入 React 组件（存放于 `src/components`）。
- 图片、附件放在 `static/assets` 或 `public`，以 `/assets/...` 方式引用。

## 发布与预览

- 本地预览：`npm start`。
- 构建静态站点：`npm run build`，产物在 `build/`。
- 静态导出（如需 GitHub Pages）：可用 `npm run serve` 先行验证，后续可加 CI 部署。
