<style lang="less" scoped>
    .nav_fixed{
        margin-bottom: 40px;
    }
    .fade-enter{
        opacity: 0;
        transform: translateY(50px);
    }
    .fade-enter-active{
        transition: all .3s ease;
    }
    .fade-leave-active{
        transition: all .3s ease;
    }
    .fade-leave-to{
        opacity: 0;
        height: 0;
        overflow: hidden;
        transform: translateY(-100px);
    }
</style>
<template>
    <div class="container">
        <Header class="header" :class="{'nav_fixed':fixNavbar}"/>
        <Navbar :list="navList" :fixed="fixNavbar"/>
        <transition name="fade">
            <router-view></router-view>
        </transition>
    </div>
</template>
<script>
    import Header from '../../../components/header.vue';
    import Navbar from '../../../components/navbar.vue';
    export default {
        name: 'StoreIndex',
        components: {
            Header,
            Navbar
        },
        data(){
            return {
                navList: [
                    {name: '定损单', link: '/storeManage'},
                    {name: '顾问看板', link: '/storeManage/guwen'},
                    {name: '交车看板', link: '/storeManage/jiaoche'},
                    {name: '结算工单', link: '/storeManage/jiesuan'},
                    {name: '调度看板', link: '/storeManage/diaodu'},
                    {name: '技师工作台', link: '/storeManage/jishi'},
                    {name: '进度看板', link: '/storeManage/jindu'},
                    {name: '异常看板', link: '/storeManage/yichang'},
                    {name: '系统设置', link: '/storeManage/systemConfig'},
                    {name: '工作报告', link: '/storeManage/baogao'}
                ],
                fixNavbar: false
            }
        },
        methods: {
            windowScroll(height){
                if(this.timer) clearTimeout(this.timer);
                this.timer = setTimeout(()=>{
                    this.fixNavbar = window.pageYOffset >= height;
                }, 0);
            }
        },
        mounted(){
            // 监听滚动事件动态设置Nav
            const position = document.querySelector('.header').getBoundingClientRect();
            this.windowScroll = this.windowScroll.bind(this, position.height);
            window.addEventListener('scroll', this.windowScroll);
        },
        beforeDestroy(){
            window.removeEventListener('scroll', this.windowScroll);
        }
    };
</script>