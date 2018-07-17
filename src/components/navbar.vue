<style lang="less" scoped>
    .nav{
        display: flex;
        width: 100%;
        height: 40px;
        line-height: 40px;
        background-color: rgba(255,153,0,1);
        font-size: 14px;
        color: #fff;
        text-align: center;
        margin-bottom: 15px;
        &.fixed{
            position: fixed;
            z-index: 99;
            top: 0;
            left: 0;
            box-shadow: 0 0 10px rgba(0,0,0,.5);
        }
        .nav-item{
            flex: 1 1 auto;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            cursor: pointer;
            &.active{
                background-color: rgba(238, 143, 2, 1);
            }
            &:not(.active):hover{
                background-color: rgba(193, 118, 6, 1);
            }
        }
    }
</style>
<template>
    <nav class="nav" :class="{'fixed': fixed}">
        <div 
            class="nav-item" 
            v-for="(item,index) in list" 
            :class="{'active':index===currentIndex}"
            @click="changeNav(index, item.link)"
            >
            {{item.name}}
        </div>
    </nav>
</template>
<script>
    export default {
        name: 'Navbar',
        props: ['list', 'fixed'],
        data(){
            return {
                currentIndex: 0 // 当前的导航
            }
        },
        methods: {
            changeNav(index, link){
                this.currentIndex = index;
                this.$router.push({
                    path: link
                });
            }
        },
        created(){
            const currentRoutePath = this.$route.path;
            this.list.some((item,index)=>{
                if(item.link === currentRoutePath){
                    this.currentIndex = index;
                    return true;
                }
            });
        }
    };
</script>