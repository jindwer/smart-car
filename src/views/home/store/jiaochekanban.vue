<style lang="less" scoped>
    ::-webkit-scrollbar {width:0px}
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
            .zzXhColStyle{
                text-align: center;
                overflow: hidden
            }
        }
        .zzColStyle{
            padding-top: 5px;
            padding-bottom: 5px;
            height: 30px;
            text-align: center;
            overflow: hidden;
            .line{
                width:40%;
                height:3px;
                /*background-color:red;*/
                float:left;margin-top:9px;
            }
            .lineBackgroundPass{
                background-color:red;
            }
            .lineBackgroundFail{
                background-color:#cbcac6;
            }
            .ball{
                width:20%;
                height:17px;
                border-radius:30px;
                float:left;
                margin-top:2px;
                color:white;
                text-align: center;
            }
            .ballBackgroundPass{
                background-color:red;
            }
            .ballBackgroundFail{
                background-color:#cbcac6;
            }
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
           <Row class="zzRowStyle">
               <Col :span="span" v-for="(item,index) in dataList.title" :key="index" :title="item.name" class="zzXhColStyle">
                   {{item}}
               </Col>
           </Row>
           <div class="ZZtable-ite" :style="{'min-height':minTableHeight,'max-height': maxTableHeight}">
               <Row class="zzRowStyle" v-for="(ColList,index) in dataList.list" :key="index">
                   <Col :span="span" v-for="(item,index) in ColList.ColList" :key='index' class="zzColStyle">
                       <span v-if="typeof item.plan == 'undefined'" :title="item.name" style="text-align: center;padding:0 5px;">
                          {{item.name}}
                       </span>
                       <div v-else :title="item.name">
                           <div :class="[index != 3 && (item.plan == 1 ? 'lineBackgroundPass' : 'lineBackgroundFail') ,'line']" ></div>
                           <div :class="[item.plan == 1 ? 'ballBackgroundPass' : 'ballBackgroundFail' ,'ball']">{{item.name}}</div>
                           <div v-if="index != dataList.title.length - 2" :class="[item.plan == 1 ? 'lineBackgroundPass' : 'lineBackgroundFail','line']"></div>
                       </div>
                   </Col>
               </Row>
           </div>
           <Page :total='post.page.total' size="small" @on-change="PageOnChange" @on-page-size-change="onPageSizeChange" show-elevator show-sizer></Page>
       </div>
        </Card>
    </div>
</template>
<script>
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
                maxTableHeight:'0px',
                minTableHeight:'0px',
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
                                    {name: "2018-06-16 10:15"},
                                ],
                        },
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
                                {name: '检', plan: 0},
                                {name: '完', plan: 0},
                                {name: "2018-06-16 10:15"},
                            ],
                        },
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
                                {name: "2018-06-16 10:15"},
                            ],
                        },
                    ]
                }
            }
        },
        created(){
            this.span = parseInt(24 / this.dataList.title.length);
            this.maxTableHeight = (window.innerHeight || document.body.clientHeight) - 203 + 'px';
            this.minTableHeight = (window.innerHeight || document.body.clientHeight) - 321 + 'px';
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