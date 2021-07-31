<template>
  <div v-if="Object.keys(detailInfo).length!==0">
    <div
      class="detailImage"
      v-for="(item, index) in detailInfo.detailImage[0].list"
      :key="index"
    >
      <img :src="item" alt="" @load="detailImage"/>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count:0,
      detailImagelength:0
    };
  },
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  created() {},
  methods:{
      detailImage(){
        if(++this.count===this.detailImagelength){
            this.$emit('detailImage')
        }
        
        //   console.log('img')
      }
  },
  watch:{
    detailInfo(){
      this.detailImagelength = this.detailInfo.detailImage[0].list.length
    }
  }
};
</script>
<style scoped>
.detailImage {
  width: 100%;
}
img {
  width: 100%;
}
</style>