import {debounce} from './utils.js'
export const itemListenerMixin={
    mounted(){
        const refresh =debounce(this.$refs.bscroll.refresh,200)
        this.$bus.$on('imageLoad',()=>{
      // 重构bscroll的高度
      // this.$refs.bscroll.refresh()
      // 设置抖动
      // this.debounce(this.$refs.bscroll.refresh(),2000)
      refresh()
      console.log('img')
      
    })
    }
}