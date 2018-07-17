<style lang="less">
    .carlistbox{
        padding: 5px 10px;
        overflow-y: auto;
    }
</style>
<template>
    <div class="carlistbox" :style="{height: boxHeight+'px'}" @mouseenter="endTimer" @mouseleave="startTimer" @click.stop="$emit('click')">
        <div class="carlistbox-body">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'CarListBox',
        props: ['active'],
        data(){
            return {
                boxHeight: 400,
                bodyHeight: 0,
                timer: null,
                nextScrollY: 0,
                scrollYCount: 0,
                step: 50
            }
        },
        watch: {
            'active'(newVal){
                newVal ? this.startTimer() : this.endTimer();
            }
        },
        mounted(){
            const winHeight = window.innerHeight;
            const $elTop = this.$el.getBoundingClientRect().top;
            this.boxHeight = winHeight - $elTop;
            this.bodyHeight = this.$el.firstElementChild.getBoundingClientRect().height;
            this.scrollYCount = this.bodyHeight - this.boxHeight;
            this.startTimer();
        },
        methods: {
            startTimer(){
                if(!this.timer && this.scrollYCount > 0){
                    this.timer = setInterval(()=>{
                        this.nextScrollY = this.$el.scrollTop;
                        this.nextScrollY += this.step;
                        if(this.step > 0){
                            if(this.nextScrollY > this.scrollYCount){
                                this.nextScrollY = this.scrollYCount;
                                this.step = -this.step;
                            }
                        }else{
                            if(this.nextScrollY < 0){
                                this.nextScrollY = 0;
                                this.step = -this.step;
                            }
                        }
                        this.$el.scrollTo(0, this.nextScrollY);
                    }, 1000);
                }
            },
            endTimer(){
                if(this.timer){
                    clearInterval(this.timer)
                    this.timer = null;
                }
            }
        }
    }
</script>

