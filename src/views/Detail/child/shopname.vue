<template>
    <div>
        <div>
            <span><img :src="Shop.logo" alt=""></span>
            <span>{{Shop.name}}</span>
            
        </div>
        <div>
            <div class="left">
                <div>
                    <div>{{Shop.sells | sellscountfilter}}</div>
                    <div>总销量</div>
                </div>
                <div>
                    <div>{{Shop.goods | sellscountfilter}}</div>
                    <div>全部宝贝</div>
                </div>
            </div>
            <div class="right">
               <table>
                   <tr v-for="(item,index) in Shop.score">
                       <td>{{item.name}}</td>
                       <td class="score" :class="{'color':item.isBetter}">{{item.score}} </td>
                       <td class="isBetter" :class="{'color':item.isBetter}">{{item.isBetter?"高":"低"}}</td>
                   </tr>
               </table>
            </div>
        </div>    
        
    </div>
</template>
<script>
export default {
    data(){
        return{
             
        }
    },
    props:{
        Shop:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    filters:{
        sellscountfilter(value){
            if(value<10000)return value
            return (value/10000).toFixed(1)+'万'
        }
    }
  
}
</script>
<style scoped>
.left{
    display: flex;
}
.isBetter,.score{
    color: green;
}
.color{
    color: red;
}

</style>