import { defineConfig } from 'vitepress'

export default defineConfig({
  // 1. 网站基础信息
  title: "Mizuki Bot 帮助文档",
  description: "Mizuki Bot 是一款专为 PJSK (Project Sekai) 和 舞萌 DX (Maimai DX) 玩家打造的 QQ 机器人。提供查分、查榜、表情包制作、3D家园资源查询等功能。",
  lang: 'zh-CN',
  
  // 2. 🔥 开启 Sitemap 自动生成 (SEO 核心)
  sitemap: {
    hostname: 'https://help.mizuki.top'
  },

  // 3. 🔥 SEO 专用标签 (让搜索引擎更容易搜到)
  head: [
    ['link', { rel: 'icon', href: '/Picture/logo.gif' }],
    // 关键词：用户可能会搜的词，都在这里写上
    ['meta', { name: 'keywords', content: 'Mizuki Bot, MizukiBot, PJSK机器人, 舞萌DX查分, Maimai查分, Project Sekai, 世界计划, QQ机器人, 帮助文档, 表情包制作' }],
    ['meta', { name: 'author', content: 'HX-Wrdzgzs' }],
    // 告诉爬虫：请索引本站
    ['meta', { name: 'robots', content: 'index, follow' }],
    // Open Graph (分享到QQ/微信/Discord时显示的预览卡片)
    ['meta', { property: 'og:title', content: 'Mizuki Bot 帮助文档' }],
    ['meta', { property: 'og:description', content: 'PJSK 与 舞萌 DX 玩家的一站式助手' }]
  ],

  themeConfig: {
    logo: '/Picture/logo.gif',
    siteTitle: 'Mizuki Bot 帮助文档',

    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/usage' },
      { 
        text: '功能大全', 
        items: [
          { text: 'PJSK 相关', link: '/features/pjsk' },
          { text: '舞萌 DX', link: '/features/maimai' },
          { text: '表情制作', link: '/features/meme' },
          { text: '通用工具', link: '/features/tools' }
        ]
      },
      { text: '贡献榜', link: '/contribution' }
    ],

    sidebar: {
      '/': [
        {
          text: '入门指南',
          items: [
            { text: '如何使用', link: '/usage' }
          ]
        },
        {
          text: '功能文档',
          items: [
            { text: 'PJSK 相关功能', link: '/features/pjsk' },
            { text: '舞萌 DX 专项', link: '/features/maimai' },
            { text: '表情制作系统', link: '/features/meme' },
            { text: '通用工具与娱乐', link: '/features/tools' }
          ]
        },
        {
          text: '关于',
          items: [
            { text: '贡献者与鸣谢', link: '/contribution' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/HX-Wrdzgzs/MizukiBot' }
    ],

    footer: {
      message: 'Created with 🎀 by HX-Wrdzgzs',
      copyright: 'Powered by HongXingOS6'
    },
    
    search: {
      provider: 'local'
    }
  }
})