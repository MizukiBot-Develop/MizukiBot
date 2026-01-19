import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Mizuki Bot",
  description: "专为 PJSK 与 舞萌 DX 玩家打造的贴心助手",
  lang: 'zh-CN',
  
  // 即使在深色模式下，也强制使用粉色调
  head: [
    ['link', { rel: 'icon', href: '/Picture/avatar.jpg' }]
  ],

  themeConfig: {
    // 左上角 Logo
    logo: '/Picture/avatar.jpg',
    siteTitle: 'Mizuki Bot',

    // 顶部导航栏
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

    // 侧边栏 (你的大分类在这里实现)
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

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/HX-Wrdzgzs/Mizuki-Bot' }
    ],

    // 页脚
    footer: {
      message: 'Created with 🎀 by HX-Wrdzgzs',
      copyright: 'Powered by HongXingOS6'
    },
    
    // 搜索功能
    search: {
      provider: 'local'
    }
  }
})
