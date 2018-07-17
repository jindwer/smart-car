<style scoped>
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
            <Col span="12" style="text-align:center;height:400px;background:red;">
                交车时间占比
            </Col>
            <Col span="12" style="height:400px;background:blue;">
                <h3>   </h3>
            </Col>
        </Row>
        <br/>
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
            <Col span="12" style="text-align:center;height:400px;background:red;">
                维修工序超时统计
            </Col>
            <Col span="12" style="height:400px;background:blue;text-align:center;">
                <h3>维修工序超时</h3>
            </Col>
        </Row>
        <h4>工序维修市场(循环12个月)</h4>
        <Row>
            <Col span="24" style="height:400px;background:#f3f3f3;">
            
            </Col>
        </Row>
    </div>
</template>
<script>
export default {
  name: "CompanyCountShichang",
  data() {
    return {
      cityList: [
        {
          value: "最近七天",
          label: "最近七天"
        },
        {
          value: "最近30天",
          label: "最近30天"
        },
        {
          value: "自定义",
          label: "自定义"
        }
      ],
      model1: ""
    };
  }
};
</script>