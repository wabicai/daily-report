import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: string;
  to: string;
  cta: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: '每日记录',
    description: '用统一的 frontmatter 和章节拆解，快速沉淀每日进展与反思。',
    to: '/blog',
    cta: '打开日记',
  },
  {
    title: '知识沉淀',
    description: '长期指南与经验整理放在 docs，侧边栏自动生成，方便浏览。',
    to: '/docs/structure',
    cta: '查看结构',
  },
  {
    title: '自动化工具',
    description: '本地搜索、脚本化建文档、构建/预览命令都集中在一处。',
    to: '/docs/automation',
    cta: '了解工具',
  },
];

function FeatureCard({title, description, to, cta}: FeatureItem): ReactNode {
  return (
    <Link className={styles.card} to={to}>
      <div>
        <Heading as="h3" className={styles.cardTitle}>
          {title}
        </Heading>
        <p className={styles.cardDesc}>{description}</p>
      </div>
      <span className={styles.cardCta}>{cta} →</span>
    </Link>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <div>
            <p className={styles.sectionLabel}>WORKFLOW</p>
            <Heading as="h2" className={styles.sectionTitle}>
              写、想、查，一处搞定
            </Heading>
          </div>
          <p className={styles.sectionDesc}>
            按照「日记 + 指南 + 自动化」的轻量三段式，保持输出稳定且易检索。
          </p>
        </div>
        <div className={styles.grid}>
          {FeatureList.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
