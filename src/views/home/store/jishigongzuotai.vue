<style lang="less" scoped>
    .container{
        padding: 0 15px;
        .search{
            width:300px;
            height:32px;
            float:right;
        }
        .icon{
            color: black;
            font-size: 30px;
        }
    }
</style>
<template>
    <div class="container">
                <Card>
                    <Row>
                        <Col :xs="12" :sm="12" :md="12" :lg="12">
                            <i-button>
                                所有人
                            </i-button>
                            <i-button>
                                钣金
                            </i-button>
                            <i-button>
                                喷漆
                            </i-button>
                        </Col>
                        <Col :xs="12" :sm="12" :md="12" :lg="12">
                            <div class='search'>
                                <i-input placeholder="搜索工单" style="width:80%;min-width: 60px"></i-input>
                                <i-button type="primary">搜索</i-button>
                            </div>
                        </Col>
                    </Row>
                </Card>
                <br/>
                <Card>
                    <Row>
                        <Col :xs="24" :sm="8" :md="6" :lg="4" style='margin-bottom:10px;' v-for='(item,index) in dataList' :key='item.index'>
                            <JsgzItem :itemData='item' :openModal='openModal'></JsgzItem>
                        </Col>
                    </Row>
                </Card>
                <Modal
                    v-model="modal"
                    title="工作统计"
                    :loading="loading"
                    @on-ok="asyncOK">
                    <Layout>
                        <Header>Header</Header>
                        <Content>Content</Content>
                        <Footer>Footer</Footer>
                    </Layout>
                </Modal>
    </div>
</template>
<script>
    import JsgzItem from '../../../components/jsgzItem.vue';
    export default {
        name: 'JiShiGongZuoTai',
        data(){
            return {
                dataList:[
                    {
                        name:'张宇宇',//姓名
                        number:3,//进行中的数量
                        workStatus:1,//上班状态 0:下班 1:上班 
                        underwaycat:[
                            {
                                carNumber:'京p8888',//车牌
                                carType:'速腾',//车型
                                pros:'30',//进入
                                prosTime:'176分',//进行的时间
                                typeOfWork:'钣金',
                                time:'05-26 14:23' 
                            },
                            {
                                carNumber:'京p8888',//车牌
                                carType:'法拉利',//车型
                                pros:'60',//进入
                                prosTime:'76分',//进行的时间
                                typeOfWork:'喷漆',
                                time:'05-26 14:23' 
                            },
                            {
                                carNumber:'京p8888',//车牌
                                carType:'速腾',//车型
                                pros:'30',//进入
                                prosTime:'176分',//进行的时间
                                typeOfWork:'钣金',
                                time:'05-26 14:23' 
                            },
                        ]
                    },
                    {
                        name:'李刚',//姓名
                        number:1,//进行中的数量
                        workStatus:0,//上班状态 0:下班 1:上班 
                        underwaycat:[
                            {
                                carNumber:'京p8888',//车牌
                                carType:'速腾',//车型
                                pros:'30',//进入
                                prosTime:'176分',//进行的时间
                                typeOfWork:'钣金',
                                time:'05-26 14:23' 
                            },
                        ]
                    },
                    {
                        name:'李刚',//姓名
                        number:1,//进行中的数量
                        workStatus:1,//上班状态 0:下班 1:上班 
                        underwaycat:[
                            {
                                carNumber:'京p8888',//车牌
                                carType:'速腾',//车型
                                pros:'30',//进入
                                prosTime:'176分',//进行的时间
                                typeOfWork:'钣金',
                                time:'05-26 14:23' 
                            },
                        ]
                    },
                    {
                        name:'王华峰',//姓名
                        number:0,//进行中的数量
                        workStatus:1,//上班状态 0:下班 1:上班 
                        underwaycat:[]
                    },
                ],
                modal:false,
                loading:false,
            }
        },
        components: {
            JsgzItem
        },
        methods:{
            openModal(){
                this.modal = true;
            },
            asyncOK(){
                console.log('弹窗点了确定')
            }
        }
    };
</script>