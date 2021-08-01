<template>
    <swiper>
    
    <swiper-item  v-for="(item, id) in banners" :key="id">
        <a :href="item.link">
            <img :src="item.image" alt="" @load="showcontorltop">
        </a>
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
        banners:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components:{
        Swiper, SwiperItem
        
    },
    methods:{
        showcontorltop(){
            if(!this.isload)
            {
                this.$emit('showcontorltop')
                // this.$bus.$emit('showcontorltop')
                this.isload=true
                
            }
        }
    }
}
</script>
<style scoped>

</style>