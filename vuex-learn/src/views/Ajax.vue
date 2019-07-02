<template>
    <div class="container">
        <h5>{{ textGet }}</h5>
        <button @click="loadData">LOAD</button>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "ajax",
        data(){
            return{
                textGet: null,
                error: null
            }
        },
        methods: {
            loadData(){
                axios.get('https://api.chucknorris.io/jokes/random')
                    .then(response => {
                        this.textGet = response.data.value;
                    }).catch(e =>{
                        this.error.push(e)
                })
            }
        }
    }
</script>

<style scoped>

</style>