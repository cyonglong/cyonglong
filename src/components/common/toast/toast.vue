<template>
    <div>
        <div v-show="isshow">{{message}}</div>
    </div>
</template>
<script>
export default {
    data(){
        return{ 
            message:'',
            isshow:false
        }
       
    },
    methods:{
        show(msg,dalay=2000){
            this.message=msg
            
            this.isshow=true
            setTimeout(()=>{this.isshow=false},dalay)
        }
    }
}
</script>
<style  scoped>

</style>