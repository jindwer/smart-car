<style lang="less" scoped>
    .line {
        width: 40%;
        height: 3px;
        /*background-color:red;*/
        float: left;
        margin-top: 9px;
    }

    .lineBackgroundPass {
        background-color: red;
    }

    .lineBackgroundFail {
        background-color: #cbcac6;
    }

    .ball {
        width: 20%;
        height: 17px;
        border-radius: 30px;
        float: left;
        margin-top: 2px;
        color: white;
        text-align: center;
        line-height: 17px;
    }

    .ballBackgroundPass {
        background-color: red;
    }

    .ballBackgroundFail {
        background-color: #cbcac6;
    }
</style>
<template>
    <div>
        <div v-if="typeof item.plan == 'undefined'" :title="item.name">
            {{item.name}}
        </div>
        <div v-else :title="item.name" style="width: 100%;">
            <div :class="[index != 3 && (item.plan == 1 ? 'lineBackgroundPass' : 'lineBackgroundFail') ,'line']"></div>
            <div :class="[item.plan == 1 ? 'ballBackgroundPass' : 'ballBackgroundFail' ,'ball']">{{item.name}}</div>
            <div v-if="index != dataList.title.length - 2"
                 :class="[item.plan == 1 ? 'lineBackgroundPass' : 'lineBackgroundFail','line']"></div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'jckbDataItem',
        data() {
            return {
                username: '李涛'
            }
        },
        props: [
            'item', 'index', 'dataList'
        ],
        methods: {}
    };
</script>
