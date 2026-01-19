import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // 劫持首页图片区域，同时渲染【头像】和【语录】
      'home-hero-image': () => {
        
        // 1. 随机头像逻辑
        const images = [
          '/Picture/avatar.jpg',
          '/Picture/logo.gif'
        ];
        const randomImg = images[Math.floor(Math.random() * images.length)];

        // 2. 随机语录逻辑
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

        // 3. 组合渲染 (包裹在一个 div 里)
        return h('div', { class: 'hero-wrapper' }, [
          h('img', { 
            src: randomImg, 
            class: 'random-hero-avatar', 
            alt: 'Mizuki Bot Hero'
          }),
          // 这里强制渲染语录
          h('p', { 
            class: 'hero-quote',
            innerHTML: randomQuote // 支持换行符
          })
        ])
      }
    })
  }
}