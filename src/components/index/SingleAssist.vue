<template>
    <div class="single-assit">
        <div class="middle-text" :style="{'background':bg,}">
            <span v-if="middleText">{{middleText}}</span>
            <i else :class="icon"></i>
        </div>
        <span class="title">{{title}}</span>
    </div>
</template>

<script>
export default {
    props:["middleText","title","bg","icon"],
}
</script>

<style lang="scss">
</style>    