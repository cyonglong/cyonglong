<template>
  <div>
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
    return {};
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
          this.$emit('detailImage')
        //   console.log('img')
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