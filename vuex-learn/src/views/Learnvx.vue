<template>
    <div>
        <h1>{{count_vuex}}</h1>
     <actionsvx></actionsvx>
    </div>
</template>

<script>
    import Actionsvx from '@/components/Actionsvx';
    export default {
        name: "Learnvx",
        components:{
            Actionsvx
        },
        computed:{
            count_vuex() {
                // return this.$store.state.count_vuex
                return this.$store.getters.computedCounterVuex
            }
        },

        watch: {
            count_vuex: function(){
                return console.log(this.count_vuex)
            }
        }
    }
</script>

<style scoped>

</style>