<style lang="less" scoped>
    h2{
        color: rgba(0,0,0,.8);
        padding: 0 30px;
        margin-top: 20px;
    }
    .company-list{
        list-style: none;
        padding: 10px 30px;
        li{
            display: flex;
            align-items: center;
            padding: 10px 20px;
            margin-bottom: 5px;
            background-color: #ddd;
            border: 1px solid rgba(0,0,0,0.1);
            border-radius: 5px;
            cursor: pointer;
            &:hover{
                background-color: #aaa;
            }
            img{
                border: 2px solid #ddd;
                border-radius: 5px;
            }
            .company-box{
                flex: 1;
                padding-left: 30px;
                h2{
                    font-size: 18px;
                    height: 30px;
                    color: rgba(0,153,229,.9);
                }
                .company-data{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    height: 60px;
                    margin-top: 10px;
                    list-style: none;
                    font-size: 14px;
                    text-align: center;
                }
            }
        }
    }
</style>
<template>
    <div class="container">
        <Header />
        <h2>
            <span>集团账户列表</span>
            <Button type="primary" icon="plus-round" style="float: right;" @click="addNewCompany">添加集团</Button>
        </h2>
        <ul class="company-list">
            <li v-for="(item,index) in companyList" @click="linkToCompany(item.id)">
                <img :src="item.companyImg" width="120" height="100" />
                <div class="company-box">
                    <h2>{{item.name}}</h2>
                    <div class="company-data"></div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    import Header from '../../../components/header';
    export default {
        name: 'CompanyList',
        components: {
            Header
        },
        data(){
            return {
                companyList: [
                    {
                        id: 'lx1233435',
                        name: '北京利星行集团',
                        companyImg: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4287045473,1232825432&fm=27&gp=0.jpg'
                    }
                ]
            }
        },
        created() {
            console.log(this.$store.state.userinfo);
        },
        methods: {
            linkToCompany(companyId){
                this.$router.push({
                    path: '/company',
                    query: {
                        companyId
                    }
                });
            },
            addNewCompany(){
                this.$router.push({
                    path: '/addCompany'
                });
            }
        }
    };
</script>