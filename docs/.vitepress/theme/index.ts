import DefaultTheme from 'vitepress/theme'
import { h, onMounted, ref } from 'vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  
  Layout() {
    // 1. 定义响应式变量
    const currentAvatar = ref('/Picture/avatar.jpg') // 默认静图
    const currentQuote = ref('') // 语录初始为空

    onMounted(() => {
      // --- 🎲 随机头像 ---
      const images = [
        '/Picture/avatar.jpg',
        '/Picture/logo.gif'
      ];
      currentAvatar.value = images[Math.floor(Math.random() * images.length)];

      // --- 💬 随机语录 ---
      const quotes = [
        "「 ボクは……ボクでいたいだけ 」<br>我只是……想做我自己罢了",
        "「 秘密って、なんだかワクワクしない？ 」<br>所谓秘密，不觉得令人有些兴奋吗？",
        "「 25時、ナイトコードで。 」<br>25时，在 Nightcord 见。",
        "「 かわいいは正義！だよね？ 」<br>可爱即正义！对吧？",
        "「 ボクのこと、知りたい？ 」<br>想知道，关于我的事吗？",
        "「 逃げ続けるのも、悪くないかもね 」<br>一直逃避下去，或许也不坏呢",
        "「 君も、こっち側に来る？ 」<br>你也要，来这边吗？"
      ];
      currentQuote.value = quotes[Math.floor(Math.random() * quotes.length)];
    })

    // 2. 渲染布局 (同时渲染图片 + 语录)
    return h(DefaultTheme.Layout, null, {
      'home-hero-image': () => {
        return h('div', { class: 'hero-wrapper' }, [
          // 图片
          h('img', { 
            src: currentAvatar.value, 
            class: 'random-hero-avatar', 
            alt: 'Mizuki Bot Hero'
          }),
          // 👇 直接在这里渲染语录，不依赖原来的 DOM 👇
          h('div', {
            class: 'my-custom-quote',
            innerHTML: currentQuote.value
          })
        ])
      }
    })
  }
}