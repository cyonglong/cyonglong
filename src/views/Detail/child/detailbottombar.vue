<template>
    <div class="bottombar">
        
        <div class="baritem left">
            <i class="icon service"></i>
            <span>客服</span>
        </div>
         <div class="baritem left">
            <i class="icon shop"></i>
            <span>店铺</span>
        </div> 
        <div class="baritem left">
            <i class="icon select"></i>
            <span>收藏</span>
        </div>
        <div class="baritem center" @click="itemclick">加入购物车</div>
        <div class="baritem right">购买</div>
    </div>
</template>
<script>
export default {
    methods:{
        itemclick(){
            this.$emit('bottombaraddshop')
        }
    }
}
</script>
<style scoped>
.bottombar{
    display: flex;
    position: fixed;
    z-index: 9;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    
}
 .left{
    background-color:white;
}
 .center{
    background-color:yellow;
}
 .right{
    background-color:pink;
    color:white;
}
.icon{
    margin: 0 26px;
    display: block;
    width: 22px;
    height: 22px;
    background: url("~assets/img/detail/detail_bottom.png")0 0/100%;}
.service{
    background-position-y:-54px ;
}
.shop{
    background-position-y: -98px;
}
.baritem{
    flex: 1;
}

</style>