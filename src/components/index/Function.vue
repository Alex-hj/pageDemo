<template>
    <div class="function">
        <el-carousel height="200px" class="swiper">
            <el-carousel-item v-for="item in 4" :key="item">
            <h3>{{ item }}</h3>
            </el-carousel-item>
        </el-carousel>
        <div class="assist-function">
            <assist-function/>
        </div>
    </div>
</template>

<script>
import AssistFunction from "../index/AssistFunction.vue";
export default {
    data:function(){
        return {
            input:""
        }
    },
    components:{
        AssistFunction
    }
}
</script>

<style lang="scss">
@import "../../assets/css/index/AssistFunction.scss";
  
</style>    