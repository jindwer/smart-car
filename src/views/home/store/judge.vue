<style lang="less" scoped>
    .container{
        padding: 0 15px;
        label{
            color: #5c92b6;
            font-size: 12px;
            font-weight: bold;
        }
    }
    .text-danger{
        color: #ed3f14;
    }
    .item-btn{
        width: 120px;
        margin-right: 15px;
        margin-bottom: 10px;
    }
    .modal-body{
        background-color: #eee;
        .head-item{
            height: 36px;
            line-height: 36px;
            background-color: #ff9900;
            text-align: center;
            color: #fff;
        }
        .item-value{
            height: 36px;
            line-height: 36px;
            text-align: center;
            cursor: pointer;
            border: 1px solid #999;
            &:hover{
                background-color: #f0b154;
            }
            &.active{
                background-color: #ac6803;
                color: #fff;
            }
        }
        .item-input-box{
            height: 36px;
            line-height: 36px;
            input{
                width: 100%;
                height: 100%;
                text-align: center;
            }
        }
    }
    .selected-info{
        font-size: 12px;
        color: #999;
        text-align: right;
        margin-bottom: 10px;
        span{
            margin-left: 10px;
            strong{
                color: #ff9900;
            }
        }
    }
    .switch-box{
        margin-bottom: 20px;
        label{
            font-size: 14px;
            margin-right: 10px;
        }
    }
    .ivu-switch-checked{
        border-color: #ff9900;
        background-color: #ff9900;
    }
</style>
<style>
    .sa-input .ivu-color-picker-picker-panel{
        width: 100% !important;
    }
    .sa-input .ivu-color-picker-confirm-color{
        display: none;
    }
    .sa-input .ivu-color-picker-confirm{
        text-align: center;
    }
</style>

<template>
    <div class="container sa-input">
        <Row>
            <Col span="9">
                <Card>
                    <Row>
                        <!-- 工单信息 start-->
                        <Col span="11">
                            <label>工单号</label>
                            <Input v-model.trim="form.gongdanhao" disabled></Input>
                            <label>车牌号<small class="text-danger">(必填)</small></label>
                            <Input v-model.trim="form.chepaihao" placeholder="请填写"></Input>
                            <label>姓名</label>
                            <Input v-model.trim="form.name" placeholder="请填写"></Input>
                            <label>手机号</label>
                            <Input v-model.trim="form.phone" placeholder="请填写"></Input>
                            <label>工时类型</label>
                            <Select v-model="form.gongshi">
                                <Option v-for="item in selecter.gongshi" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                        </Col>
                        <Col span="2">&nbsp;</Col>
                        <Col span="11">
                            <label>保险公司</label>
                            <Input v-model.trim="form.baoxian" placeholder="请填写"></Input>
                            <label>汽车品牌</label>
                            <Input v-model.trim="form.pinpai" placeholder="请填写"></Input>
                            <label>车型</label>
                            <Input v-model.trim="form.chexing" placeholder="请填写"></Input>
                            <label>色彩</label><br/>
                            <ColorPicker style="width: 100%;" v-model="form.color" />
                        </Col>
                        <!-- 工单信息 end -->
                    </Row>
                </Card>
                <!-- 选择的维修项目 start-->
                <Card style="margin-top: 15px;">
                    <label>维修项目</label>
                    <p class="selected-info">
                        <span>总工时: <strong>{{selectedInfo.gongShiCount}}</strong> 个</span>
                        <span>总费用: <strong>{{selectedInfo.feiYongCount}}</strong> 元</span>
                        <span>共 <strong>{{selectedInfo.items.length}}</strong> 件</span>
                        <Button style="margin-left: 15px;" size="small" type="warning" @click.stop="modifyFeiYong">重新定价</Button>
                    </p>
                     <Table height="200" border :columns="selectedInfo.tableColumns" :data="selectedInfo.items"></Table>
                     <label>备注信息</label>
                     <Input v-model.trim="selectedInfo.beiZhu" type="textarea" :autosize="{minRows: 2,maxRows: 5}"></Input>  
                </Card>
                <!-- 选择的维修项目 end -->
            </Col>
            <Col span="1">&nbsp;</Col>
            <Col span="14">
                <!-- 所有的维修项目 start -->
                <Card>
                    <Tabs type="card">
                        <TabPane label="覆盖件">
                            <Button class="item-btn" v-for="(item, index) in tabPane.fuGaiList" :key="item.label+index" :type="item.checked ? 'warning' : 'primary'" @click="itemClick('fuGai', index, item)">{{item.label}}</Button>
                        </TabPane>
                        <TabPane label="加强件">
                            <Button class="item-btn" v-for="(item, index) in tabPane.jiaQiangList" :key="item.label+index" :type="item.checked ? 'warning' : 'primary'" @click="itemClick('jiaQiang', index, item)">{{item.label}}</Button>
                        </TabPane>
                    </Tabs>
                </Card>
                <Row style="margin-top: 15px;">
                    <Col span="12">
                        <div class="switch-box">
                            <label>拆解车辆</label>
                            <Switch v-model="selectedInfo.chaiJie" @on-change="chaiJieChange">
                                <span slot="open">是</span>
                                <span slot="close">否</span>
                            </Switch>
                        </div>
                        <div class="switch-box">
                            <label>快修车辆</label>
                            <Switch v-model="selectedInfo.kuaiXiu" @on-change="kuaiXiuChange">
                                <span slot="open">是</span>
                                <span slot="close">否</span>
                            </Switch>
                        </div>
                    </Col>
                    <Col span="12">
                        <DatePicker
                            :open="control.openJiaoCheTime"
                            :value="selectedInfo.jiaoCheTime"
                            type="datetime"
                            :options="selectedInfo.disabledJiaoCheTime"
                            @on-change="jiaoCheTimeChange"
                            @on-clear="jiaoCheTimeClear"
                            @on-ok="jiaoCheTimeOk">
                            <Button type="primary" size="small" @click="jiaoCheTimeSelected">
                                <Icon size="18" type="ios-calendar-outline"></Icon>
                                预计交车时间
                            </Button>
                        </DatePicker>
                        <strong style="margin-left: 10px;color: #ff9900;font-size:16px;">{{ selectedInfo.jiaoCheTime }}</strong>
                        <Button style="margin-top: 15px;" type="warning" long @click.stop="publishJob">发布工作</Button>
                    </Col>
                </Row>
                <!-- 所有的维修项目 end  -->
            </Col>
        </Row>
        <!-- 维修项目对话框 -->
        <Modal
            width="750"
            v-model="control.showCurrentItem"
            @on-ok="itemClickOk"
            @on-cancel="itemClickCancel">
            <p slot="header" style="height: 30px;font-size: 20px;color: #ff9900;">
                <Icon size="24" type="wrench"></Icon>
                <span>{{currentItem.label}}</span>
            </p>
            <Row class="modal-body">
                <Col span="6">
                    <div class="head-item">损伤状态</div>
                    <div class="item-value" v-for="(item, index) in currentItem.sunShang" :key="item.label" :class="{'active':currentItem.sunShangActiveIndex === index}" @click="selectSunShang(index)">{{item.label}}</div>
                </Col>
                <Col span="6">
                    <div class="head-item">维修面积</div>
                    <div class="item-value" v-for="(item, index) in currentItem.mianJi" :key="item.label" :class="{'active':currentItem.mianJiActiveIndex === index}" @click="selectMianJi(index)">{{item.label}}</div>
                </Col>
                <Col span="6">
                    <div class="head-item">工时</div>
                    <div class="item-input-box">
                        <input v-model.trim="currentItem.gongShi" type="text" @input="inputGongShi($event)"/>
                    </div>
                </Col>
                <Col span="6">
                    <div class="head-item">费用</div>
                    <div class="item-input-box">
                        <input v-model.trim="currentItem.feiYong" type="text" @input="inputFeiYong($event)"/>
                    </div>
                </Col>
            </Row>
        </Modal>
        <!-- 重新定价对话框 -->
        <Modal
            width="400"
            @on-ok="modifyClickOk"
            @on-cancel="modifyClickCancel"
            v-model="control.showModifyFeiYong">
            <p slot="header" style="height: 30px;font-size: 20px;color: #ff9900;">
                <Icon size="24" type="ios-compose-outline"></Icon>
                <span>重新定价</span>
            </p>
            <Row class="modal-body">
                <Col span="12">
                    <div class="head-item">维修工时</div>
                    <div class="item-input-box">
                        <input v-model.trim="selectedInfo.gongShiCountChange" type="text" @input="inputGongShiCount($event)"/>
                    </div>
                </Col>
                <Col span="12">
                    <div class="head-item">维修费用</div>
                    <div class="item-input-box">
                        <input v-model.trim="selectedInfo.feiYongCountChange" type="text" @input="inputFeiYongCount($event)"/>
                    </div>
                </Col>
            </Row>
        </Modal>    
    </div>
</template>
<script>
    export default {
        name: 'Judge',
        data(){
            return {
                form: { // 工单的基本信息
                    gongdanhao: 'asdsad',
                    chepaihao: '',
                    name: '',
                    phone: '',
                    baoxian: '',
                    pinpai: '',
                    chexing: '',
                    color: '',
                    gongshi: 'a'
                },
                control: { // 界面元素控制
                    showCurrentItem: false, // 显示维修项目对话框
                    openJiaoCheTime: false, // 显示预计交车时间选择框
                    showModifyFeiYong: false // 显示重新定价对话框
                },
                selecter: {
                    gongshi: [{label: 'A类',value: 'a'},{label: 'B类',value: 'b'}]
                },
                tabPane: { // 所有部件的信息
                    fuGai: 0,
                    fuGaiList: [
                        {label: '前杠', checked: false},
                        {label: '后杠', checked: false},
                        {label: '前机盖', checked: false},
                        {label: '后机盖', checked: false},
                        {label: '前杠', checked: false},
                        {label: '后杠', checked: false},
                        {label: '前机盖', checked: false},
                        {label: '后机盖', checked: false}
                    ],
                    jiaQiang: 0,
                    jiaQiangList: [
                        {label: '左前大梁', checked: false},
                        {label: '右前大梁', checked: false},
                        {label: '左前侧围', checked: false}
                    ]
                },
                currentItem: { // 当前正在设置的部件信息
                    type: 'fuGai',
                    label: '',
                    sunShangActiveIndex: 0,
                    sunShang: [
                        {label: '轻度', value: 1},
                        {label: '中度', value: 2},
                        {label: '重度', value: 3},
                        {label: '更换', value: 4}
                    ],
                    mianJiActiveIndex: 0,
                    mianJi: [
                        {label: '全部', value: 1},
                        {label: '上半部分', value: 2},
                        {label: '下半部分', value: 3},
                    ],
                    gongShi: 1.5,
                    feiYong: 200
                },
                selectedInfo: {
                    kuaiXiu: false,
                    chaiJie: false,
                    jiaoCheTime: '', // 预计交车时间
                    disabledJiaoCheTime: {
                        disabledDate(date){
                            return date && date.valueOf() < Date.now() - 86400000;
                        }
                    }, // 不可选择的交车时间
                    items: [
                        // {label: 'www', sunShang: '全部', mianJi: '全部', gongShi: 1.5, feiYong: 200}
                    ],
                    beiZhu: '', // 备注信息
                    gongShiCount: 0, // 总工时
                    feiYongCount: 0, // 总费用
                    gongShiCountChange: 0, // 修改的总工时
                    feiYongCountChange: 0, // 修改的总费用
                    tableColumns: [ // 维修项目的表头
                        {title: '名称', key: 'label'},
                        {title: '损伤程度', key: 'sunShang',width: 90},
                        {title: '面积', key: 'mianJi'},
                        {title: '工时', key: 'gongShi'},
                        {title: '维修费', key: 'feiYong'},
                        {title: '操作', key: 'delete', fixed: 'right',align: 'center',
                        render: (h, params)=>{
                            return h('Icon', {
                                props: {
                                    type: 'close-round',
                                    size: '20',
                                    color: '#ed3f14'
                                },
                                style: {
                                    cursor: 'pointer'
                                },
                                on: {
                                    click: () => {
                                        this.removeSelectedItem(params.index);
                                    }
                                }
                            });
                        }
                        }
                    ]
                }
            }
        },
        created(){
            // 生成工单号
            this.form.gongdanhao = new Date().getTime().toString().slice(-9, -1) + Math.random().toString().slice(2, 8);
            // 初始化预计交车时间
            this.selectedInfo.jiaoCheTime = this._getNowDatetime();
        },
        watch: {
            'selectedInfo.items'(newVal){
                let gongShiCount = 0;
                let feiYongCount = 0;
                newVal.forEach((item)=>{
                    gongShiCount += item.gongShi;
                    feiYongCount += item.feiYong;
                });
                this.selectedInfo.gongShiCount = gongShiCount;
                this.selectedInfo.feiYongCount = feiYongCount;
            }
        },
        methods: {
            _getNowDatetime(){ // 获取当前时间字符串
                const timeNow = new Date();
                let year = timeNow.getFullYear();
                let month = timeNow.getMonth() + 1;
                let day = timeNow.getDate();
                let hour = timeNow.getHours();
                let min = timeNow.getMinutes();
                let sec = timeNow.getSeconds();
                month = month > 9 ? month : '0' + month;
                day = day > 9 ? day : '0' + day;
                hour = hour > 9 ? hour : '0' + hour;
                min = min > 9 ? min : '0' + min;
                sec = sec > 9 ? sec : '0' + sec;
                return [year, month, day].join('-') + ' ' + [hour, min, sec].join(':');
            },
            itemClick(type, index, item){ // 点击维修件
                this.currentItem.type = type;
                this.tabPane[type] = index;
                this.currentItem.label = item.label;
                this.control.showCurrentItem = true;
            },
            itemClickOk(){ // 维修部件ok
                const type = this.currentItem.type;
                const thisItem = this.tabPane[type+'List'][this.tabPane[type]];
                const currentItem = this.currentItem;
                this.selectedInfo.items.push({
                    type: type,
                    index: this.tabPane[type],
                    label: currentItem.label,
                    sunShang: currentItem.sunShang[currentItem.sunShangActiveIndex].label,
                    mianJi: currentItem.mianJi[currentItem.mianJiActiveIndex].label,
                    gongShi: currentItem.gongShi,
                    feiYong: currentItem.feiYong
                });
                thisItem.checked = true;
            },
            itemClickCancel(){ // 维修部件cancel
                const type = this.currentItem.type;
                this.currentItem.type = '';
                this.tabPane[type] = 0;
            },
            selectSunShang(index){ // 选择损伤程度
                const currentSunShang = this.currentItem.sunShang[index];
                const currentMianJi = this.currentItem.mianJi[this.currentItem.mianJiActiveIndex];
                this.currentItem.gongShi = currentSunShang.value * currentMianJi.value;
                this.currentItem.feiYong = currentSunShang.value + currentMianJi.value;
                this.currentItem.sunShangActiveIndex = index;
            },
            selectMianJi(index){ // 选择面积
                const currentSunShang = this.currentItem.sunShang[this.currentItem.sunShangActiveIndex];
                const currentMianJi = this.currentItem.mianJi[index];
                this.currentItem.gongShi = currentSunShang.value * currentMianJi.value;
                this.currentItem.feiYong = currentSunShang.value + currentMianJi.value;
                this.currentItem.mianJiActiveIndex = index;
            },
            inputGongShi(event){ // 约束工时
                this.currentItem.gongShi = event.target.value.replace(/[^0-9\.]/g,'').replace(/^\./,'').replace(/^0+/,'0').replace(/\.+/g,'.');
            },
            inputFeiYong(event){ // 约束费用
                this.currentItem.feiYong = event.target.value.replace(/[^0-9\.]/g,'').replace(/^\./,'').replace(/^0+/,'0').replace(/\.+/g,'.');
            },
            removeSelectedItem(i){ // 将已经选中维修项目移出
                const currentSelectedItem = this.selectedInfo.items[i];
                const {type, index} = currentSelectedItem;
                this.tabPane[type+'List'][index].checked = false;
                this.selectedInfo.items.splice(i, 1);
            },
            jiaoCheTimeSelected(){ // 开闭预计交车时间
                this.control.openJiaoCheTime = !this.control.openJiaoCheTime;
            },
            jiaoCheTimeChange(datetime){ // 当预计交车时间改变时
                this.selectedInfo.jiaoCheTime = datetime;
            },
            jiaoCheTimeClear(){ // 清除预计交车时间时
                this.control.openJiaoCheTime = false;
            },
            jiaoCheTimeOk(){ // 确定预计交车时间时
                this.control.openJiaoCheTime = false;
            },
            chaiJieChange(status){ // 设置为拆解车辆变化时
                if(status){ 
                    this.selectedInfo.kuaiXiu = false;
                }
                this.selectedInfo.chaiJie = status;
            },
            kuaiXiuChange(status){ // 设置为快修车辆变化时
                if(status){ 
                    this.selectedInfo.chaiJie = false;
                }
                this.selectedInfo.kuaiXiu = status;
            },
            inputGongShiCount(event){ // 修改工时输入时
                this.selectedInfo.gongShiCountChange = event.target.value.replace(/[^0-9\.]/g,'').replace(/^\./,'').replace(/^0+/,'0').replace(/\.+/g,'.');
            },
            inputFeiYongCount(event){ // 修改费用输入时
                this.selectedInfo.feiYongCountChange = event.target.value.replace(/[^0-9\.]/g,'').replace(/^\./,'').replace(/^0+/,'0').replace(/\.+/g,'.');
            },
            modifyFeiYong(){ // 重新定价框显示
                this.control.showModifyFeiYong = true;
                this.selectedInfo.gongShiCountChange = this.selectedInfo.gongShiCount;
                this.selectedInfo.feiYongCountChange = this.selectedInfo.feiYongCount;
            },
            modifyClickOk(){ // 重新定价ok
                this.selectedInfo.gongShiCount = this.selectedInfo.gongShiCountChange;
                this.selectedInfo.feiYongCount = this.selectedInfo.feiYongCountChange;                
            },
            modifyClickCancel(){ // 重新定价cancel

            },
            publishJob(){ // 发布工作
                const data = this._filterFormData();
                if(data){
                    alert('发布工作');
                }
            },
            _message(msg){
                this.$Message.error({
                    content: msg,
                    duration: 4
                });
            },
            _filterFormData(){ // 检查需要提交
                if(this.form.chepaihao.length === 0){
                    this._message('请填写车牌号');
                    return false;
                }else if(this.selectedInfo.items.length === 0){
                    this._message('请选择维修项目');
                    return false;
                }else{
                    return {
                        items: [
                            ...this.selectedInfo.items
                        ],
                        gongShiCount: this.selectedInfo.gongShiCount,
                        feiYongCount: this.selectedInfo.feiYongCount
                    }
                }
            }
        }
    };
</script>