<template>
    <nav-bar class="navbar">
        <div slot="center">购物车 </div>
    </nav-bar>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar.vue'
export default {
    components:{
        NavBar
    }
}
</script>
<style>
.navbar{
    background-color: pink;
    color:white;
    position:sticky ;
    top: 0px;
    z-index: 1;
}
</style>
