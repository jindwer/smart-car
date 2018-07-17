<style lang="less" scoped>
    .map{
        height: 400px;
        background-color: beige;
        padding: 10px;
    }
    .company-header{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100px;
        .line{
            margin: 0 5px 0 20px;
            height: 50px;
        }
        .store-count{
            height: 50px;
        }
        img{
            border: 2px solid rgba(0,0,0,.2);
            border-radius: 3px;
        }
    }
    h2{
        color: rgba(0,153,229,.9);
        font-size: 22px;
        + div{
            color: #999;
        }
    }
    h3{
        margin-top: 10px;
        color: #333;
        font-size: 16px;
    }
    .icon{
        color: rgba(0,153,229,.9);
        font-size: 30px;
    }
    .count-item{
        display: flex;
        align-items: center;
        height: 50px;
        margin-top: 10px;
        margin-bottom: 10px;
        padding-left: 25px;
    }
    .line{
        display: inline-block;
        width: 2px;
        height: 100%;
        background-color: #ddd;
        margin: 0 10px;
    }
</style>
<template>
    <div class="container">
        <Row type="flex">
            <Col span="12" style="padding:0 10px;">
                <Row>
                    <Col span="24" class="company-header">
                        <img :src="companyImg" width="120" height="100%"/>
                        <span class="line"></span>
                        <div class="store-count">
                            <h2>{{storeCount}}</h2>
                            <div>维修站数量</div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span="24"><h3>今日钣喷</h3></Col>
                </Row>
                <Row>
                    <Col span="8" class="count-item">
                        <Icon type="model-s" class="icon"></Icon>
                        <span class="line"></span>
                        <div class="store-count">
                            <h2>{{currentCount}}</h2>
                            <div>在场台次</div>
                        </div>
                    </Col>
                    <Col span="8" class="count-item">
                        <Icon type="model-s" class="icon"></Icon>
                        <span class="line"></span>
                        <div class="store-count">
                            <h2>{{currentLeave}}</h2>
                            <div>今日接车</div>
                        </div>
                    </Col>
                    <Col span="8" class="count-item">
                        <Icon type="model-s" class="icon"></Icon>
                        <span class="line"></span>
                        <div class="store-count">
                            <h2>{{currentSend}}</h2>
                            <div>今日交车</div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span="8" class="count-item">
                        <Icon type="model-s" class="icon"></Icon>
                        <span class="line"></span>
                        <div class="store-count">
                            <h2>{{clearCount}}</h2>
                            <div>核损报价</div>
                        </div>
                    </Col>
                    <Col span="8" class="count-item">
                        <Icon type="model-s" class="icon"></Icon>
                        <span class="line"></span>
                        <div class="store-count">
                            <h2>{{simpleCount}}</h2>
                            <div>一般维修</div>
                        </div>
                    </Col>
                    <Col span="8" class="count-item">
                        <Icon type="model-s" class="icon"></Icon>
                        <span class="line"></span>
                        <div class="store-count">
                            <h2>{{banpengCount}}</h2>
                            <div>钣喷快修</div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span="24"><h3>运营数据</h3></Col>
                </Row>    
                <Row>
                    <Col span="8" class="count-item">
                        <Icon type="model-s" class="icon"></Icon>
                        <span class="line"></span>
                        <div class="store-count">
                            <h2>{{monthBanpeng}}</h2>
                            <div>本月钣喷台次</div>
                        </div>
                    </Col>
                    <Col span="8" class="count-item">
                        <Icon type="model-s" class="icon"></Icon>
                        <span class="line"></span>
                        <div class="store-count">
                            <h2>{{prevMonthBanpeng}}</h2>
                            <div>上月钣喷台次</div>
                        </div>
                    </Col>
                    <Col span="8" class="count-item">
                        <Icon type="model-s" class="icon"></Icon>
                        <span class="line"></span>
                        <div class="store-count">
                            <h2>{{onTimePercent}}</h2>
                            <div>准时交车率</div>
                        </div>
                    </Col>
                </Row>
            </Col>
            <Col span="12" class="map">地图</Col>
        </Row>
    </div>
</template>
<script>
    export default {
        name: 'CompanyMain',
        data(){
            return {
                companyImg: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4287045473,1232825432&fm=27&gp=0.jpg',
                storeCount: 12, //维修站的数量
                currentCount: 827, //在场台数
                currentLeave: 10, //今日接车
                currentSend: 45, //今日交车
                clearCount: 100, //核损报价
                simpleCount: 23, //一般维修
                banpengCount: 65, //钣喷快修
                monthBanpeng: 456, //本月钣喷台次
                prevMonthBanpeng: 821, //上月钣喷台次
                onTimePercent: '92.5%' //准时交车率
            }
        }
    };
</script>