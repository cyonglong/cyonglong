<template>
<div>
    <div>{{goods.title}}</div>
    <div>
        <span>￥{{goods.lowNowPrice}}</span>
        <span>{{goods.oldPrice}}</span>
        <span v-if="goods.discountDesc">{{goods.discountDesc}}</span>
    </div>
    <div>
        <span v-for='item in goods.columns'>{{item}}</span>
    </div>
</div>
</template>
<script>
export default {
    props:{
        goods:{
            type:Object,
            default(){
                return {}
            }
        }
    }
}
</script>