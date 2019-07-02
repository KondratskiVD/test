<template>
    <div>
            <input
                    type="text"
                    class="form-control mb-3"
                    v-model="search"
                    placeholder="Search..."
            >

        <div class="row top_block">
            <div class="col">
            </div>
            <div class="col">
                <p>Last</p>
            </div>
            <div class="col">
                <p>First</p>
            </div>
            <div class="col">
                <p>UserName</p>
            </div>
            <div class="col">
                <p>Phone</p>
            </div>
            <div class="col">
                <p>Location</p>
            </div>
            <div class="col">
            </div>
        </div>
        <div class="row container_of_user" v-bind:class="{'light': index%2 === 0}"  v-for="(user, index) in filterUser">
            <div class="col">
                <img class="mini_logo" v-bind:src="user.picture.thumbnail" alt="">
            </div>
            <div class="col">
                <p>{{user.name.last}}</p>
            </div>
            <div class="col">
                <p>{{user.name.first}}</p>
            </div>
            <div class="col">
                <p>{{user.login.username}}</p>
            </div>
            <div class="col">
                <p>{{user.phone}}</p>
            </div>
            <div class="col">
                <p>{{user.location.city}}</p>
            </div>
            <div class="col">
                <a href="#" @click="showInfo(index)">
                    <i v-if="selectIndex === index" class="fa fa-minus fa-2x" aria-hidden="true"></i>
                    <i v-else class="fa fa-plus  fa-2x" aria-hidden="true"></i>
                </a>
            </div>
            <div class="w-100"></div>
            <div class="collapse col" v-bind:class="{'show': selectIndex === index}" id="collapseExample">
                <div class="card card-body">
                    <div class="">
                        <div class="col">
                            <h2>{{user.name.first}}
                            <i v-if="user.gender === 'female'" class="fa fa-female" aria-hidden="true"></i>
                            <i v-else class="fa fa-male" aria-hidden="true"></i></h2>
                        </div>
                        <div class="row block_more_info">
                            <div class="col">
                                <ul>
                                    <li><b>Username: </b>{{user.login.username}}</li>
                                    <li><b>Registered: </b>{{user.registered.data}}</li>
                                    <li><b>Email: </b>{{user.email}}</li>
                                </ul>
                            </div>
                            <div class="col">
                                <ul>
                                    <li><b>Adress: </b>{{user.location.street}}</li>
                                    <li><b>City: </b>{{user.location.city}}</li>
                                    <li><b>Zip code: </b>{{user.location.postcode}}</li>
                                </ul>
                            </div>
                            <div class="col">
                                <ul>
                                    <li><b>Birthday: </b>{{user.dob.date}}</li>
                                    <li><b>Phone: </b>{{user.phone}}</li>
                                    <li><b>Cell: </b>{{user.cell}}</li>
                                </ul>
                            </div>
                            <div class="col">
                                <img class="big_logo" v-bind:src="user.picture.large" alt="">
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                users: [],
                selectIndex: 0,
                search: ''
            };
        },
        async mounted() {
            const res = await fetch('https://randomuser.me/api/?results=3')
            const info = await res.json();
            this.users = info.results

        },
        methods: {
            showInfo: function(index){
                if(this.selectIndex != index){this.selectIndex = index}
                else{this.selectIndex = -1}

            }
        },
        computed: {
            filterUser(){
                var self = this;
                const filtered = this.users.filter(function(item){
                    return item.name.first.indexOf(self.search) > -1
                });
                return filtered
            }
        }
    }
</script>

<style scoped>
    .light{
        background: #d6d6d6;
    }
    .card-body{
        background: inherit;
        border: none;
    }
    img{
        border-radius: 50%;
        border: solid 4px #fff;
    }
    .fa-plus, .fa-minus {
        color: #8f8f8f;
        padding-top: 15px;
    }
    li{
        list-style-type: none;
        font-size: 12px;
    }
    h2{
        padding-left: 22px;
    }
    .top_block{
        font-weight: bold;
    }
    .container_of_user .col p{
        padding-top: 15px;
    }
</style>