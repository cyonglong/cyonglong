<template>
  <div class="item_check">
    <div class="check_box" :class="{ checked: isChecked }" @click="checkbox"></div>
  </div>
</template>
<script>
export default {
  props: {
    isChecked: {type:Boolean,default(){return true}}
    
  },
  data() {
    return {};
  },
  methods:{
    checkbox(){
      this.$emit('check_box')
    }
  }

};
</script>
<style scoped>
.item_check {
  width: 1.2rem;
}
.check_box {
  position: relative;
  top: calc(50% - 0.35rem);
  width: 0.7rem;
  height: 0.7rem;
  
  margin: 0 auto;
  border-radius: 0.35rem;

  border: 0.04rem solid rgba(128, 128, 128, 0.4);
}

.check_box.checked {
  /* width: 1rem;
  height: 1rem; */
      width: 20px;
    height: 20px;
  border-style: none;
  top: calc(50% - 0.6rem);
  background: url("~assets/img/cart/tick.svg") 0 0/90% no-repeat red;
}
</style>
