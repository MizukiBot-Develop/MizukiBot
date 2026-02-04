import DefaultTheme from 'vitepress/theme'
import { h, onMounted, ref } from 'vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  
  Layout() {
    // 默认给一张图防抖
    const currentAvatar = ref('/Picture/avatar.jpg') 
    const currentQuote = ref('')

    onMounted(() => {
      // 🎲 随机头像逻辑
      const images = [
        '/Picture/avatar.jpg',
        '/Picture/logo.gif'
      ];
      // 随机选一张
      currentAvatar.value = images[Math.floor(Math.random() * images.length)];

      // 💬 随机语录逻辑
      const quotes = [
        "「 ボクは……ボクでいたいだけ 」<br>我只是……想做我自己罢了",
        "「 秘密って、なんだかワクワクしない？ 」<br>所谓秘密，不觉得令人有些兴奋吗？",
        "「 25時、ナイトコードで。 」<br>25时，在 Nightcord 见。",
        "「 かわいいは正義！だよね？ 」<br>可爱即正义！对吧？"
      ];
      currentQuote.value = quotes[Math.floor(Math.random() * quotes.length)];
    })

    return h(DefaultTheme.Layout, null, {
      'home-hero-image': () => {
        return h('div', { class: 'hero-wrapper' }, [
          h('img', { 
            src: currentAvatar.value, 
            class: 'random-hero-avatar', 
            alt: 'Hero'
          }),
          h('div', {
            class: 'my-custom-quote',
            innerHTML: currentQuote.value
          })
        ])
      }
    })
  }
}
