<template>
    <div class="recommend">
        <recommend-list v-for="item in typeList" :key="item" :type="item"/>
    </div>
</template>

<script>
import RecommendList from "./RecommendList.vue";
export default {
    data(){
        return {
            typeList:["精彩好文","精品课程"]
        }
    },
    components:{
        RecommendList
    }
}
</script>

<style lang="scss">
@import "../../assets/css/index/recommend.scss";
</style>