<template>
  <div class="hello">
      <h1>档案</h1>
      <ul>
        <li v-for="item in $store.state.cartList">{{item}}</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'profile',
  data () {
    return {
     
    }
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
