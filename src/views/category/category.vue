<template>
  <div class="core-container">
    <div class="scroll-wrapper" ref="scroll">
      <div class="scroll-content">
        <div class="scroll-item" v-for="(item, index) in emojis" :key="index" @click="clickHandler(item)">{{item}}</div>
      </div>
    </div>
  </div>
</template>

<script >
  import BScroll from '@better-scroll/core'

  export default {
    data () {
      return {
        emojis: [
          '😀 😁 😂 🤣 😃',
          '😄 😅 😆 😉 😊',
          '😫 😴 😌 😛 😜',
          '👆🏻 😒 😓 😔 👇🏻',
          '😑 😶 🙄 😏 😣',
          '😞 😟 😤 😢 😭',
          '🤑 😲 🙄 🙁 😖',
          '👍 👎 👊 ✊ 🤛',
          '🙄 ✋ 🤚 🖐 🖖',
          '👍🏼 👎🏼 👊🏼 ✊🏼 🤛🏼',
          '☝🏽 ✋🏽 🤚🏽 🖐🏽 🖖🏽',
          '🌖 🌗 🌘 🌑 🌒',
          '💫 💥 💢 💦 💧',
          '🐠 🐟 🐬 🐳 🐋',
          '😬 😐 😕 😯 😶',
          '😇 😏 😑 😓 😵',
          '🐥 🐣 🐔 🐛 🐤',
          '💪 ✨ 🔔 ✊ ✋',
          '👇 👊 👍 👈 👆',
          '💛 👐 👎 👌 💘',
          '👍🏼 👎🏼 👊🏼 ✊🏼 🤛🏼',
          '☝🏽 ✋🏽 🤚🏽 🖐🏽 🖖🏽',
          '🌖 🌗 🌘 🌑 🌒',
          '💫 💥 💢 💦 💧',
          '🐠 🐟 🐬 🐳 🐋',
          '😬 😐 😕 😯 😶',
          '😇 😏 😑 😓 😵',
          '🐥 🐣 🐔 🐛 🐤',
          '💪 ✨ 🔔 ✊ ✋',
          '👇 👊 👍 👈 👆',
          '💛 👐 👎 👌 💘'
        ]
      }
    },
    mounted() {
      this.init()
    },
    beforeDestroy() {
      this.bs.destroy()
    },
    methods: {
      init() {
        this.bs = new BScroll(this.$refs.scroll, {
          probeType: 3,
          click: true
        })
        this.bs.on('scrollStart', () => {
          console.log('scrollStart-')
        })
        this.bs.on('scroll', ({ y }) => {
          console.log('scrolling-')
        })
        this.bs.on('scrollEnd', (pos) => {
          console.log(pos)
        })
      },
      clickHandler (item) {
        window.alert(item)
      }
    }
  }
</script>
<style  scoped>

.core-container{}
.scroll-wrapper{
  height: 400px;
 
  position: relative;
  overflow: hidden
    }
    
    .scroll-item{height: 50px;
      line-height: 50px;
      font-size :24px;
      font-weight: bold;
      border-bottom :1px solid #eee;
      text-align: center
      }
      
  
        
</style>