<template>
<div class="recommend">
    <div v-for="item in recommend">
        <a :href="item.link">
            <img :src="item.image" alt="">
            <div class="title">{{item.title}}</div>
        </a>
        
    </div>
    </div>
</template>
<script>
export default {
    props:{recommend:{
            type:Array,
            default(){
                return []
            }
        }
        }
}
</script>
<style>
 .recommend{
     display: flex;
    text-align: center;
    font-size: 16px;
     width: 100%;
     border-bottom: 8px solid #eee;
 }
 .recommend img{
     width: 100%;
 }

</style>