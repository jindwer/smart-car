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
            <Col span="24">
                饼状图
            </Col>
        </Row>
    </div>
</template>
<script>
export default {
  name: "CompanyAnalyzeLeixing",
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