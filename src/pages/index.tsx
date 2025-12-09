import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

type QuickLink = {
  title: string;
  description: string;
  to: string;
};

const quickLinks: QuickLink[] = [
  {
    title: '写一篇日记',
    description: '按照模板记录今日概览、进展与反思。',
    to: '/blog',
  },
  {
    title: '查看写作约定',
    description: '统一 frontmatter 与章节格式，保持可读性。',
    to: '/docs/writing-guide',
  },
  {
    title: '工具与自动化',
    description: '搜索、脚本与常用命令入口。',
    to: '/docs/automation',
  },
];

function HomepageHeader(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.hero}>
      <div className={clsx('container', styles.heroGrid)}>
        <div className={styles.heroCopy}>
          <span className={styles.badge}>日记与知识库</span>
          <h1 className={styles.title}>{siteConfig.title}</h1>
          <p className={styles.lead}>
            快速记录每天的进展、复盘思考，沉淀为可检索的知识资产。
          </p>
          <div className={styles.heroActions}>
            <Link className="button button--primary button--lg" to="/blog">
              开始写作
            </Link>
            <Link className="button button--secondary button--lg" to="/docs/intro">
              查看指南
            </Link>
          </div>
          <ul className={styles.heroList}>
            <li>本地全文搜索，无需额外服务</li>
            <li>Markdown/MDX 皆可，支持代码片段与组件</li>
            <li>脚本快速生成日记模板，保持格式一致</li>
          </ul>
        </div>
        <div className={styles.heroCard}>
          <div className={styles.cardHeader}>
            <span className={styles.cardBadge}>今日提示</span>
            <span className={styles.cardDate}>保持轻量输出</span>
          </div>
          <div className={styles.cardBody}>
            <p className={styles.cardTitle}>记录要点</p>
            <ul className={styles.cardList}>
              <li>先写今日概览，再补充细节</li>
              <li>记录 1 条反思 + 1 条明日待办</li>
              <li>代码/链接集中放在「学习」章节</li>
            </ul>
            <Link className={styles.cardAction} to="/docs/writing-guide">
              查看写作约定 →
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function QuickLinks(): ReactNode {
  return (
    <section className={styles.quickSection}>
      <div className="container">
        <div className={styles.quickHeader}>
          <div>
            <p className={styles.sectionLabel}>快速入口</p>
            <h2 className={styles.sectionTitle}>日常使用最常点这里</h2>
          </div>
          <p className={styles.sectionDesc}>
            统一入口减少跳转成本，方便直接开始记录或查阅约定。
          </p>
        </div>
        <div className={styles.quickGrid}>
          {quickLinks.map((item) => (
            <Link key={item.title} className={styles.quickCard} to={item.to}>
              <div>
                <p className={styles.quickTitle}>{item.title}</p>
                <p className={styles.quickDesc}>{item.description}</p>
              </div>
              <span className={styles.quickAction}>打开 →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout title="首页" description="日记与知识沉淀站点">
      <HomepageHeader />
      <main>
        <QuickLinks />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
