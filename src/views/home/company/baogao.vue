<style scoped>
    .showTime{
        font-size: 12px;
        color: rgb(207, 207, 207);
        margin-left: 10px;
        margin-right: 10px;
    }
</style>
<template>
    <div class="container" style="padding-left:15px;">
        <Row>
            <Col span='24'>
                <Select v-model="model1" style="width:200px">
                    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
                <span style="font-size: 12px;color: rgb(207, 207, 207);margin-left: 10px;margin-right: 10px;">2018-04-14 - 2018-05-14</span>
            </Col>
        </Row>
        <br/>
        <Row>
            <Col span="11" style="height:400px;background-color:#f3f3f3;text-align:center;">
                <span>本月钣喷台次</span>
            </Col>
            <Col span="11" offset="1" style="height:400px;background-color:#f3f3f3;text-align:center;">
                <span>上月钣喷台次</span>
            </Col>
        </Row>
        <br/>
        <Row>
            <Col span='24'>
                <Select v-model="model1" style="width:200px">
                    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
                <span style="font-size: 12px;color: rgb(207, 207, 207);margin-left: 10px;margin-right: 10px;">2018-04-14 - 2018-05-14</span>
                <Button type="info">导出数据</Button>
            </Col>
        </Row>
        <br/>
         <Table :columns="columns1" :data="data1"></Table>
    </div>
</template>
<script>
    export default {
        name: 'CompanyBaogao',
        data(){
            return {
                cityList: [
                    {
                        value: '最近七天',
                        label: '最近七天'
                    },
                    {
                        value: '最近30天',
                        label: '最近30天'
                    },
                    {
                        value: '自定义',
                        label: '自定义'
                    },
                ],
                model1: '',
                columns1: [
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
                data1: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ]
            }
        }
    };
</script>