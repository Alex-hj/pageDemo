<template>
    <div class="index">
        <function />
        <recommend />  
    </div>
</template>

<script>
import Function from "../components/index/Function.vue";
import Recommend from "../components/index/Recommend.vue";
export default {
    components:{
        Function,
        Recommend
    }
}
</script>

<style lang="scss">
@import "../assets/css/index/index.scss";
</style>