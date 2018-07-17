<style lang="less">
    .guwenitem{
        cursor: pointer;
        margin-bottom: 5px;
        .ivu-card-head,.ivu-card-body{
            padding: 8px;
        }
    }
    .guwenitem-header{
        overflow: hidden;
        span:first-child{
            float: left;
        }
        span:last-child{
            float: right;
        }
    }
    .guwenitem-body{
        position: relative;
        .car-tag-box{
            position: absolute;
            top: 0;
            right: 0;
            list-style: none;
            .car-tag-item{
                color: #fff;
                background-color: #f90;
                padding: 1px;
                border-radius: 3px;
                margin-bottom: 3px;
            }
        }
    }
</style>
<template>
    <Card class="guwenitem">
        <div slot="title" class="guwenitem-header">
            <span>京Q.wx893892</span>
            <span>奔腾</span>
        </div>
        <div class="guwenitem-body">
            <ul class="car-tag-box">
               <li class="car-tag-item">快修</li>
            </ul>
            <p>钣金拆解</p>
            <p>技师: 张明</p>
            <p>接车时间: 05-25 12:01</p>
            <p>交车时间: 05-28 12:00</p>
            <p>备注: </p>
        </div>
    </Card>
</template>
<script>
    export default {
        name: 'GuWenCarItem'
    }
</script>

