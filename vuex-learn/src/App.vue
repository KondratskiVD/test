<template>
  <div id="app">
    <div class="container container_users" >
      <div class="btn-group mb-3" role="group" aria-label="Basic example">
        <router-link class="btn btn-secondary" to="/">Home |</router-link>
        <router-link class="btn btn-secondary" to="/test">| Test |</router-link>
        <router-link class="btn btn-secondary" to="/learnvx">| Learn Vuex |</router-link>
        <router-link class="btn btn-secondary" to="/car">| Car |</router-link>
        <router-link class="btn btn-secondary" to="/ajax">| Ajax |</router-link>
        <router-link class="btn btn-secondary" to="/top">| Props </router-link>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'app',
  }
</script>

<style>

  .container_users{
    background: #ebebeb;
    padding: 35px;
  }
</style>
