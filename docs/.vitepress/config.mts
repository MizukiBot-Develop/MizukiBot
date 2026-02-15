import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Mizuki Bot 帮助文档",
  description: "专为 PJSK 与 舞萌 DX 玩家打造的bot助手",
  lang: 'zh-CN',
  
  head: [
    ['link', { rel: 'icon', href: '/Picture/logo.gif' }]
  ],

  themeConfig: {
    logo: '/Picture/logo.gif',
    siteTitle: 'Mizuki Bot 帮助文档',

    // 顶部导航栏
    nav: [
      { text: '首页', link: '/' },
      // ❌ 已删除 "快速开始"
      { text: '问题反馈', link: '/feedback' }, // ✅ 新增反馈
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

    // 侧边栏
    sidebar: {
      '/': [
        {
          text: '入门指南',
          items: [
            // ❌ 已删除 "如何使用"
            { text: '🔗 落雪绑定', link: '/bind' },
            { text: '📝 问题反馈', link: '/feedback' } // ✅ 新增反馈
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
          text: '关于与规范',
          items: [
            { text: '👥 贡献者与鸣谢', link: '/contribution' },
            { text: '📋 群规与公告', link: '/rules' },
            { text: '💡 提问的智慧', link: '/asking' },
            { text: '⚖️ 免责声明', link: '/disclaimer' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/HX-Wrdzgzs/MizukiBot' }
    ],

    footer: {
      message: 'Created with ♿ by HX-Wrdzgzs',
      copyright: 'Powered by Akaboshi Lab'
    },
    
    search: {
      provider: 'local'
    }
  }
})
