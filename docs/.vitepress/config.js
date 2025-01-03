import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'zh-CN',
  title: 'Jinming6',
  description: '大道泛兮，其可左右。',
  appearance: 'force-dark',
  themeConfig: {
    nav: [
      { text: '插件', link: '/plugins/merge-helper' },
      { text: '示例', link: '/example/rotate-banner' },
    ],
    sidebar: {
      '/plugins/': [
        {
          text: '插件',
          items: [
            {
              text: 'merge-helper',
              link: '/plugins/merge-helper',
            },
            {
              text: 'ming-tool',
              link: '/plugins/ming-tool',
            },
          ],
        },
      ],
      '/example/': [
        {
          text: '示例',
          items: [
            {
              text: '旋转木马',
              link: '/example/rotate-banner',
            },
            {
              text: 'Element UI 业务组件',
              link: '/example/element-ui',
            },
            {
              text: 'OCR 应用示例',
              link: '/example/ocr-demo',
            },
            {
              text: 'three.js 示例',
              link: '/example/three-demo',
            },
            {
              text: 'lottie 示例',
              link: '/example/lottie-demo',
            },
            {
              text: 'PixiJs 示例',
              link: '/example/pixi-demo',
            },
            {
              text: 'Card 示例',
              link: '/example/card-demo',
            },
            {
              text: '图片转 webp',
              link: '/example/webp-demo',
            },
            {
              text: '链接时效',
              link: '/example/temp-link',
            },
            {
              text: '懒加载',
              link: '/example/lazy-load',
            },
            {
              text: 'Excel 示例',
              link: '/example/excel-demo',
            },
          ],
        },
      ],
    },
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    lastUpdated: {
      text: '上次更新',
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/Jinming6/Jinming6.github.io',
      },
    ],
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            },
          },
        },
      },
    },
    footer: {
      copyright: 'Copyright © 2023-present Jinming6',
    },
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    outline: {
      label: '在此页',
    },
  },
  lastUpdated: true,
  vite: {
    optimizeDeps: {
      include: ['three'],
    },
  },
  markdown: {
    image: {
      lazyLoading: true,
    },
  },
});
