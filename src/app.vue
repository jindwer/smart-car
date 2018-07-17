<template>
    <div>
        <router-view :style="{'min-height': containerHeight}"></router-view>
        <footer style="text-align: center;font-size: 14px;height: 30px;line-height: 30px;color: #bbb;">智慧钣喷云系统 2.1.1</footer>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                containerHeight: '0px'
            };
        },
        mounted() {
            this.containerHeight = (window.innerHeight || document.body.clientHeight) - 30 + 'px';
        }
    };
</script>