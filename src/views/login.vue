<style lang="less" scoped>
    .login-panel{
        box-shadow: 0 0 10px rgba(0,0,0,.5);
        border-radius: 8px;
        margin-top: 150px;
    }
    .login-title{
        text-align: center;
        color: #eee;
    }
    .input-tip{
        width: 100%;
        height: 15px;
        display: inline-block;
        color: #eb0b0b;
        padding-left: 35px;
        font-size: 12px;
    }
    .lost{
        margin-top: 10px;
        a{
            font-size: 12px;
            color: #ccc;
        }
    }
</style>
<template>
    <Row>
        <Col class="login-panel" :xs="{ span: 12, offset: 6 }" :md="{ span: 8, offset: 8}" :lg="{ span: 6, offset: 9}">
            <Card style="background-color: rgba(0,0,0,0.5);" :bordered="false">
                <h2 slot="title" class="login-title">系 统 登 录</h2>
                <Input ref="companyname" class="input-box" type="text" size="large" v-model.trim="companyname" @on-blur="inputBlur('companyname')" placeholder="输入单位名" clearable>
                    <Icon size="20" color="#2d8cf0" type="ios-home" slot="prepend"></Icon>
                </Input>
                <span class="input-tip">{{tip.companyname}}</span>
                <Input ref="username" class="input-box" type="text" size="large" v-model.trim="username" @on-blur="inputBlur('username')" placeholder="输入用户名" clearable>
                    <Icon size="20" color="#2d8cf0" type="person" slot="prepend"></Icon>
                </Input>
                <span class="input-tip">{{tip.username}}</span>
                <Input ref="password" class="input-box" type="password" size="large" v-model.trim="password" @on-blur="inputBlur('password')" placeholder="输入密码" clearable>
                    <Icon size="20" color="#2d8cf0" type="locked" slot="prepend"></Icon>
                </Input>
                <span class="input-tip">{{tip.password}}</span>
                <Button type="primary" long size="large" :loading="loading" @click="login">登 录</Button>
                <p class="lost"><a>忘记密码?</a></p>
            </Card>
        </Col>
    </Row>
</template>
<script>
    import GetFirstPage from '../libs/firstPageAfterLogin.js';
    export default {
        name: 'Login',
        data(){
            return{
                companyname: '',
                username: '',
                password: '',
                loading: false,
                tip: {
                    companyname: '',
                    username: '',
                    password: '',
                }
            }
        },
        methods: {
            inputBlur(type){
                this.tip[type] = '';
            },
            checkForm(){ // 检查表单数据
                if(this.companyname.length === 0){
                    this.tip.companyname = '请填写单位名称!';
                    this.$refs.companyname.focus();
                    return false;
                }else if(this.username.length === 0){
                    this.tip.username = '请填写用户名!';
                    this.$refs.username.focus();
                    return false;
                }else if(this.password.length === 0){
                    this.tip.password = '请填写密码!';
                    this.$refs.password.focus();
                    return false;
                }else{
                    return {
                        companyName: this.companyname,
                        userName: this.username,
                        password: this.password
                    }
                }
            },
            login(){ // 登录
                const formData = this.checkForm();
                if(formData === false) return;
                this.loading = true;
                this.$http.post('/api/login', formData).then((response)=>{
                    this.loginSuccess(response.data);
                    console.log(response);
                }).catch((error)=>{
                    this.loading = false;
                });
            },
            loginSuccess(data){ // 登录成功
                /* 设置token */
                this.$store.dispatch('setToken', {token: data.token});

                /* 设置用户信息 */
                this.$store.dispatch('setUserInfo', {
                    username: data.username,
                    permission: data.permission,
                    pages: data.pages,
                    company: data.company
                });

                /* 跳转到角色的首页 */
                const firstPageUrl = GetFirstPage(data.permission);
                this.$router.push({
                    path: firstPageUrl
                });
            }
        }
    };
</script>