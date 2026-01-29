import DefaultTheme from 'vitepress/theme'
import { h, onMounted, ref } from 'vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  
  // 使用 Vue 组件的方式定义 Layout
  Layout() {
    // 1. 定义一个响应式变量，默认显示 avatar.jpg
    const currentAvatar = ref('/Picture/avatar.jpg')

    onMounted(() => {
      // --- 随机头像逻辑 ---
      const images = [
        '/Picture/avatar.jpg',
        '/Picture/logo.gif'
      ];
      // 这里的 .value 修改会立刻触发页面更新
      currentAvatar.value = images[Math.floor(Math.random() * images.length)];

      // --- 随机语录逻辑 ---
      const quotes = [
        "「 ボクは……ボクでいたいだけ 」<br>我只是……想做我自己罢了",
        "「 秘密って、なんだかワクワクしない？ 」<br>所谓秘密，不觉得令人有些兴奋吗？",
        "「 25時、ナイトコードで。 」<br>25时，在 Nightcord 见。",
        "「 かわいいは正義！だよね？ 」<br>可爱即正义！对吧？",
        "「 ボクのこと、知りたい？ 」<br>想知道，关于我的事吗？",
        "「 逃げ続けるのも、悪くないかもね 」<br>一直逃避下去，或许也不坏呢",
        "「 君も、こっち側に来る？ 」<br>你也要，来这边吗？"
      ];
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      
      // 语录替换
      setTimeout(() => {
        const tagline = document.querySelector('.VPHero .tagline');
        if (tagline) {
          tagline.innerHTML = randomQuote;
          tagline.classList.add('hero-quote');
        }
      }, 50);
    })

    // 返回渲染函数
    return h(DefaultTheme.Layout, null, {
      'home-hero-image': () => {
        return h('div', { class: 'hero-wrapper' }, [
          h('img', { 
            // 这里的 src 绑定了上面的变量，变量一变，图片立马变
            src: currentAvatar.value, 
            class: 'random-hero-avatar', 
            alt: 'Mizuki Bot Hero'
          })
        ])
      }
    })
  }
}