<template>
    <div>
        <h2>{{carYear}} : {{carModel}}</h2>
        <p>{{reverseModel}}</p>
        <button @click="changeModel">ckick</button>
    </div>
</template>

<script>
    export default {
        name: "CarInfo",
        props: ['carYear', 'carModel'],
        methods:{
            changeModel(){
                this.carModel = 'Mazda'
                this.$emit('changing', this.carModel)
            }
        },
        computed: {
            reverseModel(){
                return this.carModel.split('').reverse().join('')
            }
        }
    }
</script>

<style scoped>

</style>