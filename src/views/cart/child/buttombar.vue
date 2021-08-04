<template>
  <div class="bar">
    <slot> </slot>
    <div>合计：{{showprice}}</div>
    <div>数量：{{showcount}}</div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
  components: {
   
  },
  methods: {
   
    },
    computed: {
        showprice(){
            let price=0
            for(let item of this.$store.state.cartList)
            {
                if(item.chacked==true)
                price += item.price*item.count
            }
            return '￥'+price
            // return this.$store.state.cartList.filter(item=>{return item.chacked}).reduce((prevalue,item)=>{return item.price*item.count },0)
        },
        showcount(){
            let count = 0
            for(let item of this.$store.state.cartList){
                if(item.chacked==true){
                    count+=item.count
                }
            }
            return count
        }
    }
};
</script>
<style scoped>
.bar{
    position: fixed;
    bottom: 70px;
    display: flex;
    justify-content: space-between;
    width: 100%;
}

</style>