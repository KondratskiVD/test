<template>
    <div >
        <h1>Top: {{parentName}}</h1>
        <bottom></bottom>
        <middle
                :carName="parentName"
                :carYear="parentYear"
                @nameChange="parentName = $event"
                :changeFunc="changeNameAudi"
                @numberUpdated="number = $event"
        ></middle>
    </div>
</template>

<script>
    import middle from '@/views/middle/middle.vue'
    import bottom from '@/views/middle/bottom/bottom.vue'
    export default {
        name: "Top",
        data(){
            return{
                parentName: 'From Top',
                parentYear: 2019
            }
        },
        methods:{
            changeNameAudi(){
                this.parentName = 'Audi'
            }
        },
        components:{
            middle,
            bottom
        }
    }
</script>

<style scoped>

</style>