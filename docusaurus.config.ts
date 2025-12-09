import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)
const siteUrl = process.env.SITE_URL || 'https://caikaisheng.github.io';
const baseUrl = process.env.BASE_URL || '/daily-report/';

const config: Config = {
  title: 'Daily Report',
  tagline: '记录、复盘、积累',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // 站点基础配置（GitHub Pages 默认： https://<user>.github.io/<repo>/）
  url: siteUrl,
  baseUrl,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'caikaisheng', // 通常是你的 GitHub 用户名
  projectName: 'daily-report', // 通常是仓库名

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
          editUrl: 'https://github.com/caikaisheng/daily-report/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          blogTitle: '日记',
          blogDescription: '每日记录与复盘',
          editUrl: 'https://github.com/caikaisheng/daily-report/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        indexDocs: true,
        indexBlog: true,
        language: ['en', 'zh'],
        docsRouteBasePath: ['/docs'],
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Daily Report',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'guideSidebar',
          position: 'left',
          label: '指南',
        },
        {to: '/blog', label: '日记', position: 'left'},
        {type: 'search', position: 'right'},
        {
          href: 'https://github.com/caikaisheng/daily-report',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '内容',
          items: [
            {
              label: '指南',
              to: '/docs/intro',
            },
            {
              label: '日记',
              to: '/blog',
            },
          ],
        },
        {
          title: '联系',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/caikaisheng/daily-report',
            },
          ],
        },
        {
          title: '关于',
          items: [
            {
              label: '使用说明',
              to: '/docs/automation',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Daily Report. 由 Docusaurus 驱动。`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
