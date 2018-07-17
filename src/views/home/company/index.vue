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
        name: 'CompanyIndex',
        components: {
            Header,
            Navbar
        },
        data(){
            return {
                navList: [
                    {name: '集团概况', link: '/company'},
                    {name: '维修站列表', link: '/company/storeList'},
                    {name: '日钣喷台数', link: '/company/dayBanpeng'},
                    {name: '月钣喷台数', link: '/company/monthBanpeng'},
                    {name: '准时交车率', link: '/company/jiaochelv'},
                    {name: '维修时长统计', link: '/company/countShichang'},
                    {name: '维修类型分析', link: '/company/analyzeLeixing'},
                    {name: '维修部件统计', link: '/company/countBujian'},
                    {name: '工作报告', link: '/company/baogao'},
                    {name: '系统设置', link: '/company/systemConfig'},
                    {name: '添加维修站', link: '/company/addStore'}
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