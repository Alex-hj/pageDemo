<template>
    <div class="index">
        <div class="search">
            <el-input
                placeholder="请输入内容"
                v-model="input"
                clearable>
            </el-input>
        </div>
        <div class="mainContent">
            <function />
            <recommend />  
        </div>
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
.search{
    padding:5px 15px;
    background:rgb(153,102,51);
    .el-input{
        input{
            height:24px;
        }
    }
}
</style>