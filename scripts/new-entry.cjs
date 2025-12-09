#!/usr/bin/env node
// 交互式创建一篇新的日记 Markdown，自动填充 frontmatter
const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const ask = (query) =>
  new Promise((resolve) => {
    rl.question(query, (answer) => resolve(answer.trim()));
  });

const pad = (n) => String(n).padStart(2, '0');
const today = new Date();
const defaultDate = `${today.getFullYear()}-${pad(today.getMonth() + 1)}-${pad(
  today.getDate(),
)}`;

const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9\u4e00-\u9fa5\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');

async function main() {
  console.log('📝 新建日记');
  console.log('按提示填写（回车接受默认值）。\n');

  let title = '';
  while (!title) {
    title = await ask(`标题（必填，例如：${defaultDate} 今日记录）：`);
    if (!title) console.log('标题不能为空，请再试一次。');
  }

  const dateInput = await ask(`日期 [默认 ${defaultDate}]：`);
  const date = dateInput || defaultDate;
  const summary = await ask('摘要（可空）：');
  const tagsInput = await ask('标签（逗号分隔，可空）：');
  const mood = await ask('心情/状态（可空）：');

  const tags = tagsInput
    ? tagsInput
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean)
    : [];

  const slug = slugify(title);
  const fileBase = slug ? `${date}-${slug}` : `${date}-entry`;
  let fileName = `${fileBase}.md`;

  const targetDir = path.join(process.cwd(), 'blog');
  fs.mkdirSync(targetDir, {recursive: true});

  let counter = 1;
  while (fs.existsSync(path.join(targetDir, fileName))) {
    fileName = `${fileBase}-${counter}.md`;
    counter += 1;
  }

  const content = `---\ntitle: ${title}\ndate: ${date}\ntags: [${tags.join(', ')}]\nsummary: ${summary || '待补充摘要'}\nmood: ${mood || ''}\n---\n\n## 今日概览\n- 记录关键收获或事件\n\n## 进展\n- \n\n## 反思\n- \n\n## 学习\n- \n\n## 待办\n- \n`;

  const targetPath = path.join(targetDir, fileName);
  fs.writeFileSync(targetPath, content, 'utf8');
  console.log(`✅ 已创建: ${targetPath}`);
  console.log(`🪧 Markdown 路由: /blog/${fileName.replace(/\\.mdx?$/, '')}`);
  rl.close();
}

main().catch((err) => {
  console.error(err);
  rl.close();
  process.exit(1);
});
