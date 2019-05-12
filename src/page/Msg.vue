<template>
    <div class="msg">
       <div class="search">
            <el-input
                placeholder="请输入内容"
                v-model="input"
                clearable>
            </el-input>
            <a>
                <i class="el-icon-plus"></i>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            input:""
        }
    }
}
</script>

<style lang="scss">
.msg{
    box-sizing: border-box;
    width:100%;
    padding:15px;
    .el-input{
        width:90%;
        margin-right:10px;
        display:inline-block;
        input{
            height:24px;
        }
    }
}
</style>