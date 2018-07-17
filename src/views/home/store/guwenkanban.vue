<style lang="less" scoped>
    
</style>
<template>
    <div class="container">
        
        <Row>
            <Col span="4">
                <CarListBox :active="carItemsActive">
                    <GuWenCarItem />
                    <GuWenCarItem />
                    <GuWenCarItem />
                    <GuWenCarItem />
                    <GuWenCarItem />
                    <GuWenCarItem />
                    <GuWenCarItem />
                </CarListBox>
            </Col>
            <Col span="4"></Col>
        </Row>
    </div>
</template>
<script>
    import CarListBox from '../../../components/carListBox.vue';
    import GuWenCarItem from '../../../components/guwenCarItem';
    export default {
        name: 'GuWenKanBan',
        components: {
            CarListBox,
            GuWenCarItem
        },
        data(){
            return {
                carItems: [],
                carItemsActive: true
            }
        },
        created(){
            setTimeout(()=>{
                this.carItemsActive = false;
            }, 3000);
            setTimeout(()=>{
                this.carItemsActive = true;
            }, 8000);
        }
    };
</script>