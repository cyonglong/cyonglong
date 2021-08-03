<template>
  <div>
    <div v-for="(item,index) in $store.state.cartList" class="item">
      <img class="tick" src="~assets/img/cart/tick.svg" alt="" @click="tick(index)" :class="{active:item.chacked}"> 
      <img class="image" :src="item.img" alt="">
      <div class="right">
       
       
        <div>
        <p class="title">{{item.title}}</p> 
        <p class="title desc">{{item.desc}}</p>
        <div class="bottom">
        <div>{{item.price}}</div>
        <div>x{{item.count}}</div>
        </div>
      </div>
      </div>
    </div>
    <bottom :isChecked='isCheckedbottom' @click.native="bottomclick"/>
  </div>
</template>

<script>

import bottom from './child/CartCheckButton.vue'
export default {
  data(){
    return{
      goods:[],
      isActive:false
    }
  },
  components:{
    bottom
  },
  created(){
    this.goods=this.$store.state.cartList
  },
  methods:{
    tick(index){
        
          this.$store.state.cartList[index].chacked=!this.$store.state.cartList[index].chacked
        // console.log(this.$store.state.cartList.chacked)
    },
    bottomclick(){
      for(let item of this.$store.state.cartList ){
       
       item.chacked=!item.chacked
      
       
      }
    }
    
  },
  computed:{
    isCheckedbottom(){
      if(this.$store.state.cartList.length===0){
        return false
      }
      for(let item of this.$store.state.cartList ){
        if(!item.chacked)
        return false
      }
      // return !this.$store.state.cartList.find(item => item.chacked==false)
    }
  }

 
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item{
  height: 140px;
  width: 100%;
  position: relative;
  align-items: center;
  display: flex;
  justify-content: space-around;
  
}
.right{
  /* display: flex; */
  width: 70%;
}
.image{width: 20%;
/* position: absolute; */
/* position: relative; */
/* padding-top: 12px; */

}
.title{
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
 
  /* padding: 20px 0px 0px 95px; */
}
.desc{
  font-size: 10px;
}
.bottom{
  display: flex;
  /* margin: 27px 0 0 95px; */
  justify-content: space-between;
}
.tick{
      background-color: gainsboro;
    border-radius: 50%;
    border: 2px solid;
    height: 24px;
}
.active{
  background-color: red;
}
</style>
