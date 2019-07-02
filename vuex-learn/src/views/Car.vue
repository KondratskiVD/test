<template>
    <div>
        <h1>{{getCar}}</h1>
        <h2>{{ carModel }}</h2>
        <car-info
                :carYear="year"
                :carModel="model"
                :changing="model = $event"
        ></car-info>
    </div>
</template>

<script>
    import CarInfo from '@/components/CarInfo'
    export default {
        name: "Car",
        data(){
            return{
                year: 2019,
                model: 'Mustang'
            }
        },
        computed: {
            getCar(){
                return this.$store.state.counter.carName
            },
        },
        components:{
            CarInfo
        }

    }
</script>

<style scoped>

</style>