<template>
    <div class="Goodslistitem">
        <img :src="item.show.img" alt="" @load="imageLoad" @click="itemclick">
        <div class="title">
            <p>{{item.title}}</p>
            <span class="price">￥{{item.price}}</span>
            <span class="collect">{{item.cfav}}</span>

        </div>
    </div>
</template>
<script>
export default {
    props:{
            item:{
                type:Object,
                default(){
                    return{}
                }
            
            }
        },
    components:{
       
    },
    methods:{
        imageLoad(){
            this.$bus.$emit('imageLoad')
        },
        itemclick(){
            // console.log(this.item)
            this.$router.push('/detail/'+this.item.iid)
        }
    }

}
</script>
<style>
.Goodslistitem {
    width:47%;
     
     position: relative;
     text-align: center;
     

}
.Goodslistitem img{
    width: 100%;
    border-radius: 10px;
   
}
.Goodslistitem .title{
    font-size: 14px;
    padding: 4px;
    
    
}
.title p{ 
     overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
   
}
.price{
  margin-right: 20px;
  color: pink;
}
.collect{
    position: relative;
}
.title .collect::before{
  content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>