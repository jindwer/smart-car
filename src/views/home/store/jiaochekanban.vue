<style lang="less" scoped>
    ::-webkit-scrollbar {width:0px};
    .t-c{
        text-align: center;
    };
    .container{
        padding: 0 15px;
        label{
            color: #5c92b6;
            font-size: 12px;
            font-weight: bold;
        }
    }
    .ZZtable{
        white-space: nowrap;
        margin: 0 auto;
        .ZZtable-ite{
            overflow: auto;
            margin-bottom: 15px;
            ::-webkit-scrollbar {width:0px}
        }
        .zzRowStyle{
            border-bottom: 1px solid #cbcac6;
            display: flex;
            .zzXhColStyle{
                width: 130px;
                overflow: hidden;
                flex-grow: 1;
            }
        }
        .zzColStyle{
            padding-top: 5px;
            padding-bottom: 5px;
            height: 30px;
            width: 130px;
            flex-grow:1;
            overflow: hidden;
        }
    }
</style>
<template>
    <div class="container">
        <Row>
            <Col>
                <Card>
                    <i-input v-model="post.workOrder" placeholder="搜索工单" style="width: 200px"></i-input>
                    <i-button type="primary" @click="search">搜索</i-button>
                    <Tag color="red" style="float: right;">交车超时 {{jccs}}</Tag>
                    <Tag color="yellow" style="float: right;">工序超时 {{gxcs}}</Tag>
                    <Tag color="blue" style="float: right;">全部 {{all}}</Tag>
                </Card>
            </Col>
        </Row>

        <Card style=" margin-top: 15px;">
       <div class="ZZtable">
           <div class="zzRowStyle">
               <div v-for="(item,index) in dataList.title" :key="index" :title="item.name" :class="[(index > 2 && index < dataList.title.length - 1) ? 't-c':'','zzXhColStyle']">
                       {{item}}
               </div>
           </div>
           <div class="ZZtable-ite" :style="{'height':tableHeight}">
               <div class="zzRowStyle" v-for="(ColList,index) in dataList.list" :key="index">
                   <div v-for="(item,index) in ColList.ColList" :key='index' class="zzColStyle">
                       <JckbDataItem :item="item" :index="index" :dataList="dataList"></JckbDataItem>
                   </div>
               </div>
           </div>
           <Page :total='post.page.total' size="small" @on-change="PageOnChange" @on-page-size-change="onPageSizeChange" show-elevator show-sizer></Page>
       </div>
        </Card>
    </div>
</template>
<script>
    import JckbDataItem from '../../../components/jckbDataItem.vue';
    export default {
        name: 'JiaoCheKanBan',
        data() {
            return {
                post:{
                    workOrder:'测试',
                    page:{
                        curPage:1,
                        total:40,
                        toPage:'',
                    }
                },
                all:30,
                gxcs:2,
                jccs:24,
                span:2,
                tableHeight:'0px',
                // maxTableHeight:'0px',
                // minTableHeight:'0px',
                dataList:{
                    title:[
                        '车牌号',
                        '车型',
                        '服务顾问',
                        '钣金',
                        '底处理',
                        '中途',
                        '喷漆',
                        '装配',
                        '抛光',
                        '检验',
                        '完工',
                        '预计交车时间'
                    ],
                    list:[
                        {
                            id: 1,
                                ColList:[
                                {name: '京k88887'},
                                    {name: '玛莎拉蒂'},
                                    {name: '霍程程'},
                                    {name: '钣', plan: 1},
                                    {name: '底', plan: 1},
                                    {name: '中', plan: 1},
                                    {name: '喷', plan: 1},
                                    {name: '装', plan: 1},
                                    {name: '抛', plan: 1},
                                    {name: '检', plan: 1},
                                    {name: '完', plan: 0},
                                    {name: "2018/06/16"},
                                ],
                        },
                    ]
                }
            }
        },
        created(){
            this.span = parseInt(24 / this.dataList.title.length);
            this.tableHeight = (window.innerHeight || document.body.clientHeight) - 321 + 'px';
            // this.maxTableHeight = (window.innerHeight || document.body.clientHeight) - 203 + 'px';
            // this.minTableHeight = (window.innerHeight || document.body.clientHeight) - 321 + 'px';
        },
        components: {
            JckbDataItem
        },
        methods:{
            PageOnChange(num){
                this.post.page.toPage = num;
            },
            onPageSizeChange(num){
                this.post.page.toPage = num;
            },
            search(){
                console.log(this.post)
            }
        },
    };
</script>