<style lang="less" scoped>
.systemSet {
  display: flex;
  font-size: 16px;
  padding-left: 15px;
  .systemSet-left {
    background-color: rgb(50, 122, 183);//rgb(76, 183, 237);
    float: left;
    width: 200px;
    height: 40px;
    border-radius: 8px;
    .systemSetTitle {
      padding-left: 8px;
      color: white;
      line-height: 40px;
    }
  }
  .systemSet-right {
    flex-grow:1;
    .systemSet-right-title {
      height: 40px;
      line-height: 40px;
    }
    .listItem{
        margin-bottom: 10px;
    }
  }
}
.systemSetItem {
  height: 50px;
  border-radius: 10px;
  background-color: rgb(240, 240, 240);
  line-height: 50px;
  cursor:pointer;
  &:hover{
    background-color: #aaa;
  }
  .systemSetItemImg {
    height: 100%;
    text-align: center;
    line-height: 62px;
  }
  .systemSetItemMS {
    display: flex;
    flex-direction: column;
    height: 100%;
    font-size: 14px;
    .systemSetItemMS-top {
      height: 50%;
      line-height: 25px;
    }
    .systemSetItemMS-bottom {
      height: 50%;
      line-height: 25px;
    }
  }
}
.ivu-input-group-prepend{
    padding: 9px 7px;
    font-size: inherit;
    font-weight: 400;
    line-height: 1;
    color: #495060;
    text-align: center;
    background-color: #eee;
    border: 1px solid #dddee1;
    border-radius: 6px;
    width: 71px;
    display: inline-block;
}

.resetPassword{
    // padding-left: 71px;
    .resetPasswordLabel{
        position: relative;
        left:-71px;
    }
    .resetPasswordButton{
        width: 100%;
        text-align: center;
        display: inline-block;
    }
}
.systemSet-right-title i{
    cursor: pointer;
}

</style>
<template>
    <div class="container systemSet">
        <div class="systemSet-left">
            <div class="systemSetTitle">集团人员设置</div>
        </div>
        <div class="systemSet-right">
            <Row>
                <Col class="systemSet-right-title" span="23" offset="1">
                    <div>
                        集团管理 <Icon @click="addPerson" title="增加人员" size='20' type="android-add-circle"></Icon>
                    </div>
                </Col>
            </Row>
            <Row>
                <div class="listItem" v-for="(item,index) in systemList">
                    <Col span="4" offset="1">
                        <div class="systemSetItem" @click="openModModal(item)">
                            <Row>
                                <Col class="systemSetItemImg" span="8">
                                    <Icon type="person" size="30"></Icon>
                                </Col>
                                <Col class="systemSetItemMS" span="16">
                                    <div class="systemSetItemMS-top">
                                        {{item.name}}
                                    </div>
                                    <div class="systemSetItemMS-bottom">
                                        {{item.phone}}
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </div>
            </Row>
        </div>
        <Modal
            v-model="detailsModal"
            :title="modelTitle"
            :loading="loading"
            @on-cancel="closeModel">
            <Row>
            <Col :xs="{span: 18,offset: 3}">
                <Input type="text" size="large" v-model="detailsData.accoun" placeholder="登录账号" clearable>
                    <span slot="prepend">登录账号</span>
                </Input>
                <br/>
                <Input type="text" size="large" v-model="detailsData.name" placeholder="真实姓名" clearable>
                    <span slot="prepend">真实姓名</span>
                </Input>
                <br/>
                <div v-show="addOrResetPassword == 1" class="resetPassword">
                    <!-- <div class="ivu-input-group-append resetPasswordLabel">重置密码</div> -->
                <div class="resetPasswordButton">
                    <Button type="info" @click="handleresetPassword">重置密码</Button>
                </div>
                </div>
                <Input v-show="addOrResetPassword == 2" type="text" size="large" v-model="detailsData.password" placeholder="密码" clearable>
                    <span style="width:71px;" slot="prepend">重置密码</span>
                </Input>
                <Input v-show="addOrResetPassword == 0" type="text" size="large" v-model="detailsData.password" placeholder="密码" clearable>
                    <span style="width:71px;" slot="prepend">设置密码</span>
                </Input>
                <br/>
                <Input type="text" size="large" v-model="detailsData.depa" placeholder="部门" clearable>
                    <span style="width:71px;" slot="prepend">部门部门</span>
                </Input>
                 <br/>
                <Input type="text" size="large" v-model="detailsData.phone" placeholder="电话" clearable>
                    <span style="width:71px;" slot="prepend">联系电话</span>
                </Input>
                <br/>
                <span class="ivu-input-group-prepend">性别</span>
                <RadioGroup v-model="detailsData.sex">
                    <Radio :label=0>男</Radio>
                    <Radio :label=1>女</Radio>
                </RadioGroup>
                <br/>
            </Col>
        </Row>
        <div slot='footer'>
            <Button type="info" @click="modSave">保存修改</Button>
            <Button v-show="addOrResetPassword !== 0" type="error" @click="del">删除员工</Button>
        </div>
    </Modal>
    </div>
</template>
<script>
export default {
  name: "CompanySystemconfig",
  data() {
    return {
      systemList: [
        {
          id: "ww1111111",
          name: "冯海军",
          accoun:"冯海军",
          phone: 12345678912,
          depa:"一部",
          sex:1,
          password:123456
        },
        {
          id: "ww1111111",
          name: "霍程程",
          accoun:"霍程",
          phone: 12345678912,
          depa:"二部",
          password:123456,
          sex:1
        },
        {
          id: "ww1111111",
          name: "霍程程",
          accoun:"霍程",
          phone: 12345678912,
          depa:"三部",
          password:'',
          sex:0,
          password:123456,
        },
        {
          id: "ww1111111",
          name: "霍程程",
          accoun:"霍程",
          phone: 12345678912,
          depa:"三部",
          password:'',
          sex:0,
          password:123456,
        },
        {
          id: "ww1111111",
          name: "霍程程",
          accoun:"霍程",
          phone: 12345678912,
          depa:"三部",
          password:'',
          sex:0,
          password:123456,
        },
        {
          id: "ww1111111",
          name: "霍程程",
          accoun:"霍程",
          phone: 12345678912,
          depa:"三部",
          password:'',
          sex:0,
          password:123456,
        },
        {
          id: "ww1111111",
          name: "霍程程",
          accoun:"霍程",
          phone: 12345678912,
          depa:"三部",
          password:'',
          sex:0,
          password:123456,
        },
        {
          id: "ww1111111",
          name: "霍程程",
          accoun:"霍程",
          phone: 12345678912,
          depa:"三部",
          password:'',
          sex:0,
          password:123456,
        },
      ],
      detailsModal:false,
      loading:true,
      //1 重置密码按钮 0 设置密码inout 2重置密码input
      addOrResetPassword:1,
      modelTitle:'设置',
      detailsData:{
          id:'',
          name:'',
          accoun:"",
          phone:'',
          depa:'',
          password:'',
          sex:1
      }
    };
  },
  methods: {
            modSave(data){
                this.loading = false;
                this.detailsModal = false;
                this.addOrResetPassword = 1;
                console.log('确认修改')
            },
            openModModal(data){
                this.detailsModal = true;
                this.modelTitle = '设置';
                this.detailsData = JSON.parse(JSON.stringify(data));
            },
            del(){
                let me = this;
                this.$Modal.confirm({
                    title:'确认删除',
                    content:`确认删除姓名为 ${this.detailsData.name} 的员工?`,
                    onOk:function(){
                        me.loading = false;
                        me.detailsModal = false;
                        me.addOrResetPassword = 1;
                        me.$Message.success({content:'删除成功'});
                    },
                })
            },
            handleresetPassword(){
                this.addOrResetPassword = 2;
            },
            closeModel(){
                this.loading = false;
                this.detailsModal = false;
                this.addOrResetPassword = 1;
                console.log('右上角取消')
            },
            addPerson(){
                this.detailsData = {
                    id:'',
                    name:'',
                    accoun:"",
                    phone:'',
                    depa:'',
                    password:'',
                    sex:1
                };
                this.addOrResetPassword = 0;
                this.modelTitle = '新增';
                this.detailsModal = true;
            }
        }
};
</script>