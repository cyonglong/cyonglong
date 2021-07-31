<template>
    <navbar>
        <div slot="left" @click="back"> <img src="~assets/img/common/back.svg" alt=""></div>
    <div slot="center" class="center">
        <div  v-for="(item,index) in title" class="navbar" :class="{active:index===isActive}" @click="itemclick(index)">{{item}}</div>
    </div>
    </navbar>
</template>
<script>
import navbar from 'components/common/navbar/NavBar.vue'
export default {
    data(){
        return{
            title:['产品','参数','评论','推荐'],
            isActive:0
        }
    },
    components:{
        navbar
    },
    methods:{
        itemclick(index){
            this.isActive=index
            this.$emit('itemclick',index)
        },
        back(){
            this.$router.back()
        }
    }
}
</script>
<style scoped>
.center{
    display: flex;
}
.navbar{
    flex-wrap: nowrap;
    flex: 1;
}
.active{
    color: red;
}
img{
    padding-top: 11px
}
</style>
