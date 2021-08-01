<template>
<div>
    <div class="navbar">
        <navbar @itemclick='itemclick'  ref="navbar"/>
    </div>
    <scroll ref='bscroll' @scroll='scroll' class="bscroll"> 
        <swiper :itemInfo='itemInfo'  />
        <baseinfo :goods='goods'/>
        <shopdetail :Shop='Shop'/>
        <detailImage :detailInfo='detailInfo' @detailImage='detailImage' ref="detailImage"/>
        <goods-params :GoodsParams='GoodsParams' ref="GoodsParams"/>
        <rate :rate='rate' ref="rate"/>
        <goods-item :goods='othergoods' ref="othergoods"/>
    </scroll> 
    <bottombar @bottombaraddshop='bottombaraddshop'/>
    <back-top @click.native="BackTop" v-show="isshow" class="backtop"/>
</div>
</template>
<script>
import navbar from './child/navbar.vue'
import swiper from './child/swiper.vue'
import baseinfo from './child/baseinfo.vue'
import Shopdetail from './child/shopname.vue' 
import detailImage from './child/detailitem.vue'
import  GoodsParams from './child/detailParams.vue'
import rate from './child/rate.vue'
import bottombar from './child/detailbottombar.vue'

import goodsItem from 'components/content/good/Goodslist.vue'
import BackTop from 'components/content/backTop/BackTop.vue'
import scroll from "components/common/scrollmy/scroll.vue";

import {getDetail ,getDetailRecommend, Goods ,Shop,GoodsParam} from 'network/detail.js'
import {itemListenerMixin} from 'common/mixin.js'
export default {
name:'Detail',
data(){
       return{
           iid:null,
           
          itemInfo:{},
          goods:{},
          Shop:{},
          detailInfo:{},
          GoodsParams:{},
          rate:{},
          GoodsParamsHigh:0,
          rateHigh:0,
          othergoodsHigh:0,
          detailImageHigh:0,
          othergoods:[],
          isshow:false
       }
},
   
components:{
        navbar,
         swiper ,
          baseinfo,
          Shopdetail,
          detailImage,
           scroll,
           GoodsParams,
           rate,
           goodsItem,
           BackTop, 
           bottombar
},
created(){
        this.iid=this.$route.params.iid
        getDetail(this.iid).then(res=>{
            const data=res.result
            this.itemInfo=data.itemInfo
            console.log(data)
            // 商品信息
            this.goods=new Goods(data.itemInfo,data.columns,data.services)
            // 商家信息
            this.Shop=new Shop(data.shopInfo)
            // 商品详情图片信息
            this.detailInfo=data.detailInfo
        //    商品详情信息
           this.GoodsParams=new GoodsParam(data.itemParams.info,data.itemParams.rule)
        //   卖家评论
        this.rate=data.rate
        })

        getDetailRecommend().then(res=>{
            const data =res.data
            this.othergoods=data.list
            console.log(res)
        })
        
    }, 
    // mixins和mounted合并 mixins封装mounted
    mixins:[itemListenerMixin],
mounted(){
   
    
      
    
},
destroyed(){
    // console.log('xiaohui')
},
computed:{
   // 滚动页面对象
    bscroll(){
       return this.$refs.bscroll.bs
    },
},
methods:{
    
    // 防抖
        debounce(fun,delay){
            let timer=null
            return function(...args){
                if (timer) clearTimeout(timer)
                setTimeout(()=>{fun.apply(this,args)},delay)
            }
        },
        // 商品图片加载事件
        detailImage(){
        // const refresh = this.debounce(this.$refs.scroll.refresh,200)
        //  refresh()
        this.$refs.bscroll.refresh()
        this.GoodsParamsHigh = this.$refs.GoodsParams.$el.offsetTop
         this.rateHigh=this.$refs.rate.$el.offsetTop 
         this.othergoodsHigh=this.$refs.othergoods.$el.offsetTop 
         this.detailImageHigh=this.$refs.detailImage.$el.offsetTop 
         console.log(this.GoodsParamsHigh)
        },
        // navbar点击事件
        itemclick(index){
           
            if(index==0){
                this.bscroll.scrollTo(0,0)
               
            }else if (index==1) {
               this.bscroll.scrollTo(0,-this.GoodsParamsHigh)
               
            }else if (index==2) {
               this.bscroll.scrollTo(0,-this.rateHigh)
               
            }else if (index==3) {
               this.bscroll.scrollTo(0,-this.othergoodsHigh)
               
            }

   
        },
        // 返回顶部按钮点击事件
        BackTop(){
            this.bscroll.scrollTo(0,0)
        },
        scroll(position){
            this.isshow=-this.detailImageHigh>position.y
            if(-position.y>0&&-position.y<this.GoodsParamsHigh){
                this.$refs.navbar.isActive=0
            }else if(-position.y>this.GoodsParamsHigh&&-position.y<this.rateHigh){
                this.$refs.navbar.isActive=1
            }else if(-position.y>this.rateHigh&&-position.y<this.othergoodsHigh){
                this.$refs.navbar.isActive=2
            }
            else if(-position.y>this.othergoodsHigh){
                this.$refs.navbar.isActive=3
            }
        },
        bottombaraddshop(){
        //   this.$store. 
        }
        
        // 跑马灯加载监听
        // swiperimgload(){
        //    this.GoodsParamsHigh = this.$refs.GoodsParams.$el.offsetTop
        // }


        
},
    
  

   
}
</script>
<style  scoped>
.navbar{
    position: fixed;
    z-index: 9;
    background:white;
    width: 100%;
}
.bscroll{
    z-index: 8;
    background-color: white;
}
.backtop{
    z-index: 9;
}
</style>