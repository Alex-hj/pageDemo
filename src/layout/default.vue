<template>
    <div class="page">
        <div class="contentArea">
            <router-view></router-view>
        </div>
        <div class="tab-nav">
            <div>
                <router-link :to="{name:'msg'}">消息</router-link>
            </div>
            <div>
                <router-link :to="{name:'index'}">主页</router-link>
            </div>
            <div>
                <router-link :to="{name:'personal'}">个人中心</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "../assets/css/default.scss";
</style>