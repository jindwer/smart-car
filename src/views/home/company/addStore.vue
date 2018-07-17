<style scoped>
    .input-tip{
        width: 100%;
        height: 30px;
        line-height: 30px;
        display: inline-block;
        color: #eb0b0b;
        padding-left: 75px;
        font-size: 12px;
    }
    .file-input{
        display: none;
    }
    .upload-img{
        width: 180px;
        height: 150px;
        border: 2px solid #ddd;
        border-radius: 5px;
        overflow: hidden;
    }
</style>
<template>
    <div class="container">
        <Row>
            <Col :xs="{span: 12,offset: 6}">
                <Input ref="companyTotalName" v-model.trim="companyTotalName" type="text" size="large" @on-blur="inputBlur('companyTotalName')" placeholder="pc系统的登录名称" clearable>
                    <span slot="prepend">公司全称</span>
                </Input>
                <span class="input-tip">{{tip.companyTotalName}}</span>
                <Input ref="companyName" v-model.trim="companyName" type="text" size="large" @on-blur="inputBlur('companyName')" placeholder="移动端登录名称" clearable>
                    <span slot="prepend">公司简称</span>
                </Input>
                <span class="input-tip">{{tip.companyName}}</span>
                <Input ref="companyCar" v-model.trim="companyCar" type="text" size="large" @on-blur="inputBlur('companyCar')" placeholder="汽车的品牌名" clearable>
                    <span slot="prepend">汽车品牌</span>
                </Input>
                <span class="input-tip">{{tip.companyCar}}</span>
                <Input ref="companyAddress" v-model.trim="companyAddress" type="text" size="large" @on-blur="inputBlur('companyAddress')" placeholder="地图显示的位置" clearable>
                    <span slot="prepend">公司地址</span>
                </Input>
                <span class="input-tip">{{tip.companyAddress}}</span>

                <input ref="fileInput" class="file-input" type="file" @change="getFile($event)"/>
                <Button type="info" @click="chooseImg">选择公司照片</Button>
                <span class="input-tip">{{tip.companyImg}}</span>

                <img class="upload-img" :src="uploadImgSrc" v-show="uploadImgSrc"/>

                <Button type="info" size="large" long :loading="isAdding" @click="addNewStore" style="margin-top: 15px;">添加</Button>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        name: 'CompanyAddStore',
        data(){
            return {
                companyTotalName: '',
                companyName: '',
                companyCar: '',
                companyAddress: '',
                companyImg: null,
                uploadImgSrc: '',
                isAdding: false,
                tip: {
                    companyTotalName: '',
                    companyName: '',
                    companyCar: '',
                    companyAddress: '',
                    companyImg: ''
                }
            }
        },
        methods: {
            inputBlur(type){
                this.tip[type] = '';
            },
            checkForm(){
                if(this.companyTotalName.length === 0){
                    this.tip.companyTotalName = '请填写公司的全称!';
                    this.$refs.companyTotalName.focus();
                    return false;
                }else if(this.companyName.length === 0){
                    this.tip.companyName = '请填写公司的简称!';
                    this.$refs.companyName.focus();
                    return false;
                }else if(this.companyCar.length === 0){
                    this.tip.companyCar = '请填写汽车品牌!';
                    this.$refs.companyCar.focus();
                    return false;
                }else if(this.companyAddress.length === 0){
                    this.tip.companyAddress = '请填写公司地址!';
                    this.$refs.companyAddress.focus();
                    return false;
                }else if(this.companyImg === null){
                    this.tip.companyImg = '请选择公司的图片!';
                    this.$refs.fileInput.click();
                    return false;
                }else{
                    const formData = new FormData();
                    const {
                        companyTotalName,
                        companyName,
                        companyCar,
                        companyAddress,
                        companyImg
                    } = this;
                    formData.append('companyTotalName',companyTotalName);
                    formData.append('companyName',companyName);
                    formData.append('companyCar',companyCar);
                    formData.append('companyAddress',companyAddress);
                    formData.append('companyImg',companyImg);
                    return formData;
                }
            },
            chooseImg(){
                this.$refs.fileInput.click();
            },
            getFile(e){
                const imgFile = e.target.files[0];
                if(!/png|jpeg|jpg/.test(imgFile.type)){
                    this.tip.companyImg = '上传的图片只允许png,jpg,jpeg的格式!';
                    return;
                }
                this.tip.companyImg = '';
                this.companyImg = imgFile;
                const fileRender = new FileReader();
                fileRender.onload = () => {
                    this.uploadImgSrc = fileRender.result;
                };
                fileRender.readAsDataURL(imgFile);
            },
            addNewStore(){
                const formData = this.checkForm();
                if(formData === false) return;
                this.isAdding = true;
                console.log(formData);
                // 发送formData
            }
        }
    };
</script>