import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Mizuki Bot 帮助文档",
  description: "专为 PJSK 与 舞萌 DX 玩家打造的 Bot 助手",
  lang: 'zh-CN',
  
  head: [
    // 1. 小图标：强烈建议上传真正的 favicon.ico 到 docs/public/ 目录下
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    // 备用图标：为了兼容部分浏览器
    ['link', { rel: 'icon', href: '/Picture/avatar.jpg' }],

    // 2. SEO 关键词
    ['meta', { name: 'keywords', content: 'Mizuki Bot, PJSK, Project Sekai, 舞萌DX, maimai, 音游Bot, 帮助文档' }],
    ['meta', { name: 'author', content: 'HX-Wrdzgzs' }],

    // ✨✨✨ 3. 新增：大图预览 (Open Graph) ✨✨✨
    // 用于 QQ、Discord 发送链接时显示的大图，以及搜索引擎的卡片展示
    ['meta', { property: 'og:title', content: 'Mizuki Bot 帮助文档' }],
    ['meta', { property: 'og:description', content: '专为 PJSK 与 舞萌 DX 玩家打造的一站式 Bot 助手' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://help.mizuki.top/' }],
    // ⚠️ 下面这个图片地址必须是 https 开头的完整网址！请确保您上传了 banner.jpg
    ['meta', { property: 'og:image', content: 'https://help.mizuki.top/Picture/banner.jpg' }], 
    
    // ✨✨✨ 4. 新增：Twitter 大图卡片 (很多搜索引擎兼容这个格式) ✨✨✨
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Mizuki Bot 帮助文档' }],
    ['meta', { name: 'twitter:description', content: '专为 PJSK 与 舞萌 DX 玩家打造的一站式 Bot 助手' }],
    ['meta', { name: 'twitter:image', content: 'https://help.mizuki.top/Picture/banner.jpg' }]
  ],

  sitemap: {
    hostname: 'https://help.mizuki.top'
  },

  themeConfig: {
    logo: '/Picture/logo.gif',
    siteTitle: 'Mizuki Bot 帮助文档',

    nav: [
      { text: '首页', link: '/' },
      { text: '问题反馈', link: '/feedback' },
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
            { text: '📖 如何使用', link: '/usage' },
            { text: '🔗 落雪绑定', link: '/bind' },
            { text: '📝 问题反馈', link: '/feedback' }
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
            { text: '⚖️ 免责声明', link: '/disclaimer' },
            { text: '❤️ 赞助与支持', link: '/sponsor' }
          ]
        }
      ]
    },

    footer: {
      message: 'Created with ♿ by HX-Wrdzgzs',
      copyright: 'Powered by Akaboshi Lab'
    },
    
    search: {
      provider: 'local'
    }
  }
})
