<template>
    <div v-if="Object.keys(rate).length!==0">
        <div>
            <div>用户评价</div>
            <div>更多</div>
        </div>
        <div>
            <div><img :src="rate.list[0].user.avatar" alt="">{{rate.list[0].user.uname}}</div>
            <div>{{rate.list[0].content}}</div>
            <div>{{rate.list[0].style}}</div>
            
        </div>
    </div>
</template>
<script>
export default {
    props:{
        rate:{
            type:Object,
            default(){
                return {}
            }
        }
    }
}
</script>