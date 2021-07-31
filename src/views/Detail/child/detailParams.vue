<template>
    <div  v-if="Object.keys(GoodsParams).length!==0">
        <table>
            <tr v-for="item in GoodsParams.sizes[0] ">
                <td v-for="items in item">{{items}}</td>
            </tr>
        </table>
        <table>
            <tr v-for="item in GoodsParams.infos">
                <td>{{item.key}}</td>
                <td>{{item.value}}</td>
                
            </tr>
        </table>
        <div class="image" v-if="GoodsParams.image.lenght!==0">
            <img :src="GoodsParams.image" alt="">
        </div>
    </div>
</template>
<script>
export default {
    props:{
         GoodsParams:{
             type:Object,
             default(){
                 return {}
             }
         }
    }
}
</script>
<style scoped>
.image{
    width: 100%;
}
img{
    width: 100%;

}
</style>