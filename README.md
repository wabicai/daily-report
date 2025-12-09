# Daily Report

基于 Docusaurus 的日记与知识沉淀站点，支持 Markdown/MDX、博客时间线、本地全文搜索与简单自动化脚本。

## 快速开始

```bash
npm install
npm start           # 本地预览 http://localhost:3000
npm run build       # 产物输出到 build/
npm run serve       # 构建后本地验证
```

- 如果开启了 GitHub Pages 所需的 `baseUrl=/daily-report/`，本地访问需带前缀：`http://localhost:3000/daily-report/`。
- 若想本地用根路径预览，可运行：`BASE_URL=/ npm start`。

## 写作与目录

- 日记：`blog/`，按 frontmatter 的 `date` 排序。可运行 `npm run new:entry` 按提示交互创建模板。
- 指南：`docs/`，侧边栏由 `sidebars.ts` 定义。
- 静态资源：放在 `static/`，引用路径形如 `/assets/...`。

## 搜索

已启用本地全文搜索插件 `@easyops-cn/docusaurus-search-local`，无需外部服务即可检索 docs 和 blog。

## 部署提示（GitHub Pages）

- 已将 `url` 设置为 `https://caikaisheng.github.io`，`baseUrl` 设置为 `/daily-report/`。
- 直接运行 `npm run deploy`（会推送到 `gh-pages` 分支），默认使用 HTTPS；如需 SSH 可先 `export USE_SSH=true`。
- 手动发布：`npm run build` 后，将 `build/` 上传到任意静态托管即可。

## 常用脚本

- `npm run new:entry`：创建一篇带 frontmatter 的新日记。
- `npm run clear`：清理缓存。
- `npm run typecheck`：检查 TypeScript 类型（配置文件）。
