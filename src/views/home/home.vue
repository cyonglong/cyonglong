<template>
  <div class="hello">
   <navbar/>
   <swiper :banners='banners'></swiper>
   <recommends :recommend='recommend'/>
   <recommend-bg/>
   <tab-control :titles="['流行', '新款', '精选']" @tabClick="itemClick"/>
   <goods-list :goods="showgoods"/>
   <ul>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     
   </ul>

  </div>
</template>

<script>
import navbar from 'components/content/navbar/navbar.vue'
import tabControl from 'components/content/tabControl/TabControl.vue'
import GoodsList from 'components/content/good/Goodslist.vue'


import swiper from './homechild/swiper.vue'
import recommends from 'views/home/homechild/recommend.vue'
import recommendBg from './homechild/recommend_bg.vue'


import{ getHomeMultidata,getHomeGoods} from 'network/home.js'
export default {
  name: 'home',
  data () {
    return {
      banners:[],
      recommend:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      currenTypedefault:['pop','new','sell'],
      currenType:'pop',
    }
  },
  created(){
    getHomeMultidata().then(res=>{
      this.banners=res.data.banner.list
      this.recommend=res.data.recommend.list
     
    })
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  components:{
    navbar,
    swiper,
    recommends,
    recommendBg,
    tabControl,
    GoodsList
  },
  computed:{
    showgoods(){
      return this.goods[this.currenType].list
    }
  },
  methods:{
    // 事件绑定
    itemClick(index){
      // switch (index) {
      //   case 0:
      //     this.currenType='pop'
      //     break;
      
      //   case 1:
      //    this.currenType='new'
      //     break;
      //   case 2:
      //    this.currenType='sell'
      //     break;
      // }


      // 方法二
      // this.currenType=this.currenTypedefault[index]


      // 方法三
      this.currenType = index == 0?'pop':index==1?'new':'sell'
      // console.log(index)
    },



    // axios请求数据
  getHomeGoods(type){
  const page = this.goods[type].page+1;
  getHomeGoods(type,page).then(res=>{
    this.goods[type].list.push(...res.data.list);
    this.goods[type].page+=1
  })
}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
