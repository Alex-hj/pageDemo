<template>
    <div class="recommend-list">
        <h2>{{type}}</h2>
        <div class="content-list">
            <my-content />
            <my-content />
            <my-content />
        </div>
    </div>
</template>

<script>
import MyContent from "./Content.vue";
export default {
    props:["type",],
    data(){
        return {

        }
    },
    components:{
        MyContent
    }
}
</script>

<style scoped>

</style>