<template>
    <div class="container">
        <div v-for="item in assistList" :key="item.title" class="singleWrap">
            <single-assist :middle-text="item.middleText" :title="item.title" :bg="item.bg" :icon="item.icon"/>
        </div>
    </div>
</template>

<script>
import SingleAssist from "./SingleAssist.vue";
export default {
    data(){
        return {
            // 每个辅助功能的背景颜色可以在这里调试
            assistList:[
                {
                    title:"查课表",
                    middleText:"课",
                    bg:"green"
                },
                {
                    title:"查分数",
                    middleText:"分",
                    bg:"yellow"
                },
                {
                    title:"四六级",
                    middleText:"CET",
                    bg:"pink"
                },
                {
                    title:"找兼职",
                    middleText:"兼",
                    bg:"blue"
                },
                {
                    title:"找实习",
                    middleText:"实",
                    bg:"blueviolet"
                },
                {
                    icon:"el-icon-more",
                    title:"其他",
                }
            ]
        }
    },
    components:{
        SingleAssist
    }
}
</script>

<style>

</style>