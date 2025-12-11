#!/usr/bin/env node
// 简化版日记生成脚本，文件名直接使用时间戳
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
const buildTimestamp = (date) => {
  const y = date.getFullYear();
  const m = pad(date.getMonth() + 1);
  const d = pad(date.getDate());
  const h = pad(date.getHours());
  const min = pad(date.getMinutes());
  const s = pad(date.getSeconds());
  return {date: `${y}-${m}-${d}`, fileBase: `${y}-${m}-${d}-${h}-${min}-${s}`};
};

async function main() {
  console.log('📝 新建日记（精简版）\n');

  const now = new Date();
  const {date, fileBase} = buildTimestamp(now);

  const titleInput = await ask(`标题 [默认 ${date}]：`);
  const title = titleInput || date;

  let fileName = `${fileBase}.md`;

  const targetDir = path.join(process.cwd(), 'blog');
  fs.mkdirSync(targetDir, {recursive: true});

  let counter = 1;
  while (fs.existsSync(path.join(targetDir, fileName))) {
    fileName = `${fileBase}-${counter}.md`;
    counter += 1;
  }

  const content = `---\ntitle: ${title}\ndate: ${date}\ntags: []\nsummary: 待补充摘要\nmood: \n---\n\n正文待补充\n`;

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
