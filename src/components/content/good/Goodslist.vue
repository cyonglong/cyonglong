<template>
    <div class="Goodslist">
        <goods-list-item v-for="(item,id) in goods" :item='item' :key='id'/>
    </div>
</template>
<script>
import GoodsListItem from './Goodslistitem.vue'
export default {
    props:{
            goods:{
                type:Array,
                default(){
                    return[]
                }
            
            }
        },
    components:{
        GoodsListItem
    }
}
</script>
<style>
.Goodslist{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
</style>