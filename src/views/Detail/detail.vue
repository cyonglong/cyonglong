<template>
    <div>
    <navbar/>
    <swiper :itemInfo='itemInfo'/>
    <baseinfo :goods='goods'/>
    <shopdetail :Shop='Shop'/>l
    </div>
</template>
<script>
import navbar from './child/navbar.vue'
import swiper from './child/swiper.vue'
import baseinfo from './child/baseinfo.vue'
import Shopdetail from './child/shopname.vue' 
import {getDetail , Goods ,Shop,GoodsParam} from 'network/detail.js'

export default {
   name:'Detail',
   data(){
       return{
           iid:null,
           
          itemInfo:{},
          goods:{},
          Shop:{}
       }
   },
    methods:{
        
    },
    components:{
        navbar,
         swiper ,
          baseinfo,
          Shopdetail
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
          
        })
     
    },
   
}
</script>