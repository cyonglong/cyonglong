<template>
    <swiper>
    
    <swiper-item  v-for="(item, id) in banners" :key="id">
        <a :href="item.link">
            <img :src="item.image" alt="">
        </a>
    </swiper-item>
    </swiper>
</template>
<script>
import {Swiper, SwiperItem} from 'components/common/swiper/index.js'
export default {
    props:{
        banners:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components:{
        Swiper, SwiperItem
        
    }
}
</script>