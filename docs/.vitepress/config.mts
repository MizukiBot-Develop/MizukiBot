import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Mizuki Bot",
  description: "专为 PJSK 与 舞萌 DX 玩家打造的贴心助手",
  lang: 'zh-CN',
  
  head: [
    ['link', { rel: 'icon', href: '/Picture/avatar.jpg' }]
  ],

  themeConfig: {
    logo: '/Picture/avatar.jpg',
    siteTitle: 'Mizuki Bot',

    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/usage' },
      { 
        text: '功能大全', 
        items: [
          { text: '🎵 PJSK 相关', link: '/features/pjsk' },
          { text: '🎰 舞萌 DX', link: '/features/maimai' },
          { text: '🎨 表情制作', link: '/features/meme' },
          { text: '🛠️ 通用工具', link: '/features/tools' }
        ]
      },
      { text: '贡献榜', link: '/contribution' }
    ],

    sidebar: {
      '/': [
        {
          text: '🚀 入门指南',
          items: [
            { text: '如何使用', link: '/usage' }
          ]
        },
        {
          text: '📦 功能文档',
          items: [
            { text: '🎵 PJSK 相关功能', link: '/features/pjsk' },
            { text: '🎰 舞萌 DX 专项', link: '/features/maimai' },
            { text: '🎨 表情制作系统', link: '/features/meme' },
            { text: '🛠️ 通用工具与娱乐', link: '/features/tools' }
          ]
        },
        {
          text: '🏆 关于',
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