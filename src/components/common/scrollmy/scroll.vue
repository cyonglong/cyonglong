<template>
<div class="top">
  <div class="wap" ref="wrapper">
    <div>
        <div class="topbar">
      <div v-show="beforePullDown">
        <span>Pull Down and refresh</span>
      </div>
      <div v-show="!beforePullDown">
        <div v-show="isPullingDown">
          <span>Loading...</span>
        </div>
        <div v-show="!isPullingDown">
          <span>Refresh success</span>
        </div>
      </div>
        </div>
      <slot> </slot>
    </div>
  </div>
 </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      bs: null,
     beforePullDown:true,
      isPullingDown:false,
    };
  },
  mounted() {
    //
    // setTimeout(()=>{ },1000)
    this.initBscroll()
  },
  methods: {
    initBscroll() {
      this.bs = new BScroll(this.$refs.wrapper, {
        probeType: 0,
        // div里面监听必须加click
        click: true,
        // pullUpLoad: true,
        pullDownRefresh: {
          threshold: 45,
          stop: 40,
        },
        pullUpLoad: true
      });
      // 下拉加载
       this.bs.on("pullingDown", () => {
      console.log("上拉加载");
    //  加载
      this.beforePullDown=false,
      this.isPullingDown=true,
    //   网络请求 成功
      setTimeout(()=>{
      this.isPullingDown=false
    //   钩子 再次调用pullingdowm
        setTimeout(() => {
        this.bs.finishPullDown();
         this.beforePullDown=true
          
         
        }, 1000);
      },2000)
      
    });

      // 上拉加载
      this.pullup()
      // 2.监听滚动的位置
     this.scrollon()
        
    },
     scrollon(){
         this.bs.on('scroll', (position) => {
        // console.log(position);
        this.$emit('scroll', position)
      })},
      pullup(){
        this.bs.on('pullingUp', this.pullingUpHandler)
      },
     pullingUpHandler(){
       console.log('下拉加载')
      //  子传事件到父
       this.$emit('pullingUpHandler')
         this.bs.finishPullUp()
        // this.bs.refresh()
        
     },
    refresh(){
      // this.bs 以免父组件中created后，子组件mounted还未挂载，
      // 防止bs中refresh函数underfunded
      this.bs && this.bs.refresh()
      console.log('refresh')
    }
  },
};
</script>
<style>
.top{
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
.wap{
     margin-top: 40px;

  /* position: relative;  */
  /* background-color: red; */
  /* overflow: hidden; */
     height: 100%;
  /* position: relative; */
  position: absolute;
  width: 100%;
  }
  
.topbar{
    
  position: absolute;
      top: -30px;

}
</style>
