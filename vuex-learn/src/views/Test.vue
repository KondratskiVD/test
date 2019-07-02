<template>
    <div>
        <div class="row">
            <div class="col-6">
                <h1>{{counter}} | {{title}}</h1>
                <button class="btn btn-dark mr-2" v-on:click="adding(5, '+5', $event)">Увеличить на 5</button>
                <button class="btn btn-light" v-on:click="adding(10, '+10', $event)">Увеличить на 10</button>
            </div>
            <div class="col-6">
                <h1>{{adding_computed}}</h1>
            </div>
        </div>
        <div class="circle mt-3"
             @click="isActive = !isActive"
             :class="{'red': !isActive, 'blue': isActive}"
        ></div>

        <h1 v-if="listItem === 'a'"><span class="badge badge-secondary" >You printe a</span></h1>
        <h1 v-else-if="listItem === 'b'"><span class="badge badge-secondary" >You printe b</span></h1>
        <h1 v-else><span class="badge badge-secondary" >Undefine</span></h1>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text">Print a or b</span>
            </div>
        <input class="form-control" type="text" v-model="listItem">
        </div>
        <hr>
        <ul ref="list" class="list-group">
            <li class="list-group-item" v-for="(value, key, index) in person">{{index +1}}. {{key}} - {{value}}</li>
        </ul>
    </div>

</template>

<script>
    export default {
        name: "Test",
        data() {
            return {
                counter: 0,
                counter_computed: 'больше 50',
                title: 0,
                isActive: false,
                listItem: '',
                person: {
                    name: 'Vlad',
                    age: '25',
                    job: 'web dev'
                }
            };
        },
        methods: {
            adding(number, size, e){
                this.counter+= number
                this.title = size
                if(number === 5){
                    e.target.style.color = 'red'
                    this.$refs.list.style.color = '#ccc' // according - document.querySelector('ul')
                }
                else if(number === 10){
                    e.target.style.color = 'red'
                    this.$refs.list.style.color = '#333'
                }

            }
        },
        computed: {
            adding_computed: function(){
                return this.counter > 50 ? this.counter_computed : 'меньше 51'
            }
        },
        watch: {
            counter: function(){
                console.log(this.counter)
            }
        }
    }
</script>

<style>
    .circle{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: solid 1px black;
    }
    .red{
        background: red;
    }
    .blue{
        background: blue;
    }
    li{
        list-style-type: none;
    }
</style>