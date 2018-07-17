<style lang="less" scoped>
    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: rgba(0,0,0,.7);
        height: 60px;
        padding: 0 30px;
        h1{
            color: rgba(0,153,229,.9);
        }
    }
</style>
<template>
   <header>
      <h1>EBP钣喷互联云管理系统</h1>
      <Dropdown trigger="hover" @on-click="selected">
        <Button type="primary">
            {{$store.state.userinfo.username}}
            <Icon type="arrow-down-b"></Icon>
        </Button>
        <DropdownMenu slot="list">
            <DropdownItem name="logout">退出</DropdownItem>
        </DropdownMenu>
      </Dropdown>
   </header>
</template>
<script>
    export default {
        name: 'Header',
        data(){
            return{
                username: '李涛'
            }
        },
        methods: {
            selected(type){
                if(type === 'logout'){
                    this.logout();
                }
            },
            logout(){
                this.$store.dispatch('removeToken');
                this.$router.push({
                    path: '/'
                });
            }
        }
    };
</script>
