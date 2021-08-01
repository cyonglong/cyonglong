<template>
    <swiper class="swiperdetail">
    
    <swiper-item  v-for="(item, id) in itemInfo.topImages" :key="id">
        
            <img :src="item" alt="" >
        
    </swiper-item>
    </swiper>
</template>
<script>
import {Swiper, SwiperItem} from 'components/common/swiper/index.js'

export default {
    data(){
        return{
            isload:false
        }
    },
    props:{
        itemInfo:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    created(){

    },

     components:{
        Swiper, SwiperItem
        
    },
    methods:{
    //    swiperimgload(){
    //        if(!this.isload)
    //        this.$emit('swiperimgload')
    //        this.isload=true
    //    }
    }
}
</script>
<style scoped>
/* .swiper{
     height: 300px;
} */
.swiperdetail{
overflow: hidden;
 height: 300px;
}
img{
    /* overflow: hidden; */
 /* height: 300px; */
}
</style>