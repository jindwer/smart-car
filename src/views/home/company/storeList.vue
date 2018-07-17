<style lang="less" scoped>
    .store-list{
        padding: 0 30px;
    }
    .store-item{
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
        .store-box{
            flex: 1;
            padding-left: 30px;
            h2{
                font-size: 18px;
                height: 30px;
            }
        }
        .store-data{
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
</style>
<template>
    <div class="container">
        <ul class="store-list">
            <li class="store-item" v-for="(item, index) in storeList" @click="linkToStore(item.id)">
                <img :src="item.img" width="120" height="100"/>
                <div class="store-box">
                    <h2>{{item.name}}</h2>
                    <ul class="store-data">
                        <li>
                            <p>在厂台次</p>
                            <h3>{{item.currentCount}}台</h3>
                        </li>
                        <li>
                            <p>今日接车</p>
                            <h3>{{item.currentLeave}}台</h3>
                        </li>
                        <li>
                            <p>今日交车</p>
                            <h3>{{item.currentSend}}台</h3>
                        </li>
                        <li>
                            <p>本月钣喷台次</p>
                            <h3>{{item.monthBanpeng}}台</h3>
                        </li>
                        <li>
                            <p>上月钣喷台次</p>
                            <h3>{{item.prevMonthBanpeng}}台</h3>
                        </li>
                        <li>
                            <p>准时交车率</p>
                            <h3>{{item.onTimePercent}}</h3>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'CompanyStoreList',
        data(){
            return {
                storeList: [
                    {
                        id: 'wew123213',
                        name: '北京利星行奔驰1店',
                        img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4287045473,1232825432&fm=27&gp=0.jpg',
                        currentCount: 827, //在场台数
                        currentLeave: 10, //今日接车
                        currentSend: 45, //今日交车
                        monthBanpeng: 456, //本月钣喷台次
                        prevMonthBanpeng: 821, //上月钣喷台次
                        onTimePercent: '92.5%' //准时交车率
                    },
                    {
                        id: 'wew123213',
                        name: '北京利星行奔驰1店',
                        img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4287045473,1232825432&fm=27&gp=0.jpg',
                        currentCount: 827, //在场台数
                        currentLeave: 10, //今日接车
                        currentSend: 45, //今日交车
                        monthBanpeng: 456, //本月钣喷台次
                        prevMonthBanpeng: 821, //上月钣喷台次
                        onTimePercent: '92.5%' //准时交车率
                    }
                ]
            }
        },
        methods: {
            linkToStore(storeId){
                console.log(storeId);
                // this.$router.push({
                //     path: '',
                //     params: {
                //         storeId
                //     }
                // });
            }
        },
        created(){
            // 请求店面数据
            this.storeList = this.storeList.concat(this.storeList).concat(this.storeList);
        }
    };
</script>