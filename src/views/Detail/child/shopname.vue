<template>
    <div>
        <div>
            <span><img :src="Shop.logo" alt=""></span>
            <span>{{Shop.name}}</span>
            
        </div>
        <div></div>
    </div>
</template>
<script>
export default {
    props:{
        Shop:{
            type:Object,
            default(){
                return {}
            }
        }
    }
}
</script>