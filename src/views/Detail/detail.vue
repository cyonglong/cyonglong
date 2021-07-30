<template>
<div>
    <div class="navbar">
        <navbar/>
    </div>
    <scroll ref='scroll'> 
        <swiper :itemInfo='itemInfo'/>
        <baseinfo :goods='goods'/>
        <shopdetail :Shop='Shop'/>
        <detailImage :detailInfo='detailInfo' @detailImage='detailImage'/>
    </scroll> 
</div>
</template>
<script>
import navbar from './child/navbar.vue'
import swiper from './child/swiper.vue'
import baseinfo from './child/baseinfo.vue'
import Shopdetail from './child/shopname.vue' 
import detailImage from './child/detailitem.vue'

import scroll from "components/common/scrollmy/scroll.vue";

import {getDetail , Goods ,Shop,GoodsParam} from 'network/detail.js'

export default {
name:'Detail',
data(){
       return{
           iid:null,
           
          itemInfo:{},
          goods:{},
          Shop:{},
          detailInfo:{}
       }
},
   
components:{
        navbar,
         swiper ,
          baseinfo,
          Shopdetail,
          detailImage,
           scroll 
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
            // 商品详情信息
            this.detailInfo=data.detailInfo
          
        })
     
    }, 
mounted(){
   
       
      
    
},
methods:{
        debounce(fun,delay){
            let timer=null
            return function(...args){
                if (timer) clearTimeout(timer)
                setTimeout(()=>{fun.apply(this,args)},delay)
            }
        },
        
        detailImage(){
        const refresh = this.debounce(this.$refs.scroll.refresh,200)
         refresh()
        //  console.log('img')
        }
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
</style>