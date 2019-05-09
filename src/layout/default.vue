<template>
    <div>
        <div>
            <router-view></router-view>
        </div>
        <div class="tab-nav">
            <div>
                <router-link :to="{name:'left'}">左边</router-link>
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

<style>

</style>