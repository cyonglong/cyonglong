<template>
  <div class="hello">
    <navbar />
    <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="itemClick"
        class="tab-control-show"
        v-show="isShowcontorl"
        ref="tabcontrol1"
        
      />
    <scroll class="bscroll" 
    @scroll="contentScroll"
    @pullingUpHandler='pullingUpHandler'
    ref='bscroll'>
      <swiper :banners="banners" 
       @showcontorltop='showcontorltop'>
       </swiper>
      <recommends :recommend="recommend" />
      <recommend-bg />
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="itemClick"
        class="tab-control"
        ref="tabcontrol2"
      />
      <goods-list :goods="showgoods" />
     

    </scroll> 
    <back-top @click.native="backClick"  v-show="isShowBackTop"/>
  </div>
</template>

<script>

import navbar from "components/content/navbar/navbar.vue";
import scroll from "components/common/scrollmy/scroll.vue";
import tabControl from "components/content/tabControl/TabControl.vue";
import GoodsList from "components/content/good/Goodslist.vue";
import BackTop from "components/content/backTop/BackTop.vue";


import swiper from "./homechild/swiper.vue";
import recommends from "views/home/homechild/recommend.vue";
import recommendBg from "./homechild/recommend_bg.vue";

import { getHomeMultidata, getHomeGoods } from "network/home.js";
export default {
  name: "home",
  data() {
    return {
      banners: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currenTypedefault: ["pop", "new", "sell"],
      // contorbar事件的值
      currenType: "pop",
      isShowBackTop:false,
      //  contorbar的高度
      contorltophigh:0,
      // 显示contorl bartop
      isShowcontorl:false
    };
  },
  created() {
    getHomeMultidata().then((res) => {
      this.banners = res.data.banner.list;
      this.recommend = res.data.recommend.list;
      // console.log(this.banners)
    });
    
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
    
  },
  mounted(){
    // 图片加载事件
    const refresh =this.debounce(this.$refs.bscroll.refresh,200)
    this.$bus.$on('imageLoad',()=>{
      // 重构bscroll的高度
      // this.$refs.bscroll.refresh()
      // 设置抖动
      // this.debounce(this.$refs.bscroll.refresh(),2000)
      refresh()
      console.log('img')
      
    })
    
  },
  components: {
    navbar,
    swiper,
    recommends,
    recommendBg,
    tabControl,
    GoodsList,
    scroll,
    BackTop,
  },
  computed: {
    showgoods() {
      return this.goods[this.currenType].list;
    },
     // bs对象
    bscroll(){
      return this.$refs.bscroll.bs
    }
  },
  methods: {
    // 事件绑定 
    // controlbar的事件点击监听
        itemClick(index) {
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
      this.currenType = index == 0 ? "pop" : index == 1 ? "new" : "sell";
      // console.log(index)
      // 两个tabcontrol同步
        this.$refs.tabcontrol1.currentIndex=index;
        this.$refs.tabcontrol1.currentIndex=index;
      
        

    },



      //  contorbar的高度
  
    showcontorltop(){
      this.contorltophigh=this.$refs.tabcontrol2.$el.offsetTop
      console.log(this.contorltophigh)
      },





    // axios请求数据 的方法
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
          // axios的引用数据请求的方法
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    },





    // 返回坐标按钮
    backClick(){
      this.bscroll.scrollTo(0,-600)
    },
    // 滑动返回坐标
    contentScroll(position){
      // 显示返回图标
      this.isShowBackTop= (-position.y)>600
      // 显示contorl top
      this.isShowcontorl=(-position.y)>this.contorltophigh
    },
      // 下拉加载更多
    pullingUpHandler(){
      // 数据请求（controlbar事件的值）
      this.getHomeGoods(this.currenType)
    },






    // 抖动事件
   debounce(fun,delay){
      let timer=null
      return function(...args){
        if (timer) clearTimeout(timer)
        timer= setTimeout(()=>{fun.apply(this,args)
      // console.log('refresh')
        },delay)
      }
   }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  /* height: 100vh;
    position: relative; */
}
.tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
}
.bscroll {
  /* width: 100%; */
  /* height: 100%; */
  /* background-color: red; */
  /* overflow: hidden; */
  /* overflow: hidden;
  position: relative; 
  /* /* position: absolute;  */
}
.tab-control-show{
  position: relative;
  top: 0;
  z-index: 9;
}
</style>
