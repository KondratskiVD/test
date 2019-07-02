<template>
    <div>
        <button @click="updateCounterVuex(+1)">add</button>
        <button @click="updateCounterVuex(-1)">sub</button>
    </div>
</template>

<script>
    export default {
        name: "Actionsvx",
        methods: {
            updateCounterVuex(val){
                // this.$store.state.count_vuex += val - получение данных из state
                // this.$store.commit('changeCounterVuex', val)  изменение данных state через mutation
                this.$store.dispatch('asyncChangeCounterVuex', {
                    countValue: val,
                    timeoutDelay: 1000
                }) // изменение данных через actions
            }
        }
    }
</script>

<style scoped>

</style>