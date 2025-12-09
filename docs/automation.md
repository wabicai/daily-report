---
id: automation
title: 工具与自动化
sidebar_label: 工具与自动化
---

## 常用命令

- `npm start`：本地开发预览，默认端口 3000。
- 如果看到 404，请访问 `http://localhost:3000/daily-report/`（受 baseUrl 影响）。
- 若想使用根路径预览，可运行 `BASE_URL=/ npm start`。
- `npm run build`：构建生产版静态站点到 `build/`。
- `npm run serve`：构建后本地预览。
- `npm run clear`：清理缓存。
- `npm run new:entry`：交互式创建一篇带 frontmatter 的日记（按提示填写标题、日期、摘要、标签等）。

## 搜索

内置本地全文搜索（基于 `@easyops-cn/docusaurus-search-local`），无需额外服务即可搜索文档与博客内容。

## 快速创建日记

使用脚本 `npm run new:entry -- --title "今日主题" --tags 工作,日记` 自动生成博客文件，默认按日期命名并放到 `blog/`。

脚本参数：

- `--title`：必填，日记标题。
- `--tags`：逗号分隔标签，可选。
- `--summary`：摘要，可选。

生成后可直接编辑 Markdown/MDX 内容，并提交到仓库。
