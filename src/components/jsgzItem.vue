<style lang="less" scoped>
    .wrapper{
        width:100%;
        height:120px;
        padding:10px;
        .head{
            height:40px;
            width:100%;
            line-height:40px;
            background-color:#f5f5f5;
            .icon{
                width:30px;
                height:30px;
                float:left;
                margin:0px 10px;
                background:red;
            }
            .number{
                width:20px;
                height:20px;
                border:3px solid red;
                border-radius:15px;
                display:inline-block;
                line-height:15px;
                text-align:center;
                color:red;
            }
            button{
                float:right;
                margin-right:6px;
                margin-top:9px;
                background-color:white;
            }
            button.action{
                background-color:#92c68b;
                color:white;
            }
        }
        .body{
            height:60px;
            width:100%;
            padding:0px 5px;
            border-left:1px solid #f5f5f5;
            border-right:1px solid #f5f5f5;
            cursor:pointer;
        }
        .footer{
            height:20px;
            width:100%;
            text-align:center;
            color:black;
        }
        .rest{
             background-color:#E0E0E0;
        }
        .underway{
            background-color:#92c68b;
        }
        .DaiGong{
            background-color:#f0ad4e;
        }
    }
</style>
<template>
<div class='wrapper'>
                                <div class='head'>
                                    <Icon type="md-person" class='icon'/>
                                    <span>{{itemData.name}}</span>
                                    <div class='number'>
                                       <strong>{{itemData.number}}</strong>
                                    </div>
                                    <i-button size='small' :class='itemData.workStatus == 1 ? "action" : ""' @click='Dk'>
                                        {{itemData.workStatus == 0 ? '上班' : '下班'}}
                                    </i-button>
                                </div>
                                <div class='body' @click='openModal'>
                                    <Carousel v-if='(itemData.underwaycat.length != 0 && itemData.workStatus == 1)' :autoplay='itemData.underwaycat.length > 1' loop arrow='never' dots='none'>
                                        <CarouselItem v-for='(item,index) in itemData.underwaycat' :key='index'>
                                            <div class="demo-carousel" style='padding:0px 5px;'>
                                                <div style='width:100%;height:20px;'>
                                                    <div style='float:left'>
                                                        <strong>{{item.carNumber}}</strong>
                                                    </div>
                                                    <div style='float:right'>
                                                        {{item.carType}}
                                                    </div>
                                                </div>
                                                <div style='width:100%;height:40px;font-size:12px;'>
                                                    <div style="height:20px;width:100%;text-align:left;float:left;">{{item.typeOfWork}} {{item.time}}</div>
                                                    <Progress :percent="80">
                                                        <Icon type="checkmark-circled"></Icon>
                                                        <span>{{item.prosTime}}</span>
                                                    </Progress>
                                                </div>
                                            </div>
                                        </CarouselItem>

                                    </Carousel>
                                    <div v-else-if='(itemData.underwaycat.length == 0 && itemData.workStatus == 1)' style='text-align:center;line-height:60px;'>
                                        暂无工作安排
                                    </div>
                                    <div v-else='itemData.workStatus == 0' style='text-align:center;line-height:60px;'>
                                        没有工作安排
                                    </div>
                                </div>
                                <div class='footer' :class='workStatusBackground'>
                                    {{workStatusName}}
                                </div>
                            </div>
</template>
<script>
    export default {
        name: 'jsgzItem',
        data() {
            return {
            }
        },
        created() {
        },
        props: [
            'itemData','openModal'
        ],
        methods: {
            Dk(){
                console.log('上下班')
            },
        },
        computed: {
            workStatusName: function () {
                let workStatusName = '休息中'
                if(this.itemData.workStatus != '0') {
                    if(this.itemData.underwaycat.length > 0){
                        workStatusName = '进行中'
                    }else{
                        workStatusName = '待工中'
                    }

                }
            return workStatusName
            },
            workStatusBackground:function(){
                let workStatusBackground =  'rest'
                if(this.itemData.workStatus != '0') {
                    if(this.itemData.underwaycat.length > 0){
                        workStatusBackground = 'underway'
                    }else{
                        workStatusBackground = 'DaiGong'
                    }

                }
                return workStatusBackground
            }
        }
    };
</script>
