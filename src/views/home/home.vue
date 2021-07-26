<template>
  <div class="hello">
   <navbar/>
   <swiper :banners='banners'></swiper>
   <recommends :recommend='recommend'/>
   <recommend-bg/>
  </div>
</template>

<script>
import navbar from 'components/content/navbar/navbar.vue'


import swiper from './homechild/swiper.vue'
import recommends from 'views/home/homechild/recommend.vue'
import recommendBg from './homechild/recommend_bg.vue'


import{ getHomeMultidata} from 'network/home.js'
export default {
  name: 'home',
  data () {
    return {
      banners:[],
      recommend:[]
    }
  },
  created(){
    getHomeMultidata().then(res=>{
      this.banners=res.data.banner.list
      this.recommend=res.data.recommend.list
     
    })
  },
  components:{
    navbar,
    swiper,
    recommends,
    recommendBg
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
