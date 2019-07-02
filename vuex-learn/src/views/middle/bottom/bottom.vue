<template>
    <h1>Counter {{ number }}</h1>
</template>

<script>
    import {eventEmitter} from "../../../main";

    export default {
        name: "bottom",
        data(){
            return{
                number: 0
            }
        },
        created() {
            eventEmitter.$on('numberUpdated', ()=> {
                this.number++
            })
        }
    }
</script>

<style scoped>

</style>