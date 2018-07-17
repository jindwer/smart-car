<style lang="less" scoped>
    .store-title{
        padding: 20px 30px;
    }
    .channel{
        padding: 0 10px;
        h3{
            font-weight: bold;
            font-size: 16px;
        }
        ul{
            list-style: none;
            // padding: 10px 0;
            overflow: hidden;
            font-size: 16px;
            li{
                color: lightblue;
                float: left;
                cursor: pointer;
                color: rgba(0,153,229,.7);
                margin-right: 20px;
                &:hover{
                   color: rgba(0,153,229,.9);
                   text-decoration: underline;
                }
                .icon{
                    margin-right: 5px;
                    font-size: 18px;
                    color: rgba(0,153,229,1);
                }
            }
        }
    }
</style>
<template>
    <div class="container">
        <Header />
        <router-link to="/company" v-if="isCompany"><h2 class="store-title"><Icon size="24" type="home"></Icon> 集团管理</h2></router-link>
        <h2 class="store-title" v-else><Icon size="24" type="home"></Icon> 店面管理</h2>
        <Row type="flex">
            <Col span="6" class="channel">
                <Card style="height: 100%;">
                    <h3 slot="title">SA管理</h3>
                    <ul>
                        <li><Icon class="icon" type="clipboard"></Icon>SA看板</li>
                        <li><Icon class="icon" type="laptop"></Icon>交车看板</li>
                        <li><Icon class="icon" type="document"></Icon>结算工单</li>
                    </ul>
                </Card>
            </Col>
            <Col span="6" class="channel">
                <Card style="height: 100%;">
                    <h3 slot="title">技师管理</h3>
                    <ul>
                        <li><Icon class="icon" type="hammer"></Icon>技师工作台</li>
                        <li><Icon class="icon" type="arrow-graph-up-right"></Icon>进度看板</li>
                    </ul>
                </Card>
            </Col>
            <Col span="6" class="channel">
                <Card style="height: 100%;">
                    <h3 slot="title">车间管理</h3>
                    <ul>
                        <li><Icon class="icon" type="map"></Icon>调度看板</li>
                        <li><Icon class="icon" type="document"></Icon>异常看板</li>
                    </ul>
                </Card>
            </Col>
            <Col span="6" class="channel">
                <Card style="height: 100%;">
                    <h3 slot="title">系统配置</h3>
                    <ul>
                        <li><Icon class="icon" type="connection-bars"></Icon>报表数据</li>
                        <li><Icon class="icon" type="gear-a"></Icon>系统设置</li>
                    </ul>
                </Card>
            </Col>
        </Row>
    </div>
</template>
<script>
    import Header from '../../../components/header.vue';
    export default {
        name: 'StoreGroup',
        components: {
            Header
        },
        data(){
            return {
                isCompany: true
            }
        }
    };
</script>