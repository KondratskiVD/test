<template>
    <div class="car p-3">
        <p>top component</p>
        <h3>Name: {{carName}} | computed: {{reverseName}}</h3>
        <p>Year: {{carYear}}</p>
        <button @click="changeName">change</button>
        <button @click="changeFunc()">change from Top</button>
        <button @click="updateNumber">change bottom number</button>
    </div>
</template>

<script>
    import {eventEmitter} from "../../main";

    export default {
        props: ['carName', 'carYear', 'changeFunc'],// название входящего параметра который поступит в этот компонент
        name: "middle",
        methods: {
            changeName(){
                this.carName = 'new name from middle'
                this.$emit('nameChange', this.carName)
            },
            updateNumber(){
                // this.$emit('numberUpdated', this.number++)
                eventEmitter.$emit('numberUpdated')
            }
        },
        computed: {
            reverseName(){
                return this.carName.split('').reverse().join('')
            }
        }
    }
</script>

<style>
    .car{
        border: 1px solid black;
    }
</style>